import { Pluggable } from "@smithy/types";

import { EventStreamResolvedConfig } from "./eventStreamConfiguration";
import { eventStreamHandlingMiddleware, eventStreamHandlingMiddlewareOptions } from "./eventStreamHandlingMiddleware";
import { eventStreamHeaderMiddleware, eventStreamHeaderMiddlewareOptions } from "./eventStreamHeaderMiddleware";

export const getEventStreamPlugin = (options: EventStreamResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(eventStreamHandlingMiddleware(options), eventStreamHandlingMiddlewareOptions);
    clientStack.add(eventStreamHeaderMiddleware, eventStreamHeaderMiddlewareOptions);
  },
});
