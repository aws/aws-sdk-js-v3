import { HttpRequest } from "@smithy/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildMiddleware,
  RelativeMiddlewareOptions,
  RequestHandler,
} from "@smithy/types";

/**
 * Middleware that generates WebSocket URL to TranscribeStreaming service
 * Reference: https://docs.aws.amazon.com/transcribe/latest/dg/websocket.html
 */
export const websocketPortMiddleware =
  (options: { requestHandler: RequestHandler<any, any> }): BuildMiddleware<any, any> =>
  (next: BuildHandler<any, any>) =>
  (args: BuildHandlerArguments<any>) => {
    const { request } = args;
    if (HttpRequest.isInstance(request) && options.requestHandler.metadata?.handlerProtocol?.includes("websocket")) {
      // Append port to hostname because it needs to be signed together
      request.hostname = `${request.hostname}:8443`;
      request.headers.host = request.hostname;
    }
    return next(args);
  };

export const websocketPortMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "websocketPortMiddleware",
  tags: ["WEBSOCKET", "EVENT_STREAM", "PORT"],
  relation: "after",
  toMiddleware: "eventStreamHeaderMiddleware",
  override: true,
};
