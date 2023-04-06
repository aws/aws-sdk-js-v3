import { Pluggable, RequestHandler } from "@aws-sdk/types";

import { websocketPortMiddleware, websocketPortMiddlewareOptions } from "./middleware-port";

interface PreviouslyResolved {
  requestHandler: RequestHandler<any, any>;
}

/**
 * @internal
 */
export const getRekognitionStreamingPlugin = (config: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(websocketPortMiddleware(config), websocketPortMiddlewareOptions);
  },
});
