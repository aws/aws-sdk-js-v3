// smithy-typescript generated code
import type {
  CachePolicyCookieBehavior,
  CachePolicyHeaderBehavior,
  CachePolicyQueryStringBehavior,
  CachePolicyType,
  CertificateSource,
  CertificateTransparencyLoggingPreference,
  ConnectionMode,
  ContinuousDeploymentPolicyType,
  CustomizationActionType,
  DomainStatus,
  EventType,
  Format,
  FrameOptionsList,
  FunctionRuntime,
  FunctionStage,
  GeoRestrictionType,
  HttpVersion,
  ICPRecordalStatus,
  ImportSourceType,
  IpAddressType,
  IpamCidrStatus,
  ItemSelection,
  Method,
  MinimumProtocolVersion,
  OriginAccessControlOriginTypes,
  OriginAccessControlSigningBehaviors,
  OriginAccessControlSigningProtocols,
  OriginGroupSelectionCriteria,
  OriginProtocolPolicy,
  OriginRequestPolicyCookieBehavior,
  OriginRequestPolicyHeaderBehavior,
  OriginRequestPolicyQueryStringBehavior,
  PriceClass,
  RealtimeMetricsSubscriptionStatus,
  ReferrerPolicyList,
  ResponseHeadersPolicyAccessControlAllowMethodsValues,
  SslProtocol,
  SSLSupportMethod,
  TrustStoreStatus,
  ValidationTokenHost,
  ViewerMtlsMode,
  ViewerProtocolPolicy,
  VpcIpAddressType,
} from "./enums";

/**
 * A list of CloudFront key pair identifiers.
 *
 * @public
 */
export interface KeyPairIds {
  /**
   * The number of key pair identifiers in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list of CloudFront key pair identifiers.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies.
 *
 * @public
 */
export interface KGKeyPairIds {
  /**
   * The identifier of the key group that contains the public keys.
   *
   * @public
   */
  KeyGroupId?: string | undefined;

  /**
   * A list of CloudFront key pair identifiers.
   *
   * @public
   */
  KeyPairIds?: KeyPairIds | undefined;
}

/**
 * A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies.
 *
 * @public
 */
export interface ActiveTrustedKeyGroups {
  /**
   * This field is `true` if any of the key groups have public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies. If not, this field is `false`.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The number of key groups in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list of key groups, including the identifiers of the public keys in each key group that CloudFront can use to verify the signatures of signed URLs and signed cookies.
   *
   * @public
   */
  Items?: KGKeyPairIds[] | undefined;
}

/**
 * A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
 *
 * @public
 */
export interface Signer {
  /**
   * An Amazon Web Services account number that contains active CloudFront key pairs that CloudFront can use to verify the signatures of signed URLs and signed cookies. If the Amazon Web Services account that owns the key pairs is the same account that owns the CloudFront distribution, the value of this field is `self`.
   *
   * @public
   */
  AwsAccountNumber?: string | undefined;

  /**
   * A list of CloudFront key pair identifiers.
   *
   * @public
   */
  KeyPairIds?: KeyPairIds | undefined;
}

/**
 * A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
 *
 * @public
 */
export interface ActiveTrustedSigners {
  /**
   * This field is `true` if any of the Amazon Web Services accounts in the list are configured as trusted signers. If not, this field is `false`.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The number of Amazon Web Services accounts in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list of Amazon Web Services accounts and the identifiers of active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
   *
   * @public
   */
  Items?: Signer[] | undefined;
}

/**
 * A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
 *
 * @public
 */
export interface Aliases {
  /**
   * The number of CNAME aliases, if any, that you want to associate with this distribution.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A complex type that contains the CNAME aliases, if any, that you want to associate with this distribution.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure it yourself.
 *
 * For more information about ICP recordals, see [Signup, Accounts, and Credentials](https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html) in *Getting Started with Amazon Web Services services in China*.
 *
 * @public
 */
export interface AliasICPRecordal {
  /**
   * A domain name associated with a distribution.
   *
   * @public
   */
  CNAME?: string | undefined;

  /**
   * The Internet Content Provider (ICP) recordal status for a CNAME. The ICPRecordalStatus is set to APPROVED for all CNAMEs (aliases) in Amazon Web Services Regions outside of China.
   *
   * The status values returned are the following:
   *
   * - **APPROVED** indicates that the associated CNAME has a valid ICP recordal number. Multiple CNAMEs can be associated with a distribution, and CNAMEs can correspond to different ICP recordals. To be marked as APPROVED, that is, valid to use with the China Regions, a CNAME must have one ICP recordal number associated with it.
   * - **SUSPENDED** indicates that the associated CNAME does not have a valid ICP recordal number.
   * - **PENDING** indicates that CloudFront can't determine the ICP recordal status of the CNAME associated with the distribution because there was an error in trying to determine the status. You can try again to see if the error is resolved in which case CloudFront returns an APPROVED or SUSPENDED status.
   *
   * @public
   */
  ICPRecordalStatus?: ICPRecordalStatus | undefined;
}

/**
 * A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:
 *
 * - CloudFront caches responses to `GET` and `HEAD` requests.
 * - CloudFront caches responses to `GET`, `HEAD`, and `OPTIONS` requests.
 *
 * If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.
 *
 * @public
 */
export interface CachedMethods {
  /**
   * The number of HTTP methods for which you want CloudFront to cache responses. Valid values are `2` (for caching responses to `GET` and `HEAD` requests) and `3` (for caching responses to `GET`, `HEAD`, and `OPTIONS` requests).
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A complex type that contains the HTTP methods that you want CloudFront to cache responses to. Valid values for `CachedMethods` include `GET`, `HEAD`, and `OPTIONS`, depending on which caching option you choose. For more information, see the preceding section.
   *
   * @public
   */
  Items: Method[] | undefined;
}

/**
 * A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:
 *
 * - CloudFront forwards only `GET` and `HEAD` requests.
 * - CloudFront forwards only `GET`, `HEAD`, and `OPTIONS` requests.
 * - CloudFront forwards `GET, HEAD, OPTIONS, PUT, PATCH, POST`, and `DELETE` requests.
 *
 * If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.
 *
 * @public
 */
export interface AllowedMethods {
  /**
   * The number of HTTP methods that you want CloudFront to forward to your origin. Valid values are 2 (for `GET` and `HEAD` requests), 3 (for `GET`, `HEAD`, and `OPTIONS` requests) and 7 (for `GET, HEAD, OPTIONS, PUT, PATCH, POST`, and `DELETE` requests).
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A complex type that contains the HTTP methods that you want CloudFront to process and forward to your origin.
   *
   * @public
   */
  Items: Method[] | undefined;

  /**
   * A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:
   *
   * - CloudFront caches responses to `GET` and `HEAD` requests.
   * - CloudFront caches responses to `GET`, `HEAD`, and `OPTIONS` requests.
   *
   * If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.
   *
   * @public
   */
  CachedMethods?: CachedMethods | undefined;
}

/**
 * Configuration for an IPAM CIDR that defines a specific IP address range, IPAM pool, and associated Anycast IP address.
 *
 * @public
 */
export interface IpamCidrConfig {
  /**
   * The CIDR that specifies the IP address range for this IPAM configuration.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IPAM pool that the CIDR block is assigned to.
   *
   * @public
   */
  IpamPoolArn: string | undefined;

  /**
   * The specified Anycast IP address allocated from the IPAM pool for this CIDR configuration.
   *
   * @public
   */
  AnycastIp?: string | undefined;

  /**
   * The current status of the IPAM CIDR configuration.
   *
   * @public
   */
  Status?: IpamCidrStatus | undefined;
}

/**
 * The configuration IPAM settings that includes the quantity of CIDR configurations and the list of IPAM CIDR configurations.
 *
 * @public
 */
export interface IpamConfig {
  /**
   * The number of IPAM CIDR configurations in the `IpamCidrConfigs` list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list of IPAM CIDR configurations that define the IP address ranges, IPAM pools, and associated Anycast IP addresses.
   *
   * @public
   */
  IpamCidrConfigs: IpamCidrConfig[] | undefined;
}

/**
 * An Anycast static IP list. For more information, see [Request Anycast static IPs to use for allowlisting](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/request-static-ips.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface AnycastIpList {
  /**
   * The ID of the Anycast static IP list.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the Anycast static IP list.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The status of the Anycast static IP list. Valid values: `Deployed`, `Deploying`, or `Failed`.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Anycast static IP list.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The IP address type for the Anycast static IP list.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The IPAM configuration for the Anycast static IP list, that contains the quantity and list of IPAM CIDR configurations.
   *
   * @public
   */
  IpamConfig?: IpamConfig | undefined;

  /**
   * The static IP addresses that are allocated to the Anycast static IP list.
   *
   * @public
   */
  AnycastIps: string[] | undefined;

  /**
   * The number of IP addresses in the Anycast static IP list.
   *
   * @public
   */
  IpCount: number | undefined;

  /**
   * The last time the Anycast static IP list was modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * An abbreviated version of the AnycastIpList structure. Omits the allocated static IP addresses (AnycastIpList$AnycastIps).
 *
 * @public
 */
export interface AnycastIpListSummary {
  /**
   * The ID of the Anycast static IP list.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the Anycast static IP list.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The deployment status of the Anycast static IP list. Valid values: Deployed, Deploying, or Failed.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Anycast static IP list.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The number of IP addresses in the Anycast static IP list.
   *
   * @public
   */
  IpCount: number | undefined;

  /**
   * The last time the Anycast static IP list was modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The IP address type for the Anycast static IP list.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The current version (ETag value) of the Anycast static IP list.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The IPAM configuration for the Anycast static IP list, that contains the quantity and list of IPAM CIDR configurations.
   *
   * @public
   */
  IpamConfig?: IpamConfig | undefined;
}

/**
 * The Anycast static IP list collection.
 *
 * @public
 */
export interface AnycastIpListCollection {
  /**
   * Items in the Anycast static IP list collection. Each item is of the AnycastIpListSummary structure type.
   *
   * @public
   */
  Items?: AnycastIpListSummary[] | undefined;

  /**
   * Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker: string | undefined;

  /**
   * Indicates the next page of the Anycast static IP list collection. To get the next page of the list, use this value in the `Marker` field of your request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of Anycast static IP list collections that you want returned in the response.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * If there are more items in the list collection than are in this response, this value is `true`.
   *
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * The quantity of Anycast static IP lists in the collection.
   *
   * @public
   */
  Quantity: number | undefined;
}

/**
 * @public
 */
export interface AssociateAliasRequest {
  /**
   * The ID of the standard distribution that you're associating the alias with.
   *
   * @public
   */
  TargetDistributionId: string | undefined;

  /**
   * The alias (also known as a CNAME) to add to the target standard distribution.
   *
   * @public
   */
  Alias: string | undefined;
}

/**
 * @public
 */
export interface AssociateDistributionTenantWebACLRequest {
  /**
   * The ID of the distribution tenant.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the WAF web ACL to associate.
   *
   * @public
   */
  WebACLArn: string | undefined;

  /**
   * The current `ETag` of the distribution tenant. This value is returned in the response of the `GetDistributionTenant` API operation.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface AssociateDistributionTenantWebACLResult {
  /**
   * The ID of the distribution tenant.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the WAF web ACL that you associated with the distribution tenant.
   *
   * @public
   */
  WebACLArn?: string | undefined;

  /**
   * The current version of the distribution tenant.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface AssociateDistributionWebACLRequest {
  /**
   * The ID of the distribution.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the WAF web ACL to associate.
   *
   * @public
   */
  WebACLArn: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the distribution that you're associating with the WAF web ACL.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface AssociateDistributionWebACLResult {
  /**
   * The ID of the distribution.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the WAF web ACL that you associated with the distribution.
   *
   * @public
   */
  WebACLArn?: string | undefined;

