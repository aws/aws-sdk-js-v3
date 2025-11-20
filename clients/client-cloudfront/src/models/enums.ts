// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ResponseHeadersPolicyAccessControlAllowMethodsValues = {
  ALL: "ALL",
  DELETE: "DELETE",
  GET: "GET",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type ResponseHeadersPolicyAccessControlAllowMethodsValues =
  (typeof ResponseHeadersPolicyAccessControlAllowMethodsValues)[keyof typeof ResponseHeadersPolicyAccessControlAllowMethodsValues];

/**
 * @public
 * @enum
 */
export const ICPRecordalStatus = {
  APPROVED: "APPROVED",
  PENDING: "PENDING",
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type ICPRecordalStatus = (typeof ICPRecordalStatus)[keyof typeof ICPRecordalStatus];

/**
 * @public
 * @enum
 */
export const Method = {
  DELETE: "DELETE",
  GET: "GET",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type Method = (typeof Method)[keyof typeof Method];

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  DualStack: "dualstack",
  Ipv4: "ipv4",
  Ipv6: "ipv6",
} as const;
/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const IpamCidrStatus = {
  Advertised: "advertised",
  Advertising: "advertising",
  Deprovisioned: "deprovisioned",
  Deprovisioning: "deprovisioning",
  FailedAdvertise: "failed-advertise",
  FailedDeprovision: "failed-deprovision",
  FailedProvision: "failed-provision",
  FailedWithdraw: "failed-withdraw",
  Provisioned: "provisioned",
  Provisioning: "provisioning",
  Withdrawing: "withdrawing",
  Withdrawn: "withdrawn",
} as const;
/**
 * @public
 */
export type IpamCidrStatus = (typeof IpamCidrStatus)[keyof typeof IpamCidrStatus];

/**
 * @public
 * @enum
 */
export const ItemSelection = {
  all: "all",
  none: "none",
  whitelist: "whitelist",
} as const;
/**
 * @public
 */
export type ItemSelection = (typeof ItemSelection)[keyof typeof ItemSelection];

/**
 * @public
 * @enum
 */
export const EventType = {
  origin_request: "origin-request",
  origin_response: "origin-response",
  viewer_request: "viewer-request",
  viewer_response: "viewer-response",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const ViewerProtocolPolicy = {
  allow_all: "allow-all",
  https_only: "https-only",
  redirect_to_https: "redirect-to-https",
} as const;
/**
 * @public
 */
export type ViewerProtocolPolicy = (typeof ViewerProtocolPolicy)[keyof typeof ViewerProtocolPolicy];

/**
 * @public
 * @enum
 */
export const CachePolicyCookieBehavior = {
  all: "all",
  allExcept: "allExcept",
  none: "none",
  whitelist: "whitelist",
} as const;
/**
 * @public
 */
export type CachePolicyCookieBehavior = (typeof CachePolicyCookieBehavior)[keyof typeof CachePolicyCookieBehavior];

/**
 * @public
 * @enum
 */
export const CachePolicyHeaderBehavior = {
  none: "none",
  whitelist: "whitelist",
} as const;
/**
 * @public
 */
export type CachePolicyHeaderBehavior = (typeof CachePolicyHeaderBehavior)[keyof typeof CachePolicyHeaderBehavior];

/**
 * @public
 * @enum
 */
export const CachePolicyQueryStringBehavior = {
  all: "all",
  allExcept: "allExcept",
  none: "none",
  whitelist: "whitelist",
} as const;
/**
 * @public
 */
export type CachePolicyQueryStringBehavior =
  (typeof CachePolicyQueryStringBehavior)[keyof typeof CachePolicyQueryStringBehavior];

/**
 * @public
 * @enum
 */
export const CachePolicyType = {
  custom: "custom",
  managed: "managed",
} as const;
/**
 * @public
 */
export type CachePolicyType = (typeof CachePolicyType)[keyof typeof CachePolicyType];

/**
 * @public
 * @enum
 */
export const CertificateSource = {
  acm: "acm",
  cloudfront: "cloudfront",
  iam: "iam",
} as const;
/**
 * @public
 */
export type CertificateSource = (typeof CertificateSource)[keyof typeof CertificateSource];

/**
 * @public
 * @enum
 */
export const CertificateTransparencyLoggingPreference = {
  Disabled: "disabled",
  Enabled: "enabled",
} as const;
/**
 * @public
 */
export type CertificateTransparencyLoggingPreference =
  (typeof CertificateTransparencyLoggingPreference)[keyof typeof CertificateTransparencyLoggingPreference];

/**
 * @public
 * @enum
 */
export const ConnectionMode = {
  Direct: "direct",
  TenantOnly: "tenant-only",
} as const;
/**
 * @public
 */
export type ConnectionMode = (typeof ConnectionMode)[keyof typeof ConnectionMode];

/**
 * @public
 * @enum
 */
export const HttpVersion = {
  http1_1: "http1.1",
  http2: "http2",
  http2and3: "http2and3",
  http3: "http3",
} as const;
/**
 * @public
 */
export type HttpVersion = (typeof HttpVersion)[keyof typeof HttpVersion];

/**
 * @public
 * @enum
 */
export const OriginGroupSelectionCriteria = {
  Default: "default",
  MediaQualityBased: "media-quality-based",
} as const;
/**
 * @public
 */
export type OriginGroupSelectionCriteria =
  (typeof OriginGroupSelectionCriteria)[keyof typeof OriginGroupSelectionCriteria];

/**
 * @public
 * @enum
 */
export const OriginProtocolPolicy = {
  http_only: "http-only",
  https_only: "https-only",
  match_viewer: "match-viewer",
} as const;
/**
 * @public
 */
export type OriginProtocolPolicy = (typeof OriginProtocolPolicy)[keyof typeof OriginProtocolPolicy];

/**
 * @public
 * @enum
 */
export const SslProtocol = {
  SSLv3: "SSLv3",
  TLSv1: "TLSv1",
  TLSv1_1: "TLSv1.1",
  TLSv1_2: "TLSv1.2",
} as const;
/**
 * @public
 */
export type SslProtocol = (typeof SslProtocol)[keyof typeof SslProtocol];

/**
 * @public
 * @enum
 */
export const PriceClass = {
  None: "None",
  PriceClass_100: "PriceClass_100",
  PriceClass_200: "PriceClass_200",
  PriceClass_All: "PriceClass_All",
} as const;
/**
 * @public
 */
export type PriceClass = (typeof PriceClass)[keyof typeof PriceClass];

/**
 * @public
 * @enum
 */
export const GeoRestrictionType = {
  blacklist: "blacklist",
  none: "none",
  whitelist: "whitelist",
} as const;
/**
 * @public
 */
export type GeoRestrictionType = (typeof GeoRestrictionType)[keyof typeof GeoRestrictionType];

/**
 * @public
 * @enum
 */
export const MinimumProtocolVersion = {
  SSLv3: "SSLv3",
  TLSv1: "TLSv1",
  TLSv1_1_2016: "TLSv1.1_2016",
  TLSv1_2016: "TLSv1_2016",
  TLSv1_2_2018: "TLSv1.2_2018",
  TLSv1_2_2019: "TLSv1.2_2019",
  TLSv1_2_2021: "TLSv1.2_2021",
  TLSv1_2_2025: "TLSv1.2_2025",
  TLSv1_3_2025: "TLSv1.3_2025",
} as const;
/**
 * @public
 */
export type MinimumProtocolVersion = (typeof MinimumProtocolVersion)[keyof typeof MinimumProtocolVersion];

/**
 * @public
 * @enum
 */
export const SSLSupportMethod = {
  sni_only: "sni-only",
  static_ip: "static-ip",
  vip: "vip",
} as const;
/**
 * @public
 */
export type SSLSupportMethod = (typeof SSLSupportMethod)[keyof typeof SSLSupportMethod];

/**
 * @public
 * @enum
 */
export const ContinuousDeploymentPolicyType = {
  SingleHeader: "SingleHeader",
  SingleWeight: "SingleWeight",
} as const;
/**
 * @public
 */
export type ContinuousDeploymentPolicyType =
  (typeof ContinuousDeploymentPolicyType)[keyof typeof ContinuousDeploymentPolicyType];

/**
 * @public
 * @enum
 */
export const CustomizationActionType = {
  disable: "disable",
  override: "override",
} as const;
/**
 * @public
 */
export type CustomizationActionType = (typeof CustomizationActionType)[keyof typeof CustomizationActionType];

/**
 * @public
 * @enum
 */
export const ValidationTokenHost = {
  CloudFront: "cloudfront",
  SelfHosted: "self-hosted",
} as const;
/**
 * @public
 */
export type ValidationTokenHost = (typeof ValidationTokenHost)[keyof typeof ValidationTokenHost];

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  Active: "active",
  Inactive: "inactive",
} as const;
/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 * @enum
 */
export const Format = {
  URLEncoded: "URLEncoded",
} as const;
/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const FunctionRuntime = {
  cloudfront_js_1_0: "cloudfront-js-1.0",
  cloudfront_js_2_0: "cloudfront-js-2.0",
} as const;
/**
 * @public
 */
export type FunctionRuntime = (typeof FunctionRuntime)[keyof typeof FunctionRuntime];

/**
 * @public
 * @enum
 */
export const FunctionStage = {
  DEVELOPMENT: "DEVELOPMENT",
  LIVE: "LIVE",
} as const;
/**
 * @public
 */
export type FunctionStage = (typeof FunctionStage)[keyof typeof FunctionStage];

/**
 * @public
 * @enum
 */
export const ImportSourceType = {
  S3: "S3",
} as const;
/**
 * @public
 */
export type ImportSourceType = (typeof ImportSourceType)[keyof typeof ImportSourceType];

/**
 * @public
 * @enum
 */
export const RealtimeMetricsSubscriptionStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type RealtimeMetricsSubscriptionStatus =
  (typeof RealtimeMetricsSubscriptionStatus)[keyof typeof RealtimeMetricsSubscriptionStatus];

/**
 * @public
 * @enum
 */
export const OriginAccessControlOriginTypes = {
  lambda: "lambda",
  mediapackagev2: "mediapackagev2",
  mediastore: "mediastore",
  s3: "s3",
} as const;
/**
 * @public
 */
export type OriginAccessControlOriginTypes =
  (typeof OriginAccessControlOriginTypes)[keyof typeof OriginAccessControlOriginTypes];

/**
 * @public
 * @enum
 */
export const OriginAccessControlSigningBehaviors = {
  always: "always",
  never: "never",
  no_override: "no-override",
} as const;
/**
 * @public
 */
export type OriginAccessControlSigningBehaviors =
  (typeof OriginAccessControlSigningBehaviors)[keyof typeof OriginAccessControlSigningBehaviors];

/**
 * @public
 * @enum
 */
export const OriginAccessControlSigningProtocols = {
  sigv4: "sigv4",
} as const;
/**
 * @public
 */
export type OriginAccessControlSigningProtocols =
  (typeof OriginAccessControlSigningProtocols)[keyof typeof OriginAccessControlSigningProtocols];

/**
 * @public
 * @enum
 */
export const OriginRequestPolicyCookieBehavior = {
  all: "all",
  allExcept: "allExcept",
  none: "none",
  whitelist: "whitelist",
} as const;
/**
 * @public
 */
export type OriginRequestPolicyCookieBehavior =
  (typeof OriginRequestPolicyCookieBehavior)[keyof typeof OriginRequestPolicyCookieBehavior];

/**
 * @public
 * @enum
 */
export const OriginRequestPolicyHeaderBehavior = {
  allExcept: "allExcept",
  allViewer: "allViewer",
  allViewerAndWhitelistCloudFront: "allViewerAndWhitelistCloudFront",
  none: "none",
  whitelist: "whitelist",
} as const;
/**
 * @public
 */
export type OriginRequestPolicyHeaderBehavior =
  (typeof OriginRequestPolicyHeaderBehavior)[keyof typeof OriginRequestPolicyHeaderBehavior];

/**
 * @public
 * @enum
 */
export const OriginRequestPolicyQueryStringBehavior = {
  all: "all",
  allExcept: "allExcept",
  none: "none",
  whitelist: "whitelist",
} as const;
/**
 * @public
 */
export type OriginRequestPolicyQueryStringBehavior =
  (typeof OriginRequestPolicyQueryStringBehavior)[keyof typeof OriginRequestPolicyQueryStringBehavior];

/**
 * @public
 * @enum
 */
export const FrameOptionsList = {
  DENY: "DENY",
  SAMEORIGIN: "SAMEORIGIN",
} as const;
/**
 * @public
 */
export type FrameOptionsList = (typeof FrameOptionsList)[keyof typeof FrameOptionsList];

/**
 * @public
 * @enum
 */
export const ReferrerPolicyList = {
  no_referrer: "no-referrer",
  no_referrer_when_downgrade: "no-referrer-when-downgrade",
  origin: "origin",
  origin_when_cross_origin: "origin-when-cross-origin",
  same_origin: "same-origin",
  strict_origin: "strict-origin",
  strict_origin_when_cross_origin: "strict-origin-when-cross-origin",
  unsafe_url: "unsafe-url",
} as const;
/**
 * @public
 */
export type ReferrerPolicyList = (typeof ReferrerPolicyList)[keyof typeof ReferrerPolicyList];

/**
 * @public
 * @enum
 */
export const ManagedCertificateStatus = {
  Expired: "expired",
  Failed: "failed",
  Inactive: "inactive",
  Issued: "issued",
  PendingValidation: "pending-validation",
  Revoked: "revoked",
  ValidationTimedOut: "validation-timed-out",
} as const;
/**
 * @public
 */
export type ManagedCertificateStatus = (typeof ManagedCertificateStatus)[keyof typeof ManagedCertificateStatus];

/**
 * @public
 * @enum
 */
export const DistributionResourceType = {
  Distribution: "distribution",
  DistributionTenant: "distribution-tenant",
} as const;
/**
 * @public
 */
export type DistributionResourceType = (typeof DistributionResourceType)[keyof typeof DistributionResourceType];

/**
 * @public
 * @enum
 */
export const OriginRequestPolicyType = {
  custom: "custom",
  managed: "managed",
} as const;
/**
 * @public
 */
export type OriginRequestPolicyType = (typeof OriginRequestPolicyType)[keyof typeof OriginRequestPolicyType];

/**
 * @public
 * @enum
 */
export const ResponseHeadersPolicyType = {
  custom: "custom",
  managed: "managed",
} as const;
/**
 * @public
 */
export type ResponseHeadersPolicyType = (typeof ResponseHeadersPolicyType)[keyof typeof ResponseHeadersPolicyType];

/**
 * @public
 * @enum
 */
export const DnsConfigurationStatus = {
  Invalid: "invalid-configuration",
  Unknown: "unknown-configuration",
  Valid: "valid-configuration",
} as const;
/**
 * @public
 */
export type DnsConfigurationStatus = (typeof DnsConfigurationStatus)[keyof typeof DnsConfigurationStatus];
