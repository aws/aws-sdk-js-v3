import type { Pluggable } from "@smithy/types";

/**
 * @internal
 */
export const getTraceContextPropagationPlugin = (options: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {},
});
