import { Pluggable } from "@smithy/types";

import { recursionDetectionMiddlewareOptions } from "./configuration";
import { recursionDetectionMiddleware } from "./recursionDetectionMiddleware";

// @internal
/**
 * @internal
 */

export const getRecursionDetectionPlugin = (): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(recursionDetectionMiddleware(), recursionDetectionMiddlewareOptions);
  },
});
