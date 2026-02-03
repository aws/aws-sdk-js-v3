import { HttpRequest, HttpResponse } from "@smithy/protocol-http";
import type {
  DeserializeHandler,
  DeserializeHandlerArguments,
  HandlerExecutionContext,
  Logger,
  MiddlewareStack,
} from "@smithy/types";
import { headStream } from "@smithy/util-stream";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

/**
 * FOR DEBUG USE ONLY.
 * Attaching these debug loggers will degrade performance since body streams may need to be read twice.
 *
 * When given as a string,
 * Including "line" will turn on method, statusCode, client, command, URL logging.
 * Including "header" will turn on request and response header logging.
 * Including "body" will turn on response body logging.
 * Including "formatted" will turn on response body logging with formatting.
 *
 * @public
 */
export type HttpDebugLoggingOptions =
  | string
  | {
      request?: {
        /**
         * The client name.
         */
        client?: boolean;
        /**
         * The command name.
         */
        command?: boolean;
        /**
         * HTTP request method.
         */
        method?: boolean;
        /**
         * HTTP request URL.
         */
        url?: boolean;
        /**
         * HTTP request headers.
         */
        headers?: boolean;
        /**
         * HTTP request payload/body.
         */
        body?: boolean;
        /**
         * Attempt to format body (JSON, XML supported).
         */
        formatBody?: boolean | "json" | "xml";
      };
      response?: {
        /**
         * HTTP response status code.
         */
        statusCode?: boolean;
        /**
         * HTTP response headers.
         */
        headers?: boolean;
        /**
         * HTTP body in utf-8.
         * Does not work for HTTP2 and will be unreadable for BLOB payloads.
         */
        body?: boolean;
        /**
         * Attempt to format body (JSON, XML supported).
         */
        formatBody?: boolean | "json" | "xml";
      };
      logger?: Logger;
    };

/**
 * FOR DEBUG USE ONLY.
 * Attaching these debug loggers will degrade performance since body streams may need to be read twice.
 *
 * @public
 *
 * @param options - what to log.
 */
