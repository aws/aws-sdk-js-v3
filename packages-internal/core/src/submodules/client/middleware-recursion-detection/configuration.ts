import type { AbsoluteLocation, BuildHandlerOptions } from "@smithy/types";

/**
 * Used in conjunction with Lambda invoke store.
 * @internal
 */
export const recursionDetectionMiddlewareOptions: BuildHandlerOptions & AbsoluteLocation = {
  step: "build",
  tags: ["RECURSION_DETECTION", "TRACE_CONTEXT_PROPAGATION"],
  name: "recursionDetectionMiddleware",
  override: true,
  priority: "low",
};
