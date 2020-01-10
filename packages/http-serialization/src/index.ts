import { reasonPhrases } from "./constants";
import { isArrayBuffer } from "@aws-sdk/is-array-buffer";
import {
  HeaderBag,
  HttpMessage,
  HttpRequest as IHttpRequest,
  HttpResponse as IHttpResponse,
  QueryParameterBag
} from "@aws-sdk/types";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";

/**
 * Parses well-formed HTTP request strings into HTTP request objects.
 *
 * This function was written to facilitate working with wire logs rather than to
 * be part of the critical path of an HTTP stack; it was not designed with
 * performance in mind.
 *
 * @see https://tools.ietf.org/html/rfc7230#section-3
 */
export function parseRequest(serialized: string): IHttpRequest {
  const { startLine, headers, body } = parseMessage(serialized);
  if (startLine.match(/^\S+\s+\S+\s+\S+/)) {
    const [method, target, protocolVersion] = startLine.split(/\s+/, 3);
    const message = new HttpRequest({
      method,
      headers,
      body
    });

    parseTargetIntoMessage(message, target);

    if (!message.hostname && headers["host"]) {
      const matches = headers.host.match(/:(\d+)$/);
      if (matches) {
        message.hostname = headers.host.substr(0, matches.index);
        message.port = parseInt(matches[1], 10);
      } else {
        message.hostname = headers.host;
      }
    }

    return message;
  }

  throw new Error("Invalid request string");
}

/**
 * Parses well-formed HTTP response strings into HTTP response objects.
 *
 * This function was written to facilitate working with wire logs rather than to
 * be part of the critical path of an HTTP stack; it was not designed with
 * performance in mind.
 *
 * @see https://tools.ietf.org/html/rfc7230#section-3
 */
export function parseResponse(serialized: string): IHttpResponse {
  const { startLine, headers, body } = parseMessage(serialized);
  if (startLine.match(/^HTTP\/.* [0-9]{3}( .*|$)/)) {
    const [protocol, statusCode, reasonPhrase] = startLine.split(" ", 3);
    return new HttpResponse({
      headers,
      body,
      statusCode: parseInt(statusCode, 10)
    });
  }

  throw new Error("Invalid response string");
}

/**
 * Formats HTTP requests into well-formed message strings.
 *
 * This function was written to aid in the creation of wire logs rather than to
 * be part of the critical path of an HTTP stack; it was not designed with
 * performance in mind.
 *
 * @see https://tools.ietf.org/html/rfc7230#section-3
 */
export function serializeRequest(request: IHttpRequest): string {
  const startLine = `${request.method} ${request.path} HTTP/1.1`;

  return `${startLine}\r\n${serializeMessage(request)}`;
}

/**
 * Formats HTTP responses into well-formed message strings.
 *
 * This function was written to aid in the creation of wire logs rather than to
 * be part of the critical path of an HTTP stack; it was not designed with
 * performance in mind.
 *
 * @see https://tools.ietf.org/html/rfc7230#section-3
 */
export function serializeResponse(response: IHttpResponse): string {
  const { statusCode } = response;
  const startLine = `HTTP/1.1 ${statusCode} ${reasonPhrases[statusCode]}`;

  return `${startLine}\r\n${serializeMessage(response)}`;
}

interface ParsedMessage {
  startLine: string;
  headers: HeaderBag;
  body?: string;
}

function addHeaderToMessage(message: ParsedMessage, header: [string, string]) {
  const [name, value] = header;
  if (message.headers[name]) {
    message.headers[name] += `,${value}`;
  } else {
    message.headers[name] = value;
  }
}

function parseAuthorityIntoMessage(
  message: IHttpRequest,
  authority: string
): void {
  const [hostname, port] = authority.split(":");
  message.hostname = hostname;
  if (port) {
    message.port = parseInt(port);
  }
}

function parseMessage(serialized: string): ParsedMessage {
  const lines = serialized.split(/(?:\r)?\n/);
  const message: ParsedMessage = {
    startLine: lines.shift() as string,
    headers: {}
  };

  // parse as headers until an empty line is encountered
  let headerBeingParsed: [string, string] | undefined;
  for (let line = lines.shift(); line && line.trim(); line = lines.shift()) {
    if (line.indexOf(":") > -1) {
      // we've encountered a new header definition. Record the previous
      // header if one exists
      if (headerBeingParsed) {
        addHeaderToMessage(message, headerBeingParsed);
      }

      // begin parsing the new header
      const parts = line.split(":");
      headerBeingParsed = [
        parts[0].toLowerCase().trim(),
        parts
          .slice(1)
          .join(":")
          .trim()
      ];
    } else if (headerBeingParsed && line.match(/^\s+/)) {
      // this is a continuation of the previous header; remove a single
      // leading whitespace character and append to the previous header
      headerBeingParsed[1] += `,${line.trim()}`;
    } else {
      throw new Error(`Invalid line encountered: ${line}`);
    }
  }

  if (headerBeingParsed) {
    addHeaderToMessage(message, headerBeingParsed);
  }

  if (lines.length > 0) {
    message.body = lines.join("\n");
  }
  return message;
}

function parseQueryString(querystring: string): QueryParameterBag {
  return querystring
    .split("&")
    .reduce((carry: QueryParameterBag, headerPair: string) => {
      const [key, ...valueParts] = headerPair.split("=");
      const value = valueParts.join("=");
      const prevValue = carry[key];
      if (prevValue) {
        if (Array.isArray(prevValue)) {
          prevValue.push(value);
        } else {
          carry[key] = [prevValue, value];
        }
      } else {
        carry[key] = value;
      }

      return carry;
    }, {});
}

/**
 * A regular expression that can decompose a well-formed URI into its
 * constituent parts
 *
 * @see https://tools.ietf.org/html/rfc3986#appendix-B
 */
const requestRegex = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;

/**
 * A target can take one of four forms: an absolute path, an absolute URL, an
 * asterisk (for OPTIONS requests), or an "authority" form (for CONNECT
 * requests) that includes the hostname and port, separated by a colon.
 *
 * @see https://tools.ietf.org/html/rfc7230#section-5.3
 */
function parseTargetIntoMessage(message: IHttpRequest, target: string) {
  if (target === "*") {
    // this is the asterisk form
    message.path = target;
  } else if (target.indexOf("/") === 0) {
    // this is the "origin form" (an absolute path)
    const [path, ...additionalParts] = target.split("?");
    message.path = path;
    if (additionalParts.length) {
      message.query = parseQueryString(additionalParts.join("?"));
    }
  } else if (target.indexOf("//") > -1) {
    // this is an absolute URL
    const matches = target.match(requestRegex) as RegExpMatchArray;

    message.protocol = matches[1];
    parseAuthorityIntoMessage(message, matches[4]);

    message.path = matches[5];
    if (matches[7]) {
      message.query = parseQueryString(matches[7]);
    }
  } else {
    parseAuthorityIntoMessage(message, target);
  }
}

function serializeBody(message: HttpMessage): string {
  if (message.body === undefined) {
    return "";
  }

  if (typeof message.body === "string") {
    return message.body;
  }

  if (ArrayBuffer.isView(message.body) || isArrayBuffer(message.body)) {
    return "[binary payload]";
  }

  return "[streaming payload]";
}

function serializeHeaders(message: HttpMessage): string {
  return Object.keys(message.headers).reduce(
    (carry, key) => carry + `${key}: ${message.headers[key]}\r\n`,
    ""
  );
}

function serializeMessage(message: HttpMessage): string {
  return `${serializeHeaders(message)}\r\n${serializeBody(message)}`;
}
