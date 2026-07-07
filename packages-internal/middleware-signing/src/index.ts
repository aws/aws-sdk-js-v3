export { resolveAwsAuthConfig, resolveSigV4AuthConfig } from "./awsAuthConfiguration";
export type {
  AwsAuthInputConfig,
  SigV4AuthInputConfig,
  AwsAuthResolvedConfig,
  SigV4AuthResolvedConfig,
} from "./awsAuthConfiguration";
export { awsAuthMiddleware, awsAuthMiddlewareOptions, getAwsAuthPlugin, getSigV4AuthPlugin } from "./awsAuthMiddleware";