  /**
   * The current version of the distribution.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The CA certificates bundle location in Amazon S3.
 *
 * @public
 */
export interface CaCertificatesBundleS3Location {
  /**
   * The S3 bucket.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The location's key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The location's Region.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * The location's version.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * A CA certificates bundle source.
 *
 * @public
 */
export type CaCertificatesBundleSource =
  | CaCertificatesBundleSource.CaCertificatesBundleS3LocationMember
  | CaCertificatesBundleSource.$UnknownMember;

/**
 * @public
 */
export namespace CaCertificatesBundleSource {
  /**
   * The CA certificates bundle location in Amazon S3.
   *
   * @public
   */
  export interface CaCertificatesBundleS3LocationMember {
    CaCertificatesBundleS3Location: CaCertificatesBundleS3Location;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    CaCertificatesBundleS3Location?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    CaCertificatesBundleS3Location: (value: CaCertificatesBundleS3Location) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains a list of cookie names.
 *
 * @public
 */
export interface CookieNames {
  /**
   * The number of cookie names in the `Items` list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list of cookie names.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
 *
 * If you want to include cookies in the cache key, use `CookiesConfig` in a cache policy. See `CachePolicy`.
 *
 * If you want to send cookies to the origin but not include them in the cache key, use `CookiesConfig` in an origin request policy. See `OriginRequestPolicy`.
 *
 * A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see [Caching Content Based on Cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface CookiePreference {
  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
   *
   * If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
   *
   * If you want to send cookies to the origin but not include them in the cache key, use origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
   *
   * Specifies which cookies to forward to the origin for this cache behavior: all, none, or the list of cookies specified in the `WhitelistedNames` complex type.
   *
   * Amazon S3 doesn't process cookies. When the cache behavior is forwarding requests to an Amazon S3 origin, specify none for the `Forward` element.
   *
   * @public
   */
  Forward: ItemSelection | undefined;

  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
   *
   * If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
   *
   * If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
   *
   * Required if you specify `whitelist` for the value of `Forward`. A complex type that specifies how many different cookies you want CloudFront to forward to the origin for this cache behavior and, if you want to forward selected cookies, the names of those cookies.
   *
   * If you specify `all` or `none` for the value of `Forward`, omit `WhitelistedNames`. If you change the value of `Forward` from `whitelist` to `all` or `none` and you don't delete the `WhitelistedNames` element and its child elements, CloudFront deletes them automatically.
   *
   * For the current limit on the number of cookie names that you can whitelist for each cache behavior, see [CloudFront Limits](https://docs.aws.amazon.com/general/latest/gr/xrefaws_service_limits.html#limits_cloudfront) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  WhitelistedNames?: CookieNames | undefined;
}

/**
 * Contains a list of HTTP header names.
 *
 * @public
 */
export interface Headers {
  /**
   * The number of header names in the `Items` list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list of HTTP header names.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
 *
 * If you want to include query strings in the cache key, use `QueryStringsConfig` in a cache policy. See `CachePolicy`.
 *
 * If you want to send query strings to the origin but not include them in the cache key, use `QueryStringsConfig` in an origin request policy. See `OriginRequestPolicy`.
 *
 * A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior.
 *
 * @public
 */
export interface QueryStringCacheKeys {
  /**
   * The number of `whitelisted` query string parameters for a cache behavior.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list that contains the query string parameters that you want CloudFront to use as a basis for caching for a cache behavior. If `Quantity` is 0, you can omit `Items`.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
 *
 * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
 *
 * If you want to include values in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
 *
 * If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
 *
 * A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
 *
 * @public
 */
export interface ForwardedValues {
  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
   *
   * If you want to include query strings in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
   *
   * If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
   *
   * Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior and cache based on the query string parameters. CloudFront behavior depends on the value of `QueryString` and on the values that you specify for `QueryStringCacheKeys`, if any:
   *
   * If you specify true for `QueryString` and you don't specify any values for `QueryStringCacheKeys`, CloudFront forwards all query string parameters to the origin and caches based on all query string parameters. Depending on how many query string parameters and values you have, this can adversely affect performance because CloudFront must forward more requests to the origin.
   *
   * If you specify true for `QueryString` and you specify one or more values for `QueryStringCacheKeys`, CloudFront forwards all query string parameters to the origin, but it only caches based on the query string parameters that you specify.
   *
   * If you specify false for `QueryString`, CloudFront doesn't forward any query string parameters to the origin, and doesn't cache based on query string parameters.
   *
   * For more information, see [Configuring CloudFront to Cache Based on Query String Parameters](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  QueryString: boolean | undefined;

  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
   *
   * If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
   *
   * If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
   *
   * A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see [How CloudFront Forwards, Caches, and Logs Cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  Cookies: CookiePreference | undefined;

  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
   *
   * If you want to include headers in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
   *
   * If you want to send headers to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
   *
   * A complex type that specifies the `Headers`, if any, that you want CloudFront to forward to the origin for this cache behavior (whitelisted headers). For the headers that you specify, CloudFront also caches separate versions of a specified object that is based on the header values in viewer requests.
   *
   * For more information, see [Caching Content Based on Request Headers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  Headers?: Headers | undefined;

  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
   *
   * If you want to include query strings in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
   *
   * If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
   *
   * A complex type that contains information about the query string parameters that you want CloudFront to use for caching for this cache behavior.
   *
   * @public
   */
  QueryStringCacheKeys?: QueryStringCacheKeys | undefined;
}

/**
 * A CloudFront function that is associated with a cache behavior in a CloudFront distribution.
 *
 * @public
 */
export interface FunctionAssociation {
  /**
   * The Amazon Resource Name (ARN) of the function.
   *
   * @public
   */
  FunctionARN: string | undefined;

  /**
   * The event type of the function, either `viewer-request` or `viewer-response`. You cannot use origin-facing event types (`origin-request` and `origin-response`) with a CloudFront function.
   *
   * @public
   */
  EventType: EventType | undefined;
}

/**
 * A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. Your functions must be published to the `LIVE` stage to associate them with a cache behavior.
 *
 * @public
 */
export interface FunctionAssociations {
  /**
   * The number of CloudFront functions in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The CloudFront functions that are associated with a cache behavior in a CloudFront distribution. Your functions must be published to the `LIVE` stage to associate them with a cache behavior.
   *
   * @public
   */
  Items?: FunctionAssociation[] | undefined;
}

/**
 * Amazon CloudFront supports gRPC, an open-source remote procedure call (RPC) framework built on HTTP/2. gRPC offers bi-directional streaming and binary protocol that buffers payloads, making it suitable for applications that require low latency communications.
 *
 * To enable your distribution to handle gRPC requests, you must include HTTP/2 as one of the supported `HTTP` versions and allow `HTTP` methods, including `POST`.
 *
 * For more information, see [Using gRPC with CloudFront distributions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-using-grpc.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface GrpcConfig {
  /**
   * Enables your CloudFront distribution to receive gRPC requests and to proxy them directly to your origins.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * A complex type that contains a Lambda@Edge function association.
 *
 * @public
 */
export interface LambdaFunctionAssociation {
  /**
   * The ARN of the Lambda@Edge function. You must specify the ARN of a function version; you can't specify an alias or $LATEST.
   *
   * @public
   */
  LambdaFunctionARN: string | undefined;

  /**
   * Specifies the event type that triggers a Lambda@Edge function invocation. You can specify the following values:
   *
   * - `viewer-request`: The function executes when CloudFront receives a request from a viewer and before it checks to see whether the requested object is in the edge cache.
   * - `origin-request`: The function executes only when CloudFront sends a request to your origin. When the requested object is in the edge cache, the function doesn't execute.
   * - `origin-response`: The function executes after CloudFront receives a response from the origin and before it caches the object in the response. When the requested object is in the edge cache, the function doesn't execute.
   * - `viewer-response`: The function executes before CloudFront returns the requested object to the viewer. The function executes regardless of whether the object was already in the edge cache.
   *
   *   If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute.
   *
   * @public
   */
  EventType: EventType | undefined;

  /**
   * A flag that allows a Lambda@Edge function to have read access to the body content. For more information, see [Accessing the Request Body by Choosing the Include Body Option](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html) in the Amazon CloudFront Developer Guide.
   *
   * @public
   */
  IncludeBody?: boolean | undefined;
}

/**
 * A complex type that specifies a list of Lambda@Edge functions associations for a cache behavior.
 *
 * If you want to invoke one or more Lambda@Edge functions triggered by requests that match the `PathPattern` of the cache behavior, specify the applicable values for `Quantity` and `Items`. Note that there can be up to 4 `LambdaFunctionAssociation` items in this list (one for each possible value of `EventType`) and each `EventType` can be associated with only one function.
 *
 * If you don't want to invoke any Lambda@Edge functions for the requests that match `PathPattern`, specify `0` for `Quantity` and omit `Items`.
 *
 * @public
 */
export interface LambdaFunctionAssociations {
  /**
   * The number of Lambda@Edge function associations for this cache behavior.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * **Optional**: A complex type that contains `LambdaFunctionAssociation` items for this cache behavior. If `Quantity` is `0`, you can omit `Items`.
   *
   * @public
   */
  Items?: LambdaFunctionAssociation[] | undefined;
}

/**
 * A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
 *
 * @public
 */
export interface TrustedKeyGroups {
  /**
   * This field is `true` if any of the key groups in the list have public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies. If not, this field is `false`.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The number of key groups in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list of key groups identifiers.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * A list of Amazon Web Services accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
 *
 * @public
 */
export interface TrustedSigners {
  /**
   * This field is `true` if any of the Amazon Web Services accounts in the list are configured as trusted signers. If not, this field is `false`.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The number of Amazon Web Services accounts in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list of Amazon Web Services account identifiers.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * A complex type that describes how CloudFront processes requests.
 *
 * You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.
 *
 * For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) in the *Amazon CloudFront Developer Guide*.
 *
 * If you don't want to specify any cache behaviors, include only an empty `CacheBehaviors` element. Don't specify an empty individual `CacheBehavior` element, because this is invalid. For more information, see [CacheBehaviors](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CacheBehaviors.html).
 *
 * To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty `CacheBehaviors` element.
 *
 * To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.
 *
 * > **Important:** If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the `Cache-Control: no-cache`, `no-store`, or `private` directives are present in the origin headers.
 *
 * For more information about cache behaviors, see [Cache Behavior Settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface CacheBehavior {
  /**
   * The pattern (for example, `images/*.jpg`) that specifies which requests to apply the behavior to. When CloudFront receives a viewer request, the requested path is compared with path patterns in the order in which cache behaviors are listed in the distribution.
   *
   * > **Note:** You can optionally include a slash (`/`) at the beginning of the path pattern. For example, `/images/*.jpg`. CloudFront behavior is the same with or without the leading `/`.
   *
   * The path pattern for the default cache behavior is `*` and cannot be changed. If the request for an object does not match the path pattern for any cache behaviors, CloudFront applies the behavior in the default cache behavior.
   *
   * For more information, see [Path Pattern](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesPathPattern) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  PathPattern: string | undefined;

  /**
   * The value of `ID` for the origin that you want CloudFront to route requests to when they match this cache behavior.
   *
   * @public
   */
  TargetOriginId: string | undefined;

  /**
   * > **Important:** We recommend using `TrustedKeyGroups` instead of `TrustedSigners`.
   *
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * A list of Amazon Web Services account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.
   *
   * When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in the trusted signer's Amazon Web Services account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  TrustedSigners?: TrustedSigners | undefined;

  /**
   * A list of key groups that CloudFront can use to validate signed URLs or signed cookies.
   *
   * When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  TrustedKeyGroups?: TrustedKeyGroups | undefined;

  /**
   * The protocol that viewers can use to access the files in the origin specified by `TargetOriginId` when a request matches the path pattern in `PathPattern`. You can specify the following options:
   *
   * - `allow-all`: Viewers can use HTTP or HTTPS.
   * - `redirect-to-https`: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.
   * - `https-only`: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).
   *
   * For more information about requiring the HTTPS protocol, see [Requiring HTTPS Between Viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html) in the *Amazon CloudFront Developer Guide*.
   *
   * > **Note:** The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see [Managing Cache Expiration](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  ViewerProtocolPolicy: ViewerProtocolPolicy | undefined;

  /**
   * A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:
   *
   * - CloudFront forwards only `GET` and `HEAD` requests.
   * - CloudFront forwards only `GET`, `HEAD`, and `OPTIONS` requests.
   * - CloudFront forwards `GET, HEAD, OPTIONS, PUT, PATCH, POST`, and `DELETE` requests.
   *
   * If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.
   *
   * @public
   */
  AllowedMethods?: AllowedMethods | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify `true`; if not, specify `false`. If you specify `true` for `SmoothStreaming`, you can still distribute other content using this cache behavior if the content matches the value of `PathPattern`.
   *
   * @public
   */
  SmoothStreaming?: boolean | undefined;

  /**
   * Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify true; if not, specify false. For more information, see [Serving Compressed Files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  Compress?: boolean | undefined;

  /**
   * A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.
   *
   * @public
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociations | undefined;

  /**
   * A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must be published to the `LIVE` stage to associate them with a cache behavior.
   *
   * @public
   */
  FunctionAssociations?: FunctionAssociations | undefined;

  /**
   * The value of `ID` for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for this cache behavior.
   *
   * @public
   */
  FieldLevelEncryptionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see [Real-time logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  RealtimeLogConfigArn?: string | undefined;

  /**
   * The unique identifier of the cache policy that is attached to this cache behavior. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * A `CacheBehavior` must include either a `CachePolicyId` or `ForwardedValues`. We recommend that you use a `CachePolicyId`.
   *
   * @public
   */
  CachePolicyId?: string | undefined;

  /**
   * The unique identifier of the origin request policy that is attached to this cache behavior. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginRequestPolicyId?: string | undefined;

  /**
   * The identifier for a response headers policy.
   *
   * @public
   */
  ResponseHeadersPolicyId?: string | undefined;

  /**
   * The gRPC configuration for your cache behavior.
   *
   * @public
   */
  GrpcConfig?: GrpcConfig | undefined;

  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see [Working with policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * If you want to include values in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * A `CacheBehavior` must include either a `CachePolicyId` or `ForwardedValues`. We recommend that you use a `CachePolicyId`.
   *
   * A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
   *
   * @deprecated deprecated.
   * @public
   */
  ForwardedValues?: ForwardedValues | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * This field is deprecated. We recommend that you use the `MinTTL` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
   *
   * You must specify `0` for `MinTTL` if you configure CloudFront to forward all headers to your origin (under `Headers`, if you specify `1` for `Quantity` and `*` for `Name`).
   *
   * @deprecated deprecated.
   * @public
   */
  MinTTL?: number | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * This field is deprecated. We recommend that you use the `DefaultTTL` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @deprecated deprecated.
   * @public
   */
  DefaultTTL?: number | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * This field is deprecated. We recommend that you use the `MaxTTL` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @deprecated deprecated.
   * @public
   */
  MaxTTL?: number | undefined;
}

/**
 * A complex type that contains zero or more `CacheBehavior` elements.
 *
 * @public
 */
export interface CacheBehaviors {
  /**
   * The number of cache behaviors for this distribution.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * Optional: A complex type that contains cache behaviors for this distribution. If `Quantity` is `0`, you can omit `Items`.
   *
   * @public
   */
  Items?: CacheBehavior[] | undefined;
}

/**
 * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.
 *
 * @public
 */
export interface CachePolicyCookiesConfig {
  /**
   * Determines whether any cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:
   *
   * - `none` – No cookies in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to `none`, any cookies that are listed in an `OriginRequestPolicy` *are* included in origin requests.
   * - `whitelist` – Only the cookies in viewer requests that are listed in the `CookieNames` type are included in the cache key and in requests that CloudFront sends to the origin.
   * - `allExcept` – All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, ***except*** for those that are listed in the `CookieNames` type, which are not included.
   * - `all` – All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.
   *
   * @public
   */
  CookieBehavior: CachePolicyCookieBehavior | undefined;

  /**
   * Contains a list of cookie names.
   *
   * @public
   */
  Cookies?: CookieNames | undefined;
}

/**
 * An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.
 *
 * @public
 */
export interface CachePolicyHeadersConfig {
  /**
   * Determines whether any HTTP headers are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:
   *
   * - `none` – No HTTP headers are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to `none`, any headers that are listed in an `OriginRequestPolicy` *are* included in origin requests.
   * - `whitelist` – Only the HTTP headers that are listed in the `Headers` type are included in the cache key and in requests that CloudFront sends to the origin.
   *
   * @public
   */
  HeaderBehavior: CachePolicyHeaderBehavior | undefined;

  /**
   * Contains a list of HTTP header names.
   *
   * @public
   */
  Headers?: Headers | undefined;
}

/**
 * Contains a list of query string names.
 *
 * @public
 */
export interface QueryStringNames {
  /**
   * The number of query string names in the `Items` list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list of query string names.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.
 *
 * @public
 */
export interface CachePolicyQueryStringsConfig {
  /**
   * Determines whether any URL query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:
   *
   * - `none` – No query strings in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to `none`, any query strings that are listed in an `OriginRequestPolicy` *are* included in origin requests.
   * - `whitelist` – Only the query strings in viewer requests that are listed in the `QueryStringNames` type are included in the cache key and in requests that CloudFront sends to the origin.
   * - `allExcept` – All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, ***except*** those that are listed in the `QueryStringNames` type, which are not included.
   * - `all` – All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.
   *
   * @public
   */
  QueryStringBehavior: CachePolicyQueryStringBehavior | undefined;

  /**
   * Contains the specific query strings in viewer requests that either ***are*** or ***are not*** included in the cache key and in requests that CloudFront sends to the origin. The behavior depends on whether the `QueryStringBehavior` field in the `CachePolicyQueryStringsConfig` type is set to `whitelist` (the listed query strings ***are*** included) or `allExcept` (the listed query strings ***are not*** included, but all other query strings are).
   *
   * @public
   */
  QueryStrings?: QueryStringNames | undefined;
}

/**
 * This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.
 *
 * The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but *not* include them in the cache key, use `OriginRequestPolicy`.
 *
 * @public
 */
export interface ParametersInCacheKeyAndForwardedToOrigin {
  /**
   * A flag that can affect whether the `Accept-Encoding` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.
   *
   * This field is related to the `EnableAcceptEncodingBrotli` field. If one or both of these fields is `true` *and* the viewer request includes the `Accept-Encoding` header, then CloudFront does the following:
   *
   * - Normalizes the value of the viewer's `Accept-Encoding` header
   * - Includes the normalized header in the cache key
   * - Includes the normalized header in the request to the origin, if a request is necessary
   *
   * For more information, see [Compression support](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the *Amazon CloudFront Developer Guide*.
   *
   * If you set this value to `true`, and this cache behavior also has an origin request policy attached, do not include the `Accept-Encoding` header in the origin request policy. CloudFront always includes the `Accept-Encoding` header in origin requests when the value of this field is `true`, so including this header in an origin request policy has no effect.
   *
   * If both of these fields are `false`, then CloudFront treats the `Accept-Encoding` header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add `Accept-Encoding` to the headers whitelist like any other HTTP header.
   *
   * @public
   */
  EnableAcceptEncodingGzip: boolean | undefined;

  /**
   * A flag that can affect whether the `Accept-Encoding` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.
   *
   * This field is related to the `EnableAcceptEncodingGzip` field. If one or both of these fields is `true` *and* the viewer request includes the `Accept-Encoding` header, then CloudFront does the following:
   *
   * - Normalizes the value of the viewer's `Accept-Encoding` header
   * - Includes the normalized header in the cache key
   * - Includes the normalized header in the request to the origin, if a request is necessary
   *
   * For more information, see [Compression support](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the *Amazon CloudFront Developer Guide*.
   *
   * If you set this value to `true`, and this cache behavior also has an origin request policy attached, do not include the `Accept-Encoding` header in the origin request policy. CloudFront always includes the `Accept-Encoding` header in origin requests when the value of this field is `true`, so including this header in an origin request policy has no effect.
   *
   * If both of these fields are `false`, then CloudFront treats the `Accept-Encoding` header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add `Accept-Encoding` to the headers whitelist like any other HTTP header.
   *
   * @public
   */
  EnableAcceptEncodingBrotli?: boolean | undefined;

  /**
   * An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.
   *
   * @public
   */
  HeadersConfig: CachePolicyHeadersConfig | undefined;

  /**
   * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.
   *
   * @public
   */
  CookiesConfig: CachePolicyCookiesConfig | undefined;

  /**
   * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.
   *
   * @public
   */
  QueryStringsConfig: CachePolicyQueryStringsConfig | undefined;
}

/**
 * A cache policy configuration.
 *
 * This configuration determines the following:
 *
 * - The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.
 * - The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.
 *
 *   > **Important:** If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the `Cache-Control: no-cache`, `no-store`, or `private` directives are present in the origin headers.
 *
 * The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but *not* include them in the cache key, use `OriginRequestPolicy`.
 *
 * @public
 */
export interface CachePolicyConfig {
  /**
   * A comment to describe the cache policy. The comment cannot be longer than 128 characters.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * A unique name to identify the cache policy.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value as the object's time to live (TTL) only when the origin does *not* send `Cache-Control` or `Expires` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
   *
   * The default value for this field is 86400 seconds (one day). If the value of `MinTTL` is more than 86400 seconds, then the default value for this field is the same as the value of `MinTTL`.
   *
   * @public
   */
  DefaultTTL?: number | undefined;

  /**
   * The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value only when the origin sends `Cache-Control` or `Expires` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
   *
   * The default value for this field is 31536000 seconds (one year). If the value of `MinTTL` or `DefaultTTL` is more than 31536000 seconds, then the default value for this field is the same as the value of `DefaultTTL`.
   *
   * @public
   */
  MaxTTL?: number | undefined;

  /**
   * The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  MinTTL: number | undefined;

  /**
   * The HTTP headers, cookies, and URL query strings to include in the cache key. The values included in the cache key are also included in requests that CloudFront sends to the origin.
   *
   * @public
   */
  ParametersInCacheKeyAndForwardedToOrigin?: ParametersInCacheKeyAndForwardedToOrigin | undefined;
}

/**
 * A cache policy.
 *
 * When it's attached to a cache behavior, the cache policy determines the following:
 *
 * - The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.
 * - The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.
 *
 * The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but *not* include them in the cache key, use `OriginRequestPolicy`.
 *
 * @public
 */
export interface CachePolicy {
  /**
   * The unique identifier for the cache policy.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The date and time when the cache policy was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The cache policy configuration.
   *
   * @public
   */
  CachePolicyConfig: CachePolicyConfig | undefined;
}

/**
 * Contains a cache policy.
 *
 * @public
 */
export interface CachePolicySummary {
  /**
   * The type of cache policy, either `managed` (created by Amazon Web Services) or `custom` (created in this Amazon Web Services account).
   *
   * @public
   */
  Type: CachePolicyType | undefined;

  /**
   * The cache policy.
   *
   * @public
   */
  CachePolicy: CachePolicy | undefined;
}

/**
 * A list of cache policies.
 *
 * @public
 */
export interface CachePolicyList {
  /**
   * If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the `Marker` field of a subsequent request to continue listing cache policies where you left off.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of cache policies requested.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * The total number of cache policies returned in the response.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * Contains the cache policies in the list.
   *
   * @public
   */
  Items?: CachePolicySummary[] | undefined;
}

/**
 * A complex type that specifies the HTTP header name from which CloudFront extracts cache tags from origin responses. When you add `CacheTagConfig` to a distribution, CloudFront reads the specified header from origin responses, parses the comma-separated tag values, and stores them with the cached object. You can then invalidate cached objects by tag using the `CreateInvalidation` API.
 *
 * @public
 */
export interface CacheTagConfig {
  /**
   * The name of the HTTP header that your origin includes in responses. CloudFront uses this header to extract cache tags. The header value must contain comma-separated tag values (for example, `product:electronics, category:tv, brand:example`).
   *
   * @public
   */
  HeaderName: string | undefined;
}

/**
 * The Certificate Manager (ACM) certificate associated with your distribution.
 *
 * @public
 */
export interface Certificate {
  /**
   * The Amazon Resource Name (ARN) of the ACM certificate.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface CopyDistributionRequest {
  /**
   * The identifier of the primary distribution whose configuration you are copying. To get a distribution ID, use `ListDistributions`.
   *
   * @public
   */
  PrimaryDistributionId: string | undefined;

  /**
   * The type of distribution that your primary distribution will be copied to. The only valid value is `True`, indicating that you are copying to a staging distribution.
   *
   * @public
   */
  Staging?: boolean | undefined;

  /**
   * The version identifier of the primary distribution whose configuration you are copying. This is the `ETag` value returned in the response to `GetDistribution` and `GetDistributionConfig`.
   *
   * @public
   */
  IfMatch?: string | undefined;

  /**
   * A value that uniquely identifies a request to create a resource. This helps to prevent CloudFront from creating a duplicate resource if you accidentally resubmit an identical request.
   *
   * @public
   */
  CallerReference: string | undefined;

  /**
   * A Boolean flag to specify the state of the staging distribution when it's created. When you set this value to `True`, the staging distribution is enabled. When you set this value to `False`, the staging distribution is disabled.
   *
   * If you omit this field, the default value is `True`.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * A connection function association.
 *
 * @public
 */
export interface ConnectionFunctionAssociation {
  /**
   * The association's ID.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * A complex type that controls:
 *
 * - Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.
 * - How long CloudFront caches HTTP status codes in the 4xx and 5xx range.
 *
 * For more information about custom error pages, see [Customizing Error Responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface CustomErrorResponse {
  /**
   * The HTTP status code for which you want to specify a custom error page and/or a caching duration.
   *
   * @public
   */
  ErrorCode: number | undefined;

  /**
   * The path to the custom error page that you want CloudFront to return to a viewer when your origin returns the HTTP status code specified by `ErrorCode`, for example, `/4xx-errors/403-forbidden.html`. If you want to store your objects and your custom error pages in different locations, your distribution must include a cache behavior for which the following is true:
   *
   * - The value of `PathPattern` matches the path to your custom error messages. For example, suppose you saved custom error pages for 4xx errors in an Amazon S3 bucket in a directory named `/4xx-errors`. Your distribution must include a cache behavior for which the path pattern routes requests for your custom error pages to that location, for example, `/4xx-errors/*`.
   * - The value of `TargetOriginId` specifies the value of the `ID` element for the origin that contains your custom error pages.
   *
   * If you specify a value for `ResponsePagePath`, you must also specify a value for `ResponseCode`.
   *
   * We recommend that you store custom error pages in an Amazon S3 bucket. If you store custom error pages on an HTTP server and the server starts to return 5xx errors, CloudFront can't get the files that you want to return to viewers because the origin server is unavailable.
   *
   * @public
   */
  ResponsePagePath?: string | undefined;

  /**
   * The HTTP status code that you want CloudFront to return to the viewer along with the custom error page. There are a variety of reasons that you might want CloudFront to return a status code different from the status code that your origin returned to CloudFront, for example:
   *
   * - Some Internet devices (some firewalls and corporate proxies, for example) intercept HTTP 4xx and 5xx and prevent the response from being returned to the viewer. If you substitute `200`, the response typically won't be intercepted.
   * - If you don't care about distinguishing among different client errors or server errors, you can specify `400` or `500` as the `ResponseCode` for all 4xx or 5xx errors.
   * - You might want to return a `200` status code (OK) and static website so your customers don't know that your website is down.
   *
   * If you specify a value for `ResponseCode`, you must also specify a value for `ResponsePagePath`.
   *
   * @public
   */
  ResponseCode?: string | undefined;

  /**
   * The minimum amount of time, in seconds, that you want CloudFront to cache the HTTP status code specified in `ErrorCode`. When this time period has elapsed, CloudFront queries your origin to see whether the problem that caused the error has been resolved and the requested object is now available.
   *
   * For more information, see [Customizing Error Responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  ErrorCachingMinTTL?: number | undefined;
}

/**
 * A complex type that controls:
 *
 * - Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.
 * - How long CloudFront caches HTTP status codes in the 4xx and 5xx range.
 *
 * For more information about custom error pages, see [Customizing Error Responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface CustomErrorResponses {
  /**
   * The number of HTTP status codes for which you want to specify a custom error page and/or a caching duration. If `Quantity` is `0`, you can omit `Items`.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A complex type that contains a `CustomErrorResponse` element for each HTTP status code for which you want to specify a custom error page and/or a caching duration.
   *
   * @public
   */
  Items?: CustomErrorResponse[] | undefined;
}

/**
 * A complex type that describes the default cache behavior if you don't specify a `CacheBehavior` element or if request URLs don't match any of the values of `PathPattern` in `CacheBehavior` elements. You must create exactly one default cache behavior.
 *
 * > **Important:** If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the `Cache-Control: no-cache`, `no-store`, or `private` directives are present in the origin headers.
 *
 * @public
 */
export interface DefaultCacheBehavior {
  /**
   * The value of `ID` for the origin that you want CloudFront to route requests to when they use the default cache behavior.
   *
   * @public
   */
  TargetOriginId: string | undefined;

  /**
   * > **Important:** We recommend using `TrustedKeyGroups` instead of `TrustedSigners`.
   *
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * A list of Amazon Web Services account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.
   *
   * When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in a trusted signer's Amazon Web Services account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  TrustedSigners?: TrustedSigners | undefined;

  /**
   * A list of key groups that CloudFront can use to validate signed URLs or signed cookies.
   *
   * When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  TrustedKeyGroups?: TrustedKeyGroups | undefined;

  /**
   * The protocol that viewers can use to access the files in the origin specified by `TargetOriginId` when a request matches the path pattern in `PathPattern`. You can specify the following options:
   *
   * - `allow-all`: Viewers can use HTTP or HTTPS.
   * - `redirect-to-https`: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.
   * - `https-only`: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).
   *
   * For more information about requiring the HTTPS protocol, see [Requiring HTTPS Between Viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html) in the *Amazon CloudFront Developer Guide*.
   *
   * > **Note:** The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see [Managing Cache Expiration](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  ViewerProtocolPolicy: ViewerProtocolPolicy | undefined;

  /**
   * A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:
   *
   * - CloudFront forwards only `GET` and `HEAD` requests.
   * - CloudFront forwards only `GET`, `HEAD`, and `OPTIONS` requests.
   * - CloudFront forwards `GET, HEAD, OPTIONS, PUT, PATCH, POST`, and `DELETE` requests.
   *
   * If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.
   *
   * @public
   */
  AllowedMethods?: AllowedMethods | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify `true`; if not, specify `false`. If you specify `true` for `SmoothStreaming`, you can still distribute other content using this cache behavior if the content matches the value of `PathPattern`.
   *
   * @public
   */
  SmoothStreaming?: boolean | undefined;

  /**
   * Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify `true`; if not, specify `false`. For more information, see [Serving Compressed Files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  Compress?: boolean | undefined;

  /**
   * A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.
   *
   * @public
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociations | undefined;

  /**
   * A list of CloudFront functions that are associated with this cache behavior. Your functions must be published to the `LIVE` stage to associate them with a cache behavior.
   *
   * @public
   */
  FunctionAssociations?: FunctionAssociations | undefined;

  /**
   * The value of `ID` for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for the default cache behavior.
   *
   * @public
   */
  FieldLevelEncryptionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see [Real-time logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  RealtimeLogConfigArn?: string | undefined;

  /**
   * The unique identifier of the cache policy that is attached to the default cache behavior. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * A `DefaultCacheBehavior` must include either a `CachePolicyId` or `ForwardedValues`. We recommend that you use a `CachePolicyId`.
   *
   * @public
   */
  CachePolicyId?: string | undefined;

  /**
   * The unique identifier of the origin request policy that is attached to the default cache behavior. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginRequestPolicyId?: string | undefined;

  /**
   * The identifier for a response headers policy.
   *
   * @public
   */
  ResponseHeadersPolicyId?: string | undefined;

  /**
   * The gRPC configuration for your cache behavior.
   *
   * @public
   */
  GrpcConfig?: GrpcConfig | undefined;

  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see [Working with policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * If you want to include values in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * A `DefaultCacheBehavior` must include either a `CachePolicyId` or `ForwardedValues`. We recommend that you use a `CachePolicyId`.
   *
   * A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
   *
   * @deprecated deprecated.
   * @public
   */
  ForwardedValues?: ForwardedValues | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * This field is deprecated. We recommend that you use the `MinTTL` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
   *
   * You must specify `0` for `MinTTL` if you configure CloudFront to forward all headers to your origin (under `Headers`, if you specify `1` for `Quantity` and `*` for `Name`).
   *
   * @deprecated deprecated.
   * @public
   */
  MinTTL?: number | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * This field is deprecated. We recommend that you use the `DefaultTTL` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @deprecated deprecated.
   * @public
   */
  DefaultTTL?: number | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * This field is deprecated. We recommend that you use the `MaxTTL` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
   *
   * The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @deprecated deprecated.
   * @public
   */
  MaxTTL?: number | undefined;
}

/**
 * A complex type that specifies whether access logs are written for the distribution.
 *
 * > **Note:** If you already enabled standard logging (legacy) and you want to enable standard logging (v2) to send your access logs to Amazon S3, we recommend that you specify a *different* Amazon S3 bucket or use a *separate path* in the same bucket (for example, use a log prefix or partitioning). This helps you keep track of which log files are associated with which logging subscription and prevents log files from overwriting each other. For more information, see [Standard logging (access logs)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface LoggingConfig {
  /**
   * Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't want to enable logging when you create a distribution or if you want to disable logging for an existing distribution, specify `false` for `Enabled`, and specify empty `Bucket` and `Prefix` elements. If you specify `false` for `Enabled` but you specify values for `Bucket` and `prefix`, the values are automatically deleted.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Specifies whether you want CloudFront to include cookies in access logs, specify `true` for `IncludeCookies`. If you choose to include cookies in logs, CloudFront logs all cookies regardless of how you configure the cache behaviors for this distribution. If you don't want to include cookies when you create a distribution or if you want to disable include cookies for an existing distribution, specify `false` for `IncludeCookies`.
   *
   * @public
   */
  IncludeCookies?: boolean | undefined;

  /**
   * The Amazon S3 bucket to store the access logs in, for example, `amzn-s3-demo-bucket.s3.amazonaws.com`.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * An optional string that you want CloudFront to prefix to the access log `filenames` for this distribution, for example, `myprefix/`. If you want to enable logging, but you don't want to specify a prefix, you still must include an empty `Prefix` element in the `Logging` element.
   *
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.
 *
 * @public
 */
export interface StatusCodes {
  /**
   * The number of status codes.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The items (status codes) for an origin group.
   *
   * @public
   */
  Items: number[] | undefined;
}

/**
 * A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.
 *
 * @public
 */
export interface OriginGroupFailoverCriteria {
  /**
   * The status codes that, when returned from the primary origin, will trigger CloudFront to failover to the second origin.
   *
   * @public
   */
  StatusCodes: StatusCodes | undefined;
}

/**
 * An origin in an origin group.
 *
 * @public
 */
export interface OriginGroupMember {
  /**
   * The ID for an origin in an origin group.
   *
   * @public
   */
  OriginId: string | undefined;
}

/**
 * A complex data type for the origins included in an origin group.
 *
 * @public
 */
export interface OriginGroupMembers {
  /**
   * The number of origins in an origin group.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * Items (origins) in an origin group.
   *
   * @public
   */
  Items: OriginGroupMember[] | undefined;
}

/**
 * An origin group includes two origins (a primary origin and a secondary origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specify the origin group instead of a single origin, and CloudFront will failover from the primary origin to the secondary origin under the failover conditions that you've chosen.
 *
 * Optionally, you can choose selection criteria for your origin group to specify how your origins are selected when your distribution routes viewer requests.
 *
 * @public
 */
export interface OriginGroup {
  /**
   * The origin group's ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A complex type that contains information about the failover criteria for an origin group.
   *
   * @public
   */
  FailoverCriteria: OriginGroupFailoverCriteria | undefined;

  /**
   * A complex type that contains information about the origins in an origin group.
   *
   * @public
   */
  Members: OriginGroupMembers | undefined;

  /**
   * The selection criteria for the origin group. For more information, see [Create an origin group](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html#concept_origin_groups.creating) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  SelectionCriteria?: OriginGroupSelectionCriteria | undefined;
}

/**
 * A complex data type for the origin groups specified for a distribution.
 *
 * @public
 */
export interface OriginGroups {
  /**
   * The number of origin groups.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The items (origin groups) in a distribution.
   *
   * @public
   */
  Items?: OriginGroup[] | undefined;
}

/**
 * A complex type that contains `HeaderName` and `HeaderValue` elements, if any, for this distribution.
 *
 * @public
 */
export interface OriginCustomHeader {
  /**
   * The name of a header that you want CloudFront to send to your origin. For more information, see [Adding Custom Headers to Origin Requests](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  HeaderName: string | undefined;

  /**
   * The value for the header that you specified in the `HeaderName` field.
   *
   * @public
   */
  HeaderValue: string | undefined;
}

/**
 * A complex type that contains the list of Custom Headers for each origin.
 *
 * @public
 */
export interface CustomHeaders {
  /**
   * The number of custom headers, if any, for this distribution.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * **Optional**: A list that contains one `OriginCustomHeader` element for each custom header that you want CloudFront to forward to the origin. If Quantity is `0`, omit `Items`.
   *
   * @public
   */
  Items?: OriginCustomHeader[] | undefined;
}

/**
 * Configures mutual TLS authentication between CloudFront and your origin server.
 *
 * @public
 */
export interface OriginMtlsConfig {
  /**
   * The Amazon Resource Name (ARN) of the client certificate stored in Amazon Web Services Certificate Manager (ACM) that CloudFront uses to authenticate with your origin using Mutual TLS.
   *
   * @public
   */
  ClientCertificateArn: string | undefined;
}

/**
 * A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.
 *
 * @public
 */
export interface OriginSslProtocols {
  /**
   * The number of SSL/TLS protocols that you want to allow CloudFront to use when establishing an HTTPS connection with this origin.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list that contains allowed SSL/TLS protocols for this distribution.
   *
   * @public
   */
  Items: SslProtocol[] | undefined;
}

/**
 * A custom origin. A custom origin is any origin that is *not* an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is [configured with static website hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) *is* a custom origin.
 *
 * @public
 */
export interface CustomOriginConfig {
  /**
   * The HTTP port that CloudFront uses to connect to the origin. Specify the HTTP port that the origin listens on.
   *
   * @public
   */
  HTTPPort: number | undefined;

  /**
   * The HTTPS port that CloudFront uses to connect to the origin. Specify the HTTPS port that the origin listens on.
   *
   * @public
   */
  HTTPSPort: number | undefined;

  /**
   * Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin. Valid values are:
   *
   * - `http-only` – CloudFront always uses HTTP to connect to the origin.
   * - `match-viewer` – CloudFront connects to the origin using the same protocol that the viewer used to connect to CloudFront.
   * - `https-only` – CloudFront always uses HTTPS to connect to the origin.
   *
   * @public
   */
  OriginProtocolPolicy: OriginProtocolPolicy | undefined;

  /**
   * Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS. Valid values include `SSLv3`, `TLSv1`, `TLSv1.1`, and `TLSv1.2`.
   *
   * For more information, see [Minimum Origin SSL Protocol](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginSSLProtocols) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginSslProtocols?: OriginSslProtocols | undefined;

  /**
   * Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the *origin response timeout*. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.
   *
   * For more information, see [Response timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginReadTimeout?: number | undefined;

  /**
   * Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 5 seconds.
   *
   * For more information, see [Keep-alive timeout (custom origins only)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginKeepaliveTimeout) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginKeepaliveTimeout?: number | undefined;

  /**
   * Specifies which IP protocol CloudFront uses when connecting to your origin. If your origin uses both IPv4 and IPv6 protocols, you can choose `dualstack` to help optimize reliability.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * Configures mutual TLS authentication between CloudFront and your origin server.
   *
   * @public
   */
  OriginMtlsConfig?: OriginMtlsConfig | undefined;
}

/**
 * CloudFront Origin Shield.
 *
 * Using Origin Shield can help reduce the load on your origin. For more information, see [Using Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface OriginShield {
  /**
   * A flag that specifies whether Origin Shield is enabled.
   *
   * When it's enabled, CloudFront routes all requests through Origin Shield, which can help protect your origin. When it's disabled, CloudFront might send requests directly to your origin from multiple edge locations or regional edge caches.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The Amazon Web Services Region for Origin Shield.
   *
   * Specify the Amazon Web Services Region that has the lowest latency to your origin. To specify a region, use the region code, not the region name. For example, specify the US East (Ohio) region as `us-east-2`.
   *
   * When you enable CloudFront Origin Shield, you must specify the Amazon Web Services Region for Origin Shield. For the list of Amazon Web Services Regions that you can specify, and for help choosing the best Region for your origin, see [Choosing the Amazon Web Services Region for Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginShieldRegion?: string | undefined;
}

/**
 * A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin or an S3 bucket that is configured as a website endpoint, use the `CustomOriginConfig` element instead.
 *
 * @public
 */
export interface S3OriginConfig {
  /**
   * > **Note:** If you're using origin access control (OAC) instead of origin access identity, specify an empty `OriginAccessIdentity` element. For more information, see [Restricting access to an Amazon Web Services](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) in the *Amazon CloudFront Developer Guide*.
   *
   * The CloudFront origin access identity to associate with the origin. Use an origin access identity to configure the origin so that viewers can *only* access objects in an Amazon S3 bucket through CloudFront. The format of the value is:
   *
   * `origin-access-identity/cloudfront/ID-of-origin-access-identity`
   *
   * The `ID-of-origin-access-identity` is the value that CloudFront returned in the `ID` element when you created the origin access identity.
   *
   * If you want viewers to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty `OriginAccessIdentity` element.
   *
   * To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty `OriginAccessIdentity` element.
   *
   * To replace the origin access identity, update the distribution configuration and specify the new origin access identity.
   *
   * For more information about the origin access identity, see [Serving Private Content through CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginAccessIdentity: string | undefined;

  /**
   * Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the *origin response timeout*. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.
   *
   * For more information, see [Response timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginReadTimeout?: number | undefined;
}

/**
 * An Amazon CloudFront VPC origin configuration.
 *
 * @public
 */
export interface VpcOriginConfig {
  /**
   * The VPC origin ID.
   *
   * @public
   */
  VpcOriginId: string | undefined;

  /**
   * The account ID of the Amazon Web Services account that owns the VPC origin.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the *origin response timeout*. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.
   *
   * For more information, see [Response timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginReadTimeout?: number | undefined;

  /**
   * Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 5 seconds.
   *
   * For more information, see [Keep-alive timeout (custom origins only)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginKeepaliveTimeout) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginKeepaliveTimeout?: number | undefined;
}

/**
 * An origin.
 *
 * An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:
 *
 * - Use `S3OriginConfig` to specify an Amazon S3 bucket that is not configured with static website hosting.
 * - Use `VpcOriginConfig` to specify a VPC origin.
 * - Use `CustomOriginConfig` to specify all other kinds of origins, including:
 *
 *   - An Amazon S3 bucket that is configured with static website hosting
 *   - An Elastic Load Balancing load balancer
 *   - An Elemental MediaPackage endpoint
 *   - An Elemental MediaStore container
 *   - Any other HTTP server, running on an Amazon EC2 instance or any other kind of host
 *
 * For the current maximum number of origins that you can specify per distribution, see [General Quotas on Web Distributions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions) in the *Amazon CloudFront Developer Guide* (quotas were formerly referred to as limits).
 *
 * @public
 */
export interface Origin {
  /**
   * A unique identifier for the origin. This value must be unique within the distribution.
   *
   * Use this value to specify the `TargetOriginId` in a `CacheBehavior` or `DefaultCacheBehavior`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The domain name for the origin.
   *
   * For more information, see [Origin Domain Name](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDomainName) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * An optional path that CloudFront appends to the origin domain name when CloudFront requests content from the origin.
   *
   * For more information, see [Origin Path](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginPath) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginPath?: string | undefined;

  /**
   * A list of HTTP header names and values that CloudFront adds to the requests that it sends to the origin.
   *
   * For more information, see [Adding Custom Headers to Origin Requests](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  CustomHeaders?: CustomHeaders | undefined;

  /**
   * Use this type to specify an origin that is an Amazon S3 bucket that is not configured with static website hosting. To specify any other type of origin, including an Amazon S3 bucket that is configured with static website hosting, use the `CustomOriginConfig` type instead.
   *
   * @public
   */
  S3OriginConfig?: S3OriginConfig | undefined;

  /**
   * Use this type to specify an origin that is not an Amazon S3 bucket, with one exception. If the Amazon S3 bucket is configured with static website hosting, use this type. If the Amazon S3 bucket is not configured with static website hosting, use the `S3OriginConfig` type instead.
   *
   * @public
   */
  CustomOriginConfig?: CustomOriginConfig | undefined;

  /**
   * The VPC origin configuration.
   *
   * @public
   */
  VpcOriginConfig?: VpcOriginConfig | undefined;

  /**
   * The number of times that CloudFront attempts to connect to the origin. The minimum number is 1, the maximum is 3, and the default (if you don't specify otherwise) is 3.
   *
   * For a custom origin (including an Amazon S3 bucket that's configured with static website hosting), this value also specifies the number of times that CloudFront attempts to get a response from the origin, in the case of an [Origin Response Timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout).
   *
   * For more information, see [Origin Connection Attempts](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-attempts) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  ConnectionAttempts?: number | undefined;

  /**
   * The number of seconds that CloudFront waits when trying to establish a connection to the origin. The minimum timeout is 1 second, the maximum is 10 seconds, and the default (if you don't specify otherwise) is 10 seconds.
   *
   * For more information, see [Origin Connection Timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-timeout) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  ConnectionTimeout?: number | undefined;

  /**
   * The time (in seconds) that a request from CloudFront to the origin can stay open and wait for a response. If the complete response isn't received from the origin by this time, CloudFront ends the connection.
   *
   * The value for `ResponseCompletionTimeout` must be equal to or greater than the value for `OriginReadTimeout`. If you don't set a value for `ResponseCompletionTimeout`, CloudFront doesn't enforce a maximum value.
   *
   * For more information, see [Response completion timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#response-completion-timeout) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  ResponseCompletionTimeout?: number | undefined;

  /**
   * CloudFront Origin Shield. Using Origin Shield can help reduce the load on your origin.
   *
   * For more information, see [Using Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginShield?: OriginShield | undefined;

  /**
   * The unique identifier of an origin access control for this origin.
   *
   * For more information, see [Restricting access to an Amazon S3 origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginAccessControlId?: string | undefined;
}

/**
 * Contains information about the origins for this distribution.
 *
 * @public
 */
export interface Origins {
  /**
   * The number of origins for this distribution.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list of origins.
   *
   * @public
   */
  Items: Origin[] | undefined;
}

/**
 * A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using `MaxMind` GeoIP databases.
 *
 * @public
 */
export interface GeoRestriction {
  /**
   * The method that you want to use to restrict distribution of your content by country:
   *
   * - `none`: No geo restriction is enabled, meaning access to content is not restricted by client geo location.
   * - `blacklist`: The `Location` elements specify the countries in which you don't want CloudFront to distribute your content.
   * - `whitelist`: The `Location` elements specify the countries in which you want CloudFront to distribute your content.
   *
   * @public
   */
  RestrictionType: GeoRestrictionType | undefined;

  /**
   * When geo restriction is `enabled`, this is the number of countries in your `whitelist` or `blacklist`. Otherwise, when it is not enabled, `Quantity` is `0`, and you can omit `Items`.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A complex type that contains a `Location` element for each country in which you want CloudFront either to distribute your content (`whitelist`) or not distribute your content (`blacklist`).
   *
   * The `Location` element is a two-letter, uppercase country code for a country that you want to include in your `blacklist` or `whitelist`. Include one `Location` element for each country.
   *
   * CloudFront and `MaxMind` both use `ISO 3166` country codes. For the current list of countries and the corresponding codes, see `ISO 3166-1-alpha-2` code on the *International Organization for Standardization* website. You can also refer to the country list on the CloudFront console, which includes both country names and codes.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * A complex type that identifies ways in which you want to restrict distribution of your content.
 *
 * @public
 */
export interface Restrictions {
  /**
   * A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using `MaxMind` GeoIP databases.
   *
   * @public
   */
  GeoRestriction: GeoRestriction | undefined;
}

/**
 * The configuration for a string schema.
 *
 * @public
 */
export interface StringSchemaConfig {
  /**
   * A comment to describe the parameter.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The default value of the parameter.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * Whether the defined parameter is required.
   *
   * @public
   */
  Required: boolean | undefined;
}

/**
 * An object that contains information about the parameter definition.
 *
 * @public
 */
export interface ParameterDefinitionSchema {
  /**
   * An object that contains information about the string schema.
   *
   * @public
   */
  StringSchema?: StringSchemaConfig | undefined;
}

/**
 * A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.
 *
 * @public
 */
export interface ParameterDefinition {
  /**
   * The name of the parameter.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value that you assigned to the parameter.
   *
   * @public
   */
  Definition: ParameterDefinitionSchema | undefined;
}

/**
 * > **Note:** This field only supports multi-tenant distributions. You can't specify this field for standard distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
 *
 * The configuration for a distribution tenant.
 *
 * @public
 */
export interface TenantConfig {
  /**
   * The parameters that you specify for a distribution tenant.
   *
   * @public
   */
  ParameterDefinitions?: ParameterDefinition[] | undefined;
}

/**
 * A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.
 *
 * If the distribution doesn't use `Aliases` (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as `d111111abcdef8.cloudfront.net`—set `CloudFrontDefaultCertificate` to `true` and leave all other fields empty.
 *
 * If the distribution uses `Aliases` (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:
 *
 * - Which viewers the distribution accepts HTTPS connections from: only viewers that support [server name indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication) (recommended), or all viewers including those that don't support SNI.
 *
 *   - To accept HTTPS connections from only viewers that support SNI, set `SSLSupportMethod` to `sni-only`. This is recommended. Most browsers and clients support SNI.
 *   - To accept HTTPS connections from all viewers, including those that don't support SNI, set `SSLSupportMethod` to `vip`. This is not recommended, and results in additional monthly charges from CloudFront.
 * - The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for `MinimumProtocolVersion`. For more information, see [Security Policy](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy) in the *Amazon CloudFront Developer Guide*.
 * - The location of the SSL/TLS certificate, [Certificate Manager (ACM)](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html) (recommended) or [Identity and Access Management (IAM)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html). You specify the location by setting a value in one of the following fields (not both):
 *
 *   - `ACMCertificateArn`
 *   - `IAMCertificateId`
 *
 * All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use `ViewerProtocolPolicy` in the `CacheBehavior` or `DefaultCacheBehavior`. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use `CustomOriginConfig`.
 *
 * For more information, see [Using HTTPS with CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html) and [Using Alternate Domain Names and HTTPS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface ViewerCertificate {
  /**
   * If the distribution uses the CloudFront domain name such as `d111111abcdef8.cloudfront.net`, set this field to `true`.
   *
   * If the distribution uses `Aliases` (alternate domain names or CNAMEs), set this field to `false` and specify values for the following fields:
   *
   * - `ACMCertificateArn` or `IAMCertificateId` (specify a value for one, not both)
   * - `MinimumProtocolVersion`
   * - `SSLSupportMethod`
   *
   * @public
   */
  CloudFrontDefaultCertificate?: boolean | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * If the distribution uses `Aliases` (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in [Identity and Access Management (IAM)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html), provide the ID of the IAM certificate.
   *
   * If you specify an IAM certificate ID, you must also specify values for `MinimumProtocolVersion` and `SSLSupportMethod`.
   *
   * @public
   */
  IAMCertificateId?: string | undefined;

  /**
   * If the distribution uses `Aliases` (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in [Certificate Manager (ACM)](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html), provide the Amazon Resource Name (ARN) of the ACM certificate. CloudFront only supports ACM certificates in the US East (N. Virginia) Region (`us-east-1`).
   *
   * If you specify an ACM certificate ARN, you must also specify values for `MinimumProtocolVersion` and `SSLSupportMethod`.
   *
   * @public
   */
  ACMCertificateArn?: string | undefined;

  /**
   * If the distribution uses `Aliases` (alternate domain names or CNAMEs), specify which viewers the distribution accepts HTTPS connections from.
   *
   * - `sni-only` – The distribution accepts HTTPS connections from only viewers that support [server name indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication). This is recommended. Most browsers and clients support SNI.
   * - `vip` – The distribution accepts HTTPS connections from all viewers including those that don't support SNI. This is not recommended, and results in additional monthly charges from CloudFront.
   * - `static-ip` - Do not specify this value unless your distribution has been enabled for this feature by the CloudFront team. If you have a use case that requires static IP addresses for a distribution, contact CloudFront through the [Amazon Web ServicesSupport Center](https://console.aws.amazon.com/support/home).
   *
   * If the distribution uses the CloudFront domain name such as `d111111abcdef8.cloudfront.net`, don't set a value for this field.
   *
   * @public
   */
  SSLSupportMethod?: SSLSupportMethod | undefined;

  /**
   * If the distribution uses `Aliases` (alternate domain names or CNAMEs), specify the security policy that you want CloudFront to use for HTTPS connections with viewers. The security policy determines two settings:
   *
   * - The minimum SSL/TLS protocol that CloudFront can use to communicate with viewers.
   * - The ciphers that CloudFront can use to encrypt the content that it returns to viewers.
   *
   * For more information, see [Security Policy](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy) and [Supported Protocols and Ciphers Between Viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html#secure-connections-supported-ciphers) in the *Amazon CloudFront Developer Guide*.
   *
   * > **Note:** On the CloudFront console, this setting is called **Security Policy**.
   *
   * When you're using SNI only (you set `SSLSupportMethod` to `sni-only`), you must specify `TLSv1` or higher.
   *
   * If the distribution uses the CloudFront domain name such as `d111111abcdef8.cloudfront.net` (you set `CloudFrontDefaultCertificate` to `true`), CloudFront automatically sets the security policy to `TLSv1` regardless of the value that you set here.
   *
   * @public
   */
  MinimumProtocolVersion?: MinimumProtocolVersion | undefined;

  /**
   * This field is deprecated. Use one of the following fields instead:
   *
   * - `ACMCertificateArn`
   * - `IAMCertificateId`
   * - `CloudFrontDefaultCertificate`
   *
   * @deprecated deprecated.
   * @public
   */
  Certificate?: string | undefined;

  /**
   * This field is deprecated. Use one of the following fields instead:
   *
   * - `ACMCertificateArn`
   * - `IAMCertificateId`
   * - `CloudFrontDefaultCertificate`
   *
   * @deprecated deprecated.
   * @public
   */
  CertificateSource?: CertificateSource | undefined;
}

/**
 * A trust store configuration.
 *
 * @public
 */
export interface TrustStoreConfig {
  /**
   * The trust store ID.
   *
   * @public
   */
  TrustStoreId: string | undefined;

  /**
   * The configuration to use to advertise trust store CA names.
   *
   * @public
   */
  AdvertiseTrustStoreCaNames?: boolean | undefined;

  /**
   * The configuration to use to ignore certificate expiration.
   *
   * @public
   */
  IgnoreCertificateExpiry?: boolean | undefined;
}

/**
 * A viewer mTLS configuration.
 *
 * @public
 */
export interface ViewerMtlsConfig {
  /**
   * The viewer mTLS mode.
   *
   * @public
   */
  Mode?: ViewerMtlsMode | undefined;

  /**
   * The trust store configuration associated with the viewer mTLS configuration.
   *
   * @public
   */
  TrustStoreConfig?: TrustStoreConfig | undefined;
}

/**
 * A distribution configuration.
 *
 * @public
 */
export interface DistributionConfig {
  /**
   * A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.
   *
   * If the value of `CallerReference` is new (regardless of the content of the `DistributionConfig` object), CloudFront creates a new distribution.
   *
   * If `CallerReference` is a value that you already sent in a previous request to create a distribution, CloudFront returns a `DistributionAlreadyExists` error.
   *
   * @public
   */
  CallerReference: string | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
   *
   * @public
   */
  Aliases?: Aliases | undefined;

  /**
   * When a viewer requests the root URL for your distribution, the default root object is the object that you want CloudFront to request from your origin. For example, if your root URL is `https://www.example.com`, you can specify CloudFront to return the `index.html` file as the default root object. You can specify a default root object so that viewers see a specific file or object, instead of another object in your distribution (for example, `https://www.example.com/product-description.html`). A default root object avoids exposing the contents of your distribution.
   *
   * You can specify the object name or a path to the object name (for example, `index.html` or `exampleFolderName/index.html`). Your string can't begin with a forward slash (`/`). Only specify the object name or the path to the object.
   *
   * If you don't want to specify a default root object when you create a distribution, include an empty `DefaultRootObject` element.
   *
   * To delete the default root object from an existing distribution, update the distribution configuration and include an empty `DefaultRootObject` element.
   *
   * To replace the default root object, update the distribution configuration and specify the new object.
   *
   * For more information about the default root object, see [Specify a default root object](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  DefaultRootObject?: string | undefined;

  /**
   * A complex type that contains information about origins for this distribution.
   *
   * @public
   */
  Origins: Origins | undefined;

  /**
   * A complex type that contains information about origin groups for this distribution.
   *
   * @public
   */
  OriginGroups?: OriginGroups | undefined;

  /**
   * A complex type that describes the default cache behavior if you don't specify a `CacheBehavior` element or if files don't match any of the values of `PathPattern` in `CacheBehavior` elements. You must create exactly one default cache behavior.
   *
   * @public
   */
  DefaultCacheBehavior: DefaultCacheBehavior | undefined;

  /**
   * A complex type that contains zero or more `CacheBehavior` elements.
   *
   * @public
   */
  CacheBehaviors?: CacheBehaviors | undefined;

  /**
   * A complex type that controls the following:
   *
   * - Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.
   * - How long CloudFront caches HTTP status codes in the 4xx and 5xx range.
   *
   * For more information about custom error pages, see [Customizing Error Responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  CustomErrorResponses?: CustomErrorResponses | undefined;

  /**
   * A comment to describe the distribution. The comment cannot be longer than 128 characters.
   *
   * @public
   */
  Comment: string | undefined;

  /**
   * A complex type that controls whether access logs are written for the distribution.
   *
   * For more information about logging, see [Access Logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  Logging?: LoggingConfig | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify `PriceClass_All`, CloudFront responds to requests for your objects from all CloudFront edge locations.
   *
   * If you specify a price class other than `PriceClass_All`, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance.
   *
   * For more information about price classes, see [Choosing the Price Class for a CloudFront Distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html) in the *Amazon CloudFront Developer Guide*. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see [Amazon CloudFront Pricing](http://aws.amazon.com/cloudfront/pricing/).
   *
   * @public
   */
  PriceClass?: PriceClass | undefined;

  /**
   * From this field, you can enable or disable the selected distribution.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.
   *
   * @public
   */
  ViewerCertificate?: ViewerCertificate | undefined;

  /**
   * A complex type that identifies ways in which you want to restrict distribution of your content.
   *
   * @public
   */
  Restrictions?: Restrictions | undefined;

  /**
   * > **Note:** Multi-tenant distributions only support WAF V2 web ACLs.
   *
   * A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example `arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`. To specify a web ACL created using WAF Classic, use the ACL ID, for example `a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about WAF, see the [WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html).
   *
   * @public
   */
  WebACLId?: string | undefined;

  /**
   * (Optional) Specify the HTTP version(s) that you want viewers to use to communicate with CloudFront. The default value for new web distributions is `http2`. Viewers that don't support HTTP/2 automatically use an earlier HTTP version.
   *
   * For viewers and CloudFront to use HTTP/2, viewers must support TLSv1.2 or later, and must support Server Name Indication (SNI).
   *
   * For viewers and CloudFront to use HTTP/3, viewers must support TLSv1.3 and Server Name Indication (SNI). CloudFront supports HTTP/3 connection migration to allow the viewer to switch networks without losing connection. For more information about connection migration, see [Connection Migration](https://www.rfc-editor.org/rfc/rfc9000.html#name-connection-migration) at RFC 9000. For more information about supported TLSv1.3 ciphers, see [Supported protocols and ciphers between viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html).
   *
   * @public
   */
  HttpVersion?: HttpVersion | undefined;

  /**
   * > **Note:** To use this field for a multi-tenant distribution, use a connection group instead. For more information, see [ConnectionGroup](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ConnectionGroup.html).
   *
   * If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your distribution, specify `true`. If you specify `false`, CloudFront responds to IPv6 DNS requests with the DNS response code `NOERROR` and with no IP addresses. This allows viewers to submit a second request, for an IPv4 address for your distribution.
   *
   * In general, you should enable IPv6 if you have users on IPv6 networks who want to access your content. However, if you're using signed URLs or signed cookies to restrict access to your content, and if you're using a custom policy that includes the `IpAddress` parameter to restrict the IP addresses that can access your content, don't enable IPv6. If you want to restrict access to some content by IP address and not restrict access to other content (or restrict access but not by IP address), you can create two distributions. For more information, see [Creating a Signed URL Using a Custom Policy](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html) in the *Amazon CloudFront Developer Guide*.
   *
   * If you're using an Route 53 Amazon Web Services Integration alias resource record set to route traffic to your CloudFront distribution, you need to create a second alias resource record set when both of the following are true:
   *
   * - You enable IPv6 for the distribution
   * - You're using alternate domain names in the URLs for your objects
   *
   * For more information, see [Routing Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html) in the *Route 53 Amazon Web Services Integration Developer Guide*.
   *
   * If you created a CNAME resource record set, either with Route 53 Amazon Web Services Integration or with another DNS service, you don't need to make any changes. A CNAME record will route traffic to your distribution regardless of the IP address format of the viewer request.
   *
   * @public
   */
  IsIPV6Enabled?: boolean | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * The identifier of a continuous deployment policy. For more information, see `CreateContinuousDeploymentPolicy`.
   *
   * @public
   */
  ContinuousDeploymentPolicyId?: string | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * A Boolean that indicates whether this is a staging distribution. When this value is `true`, this is a staging distribution. When this value is `false`, this is not a staging distribution.
   *
   * @public
   */
  Staging?: boolean | undefined;

  /**
   * > **Note:** To use this field for a multi-tenant distribution, use a connection group instead. For more information, see [ConnectionGroup](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ConnectionGroup.html).
   *
   * ID of the Anycast static IP list that is associated with the distribution.
   *
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * > **Note:** This field only supports multi-tenant distributions. You can't specify this field for standard distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * A distribution tenant configuration.
   *
   * @public
   */
  TenantConfig?: TenantConfig | undefined;

  /**
   * This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).
   *
   * @public
   */
  ConnectionMode?: ConnectionMode | undefined;

  /**
   * The distribution's viewer mTLS configuration.
   *
   * @public
   */
  ViewerMtlsConfig?: ViewerMtlsConfig | undefined;

  /**
   * The distribution's connection function association.
   *
   * @public
   */
  ConnectionFunctionAssociation?: ConnectionFunctionAssociation | undefined;

  /**
   * Configuration for cache tag extraction from origin responses. When specified, CloudFront reads the header named in `HeaderName` from origin responses and stores the comma-separated values as cache tags on the object.
   *
   * Distributions without `CacheTagConfig` do not extract tags. When `CacheTagConfig` is removed from a distribution via `UpdateDistribution`, CloudFront stops extracting tags from origin responses.
   *
   * > **Note:** Changing the `HeaderName` on an existing distribution does not retroactively affect previously cached objects. Tag-based invalidations will not apply to objects already cached using a previous header. To ensure tag invalidations function after updating the header name, use path-based invalidations to recache all objects that use cache tags.
   *
   * @public
   */
  CacheTagConfig?: CacheTagConfig | undefined;
}

/**
 * A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
 *
 * @public
 */
export interface Distribution {
  /**
   * The distribution's identifier. For example: `E1U5RQF7T870K0`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The distribution's Amazon Resource Name (ARN).
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * The distribution's status. When the status is `Deployed`, the distribution's information is fully propagated to all CloudFront edge locations.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The date and time when the distribution was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The number of invalidation batches currently in progress.
   *
   * @public
   */
  InProgressInvalidationBatches: number | undefined;

  /**
   * The distribution's CloudFront domain name. For example: `d111111abcdef8.cloudfront.net`.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * > **Important:** We recommend using `TrustedKeyGroups` instead of `TrustedSigners`.
   *
   * This field contains a list of Amazon Web Services account IDs and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs or signed cookies.
   *
   * @public
   */
  ActiveTrustedSigners?: ActiveTrustedSigners | undefined;

  /**
   * This field contains a list of key groups and the public keys in each key group that CloudFront can use to verify the signatures of signed URLs or signed cookies.
   *
   * @public
   */
  ActiveTrustedKeyGroups?: ActiveTrustedKeyGroups | undefined;

  /**
   * The distribution's configuration.
   *
   * @public
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions.
   *
   * For more information about ICP recordals, see [Signup, Accounts, and Credentials](https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html) in *Getting Started with Amazon Web Services services in China*.
   *
   * @public
   */
  AliasICPRecordals?: AliasICPRecordal[] | undefined;
}

/**
 * @public
 */
export interface CopyDistributionResult {
  /**
   * A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
   *
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * The URL of the staging distribution.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The version identifier for the current version of the staging distribution.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * A complex type that contains `Tag` key and `Tag` value.
 *
 * @public
 */
export interface Tag {
  /**
   * A string that contains `Tag` key.
   *
   * The string length should be between 1 and 128 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters `_ - . : / = + @`.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * A string that contains an optional `Tag` value.
   *
   * The string length should be between 0 and 256 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters `_ - . : / = + @`.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A complex type that contains zero or more `Tag` elements.
 *
 * @public
 */
export interface Tags {
  /**
   * A complex type that contains `Tag` elements.
   *
   * @public
   */
  Items?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAnycastIpListRequest {
  /**
   * Name of the Anycast static IP list.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The number of static IP addresses that are allocated to the Anycast static IP list. Valid values: 21 or 3.
   *
   * @public
   */
  IpCount: number | undefined;

  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags?: Tags | undefined;

  /**
   * The IP address type for the Anycast static IP list. You can specify one of the following options:
   *
   * - `ipv4` only
   * - `ipv6` only
   * - `dualstack` - Allocate a list of both IPv4 and IPv6 addresses
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * A list of IPAM CIDR configurations that specify the IP address ranges and IPAM pool settings for creating the Anycast static IP list.
   *
   * @public
   */
  IpamCidrConfigs?: IpamCidrConfig[] | undefined;
}

/**
 * @public
 */
export interface CreateAnycastIpListResult {
  /**
   * A response structure that includes the version identifier (ETag) and the created AnycastIpList structure.
   *
   * @public
   */
  AnycastIpList?: AnycastIpList | undefined;

  /**
   * The version identifier for the current version of the Anycast static IP list.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface CreateCachePolicyRequest {
  /**
   * A cache policy configuration.
   *
   * @public
   */
  CachePolicyConfig: CachePolicyConfig | undefined;
}

/**
 * @public
 */
export interface CreateCachePolicyResult {
  /**
   * A cache policy.
   *
   * @public
   */
  CachePolicy?: CachePolicy | undefined;

  /**
   * The fully qualified URI of the cache policy just created.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The current version of the cache policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * Origin access identity configuration. Send a `GET` request to the `/CloudFront API version/CloudFront/identity ID/config` resource.
 *
 * @public
 */
export interface CloudFrontOriginAccessIdentityConfig {
  /**
   * A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.
   *
   * If the value of `CallerReference` is new (regardless of the content of the `CloudFrontOriginAccessIdentityConfig` object), a new origin access identity is created.
   *
   * If the `CallerReference` is a value already sent in a previous identity request, and the content of the `CloudFrontOriginAccessIdentityConfig` is identical to the original request (ignoring white space), the response includes the same information returned to the original request.
   *
   * If the `CallerReference` is a value you already sent in a previous request to create an identity, but the content of the `CloudFrontOriginAccessIdentityConfig` is different from the original request, CloudFront returns a `CloudFrontOriginAccessIdentityAlreadyExists` error.
   *
   * @public
   */
  CallerReference: string | undefined;

  /**
   * A comment to describe the origin access identity. The comment cannot be longer than 128 characters.
   *
   * @public
   */
  Comment: string | undefined;
}

/**
 * The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see [Restricting Access to Amazon S3 Content by Using an Origin Access Identity](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface CreateCloudFrontOriginAccessIdentityRequest {
  /**
   * The current configuration information for the identity.
   *
   * @public
   */
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig | undefined;
}

/**
 * CloudFront origin access identity.
 *
 * @public
 */
export interface CloudFrontOriginAccessIdentity {
  /**
   * The ID for the origin access identity, for example, `E74FTE3AJFJ256A`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon S3 canonical user ID for the origin access identity, used when giving the origin access identity read permission to an object in Amazon S3.
   *
   * @public
   */
  S3CanonicalUserId: string | undefined;

  /**
   * The current configuration information for the identity.
   *
   * @public
   */
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface CreateCloudFrontOriginAccessIdentityResult {
  /**
   * The origin access identity's information.
   *
   * @public
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity | undefined;

  /**
   * The fully qualified URI of the new origin access identity just created.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The current version of the origin access identity created.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The key value store association.
 *
 * @public
 */
export interface KeyValueStoreAssociation {
  /**
   * The Amazon Resource Name (ARN) of the key value store association.
   *
   * @public
   */
  KeyValueStoreARN: string | undefined;
}

/**
 * The key value store associations.
 *
 * @public
 */
export interface KeyValueStoreAssociations {
  /**
   * The quantity of key value store associations.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The items of the key value store association.
   *
   * @public
   */
  Items?: KeyValueStoreAssociation[] | undefined;
}

/**
 * Contains configuration information about a CloudFront function.
 *
 * @public
 */
export interface FunctionConfig {
  /**
   * A comment to describe the function.
   *
   * @public
   */
  Comment: string | undefined;

  /**
   * The function's runtime environment version.
   *
   * @public
   */
  Runtime: FunctionRuntime | undefined;

  /**
   * The configuration for the key value store associations.
   *
   * @public
   */
  KeyValueStoreAssociations?: KeyValueStoreAssociations | undefined;
}

/**
 * @public
 */
export interface CreateConnectionFunctionRequest {
  /**
   * A name for the connection function.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Contains configuration information about a CloudFront function.
   *
   * @public
   */
  ConnectionFunctionConfig: FunctionConfig | undefined;

  /**
   * The code for the connection function.
   *
   * @public
   */
  ConnectionFunctionCode: Uint8Array | undefined;

  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags?: Tags | undefined;
}

/**
 * A connection function summary.
 *
 * @public
 */
export interface ConnectionFunctionSummary {
  /**
   * The connection function name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The connection function ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Contains configuration information about a CloudFront function.
   *
   * @public
   */
  ConnectionFunctionConfig: FunctionConfig | undefined;

  /**
   * The connection function Amazon Resource Name (ARN).
   *
   * @public
   */
  ConnectionFunctionArn: string | undefined;

  /**
   * The connection function status.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The connection function stage.
   *
   * @public
   */
  Stage: FunctionStage | undefined;

  /**
   * The connection function created time.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The connection function last modified time.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateConnectionFunctionResult {
  /**
   * The summary for the connection function.
   *
   * @public
   */
  ConnectionFunctionSummary?: ConnectionFunctionSummary | undefined;

  /**
   * The location of the connection function.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The version identifier for the current version of the connection function.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionGroupRequest {
  /**
   * The name of the connection group. Enter a friendly identifier that is unique within your Amazon Web Services account. This name can't be updated after you create the connection group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Enable IPv6 for the connection group. The default is `true`. For more information, see [Enable IPv6](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesEnableIPv6) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  Ipv6Enabled?: boolean | undefined;

  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags?: Tags | undefined;

  /**
   * The ID of the Anycast static IP list.
   *
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * Enable the connection group.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * The connection group for your distribution tenants. When you first create a distribution tenant and you don't specify a connection group, CloudFront will automatically create a default connection group for you. When you create a new distribution tenant and don't specify a connection group, the default one will be associated with your distribution tenant.
 *
 * @public
 */
export interface ConnectionGroup {
  /**
   * The ID of the connection group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the connection group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connection group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time when the connection group was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The date and time when the connection group was updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags?: Tags | undefined;

  /**
   * IPv6 is enabled for the connection group.
   *
   * @public
   */
  Ipv6Enabled?: boolean | undefined;

  /**
   * The routing endpoint (also known as the DNS name) that is assigned to the connection group, such as d111111abcdef8.cloudfront.net.
   *
   * @public
   */
  RoutingEndpoint?: string | undefined;

  /**
   * The ID of the Anycast static IP list.
   *
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * The status of the connection group.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Whether the connection group is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Whether the connection group is the default connection group for the distribution tenants.
   *
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateConnectionGroupResult {
  /**
   * The connection group that you created.
   *
   * @public
   */
  ConnectionGroup?: ConnectionGroup | undefined;

  /**
   * The current version of the connection group.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The CloudFront domain name of the staging distribution.
 *
 * @public
 */
export interface StagingDistributionDnsNames {
  /**
   * The number of CloudFront domain names in your staging distribution.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The CloudFront domain name of the staging distribution.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.
 *
 * @public
 */
export interface ContinuousDeploymentSingleHeaderConfig {
  /**
   * The request header name that you want CloudFront to send to your staging distribution. The header must contain the prefix `aws-cf-cd-`.
   *
   * @public
   */
  Header: string | undefined;

  /**
   * The request header value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
 *
 * @public
 */
export interface SessionStickinessConfig {
  /**
   * The amount of time after which you want sessions to cease if no requests are received. Allowed values are 300–3600 seconds (5–60 minutes).
   *
   * The value must be less than or equal to `MaximumTTL`.
   *
   * @public
   */
  IdleTTL: number | undefined;

  /**
   * The maximum amount of time to consider requests from the viewer as being part of the same session. Allowed values are 300–3600 seconds (5–60 minutes).
   *
   * The value must be greater than or equal to `IdleTTL`.
   *
   * @public
   */
  MaximumTTL: number | undefined;
}

/**
 * Contains the percentage of traffic to send to a staging distribution.
 *
 * @public
 */
export interface ContinuousDeploymentSingleWeightConfig {
  /**
   * The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and 0.15. For example, a value of 0.10 means 10% of traffic is sent to the staging distribution.
   *
   * @public
   */
  Weight: number | undefined;

  /**
   * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
   *
   * @public
   */
  SessionStickinessConfig?: SessionStickinessConfig | undefined;
}

/**
 * The traffic configuration of your continuous deployment.
 *
 * @public
 */
export interface TrafficConfig {
  /**
   * Contains the percentage of traffic to send to the staging distribution.
   *
   * @public
   */
  SingleWeightConfig?: ContinuousDeploymentSingleWeightConfig | undefined;

  /**
   * Determines which HTTP requests are sent to the staging distribution.
   *
   * @public
   */
  SingleHeaderConfig?: ContinuousDeploymentSingleHeaderConfig | undefined;

  /**
   * The type of traffic configuration.
   *
   * @public
   */
  Type: ContinuousDeploymentPolicyType | undefined;
}

/**
 * Contains the configuration for a continuous deployment policy.
 *
 * @public
 */
export interface ContinuousDeploymentPolicyConfig {
  /**
   * The CloudFront domain name of the staging distribution. For example: `d111111abcdef8.cloudfront.net`.
   *
   * @public
   */
  StagingDistributionDnsNames: StagingDistributionDnsNames | undefined;

  /**
   * A Boolean that indicates whether this continuous deployment policy is enabled (in effect). When this value is `true`, this policy is enabled and in effect. When this value is `false`, this policy is not enabled and has no effect.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * Contains the parameters for routing production traffic from your primary to staging distributions.
   *
   * @public
   */
  TrafficConfig?: TrafficConfig | undefined;
}

/**
 * @public
 */
export interface CreateContinuousDeploymentPolicyRequest {
  /**
   * Contains the configuration for a continuous deployment policy.
   *
   * @public
   */
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig | undefined;
}

/**
 * A continuous deployment policy.
 *
 * @public
 */
export interface ContinuousDeploymentPolicy {
  /**
   * The identifier of the continuous deployment policy.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The date and time the continuous deployment policy was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * Contains the configuration for a continuous deployment policy.
   *
   * @public
   */
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig | undefined;
}

/**
 * @public
 */
export interface CreateContinuousDeploymentPolicyResult {
  /**
   * A continuous deployment policy.
   *
   * @public
   */
  ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy | undefined;

  /**
   * The location of the continuous deployment policy.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The version identifier for the current version of the continuous deployment policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The request to create a new distribution.
 *
 * @public
 */
export interface CreateDistributionRequest {
  /**
   * The distribution's configuration information.
   *
   * @public
   */
  DistributionConfig: DistributionConfig | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface CreateDistributionResult {
  /**
   * The distribution's information.
   *
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * The fully qualified URI of the new distribution resource just created.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The current version of the distribution created.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The customizations that you specified for the distribution tenant for geographic restrictions.
 *
 * @public
 */
export interface GeoRestrictionCustomization {
  /**
   * The method that you want to use to restrict distribution of your content by country:
   *
   * - `none`: No geographic restriction is enabled, meaning access to content is not restricted by client geo location.
   * - `blacklist`: The `Location` elements specify the countries in which you don't want CloudFront to distribute your content.
   * - `whitelist`: The `Location` elements specify the countries in which you want CloudFront to distribute your content.
   *
   * @public
   */
  RestrictionType: GeoRestrictionType | undefined;

  /**
   * The locations for geographic restrictions.
   *
   * @public
   */
  Locations?: string[] | undefined;
}

/**
 * The WAF web ACL customization specified for the distribution tenant.
 *
 * @public
 */
export interface WebAclCustomization {
  /**
   * The action for the WAF web ACL customization. You can specify `override` to specify a separate WAF web ACL for the distribution tenant. If you specify `disable`, the distribution tenant won't have WAF web ACL protections and won't inherit from the multi-tenant distribution.
   *
   * @public
   */
  Action: CustomizationActionType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the WAF web ACL.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.
 *
 * @public
 */
export interface Customizations {
  /**
   * The WAF web ACL.
   *
   * @public
   */
  WebAcl?: WebAclCustomization | undefined;

  /**
   * The Certificate Manager (ACM) certificate.
   *
   * @public
   */
  Certificate?: Certificate | undefined;

  /**
   * The geographic restrictions.
   *
   * @public
   */
  GeoRestrictions?: GeoRestrictionCustomization | undefined;
}

/**
 * The domain for the specified distribution tenant.
 *
 * @public
 */
export interface DomainItem {
  /**
   * The domain name.
   *
   * @public
   */
  Domain: string | undefined;
}

/**
 * An object that represents the request for the Amazon CloudFront managed ACM certificate.
 *
 * @public
 */
export interface ManagedCertificateRequest {
  /**
   * Specify how the HTTP validation token will be served when requesting the CloudFront managed ACM certificate.
   *
   * - For `cloudfront`, CloudFront will automatically serve the validation token. Choose this mode if you can point the domain's DNS to CloudFront immediately.
   * - For `self-hosted`, you serve the validation token from your existing infrastructure. Choose this mode when you need to maintain current traffic flow while your certificate is being issued. You can place the validation token at the well-known path on your existing web server, wait for ACM to validate and issue the certificate, and then update your DNS to point to CloudFront.
   *
   * @public
   */
  ValidationTokenHost: ValidationTokenHost | undefined;

  /**
   * The primary domain name associated with the CloudFront managed ACM certificate.
   *
   * @public
   */
  PrimaryDomainName?: string | undefined;

  /**
   * You can opt out of certificate transparency logging by specifying the `disabled` option. Opt in by specifying `enabled`. For more information, see [Certificate Transparency Logging](https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency) in the *Certificate Manager User Guide*.
   *
   * @public
   */
  CertificateTransparencyLoggingPreference?: CertificateTransparencyLoggingPreference | undefined;
}

/**
 * A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.
 *
 * @public
 */
export interface Parameter {
  /**
   * The parameter name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The parameter value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateDistributionTenantRequest {
  /**
   * The ID of the multi-tenant distribution to use for creating the distribution tenant.
   *
   * @public
   */
  DistributionId: string | undefined;

  /**
   * The name of the distribution tenant. Enter a friendly identifier that is unique within your Amazon Web Services account. This name can't be updated after you create the distribution tenant.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The domains associated with the distribution tenant. You must specify at least one domain in the request.
   *
   * @public
   */
  Domains: DomainItem[] | undefined;

  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags?: Tags | undefined;

  /**
   * Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.
   *
   * @public
   */
  Customizations?: Customizations | undefined;

  /**
   * A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * The ID of the connection group to associate with the distribution tenant.
   *
   * @public
   */
  ConnectionGroupId?: string | undefined;

  /**
   * The configuration for the CloudFront managed ACM certificate request.
   *
   * @public
   */
  ManagedCertificateRequest?: ManagedCertificateRequest | undefined;

  /**
   * Indicates whether the distribution tenant should be enabled when created. If the distribution tenant is disabled, the distribution tenant won't serve traffic.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * The details about the domain result.
 *
 * @public
 */
export interface DomainResult {
  /**
   * The specified domain.
   *
   * @public
   */
  Domain: string | undefined;

  /**
   * Whether the domain is active or inactive.
   *
   * @public
   */
  Status?: DomainStatus | undefined;
}

/**
 * The distribution tenant.
 *
 * @public
 */
export interface DistributionTenant {
  /**
   * The ID of the distribution tenant.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the multi-tenant distribution.
   *
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * The name of the distribution tenant.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the distribution tenant.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The domains associated with the distribution tenant.
   *
   * @public
   */
  Domains?: DomainResult[] | undefined;

  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags?: Tags | undefined;

  /**
   * Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.
   *
   * @public
   */
  Customizations?: Customizations | undefined;

  /**
   * A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * The ID of the connection group for the distribution tenant. If you don't specify a connection group, CloudFront uses the default connection group.
   *
   * @public
   */
  ConnectionGroupId?: string | undefined;

  /**
   * The date and time when the distribution tenant was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The date and time when the distribution tenant was updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The status of the distribution tenant.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface CreateDistributionTenantResult {
  /**
   * The distribution tenant that you created.
   *
   * @public
   */
  DistributionTenant?: DistributionTenant | undefined;

  /**
   * The current version of the distribution tenant.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * A distribution Configuration and a list of tags to be associated with the distribution.
 *
 * @public
 */
export interface DistributionConfigWithTags {
  /**
   * A distribution configuration.
   *
   * @public
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags: Tags | undefined;
}

/**
 * The request to create a new distribution with tags.
 *
 * @public
 */
export interface CreateDistributionWithTagsRequest {
  /**
   * The distribution's configuration information.
   *
   * @public
   */
  DistributionConfigWithTags: DistributionConfigWithTags | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface CreateDistributionWithTagsResult {
  /**
   * The distribution's information.
   *
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * The fully qualified URI of the new distribution resource just created.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The current version of the distribution created.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * A field-level encryption content type profile.
 *
 * @public
 */
export interface ContentTypeProfile {
  /**
   * The format for a field-level encryption content type-profile mapping.
   *
   * @public
   */
  Format: Format | undefined;

  /**
   * The profile ID for a field-level encryption content type-profile mapping.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The content type for a field-level encryption content type-profile mapping.
   *
   * @public
   */
  ContentType: string | undefined;
}

/**
 * Field-level encryption content type-profile.
 *
 * @public
 */
export interface ContentTypeProfiles {
  /**
   * The number of field-level encryption content type-profile mappings.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * Items in a field-level encryption content type-profile mapping.
   *
   * @public
   */
  Items?: ContentTypeProfile[] | undefined;
}

/**
 * The configuration for a field-level encryption content type-profile mapping.
 *
 * @public
 */
export interface ContentTypeProfileConfig {
  /**
   * The setting in a field-level encryption content type-profile mapping that specifies what to do when an unknown content type is provided for the profile. If true, content is forwarded without being encrypted when the content type is unknown. If false (the default), an error is returned when the content type is unknown.
   *
   * @public
   */
  ForwardWhenContentTypeIsUnknown: boolean | undefined;

  /**
   * The configuration for a field-level encryption content type-profile.
   *
   * @public
   */
  ContentTypeProfiles?: ContentTypeProfiles | undefined;
}

/**
 * Query argument-profile mapping for field-level encryption.
 *
 * @public
 */
export interface QueryArgProfile {
  /**
   * Query argument for field-level encryption query argument-profile mapping.
   *
   * @public
   */
  QueryArg: string | undefined;

  /**
   * ID of profile to use for field-level encryption query argument-profile mapping
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * Query argument-profile mapping for field-level encryption.
 *
 * @public
 */
export interface QueryArgProfiles {
  /**
   * Number of profiles for query argument-profile mapping for field-level encryption.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * Number of items for query argument-profile mapping for field-level encryption.
   *
   * @public
   */
  Items?: QueryArgProfile[] | undefined;
}

/**
 * Configuration for query argument-profile mapping for field-level encryption.
 *
 * @public
 */
export interface QueryArgProfileConfig {
  /**
   * Flag to set if you want a request to be forwarded to the origin even if the profile specified by the field-level encryption query argument, fle-profile, is unknown.
   *
   * @public
   */
  ForwardWhenQueryArgProfileIsUnknown: boolean | undefined;

  /**
   * Profiles specified for query argument-profile mapping for field-level encryption.
   *
   * @public
   */
  QueryArgProfiles?: QueryArgProfiles | undefined;
}

/**
 * A complex data type that includes the profile configurations specified for field-level encryption.
 *
 * @public
 */
export interface FieldLevelEncryptionConfig {
  /**
   * A unique number that ensures the request can't be replayed.
   *
   * @public
   */
  CallerReference: string | undefined;

  /**
   * An optional comment about the configuration. The comment cannot be longer than 128 characters.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * A complex data type that specifies when to forward content if a profile isn't found and the profile that can be provided as a query argument in a request.
   *
   * @public
   */
  QueryArgProfileConfig?: QueryArgProfileConfig | undefined;

  /**
   * A complex data type that specifies when to forward content if a content type isn't recognized and profiles to use as by default in a request if a query argument doesn't specify a profile to use.
   *
   * @public
   */
  ContentTypeProfileConfig?: ContentTypeProfileConfig | undefined;
}

/**
 * @public
 */
export interface CreateFieldLevelEncryptionConfigRequest {
  /**
   * The request to create a new field-level encryption configuration.
   *
   * @public
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;
}

/**
 * A complex data type that includes the profile configurations and other options specified for field-level encryption.
 *
 * @public
 */
export interface FieldLevelEncryption {
  /**
   * The configuration ID for a field-level encryption configuration which includes a set of profiles that specify certain selected data fields to be encrypted by specific public keys.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The last time the field-level encryption configuration was changed.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * A complex data type that includes the profile configurations specified for field-level encryption.
   *
   * @public
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;
}

/**
 * @public
 */
export interface CreateFieldLevelEncryptionConfigResult {
  /**
   * Returned when you create a new field-level encryption configuration.
   *
   * @public
   */
  FieldLevelEncryption?: FieldLevelEncryption | undefined;

  /**
   * The fully qualified URI of the new configuration resource just created.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The current version of the field level encryption configuration. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * A complex data type that includes the field patterns to match for field-level encryption.
 *
 * @public
 */
export interface FieldPatterns {
  /**
   * The number of field-level encryption field patterns.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * An array of the field-level encryption field patterns.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications.
 *
 * @public
 */
export interface EncryptionEntity {
  /**
   * The public key associated with a set of field-level encryption patterns, to be used when encrypting the fields that match the patterns.
   *
   * @public
   */
  PublicKeyId: string | undefined;

  /**
   * The provider associated with the public key being used for encryption. This value must also be provided with the private key for applications to be able to decrypt data.
   *
   * @public
   */
  ProviderId: string | undefined;

  /**
   * Field patterns in a field-level encryption content type profile specify the fields that you want to be encrypted. You can provide the full field name, or any beginning characters followed by a wildcard (*). You can't overlap field patterns. For example, you can't have both ABC* and AB*. Note that field patterns are case-sensitive.
   *
   * @public
   */
  FieldPatterns: FieldPatterns | undefined;
}

/**
 * Complex data type for field-level encryption profiles that includes all of the encryption entities.
 *
 * @public
 */
export interface EncryptionEntities {
  /**
   * Number of field pattern items in a field-level encryption content type-profile mapping.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * An array of field patterns in a field-level encryption content type-profile mapping.
   *
   * @public
   */
  Items?: EncryptionEntity[] | undefined;
}

/**
 * A complex data type of profiles for the field-level encryption.
 *
 * @public
 */
export interface FieldLevelEncryptionProfileConfig {
  /**
   * Profile name for the field-level encryption profile.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique number that ensures that the request can't be replayed.
   *
   * @public
   */
  CallerReference: string | undefined;

  /**
   * An optional comment for the field-level encryption profile. The comment cannot be longer than 128 characters.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.
   *
   * @public
   */
  EncryptionEntities: EncryptionEntities | undefined;
}

/**
 * @public
 */
export interface CreateFieldLevelEncryptionProfileRequest {
  /**
   * The request to create a field-level encryption profile.
   *
   * @public
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;
}

/**
 * A complex data type for field-level encryption profiles.
 *
 * @public
 */
export interface FieldLevelEncryptionProfile {
  /**
   * The ID for a field-level encryption profile configuration which includes a set of profiles that specify certain selected data fields to be encrypted by specific public keys.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The last time the field-level encryption profile was updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * A complex data type that includes the profile name and the encryption entities for the field-level encryption profile.
   *
   * @public
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;
}

/**
 * @public
 */
export interface CreateFieldLevelEncryptionProfileResult {
  /**
   * Returned when you create a new field-level encryption profile.
   *
   * @public
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile | undefined;

  /**
   * The fully qualified URI of the new profile resource just created.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The current version of the field level encryption profile. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface CreateFunctionRequest {
  /**
   * A name to identify the function.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Configuration information about the function, including an optional comment and the function's runtime.
   *
   * @public
   */
  FunctionConfig: FunctionConfig | undefined;

  /**
   * The function code. For more information about writing a CloudFront function, see [Writing function code for CloudFront Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  FunctionCode: Uint8Array | undefined;

  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags?: Tags | undefined;
}

/**
 * Contains metadata about a CloudFront function.
 *
 * @public
 */
export interface FunctionMetadata {
  /**
   * The Amazon Resource Name (ARN) of the function. The ARN uniquely identifies the function.
   *
   * @public
   */
  FunctionARN: string | undefined;

  /**
   * The stage that the function is in, either `DEVELOPMENT` or `LIVE`.
   *
   * When a function is in the `DEVELOPMENT` stage, you can test the function with `TestFunction`, and update it with `UpdateFunction`.
   *
   * When a function is in the `LIVE` stage, you can attach the function to a distribution's cache behavior, using the function's ARN.
   *
   * @public
   */
  Stage?: FunctionStage | undefined;

  /**
   * The date and time when the function was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The date and time when the function was most recently updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * Contains configuration information and metadata about a CloudFront function.
 *
 * @public
 */
export interface FunctionSummary {
  /**
   * The name of the CloudFront function.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The status of the CloudFront function.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Contains configuration information about a CloudFront function.
   *
   * @public
   */
  FunctionConfig: FunctionConfig | undefined;

  /**
   * Contains metadata about a CloudFront function.
   *
   * @public
   */
  FunctionMetadata: FunctionMetadata | undefined;
}

/**
 * @public
 */
export interface CreateFunctionResult {
  /**
   * Contains configuration information and metadata about a CloudFront function.
   *
   * @public
   */
  FunctionSummary?: FunctionSummary | undefined;

  /**
   * The URL of the CloudFront function. Use the URL to manage the function with the CloudFront API.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The version identifier for the current version of the CloudFront function.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * A complex type that contains information about the objects that you want to invalidate. For more information, see [Specifying the Objects to Invalidate](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface Paths {
  /**
   * The number of invalidation paths specified for the objects that you want to invalidate.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A complex type that contains a list of the paths that you want to invalidate.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * An invalidation batch.
 *
 * @public
 */
export interface InvalidationBatch {
  /**
   * A complex type that contains information about the objects that you want to invalidate. For more information, see [Specifying the Objects to Invalidate](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  Paths: Paths | undefined;

  /**
   * A value that you specify to uniquely identify an invalidation request. CloudFront uses the value to prevent you from accidentally resubmitting an identical request. Whenever you create a new invalidation request, you must specify a new value for `CallerReference` and change other values in the request as applicable. One way to ensure that the value of `CallerReference` is unique is to use a `timestamp`, for example, `20120301090000`.
   *
   * If you make a second invalidation request with the same value for `CallerReference`, and if the rest of the request is the same, CloudFront doesn't create a new invalidation request. Instead, CloudFront returns information about the invalidation request that you previously created with the same `CallerReference`.
   *
   * If `CallerReference` is a value you already sent in a previous invalidation batch request but the content of any `Path` is different from the original request, CloudFront returns an `InvalidationBatchAlreadyExists` error.
   *
   * @public
   */
  CallerReference: string | undefined;
}

/**
 * The request to create an invalidation.
 *
 * @public
 */
export interface CreateInvalidationRequest {
  /**
   * The distribution's id.
   *
   * @public
   */
  DistributionId: string | undefined;

  /**
   * The batch information for the invalidation.
   *
   * @public
   */
  InvalidationBatch: InvalidationBatch | undefined;
}

/**
 * An invalidation.
 *
 * @public
 */
export interface Invalidation {
  /**
   * The identifier for the invalidation request. For example: `IDFDVBD632BHDS5`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The status of the invalidation request. When the invalidation batch is finished, the status is `Completed`.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The date and time the invalidation request was first made.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The current invalidation information for the batch request.
   *
   * @public
   */
  InvalidationBatch: InvalidationBatch | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface CreateInvalidationResult {
  /**
   * The fully qualified URI of the distribution and invalidation batch request, including the `Invalidation ID`.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The invalidation's information.
   *
   * @public
   */
  Invalidation?: Invalidation | undefined;
}

/**
 * @public
 */
export interface CreateInvalidationForDistributionTenantRequest {
  /**
   * The ID of the distribution tenant.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * An invalidation batch.
   *
   * @public
   */
  InvalidationBatch: InvalidationBatch | undefined;
}

/**
 * @public
 */
export interface CreateInvalidationForDistributionTenantResult {
  /**
   * The location for the invalidation.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * An invalidation.
   *
   * @public
   */
  Invalidation?: Invalidation | undefined;
}

/**
 * A key group configuration.
 *
 * A key group contains a list of public keys that you can use with [CloudFront signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html).
 *
 * @public
 */
export interface KeyGroupConfig {
  /**
   * A name to identify the key group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of the identifiers of the public keys in the key group.
   *
   * @public
   */
  Items: string[] | undefined;

  /**
   * A comment to describe the key group. The comment cannot be longer than 128 characters.
   *
   * @public
   */
  Comment?: string | undefined;
}

/**
 * @public
 */
export interface CreateKeyGroupRequest {
  /**
   * A key group configuration.
   *
   * @public
   */
  KeyGroupConfig: KeyGroupConfig | undefined;
}

/**
 * A key group.
 *
 * A key group contains a list of public keys that you can use with [CloudFront signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html).
 *
 * @public
 */
export interface KeyGroup {
  /**
   * The identifier for the key group.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The date and time when the key group was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The key group configuration.
   *
   * @public
   */
  KeyGroupConfig: KeyGroupConfig | undefined;
}

/**
 * @public
 */
export interface CreateKeyGroupResult {
  /**
   * The key group that was just created.
   *
   * @public
   */
  KeyGroup?: KeyGroup | undefined;

  /**
   * The URL of the key group.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The identifier for this version of the key group.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The import source for the key value store.
 *
 * @public
 */
export interface ImportSource {
  /**
   * The source type of the import source for the key value store.
   *
   * @public
   */
  SourceType: ImportSourceType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the import source for the key value store.
   *
   * @public
   */
  SourceARN: string | undefined;
}

/**
 * @public
 */
export interface CreateKeyValueStoreRequest {
  /**
   * The name of the key value store. The minimum length is 1 character and the maximum length is 64 characters.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The comment of the key value store.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The S3 bucket that provides the source for the import. The source must be in a valid JSON format.
   *
   * @public
   */
  ImportSource?: ImportSource | undefined;

  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags?: Tags | undefined;
}

/**
 * The key value store. Use this to separate data from function code, allowing you to update data without having to publish a new version of a function. The key value store holds keys and their corresponding values.
 *
 * @public
 */
export interface KeyValueStore {
  /**
   * The name of the key value store.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique Id for the key value store.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A comment for the key value store.
   *
   * @public
   */
  Comment: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the key value store.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * The status of the key value store.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The last-modified time of the key value store.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateKeyValueStoreResult {
  /**
   * The resulting key value store.
   *
   * @public
   */
  KeyValueStore?: KeyValueStore | undefined;

  /**
   * The `ETag` in the resulting key value store.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The location of the resulting key value store.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * A subscription configuration for additional CloudWatch metrics.
 *
 * @public
 */
export interface RealtimeMetricsSubscriptionConfig {
  /**
   * A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
   *
   * @public
   */
  RealtimeMetricsSubscriptionStatus: RealtimeMetricsSubscriptionStatus | undefined;
}

/**
 * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
 *
 * @public
 */
export interface MonitoringSubscription {
  /**
   * A subscription configuration for additional CloudWatch metrics.
   *
   * @public
   */
  RealtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfig | undefined;
}

/**
 * @public
 */
export interface CreateMonitoringSubscriptionRequest {
  /**
   * The ID of the distribution that you are enabling metrics for.
   *
   * @public
   */
  DistributionId: string | undefined;

  /**
   * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
   *
   * @public
   */
  MonitoringSubscription: MonitoringSubscription | undefined;
}

/**
 * @public
 */
export interface CreateMonitoringSubscriptionResult {
  /**
   * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
   *
   * @public
   */
  MonitoringSubscription?: MonitoringSubscription | undefined;
}

/**
 * A CloudFront origin access control configuration.
 *
 * @public
 */
export interface OriginAccessControlConfig {
  /**
   * A name to identify the origin access control. You can specify up to 64 characters.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the origin access control.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid values are `sigv4` and `sigv4a`.
   *
   * @public
   */
  SigningProtocol: OriginAccessControlSigningProtocols | undefined;

  /**
   * Specifies which requests CloudFront signs (adds authentication information to). Specify `always` for the most common use case. For more information, see [origin access control advanced settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings) in the *Amazon CloudFront Developer Guide*.
   *
   * This field can have one of the following values:
   *
   * - `always` – CloudFront signs all origin requests, overwriting the `Authorization` header from the viewer request if one exists.
   * - `never` – CloudFront doesn't sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.
   * - `no-override` – If the viewer request doesn't contain the `Authorization` header, then CloudFront signs the origin request. If the viewer request contains the `Authorization` header, then CloudFront doesn't sign the origin request and instead passes along the `Authorization` header from the viewer request. **WARNING: To pass along the `Authorization` header from the viewer request, you *must* add the `Authorization` header to a [cache policy](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html) for all cache behaviors that use origins associated with this origin access control.**
   * - `always-amz-auth` – CloudFront signs all origin requests with Amazon authentication headers. If the viewer request contains the `Authorization` header, then CloudFront also forwards that header to the origin. This value is only valid with Lambda-Web origins. **WARNING: To forward the `Authorization` header from the viewer request, you *must* add the `Authorization` header to a [cache policy](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html) for all cache behaviors that use origins associated with this origin access control.**
   *
   * @public
   */
  SigningBehavior: OriginAccessControlSigningBehaviors | undefined;

  /**
   * The type of origin that this origin access control is for.
   *
   * @public
   */
  OriginAccessControlOriginType: OriginAccessControlOriginTypes | undefined;
}

/**
 * @public
 */
export interface CreateOriginAccessControlRequest {
  /**
   * Contains the origin access control.
   *
   * @public
   */
  OriginAccessControlConfig: OriginAccessControlConfig | undefined;
}

/**
 * A CloudFront origin access control, including its unique identifier.
 *
 * @public
 */
export interface OriginAccessControl {
  /**
   * The unique identifier of the origin access control.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The origin access control.
   *
   * @public
   */
  OriginAccessControlConfig?: OriginAccessControlConfig | undefined;
}

/**
 * @public
 */
export interface CreateOriginAccessControlResult {
  /**
   * Contains an origin access control.
   *
   * @public
   */
  OriginAccessControl?: OriginAccessControl | undefined;

  /**
   * The URL of the origin access control.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The version identifier for the current version of the origin access control.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
 *
 * @public
 */
export interface OriginRequestPolicyCookiesConfig {
  /**
   * Determines whether cookies in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:
   *
   * - `none` – No cookies in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to `none`, any cookies that are listed in a `CachePolicy` *are* included in origin requests.
   * - `whitelist` – Only the cookies in viewer requests that are listed in the `CookieNames` type are included in requests that CloudFront sends to the origin.
   * - `all` – All cookies in viewer requests are included in requests that CloudFront sends to the origin.
   * - `allExcept` – All cookies in viewer requests are included in requests that CloudFront sends to the origin, ***except*** for those listed in the `CookieNames` type, which are not included.
   *
   * @public
   */
  CookieBehavior: OriginRequestPolicyCookieBehavior | undefined;

  /**
   * Contains a list of cookie names.
   *
   * @public
   */
  Cookies?: CookieNames | undefined;
}

/**
 * An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.
 *
 * @public
 */
export interface OriginRequestPolicyHeadersConfig {
  /**
   * Determines whether any HTTP headers are included in requests that CloudFront sends to the origin. Valid values are:
   *
   * - `none` – No HTTP headers in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to `none`, any headers that are listed in a `CachePolicy` *are* included in origin requests.
   * - `whitelist` – Only the HTTP headers that are listed in the `Headers` type are included in requests that CloudFront sends to the origin.
   * - `allViewer` – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin.
   * - `allViewerAndWhitelistCloudFront` – All HTTP headers in viewer requests and the additional CloudFront headers that are listed in the `Headers` type are included in requests that CloudFront sends to the origin. The additional headers are added by CloudFront.
   * - `allExcept` – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin, ***except*** for those listed in the `Headers` type, which are not included.
   *
   * @public
   */
  HeaderBehavior: OriginRequestPolicyHeaderBehavior | undefined;

  /**
   * Contains a list of HTTP header names.
   *
   * @public
   */
  Headers?: Headers | undefined;
}

/**
 * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin.
 *
 * @public
 */
export interface OriginRequestPolicyQueryStringsConfig {
  /**
   * Determines whether any URL query strings in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:
   *
   * - `none` – No query strings in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to `none`, any query strings that are listed in a `CachePolicy` *are* included in origin requests.
   * - `whitelist` – Only the query strings in viewer requests that are listed in the `QueryStringNames` type are included in requests that CloudFront sends to the origin.
   * - `all` – All query strings in viewer requests are included in requests that CloudFront sends to the origin.
   * - `allExcept` – All query strings in viewer requests are included in requests that CloudFront sends to the origin, ***except*** for those listed in the `QueryStringNames` type, which are not included.
   *
   * @public
   */
  QueryStringBehavior: OriginRequestPolicyQueryStringBehavior | undefined;

  /**
   * Contains the specific query strings in viewer requests that either ***are*** or ***are not*** included in requests that CloudFront sends to the origin. The behavior depends on whether the `QueryStringBehavior` field in the `OriginRequestPolicyQueryStringsConfig` type is set to `whitelist` (the listed query strings ***are*** included) or `allExcept` (the listed query strings ***are not*** included, but all other query strings are).
   *
   * @public
   */
  QueryStrings?: QueryStringNames | undefined;
}

/**
 * An origin request policy configuration.
 *
 * This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:
 *
 * - The request body and the URL path (without the domain name) from the viewer request.
 * - The headers that CloudFront automatically includes in every origin request, including `Host`, `User-Agent`, and `X-Amz-Cf-Id`.
 * - All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.
 *
 * CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use `CachePolicy`.
 *
 * @public
 */
export interface OriginRequestPolicyConfig {
  /**
   * A comment to describe the origin request policy. The comment cannot be longer than 128 characters.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * A unique name to identify the origin request policy.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The HTTP headers to include in origin requests. These can include headers from viewer requests and additional headers added by CloudFront.
   *
   * @public
   */
  HeadersConfig: OriginRequestPolicyHeadersConfig | undefined;

  /**
   * The cookies from viewer requests to include in origin requests.
   *
   * @public
   */
  CookiesConfig: OriginRequestPolicyCookiesConfig | undefined;

  /**
   * The URL query strings from viewer requests to include in origin requests.
   *
   * @public
   */
  QueryStringsConfig: OriginRequestPolicyQueryStringsConfig | undefined;
}

/**
 * @public
 */
export interface CreateOriginRequestPolicyRequest {
  /**
   * An origin request policy configuration.
   *
   * @public
   */
  OriginRequestPolicyConfig: OriginRequestPolicyConfig | undefined;
}

/**
 * An origin request policy.
 *
 * When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:
 *
 * - The request body and the URL path (without the domain name) from the viewer request.
 * - The headers that CloudFront automatically includes in every origin request, including `Host`, `User-Agent`, and `X-Amz-Cf-Id`.
 * - All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.
 *
 * CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use `CachePolicy`.
 *
 * @public
 */
export interface OriginRequestPolicy {
  /**
   * The unique identifier for the origin request policy.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The date and time when the origin request policy was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The origin request policy configuration.
   *
   * @public
   */
  OriginRequestPolicyConfig: OriginRequestPolicyConfig | undefined;
}

/**
 * @public
 */
export interface CreateOriginRequestPolicyResult {
  /**
   * An origin request policy.
   *
   * @public
   */
  OriginRequestPolicy?: OriginRequestPolicy | undefined;

  /**
   * The fully qualified URI of the origin request policy just created.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The current version of the origin request policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * Configuration information about a public key that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).
 *
 * CloudFront supports signed URLs and signed cookies with RSA 2048 or ECDSA 256 key signatures. Field-level encryption is only compatible with RSA 2048 key signatures.
 *
 * @public
 */
export interface PublicKeyConfig {
  /**
   * A string included in the request to help make sure that the request can't be replayed.
   *
   * @public
   */
  CallerReference: string | undefined;

  /**
   * A name to help identify the public key.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The public key that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).
   *
   * @public
   */
  EncodedKey: string | undefined;

  /**
   * A comment to describe the public key. The comment cannot be longer than 128 characters.
   *
   * @public
   */
  Comment?: string | undefined;
}

/**
 * @public
 */
export interface CreatePublicKeyRequest {
  /**
   * A CloudFront public key configuration.
   *
   * @public
   */
  PublicKeyConfig: PublicKeyConfig | undefined;
}

/**
 * A public key that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).
 *
 * CloudFront supports signed URLs and signed cookies with RSA 2048 or ECDSA 256 key signatures. Field-level encryption is only compatible with RSA 2048 key signatures.
 *
 * @public
 */
export interface PublicKey {
  /**
   * The identifier of the public key.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The date and time when the public key was uploaded.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * Configuration information about a public key that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).
   *
   * @public
   */
  PublicKeyConfig: PublicKeyConfig | undefined;
}

/**
 * @public
 */
export interface CreatePublicKeyResult {
  /**
   * The public key.
   *
   * @public
   */
  PublicKey?: PublicKey | undefined;

  /**
   * The URL of the public key.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The identifier for this version of the public key.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
 *
 * @public
 */
export interface KinesisStreamConfig {
  /**
   * The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream.
   *
   * For more information the IAM role, see [Real-time log configuration IAM role](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data.
   *
   * @public
   */
  StreamARN: string | undefined;
}

/**
 * Contains information about the Amazon Kinesis data stream where you're sending real-time log data in a real-time log configuration.
 *
 * @public
 */
export interface EndPoint {
  /**
   * The type of data stream where you are sending real-time log data. The only valid value is `Kinesis`.
   *
   * @public
   */
  StreamType: string | undefined;

  /**
   * Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.
   *
   * @public
   */
  KinesisStreamConfig?: KinesisStreamConfig | undefined;
}

/**
 * @public
 */
export interface CreateRealtimeLogConfigRequest {
  /**
   * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
   *
   * @public
   */
  EndPoints: EndPoint[] | undefined;

  /**
   * A list of fields to include in each real-time log record.
   *
   * For more information about fields, see [Real-time log configuration fields](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  Fields: string[] | undefined;

  /**
   * A unique name to identify this real-time log configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The sampling rate for this real-time log configuration. You can specify a whole number between 1 and 100 (inclusive) to determine the percentage of viewer requests that are represented in the real-time log data.
   *
   * @public
   */
  SamplingRate: number | undefined;
}

/**
 * A real-time log configuration.
 *
 * @public
 */
export interface RealtimeLogConfig {
  /**
   * The Amazon Resource Name (ARN) of this real-time log configuration.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * The unique name of this real-time log configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. The sampling rate is an integer between 1 and 100, inclusive.
   *
   * @public
   */
  SamplingRate: number | undefined;

  /**
   * Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration.
   *
   * @public
   */
  EndPoints: EndPoint[] | undefined;

  /**
   * A list of fields that are included in each real-time log record. In an API response, the fields are provided in the same order in which they are sent to the Amazon Kinesis data stream.
   *
   * For more information about fields, see [Real-time log configuration fields](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  Fields: string[] | undefined;
}

/**
 * @public
 */
export interface CreateRealtimeLogConfigResult {
  /**
   * A real-time log configuration.
   *
   * @public
   */
  RealtimeLogConfig?: RealtimeLogConfig | undefined;
}

/**
 * A list of HTTP header names that CloudFront includes as values for the `Access-Control-Allow-Headers` HTTP response header.
 *
 * For more information about the `Access-Control-Allow-Headers` HTTP response header, see [Access-Control-Allow-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) in the MDN Web Docs.
 *
 * @public
 */
export interface ResponseHeadersPolicyAccessControlAllowHeaders {
  /**
   * The number of HTTP header names in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The list of HTTP header names. You can specify `*` to allow all headers.
   *
   * @public
   */
  Items: string[] | undefined;
}

/**
 * A list of HTTP methods that CloudFront includes as values for the `Access-Control-Allow-Methods` HTTP response header.
 *
 * For more information about the `Access-Control-Allow-Methods` HTTP response header, see [Access-Control-Allow-Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) in the MDN Web Docs.
 *
 * @public
 */
export interface ResponseHeadersPolicyAccessControlAllowMethods {
  /**
   * The number of HTTP methods in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The list of HTTP methods. Valid values are:
   *
   * - `GET`
   * - `DELETE`
   * - `HEAD`
   * - `OPTIONS`
   * - `PATCH`
   * - `POST`
   * - `PUT`
   * - `ALL`
   *
   * `ALL` is a special value that includes all of the listed HTTP methods.
   *
   * @public
   */
  Items: ResponseHeadersPolicyAccessControlAllowMethodsValues[] | undefined;
}

/**
 * A list of origins (domain names) that CloudFront can use as the value for the `Access-Control-Allow-Origin` HTTP response header.
 *
 * For more information about the `Access-Control-Allow-Origin` HTTP response header, see [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
 *
 * @public
 */
export interface ResponseHeadersPolicyAccessControlAllowOrigins {
  /**
   * The number of origins in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The list of origins (domain names). You can specify `*` to allow all origins.
   *
   * @public
   */
  Items: string[] | undefined;
}

/**
 * A list of HTTP headers that CloudFront includes as values for the `Access-Control-Expose-Headers` HTTP response header.
 *
 * For more information about the `Access-Control-Expose-Headers` HTTP response header, see [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
 *
 * @public
 */
export interface ResponseHeadersPolicyAccessControlExposeHeaders {
  /**
   * The number of HTTP headers in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The list of HTTP headers. You can specify `*` to expose all headers.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS). CloudFront adds these headers to HTTP responses that it sends for CORS requests that match a cache behavior associated with this response headers policy.
 *
 * For more information about CORS, see [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) in the MDN Web Docs.
 *
 * @public
 */
export interface ResponseHeadersPolicyCorsConfig {
  /**
   * A list of origins (domain names) that CloudFront can use as the value for the `Access-Control-Allow-Origin` HTTP response header.
   *
   * For more information about the `Access-Control-Allow-Origin` HTTP response header, see [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
   *
   * @public
   */
  AccessControlAllowOrigins: ResponseHeadersPolicyAccessControlAllowOrigins | undefined;

  /**
   * A list of HTTP header names that CloudFront includes as values for the `Access-Control-Allow-Headers` HTTP response header.
   *
   * For more information about the `Access-Control-Allow-Headers` HTTP response header, see [Access-Control-Allow-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) in the MDN Web Docs.
   *
   * @public
   */
  AccessControlAllowHeaders: ResponseHeadersPolicyAccessControlAllowHeaders | undefined;

  /**
   * A list of HTTP methods that CloudFront includes as values for the `Access-Control-Allow-Methods` HTTP response header.
   *
   * For more information about the `Access-Control-Allow-Methods` HTTP response header, see [Access-Control-Allow-Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) in the MDN Web Docs.
   *
   * @public
   */
  AccessControlAllowMethods: ResponseHeadersPolicyAccessControlAllowMethods | undefined;

  /**
   * A Boolean that CloudFront uses as the value for the `Access-Control-Allow-Credentials` HTTP response header.
   *
   * For more information about the `Access-Control-Allow-Credentials` HTTP response header, see [Access-Control-Allow-Credentials](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) in the MDN Web Docs.
   *
   * @public
   */
  AccessControlAllowCredentials: boolean | undefined;

  /**
   * A list of HTTP headers that CloudFront includes as values for the `Access-Control-Expose-Headers` HTTP response header.
   *
   * For more information about the `Access-Control-Expose-Headers` HTTP response header, see [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
   *
   * @public
   */
  AccessControlExposeHeaders?: ResponseHeadersPolicyAccessControlExposeHeaders | undefined;

  /**
   * A number that CloudFront uses as the value for the `Access-Control-Max-Age` HTTP response header.
   *
   * For more information about the `Access-Control-Max-Age` HTTP response header, see [Access-Control-Max-Age](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age) in the MDN Web Docs.
   *
   * @public
   */
  AccessControlMaxAgeSec?: number | undefined;

  /**
   * A Boolean that determines whether CloudFront overrides HTTP response headers received from the origin with the ones specified in this response headers policy.
   *
   * @public
   */
  OriginOverride: boolean | undefined;
}

/**
 * An HTTP response header name and its value. CloudFront includes this header in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.
 *
 * @public
 */
export interface ResponseHeadersPolicyCustomHeader {
  /**
   * The HTTP response header name.
   *
   * @public
   */
  Header: string | undefined;

  /**
   * The value for the HTTP response header.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * A Boolean that determines whether CloudFront overrides a response header with the same name received from the origin with the header specified here.
   *
   * @public
   */
  Override: boolean | undefined;
}

/**
 * A list of HTTP response header names and their values. CloudFront includes these headers in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.
 *
 * @public
 */
export interface ResponseHeadersPolicyCustomHeadersConfig {
  /**
   * The number of HTTP response headers in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The list of HTTP response headers and their values.
   *
   * @public
   */
  Items?: ResponseHeadersPolicyCustomHeader[] | undefined;
}

/**
 * The name of an HTTP header that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.
 *
 * @public
 */
export interface ResponseHeadersPolicyRemoveHeader {
  /**
   * The HTTP header name.
   *
   * @public
   */
  Header: string | undefined;
}

/**
 * A list of HTTP header names that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.
 *
 * @public
 */
export interface ResponseHeadersPolicyRemoveHeadersConfig {
  /**
   * The number of HTTP header names in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The list of HTTP header names.
   *
   * @public
   */
  Items?: ResponseHeadersPolicyRemoveHeader[] | undefined;
}

/**
 * The policy directives and their values that CloudFront includes as values for the `Content-Security-Policy` HTTP response header.
 *
 * For more information about the `Content-Security-Policy` HTTP response header, see [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
 *
 * @public
 */
export interface ResponseHeadersPolicyContentSecurityPolicy {
  /**
   * A Boolean that determines whether CloudFront overrides the `Content-Security-Policy` HTTP response header received from the origin with the one specified in this response headers policy.
   *
   * @public
   */
  Override: boolean | undefined;

  /**
   * The policy directives and their values that CloudFront includes as values for the `Content-Security-Policy` HTTP response header.
   *
   * @public
   */
  ContentSecurityPolicy: string | undefined;
}

/**
 * Determines whether CloudFront includes the `X-Content-Type-Options` HTTP response header with its value set to `nosniff`.
 *
 * For more information about the `X-Content-Type-Options` HTTP response header, see [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) in the MDN Web Docs.
 *
 * @public
 */
export interface ResponseHeadersPolicyContentTypeOptions {
  /**
   * A Boolean that determines whether CloudFront overrides the `X-Content-Type-Options` HTTP response header received from the origin with the one specified in this response headers policy.
   *
   * @public
   */
  Override: boolean | undefined;
}

/**
 * Determines whether CloudFront includes the `X-Frame-Options` HTTP response header and the header's value.
 *
 * For more information about the `X-Frame-Options` HTTP response header, see [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
 *
 * @public
 */
export interface ResponseHeadersPolicyFrameOptions {
  /**
   * A Boolean that determines whether CloudFront overrides the `X-Frame-Options` HTTP response header received from the origin with the one specified in this response headers policy.
   *
   * @public
   */
  Override: boolean | undefined;

  /**
   * The value of the `X-Frame-Options` HTTP response header. Valid values are `DENY` and `SAMEORIGIN`.
   *
   * For more information about these values, see [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
   *
   * @public
   */
  FrameOption: FrameOptionsList | undefined;
}

/**
 * Determines whether CloudFront includes the `Referrer-Policy` HTTP response header and the header's value.
 *
 * For more information about the `Referrer-Policy` HTTP response header, see [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
 *
 * @public
 */
export interface ResponseHeadersPolicyReferrerPolicy {
  /**
   * A Boolean that determines whether CloudFront overrides the `Referrer-Policy` HTTP response header received from the origin with the one specified in this response headers policy.
   *
   * @public
   */
  Override: boolean | undefined;

  /**
   * The value of the `Referrer-Policy` HTTP response header. Valid values are:
   *
   * - `no-referrer`
   * - `no-referrer-when-downgrade`
   * - `origin`
   * - `origin-when-cross-origin`
   * - `same-origin`
   * - `strict-origin`
   * - `strict-origin-when-cross-origin`
   * - `unsafe-url`
   *
   * For more information about these values, see [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
   *
   * @public
   */
  ReferrerPolicy: ReferrerPolicyList | undefined;
}

/**
 * Determines whether CloudFront includes the `Strict-Transport-Security` HTTP response header and the header's value.
 *
 * For more information about the `Strict-Transport-Security` HTTP response header, see [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) in the MDN Web Docs.
 *
 * @public
 */
export interface ResponseHeadersPolicyStrictTransportSecurity {
  /**
   * A Boolean that determines whether CloudFront overrides the `Strict-Transport-Security` HTTP response header received from the origin with the one specified in this response headers policy.
   *
   * @public
   */
  Override: boolean | undefined;

  /**
   * A Boolean that determines whether CloudFront includes the `includeSubDomains` directive in the `Strict-Transport-Security` HTTP response header.
   *
   * @public
   */
  IncludeSubdomains?: boolean | undefined;

  /**
   * A Boolean that determines whether CloudFront includes the `preload` directive in the `Strict-Transport-Security` HTTP response header.
   *
   * @public
   */
  Preload?: boolean | undefined;

  /**
   * A number that CloudFront uses as the value for the `max-age` directive in the `Strict-Transport-Security` HTTP response header.
   *
   * @public
   */
  AccessControlMaxAgeSec: number | undefined;
}

/**
 * Determines whether CloudFront includes the `X-XSS-Protection` HTTP response header and the header's value.
 *
 * For more information about the `X-XSS-Protection` HTTP response header, see [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
 *
 * @public
 */
export interface ResponseHeadersPolicyXSSProtection {
  /**
   * A Boolean that determines whether CloudFront overrides the `X-XSS-Protection` HTTP response header received from the origin with the one specified in this response headers policy.
   *
   * @public
   */
  Override: boolean | undefined;

  /**
   * A Boolean that determines the value of the `X-XSS-Protection` HTTP response header. When this setting is `true`, the value of the `X-XSS-Protection` header is `1`. When this setting is `false`, the value of the `X-XSS-Protection` header is `0`.
   *
   * For more information about these settings, see [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
   *
   * @public
   */
  Protection: boolean | undefined;

  /**
   * A Boolean that determines whether CloudFront includes the `mode=block` directive in the `X-XSS-Protection` header.
   *
   * For more information about this directive, see [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
   *
   * @public
   */
  ModeBlock?: boolean | undefined;

  /**
   * A reporting URI, which CloudFront uses as the value of the `report` directive in the `X-XSS-Protection` header.
   *
   * You cannot specify a `ReportUri` when `ModeBlock` is `true`.
   *
   * For more information about using a reporting URL, see [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
   *
   * @public
   */
  ReportUri?: string | undefined;
}

/**
 * A configuration for a set of security-related HTTP response headers. CloudFront adds these headers to HTTP responses that it sends for requests that match a cache behavior associated with this response headers policy.
 *
 * @public
 */
export interface ResponseHeadersPolicySecurityHeadersConfig {
  /**
   * Determines whether CloudFront includes the `X-XSS-Protection` HTTP response header and the header's value.
   *
   * For more information about the `X-XSS-Protection` HTTP response header, see [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
   *
   * @public
   */
  XSSProtection?: ResponseHeadersPolicyXSSProtection | undefined;

  /**
   * Determines whether CloudFront includes the `X-Frame-Options` HTTP response header and the header's value.
   *
   * For more information about the `X-Frame-Options` HTTP response header, see [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
   *
   * @public
   */
  FrameOptions?: ResponseHeadersPolicyFrameOptions | undefined;

  /**
   * Determines whether CloudFront includes the `Referrer-Policy` HTTP response header and the header's value.
   *
   * For more information about the `Referrer-Policy` HTTP response header, see [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
   *
   * @public
   */
  ReferrerPolicy?: ResponseHeadersPolicyReferrerPolicy | undefined;

  /**
   * The policy directives and their values that CloudFront includes as values for the `Content-Security-Policy` HTTP response header.
   *
   * For more information about the `Content-Security-Policy` HTTP response header, see [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
   *
   * @public
   */
  ContentSecurityPolicy?: ResponseHeadersPolicyContentSecurityPolicy | undefined;

  /**
   * Determines whether CloudFront includes the `X-Content-Type-Options` HTTP response header with its value set to `nosniff`.
   *
   * For more information about the `X-Content-Type-Options` HTTP response header, see [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) in the MDN Web Docs.
   *
   * @public
   */
  ContentTypeOptions?: ResponseHeadersPolicyContentTypeOptions | undefined;

  /**
   * Determines whether CloudFront includes the `Strict-Transport-Security` HTTP response header and the header's value.
   *
   * For more information about the `Strict-Transport-Security` HTTP response header, see [Security headers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#understanding-response-headers-policies-security) in the *Amazon CloudFront Developer Guide* and [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) in the MDN Web Docs.
   *
   * @public
   */
  StrictTransportSecurity?: ResponseHeadersPolicyStrictTransportSecurity | undefined;
}

/**
 * A configuration for enabling the `Server-Timing` header in HTTP responses sent from CloudFront. CloudFront adds this header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.
 *
 * You can use the `Server-Timing` header to view metrics that can help you gain insights about the behavior and performance of CloudFront. For example, you can see which cache layer served a cache hit, or the first byte latency from the origin when there was a cache miss. You can use the metrics in the `Server-Timing` header to troubleshoot issues or test the efficiency of your CloudFront configuration. For more information, see [Server-Timing header](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#server-timing-header) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface ResponseHeadersPolicyServerTimingHeadersConfig {
  /**
   * A Boolean that determines whether CloudFront adds the `Server-Timing` header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * A number 0–100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the `Server-Timing` header to. When you set the sampling rate to 100, CloudFront adds the `Server-Timing` header to the HTTP response for every request that matches the cache behavior that this response headers policy is attached to. When you set it to 50, CloudFront adds the header to 50% of the responses for requests that match the cache behavior. You can set the sampling rate to any number 0–100 with up to four decimal places.
   *
   * @public
   */
  SamplingRate?: number | undefined;
}

/**
 * A response headers policy configuration.
 *
 * A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.
 *
 * @public
 */
export interface ResponseHeadersPolicyConfig {
  /**
   * A comment to describe the response headers policy.
   *
   * The comment cannot be longer than 128 characters.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * A name to identify the response headers policy.
   *
   * The name must be unique for response headers policies in this Amazon Web Services account.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).
   *
   * @public
   */
  CorsConfig?: ResponseHeadersPolicyCorsConfig | undefined;

  /**
   * A configuration for a set of security-related HTTP response headers.
   *
   * @public
   */
  SecurityHeadersConfig?: ResponseHeadersPolicySecurityHeadersConfig | undefined;

  /**
   * A configuration for enabling the `Server-Timing` header in HTTP responses sent from CloudFront.
   *
   * @public
   */
  ServerTimingHeadersConfig?: ResponseHeadersPolicyServerTimingHeadersConfig | undefined;

  /**
   * A configuration for a set of custom HTTP response headers.
   *
   * @public
   */
  CustomHeadersConfig?: ResponseHeadersPolicyCustomHeadersConfig | undefined;

  /**
   * A configuration for a set of HTTP headers to remove from the HTTP response.
   *
   * @public
   */
  RemoveHeadersConfig?: ResponseHeadersPolicyRemoveHeadersConfig | undefined;
}

/**
 * @public
 */
export interface CreateResponseHeadersPolicyRequest {
  /**
   * Contains metadata about the response headers policy, and a set of configurations that specify the HTTP headers.
   *
   * @public
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig | undefined;
}

/**
 * A response headers policy.
 *
 * A response headers policy contains information about a set of HTTP response headers.
 *
 * After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.
 *
 * For more information, see [Adding or removing HTTP headers in CloudFront responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface ResponseHeadersPolicy {
  /**
   * The identifier for the response headers policy.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The date and time when the response headers policy was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * A response headers policy configuration.
   *
   * @public
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig | undefined;
}

/**
 * @public
 */
export interface CreateResponseHeadersPolicyResult {
  /**
   * Contains a response headers policy.
   *
   * @public
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy | undefined;

  /**
   * The URL of the response headers policy.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The version identifier for the current version of the response headers policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * A complex type that controls whether access logs are written for this streaming distribution.
 *
 * @public
 */
export interface StreamingLoggingConfig {
  /**
   * Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't want to enable logging when you create a streaming distribution or if you want to disable logging for an existing streaming distribution, specify `false` for `Enabled`, and specify `empty Bucket` and `Prefix` elements. If you specify `false` for `Enabled` but you specify values for `Bucket` and `Prefix`, the values are automatically deleted.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The Amazon S3 bucket to store the access logs in, for example, `amzn-s3-demo-bucket.s3.amazonaws.com`.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * An optional string that you want CloudFront to prefix to the access log filenames for this streaming distribution, for example, `myprefix/`. If you want to enable logging, but you don't want to specify a prefix, you still must include an empty `Prefix` element in the `Logging` element.
   *
   * @public
   */
  Prefix: string | undefined;
}

/**
 * A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
 *
 * @public
 */
export interface S3Origin {
  /**
   * The DNS name of the Amazon S3 origin.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The CloudFront origin access identity to associate with the distribution. Use an origin access identity to configure the distribution so that end users can only access objects in an Amazon S3 bucket through CloudFront.
   *
   * If you want end users to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty `OriginAccessIdentity` element.
   *
   * To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty `OriginAccessIdentity` element.
   *
   * To replace the origin access identity, update the distribution configuration and specify the new origin access identity.
   *
   * For more information, see [Using an Origin Access Identity to Restrict Access to Your Amazon S3 Content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  OriginAccessIdentity: string | undefined;
}

/**
 * The RTMP distribution's configuration information.
 *
 * @public
 */
export interface StreamingDistributionConfig {
  /**
   * A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.
   *
   * If the value of `CallerReference` is new (regardless of the content of the `StreamingDistributionConfig` object), CloudFront creates a new distribution.
   *
   * If `CallerReference` is a value that you already sent in a previous request to create a distribution, CloudFront returns a `DistributionAlreadyExists` error.
   *
   * @public
   */
  CallerReference: string | undefined;

  /**
   * A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
   *
   * @public
   */
  S3Origin: S3Origin | undefined;

  /**
   * A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution.
   *
   * @public
   */
  Aliases?: Aliases | undefined;

  /**
   * Any comments you want to include about the streaming distribution.
   *
   * @public
   */
  Comment: string | undefined;

  /**
   * A complex type that controls whether access logs are written for the streaming distribution.
   *
   * @public
   */
  Logging?: StreamingLoggingConfig | undefined;

  /**
   * A complex type that specifies any Amazon Web Services accounts that you want to permit to create signed URLs for private content. If you want the distribution to use signed URLs, include this element; if you want the distribution to use public URLs, remove this element. For more information, see [Serving Private Content through CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  TrustedSigners: TrustedSigners | undefined;

  /**
   * A complex type that contains information about price class for this streaming distribution.
   *
   * @public
   */
  PriceClass?: PriceClass | undefined;

  /**
   * Whether the streaming distribution is enabled to accept user requests for content.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * The request to create a new streaming distribution.
 *
 * @public
 */
export interface CreateStreamingDistributionRequest {
  /**
   * The streaming distribution's configuration information.
   *
   * @public
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;
}

/**
 * A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery.
 *
 * @public
 */
export interface StreamingDistribution {
  /**
   * The identifier for the RTMP distribution. For example: `EGTXBD79EXAMPLE`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ARN (Amazon Resource Name) for the distribution. For example: `arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5`, where `123456789012` is your Amazon Web Services account ID.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * The current status of the RTMP distribution. When the status is `Deployed`, the distribution's information is propagated to all CloudFront edge locations.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The date and time that the distribution was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The domain name that corresponds to the streaming distribution, for example, `s5c39gqb8ow64r.cloudfront.net`.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A complex type that lists the Amazon Web Services accounts, if any, that you included in the `TrustedSigners` complex type for this distribution. These are the accounts that you want to allow to create signed URLs for private content.
   *
   * The `Signer` complex type lists the Amazon Web Services account number of the trusted signer or `self` if the signer is the Amazon Web Services account that created the distribution. The `Signer` element also includes the IDs of any active CloudFront key pairs that are associated with the trusted signer's Amazon Web Services account. If no `KeyPairId` element appears for a `Signer`, that signer can't create signed URLs.
   *
   * For more information, see [Serving Private Content through CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  ActiveTrustedSigners: ActiveTrustedSigners | undefined;

  /**
   * The current configuration information for the RTMP distribution.
   *
   * @public
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface CreateStreamingDistributionResult {
  /**
   * The streaming distribution's information.
   *
   * @public
   */
  StreamingDistribution?: StreamingDistribution | undefined;

  /**
   * The fully qualified URI of the new streaming distribution resource just created.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The current version of the streaming distribution created.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
 *
 * @public
 */
export interface StreamingDistributionConfigWithTags {
  /**
   * A streaming distribution Configuration.
   *
   * @public
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;

  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags: Tags | undefined;
}

/**
 * The request to create a new streaming distribution with tags.
 *
 * @public
 */
export interface CreateStreamingDistributionWithTagsRequest {
  /**
   * The streaming distribution's configuration information.
   *
   * @public
   */
  StreamingDistributionConfigWithTags: StreamingDistributionConfigWithTags | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface CreateStreamingDistributionWithTagsResult {
  /**
   * The streaming distribution's information.
   *
   * @public
   */
  StreamingDistribution?: StreamingDistribution | undefined;

  /**
   * The fully qualified URI of the new streaming distribution resource just created.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The current version of the distribution created.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrustStoreRequest {
  /**
   * A name for the trust store.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The CA certificates bundle source for the trust store.
   *
   * @public
   */
  CaCertificatesBundleSource: CaCertificatesBundleSource | undefined;

  /**
   * A Boolean that determines whether to use the CA certificate's OCSP endpoint to check certificate revocation status.
   *
   * @public
   */
  UseClientCertificateOCSPEndpoint?: boolean | undefined;

  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags?: Tags | undefined;
}

/**
 * A trust store.
 *
 * @public
 */
export interface TrustStore {
  /**
   * The trust store's ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The trust store's Amazon Resource Name (ARN).
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The trust store's name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The trust store's status.
   *
   * @public
   */
  Status?: TrustStoreStatus | undefined;

  /**
   * The trust store's number of CA certificates.
   *
   * @public
   */
  NumberOfCaCertificates?: number | undefined;

  /**
   * The trust store's last modified time.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The trust store's reason.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * A Boolean that determines whether the trust store uses the CA certificate's OCSP endpoint to check certificate revocation status.
   *
   * @public
   */
  UseClientCertificateOCSPEndpoint?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateTrustStoreResult {
  /**
   * The trust store.
   *
   * @public
   */
  TrustStore?: TrustStore | undefined;

  /**
   * The version identifier for the current version of the trust store.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * An Amazon CloudFront VPC origin endpoint configuration.
 *
 * @public
 */
export interface VpcOriginEndpointConfig {
  /**
   * The name of the CloudFront VPC origin endpoint configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ARN of the CloudFront VPC origin endpoint configuration.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The HTTP port for the CloudFront VPC origin endpoint configuration. The default value is `80`.
   *
   * @public
   */
  HTTPPort: number | undefined;

  /**
   * The HTTPS port of the CloudFront VPC origin endpoint configuration. The default value is `443`.
   *
   * @public
   */
  HTTPSPort: number | undefined;

  /**
   * The origin protocol policy for the CloudFront VPC origin endpoint configuration.
   *
   * @public
   */
  OriginProtocolPolicy: OriginProtocolPolicy | undefined;

  /**
   * A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.
   *
   * @public
   */
  OriginSslProtocols?: OriginSslProtocols | undefined;

  /**
   * The IP address type of the CloudFront VPC origin endpoint configuration. Valid values are `ipv4` and `dualstack`. IPv6-only is not supported for VPC origins.
   *
   * @public
   */
  IpAddressType?: VpcIpAddressType | undefined;
}

/**
 * @public
 */
export interface CreateVpcOriginRequest {
  /**
   * The VPC origin endpoint configuration.
   *
   * @public
   */
  VpcOriginEndpointConfig: VpcOriginEndpointConfig | undefined;

  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags?: Tags | undefined;
}

/**
 * An Amazon CloudFront VPC origin.
 *
 * @public
 */
export interface VpcOrigin {
  /**
   * The VPC origin ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The VPC origin ARN.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The account ID of the Amazon Web Services account that owns the VPC origin.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The VPC origin status.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The VPC origin created time.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The VPC origin last modified time.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The VPC origin endpoint configuration.
   *
   * @public
   */
  VpcOriginEndpointConfig: VpcOriginEndpointConfig | undefined;
}

/**
 * @public
 */
export interface CreateVpcOriginResult {
  /**
   * The VPC origin.
   *
   * @public
   */
  VpcOrigin?: VpcOrigin | undefined;

  /**
   * The VPC origin location.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The VPC origin ETag.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnycastIpListRequest {
  /**
   * The ID of the Anycast static IP list.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current version (`ETag` value) of the Anycast static IP list that you are deleting.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteCachePolicyRequest {
  /**
   * The unique identifier for the cache policy that you are deleting. To get the identifier, you can use `ListCachePolicies`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The version of the cache policy that you are deleting. The version is the cache policy's `ETag` value, which you can get using `ListCachePolicies`, `GetCachePolicy`, or `GetCachePolicyConfig`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * Deletes a origin access identity.
 *
 * @public
 */
export interface DeleteCloudFrontOriginAccessIdentityRequest {
  /**
   * The origin access identity's ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header you received from a previous `GET` or `PUT` request. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionFunctionRequest {
  /**
   * The connection function's ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current version (`ETag` value) of the connection function you are deleting.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionGroupRequest {
  /**
   * The ID of the connection group to delete.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the connection group to delete.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteContinuousDeploymentPolicyRequest {
  /**
   * The identifier of the continuous deployment policy that you are deleting.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current version (`ETag` value) of the continuous deployment policy that you are deleting.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * This action deletes a web distribution. To delete a web distribution using the CloudFront API, perform the following steps.
 *
 * **To delete a web distribution using the CloudFront API:**
 *
 * 1. Disable the web distribution
 * 2. Submit a `GET Distribution Config` request to get the current configuration and the `Etag` header for the distribution.
 * 3. Update the XML document that was returned in the response to your `GET Distribution Config` request to change the value of `Enabled` to `false`.
 * 4. Submit a `PUT Distribution Config` request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Set the value of the HTTP `If-Match` header to the value of the `ETag` header that CloudFront returned when you submitted the `GET Distribution Config` request in Step 2.
 * 5. Review the response to the `PUT Distribution Config` request to confirm that the distribution was successfully disabled.
 * 6. Submit a `GET Distribution` request to confirm that your changes have propagated. When propagation is complete, the value of `Status` is `Deployed`.
 * 7. Submit a `DELETE Distribution` request. Set the value of the HTTP `If-Match` header to the value of the `ETag` header that CloudFront returned when you submitted the `GET Distribution Config` request in Step 6.
 * 8. Review the response to your `DELETE Distribution` request to confirm that the distribution was successfully deleted.
 *
 * For information about deleting a distribution using the CloudFront console, see [Deleting a Distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface DeleteDistributionRequest {
  /**
   * The distribution ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when you disabled the distribution. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDistributionTenantRequest {
  /**
   * The ID of the distribution tenant to delete.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the distribution tenant. This value is returned in the response of the `GetDistributionTenant` API operation.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteFieldLevelEncryptionConfigRequest {
  /**
   * The ID of the configuration you want to delete from CloudFront.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the configuration identity to delete. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFieldLevelEncryptionProfileRequest {
  /**
   * Request the ID of the profile you want to delete from CloudFront.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the profile to delete. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionRequest {
  /**
   * The name of the function that you are deleting.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current version (`ETag` value) of the function that you are deleting, which you can get using `DescribeFunction`.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteKeyGroupRequest {
  /**
   * The identifier of the key group that you are deleting. To get the identifier, use `ListKeyGroups`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The version of the key group that you are deleting. The version is the key group's `ETag` value. To get the `ETag`, use `GetKeyGroup` or `GetKeyGroupConfig`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteKeyValueStoreRequest {
  /**
   * The name of the key value store.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The key value store to delete, if a match occurs.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitoringSubscriptionRequest {
  /**
   * The ID of the distribution that you are disabling metrics for.
   *
   * @public
   */
  DistributionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitoringSubscriptionResult {}

/**
 * @public
 */
export interface DeleteOriginAccessControlRequest {
  /**
   * The unique identifier of the origin access control that you are deleting.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current version (`ETag` value) of the origin access control that you are deleting.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteOriginRequestPolicyRequest {
  /**
   * The unique identifier for the origin request policy that you are deleting. To get the identifier, you can use `ListOriginRequestPolicies`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The version of the origin request policy that you are deleting. The version is the origin request policy's `ETag` value, which you can get using `ListOriginRequestPolicies`, `GetOriginRequestPolicy`, or `GetOriginRequestPolicyConfig`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeletePublicKeyRequest {
  /**
   * The ID of the public key you want to remove from CloudFront.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the public key identity to delete. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRealtimeLogConfigRequest {
  /**
   * The name of the real-time log configuration to delete.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the real-time log configuration to delete.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the CloudFront resource for which the resource policy should be deleted.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResponseHeadersPolicyRequest {
  /**
   * The identifier for the response headers policy that you are deleting.
   *
   * To get the identifier, you can use `ListResponseHeadersPolicies`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The version of the response headers policy that you are deleting.
   *
   * The version is the response headers policy's `ETag` value, which you can get using `ListResponseHeadersPolicies`, `GetResponseHeadersPolicy`, or `GetResponseHeadersPolicyConfig`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * The request to delete a streaming distribution.
 *
 * @public
 */
export interface DeleteStreamingDistributionRequest {
  /**
   * The distribution ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when you disabled the streaming distribution. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrustStoreRequest {
  /**
   * The trust store's ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current version (`ETag` value) of the trust store you are deleting.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcOriginRequest {
  /**
   * The VPC origin ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The version identifier of the VPC origin to delete. This is the `ETag` value returned in the response to GetVpcOrigin.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcOriginResult {
  /**
   * The VPC origin.
   *
   * @public
   */
  VpcOrigin?: VpcOrigin | undefined;

  /**
   * The VPC origin ETag.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionFunctionRequest {
  /**
   * The connection function's identifier.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The connection function's stage.
   *
   * @public
   */
  Stage?: FunctionStage | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionFunctionResult {
  /**
   * The connection function's summary.
   *
   * @public
   */
  ConnectionFunctionSummary?: ConnectionFunctionSummary | undefined;

  /**
   * The version identifier for the current version of the connection function.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFunctionRequest {
  /**
   * The name of the function that you are getting information about.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The function's stage, either `DEVELOPMENT` or `LIVE`.
   *
   * @public
   */
  Stage?: FunctionStage | undefined;
}

/**
 * @public
 */
export interface DescribeFunctionResult {
  /**
   * Contains configuration information and metadata about a CloudFront function.
   *
   * @public
   */
  FunctionSummary?: FunctionSummary | undefined;

  /**
   * The version identifier for the current version of the CloudFront function.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyValueStoreRequest {
  /**
   * The name of the key value store.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyValueStoreResult {
  /**
   * The resulting key value store.
   *
   * @public
   */
  KeyValueStore?: KeyValueStore | undefined;

  /**
   * The `ETag` of the resulting key value store.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDistributionTenantWebACLRequest {
  /**
   * The ID of the distribution tenant.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current version of the distribution tenant that you're disassociating from the WAF web ACL. This is the `ETag` value returned in the response to the `GetDistributionTenant` API operation.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDistributionTenantWebACLResult {
  /**
   * The ID of the distribution tenant.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The current version of the distribution tenant.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDistributionWebACLRequest {
  /**
   * The ID of the distribution.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the distribution that you're disassociating from the WAF web ACL.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDistributionWebACLResult {
  /**
   * The ID of the distribution.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The current version of the distribution.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetAnycastIpListRequest {
  /**
   * The ID of the Anycast static IP list.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetAnycastIpListResult {
  /**
   * The Anycast static IP list details.
   *
   * @public
   */
  AnycastIpList?: AnycastIpList | undefined;

  /**
   * The version identifier for the current version of the Anycast static IP list.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetCachePolicyRequest {
  /**
   * The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using `ListDistributions` or `GetDistribution`. If the cache policy is not attached to a cache behavior, you can get the identifier using `ListCachePolicies`.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetCachePolicyResult {
  /**
   * The cache policy.
   *
   * @public
   */
  CachePolicy?: CachePolicy | undefined;

  /**
   * The current version of the cache policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetCachePolicyConfigRequest {
  /**
   * The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using `ListDistributions` or `GetDistribution`. If the cache policy is not attached to a cache behavior, you can get the identifier using `ListCachePolicies`.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetCachePolicyConfigResult {
  /**
   * The cache policy configuration.
   *
   * @public
   */
  CachePolicyConfig?: CachePolicyConfig | undefined;

  /**
   * The current version of the cache policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The request to get an origin access identity's information.
 *
 * @public
 */
export interface GetCloudFrontOriginAccessIdentityRequest {
  /**
   * The identity's ID.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface GetCloudFrontOriginAccessIdentityResult {
  /**
   * The origin access identity's information.
   *
   * @public
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity | undefined;

  /**
   * The current version of the origin access identity's information. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The origin access identity's configuration information. For more information, see [CloudFrontOriginAccessIdentityConfig](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CloudFrontOriginAccessIdentityConfig.html).
 *
 * @public
 */
export interface GetCloudFrontOriginAccessIdentityConfigRequest {
  /**
   * The identity's ID.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface GetCloudFrontOriginAccessIdentityConfigResult {
  /**
   * The origin access identity's configuration information.
   *
   * @public
   */
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig | undefined;

  /**
   * The current version of the configuration. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionFunctionRequest {
  /**
   * The connection function's identifier.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The connection function's stage.
   *
   * @public
   */
  Stage?: FunctionStage | undefined;
}

/**
 * @public
 */
export interface GetConnectionFunctionResult {
  /**
   * The connection function's code.
   *
   * @public
   */
  ConnectionFunctionCode?: Uint8Array | undefined;

  /**
   * The version identifier for the current version of the connection function.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The connection function's content type.
   *
   * @public
   */
  ContentType?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionGroupRequest {
  /**
   * The ID, name, or Amazon Resource Name (ARN) of the connection group.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionGroupResult {
  /**
   * The connection group that you retrieved.
   *
   * @public
   */
  ConnectionGroup?: ConnectionGroup | undefined;

  /**
   * The current version of the connection group.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionGroupByRoutingEndpointRequest {
  /**
   * The routing endpoint for the target connection group, such as d111111abcdef8.cloudfront.net.
   *
   * @public
   */
  RoutingEndpoint: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionGroupByRoutingEndpointResult {
  /**
   * The connection group for your distribution tenants. When you first create a distribution tenant and you don't specify a connection group, CloudFront will automatically create a default connection group for you. When you create a new distribution tenant and don't specify a connection group, the default one will be associated with your distribution tenant.
   *
   * @public
   */
  ConnectionGroup?: ConnectionGroup | undefined;

  /**
   * The current version of the connection group.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetContinuousDeploymentPolicyRequest {
  /**
   * The identifier of the continuous deployment policy that you are getting.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetContinuousDeploymentPolicyResult {
  /**
   * A continuous deployment policy.
   *
   * @public
   */
  ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy | undefined;

  /**
   * The version identifier for the current version of the continuous deployment policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetContinuousDeploymentPolicyConfigRequest {
  /**
   * The identifier of the continuous deployment policy whose configuration you are getting.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetContinuousDeploymentPolicyConfigResult {
  /**
   * Contains the configuration for a continuous deployment policy.
   *
   * @public
   */
  ContinuousDeploymentPolicyConfig?: ContinuousDeploymentPolicyConfig | undefined;

  /**
   * The version identifier for the current version of the continuous deployment policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The request to get a distribution's information.
 *
 * @public
 */
export interface GetDistributionRequest {
  /**
   * The distribution's ID. If the ID is empty, an empty distribution configuration is returned.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface GetDistributionResult {
  /**
   * The distribution's information.
   *
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * The current version of the distribution's information. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The request to get a distribution configuration.
 *
 * @public
 */
export interface GetDistributionConfigRequest {
  /**
   * The distribution's ID. If the ID is empty, an empty distribution configuration is returned.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface GetDistributionConfigResult {
  /**
   * The distribution's configuration information.
   *
   * @public
   */
  DistributionConfig?: DistributionConfig | undefined;

  /**
   * The current version of the configuration. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionTenantRequest {
  /**
   * The identifier of the distribution tenant. You can specify the ARN, ID, or name of the distribution tenant.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionTenantResult {
  /**
   * The distribution tenant that you retrieved.
   *
   * @public
   */
  DistributionTenant?: DistributionTenant | undefined;

  /**
   * The current version of the distribution tenant.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionTenantByDomainRequest {
  /**
   * A domain name associated with the target distribution tenant.
   *
   * @public
   */
  Domain: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionTenantByDomainResult {
  /**
   * The distribution tenant.
   *
   * @public
   */
  DistributionTenant?: DistributionTenant | undefined;

  /**
   * The current version of the distribution tenant.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionRequest {
  /**
   * Request the ID for the field-level encryption configuration information.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionResult {
  /**
   * Return the field-level encryption configuration information.
   *
   * @public
   */
  FieldLevelEncryption?: FieldLevelEncryption | undefined;

  /**
   * The current version of the field level encryption configuration. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionConfigRequest {
  /**
   * Request the ID for the field-level encryption configuration information.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionConfigResult {
  /**
   * Return the field-level encryption configuration information.
   *
   * @public
   */
  FieldLevelEncryptionConfig?: FieldLevelEncryptionConfig | undefined;

  /**
   * The current version of the field level encryption configuration. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionProfileRequest {
  /**
   * Get the ID for the field-level encryption profile information.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionProfileResult {
  /**
   * Return the field-level encryption profile information.
   *
   * @public
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile | undefined;

  /**
   * The current version of the field level encryption profile. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionProfileConfigRequest {
  /**
   * Get the ID for the field-level encryption profile configuration information.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionProfileConfigResult {
  /**
   * Return the field-level encryption profile configuration information.
   *
   * @public
   */
  FieldLevelEncryptionProfileConfig?: FieldLevelEncryptionProfileConfig | undefined;

  /**
   * The current version of the field-level encryption profile configuration result. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionRequest {
  /**
   * The name of the function whose code you are getting.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The function's stage, either `DEVELOPMENT` or `LIVE`.
   *
   * @public
   */
  Stage?: FunctionStage | undefined;
}

/**
 * @public
 */
export interface GetFunctionResult {
  /**
   * The function code of a CloudFront function.
   *
   * @public
   */
  FunctionCode?: Uint8Array | undefined;

  /**
   * The version identifier for the current version of the CloudFront function.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The content type (media type) of the response.
   *
   * @public
   */
  ContentType?: string | undefined;
}

/**
 * The request to get an invalidation's information.
 *
 * @public
 */
export interface GetInvalidationRequest {
  /**
   * The distribution's ID.
   *
   * @public
   */
  DistributionId: string | undefined;

  /**
   * The identifier for the invalidation request, for example, `IDFDVBD632BHDS5`.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface GetInvalidationResult {
  /**
   * The invalidation's information. For more information, see [Invalidation Complex Type](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/InvalidationDatatype.html).
   *
   * @public
   */
  Invalidation?: Invalidation | undefined;
}

/**
 * @public
 */
export interface GetInvalidationForDistributionTenantRequest {
  /**
   * The ID of the distribution tenant.
   *
   * @public
   */
  DistributionTenantId: string | undefined;

  /**
   * The ID of the invalidation to retrieve.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetInvalidationForDistributionTenantResult {
  /**
   * An invalidation.
   *
   * @public
   */
  Invalidation?: Invalidation | undefined;
}

/**
 * @public
 */
export interface GetKeyGroupRequest {
  /**
   * The identifier of the key group that you are getting. To get the identifier, use `ListKeyGroups`.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetKeyGroupResult {
  /**
   * The key group.
   *
   * @public
   */
  KeyGroup?: KeyGroup | undefined;

  /**
   * The identifier for this version of the key group.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetKeyGroupConfigRequest {
  /**
   * The identifier of the key group whose configuration you are getting. To get the identifier, use `ListKeyGroups`.
   *
   * @public
   */
  Id: string | undefined;
}
