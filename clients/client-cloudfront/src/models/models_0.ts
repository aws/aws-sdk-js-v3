// smithy-typescript generated code
import {
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
  ManagedCertificateStatus,
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
  ValidationTokenHost,
  ViewerProtocolPolicy,
} from "./enums";

/**
 * <p>A list of CloudFront key pair identifiers.</p>
 * @public
 */
export interface KeyPairIds {
  /**
   * <p>The number of key pair identifiers in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of CloudFront key pair identifiers.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
 * @public
 */
export interface KGKeyPairIds {
  /**
   * <p>The identifier of the key group that contains the public keys.</p>
   * @public
   */
  KeyGroupId?: string | undefined;

  /**
   * <p>A list of CloudFront key pair identifiers.</p>
   * @public
   */
  KeyPairIds?: KeyPairIds | undefined;
}

/**
 * <p>A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
 * @public
 */
export interface ActiveTrustedKeyGroups {
  /**
   * <p>This field is <code>true</code> if any of the key groups have public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies. If not, this field is <code>false</code>.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>The number of key groups in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of key groups, including the identifiers of the public keys in each key group that CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
   * @public
   */
  Items?: KGKeyPairIds[] | undefined;
}

/**
 * <p>A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
 * @public
 */
export interface Signer {
  /**
   * <p>An Amazon Web Services account number that contains active CloudFront key pairs that CloudFront can use to verify the signatures of signed URLs and signed cookies. If the Amazon Web Services account that owns the key pairs is the same account that owns the CloudFront distribution, the value of this field is <code>self</code>.</p>
   * @public
   */
  AwsAccountNumber?: string | undefined;

  /**
   * <p>A list of CloudFront key pair identifiers.</p>
   * @public
   */
  KeyPairIds?: KeyPairIds | undefined;
}

/**
 * <p>A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
 * @public
 */
export interface ActiveTrustedSigners {
  /**
   * <p>This field is <code>true</code> if any of the Amazon Web Services accounts in the list are configured as trusted signers. If not, this field is <code>false</code>.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>The number of Amazon Web Services accounts in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of Amazon Web Services accounts and the identifiers of active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
   * @public
   */
  Items?: Signer[] | undefined;
}

/**
 * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.</p>
 * @public
 */
export interface Aliases {
  /**
   * <p>The number of CNAME aliases, if any, that you want to associate with this distribution.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains the CNAME aliases, if any, that you want to associate with this distribution.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure it yourself.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>
 * @public
 */
export interface AliasICPRecordal {
  /**
   * <p>A domain name associated with a distribution.</p>
   * @public
   */
  CNAME?: string | undefined;

  /**
   * <p>The Internet Content Provider (ICP) recordal status for a CNAME. The ICPRecordalStatus is set to APPROVED for all CNAMEs (aliases) in Amazon Web Services Regions outside of China.</p> <p>The status values returned are the following:</p> <ul> <li> <p> <b>APPROVED</b> indicates that the associated CNAME has a valid ICP recordal number. Multiple CNAMEs can be associated with a distribution, and CNAMEs can correspond to different ICP recordals. To be marked as APPROVED, that is, valid to use with the China Regions, a CNAME must have one ICP recordal number associated with it.</p> </li> <li> <p> <b>SUSPENDED</b> indicates that the associated CNAME does not have a valid ICP recordal number.</p> </li> <li> <p> <b>PENDING</b> indicates that CloudFront can't determine the ICP recordal status of the CNAME associated with the distribution because there was an error in trying to determine the status. You can try again to see if the error is resolved in which case CloudFront returns an APPROVED or SUSPENDED status.</p> </li> </ul>
   * @public
   */
  ICPRecordalStatus?: ICPRecordalStatus | undefined;
}

/**
 * <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.</p>
 * @public
 */
export interface CachedMethods {
  /**
   * <p>The number of HTTP methods for which you want CloudFront to cache responses. Valid values are <code>2</code> (for caching responses to <code>GET</code> and <code>HEAD</code> requests) and <code>3</code> (for caching responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests).</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains the HTTP methods that you want CloudFront to cache responses to. Valid values for <code>CachedMethods</code> include <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code>, depending on which caching option you choose. For more information, see the preceding section.</p>
   * @public
   */
  Items: Method[] | undefined;
}

/**
 * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>
 * @public
 */
export interface AllowedMethods {
  /**
   * <p>The number of HTTP methods that you want CloudFront to forward to your origin. Valid values are 2 (for <code>GET</code> and <code>HEAD</code> requests), 3 (for <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests) and 7 (for <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests).</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains the HTTP methods that you want CloudFront to process and forward to your origin.</p>
   * @public
   */
  Items: Method[] | undefined;

  /**
   * <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.</p>
   * @public
   */
  CachedMethods?: CachedMethods | undefined;
}

/**
 * <p>Configuration for an IPAM CIDR that defines a specific IP address range, IPAM pool, and associated Anycast IP address.</p>
 * @public
 */
export interface IpamCidrConfig {
  /**
   * <p>The CIDR that specifies the IP address range for this IPAM configuration.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IPAM pool that the CIDR block is assigned to.</p>
   * @public
   */
  IpamPoolArn: string | undefined;

  /**
   * <p>The specified Anycast IP address allocated from the IPAM pool for this CIDR configuration.</p>
   * @public
   */
  AnycastIp?: string | undefined;

  /**
   * <p>The current status of the IPAM CIDR configuration.</p>
   * @public
   */
  Status?: IpamCidrStatus | undefined;
}

/**
 * <p>The configuration IPAM settings that includes the quantity of CIDR configurations and the list of IPAM CIDR configurations.</p>
 * @public
 */
export interface IpamConfig {
  /**
   * <p>The number of IPAM CIDR configurations in the <code>IpamCidrConfigs</code> list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of IPAM CIDR configurations that define the IP address ranges, IPAM pools, and associated Anycast IP addresses.</p>
   * @public
   */
  IpamCidrConfigs: IpamCidrConfig[] | undefined;
}

/**
 * <p>An Anycast static IP list. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/request-static-ips.html">Request Anycast static IPs to use for allowlisting</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface AnycastIpList {
  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the Anycast static IP list.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The status of the Anycast static IP list. Valid values: <code>Deployed</code>, <code>Deploying</code>, or <code>Failed</code>.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Anycast static IP list.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The IP address type for the Anycast static IP list.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The IPAM configuration for the Anycast static IP list, that contains the quantity and list of IPAM CIDR configurations.</p>
   * @public
   */
  IpamConfig?: IpamConfig | undefined;

  /**
   * <p>The static IP addresses that are allocated to the Anycast static IP list.</p>
   * @public
   */
  AnycastIps: string[] | undefined;

  /**
   * <p>The number of IP addresses in the Anycast static IP list.</p>
   * @public
   */
  IpCount: number | undefined;

  /**
   * <p>The last time the Anycast static IP list was modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * <p>An abbreviated version of the <a>AnycastIpList</a> structure. Omits the allocated static IP addresses (<a>AnycastIpList$AnycastIps</a>).</p>
 * @public
 */
export interface AnycastIpListSummary {
  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the Anycast static IP list.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The deployment status of the Anycast static IP list. Valid values: Deployed, Deploying, or Failed.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Anycast static IP list.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The number of IP addresses in the Anycast static IP list.</p>
   * @public
   */
  IpCount: number | undefined;

  /**
   * <p>The last time the Anycast static IP list was modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The IP address type for the Anycast static IP list.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The current version (ETag value) of the Anycast static IP list.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The IPAM configuration for the Anycast static IP list, that contains the quantity and list of IPAM CIDR configurations.</p>
   * @public
   */
  IpamConfig?: IpamConfig | undefined;
}

/**
 * <p>The Anycast static IP list collection.</p>
 * @public
 */
export interface AnycastIpListCollection {
  /**
   * <p>Items in the Anycast static IP list collection. Each item is of the <a>AnycastIpListSummary</a> structure type.</p>
   * @public
   */
  Items?: AnycastIpListSummary[] | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>Indicates the next page of the Anycast static IP list collection. To get the next page of the list, use this value in the <code>Marker</code> field of your request.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of Anycast static IP list collections that you want returned in the response.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>If there are more items in the list collection than are in this response, this value is <code>true</code>.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The quantity of Anycast static IP lists in the collection.</p>
   * @public
   */
  Quantity: number | undefined;
}

/**
 * @public
 */
export interface AssociateAliasRequest {
  /**
   * <p>The ID of the standard distribution that you're associating the alias with.</p>
   * @public
   */
  TargetDistributionId: string | undefined;

  /**
   * <p>The alias (also known as a CNAME) to add to the target standard distribution.</p>
   * @public
   */
  Alias: string | undefined;
}

/**
 * @public
 */
export interface AssociateDistributionTenantWebACLRequest {
  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the WAF web ACL to associate.</p>
   * @public
   */
  WebACLArn: string | undefined;

  /**
   * <p>The current <code>ETag</code> of the distribution tenant. This value is returned in the response of the <code>GetDistributionTenant</code> API operation.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface AssociateDistributionTenantWebACLResult {
  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ARN of the WAF web ACL that you associated with the distribution tenant.</p>
   * @public
   */
  WebACLArn?: string | undefined;

  /**
   * <p>The current version of the distribution tenant.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface AssociateDistributionWebACLRequest {
  /**
   * <p>The ID of the distribution.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the WAF web ACL to associate.</p>
   * @public
   */
  WebACLArn: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the distribution that you're associating with the WAF web ACL.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface AssociateDistributionWebACLResult {
  /**
   * <p>The ID of the distribution.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ARN of the WAF web ACL that you associated with the distribution.</p>
   * @public
   */
  WebACLArn?: string | undefined;

  /**
   * <p>The current version of the distribution.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>Contains a list of cookie names.</p>
 * @public
 */
export interface CookieNames {
  /**
   * <p>The number of cookie names in the <code>Items</code> list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of cookie names.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use <code>CookiesConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use <code>CookiesConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface CookiePreference {
  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>Specifies which cookies to forward to the origin for this cache behavior: all, none, or the list of cookies specified in the <code>WhitelistedNames</code> complex type.</p> <p>Amazon S3 doesn't process cookies. When the cache behavior is forwarding requests to an Amazon S3 origin, specify none for the <code>Forward</code> element.</p>
   * @public
   */
  Forward: ItemSelection | undefined;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>Required if you specify <code>whitelist</code> for the value of <code>Forward</code>. A complex type that specifies how many different cookies you want CloudFront to forward to the origin for this cache behavior and, if you want to forward selected cookies, the names of those cookies.</p> <p>If you specify <code>all</code> or <code>none</code> for the value of <code>Forward</code>, omit <code>WhitelistedNames</code>. If you change the value of <code>Forward</code> from <code>whitelist</code> to <code>all</code> or <code>none</code> and you don't delete the <code>WhitelistedNames</code> element and its child elements, CloudFront deletes them automatically.</p> <p>For the current limit on the number of cookie names that you can whitelist for each cache behavior, see <a href="https://docs.aws.amazon.com/general/latest/gr/xrefaws_service_limits.html#limits_cloudfront"> CloudFront Limits</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  WhitelistedNames?: CookieNames | undefined;
}

/**
 * <p>Contains a list of HTTP header names.</p>
 * @public
 */
export interface Headers {
  /**
   * <p>The number of header names in the <code>Items</code> list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of HTTP header names.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use <code>QueryStringsConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use <code>QueryStringsConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior.</p>
 * @public
 */
export interface QueryStringCacheKeys {
  /**
   * <p>The number of <code>whitelisted</code> query string parameters for a cache behavior.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list that contains the query string parameters that you want CloudFront to use as a basis for caching for a cache behavior. If <code>Quantity</code> is 0, you can omit <code>Items</code>.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
 * @public
 */
export interface ForwardedValues {
  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior and cache based on the query string parameters. CloudFront behavior depends on the value of <code>QueryString</code> and on the values that you specify for <code>QueryStringCacheKeys</code>, if any:</p> <p>If you specify true for <code>QueryString</code> and you don't specify any values for <code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin and caches based on all query string parameters. Depending on how many query string parameters and values you have, this can adversely affect performance because CloudFront must forward more requests to the origin.</p> <p>If you specify true for <code>QueryString</code> and you specify one or more values for <code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin, but it only caches based on the query string parameters that you specify.</p> <p>If you specify false for <code>QueryString</code>, CloudFront doesn't forward any query string parameters to the origin, and doesn't cache based on query string parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html">Configuring CloudFront to Cache Based on Query String Parameters</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  QueryString: boolean | undefined;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches, and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  Cookies: CookiePreference | undefined;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include headers in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send headers to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies the <code>Headers</code>, if any, that you want CloudFront to forward to the origin for this cache behavior (whitelisted headers). For the headers that you specify, CloudFront also caches separate versions of a specified object that is based on the header values in viewer requests.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html"> Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  Headers?: Headers | undefined;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that contains information about the query string parameters that you want CloudFront to use for caching for this cache behavior.</p>
   * @public
   */
  QueryStringCacheKeys?: QueryStringCacheKeys | undefined;
}

/**
 * <p>A CloudFront function that is associated with a cache behavior in a CloudFront distribution.</p>
 * @public
 */
export interface FunctionAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) of the function.</p>
   * @public
   */
  FunctionARN: string | undefined;

  /**
   * <p>The event type of the function, either <code>viewer-request</code> or <code>viewer-response</code>. You cannot use origin-facing event types (<code>origin-request</code> and <code>origin-response</code>) with a CloudFront function.</p>
   * @public
   */
  EventType: EventType | undefined;
}

/**
 * <p>A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. Your functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.</p>
 * @public
 */
export interface FunctionAssociations {
  /**
   * <p>The number of CloudFront functions in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The CloudFront functions that are associated with a cache behavior in a CloudFront distribution. Your functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.</p>
   * @public
   */
  Items?: FunctionAssociation[] | undefined;
}

/**
 * <p>Amazon CloudFront supports gRPC, an open-source remote procedure call (RPC) framework built on HTTP/2. gRPC offers bi-directional streaming and binary protocol that buffers payloads, making it suitable for applications that require low latency communications.</p> <p>To enable your distribution to handle gRPC requests, you must include HTTP/2 as one of the supported <code>HTTP</code> versions and allow <code>HTTP</code> methods, including <code>POST</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-using-grpc.html">Using gRPC with CloudFront distributions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface GrpcConfig {
  /**
   * <p>Enables your CloudFront distribution to receive gRPC requests and to proxy them directly to your origins.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>A complex type that contains a Lambda@Edge function association.</p>
 * @public
 */
export interface LambdaFunctionAssociation {
  /**
   * <p>The ARN of the Lambda@Edge function. You must specify the ARN of a function version; you can't specify an alias or $LATEST.</p>
   * @public
   */
  LambdaFunctionARN: string | undefined;

  /**
   * <p>Specifies the event type that triggers a Lambda@Edge function invocation. You can specify the following values:</p> <ul> <li> <p> <code>viewer-request</code>: The function executes when CloudFront receives a request from a viewer and before it checks to see whether the requested object is in the edge cache.</p> </li> <li> <p> <code>origin-request</code>: The function executes only when CloudFront sends a request to your origin. When the requested object is in the edge cache, the function doesn't execute.</p> </li> <li> <p> <code>origin-response</code>: The function executes after CloudFront receives a response from the origin and before it caches the object in the response. When the requested object is in the edge cache, the function doesn't execute.</p> </li> <li> <p> <code>viewer-response</code>: The function executes before CloudFront returns the requested object to the viewer. The function executes regardless of whether the object was already in the edge cache.</p> <p>If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute.</p> </li> </ul>
   * @public
   */
  EventType: EventType | undefined;

  /**
   * <p>A flag that allows a Lambda@Edge function to have read access to the body content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html">Accessing the Request Body by Choosing the Include Body Option</a> in the Amazon CloudFront Developer Guide.</p>
   * @public
   */
  IncludeBody?: boolean | undefined;
}

/**
 * <p>A complex type that specifies a list of Lambda@Edge functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda@Edge functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with only one function.</p> <p>If you don't want to invoke any Lambda@Edge functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>.</p>
 * @public
 */
export interface LambdaFunctionAssociations {
  /**
   * <p>The number of Lambda@Edge function associations for this cache behavior.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p> <b>Optional</b>: A complex type that contains <code>LambdaFunctionAssociation</code> items for this cache behavior. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   * @public
   */
  Items?: LambdaFunctionAssociation[] | undefined;
}

/**
 * <p>A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
 * @public
 */
export interface TrustedKeyGroups {
  /**
   * <p>This field is <code>true</code> if any of the key groups in the list have public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies. If not, this field is <code>false</code>.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>The number of key groups in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of key groups identifiers.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>A list of Amazon Web Services accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
 * @public
 */
export interface TrustedSigners {
  /**
   * <p>This field is <code>true</code> if any of the Amazon Web Services accounts in the list are configured as trusted signers. If not, this field is <code>false</code>.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>The number of Amazon Web Services accounts in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of Amazon Web Services account identifiers.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don't specify an empty individual <code>CacheBehavior</code> element, because this is invalid. For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CacheBehaviors.html">CacheBehaviors</a>. </p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <important> <p>If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the <code>Cache-Control: no-cache</code>, <code>no-store</code>, or <code>private</code> directives are present in the origin headers.</p> </important> <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface CacheBehavior {
  /**
   * <p>The pattern (for example, <code>images/*.jpg</code>) that specifies which requests to apply the behavior to. When CloudFront receives a viewer request, the requested path is compared with path patterns in the order in which cache behaviors are listed in the distribution.</p> <note> <p>You can optionally include a slash (<code>/</code>) at the beginning of the path pattern. For example, <code>/images/*.jpg</code>. CloudFront behavior is the same with or without the leading <code>/</code>.</p> </note> <p>The path pattern for the default cache behavior is <code>*</code> and cannot be changed. If the request for an object does not match the path pattern for any cache behaviors, CloudFront applies the behavior in the default cache behavior.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesPathPattern">Path Pattern</a> in the <i> Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  PathPattern: string | undefined;

  /**
   * <p>The value of <code>ID</code> for the origin that you want CloudFront to route requests to when they match this cache behavior.</p>
   * @public
   */
  TargetOriginId: string | undefined;

  /**
   * <important> <p>We recommend using <code>TrustedKeyGroups</code> instead of <code>TrustedSigners</code>.</p> </important> <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>A list of Amazon Web Services account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.</p> <p>When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in the trusted signer's Amazon Web Services account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  TrustedSigners?: TrustedSigners | undefined;

  /**
   * <p>A list of key groups that CloudFront can use to validate signed URLs or signed cookies.</p> <p>When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  TrustedKeyGroups?: TrustedKeyGroups | undefined;

  /**
   * <p>The protocol that viewers can use to access the files in the origin specified by <code>TargetOriginId</code> when a request matches the path pattern in <code>PathPattern</code>. You can specify the following options:</p> <ul> <li> <p> <code>allow-all</code>: Viewers can use HTTP or HTTPS.</p> </li> <li> <p> <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.</p> </li> <li> <p> <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).</p> </li> </ul> <p>For more information about requiring the HTTPS protocol, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html">Requiring HTTPS Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <note> <p>The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing Cache Expiration</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note>
   * @public
   */
  ViewerProtocolPolicy: ViewerProtocolPolicy | undefined;

