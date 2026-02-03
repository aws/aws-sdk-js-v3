import { AbsoluteLocation, BuildHandlerOptions } from "@smithy/types";

/**
 * @internal
 */
export const recursionDetectionMiddlewareOptions: BuildHandlerOptions & AbsoluteLocation = {
  step: "build",
  tags: ["RECURSION_DETECTION"],
  name: "recursionDetectionMiddleware",
  override: true,
  priority: "low",
};
