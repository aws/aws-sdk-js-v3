import { HttpRequest } from "@aws-sdk/protocol-http";
import { BuildHandlerOptions, BuildMiddleware } from "@aws-sdk/types";

import { S3ControlResolvedConfig } from "../configurations";
import { CONTEXT_ACCOUNT_ID, CONTEXT_ARN_REGION, CONTEXT_OUTPOST_ID } from "../constants";

const ACCOUNT_ID_HEADER = "x-amz-account-id";
const OUTPOST_ID_HEADER = "x-amz-outpost-id";
const REGEX_S3CONTROL_HOSTNAME = /^(.+\.)?s3-control[.-]([a-z0-9-]+)\./;

/**
 * After outpost request is constructed, redirect request to outpost endpoint and set `x-amz-account-id` and
 * `x-amz-outpost-id` headers.
 */
export const updateArnablesRequestMiddleware = ({
  isCustomEndpoint,
}: {
  isCustomEndpoint: boolean;
}): BuildMiddleware<any, any> => (next, context) => (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request)) return next(args);
  if (context[CONTEXT_ACCOUNT_ID]) request.headers[ACCOUNT_ID_HEADER] = context[CONTEXT_ACCOUNT_ID];
  if (context[CONTEXT_OUTPOST_ID]) {
    request.headers[OUTPOST_ID_HEADER] = context[CONTEXT_OUTPOST_ID];
    request.hostname = getOutpostEndpoint(request.hostname, {
      isCustomEndpoint,
      regionOverride: context[CONTEXT_ARN_REGION],
    });
  }
  return next(args);
};

export const getOutpostEndpoint = (
  hostname: string,
  { isCustomEndpoint, regionOverride }: { isCustomEndpoint?: boolean; regionOverride?: string } = {}
): string => {
  const [matched, prefix, region] = hostname.match(REGEX_S3CONTROL_HOSTNAME)!;
  // hostname prefix will be ignored even if presents
  return isCustomEndpoint
    ? hostname
    : ["s3-outposts", regionOverride || region, hostname.replace(new RegExp(`^${matched}`), "")]
        .filter((part) => part !== undefined)
        .join(".");
};

export const updateArnablesRequestMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  name: "updateArnablesRequestMiddleware",
  tags: ["ACCOUNT_ID", "OUTPOST_ID", "OUTPOST"],
};
