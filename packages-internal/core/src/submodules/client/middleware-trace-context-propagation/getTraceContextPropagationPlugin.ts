import type { Pluggable } from "@smithy/types";

import { traceContextPropagationMiddlewareOptions } from "./configuration";
import { traceContextPropagationMiddleware } from "./traceContextPropagationMiddleware";

/**
 * @internal
 */
export const getTraceContextPropagationPlugin = (options: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(traceContextPropagationMiddleware(), traceContextPropagationMiddlewareOptions);
  },
});
