export { NODE_USE_ARN_REGION_CONFIG_OPTIONS } from "@aws-sdk/middleware-sdk-s3/s3";
export {
  resolveS3ControlConfig,
  parseOutpostArnablesMiddleaware,
  parseOutpostArnablesMiddleawareOptions,
  updateArnablesRequestMiddleware,
  updateArnablesRequestMiddlewareOptions,
  getProcessArnablesPlugin,
  hostPrefixDeduplicationMiddleware,
  hostPrefixDeduplicationMiddlewareOptions,
  getHostPrefixDeduplicationPlugin,
  redirectFromPostIdMiddleware,
  redirectFromPostIdMiddlewareOptions,
  getRedirectFromPostIdPlugin,
} from "@aws-sdk/middleware-sdk-s3/s3-control";
export type {
  S3ControlInputConfig,
  S3ControlResolvedConfig,
  RedirectFromPostIdMiddlewareConfig,
} from "@aws-sdk/middleware-sdk-s3/s3-control";
