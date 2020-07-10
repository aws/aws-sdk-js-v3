import { Pluggable } from "@aws-sdk/types";

import { EventStreamResolvedConfig } from "./configuration";
import { eventStreamHandlingMiddleware, eventStreamHandlingMiddlewareOptions } from "./handling-middleware";
import { eventStreamHeaderMiddleware, eventStreamHeaderMiddlewareOptions } from "./headers-middleware";

export const getEventStreamPlugin = (options: EventStreamResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(eventStreamHandlingMiddleware(options), eventStreamHandlingMiddlewareOptions);
    clientStack.add(eventStreamHeaderMiddleware, eventStreamHeaderMiddlewareOptions);
  },
});
