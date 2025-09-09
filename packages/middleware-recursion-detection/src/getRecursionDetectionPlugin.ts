import { Pluggable } from "@smithy/types";

import { PreviouslyResolved } from "./configuration";
import { recursionDetectionMiddleware, recursionDetectionMiddlewareOptions } from "./recursionDetectionMiddleware";

// @internal
/**
 * @internal
 */

export const getRecursionDetectionPlugin = (options: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(recursionDetectionMiddleware(options), recursionDetectionMiddlewareOptions);
  },
});
