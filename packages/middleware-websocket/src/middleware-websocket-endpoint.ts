import { HttpRequest } from "@smithy/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildMiddleware,
  RelativeMiddlewareOptions,
  RequestHandler,
} from "@smithy/types";

/**
 * Middleware that modify the request to from http to WebSocket
 * This middleware can only be applied to commands that supports bi-directional event streaming via WebSocket.
 * Example of headerPrefix is "x-amz-rekognition-streaming-liveness-*" prefix exists for all rekognition streaming
 * websocket API's headers. The common prefix are to be removed when moving them from headers to querystring.
 */
export const websocketEndpointMiddleware =
  (
    config: { requestHandler: RequestHandler<any, any> },
    options: { headerPrefix: string }
  ): BuildMiddleware<any, any> =>
  (next: BuildHandler<any, any>) =>
  (args: BuildHandlerArguments<any>) => {
    const { request } = args;
    if (
      HttpRequest.isInstance(request) &&
      config.requestHandler.metadata?.handlerProtocol?.toLowerCase().includes("websocket")
    ) {
      // Update http/2 endpoint to WebSocket-specific endpoint.
      request.protocol = "wss:";
      request.method = "GET";

      request.path = `${request.path}-websocket`;
      // Move headers to query string. Because the signature is generated with
      // headers moved to query, the endpoint url needs to tally with the signature.
      const { headers } = request;

      // 'Content-Type' and 'x-amz-content-sha256' headers are normally set for
      // event stream, but WebSocket doesn't require it.
      // See: 'eventStreamHeaderMiddleware' in @aws-sdk/middleware-eventstream
      delete headers["Content-Type"];
      delete headers["x-amz-content-sha256"];

      for (const name of Object.keys(headers)) {
        if (name.indexOf(options.headerPrefix) === 0) {
          const chunkedName = name.replace(options.headerPrefix, "");
          request.query[chunkedName] = headers[name];
        }
      }

      // The service perfers Node.js style 'user-agent' over browser-style
      // 'x-amz-user-agent'
      if (headers["x-amz-user-agent"]) {
        request.query["user-agent"] = headers["x-amz-user-agent"];
      }
      // Host header is required for signing
      request.headers = { host: headers.host ?? request.hostname };
    }
    return next(args);
  };

export const websocketEndpointMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "websocketEndpointMiddleware",
  tags: ["WEBSOCKET", "EVENT_STREAM"],
  relation: "after",
  toMiddleware: "eventStreamHeaderMiddleware",
  override: true,
};