  /**
   * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>
   * @public
   */
  AllowedMethods?: AllowedMethods | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify <code>true</code>; if not, specify <code>false</code>. If you specify <code>true</code> for <code>SmoothStreaming</code>, you can still distribute other content using this cache behavior if the content matches the value of <code>PathPattern</code>.</p>
   * @public
   */
  SmoothStreaming?: boolean | undefined;

  /**
   * <p>Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify true; if not, specify false. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html">Serving Compressed Files</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  Compress?: boolean | undefined;

  /**
   * <p>A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.</p>
   * @public
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociations | undefined;

  /**
   * <p>A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.</p>
   * @public
   */
  FunctionAssociations?: FunctionAssociations | undefined;

  /**
   * <p>The value of <code>ID</code> for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for this cache behavior.</p>
   * @public
   */
  FieldLevelEncryptionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  RealtimeLogConfigArn?: string | undefined;

  /**
   * <p>The unique identifier of the cache policy that is attached to this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>CacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p>
   * @public
   */
  CachePolicyId?: string | undefined;

  /**
   * <p>The unique identifier of the origin request policy that is attached to this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginRequestPolicyId?: string | undefined;

  /**
   * <p>The identifier for a response headers policy.</p>
   * @public
   */
  ResponseHeadersPolicyId?: string | undefined;

  /**
   * <p>The gRPC configuration for your cache behavior.</p>
   * @public
   */
  GrpcConfig?: GrpcConfig | undefined;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html">Working with policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>CacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
   *
   * @deprecated deprecated
   * @public
   */
  ForwardedValues?: ForwardedValues | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>This field is deprecated. We recommend that you use the <code>MinTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html"> Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i> Amazon CloudFront Developer Guide</i>.</p> <p>You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to forward all headers to your origin (under <code>Headers</code>, if you specify <code>1</code> for <code>Quantity</code> and <code>*</code> for <code>Name</code>).</p>
   *
   * @deprecated deprecated
   * @public
   */
  MinTTL?: number | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>This field is deprecated. We recommend that you use the <code>DefaultTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *
   * @deprecated deprecated
   * @public
   */
  DefaultTTL?: number | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>This field is deprecated. We recommend that you use the <code>MaxTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *
   * @deprecated deprecated
   * @public
   */
  MaxTTL?: number | undefined;
}

/**
 * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.</p>
 * @public
 */
export interface CacheBehaviors {
  /**
   * <p>The number of cache behaviors for this distribution.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>Optional: A complex type that contains cache behaviors for this distribution. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   * @public
   */
  Items?: CacheBehavior[] | undefined;
}

/**
 * <p>An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.</p>
 * @public
 */
export interface CachePolicyCookiesConfig {
  /**
   * <p>Determines whether any cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:</p> <ul> <li> <p> <code>none</code> – No cookies in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any cookies that are listed in an <code>OriginRequestPolicy</code> <i>are</i> included in origin requests.</p> </li> <li> <p> <code>whitelist</code> – Only the cookies in viewer requests that are listed in the <code>CookieNames</code> type are included in the cache key and in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>allExcept</code> – All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, <i> <b>except</b> </i> for those that are listed in the <code>CookieNames</code> type, which are not included.</p> </li> <li> <p> <code>all</code> – All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.</p> </li> </ul>
   * @public
   */
  CookieBehavior: CachePolicyCookieBehavior | undefined;

  /**
   * <p>Contains a list of cookie names.</p>
   * @public
   */
  Cookies?: CookieNames | undefined;
}

/**
 * <p>An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.</p>
 * @public
 */
export interface CachePolicyHeadersConfig {
  /**
   * <p>Determines whether any HTTP headers are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:</p> <ul> <li> <p> <code>none</code> – No HTTP headers are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any headers that are listed in an <code>OriginRequestPolicy</code> <i>are</i> included in origin requests.</p> </li> <li> <p> <code>whitelist</code> – Only the HTTP headers that are listed in the <code>Headers</code> type are included in the cache key and in requests that CloudFront sends to the origin.</p> </li> </ul>
   * @public
   */
  HeaderBehavior: CachePolicyHeaderBehavior | undefined;

  /**
   * <p>Contains a list of HTTP header names.</p>
   * @public
   */
  Headers?: Headers | undefined;
}

/**
 * <p>Contains a list of query string names.</p>
 * @public
 */
export interface QueryStringNames {
  /**
   * <p>The number of query string names in the <code>Items</code> list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of query string names.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.</p>
 * @public
 */
export interface CachePolicyQueryStringsConfig {
  /**
   * <p>Determines whether any URL query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:</p> <ul> <li> <p> <code>none</code> – No query strings in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any query strings that are listed in an <code>OriginRequestPolicy</code> <i>are</i> included in origin requests.</p> </li> <li> <p> <code>whitelist</code> – Only the query strings in viewer requests that are listed in the <code>QueryStringNames</code> type are included in the cache key and in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>allExcept</code> – All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, <i> <b>except</b> </i> those that are listed in the <code>QueryStringNames</code> type, which are not included.</p> </li> <li> <p> <code>all</code> – All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.</p> </li> </ul>
   * @public
   */
  QueryStringBehavior: CachePolicyQueryStringBehavior | undefined;

  /**
   * <p>Contains the specific query strings in viewer requests that either <i> <b>are</b> </i> or <i> <b>are not</b> </i> included in the cache key and in requests that CloudFront sends to the origin. The behavior depends on whether the <code>QueryStringBehavior</code> field in the <code>CachePolicyQueryStringsConfig</code> type is set to <code>whitelist</code> (the listed query strings <i> <b>are</b> </i> included) or <code>allExcept</code> (the listed query strings <i> <b>are not</b> </i> included, but all other query strings are).</p>
   * @public
   */
  QueryStrings?: QueryStringNames | undefined;
}

/**
 * <p>This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
 * @public
 */
export interface ParametersInCacheKeyAndForwardedToOrigin {
  /**
   * <p>A flag that can affect whether the <code>Accept-Encoding</code> HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.</p> <p>This field is related to the <code>EnableAcceptEncodingBrotli</code> field. If one or both of these fields is <code>true</code> <i>and</i> the viewer request includes the <code>Accept-Encoding</code> header, then CloudFront does the following:</p> <ul> <li> <p>Normalizes the value of the viewer's <code>Accept-Encoding</code> header</p> </li> <li> <p>Includes the normalized header in the cache key</p> </li> <li> <p>Includes the normalized header in the request to the origin, if a request is necessary</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects">Compression support</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you set this value to <code>true</code>, and this cache behavior also has an origin request policy attached, do not include the <code>Accept-Encoding</code> header in the origin request policy. CloudFront always includes the <code>Accept-Encoding</code> header in origin requests when the value of this field is <code>true</code>, so including this header in an origin request policy has no effect.</p> <p>If both of these fields are <code>false</code>, then CloudFront treats the <code>Accept-Encoding</code> header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add <code>Accept-Encoding</code> to the headers whitelist like any other HTTP header.</p>
   * @public
   */
  EnableAcceptEncodingGzip: boolean | undefined;

  /**
   * <p>A flag that can affect whether the <code>Accept-Encoding</code> HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.</p> <p>This field is related to the <code>EnableAcceptEncodingGzip</code> field. If one or both of these fields is <code>true</code> <i>and</i> the viewer request includes the <code>Accept-Encoding</code> header, then CloudFront does the following:</p> <ul> <li> <p>Normalizes the value of the viewer's <code>Accept-Encoding</code> header</p> </li> <li> <p>Includes the normalized header in the cache key</p> </li> <li> <p>Includes the normalized header in the request to the origin, if a request is necessary</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects">Compression support</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you set this value to <code>true</code>, and this cache behavior also has an origin request policy attached, do not include the <code>Accept-Encoding</code> header in the origin request policy. CloudFront always includes the <code>Accept-Encoding</code> header in origin requests when the value of this field is <code>true</code>, so including this header in an origin request policy has no effect.</p> <p>If both of these fields are <code>false</code>, then CloudFront treats the <code>Accept-Encoding</code> header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add <code>Accept-Encoding</code> to the headers whitelist like any other HTTP header.</p>
   * @public
   */
  EnableAcceptEncodingBrotli?: boolean | undefined;

  /**
   * <p>An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.</p>
   * @public
   */
  HeadersConfig: CachePolicyHeadersConfig | undefined;

  /**
   * <p>An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.</p>
   * @public
   */
  CookiesConfig: CachePolicyCookiesConfig | undefined;

  /**
   * <p>An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.</p>
   * @public
   */
  QueryStringsConfig: CachePolicyQueryStringsConfig | undefined;
}

/**
 * <p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> <important> <p>If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the <code>Cache-Control: no-cache</code>, <code>no-store</code>, or <code>private</code> directives are present in the origin headers.</p> </important> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
 * @public
 */
export interface CachePolicyConfig {
  /**
   * <p>A comment to describe the cache policy. The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>A unique name to identify the cache policy.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value as the object's time to live (TTL) only when the origin does <i>not</i> send <code>Cache-Control</code> or <code>Expires</code> headers with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default value for this field is 86400 seconds (one day). If the value of <code>MinTTL</code> is more than 86400 seconds, then the default value for this field is the same as the value of <code>MinTTL</code>.</p>
   * @public
   */
  DefaultTTL?: number | undefined;

  /**
   * <p>The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value only when the origin sends <code>Cache-Control</code> or <code>Expires</code> headers with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default value for this field is 31536000 seconds (one year). If the value of <code>MinTTL</code> or <code>DefaultTTL</code> is more than 31536000 seconds, then the default value for this field is the same as the value of <code>DefaultTTL</code>.</p>
   * @public
   */
  MaxTTL?: number | undefined;

  /**
   * <p>The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  MinTTL: number | undefined;

  /**
   * <p>The HTTP headers, cookies, and URL query strings to include in the cache key. The values included in the cache key are also included in requests that CloudFront sends to the origin.</p>
   * @public
   */
  ParametersInCacheKeyAndForwardedToOrigin?: ParametersInCacheKeyAndForwardedToOrigin | undefined;
}

/**
 * <p>A cache policy.</p> <p>When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
 * @public
 */
export interface CachePolicy {
  /**
   * <p>The unique identifier for the cache policy.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The date and time when the cache policy was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The cache policy configuration.</p>
   * @public
   */
  CachePolicyConfig: CachePolicyConfig | undefined;
}

/**
 * <p>Contains a cache policy.</p>
 * @public
 */
export interface CachePolicySummary {
  /**
   * <p>The type of cache policy, either <code>managed</code> (created by Amazon Web Services) or <code>custom</code> (created in this Amazon Web Services account).</p>
   * @public
   */
  Type: CachePolicyType | undefined;

  /**
   * <p>The cache policy.</p>
   * @public
   */
  CachePolicy: CachePolicy | undefined;
}

/**
 * <p>A list of cache policies.</p>
 * @public
 */
export interface CachePolicyList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing cache policies where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of cache policies requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The total number of cache policies returned in the response.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the cache policies in the list.</p>
   * @public
   */
  Items?: CachePolicySummary[] | undefined;
}

/**
 * <p>The Certificate Manager (ACM) certificate associated with your distribution.</p>
 * @public
 */
export interface Certificate {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACM certificate.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface CopyDistributionRequest {
  /**
   * <p>The identifier of the primary distribution whose configuration you are copying. To get a distribution ID, use <code>ListDistributions</code>.</p>
   * @public
   */
  PrimaryDistributionId: string | undefined;

  /**
   * <p>The type of distribution that your primary distribution will be copied to. The only valid value is <code>True</code>, indicating that you are copying to a staging distribution.</p>
   * @public
   */
  Staging?: boolean | undefined;

  /**
   * <p>The version identifier of the primary distribution whose configuration you are copying. This is the <code>ETag</code> value returned in the response to <code>GetDistribution</code> and <code>GetDistributionConfig</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;

  /**
   * <p>A value that uniquely identifies a request to create a resource. This helps to prevent CloudFront from creating a duplicate resource if you accidentally resubmit an identical request.</p>
   * @public
   */
  CallerReference: string | undefined;

  /**
   * <p>A Boolean flag to specify the state of the staging distribution when it's created. When you set this value to <code>True</code>, the staging distribution is enabled. When you set this value to <code>False</code>, the staging distribution is disabled.</p> <p>If you omit this field, the default value is <code>True</code>.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface CustomErrorResponse {
  /**
   * <p>The HTTP status code for which you want to specify a custom error page and/or a caching duration.</p>
   * @public
   */
  ErrorCode: number | undefined;

  /**
   * <p>The path to the custom error page that you want CloudFront to return to a viewer when your origin returns the HTTP status code specified by <code>ErrorCode</code>, for example, <code>/4xx-errors/403-forbidden.html</code>. If you want to store your objects and your custom error pages in different locations, your distribution must include a cache behavior for which the following is true:</p> <ul> <li> <p>The value of <code>PathPattern</code> matches the path to your custom error messages. For example, suppose you saved custom error pages for 4xx errors in an Amazon S3 bucket in a directory named <code>/4xx-errors</code>. Your distribution must include a cache behavior for which the path pattern routes requests for your custom error pages to that location, for example, <code>/4xx-errors/*</code>.</p> </li> <li> <p>The value of <code>TargetOriginId</code> specifies the value of the <code>ID</code> element for the origin that contains your custom error pages.</p> </li> </ul> <p>If you specify a value for <code>ResponsePagePath</code>, you must also specify a value for <code>ResponseCode</code>.</p> <p>We recommend that you store custom error pages in an Amazon S3 bucket. If you store custom error pages on an HTTP server and the server starts to return 5xx errors, CloudFront can't get the files that you want to return to viewers because the origin server is unavailable.</p>
   * @public
   */
  ResponsePagePath?: string | undefined;

  /**
   * <p>The HTTP status code that you want CloudFront to return to the viewer along with the custom error page. There are a variety of reasons that you might want CloudFront to return a status code different from the status code that your origin returned to CloudFront, for example:</p> <ul> <li> <p>Some Internet devices (some firewalls and corporate proxies, for example) intercept HTTP 4xx and 5xx and prevent the response from being returned to the viewer. If you substitute <code>200</code>, the response typically won't be intercepted.</p> </li> <li> <p>If you don't care about distinguishing among different client errors or server errors, you can specify <code>400</code> or <code>500</code> as the <code>ResponseCode</code> for all 4xx or 5xx errors.</p> </li> <li> <p>You might want to return a <code>200</code> status code (OK) and static website so your customers don't know that your website is down.</p> </li> </ul> <p>If you specify a value for <code>ResponseCode</code>, you must also specify a value for <code>ResponsePagePath</code>.</p>
   * @public
   */
  ResponseCode?: string | undefined;

  /**
   * <p>The minimum amount of time, in seconds, that you want CloudFront to cache the HTTP status code specified in <code>ErrorCode</code>. When this time period has elapsed, CloudFront queries your origin to see whether the problem that caused the error has been resolved and the requested object is now available.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  ErrorCachingMinTTL?: number | undefined;
}

/**
 * <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface CustomErrorResponses {
  /**
   * <p>The number of HTTP status codes for which you want to specify a custom error page and/or a caching duration. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains a <code>CustomErrorResponse</code> element for each HTTP status code for which you want to specify a custom error page and/or a caching duration. </p>
   * @public
   */
  Items?: CustomErrorResponse[] | undefined;
}

/**
 * <p>A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if request URLs don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.</p> <important> <p>If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the <code>Cache-Control: no-cache</code>, <code>no-store</code>, or <code>private</code> directives are present in the origin headers.</p> </important>
 * @public
 */
export interface DefaultCacheBehavior {
  /**
   * <p>The value of <code>ID</code> for the origin that you want CloudFront to route requests to when they use the default cache behavior.</p>
   * @public
   */
  TargetOriginId: string | undefined;

  /**
   * <important> <p>We recommend using <code>TrustedKeyGroups</code> instead of <code>TrustedSigners</code>.</p> </important> <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>A list of Amazon Web Services account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.</p> <p>When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in a trusted signer's Amazon Web Services account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  TrustedSigners?: TrustedSigners | undefined;

  /**
   * <p>A list of key groups that CloudFront can use to validate signed URLs or signed cookies.</p> <p>When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  TrustedKeyGroups?: TrustedKeyGroups | undefined;

  /**
   * <p>The protocol that viewers can use to access the files in the origin specified by <code>TargetOriginId</code> when a request matches the path pattern in <code>PathPattern</code>. You can specify the following options:</p> <ul> <li> <p> <code>allow-all</code>: Viewers can use HTTP or HTTPS.</p> </li> <li> <p> <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.</p> </li> <li> <p> <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).</p> </li> </ul> <p>For more information about requiring the HTTPS protocol, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html">Requiring HTTPS Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <note> <p>The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing Cache Expiration</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note>
   * @public
   */
  ViewerProtocolPolicy: ViewerProtocolPolicy | undefined;

  /**
   * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>
   * @public
   */
  AllowedMethods?: AllowedMethods | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify <code>true</code>; if not, specify <code>false</code>. If you specify <code>true</code> for <code>SmoothStreaming</code>, you can still distribute other content using this cache behavior if the content matches the value of <code>PathPattern</code>.</p>
   * @public
   */
  SmoothStreaming?: boolean | undefined;

  /**
   * <p>Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify <code>true</code>; if not, specify <code>false</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html">Serving Compressed Files</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  Compress?: boolean | undefined;

  /**
   * <p>A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.</p>
   * @public
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociations | undefined;

  /**
   * <p>A list of CloudFront functions that are associated with this cache behavior. Your functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.</p>
   * @public
   */
  FunctionAssociations?: FunctionAssociations | undefined;

  /**
   * <p>The value of <code>ID</code> for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for the default cache behavior.</p>
   * @public
   */
  FieldLevelEncryptionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  RealtimeLogConfigArn?: string | undefined;

  /**
   * <p>The unique identifier of the cache policy that is attached to the default cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>DefaultCacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p>
   * @public
   */
  CachePolicyId?: string | undefined;

  /**
   * <p>The unique identifier of the origin request policy that is attached to the default cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginRequestPolicyId?: string | undefined;

  /**
   * <p>The identifier for a response headers policy.</p>
   * @public
   */
  ResponseHeadersPolicyId?: string | undefined;

