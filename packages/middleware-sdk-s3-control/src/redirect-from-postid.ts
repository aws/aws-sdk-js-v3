import { HttpRequest } from "@smithy/protocol-http";
import { BuildHandlerOptions, BuildMiddleware, Pluggable, Provider } from "@smithy/types";

import { S3ControlResolvedConfig } from "./configurations";
import { CONTEXT_SIGNING_SERVICE } from "./constants";
import { getOutpostEndpoint } from "./process-arnables-plugin";

type InputType = {
  OutpostId?: string;
};

export interface RedirectFromPostIdMiddlewareConfig {
  isCustomEndpoint?: boolean;
  useFipsEndpoint: Provider<boolean>;
}

/**
 * If OutpostId is set, redirect hostname to Outpost one, and change signing service to `s3-outposts`.
 * Applied to S3Control.CreateBucket and S3Control.ListRegionalBuckets
 */
export const redirectFromPostIdMiddleware =
  (config: RedirectFromPostIdMiddlewareConfig): BuildMiddleware<InputType, any> =>
  (next, context) =>
  async (args) => {
    const { input, request } = args;
    if (!HttpRequest.isInstance(request)) return next(args);
    if (input.OutpostId) {
      const { isCustomEndpoint } = config;
      const useFipsEndpoint = await config.useFipsEndpoint();
      request.hostname = getOutpostEndpoint(request.hostname, { isCustomEndpoint, useFipsEndpoint });
      context[CONTEXT_SIGNING_SERVICE] = "s3-outposts";
    }
    return next(args);
  };

export const redirectFromPostIdMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  name: "redirectFromPostIdMiddleware",
  tags: ["OUTPOST"],
  override: true,
};

export const getRedirectFromPostIdPlugin = (options: S3ControlResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(redirectFromPostIdMiddleware(options), redirectFromPostIdMiddlewareOptions);
  },
});
