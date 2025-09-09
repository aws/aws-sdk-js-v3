import { Pluggable } from "@smithy/types";

import { recursionDetectionMiddlewareOptions } from "./configuration";
import { recursionDetectionMiddleware } from "./recursionDetectionMiddleware";

/**
 * @internal
 */
export const getRecursionDetectionPlugin = (options: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(recursionDetectionMiddleware(), recursionDetectionMiddlewareOptions);
  },
});