  /**
   * <p>The gRPC configuration for your cache behavior.</p>
   * @public
   */
  GrpcConfig?: GrpcConfig | undefined;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html">Working with policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>DefaultCacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
   *
   * @deprecated deprecated
   * @public
   */
  ForwardedValues?: ForwardedValues | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>This field is deprecated. We recommend that you use the <code>MinTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to forward all headers to your origin (under <code>Headers</code>, if you specify <code>1</code> for <code>Quantity</code> and <code>*</code> for <code>Name</code>).</p>
   *
   * @deprecated deprecated
   * @public
   */
  MinTTL?: number | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>This field is deprecated. We recommend that you use the <code>DefaultTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *
   * @deprecated deprecated
   * @public
   */
  DefaultTTL?: number | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>This field is deprecated. We recommend that you use the <code>MaxTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *
   * @deprecated deprecated
   * @public
   */
  MaxTTL?: number | undefined;
}

/**
 * <p>A complex type that specifies whether access logs are written for the distribution.</p> <note> <p>If you already enabled standard logging (legacy) and you want to enable standard logging (v2) to send your access logs to Amazon S3, we recommend that you specify a <i>different</i> Amazon S3 bucket or use a <i>separate path</i> in the same bucket (for example, use a log prefix or partitioning). This helps you keep track of which log files are associated with which logging subscription and prevents log files from overwriting each other. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html">Standard logging (access logs)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note>
 * @public
 */
export interface LoggingConfig {
  /**
   * <p>Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't want to enable logging when you create a distribution or if you want to disable logging for an existing distribution, specify <code>false</code> for <code>Enabled</code>, and specify empty <code>Bucket</code> and <code>Prefix</code> elements. If you specify <code>false</code> for <code>Enabled</code> but you specify values for <code>Bucket</code> and <code>prefix</code>, the values are automatically deleted.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Specifies whether you want CloudFront to include cookies in access logs, specify <code>true</code> for <code>IncludeCookies</code>. If you choose to include cookies in logs, CloudFront logs all cookies regardless of how you configure the cache behaviors for this distribution. If you don't want to include cookies when you create a distribution or if you want to disable include cookies for an existing distribution, specify <code>false</code> for <code>IncludeCookies</code>.</p>
   * @public
   */
  IncludeCookies?: boolean | undefined;

  /**
   * <p>The Amazon S3 bucket to store the access logs in, for example, <code>amzn-s3-demo-bucket.s3.amazonaws.com</code>.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>An optional string that you want CloudFront to prefix to the access log <code>filenames</code> for this distribution, for example, <code>myprefix/</code>. If you want to enable logging, but you don't want to specify a prefix, you still must include an empty <code>Prefix</code> element in the <code>Logging</code> element.</p>
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * <p>A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.</p>
 * @public
 */
export interface StatusCodes {
  /**
   * <p>The number of status codes.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The items (status codes) for an origin group.</p>
   * @public
   */
  Items: number[] | undefined;
}

/**
 * <p>A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.</p>
 * @public
 */
export interface OriginGroupFailoverCriteria {
  /**
   * <p>The status codes that, when returned from the primary origin, will trigger CloudFront to failover to the second origin.</p>
   * @public
   */
  StatusCodes: StatusCodes | undefined;
}

/**
 * <p>An origin in an origin group.</p>
 * @public
 */
export interface OriginGroupMember {
  /**
   * <p>The ID for an origin in an origin group.</p>
   * @public
   */
  OriginId: string | undefined;
}

/**
 * <p>A complex data type for the origins included in an origin group.</p>
 * @public
 */
export interface OriginGroupMembers {
  /**
   * <p>The number of origins in an origin group.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>Items (origins) in an origin group.</p>
   * @public
   */
  Items: OriginGroupMember[] | undefined;
}

/**
 * <p>An origin group includes two origins (a primary origin and a secondary origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specify the origin group instead of a single origin, and CloudFront will failover from the primary origin to the secondary origin under the failover conditions that you've chosen.</p> <p>Optionally, you can choose selection criteria for your origin group to specify how your origins are selected when your distribution routes viewer requests.</p>
 * @public
 */
export interface OriginGroup {
  /**
   * <p>The origin group's ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>A complex type that contains information about the failover criteria for an origin group.</p>
   * @public
   */
  FailoverCriteria: OriginGroupFailoverCriteria | undefined;

  /**
   * <p>A complex type that contains information about the origins in an origin group.</p>
   * @public
   */
  Members: OriginGroupMembers | undefined;

  /**
   * <p>The selection criteria for the origin group. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html#concept_origin_groups.creating">Create an origin group</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  SelectionCriteria?: OriginGroupSelectionCriteria | undefined;
}

/**
 * <p>A complex data type for the origin groups specified for a distribution.</p>
 * @public
 */
export interface OriginGroups {
  /**
   * <p>The number of origin groups.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The items (origin groups) in a distribution.</p>
   * @public
   */
  Items?: OriginGroup[] | undefined;
}

/**
 * <p>A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution.</p>
 * @public
 */
export interface OriginCustomHeader {
  /**
   * <p>The name of a header that you want CloudFront to send to your origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html">Adding Custom Headers to Origin Requests</a> in the <i> Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  HeaderName: string | undefined;

  /**
   * <p>The value for the header that you specified in the <code>HeaderName</code> field.</p>
   * @public
   */
  HeaderValue: string | undefined;
}

/**
 * <p>A complex type that contains the list of Custom Headers for each origin.</p>
 * @public
 */
export interface CustomHeaders {
  /**
   * <p>The number of custom headers, if any, for this distribution.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p> <b>Optional</b>: A list that contains one <code>OriginCustomHeader</code> element for each custom header that you want CloudFront to forward to the origin. If Quantity is <code>0</code>, omit <code>Items</code>.</p>
   * @public
   */
  Items?: OriginCustomHeader[] | undefined;
}

/**
 * <p>A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.</p>
 * @public
 */
export interface OriginSslProtocols {
  /**
   * <p>The number of SSL/TLS protocols that you want to allow CloudFront to use when establishing an HTTPS connection with this origin.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list that contains allowed SSL/TLS protocols for this distribution.</p>
   * @public
   */
  Items: SslProtocol[] | undefined;
}

/**
 * <p>A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin.</p>
 * @public
 */
export interface CustomOriginConfig {
  /**
   * <p>The HTTP port that CloudFront uses to connect to the origin. Specify the HTTP port that the origin listens on.</p>
   * @public
   */
  HTTPPort: number | undefined;

  /**
   * <p>The HTTPS port that CloudFront uses to connect to the origin. Specify the HTTPS port that the origin listens on.</p>
   * @public
   */
  HTTPSPort: number | undefined;

  /**
   * <p>Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin. Valid values are:</p> <ul> <li> <p> <code>http-only</code> – CloudFront always uses HTTP to connect to the origin.</p> </li> <li> <p> <code>match-viewer</code> – CloudFront connects to the origin using the same protocol that the viewer used to connect to CloudFront.</p> </li> <li> <p> <code>https-only</code> – CloudFront always uses HTTPS to connect to the origin.</p> </li> </ul>
   * @public
   */
  OriginProtocolPolicy: OriginProtocolPolicy | undefined;

  /**
   * <p>Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS. Valid values include <code>SSLv3</code>, <code>TLSv1</code>, <code>TLSv1.1</code>, and <code>TLSv1.2</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginSSLProtocols">Minimum Origin SSL Protocol</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginSslProtocols?: OriginSslProtocols | undefined;

  /**
   * <p>Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the <i>origin response timeout</i>. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout">Response timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginReadTimeout?: number | undefined;

  /**
   * <p>Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 5 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginKeepaliveTimeout">Keep-alive timeout (custom origins only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginKeepaliveTimeout?: number | undefined;

  /**
   * <p>Specifies which IP protocol CloudFront uses when connecting to your origin. If your origin uses both IPv4 and IPv6 protocols, you can choose <code>dualstack</code> to help optimize reliability.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;
}

/**
 * <p>CloudFront Origin Shield.</p> <p>Using Origin Shield can help reduce the load on your origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface OriginShield {
  /**
   * <p>A flag that specifies whether Origin Shield is enabled.</p> <p>When it's enabled, CloudFront routes all requests through Origin Shield, which can help protect your origin. When it's disabled, CloudFront might send requests directly to your origin from multiple edge locations or regional edge caches.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>The Amazon Web Services Region for Origin Shield.</p> <p>Specify the Amazon Web Services Region that has the lowest latency to your origin. To specify a region, use the region code, not the region name. For example, specify the US East (Ohio) region as <code>us-east-2</code>.</p> <p>When you enable CloudFront Origin Shield, you must specify the Amazon Web Services Region for Origin Shield. For the list of Amazon Web Services Regions that you can specify, and for help choosing the best Region for your origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region">Choosing the Amazon Web Services Region for Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginShieldRegion?: string | undefined;
}

/**
 * <p>A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin or an S3 bucket that is configured as a website endpoint, use the <code>CustomOriginConfig</code> element instead.</p>
 * @public
 */
export interface S3OriginConfig {
  /**
   * <note> <p>If you're using origin access control (OAC) instead of origin access identity, specify an empty <code>OriginAccessIdentity</code> element. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html">Restricting access to an Amazon Web Services</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>The CloudFront origin access identity to associate with the origin. Use an origin access identity to configure the origin so that viewers can <i>only</i> access objects in an Amazon S3 bucket through CloudFront. The format of the value is:</p> <p> <code>origin-access-identity/cloudfront/ID-of-origin-access-identity</code> </p> <p>The <code> <i>ID-of-origin-access-identity</i> </code> is the value that CloudFront returned in the <code>ID</code> element when you created the origin access identity.</p> <p>If you want viewers to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty <code>OriginAccessIdentity</code> element.</p> <p>To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty <code>OriginAccessIdentity</code> element.</p> <p>To replace the origin access identity, update the distribution configuration and specify the new origin access identity.</p> <p>For more information about the origin access identity, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginAccessIdentity: string | undefined;

  /**
   * <p>Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the <i>origin response timeout</i>. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout">Response timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginReadTimeout?: number | undefined;
}

/**
 * <p>An Amazon CloudFront VPC origin configuration.</p>
 * @public
 */
export interface VpcOriginConfig {
  /**
   * <p>The VPC origin ID.</p>
   * @public
   */
  VpcOriginId: string | undefined;

  /**
   * <p>The account ID of the Amazon Web Services account that owns the VPC origin.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the <i>origin response timeout</i>. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout">Response timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginReadTimeout?: number | undefined;

  /**
   * <p>Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 5 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginKeepaliveTimeout">Keep-alive timeout (custom origins only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginKeepaliveTimeout?: number | undefined;
}

/**
 * <p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use <code>S3OriginConfig</code> to specify an Amazon S3 bucket that is not configured with static website hosting.</p> </li> <li> <p>Use <code>VpcOriginConfig</code> to specify a VPC origin.</p> </li> <li> <p>Use <code>CustomOriginConfig</code> to specify all other kinds of origins, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An Elemental MediaPackage endpoint</p> </li> <li> <p>An Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p>
 * @public
 */
export interface Origin {
  /**
   * <p>A unique identifier for the origin. This value must be unique within the distribution.</p> <p>Use this value to specify the <code>TargetOriginId</code> in a <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The domain name for the origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDomainName">Origin Domain Name</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>An optional path that CloudFront appends to the origin domain name when CloudFront requests content from the origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginPath">Origin Path</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginPath?: string | undefined;

  /**
   * <p>A list of HTTP header names and values that CloudFront adds to the requests that it sends to the origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html">Adding Custom Headers to Origin Requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  CustomHeaders?: CustomHeaders | undefined;

  /**
   * <p>Use this type to specify an origin that is an Amazon S3 bucket that is not configured with static website hosting. To specify any other type of origin, including an Amazon S3 bucket that is configured with static website hosting, use the <code>CustomOriginConfig</code> type instead.</p>
   * @public
   */
  S3OriginConfig?: S3OriginConfig | undefined;

  /**
   * <p>Use this type to specify an origin that is not an Amazon S3 bucket, with one exception. If the Amazon S3 bucket is configured with static website hosting, use this type. If the Amazon S3 bucket is not configured with static website hosting, use the <code>S3OriginConfig</code> type instead.</p>
   * @public
   */
  CustomOriginConfig?: CustomOriginConfig | undefined;

  /**
   * <p>The VPC origin configuration.</p>
   * @public
   */
  VpcOriginConfig?: VpcOriginConfig | undefined;

  /**
   * <p>The number of times that CloudFront attempts to connect to the origin. The minimum number is 1, the maximum is 3, and the default (if you don't specify otherwise) is 3.</p> <p>For a custom origin (including an Amazon S3 bucket that's configured with static website hosting), this value also specifies the number of times that CloudFront attempts to get a response from the origin, in the case of an <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout">Origin Response Timeout</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-attempts">Origin Connection Attempts</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  ConnectionAttempts?: number | undefined;

  /**
   * <p>The number of seconds that CloudFront waits when trying to establish a connection to the origin. The minimum timeout is 1 second, the maximum is 10 seconds, and the default (if you don't specify otherwise) is 10 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-timeout">Origin Connection Timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  ConnectionTimeout?: number | undefined;

  /**
   * <p>The time (in seconds) that a request from CloudFront to the origin can stay open and wait for a response. If the complete response isn't received from the origin by this time, CloudFront ends the connection.</p> <p>The value for <code>ResponseCompletionTimeout</code> must be equal to or greater than the value for <code>OriginReadTimeout</code>. If you don't set a value for <code>ResponseCompletionTimeout</code>, CloudFront doesn't enforce a maximum value.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#response-completion-timeout">Response completion timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  ResponseCompletionTimeout?: number | undefined;

  /**
   * <p>CloudFront Origin Shield. Using Origin Shield can help reduce the load on your origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginShield?: OriginShield | undefined;

  /**
   * <p>The unique identifier of an origin access control for this origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html">Restricting access to an Amazon S3 origin</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginAccessControlId?: string | undefined;
}

/**
 * <p>Contains information about the origins for this distribution.</p>
 * @public
 */
export interface Origins {
  /**
   * <p>The number of origins for this distribution.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of origins.</p>
   * @public
   */
  Items: Origin[] | undefined;
}

/**
 * <p>A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases. </p>
 * @public
 */
export interface GeoRestriction {
  /**
   * <p>The method that you want to use to restrict distribution of your content by country:</p> <ul> <li> <p> <code>none</code>: No geo restriction is enabled, meaning access to content is not restricted by client geo location.</p> </li> <li> <p> <code>blacklist</code>: The <code>Location</code> elements specify the countries in which you don't want CloudFront to distribute your content.</p> </li> <li> <p> <code>whitelist</code>: The <code>Location</code> elements specify the countries in which you want CloudFront to distribute your content.</p> </li> </ul>
   * @public
   */
  RestrictionType: GeoRestrictionType | undefined;

  /**
   * <p>When geo restriction is <code>enabled</code>, this is the number of countries in your <code>whitelist</code> or <code>blacklist</code>. Otherwise, when it is not enabled, <code>Quantity</code> is <code>0</code>, and you can omit <code>Items</code>.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains a <code>Location</code> element for each country in which you want CloudFront either to distribute your content (<code>whitelist</code>) or not distribute your content (<code>blacklist</code>).</p> <p>The <code>Location</code> element is a two-letter, uppercase country code for a country that you want to include in your <code>blacklist</code> or <code>whitelist</code>. Include one <code>Location</code> element for each country.</p> <p>CloudFront and <code>MaxMind</code> both use <code>ISO 3166</code> country codes. For the current list of countries and the corresponding codes, see <code>ISO 3166-1-alpha-2</code> code on the <i>International Organization for Standardization</i> website. You can also refer to the country list on the CloudFront console, which includes both country names and codes.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>A complex type that identifies ways in which you want to restrict distribution of your content.</p>
 * @public
 */
export interface Restrictions {
  /**
   * <p>A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.</p>
   * @public
   */
  GeoRestriction: GeoRestriction | undefined;
}

/**
 * <p>The configuration for a string schema.</p>
 * @public
 */
export interface StringSchemaConfig {
  /**
   * <p>A comment to describe the parameter.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The default value of the parameter.</p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>Whether the defined parameter is required.</p>
   * @public
   */
  Required: boolean | undefined;
}

/**
 * <p>An object that contains information about the parameter definition.</p>
 * @public
 */
export interface ParameterDefinitionSchema {
  /**
   * <p>An object that contains information about the string schema.</p>
   * @public
   */
  StringSchema?: StringSchemaConfig | undefined;
}

/**
 * <p>A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.</p>
 * @public
 */
export interface ParameterDefinition {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value that you assigned to the parameter.</p>
   * @public
   */
  Definition: ParameterDefinitionSchema | undefined;
}

/**
 * <note> <p>This field only supports multi-tenant distributions. You can't specify this field for standard distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>The configuration for a distribution tenant.</p>
 * @public
 */
export interface TenantConfig {
  /**
   * <p>The parameters that you specify for a distribution tenant.</p>
   * @public
   */
  ParameterDefinitions?: ParameterDefinition[] | undefined;
}

/**
 * <p>A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.</p> <p>If the distribution doesn't use <code>Aliases</code> (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other fields empty.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:</p> <ul> <li> <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers including those that don't support SNI.</p> <ul> <li> <p>To accept HTTPS connections from only viewers that support SNI, set <code>SSLSupportMethod</code> to <code>sni-only</code>. This is recommended. Most browsers and clients support SNI. </p> </li> <li> <p>To accept HTTPS connections from all viewers, including those that don't support SNI, set <code>SSLSupportMethod</code> to <code>vip</code>. This is not recommended, and results in additional monthly charges from CloudFront.</p> </li> </ul> </li> <li> <p>The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for <code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Identity and Access Management (IAM)</a>. You specify the location by setting a value in one of the following fields (not both):</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> </ul> </li> </ul> <p>All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use <code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use <code>CustomOriginConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface ViewerCertificate {
  /**
   * <p>If the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>, set this field to <code>true</code>.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), set this field to <code>false</code> and specify values for the following fields:</p> <ul> <li> <p> <code>ACMCertificateArn</code> or <code>IAMCertificateId</code> (specify a value for one, not both)</p> </li> <li> <p> <code>MinimumProtocolVersion</code> </p> </li> <li> <p> <code>SSLSupportMethod</code> </p> </li> </ul>
   * @public
   */
  CloudFrontDefaultCertificate?: boolean | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Identity and Access Management (IAM)</a>, provide the ID of the IAM certificate.</p> <p>If you specify an IAM certificate ID, you must also specify values for <code>MinimumProtocolVersion</code> and <code>SSLSupportMethod</code>. </p>
   * @public
   */
  IAMCertificateId?: string | undefined;

  /**
   * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">Certificate Manager (ACM)</a>, provide the Amazon Resource Name (ARN) of the ACM certificate. CloudFront only supports ACM certificates in the US East (N. Virginia) Region (<code>us-east-1</code>).</p> <p>If you specify an ACM certificate ARN, you must also specify values for <code>MinimumProtocolVersion</code> and <code>SSLSupportMethod</code>.</p>
   * @public
   */
  ACMCertificateArn?: string | undefined;

