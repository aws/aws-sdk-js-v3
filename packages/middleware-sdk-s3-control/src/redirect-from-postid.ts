import { HttpRequest } from "@aws-sdk/protocol-http";
import { BuildHandlerOptions, BuildMiddleware, Pluggable } from "@aws-sdk/types";

import { S3ControlResolvedConfig } from "./configurations";
import { CONTEXT_SIGNING_SERVICE } from "./constants";
import { replaceHostname } from "./process-arnables-plugin";

type InputType = {
  OutpostId?: string;
};

/**
 * Applied to S3Control.CreateBucket and S3Control.ListRegionalBuckets
 */
export const redirectFromPostIdMiddleware: BuildMiddleware<InputType, any> = (next, context) => (args) => {
  const { input, request } = args;
  if (!HttpRequest.isInstance(request)) return next(args);
  if (input.OutpostId) {
    request.hostname = replaceHostname(request.hostname);
    context[CONTEXT_SIGNING_SERVICE] = "s3-outposts";
  }
  return next(args);
};

export const redirectFromPostIdMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  name: "redirectFromPostIdMiddleware",
  tags: ["OUTPOST"],
};

export const getRedirectFromPostIdPlugin = (options: S3ControlResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(redirectFromPostIdMiddleware, redirectFromPostIdMiddlewareOptions);
  },
});
