import type { Pluggable } from "@smithy/types";

/**
 * @internal
 */
export const getRecursionDetectionPlugin = (options: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {},
});