  /**
   * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), specify which viewers the distribution accepts HTTPS connections from.</p> <ul> <li> <p> <code>sni-only</code> – The distribution accepts HTTPS connections from only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a>. This is recommended. Most browsers and clients support SNI.</p> </li> <li> <p> <code>vip</code> – The distribution accepts HTTPS connections from all viewers including those that don't support SNI. This is not recommended, and results in additional monthly charges from CloudFront.</p> </li> <li> <p> <code>static-ip</code> - Do not specify this value unless your distribution has been enabled for this feature by the CloudFront team. If you have a use case that requires static IP addresses for a distribution, contact CloudFront through the <a href="https://console.aws.amazon.com/support/home">Amazon Web ServicesSupport Center</a>.</p> </li> </ul> <p>If the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>, don't set a value for this field.</p>
   * @public
   */
  SSLSupportMethod?: SSLSupportMethod | undefined;

  /**
   * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), specify the security policy that you want CloudFront to use for HTTPS connections with viewers. The security policy determines two settings:</p> <ul> <li> <p>The minimum SSL/TLS protocol that CloudFront can use to communicate with viewers.</p> </li> <li> <p>The ciphers that CloudFront can use to encrypt the content that it returns to viewers.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html#secure-connections-supported-ciphers">Supported Protocols and Ciphers Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <note> <p>On the CloudFront console, this setting is called <b>Security Policy</b>.</p> </note> <p>When you're using SNI only (you set <code>SSLSupportMethod</code> to <code>sni-only</code>), you must specify <code>TLSv1</code> or higher.</p> <p>If the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code> (you set <code>CloudFrontDefaultCertificate</code> to <code>true</code>), CloudFront automatically sets the security policy to <code>TLSv1</code> regardless of the value that you set here.</p>
   * @public
   */
  MinimumProtocolVersion?: MinimumProtocolVersion | undefined;

  /**
   * <p>This field is deprecated. Use one of the following fields instead:</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> <li> <p> <code>CloudFrontDefaultCertificate</code> </p> </li> </ul>
   *
   * @deprecated deprecated
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>This field is deprecated. Use one of the following fields instead:</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> <li> <p> <code>CloudFrontDefaultCertificate</code> </p> </li> </ul>
   *
   * @deprecated deprecated
   * @public
   */
  CertificateSource?: CertificateSource | undefined;
}

/**
 * <p>A distribution configuration.</p>
 * @public
 */
export interface DistributionConfig {
  /**
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>DistributionConfig</code> object), CloudFront creates a new distribution.</p> <p>If <code>CallerReference</code> is a value that you already sent in a previous request to create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>
   * @public
   */
  CallerReference: string | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.</p>
   * @public
   */
  Aliases?: Aliases | undefined;

  /**
   * <p>When a viewer requests the root URL for your distribution, the default root object is the object that you want CloudFront to request from your origin. For example, if your root URL is <code>https://www.example.com</code>, you can specify CloudFront to return the <code>index.html</code> file as the default root object. You can specify a default root object so that viewers see a specific file or object, instead of another object in your distribution (for example, <code>https://www.example.com/product-description.html</code>). A default root object avoids exposing the contents of your distribution.</p> <p>You can specify the object name or a path to the object name (for example, <code>index.html</code> or <code>exampleFolderName/index.html</code>). Your string can't begin with a forward slash (<code>/</code>). Only specify the object name or the path to the object.</p> <p>If you don't want to specify a default root object when you create a distribution, include an empty <code>DefaultRootObject</code> element.</p> <p>To delete the default root object from an existing distribution, update the distribution configuration and include an empty <code>DefaultRootObject</code> element.</p> <p>To replace the default root object, update the distribution configuration and specify the new object.</p> <p>For more information about the default root object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html">Specify a default root object</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  DefaultRootObject?: string | undefined;

  /**
   * <p>A complex type that contains information about origins for this distribution.</p>
   * @public
   */
  Origins: Origins | undefined;

  /**
   * <p>A complex type that contains information about origin groups for this distribution.</p>
   * @public
   */
  OriginGroups?: OriginGroups | undefined;

  /**
   * <p>A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.</p>
   * @public
   */
  DefaultCacheBehavior: DefaultCacheBehavior | undefined;

  /**
   * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.</p>
   * @public
   */
  CacheBehaviors?: CacheBehaviors | undefined;

  /**
   * <p>A complex type that controls the following:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  CustomErrorResponses?: CustomErrorResponses | undefined;

  /**
   * <p>A comment to describe the distribution. The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment: string | undefined;

  /**
   * <p>A complex type that controls whether access logs are written for the distribution.</p> <p>For more information about logging, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html">Access Logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  Logging?: LoggingConfig | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify <code>PriceClass_All</code>, CloudFront responds to requests for your objects from all CloudFront edge locations.</p> <p>If you specify a price class other than <code>PriceClass_All</code>, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance.</p> <p>For more information about price classes, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html">Choosing the Price Class for a CloudFront Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see <a href="http://aws.amazon.com/cloudfront/pricing/">Amazon CloudFront Pricing</a>.</p>
   * @public
   */
  PriceClass?: PriceClass | undefined;

  /**
   * <p>From this field, you can enable or disable the selected distribution.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.</p>
   * @public
   */
  ViewerCertificate?: ViewerCertificate | undefined;

  /**
   * <p>A complex type that identifies ways in which you want to restrict distribution of your content.</p>
   * @public
   */
  Restrictions?: Restrictions | undefined;

  /**
   * <note> <p>Multi-tenant distributions only support WAF V2 web ACLs.</p> </note> <p>A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example <code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>. To specify a web ACL created using WAF Classic, use the ACL ID, for example <code>a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>.</p> <p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer Guide</a>.</p>
   * @public
   */
  WebACLId?: string | undefined;

  /**
   * <p>(Optional) Specify the HTTP version(s) that you want viewers to use to communicate with CloudFront. The default value for new web distributions is <code>http2</code>. Viewers that don't support HTTP/2 automatically use an earlier HTTP version.</p> <p>For viewers and CloudFront to use HTTP/2, viewers must support TLSv1.2 or later, and must support Server Name Indication (SNI).</p> <p>For viewers and CloudFront to use HTTP/3, viewers must support TLSv1.3 and Server Name Indication (SNI). CloudFront supports HTTP/3 connection migration to allow the viewer to switch networks without losing connection. For more information about connection migration, see <a href="https://www.rfc-editor.org/rfc/rfc9000.html#name-connection-migration">Connection Migration</a> at RFC 9000. For more information about supported TLSv1.3 ciphers, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html">Supported protocols and ciphers between viewers and CloudFront</a>.</p>
   * @public
   */
  HttpVersion?: HttpVersion | undefined;

  /**
   * <note> <p>To use this field for a multi-tenant distribution, use a connection group instead. For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ConnectionGroup.html">ConnectionGroup</a>.</p> </note> <p>If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your distribution, specify <code>true</code>. If you specify <code>false</code>, CloudFront responds to IPv6 DNS requests with the DNS response code <code>NOERROR</code> and with no IP addresses. This allows viewers to submit a second request, for an IPv4 address for your distribution.</p> <p>In general, you should enable IPv6 if you have users on IPv6 networks who want to access your content. However, if you're using signed URLs or signed cookies to restrict access to your content, and if you're using a custom policy that includes the <code>IpAddress</code> parameter to restrict the IP addresses that can access your content, don't enable IPv6. If you want to restrict access to some content by IP address and not restrict access to other content (or restrict access but not by IP address), you can create two distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html">Creating a Signed URL Using a Custom Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you're using an Route 53 Amazon Web Services Integration alias resource record set to route traffic to your CloudFront distribution, you need to create a second alias resource record set when both of the following are true:</p> <ul> <li> <p>You enable IPv6 for the distribution</p> </li> <li> <p>You're using alternate domain names in the URLs for your objects</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html">Routing Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name</a> in the <i>Route 53 Amazon Web Services Integration Developer Guide</i>.</p> <p>If you created a CNAME resource record set, either with Route 53 Amazon Web Services Integration or with another DNS service, you don't need to make any changes. A CNAME record will route traffic to your distribution regardless of the IP address format of the viewer request.</p>
   * @public
   */
  IsIPV6Enabled?: boolean | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>The identifier of a continuous deployment policy. For more information, see <code>CreateContinuousDeploymentPolicy</code>.</p>
   * @public
   */
  ContinuousDeploymentPolicyId?: string | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>A Boolean that indicates whether this is a staging distribution. When this value is <code>true</code>, this is a staging distribution. When this value is <code>false</code>, this is not a staging distribution.</p>
   * @public
   */
  Staging?: boolean | undefined;

  /**
   * <note> <p>To use this field for a multi-tenant distribution, use a connection group instead. For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ConnectionGroup.html">ConnectionGroup</a>.</p> </note> <p>ID of the Anycast static IP list that is associated with the distribution.</p>
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * <note> <p>This field only supports multi-tenant distributions. You can't specify this field for standard distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>A distribution tenant configuration.</p>
   * @public
   */
  TenantConfig?: TenantConfig | undefined;

  /**
   * <p>This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).</p>
   * @public
   */
  ConnectionMode?: ConnectionMode | undefined;
}

/**
 * <p>A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.</p>
 * @public
 */
export interface Distribution {
  /**
   * <p>The distribution's identifier. For example: <code>E1U5RQF7T870K0</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The distribution's Amazon Resource Name (ARN).</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p>The distribution's status. When the status is <code>Deployed</code>, the distribution's information is fully propagated to all CloudFront edge locations.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The date and time when the distribution was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The number of invalidation batches currently in progress.</p>
   * @public
   */
  InProgressInvalidationBatches: number | undefined;

  /**
   * <p>The distribution's CloudFront domain name. For example: <code>d111111abcdef8.cloudfront.net</code>.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <important> <p>We recommend using <code>TrustedKeyGroups</code> instead of <code>TrustedSigners</code>.</p> </important> <p>This field contains a list of Amazon Web Services account IDs and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs or signed cookies.</p>
   * @public
   */
  ActiveTrustedSigners?: ActiveTrustedSigners | undefined;

  /**
   * <p>This field contains a list of key groups and the public keys in each key group that CloudFront can use to verify the signatures of signed URLs or signed cookies.</p>
   * @public
   */
  ActiveTrustedKeyGroups?: ActiveTrustedKeyGroups | undefined;

  /**
   * <p>The distribution's configuration.</p>
   * @public
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>
   * @public
   */
  AliasICPRecordals?: AliasICPRecordal[] | undefined;
}

/**
 * @public
 */
export interface CopyDistributionResult {
  /**
   * <p>A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.</p>
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * <p>The URL of the staging distribution.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The version identifier for the current version of the staging distribution.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>A complex type that contains <code>Tag</code> key and <code>Tag</code> value.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>A string that contains <code>Tag</code> key.</p> <p>The string length should be between 1 and 128 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>A string that contains an optional <code>Tag</code> value.</p> <p>The string length should be between 0 and 256 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
 * @public
 */
export interface Tags {
  /**
   * <p>A complex type that contains <code>Tag</code> elements.</p>
   * @public
   */
  Items?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAnycastIpListRequest {
  /**
   * <p>Name of the Anycast static IP list.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The number of static IP addresses that are allocated to the Anycast static IP list. Valid values: 21 or 3.</p>
   * @public
   */
  IpCount: number | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   * @public
   */
  Tags?: Tags | undefined;

  /**
   * <p>The IP address type for the Anycast static IP list. You can specify one of the following options:</p> <ul> <li> <p> <code>ipv4</code> only</p> </li> <li> <p> <code>ipv6</code> only </p> </li> <li> <p> <code>dualstack</code> - Allocate a list of both IPv4 and IPv6 addresses</p> </li> </ul>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p> A list of IPAM CIDR configurations that specify the IP address ranges and IPAM pool settings for creating the Anycast static IP list. </p>
   * @public
   */
  IpamCidrConfigs?: IpamCidrConfig[] | undefined;
}

/**
 * @public
 */
export interface CreateAnycastIpListResult {
  /**
   * <p>A response structure that includes the version identifier (ETag) and the created <a>AnycastIpList</a> structure.</p>
   * @public
   */
  AnycastIpList?: AnycastIpList | undefined;

  /**
   * <p>The version identifier for the current version of the Anycast static IP list.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface CreateCachePolicyRequest {
  /**
   * <p>A cache policy configuration.</p>
   * @public
   */
  CachePolicyConfig: CachePolicyConfig | undefined;
}

/**
 * @public
 */
export interface CreateCachePolicyResult {
  /**
   * <p>A cache policy.</p>
   * @public
   */
  CachePolicy?: CachePolicy | undefined;

  /**
   * <p>The fully qualified URI of the cache policy just created.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The current version of the cache policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.</p>
 * @public
 */
export interface CloudFrontOriginAccessIdentityConfig {
  /**
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>CloudFrontOriginAccessIdentityConfig</code> object), a new origin access identity is created.</p> <p>If the <code>CallerReference</code> is a value already sent in a previous identity request, and the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is identical to the original request (ignoring white space), the response includes the same information returned to the original request.</p> <p>If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity, but the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. </p>
   * @public
   */
  CallerReference: string | undefined;

  /**
   * <p>A comment to describe the origin access identity. The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment: string | undefined;
}

/**
 * <p>The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html"> Restricting Access to Amazon S3 Content by Using an Origin Access Identity</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface CreateCloudFrontOriginAccessIdentityRequest {
  /**
   * <p>The current configuration information for the identity.</p>
   * @public
   */
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig | undefined;
}

/**
 * <p>CloudFront origin access identity.</p>
 * @public
 */
export interface CloudFrontOriginAccessIdentity {
  /**
   * <p>The ID for the origin access identity, for example, <code>E74FTE3AJFJ256A</code>. </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon S3 canonical user ID for the origin access identity, used when giving the origin access identity read permission to an object in Amazon S3.</p>
   * @public
   */
  S3CanonicalUserId: string | undefined;

