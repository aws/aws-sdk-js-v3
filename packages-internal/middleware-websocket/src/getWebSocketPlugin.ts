import { Pluggable, RequestHandler } from "@smithy/types";

import { injectSessionIdMiddleware, injectSessionIdMiddlewareOptions } from "./middleware-session-id";
import { websocketEndpointMiddleware, websocketEndpointMiddlewareOptions } from "./middleware-websocket-endpoint";

interface WebSocketResolvedConfig {
  requestHandler: RequestHandler<any, any>;
}

export const getWebSocketPlugin = (
  config: WebSocketResolvedConfig,
  options: { headerPrefix: string }
): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(websocketEndpointMiddleware(config, options), websocketEndpointMiddlewareOptions);
    clientStack.add(injectSessionIdMiddleware(), injectSessionIdMiddlewareOptions);
  },
});