export function getHttpDebugLogPlugin(options: HttpDebugLoggingOptions = {}) {
  const optionsObject: Required<Exclude<HttpDebugLoggingOptions, string>> = {
    request: {},
    response: {},
    logger: console,
  };
  if (typeof options === "string") {
    const [line, header, body, formatted] = [
      options.includes("line"),
      options.includes("header"),
      options.includes("body"),
      options.includes("formatted"),
    ];
    if (line || header || body || formatted) {
      optionsObject.request.command = true;
      optionsObject.request.client = true;
      optionsObject.request.url = true;
      optionsObject.request.method = true;
      optionsObject.response.statusCode = true;
    }
    if (header) {
      optionsObject.request.headers = true;
      optionsObject.response.headers = true;
    }
    if (body || formatted) {
      optionsObject.request.body = true;
      optionsObject.response.body = true;
    }
    if (formatted) {
      optionsObject.request.formatBody = true;
      optionsObject.response.formatBody = true;
    }
  } else {
    Object.assign(optionsObject, options);
  }

  return {
    applyToStack: (middlewareStack: MiddlewareStack<any, any>) => {
      middlewareStack.addRelativeTo(
        (next: DeserializeHandler<any, any>, context: HandlerExecutionContext) =>
          async (args: DeserializeHandlerArguments<any>) => {
            let result: any = undefined;
            let error: unknown = undefined;
            let request: HttpRequest | unknown = undefined;
            let response: HttpResponse | unknown;

            try {
              result = await next(args);
              request = args.request;
              response = result.response;
            } catch (e) {
              error = e;
              response = e.$response;
              if (response && e.$responseBodyText) {
                (response as HttpResponse).body = fromUtf8(e.$responseBodyText);
              }
            }

            if (HttpRequest.isInstance(request) && HttpResponse.isInstance(response)) {
              const logger = optionsObject.logger;
              const line: string[] = [];
              if (optionsObject.response.statusCode) {
                line.push(String(response.statusCode));
              }
              if (optionsObject.request.method) {
                line.push(request.method);
              }
              const { clientName = "UnknownClient", commandName = "UnknownCommand" } = context;
              if (optionsObject.request.client) {
                line.push(clientName);
              }
              if (optionsObject.request.command) {
                line.push(commandName);
              }
              logger.debug(line.join(" "));
              const indentation = line.length ? 4 : 0;

              if (optionsObject.request.url) {
                let auth = "";
                if (request.username != null || request.password != null) {
                  const username = request.username ?? "";
                  const password = "***";
                  auth = `${username}:${password}@`;
                }

                const { port, path } = request;
                const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
                logger.debug(indent(indentation, url));
                if (Object.keys(request.query).length) {
                  logger.debug(indent(4, ">> Request URL queryParams: " + JSON.stringify(request.query, null, 2)));
                }
              }
              if (optionsObject.request.headers) {
                const headers = {
                  ...request.headers,
                };
                for (const key in headers) {
                  if (key.toLowerCase().match(/security|-token/)) {
                    headers[key] = "***";
                  }
                  if (key.toLowerCase() === "authorization") {
                    let value = "***";
                    if (headers[key].match(/Credential=[A-Z0-9]+/)) {
                      value = headers[key]
                        .replace(/Credential=[A-Z0-9\w]+/, "Credential=***")
                        .replace(/Signature=\w+/, "Signature=***");
                    }
                    headers[key] = value;
                  }
                }
                logger.debug(indent(indentation, ">>== Request Headers: " + JSON.stringify(headers, null, 2)));
              }
              if (optionsObject.request.body) {
                const body = await (async () => {
                  if (typeof request.body === "string") {
                    return fromUtf8(request.body);
                  }
                  try {
                    return await headStream(request.body, Infinity);
                  } catch (e) {
                    return fromUtf8(request.body ? String(request.body) : "");
                  }
                })();
                const text = format(body, optionsObject.request.formatBody);
                logger.debug(indent(indentation, `>>>=== Request Body Start ======`));
                logger.debug(indent(indentation, text));
                logger.debug(indent(indentation, `>>>=== Request Body End ======`));
                request.body = body;
              }

              if (optionsObject.response.headers) {
                logger.debug(
                  indent(indentation, "<<== Response Headers: " + JSON.stringify(response.headers, null, 2))
                );
              }
              if (optionsObject.response.body) {
                const bodyBytes = await headStream(response.body, Infinity);
                const text = format(bodyBytes, optionsObject.response.formatBody);
                logger.debug(indent(indentation, `<<<=== Response Body Start ======`));
                logger.debug(indent(indentation, text));
                logger.debug(indent(indentation, `<<<=== Response Body End ======`));
                response.body = bodyBytes;
              }
            }

            if (error) {
              throw error;
            }
            return result;
          },
        {
          toMiddleware: "deserializerMiddleware",
          relation: "after",
          name: "httpDebugLogMiddleware",
          override: true,
        }
      );
    },
  };
}

/**
 * @internal
 */
function format(str: string | Uint8Array, format: boolean | "json" | "xml" = false): string {
  if (!str) {
    return "";
  }
  let text = "";
  try {
    text = toUtf8(str);
    if (format === true || format === "json") {
      try {
        text = JSON.stringify(JSON.parse(text), null, 2);
      } catch (e) {
        // ignore error, text is not JSON.
      }
    }
    if (format === true || format === "xml") {
      try {
        if (text.startsWith("<?xml")) {
          text = simpleFormatXml(text);
        }
      } catch (e) {
        // ignore error, text is not XML.
      }
    }
  } catch (e) {
    text = `Failed to read bytes to utf-8: ${String(e)}`;
  }
  return text;
}

/**
 * @internal
 */
function indent(spaces: number, str: string): string {
  const indentation = "\n" + " ".repeat(spaces);
  return " ".repeat(spaces) + str.split("\n").join(indentation);
}

/**
 * Ok, parsing XML without an XML parsing library
 * is one of the classic mistakes of software development.
 *
 * However, this is for optional debug printing purposes only, and
 * we do not want to take an additional XML dependency
 * for that.
 *
 * @internal
 */
function simpleFormatXml(xml: string): string {
  let b = "";
  let indentation = 0;
  for (let i = 0; i < xml.length; ++i) {
    const c = xml[i];

    if (c === "<") {
      if (xml[i + 1] === "/") {
        b += "\n" + " ".repeat(indentation - 2) + c;
        indentation -= 4;
      } else {
        b += c;
      }
    } else if (c === ">") {
      indentation += 2;
      b += c + "\n" + " ".repeat(indentation);
    } else {
      b += c;
    }
  }
  return b
    .split("\n")
    .filter((s) => !!s.trim())
    .join("\n");
}
