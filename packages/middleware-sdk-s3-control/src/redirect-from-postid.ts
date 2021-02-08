import { HttpRequest } from "@aws-sdk/protocol-http";
import { BuildHandlerOptions, BuildMiddleware, Pluggable } from "@aws-sdk/types";

import { S3ControlResolvedConfig } from "./configurations";
import { CONTEXT_SIGNING_SERVICE } from "./constants";
import { getOutpostEndpoint } from "./process-arnables-plugin";

type InputType = {
  OutpostId?: string;
};

/**
 * If OutpostId is set, redirect hostname to Outpost one, and change signing service to `s3-outposts`.
 * Applied to S3Control.CreateBucket and S3Control.ListRegionalBuckets
 */
export const redirectFromPostIdMiddleware = ({
  isCustomEndpoint,
}: {
  isCustomEndpoint: boolean;
}): BuildMiddleware<InputType, any> => (next, context) => (args) => {
  const { input, request } = args;
  if (!HttpRequest.isInstance(request)) return next(args);
  if (input.OutpostId) {
    request.hostname = getOutpostEndpoint(request.hostname, { isCustomEndpoint });
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
