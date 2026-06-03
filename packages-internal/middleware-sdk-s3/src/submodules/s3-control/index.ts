export type { S3ControlInputConfig, S3ControlResolvedConfig } from "./configurations";
export { resolveS3ControlConfig } from "./configurations";

export { getProcessArnablesPlugin } from "./middleware-process-arnables/getProcessArnablesPlugin";
export {
  parseOutpostArnablesMiddleaware,
  parseOutpostArnablesMiddleawareOptions,
} from "./middleware-process-arnables/parse-outpost-arnables";
export {
  updateArnablesRequestMiddleware,
  updateArnablesRequestMiddlewareOptions,
} from "./middleware-process-arnables/update-arnables-request";
export { getOutpostEndpoint } from "./middleware-process-arnables/getOutpostEndpoint";

export {
  hostPrefixDeduplicationMiddleware,
  hostPrefixDeduplicationMiddlewareOptions,
  getHostPrefixDeduplicationPlugin,
} from "./middleware-host-prefix-deduplication/hostPrefixDeduplicationMiddleware";

export type { RedirectFromPostIdMiddlewareConfig } from "./middleware-redirect-from-postid/redirect-from-postid";
export {
  redirectFromPostIdMiddleware,
  redirectFromPostIdMiddlewareOptions,
  getRedirectFromPostIdPlugin,
} from "./middleware-redirect-from-postid/redirect-from-postid";
