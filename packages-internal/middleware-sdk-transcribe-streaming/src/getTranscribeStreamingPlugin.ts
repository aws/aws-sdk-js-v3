import { Pluggable, RequestHandler } from "@smithy/types";

import {
  injectResponseValuesMiddleware,
  injectResponseValuesMiddlewareOptions,
} from "./middleware-inject-response-values";
import { websocketPortMiddleware, websocketPortMiddlewareOptions } from "./middleware-port";

interface PreviouslyResolved {
  requestHandler: RequestHandler<any, any>;
}

export const getTranscribeStreamingPlugin = (config: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(websocketPortMiddleware(config), websocketPortMiddlewareOptions);
    clientStack.add(injectResponseValuesMiddleware(config), injectResponseValuesMiddlewareOptions);
  },
});
