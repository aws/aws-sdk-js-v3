import type { Pluggable, RequestHandler } from "@smithy/types";

import {
  websocketEndpointMiddleware,
  websocketEndpointMiddlewareOptions,
} from "./middlewares/websocketEndpointMiddleware";
import {
  injectSessionIdMiddleware,
  injectSessionIdMiddlewareOptions,
} from "./middlewares/websocketInjectSessionIdMiddleware";

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
