// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { CloudFrontServiceException as __BaseException } from "./CloudFrontServiceException";

export enum ResponseHeadersPolicyAccessControlAllowMethodsValues {
  ALL = "ALL",
  DELETE = "DELETE",
  GET = "GET",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT",
}

/**
 * <p>Access denied.</p>
 */
export class AccessDenied extends __BaseException {
  readonly name: "AccessDenied" = "AccessDenied";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDenied, __BaseException>) {
    super({
      name: "AccessDenied",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDenied.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A list of CloudFront key pair identifiers.</p>
 */
export interface KeyPairIds {
  /**
   * <p>The number of key pair identifiers in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of CloudFront key pair identifiers.</p>
   */
  Items?: string[];
}

/**
 * <p>A list of identifiers for the public keys that CloudFront can use to verify the signatures
 * 			of signed URLs and signed cookies.</p>
 */
export interface KGKeyPairIds {
  /**
   * <p>The identifier of the key group that contains the public keys.</p>
   */
  KeyGroupId?: string;

  /**
   * <p>A list of CloudFront key pair identifiers.</p>
   */
  KeyPairIds?: KeyPairIds;
}

/**
 * <p>A list of key groups, and the public keys in each key group, that CloudFront can use to
 * 			verify the signatures of signed URLs and signed cookies.</p>
 */
export interface ActiveTrustedKeyGroups {
  /**
   * <p>This field is <code>true</code> if any of the key groups have public keys that CloudFront
   * 			can use to verify the signatures of signed URLs and signed cookies. If not, this field
   * 			is <code>false</code>.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The number of key groups in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of key groups, including the identifiers of the public keys in each key group
   * 			that CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
   */
  Items?: KGKeyPairIds[];
}

/**
 * <p>A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can
 * 			use to verify the signatures of signed URLs and signed cookies.</p>
 */
export interface Signer {
  /**
   * <p>An Amazon Web Services account number that contains active CloudFront key pairs that CloudFront can use to
   * 			verify the signatures of signed URLs and signed cookies. If the Amazon Web Services account that owns
   * 			the key pairs is the same account that owns the CloudFront distribution, the value of this
   * 			field is <code>self</code>.</p>
   */
  AwsAccountNumber?: string;

  /**
   * <p>A list of CloudFront key pair identifiers.</p>
   */
  KeyPairIds?: KeyPairIds;
}

/**
 * <p>A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can
 * 			use to verify the signatures of signed URLs and signed cookies.</p>
 */
export interface ActiveTrustedSigners {
  /**
   * <p>This field is <code>true</code> if any of the Amazon Web Services accounts in the list have active
   * 			CloudFront key pairs that CloudFront can use to verify the signatures of signed URLs and signed
   * 			cookies. If not, this field is <code>false</code>.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The number of Amazon Web Services accounts in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of Amazon Web Services accounts and the identifiers of active CloudFront key pairs in each account
   * 			that CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
   */
  Items?: Signer[];
}

/**
 * <p>A complex type that contains information about CNAMEs (alternate domain names), if
 * 			any, for this distribution.</p>
 */
export interface Aliases {
  /**
   * <p>The number of CNAME aliases, if any, that you want to associate with this
   * 			distribution.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains the CNAME aliases, if any, that you want to associate
   * 			with this distribution.</p>
   */
  Items?: string[];
}

export enum ICPRecordalStatus {
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  SUSPENDED = "SUSPENDED",
}

/**
 * <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP)
 * 			recordal if they want to serve content publicly on an alternate domain name, also known
 * 			as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal
 * 			status for CNAMEs associated with distributions. The status is returned in the CloudFront
 * 			response; you can't configure it yourself.</p>
 *          <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services
 * 				services in China</i>.</p>
 */
export interface AliasICPRecordal {
  /**
   * <p>A domain name associated with a distribution.</p>
   */
  CNAME?: string;

  /**
   * <p>The Internet Content Provider (ICP) recordal status for a CNAME. The ICPRecordalStatus
   * 			is set to APPROVED for all CNAMEs (aliases) in regions outside of China.</p>
   *          <p>The status values returned are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>APPROVED</b> indicates that the associated CNAME
   * 					has a valid ICP recordal number. Multiple CNAMEs can be associated with a
   * 					distribution, and CNAMEs can correspond to different ICP recordals. To be marked
   * 					as APPROVED, that is, valid to use with China region, a CNAME must have one ICP
   * 					recordal number associated with it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SUSPENDED</b> indicates that the associated CNAME
   * 					does not have a valid ICP recordal number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PENDING</b> indicates that CloudFront can't determine
   * 					the ICP recordal status of the CNAME associated with the distribution because
   * 					there was an error in trying to determine the status. You can try again to see
   * 					if the error is resolved in which case CloudFront returns an APPROVED or SUSPENDED
   * 					status.</p>
   *             </li>
   *          </ul>
   */
  ICPRecordalStatus?: ICPRecordalStatus | string;
}

export enum Method {
  DELETE = "DELETE",
  GET = "GET",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT",
}

/**
 * <p>A complex type that controls whether CloudFront caches the response to requests using the
 * 			specified HTTP methods. There are two choices:</p>
 *          <ul>
 *             <li>
 *                <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code>
 * 					requests.</p>
 *             </li>
 *             <li>
 *                <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and
 * 						<code>OPTIONS</code> requests.</p>
 *             </li>
 *          </ul>
 *          <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward
 * 			Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for
 * 			the responses to be cached correctly.</p>
 */
export interface CachedMethods {
  /**
   * <p>The number of HTTP methods for which you want CloudFront to cache responses. Valid values
   * 			are <code>2</code> (for caching responses to <code>GET</code> and <code>HEAD</code>
   * 			requests) and <code>3</code> (for caching responses to <code>GET</code>,
   * 				<code>HEAD</code>, and <code>OPTIONS</code> requests).</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains the HTTP methods that you want CloudFront to cache responses
   * 			to.</p>
   */
  Items: (Method | string)[] | undefined;
}

/**
 * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your
 * 			Amazon S3 bucket or your custom origin. There are three choices:</p>
 *          <ul>
 *             <li>
 *                <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p>
 *             </li>
 *             <li>
 *                <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and
 * 						<code>OPTIONS</code> requests.</p>
 *             </li>
 *             <li>
 *                <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and
 * 						<code>DELETE</code> requests.</p>
 *             </li>
 *          </ul>
 *          <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or
 * 			to your custom origin so users can't perform operations that you don't want them to. For
 * 			example, you might not want users to have permissions to delete objects from your
 * 			origin.</p>
 */
export interface AllowedMethods {
  /**
   * <p>The number of HTTP methods that you want CloudFront to forward to your origin. Valid values
   * 			are 2 (for <code>GET</code> and <code>HEAD</code> requests), 3 (for <code>GET</code>,
   * 				<code>HEAD</code>, and <code>OPTIONS</code> requests) and 7 (for <code>GET, HEAD,
   * 				OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests).</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains the HTTP methods that you want CloudFront to process and
   * 			forward to your origin.</p>
   */
  Items: (Method | string)[] | undefined;

  /**
   * <p>A complex type that controls whether CloudFront caches the response to requests using the
   * 			specified HTTP methods. There are two choices:</p>
   *          <ul>
   *             <li>
   *                <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code>
   * 					requests.</p>
   *             </li>
   *             <li>
   *                <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and
   * 						<code>OPTIONS</code> requests.</p>
   *             </li>
   *          </ul>
   *          <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward
   * 			Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for
   * 			the responses to be cached correctly.</p>
   */
  CachedMethods?: CachedMethods;
}

export interface AssociateAliasRequest {
  /**
   * <p>The ID of the distribution that you're associating the alias with.</p>
   */
  TargetDistributionId: string | undefined;

  /**
   * <p>The alias (also known as a CNAME) to add to the target distribution.</p>
   */
  Alias: string | undefined;
}

/**
 * <p>The update contains modifications that are not allowed.</p>
 */
export class IllegalUpdate extends __BaseException {
  readonly name: "IllegalUpdate" = "IllegalUpdate";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalUpdate, __BaseException>) {
    super({
      name: "IllegalUpdate",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalUpdate.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An argument is invalid.</p>
 */
export class InvalidArgument extends __BaseException {
  readonly name: "InvalidArgument" = "InvalidArgument";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgument, __BaseException>) {
    super({
      name: "InvalidArgument",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgument.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified distribution does not exist.</p>
 */
export class NoSuchDistribution extends __BaseException {
  readonly name: "NoSuchDistribution" = "NoSuchDistribution";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchDistribution, __BaseException>) {
    super({
      name: "NoSuchDistribution",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchDistribution.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 */
export class TooManyDistributionCNAMEs extends __BaseException {
  readonly name: "TooManyDistributionCNAMEs" = "TooManyDistributionCNAMEs";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionCNAMEs, __BaseException>) {
    super({
      name: "TooManyDistributionCNAMEs",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionCNAMEs.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Invalidation batch specified is too large.</p>
 */
export class BatchTooLarge extends __BaseException {
  readonly name: "BatchTooLarge" = "BatchTooLarge";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchTooLarge, __BaseException>) {
    super({
      name: "BatchTooLarge",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchTooLarge.prototype);
    this.Message = opts.Message;
  }
}

export enum ItemSelection {
  all = "all",
  none = "none",
  whitelist = "whitelist",
}

/**
 * <p>Contains a list of cookie names.</p>
 */
export interface CookieNames {
  /**
   * <p>The number of cookie names in the <code>Items</code> list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of cookie names.</p>
   */
  Items?: string[];
}

/**
 * <p>This field is deprecated. We recommend that you use a cache policy or an origin
 * 			request policy instead of this field.</p>
 *          <p>If you want to include cookies in the cache key, use <code>CookiesConfig</code> in a
 * 			cache policy. See <code>CachePolicy</code>.</p>
 *          <p>If you want to send cookies to the origin but not include them in the cache key, use
 * 				<code>CookiesConfig</code> in an origin request policy. See
 * 				<code>OriginRequestPolicy</code>.</p>
 *          <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin
 * 			and, if so, which ones. For more information about forwarding cookies to the origin, see
 * 				<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on
 * 				Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface CookiePreference {
  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field.</p>
   *          <p>If you want to include cookies in the cache key, use a cache policy. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>If you want to send cookies to the origin but not include them in the cache key, use
   * 			origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>Specifies which cookies to forward to the origin for this cache behavior: all, none,
   * 			or the list of cookies specified in the <code>WhitelistedNames</code> complex
   * 			type.</p>
   *          <p>Amazon S3 doesn't process cookies. When the cache behavior is forwarding requests to an
   * 			Amazon S3 origin, specify none for the <code>Forward</code> element.</p>
   */
  Forward: ItemSelection | string | undefined;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field.</p>
   *          <p>If you want to include cookies in the cache key, use a cache policy. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>If you want to send cookies to the origin but not include them in the cache key, use
   * 			an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>Required if you specify <code>whitelist</code> for the value of <code>Forward</code>.
   * 			A complex type that specifies how many different cookies you want CloudFront to forward to the
   * 			origin for this cache behavior and, if you want to forward selected cookies, the names
   * 			of those cookies.</p>
   *          <p>If you specify <code>all</code> or <code>none</code> for the value of
   * 				<code>Forward</code>, omit <code>WhitelistedNames</code>. If you change the value of
   * 				<code>Forward</code> from <code>whitelist</code> to <code>all</code> or
   * 				<code>none</code> and you don't delete the <code>WhitelistedNames</code> element and
   * 			its child elements, CloudFront deletes them automatically.</p>
   *          <p>For the current limit on the number of cookie names that you can whitelist for each
   * 			cache behavior, see <a href="https://docs.aws.amazon.com/general/latest/gr/xrefaws_service_limits.html#limits_cloudfront"> CloudFront
   * 				Limits</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  WhitelistedNames?: CookieNames;
}

/**
 * <p>Contains a list of HTTP header names.</p>
 */
export interface Headers {
  /**
   * <p>The number of header names in the <code>Items</code> list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of HTTP header names.</p>
   */
  Items?: string[];
}

/**
 * <p>This field is deprecated. We recommend that you use a cache policy or an origin
 * 			request policy instead of this field.</p>
 *          <p>If you want to include query strings in the cache key, use
 * 				<code>QueryStringsConfig</code> in a cache policy. See
 * 			<code>CachePolicy</code>.</p>
 *          <p>If you want to send query strings to the origin but not include them in the cache key,
 * 			use <code>QueryStringsConfig</code> in an origin request policy. See
 * 				<code>OriginRequestPolicy</code>.</p>
 *          <p>A complex type that contains information about the query string parameters that you
 * 			want CloudFront to use for caching for a cache behavior.</p>
 */
export interface QueryStringCacheKeys {
  /**
   * <p>The number of <code>whitelisted</code> query string parameters for a cache
   * 			behavior.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list that contains the query string parameters that you want CloudFront to use as a basis
   * 			for caching for a cache behavior. If <code>Quantity</code> is 0, you can omit
   * 				<code>Items</code>.</p>
   */
  Items?: string[];
}

/**
 * <p>This field is deprecated. We recommend that you use a cache policy or an origin
 * 			request policy instead of this field.</p>
 *          <p>If you want to include values in the cache key, use a cache policy. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *          <p>If you want to send values to the origin but not include them in the cache key, use an
 * 			origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 *          <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP
 * 			headers.</p>
 */
export interface ForwardedValues {
  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field.</p>
   *          <p>If you want to include query strings in the cache key, use a cache policy. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>If you want to send query strings to the origin but not include them in the cache key,
   * 			use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>Indicates whether you want CloudFront to forward query strings to the origin that is
   * 			associated with this cache behavior and cache based on the query string parameters. CloudFront
   * 			behavior depends on the value of <code>QueryString</code> and on the values that you
   * 			specify for <code>QueryStringCacheKeys</code>, if any:</p>
   *          <p>If you specify true for <code>QueryString</code> and you don't specify any values for
   * 				<code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the
   * 			origin and caches based on all query string parameters. Depending on how many query
   * 			string parameters and values you have, this can adversely affect performance because
   * 			CloudFront must forward more requests to the origin.</p>
   *          <p>If you specify true for <code>QueryString</code> and you specify one or more values
   * 			for <code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the
   * 			origin, but it only caches based on the query string parameters that you specify.</p>
   *          <p>If you specify false for <code>QueryString</code>, CloudFront doesn't forward any query
   * 			string parameters to the origin, and doesn't cache based on query string
   * 			parameters.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html">Configuring
   * 				CloudFront to Cache Based on Query String Parameters</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  QueryString: boolean | undefined;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field.</p>
   *          <p>If you want to include cookies in the cache key, use a cache policy. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>If you want to send cookies to the origin but not include them in the cache key, use
   * 			an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin
   * 			and, if so, which ones. For more information about forwarding cookies to the origin, see
   * 				<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches,
   * 				and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Cookies: CookiePreference | undefined;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field.</p>
   *          <p>If you want to include headers in the cache key, use a cache policy. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>If you want to send headers to the origin but not include them in the cache key, use
   * 			an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>A complex type that specifies the <code>Headers</code>, if any, that you want CloudFront to
   * 			forward to the origin for this cache behavior (whitelisted headers). For the headers
   * 			that you specify, CloudFront also caches separate versions of a specified object that is based
   * 			on the header values in viewer requests.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html"> Caching Content
   * 				Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Headers?: Headers;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field.</p>
   *          <p>If you want to include query strings in the cache key, use a cache policy. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>If you want to send query strings to the origin but not include them in the cache key,
   * 			use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>A complex type that contains information about the query string parameters that you
   * 			want CloudFront to use for caching for this cache behavior.</p>
   */
  QueryStringCacheKeys?: QueryStringCacheKeys;
}

export enum EventType {
  origin_request = "origin-request",
  origin_response = "origin-response",
  viewer_request = "viewer-request",
  viewer_response = "viewer-response",
}

/**
 * <p>A CloudFront function that is associated with a cache behavior in a CloudFront
 * 			distribution.</p>
 */
export interface FunctionAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) of the function.</p>
   */
  FunctionARN: string | undefined;

  /**
   * <p>The event type of the function, either <code>viewer-request</code> or
   * 				<code>viewer-response</code>. You cannot use origin-facing event types
   * 				(<code>origin-request</code> and <code>origin-response</code>) with a CloudFront
   * 			function.</p>
   */
  EventType: EventType | string | undefined;
}

/**
 * <p>A list of CloudFront functions that are associated with a cache behavior in a CloudFront
 * 			distribution. CloudFront functions must be published to the <code>LIVE</code> stage to
 * 			associate them with a cache behavior.</p>
 */
export interface FunctionAssociations {
  /**
   * <p>The number of CloudFront functions in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The CloudFront functions that are associated with a cache behavior in a CloudFront distribution.
   * 			CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a
   * 			cache behavior.</p>
   */
  Items?: FunctionAssociation[];
}

/**
 * <p>A complex type that contains a Lambda@Edge function association.</p>
 */
export interface LambdaFunctionAssociation {
  /**
   * <p>The ARN of the Lambda@Edge function. You must specify the ARN of a function version;
   * 			you can't specify an alias or $LATEST.</p>
   */
  LambdaFunctionARN: string | undefined;

  /**
   * <p>Specifies the event type that triggers a Lambda@Edge function invocation. You can
   * 			specify the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>viewer-request</code>: The function executes when CloudFront receives a
   * 					request from a viewer and before it checks to see whether the requested object
   * 					is in the edge cache.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>origin-request</code>: The function executes only when CloudFront sends a
   * 					request to your origin. When the requested object is in the edge cache, the
   * 					function doesn't execute.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>origin-response</code>: The function executes after CloudFront receives a
   * 					response from the origin and before it caches the object in the response. When
   * 					the requested object is in the edge cache, the function doesn't execute.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>viewer-response</code>: The function executes before CloudFront returns the
   * 					requested object to the viewer. The function executes regardless of whether the
   * 					object was already in the edge cache.</p>
   *                <p>If the origin returns an HTTP status code other than HTTP 200 (OK), the
   * 					function doesn't execute.</p>
   *             </li>
   *          </ul>
   */
  EventType: EventType | string | undefined;

  /**
   * <p>A flag that allows a Lambda@Edge function to have read access to the body content. For
   * 			more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html">Accessing the Request Body by Choosing the Include Body Option</a> in the
   * 			Amazon CloudFront Developer Guide.</p>
   */
  IncludeBody?: boolean;
}

/**
 * <p>A complex type that specifies a list of Lambda@Edge functions associations for a cache
 * 			behavior.</p>
 *          <p>If you want to invoke one or more Lambda@Edge functions triggered by requests that
 * 			match the <code>PathPattern</code> of the cache behavior, specify the applicable values
 * 			for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4
 * 				<code>LambdaFunctionAssociation</code> items in this list (one for each possible
 * 			value of <code>EventType</code>) and each <code>EventType</code> can be associated with
 * 			only one function.</p>
 *          <p>If you don't want to invoke any Lambda@Edge functions for the requests that match
 * 				<code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit
 * 				<code>Items</code>.</p>
 */
export interface LambdaFunctionAssociations {
  /**
   * <p>The number of Lambda@Edge function associations for this cache behavior.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>
   *             <b>Optional</b>: A complex type that contains
   * 				<code>LambdaFunctionAssociation</code> items for this cache behavior. If
   * 				<code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   */
  Items?: LambdaFunctionAssociation[];
}

/**
 * <p>A list of key groups whose public keys CloudFront can use to verify the signatures of signed
 * 			URLs and signed cookies.</p>
 */
export interface TrustedKeyGroups {
  /**
   * <p>This field is <code>true</code> if any of the key groups in the list have public keys
   * 			that CloudFront can use to verify the signatures of signed URLs and signed cookies. If not,
   * 			this field is <code>false</code>.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The number of key groups in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of key groups identifiers.</p>
   */
  Items?: string[];
}

/**
 * <p>A list of Amazon Web Services accounts whose public keys CloudFront can use to verify the signatures of
 * 			signed URLs and signed cookies.</p>
 */
export interface TrustedSigners {
  /**
   * <p>This field is <code>true</code> if any of the Amazon Web Services accounts have public keys that
   * 			CloudFront can use to verify the signatures of signed URLs and signed cookies. If not, this
   * 			field is <code>false</code>.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The number of Amazon Web Services accounts in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of Amazon Web Services account identifiers.</p>
   */
  Items?: string[];
}

export enum ViewerProtocolPolicy {
  allow_all = "allow-all",
  https_only = "https-only",
  redirect_to_https = "redirect-to-https",
}

/**
 * <p>A complex type that describes how CloudFront processes requests.</p>
 *          <p>You must create at least as many cache behaviors (including the default cache
 * 			behavior) as you have origins if you want CloudFront to serve objects from all of the origins.
 * 			Each cache behavior specifies the one origin from which you want CloudFront to get objects. If
 * 			you have two origins and only the default cache behavior, the default cache behavior
 * 			will cause CloudFront to get objects from one of the origins, but the other origin is never
 * 			used.</p>
 *          <p>For the current quota (formerly known as limit) on the number of cache behaviors that
 * 			you can add to a distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 *          <p>If you don't want to specify any cache behaviors, include only an empty
 * 				<code>CacheBehaviors</code> element. Don't include an empty
 * 				<code>CacheBehavior</code> element because this is invalid.</p>
 *          <p>To delete all cache behaviors in an existing distribution, update the distribution
 * 			configuration and include only an empty <code>CacheBehaviors</code> element.</p>
 *          <p>To add, change, or remove one or more cache behaviors, update the distribution
 * 			configuration and specify all of the cache behaviors that you want to include in the
 * 			updated distribution.</p>
 *          <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface CacheBehavior {
  /**
   * <p>The pattern (for example, <code>images/*.jpg</code>) that specifies which requests to
   * 			apply the behavior to. When CloudFront receives a viewer request, the requested path is
   * 			compared with path patterns in the order in which cache behaviors are listed in the
   * 			distribution.</p>
   *          <note>
   *             <p>You can optionally include a slash (<code>/</code>) at the beginning of the path
   * 				pattern. For example, <code>/images/*.jpg</code>. CloudFront behavior is the same with or
   * 				without the leading <code>/</code>.</p>
   *          </note>
   *          <p>The path pattern for the default cache behavior is <code>*</code> and cannot be
   * 			changed. If the request for an object does not match the path pattern for any cache
   * 			behaviors, CloudFront applies the behavior in the default cache behavior.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesPathPattern">Path Pattern</a> in the <i> Amazon CloudFront Developer Guide</i>.</p>
   */
  PathPattern: string | undefined;

  /**
   * <p>The value of <code>ID</code> for the origin that you want CloudFront to route requests to
   * 			when they match this cache behavior.</p>
   */
  TargetOriginId: string | undefined;

  /**
   * <important>
   *             <p>We recommend using <code>TrustedKeyGroups</code> instead of
   * 					<code>TrustedSigners</code>.</p>
   *          </important>
   *          <p>A list of Amazon Web Services account IDs whose public keys CloudFront can use to validate signed URLs or
   * 			signed cookies.</p>
   *          <p>When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed
   * 			cookies for all requests that match the cache behavior. The URLs or cookies must be
   * 			signed with the private key of a CloudFront key pair in the trusted signer's Amazon Web Services account.
   * 			The signed URL or cookie contains information about which public key CloudFront should use to
   * 			verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  TrustedSigners?: TrustedSigners;

  /**
   * <p>A list of key groups that CloudFront can use to validate signed URLs or signed
   * 			cookies.</p>
   *          <p>When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed
   * 			cookies for all requests that match the cache behavior. The URLs or cookies must be
   * 			signed with a private key whose corresponding public key is in the key group. The signed
   * 			URL or cookie contains information about which public key CloudFront should use to verify the
   * 			signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  TrustedKeyGroups?: TrustedKeyGroups;

  /**
   * <p>The protocol that viewers can use to access the files in the origin specified by
   * 				<code>TargetOriginId</code> when a request matches the path pattern in
   * 				<code>PathPattern</code>. You can specify the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allow-all</code>: Viewers can use HTTP or HTTPS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront
   * 					returns an HTTP status code of 301 (Moved Permanently) to the viewer along with
   * 					the HTTPS URL. The viewer then resubmits the request using the new URL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an
   * 					HTTP status code of 403 (Forbidden).</p>
   *             </li>
   *          </ul>
   *          <p>For more information about requiring the HTTPS protocol, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html">Requiring HTTPS Between Viewers and CloudFront</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <note>
   *             <p>The only way to guarantee that viewers retrieve an object that was fetched from
   * 				the origin using HTTPS is never to use any other protocol to fetch the object. If
   * 				you have recently changed from HTTP to HTTPS, we recommend that you clear your
   * 				objects' cache because cached objects are protocol agnostic. That means that an edge
   * 				location will return an object from the cache regardless of whether the current
   * 				request protocol matches the protocol used previously. For more information, see
   * 					<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing Cache
   * 					Expiration</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          </note>
   */
  ViewerProtocolPolicy: ViewerProtocolPolicy | string | undefined;

  /**
   * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your
   * 			Amazon S3 bucket or your custom origin. There are three choices:</p>
   *          <ul>
   *             <li>
   *                <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p>
   *             </li>
   *             <li>
   *                <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and
   * 						<code>OPTIONS</code> requests.</p>
   *             </li>
   *             <li>
   *                <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and
   * 						<code>DELETE</code> requests.</p>
   *             </li>
   *          </ul>
   *          <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or
   * 			to your custom origin so users can't perform operations that you don't want them to. For
   * 			example, you might not want users to have permissions to delete objects from your
   * 			origin.</p>
   */
  AllowedMethods?: AllowedMethods;

  /**
   * <p>Indicates whether you want to distribute media files in the Microsoft Smooth Streaming
   * 			format using the origin that is associated with this cache behavior. If so, specify
   * 				<code>true</code>; if not, specify <code>false</code>. If you specify
   * 				<code>true</code> for <code>SmoothStreaming</code>, you can still distribute other
   * 			content using this cache behavior if the content matches the value of
   * 				<code>PathPattern</code>.</p>
   */
  SmoothStreaming?: boolean;

  /**
   * <p>Whether you want CloudFront to automatically compress certain files for this cache behavior.
   * 			If so, specify true; if not, specify false. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html">Serving
   * 				Compressed Files</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Compress?: boolean;

  /**
   * <p>A complex type that contains zero or more Lambda@Edge function associations for a
   * 			cache behavior.</p>
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociations;

  /**
   * <p>A list of CloudFront functions that are associated with this cache behavior. CloudFront functions
   * 			must be published to the <code>LIVE</code> stage to associate them with a cache
   * 			behavior.</p>
   */
  FunctionAssociations?: FunctionAssociations;

  /**
   * <p>The value of <code>ID</code> for the field-level encryption configuration that you
   * 			want CloudFront to use for encrypting specific fields of data for this cache behavior.</p>
   */
  FieldLevelEncryptionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration that is attached to
   * 			this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  RealtimeLogConfigArn?: string;

  /**
   * <p>The unique identifier of the cache policy that is attached to this cache behavior. For
   * 			more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>A <code>CacheBehavior</code> must include either a <code>CachePolicyId</code> or
   * 				<code>ForwardedValues</code>. We recommend that you use a
   * 			<code>CachePolicyId</code>.</p>
   */
  CachePolicyId?: string;

  /**
   * <p>The unique identifier of the origin request policy that is attached to this cache
   * 			behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginRequestPolicyId?: string;

  /**
   * <p>The identifier for a response headers policy.</p>
   */
  ResponseHeadersPolicyId?: string;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html">Working with policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>If you want to include values in the cache key, use a cache policy. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>If you want to send values to the origin but not include them in the cache key, use an
   * 			origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>A <code>CacheBehavior</code> must include either a <code>CachePolicyId</code> or
   * 				<code>ForwardedValues</code>. We recommend that you use a
   * 			<code>CachePolicyId</code>.</p>
   *          <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP
   * 			headers.</p>
   */
  ForwardedValues?: ForwardedValues;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use the <code>MinTTL</code> field in a
   * 			cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been
   * 			updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html"> Managing How Long
   * 				Content Stays in an Edge Cache (Expiration)</a> in the <i>
   * 				Amazon CloudFront Developer Guide</i>.</p>
   *          <p>You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to
   * 			forward all headers to your origin (under <code>Headers</code>, if you specify
   * 				<code>1</code> for <code>Quantity</code> and <code>*</code> for
   * 			<code>Name</code>).</p>
   */
  MinTTL?: number;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use the <code>DefaultTTL</code> field
   * 			in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>The default amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been
   * 			updated. The value that you specify applies only when your origin does not add HTTP
   * 			headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>,
   * 			and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  DefaultTTL?: number;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use the <code>MaxTTL</code> field in a
   * 			cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been
   * 			updated. The value that you specify applies only when your origin adds HTTP headers such
   * 			as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   * 				<code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  MaxTTL?: number;
}

/**
 * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.</p>
 */
export interface CacheBehaviors {
  /**
   * <p>The number of cache behaviors for this distribution.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>Optional: A complex type that contains cache behaviors for this distribution. If
   * 				<code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   */
  Items?: CacheBehavior[];
}

export enum CachePolicyCookieBehavior {
  all = "all",
  allExcept = "allExcept",
  none = "none",
  whitelist = "whitelist",
}

/**
 * <p>An object that determines whether any cookies in viewer requests (and if so, which
 * 			cookies) are included in the cache key and automatically included in requests that CloudFront
 * 			sends to the origin.</p>
 */
export interface CachePolicyCookiesConfig {
  /**
   * <p>Determines whether any cookies in viewer requests are included in the cache key and
   * 			automatically included in requests that CloudFront sends to the origin. Valid values
   * 			are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>none</code> – Cookies in viewer requests are not included in the cache
   * 					key and are not automatically included in requests that CloudFront sends to the
   * 					origin. Even when this field is set to <code>none</code>, any cookies that are
   * 					listed in an <code>OriginRequestPolicy</code>
   *                   <i>are</i> included in origin requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>whitelist</code> – The cookies in viewer requests that are listed in the
   * 						<code>CookieNames</code> type are included in the cache key and
   * 					automatically included in requests that CloudFront sends to the origin.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allExcept</code> – All cookies in viewer requests that are
   * 							<i>
   *                      <b>not</b>
   *                   </i> listed in the
   * 						<code>CookieNames</code> type are included in the cache key and
   * 					automatically included in requests that CloudFront sends to the origin.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>all</code> – All cookies in viewer requests are included in the cache
   * 					key and are automatically included in requests that CloudFront sends to the
   * 					origin.</p>
   *             </li>
   *          </ul>
   */
  CookieBehavior: CachePolicyCookieBehavior | string | undefined;

  /**
   * <p>Contains a list of cookie names.</p>
   */
  Cookies?: CookieNames;
}

export enum CachePolicyHeaderBehavior {
  none = "none",
  whitelist = "whitelist",
}

/**
 * <p>An object that determines whether any HTTP headers (and if so, which headers) are
 * 			included in the cache key and automatically included in requests that CloudFront sends to the
 * 			origin.</p>
 */
export interface CachePolicyHeadersConfig {
  /**
   * <p>Determines whether any HTTP headers are included in the cache key and automatically
   * 			included in requests that CloudFront sends to the origin. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>none</code> – HTTP headers are not included in the cache key and are not
   * 					automatically included in requests that CloudFront sends to the origin. Even when this
   * 					field is set to <code>none</code>, any headers that are listed in an
   * 						<code>OriginRequestPolicy</code>
   *                   <i>are</i> included in origin requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>whitelist</code> – The HTTP headers that are listed in the
   * 						<code>Headers</code> type are included in the cache key and are
   * 					automatically included in requests that CloudFront sends to the origin.</p>
   *             </li>
   *          </ul>
   */
  HeaderBehavior: CachePolicyHeaderBehavior | string | undefined;

  /**
   * <p>Contains a list of HTTP header names.</p>
   */
  Headers?: Headers;
}

export enum CachePolicyQueryStringBehavior {
  all = "all",
  allExcept = "allExcept",
  none = "none",
  whitelist = "whitelist",
}

/**
 * <p>Contains a list of query string names.</p>
 */
export interface QueryStringNames {
  /**
   * <p>The number of query string names in the <code>Items</code> list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of query string names.</p>
   */
  Items?: string[];
}

/**
 * <p>An object that determines whether any URL query strings in viewer requests (and if so,
 * 			which query strings) are included in the cache key and automatically included in
 * 			requests that CloudFront sends to the origin.</p>
 */
export interface CachePolicyQueryStringsConfig {
  /**
   * <p>Determines whether any URL query strings in viewer requests are included in the cache
   * 			key and automatically included in requests that CloudFront sends to the origin. Valid values
   * 			are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>none</code> – Query strings in viewer requests are not included in the
   * 					cache key and are not automatically included in requests that CloudFront sends to the
   * 					origin. Even when this field is set to <code>none</code>, any query strings that
   * 					are listed in an <code>OriginRequestPolicy</code>
   *                   <i>are</i> included in origin requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>whitelist</code> – The query strings in viewer requests that are listed
   * 					in the <code>QueryStringNames</code> type are included in the cache key and
   * 					automatically included in requests that CloudFront sends to the origin.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allExcept</code> – All query strings in viewer requests that are
   * 							<i>
   *                      <b>not</b>
   *                   </i> listed in the
   * 						<code>QueryStringNames</code> type are included in the cache key and
   * 					automatically included in requests that CloudFront sends to the origin.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>all</code> – All query strings in viewer requests are included in the
   * 					cache key and are automatically included in requests that CloudFront sends to the
   * 					origin.</p>
   *             </li>
   *          </ul>
   */
  QueryStringBehavior: CachePolicyQueryStringBehavior | string | undefined;

  /**
   * <p>Contains the specific query strings in viewer requests that either <i>
   *                <b>are</b>
   *             </i> or <i>
   *                <b>are
   * 					not</b>
   *             </i> included in the cache key and automatically included
   * 			in requests that CloudFront sends to the origin. The behavior depends on whether the
   * 				<code>QueryStringBehavior</code> field in the
   * 				<code>CachePolicyQueryStringsConfig</code> type is set to <code>whitelist</code>
   * 			(the listed query strings <i>
   *                <b>are</b>
   *             </i>
   * 			included) or <code>allExcept</code> (the listed query strings <i>
   *                <b>are not</b>
   *             </i> included, but all other query strings
   * 			are).</p>
   */
  QueryStrings?: QueryStringNames;
}

/**
 * <p>This object determines the values that CloudFront includes in the cache key. These values
 * 			can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to
 * 			find an object in its cache that it can return to the viewer.</p>
 *          <p>The headers, cookies, and query strings that are included in the cache key are
 * 			automatically included in requests that CloudFront sends to the origin. CloudFront sends a request
 * 			when it can't find an object in its cache that matches the request's cache key. If you
 * 			want to send values to the origin but <i>not</i> include them in the cache
 * 			key, use <code>OriginRequestPolicy</code>.</p>
 */
export interface ParametersInCacheKeyAndForwardedToOrigin {
  /**
   * <p>A flag that can affect whether the <code>Accept-Encoding</code> HTTP header is
   * 			included in the cache key and included in requests that CloudFront sends to the origin.</p>
   *          <p>This field is related to the <code>EnableAcceptEncodingBrotli</code> field. If one or
   * 			both of these fields is <code>true</code>
   *             <i>and</i> the viewer request includes the <code>Accept-Encoding</code>
   * 			header, then CloudFront does the following:</p>
   *          <ul>
   *             <li>
   *                <p>Normalizes the value of the viewer's <code>Accept-Encoding</code>
   * 					header</p>
   *             </li>
   *             <li>
   *                <p>Includes the normalized header in the cache key</p>
   *             </li>
   *             <li>
   *                <p>Includes the normalized header in the request to the origin, if a request is
   * 					necessary</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects">Compression support</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>If you set this value to <code>true</code>, and this cache behavior also has an origin
   * 			request policy attached, do not include the <code>Accept-Encoding</code> header in the
   * 			origin request policy. CloudFront always includes the <code>Accept-Encoding</code> header in
   * 			origin requests when the value of this field is <code>true</code>, so including this
   * 			header in an origin request policy has no effect.</p>
   *          <p>If both of these fields are <code>false</code>, then CloudFront treats the
   * 				<code>Accept-Encoding</code> header the same as any other HTTP header in the viewer
   * 			request. By default, it's not included in the cache key and it's not included in origin
   * 			requests. In this case, you can manually add <code>Accept-Encoding</code> to the headers
   * 			whitelist like any other HTTP header.</p>
   */
  EnableAcceptEncodingGzip: boolean | undefined;

  /**
   * <p>A flag that can affect whether the <code>Accept-Encoding</code> HTTP header is
   * 			included in the cache key and included in requests that CloudFront sends to the origin.</p>
   *          <p>This field is related to the <code>EnableAcceptEncodingGzip</code> field. If one or
   * 			both of these fields is <code>true</code>
   *             <i>and</i> the viewer request includes the <code>Accept-Encoding</code>
   * 			header, then CloudFront does the following:</p>
   *          <ul>
   *             <li>
   *                <p>Normalizes the value of the viewer's <code>Accept-Encoding</code>
   * 					header</p>
   *             </li>
   *             <li>
   *                <p>Includes the normalized header in the cache key</p>
   *             </li>
   *             <li>
   *                <p>Includes the normalized header in the request to the origin, if a request is
   * 					necessary</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects">Compression support</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>If you set this value to <code>true</code>, and this cache behavior also has an origin
   * 			request policy attached, do not include the <code>Accept-Encoding</code> header in the
   * 			origin request policy. CloudFront always includes the <code>Accept-Encoding</code> header in
   * 			origin requests when the value of this field is <code>true</code>, so including this
   * 			header in an origin request policy has no effect.</p>
   *          <p>If both of these fields are <code>false</code>, then CloudFront treats the
   * 				<code>Accept-Encoding</code> header the same as any other HTTP header in the viewer
   * 			request. By default, it's not included in the cache key and it's not included in origin
   * 			requests. In this case, you can manually add <code>Accept-Encoding</code> to the headers
   * 			whitelist like any other HTTP header.</p>
   */
  EnableAcceptEncodingBrotli?: boolean;

  /**
   * <p>An object that determines whether any HTTP headers (and if so, which headers) are
   * 			included in the cache key and automatically included in requests that CloudFront sends to the
   * 			origin.</p>
   */
  HeadersConfig: CachePolicyHeadersConfig | undefined;

  /**
   * <p>An object that determines whether any cookies in viewer requests (and if so, which
   * 			cookies) are included in the cache key and automatically included in requests that CloudFront
   * 			sends to the origin.</p>
   */
  CookiesConfig: CachePolicyCookiesConfig | undefined;

  /**
   * <p>An object that determines whether any URL query strings in viewer requests (and if so,
   * 			which query strings) are included in the cache key and automatically included in
   * 			requests that CloudFront sends to the origin.</p>
   */
  QueryStringsConfig: CachePolicyQueryStringsConfig | undefined;
}

/**
 * <p>A cache policy configuration.</p>
 *          <p>This configuration determines the following:</p>
 *          <ul>
 *             <li>
 *                <p>The values that CloudFront includes in the cache key. These values can include HTTP
 * 					headers, cookies, and URL query strings. CloudFront uses the cache key to find an
 * 					object in its cache that it can return to the viewer.</p>
 *             </li>
 *             <li>
 *                <p>The default, minimum, and maximum time to live (TTL) values that you want
 * 					objects to stay in the CloudFront cache.</p>
 *             </li>
 *          </ul>
 *          <p>The headers, cookies, and query strings that are included in the cache key are
 * 			automatically included in requests that CloudFront sends to the origin. CloudFront sends a request
 * 			when it can't find a valid object in its cache that matches the request's cache key. If
 * 			you want to send values to the origin but <i>not</i> include them in the
 * 			cache key, use <code>OriginRequestPolicy</code>.</p>
 */
export interface CachePolicyConfig {
  /**
   * <p>A comment to describe the cache policy. The comment cannot be longer than 128
   * 			characters.</p>
   */
  Comment?: string;

  /**
   * <p>A unique name to identify the cache policy.</p>
   */
  Name: string | undefined;

  /**
   * <p>The default amount of time, in seconds, that you want objects to stay in the CloudFront
   * 			cache before CloudFront sends another request to the origin to see if the object has been
   * 			updated. CloudFront uses this value as the object's time to live (TTL) only when the origin
   * 			does <i>not</i> send <code>Cache-Control</code> or <code>Expires</code>
   * 			headers with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>The default value for this field is 86400 seconds (one day). If the value of
   * 				<code>MinTTL</code> is more than 86400 seconds, then the default value for this
   * 			field is the same as the value of <code>MinTTL</code>.</p>
   */
  DefaultTTL?: number;

  /**
   * <p>The maximum amount of time, in seconds, that objects stay in the CloudFront cache before
   * 			CloudFront sends another request to the origin to see if the object has been updated. CloudFront
   * 			uses this value only when the origin sends <code>Cache-Control</code> or
   * 				<code>Expires</code> headers with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>The default value for this field is 31536000 seconds (one year). If the value of
   * 				<code>MinTTL</code> or <code>DefaultTTL</code> is more than 31536000 seconds, then
   * 			the default value for this field is the same as the value of
   * 			<code>DefaultTTL</code>.</p>
   */
  MaxTTL?: number;

  /**
   * <p>The minimum amount of time, in seconds, that you want objects to stay in the CloudFront
   * 			cache before CloudFront sends another request to the origin to see if the object has been
   * 			updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  MinTTL: number | undefined;

  /**
   * <p>The HTTP headers, cookies, and URL query strings to include in the cache key. The
   * 			values included in the cache key are automatically included in requests that CloudFront sends
   * 			to the origin.</p>
   */
  ParametersInCacheKeyAndForwardedToOrigin?: ParametersInCacheKeyAndForwardedToOrigin;
}

/**
 * <p>A cache policy.</p>
 *          <p>When it's attached to a cache behavior, the cache policy determines the
 * 			following:</p>
 *          <ul>
 *             <li>
 *                <p>The values that CloudFront includes in the cache key. These values can include HTTP
 * 					headers, cookies, and URL query strings. CloudFront uses the cache key to find an
 * 					object in its cache that it can return to the viewer.</p>
 *             </li>
 *             <li>
 *                <p>The default, minimum, and maximum time to live (TTL) values that you want
 * 					objects to stay in the CloudFront cache.</p>
 *             </li>
 *          </ul>
 *          <p>The headers, cookies, and query strings that are included in the cache key are
 * 			automatically included in requests that CloudFront sends to the origin. CloudFront sends a request
 * 			when it can't find a valid object in its cache that matches the request's cache key. If
 * 			you want to send values to the origin but <i>not</i> include them in the
 * 			cache key, use <code>OriginRequestPolicy</code>.</p>
 */
export interface CachePolicy {
  /**
   * <p>The unique identifier for the cache policy.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date and time when the cache policy was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The cache policy configuration.</p>
   */
  CachePolicyConfig: CachePolicyConfig | undefined;
}

/**
 * <p>A cache policy with this name already exists. You must provide a unique name. To
 * 			modify an existing cache policy, use <code>UpdateCachePolicy</code>.</p>
 */
export class CachePolicyAlreadyExists extends __BaseException {
  readonly name: "CachePolicyAlreadyExists" = "CachePolicyAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CachePolicyAlreadyExists, __BaseException>) {
    super({
      name: "CachePolicyAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CachePolicyAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot delete the cache policy because it is attached to one or more cache
 * 			behaviors.</p>
 */
export class CachePolicyInUse extends __BaseException {
  readonly name: "CachePolicyInUse" = "CachePolicyInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CachePolicyInUse, __BaseException>) {
    super({
      name: "CachePolicyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CachePolicyInUse.prototype);
    this.Message = opts.Message;
  }
}

export enum CachePolicyType {
  custom = "custom",
  managed = "managed",
}

/**
 * <p>Contains a cache policy.</p>
 */
export interface CachePolicySummary {
  /**
   * <p>The type of cache policy, either <code>managed</code> (created by Amazon Web Services) or
   * 				<code>custom</code> (created in this Amazon Web Services account).</p>
   */
  Type: CachePolicyType | string | undefined;

  /**
   * <p>The cache policy.</p>
   */
  CachePolicy: CachePolicy | undefined;
}

/**
 * <p>A list of cache policies.</p>
 */
export interface CachePolicyList {
  /**
   * <p>If there are more items in the list than are in this response, this element is
   * 			present. It contains the value that you should use in the <code>Marker</code> field of a
   * 			subsequent request to continue listing cache policies where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of cache policies requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>The total number of cache policies returned in the response.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the cache policies in the list.</p>
   */
  Items?: CachePolicySummary[];
}

/**
 * <p>You can't change the value of a public key.</p>
 */
export class CannotChangeImmutablePublicKeyFields extends __BaseException {
  readonly name: "CannotChangeImmutablePublicKeyFields" = "CannotChangeImmutablePublicKeyFields";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CannotChangeImmutablePublicKeyFields, __BaseException>) {
    super({
      name: "CannotChangeImmutablePublicKeyFields",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CannotChangeImmutablePublicKeyFields.prototype);
    this.Message = opts.Message;
  }
}

export enum CertificateSource {
  acm = "acm",
  cloudfront = "cloudfront",
  iam = "iam",
}

/**
 * <p>The CNAME specified is already defined for CloudFront.</p>
 */
export class CNAMEAlreadyExists extends __BaseException {
  readonly name: "CNAMEAlreadyExists" = "CNAMEAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CNAMEAlreadyExists, __BaseException>) {
    super({
      name: "CNAMEAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CNAMEAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

export interface CopyDistributionRequest {
  /**
   * <p>The identifier of the primary distribution whose configuration you are copying. To get
   * 			a distribution ID, use <code>ListDistributions</code>.</p>
   */
  PrimaryDistributionId: string | undefined;

  /**
   * <p>The type of distribution that your primary distribution will be copied to. The only
   * 			valid value is <code>True</code>, indicating that you are copying to a staging
   * 			distribution.</p>
   */
  Staging?: boolean;

  /**
   * <p>The version identifier of the primary distribution whose configuration you are
   * 			copying. This is the <code>ETag</code> value returned in the response to
   * 				<code>GetDistribution</code> and <code>GetDistributionConfig</code>.</p>
   */
  IfMatch?: string;

  /**
   * <p>A value that uniquely identifies a request to create a resource. This helps to prevent
   * 			CloudFront from creating a duplicate resource if you accidentally resubmit an identical
   * 			request.</p>
   */
  CallerReference: string | undefined;
}

/**
 * <p>A complex type that controls:</p>
 *          <ul>
 *             <li>
 *                <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom
 * 					error messages before returning the response to the viewer.</p>
 *             </li>
 *             <li>
 *                <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing
 * 				Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface CustomErrorResponse {
  /**
   * <p>The HTTP status code for which you want to specify a custom error page and/or a
   * 			caching duration.</p>
   */
  ErrorCode: number | undefined;

  /**
   * <p>The path to the custom error page that you want CloudFront to return to a viewer when your
   * 			origin returns the HTTP status code specified by <code>ErrorCode</code>, for example,
   * 				<code>/4xx-errors/403-forbidden.html</code>. If you want to store your objects and
   * 			your custom error pages in different locations, your distribution must include a cache
   * 			behavior for which the following is true:</p>
   *          <ul>
   *             <li>
   *                <p>The value of <code>PathPattern</code> matches the path to your custom error
   * 					messages. For example, suppose you saved custom error pages for 4xx errors in an
   * 					Amazon S3 bucket in a directory named <code>/4xx-errors</code>. Your distribution
   * 					must include a cache behavior for which the path pattern routes requests for
   * 					your custom error pages to that location, for example,
   * 						<code>/4xx-errors/*</code>.</p>
   *             </li>
   *             <li>
   *                <p>The value of <code>TargetOriginId</code> specifies the value of the
   * 						<code>ID</code> element for the origin that contains your custom error
   * 					pages.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify a value for <code>ResponsePagePath</code>, you must also specify a
   * 			value for <code>ResponseCode</code>.</p>
   *          <p>We recommend that you store custom error pages in an Amazon S3 bucket. If you store custom
   * 			error pages on an HTTP server and the server starts to return 5xx errors, CloudFront can't get
   * 			the files that you want to return to viewers because the origin server is
   * 			unavailable.</p>
   */
  ResponsePagePath?: string;

  /**
   * <p>The HTTP status code that you want CloudFront to return to the viewer along with the custom
   * 			error page. There are a variety of reasons that you might want CloudFront to return a status
   * 			code different from the status code that your origin returned to CloudFront, for
   * 			example:</p>
   *          <ul>
   *             <li>
   *                <p>Some Internet devices (some firewalls and corporate proxies, for example)
   * 					intercept HTTP 4xx and 5xx and prevent the response from being returned to the
   * 					viewer. If you substitute <code>200</code>, the response typically won't be
   * 					intercepted.</p>
   *             </li>
   *             <li>
   *                <p>If you don't care about distinguishing among different client errors or server
   * 					errors, you can specify <code>400</code> or <code>500</code> as the
   * 						<code>ResponseCode</code> for all 4xx or 5xx errors.</p>
   *             </li>
   *             <li>
   *                <p>You might want to return a <code>200</code> status code (OK) and static
   * 					website so your customers don't know that your website is down.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify a value for <code>ResponseCode</code>, you must also specify a value
   * 			for <code>ResponsePagePath</code>.</p>
   */
  ResponseCode?: string;

  /**
   * <p>The minimum amount of time, in seconds, that you want CloudFront to cache the HTTP status
   * 			code specified in <code>ErrorCode</code>. When this time period has elapsed, CloudFront
   * 			queries your origin to see whether the problem that caused the error has been resolved
   * 			and the requested object is now available.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing
   * 				Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  ErrorCachingMinTTL?: number;
}

/**
 * <p>A complex type that controls:</p>
 *          <ul>
 *             <li>
 *                <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom
 * 					error messages before returning the response to the viewer.</p>
 *             </li>
 *             <li>
 *                <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing
 * 				Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface CustomErrorResponses {
  /**
   * <p>The number of HTTP status codes for which you want to specify a custom error page
   * 			and/or a caching duration. If <code>Quantity</code> is <code>0</code>, you can omit
   * 				<code>Items</code>.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains a <code>CustomErrorResponse</code> element for each HTTP
   * 			status code for which you want to specify a custom error page and/or a caching duration.
   * 		</p>
   */
  Items?: CustomErrorResponse[];
}

/**
 * <p>A complex type that describes the default cache behavior if you don't specify a
 * 				<code>CacheBehavior</code> element or if request URLs don't match any of the values
 * 			of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create
 * 			exactly one default cache behavior.</p>
 */
export interface DefaultCacheBehavior {
  /**
   * <p>The value of <code>ID</code> for the origin that you want CloudFront to route requests to
   * 			when they use the default cache behavior.</p>
   */
  TargetOriginId: string | undefined;

  /**
   * <important>
   *             <p>We recommend using <code>TrustedKeyGroups</code> instead of
   * 					<code>TrustedSigners</code>.</p>
   *          </important>
   *          <p>A list of Amazon Web Services account IDs whose public keys CloudFront can use to validate signed URLs or
   * 			signed cookies.</p>
   *          <p>When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed
   * 			cookies for all requests that match the cache behavior. The URLs or cookies must be
   * 			signed with the private key of a CloudFront key pair in a trusted signer's Amazon Web Services account. The
   * 			signed URL or cookie contains information about which public key CloudFront should use to
   * 			verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  TrustedSigners?: TrustedSigners;

  /**
   * <p>A list of key groups that CloudFront can use to validate signed URLs or signed
   * 			cookies.</p>
   *          <p>When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed
   * 			cookies for all requests that match the cache behavior. The URLs or cookies must be
   * 			signed with a private key whose corresponding public key is in the key group. The signed
   * 			URL or cookie contains information about which public key CloudFront should use to verify the
   * 			signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  TrustedKeyGroups?: TrustedKeyGroups;

  /**
   * <p>The protocol that viewers can use to access the files in the origin specified by
   * 				<code>TargetOriginId</code> when a request matches the path pattern in
   * 				<code>PathPattern</code>. You can specify the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allow-all</code>: Viewers can use HTTP or HTTPS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront
   * 					returns an HTTP status code of 301 (Moved Permanently) to the viewer along with
   * 					the HTTPS URL. The viewer then resubmits the request using the new URL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an
   * 					HTTP status code of 403 (Forbidden).</p>
   *             </li>
   *          </ul>
   *          <p>For more information about requiring the HTTPS protocol, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html">Requiring HTTPS Between Viewers and CloudFront</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <note>
   *             <p>The only way to guarantee that viewers retrieve an object that was fetched from
   * 				the origin using HTTPS is never to use any other protocol to fetch the object. If
   * 				you have recently changed from HTTP to HTTPS, we recommend that you clear your
   * 				objects' cache because cached objects are protocol agnostic. That means that an edge
   * 				location will return an object from the cache regardless of whether the current
   * 				request protocol matches the protocol used previously. For more information, see
   * 					<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing Cache
   * 					Expiration</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          </note>
   */
  ViewerProtocolPolicy: ViewerProtocolPolicy | string | undefined;

  /**
   * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your
   * 			Amazon S3 bucket or your custom origin. There are three choices:</p>
   *          <ul>
   *             <li>
   *                <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p>
   *             </li>
   *             <li>
   *                <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and
   * 						<code>OPTIONS</code> requests.</p>
   *             </li>
   *             <li>
   *                <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and
   * 						<code>DELETE</code> requests.</p>
   *             </li>
   *          </ul>
   *          <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or
   * 			to your custom origin so users can't perform operations that you don't want them to. For
   * 			example, you might not want users to have permissions to delete objects from your
   * 			origin.</p>
   */
  AllowedMethods?: AllowedMethods;

  /**
   * <p>Indicates whether you want to distribute media files in the Microsoft Smooth Streaming
   * 			format using the origin that is associated with this cache behavior. If so, specify
   * 				<code>true</code>; if not, specify <code>false</code>. If you specify
   * 				<code>true</code> for <code>SmoothStreaming</code>, you can still distribute other
   * 			content using this cache behavior if the content matches the value of
   * 				<code>PathPattern</code>.</p>
   */
  SmoothStreaming?: boolean;

  /**
   * <p>Whether you want CloudFront to automatically compress certain files for this cache behavior.
   * 			If so, specify <code>true</code>; if not, specify <code>false</code>. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html">Serving
   * 				Compressed Files</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Compress?: boolean;

  /**
   * <p>A complex type that contains zero or more Lambda@Edge function associations for a
   * 			cache behavior.</p>
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociations;

  /**
   * <p>A list of CloudFront functions that are associated with this cache behavior. CloudFront functions
   * 			must be published to the <code>LIVE</code> stage to associate them with a cache
   * 			behavior.</p>
   */
  FunctionAssociations?: FunctionAssociations;

  /**
   * <p>The value of <code>ID</code> for the field-level encryption configuration that you
   * 			want CloudFront to use for encrypting specific fields of data for the default cache
   * 			behavior.</p>
   */
  FieldLevelEncryptionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration that is attached to
   * 			this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  RealtimeLogConfigArn?: string;

  /**
   * <p>The unique identifier of the cache policy that is attached to the default cache
   * 			behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>A <code>DefaultCacheBehavior</code> must include either a <code>CachePolicyId</code>
   * 			or <code>ForwardedValues</code>. We recommend that you use a
   * 			<code>CachePolicyId</code>.</p>
   */
  CachePolicyId?: string;

  /**
   * <p>The unique identifier of the origin request policy that is attached to the default
   * 			cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginRequestPolicyId?: string;

  /**
   * <p>The identifier for a response headers policy.</p>
   */
  ResponseHeadersPolicyId?: string;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html">Working with policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>If you want to include values in the cache key, use a cache policy. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>If you want to send values to the origin but not include them in the cache key, use an
   * 			origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>A <code>DefaultCacheBehavior</code> must include either a <code>CachePolicyId</code>
   * 			or <code>ForwardedValues</code>. We recommend that you use a
   * 			<code>CachePolicyId</code>.</p>
   *          <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP
   * 			headers.</p>
   */
  ForwardedValues?: ForwardedValues;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use the <code>MinTTL</code> field in a
   * 			cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been
   * 			updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long
   * 				Content Stays in an Edge Cache (Expiration)</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to
   * 			forward all headers to your origin (under <code>Headers</code>, if you specify
   * 				<code>1</code> for <code>Quantity</code> and <code>*</code> for
   * 			<code>Name</code>).</p>
   */
  MinTTL?: number;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use the <code>DefaultTTL</code> field
   * 			in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>The default amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been
   * 			updated. The value that you specify applies only when your origin does not add HTTP
   * 			headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>,
   * 			and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  DefaultTTL?: number;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use the <code>MaxTTL</code> field in a
   * 			cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been
   * 			updated. The value that you specify applies only when your origin adds HTTP headers such
   * 			as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   * 				<code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  MaxTTL?: number;
}

export enum HttpVersion {
  http1_1 = "http1.1",
  http2 = "http2",
  http2and3 = "http2and3",
  http3 = "http3",
}

/**
 * <p>A complex type that controls whether access logs are written for the
 * 			distribution.</p>
 */
export interface LoggingConfig {
  /**
   * <p>Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't
   * 			want to enable logging when you create a distribution or if you want to disable logging
   * 			for an existing distribution, specify <code>false</code> for <code>Enabled</code>, and
   * 			specify empty <code>Bucket</code> and <code>Prefix</code> elements. If you specify
   * 				<code>false</code> for <code>Enabled</code> but you specify values for
   * 				<code>Bucket</code>, <code>prefix</code>, and <code>IncludeCookies</code>, the
   * 			values are automatically deleted.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Specifies whether you want CloudFront to include cookies in access logs, specify
   * 				<code>true</code> for <code>IncludeCookies</code>. If you choose to include cookies
   * 			in logs, CloudFront logs all cookies regardless of how you configure the cache behaviors for
   * 			this distribution. If you don't want to include cookies when you create a distribution
   * 			or if you want to disable include cookies for an existing distribution, specify
   * 				<code>false</code> for <code>IncludeCookies</code>.</p>
   */
  IncludeCookies: boolean | undefined;

  /**
   * <p>The Amazon S3 bucket to store the access logs in, for example,
   * 				<code>myawslogbucket.s3.amazonaws.com</code>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>An optional string that you want CloudFront to prefix to the access log
   * 				<code>filenames</code> for this distribution, for example, <code>myprefix/</code>.
   * 			If you want to enable logging, but you don't want to specify a prefix, you still must
   * 			include an empty <code>Prefix</code> element in the <code>Logging</code> element.</p>
   */
  Prefix: string | undefined;
}

/**
 * <p>A complex data type for the status codes that you specify that, when returned by a
 * 			primary origin, trigger CloudFront to failover to a second origin.</p>
 */
export interface StatusCodes {
  /**
   * <p>The number of status codes.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The items (status codes) for an origin group.</p>
   */
  Items: number[] | undefined;
}

/**
 * <p>A complex data type that includes information about the failover criteria for an
 * 			origin group, including the status codes for which CloudFront will failover from the
 * 			primary origin to the second origin.</p>
 */
export interface OriginGroupFailoverCriteria {
  /**
   * <p>The status codes that, when returned from the primary origin, will trigger CloudFront
   * 			to failover to the second origin.</p>
   */
  StatusCodes: StatusCodes | undefined;
}

/**
 * <p>An origin in an origin group.</p>
 */
export interface OriginGroupMember {
  /**
   * <p>The ID for an origin in an origin group.</p>
   */
  OriginId: string | undefined;
}

/**
 * <p>A complex data type for the origins included in an origin group.</p>
 */
export interface OriginGroupMembers {
  /**
   * <p>The number of origins in an origin group.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>Items (origins) in an origin group.</p>
   */
  Items: OriginGroupMember[] | undefined;
}

/**
 * <p>An origin group includes two origins (a primary origin and a second origin to failover
 * 			to) and a failover criteria that you specify. You create an origin group to support
 * 			origin failover in CloudFront. When you create or update a distribution, you can
 * 			specifiy the origin group instead of a single origin, and CloudFront will failover from
 * 			the primary origin to the second origin under the failover conditions that you've
 * 			chosen.</p>
 */
export interface OriginGroup {
  /**
   * <p>The origin group's ID.</p>
   */
  Id: string | undefined;

  /**
   * <p>A complex type that contains information about the failover criteria for an origin
   * 			group.</p>
   */
  FailoverCriteria: OriginGroupFailoverCriteria | undefined;

  /**
   * <p>A complex type that contains information about the origins in an origin group.</p>
   */
  Members: OriginGroupMembers | undefined;
}

/**
 * <p>A complex data type for the origin groups specified for a distribution.</p>
 */
export interface OriginGroups {
  /**
   * <p>The number of origin groups.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The items (origin groups) in a distribution.</p>
   */
  Items?: OriginGroup[];
}

/**
 * <p>A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code>
 * 			elements, if any, for this distribution.</p>
 */
export interface OriginCustomHeader {
  /**
   * <p>The name of a header that you want CloudFront to send to your origin. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html">Adding
   * 				Custom Headers to Origin Requests</a> in the <i>
   * 				Amazon CloudFront Developer Guide</i>.</p>
   */
  HeaderName: string | undefined;

  /**
   * <p>The value for the header that you specified in the <code>HeaderName</code>
   * 			field.</p>
   */
  HeaderValue: string | undefined;
}

/**
 * <p>A complex type that contains the list of Custom Headers for each origin.</p>
 */
export interface CustomHeaders {
  /**
   * <p>The number of custom headers, if any, for this distribution.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>
   *             <b>Optional</b>: A list that contains one
   * 				<code>OriginCustomHeader</code> element for each custom header that you want CloudFront to
   * 			forward to the origin. If Quantity is <code>0</code>, omit <code>Items</code>.</p>
   */
  Items?: OriginCustomHeader[];
}

export enum OriginProtocolPolicy {
  http_only = "http-only",
  https_only = "https-only",
  match_viewer = "match-viewer",
}

export enum SslProtocol {
  SSLv3 = "SSLv3",
  TLSv1 = "TLSv1",
  TLSv1_1 = "TLSv1.1",
  TLSv1_2 = "TLSv1.2",
}

/**
 * <p>A complex type that contains information about the SSL/TLS protocols that CloudFront can use
 * 			when establishing an HTTPS connection with your origin.</p>
 */
export interface OriginSslProtocols {
  /**
   * <p>The number of SSL/TLS protocols that you want to allow CloudFront to use when establishing
   * 			an HTTPS connection with this origin.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list that contains allowed SSL/TLS protocols for this distribution.</p>
   */
  Items: (SslProtocol | string)[] | undefined;
}

/**
 * <p>A custom origin. A custom origin is any origin that is <i>not</i> an
 * 			Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with
 * 				static website hosting</a>
 *             <i>is</i> a custom origin.</p>
 */
export interface CustomOriginConfig {
  /**
   * <p>The HTTP port that CloudFront uses to connect to the origin. Specify the HTTP port that the
   * 			origin listens on.</p>
   */
  HTTPPort: number | undefined;

  /**
   * <p>The HTTPS port that CloudFront uses to connect to the origin. Specify the HTTPS port that
   * 			the origin listens on.</p>
   */
  HTTPSPort: number | undefined;

  /**
   * <p>Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin. Valid
   * 			values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>http-only</code> – CloudFront always uses HTTP to connect to the
   * 					origin.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>match-viewer</code> – CloudFront connects to the origin using the same
   * 					protocol that the viewer used to connect to CloudFront.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>https-only</code> – CloudFront always uses HTTPS to connect to the
   * 					origin.</p>
   *             </li>
   *          </ul>
   */
  OriginProtocolPolicy: OriginProtocolPolicy | string | undefined;

  /**
   * <p>Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin
   * 			over HTTPS. Valid values include <code>SSLv3</code>, <code>TLSv1</code>,
   * 				<code>TLSv1.1</code>, and <code>TLSv1.2</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginSSLProtocols">Minimum Origin SSL Protocol</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginSslProtocols?: OriginSslProtocols;

  /**
   * <p>Specifies how long, in seconds, CloudFront waits for a response from the origin. This is
   * 			also known as the <i>origin response timeout</i>. The minimum timeout is 1
   * 			second, the maximum is 60 seconds, and the default (if you don't specify otherwise) is
   * 			30 seconds.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout">Origin Response Timeout</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginReadTimeout?: number;

  /**
   * <p>Specifies how long, in seconds, CloudFront persists its connection to the origin. The
   * 			minimum timeout is 1 second, the maximum is 60 seconds, and the default (if you don't
   * 			specify otherwise) is 5 seconds.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginKeepaliveTimeout">Origin Keep-alive Timeout</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginKeepaliveTimeout?: number;
}

/**
 * <p>CloudFront Origin Shield.</p>
 *          <p>Using Origin Shield can help reduce the load on your origin. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface OriginShield {
  /**
   * <p>A flag that specifies whether Origin Shield is enabled.</p>
   *          <p>When it's enabled, CloudFront routes all requests through Origin Shield, which can help
   * 			protect your origin. When it's disabled, CloudFront might send requests directly to your
   * 			origin from multiple edge locations or regional edge caches.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The Amazon Web Services Region for Origin Shield.</p>
   *          <p>Specify the Amazon Web Services Region that has the lowest latency to your origin. To specify a
   * 			region, use the region code, not the region name. For example, specify the US East
   * 			(Ohio) region as <code>us-east-2</code>.</p>
   *          <p>When you enable CloudFront Origin Shield, you must specify the Amazon Web Services Region for Origin
   * 			Shield. For the list of Amazon Web Services Regions that you can specify, and for help choosing the
   * 			best Region for your origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region">Choosing the Amazon Web Services Region for Origin Shield</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginShieldRegion?: string;
}

/**
 * <p>A complex type that contains information about the Amazon S3 origin. If the origin is a
 * 			custom origin or an S3 bucket that is configured as a website endpoint, use the
 * 				<code>CustomOriginConfig</code> element instead.</p>
 */
export interface S3OriginConfig {
  /**
   * <p>The CloudFront origin access identity to associate with the origin. Use an origin access
   * 			identity to configure the origin so that viewers can <i>only</i> access
   * 			objects in an Amazon S3 bucket through CloudFront. The format of the value is:</p>
   *          <p>origin-access-identity/cloudfront/<i>ID-of-origin-access-identity</i>
   *          </p>
   *          <p>where <code>
   *                <i>ID-of-origin-access-identity</i>
   *             </code> is the value that
   * 			CloudFront returned in the <code>ID</code> element when you created the origin access
   * 			identity.</p>
   *          <p>If you want viewers to be able to access objects using either the CloudFront URL or the Amazon S3
   * 			URL, specify an empty <code>OriginAccessIdentity</code> element.</p>
   *          <p>To delete the origin access identity from an existing distribution, update the
   * 			distribution configuration and include an empty <code>OriginAccessIdentity</code>
   * 			element.</p>
   *          <p>To replace the origin access identity, update the distribution configuration and
   * 			specify the new origin access identity.</p>
   *          <p>For more information about the origin access identity, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private
   * 				Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginAccessIdentity: string | undefined;
}

/**
 * <p>An origin.</p>
 *          <p>An origin is the location where content is stored, and from which CloudFront gets content to
 * 			serve to viewers. To specify an origin:</p>
 *          <ul>
 *             <li>
 *                <p>Use <code>S3OriginConfig</code> to specify an Amazon S3 bucket that is not
 * 					configured with static website hosting.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>CustomOriginConfig</code> to specify all other kinds of origins,
 * 					including:</p>
 *                <ul>
 *                   <li>
 *                      <p>An Amazon S3 bucket that is configured with static website hosting</p>
 *                   </li>
 *                   <li>
 *                      <p>An Elastic Load Balancing load balancer</p>
 *                   </li>
 *                   <li>
 *                      <p>An AWS Elemental MediaPackage endpoint</p>
 *                   </li>
 *                   <li>
 *                      <p>An AWS Elemental MediaStore container</p>
 *                   </li>
 *                   <li>
 *                      <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind
 * 							of host</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>For the current maximum number of origins that you can specify per distribution, see
 * 				<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as
 * 			limits).</p>
 */
export interface Origin {
  /**
   * <p>A unique identifier for the origin. This value must be unique within the
   * 			distribution.</p>
   *          <p>Use this value to specify the <code>TargetOriginId</code> in a
   * 				<code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The domain name for the origin.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDomainName">Origin Domain Name</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>An optional path that CloudFront appends to the origin domain name when CloudFront requests
   * 			content from the origin.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginPath">Origin Path</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginPath?: string;

  /**
   * <p>A list of HTTP header names and values that CloudFront adds to the requests that it sends to
   * 			the origin.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html">Adding Custom Headers to Origin Requests</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  CustomHeaders?: CustomHeaders;

  /**
   * <p>Use this type to specify an origin that is an Amazon S3 bucket that is not configured with
   * 			static website hosting. To specify any other type of origin, including an Amazon S3 bucket
   * 			that is configured with static website hosting, use the <code>CustomOriginConfig</code>
   * 			type instead.</p>
   */
  S3OriginConfig?: S3OriginConfig;

  /**
   * <p>Use this type to specify an origin that is not an Amazon S3 bucket, with one exception. If
   * 			the Amazon S3 bucket is configured with static website hosting, use this type. If the Amazon S3
   * 			bucket is not configured with static website hosting, use the
   * 				<code>S3OriginConfig</code> type instead.</p>
   */
  CustomOriginConfig?: CustomOriginConfig;

  /**
   * <p>The number of times that CloudFront attempts to connect to the origin. The minimum number is
   * 			1, the maximum is 3, and the default (if you don't specify otherwise) is 3.</p>
   *          <p>For a custom origin (including an Amazon S3 bucket that's configured with static website
   * 			hosting), this value also specifies the number of times that CloudFront attempts to get a
   * 			response from the origin, in the case of an <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout">Origin Response Timeout</a>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-attempts">Origin Connection Attempts</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  ConnectionAttempts?: number;

  /**
   * <p>The number of seconds that CloudFront waits when trying to establish a connection to the
   * 			origin. The minimum timeout is 1 second, the maximum is 10 seconds, and the default (if
   * 			you don't specify otherwise) is 10 seconds.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-timeout">Origin Connection Timeout</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  ConnectionTimeout?: number;

  /**
   * <p>CloudFront Origin Shield. Using Origin Shield can help reduce the load on your
   * 			origin.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginShield?: OriginShield;

  /**
   * <p>The unique identifier of an origin access control for this origin.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html">Restricting access to an Amazon S3 origin</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginAccessControlId?: string;
}

/**
 * <p>Contains information about the origins for this distribution.</p>
 */
export interface Origins {
  /**
   * <p>The number of origins for this distribution.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of origins.</p>
   */
  Items: Origin[] | undefined;
}

export enum PriceClass {
  PriceClass_100 = "PriceClass_100",
  PriceClass_200 = "PriceClass_200",
  PriceClass_All = "PriceClass_All",
}

export enum GeoRestrictionType {
  blacklist = "blacklist",
  none = "none",
  whitelist = "whitelist",
}

/**
 * <p>A complex type that controls the countries in which your content is distributed. CloudFront
 * 			determines the location of your users using <code>MaxMind</code> GeoIP databases.
 * 		</p>
 */
export interface GeoRestriction {
  /**
   * <p>The method that you want to use to restrict distribution of your content by
   * 			country:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>none</code>: No geo restriction is enabled, meaning access to content is
   * 					not restricted by client geo location.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>blacklist</code>: The <code>Location</code> elements specify the
   * 					countries in which you don't want CloudFront to distribute your content.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>whitelist</code>: The <code>Location</code> elements specify the
   * 					countries in which you want CloudFront to distribute your content.</p>
   *             </li>
   *          </ul>
   */
  RestrictionType: GeoRestrictionType | string | undefined;

  /**
   * <p>When geo restriction is <code>enabled</code>, this is the number of countries in your
   * 				<code>whitelist</code> or <code>blacklist</code>. Otherwise, when it is not enabled,
   * 				<code>Quantity</code> is <code>0</code>, and you can omit <code>Items</code>.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains a <code>Location</code> element for each country in
   * 			which you want CloudFront either to distribute your content (<code>whitelist</code>) or not
   * 			distribute your content (<code>blacklist</code>).</p>
   *          <p>The <code>Location</code> element is a two-letter, uppercase country code for a
   * 			country that you want to include in your <code>blacklist</code> or
   * 				<code>whitelist</code>. Include one <code>Location</code> element for each
   * 			country.</p>
   *          <p>CloudFront and <code>MaxMind</code> both use <code>ISO 3166</code> country codes. For the
   * 			current list of countries and the corresponding codes, see <code>ISO
   * 				3166-1-alpha-2</code> code on the <i>International Organization for
   * 				Standardization</i> website. You can also refer to the country list on the
   * 			CloudFront console, which includes both country names and codes.</p>
   */
  Items?: string[];
}

/**
 * <p>A complex type that identifies ways in which you want to restrict distribution of your
 * 			content.</p>
 */
export interface Restrictions {
  /**
   * <p>A complex type that controls the countries in which your content is distributed. CloudFront
   * 			determines the location of your users using <code>MaxMind</code> GeoIP databases.</p>
   */
  GeoRestriction: GeoRestriction | undefined;
}

export enum MinimumProtocolVersion {
  SSLv3 = "SSLv3",
  TLSv1 = "TLSv1",
  TLSv1_1_2016 = "TLSv1.1_2016",
  TLSv1_2016 = "TLSv1_2016",
  TLSv1_2_2018 = "TLSv1.2_2018",
  TLSv1_2_2019 = "TLSv1.2_2019",
  TLSv1_2_2021 = "TLSv1.2_2021",
}

export enum SSLSupportMethod {
  sni_only = "sni-only",
  static_ip = "static-ip",
  vip = "vip",
}

/**
 * <p>A complex type that determines the distribution's SSL/TLS configuration for
 * 			communicating with viewers.</p>
 *          <p>If the distribution doesn't use <code>Aliases</code> (also known as alternate domain
 * 			names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as
 * 				<code>d111111abcdef8.cloudfront.net</code>—set
 * 				<code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other
 * 			fields empty.</p>
 *          <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use
 * 			the fields in this type to specify the following settings:</p>
 *          <ul>
 *             <li>
 *                <p>Which viewers the distribution accepts HTTPS connections from: only viewers
 * 					that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers
 * 					including those that don't support SNI.</p>
 *                <ul>
 *                   <li>
 *                      <p>To accept HTTPS connections from only viewers that support SNI, set
 * 								<code>SSLSupportMethod</code> to <code>sni-only</code>. This is
 * 							recommended. Most browsers and clients support SNI. </p>
 *                   </li>
 *                   <li>
 *                      <p>To accept HTTPS connections from all viewers, including those that
 * 							don't support SNI, set <code>SSLSupportMethod</code> to
 * 							<code>vip</code>. This is not recommended, and results in additional
 * 							monthly charges from CloudFront.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>The minimum SSL/TLS protocol version that the distribution can use to
 * 					communicate with viewers. To specify a minimum version, choose a value for
 * 						<code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the
 * 						<i>Amazon CloudFront Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">Certificate Manager
 * 						(ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Identity and Access Management (IAM)</a>. You specify the location by
 * 					setting a value in one of the following fields (not both):</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>ACMCertificateArn</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>IAMCertificateId</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>All distributions support HTTPS connections from viewers. To require viewers to use
 * 			HTTPS only, or to redirect them from HTTP to HTTPS, use
 * 				<code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or
 * 				<code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to
 * 			communicate with your custom origin, use <code>CustomOriginConfig</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface ViewerCertificate {
  /**
   * <p>If the distribution uses the CloudFront domain name such as
   * 				<code>d111111abcdef8.cloudfront.net</code>, set this field to
   * 			<code>true</code>.</p>
   *          <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), set
   * 			this field to <code>false</code> and specify values for the following fields:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACMCertificateArn</code> or <code>IAMCertificateId</code> (specify a
   * 					value for one, not both)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MinimumProtocolVersion</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSLSupportMethod</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CloudFrontDefaultCertificate?: boolean;

  /**
   * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and
   * 			the SSL/TLS certificate is stored in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Identity and Access Management (IAM)</a>, provide the ID of the IAM certificate.</p>
   *          <p>If you specify an IAM certificate ID, you must also specify values for
   * 				<code>MinimumProtocolVersion</code> and <code>SSLSupportMethod</code>. </p>
   */
  IAMCertificateId?: string;

  /**
   * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and
   * 			the SSL/TLS certificate is stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">Certificate Manager (ACM)</a>, provide the Amazon Resource Name
   * 			(ARN) of the ACM certificate. CloudFront only supports ACM certificates in the US East
   * 			(N. Virginia) Region (<code>us-east-1</code>).</p>
   *          <p>If you specify an ACM certificate ARN, you must also specify values for
   * 				<code>MinimumProtocolVersion</code> and <code>SSLSupportMethod</code>.</p>
   */
  ACMCertificateArn?: string;

  /**
   * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs),
   * 			specify which viewers the distribution accepts HTTPS connections from.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>sni-only</code> – The distribution accepts HTTPS connections from only
   * 					viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name
   * 						indication (SNI)</a>. This is recommended. Most browsers and clients
   * 					support SNI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vip</code> – The distribution accepts HTTPS connections from all viewers
   * 					including those that don't support SNI. This is not recommended, and results in
   * 					additional monthly charges from CloudFront.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>static-ip</code> - Do not specify this value unless your distribution
   * 					has been enabled for this feature by the CloudFront team. If you have a use case
   * 					that requires static IP addresses for a distribution, contact CloudFront through
   * 					the <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Support Center</a>.</p>
   *             </li>
   *          </ul>
   *          <p>If the distribution uses the CloudFront domain name such as
   * 				<code>d111111abcdef8.cloudfront.net</code>, don't set a value for this field.</p>
   */
  SSLSupportMethod?: SSLSupportMethod | string;

  /**
   * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs),
   * 			specify the security policy that you want CloudFront to use for HTTPS connections with
   * 			viewers. The security policy determines two settings:</p>
   *          <ul>
   *             <li>
   *                <p>The minimum SSL/TLS protocol that CloudFront can use to communicate with
   * 					viewers.</p>
   *             </li>
   *             <li>
   *                <p>The ciphers that CloudFront can use to encrypt the content that it returns to
   * 					viewers.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html#secure-connections-supported-ciphers">Supported Protocols and Ciphers Between Viewers and
   * 				CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          <note>
   *             <p>On the CloudFront console, this setting is called <b>Security
   * 					Policy</b>.</p>
   *          </note>
   *          <p>When you're using SNI only (you set <code>SSLSupportMethod</code> to
   * 				<code>sni-only</code>), you must specify <code>TLSv1</code> or higher.</p>
   *          <p>If the distribution uses the CloudFront domain name such as
   * 				<code>d111111abcdef8.cloudfront.net</code> (you set
   * 				<code>CloudFrontDefaultCertificate</code> to <code>true</code>), CloudFront automatically
   * 			sets the security policy to <code>TLSv1</code> regardless of the value that you set
   * 			here.</p>
   */
  MinimumProtocolVersion?: MinimumProtocolVersion | string;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use one of the following fields instead:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACMCertificateArn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IAMCertificateId</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CloudFrontDefaultCertificate</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Certificate?: string;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use one of the following fields instead:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACMCertificateArn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IAMCertificateId</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CloudFrontDefaultCertificate</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CertificateSource?: CertificateSource | string;
}

/**
 * <p>A distribution configuration.</p>
 */
export interface DistributionConfig {
  /**
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be
   * 			replayed.</p>
   *          <p>If the value of <code>CallerReference</code> is new (regardless of the content of the
   * 				<code>DistributionConfig</code> object), CloudFront creates a new distribution.</p>
   *          <p>If <code>CallerReference</code> is a value that you already sent in a previous request
   * 			to create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code>
   * 			error.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if
   * 			any, for this distribution.</p>
   */
  Aliases?: Aliases;

  /**
   * <p>The object that you want CloudFront to request from your origin (for example,
   * 				<code>index.html</code>) when a viewer requests the root URL for your distribution
   * 				(<code>https://www.example.com</code>) instead of an object in your distribution
   * 				(<code>https://www.example.com/product-description.html</code>). Specifying a
   * 			default root object avoids exposing the contents of your distribution.</p>
   *          <p>Specify only the object name, for example, <code>index.html</code>. Don't add a
   * 				<code>/</code> before the object name.</p>
   *          <p>If you don't want to specify a default root object when you create a distribution,
   * 			include an empty <code>DefaultRootObject</code> element.</p>
   *          <p>To delete the default root object from an existing distribution, update the
   * 			distribution configuration and include an empty <code>DefaultRootObject</code>
   * 			element.</p>
   *          <p>To replace the default root object, update the distribution configuration and specify
   * 			the new object.</p>
   *          <p>For more information about the default root object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html">Creating a
   * 				Default Root Object</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  DefaultRootObject?: string;

  /**
   * <p>A complex type that contains information about origins for this distribution.</p>
   */
  Origins: Origins | undefined;

  /**
   * <p>A complex type that contains information about origin groups for this
   * 			distribution.</p>
   */
  OriginGroups?: OriginGroups;

  /**
   * <p>A complex type that describes the default cache behavior if you don't specify a
   * 				<code>CacheBehavior</code> element or if files don't match any of the values of
   * 				<code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create
   * 			exactly one default cache behavior.</p>
   */
  DefaultCacheBehavior: DefaultCacheBehavior | undefined;

  /**
   * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.</p>
   */
  CacheBehaviors?: CacheBehaviors;

  /**
   * <p>A complex type that controls the following:</p>
   *          <ul>
   *             <li>
   *                <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom
   * 					error messages before returning the response to the viewer.</p>
   *             </li>
   *             <li>
   *                <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing
   * 				Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  CustomErrorResponses?: CustomErrorResponses;

  /**
   * <p>A comment to describe the distribution. The comment cannot be longer than
   * 			128 characters.</p>
   */
  Comment: string | undefined;

  /**
   * <p>A complex type that controls whether access logs are written for the
   * 			distribution.</p>
   *          <p>For more information about logging, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html">Access Logs</a> in
   * 			the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Logging?: LoggingConfig;

  /**
   * <p>The price class that corresponds with the maximum price that you want to pay for CloudFront
   * 			service. If you specify <code>PriceClass_All</code>, CloudFront responds to requests for your
   * 			objects from all CloudFront edge locations.</p>
   *          <p>If you specify a price class other than <code>PriceClass_All</code>, CloudFront serves your
   * 			objects from the CloudFront edge location that has the lowest latency among the edge locations
   * 			in your price class. Viewers who are in or near regions that are excluded from your
   * 			specified price class may encounter slower performance.</p>
   *          <p>For more information about price classes, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html">Choosing the Price
   * 				Class for a CloudFront Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.
   * 			For information about CloudFront pricing, including how price classes (such as Price Class
   * 			100) map to CloudFront regions, see <a href="http://aws.amazon.com/cloudfront/pricing/">Amazon CloudFront
   * 				Pricing</a>.</p>
   */
  PriceClass?: PriceClass | string;

  /**
   * <p>From this field, you can enable or disable the selected distribution.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>A complex type that determines the distribution's SSL/TLS configuration for
   * 			communicating with viewers.</p>
   */
  ViewerCertificate?: ViewerCertificate;

  /**
   * <p>A complex type that identifies ways in which you want to restrict distribution of your
   * 			content.</p>
   */
  Restrictions?: Restrictions;

  /**
   * <p>A unique identifier that specifies the WAF web ACL, if any, to associate with this
   * 			distribution. To specify a web ACL created using the latest version of WAF, use the
   * 			ACL ARN, for example
   * 				<code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>.
   * 			To specify a web ACL created using WAF Classic, use the ACL ID, for example
   * 				<code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p>
   *          <p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests
   * 			that are forwarded to CloudFront, and lets you control access to your content. Based on
   * 			conditions that you specify, such as the IP addresses that requests originate from or
   * 			the values of query strings, CloudFront responds to requests either with the requested content
   * 			or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a
   * 			custom error page when a request is blocked. For more information about WAF, see the
   * 				<a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer Guide</a>.</p>
   */
  WebACLId?: string;

  /**
   * <p>(Optional) Specify the maximum HTTP version(s) that you want viewers to use to
   * 			communicate with CloudFront. The default value for new web distributions is
   * 			<code>http2</code>. Viewers that don't support HTTP/2 automatically use an earlier HTTP
   * 			version.</p>
   *          <p>For viewers and CloudFront to use HTTP/2, viewers must support TLSv1.2 or later, and must
   * 			support Server Name Indication (SNI).</p>
   *          <p>For viewers and CloudFront to use HTTP/3, viewers must support TLSv1.3 and Server Name
   * 			Indication (SNI). CloudFront supports HTTP/3 connection migration to allow the viewer to
   * 			switch networks without losing connection. For more information about connection
   * 			migration, see <a href="https://www.rfc-editor.org/rfc/rfc9000.html#name-connection-migration">Connection Migration</a> at RFC 9000. For more information about supported
   * 			TLSv1.3 ciphers, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html">Supported protocols and ciphers between viewers and CloudFront</a>.</p>
   */
  HttpVersion?: HttpVersion | string;

  /**
   * <p>If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your
   * 			distribution, specify <code>true</code>. If you specify <code>false</code>, CloudFront
   * 			responds to IPv6 DNS requests with the DNS response code <code>NOERROR</code> and with
   * 			no IP addresses. This allows viewers to submit a second request, for an IPv4 address for
   * 			your distribution.</p>
   *          <p>In general, you should enable IPv6 if you have users on IPv6 networks who want to
   * 			access your content. However, if you're using signed URLs or signed cookies to restrict
   * 			access to your content, and if you're using a custom policy that includes the
   * 				<code>IpAddress</code> parameter to restrict the IP addresses that can access your
   * 			content, don't enable IPv6. If you want to restrict access to some content by IP address
   * 			and not restrict access to other content (or restrict access but not by IP address), you
   * 			can create two distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html">Creating a Signed URL Using a Custom Policy</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>If you're using an Route 53 Amazon Web Services Integration alias resource record set to route traffic to your CloudFront
   * 			distribution, you need to create a second alias resource record set when both of the
   * 			following are true:</p>
   *          <ul>
   *             <li>
   *                <p>You enable IPv6 for the distribution</p>
   *             </li>
   *             <li>
   *                <p>You're using alternate domain names in the URLs for your objects</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html">Routing
   * 				Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name</a> in the
   * 				<i>Route 53 Amazon Web Services Integration Developer Guide</i>.</p>
   *          <p>If you created a CNAME resource record set, either with Route 53 Amazon Web Services Integration or with another DNS
   * 			service, you don't need to make any changes. A CNAME record will route traffic to your
   * 			distribution regardless of the IP address format of the viewer request.</p>
   */
  IsIPV6Enabled?: boolean;

  /**
   * <p>The identifier of a continuous deployment policy. For more information, see
   * 				<code>CreateContinuousDeploymentPolicy</code>.</p>
   */
  ContinuousDeploymentPolicyId?: string;

  /**
   * <p>A Boolean that indicates whether this is a staging distribution. When this value is
   * 				<code>true</code>, this is a staging distribution. When this value is
   * 				<code>false</code>, this is not a staging distribution.</p>
   */
  Staging?: boolean;
}

/**
 * <p>A distribution tells CloudFront where you want content to be delivered from, and the details
 * 			about how to track and manage content delivery.</p>
 */
export interface Distribution {
  /**
   * <p>The distribution's identifier. For example: <code>E1U5RQF7T870K0</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The distribution's Amazon Resource Name (ARN).</p>
   */
  ARN: string | undefined;

  /**
   * <p>The distribution's status. When the status is <code>Deployed</code>, the
   * 			distribution's information is fully propagated to all CloudFront edge locations.</p>
   */
  Status: string | undefined;

  /**
   * <p>The date and time when the distribution was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The number of invalidation batches currently in progress.</p>
   */
  InProgressInvalidationBatches: number | undefined;

  /**
   * <p>The distribution's CloudFront domain name. For example:
   * 			<code>d111111abcdef8.cloudfront.net</code>.</p>
   */
  DomainName: string | undefined;

  /**
   * <important>
   *             <p>We recommend using <code>TrustedKeyGroups</code> instead of
   * 					<code>TrustedSigners</code>.</p>
   *          </important>
   *          <p>This field contains a list of Amazon Web Services account IDs and the active CloudFront key pairs in each
   * 			account that CloudFront can use to verify the signatures of signed URLs or signed
   * 			cookies.</p>
   */
  ActiveTrustedSigners?: ActiveTrustedSigners;

  /**
   * <p>This field contains a list of key groups and the public keys in each key group that
   * 			CloudFront can use to verify the signatures of signed URLs or signed cookies.</p>
   */
  ActiveTrustedKeyGroups?: ActiveTrustedKeyGroups;

  /**
   * <p>The distribution's configuration.</p>
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP)
   * 			recordal if they want to serve content publicly on an alternate domain name, also known
   * 			as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal
   * 			status for CNAMEs associated with distributions.</p>
   *          <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services
   * 				services in China</i>.</p>
   */
  AliasICPRecordals?: AliasICPRecordal[];
}

export interface CopyDistributionResult {
  /**
   * <p>A distribution tells CloudFront where you want content to be delivered from, and the details
   * 			about how to track and manage content delivery.</p>
   */
  Distribution?: Distribution;

  /**
   * <p>The URL of the staging distribution.</p>
   */
  Location?: string;

  /**
   * <p>The version identifier for the current version of the staging distribution.</p>
   */
  ETag?: string;
}

/**
 * <p>The caller reference you attempted to create the distribution with is associated with
 * 			another distribution.</p>
 */
export class DistributionAlreadyExists extends __BaseException {
  readonly name: "DistributionAlreadyExists" = "DistributionAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DistributionAlreadyExists, __BaseException>) {
    super({
      name: "DistributionAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DistributionAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified configuration for field-level encryption can't be associated with the
 * 			specified cache behavior.</p>
 */
export class IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior extends __BaseException {
  readonly name: "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior" =
    "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(
    opts: __ExceptionOptionType<IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior, __BaseException>
  ) {
    super({
      name: "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 */
export class InconsistentQuantities extends __BaseException {
  readonly name: "InconsistentQuantities" = "InconsistentQuantities";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InconsistentQuantities, __BaseException>) {
    super({
      name: "InconsistentQuantities",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InconsistentQuantities.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The default root object file name is too big or contains an invalid character.</p>
 */
export class InvalidDefaultRootObject extends __BaseException {
  readonly name: "InvalidDefaultRootObject" = "InvalidDefaultRootObject";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDefaultRootObject, __BaseException>) {
    super({
      name: "InvalidDefaultRootObject",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDefaultRootObject.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An invalid error code was specified.</p>
 */
export class InvalidErrorCode extends __BaseException {
  readonly name: "InvalidErrorCode" = "InvalidErrorCode";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidErrorCode, __BaseException>) {
    super({
      name: "InvalidErrorCode",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidErrorCode.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains forward cookies option which doesn't match with the expectation
 * 			for the <code>whitelisted</code> list of cookie names. Either list of cookie names has
 * 			been specified when not allowed or list of cookie names is missing when expected.</p>
 */
export class InvalidForwardCookies extends __BaseException {
  readonly name: "InvalidForwardCookies" = "InvalidForwardCookies";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidForwardCookies, __BaseException>) {
    super({
      name: "InvalidForwardCookies",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidForwardCookies.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A CloudFront function association is invalid.</p>
 */
export class InvalidFunctionAssociation extends __BaseException {
  readonly name: "InvalidFunctionAssociation" = "InvalidFunctionAssociation";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFunctionAssociation, __BaseException>) {
    super({
      name: "InvalidFunctionAssociation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFunctionAssociation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified geo restriction parameter is not valid.</p>
 */
export class InvalidGeoRestrictionParameter extends __BaseException {
  readonly name: "InvalidGeoRestrictionParameter" = "InvalidGeoRestrictionParameter";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGeoRestrictionParameter, __BaseException>) {
    super({
      name: "InvalidGeoRestrictionParameter",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGeoRestrictionParameter.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The headers specified are not valid for an Amazon S3 origin.</p>
 */
export class InvalidHeadersForS3Origin extends __BaseException {
  readonly name: "InvalidHeadersForS3Origin" = "InvalidHeadersForS3Origin";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidHeadersForS3Origin, __BaseException>) {
    super({
      name: "InvalidHeadersForS3Origin",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidHeadersForS3Origin.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The <code>If-Match</code> version is missing or not valid.</p>
 */
export class InvalidIfMatchVersion extends __BaseException {
  readonly name: "InvalidIfMatchVersion" = "InvalidIfMatchVersion";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIfMatchVersion, __BaseException>) {
    super({
      name: "InvalidIfMatchVersion",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIfMatchVersion.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified Lambda@Edge function association is invalid.</p>
 */
export class InvalidLambdaFunctionAssociation extends __BaseException {
  readonly name: "InvalidLambdaFunctionAssociation" = "InvalidLambdaFunctionAssociation";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLambdaFunctionAssociation, __BaseException>) {
    super({
      name: "InvalidLambdaFunctionAssociation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLambdaFunctionAssociation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The location code specified is not valid.</p>
 */
export class InvalidLocationCode extends __BaseException {
  readonly name: "InvalidLocationCode" = "InvalidLocationCode";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLocationCode, __BaseException>) {
    super({
      name: "InvalidLocationCode",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLocationCode.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The minimum protocol version specified is not valid.</p>
 */
export class InvalidMinimumProtocolVersion extends __BaseException {
  readonly name: "InvalidMinimumProtocolVersion" = "InvalidMinimumProtocolVersion";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMinimumProtocolVersion, __BaseException>) {
    super({
      name: "InvalidMinimumProtocolVersion",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMinimumProtocolVersion.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.</p>
 */
export class InvalidOrigin extends __BaseException {
  readonly name: "InvalidOrigin" = "InvalidOrigin";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOrigin, __BaseException>) {
    super({
      name: "InvalidOrigin",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOrigin.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The origin access control is not valid.</p>
 */
export class InvalidOriginAccessControl extends __BaseException {
  readonly name: "InvalidOriginAccessControl" = "InvalidOriginAccessControl";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOriginAccessControl, __BaseException>) {
    super({
      name: "InvalidOriginAccessControl",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOriginAccessControl.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The origin access identity is not valid or doesn't exist.</p>
 */
export class InvalidOriginAccessIdentity extends __BaseException {
  readonly name: "InvalidOriginAccessIdentity" = "InvalidOriginAccessIdentity";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOriginAccessIdentity, __BaseException>) {
    super({
      name: "InvalidOriginAccessIdentity",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOriginAccessIdentity.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The keep alive timeout specified for the origin is not valid.</p>
 */
export class InvalidOriginKeepaliveTimeout extends __BaseException {
  readonly name: "InvalidOriginKeepaliveTimeout" = "InvalidOriginKeepaliveTimeout";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOriginKeepaliveTimeout, __BaseException>) {
    super({
      name: "InvalidOriginKeepaliveTimeout",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOriginKeepaliveTimeout.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The read timeout specified for the origin is not valid.</p>
 */
export class InvalidOriginReadTimeout extends __BaseException {
  readonly name: "InvalidOriginReadTimeout" = "InvalidOriginReadTimeout";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOriginReadTimeout, __BaseException>) {
    super({
      name: "InvalidOriginReadTimeout",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOriginReadTimeout.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You cannot specify SSLv3 as the minimum protocol version if you only want to support
 * 			only clients that support Server Name Indication (SNI).</p>
 */
export class InvalidProtocolSettings extends __BaseException {
  readonly name: "InvalidProtocolSettings" = "InvalidProtocolSettings";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidProtocolSettings, __BaseException>) {
    super({
      name: "InvalidProtocolSettings",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidProtocolSettings.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The query string parameters specified are not valid.</p>
 */
export class InvalidQueryStringParameters extends __BaseException {
  readonly name: "InvalidQueryStringParameters" = "InvalidQueryStringParameters";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidQueryStringParameters, __BaseException>) {
    super({
      name: "InvalidQueryStringParameters",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidQueryStringParameters.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The relative path is too big, is not URL-encoded, or does not begin with a slash
 * 			(/).</p>
 */
export class InvalidRelativePath extends __BaseException {
  readonly name: "InvalidRelativePath" = "InvalidRelativePath";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRelativePath, __BaseException>) {
    super({
      name: "InvalidRelativePath",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRelativePath.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol
 * 			in your request, or omit the <code>RequiredProtocols</code> element from your
 * 			distribution configuration.</p>
 */
export class InvalidRequiredProtocol extends __BaseException {
  readonly name: "InvalidRequiredProtocol" = "InvalidRequiredProtocol";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequiredProtocol, __BaseException>) {
    super({
      name: "InvalidRequiredProtocol",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequiredProtocol.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A response code is not valid.</p>
 */
export class InvalidResponseCode extends __BaseException {
  readonly name: "InvalidResponseCode" = "InvalidResponseCode";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResponseCode, __BaseException>) {
    super({
      name: "InvalidResponseCode",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResponseCode.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The TTL order specified is not valid.</p>
 */
export class InvalidTTLOrder extends __BaseException {
  readonly name: "InvalidTTLOrder" = "InvalidTTLOrder";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTTLOrder, __BaseException>) {
    super({
      name: "InvalidTTLOrder",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTTLOrder.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A viewer certificate specified is not valid.</p>
 */
export class InvalidViewerCertificate extends __BaseException {
  readonly name: "InvalidViewerCertificate" = "InvalidViewerCertificate";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidViewerCertificate, __BaseException>) {
    super({
      name: "InvalidViewerCertificate",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidViewerCertificate.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A web ACL ID specified is not valid. To specify a web ACL created using the latest
 * 			version of WAF, use the ACL ARN, for example
 * 				<code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>.
 * 			To specify a web ACL created using WAF Classic, use the ACL ID, for example
 * 				<code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p>
 */
export class InvalidWebACLId extends __BaseException {
  readonly name: "InvalidWebACLId" = "InvalidWebACLId";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidWebACLId, __BaseException>) {
    super({
      name: "InvalidWebACLId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidWebACLId.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This operation requires a body. Ensure that the body is present and the
 * 				<code>Content-Type</code> header is set.</p>
 */
export class MissingBody extends __BaseException {
  readonly name: "MissingBody" = "MissingBody";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingBody, __BaseException>) {
    super({
      name: "MissingBody",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingBody.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The cache policy does not exist.</p>
 */
export class NoSuchCachePolicy extends __BaseException {
  readonly name: "NoSuchCachePolicy" = "NoSuchCachePolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchCachePolicy, __BaseException>) {
    super({
      name: "NoSuchCachePolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchCachePolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified configuration for field-level encryption doesn't exist.</p>
 */
export class NoSuchFieldLevelEncryptionConfig extends __BaseException {
  readonly name: "NoSuchFieldLevelEncryptionConfig" = "NoSuchFieldLevelEncryptionConfig";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchFieldLevelEncryptionConfig, __BaseException>) {
    super({
      name: "NoSuchFieldLevelEncryptionConfig",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchFieldLevelEncryptionConfig.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No origin exists with the specified <code>Origin Id</code>.</p>
 */
export class NoSuchOrigin extends __BaseException {
  readonly name: "NoSuchOrigin" = "NoSuchOrigin";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchOrigin, __BaseException>) {
    super({
      name: "NoSuchOrigin",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchOrigin.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The origin request policy does not exist.</p>
 */
export class NoSuchOriginRequestPolicy extends __BaseException {
  readonly name: "NoSuchOriginRequestPolicy" = "NoSuchOriginRequestPolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchOriginRequestPolicy, __BaseException>) {
    super({
      name: "NoSuchOriginRequestPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchOriginRequestPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The real-time log configuration does not exist.</p>
 */
export class NoSuchRealtimeLogConfig extends __BaseException {
  readonly name: "NoSuchRealtimeLogConfig" = "NoSuchRealtimeLogConfig";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchRealtimeLogConfig, __BaseException>) {
    super({
      name: "NoSuchRealtimeLogConfig",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchRealtimeLogConfig.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The response headers policy does not exist.</p>
 */
export class NoSuchResponseHeadersPolicy extends __BaseException {
  readonly name: "NoSuchResponseHeadersPolicy" = "NoSuchResponseHeadersPolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchResponseHeadersPolicy, __BaseException>) {
    super({
      name: "NoSuchResponseHeadersPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchResponseHeadersPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 */
export class PreconditionFailed extends __BaseException {
  readonly name: "PreconditionFailed" = "PreconditionFailed";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionFailed, __BaseException>) {
    super({
      name: "PreconditionFailed",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionFailed.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified real-time log configuration belongs to a different Amazon Web Services account.</p>
 */
export class RealtimeLogConfigOwnerMismatch extends __BaseException {
  readonly name: "RealtimeLogConfigOwnerMismatch" = "RealtimeLogConfigOwnerMismatch";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RealtimeLogConfigOwnerMismatch, __BaseException>) {
    super({
      name: "RealtimeLogConfigOwnerMismatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RealtimeLogConfigOwnerMismatch.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You cannot create more cache behaviors for the distribution.</p>
 */
export class TooManyCacheBehaviors extends __BaseException {
  readonly name: "TooManyCacheBehaviors" = "TooManyCacheBehaviors";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCacheBehaviors, __BaseException>) {
    super({
      name: "TooManyCacheBehaviors",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCacheBehaviors.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You cannot create anymore custom SSL/TLS certificates.</p>
 */
export class TooManyCertificates extends __BaseException {
  readonly name: "TooManyCertificates" = "TooManyCertificates";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCertificates, __BaseException>) {
    super({
      name: "TooManyCertificates",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCertificates.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains more cookie names in the whitelist than are allowed per cache
 * 			behavior.</p>
 */
export class TooManyCookieNamesInWhiteList extends __BaseException {
  readonly name: "TooManyCookieNamesInWhiteList" = "TooManyCookieNamesInWhiteList";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCookieNamesInWhiteList, __BaseException>) {
    super({
      name: "TooManyCookieNamesInWhiteList",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCookieNamesInWhiteList.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of distributions
 * 			allowed.</p>
 */
export class TooManyDistributions extends __BaseException {
  readonly name: "TooManyDistributions" = "TooManyDistributions";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributions, __BaseException>) {
    super({
      name: "TooManyDistributions",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributions.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of distributions have been associated with the specified cache
 * 			policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyDistributionsAssociatedToCachePolicy extends __BaseException {
  readonly name: "TooManyDistributionsAssociatedToCachePolicy" = "TooManyDistributionsAssociatedToCachePolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsAssociatedToCachePolicy, __BaseException>) {
    super({
      name: "TooManyDistributionsAssociatedToCachePolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsAssociatedToCachePolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of distributions have been associated with the specified
 * 			configuration for field-level encryption.</p>
 */
export class TooManyDistributionsAssociatedToFieldLevelEncryptionConfig extends __BaseException {
  readonly name: "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig" =
    "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(
    opts: __ExceptionOptionType<TooManyDistributionsAssociatedToFieldLevelEncryptionConfig, __BaseException>
  ) {
    super({
      name: "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsAssociatedToFieldLevelEncryptionConfig.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of distributions that reference this key group is more than the maximum
 * 			allowed. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyDistributionsAssociatedToKeyGroup extends __BaseException {
  readonly name: "TooManyDistributionsAssociatedToKeyGroup" = "TooManyDistributionsAssociatedToKeyGroup";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsAssociatedToKeyGroup, __BaseException>) {
    super({
      name: "TooManyDistributionsAssociatedToKeyGroup",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsAssociatedToKeyGroup.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of distributions have been associated with the specified origin
 * 			request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyDistributionsAssociatedToOriginRequestPolicy extends __BaseException {
  readonly name: "TooManyDistributionsAssociatedToOriginRequestPolicy" =
    "TooManyDistributionsAssociatedToOriginRequestPolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsAssociatedToOriginRequestPolicy, __BaseException>) {
    super({
      name: "TooManyDistributionsAssociatedToOriginRequestPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsAssociatedToOriginRequestPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of distributions have been associated with the specified response
 * 			headers policy.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyDistributionsAssociatedToResponseHeadersPolicy extends __BaseException {
  readonly name: "TooManyDistributionsAssociatedToResponseHeadersPolicy" =
    "TooManyDistributionsAssociatedToResponseHeadersPolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsAssociatedToResponseHeadersPolicy, __BaseException>) {
    super({
      name: "TooManyDistributionsAssociatedToResponseHeadersPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsAssociatedToResponseHeadersPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of distributions that are associated with a CloudFront
 * 			function. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyDistributionsWithFunctionAssociations extends __BaseException {
  readonly name: "TooManyDistributionsWithFunctionAssociations" = "TooManyDistributionsWithFunctionAssociations";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsWithFunctionAssociations, __BaseException>) {
    super({
      name: "TooManyDistributionsWithFunctionAssociations",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsWithFunctionAssociations.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Processing your request would cause the maximum number of distributions with
 * 			Lambda@Edge function associations per owner to be exceeded.</p>
 */
export class TooManyDistributionsWithLambdaAssociations extends __BaseException {
  readonly name: "TooManyDistributionsWithLambdaAssociations" = "TooManyDistributionsWithLambdaAssociations";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsWithLambdaAssociations, __BaseException>) {
    super({
      name: "TooManyDistributionsWithLambdaAssociations",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsWithLambdaAssociations.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of distributions have been associated with the specified
 * 			Lambda@Edge function.</p>
 */
export class TooManyDistributionsWithSingleFunctionARN extends __BaseException {
  readonly name: "TooManyDistributionsWithSingleFunctionARN" = "TooManyDistributionsWithSingleFunctionARN";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsWithSingleFunctionARN, __BaseException>) {
    super({
      name: "TooManyDistributionsWithSingleFunctionARN",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsWithSingleFunctionARN.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of CloudFront function associations for this
 * 			distribution. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyFunctionAssociations extends __BaseException {
  readonly name: "TooManyFunctionAssociations" = "TooManyFunctionAssociations";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFunctionAssociations, __BaseException>) {
    super({
      name: "TooManyFunctionAssociations",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFunctionAssociations.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains too many headers in forwarded values.</p>
 */
export class TooManyHeadersInForwardedValues extends __BaseException {
  readonly name: "TooManyHeadersInForwardedValues" = "TooManyHeadersInForwardedValues";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyHeadersInForwardedValues, __BaseException>) {
    super({
      name: "TooManyHeadersInForwardedValues",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyHeadersInForwardedValues.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of key groups referenced by this distribution is more than the maximum
 * 			allowed. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyKeyGroupsAssociatedToDistribution extends __BaseException {
  readonly name: "TooManyKeyGroupsAssociatedToDistribution" = "TooManyKeyGroupsAssociatedToDistribution";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyKeyGroupsAssociatedToDistribution, __BaseException>) {
    super({
      name: "TooManyKeyGroupsAssociatedToDistribution",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyKeyGroupsAssociatedToDistribution.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains more Lambda@Edge function associations than are allowed per
 * 			distribution.</p>
 */
export class TooManyLambdaFunctionAssociations extends __BaseException {
  readonly name: "TooManyLambdaFunctionAssociations" = "TooManyLambdaFunctionAssociations";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyLambdaFunctionAssociations, __BaseException>) {
    super({
      name: "TooManyLambdaFunctionAssociations",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyLambdaFunctionAssociations.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains too many origin custom headers.</p>
 */
export class TooManyOriginCustomHeaders extends __BaseException {
  readonly name: "TooManyOriginCustomHeaders" = "TooManyOriginCustomHeaders";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyOriginCustomHeaders, __BaseException>) {
    super({
      name: "TooManyOriginCustomHeaders",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyOriginCustomHeaders.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of origin groups
 * 			allowed.</p>
 */
export class TooManyOriginGroupsPerDistribution extends __BaseException {
  readonly name: "TooManyOriginGroupsPerDistribution" = "TooManyOriginGroupsPerDistribution";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyOriginGroupsPerDistribution, __BaseException>) {
    super({
      name: "TooManyOriginGroupsPerDistribution",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyOriginGroupsPerDistribution.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You cannot create more origins for the distribution.</p>
 */
export class TooManyOrigins extends __BaseException {
  readonly name: "TooManyOrigins" = "TooManyOrigins";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyOrigins, __BaseException>) {
    super({
      name: "TooManyOrigins",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyOrigins.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains too many query string parameters.</p>
 */
export class TooManyQueryStringParameters extends __BaseException {
  readonly name: "TooManyQueryStringParameters" = "TooManyQueryStringParameters";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyQueryStringParameters, __BaseException>) {
    super({
      name: "TooManyQueryStringParameters",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyQueryStringParameters.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains more trusted signers than are allowed per distribution.</p>
 */
export class TooManyTrustedSigners extends __BaseException {
  readonly name: "TooManyTrustedSigners" = "TooManyTrustedSigners";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTrustedSigners, __BaseException>) {
    super({
      name: "TooManyTrustedSigners",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTrustedSigners.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified key group does not exist.</p>
 */
export class TrustedKeyGroupDoesNotExist extends __BaseException {
  readonly name: "TrustedKeyGroupDoesNotExist" = "TrustedKeyGroupDoesNotExist";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrustedKeyGroupDoesNotExist, __BaseException>) {
    super({
      name: "TrustedKeyGroupDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrustedKeyGroupDoesNotExist.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of your trusted signers don't exist.</p>
 */
export class TrustedSignerDoesNotExist extends __BaseException {
  readonly name: "TrustedSignerDoesNotExist" = "TrustedSignerDoesNotExist";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrustedSignerDoesNotExist, __BaseException>) {
    super({
      name: "TrustedSignerDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrustedSignerDoesNotExist.prototype);
    this.Message = opts.Message;
  }
}

export interface CreateCachePolicyRequest {
  /**
   * <p>A cache policy configuration.</p>
   */
  CachePolicyConfig: CachePolicyConfig | undefined;
}

export interface CreateCachePolicyResult {
  /**
   * <p>A cache policy.</p>
   */
  CachePolicy?: CachePolicy;

  /**
   * <p>The fully qualified URI of the cache policy just created.</p>
   */
  Location?: string;

  /**
   * <p>The current version of the cache policy.</p>
   */
  ETag?: string;
}

/**
 * <p>You have reached the maximum number of cache policies for this Amazon Web Services account. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyCachePolicies extends __BaseException {
  readonly name: "TooManyCachePolicies" = "TooManyCachePolicies";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCachePolicies, __BaseException>) {
    super({
      name: "TooManyCachePolicies",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCachePolicies.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of cookies in the cache policy exceeds the maximum. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyCookiesInCachePolicy extends __BaseException {
  readonly name: "TooManyCookiesInCachePolicy" = "TooManyCookiesInCachePolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCookiesInCachePolicy, __BaseException>) {
    super({
      name: "TooManyCookiesInCachePolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCookiesInCachePolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of headers in the cache policy exceeds the maximum. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyHeadersInCachePolicy extends __BaseException {
  readonly name: "TooManyHeadersInCachePolicy" = "TooManyHeadersInCachePolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyHeadersInCachePolicy, __BaseException>) {
    super({
      name: "TooManyHeadersInCachePolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyHeadersInCachePolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of query strings in the cache policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyQueryStringsInCachePolicy extends __BaseException {
  readonly name: "TooManyQueryStringsInCachePolicy" = "TooManyQueryStringsInCachePolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyQueryStringsInCachePolicy, __BaseException>) {
    super({
      name: "TooManyQueryStringsInCachePolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyQueryStringsInCachePolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>If the <code>CallerReference</code> is a value you already sent in a previous request
 * 			to create an identity but the content of the
 * 				<code>CloudFrontOriginAccessIdentityConfig</code> is different from the original
 * 			request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error.
 * 		</p>
 */
export class CloudFrontOriginAccessIdentityAlreadyExists extends __BaseException {
  readonly name: "CloudFrontOriginAccessIdentityAlreadyExists" = "CloudFrontOriginAccessIdentityAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudFrontOriginAccessIdentityAlreadyExists, __BaseException>) {
    super({
      name: "CloudFrontOriginAccessIdentityAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudFrontOriginAccessIdentityAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Origin access identity configuration. Send a <code>GET</code> request to the
 * 					<code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code>
 * 			resource.</p>
 */
export interface CloudFrontOriginAccessIdentityConfig {
  /**
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be
   * 			replayed.</p>
   *          <p>If the value of <code>CallerReference</code> is new (regardless of the content of the
   * 				<code>CloudFrontOriginAccessIdentityConfig</code> object), a new origin access
   * 			identity is created.</p>
   *          <p>If the <code>CallerReference</code> is a value already sent in a previous identity
   * 			request, and the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is
   * 			identical to the original request (ignoring white space), the response includes the same
   * 			information returned to the original request.</p>
   *          <p>If the <code>CallerReference</code> is a value you already sent in a previous request
   * 			to create an identity, but the content of the
   * 				<code>CloudFrontOriginAccessIdentityConfig</code> is different from the original
   * 			request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error.
   * 		</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>A comment to describe the origin access identity. The comment cannot be longer than
   * 			128 characters.</p>
   */
  Comment: string | undefined;
}

/**
 * <p>The request to create a new origin access identity (OAI). An origin access identity is
 * 			a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all
 * 			or just some of your Amazon S3 content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html"> Restricting Access to Amazon S3 Content by Using an Origin Access Identity</a> in
 * 			the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface CreateCloudFrontOriginAccessIdentityRequest {
  /**
   * <p>The current configuration information for the identity.</p>
   */
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig | undefined;
}

/**
 * <p>CloudFront origin access identity.</p>
 */
export interface CloudFrontOriginAccessIdentity {
  /**
   * <p>The ID for the origin access identity, for example, <code>E74FTE3AJFJ256A</code>.
   * 		</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon S3 canonical user ID for the origin access identity, used when giving the origin
   * 			access identity read permission to an object in Amazon S3.</p>
   */
  S3CanonicalUserId: string | undefined;

  /**
   * <p>The current configuration information for the identity.</p>
   */
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateCloudFrontOriginAccessIdentityResult {
  /**
   * <p>The origin access identity's information.</p>
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;

  /**
   * <p>The fully qualified URI of the new origin access identity just created.</p>
   */
  Location?: string;

  /**
   * <p>The current version of the origin access identity created.</p>
   */
  ETag?: string;
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of origin access
 * 			identities allowed.</p>
 */
export class TooManyCloudFrontOriginAccessIdentities extends __BaseException {
  readonly name: "TooManyCloudFrontOriginAccessIdentities" = "TooManyCloudFrontOriginAccessIdentities";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCloudFrontOriginAccessIdentities, __BaseException>) {
    super({
      name: "TooManyCloudFrontOriginAccessIdentities",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCloudFrontOriginAccessIdentities.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A continuous deployment policy with this configuration already exists.</p>
 */
export class ContinuousDeploymentPolicyAlreadyExists extends __BaseException {
  readonly name: "ContinuousDeploymentPolicyAlreadyExists" = "ContinuousDeploymentPolicyAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContinuousDeploymentPolicyAlreadyExists, __BaseException>) {
    super({
      name: "ContinuousDeploymentPolicyAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContinuousDeploymentPolicyAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The CloudFront domain name of the staging distribution.</p>
 */
export interface StagingDistributionDnsNames {
  /**
   * <p>The number of CloudFront domain names in your staging distribution.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The CloudFront domain name of the staging distribution.</p>
   */
  Items?: string[];
}

/**
 * <p>This configuration determines which HTTP requests are sent to the staging
 * 			distribution. If the HTTP request contains a header and value that matches what you
 * 			specify here, the request is sent to the staging distribution. Otherwise the request is
 * 			sent to the primary distribution.</p>
 */
export interface ContinuousDeploymentSingleHeaderConfig {
  /**
   * <p>The request header name that you want CloudFront to send to your staging
   * 			distribution. The header must contain the prefix <code>aws-cf-cd-</code>.</p>
   */
  Header: string | undefined;

  /**
   * <p>The request header value.</p>
   */
  Value: string | undefined;
}

/**
 * <p>Session stickiness provides the ability to define multiple requests from a single
 * 			viewer as a single session. This prevents the potentially inconsistent experience of
 * 			sending some of a given user's requests to your staging distribution, while others are
 * 			sent to your primary distribution. Define the session duration using TTL values.</p>
 */
export interface SessionStickinessConfig {
  /**
   * <p>The amount of time after which you want sessions to cease if no requests are
   * 			received. Allowed values are 300–3600 seconds (5–60 minutes).</p>
   *          <p>The value must be less than or equal to <code>MaximumTTL</code>.</p>
   */
  IdleTTL: number | undefined;

  /**
   * <p>The maximum amount of time to consider requests from the viewer as being part of the
   * 			same session. Allowed values are 300–3600 seconds (5–60 minutes).</p>
   *          <p>The value must be less than or equal to <code>IdleTTL</code>.</p>
   */
  MaximumTTL: number | undefined;
}

/**
 * <p>Contains the percentage of traffic to send to a staging distribution.</p>
 */
export interface ContinuousDeploymentSingleWeightConfig {
  /**
   * <p>The percentage of traffic to send to a staging distribution, expressed as a decimal
   * 			number between 0 and .15.</p>
   */
  Weight: number | undefined;

  /**
   * <p>Session stickiness provides the ability to define multiple requests from a single
   * 			viewer as a single session. This prevents the potentially inconsistent experience of
   * 			sending some of a given user's requests to your staging distribution, while others are
   * 			sent to your primary distribution. Define the session duration using TTL values.</p>
   */
  SessionStickinessConfig?: SessionStickinessConfig;
}

export enum ContinuousDeploymentPolicyType {
  SingleHeader = "SingleHeader",
  SingleWeight = "SingleWeight",
}

/**
 * <p>The traffic configuration of your continuous deployment.</p>
 */
export interface TrafficConfig {
  /**
   * <p>Contains the percentage of traffic to send to the staging distribution.</p>
   */
  SingleWeightConfig?: ContinuousDeploymentSingleWeightConfig;

  /**
   * <p>Determines which HTTP requests are sent to the staging distribution.</p>
   */
  SingleHeaderConfig?: ContinuousDeploymentSingleHeaderConfig;

  /**
   * <p>The type of traffic configuration.</p>
   */
  Type: ContinuousDeploymentPolicyType | string | undefined;
}

/**
 * <p>Contains the configuration for a continuous deployment policy.</p>
 */
export interface ContinuousDeploymentPolicyConfig {
  /**
   * <p>The CloudFront domain name of the staging distribution. For example:
   * 				<code>d111111abcdef8.cloudfront.net</code>.</p>
   */
  StagingDistributionDnsNames: StagingDistributionDnsNames | undefined;

  /**
   * <p>A Boolean that indicates whether this continuous deployment policy is enabled (in
   * 			effect). When this value is <code>true</code>, this policy is enabled and in effect.
   * 			When this value is <code>false</code>, this policy is not enabled and has no
   * 			effect.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Contains the parameters for routing production traffic from your primary to staging
   * 			distributions.</p>
   */
  TrafficConfig?: TrafficConfig;
}

export interface CreateContinuousDeploymentPolicyRequest {
  /**
   * <p>Contains the configuration for a continuous deployment policy.</p>
   */
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig | undefined;
}

/**
 * <p>A continuous deployment policy.</p>
 */
export interface ContinuousDeploymentPolicy {
  /**
   * <p>The identifier of the continuous deployment policy.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date and time the continuous deployment policy was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Contains the configuration for a continuous deployment policy.</p>
   */
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig | undefined;
}

export interface CreateContinuousDeploymentPolicyResult {
  /**
   * <p>A continuous deployment policy.</p>
   */
  ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy;

  /**
   * <p>The location of the continuous deployment policy.</p>
   */
  Location?: string;

  /**
   * <p>The version identifier for the current version of the continuous deployment
   * 			policy.</p>
   */
  ETag?: string;
}

/**
 * <p>A continuous deployment policy for this staging distribution already exists.</p>
 */
export class StagingDistributionInUse extends __BaseException {
  readonly name: "StagingDistributionInUse" = "StagingDistributionInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StagingDistributionInUse, __BaseException>) {
    super({
      name: "StagingDistributionInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StagingDistributionInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of continuous deployment policies for this
 * 			Amazon Web Services account.</p>
 */
export class TooManyContinuousDeploymentPolicies extends __BaseException {
  readonly name: "TooManyContinuousDeploymentPolicies" = "TooManyContinuousDeploymentPolicies";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyContinuousDeploymentPolicies, __BaseException>) {
    super({
      name: "TooManyContinuousDeploymentPolicies",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyContinuousDeploymentPolicies.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You cannot delete a continuous deployment policy that is associated with a primary
 * 			distribution.</p>
 */
export class ContinuousDeploymentPolicyInUse extends __BaseException {
  readonly name: "ContinuousDeploymentPolicyInUse" = "ContinuousDeploymentPolicyInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContinuousDeploymentPolicyInUse, __BaseException>) {
    super({
      name: "ContinuousDeploymentPolicyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContinuousDeploymentPolicyInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request to create a new distribution.</p>
 */
export interface CreateDistributionRequest {
  /**
   * <p>The distribution's configuration information.</p>
   */
  DistributionConfig: DistributionConfig | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateDistributionResult {
  /**
   * <p>The distribution's information.</p>
   */
  Distribution?: Distribution;

  /**
   * <p>The fully qualified URI of the new distribution resource just created.</p>
   */
  Location?: string;

  /**
   * <p>The current version of the distribution created.</p>
   */
  ETag?: string;
}

/**
 * <p>An origin cannot contain both an origin access control (OAC) and an origin access
 * 			identity (OAI).</p>
 */
export class IllegalOriginAccessConfiguration extends __BaseException {
  readonly name: "IllegalOriginAccessConfiguration" = "IllegalOriginAccessConfiguration";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalOriginAccessConfiguration, __BaseException>) {
    super({
      name: "IllegalOriginAccessConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalOriginAccessConfiguration.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An origin access control is associated with an origin whose domain name is not
 * 			supported.</p>
 */
export class InvalidDomainNameForOriginAccessControl extends __BaseException {
  readonly name: "InvalidDomainNameForOriginAccessControl" = "InvalidDomainNameForOriginAccessControl";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDomainNameForOriginAccessControl, __BaseException>) {
    super({
      name: "InvalidDomainNameForOriginAccessControl",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDomainNameForOriginAccessControl.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The continuous deployment policy doesn't exist.</p>
 */
export class NoSuchContinuousDeploymentPolicy extends __BaseException {
  readonly name: "NoSuchContinuousDeploymentPolicy" = "NoSuchContinuousDeploymentPolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchContinuousDeploymentPolicy, __BaseException>) {
    super({
      name: "NoSuchContinuousDeploymentPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchContinuousDeploymentPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of distributions have been associated with the specified origin
 * 			access control.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyDistributionsAssociatedToOriginAccessControl extends __BaseException {
  readonly name: "TooManyDistributionsAssociatedToOriginAccessControl" =
    "TooManyDistributionsAssociatedToOriginAccessControl";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsAssociatedToOriginAccessControl, __BaseException>) {
    super({
      name: "TooManyDistributionsAssociatedToOriginAccessControl",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsAssociatedToOriginAccessControl.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A complex type that contains <code>Tag</code> key and <code>Tag</code> value.</p>
 */
export interface Tag {
  /**
   * <p>A string that contains <code>Tag</code> key.</p>
   *          <p>The string length should be between 1 and 128 characters. Valid characters include
   * 				<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special
   * 			characters <code>_ - . : / = + @</code>.</p>
   */
  Key: string | undefined;

  /**
   * <p>A string that contains an optional <code>Tag</code> value.</p>
   *          <p>The string length should be between 0 and 256 characters. Valid characters include
   * 				<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special
   * 			characters <code>_ - . : / = + @</code>.</p>
   */
  Value?: string;
}

/**
 * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
 */
export interface Tags {
  /**
   * <p>A complex type that contains <code>Tag</code> elements.</p>
   */
  Items?: Tag[];
}

/**
 * <p>A distribution Configuration and a list of tags to be associated with the
 * 			distribution.</p>
 */
export interface DistributionConfigWithTags {
  /**
   * <p>A distribution configuration.</p>
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: Tags | undefined;
}

/**
 * <p>The request to create a new distribution with tags.</p>
 */
export interface CreateDistributionWithTagsRequest {
  /**
   * <p>The distribution's configuration information.</p>
   */
  DistributionConfigWithTags: DistributionConfigWithTags | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateDistributionWithTagsResult {
  /**
   * <p>The distribution's information.</p>
   */
  Distribution?: Distribution;

  /**
   * <p>The fully qualified URI of the new distribution resource just created.</p>
   */
  Location?: string;

  /**
   * <p>The current version of the distribution created.</p>
   */
  ETag?: string;
}

/**
 * <p>The tagging specified is not valid.</p>
 */
export class InvalidTagging extends __BaseException {
  readonly name: "InvalidTagging" = "InvalidTagging";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagging, __BaseException>) {
    super({
      name: "InvalidTagging",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagging.prototype);
    this.Message = opts.Message;
  }
}

export enum Format {
  URLEncoded = "URLEncoded",
}

/**
 * <p>A field-level encryption content type profile.</p>
 */
export interface ContentTypeProfile {
  /**
   * <p>The format for a field-level encryption content type-profile mapping.</p>
   */
  Format: Format | string | undefined;

  /**
   * <p>The profile ID for a field-level encryption content type-profile mapping.</p>
   */
  ProfileId?: string;

  /**
   * <p>The content type for a field-level encryption content type-profile mapping.</p>
   */
  ContentType: string | undefined;
}

/**
 * <p>Field-level encryption content type-profile.</p>
 */
export interface ContentTypeProfiles {
  /**
   * <p>The number of field-level encryption content type-profile mappings.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>Items in a field-level encryption content type-profile mapping.</p>
   */
  Items?: ContentTypeProfile[];
}

/**
 * <p>The configuration for a field-level encryption content type-profile mapping.</p>
 */
export interface ContentTypeProfileConfig {
  /**
   * <p>The setting in a field-level encryption content type-profile mapping that specifies
   * 			what to do when an unknown content type is provided for the profile. If true, content is
   * 			forwarded without being encrypted when the content type is unknown. If false (the
   * 			default), an error is returned when the content type is unknown.</p>
   */
  ForwardWhenContentTypeIsUnknown: boolean | undefined;

  /**
   * <p>The configuration for a field-level encryption content type-profile.</p>
   */
  ContentTypeProfiles?: ContentTypeProfiles;
}

/**
 * <p>Query argument-profile mapping for field-level encryption.</p>
 */
export interface QueryArgProfile {
  /**
   * <p>Query argument for field-level encryption query argument-profile mapping.</p>
   */
  QueryArg: string | undefined;

  /**
   * <p>ID of profile to use for field-level encryption query argument-profile mapping</p>
   */
  ProfileId: string | undefined;
}

/**
 * <p>Query argument-profile mapping for field-level encryption.</p>
 */
export interface QueryArgProfiles {
  /**
   * <p>Number of profiles for query argument-profile mapping for field-level
   * 			encryption.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>Number of items for query argument-profile mapping for field-level encryption.</p>
   */
  Items?: QueryArgProfile[];
}

/**
 * <p>Configuration for query argument-profile mapping for field-level encryption.</p>
 */
export interface QueryArgProfileConfig {
  /**
   * <p>Flag to set if you want a request to be forwarded to the origin even if the profile
   * 			specified by the field-level encryption query argument, fle-profile, is unknown.</p>
   */
  ForwardWhenQueryArgProfileIsUnknown: boolean | undefined;

  /**
   * <p>Profiles specified for query argument-profile mapping for field-level
   * 			encryption.</p>
   */
  QueryArgProfiles?: QueryArgProfiles;
}

/**
 * <p>A complex data type that includes the profile configurations specified for field-level
 * 			encryption.</p>
 */
export interface FieldLevelEncryptionConfig {
  /**
   * <p>A unique number that ensures the request can't be replayed.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>An optional comment about the configuration. The comment cannot be longer than 128
   * 			characters.</p>
   */
  Comment?: string;

  /**
   * <p>A complex data type that specifies when to forward content if a profile isn't found
   * 			and the profile that can be provided as a query argument in a request.</p>
   */
  QueryArgProfileConfig?: QueryArgProfileConfig;

  /**
   * <p>A complex data type that specifies when to forward content if a content type isn't
   * 			recognized and profiles to use as by default in a request if a query argument doesn't
   * 			specify a profile to use.</p>
   */
  ContentTypeProfileConfig?: ContentTypeProfileConfig;
}

export interface CreateFieldLevelEncryptionConfigRequest {
  /**
   * <p>The request to create a new field-level encryption configuration.</p>
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;
}

/**
 * <p>A complex data type that includes the profile configurations and other options
 * 			specified for field-level encryption.</p>
 */
export interface FieldLevelEncryption {
  /**
   * <p>The configuration ID for a field-level encryption configuration which includes a set
   * 			of profiles that specify certain selected data fields to be encrypted by specific public
   * 			keys.</p>
   */
  Id: string | undefined;

  /**
   * <p>The last time the field-level encryption configuration was changed.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A complex data type that includes the profile configurations specified for field-level
   * 			encryption.</p>
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;
}

export interface CreateFieldLevelEncryptionConfigResult {
  /**
   * <p>Returned when you create a new field-level encryption configuration.</p>
   */
  FieldLevelEncryption?: FieldLevelEncryption;

  /**
   * <p>The fully qualified URI of the new configuration resource just created.</p>
   */
  Location?: string;

  /**
   * <p>The current version of the field level encryption configuration. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * <p>The specified configuration for field-level encryption already exists.</p>
 */
export class FieldLevelEncryptionConfigAlreadyExists extends __BaseException {
  readonly name: "FieldLevelEncryptionConfigAlreadyExists" = "FieldLevelEncryptionConfigAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FieldLevelEncryptionConfigAlreadyExists, __BaseException>) {
    super({
      name: "FieldLevelEncryptionConfigAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FieldLevelEncryptionConfigAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified profile for field-level encryption doesn't exist.</p>
 */
export class NoSuchFieldLevelEncryptionProfile extends __BaseException {
  readonly name: "NoSuchFieldLevelEncryptionProfile" = "NoSuchFieldLevelEncryptionProfile";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchFieldLevelEncryptionProfile, __BaseException>) {
    super({
      name: "NoSuchFieldLevelEncryptionProfile",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchFieldLevelEncryptionProfile.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No profile specified for the field-level encryption query argument.</p>
 */
export class QueryArgProfileEmpty extends __BaseException {
  readonly name: "QueryArgProfileEmpty" = "QueryArgProfileEmpty";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueryArgProfileEmpty, __BaseException>) {
    super({
      name: "QueryArgProfileEmpty",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueryArgProfileEmpty.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of configurations for field-level encryption have been
 * 			created.</p>
 */
export class TooManyFieldLevelEncryptionConfigs extends __BaseException {
  readonly name: "TooManyFieldLevelEncryptionConfigs" = "TooManyFieldLevelEncryptionConfigs";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFieldLevelEncryptionConfigs, __BaseException>) {
    super({
      name: "TooManyFieldLevelEncryptionConfigs",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFieldLevelEncryptionConfigs.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of content type profiles for field-level encryption have been
 * 			created.</p>
 */
export class TooManyFieldLevelEncryptionContentTypeProfiles extends __BaseException {
  readonly name: "TooManyFieldLevelEncryptionContentTypeProfiles" = "TooManyFieldLevelEncryptionContentTypeProfiles";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFieldLevelEncryptionContentTypeProfiles, __BaseException>) {
    super({
      name: "TooManyFieldLevelEncryptionContentTypeProfiles",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFieldLevelEncryptionContentTypeProfiles.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of query arg profiles for field-level encryption have been
 * 			created.</p>
 */
export class TooManyFieldLevelEncryptionQueryArgProfiles extends __BaseException {
  readonly name: "TooManyFieldLevelEncryptionQueryArgProfiles" = "TooManyFieldLevelEncryptionQueryArgProfiles";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFieldLevelEncryptionQueryArgProfiles, __BaseException>) {
    super({
      name: "TooManyFieldLevelEncryptionQueryArgProfiles",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFieldLevelEncryptionQueryArgProfiles.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A complex data type that includes the field patterns to match for field-level
 * 			encryption.</p>
 */
export interface FieldPatterns {
  /**
   * <p>The number of field-level encryption field patterns.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>An array of the field-level encryption field patterns.</p>
   */
  Items?: string[];
}

/**
 * <p>Complex data type for field-level encryption profiles that includes the encryption key
 * 			and field pattern specifications.</p>
 */
export interface EncryptionEntity {
  /**
   * <p>The public key associated with a set of field-level encryption patterns, to be used
   * 			when encrypting the fields that match the patterns.</p>
   */
  PublicKeyId: string | undefined;

  /**
   * <p>The provider associated with the public key being used for encryption. This value must
   * 			also be provided with the private key for applications to be able to decrypt
   * 			data.</p>
   */
  ProviderId: string | undefined;

  /**
   * <p>Field patterns in a field-level encryption content type profile specify the fields
   * 			that you want to be encrypted. You can provide the full field name, or any beginning
   * 			characters followed by a wildcard (*). You can't overlap field patterns. For example,
   * 			you can't have both ABC* and AB*. Note that field patterns are case-sensitive.</p>
   */
  FieldPatterns: FieldPatterns | undefined;
}

/**
 * <p>Complex data type for field-level encryption profiles that includes all of the
 * 			encryption entities.</p>
 */
export interface EncryptionEntities {
  /**
   * <p>Number of field pattern items in a field-level encryption content type-profile
   * 			mapping.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>An array of field patterns in a field-level encryption content type-profile mapping.
   * 		</p>
   */
  Items?: EncryptionEntity[];
}

/**
 * <p>A complex data type of profiles for the field-level encryption.</p>
 */
export interface FieldLevelEncryptionProfileConfig {
  /**
   * <p>Profile name for the field-level encryption profile.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique number that ensures that the request can't be replayed.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>An optional comment for the field-level encryption profile. The comment cannot be
   * 			longer than 128 characters.</p>
   */
  Comment?: string;

  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that
   * 			include the public key ID, provider, and field patterns for specifying which fields to
   * 			encrypt with this key.</p>
   */
  EncryptionEntities: EncryptionEntities | undefined;
}

export interface CreateFieldLevelEncryptionProfileRequest {
  /**
   * <p>The request to create a field-level encryption profile.</p>
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;
}

/**
 * <p>A complex data type for field-level encryption profiles.</p>
 */
export interface FieldLevelEncryptionProfile {
  /**
   * <p>The ID for a field-level encryption profile configuration which includes a set of
   * 			profiles that specify certain selected data fields to be encrypted by specific public
   * 			keys.</p>
   */
  Id: string | undefined;

  /**
   * <p>The last time the field-level encryption profile was updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A complex data type that includes the profile name and the encryption entities for the
   * 			field-level encryption profile.</p>
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;
}

export interface CreateFieldLevelEncryptionProfileResult {
  /**
   * <p>Returned when you create a new field-level encryption profile.</p>
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;

  /**
   * <p>The fully qualified URI of the new profile resource just created.</p>
   */
  Location?: string;

  /**
   * <p>The current version of the field level encryption profile. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * <p>The specified profile for field-level encryption already exists.</p>
 */
export class FieldLevelEncryptionProfileAlreadyExists extends __BaseException {
  readonly name: "FieldLevelEncryptionProfileAlreadyExists" = "FieldLevelEncryptionProfileAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FieldLevelEncryptionProfileAlreadyExists, __BaseException>) {
    super({
      name: "FieldLevelEncryptionProfileAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FieldLevelEncryptionProfileAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum size of a profile for field-level encryption was exceeded.</p>
 */
export class FieldLevelEncryptionProfileSizeExceeded extends __BaseException {
  readonly name: "FieldLevelEncryptionProfileSizeExceeded" = "FieldLevelEncryptionProfileSizeExceeded";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FieldLevelEncryptionProfileSizeExceeded, __BaseException>) {
    super({
      name: "FieldLevelEncryptionProfileSizeExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FieldLevelEncryptionProfileSizeExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified public key doesn't exist.</p>
 */
export class NoSuchPublicKey extends __BaseException {
  readonly name: "NoSuchPublicKey" = "NoSuchPublicKey";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchPublicKey, __BaseException>) {
    super({
      name: "NoSuchPublicKey",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchPublicKey.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of encryption entities for field-level encryption have been
 * 			created.</p>
 */
export class TooManyFieldLevelEncryptionEncryptionEntities extends __BaseException {
  readonly name: "TooManyFieldLevelEncryptionEncryptionEntities" = "TooManyFieldLevelEncryptionEncryptionEntities";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFieldLevelEncryptionEncryptionEntities, __BaseException>) {
    super({
      name: "TooManyFieldLevelEncryptionEncryptionEntities",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFieldLevelEncryptionEncryptionEntities.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of field patterns for field-level encryption have been
 * 			created.</p>
 */
export class TooManyFieldLevelEncryptionFieldPatterns extends __BaseException {
  readonly name: "TooManyFieldLevelEncryptionFieldPatterns" = "TooManyFieldLevelEncryptionFieldPatterns";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFieldLevelEncryptionFieldPatterns, __BaseException>) {
    super({
      name: "TooManyFieldLevelEncryptionFieldPatterns",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFieldLevelEncryptionFieldPatterns.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of profiles for field-level encryption have been created.</p>
 */
export class TooManyFieldLevelEncryptionProfiles extends __BaseException {
  readonly name: "TooManyFieldLevelEncryptionProfiles" = "TooManyFieldLevelEncryptionProfiles";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFieldLevelEncryptionProfiles, __BaseException>) {
    super({
      name: "TooManyFieldLevelEncryptionProfiles",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFieldLevelEncryptionProfiles.prototype);
    this.Message = opts.Message;
  }
}

export enum FunctionRuntime {
  cloudfront_js_1_0 = "cloudfront-js-1.0",
}

/**
 * <p>Contains configuration information about a CloudFront function.</p>
 */
export interface FunctionConfig {
  /**
   * <p>A comment to describe the function.</p>
   */
  Comment: string | undefined;

  /**
   * <p>The function's runtime environment. The only valid value is
   * 				<code>cloudfront-js-1.0</code>.</p>
   */
  Runtime: FunctionRuntime | string | undefined;
}

export interface CreateFunctionRequest {
  /**
   * <p>A name to identify the function.</p>
   */
  Name: string | undefined;

  /**
   * <p>Configuration information about the function, including an optional comment and the
   * 			function's runtime.</p>
   */
  FunctionConfig: FunctionConfig | undefined;

  /**
   * <p>The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing
   * 				function code for CloudFront Functions</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  FunctionCode: Uint8Array | undefined;
}

export enum FunctionStage {
  DEVELOPMENT = "DEVELOPMENT",
  LIVE = "LIVE",
}

/**
 * <p>Contains metadata about a CloudFront function.</p>
 */
export interface FunctionMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the function. The ARN uniquely identifies the
   * 			function.</p>
   */
  FunctionARN: string | undefined;

  /**
   * <p>The stage that the function is in, either <code>DEVELOPMENT</code> or
   * 				<code>LIVE</code>.</p>
   *          <p>When a function is in the <code>DEVELOPMENT</code> stage, you can test the function
   * 			with <code>TestFunction</code>, and update it with <code>UpdateFunction</code>.</p>
   *          <p>When a function is in the <code>LIVE</code> stage, you can attach the function to a
   * 			distribution's cache behavior, using the function's ARN.</p>
   */
  Stage?: FunctionStage | string;

  /**
   * <p>The date and time when the function was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The date and time when the function was most recently updated.</p>
   */
  LastModifiedTime: Date | undefined;
}

/**
 * <p>Contains configuration information and metadata about a CloudFront function.</p>
 */
export interface FunctionSummary {
  /**
   * <p>The name of the CloudFront function.</p>
   */
  Name: string | undefined;

  /**
   * <p>The status of the CloudFront function.</p>
   */
  Status?: string;

  /**
   * <p>Contains configuration information about a CloudFront function.</p>
   */
  FunctionConfig: FunctionConfig | undefined;

  /**
   * <p>Contains metadata about a CloudFront function.</p>
   */
  FunctionMetadata: FunctionMetadata | undefined;
}

export interface CreateFunctionResult {
  /**
   * <p>Contains configuration information and metadata about a CloudFront function.</p>
   */
  FunctionSummary?: FunctionSummary;

  /**
   * <p>The URL of the CloudFront function. Use the URL to manage the function with the CloudFront
   * 			API.</p>
   */
  Location?: string;

  /**
   * <p>The version identifier for the current version of the CloudFront function.</p>
   */
  ETag?: string;
}

/**
 * <p>A function with the same name already exists in this Amazon Web Services account. To create a
 * 			function, you must provide a unique name. To update an existing function, use
 * 				<code>UpdateFunction</code>.</p>
 */
export class FunctionAlreadyExists extends __BaseException {
  readonly name: "FunctionAlreadyExists" = "FunctionAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FunctionAlreadyExists, __BaseException>) {
    super({
      name: "FunctionAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FunctionAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The function is too large. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class FunctionSizeLimitExceeded extends __BaseException {
  readonly name: "FunctionSizeLimitExceeded" = "FunctionSizeLimitExceeded";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FunctionSizeLimitExceeded, __BaseException>) {
    super({
      name: "FunctionSizeLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FunctionSizeLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of CloudFront functions for this Amazon Web Services account. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyFunctions extends __BaseException {
  readonly name: "TooManyFunctions" = "TooManyFunctions";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFunctions, __BaseException>) {
    super({
      name: "TooManyFunctions",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFunctions.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This operation is not supported in this region.</p>
 */
export class UnsupportedOperation extends __BaseException {
  readonly name: "UnsupportedOperation" = "UnsupportedOperation";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperation, __BaseException>) {
    super({
      name: "UnsupportedOperation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A complex type that contains information about the objects that you want to
 * 			invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface Paths {
  /**
   * <p>The number of invalidation paths specified for the objects that you want to
   * 			invalidate.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains a list of the paths that you want to invalidate.</p>
   */
  Items?: string[];
}

/**
 * <p>An invalidation batch.</p>
 */
export interface InvalidationBatch {
  /**
   * <p>A complex type that contains information about the objects that you want to
   * 			invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Paths: Paths | undefined;

  /**
   * <p>A value that you specify to uniquely identify an invalidation request. CloudFront uses the
   * 			value to prevent you from accidentally resubmitting an identical request. Whenever you
   * 			create a new invalidation request, you must specify a new value for
   * 				<code>CallerReference</code> and change other values in the request as applicable.
   * 			One way to ensure that the value of <code>CallerReference</code> is unique is to use a
   * 				<code>timestamp</code>, for example, <code>20120301090000</code>.</p>
   *          <p>If you make a second invalidation request with the same value for
   * 				<code>CallerReference</code>, and if the rest of the request is the same, CloudFront
   * 			doesn't create a new invalidation request. Instead, CloudFront returns information about the
   * 			invalidation request that you previously created with the same
   * 				<code>CallerReference</code>.</p>
   *          <p>If <code>CallerReference</code> is a value you already sent in a previous invalidation
   * 			batch request but the content of any <code>Path</code> is different from the original
   * 			request, CloudFront returns an <code>InvalidationBatchAlreadyExists</code> error.</p>
   */
  CallerReference: string | undefined;
}

/**
 * <p>The request to create an invalidation.</p>
 */
export interface CreateInvalidationRequest {
  /**
   * <p>The distribution's id.</p>
   */
  DistributionId: string | undefined;

  /**
   * <p>The batch information for the invalidation.</p>
   */
  InvalidationBatch: InvalidationBatch | undefined;
}

/**
 * <p>An invalidation.</p>
 */
export interface Invalidation {
  /**
   * <p>The identifier for the invalidation request. For example:
   * 			<code>IDFDVBD632BHDS5</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The status of the invalidation request. When the invalidation batch is finished, the
   * 			status is <code>Completed</code>.</p>
   */
  Status: string | undefined;

  /**
   * <p>The date and time the invalidation request was first made.</p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The current invalidation information for the batch request.</p>
   */
  InvalidationBatch: InvalidationBatch | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateInvalidationResult {
  /**
   * <p>The fully qualified URI of the distribution and invalidation batch request, including
   * 			the <code>Invalidation ID</code>.</p>
   */
  Location?: string;

  /**
   * <p>The invalidation's information.</p>
   */
  Invalidation?: Invalidation;
}

/**
 * <p>You have exceeded the maximum number of allowable InProgress invalidation batch
 * 			requests, or invalidation objects.</p>
 */
export class TooManyInvalidationsInProgress extends __BaseException {
  readonly name: "TooManyInvalidationsInProgress" = "TooManyInvalidationsInProgress";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyInvalidationsInProgress, __BaseException>) {
    super({
      name: "TooManyInvalidationsInProgress",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyInvalidationsInProgress.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A key group configuration.</p>
 *          <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
 */
export interface KeyGroupConfig {
  /**
   * <p>A name to identify the key group.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of the identifiers of the public keys in the key group.</p>
   */
  Items: string[] | undefined;

  /**
   * <p>A comment to describe the key group. The comment cannot be longer than 128
   * 			characters.</p>
   */
  Comment?: string;
}

export interface CreateKeyGroupRequest {
  /**
   * <p>A key group configuration.</p>
   */
  KeyGroupConfig: KeyGroupConfig | undefined;
}

/**
 * <p>A key group.</p>
 *          <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
 */
export interface KeyGroup {
  /**
   * <p>The identifier for the key group.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date and time when the key group was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The key group configuration.</p>
   */
  KeyGroupConfig: KeyGroupConfig | undefined;
}

export interface CreateKeyGroupResult {
  /**
   * <p>The key group that was just created.</p>
   */
  KeyGroup?: KeyGroup;

  /**
   * <p>The URL of the key group.</p>
   */
  Location?: string;

  /**
   * <p>The identifier for this version of the key group.</p>
   */
  ETag?: string;
}

/**
 * <p>A key group with this name already exists. You must provide a unique name. To modify
 * 			an existing key group, use <code>UpdateKeyGroup</code>.</p>
 */
export class KeyGroupAlreadyExists extends __BaseException {
  readonly name: "KeyGroupAlreadyExists" = "KeyGroupAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KeyGroupAlreadyExists, __BaseException>) {
    super({
      name: "KeyGroupAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KeyGroupAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of key groups for this Amazon Web Services account. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyKeyGroups extends __BaseException {
  readonly name: "TooManyKeyGroups" = "TooManyKeyGroups";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyKeyGroups, __BaseException>) {
    super({
      name: "TooManyKeyGroups",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyKeyGroups.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of public keys in this key group is more than the maximum allowed. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyPublicKeysInKeyGroup extends __BaseException {
  readonly name: "TooManyPublicKeysInKeyGroup" = "TooManyPublicKeysInKeyGroup";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyPublicKeysInKeyGroup, __BaseException>) {
    super({
      name: "TooManyPublicKeysInKeyGroup",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyPublicKeysInKeyGroup.prototype);
    this.Message = opts.Message;
  }
}

export enum RealtimeMetricsSubscriptionStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

/**
 * <p>A subscription configuration for additional CloudWatch metrics.</p>
 */
export interface RealtimeMetricsSubscriptionConfig {
  /**
   * <p>A flag that indicates whether additional CloudWatch metrics are enabled for a given
   * 			CloudFront distribution.</p>
   */
  RealtimeMetricsSubscriptionStatus: RealtimeMetricsSubscriptionStatus | string | undefined;
}

/**
 * <p>A monitoring subscription. This structure contains information about whether
 * 			additional CloudWatch metrics are enabled for a given CloudFront distribution.</p>
 */
export interface MonitoringSubscription {
  /**
   * <p>A subscription configuration for additional CloudWatch metrics.</p>
   */
  RealtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfig;
}

export interface CreateMonitoringSubscriptionRequest {
  /**
   * <p>The ID of the distribution that you are enabling metrics for.</p>
   */
  DistributionId: string | undefined;

  /**
   * <p>A monitoring subscription. This structure contains information about whether
   * 			additional CloudWatch metrics are enabled for a given CloudFront distribution.</p>
   */
  MonitoringSubscription: MonitoringSubscription | undefined;
}

export interface CreateMonitoringSubscriptionResult {
  /**
   * <p>A monitoring subscription. This structure contains information about whether
   * 			additional CloudWatch metrics are enabled for a given CloudFront distribution.</p>
   */
  MonitoringSubscription?: MonitoringSubscription;
}

/**
 * <p>A monitoring subscription already exists for the specified distribution.</p>
 */
export class MonitoringSubscriptionAlreadyExists extends __BaseException {
  readonly name: "MonitoringSubscriptionAlreadyExists" = "MonitoringSubscriptionAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MonitoringSubscriptionAlreadyExists, __BaseException>) {
    super({
      name: "MonitoringSubscriptionAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MonitoringSubscriptionAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

export enum OriginAccessControlOriginTypes {
  s3 = "s3",
}

export enum OriginAccessControlSigningBehaviors {
  always = "always",
  never = "never",
  no_override = "no-override",
}

export enum OriginAccessControlSigningProtocols {
  sigv4 = "sigv4",
}

/**
 * <p>A CloudFront origin access control configuration.</p>
 */
export interface OriginAccessControlConfig {
  /**
   * <p>A name to identify the origin access control.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the origin access control.</p>
   */
  Description?: string;

  /**
   * <p>The signing protocol of the origin access control, which determines how CloudFront signs
   * 			(authenticates) requests. The only valid value is <code>sigv4</code>.</p>
   */
  SigningProtocol: OriginAccessControlSigningProtocols | string | undefined;

  /**
   * <p>Specifies which requests CloudFront signs (adds authentication information to). Specify
   * 				<code>always</code> for the most common use case. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings">origin access control advanced settings</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>This field can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>always</code> – CloudFront signs all origin requests, overwriting the
   * 						<code>Authorization</code> header from the viewer request if one
   * 					exists.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>never</code> – CloudFront doesn't sign any origin requests. This value turns
   * 					off origin access control for all origins in all distributions that use this
   * 					origin access control.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>no-override</code> – If the viewer request doesn't contain the
   * 						<code>Authorization</code> header, then CloudFront signs the origin request. If
   * 					the viewer request contains the <code>Authorization</code> header, then CloudFront
   * 					doesn't sign the origin request and instead passes along the
   * 						<code>Authorization</code> header from the viewer request. <b>WARNING: To pass along the <code>Authorization</code> header
   * 						from the viewer request, you <i>must</i> add the
   * 							<code>Authorization</code> header to a <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">cache policy</a> for all cache behaviors that
   * 						use origins associated with this origin access control.</b>
   *                </p>
   *             </li>
   *          </ul>
   */
  SigningBehavior: OriginAccessControlSigningBehaviors | string | undefined;

  /**
   * <p>The type of origin that this origin access control is for. The only valid value is
   * 				<code>s3</code>.</p>
   */
  OriginAccessControlOriginType: OriginAccessControlOriginTypes | string | undefined;
}

export interface CreateOriginAccessControlRequest {
  /**
   * <p>Contains the origin access control.</p>
   */
  OriginAccessControlConfig: OriginAccessControlConfig | undefined;
}

/**
 * <p>A CloudFront origin access control, including its unique identifier.</p>
 */
export interface OriginAccessControl {
  /**
   * <p>The unique identifier of the origin access control.</p>
   */
  Id: string | undefined;

  /**
   * <p>The origin access control.</p>
   */
  OriginAccessControlConfig?: OriginAccessControlConfig;
}

export interface CreateOriginAccessControlResult {
  /**
   * <p>Contains an origin access control.</p>
   */
  OriginAccessControl?: OriginAccessControl;

  /**
   * <p>The URL of the origin access control.</p>
   */
  Location?: string;

  /**
   * <p>The version identifier for the current version of the origin access control.</p>
   */
  ETag?: string;
}

/**
 * <p>An origin access control with the specified parameters already exists.</p>
 */
export class OriginAccessControlAlreadyExists extends __BaseException {
  readonly name: "OriginAccessControlAlreadyExists" = "OriginAccessControlAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OriginAccessControlAlreadyExists, __BaseException>) {
    super({
      name: "OriginAccessControlAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OriginAccessControlAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of origin access controls in your Amazon Web Services account exceeds the maximum
 * 			allowed.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyOriginAccessControls extends __BaseException {
  readonly name: "TooManyOriginAccessControls" = "TooManyOriginAccessControls";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyOriginAccessControls, __BaseException>) {
    super({
      name: "TooManyOriginAccessControls",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyOriginAccessControls.prototype);
    this.Message = opts.Message;
  }
}

export enum OriginRequestPolicyCookieBehavior {
  all = "all",
  none = "none",
  whitelist = "whitelist",
}

/**
 * <p>An object that determines whether any cookies in viewer requests (and if so, which
 * 			cookies) are included in requests that CloudFront sends to the origin.</p>
 */
export interface OriginRequestPolicyCookiesConfig {
  /**
   * <p>Determines whether cookies in viewer requests are included in requests that CloudFront sends
   * 			to the origin. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>none</code> – Cookies in viewer requests are not included in requests
   * 					that CloudFront sends to the origin. Even when this field is set to <code>none</code>,
   * 					any cookies that are listed in a <code>CachePolicy</code>
   *                   <i>are</i> included in origin requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>whitelist</code> – The cookies in viewer requests that are listed in the
   * 						<code>CookieNames</code> type are included in requests that CloudFront sends to
   * 					the origin.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>all</code> – All cookies in viewer requests are included in requests
   * 					that CloudFront sends to the origin.</p>
   *             </li>
   *          </ul>
   */
  CookieBehavior: OriginRequestPolicyCookieBehavior | string | undefined;

  /**
   * <p>Contains a list of cookie names.</p>
   */
  Cookies?: CookieNames;
}

export enum OriginRequestPolicyHeaderBehavior {
  allViewer = "allViewer",
  allViewerAndWhitelistCloudFront = "allViewerAndWhitelistCloudFront",
  none = "none",
  whitelist = "whitelist",
}

/**
 * <p>An object that determines whether any HTTP headers (and if so, which headers) are
 * 			included in requests that CloudFront sends to the origin.</p>
 */
export interface OriginRequestPolicyHeadersConfig {
  /**
   * <p>Determines whether any HTTP headers are included in requests that CloudFront sends to the
   * 			origin. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>none</code> – HTTP headers are not included in requests that CloudFront sends
   * 					to the origin. Even when this field is set to <code>none</code>, any headers
   * 					that are listed in a <code>CachePolicy</code>
   *                   <i>are</i> included in origin requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>whitelist</code> – The HTTP headers that are listed in the
   * 						<code>Headers</code> type are included in requests that CloudFront sends to the
   * 					origin.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allViewer</code> – All HTTP headers in viewer requests are included in
   * 					requests that CloudFront sends to the origin.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allViewerAndWhitelistCloudFront</code> – All HTTP headers in viewer
   * 					requests and the additional CloudFront headers that are listed in the
   * 						<code>Headers</code> type are included in requests that CloudFront sends to the
   * 					origin. The additional headers are added by CloudFront.</p>
   *             </li>
   *          </ul>
   */
  HeaderBehavior: OriginRequestPolicyHeaderBehavior | string | undefined;

  /**
   * <p>Contains a list of HTTP header names.</p>
   */
  Headers?: Headers;
}

export enum OriginRequestPolicyQueryStringBehavior {
  all = "all",
  none = "none",
  whitelist = "whitelist",
}

/**
 * <p>An object that determines whether any URL query strings in viewer requests (and if so,
 * 			which query strings) are included in requests that CloudFront sends to the origin.</p>
 */
export interface OriginRequestPolicyQueryStringsConfig {
  /**
   * <p>Determines whether any URL query strings in viewer requests are included in requests
   * 			that CloudFront sends to the origin. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>none</code> – Query strings in viewer requests are not included in
   * 					requests that CloudFront sends to the origin. Even when this field is set to
   * 						<code>none</code>, any query strings that are listed in a
   * 						<code>CachePolicy</code>
   *                   <i>are</i> included in origin requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>whitelist</code> – The query strings in viewer requests that are listed
   * 					in the <code>QueryStringNames</code> type are included in requests that CloudFront
   * 					sends to the origin.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>all</code> – All query strings in viewer requests are included in
   * 					requests that CloudFront sends to the origin.</p>
   *             </li>
   *          </ul>
   */
  QueryStringBehavior: OriginRequestPolicyQueryStringBehavior | string | undefined;

  /**
   * <p>Contains a list of the query strings in viewer requests that are included in requests
   * 			that CloudFront sends to the origin.</p>
   */
  QueryStrings?: QueryStringNames;
}

/**
 * <p>An origin request policy configuration.</p>
 *          <p>This configuration determines the values that CloudFront includes in requests that it sends
 * 			to the origin. Each request that CloudFront sends to the origin includes the following:</p>
 *          <ul>
 *             <li>
 *                <p>The request body and the URL path (without the domain name) from the viewer
 * 					request.</p>
 *             </li>
 *             <li>
 *                <p>The headers that CloudFront automatically includes in every origin request,
 * 					including <code>Host</code>, <code>User-Agent</code>, and
 * 						<code>X-Amz-Cf-Id</code>.</p>
 *             </li>
 *             <li>
 *                <p>All HTTP headers, cookies, and URL query strings that are specified in the
 * 					cache policy or the origin request policy. These can include items from the
 * 					viewer request and, in the case of headers, additional ones that are added by
 * 					CloudFront.</p>
 *             </li>
 *          </ul>
 *          <p>CloudFront sends a request when it can't find an object in its cache that matches the
 * 			request. If you want to send values to the origin and also include them in the cache
 * 			key, use <code>CachePolicy</code>.</p>
 */
export interface OriginRequestPolicyConfig {
  /**
   * <p>A comment to describe the origin request policy. The comment cannot be longer than 128
   * 			characters.</p>
   */
  Comment?: string;

  /**
   * <p>A unique name to identify the origin request policy.</p>
   */
  Name: string | undefined;

  /**
   * <p>The HTTP headers to include in origin requests. These can include headers from viewer
   * 			requests and additional headers added by CloudFront.</p>
   */
  HeadersConfig: OriginRequestPolicyHeadersConfig | undefined;

  /**
   * <p>The cookies from viewer requests to include in origin requests.</p>
   */
  CookiesConfig: OriginRequestPolicyCookiesConfig | undefined;

  /**
   * <p>The URL query strings from viewer requests to include in origin requests.</p>
   */
  QueryStringsConfig: OriginRequestPolicyQueryStringsConfig | undefined;
}

export interface CreateOriginRequestPolicyRequest {
  /**
   * <p>An origin request policy configuration.</p>
   */
  OriginRequestPolicyConfig: OriginRequestPolicyConfig | undefined;
}

/**
 * <p>An origin request policy.</p>
 *          <p>When it's attached to a cache behavior, the origin request policy determines the
 * 			values that CloudFront includes in requests that it sends to the origin. Each request that
 * 			CloudFront sends to the origin includes the following:</p>
 *          <ul>
 *             <li>
 *                <p>The request body and the URL path (without the domain name) from the viewer
 * 					request.</p>
 *             </li>
 *             <li>
 *                <p>The headers that CloudFront automatically includes in every origin request,
 * 					including <code>Host</code>, <code>User-Agent</code>, and
 * 						<code>X-Amz-Cf-Id</code>.</p>
 *             </li>
 *             <li>
 *                <p>All HTTP headers, cookies, and URL query strings that are specified in the
 * 					cache policy or the origin request policy. These can include items from the
 * 					viewer request and, in the case of headers, additional ones that are added by
 * 					CloudFront.</p>
 *             </li>
 *          </ul>
 *          <p>CloudFront sends a request when it can't find an object in its cache that matches the
 * 			request. If you want to send values to the origin and also include them in the cache
 * 			key, use <code>CachePolicy</code>.</p>
 */
export interface OriginRequestPolicy {
  /**
   * <p>The unique identifier for the origin request policy.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date and time when the origin request policy was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The origin request policy configuration.</p>
   */
  OriginRequestPolicyConfig: OriginRequestPolicyConfig | undefined;
}

export interface CreateOriginRequestPolicyResult {
  /**
   * <p>An origin request policy.</p>
   */
  OriginRequestPolicy?: OriginRequestPolicy;

  /**
   * <p>The fully qualified URI of the origin request policy just created.</p>
   */
  Location?: string;

  /**
   * <p>The current version of the origin request policy.</p>
   */
  ETag?: string;
}

/**
 * <p>An origin request policy with this name already exists. You must provide a unique
 * 			name. To modify an existing origin request policy, use
 * 				<code>UpdateOriginRequestPolicy</code>.</p>
 */
export class OriginRequestPolicyAlreadyExists extends __BaseException {
  readonly name: "OriginRequestPolicyAlreadyExists" = "OriginRequestPolicyAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OriginRequestPolicyAlreadyExists, __BaseException>) {
    super({
      name: "OriginRequestPolicyAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OriginRequestPolicyAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of cookies in the origin request policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyCookiesInOriginRequestPolicy extends __BaseException {
  readonly name: "TooManyCookiesInOriginRequestPolicy" = "TooManyCookiesInOriginRequestPolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCookiesInOriginRequestPolicy, __BaseException>) {
    super({
      name: "TooManyCookiesInOriginRequestPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCookiesInOriginRequestPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of headers in the origin request policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyHeadersInOriginRequestPolicy extends __BaseException {
  readonly name: "TooManyHeadersInOriginRequestPolicy" = "TooManyHeadersInOriginRequestPolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyHeadersInOriginRequestPolicy, __BaseException>) {
    super({
      name: "TooManyHeadersInOriginRequestPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyHeadersInOriginRequestPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of origin request policies for this Amazon Web Services account.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyOriginRequestPolicies extends __BaseException {
  readonly name: "TooManyOriginRequestPolicies" = "TooManyOriginRequestPolicies";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyOriginRequestPolicies, __BaseException>) {
    super({
      name: "TooManyOriginRequestPolicies",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyOriginRequestPolicies.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of query strings in the origin request policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyQueryStringsInOriginRequestPolicy extends __BaseException {
  readonly name: "TooManyQueryStringsInOriginRequestPolicy" = "TooManyQueryStringsInOriginRequestPolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyQueryStringsInOriginRequestPolicy, __BaseException>) {
    super({
      name: "TooManyQueryStringsInOriginRequestPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyQueryStringsInOriginRequestPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
 */
export interface PublicKeyConfig {
  /**
   * <p>A string included in the request to help make sure that the request can't be
   * 			replayed.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>A name to help identify the public key.</p>
   */
  Name: string | undefined;

  /**
   * <p>The public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
   */
  EncodedKey: string | undefined;

  /**
   * <p>A comment to describe the public key. The comment cannot be longer than 128
   * 			characters.</p>
   */
  Comment?: string;
}

export interface CreatePublicKeyRequest {
  /**
   * <p>A CloudFront public key configuration.</p>
   */
  PublicKeyConfig: PublicKeyConfig | undefined;
}

/**
 * <p>A public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
 */
export interface PublicKey {
  /**
   * <p>The identifier of the public key.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date and time when the public key was uploaded.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
   */
  PublicKeyConfig: PublicKeyConfig | undefined;
}

export interface CreatePublicKeyResult {
  /**
   * <p>The public key.</p>
   */
  PublicKey?: PublicKey;

  /**
   * <p>The URL of the public key.</p>
   */
  Location?: string;

  /**
   * <p>The identifier for this version of the public key.</p>
   */
  ETag?: string;
}

/**
 * <p>The specified public key already exists.</p>
 */
export class PublicKeyAlreadyExists extends __BaseException {
  readonly name: "PublicKeyAlreadyExists" = "PublicKeyAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PublicKeyAlreadyExists, __BaseException>) {
    super({
      name: "PublicKeyAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PublicKeyAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of public keys for field-level encryption have been created. To
 * 			create a new public key, delete one of the existing keys.</p>
 */
export class TooManyPublicKeys extends __BaseException {
  readonly name: "TooManyPublicKeys" = "TooManyPublicKeys";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyPublicKeys, __BaseException>) {
    super({
      name: "TooManyPublicKeys",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyPublicKeys.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time
 * 			log data.</p>
 */
export interface KinesisStreamConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFront can use to
   * 			send real-time log data to your Kinesis data stream.</p>
   *          <p>For more information the IAM role, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role">Real-time log configuration IAM role</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending
   * 			real-time log data.</p>
   */
  StreamARN: string | undefined;
}

/**
 * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time
 * 			log data in a real-time log configuration.</p>
 */
export interface EndPoint {
  /**
   * <p>The type of data stream where you are sending real-time log data. The only valid value
   * 			is <code>Kinesis</code>.</p>
   */
  StreamType: string | undefined;

  /**
   * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time
   * 			log data.</p>
   */
  KinesisStreamConfig?: KinesisStreamConfig;
}

export interface CreateRealtimeLogConfigRequest {
  /**
   * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time
   * 			log data.</p>
   */
  EndPoints: EndPoint[] | undefined;

  /**
   * <p>A list of fields to include in each real-time log record.</p>
   *          <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Fields: string[] | undefined;

  /**
   * <p>A unique name to identify this real-time log configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The sampling rate for this real-time log configuration. The sampling rate determines
   * 			the percentage of viewer requests that are represented in the real-time log data. You
   * 			must provide an integer between 1 and 100, inclusive.</p>
   */
  SamplingRate: number | undefined;
}

/**
 * <p>A real-time log configuration.</p>
 */
export interface RealtimeLogConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of this real-time log configuration.</p>
   */
  ARN: string | undefined;

  /**
   * <p>The unique name of this real-time log configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The sampling rate for this real-time log configuration. The sampling rate determines
   * 			the percentage of viewer requests that are represented in the real-time log data. The
   * 			sampling rate is an integer between 1 and 100, inclusive.</p>
   */
  SamplingRate: number | undefined;

  /**
   * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time
   * 			log data for this real-time log configuration.</p>
   */
  EndPoints: EndPoint[] | undefined;

  /**
   * <p>A list of fields that are included in each real-time log record. In an API response,
   * 			the fields are provided in the same order in which they are sent to the Amazon Kinesis data
   * 			stream.</p>
   *          <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Fields: string[] | undefined;
}

export interface CreateRealtimeLogConfigResult {
  /**
   * <p>A real-time log configuration.</p>
   */
  RealtimeLogConfig?: RealtimeLogConfig;
}

/**
 * <p>A real-time log configuration with this name already exists. You must provide a unique
 * 			name. To modify an existing real-time log configuration, use
 * 				<code>UpdateRealtimeLogConfig</code>.</p>
 */
export class RealtimeLogConfigAlreadyExists extends __BaseException {
  readonly name: "RealtimeLogConfigAlreadyExists" = "RealtimeLogConfigAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RealtimeLogConfigAlreadyExists, __BaseException>) {
    super({
      name: "RealtimeLogConfigAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RealtimeLogConfigAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of real-time log configurations for this
 * 			Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyRealtimeLogConfigs extends __BaseException {
  readonly name: "TooManyRealtimeLogConfigs" = "TooManyRealtimeLogConfigs";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRealtimeLogConfigs, __BaseException>) {
    super({
      name: "TooManyRealtimeLogConfigs",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRealtimeLogConfigs.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A list of HTTP header names that CloudFront includes as values for the
 * 				<code>Access-Control-Allow-Headers</code> HTTP response header.</p>
 *          <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response
 * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyAccessControlAllowHeaders {
  /**
   * <p>The number of HTTP header names in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The list of HTTP header names. You can specify <code>*</code> to allow all
   * 			headers.</p>
   */
  Items: string[] | undefined;
}

/**
 * <p>A list of HTTP methods that CloudFront includes as values for the
 * 				<code>Access-Control-Allow-Methods</code> HTTP response header.</p>
 *          <p>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response
 * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods">Access-Control-Allow-Methods</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyAccessControlAllowMethods {
  /**
   * <p>The number of HTTP methods in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The list of HTTP methods. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GET</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HEAD</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIONS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PATCH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>POST</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>ALL</code> is a special value that includes all of the listed HTTP
   * 			methods.</p>
   */
  Items: (ResponseHeadersPolicyAccessControlAllowMethodsValues | string)[] | undefined;
}

/**
 * <p>A list of origins (domain names) that CloudFront can use as the value for the
 * 				<code>Access-Control-Allow-Origin</code> HTTP response header.</p>
 *          <p>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response
 * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">Access-Control-Allow-Origin</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyAccessControlAllowOrigins {
  /**
   * <p>The number of origins in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The list of origins (domain names). You can specify <code>*</code> to allow all
   * 			origins.</p>
   */
  Items: string[] | undefined;
}

/**
 * <p>A list of HTTP headers that CloudFront includes as values for the
 * 				<code>Access-Control-Expose-Headers</code> HTTP response header.</p>
 *          <p>For more information about the <code>Access-Control-Expose-Headers</code> HTTP
 * 			response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers">Access-Control-Expose-Headers</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyAccessControlExposeHeaders {
  /**
   * <p>The number of HTTP headers in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The list of HTTP headers. You can specify <code>*</code> to expose all headers.</p>
   */
  Items?: string[];
}

/**
 * <p>A configuration for a set of HTTP response headers that are used for cross-origin
 * 			resource sharing (CORS). CloudFront adds these headers to HTTP responses that it sends for
 * 			CORS requests that match a cache behavior associated with this response headers
 * 			policy.</p>
 *          <p>For more information about CORS, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Cross-Origin Resource
 * 				Sharing (CORS)</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyCorsConfig {
  /**
   * <p>A list of origins (domain names) that CloudFront can use as the value for the
   * 				<code>Access-Control-Allow-Origin</code> HTTP response header.</p>
   *          <p>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">Access-Control-Allow-Origin</a> in the MDN Web Docs.</p>
   */
  AccessControlAllowOrigins: ResponseHeadersPolicyAccessControlAllowOrigins | undefined;

  /**
   * <p>A list of HTTP header names that CloudFront includes as values for the
   * 				<code>Access-Control-Allow-Headers</code> HTTP response header.</p>
   *          <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p>
   */
  AccessControlAllowHeaders: ResponseHeadersPolicyAccessControlAllowHeaders | undefined;

  /**
   * <p>A list of HTTP methods that CloudFront includes as values for the
   * 				<code>Access-Control-Allow-Methods</code> HTTP response header.</p>
   *          <p>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods">Access-Control-Allow-Methods</a> in the MDN Web Docs.</p>
   */
  AccessControlAllowMethods: ResponseHeadersPolicyAccessControlAllowMethods | undefined;

  /**
   * <p>A Boolean that CloudFront uses as the value for the
   * 				<code>Access-Control-Allow-Credentials</code> HTTP response header.</p>
   *          <p>For more information about the <code>Access-Control-Allow-Credentials</code> HTTP
   * 			response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials">Access-Control-Allow-Credentials</a> in the MDN Web Docs.</p>
   */
  AccessControlAllowCredentials: boolean | undefined;

  /**
   * <p>A list of HTTP headers that CloudFront includes as values for the
   * 				<code>Access-Control-Expose-Headers</code> HTTP response header.</p>
   *          <p>For more information about the <code>Access-Control-Expose-Headers</code> HTTP
   * 			response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers">Access-Control-Expose-Headers</a> in the MDN Web Docs.</p>
   */
  AccessControlExposeHeaders?: ResponseHeadersPolicyAccessControlExposeHeaders;

  /**
   * <p>A number that CloudFront uses as the value for the <code>Access-Control-Max-Age</code> HTTP
   * 			response header.</p>
   *          <p>For more information about the <code>Access-Control-Max-Age</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age">Access-Control-Max-Age</a> in the MDN Web Docs.</p>
   */
  AccessControlMaxAgeSec?: number;

  /**
   * <p>A Boolean that determines whether CloudFront overrides HTTP response headers received from
   * 			the origin with the ones specified in this response headers policy.</p>
   */
  OriginOverride: boolean | undefined;
}

/**
 * <p>An HTTP response header name and its value. CloudFront includes this header in HTTP
 * 			responses that it sends for requests that match a cache behavior that's associated with
 * 			this response headers policy.</p>
 */
export interface ResponseHeadersPolicyCustomHeader {
  /**
   * <p>The HTTP response header name.</p>
   */
  Header: string | undefined;

  /**
   * <p>The value for the HTTP response header.</p>
   */
  Value: string | undefined;

  /**
   * <p>A Boolean that determines whether CloudFront overrides a response header with the same name
   * 			received from the origin with the header specified here.</p>
   */
  Override: boolean | undefined;
}

/**
 * <p>A list of HTTP response header names and their values. CloudFront includes these headers in
 * 			HTTP responses that it sends for requests that match a cache behavior that's associated
 * 			with this response headers policy.</p>
 */
export interface ResponseHeadersPolicyCustomHeadersConfig {
  /**
   * <p>The number of HTTP response headers in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The list of HTTP response headers and their values.</p>
   */
  Items?: ResponseHeadersPolicyCustomHeader[];
}

/**
 * <p>The name of an HTTP header that CloudFront removes from HTTP responses to requests that match the
 * 			cache behavior that this response headers policy is attached to.</p>
 */
export interface ResponseHeadersPolicyRemoveHeader {
  /**
   * <p>The HTTP header name.</p>
   */
  Header: string | undefined;
}

/**
 * <p>A list of HTTP header names that CloudFront removes from HTTP responses to requests that match the
 * 			cache behavior that this response headers policy is attached to.</p>
 */
export interface ResponseHeadersPolicyRemoveHeadersConfig {
  /**
   * <p>The number of HTTP header names in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The list of HTTP header names.</p>
   */
  Items?: ResponseHeadersPolicyRemoveHeader[];
}

/**
 * <p>The policy directives and their values that CloudFront includes as values for the
 * 				<code>Content-Security-Policy</code> HTTP response header.</p>
 *          <p>For more information about the <code>Content-Security-Policy</code> HTTP response
 * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyContentSecurityPolicy {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the
   * 				<code>Content-Security-Policy</code> HTTP response header received from the origin
   * 			with the one specified in this response headers policy.</p>
   */
  Override: boolean | undefined;

  /**
   * <p>The policy directives and their values that CloudFront includes as values for the
   * 				<code>Content-Security-Policy</code> HTTP response header.</p>
   */
  ContentSecurityPolicy: string | undefined;
}

/**
 * <p>Determines whether CloudFront includes the <code>X-Content-Type-Options</code> HTTP response
 * 			header with its value set to <code>nosniff</code>.</p>
 *          <p>For more information about the <code>X-Content-Type-Options</code> HTTP response
 * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">X-Content-Type-Options</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyContentTypeOptions {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the
   * 				<code>X-Content-Type-Options</code> HTTP response header received from the origin
   * 			with the one specified in this response headers policy.</p>
   */
  Override: boolean | undefined;
}

export enum FrameOptionsList {
  DENY = "DENY",
  SAMEORIGIN = "SAMEORIGIN",
}

/**
 * <p>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header
 * 			and the header's value.</p>
 *          <p>For more information about the <code>X-Frame-Options</code> HTTP response header, see
 * 				<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyFrameOptions {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the <code>X-Frame-Options</code> HTTP
   * 			response header received from the origin with the one specified in this response headers
   * 			policy.</p>
   */
  Override: boolean | undefined;

  /**
   * <p>The value of the <code>X-Frame-Options</code> HTTP response header. Valid values are
   * 				<code>DENY</code> and <code>SAMEORIGIN</code>.</p>
   *          <p>For more information about these values, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>
   */
  FrameOption: FrameOptionsList | string | undefined;
}

export enum ReferrerPolicyList {
  no_referrer = "no-referrer",
  no_referrer_when_downgrade = "no-referrer-when-downgrade",
  origin = "origin",
  origin_when_cross_origin = "origin-when-cross-origin",
  same_origin = "same-origin",
  strict_origin = "strict-origin",
  strict_origin_when_cross_origin = "strict-origin-when-cross-origin",
  unsafe_url = "unsafe-url",
}

/**
 * <p>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header
 * 			and the header's value.</p>
 *          <p>For more information about the <code>Referrer-Policy</code> HTTP response header, see
 * 				<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyReferrerPolicy {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the <code>Referrer-Policy</code> HTTP
   * 			response header received from the origin with the one specified in this response headers
   * 			policy.</p>
   */
  Override: boolean | undefined;

  /**
   * <p>The value of the <code>Referrer-Policy</code> HTTP response header. Valid values
   * 			are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>no-referrer</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>no-referrer-when-downgrade</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>origin</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>origin-when-cross-origin</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>same-origin</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>strict-origin</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>strict-origin-when-cross-origin</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unsafe-url</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about these values, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>
   */
  ReferrerPolicy: ReferrerPolicyList | string | undefined;
}

/**
 * <p>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP
 * 			response header and the header's value.</p>
 *          <p>For more information about the <code>Strict-Transport-Security</code> HTTP response
 * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyStrictTransportSecurity {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the
   * 				<code>Strict-Transport-Security</code> HTTP response header received from the origin
   * 			with the one specified in this response headers policy.</p>
   */
  Override: boolean | undefined;

  /**
   * <p>A Boolean that determines whether CloudFront includes the <code>includeSubDomains</code>
   * 			directive in the <code>Strict-Transport-Security</code> HTTP response header.</p>
   */
  IncludeSubdomains?: boolean;

  /**
   * <p>A Boolean that determines whether CloudFront includes the <code>preload</code> directive in
   * 			the <code>Strict-Transport-Security</code> HTTP response header.</p>
   */
  Preload?: boolean;

  /**
   * <p>A number that CloudFront uses as the value for the <code>max-age</code> directive in the
   * 				<code>Strict-Transport-Security</code> HTTP response header.</p>
   */
  AccessControlMaxAgeSec: number | undefined;
}

/**
 * <p>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response
 * 			header and the header's value.</p>
 *          <p>For more information about the <code>X-XSS-Protection</code> HTTP response header, see
 * 				<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyXSSProtection {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the <code>X-XSS-Protection</code>
   * 			HTTP response header received from the origin with the one specified in this response
   * 			headers policy.</p>
   */
  Override: boolean | undefined;

  /**
   * <p>A Boolean that determines the value of the <code>X-XSS-Protection</code> HTTP response
   * 			header. When this setting is <code>true</code>, the value of the
   * 				<code>X-XSS-Protection</code> header is <code>1</code>. When this setting is
   * 				<code>false</code>, the value of the <code>X-XSS-Protection</code> header is
   * 				<code>0</code>.</p>
   *          <p>For more information about these settings, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
   */
  Protection: boolean | undefined;

  /**
   * <p>A Boolean that determines whether CloudFront includes the <code>mode=block</code> directive
   * 			in the <code>X-XSS-Protection</code> header.</p>
   *          <p>For more information about this directive, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
   */
  ModeBlock?: boolean;

  /**
   * <p>A reporting URI, which CloudFront uses as the value of the <code>report</code> directive in
   * 			the <code>X-XSS-Protection</code> header.</p>
   *          <p>You cannot specify a <code>ReportUri</code> when <code>ModeBlock</code> is
   * 				<code>true</code>.</p>
   *          <p>For more information about using a reporting URL, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
   */
  ReportUri?: string;
}

/**
 * <p>A configuration for a set of security-related HTTP response headers. CloudFront adds these
 * 			headers to HTTP responses that it sends for requests that match a cache behavior
 * 			associated with this response headers policy.</p>
 */
export interface ResponseHeadersPolicySecurityHeadersConfig {
  /**
   * <p>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response
   * 			header and the header's value.</p>
   *          <p>For more information about the <code>X-XSS-Protection</code> HTTP response header, see
   * 				<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
   */
  XSSProtection?: ResponseHeadersPolicyXSSProtection;

  /**
   * <p>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header
   * 			and the header's value.</p>
   *          <p>For more information about the <code>X-Frame-Options</code> HTTP response header, see
   * 				<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>
   */
  FrameOptions?: ResponseHeadersPolicyFrameOptions;

  /**
   * <p>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header
   * 			and the header's value.</p>
   *          <p>For more information about the <code>Referrer-Policy</code> HTTP response header, see
   * 				<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>
   */
  ReferrerPolicy?: ResponseHeadersPolicyReferrerPolicy;

  /**
   * <p>The policy directives and their values that CloudFront includes as values for the
   * 				<code>Content-Security-Policy</code> HTTP response header.</p>
   *          <p>For more information about the <code>Content-Security-Policy</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a> in the MDN Web Docs.</p>
   */
  ContentSecurityPolicy?: ResponseHeadersPolicyContentSecurityPolicy;

  /**
   * <p>Determines whether CloudFront includes the <code>X-Content-Type-Options</code> HTTP response
   * 			header with its value set to <code>nosniff</code>.</p>
   *          <p>For more information about the <code>X-Content-Type-Options</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">X-Content-Type-Options</a> in the MDN Web Docs.</p>
   */
  ContentTypeOptions?: ResponseHeadersPolicyContentTypeOptions;

  /**
   * <p>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP
   * 			response header and the header's value.</p>
   *          <p>For more information about the <code>Strict-Transport-Security</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> in the MDN Web Docs.</p>
   */
  StrictTransportSecurity?: ResponseHeadersPolicyStrictTransportSecurity;
}

/**
 * <p>A configuration for enabling the <code>Server-Timing</code> header in HTTP responses
 * 			sent from CloudFront. CloudFront adds this header to HTTP responses that it sends in response to
 * 			requests that match a cache behavior that's associated with this response headers
 * 			policy.</p>
 *          <p>You can use the <code>Server-Timing</code> header to view metrics that can help you
 * 			gain insights about the behavior and performance of CloudFront. For example, you can see which
 * 			cache layer served a cache hit, or the first byte latency from the origin when there was
 * 			a cache miss. You can use the metrics in the <code>Server-Timing</code> header to
 * 			troubleshoot issues or test the efficiency of your CloudFront configuration. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#server-timing-header">Server-Timing header</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface ResponseHeadersPolicyServerTimingHeadersConfig {
  /**
   * <p>A Boolean that determines whether CloudFront adds the <code>Server-Timing</code> header to
   * 			HTTP responses that it sends in response to requests that match a cache behavior that's
   * 			associated with this response headers policy.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>A number 0–100 (inclusive) that specifies the percentage of responses that you want
   * 			CloudFront to add the <code>Server-Timing</code> header to. When you set the sampling rate to
   * 			100, CloudFront adds the <code>Server-Timing</code> header to the HTTP response for every
   * 			request that matches the cache behavior that this response headers policy is attached
   * 			to. When you set it to 50, CloudFront adds the header to 50% of the responses for requests
   * 			that match the cache behavior. You can set the sampling rate to any number 0–100 with up
   * 			to four decimal places.</p>
   */
  SamplingRate?: number;
}

/**
 * <p>A response headers policy configuration.</p>
 *          <p>A response headers policy configuration contains metadata about the response headers policy,
 * 			and configurations for sets of HTTP response headers.</p>
 */
export interface ResponseHeadersPolicyConfig {
  /**
   * <p>A comment to describe the response headers policy.</p>
   *          <p>The comment cannot be longer than 128 characters.</p>
   */
  Comment?: string;

  /**
   * <p>A name to identify the response headers policy.</p>
   *          <p>The name must be unique for response headers policies in this Amazon Web Services account.</p>
   */
  Name: string | undefined;

  /**
   * <p>A configuration for a set of HTTP response headers that are used for cross-origin
   * 			resource sharing (CORS).</p>
   */
  CorsConfig?: ResponseHeadersPolicyCorsConfig;

  /**
   * <p>A configuration for a set of security-related HTTP response headers.</p>
   */
  SecurityHeadersConfig?: ResponseHeadersPolicySecurityHeadersConfig;

  /**
   * <p>A configuration for enabling the <code>Server-Timing</code> header in HTTP responses
   * 			sent from CloudFront.</p>
   */
  ServerTimingHeadersConfig?: ResponseHeadersPolicyServerTimingHeadersConfig;

  /**
   * <p>A configuration for a set of custom HTTP response headers.</p>
   */
  CustomHeadersConfig?: ResponseHeadersPolicyCustomHeadersConfig;

  /**
   * <p>A configuration for a set of HTTP headers to remove from the HTTP response.</p>
   */
  RemoveHeadersConfig?: ResponseHeadersPolicyRemoveHeadersConfig;
}

export interface CreateResponseHeadersPolicyRequest {
  /**
   * <p>Contains metadata about the response headers policy, and a set of configurations that
   * 			specify the HTTP headers.</p>
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig | undefined;
}

/**
 * <p>A response headers policy.</p>
 *          <p>A response headers policy contains information about a set of HTTP response headers.</p>
 *          <p>After you create a response headers policy, you can use its ID to attach it to one or more
 * 			cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the
 * 			response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to
 * 			requests that match the cache behavior. CloudFront adds or removes response headers according
 * 			to the configuration of the response headers policy.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface ResponseHeadersPolicy {
  /**
   * <p>The identifier for the response headers policy.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date and time when the response headers policy was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A response headers policy configuration.</p>
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig | undefined;
}

/**
 * @internal
 */
export const KeyPairIdsFilterSensitiveLog = (obj: KeyPairIds): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KGKeyPairIdsFilterSensitiveLog = (obj: KGKeyPairIds): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActiveTrustedKeyGroupsFilterSensitiveLog = (obj: ActiveTrustedKeyGroups): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SignerFilterSensitiveLog = (obj: Signer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActiveTrustedSignersFilterSensitiveLog = (obj: ActiveTrustedSigners): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AliasesFilterSensitiveLog = (obj: Aliases): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AliasICPRecordalFilterSensitiveLog = (obj: AliasICPRecordal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CachedMethodsFilterSensitiveLog = (obj: CachedMethods): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllowedMethodsFilterSensitiveLog = (obj: AllowedMethods): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateAliasRequestFilterSensitiveLog = (obj: AssociateAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CookieNamesFilterSensitiveLog = (obj: CookieNames): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CookiePreferenceFilterSensitiveLog = (obj: CookiePreference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HeadersFilterSensitiveLog = (obj: Headers): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryStringCacheKeysFilterSensitiveLog = (obj: QueryStringCacheKeys): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ForwardedValuesFilterSensitiveLog = (obj: ForwardedValues): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunctionAssociationFilterSensitiveLog = (obj: FunctionAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunctionAssociationsFilterSensitiveLog = (obj: FunctionAssociations): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LambdaFunctionAssociationFilterSensitiveLog = (obj: LambdaFunctionAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LambdaFunctionAssociationsFilterSensitiveLog = (obj: LambdaFunctionAssociations): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrustedKeyGroupsFilterSensitiveLog = (obj: TrustedKeyGroups): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrustedSignersFilterSensitiveLog = (obj: TrustedSigners): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheBehaviorFilterSensitiveLog = (obj: CacheBehavior): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheBehaviorsFilterSensitiveLog = (obj: CacheBehaviors): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CachePolicyCookiesConfigFilterSensitiveLog = (obj: CachePolicyCookiesConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CachePolicyHeadersConfigFilterSensitiveLog = (obj: CachePolicyHeadersConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryStringNamesFilterSensitiveLog = (obj: QueryStringNames): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CachePolicyQueryStringsConfigFilterSensitiveLog = (obj: CachePolicyQueryStringsConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParametersInCacheKeyAndForwardedToOriginFilterSensitiveLog = (
  obj: ParametersInCacheKeyAndForwardedToOrigin
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CachePolicyConfigFilterSensitiveLog = (obj: CachePolicyConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CachePolicyFilterSensitiveLog = (obj: CachePolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CachePolicySummaryFilterSensitiveLog = (obj: CachePolicySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CachePolicyListFilterSensitiveLog = (obj: CachePolicyList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyDistributionRequestFilterSensitiveLog = (obj: CopyDistributionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomErrorResponseFilterSensitiveLog = (obj: CustomErrorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomErrorResponsesFilterSensitiveLog = (obj: CustomErrorResponses): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultCacheBehaviorFilterSensitiveLog = (obj: DefaultCacheBehavior): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingConfigFilterSensitiveLog = (obj: LoggingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatusCodesFilterSensitiveLog = (obj: StatusCodes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginGroupFailoverCriteriaFilterSensitiveLog = (obj: OriginGroupFailoverCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginGroupMemberFilterSensitiveLog = (obj: OriginGroupMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginGroupMembersFilterSensitiveLog = (obj: OriginGroupMembers): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginGroupFilterSensitiveLog = (obj: OriginGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginGroupsFilterSensitiveLog = (obj: OriginGroups): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginCustomHeaderFilterSensitiveLog = (obj: OriginCustomHeader): any => ({
  ...obj,
  ...(obj.HeaderValue && { HeaderValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CustomHeadersFilterSensitiveLog = (obj: CustomHeaders): any => ({
  ...obj,
  ...(obj.Items && { Items: obj.Items.map((item) => OriginCustomHeaderFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const OriginSslProtocolsFilterSensitiveLog = (obj: OriginSslProtocols): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomOriginConfigFilterSensitiveLog = (obj: CustomOriginConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginShieldFilterSensitiveLog = (obj: OriginShield): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3OriginConfigFilterSensitiveLog = (obj: S3OriginConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginFilterSensitiveLog = (obj: Origin): any => ({
  ...obj,
  ...(obj.CustomHeaders && { CustomHeaders: CustomHeadersFilterSensitiveLog(obj.CustomHeaders) }),
});

/**
 * @internal
 */
export const OriginsFilterSensitiveLog = (obj: Origins): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeoRestrictionFilterSensitiveLog = (obj: GeoRestriction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestrictionsFilterSensitiveLog = (obj: Restrictions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ViewerCertificateFilterSensitiveLog = (obj: ViewerCertificate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DistributionConfigFilterSensitiveLog = (obj: DistributionConfig): any => ({
  ...obj,
  ...(obj.Comment && { Comment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DistributionFilterSensitiveLog = (obj: Distribution): any => ({
  ...obj,
  ...(obj.DistributionConfig && { DistributionConfig: DistributionConfigFilterSensitiveLog(obj.DistributionConfig) }),
});

/**
 * @internal
 */
export const CopyDistributionResultFilterSensitiveLog = (obj: CopyDistributionResult): any => ({
  ...obj,
  ...(obj.Distribution && { Distribution: DistributionFilterSensitiveLog(obj.Distribution) }),
});

/**
 * @internal
 */
export const CreateCachePolicyRequestFilterSensitiveLog = (obj: CreateCachePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCachePolicyResultFilterSensitiveLog = (obj: CreateCachePolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudFrontOriginAccessIdentityConfigFilterSensitiveLog = (
  obj: CloudFrontOriginAccessIdentityConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCloudFrontOriginAccessIdentityRequestFilterSensitiveLog = (
  obj: CreateCloudFrontOriginAccessIdentityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudFrontOriginAccessIdentityFilterSensitiveLog = (obj: CloudFrontOriginAccessIdentity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCloudFrontOriginAccessIdentityResultFilterSensitiveLog = (
  obj: CreateCloudFrontOriginAccessIdentityResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StagingDistributionDnsNamesFilterSensitiveLog = (obj: StagingDistributionDnsNames): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContinuousDeploymentSingleHeaderConfigFilterSensitiveLog = (
  obj: ContinuousDeploymentSingleHeaderConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SessionStickinessConfigFilterSensitiveLog = (obj: SessionStickinessConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContinuousDeploymentSingleWeightConfigFilterSensitiveLog = (
  obj: ContinuousDeploymentSingleWeightConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrafficConfigFilterSensitiveLog = (obj: TrafficConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContinuousDeploymentPolicyConfigFilterSensitiveLog = (obj: ContinuousDeploymentPolicyConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContinuousDeploymentPolicyRequestFilterSensitiveLog = (
  obj: CreateContinuousDeploymentPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContinuousDeploymentPolicyFilterSensitiveLog = (obj: ContinuousDeploymentPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContinuousDeploymentPolicyResultFilterSensitiveLog = (
  obj: CreateContinuousDeploymentPolicyResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDistributionRequestFilterSensitiveLog = (obj: CreateDistributionRequest): any => ({
  ...obj,
  ...(obj.DistributionConfig && { DistributionConfig: DistributionConfigFilterSensitiveLog(obj.DistributionConfig) }),
});

/**
 * @internal
 */
export const CreateDistributionResultFilterSensitiveLog = (obj: CreateDistributionResult): any => ({
  ...obj,
  ...(obj.Distribution && { Distribution: DistributionFilterSensitiveLog(obj.Distribution) }),
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagsFilterSensitiveLog = (obj: Tags): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DistributionConfigWithTagsFilterSensitiveLog = (obj: DistributionConfigWithTags): any => ({
  ...obj,
  ...(obj.DistributionConfig && { DistributionConfig: DistributionConfigFilterSensitiveLog(obj.DistributionConfig) }),
});

/**
 * @internal
 */
export const CreateDistributionWithTagsRequestFilterSensitiveLog = (obj: CreateDistributionWithTagsRequest): any => ({
  ...obj,
  ...(obj.DistributionConfigWithTags && {
    DistributionConfigWithTags: DistributionConfigWithTagsFilterSensitiveLog(obj.DistributionConfigWithTags),
  }),
});

/**
 * @internal
 */
export const CreateDistributionWithTagsResultFilterSensitiveLog = (obj: CreateDistributionWithTagsResult): any => ({
  ...obj,
  ...(obj.Distribution && { Distribution: DistributionFilterSensitiveLog(obj.Distribution) }),
});

/**
 * @internal
 */
export const ContentTypeProfileFilterSensitiveLog = (obj: ContentTypeProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContentTypeProfilesFilterSensitiveLog = (obj: ContentTypeProfiles): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContentTypeProfileConfigFilterSensitiveLog = (obj: ContentTypeProfileConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryArgProfileFilterSensitiveLog = (obj: QueryArgProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryArgProfilesFilterSensitiveLog = (obj: QueryArgProfiles): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryArgProfileConfigFilterSensitiveLog = (obj: QueryArgProfileConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldLevelEncryptionConfigFilterSensitiveLog = (obj: FieldLevelEncryptionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFieldLevelEncryptionConfigRequestFilterSensitiveLog = (
  obj: CreateFieldLevelEncryptionConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldLevelEncryptionFilterSensitiveLog = (obj: FieldLevelEncryption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFieldLevelEncryptionConfigResultFilterSensitiveLog = (
  obj: CreateFieldLevelEncryptionConfigResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldPatternsFilterSensitiveLog = (obj: FieldPatterns): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionEntityFilterSensitiveLog = (obj: EncryptionEntity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionEntitiesFilterSensitiveLog = (obj: EncryptionEntities): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldLevelEncryptionProfileConfigFilterSensitiveLog = (obj: FieldLevelEncryptionProfileConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFieldLevelEncryptionProfileRequestFilterSensitiveLog = (
  obj: CreateFieldLevelEncryptionProfileRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldLevelEncryptionProfileFilterSensitiveLog = (obj: FieldLevelEncryptionProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFieldLevelEncryptionProfileResultFilterSensitiveLog = (
  obj: CreateFieldLevelEncryptionProfileResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunctionConfigFilterSensitiveLog = (obj: FunctionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFunctionRequestFilterSensitiveLog = (obj: CreateFunctionRequest): any => ({
  ...obj,
  ...(obj.FunctionCode && { FunctionCode: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FunctionMetadataFilterSensitiveLog = (obj: FunctionMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunctionSummaryFilterSensitiveLog = (obj: FunctionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFunctionResultFilterSensitiveLog = (obj: CreateFunctionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PathsFilterSensitiveLog = (obj: Paths): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvalidationBatchFilterSensitiveLog = (obj: InvalidationBatch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInvalidationRequestFilterSensitiveLog = (obj: CreateInvalidationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvalidationFilterSensitiveLog = (obj: Invalidation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInvalidationResultFilterSensitiveLog = (obj: CreateInvalidationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeyGroupConfigFilterSensitiveLog = (obj: KeyGroupConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateKeyGroupRequestFilterSensitiveLog = (obj: CreateKeyGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeyGroupFilterSensitiveLog = (obj: KeyGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateKeyGroupResultFilterSensitiveLog = (obj: CreateKeyGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RealtimeMetricsSubscriptionConfigFilterSensitiveLog = (obj: RealtimeMetricsSubscriptionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringSubscriptionFilterSensitiveLog = (obj: MonitoringSubscription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMonitoringSubscriptionRequestFilterSensitiveLog = (
  obj: CreateMonitoringSubscriptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMonitoringSubscriptionResultFilterSensitiveLog = (obj: CreateMonitoringSubscriptionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginAccessControlConfigFilterSensitiveLog = (obj: OriginAccessControlConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOriginAccessControlRequestFilterSensitiveLog = (obj: CreateOriginAccessControlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginAccessControlFilterSensitiveLog = (obj: OriginAccessControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOriginAccessControlResultFilterSensitiveLog = (obj: CreateOriginAccessControlResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginRequestPolicyCookiesConfigFilterSensitiveLog = (obj: OriginRequestPolicyCookiesConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginRequestPolicyHeadersConfigFilterSensitiveLog = (obj: OriginRequestPolicyHeadersConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginRequestPolicyQueryStringsConfigFilterSensitiveLog = (
  obj: OriginRequestPolicyQueryStringsConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginRequestPolicyConfigFilterSensitiveLog = (obj: OriginRequestPolicyConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOriginRequestPolicyRequestFilterSensitiveLog = (obj: CreateOriginRequestPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginRequestPolicyFilterSensitiveLog = (obj: OriginRequestPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOriginRequestPolicyResultFilterSensitiveLog = (obj: CreateOriginRequestPolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublicKeyConfigFilterSensitiveLog = (obj: PublicKeyConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePublicKeyRequestFilterSensitiveLog = (obj: CreatePublicKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublicKeyFilterSensitiveLog = (obj: PublicKey): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePublicKeyResultFilterSensitiveLog = (obj: CreatePublicKeyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisStreamConfigFilterSensitiveLog = (obj: KinesisStreamConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndPointFilterSensitiveLog = (obj: EndPoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRealtimeLogConfigRequestFilterSensitiveLog = (obj: CreateRealtimeLogConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RealtimeLogConfigFilterSensitiveLog = (obj: RealtimeLogConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRealtimeLogConfigResultFilterSensitiveLog = (obj: CreateRealtimeLogConfigResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyAccessControlAllowHeadersFilterSensitiveLog = (
  obj: ResponseHeadersPolicyAccessControlAllowHeaders
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyAccessControlAllowMethodsFilterSensitiveLog = (
  obj: ResponseHeadersPolicyAccessControlAllowMethods
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyAccessControlAllowOriginsFilterSensitiveLog = (
  obj: ResponseHeadersPolicyAccessControlAllowOrigins
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyAccessControlExposeHeadersFilterSensitiveLog = (
  obj: ResponseHeadersPolicyAccessControlExposeHeaders
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyCorsConfigFilterSensitiveLog = (obj: ResponseHeadersPolicyCorsConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyCustomHeaderFilterSensitiveLog = (obj: ResponseHeadersPolicyCustomHeader): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyCustomHeadersConfigFilterSensitiveLog = (
  obj: ResponseHeadersPolicyCustomHeadersConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyRemoveHeaderFilterSensitiveLog = (obj: ResponseHeadersPolicyRemoveHeader): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyRemoveHeadersConfigFilterSensitiveLog = (
  obj: ResponseHeadersPolicyRemoveHeadersConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyContentSecurityPolicyFilterSensitiveLog = (
  obj: ResponseHeadersPolicyContentSecurityPolicy
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyContentTypeOptionsFilterSensitiveLog = (
  obj: ResponseHeadersPolicyContentTypeOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyFrameOptionsFilterSensitiveLog = (obj: ResponseHeadersPolicyFrameOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyReferrerPolicyFilterSensitiveLog = (
  obj: ResponseHeadersPolicyReferrerPolicy
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyStrictTransportSecurityFilterSensitiveLog = (
  obj: ResponseHeadersPolicyStrictTransportSecurity
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyXSSProtectionFilterSensitiveLog = (obj: ResponseHeadersPolicyXSSProtection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicySecurityHeadersConfigFilterSensitiveLog = (
  obj: ResponseHeadersPolicySecurityHeadersConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyServerTimingHeadersConfigFilterSensitiveLog = (
  obj: ResponseHeadersPolicyServerTimingHeadersConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyConfigFilterSensitiveLog = (obj: ResponseHeadersPolicyConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResponseHeadersPolicyRequestFilterSensitiveLog = (obj: CreateResponseHeadersPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyFilterSensitiveLog = (obj: ResponseHeadersPolicy): any => ({
  ...obj,
});
