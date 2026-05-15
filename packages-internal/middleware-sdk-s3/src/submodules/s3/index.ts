// middleware-check-content-length-header
export {
  checkContentLengthHeader,
  checkContentLengthHeaderMiddlewareOptions,
  getCheckContentLengthHeaderPlugin,
} from "./middleware-check-content-length-header/check-content-length-header";

// middleware-region-redirect
export {
  regionRedirectEndpointMiddleware,
  regionRedirectEndpointMiddlewareOptions,
} from "./middleware-region-redirect/region-redirect-endpoint-middleware";
export {
  regionRedirectMiddleware,
  regionRedirectMiddlewareOptions,
  getRegionRedirectMiddlewarePlugin,
} from "./middleware-region-redirect/region-redirect-middleware";
export type { PreviouslyResolved } from "./middleware-region-redirect/region-redirect-middleware";

// middleware-s3-configuration
export type { S3InputConfig, S3ResolvedConfig } from "./middleware-s3-configuration/s3Configuration";
export { resolveS3Config } from "./middleware-s3-configuration/s3Configuration";

// middleware-s3-expires
export {
  s3ExpiresMiddleware,
  s3ExpiresMiddlewareOptions,
  getS3ExpiresMiddlewarePlugin,
} from "./middleware-s3-expires/s3-expires-middleware";

// middleware-s3-express
export { S3ExpressIdentityCache } from "./middleware-s3-express/classes/S3ExpressIdentityCache";
export { S3ExpressIdentityCacheEntry } from "./middleware-s3-express/classes/S3ExpressIdentityCacheEntry";
export { S3ExpressIdentityProviderImpl } from "./middleware-s3-express/classes/S3ExpressIdentityProviderImpl";
export { SignatureV4S3Express } from "./middleware-s3-express/classes/SignatureV4S3Express";
export { NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS } from "./middleware-s3-express/constants";
export {
  getS3ExpressPlugin,
  s3ExpressMiddleware,
  s3ExpressMiddlewareOptions,
} from "./middleware-s3-express/functions/s3ExpressMiddleware";
export {
  getS3ExpressHttpSigningPlugin,
  s3ExpressHttpSigningMiddleware,
  s3ExpressHttpSigningMiddlewareOptions,
} from "./middleware-s3-express/functions/s3ExpressHttpSigningMiddleware";
export type { S3ExpressIdentity } from "./middleware-s3-express/interfaces/S3ExpressIdentity";
export type { S3ExpressIdentityProvider } from "./middleware-s3-express/interfaces/S3ExpressIdentityProvider";

// middleware-throw-200-exceptions
export {
  throw200ExceptionsMiddleware,
  throw200ExceptionsMiddlewareOptions,
  getThrow200ExceptionsPlugin,
} from "./middleware-throw-200-exceptions/throw-200-exceptions";

// middleware-validate-bucket-name
export {
  validateBucketNameMiddleware,
  validateBucketNameMiddlewareOptions,
  getValidateBucketNamePlugin,
} from "./middleware-validate-bucket-name/validate-bucket-name";

// protocol
export { S3RestXmlProtocol } from "./protocol/S3RestXmlProtocol";

// NodeDisableMultiregionAccessPointConfigOptions
export {
  NODE_DISABLE_MULTIREGION_ACCESS_POINT_CONFIG_OPTIONS,
  NODE_DISABLE_MULTIREGION_ACCESS_POINT_ENV_NAME,
  NODE_DISABLE_MULTIREGION_ACCESS_POINT_INI_NAME,
} from "./NodeDisableMultiregionAccessPointConfigOptions";

// NodeUseArnRegionConfigOptions
export {
  NODE_USE_ARN_REGION_CONFIG_OPTIONS,
  NODE_USE_ARN_REGION_ENV_NAME,
  NODE_USE_ARN_REGION_INI_NAME,
} from "./NodeUseArnRegionConfigOptions";

// middleware-bucket-endpoint
export {
  bucketEndpointMiddleware,
  bucketEndpointMiddlewareOptions,
  getBucketEndpointPlugin,
} from "./middleware-bucket-endpoint/bucketEndpointMiddleware";
export type { BucketHostname } from "./middleware-bucket-endpoint/bucketHostname";
export { bucketHostname } from "./middleware-bucket-endpoint/bucketHostname";
export type {
  BucketEndpointInputConfig,
  BucketEndpointResolvedConfig,
} from "./middleware-bucket-endpoint/configurations";
export { resolveBucketEndpointConfig } from "./middleware-bucket-endpoint/configurations";
export {
  getArnResources,
  getSuffixForArnEndpoint,
  validateOutpostService,
  validatePartition,
  validateAccountId,
  validateRegion,
  validateDNSHostLabel,
  validateNoDualstack,
  validateNoFIPS,
} from "./middleware-bucket-endpoint/bucketHostnameUtils";

// middleware-expect-continue
export {
  addExpectContinueMiddleware,
  addExpectContinueMiddlewareOptions,
  getAddExpectContinuePlugin,
} from "./middleware-expect-continue/middleware-expect-continue";

// middleware-location-constraint
export {
  locationConstraintMiddleware,
  locationConstraintMiddlewareOptions,
  getLocationConstraintPlugin,
} from "./middleware-location-constraint/middleware-location-constraint";
export type {
  LocationConstraintInputConfig,
  LocationConstraintResolvedConfig,
} from "./middleware-location-constraint/configuration";
export { resolveLocationConstraintConfig } from "./middleware-location-constraint/configuration";

// middleware-ssec
export {
  ssecMiddleware,
  ssecMiddlewareOptions,
  getSsecPlugin,
  isValidBase64EncodedSSECustomerKey,
} from "./middleware-ssec/middleware-ssec";