  /**
   * <p>The current configuration information for the identity.</p>
   * @public
   */
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface CreateCloudFrontOriginAccessIdentityResult {
  /**
   * <p>The origin access identity's information.</p>
   * @public
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity | undefined;

  /**
   * <p>The fully qualified URI of the new origin access identity just created.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The current version of the origin access identity created.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionGroupRequest {
  /**
   * <p>The name of the connection group. Enter a friendly identifier that is unique within your Amazon Web Services account. This name can't be updated after you create the connection group.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Enable IPv6 for the connection group. The default is <code>true</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesEnableIPv6">Enable IPv6</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  Ipv6Enabled?: boolean | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   * @public
   */
  Tags?: Tags | undefined;

  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * <p>Enable the connection group.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>The connection group for your distribution tenants. When you first create a distribution tenant and you don't specify a connection group, CloudFront will automatically create a default connection group for you. When you create a new distribution tenant and don't specify a connection group, the default one will be associated with your distribution tenant.</p>
 * @public
 */
export interface ConnectionGroup {
  /**
   * <p>The ID of the connection group.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the connection group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The date and time when the connection group was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The date and time when the connection group was updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   * @public
   */
  Tags?: Tags | undefined;

  /**
   * <p>IPv6 is enabled for the connection group.</p>
   * @public
   */
  Ipv6Enabled?: boolean | undefined;

  /**
   * <p>The routing endpoint (also known as the DNS name) that is assigned to the connection group, such as d111111abcdef8.cloudfront.net.</p>
   * @public
   */
  RoutingEndpoint?: string | undefined;

  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * <p>The status of the connection group.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Whether the connection group is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Whether the connection group is the default connection group for the distribution tenants.</p>
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateConnectionGroupResult {
  /**
   * <p>The connection group that you created.</p>
   * @public
   */
  ConnectionGroup?: ConnectionGroup | undefined;

  /**
   * <p>The current version of the connection group.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The CloudFront domain name of the staging distribution.</p>
 * @public
 */
export interface StagingDistributionDnsNames {
  /**
   * <p>The number of CloudFront domain names in your staging distribution.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The CloudFront domain name of the staging distribution.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.</p>
 * @public
 */
export interface ContinuousDeploymentSingleHeaderConfig {
  /**
   * <p>The request header name that you want CloudFront to send to your staging distribution. The header must contain the prefix <code>aws-cf-cd-</code>.</p>
   * @public
   */
  Header: string | undefined;

  /**
   * <p>The request header value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.</p>
 * @public
 */
export interface SessionStickinessConfig {
  /**
   * <p>The amount of time after which you want sessions to cease if no requests are received. Allowed values are 300–3600 seconds (5–60 minutes).</p> <p>The value must be less than or equal to <code>MaximumTTL</code>.</p>
   * @public
   */
  IdleTTL: number | undefined;

  /**
   * <p>The maximum amount of time to consider requests from the viewer as being part of the same session. Allowed values are 300–3600 seconds (5–60 minutes).</p> <p>The value must be greater than or equal to <code>IdleTTL</code>.</p>
   * @public
   */
  MaximumTTL: number | undefined;
}

/**
 * <p>Contains the percentage of traffic to send to a staging distribution.</p>
 * @public
 */
export interface ContinuousDeploymentSingleWeightConfig {
  /**
   * <p>The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and 0.15. For example, a value of 0.10 means 10% of traffic is sent to the staging distribution.</p>
   * @public
   */
  Weight: number | undefined;

  /**
   * <p>Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.</p>
   * @public
   */
  SessionStickinessConfig?: SessionStickinessConfig | undefined;
}

/**
 * <p>The traffic configuration of your continuous deployment.</p>
 * @public
 */
export interface TrafficConfig {
  /**
   * <p>Contains the percentage of traffic to send to the staging distribution.</p>
   * @public
   */
  SingleWeightConfig?: ContinuousDeploymentSingleWeightConfig | undefined;

  /**
   * <p>Determines which HTTP requests are sent to the staging distribution.</p>
   * @public
   */
  SingleHeaderConfig?: ContinuousDeploymentSingleHeaderConfig | undefined;

  /**
   * <p>The type of traffic configuration.</p>
   * @public
   */
  Type: ContinuousDeploymentPolicyType | undefined;
}

/**
 * <p>Contains the configuration for a continuous deployment policy.</p>
 * @public
 */
export interface ContinuousDeploymentPolicyConfig {
  /**
   * <p>The CloudFront domain name of the staging distribution. For example: <code>d111111abcdef8.cloudfront.net</code>.</p>
   * @public
   */
  StagingDistributionDnsNames: StagingDistributionDnsNames | undefined;

  /**
   * <p>A Boolean that indicates whether this continuous deployment policy is enabled (in effect). When this value is <code>true</code>, this policy is enabled and in effect. When this value is <code>false</code>, this policy is not enabled and has no effect.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>Contains the parameters for routing production traffic from your primary to staging distributions.</p>
   * @public
   */
  TrafficConfig?: TrafficConfig | undefined;
}

/**
 * @public
 */
export interface CreateContinuousDeploymentPolicyRequest {
  /**
   * <p>Contains the configuration for a continuous deployment policy.</p>
   * @public
   */
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig | undefined;
}

/**
 * <p>A continuous deployment policy.</p>
 * @public
 */
export interface ContinuousDeploymentPolicy {
  /**
   * <p>The identifier of the continuous deployment policy.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The date and time the continuous deployment policy was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Contains the configuration for a continuous deployment policy.</p>
   * @public
   */
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig | undefined;
}

/**
 * @public
 */
export interface CreateContinuousDeploymentPolicyResult {
  /**
   * <p>A continuous deployment policy.</p>
   * @public
   */
  ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy | undefined;

  /**
   * <p>The location of the continuous deployment policy.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The version identifier for the current version of the continuous deployment policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The request to create a new distribution.</p>
 * @public
 */
export interface CreateDistributionRequest {
  /**
   * <p>The distribution's configuration information.</p>
   * @public
   */
  DistributionConfig: DistributionConfig | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface CreateDistributionResult {
  /**
   * <p>The distribution's information.</p>
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * <p>The fully qualified URI of the new distribution resource just created.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The current version of the distribution created.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The customizations that you specified for the distribution tenant for geographic restrictions.</p>
 * @public
 */
export interface GeoRestrictionCustomization {
  /**
   * <p>The method that you want to use to restrict distribution of your content by country:</p> <ul> <li> <p> <code>none</code>: No geographic restriction is enabled, meaning access to content is not restricted by client geo location.</p> </li> <li> <p> <code>blacklist</code>: The <code>Location</code> elements specify the countries in which you don't want CloudFront to distribute your content.</p> </li> <li> <p> <code>whitelist</code>: The <code>Location</code> elements specify the countries in which you want CloudFront to distribute your content.</p> </li> </ul>
   * @public
   */
  RestrictionType: GeoRestrictionType | undefined;

  /**
   * <p>The locations for geographic restrictions.</p>
   * @public
   */
  Locations?: string[] | undefined;
}

/**
 * <p>The WAF web ACL customization specified for the distribution tenant.</p>
 * @public
 */
export interface WebAclCustomization {
  /**
   * <p>The action for the WAF web ACL customization. You can specify <code>override</code> to specify a separate WAF web ACL for the distribution tenant. If you specify <code>disable</code>, the distribution tenant won't have WAF web ACL protections and won't inherit from the multi-tenant distribution.</p>
   * @public
   */
  Action: CustomizationActionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the WAF web ACL.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.</p>
 * @public
 */
export interface Customizations {
  /**
   * <p>The WAF web ACL.</p>
   * @public
   */
  WebAcl?: WebAclCustomization | undefined;

  /**
   * <p>The Certificate Manager (ACM) certificate.</p>
   * @public
   */
  Certificate?: Certificate | undefined;

  /**
   * <p>The geographic restrictions.</p>
   * @public
   */
  GeoRestrictions?: GeoRestrictionCustomization | undefined;
}

/**
 * <p>The domain for the specified distribution tenant.</p>
 * @public
 */
export interface DomainItem {
  /**
   * <p>The domain name.</p>
   * @public
   */
  Domain: string | undefined;
}

/**
 * <p>An object that represents the request for the Amazon CloudFront managed ACM certificate.</p>
 * @public
 */
export interface ManagedCertificateRequest {
  /**
   * <p>Specify how the HTTP validation token will be served when requesting the CloudFront managed ACM certificate.</p> <ul> <li> <p>For <code>cloudfront</code>, CloudFront will automatically serve the validation token. Choose this mode if you can point the domain's DNS to CloudFront immediately.</p> </li> <li> <p>For <code>self-hosted</code>, you serve the validation token from your existing infrastructure. Choose this mode when you need to maintain current traffic flow while your certificate is being issued. You can place the validation token at the well-known path on your existing web server, wait for ACM to validate and issue the certificate, and then update your DNS to point to CloudFront.</p> </li> </ul>
   * @public
   */
  ValidationTokenHost: ValidationTokenHost | undefined;

  /**
   * <p>The primary domain name associated with the CloudFront managed ACM certificate.</p>
   * @public
   */
  PrimaryDomainName?: string | undefined;

  /**
   * <p>You can opt out of certificate transparency logging by specifying the <code>disabled</code> option. Opt in by specifying <code>enabled</code>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging </a> in the <i>Certificate Manager User Guide</i>.</p>
   * @public
   */
  CertificateTransparencyLoggingPreference?: CertificateTransparencyLoggingPreference | undefined;
}

/**
 * <p>A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>The parameter name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The parameter value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateDistributionTenantRequest {
  /**
   * <p>The ID of the multi-tenant distribution to use for creating the distribution tenant.</p>
   * @public
   */
  DistributionId: string | undefined;

  /**
   * <p>The name of the distribution tenant. Enter a friendly identifier that is unique within your Amazon Web Services account. This name can't be updated after you create the distribution tenant.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The domains associated with the distribution tenant. You must specify at least one domain in the request.</p>
   * @public
   */
  Domains: DomainItem[] | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   * @public
   */
  Tags?: Tags | undefined;

  /**
   * <p>Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.</p>
   * @public
   */
  Customizations?: Customizations | undefined;

  /**
   * <p>A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>The ID of the connection group to associate with the distribution tenant.</p>
   * @public
   */
  ConnectionGroupId?: string | undefined;

  /**
   * <p>The configuration for the CloudFront managed ACM certificate request.</p>
   * @public
   */
  ManagedCertificateRequest?: ManagedCertificateRequest | undefined;

  /**
   * <p>Indicates whether the distribution tenant should be enabled when created. If the distribution tenant is disabled, the distribution tenant won't serve traffic.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>The details about the domain result.</p>
 * @public
 */
export interface DomainResult {
  /**
   * <p>The specified domain.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>Whether the domain is active or inactive.</p>
   * @public
   */
  Status?: DomainStatus | undefined;
}

/**
 * <p>The distribution tenant.</p>
 * @public
 */
export interface DistributionTenant {
  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ID of the multi-tenant distribution.</p>
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * <p>The name of the distribution tenant.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution tenant.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The domains associated with the distribution tenant.</p>
   * @public
   */
  Domains?: DomainResult[] | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   * @public
   */
  Tags?: Tags | undefined;

  /**
   * <p>Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.</p>
   * @public
   */
  Customizations?: Customizations | undefined;

  /**
   * <p>A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>The ID of the connection group for the distribution tenant. If you don't specify a connection group, CloudFront uses the default connection group.</p>
   * @public
   */
  ConnectionGroupId?: string | undefined;

  /**
   * <p>The date and time when the distribution tenant was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The date and time when the distribution tenant was updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The status of the distribution tenant.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface CreateDistributionTenantResult {
  /**
   * <p>The distribution tenant that you created.</p>
   * @public
   */
  DistributionTenant?: DistributionTenant | undefined;

  /**
   * <p>The current version of the distribution tenant.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>A distribution Configuration and a list of tags to be associated with the distribution.</p>
 * @public
 */
export interface DistributionConfigWithTags {
  /**
   * <p>A distribution configuration.</p>
   * @public
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   * @public
   */
  Tags: Tags | undefined;
}

/**
 * <p>The request to create a new distribution with tags.</p>
 * @public
 */
export interface CreateDistributionWithTagsRequest {
  /**
   * <p>The distribution's configuration information.</p>
   * @public
   */
  DistributionConfigWithTags: DistributionConfigWithTags | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface CreateDistributionWithTagsResult {
  /**
   * <p>The distribution's information.</p>
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * <p>The fully qualified URI of the new distribution resource just created.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The current version of the distribution created.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>A field-level encryption content type profile.</p>
 * @public
 */
export interface ContentTypeProfile {
  /**
   * <p>The format for a field-level encryption content type-profile mapping.</p>
   * @public
   */
  Format: Format | undefined;

  /**
   * <p>The profile ID for a field-level encryption content type-profile mapping.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>The content type for a field-level encryption content type-profile mapping.</p>
   * @public
   */
  ContentType: string | undefined;
}

/**
 * <p>Field-level encryption content type-profile.</p>
 * @public
 */
export interface ContentTypeProfiles {
  /**
   * <p>The number of field-level encryption content type-profile mappings.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>Items in a field-level encryption content type-profile mapping.</p>
   * @public
   */
  Items?: ContentTypeProfile[] | undefined;
}

/**
 * <p>The configuration for a field-level encryption content type-profile mapping.</p>
 * @public
 */
export interface ContentTypeProfileConfig {
  /**
   * <p>The setting in a field-level encryption content type-profile mapping that specifies what to do when an unknown content type is provided for the profile. If true, content is forwarded without being encrypted when the content type is unknown. If false (the default), an error is returned when the content type is unknown.</p>
   * @public
   */
  ForwardWhenContentTypeIsUnknown: boolean | undefined;

  /**
   * <p>The configuration for a field-level encryption content type-profile.</p>
   * @public
   */
  ContentTypeProfiles?: ContentTypeProfiles | undefined;
}

/**
 * <p>Query argument-profile mapping for field-level encryption.</p>
 * @public
 */
export interface QueryArgProfile {
  /**
   * <p>Query argument for field-level encryption query argument-profile mapping.</p>
   * @public
   */
  QueryArg: string | undefined;

  /**
   * <p>ID of profile to use for field-level encryption query argument-profile mapping</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * <p>Query argument-profile mapping for field-level encryption.</p>
 * @public
 */
export interface QueryArgProfiles {
  /**
   * <p>Number of profiles for query argument-profile mapping for field-level encryption.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>Number of items for query argument-profile mapping for field-level encryption.</p>
   * @public
   */
  Items?: QueryArgProfile[] | undefined;
}

/**
 * <p>Configuration for query argument-profile mapping for field-level encryption.</p>
 * @public
 */
export interface QueryArgProfileConfig {
  /**
   * <p>Flag to set if you want a request to be forwarded to the origin even if the profile specified by the field-level encryption query argument, fle-profile, is unknown.</p>
   * @public
   */
  ForwardWhenQueryArgProfileIsUnknown: boolean | undefined;

  /**
   * <p>Profiles specified for query argument-profile mapping for field-level encryption.</p>
   * @public
   */
  QueryArgProfiles?: QueryArgProfiles | undefined;
}

/**
 * <p>A complex data type that includes the profile configurations specified for field-level encryption.</p>
 * @public
 */
export interface FieldLevelEncryptionConfig {
  /**
   * <p>A unique number that ensures the request can't be replayed.</p>
   * @public
   */
  CallerReference: string | undefined;

  /**
   * <p>An optional comment about the configuration. The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>A complex data type that specifies when to forward content if a profile isn't found and the profile that can be provided as a query argument in a request.</p>
   * @public
   */
  QueryArgProfileConfig?: QueryArgProfileConfig | undefined;

  /**
   * <p>A complex data type that specifies when to forward content if a content type isn't recognized and profiles to use as by default in a request if a query argument doesn't specify a profile to use.</p>
   * @public
   */
  ContentTypeProfileConfig?: ContentTypeProfileConfig | undefined;
}

/**
 * @public
 */
export interface CreateFieldLevelEncryptionConfigRequest {
  /**
   * <p>The request to create a new field-level encryption configuration.</p>
   * @public
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;
}

/**
 * <p>A complex data type that includes the profile configurations and other options specified for field-level encryption.</p>
 * @public
 */
export interface FieldLevelEncryption {
  /**
   * <p>The configuration ID for a field-level encryption configuration which includes a set of profiles that specify certain selected data fields to be encrypted by specific public keys.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The last time the field-level encryption configuration was changed.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A complex data type that includes the profile configurations specified for field-level encryption.</p>
   * @public
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;
}

/**
 * @public
 */
export interface CreateFieldLevelEncryptionConfigResult {
  /**
   * <p>Returned when you create a new field-level encryption configuration.</p>
   * @public
   */
  FieldLevelEncryption?: FieldLevelEncryption | undefined;

  /**
   * <p>The fully qualified URI of the new configuration resource just created.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The current version of the field level encryption configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>A complex data type that includes the field patterns to match for field-level encryption.</p>
 * @public
 */
export interface FieldPatterns {
  /**
   * <p>The number of field-level encryption field patterns.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>An array of the field-level encryption field patterns.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications.</p>
 * @public
 */
export interface EncryptionEntity {
  /**
   * <p>The public key associated with a set of field-level encryption patterns, to be used when encrypting the fields that match the patterns.</p>
   * @public
   */
  PublicKeyId: string | undefined;

  /**
   * <p>The provider associated with the public key being used for encryption. This value must also be provided with the private key for applications to be able to decrypt data.</p>
   * @public
   */
  ProviderId: string | undefined;

  /**
   * <p>Field patterns in a field-level encryption content type profile specify the fields that you want to be encrypted. You can provide the full field name, or any beginning characters followed by a wildcard (*). You can't overlap field patterns. For example, you can't have both ABC* and AB*. Note that field patterns are case-sensitive.</p>
   * @public
   */
  FieldPatterns: FieldPatterns | undefined;
}

/**
 * <p>Complex data type for field-level encryption profiles that includes all of the encryption entities.</p>
 * @public
 */
export interface EncryptionEntities {
  /**
   * <p>Number of field pattern items in a field-level encryption content type-profile mapping.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>An array of field patterns in a field-level encryption content type-profile mapping. </p>
   * @public
   */
  Items?: EncryptionEntity[] | undefined;
}

/**
 * <p>A complex data type of profiles for the field-level encryption.</p>
 * @public
 */
export interface FieldLevelEncryptionProfileConfig {
  /**
   * <p>Profile name for the field-level encryption profile.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique number that ensures that the request can't be replayed.</p>
   * @public
   */
  CallerReference: string | undefined;

  /**
   * <p>An optional comment for the field-level encryption profile. The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.</p>
   * @public
   */
  EncryptionEntities: EncryptionEntities | undefined;
}

/**
 * @public
 */
export interface CreateFieldLevelEncryptionProfileRequest {
  /**
   * <p>The request to create a field-level encryption profile.</p>
   * @public
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;
}

/**
 * <p>A complex data type for field-level encryption profiles.</p>
 * @public
 */
export interface FieldLevelEncryptionProfile {
  /**
   * <p>The ID for a field-level encryption profile configuration which includes a set of profiles that specify certain selected data fields to be encrypted by specific public keys.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The last time the field-level encryption profile was updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A complex data type that includes the profile name and the encryption entities for the field-level encryption profile.</p>
   * @public
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;
}

/**
 * @public
 */
export interface CreateFieldLevelEncryptionProfileResult {
  /**
   * <p>Returned when you create a new field-level encryption profile.</p>
   * @public
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile | undefined;

  /**
   * <p>The fully qualified URI of the new profile resource just created.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The current version of the field level encryption profile. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The key value store association.</p>
 * @public
 */
export interface KeyValueStoreAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) of the key value store association.</p>
   * @public
   */
  KeyValueStoreARN: string | undefined;
}

/**
 * <p>The key value store associations.</p>
 * @public
 */
export interface KeyValueStoreAssociations {
  /**
   * <p>The quantity of key value store associations.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The items of the key value store association.</p>
   * @public
   */
  Items?: KeyValueStoreAssociation[] | undefined;
}

/**
 * <p>Contains configuration information about a CloudFront function.</p>
 * @public
 */
export interface FunctionConfig {
  /**
   * <p>A comment to describe the function.</p>
   * @public
   */
  Comment: string | undefined;

  /**
   * <p>The function's runtime environment version.</p>
   * @public
   */
  Runtime: FunctionRuntime | undefined;

  /**
   * <p>The configuration for the key value store associations.</p>
   * @public
   */
  KeyValueStoreAssociations?: KeyValueStoreAssociations | undefined;
}

/**
 * @public
 */
export interface CreateFunctionRequest {
  /**
   * <p>A name to identify the function.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Configuration information about the function, including an optional comment and the function's runtime.</p>
   * @public
   */
  FunctionConfig: FunctionConfig | undefined;

  /**
   * <p>The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  FunctionCode: Uint8Array | undefined;
}

/**
 * <p>Contains metadata about a CloudFront function.</p>
 * @public
 */
export interface FunctionMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the function. The ARN uniquely identifies the function.</p>
   * @public
   */
  FunctionARN: string | undefined;

  /**
   * <p>The stage that the function is in, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p> <p>When a function is in the <code>DEVELOPMENT</code> stage, you can test the function with <code>TestFunction</code>, and update it with <code>UpdateFunction</code>.</p> <p>When a function is in the <code>LIVE</code> stage, you can attach the function to a distribution's cache behavior, using the function's ARN.</p>
   * @public
   */
  Stage?: FunctionStage | undefined;

  /**
   * <p>The date and time when the function was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The date and time when the function was most recently updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * <p>Contains configuration information and metadata about a CloudFront function.</p>
 * @public
 */
export interface FunctionSummary {
  /**
   * <p>The name of the CloudFront function.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The status of the CloudFront function.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Contains configuration information about a CloudFront function.</p>
   * @public
   */
  FunctionConfig: FunctionConfig | undefined;

  /**
   * <p>Contains metadata about a CloudFront function.</p>
   * @public
   */
  FunctionMetadata: FunctionMetadata | undefined;
}

/**
 * @public
 */
export interface CreateFunctionResult {
  /**
   * <p>Contains configuration information and metadata about a CloudFront function.</p>
   * @public
   */
  FunctionSummary?: FunctionSummary | undefined;

  /**
   * <p>The URL of the CloudFront function. Use the URL to manage the function with the CloudFront API.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The version identifier for the current version of the CloudFront function.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface Paths {
  /**
   * <p>The number of invalidation paths specified for the objects that you want to invalidate.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains a list of the paths that you want to invalidate.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>An invalidation batch.</p>
 * @public
 */
export interface InvalidationBatch {
  /**
   * <p>A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  Paths: Paths | undefined;

  /**
   * <p>A value that you specify to uniquely identify an invalidation request. CloudFront uses the value to prevent you from accidentally resubmitting an identical request. Whenever you create a new invalidation request, you must specify a new value for <code>CallerReference</code> and change other values in the request as applicable. One way to ensure that the value of <code>CallerReference</code> is unique is to use a <code>timestamp</code>, for example, <code>20120301090000</code>.</p> <p>If you make a second invalidation request with the same value for <code>CallerReference</code>, and if the rest of the request is the same, CloudFront doesn't create a new invalidation request. Instead, CloudFront returns information about the invalidation request that you previously created with the same <code>CallerReference</code>.</p> <p>If <code>CallerReference</code> is a value you already sent in a previous invalidation batch request but the content of any <code>Path</code> is different from the original request, CloudFront returns an <code>InvalidationBatchAlreadyExists</code> error.</p>
   * @public
   */
  CallerReference: string | undefined;
}

/**
 * <p>The request to create an invalidation.</p>
 * @public
 */
export interface CreateInvalidationRequest {
  /**
   * <p>The distribution's id.</p>
   * @public
   */
  DistributionId: string | undefined;

  /**
   * <p>The batch information for the invalidation.</p>
   * @public
   */
  InvalidationBatch: InvalidationBatch | undefined;
}

/**
 * <p>An invalidation.</p>
 * @public
 */
export interface Invalidation {
  /**
   * <p>The identifier for the invalidation request. For example: <code>IDFDVBD632BHDS5</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The status of the invalidation request. When the invalidation batch is finished, the status is <code>Completed</code>.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The date and time the invalidation request was first made.</p>
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * <p>The current invalidation information for the batch request.</p>
   * @public
   */
  InvalidationBatch: InvalidationBatch | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface CreateInvalidationResult {
  /**
   * <p>The fully qualified URI of the distribution and invalidation batch request, including the <code>Invalidation ID</code>.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The invalidation's information.</p>
   * @public
   */
  Invalidation?: Invalidation | undefined;
}

/**
 * @public
 */
export interface CreateInvalidationForDistributionTenantRequest {
  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>An invalidation batch.</p>
   * @public
   */
  InvalidationBatch: InvalidationBatch | undefined;
}

/**
 * @public
 */
export interface CreateInvalidationForDistributionTenantResult {
  /**
   * <p>The location for the invalidation.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>An invalidation.</p>
   * @public
   */
  Invalidation?: Invalidation | undefined;
}

/**
 * <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
 * @public
 */
export interface KeyGroupConfig {
  /**
   * <p>A name to identify the key group.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of the identifiers of the public keys in the key group.</p>
   * @public
   */
  Items: string[] | undefined;

  /**
   * <p>A comment to describe the key group. The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment?: string | undefined;
}

/**
 * @public
 */
export interface CreateKeyGroupRequest {
  /**
   * <p>A key group configuration.</p>
   * @public
   */
  KeyGroupConfig: KeyGroupConfig | undefined;
}

/**
 * <p>A key group.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
 * @public
 */
export interface KeyGroup {
  /**
   * <p>The identifier for the key group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The date and time when the key group was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The key group configuration.</p>
   * @public
   */
  KeyGroupConfig: KeyGroupConfig | undefined;
}

/**
 * @public
 */
export interface CreateKeyGroupResult {
  /**
   * <p>The key group that was just created.</p>
   * @public
   */
  KeyGroup?: KeyGroup | undefined;

  /**
   * <p>The URL of the key group.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The identifier for this version of the key group.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The import source for the key value store.</p>
 * @public
 */
export interface ImportSource {
  /**
   * <p>The source type of the import source for the key value store.</p>
   * @public
   */
  SourceType: ImportSourceType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the import source for the key value store.</p>
   * @public
   */
  SourceARN: string | undefined;
}

/**
 * @public
 */
export interface CreateKeyValueStoreRequest {
  /**
   * <p>The name of the key value store. The minimum length is 1 character and the maximum length is 64 characters.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The comment of the key value store.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The S3 bucket that provides the source for the import. The source must be in a valid JSON format.</p>
   * @public
   */
  ImportSource?: ImportSource | undefined;
}

/**
 * <p>The key value store. Use this to separate data from function code, allowing you to update data without having to publish a new version of a function. The key value store holds keys and their corresponding values.</p>
 * @public
 */
export interface KeyValueStore {
  /**
   * <p>The name of the key value store.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The unique Id for the key value store.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>A comment for the key value store.</p>
   * @public
   */
  Comment: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the key value store.</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p>The status of the key value store.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The last-modified time of the key value store.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateKeyValueStoreResult {
  /**
   * <p>The resulting key value store.</p>
   * @public
   */
  KeyValueStore?: KeyValueStore | undefined;

  /**
   * <p>The <code>ETag</code> in the resulting key value store.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The location of the resulting key value store.</p>
   * @public
   */
  Location?: string | undefined;
}

/**
 * <p>A subscription configuration for additional CloudWatch metrics.</p>
 * @public
 */
export interface RealtimeMetricsSubscriptionConfig {
  /**
   * <p>A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution.</p>
   * @public
   */
  RealtimeMetricsSubscriptionStatus: RealtimeMetricsSubscriptionStatus | undefined;
}

/**
 * <p>A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.</p>
 * @public
 */
export interface MonitoringSubscription {
  /**
   * <p>A subscription configuration for additional CloudWatch metrics.</p>
   * @public
   */
  RealtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfig | undefined;
}

/**
 * @public
 */
export interface CreateMonitoringSubscriptionRequest {
  /**
   * <p>The ID of the distribution that you are enabling metrics for.</p>
   * @public
   */
  DistributionId: string | undefined;

  /**
   * <p>A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.</p>
   * @public
   */
  MonitoringSubscription: MonitoringSubscription | undefined;
}

/**
 * @public
 */
export interface CreateMonitoringSubscriptionResult {
  /**
   * <p>A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.</p>
   * @public
   */
  MonitoringSubscription?: MonitoringSubscription | undefined;
}

/**
 * <p>A CloudFront origin access control configuration.</p>
 * @public
 */
export interface OriginAccessControlConfig {
  /**
   * <p>A name to identify the origin access control. You can specify up to 64 characters.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the origin access control.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid value is <code>sigv4</code>.</p>
   * @public
   */
  SigningProtocol: OriginAccessControlSigningProtocols | undefined;

  /**
   * <p>Specifies which requests CloudFront signs (adds authentication information to). Specify <code>always</code> for the most common use case. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings">origin access control advanced settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>This field can have one of the following values:</p> <ul> <li> <p> <code>always</code> – CloudFront signs all origin requests, overwriting the <code>Authorization</code> header from the viewer request if one exists.</p> </li> <li> <p> <code>never</code> – CloudFront doesn't sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.</p> </li> <li> <p> <code>no-override</code> – If the viewer request doesn't contain the <code>Authorization</code> header, then CloudFront signs the origin request. If the viewer request contains the <code>Authorization</code> header, then CloudFront doesn't sign the origin request and instead passes along the <code>Authorization</code> header from the viewer request. <b>WARNING: To pass along the <code>Authorization</code> header from the viewer request, you <i>must</i> add the <code>Authorization</code> header to a <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">cache policy</a> for all cache behaviors that use origins associated with this origin access control.</b> </p> </li> </ul>
   * @public
   */
  SigningBehavior: OriginAccessControlSigningBehaviors | undefined;

  /**
   * <p>The type of origin that this origin access control is for.</p>
   * @public
   */
  OriginAccessControlOriginType: OriginAccessControlOriginTypes | undefined;
}

/**
 * @public
 */
export interface CreateOriginAccessControlRequest {
  /**
   * <p>Contains the origin access control.</p>
   * @public
   */
  OriginAccessControlConfig: OriginAccessControlConfig | undefined;
}

/**
 * <p>A CloudFront origin access control, including its unique identifier.</p>
 * @public
 */
export interface OriginAccessControl {
  /**
   * <p>The unique identifier of the origin access control.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The origin access control.</p>
   * @public
   */
  OriginAccessControlConfig?: OriginAccessControlConfig | undefined;
}

/**
 * @public
 */
export interface CreateOriginAccessControlResult {
  /**
   * <p>Contains an origin access control.</p>
   * @public
   */
  OriginAccessControl?: OriginAccessControl | undefined;

  /**
   * <p>The URL of the origin access control.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The version identifier for the current version of the origin access control.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.</p>
 * @public
 */
export interface OriginRequestPolicyCookiesConfig {
  /**
   * <p>Determines whether cookies in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:</p> <ul> <li> <p> <code>none</code> – No cookies in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any cookies that are listed in a <code>CachePolicy</code> <i>are</i> included in origin requests.</p> </li> <li> <p> <code>whitelist</code> – Only the cookies in viewer requests that are listed in the <code>CookieNames</code> type are included in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>all</code> – All cookies in viewer requests are included in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>allExcept</code> – All cookies in viewer requests are included in requests that CloudFront sends to the origin, <i> <b>except</b> </i> for those listed in the <code>CookieNames</code> type, which are not included.</p> </li> </ul>
   * @public
   */
  CookieBehavior: OriginRequestPolicyCookieBehavior | undefined;

  /**
   * <p>Contains a list of cookie names.</p>
   * @public
   */
  Cookies?: CookieNames | undefined;
}

/**
 * <p>An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.</p>
 * @public
 */
export interface OriginRequestPolicyHeadersConfig {
  /**
   * <p>Determines whether any HTTP headers are included in requests that CloudFront sends to the origin. Valid values are:</p> <ul> <li> <p> <code>none</code> – No HTTP headers in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any headers that are listed in a <code>CachePolicy</code> <i>are</i> included in origin requests.</p> </li> <li> <p> <code>whitelist</code> – Only the HTTP headers that are listed in the <code>Headers</code> type are included in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>allViewer</code> – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>allViewerAndWhitelistCloudFront</code> – All HTTP headers in viewer requests and the additional CloudFront headers that are listed in the <code>Headers</code> type are included in requests that CloudFront sends to the origin. The additional headers are added by CloudFront.</p> </li> <li> <p> <code>allExcept</code> – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin, <i> <b>except</b> </i> for those listed in the <code>Headers</code> type, which are not included.</p> </li> </ul>
   * @public
   */
  HeaderBehavior: OriginRequestPolicyHeaderBehavior | undefined;

  /**
   * <p>Contains a list of HTTP header names.</p>
   * @public
   */
  Headers?: Headers | undefined;
}

/**
 * <p>An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin.</p>
 * @public
 */
export interface OriginRequestPolicyQueryStringsConfig {
  /**
   * <p>Determines whether any URL query strings in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:</p> <ul> <li> <p> <code>none</code> – No query strings in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any query strings that are listed in a <code>CachePolicy</code> <i>are</i> included in origin requests.</p> </li> <li> <p> <code>whitelist</code> – Only the query strings in viewer requests that are listed in the <code>QueryStringNames</code> type are included in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>all</code> – All query strings in viewer requests are included in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>allExcept</code> – All query strings in viewer requests are included in requests that CloudFront sends to the origin, <i> <b>except</b> </i> for those listed in the <code>QueryStringNames</code> type, which are not included.</p> </li> </ul>
   * @public
   */
  QueryStringBehavior: OriginRequestPolicyQueryStringBehavior | undefined;

  /**
   * <p>Contains the specific query strings in viewer requests that either <i> <b>are</b> </i> or <i> <b>are not</b> </i> included in requests that CloudFront sends to the origin. The behavior depends on whether the <code>QueryStringBehavior</code> field in the <code>OriginRequestPolicyQueryStringsConfig</code> type is set to <code>whitelist</code> (the listed query strings <i> <b>are</b> </i> included) or <code>allExcept</code> (the listed query strings <i> <b>are not</b> </i> included, but all other query strings are).</p>
   * @public
   */
  QueryStrings?: QueryStringNames | undefined;
}

/**
 * <p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>
 * @public
 */
export interface OriginRequestPolicyConfig {
  /**
   * <p>A comment to describe the origin request policy. The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>A unique name to identify the origin request policy.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The HTTP headers to include in origin requests. These can include headers from viewer requests and additional headers added by CloudFront.</p>
   * @public
   */
  HeadersConfig: OriginRequestPolicyHeadersConfig | undefined;

  /**
   * <p>The cookies from viewer requests to include in origin requests.</p>
   * @public
   */
  CookiesConfig: OriginRequestPolicyCookiesConfig | undefined;

  /**
   * <p>The URL query strings from viewer requests to include in origin requests.</p>
   * @public
   */
  QueryStringsConfig: OriginRequestPolicyQueryStringsConfig | undefined;
}

/**
 * @public
 */
export interface CreateOriginRequestPolicyRequest {
  /**
   * <p>An origin request policy configuration.</p>
   * @public
   */
  OriginRequestPolicyConfig: OriginRequestPolicyConfig | undefined;
}

/**
 * <p>An origin request policy.</p> <p>When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>
 * @public
 */
export interface OriginRequestPolicy {
  /**
   * <p>The unique identifier for the origin request policy.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The date and time when the origin request policy was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The origin request policy configuration.</p>
   * @public
   */
  OriginRequestPolicyConfig: OriginRequestPolicyConfig | undefined;
}

/**
 * @public
 */
export interface CreateOriginRequestPolicyResult {
  /**
   * <p>An origin request policy.</p>
   * @public
   */
  OriginRequestPolicy?: OriginRequestPolicy | undefined;

  /**
   * <p>The fully qualified URI of the origin request policy just created.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The current version of the origin request policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p> <p>CloudFront supports signed URLs and signed cookies with RSA 2048 or ECDSA 256 key signatures. Field-level encryption is only compatible with RSA 2048 key signatures.</p>
 * @public
 */
export interface PublicKeyConfig {
  /**
   * <p>A string included in the request to help make sure that the request can't be replayed.</p>
   * @public
   */
  CallerReference: string | undefined;

  /**
   * <p>A name to help identify the public key.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
   * @public
   */
  EncodedKey: string | undefined;

  /**
   * <p>A comment to describe the public key. The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment?: string | undefined;
}

/**
 * @public
 */
export interface CreatePublicKeyRequest {
  /**
   * <p>A CloudFront public key configuration.</p>
   * @public
   */
  PublicKeyConfig: PublicKeyConfig | undefined;
}

/**
 * <p>A public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p> <p>CloudFront supports signed URLs and signed cookies with RSA 2048 or ECDSA 256 key signatures. Field-level encryption is only compatible with RSA 2048 key signatures.</p>
 * @public
 */
export interface PublicKey {
  /**
   * <p>The identifier of the public key.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The date and time when the public key was uploaded.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
   * @public
   */
  PublicKeyConfig: PublicKeyConfig | undefined;
}

/**
 * @public
 */
export interface CreatePublicKeyResult {
  /**
   * <p>The public key.</p>
   * @public
   */
  PublicKey?: PublicKey | undefined;

  /**
   * <p>The URL of the public key.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The identifier for this version of the public key.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time log data.</p>
 * @public
 */
export interface KinesisStreamConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream.</p> <p>For more information the IAM role, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role">Real-time log configuration IAM role</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data.</p>
   * @public
   */
  StreamARN: string | undefined;
}

/**
 * <p>Contains information about the Amazon Kinesis data stream where you're sending real-time log data in a real-time log configuration.</p>
 * @public
 */
export interface EndPoint {
  /**
   * <p>The type of data stream where you are sending real-time log data. The only valid value is <code>Kinesis</code>.</p>
   * @public
   */
  StreamType: string | undefined;

  /**
   * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.</p>
   * @public
   */
  KinesisStreamConfig?: KinesisStreamConfig | undefined;
}

/**
 * @public
 */
export interface CreateRealtimeLogConfigRequest {
  /**
   * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time log data.</p>
   * @public
   */
  EndPoints: EndPoint[] | undefined;

  /**
   * <p>A list of fields to include in each real-time log record.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  Fields: string[] | undefined;

  /**
   * <p>A unique name to identify this real-time log configuration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The sampling rate for this real-time log configuration. You can specify a whole number between 1 and 100 (inclusive) to determine the percentage of viewer requests that are represented in the real-time log data.</p>
   * @public
   */
  SamplingRate: number | undefined;
}

/**
 * <p>A real-time log configuration.</p>
 * @public
 */
export interface RealtimeLogConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of this real-time log configuration.</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p>The unique name of this real-time log configuration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. The sampling rate is an integer between 1 and 100, inclusive.</p>
   * @public
   */
  SamplingRate: number | undefined;

  /**
   * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration.</p>
   * @public
   */
  EndPoints: EndPoint[] | undefined;

  /**
   * <p>A list of fields that are included in each real-time log record. In an API response, the fields are provided in the same order in which they are sent to the Amazon Kinesis data stream.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  Fields: string[] | undefined;
}

/**
 * @public
 */
export interface CreateRealtimeLogConfigResult {
  /**
   * <p>A real-time log configuration.</p>
   * @public
   */
  RealtimeLogConfig?: RealtimeLogConfig | undefined;
}

/**
 * <p>A list of HTTP header names that CloudFront includes as values for the <code>Access-Control-Allow-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p>
 * @public
 */
export interface ResponseHeadersPolicyAccessControlAllowHeaders {
  /**
   * <p>The number of HTTP header names in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The list of HTTP header names. You can specify <code>*</code> to allow all headers.</p>
   * @public
   */
  Items: string[] | undefined;
}

/**
 * <p>A list of HTTP methods that CloudFront includes as values for the <code>Access-Control-Allow-Methods</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods">Access-Control-Allow-Methods</a> in the MDN Web Docs.</p>
 * @public
 */
export interface ResponseHeadersPolicyAccessControlAllowMethods {
  /**
   * <p>The number of HTTP methods in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The list of HTTP methods. Valid values are:</p> <ul> <li> <p> <code>GET</code> </p> </li> <li> <p> <code>DELETE</code> </p> </li> <li> <p> <code>HEAD</code> </p> </li> <li> <p> <code>OPTIONS</code> </p> </li> <li> <p> <code>PATCH</code> </p> </li> <li> <p> <code>POST</code> </p> </li> <li> <p> <code>PUT</code> </p> </li> <li> <p> <code>ALL</code> </p> </li> </ul> <p> <code>ALL</code> is a special value that includes all of the listed HTTP methods.</p>
   * @public
   */
  Items: ResponseHeadersPolicyAccessControlAllowMethodsValues[] | undefined;
}

/**
 * <p>A list of origins (domain names) that CloudFront can use as the value for the <code>Access-Control-Allow-Origin</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">Access-Control-Allow-Origin</a> in the MDN Web Docs.</p>
 * @public
 */
export interface ResponseHeadersPolicyAccessControlAllowOrigins {
  /**
   * <p>The number of origins in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The list of origins (domain names). You can specify <code>*</code> to allow all origins.</p>
   * @public
   */
  Items: string[] | undefined;
}

/**
 * <p>A list of HTTP headers that CloudFront includes as values for the <code>Access-Control-Expose-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Expose-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers">Access-Control-Expose-Headers</a> in the MDN Web Docs.</p>
 * @public
 */
export interface ResponseHeadersPolicyAccessControlExposeHeaders {
  /**
   * <p>The number of HTTP headers in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The list of HTTP headers. You can specify <code>*</code> to expose all headers.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS). CloudFront adds these headers to HTTP responses that it sends for CORS requests that match a cache behavior associated with this response headers policy.</p> <p>For more information about CORS, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Cross-Origin Resource Sharing (CORS)</a> in the MDN Web Docs.</p>
 * @public
 */
export interface ResponseHeadersPolicyCorsConfig {
  /**
   * <p>A list of origins (domain names) that CloudFront can use as the value for the <code>Access-Control-Allow-Origin</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">Access-Control-Allow-Origin</a> in the MDN Web Docs.</p>
   * @public
   */
  AccessControlAllowOrigins: ResponseHeadersPolicyAccessControlAllowOrigins | undefined;

  /**
   * <p>A list of HTTP header names that CloudFront includes as values for the <code>Access-Control-Allow-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p>
   * @public
   */
  AccessControlAllowHeaders: ResponseHeadersPolicyAccessControlAllowHeaders | undefined;

  /**
   * <p>A list of HTTP methods that CloudFront includes as values for the <code>Access-Control-Allow-Methods</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods">Access-Control-Allow-Methods</a> in the MDN Web Docs.</p>
   * @public
   */
  AccessControlAllowMethods: ResponseHeadersPolicyAccessControlAllowMethods | undefined;

  /**
   * <p>A Boolean that CloudFront uses as the value for the <code>Access-Control-Allow-Credentials</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Credentials</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials">Access-Control-Allow-Credentials</a> in the MDN Web Docs.</p>
   * @public
   */
  AccessControlAllowCredentials: boolean | undefined;

  /**
   * <p>A list of HTTP headers that CloudFront includes as values for the <code>Access-Control-Expose-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Expose-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers">Access-Control-Expose-Headers</a> in the MDN Web Docs.</p>
   * @public
   */
  AccessControlExposeHeaders?: ResponseHeadersPolicyAccessControlExposeHeaders | undefined;

  /**
   * <p>A number that CloudFront uses as the value for the <code>Access-Control-Max-Age</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Max-Age</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age">Access-Control-Max-Age</a> in the MDN Web Docs.</p>
   * @public
   */
  AccessControlMaxAgeSec?: number | undefined;

  /**
   * <p>A Boolean that determines whether CloudFront overrides HTTP response headers received from the origin with the ones specified in this response headers policy.</p>
   * @public
   */
  OriginOverride: boolean | undefined;
}

/**
 * <p>An HTTP response header name and its value. CloudFront includes this header in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.</p>
 * @public
 */
export interface ResponseHeadersPolicyCustomHeader {
  /**
   * <p>The HTTP response header name.</p>
   * @public
   */
  Header: string | undefined;

  /**
   * <p>The value for the HTTP response header.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>A Boolean that determines whether CloudFront overrides a response header with the same name received from the origin with the header specified here.</p>
   * @public
   */
  Override: boolean | undefined;
}

/**
 * <p>A list of HTTP response header names and their values. CloudFront includes these headers in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.</p>
 * @public
 */
export interface ResponseHeadersPolicyCustomHeadersConfig {
  /**
   * <p>The number of HTTP response headers in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The list of HTTP response headers and their values.</p>
   * @public
   */
  Items?: ResponseHeadersPolicyCustomHeader[] | undefined;
}

/**
 * <p>The name of an HTTP header that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.</p>
 * @public
 */
export interface ResponseHeadersPolicyRemoveHeader {
  /**
   * <p>The HTTP header name.</p>
   * @public
   */
  Header: string | undefined;
}

/**
 * <p>A list of HTTP header names that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.</p>
 * @public
 */
export interface ResponseHeadersPolicyRemoveHeadersConfig {
  /**
   * <p>The number of HTTP header names in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The list of HTTP header names.</p>
   * @public
   */
  Items?: ResponseHeadersPolicyRemoveHeader[] | undefined;
}

/**
 * <p>The policy directives and their values that CloudFront includes as values for the <code>Content-Security-Policy</code> HTTP response header.</p> <p>For more information about the <code>Content-Security-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a> in the MDN Web Docs.</p>
 * @public
 */
export interface ResponseHeadersPolicyContentSecurityPolicy {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the <code>Content-Security-Policy</code> HTTP response header received from the origin with the one specified in this response headers policy.</p>
   * @public
   */
  Override: boolean | undefined;

  /**
   * <p>The policy directives and their values that CloudFront includes as values for the <code>Content-Security-Policy</code> HTTP response header.</p>
   * @public
   */
  ContentSecurityPolicy: string | undefined;
}

/**
 * <p>Determines whether CloudFront includes the <code>X-Content-Type-Options</code> HTTP response header with its value set to <code>nosniff</code>.</p> <p>For more information about the <code>X-Content-Type-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">X-Content-Type-Options</a> in the MDN Web Docs.</p>
 * @public
 */
export interface ResponseHeadersPolicyContentTypeOptions {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the <code>X-Content-Type-Options</code> HTTP response header received from the origin with the one specified in this response headers policy.</p>
   * @public
   */
  Override: boolean | undefined;
}

/**
 * <p>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-Frame-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>
 * @public
 */
export interface ResponseHeadersPolicyFrameOptions {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the <code>X-Frame-Options</code> HTTP response header received from the origin with the one specified in this response headers policy.</p>
   * @public
   */
  Override: boolean | undefined;

  /**
   * <p>The value of the <code>X-Frame-Options</code> HTTP response header. Valid values are <code>DENY</code> and <code>SAMEORIGIN</code>.</p> <p>For more information about these values, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>
   * @public
   */
  FrameOption: FrameOptionsList | undefined;
}

/**
 * <p>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Referrer-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>
 * @public
 */
export interface ResponseHeadersPolicyReferrerPolicy {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the <code>Referrer-Policy</code> HTTP response header received from the origin with the one specified in this response headers policy.</p>
   * @public
   */
  Override: boolean | undefined;

  /**
   * <p>The value of the <code>Referrer-Policy</code> HTTP response header. Valid values are:</p> <ul> <li> <p> <code>no-referrer</code> </p> </li> <li> <p> <code>no-referrer-when-downgrade</code> </p> </li> <li> <p> <code>origin</code> </p> </li> <li> <p> <code>origin-when-cross-origin</code> </p> </li> <li> <p> <code>same-origin</code> </p> </li> <li> <p> <code>strict-origin</code> </p> </li> <li> <p> <code>strict-origin-when-cross-origin</code> </p> </li> <li> <p> <code>unsafe-url</code> </p> </li> </ul> <p>For more information about these values, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>
   * @public
   */
  ReferrerPolicy: ReferrerPolicyList | undefined;
}

/**
 * <p>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Strict-Transport-Security</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> in the MDN Web Docs.</p>
 * @public
 */
export interface ResponseHeadersPolicyStrictTransportSecurity {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the <code>Strict-Transport-Security</code> HTTP response header received from the origin with the one specified in this response headers policy.</p>
   * @public
   */
  Override: boolean | undefined;

  /**
   * <p>A Boolean that determines whether CloudFront includes the <code>includeSubDomains</code> directive in the <code>Strict-Transport-Security</code> HTTP response header.</p>
   * @public
   */
  IncludeSubdomains?: boolean | undefined;

  /**
   * <p>A Boolean that determines whether CloudFront includes the <code>preload</code> directive in the <code>Strict-Transport-Security</code> HTTP response header.</p>
   * @public
   */
  Preload?: boolean | undefined;

  /**
   * <p>A number that CloudFront uses as the value for the <code>max-age</code> directive in the <code>Strict-Transport-Security</code> HTTP response header.</p>
   * @public
   */
  AccessControlMaxAgeSec: number | undefined;
}

/**
 * <p>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-XSS-Protection</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
 * @public
 */
export interface ResponseHeadersPolicyXSSProtection {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the <code>X-XSS-Protection</code> HTTP response header received from the origin with the one specified in this response headers policy.</p>
   * @public
   */
  Override: boolean | undefined;

  /**
   * <p>A Boolean that determines the value of the <code>X-XSS-Protection</code> HTTP response header. When this setting is <code>true</code>, the value of the <code>X-XSS-Protection</code> header is <code>1</code>. When this setting is <code>false</code>, the value of the <code>X-XSS-Protection</code> header is <code>0</code>.</p> <p>For more information about these settings, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
   * @public
   */
  Protection: boolean | undefined;

  /**
   * <p>A Boolean that determines whether CloudFront includes the <code>mode=block</code> directive in the <code>X-XSS-Protection</code> header.</p> <p>For more information about this directive, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
   * @public
   */
  ModeBlock?: boolean | undefined;

  /**
   * <p>A reporting URI, which CloudFront uses as the value of the <code>report</code> directive in the <code>X-XSS-Protection</code> header.</p> <p>You cannot specify a <code>ReportUri</code> when <code>ModeBlock</code> is <code>true</code>.</p> <p>For more information about using a reporting URL, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
   * @public
   */
  ReportUri?: string | undefined;
}

/**
 * <p>A configuration for a set of security-related HTTP response headers. CloudFront adds these headers to HTTP responses that it sends for requests that match a cache behavior associated with this response headers policy.</p>
 * @public
 */
export interface ResponseHeadersPolicySecurityHeadersConfig {
  /**
   * <p>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-XSS-Protection</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
   * @public
   */
  XSSProtection?: ResponseHeadersPolicyXSSProtection | undefined;

  /**
   * <p>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-Frame-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>
   * @public
   */
  FrameOptions?: ResponseHeadersPolicyFrameOptions | undefined;

  /**
   * <p>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Referrer-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>
   * @public
   */
  ReferrerPolicy?: ResponseHeadersPolicyReferrerPolicy | undefined;

  /**
   * <p>The policy directives and their values that CloudFront includes as values for the <code>Content-Security-Policy</code> HTTP response header.</p> <p>For more information about the <code>Content-Security-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a> in the MDN Web Docs.</p>
   * @public
   */
  ContentSecurityPolicy?: ResponseHeadersPolicyContentSecurityPolicy | undefined;

  /**
   * <p>Determines whether CloudFront includes the <code>X-Content-Type-Options</code> HTTP response header with its value set to <code>nosniff</code>.</p> <p>For more information about the <code>X-Content-Type-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">X-Content-Type-Options</a> in the MDN Web Docs.</p>
   * @public
   */
  ContentTypeOptions?: ResponseHeadersPolicyContentTypeOptions | undefined;

  /**
   * <p>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Strict-Transport-Security</code> HTTP response header, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#understanding-response-headers-policies-security">Security headers</a> in the <i>Amazon CloudFront Developer Guide</i> and <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> in the MDN Web Docs.</p>
   * @public
   */
  StrictTransportSecurity?: ResponseHeadersPolicyStrictTransportSecurity | undefined;
}

/**
 * <p>A configuration for enabling the <code>Server-Timing</code> header in HTTP responses sent from CloudFront. CloudFront adds this header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.</p> <p>You can use the <code>Server-Timing</code> header to view metrics that can help you gain insights about the behavior and performance of CloudFront. For example, you can see which cache layer served a cache hit, or the first byte latency from the origin when there was a cache miss. You can use the metrics in the <code>Server-Timing</code> header to troubleshoot issues or test the efficiency of your CloudFront configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#server-timing-header">Server-Timing header</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface ResponseHeadersPolicyServerTimingHeadersConfig {
  /**
   * <p>A Boolean that determines whether CloudFront adds the <code>Server-Timing</code> header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>A number 0–100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the <code>Server-Timing</code> header to. When you set the sampling rate to 100, CloudFront adds the <code>Server-Timing</code> header to the HTTP response for every request that matches the cache behavior that this response headers policy is attached to. When you set it to 50, CloudFront adds the header to 50% of the responses for requests that match the cache behavior. You can set the sampling rate to any number 0–100 with up to four decimal places.</p>
   * @public
   */
  SamplingRate?: number | undefined;
}

/**
 * <p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>
 * @public
 */
export interface ResponseHeadersPolicyConfig {
  /**
   * <p>A comment to describe the response headers policy.</p> <p>The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>A name to identify the response headers policy.</p> <p>The name must be unique for response headers policies in this Amazon Web Services account.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).</p>
   * @public
   */
  CorsConfig?: ResponseHeadersPolicyCorsConfig | undefined;

  /**
   * <p>A configuration for a set of security-related HTTP response headers.</p>
   * @public
   */
  SecurityHeadersConfig?: ResponseHeadersPolicySecurityHeadersConfig | undefined;

  /**
   * <p>A configuration for enabling the <code>Server-Timing</code> header in HTTP responses sent from CloudFront.</p>
   * @public
   */
  ServerTimingHeadersConfig?: ResponseHeadersPolicyServerTimingHeadersConfig | undefined;

  /**
   * <p>A configuration for a set of custom HTTP response headers.</p>
   * @public
   */
  CustomHeadersConfig?: ResponseHeadersPolicyCustomHeadersConfig | undefined;

  /**
   * <p>A configuration for a set of HTTP headers to remove from the HTTP response.</p>
   * @public
   */
  RemoveHeadersConfig?: ResponseHeadersPolicyRemoveHeadersConfig | undefined;
}

/**
 * @public
 */
export interface CreateResponseHeadersPolicyRequest {
  /**
   * <p>Contains metadata about the response headers policy, and a set of configurations that specify the HTTP headers.</p>
   * @public
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig | undefined;
}

/**
 * <p>A response headers policy.</p> <p>A response headers policy contains information about a set of HTTP response headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface ResponseHeadersPolicy {
  /**
   * <p>The identifier for the response headers policy.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The date and time when the response headers policy was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A response headers policy configuration.</p>
   * @public
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig | undefined;
}

/**
 * @public
 */
export interface CreateResponseHeadersPolicyResult {
  /**
   * <p>Contains a response headers policy.</p>
   * @public
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy | undefined;

  /**
   * <p>The URL of the response headers policy.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The version identifier for the current version of the response headers policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>A complex type that controls whether access logs are written for this streaming distribution.</p>
 * @public
 */
export interface StreamingLoggingConfig {
  /**
   * <p>Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't want to enable logging when you create a streaming distribution or if you want to disable logging for an existing streaming distribution, specify <code>false</code> for <code>Enabled</code>, and specify <code>empty Bucket</code> and <code>Prefix</code> elements. If you specify <code>false</code> for <code>Enabled</code> but you specify values for <code>Bucket</code> and <code>Prefix</code>, the values are automatically deleted.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>The Amazon S3 bucket to store the access logs in, for example, <code>amzn-s3-demo-bucket.s3.amazonaws.com</code>.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>An optional string that you want CloudFront to prefix to the access log filenames for this streaming distribution, for example, <code>myprefix/</code>. If you want to enable logging, but you don't want to specify a prefix, you still must include an empty <code>Prefix</code> element in the <code>Logging</code> element.</p>
   * @public
   */
  Prefix: string | undefined;
}

/**
 * <p>A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.</p>
 * @public
 */
export interface S3Origin {
  /**
   * <p>The DNS name of the Amazon S3 origin.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The CloudFront origin access identity to associate with the distribution. Use an origin access identity to configure the distribution so that end users can only access objects in an Amazon S3 bucket through CloudFront.</p> <p>If you want end users to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty <code>OriginAccessIdentity</code> element.</p> <p>To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty <code>OriginAccessIdentity</code> element.</p> <p>To replace the origin access identity, update the distribution configuration and specify the new origin access identity.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html">Using an Origin Access Identity to Restrict Access to Your Amazon S3 Content</a> in the <i> Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  OriginAccessIdentity: string | undefined;
}

/**
 * <p>The RTMP distribution's configuration information.</p>
 * @public
 */
export interface StreamingDistributionConfig {
  /**
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>StreamingDistributionConfig</code> object), CloudFront creates a new distribution.</p> <p>If <code>CallerReference</code> is a value that you already sent in a previous request to create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>
   * @public
   */
  CallerReference: string | undefined;

  /**
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.</p>
   * @public
   */
  S3Origin: S3Origin | undefined;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution.</p>
   * @public
   */
  Aliases?: Aliases | undefined;

  /**
   * <p>Any comments you want to include about the streaming distribution.</p>
   * @public
   */
  Comment: string | undefined;

  /**
   * <p>A complex type that controls whether access logs are written for the streaming distribution.</p>
   * @public
   */
  Logging?: StreamingLoggingConfig | undefined;

  /**
   * <p>A complex type that specifies any Amazon Web Services accounts that you want to permit to create signed URLs for private content. If you want the distribution to use signed URLs, include this element; if you want the distribution to use public URLs, remove this element. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  TrustedSigners: TrustedSigners | undefined;

  /**
   * <p>A complex type that contains information about price class for this streaming distribution.</p>
   * @public
   */
  PriceClass?: PriceClass | undefined;

  /**
   * <p>Whether the streaming distribution is enabled to accept user requests for content.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The request to create a new streaming distribution.</p>
 * @public
 */
export interface CreateStreamingDistributionRequest {
  /**
   * <p>The streaming distribution's configuration information.</p>
   * @public
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;
}

/**
 * <p>A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery.</p>
 * @public
 */
export interface StreamingDistribution {
  /**
   * <p>The identifier for the RTMP distribution. For example: <code>EGTXBD79EXAMPLE</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) for the distribution. For example: <code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where <code>123456789012</code> is your Amazon Web Services account ID.</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p>The current status of the RTMP distribution. When the status is <code>Deployed</code>, the distribution's information is propagated to all CloudFront edge locations.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The date and time that the distribution was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The domain name that corresponds to the streaming distribution, for example, <code>s5c39gqb8ow64r.cloudfront.net</code>.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A complex type that lists the Amazon Web Services accounts, if any, that you included in the <code>TrustedSigners</code> complex type for this distribution. These are the accounts that you want to allow to create signed URLs for private content.</p> <p>The <code>Signer</code> complex type lists the Amazon Web Services account number of the trusted signer or <code>self</code> if the signer is the Amazon Web Services account that created the distribution. The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are associated with the trusted signer's Amazon Web Services account. If no <code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can't create signed URLs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  ActiveTrustedSigners: ActiveTrustedSigners | undefined;

  /**
   * <p>The current configuration information for the RTMP distribution.</p>
   * @public
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface CreateStreamingDistributionResult {
  /**
   * <p>The streaming distribution's information.</p>
   * @public
   */
  StreamingDistribution?: StreamingDistribution | undefined;

  /**
   * <p>The fully qualified URI of the new streaming distribution resource just created.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The current version of the streaming distribution created.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.</p>
 * @public
 */
export interface StreamingDistributionConfigWithTags {
  /**
   * <p>A streaming distribution Configuration.</p>
   * @public
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   * @public
   */
  Tags: Tags | undefined;
}

/**
 * <p>The request to create a new streaming distribution with tags.</p>
 * @public
 */
export interface CreateStreamingDistributionWithTagsRequest {
  /**
   * <p>The streaming distribution's configuration information.</p>
   * @public
   */
  StreamingDistributionConfigWithTags: StreamingDistributionConfigWithTags | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface CreateStreamingDistributionWithTagsResult {
  /**
   * <p>The streaming distribution's information.</p>
   * @public
   */
  StreamingDistribution?: StreamingDistribution | undefined;

  /**
   * <p>The fully qualified URI of the new streaming distribution resource just created.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The current version of the distribution created.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>An Amazon CloudFront VPC origin endpoint configuration.</p>
 * @public
 */
export interface VpcOriginEndpointConfig {
  /**
   * <p>The name of the CloudFront VPC origin endpoint configuration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ARN of the CloudFront VPC origin endpoint configuration.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The HTTP port for the CloudFront VPC origin endpoint configuration. The default value is <code>80</code>.</p>
   * @public
   */
  HTTPPort: number | undefined;

  /**
   * <p>The HTTPS port of the CloudFront VPC origin endpoint configuration. The default value is <code>443</code>.</p>
   * @public
   */
  HTTPSPort: number | undefined;

  /**
   * <p>The origin protocol policy for the CloudFront VPC origin endpoint configuration.</p>
   * @public
   */
  OriginProtocolPolicy: OriginProtocolPolicy | undefined;

  /**
   * <p>A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.</p>
   * @public
   */
  OriginSslProtocols?: OriginSslProtocols | undefined;
}

/**
 * @public
 */
export interface CreateVpcOriginRequest {
  /**
   * <p>The VPC origin endpoint configuration.</p>
   * @public
   */
  VpcOriginEndpointConfig: VpcOriginEndpointConfig | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   * @public
   */
  Tags?: Tags | undefined;
}

/**
 * <p>An Amazon CloudFront VPC origin.</p>
 * @public
 */
export interface VpcOrigin {
  /**
   * <p>The VPC origin ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The VPC origin ARN.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The account ID of the Amazon Web Services account that owns the VPC origin.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The VPC origin status.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The VPC origin created time.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The VPC origin last modified time.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The VPC origin endpoint configuration.</p>
   * @public
   */
  VpcOriginEndpointConfig: VpcOriginEndpointConfig | undefined;
}

/**
 * @public
 */
export interface CreateVpcOriginResult {
  /**
   * <p>The VPC origin.</p>
   * @public
   */
  VpcOrigin?: VpcOrigin | undefined;

  /**
   * <p>The VPC origin location.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The VPC origin ETag.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnycastIpListRequest {
  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the Anycast static IP list that you are deleting.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteCachePolicyRequest {
  /**
   * <p>The unique identifier for the cache policy that you are deleting. To get the identifier, you can use <code>ListCachePolicies</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version of the cache policy that you are deleting. The version is the cache policy's <code>ETag</code> value, which you can get using <code>ListCachePolicies</code>, <code>GetCachePolicy</code>, or <code>GetCachePolicyConfig</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * <p>Deletes a origin access identity.</p>
 * @public
 */
export interface DeleteCloudFrontOriginAccessIdentityRequest {
  /**
   * <p>The origin access identity's ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header you received from a previous <code>GET</code> or <code>PUT</code> request. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionGroupRequest {
  /**
   * <p>The ID of the connection group to delete.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the connection group to delete.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteContinuousDeploymentPolicyRequest {
  /**
   * <p>The identifier of the continuous deployment policy that you are deleting.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the continuous deployment policy that you are deleting.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * <p>This action deletes a web distribution. To delete a web distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete a web distribution using the CloudFront API:</b> </p> <ol> <li> <p>Disable the web distribution</p> </li> <li> <p>Submit a <code>GET Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution.</p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Distribution</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 6.</p> </li> <li> <p>Review the response to your <code>DELETE Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface DeleteDistributionRequest {
  /**
   * <p>The distribution ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when you disabled the distribution. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDistributionTenantRequest {
  /**
   * <p>The ID of the distribution tenant to delete.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the distribution tenant. This value is returned in the response of the <code>GetDistributionTenant</code> API operation.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteFieldLevelEncryptionConfigRequest {
  /**
   * <p>The ID of the configuration you want to delete from CloudFront.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the configuration identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFieldLevelEncryptionProfileRequest {
  /**
   * <p>Request the ID of the profile you want to delete from CloudFront.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the profile to delete. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionRequest {
  /**
   * <p>The name of the function that you are deleting.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the function that you are deleting, which you can get using <code>DescribeFunction</code>.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteKeyGroupRequest {
  /**
   * <p>The identifier of the key group that you are deleting. To get the identifier, use <code>ListKeyGroups</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version of the key group that you are deleting. The version is the key group's <code>ETag</code> value. To get the <code>ETag</code>, use <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteKeyValueStoreRequest {
  /**
   * <p>The name of the key value store.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The key value store to delete, if a match occurs.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitoringSubscriptionRequest {
  /**
   * <p>The ID of the distribution that you are disabling metrics for.</p>
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
   * <p>The unique identifier of the origin access control that you are deleting.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the origin access control that you are deleting.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteOriginRequestPolicyRequest {
  /**
   * <p>The unique identifier for the origin request policy that you are deleting. To get the identifier, you can use <code>ListOriginRequestPolicies</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version of the origin request policy that you are deleting. The version is the origin request policy's <code>ETag</code> value, which you can get using <code>ListOriginRequestPolicies</code>, <code>GetOriginRequestPolicy</code>, or <code>GetOriginRequestPolicyConfig</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeletePublicKeyRequest {
  /**
   * <p>The ID of the public key you want to remove from CloudFront.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the public key identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRealtimeLogConfigRequest {
  /**
   * <p>The name of the real-time log configuration to delete.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration to delete.</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudFront resource for which the resource policy should be deleted.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResponseHeadersPolicyRequest {
  /**
   * <p>The identifier for the response headers policy that you are deleting.</p> <p>To get the identifier, you can use <code>ListResponseHeadersPolicies</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version of the response headers policy that you are deleting.</p> <p>The version is the response headers policy's <code>ETag</code> value, which you can get using <code>ListResponseHeadersPolicies</code>, <code>GetResponseHeadersPolicy</code>, or <code>GetResponseHeadersPolicyConfig</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * <p>The request to delete a streaming distribution.</p>
 * @public
 */
export interface DeleteStreamingDistributionRequest {
  /**
   * <p>The distribution ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when you disabled the streaming distribution. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcOriginRequest {
  /**
   * <p>The VPC origin ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version identifier of the VPC origin to delete. This is the <code>ETag</code> value returned in the response to <a>GetVpcOrigin</a>.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcOriginResult {
  /**
   * <p>The VPC origin.</p>
   * @public
   */
  VpcOrigin?: VpcOrigin | undefined;

  /**
   * <p>The VPC origin ETag.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFunctionRequest {
  /**
   * <p>The name of the function that you are getting information about.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   * @public
   */
  Stage?: FunctionStage | undefined;
}

/**
 * @public
 */
export interface DescribeFunctionResult {
  /**
   * <p>Contains configuration information and metadata about a CloudFront function.</p>
   * @public
   */
  FunctionSummary?: FunctionSummary | undefined;

  /**
   * <p>The version identifier for the current version of the CloudFront function.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyValueStoreRequest {
  /**
   * <p>The name of the key value store.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyValueStoreResult {
  /**
   * <p>The resulting key value store.</p>
   * @public
   */
  KeyValueStore?: KeyValueStore | undefined;

  /**
   * <p>The <code>ETag</code> of the resulting key value store.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDistributionTenantWebACLRequest {
  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The current version of the distribution tenant that you're disassociating from the WAF web ACL. This is the <code>ETag</code> value returned in the response to the <code>GetDistributionTenant</code> API operation.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDistributionTenantWebACLResult {
  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The current version of the distribution tenant.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDistributionWebACLRequest {
  /**
   * <p>The ID of the distribution.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the distribution that you're disassociating from the WAF web ACL.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDistributionWebACLResult {
  /**
   * <p>The ID of the distribution.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The current version of the distribution.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetAnycastIpListRequest {
  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetAnycastIpListResult {
  /**
   * <p>The Anycast static IP list details.</p>
   * @public
   */
  AnycastIpList?: AnycastIpList | undefined;

  /**
   * <p>The version identifier for the current version of the Anycast static IP list.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetCachePolicyRequest {
  /**
   * <p>The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetCachePolicyResult {
  /**
   * <p>The cache policy.</p>
   * @public
   */
  CachePolicy?: CachePolicy | undefined;

  /**
   * <p>The current version of the cache policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetCachePolicyConfigRequest {
  /**
   * <p>The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetCachePolicyConfigResult {
  /**
   * <p>The cache policy configuration.</p>
   * @public
   */
  CachePolicyConfig?: CachePolicyConfig | undefined;

  /**
   * <p>The current version of the cache policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The request to get an origin access identity's information.</p>
 * @public
 */
export interface GetCloudFrontOriginAccessIdentityRequest {
  /**
   * <p>The identity's ID.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface GetCloudFrontOriginAccessIdentityResult {
  /**
   * <p>The origin access identity's information.</p>
   * @public
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity | undefined;

  /**
   * <p>The current version of the origin access identity's information. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The origin access identity's configuration information. For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CloudFrontOriginAccessIdentityConfig.html">CloudFrontOriginAccessIdentityConfig</a>.</p>
 * @public
 */
export interface GetCloudFrontOriginAccessIdentityConfigRequest {
  /**
   * <p>The identity's ID.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface GetCloudFrontOriginAccessIdentityConfigResult {
  /**
   * <p>The origin access identity's configuration information.</p>
   * @public
   */
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig | undefined;

  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionGroupRequest {
  /**
   * <p>The ID, name, or Amazon Resource Name (ARN) of the connection group.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionGroupResult {
  /**
   * <p>The connection group that you retrieved.</p>
   * @public
   */
  ConnectionGroup?: ConnectionGroup | undefined;

  /**
   * <p>The current version of the connection group.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionGroupByRoutingEndpointRequest {
  /**
   * <p>The routing endpoint for the target connection group, such as d111111abcdef8.cloudfront.net.</p>
   * @public
   */
  RoutingEndpoint: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionGroupByRoutingEndpointResult {
  /**
   * <p>The connection group for your distribution tenants. When you first create a distribution tenant and you don't specify a connection group, CloudFront will automatically create a default connection group for you. When you create a new distribution tenant and don't specify a connection group, the default one will be associated with your distribution tenant.</p>
   * @public
   */
  ConnectionGroup?: ConnectionGroup | undefined;

  /**
   * <p>The current version of the connection group.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetContinuousDeploymentPolicyRequest {
  /**
   * <p>The identifier of the continuous deployment policy that you are getting.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetContinuousDeploymentPolicyResult {
  /**
   * <p>A continuous deployment policy.</p>
   * @public
   */
  ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy | undefined;

  /**
   * <p>The version identifier for the current version of the continuous deployment policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetContinuousDeploymentPolicyConfigRequest {
  /**
   * <p>The identifier of the continuous deployment policy whose configuration you are getting.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetContinuousDeploymentPolicyConfigResult {
  /**
   * <p>Contains the configuration for a continuous deployment policy.</p>
   * @public
   */
  ContinuousDeploymentPolicyConfig?: ContinuousDeploymentPolicyConfig | undefined;

  /**
   * <p>The version identifier for the current version of the continuous deployment policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The request to get a distribution's information.</p>
 * @public
 */
export interface GetDistributionRequest {
  /**
   * <p>The distribution's ID. If the ID is empty, an empty distribution configuration is returned.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface GetDistributionResult {
  /**
   * <p>The distribution's information.</p>
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * <p>The current version of the distribution's information. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The request to get a distribution configuration.</p>
 * @public
 */
export interface GetDistributionConfigRequest {
  /**
   * <p>The distribution's ID. If the ID is empty, an empty distribution configuration is returned.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface GetDistributionConfigResult {
  /**
   * <p>The distribution's configuration information.</p>
   * @public
   */
  DistributionConfig?: DistributionConfig | undefined;

  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionTenantRequest {
  /**
   * <p>The identifier of the distribution tenant. You can specify the ARN, ID, or name of the distribution tenant.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionTenantResult {
  /**
   * <p>The distribution tenant that you retrieved.</p>
   * @public
   */
  DistributionTenant?: DistributionTenant | undefined;

  /**
   * <p>The current version of the distribution tenant.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionTenantByDomainRequest {
  /**
   * <p>A domain name associated with the target distribution tenant.</p>
   * @public
   */
  Domain: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionTenantByDomainResult {
  /**
   * <p>The distribution tenant.</p>
   * @public
   */
  DistributionTenant?: DistributionTenant | undefined;

  /**
   * <p>The current version of the distribution tenant.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionRequest {
  /**
   * <p>Request the ID for the field-level encryption configuration information.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionResult {
  /**
   * <p>Return the field-level encryption configuration information.</p>
   * @public
   */
  FieldLevelEncryption?: FieldLevelEncryption | undefined;

  /**
   * <p>The current version of the field level encryption configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionConfigRequest {
  /**
   * <p>Request the ID for the field-level encryption configuration information.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionConfigResult {
  /**
   * <p>Return the field-level encryption configuration information.</p>
   * @public
   */
  FieldLevelEncryptionConfig?: FieldLevelEncryptionConfig | undefined;

  /**
   * <p>The current version of the field level encryption configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionProfileRequest {
  /**
   * <p>Get the ID for the field-level encryption profile information.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionProfileResult {
  /**
   * <p>Return the field-level encryption profile information.</p>
   * @public
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile | undefined;

  /**
   * <p>The current version of the field level encryption profile. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionProfileConfigRequest {
  /**
   * <p>Get the ID for the field-level encryption profile configuration information.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionProfileConfigResult {
  /**
   * <p>Return the field-level encryption profile configuration information.</p>
   * @public
   */
  FieldLevelEncryptionProfileConfig?: FieldLevelEncryptionProfileConfig | undefined;

  /**
   * <p>The current version of the field-level encryption profile configuration result. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionRequest {
  /**
   * <p>The name of the function whose code you are getting.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   * @public
   */
  Stage?: FunctionStage | undefined;
}

/**
 * @public
 */
export interface GetFunctionResult {
  /**
   * <p>The function code of a CloudFront function.</p>
   * @public
   */
  FunctionCode?: Uint8Array | undefined;

  /**
   * <p>The version identifier for the current version of the CloudFront function.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The content type (media type) of the response.</p>
   * @public
   */
  ContentType?: string | undefined;
}

/**
 * <p>The request to get an invalidation's information.</p>
 * @public
 */
export interface GetInvalidationRequest {
  /**
   * <p>The distribution's ID.</p>
   * @public
   */
  DistributionId: string | undefined;

  /**
   * <p>The identifier for the invalidation request, for example, <code>IDFDVBD632BHDS5</code>.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface GetInvalidationResult {
  /**
   * <p>The invalidation's information. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/InvalidationDatatype.html">Invalidation Complex Type</a>.</p>
   * @public
   */
  Invalidation?: Invalidation | undefined;
}

/**
 * @public
 */
export interface GetInvalidationForDistributionTenantRequest {
  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  DistributionTenantId: string | undefined;

  /**
   * <p>The ID of the invalidation to retrieve.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetInvalidationForDistributionTenantResult {
  /**
   * <p>An invalidation.</p>
   * @public
   */
  Invalidation?: Invalidation | undefined;
}

/**
 * @public
 */
export interface GetKeyGroupRequest {
  /**
   * <p>The identifier of the key group that you are getting. To get the identifier, use <code>ListKeyGroups</code>.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetKeyGroupResult {
  /**
   * <p>The key group.</p>
   * @public
   */
  KeyGroup?: KeyGroup | undefined;

  /**
   * <p>The identifier for this version of the key group.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetKeyGroupConfigRequest {
  /**
   * <p>The identifier of the key group whose configuration you are getting. To get the identifier, use <code>ListKeyGroups</code>.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetKeyGroupConfigResult {
  /**
   * <p>The key group configuration.</p>
   * @public
   */
  KeyGroupConfig?: KeyGroupConfig | undefined;

  /**
   * <p>The identifier for this version of the key group.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedCertificateDetailsRequest {
  /**
   * <p>The identifier of the distribution tenant. You can specify the ARN, ID, or name of the distribution tenant.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * <p>Contains details about the validation token.</p>
 * @public
 */
export interface ValidationTokenDetail {
  /**
   * <p>The domain name.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The domain to redirect to.</p>
   * @public
   */
  RedirectTo?: string | undefined;

  /**
   * <p>The domain to redirect from.</p>
   * @public
   */
  RedirectFrom?: string | undefined;
}

/**
 * <p>Contains details about the CloudFront managed ACM certificate.</p>
 * @public
 */
export interface ManagedCertificateDetails {
  /**
   * <p>The ARN of the CloudFront managed ACM certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The status of the CloudFront managed ACM certificate.</p> <note> <p>Your distribution tenant will be updated with the latest certificate status. When calling the <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistributionTenant.html">UpdateDistributionTenant</a> operation, use the latest value for the <code>ETag</code>.</p> </note>
   * @public
   */
  CertificateStatus?: ManagedCertificateStatus | undefined;

  /**
   * <p>Contains details about the validation token host of the specified CloudFront managed ACM certificate.</p> <ul> <li> <p>For <code>cloudfront</code>, CloudFront will automatically serve the validation token. Choose this mode if you can point the domain's DNS to CloudFront immediately.</p> </li> <li> <p>For <code>self-hosted</code>, you serve the validation token from your existing infrastructure. Choose this mode when you need to maintain current traffic flow while your certificate is being issued. You can place the validation token at the well-known path on your existing web server, wait for ACM to validate and issue the certificate, and then update your DNS to point to CloudFront.</p> </li> </ul> <note> <p>This setting only affects the initial certificate request. Once the DNS points to CloudFront, all future certificate renewals are automatically handled through CloudFront.</p> </note>
   * @public
   */
  ValidationTokenHost?: ValidationTokenHost | undefined;

  /**
   * <p>Contains details about the validation token of the specified CloudFront managed ACM certificate.</p>
   * @public
   */
  ValidationTokenDetails?: ValidationTokenDetail[] | undefined;
}

/**
 * @public
 */
export interface GetManagedCertificateDetailsResult {
  /**
   * <p>Contains details about the CloudFront managed ACM certificate.</p>
   * @public
   */
  ManagedCertificateDetails?: ManagedCertificateDetails | undefined;
}

/**
 * @public
 */
export interface GetMonitoringSubscriptionRequest {
  /**
   * <p>The ID of the distribution that you are getting metrics information for.</p>
   * @public
   */
  DistributionId: string | undefined;
}

/**
 * @public
 */
export interface GetMonitoringSubscriptionResult {
  /**
   * <p>A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.</p>
   * @public
   */
  MonitoringSubscription?: MonitoringSubscription | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlRequest {
  /**
   * <p>The unique identifier of the origin access control.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlResult {
  /**
   * <p>Contains an origin access control, including its unique identifier.</p>
   * @public
   */
  OriginAccessControl?: OriginAccessControl | undefined;

  /**
   * <p>The version identifier for the current version of the origin access control.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlConfigRequest {
  /**
   * <p>The unique identifier of the origin access control.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlConfigResult {
  /**
   * <p>Contains an origin access control configuration.</p>
   * @public
   */
  OriginAccessControlConfig?: OriginAccessControlConfig | undefined;

  /**
   * <p>The version identifier for the current version of the origin access control.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyRequest {
  /**
   * <p>The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyResult {
  /**
   * <p>The origin request policy.</p>
   * @public
   */
  OriginRequestPolicy?: OriginRequestPolicy | undefined;

  /**
   * <p>The current version of the origin request policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyConfigRequest {
  /**
   * <p>The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyConfigResult {
  /**
   * <p>The origin request policy configuration.</p>
   * @public
   */
  OriginRequestPolicyConfig?: OriginRequestPolicyConfig | undefined;

  /**
   * <p>The current version of the origin request policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyRequest {
  /**
   * <p>The identifier of the public key you are getting.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyResult {
  /**
   * <p>The public key.</p>
   * @public
   */
  PublicKey?: PublicKey | undefined;

  /**
   * <p>The identifier for this version of the public key.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyConfigRequest {
  /**
   * <p>The identifier of the public key whose configuration you are getting.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyConfigResult {
  /**
   * <p>A public key configuration.</p>
   * @public
   */
  PublicKeyConfig?: PublicKeyConfig | undefined;

  /**
   * <p>The identifier for this version of the public key configuration.</p>
   * @public
   */
  ETag?: string | undefined;
}
