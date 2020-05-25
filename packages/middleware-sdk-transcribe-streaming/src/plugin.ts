import { Pluggable } from "@aws-sdk/types";
import {
  websocketURLMiddleware,
  websocketURLMiddlewareOptions
} from "./middleware-endpoint";
import {
  injectSessionIdMiddleware,
  injectSessionIdMiddlewareOptions
} from "./middleware-session-id";
import { WebSocketResolvedConfig } from "./configuration";

export const getWebSocketPlugin = (
  config: WebSocketResolvedConfig
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.addRelativeTo(
      websocketURLMiddleware(config),
      websocketURLMiddlewareOptions
    );
    clientStack.add(
      injectSessionIdMiddleware(config),
      injectSessionIdMiddlewareOptions
    );
  }
});
