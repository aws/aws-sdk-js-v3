import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildMiddleware,
  RelativeMiddlewareOptions,
  RequestHandler,
} from "@aws-sdk/types";

/**
 * Middleware that generates WebSocket URL to TranscribeStreaming service
 * Reference: https://docs.aws.amazon.com/transcribe/latest/dg/websocket.html
 */
export const websocketURLMiddleware = (options: {
  requestHandler: RequestHandler<any, any>;
}): BuildMiddleware<any, any> => (next: BuildHandler<any, any>) => (args: BuildHandlerArguments<any>) => {
  const { request } = args;
  if (HttpRequest.isInstance(request) && options.requestHandler.metadata?.handlerProtocol === "websocket") {
    // Update http/2 endpoint to WebSocket-specific endpoint.
    request.protocol = "wss:";
    // Append port to hostname because it needs to be signed together
    request.hostname = `${request.hostname}:8443`;
    request.path = `${request.path}-websocket`;
    request.method = "GET";

    // Move headers to query string. Because the signature is generated with
    // headers moved to query, the endpoint url needs to tally with the signature.
    const { headers } = request;

    // 'Content-Type' and 'x-amz-content-sha256' headers are normally set for
    // event stream, but WebSocket doesn't require it.
    // See: 'eventStreamHeaderMiddleware' in @aws-sdk/middleware-eventstream
    delete headers["Content-Type"];
    delete headers["x-amz-content-sha256"];

    // Serialized header like 'x-amzn-transcribe-sample-rate' should be 'sample-rate'
    // in WebSocket URL.
    for (const name of Object.keys(headers)) {
      if (name.indexOf("x-amzn-transcribe-") === 0) {
        const chunkedName = name.replace("x-amzn-transcribe-", "");
        request.query[chunkedName] = headers[name];
      }
    }

    // The service perfers Node.js style 'user-agent' over browser-style
    // 'x-amz-user-agent'
    if (headers["x-amz-user-agent"]) {
      request.query["user-agent"] = headers["x-amz-user-agent"];
    }
    // Host header is required for signing
    request.headers = { host: request.hostname };
  }
  return next(args);
};

export const websocketURLMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "websocketURLMiddleware",
  tags: ["WEBSOCKET", "EVENT_STREAM"],
  relation: "after",
  toMiddleware: "eventStreamHeaderMiddleware",
  override: true,
};
