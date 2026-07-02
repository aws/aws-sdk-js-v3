import type { AbsoluteLocation, BuildHandlerOptions } from "@smithy/types";

/**
 * @internal
 */
export const traceContextPropagationMiddlewareOptions: BuildHandlerOptions & AbsoluteLocation = {
  step: "build",
  tags: ["TRACE_CONTEXT_PROPAGATION"],
  name: "traceContextPropagationMiddleware",
  override: true,
  priority: "low",
};
