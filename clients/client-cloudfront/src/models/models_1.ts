// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { CloudFrontServiceException as __BaseException } from "./CloudFrontServiceException";
import {
  CachePolicy,
  FunctionSummary,
  KeyGroup,
  OriginRequestPolicy,
  RealtimeLogConfig,
  ResponseHeadersPolicy,
  StreamingDistributionConfig,
} from "./models_0";

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

export namespace KeyPairIds {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyPairIds): any => ({
    ...obj,
  });
}

/**
 * <p>A list of identifiers for the public keys that CloudFront can use to verify the
 * 			signatures of signed URLs and signed cookies.</p>
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

export namespace KGKeyPairIds {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KGKeyPairIds): any => ({
    ...obj,
  });
}

/**
 * <p>A list of key groups, and the public keys in each key group,
 * 			that CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
 */
export interface ActiveTrustedKeyGroups {
  /**
   * <p>This field is <code>true</code> if any of the key groups have public keys that CloudFront can use
   * 			to verify the signatures of signed URLs and signed cookies. If not, this field is
   * 			<code>false</code>.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The number of key groups in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of key groups, including the identifiers of the public keys in each key group that
   * 			CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
   */
  Items?: KGKeyPairIds[];
}

export namespace ActiveTrustedKeyGroups {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActiveTrustedKeyGroups): any => ({
    ...obj,
  });
}

/**
 * <p>A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to
 * 			verify the signatures of signed URLs and signed cookies.</p>
 */
export interface Signer {
  /**
   * <p>An Amazon Web Services account number that contains active CloudFront key pairs that CloudFront can use to verify the
   * 			signatures of signed URLs and signed cookies. If the Amazon Web Services account that owns the key pairs
   * 			is the same account that owns the CloudFront distribution, the value of this field is
   * 			<code>self</code>.</p>
   */
  AwsAccountNumber?: string;

  /**
   * <p>A list of CloudFront key pair identifiers.</p>
   */
  KeyPairIds?: KeyPairIds;
}

export namespace Signer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Signer): any => ({
    ...obj,
  });
}

/**
 * <p>A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use
 * 			to verify the signatures of signed URLs and signed cookies.</p>
 */
export interface ActiveTrustedSigners {
  /**
   * <p>This field is <code>true</code> if any of the Amazon Web Services accounts in the list have active CloudFront
   * 			key pairs that CloudFront can use to verify the signatures of signed URLs and signed cookies.
   * 			If not, this field is <code>false</code>.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The number of Amazon Web Services accounts in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of Amazon Web Services accounts and the identifiers of active CloudFront key pairs in each account that
   * 			CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
   */
  Items?: Signer[];
}

export namespace ActiveTrustedSigners {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActiveTrustedSigners): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about CNAMEs (alternate domain names), if any,
 * 			for this distribution. </p>
 */
export interface Aliases {
  /**
   * <p>The number of CNAME aliases, if any, that you want to associate with this
   * 			distribution.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains the CNAME aliases, if any, that you want to associate with
   * 			this distribution.</p>
   */
  Items?: string[];
}

export namespace Aliases {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Aliases): any => ({
    ...obj,
  });
}

export type ICPRecordalStatus = "APPROVED" | "PENDING" | "SUSPENDED";

/**
 * <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content
 * 			publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP
 * 			recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure
 * 			it yourself.</p>
 * 		       <p>For more information about ICP recordals, see  <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html">
 * 			Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>
 */
export interface AliasICPRecordal {
  /**
   * <p>A domain name associated with a distribution. </p>
   */
  CNAME?: string;

  /**
   * <p>The Internet Content Provider (ICP) recordal status for a CNAME. The ICPRecordalStatus is set to
   * 			APPROVED for all CNAMEs (aliases) in regions outside of China. </p>
   * 		       <p>The status values returned are the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>APPROVED</b> indicates that the associated CNAME has a valid ICP recordal number.
   * 			Multiple CNAMEs can be associated with a distribution, and CNAMEs can correspond to different ICP recordals. To be marked as
   * 			APPROVED, that is, valid to use with China region, a CNAME must have one ICP recordal number associated with it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SUSPENDED</b> indicates that the associated CNAME does not have a valid ICP recordal
   * 				number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PENDING</b> indicates that CloudFront can't determine the ICP recordal status of the
   * 				CNAME associated with the distribution because there was an error in trying to determine the status. You can try again
   * 				to see if the error is resolved in which case CloudFront returns an APPROVED or SUSPENDED status.</p>
   *             </li>
   *          </ul>
   */
  ICPRecordalStatus?: ICPRecordalStatus | string;
}

export namespace AliasICPRecordal {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AliasICPRecordal): any => ({
    ...obj,
  });
}

export type Method = "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT";

/**
 * <p>A complex type that controls whether CloudFront caches the response to requests using the
 * 			specified HTTP methods. There are two choices:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p>
 * 			         </li>
 *             <li>
 * 				           <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and
 * 						<code>OPTIONS</code> requests.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward
 * 			Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the
 * 			responses to be cached correctly. </p>
 */
export interface CachedMethods {
  /**
   * <p>The number of HTTP methods for which you want CloudFront to cache responses. Valid values are
   * 				<code>2</code> (for caching responses to <code>GET</code> and <code>HEAD</code> requests)
   * 			and <code>3</code> (for caching responses to <code>GET</code>, <code>HEAD</code>, and
   * 				<code>OPTIONS</code> requests).</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains the HTTP methods that you want CloudFront to cache responses
   * 			to.</p>
   */
  Items: (Method | string)[] | undefined;
}

export namespace CachedMethods {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CachedMethods): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your
 * 			Amazon S3 bucket or your custom origin. There are three choices:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p>
 * 			         </li>
 *             <li>
 * 				           <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code>
 * 					requests.</p>
 * 			         </li>
 *             <li>
 * 				           <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and
 * 						<code>DELETE</code> requests.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or
 * 			to your custom origin so users can't perform operations that you don't want them to. For
 * 			example, you might not want users to have permissions to delete objects from your
 * 			origin.</p>
 */
export interface AllowedMethods {
  /**
   * <p>The number of HTTP methods that you want CloudFront to forward to your origin. Valid values
   * 			are 2 (for <code>GET</code> and <code>HEAD</code> requests), 3 (for <code>GET</code>,
   * 				<code>HEAD</code>, and <code>OPTIONS</code> requests) and 7 (for <code>GET, HEAD, OPTIONS,
   * 				PUT, PATCH, POST</code>, and <code>DELETE</code> requests).</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains the HTTP methods that you want CloudFront to process and forward
   * 			to your origin.</p>
   */
  Items: (Method | string)[] | undefined;

  /**
   * <p>A complex type that controls whether CloudFront caches the response to requests using the
   * 			specified HTTP methods. There are two choices:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and
   * 						<code>OPTIONS</code> requests.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward
   * 			Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the
   * 			responses to be cached correctly. </p>
   */
  CachedMethods?: CachedMethods;
}

export namespace AllowedMethods {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllowedMethods): any => ({
    ...obj,
  });
}

export type ItemSelection = "all" | "none" | "whitelist";

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

export namespace CookieNames {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CookieNames): any => ({
    ...obj,
  });
}

/**
 * <p>This field is deprecated. We recommend that you use a cache policy or an origin
 * 			request policy instead of this field.</p>
 * 		       <p>If you want to include cookies in the cache key, use <code>CookiesConfig</code> in a
 * 			cache policy. See <code>CachePolicy</code>.</p>
 * 		       <p>If you want to send cookies to the origin but not include them in the cache key, use
 * 			<code>CookiesConfig</code> in an origin request policy. See
 * 			<code>OriginRequestPolicy</code>.</p>
 * 		       <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin
 * 			and, if so, which ones. For more information about forwarding cookies to the origin, see
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content
 * 				Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface CookiePreference {
  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field.</p>
   * 		       <p>If you want to include cookies in the cache key, use a cache policy. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>If you want to send cookies to the origin but not include them in the cache key, use origin
   * 			request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>Specifies which cookies to forward to the origin for this cache behavior: all, none, or
   * 			the list of cookies specified in the <code>WhitelistedNames</code> complex type.</p>
   * 		       <p>Amazon S3 doesn't process cookies. When the cache behavior is forwarding requests to an
   * 			Amazon S3 origin, specify none for the <code>Forward</code> element.</p>
   */
  Forward: ItemSelection | string | undefined;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field.</p>
   * 		       <p>If you want to include cookies in the cache key, use a cache policy. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>If you want to send cookies to the origin but not include them in the cache key, use an
   * 			origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>Required if you specify <code>whitelist</code> for the value of <code>Forward</code>.
   * 			A complex type that specifies how many different cookies you want CloudFront to forward to the
   * 			origin for this cache behavior and, if you want to forward selected cookies, the names of
   * 			those cookies.</p>
   * 		       <p>If you specify <code>all</code> or <code>none</code> for the value of <code>Forward</code>, omit
   * 				<code>WhitelistedNames</code>. If you change the value of <code>Forward</code> from
   * 			<code>whitelist</code> to <code>all</code> or <code>none</code> and you don't delete the <code>WhitelistedNames</code>
   * 			element and its child elements, CloudFront deletes them automatically.</p>
   * 		       <p>For the current limit on the number of cookie names that you can whitelist for each
   * 			cache behavior, see <a href="https://docs.aws.amazon.com/general/latest/gr/xrefaws_service_limits.html#limits_cloudfront">
   * 				CloudFront Limits</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  WhitelistedNames?: CookieNames;
}

export namespace CookiePreference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CookiePreference): any => ({
    ...obj,
  });
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

export namespace Headers {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Headers): any => ({
    ...obj,
  });
}

/**
 * <p>This field is deprecated. We recommend that you use a cache policy or an origin
 * 			request policy instead of this field.</p>
 * 		       <p>If you want to include query strings in the cache key, use
 * 			<code>QueryStringsConfig</code> in a cache policy. See
 * 			<code>CachePolicy</code>.</p>
 * 		       <p>If you want to send query strings to the origin but not include them in the cache key,
 * 			use <code>QueryStringsConfig</code> in an origin request policy. See
 * 			<code>OriginRequestPolicy</code>.</p>
 * 		       <p>A complex type that contains information about the query string parameters that you want
 * 			CloudFront to use for caching for a cache behavior.
 * 		</p>
 */
export interface QueryStringCacheKeys {
  /**
   * <p>The number of <code>whitelisted</code> query string parameters for a cache
   * 			behavior.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list that contains the query string parameters that you want CloudFront to use
   * 			as a basis for caching for a cache behavior. If <code>Quantity</code> is 0, you can omit
   * 			<code>Items</code>. </p>
   */
  Items?: string[];
}

export namespace QueryStringCacheKeys {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryStringCacheKeys): any => ({
    ...obj,
  });
}

/**
 * <p>This field is deprecated. We recommend that you use a cache policy or an origin
 * 			request policy instead of this field.</p>
 * 		       <p>If you want to include values in the cache key, use a cache policy. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * 		       <p>If you want to send values to the origin but not include them in the cache key, use an
 * 			origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 * 		       <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
 */
export interface ForwardedValues {
  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field.</p>
   * 		       <p>If you want to include query strings in the cache key, use a cache policy. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>If you want to send query strings to the origin but not include them in the cache key, use
   * 			an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>Indicates whether you want CloudFront to forward query strings to the origin that is
   * 			associated with this cache behavior and cache based on the query string parameters. CloudFront
   * 			behavior depends on the value of <code>QueryString</code> and on the values that you specify
   * 			for <code>QueryStringCacheKeys</code>, if any:</p>
   * 		       <p>If you specify true for <code>QueryString</code> and you don't specify any values for
   * 				<code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin
   * 			and caches based on all query string parameters. Depending on how many query string parameters
   * 			and values you have, this can adversely affect performance because CloudFront must forward more
   * 			requests to the origin.</p>
   * 		       <p>If you specify true for <code>QueryString</code> and you specify one or more values for
   * 				<code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin,
   * 			but it only caches based on the query string parameters that you specify.</p>
   * 		       <p>If you specify false for <code>QueryString</code>, CloudFront doesn't forward any query
   * 			string parameters to the origin, and doesn't cache based on query string parameters.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html">Configuring CloudFront to Cache Based on Query String Parameters</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  QueryString: boolean | undefined;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field.</p>
   * 		       <p>If you want to include cookies in the cache key, use a cache policy. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>If you want to send cookies to the origin but not include them in the cache key, use an
   * 			origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin
   * 			and, if so, which ones. For more information about forwarding cookies to the origin, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches, and Logs Cookies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Cookies: CookiePreference | undefined;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field.</p>
   * 		       <p>If you want to include headers in the cache key, use a cache policy. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>If you want to send headers to the origin but not include them in the cache key, use an
   * 			origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>A complex type that specifies the <code>Headers</code>, if any, that you want CloudFront to forward to the
   * 			origin for this cache behavior (whitelisted headers). For the headers that you specify, CloudFront also caches
   * 			separate versions of a specified object that is based on the header values in viewer requests.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html">
   * 			Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Headers?: Headers;

  /**
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin
   * 			request policy instead of this field.</p>
   * 		       <p>If you want to include query strings in the cache key, use a cache policy. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>If you want to send query strings to the origin but not include them in the cache key, use
   * 			an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>A complex type that contains information about the query string parameters that you
   * 			want CloudFront to use for caching for this cache behavior.</p>
   */
  QueryStringCacheKeys?: QueryStringCacheKeys;
}

export namespace ForwardedValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForwardedValues): any => ({
    ...obj,
  });
}

export type EventType = "origin-request" | "origin-response" | "viewer-request" | "viewer-response";

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
   * 			<code>viewer-response</code>. You cannot use origin-facing event types
   * 			(<code>origin-request</code> and <code>origin-response</code>) with a CloudFront
   * 			function.</p>
   */
  EventType: EventType | string | undefined;
}

export namespace FunctionAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FunctionAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution.
 * 			CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a
 * 			cache behavior.</p>
 */
export interface FunctionAssociations {
  /**
   * <p>The number of CloudFront functions in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The CloudFront functions that are associated with a cache behavior in a CloudFront distribution.  CloudFront
   * 			functions must be published to the <code>LIVE</code> stage to associate them with a
   * 			cache behavior.</p>
   */
  Items?: FunctionAssociation[];
}

export namespace FunctionAssociations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FunctionAssociations): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains a Lambda@Edge function association.</p>
 */
export interface LambdaFunctionAssociation {
  /**
   * <p>The ARN of the Lambda@Edge function. You must specify the ARN of a function version; you can't specify an alias
   * 			or $LATEST.</p>
   */
  LambdaFunctionARN: string | undefined;

  /**
   * <p>Specifies the event type that triggers a Lambda@Edge function invocation. You can specify the following values:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>viewer-request</code>: The function executes when CloudFront receives a request from a viewer
   * 				and before it checks to see whether the requested object is in the edge cache. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>origin-request</code>: The function executes only when CloudFront sends a request to your
   * 					origin. When the requested object is in the edge cache, the function doesn't
   * 					execute.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>origin-response</code>: The function executes after CloudFront receives a response from the origin and
   * 				before it caches the object in the response. When the requested object is in the edge cache, the function doesn't execute.</p>
   * 			         </li>
   *             <li>
   *                <p>
   *                   <code>viewer-response</code>: The function executes before CloudFront returns the requested object to the viewer.
   * 				The function executes regardless of whether the object was already in the edge cache.</p>
   * 				           <p>If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute.</p>
   * 			         </li>
   *          </ul>
   */
  EventType: EventType | string | undefined;

  /**
   * <p>A flag that allows a Lambda@Edge function to have read access to the body content. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html">Accessing the Request Body by Choosing the
   * 				Include Body Option</a> in the Amazon CloudFront Developer Guide.</p>
   */
  IncludeBody?: boolean;
}

export namespace LambdaFunctionAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaFunctionAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that specifies a list of Lambda@Edge functions associations for a cache
 * 			behavior.</p>
 *
 * 		       <p>If you want to invoke one or more Lambda@Edge functions triggered by requests that match the
 * 				<code>PathPattern</code> of the cache behavior, specify the applicable values for
 * 				<code>Quantity</code> and <code>Items</code>. Note that there can be up to 4
 * 				<code>LambdaFunctionAssociation</code> items in this list (one for each possible value of
 * 				<code>EventType</code>) and each <code>EventType</code> can be associated with only one function.</p>
 *
 * 		       <p>If you don't want to invoke any Lambda@Edge functions for the requests that match
 * 				<code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit
 * 				<code>Items</code>. </p>
 */
export interface LambdaFunctionAssociations {
  /**
   * <p>The number of Lambda@Edge function associations for this cache behavior.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>
   *             <b>Optional</b>: A complex type that contains <code>LambdaFunctionAssociation</code> items
   * 			for this cache behavior. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   */
  Items?: LambdaFunctionAssociation[];
}

export namespace LambdaFunctionAssociations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaFunctionAssociations): any => ({
    ...obj,
  });
}

/**
 * <p>A list of key groups whose public keys CloudFront can use to verify the signatures of signed
 * 			URLs and signed cookies.</p>
 */
export interface TrustedKeyGroups {
  /**
   * <p>This field is <code>true</code> if any of the key groups in the list have public keys that
   * 			CloudFront can use to verify the signatures of signed URLs and signed cookies. If not, this
   * 			field is <code>false</code>.</p>
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

export namespace TrustedKeyGroups {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrustedKeyGroups): any => ({
    ...obj,
  });
}

/**
 * <p>A list of Amazon Web Services accounts whose public keys CloudFront can use to verify the signatures of signed
 * 			URLs and signed cookies.</p>
 */
export interface TrustedSigners {
  /**
   * <p>This field is <code>true</code> if any of the Amazon Web Services accounts have public keys that CloudFront can
   * 			use to verify the signatures of signed URLs and signed cookies. If not, this field is
   * 			<code>false</code>.</p>
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

export namespace TrustedSigners {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrustedSigners): any => ({
    ...obj,
  });
}

export type ViewerProtocolPolicy = "allow-all" | "https-only" | "redirect-to-https";

/**
 * <p>A complex type that describes how CloudFront processes requests.</p>
 * 		       <p>You must create at least as many cache behaviors (including the default cache behavior) as
 * 			you have origins if you want CloudFront to serve objects from all of the origins. Each cache
 * 			behavior specifies the one origin from which you want CloudFront to get objects. If you have
 * 			two origins and only the default cache behavior, the default cache behavior will cause
 * 			CloudFront to get objects from one of the origins, but the other origin is never used.</p>
 * 		       <p>For the current quota (formerly known as limit) on the number of cache behaviors that you
 * 			can add to a distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * 		       <p>If you don’t want to specify any cache behaviors, include only an empty
 * 			<code>CacheBehaviors</code> element. Don’t include an empty <code>CacheBehavior</code>
 * 			element because this is invalid.</p>
 * 		       <p>To delete all cache behaviors in an existing distribution, update the distribution
 * 			configuration and include only an empty <code>CacheBehaviors</code> element.</p>
 * 		       <p>To add, change, or remove one or more cache behaviors, update the distribution
 * 			configuration and specify all of the cache behaviors that you want to include in the updated
 * 			distribution.</p>
 * 		       <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface CacheBehavior {
  /**
   * <p>The pattern (for example, <code>images/*.jpg</code>) that specifies which requests to
   * 			apply the behavior to. When CloudFront receives a viewer request, the requested path is compared
   * 			with path patterns in the order in which cache behaviors are listed in the
   * 			distribution.</p>
   * 		       <note>
   * 			         <p>You can optionally include a slash (<code>/</code>) at the beginning of the path
   * 				pattern. For example, <code>/images/*.jpg</code>. CloudFront behavior is the same with or without
   * 				the leading <code>/</code>.</p>
   * 		       </note>
   * 		       <p>The path pattern for the default cache behavior is <code>*</code> and cannot be
   * 			changed. If the request for an object does not match the path pattern for any cache behaviors,
   * 			CloudFront applies the behavior in the default cache behavior.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesPathPattern">Path
   * 				Pattern</a> in the <i> Amazon CloudFront Developer Guide</i>.</p>
   */
  PathPattern: string | undefined;

  /**
   * <p>The value of <code>ID</code> for the origin that you want CloudFront to route requests to
   * 			when they match this cache behavior.</p>
   */
  TargetOriginId: string | undefined;

  /**
   * <important>
   * 			         <p>We recommend using <code>TrustedKeyGroups</code> instead of
   * 				<code>TrustedSigners</code>.</p>
   * 		       </important>
   * 		       <p>A list of Amazon Web Services account IDs whose public keys CloudFront can use to validate signed URLs or signed
   * 			cookies.</p>
   * 		       <p>When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies
   * 			for all requests that match the cache behavior. The URLs or cookies must be signed with
   * 			the private key of a CloudFront key pair in the trusted signer’s Amazon Web Services account. The signed URL
   * 			or cookie contains information about which public key CloudFront should use to verify the
   * 			signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  TrustedSigners?: TrustedSigners;

  /**
   * <p>A list of key groups that CloudFront can use to validate signed URLs or signed cookies.</p>
   * 		       <p>When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed
   * 			cookies for all requests that match the cache behavior. The URLs or cookies must be
   * 			signed with a private key whose corresponding public key is in the key group. The signed
   * 			URL or cookie contains information about which public key CloudFront should use to verify the
   * 			signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  TrustedKeyGroups?: TrustedKeyGroups;

  /**
   * <p>The protocol that viewers can use to access the files in the origin specified by
   * 				<code>TargetOriginId</code> when a request matches the path pattern in
   * 				<code>PathPattern</code>. You can specify the following options:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>allow-all</code>: Viewers can use HTTP or HTTPS.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront returns
   * 					an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The
   * 					viewer then resubmits the request using the new URL. </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an HTTP
   * 					status code of 403 (Forbidden). </p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information about requiring the HTTPS protocol, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html">Requiring HTTPS Between Viewers and CloudFront</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <note>
   * 			         <p>The only way to guarantee that viewers retrieve an object that was fetched from the origin
   * 				using HTTPS is never to use any other protocol to fetch the object. If you have
   * 				recently changed from HTTP to HTTPS, we recommend that you clear your objects’ cache
   * 				because cached objects are protocol agnostic. That means that an edge location will
   * 				return an object from the cache regardless of whether the current request protocol
   * 				matches the protocol used previously. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing Cache Expiration</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       </note>
   */
  ViewerProtocolPolicy: ViewerProtocolPolicy | string | undefined;

  /**
   * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your
   * 			Amazon S3 bucket or your custom origin. There are three choices:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code>
   * 					requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and
   * 						<code>DELETE</code> requests.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or
   * 			to your custom origin so users can't perform operations that you don't want them to. For
   * 			example, you might not want users to have permissions to delete objects from your
   * 			origin.</p>
   */
  AllowedMethods?: AllowedMethods;

  /**
   * <p>Indicates whether you want to distribute media files in the Microsoft Smooth Streaming
   * 			format using the origin that is associated with this cache behavior. If so, specify
   * 				<code>true</code>; if not, specify <code>false</code>. If you specify <code>true</code> for
   * 				<code>SmoothStreaming</code>, you can still distribute other content using this cache
   * 			behavior if the content matches the value of <code>PathPattern</code>. </p>
   */
  SmoothStreaming?: boolean;

  /**
   * <p>Whether you want CloudFront to automatically compress certain files for this cache behavior.
   * 			If so, specify true; if not, specify false. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html">Serving Compressed Files</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Compress?: boolean;

  /**
   * <p>A complex type that contains zero or more Lambda@Edge function associations for a cache
   * 			behavior.</p>
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociations;

  /**
   * <p>A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must
   * 			be published to the <code>LIVE</code> stage to associate them with a cache
   * 			behavior.</p>
   */
  FunctionAssociations?: FunctionAssociations;

  /**
   * <p>The value of <code>ID</code> for the field-level encryption configuration that you want CloudFront
   * 			to use for encrypting specific fields of data for this cache behavior.</p>
   */
  FieldLevelEncryptionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this
   * 			cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  RealtimeLogConfigArn?: string;

  /**
   * <p>The unique identifier of the cache policy that is attached to this cache behavior. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   *             <i>Amazon CloudFront Developer Guide</i>.</p>
   *         <p>A <code>CacheBehavior</code> must include either a
   *             <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you
   *             use a <code>CachePolicyId</code>.</p>
   */
  CachePolicyId?: string;

  /**
   * <p>The unique identifier of the origin request policy that is attached to this cache behavior.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>If you want to include values in the cache key, use a cache policy. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>If you want to send values to the origin but not include them in the cache key, use an
   * 			origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the
   *             <i>Amazon CloudFront Developer Guide</i>.</p>
   *         <p>A <code>CacheBehavior</code> must include either a
   *             <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you
   *             use a <code>CachePolicyId</code>.</p>
   * 		       <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
   */
  ForwardedValues?: ForwardedValues;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use the <code>MinTTL</code> field in a cache
   * 			policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been updated. For
   * 			more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">
   * 				Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>
   * 				Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to
   * 			forward all headers to your origin (under <code>Headers</code>, if you specify <code>1</code>
   * 			for <code>Quantity</code> and <code>*</code> for <code>Name</code>).</p>
   */
  MinTTL?: number;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use the <code>DefaultTTL</code> field in a
   * 			cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>The default amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been updated. The
   * 			value that you specify applies only when your origin does not add HTTP headers such as
   * 				<code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   * 				<code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays
   * 				in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  DefaultTTL?: number;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use the <code>MaxTTL</code> field in a cache
   * 			policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been updated. The
   * 			value that you specify applies only when your origin adds HTTP headers such as
   * 				<code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   * 				<code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays
   * 				in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  MaxTTL?: number;
}

export namespace CacheBehavior {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CacheBehavior): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.
 * 		</p>
 */
export interface CacheBehaviors {
  /**
   * <p>The number of cache behaviors for this distribution. </p>
   */
  Quantity: number | undefined;

  /**
   * <p>Optional: A complex type that contains cache behaviors for this distribution. If
   * 				<code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   */
  Items?: CacheBehavior[];
}

export namespace CacheBehaviors {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CacheBehaviors): any => ({
    ...obj,
  });
}

export type CachePolicyCookieBehavior = "all" | "allExcept" | "none" | "whitelist";

/**
 * <p>An object that determines whether any cookies in viewer requests (and if so, which cookies)
 * 			are included in the cache key and automatically included in requests that CloudFront sends to
 * 			the origin.</p>
 */
export interface CachePolicyCookiesConfig {
  /**
   * <p>Determines whether any cookies in viewer requests are included in the cache key and
   * 			automatically included in requests that CloudFront sends to the origin. Valid values
   * 			are:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>none</code> – Cookies in viewer requests are not included in the cache key and are
   * 					not automatically included in requests that CloudFront sends to the origin. Even when
   * 					this field is set to <code>none</code>, any cookies that are listed in an
   * 					<code>OriginRequestPolicy</code>
   *                   <i>are</i> included in origin
   * 					requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>whitelist</code> – The cookies in viewer requests that are listed in the
   * 					<code>CookieNames</code> type are included in the cache key and automatically
   * 					included in requests that CloudFront sends to the origin.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>allExcept</code> – All cookies in viewer requests that are <i>
   *                      <b>not</b>
   *                   </i> listed in the <code>CookieNames</code>
   * 					type are included in the cache key and automatically included in requests that
   * 					CloudFront sends to the origin.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>all</code> – All cookies in viewer requests are included in the cache key and are
   * 					automatically included in requests that CloudFront sends to the origin.</p>
   * 			         </li>
   *          </ul>
   */
  CookieBehavior: CachePolicyCookieBehavior | string | undefined;

  /**
   * <p>Contains a list of cookie names.</p>
   */
  Cookies?: CookieNames;
}

export namespace CachePolicyCookiesConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CachePolicyCookiesConfig): any => ({
    ...obj,
  });
}

export type CachePolicyHeaderBehavior = "none" | "whitelist";

/**
 * <p>An object that determines whether any HTTP headers (and if so, which headers) are included
 * 			in the cache key and automatically included in requests that CloudFront sends to the
 * 			origin.</p>
 */
export interface CachePolicyHeadersConfig {
  /**
   * <p>Determines whether any HTTP headers are included in the cache key and automatically
   * 			included in requests that CloudFront sends to the origin. Valid values are:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>none</code> – HTTP headers are not included in the cache key and are not
   * 					automatically included in requests that CloudFront sends to the origin. Even when this
   * 					field is set to <code>none</code>, any headers that are listed in an
   * 					<code>OriginRequestPolicy</code>
   *                   <i>are</i> included in origin
   * 					requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>whitelist</code> – The HTTP headers that are listed in the <code>Headers</code> type
   * 					are included in the cache key and are automatically included in requests that
   * 					CloudFront sends to the origin.</p>
   * 			         </li>
   *          </ul>
   */
  HeaderBehavior: CachePolicyHeaderBehavior | string | undefined;

  /**
   * <p>Contains a list of HTTP header names.</p>
   */
  Headers?: Headers;
}

export namespace CachePolicyHeadersConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CachePolicyHeadersConfig): any => ({
    ...obj,
  });
}

export type CachePolicyQueryStringBehavior = "all" | "allExcept" | "none" | "whitelist";

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

export namespace QueryStringNames {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryStringNames): any => ({
    ...obj,
  });
}

/**
 * <p>An object that determines whether any URL query strings in viewer requests (and if so, which
 * 			query strings) are included in the cache key and automatically included in requests that
 * 			CloudFront sends to the origin.</p>
 */
export interface CachePolicyQueryStringsConfig {
  /**
   * <p>Determines whether any URL query strings in viewer requests are included in the cache key
   * 			and automatically included in requests that CloudFront sends to the origin. Valid values
   * 			are:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>none</code> – Query strings in viewer requests are not included in the cache key and
   * 					are not automatically included in requests that CloudFront sends to the origin. Even
   * 					when this field is set to <code>none</code>, any query strings that are listed
   * 					in an <code>OriginRequestPolicy</code>
   *                   <i>are</i> included in
   * 					origin requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>whitelist</code> – The query strings in viewer requests that are listed in the
   * 					<code>QueryStringNames</code> type are included in the cache key and
   * 					automatically included in requests that CloudFront sends to the origin.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>allExcept</code> – All query strings in viewer requests that are <i>
   *                      <b>not</b>
   *                   </i> listed in the
   * 					<code>QueryStringNames</code> type are included in the cache key and
   * 					automatically included in requests that CloudFront sends to the origin.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>all</code> – All query strings in viewer requests are included in the cache key and
   * 					are automatically included in requests that CloudFront sends to the origin.</p>
   * 			         </li>
   *          </ul>
   */
  QueryStringBehavior: CachePolicyQueryStringBehavior | string | undefined;

  /**
   * <p>Contains the specific query strings in viewer requests that either <i>
   *                <b>are</b>
   *             </i> or <i>
   *                <b>are
   * 			not</b>
   *             </i> included in the cache key and automatically included in
   * 			requests that CloudFront sends to the origin. The behavior depends on whether the
   * 			<code>QueryStringBehavior</code> field in the <code>CachePolicyQueryStringsConfig</code>
   * 			type is set to <code>whitelist</code> (the listed query strings <i>
   *                <b>are</b>
   *             </i> included) or <code>allExcept</code> (the listed
   * 			query strings <i>
   *                <b>are not</b>
   *             </i> included,
   * 			but all other query strings are).</p>
   */
  QueryStrings?: QueryStringNames;
}

export namespace CachePolicyQueryStringsConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CachePolicyQueryStringsConfig): any => ({
    ...obj,
  });
}

/**
 * <p>This object determines the values that CloudFront includes in the cache key. These values can
 * 			include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an
 * 			object in its cache that it can return to the viewer.</p>
 * 		       <p>The headers, cookies, and query strings that are included in the cache key are automatically
 * 			included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t
 * 			find an object in its cache that matches the request’s cache key. If you want to send
 * 			values to the origin but <i>not</i> include them in the cache key, use
 * 			<code>OriginRequestPolicy</code>.</p>
 */
export interface ParametersInCacheKeyAndForwardedToOrigin {
  /**
   * <p>A flag that can affect whether the <code>Accept-Encoding</code> HTTP header is
   * 			included in the cache key and included in requests that CloudFront sends to the origin.</p>
   * 		       <p>This field is related to the <code>EnableAcceptEncodingBrotli</code> field. If one or
   * 			both of these fields is <code>true</code>
   *             <i>and</i> the viewer request
   * 			includes the <code>Accept-Encoding</code> header, then CloudFront does the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Normalizes the value of the viewer’s <code>Accept-Encoding</code>
   * 					header</p>
   * 			         </li>
   *             <li>
   * 				           <p>Includes the normalized header in the cache key</p>
   * 			         </li>
   *             <li>
   * 				           <p>Includes the normalized header in the request to the origin, if a request is necessary</p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects">Compression support</a> in the
   *             <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>If you set this value to <code>true</code>, and this cache behavior also has an origin
   * 			request policy attached, do not include the <code>Accept-Encoding</code> header in the
   * 			origin request policy. CloudFront always includes the <code>Accept-Encoding</code> header in
   * 			origin requests when the value of this field is <code>true</code>, so including this
   * 			header in an origin request policy has no effect.</p>
   * 		       <p>If both of these fields are <code>false</code>, then CloudFront treats the
   * 			<code>Accept-Encoding</code> header the same as any other HTTP header in the viewer
   * 			request. By default, it’s not included in the cache key and it’s not included in origin
   * 			requests. In this case, you can manually add <code>Accept-Encoding</code> to the headers
   * 			whitelist like any other HTTP header.</p>
   */
  EnableAcceptEncodingGzip: boolean | undefined;

  /**
   * <p>A flag that can affect whether the <code>Accept-Encoding</code> HTTP header is
   * 			included in the cache key and included in requests that CloudFront sends to the origin.</p>
   * 		       <p>This field is related to the <code>EnableAcceptEncodingGzip</code> field. If one or
   * 			both of these fields is <code>true</code>
   *             <i>and</i> the viewer request
   * 			includes the <code>Accept-Encoding</code> header, then CloudFront does the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Normalizes the value of the viewer’s <code>Accept-Encoding</code>
   * 					header</p>
   * 			         </li>
   *             <li>
   * 				           <p>Includes the normalized header in the cache key</p>
   * 			         </li>
   *             <li>
   * 				           <p>Includes the normalized header in the request to the origin, if a request is necessary</p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects">Compression support</a> in the
   *             <i>Amazon CloudFront Developer Guide</i>.</p>
   *         <p>If you set this value to <code>true</code>, and this cache behavior also has an origin
   * 			request policy attached, do not include the <code>Accept-Encoding</code> header in the
   * 			origin request policy. CloudFront always includes the <code>Accept-Encoding</code> header in
   * 			origin requests when the value of this field is <code>true</code>, so including this
   * 			header in an origin request policy has no effect.</p>
   * 		       <p>If both of these fields are <code>false</code>, then CloudFront treats the
   * 			<code>Accept-Encoding</code> header the same as any other HTTP header in the viewer
   * 			request. By default, it’s not included in the cache key and it’s not included in origin
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
   * <p>An object that determines whether any cookies in viewer requests (and if so, which cookies)
   * 			are included in the cache key and automatically included in requests that CloudFront sends to
   * 			the origin.</p>
   */
  CookiesConfig: CachePolicyCookiesConfig | undefined;

  /**
   * <p>An object that determines whether any URL query strings in viewer requests (and if so, which
   * 			query strings) are included in the cache key and automatically included in requests that
   * 			CloudFront sends to the origin.</p>
   */
  QueryStringsConfig: CachePolicyQueryStringsConfig | undefined;
}

export namespace ParametersInCacheKeyAndForwardedToOrigin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParametersInCacheKeyAndForwardedToOrigin): any => ({
    ...obj,
  });
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

export type CachePolicyType = "custom" | "managed";

/**
 * <p>Contains a cache policy.</p>
 */
export interface CachePolicySummary {
  /**
   * <p>The type of cache policy, either <code>managed</code> (created by Amazon Web Services) or
   * 			<code>custom</code> (created in this Amazon Web Services account).</p>
   */
  Type: CachePolicyType | string | undefined;

  /**
   * <p>The cache policy.</p>
   */
  CachePolicy: CachePolicy | undefined;
}

export namespace CachePolicySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CachePolicySummary): any => ({
    ...obj,
  });
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

export namespace CachePolicyList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CachePolicyList): any => ({
    ...obj,
  });
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

export type CertificateSource = "acm" | "cloudfront" | "iam";

/**
 * <p>A complex type that controls:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error
 * 					messages before returning the response to the viewer. </p>
 * 			         </li>
 *             <li>
 * 				           <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface CustomErrorResponse {
  /**
   * <p>The HTTP status code for which you want to specify a custom error page and/or a caching
   * 			duration.</p>
   */
  ErrorCode: number | undefined;

  /**
   * <p>The path to the custom error page that you want CloudFront to return to a viewer when your
   * 			origin returns the HTTP status code specified by <code>ErrorCode</code>, for example,
   * 				<code>/4xx-errors/403-forbidden.html</code>. If you want to store your objects and your
   * 			custom error pages in different locations, your distribution must include a cache behavior for
   * 			which the following is true:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>The value of <code>PathPattern</code> matches the path to your custom error
   * 					messages. For example, suppose you saved custom error pages for 4xx errors in an Amazon S3
   * 					bucket in a directory named <code>/4xx-errors</code>. Your distribution must include a
   * 					cache behavior for which the path pattern routes requests for your custom error pages to
   * 					that location, for example, <code>/4xx-errors/*</code>. </p>
   * 			         </li>
   *             <li>
   * 				           <p>The value of <code>TargetOriginId</code> specifies the value of the <code>ID</code>
   * 					element for the origin that contains your custom error pages.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If you specify a value for <code>ResponsePagePath</code>, you must also specify a value
   * 			for <code>ResponseCode</code>.</p>
   * 		       <p>We recommend that you store custom error pages in an Amazon S3 bucket. If you store custom
   * 			error pages on an HTTP server and the server starts to return 5xx errors, CloudFront can't get the
   * 			files that you want to return to viewers because the origin server is unavailable.</p>
   */
  ResponsePagePath?: string;

  /**
   * <p>The HTTP status code that you want CloudFront to return to the viewer along with the custom
   * 			error page. There are a variety of reasons that you might want CloudFront to return a status code
   * 			different from the status code that your origin returned to CloudFront, for example:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Some Internet devices (some firewalls and corporate proxies, for example) intercept
   * 					HTTP 4xx and 5xx and prevent the response from being returned to the viewer. If you
   * 					substitute <code>200</code>, the response typically won't be intercepted.</p>
   * 			         </li>
   *             <li>
   * 				           <p>If you don't care about distinguishing among different client errors or server
   * 					errors, you can specify <code>400</code> or <code>500</code> as the
   * 						<code>ResponseCode</code> for all 4xx or 5xx errors.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You might want to return a <code>200</code> status code (OK) and static website so
   * 					your customers don't know that your website is down.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If you specify a value for <code>ResponseCode</code>, you must also specify a value for
   * 			<code>ResponsePagePath</code>.</p>
   */
  ResponseCode?: string;

  /**
   * <p>The minimum amount of time, in seconds, that you want CloudFront to cache the HTTP status
   * 			code specified in <code>ErrorCode</code>. When this time period has elapsed, CloudFront queries your
   * 			origin to see whether the problem that caused the error has been resolved and the requested
   * 			object is now available.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing
   * 				Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  ErrorCachingMinTTL?: number;
}

export namespace CustomErrorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomErrorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that controls:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error
 * 					messages before returning the response to the viewer.</p>
 * 			         </li>
 *             <li>
 * 				           <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
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

export namespace CustomErrorResponses {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomErrorResponses): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that describes the default cache behavior if you don’t specify a
 * 			<code>CacheBehavior</code> element or if request URLs don’t match any of the values of
 * 			<code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly
 * 			one default cache behavior.</p>
 */
export interface DefaultCacheBehavior {
  /**
   * <p>The value of <code>ID</code> for the origin that you want CloudFront to route requests to when
   * 			they use the default cache behavior.</p>
   */
  TargetOriginId: string | undefined;

  /**
   * <important>
   * 			         <p>We recommend using <code>TrustedKeyGroups</code> instead of
   * 				<code>TrustedSigners</code>.</p>
   * 		       </important>
   * 		       <p>A list of Amazon Web Services account IDs whose public keys CloudFront can use to validate signed URLs or signed
   * 			cookies.</p>
   * 		       <p>When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies
   * 			for all requests that match the cache behavior. The URLs or cookies must be signed with
   * 			the private key of a CloudFront key pair in a trusted signer’s Amazon Web Services account. The signed URL or
   * 			cookie contains information about which public key CloudFront should use to verify the
   * 			signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  TrustedSigners?: TrustedSigners;

  /**
   * <p>A list of key groups that CloudFront can use to validate signed URLs or signed cookies.</p>
   * 		       <p>When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed
   * 			cookies for all requests that match the cache behavior. The URLs or cookies must be
   * 			signed with a private key whose corresponding public key is in the key group. The signed
   * 			URL or cookie contains information about which public key CloudFront should use to verify the
   * 			signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  TrustedKeyGroups?: TrustedKeyGroups;

  /**
   * <p>The protocol that viewers can use to access the files in the origin specified by
   * 				<code>TargetOriginId</code> when a request matches the path pattern in
   * 				<code>PathPattern</code>. You can specify the following options:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>allow-all</code>: Viewers can use HTTP or HTTPS.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront returns
   * 					an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The
   * 					viewer then resubmits the request using the new URL.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an HTTP
   * 					status code of 403 (Forbidden).</p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information about requiring the HTTPS protocol, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html">Requiring HTTPS Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <note>
   * 			         <p>The only way to guarantee that viewers retrieve an object that was fetched from
   * 				the origin using HTTPS is never to use any other protocol to fetch the object. If
   * 				you have recently changed from HTTP to HTTPS, we recommend that you clear your
   * 				objects’ cache because cached objects are protocol agnostic. That means that an edge
   * 				location will return an object from the cache regardless of whether the current
   * 				request protocol matches the protocol used previously. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing Cache
   * 				Expiration</a> in the
   * 					<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       </note>
   */
  ViewerProtocolPolicy: ViewerProtocolPolicy | string | undefined;

  /**
   * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your
   * 			Amazon S3 bucket or your custom origin. There are three choices:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code>
   * 					requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and
   * 						<code>DELETE</code> requests.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or
   * 			to your custom origin so users can't perform operations that you don't want them to. For
   * 			example, you might not want users to have permissions to delete objects from your
   * 			origin.</p>
   */
  AllowedMethods?: AllowedMethods;

  /**
   * <p>Indicates whether you want to distribute media files in the Microsoft Smooth Streaming
   * 			format using the origin that is associated with this cache behavior. If so, specify
   * 				<code>true</code>; if not, specify <code>false</code>. If you specify <code>true</code> for
   * 				<code>SmoothStreaming</code>, you can still distribute other content using this cache
   * 			behavior if the content matches the value of <code>PathPattern</code>. </p>
   */
  SmoothStreaming?: boolean;

  /**
   * <p>Whether you want CloudFront to automatically compress certain files for this cache behavior.
   * 			If so, specify <code>true</code>; if not, specify <code>false</code>. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html">Serving Compressed Files</a> in
   * 			the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Compress?: boolean;

  /**
   * <p>A complex type that contains zero or more Lambda@Edge function associations for a cache
   * 			behavior.</p>
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociations;

  /**
   * <p>A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must
   * 			be published to the <code>LIVE</code> stage to associate them with a cache
   * 			behavior.</p>
   */
  FunctionAssociations?: FunctionAssociations;

  /**
   * <p>The value of <code>ID</code> for the field-level encryption configuration that you want CloudFront
   * 			to use for encrypting specific fields of data for the default cache behavior.</p>
   */
  FieldLevelEncryptionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this
   * 			cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  RealtimeLogConfigArn?: string;

  /**
   * <p>The unique identifier of the cache policy that is attached to the default cache behavior.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   *             <i>Amazon CloudFront Developer Guide</i>.</p>
   *         <p>A <code>DefaultCacheBehavior</code> must include either a
   *             <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you
   *             use a <code>CachePolicyId</code>.</p>
   */
  CachePolicyId?: string;

  /**
   * <p>The unique identifier of the origin request policy that is attached to the default cache
   * 			behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginRequestPolicyId?: string;

  /**
   * <p>The identifier for a response headers policy.</p>
   */
  ResponseHeadersPolicyId?: string;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use a cache policy or an origin request
   * 			policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html">Working with policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>If you want to include values in the cache key, use a cache policy. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>If you want to send values to the origin but not include them in the cache key, use an
   * 			origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the
   *             <i>Amazon CloudFront Developer Guide</i>.</p>
   *         <p>A <code>DefaultCacheBehavior</code> must include either a
   *             <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you
   *             use a <code>CachePolicyId</code>.</p>
   * 		       <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
   */
  ForwardedValues?: ForwardedValues;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use the <code>MinTTL</code> field in a cache
   * 			policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been updated. For
   * 			more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays
   * 				in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to
   * 			forward all headers to your origin (under <code>Headers</code>, if you specify <code>1</code>
   * 			for <code>Quantity</code> and <code>*</code> for <code>Name</code>).</p>
   */
  MinTTL?: number;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use the <code>DefaultTTL</code> field in a
   * 			cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>The default amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been updated. The
   * 			value that you specify applies only when your origin does not add HTTP headers such as
   * 				<code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   * 				<code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays
   * 					in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  DefaultTTL?: number;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. We recommend that you use the <code>MaxTTL</code> field in a cache
   * 			policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been updated. The
   * 			value that you specify applies only when your origin adds HTTP headers such as
   * 			<code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   * 			<code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays
   * 				in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  MaxTTL?: number;
}

export namespace DefaultCacheBehavior {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultCacheBehavior): any => ({
    ...obj,
  });
}

export type HttpVersion = "http1.1" | "http2";

/**
 * <p>A complex type that controls whether access logs are written for the
 * 			distribution.</p>
 */
export interface LoggingConfig {
  /**
   * <p>Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't
   * 			want to enable logging when you create a distribution or if you want to disable logging for an
   * 			existing distribution, specify <code>false</code> for <code>Enabled</code>, and specify empty
   * 				<code>Bucket</code> and <code>Prefix</code> elements. If you specify <code>false</code> for
   * 				<code>Enabled</code> but you specify values for <code>Bucket</code>, <code>prefix</code>,
   * 			and <code>IncludeCookies</code>, the values are automatically deleted.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Specifies whether you want CloudFront to include cookies in access logs, specify
   * 				<code>true</code> for <code>IncludeCookies</code>. If you choose to include cookies in logs,
   * 			CloudFront logs all cookies regardless of how you configure the cache behaviors for this
   * 			distribution. If you don't want to include cookies when you create a distribution or if you
   * 			want to disable include cookies for an existing distribution, specify <code>false</code> for
   * 				<code>IncludeCookies</code>.</p>
   */
  IncludeCookies: boolean | undefined;

  /**
   * <p>The Amazon S3 bucket to store the access logs in, for example,
   * 				<code>myawslogbucket.s3.amazonaws.com</code>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>An optional string that you want CloudFront to prefix to the access log
   * 				<code>filenames</code> for this distribution, for example, <code>myprefix/</code>. If you
   * 			want to enable logging, but you don't want to specify a prefix, you still must include an
   * 			empty <code>Prefix</code> element in the <code>Logging</code> element.</p>
   */
  Prefix: string | undefined;
}

export namespace LoggingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A complex data type for the status codes that you specify that, when returned by a primary origin, trigger
 * 		CloudFront to failover to a second origin.</p>
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

export namespace StatusCodes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatusCodes): any => ({
    ...obj,
  });
}

/**
 * <p>A complex data type that includes information about the failover criteria for an origin group, including
 * 		the status codes for which CloudFront will failover from the primary origin to the second origin.</p>
 */
export interface OriginGroupFailoverCriteria {
  /**
   * <p>The status codes that, when returned from the primary origin, will trigger CloudFront to failover
   * 		to the second origin.</p>
   */
  StatusCodes: StatusCodes | undefined;
}

export namespace OriginGroupFailoverCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginGroupFailoverCriteria): any => ({
    ...obj,
  });
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

export namespace OriginGroupMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginGroupMember): any => ({
    ...obj,
  });
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

export namespace OriginGroupMembers {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginGroupMembers): any => ({
    ...obj,
  });
}

/**
 * <p>An origin group includes two origins (a primary origin and a second origin to failover to) and a failover criteria that you specify.
 * 		You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specifiy
 * 		the origin group instead of a single origin, and CloudFront will failover from the primary origin to the second origin
 * 		under the failover conditions that you've chosen.</p>
 */
export interface OriginGroup {
  /**
   * <p>The origin group's ID.</p>
   */
  Id: string | undefined;

  /**
   * <p>A complex type that contains information about the failover criteria for an origin group.</p>
   */
  FailoverCriteria: OriginGroupFailoverCriteria | undefined;

  /**
   * <p>A complex type that contains information about the origins in an origin group.</p>
   */
  Members: OriginGroupMembers | undefined;
}

export namespace OriginGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginGroup): any => ({
    ...obj,
  });
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

export namespace OriginGroups {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginGroups): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code>
 * 			elements, if any, for this distribution. </p>
 */
export interface OriginCustomHeader {
  /**
   * <p>The name of a header that you want CloudFront to send to your origin. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html">Adding Custom
   * 			Headers to Origin Requests</a> in the <i> Amazon CloudFront Developer Guide</i>.</p>
   */
  HeaderName: string | undefined;

  /**
   * <p>The value for the header that you specified in the <code>HeaderName</code>
   * 			field.</p>
   */
  HeaderValue: string | undefined;
}

export namespace OriginCustomHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginCustomHeader): any => ({
    ...obj,
    ...(obj.HeaderValue && { HeaderValue: SENSITIVE_STRING }),
  });
}

/**
 * <p>A complex type that contains the list of Custom Headers for each origin. </p>
 */
export interface CustomHeaders {
  /**
   * <p>The number of custom headers, if any, for this distribution.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>
   *             <b>Optional</b>: A list that contains one
   * 				<code>OriginCustomHeader</code> element for each custom header that you want CloudFront to forward
   * 			to the origin. If Quantity is <code>0</code>, omit <code>Items</code>.</p>
   */
  Items?: OriginCustomHeader[];
}

export namespace CustomHeaders {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomHeaders): any => ({
    ...obj,
    ...(obj.Items && { Items: obj.Items.map((item) => OriginCustomHeader.filterSensitiveLog(item)) }),
  });
}

export type OriginProtocolPolicy = "http-only" | "https-only" | "match-viewer";

export type SslProtocol = "SSLv3" | "TLSv1" | "TLSv1.1" | "TLSv1.2";

/**
 * <p>A complex type that contains information about the SSL/TLS protocols that CloudFront can use
 * 			when establishing an HTTPS connection with your origin. </p>
 */
export interface OriginSslProtocols {
  /**
   * <p>The number of SSL/TLS protocols that you want to allow CloudFront to use when establishing an
   * 			HTTPS connection with this origin. </p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list that contains allowed SSL/TLS protocols for this distribution.</p>
   */
  Items: (SslProtocol | string)[] | undefined;
}

export namespace OriginSslProtocols {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginSslProtocols): any => ({
    ...obj,
  });
}

/**
 * <p>A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3
 * 			bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with
 * 			static website hosting</a>
 *             <i>is</i> a custom origin.</p>
 */
export interface CustomOriginConfig {
  /**
   * <p>The HTTP port that CloudFront uses to connect to the origin. Specify the HTTP port that the origin
   * 			listens on.</p>
   */
  HTTPPort: number | undefined;

  /**
   * <p>The HTTPS port that CloudFront uses to connect to the origin. Specify the HTTPS port that the
   * 			origin listens on.</p>
   */
  HTTPSPort: number | undefined;

  /**
   * <p>Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin. Valid values
   * 			are:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>http-only</code> – CloudFront always uses HTTP to connect to the
   * 					origin.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>match-viewer</code> – CloudFront connects to the origin using the same
   * 					protocol that the viewer used to connect to CloudFront.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>https-only</code> – CloudFront always uses HTTPS to connect to the
   * 					origin.</p>
   * 			         </li>
   *          </ul>
   */
  OriginProtocolPolicy: OriginProtocolPolicy | string | undefined;

  /**
   * <p>Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over
   * 			HTTPS. Valid values include <code>SSLv3</code>, <code>TLSv1</code>,
   * 			<code>TLSv1.1</code>, and <code>TLSv1.2</code>.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginSSLProtocols">Minimum Origin SSL Protocol</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginSslProtocols?: OriginSslProtocols;

  /**
   * <p>Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also
   * 			known as the <i>origin response timeout</i>. The minimum timeout is 1
   * 			second, the maximum is 60 seconds, and the default (if you don’t specify otherwise) is
   * 			30 seconds.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout">Origin Response Timeout</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginReadTimeout?: number;

  /**
   * <p>Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum
   * 			timeout is 1 second, the maximum is 60 seconds, and the default (if you don’t specify
   * 			otherwise) is 5 seconds.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginKeepaliveTimeout">Origin Keep-alive Timeout</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginKeepaliveTimeout?: number;
}

export namespace CustomOriginConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomOriginConfig): any => ({
    ...obj,
  });
}

/**
 * <p>CloudFront Origin Shield.</p>
 * 		       <p>Using Origin Shield can help reduce the load on your origin. For more
 *             information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface OriginShield {
  /**
   * <p>A flag that specifies whether Origin Shield is enabled.</p>
   * 		       <p>When it’s enabled, CloudFront routes all requests through Origin Shield, which can
   *             help protect your origin. When it’s disabled, CloudFront might send requests directly to
   *             your origin from multiple edge locations or regional edge caches.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The Amazon Web Services Region for Origin Shield.</p>
   * 		       <p>Specify the Amazon Web Services Region that has the lowest latency to your origin.
   *             To specify a region, use the region code, not the region name.
   *             For example, specify the US East (Ohio) region as <code>us-east-2</code>.</p>
   *         <p>When you enable CloudFront Origin Shield, you must specify the Amazon Web Services Region for Origin
   *             Shield. For the list of Amazon Web Services Regions that you can specify, and for help choosing the best
   *             Region for your origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region">Choosing the Amazon Web Services Region for Origin Shield</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginShieldRegion?: string;
}

export namespace OriginShield {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginShield): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the Amazon S3 origin. If the origin is a
 * 			custom origin or an S3 bucket that is configured as a website endpoint, use the
 *             <code>CustomOriginConfig</code> element instead.</p>
 */
export interface S3OriginConfig {
  /**
   * <p>The CloudFront origin access identity to associate with the origin. Use an origin access
   * 			identity to configure the origin so that viewers can <i>only</i> access objects
   * 			in an Amazon S3 bucket through CloudFront. The format of the value is:</p>
   * 		       <p>origin-access-identity/cloudfront/<i>ID-of-origin-access-identity</i>
   *          </p>
   * 		       <p>where <code>
   *                <i>ID-of-origin-access-identity</i>
   *             </code> is the value that
   * 			CloudFront returned in the <code>ID</code> element when you created the origin access
   * 			identity.</p>
   * 		       <p>If you want viewers to be able to access objects using either the CloudFront URL or the Amazon S3
   * 			URL, specify an empty <code>OriginAccessIdentity</code> element.</p>
   * 		       <p>To delete the origin access identity from an existing distribution, update the
   * 			distribution configuration and include an empty <code>OriginAccessIdentity</code>
   * 			element.</p>
   * 		       <p>To replace the origin access identity, update the distribution configuration and
   * 			specify the new origin access identity.</p>
   * 		       <p>For more information about the origin access identity, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginAccessIdentity: string | undefined;
}

export namespace S3OriginConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3OriginConfig): any => ({
    ...obj,
  });
}

/**
 * <p>An origin.</p>
 * 		       <p>An origin is the location where content is stored, and from which CloudFront gets content to
 * 			serve to viewers. To specify an origin:</p>
 * 		       <ul>
 *             <li>
 *                 <p>Use <code>S3OriginConfig</code> to specify an Amazon S3 bucket that is not
 * 					configured with static website hosting.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Use <code>CustomOriginConfig</code> to specify all other kinds of origins,
 * 					including:</p>
 * 				           <ul>
 *                   <li>
 * 						               <p>An Amazon S3 bucket that is configured with static website hosting</p>
 * 					             </li>
 *                   <li>
 * 						               <p>An Elastic Load Balancing load balancer</p>
 * 					             </li>
 *                   <li>
 * 						               <p>An AWS Elemental MediaPackage endpoint</p>
 * 					             </li>
 *                   <li>
 * 						               <p>An AWS Elemental MediaStore container</p>
 * 					             </li>
 *                   <li>
 * 						               <p>Any other HTTP server, running on an Amazon EC2 instance or any other
 * 							kind of host</p>
 * 					             </li>
 *                </ul>
 * 			         </li>
 *          </ul>
 * 		       <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i>
 * 			(quotas were formerly referred to as limits).</p>
 */
export interface Origin {
  /**
   * <p>A unique identifier for the origin. This value must be unique within the
   * 			distribution.</p>
   *         <p>Use this value to specify the <code>TargetOriginId</code> in a
   *             <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The domain name for the origin.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDomainName">Origin Domain Name</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>An optional path that CloudFront appends to the origin domain name when CloudFront requests content from
   * 			the origin.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginPath">Origin Path</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginPath?: string;

  /**
   * <p>A list of HTTP header names and values that CloudFront adds to the requests that it sends to
   *             the origin.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html">Adding Custom Headers to Origin Requests</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  CustomHeaders?: CustomHeaders;

  /**
   * <p>Use this type to specify an origin that is an Amazon S3 bucket that is not configured with static
   * 			website hosting. To specify any other type of origin, including an Amazon S3 bucket that is
   * 			configured with static website hosting, use the <code>CustomOriginConfig</code> type
   * 			instead.</p>
   */
  S3OriginConfig?: S3OriginConfig;

  /**
   * <p>Use this type to specify an origin that is not an Amazon S3 bucket, with one exception. If the
   * 			Amazon S3 bucket is configured with static website hosting, use this type. If the Amazon S3 bucket
   * 			is not configured with static website hosting, use the <code>S3OriginConfig</code> type
   * 			instead.</p>
   */
  CustomOriginConfig?: CustomOriginConfig;

  /**
   * <p>The number of times that CloudFront attempts to connect to the origin. The minimum number
   *             is 1, the maximum is 3, and the default (if you don’t specify otherwise) is 3.</p>
   *         <p>For a custom origin (including an Amazon S3 bucket that’s configured with static
   *             website hosting), this value also specifies the number of times that CloudFront attempts to
   *             get a response from the origin, in the case of an <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout">Origin Response Timeout</a>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-attempts">Origin Connection Attempts</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  ConnectionAttempts?: number;

  /**
   * <p>The number of seconds that CloudFront waits when trying to establish a connection to the origin.
   * 			The minimum timeout is 1 second, the maximum is 10 seconds, and the default (if you
   * 			don’t specify otherwise) is 10 seconds.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-timeout">Origin Connection Timeout</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  ConnectionTimeout?: number;

  /**
   * <p>CloudFront Origin Shield. Using Origin Shield can help reduce the load on your
   *             origin.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginShield?: OriginShield;
}

export namespace Origin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Origin): any => ({
    ...obj,
    ...(obj.CustomHeaders && { CustomHeaders: CustomHeaders.filterSensitiveLog(obj.CustomHeaders) }),
  });
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

export namespace Origins {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Origins): any => ({
    ...obj,
  });
}

export type PriceClass = "PriceClass_100" | "PriceClass_200" | "PriceClass_All";

export type GeoRestrictionType = "blacklist" | "none" | "whitelist";

/**
 * <p>A complex type that controls the countries in which your content is distributed. CloudFront
 * 			determines the location of your users using <code>MaxMind</code> GeoIP databases. </p>
 */
export interface GeoRestriction {
  /**
   * <p>The method that you want to use to restrict distribution of your content by
   * 			country:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>none</code>: No geo restriction is enabled, meaning access to content is not
   * 					restricted by client geo location.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>blacklist</code>: The <code>Location</code> elements specify the countries in
   * 					which you don't want CloudFront to distribute your content.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>whitelist</code>: The <code>Location</code> elements specify the countries in
   * 					which you want CloudFront to distribute your content.</p>
   * 			         </li>
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
   * <p> A complex type that contains a <code>Location</code> element for each country in which
   * 			you want CloudFront either to distribute your content (<code>whitelist</code>) or not distribute
   * 			your content (<code>blacklist</code>).</p>
   * 		       <p>The <code>Location</code> element is a two-letter, uppercase country code for a country
   * 			that you want to include in your <code>blacklist</code> or <code>whitelist</code>. Include one
   * 				<code>Location</code> element for each country.</p>
   * 		       <p>CloudFront and <code>MaxMind</code> both use <code>ISO 3166</code> country codes. For the
   * 			current list of countries and the corresponding codes, see <code>ISO 3166-1-alpha-2</code>
   * 			code on the <i>International Organization for Standardization</i> website. You
   * 			can also refer to the country list on the CloudFront console, which includes both country names and
   * 			codes.</p>
   */
  Items?: string[];
}

export namespace GeoRestriction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GeoRestriction): any => ({
    ...obj,
  });
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

export namespace Restrictions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Restrictions): any => ({
    ...obj,
  });
}

export type MinimumProtocolVersion =
  | "SSLv3"
  | "TLSv1"
  | "TLSv1.1_2016"
  | "TLSv1.2_2018"
  | "TLSv1.2_2019"
  | "TLSv1.2_2021"
  | "TLSv1_2016";

export type SSLSupportMethod = "sni-only" | "static-ip" | "vip";

/**
 * <p>A complex type that determines the distribution’s SSL/TLS configuration for communicating
 * 			with viewers.</p>
 * 		       <p>If the distribution doesn’t use <code>Aliases</code> (also known as alternate domain
 * 			names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as
 * 			<code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code>
 * 			to <code>true</code> and leave all other fields empty.</p>
 * 		       <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use
 * 			the fields in this type to specify the following settings:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support
 * 					<a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name
 * 					indication (SNI)</a> (recommended), or all viewers including those that
 * 					don’t support SNI.</p>
 * 				           <ul>
 *                   <li>
 * 						               <p>To accept HTTPS connections from only viewers that support SNI, set
 * 							<code>SSLSupportMethod</code> to <code>sni-only</code>. This is
 * 							recommended. Most browsers and clients support
 *                             SNI.
 *                             </p>
 * 					             </li>
 *                   <li>
 * 						               <p>To accept HTTPS connections from all viewers, including those that don’t support SNI,
 * 							set <code>SSLSupportMethod</code> to <code>vip</code>. This is not
 * 							recommended, and results in additional monthly charges from
 * 							CloudFront.</p>
 * 					             </li>
 *                </ul>
 * 			         </li>
 *             <li>
 * 				           <p>The minimum SSL/TLS protocol version that the distribution can use to
 * 					communicate with viewers. To specify a minimum version, choose a value for
 * 					<code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the
 * 					<i>Amazon CloudFront Developer Guide</i>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Identity and Access Management (IAM)</a>. You specify the location
 * 					by setting a value in one of the following fields (not both):</p>
 * 				           <ul>
 *                   <li>
 * 						               <p>
 *                         <code>ACMCertificateArn</code>
 *                      </p>
 * 					             </li>
 *                   <li>
 * 						               <p>
 *                         <code>IAMCertificateId</code>
 *                      </p>
 * 					             </li>
 *                </ul>
 * 			         </li>
 *          </ul>
 * 		       <p>All distributions support HTTPS connections from viewers. To require viewers to use
 * 			HTTPS only, or to redirect them from HTTP to HTTPS, use
 * 			<code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or
 * 			<code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to
 * 			communicate with your custom origin, use <code>CustomOriginConfig</code>.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using
 * 			HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html">
 * 			Using Alternate Domain Names and HTTPS</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface ViewerCertificate {
  /**
   * <p>If the distribution uses the CloudFront domain name such as
   * 			<code>d111111abcdef8.cloudfront.net</code>, set this field to <code>true</code>.</p>
   * 		       <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), set
   * 			this field to <code>false</code> and specify values for the following fields:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>ACMCertificateArn</code> or <code>IAMCertificateId</code> (specify a value for one,
   * 					not both)</p>
   *
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>MinimumProtocolVersion</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>SSLSupportMethod</code>
   *                </p>
   * 			         </li>
   *          </ul>
   */
  CloudFrontDefaultCertificate?: boolean;

  /**
   * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and
   * 			the SSL/TLS certificate is stored in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Identity and Access Management (IAM)</a>, provide the ID of the IAM
   * 			certificate.</p>
   * 		       <p>If you specify an IAM certificate ID, you must also specify values for
   * 			<code>MinimumProtocolVersion</code> and <code>SSLSupportMethod</code>. </p>
   */
  IAMCertificateId?: string;

  /**
   * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and
   * 			the SSL/TLS certificate is stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">Certificate Manager (ACM)</a>, provide the Amazon Resource
   * 			Name (ARN) of the ACM certificate. CloudFront only supports ACM certificates in the US
   * 			East (N. Virginia) Region (<code>us-east-1</code>).</p>
   * 		       <p>If you specify an ACM certificate ARN, you must also specify values for
   * 			<code>MinimumProtocolVersion</code> and <code>SSLSupportMethod</code>.</p>
   */
  ACMCertificateArn?: string;

  /**
   * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), specify
   * 			which viewers the distribution accepts HTTPS connections from.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>sni-only</code> – The distribution accepts HTTPS connections from only viewers that
   * 					support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server
   * 					name indication (SNI)</a>. This is recommended. Most browsers and clients support SNI.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>vip</code> – The distribution accepts HTTPS connections from all viewers including
   * 					those that don’t support SNI. This is not recommended, and results in additional
   * 					monthly charges from CloudFront.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>static-ip</code> - Do not specify this value unless your distribution
   * 					has been enabled for this feature by the CloudFront team. If you have a use case
   * 					that requires static IP addresses for a distribution, contact CloudFront through
   * 					the <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Support Center</a>.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If the distribution uses the CloudFront domain name such as
   * 			<code>d111111abcdef8.cloudfront.net</code>, don’t set a value for this field.</p>
   */
  SSLSupportMethod?: SSLSupportMethod | string;

  /**
   * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs),
   * 			specify the security policy that you want CloudFront to use for HTTPS connections with
   * 			viewers. The security policy determines two settings:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>The minimum SSL/TLS protocol that CloudFront can use to communicate with
   * 					viewers.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The ciphers that CloudFront can use to encrypt the content that it returns to
   * 					viewers.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html#secure-connections-supported-ciphers">Supported Protocols and Ciphers Between Viewers and
   * 			CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <note>
   * 			         <p>On the CloudFront console, this setting is called <b>Security
   * 				Policy</b>.</p>
   * 		       </note>
   * 		       <p>When you’re using SNI only (you set <code>SSLSupportMethod</code> to <code>sni-only</code>),
   * 			you must specify <code>TLSv1</code> or higher.</p>
   * 		       <p>If the distribution uses the CloudFront domain name such as
   * 			<code>d111111abcdef8.cloudfront.net</code> (you set
   * 			<code>CloudFrontDefaultCertificate</code> to <code>true</code>), CloudFront automatically sets
   * 			the security policy to <code>TLSv1</code> regardless of the value that you set
   * 			here.</p>
   */
  MinimumProtocolVersion?: MinimumProtocolVersion | string;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use one of the following fields instead:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>ACMCertificateArn</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>IAMCertificateId</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>CloudFrontDefaultCertificate</code>
   *                </p>
   * 			         </li>
   *          </ul>
   */
  Certificate?: string;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use one of the following fields instead:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>ACMCertificateArn</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>IAMCertificateId</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>CloudFrontDefaultCertificate</code>
   *                </p>
   * 			         </li>
   *          </ul>
   */
  CertificateSource?: CertificateSource | string;
}

export namespace ViewerCertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ViewerCertificate): any => ({
    ...obj,
  });
}

/**
 * <p> A complex type that contains <code>Tag</code> key and <code>Tag</code> value.</p>
 */
export interface Tag {
  /**
   * <p> A string that contains <code>Tag</code> key.</p>
   * 		       <p>The string length should be between 1 and 128 characters. Valid characters include
   * 				<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters
   * 				<code>_ - . : / = + @</code>.</p>
   */
  Key: string | undefined;

  /**
   * <p> A string that contains an optional <code>Tag</code> value.</p>
   * 		       <p>The string length should be between 0 and 256 characters. Valid characters include
   * 				<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters
   * 				<code>_ - . : / = + @</code>.</p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export type Format = "URLEncoded";

/**
 * <p>A field-level encryption content type profile. </p>
 */
export interface ContentTypeProfile {
  /**
   * <p>The format for a field-level encryption content type-profile mapping. </p>
   */
  Format: Format | string | undefined;

  /**
   * <p>The profile ID for a field-level encryption content type-profile mapping. </p>
   */
  ProfileId?: string;

  /**
   * <p>The content type for a field-level encryption content type-profile mapping. </p>
   */
  ContentType: string | undefined;
}

export namespace ContentTypeProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContentTypeProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Field-level encryption content type-profile. </p>
 */
export interface ContentTypeProfiles {
  /**
   * <p>The number of field-level encryption content type-profile mappings. </p>
   */
  Quantity: number | undefined;

  /**
   * <p>Items in a field-level encryption content type-profile mapping. </p>
   */
  Items?: ContentTypeProfile[];
}

export namespace ContentTypeProfiles {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContentTypeProfiles): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for a field-level encryption content type-profile mapping. </p>
 */
export interface ContentTypeProfileConfig {
  /**
   * <p>The setting in a field-level encryption content type-profile mapping that specifies what to do
   * 			when an unknown content type is provided for the profile. If true, content is
   * 			forwarded without being encrypted when the content type is unknown. If false (the
   * 			default), an error is returned when the content type is unknown. </p>
   */
  ForwardWhenContentTypeIsUnknown: boolean | undefined;

  /**
   * <p>The configuration for a field-level encryption content type-profile. </p>
   */
  ContentTypeProfiles?: ContentTypeProfiles;
}

export namespace ContentTypeProfileConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContentTypeProfileConfig): any => ({
    ...obj,
  });
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

export namespace QueryArgProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryArgProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Query argument-profile mapping for field-level encryption.</p>
 */
export interface QueryArgProfiles {
  /**
   * <p>Number of profiles for query argument-profile mapping for field-level encryption.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>Number of items for query argument-profile mapping for field-level encryption.</p>
   */
  Items?: QueryArgProfile[];
}

export namespace QueryArgProfiles {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryArgProfiles): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for query argument-profile mapping for field-level encryption.</p>
 */
export interface QueryArgProfileConfig {
  /**
   * <p>Flag to set if you want a request to be forwarded to the origin even if the profile specified by the field-level encryption query argument,
   * 			fle-profile, is unknown.</p>
   */
  ForwardWhenQueryArgProfileIsUnknown: boolean | undefined;

  /**
   * <p>Profiles specified for query argument-profile mapping for field-level encryption.</p>
   */
  QueryArgProfiles?: QueryArgProfiles;
}

export namespace QueryArgProfileConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryArgProfileConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A complex data type that includes the field patterns to match for field-level encryption.</p>
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

export namespace FieldPatterns {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FieldPatterns): any => ({
    ...obj,
  });
}

/**
 * <p>Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications. </p>
 */
export interface EncryptionEntity {
  /**
   * <p>The public key associated with a set of field-level encryption patterns, to be used when encrypting the fields that match
   * 			the patterns. </p>
   */
  PublicKeyId: string | undefined;

  /**
   * <p>The provider associated with the public key being used for encryption. This value must also be provided with the private key
   * 		for applications to be able to decrypt data.</p>
   */
  ProviderId: string | undefined;

  /**
   * <p>Field patterns in a field-level encryption content type profile specify the fields that you want to be encrypted. You can provide the
   * 			full field name, or any beginning characters followed by a wildcard (*). You can't overlap field patterns. For example, you can't have
   * 			both ABC* and AB*. Note that field patterns are case-sensitive. </p>
   */
  FieldPatterns: FieldPatterns | undefined;
}

export namespace EncryptionEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionEntity): any => ({
    ...obj,
  });
}

/**
 * <p>Complex data type for field-level encryption profiles that includes all of the encryption entities. </p>
 */
export interface EncryptionEntities {
  /**
   * <p>Number of field pattern items in a field-level encryption content type-profile mapping. </p>
   */
  Quantity: number | undefined;

  /**
   * <p>An array of field patterns in a field-level encryption content type-profile mapping. </p>
   */
  Items?: EncryptionEntity[];
}

export namespace EncryptionEntities {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionEntities): any => ({
    ...obj,
  });
}

export enum FunctionRuntime {
  cloudfront_js_1_0 = "cloudfront-js-1.0",
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
   * 			<code>LIVE</code>.</p>
   * 		       <p>When a function is in the <code>DEVELOPMENT</code> stage, you can test the function with
   * 				<code>TestFunction</code>, and update it with <code>UpdateFunction</code>.</p>
   * 		       <p>When a function is in the <code>LIVE</code> stage, you can attach the function to a
   * 			distribution’s cache behavior, using the function’s ARN.</p>
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

export namespace FunctionMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FunctionMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the objects that you want to invalidate.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects
 * 				to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
 */
export interface Paths {
  /**
   * <p>The number of invalidation paths specified for the objects that you want to invalidate.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains a list of the paths that you want to invalidate.</p>
   */
  Items?: string[];
}

export namespace Paths {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Paths): any => ({
    ...obj,
  });
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

export namespace RealtimeMetricsSubscriptionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RealtimeMetricsSubscriptionConfig): any => ({
    ...obj,
  });
}

export type OriginRequestPolicyCookieBehavior = "all" | "none" | "whitelist";

/**
 * <p>An object that determines whether any cookies in viewer requests (and if so, which cookies)
 * 			are included in requests that CloudFront sends to the origin.</p>
 */
export interface OriginRequestPolicyCookiesConfig {
  /**
   * <p>Determines whether cookies in viewer requests are included in requests that CloudFront sends to
   * 			the origin. Valid values are:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>none</code> – Cookies in viewer requests are not included in requests that CloudFront
   * 					sends to the origin. Even when this field is set to <code>none</code>, any
   * 					cookies that are listed in a <code>CachePolicy</code>
   *                   <i>are</i>
   * 					included in origin requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>whitelist</code> – The cookies in viewer requests that are listed in the
   * 					<code>CookieNames</code> type are included in requests that CloudFront sends to the
   * 					origin.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>all</code> – All cookies in viewer requests are included in requests that CloudFront sends
   * 					to the origin.</p>
   * 			         </li>
   *          </ul>
   */
  CookieBehavior: OriginRequestPolicyCookieBehavior | string | undefined;

  /**
   * <p>Contains a list of cookie names.</p>
   */
  Cookies?: CookieNames;
}

export namespace OriginRequestPolicyCookiesConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginRequestPolicyCookiesConfig): any => ({
    ...obj,
  });
}

export type OriginRequestPolicyHeaderBehavior = "allViewer" | "allViewerAndWhitelistCloudFront" | "none" | "whitelist";

/**
 * <p>An object that determines whether any HTTP headers (and if so, which headers) are included
 * 			in requests that CloudFront sends to the origin.</p>
 */
export interface OriginRequestPolicyHeadersConfig {
  /**
   * <p>Determines whether any HTTP headers are included in requests that CloudFront sends to the origin.
   * 			Valid values are:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>none</code> – HTTP headers are not included in requests that CloudFront sends to the
   * 					origin. Even when this field is set to <code>none</code>, any headers that are
   * 					listed in a <code>CachePolicy</code>
   *                   <i>are</i> included in origin
   * 					requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>whitelist</code> – The HTTP headers that are listed in the <code>Headers</code> type
   * 					are included in requests that CloudFront sends to the origin.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>allViewer</code> – All HTTP headers in viewer requests are included in requests that
   * 					CloudFront sends to the origin.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>allViewerAndWhitelistCloudFront</code> – All HTTP headers in viewer requests and the
   * 					additional CloudFront headers that are listed in the <code>Headers</code> type are
   * 					included in requests that CloudFront sends to the origin. The additional headers are
   * 					added by CloudFront.</p>
   * 			         </li>
   *          </ul>
   */
  HeaderBehavior: OriginRequestPolicyHeaderBehavior | string | undefined;

  /**
   * <p>Contains a list of HTTP header names.</p>
   */
  Headers?: Headers;
}

export namespace OriginRequestPolicyHeadersConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginRequestPolicyHeadersConfig): any => ({
    ...obj,
  });
}

export type OriginRequestPolicyQueryStringBehavior = "all" | "none" | "whitelist";

/**
 * <p>An object that determines whether any URL query strings in viewer requests (and if so, which
 * 			query strings) are included in requests that CloudFront sends to the origin.</p>
 */
export interface OriginRequestPolicyQueryStringsConfig {
  /**
   * <p>Determines whether any URL query strings in viewer requests are included in requests that
   * 			CloudFront sends to the origin. Valid values are:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>none</code> – Query strings in viewer requests are not included in requests that
   * 					CloudFront sends to the origin. Even when this field is set to <code>none</code>, any
   * 					query strings that are listed in a <code>CachePolicy</code>
   * 					             <i>are</i> included in origin requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>whitelist</code> – The query strings in viewer requests that are listed in the
   * 					<code>QueryStringNames</code> type are included in requests that CloudFront sends to
   * 					the origin.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>all</code> – All query strings in viewer requests are included in requests that CloudFront
   * 					sends to the origin.</p>
   * 			         </li>
   *          </ul>
   */
  QueryStringBehavior: OriginRequestPolicyQueryStringBehavior | string | undefined;

  /**
   * <p>Contains a list of the query strings in viewer requests that are included in requests that
   * 			CloudFront sends to the origin.</p>
   */
  QueryStrings?: QueryStringNames;
}

export namespace OriginRequestPolicyQueryStringsConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginRequestPolicyQueryStringsConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the Amazon Kinesis data stream where you are sending
 * 			real-time log data.</p>
 */
export interface KinesisStreamConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that
   * 			CloudFront can use to send real-time log data to your Kinesis data stream.</p>
   * 		       <p>For more information the IAM role, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role">Real-time log configuration IAM role</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time
   * 			log data.</p>
   */
  StreamARN: string | undefined;
}

export namespace KinesisStreamConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisStreamConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A list of HTTP header names that CloudFront includes as values for the
 * 				<code>Access-Control-Allow-Headers</code> HTTP response header.</p>
 * 		       <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response
 * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyAccessControlAllowHeaders {
  /**
   * <p>The number of HTTP header names in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The list of HTTP header names. You can specify <code>*</code> to allow all headers.</p>
   */
  Items: string[] | undefined;
}

export namespace ResponseHeadersPolicyAccessControlAllowHeaders {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyAccessControlAllowHeaders): any => ({
    ...obj,
  });
}

/**
 * <p>A list of HTTP methods that CloudFront includes as values for the
 * 				<code>Access-Control-Allow-Methods</code> HTTP response header.</p>
 * 		       <p>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response
 * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods">Access-Control-Allow-Methods</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyAccessControlAllowMethods {
  /**
   * <p>The number of HTTP methods in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The list of HTTP methods. Valid values are:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>GET</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>DELETE</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>HEAD</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>OPTIONS</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>PATCH</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>POST</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>PUT</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ALL</code>
   *                </p>
   * 			         </li>
   *          </ul>
   * 		       <p>
   *             <code>ALL</code> is a special value that includes all of the listed HTTP
   * 			methods.</p>
   */
  Items: (ResponseHeadersPolicyAccessControlAllowMethodsValues | string)[] | undefined;
}

export namespace ResponseHeadersPolicyAccessControlAllowMethods {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyAccessControlAllowMethods): any => ({
    ...obj,
  });
}

/**
 * <p>A list of origins (domain names) that CloudFront can use as the value for the
 * 			<code>Access-Control-Allow-Origin</code> HTTP response header.</p>
 * 		       <p>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response
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

export namespace ResponseHeadersPolicyAccessControlAllowOrigins {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyAccessControlAllowOrigins): any => ({
    ...obj,
  });
}

/**
 * <p>A list of HTTP headers that CloudFront includes as values for the
 * 				<code>Access-Control-Expose-Headers</code> HTTP response header.</p>
 * 		       <p>For more information about the <code>Access-Control-Expose-Headers</code> HTTP
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

export namespace ResponseHeadersPolicyAccessControlExposeHeaders {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyAccessControlExposeHeaders): any => ({
    ...obj,
  });
}

/**
 * <p>A configuration for a set of HTTP response headers that are used for cross-origin resource
 * 			sharing (CORS). CloudFront adds these headers to HTTP responses that it sends for CORS
 * 			requests that match a cache behavior associated with this response headers
 * 			policy.</p>
 * 		       <p>For more information about CORS, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Cross-Origin Resource
 * 				Sharing (CORS)</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyCorsConfig {
  /**
   * <p>A list of origins (domain names) that CloudFront can use as the value for the
   * 			<code>Access-Control-Allow-Origin</code> HTTP response header.</p>
   * 		       <p>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">Access-Control-Allow-Origin</a> in the MDN Web Docs.</p>
   */
  AccessControlAllowOrigins: ResponseHeadersPolicyAccessControlAllowOrigins | undefined;

  /**
   * <p>A list of HTTP header names that CloudFront includes as values for the
   * 				<code>Access-Control-Allow-Headers</code> HTTP response header.</p>
   * 		       <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p>
   */
  AccessControlAllowHeaders: ResponseHeadersPolicyAccessControlAllowHeaders | undefined;

  /**
   * <p>A list of HTTP methods that CloudFront includes as values for the
   * 				<code>Access-Control-Allow-Methods</code> HTTP response header.</p>
   * 		       <p>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods">Access-Control-Allow-Methods</a> in the MDN Web Docs.</p>
   */
  AccessControlAllowMethods: ResponseHeadersPolicyAccessControlAllowMethods | undefined;

  /**
   * <p>A Boolean that CloudFront uses as the value for the <code>Access-Control-Allow-Credentials</code>
   * 			HTTP response header.</p>
   * 		       <p>For more information about the <code>Access-Control-Allow-Credentials</code> HTTP
   * 			response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials">Access-Control-Allow-Credentials</a> in the MDN Web Docs.</p>
   */
  AccessControlAllowCredentials: boolean | undefined;

  /**
   * <p>A list of HTTP headers that CloudFront includes as values for the
   * 				<code>Access-Control-Expose-Headers</code> HTTP response header.</p>
   * 		       <p>For more information about the <code>Access-Control-Expose-Headers</code> HTTP
   * 			response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers">Access-Control-Expose-Headers</a> in the MDN Web Docs.</p>
   */
  AccessControlExposeHeaders?: ResponseHeadersPolicyAccessControlExposeHeaders;

  /**
   * <p>A number that CloudFront uses as the value for the <code>Access-Control-Max-Age</code> HTTP
   * 			response header.</p>
   * 		       <p>For more information about the <code>Access-Control-Max-Age</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age">Access-Control-Max-Age</a> in the MDN Web Docs.</p>
   */
  AccessControlMaxAgeSec?: number;

  /**
   * <p>A Boolean that determines whether CloudFront overrides HTTP response headers received from the
   * 			origin with the ones specified in this response headers policy.</p>
   */
  OriginOverride: boolean | undefined;
}

export namespace ResponseHeadersPolicyCorsConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyCorsConfig): any => ({
    ...obj,
  });
}

/**
 * <p>An HTTP response header name and its value. CloudFront includes this header in HTTP responses that
 * 			it sends for requests that match a cache behavior that’s associated with this response
 * 			headers policy.</p>
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

export namespace ResponseHeadersPolicyCustomHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyCustomHeader): any => ({
    ...obj,
  });
}

/**
 * <p>A list of HTTP response header names and their values. CloudFront includes these headers in HTTP
 * 			responses that it sends for requests that match a cache behavior that’s associated with
 * 			this response headers policy.</p>
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

export namespace ResponseHeadersPolicyCustomHeadersConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyCustomHeadersConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The policy directives and their values that CloudFront includes as values for the
 * 				<code>Content-Security-Policy</code> HTTP response header.</p>
 * 		       <p>For more information about the <code>Content-Security-Policy</code> HTTP response
 * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyContentSecurityPolicy {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the <code>Content-Security-Policy</code>
   * 			HTTP response header received from the origin with the one specified in this response
   * 			headers policy.</p>
   */
  Override: boolean | undefined;

  /**
   * <p>The policy directives and their values that CloudFront includes as values for the
   * 				<code>Content-Security-Policy</code> HTTP response header.</p>
   */
  ContentSecurityPolicy: string | undefined;
}

export namespace ResponseHeadersPolicyContentSecurityPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyContentSecurityPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Determines whether CloudFront includes the <code>X-Content-Type-Options</code> HTTP response
 * 			header with its value set to <code>nosniff</code>.</p>
 * 		       <p>For more information about the <code>X-Content-Type-Options</code> HTTP response
 * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">X-Content-Type-Options</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyContentTypeOptions {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the <code>X-Content-Type-Options</code>
   * 			HTTP response header received from the origin with the one specified in this response
   * 			headers policy.</p>
   */
  Override: boolean | undefined;
}

export namespace ResponseHeadersPolicyContentTypeOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyContentTypeOptions): any => ({
    ...obj,
  });
}

export enum FrameOptionsList {
  DENY = "DENY",
  SAMEORIGIN = "SAMEORIGIN",
}

/**
 * <p>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header and
 * 			the header’s value.</p>
 * 		       <p>For more information about the <code>X-Frame-Options</code> HTTP response header, see
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
   * 				<code>DENY</code> and <code>SAMEORIGIN</code>. </p>
   * 		       <p>For more information about these values, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>
   */
  FrameOption: FrameOptionsList | string | undefined;
}

export namespace ResponseHeadersPolicyFrameOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyFrameOptions): any => ({
    ...obj,
  });
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
 * <p>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header and
 * 			the header’s value.</p>
 * 		       <p>For more information about the <code>Referrer-Policy</code> HTTP response header, see
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
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>no-referrer</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>no-referrer-when-downgrade</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>origin</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>origin-when-cross-origin</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>same-origin</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>strict-origin</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>strict-origin-when-cross-origin</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>unsafe-url</code>
   *                </p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information about these values, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>
   */
  ReferrerPolicy: ReferrerPolicyList | string | undefined;
}

export namespace ResponseHeadersPolicyReferrerPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyReferrerPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP response
 * 			header and the header’s value.</p>
 * 		       <p>For more information about the <code>Strict-Transport-Security</code> HTTP response
 * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyStrictTransportSecurity {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the <code>Strict-Transport-Security</code>
   * 			HTTP response header received from the origin with the one specified in this response
   * 			headers policy.</p>
   */
  Override: boolean | undefined;

  /**
   * <p>A Boolean that determines whether CloudFront includes the <code>includeSubDomains</code> directive
   * 			in the <code>Strict-Transport-Security</code> HTTP response header.</p>
   */
  IncludeSubdomains?: boolean;

  /**
   * <p>A Boolean that determines whether CloudFront includes the <code>preload</code> directive in the
   * 			<code>Strict-Transport-Security</code> HTTP response header.</p>
   */
  Preload?: boolean;

  /**
   * <p>A number that CloudFront uses as the value for the <code>max-age</code> directive in the
   * 				<code>Strict-Transport-Security</code> HTTP response header.</p>
   */
  AccessControlMaxAgeSec: number | undefined;
}

export namespace ResponseHeadersPolicyStrictTransportSecurity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyStrictTransportSecurity): any => ({
    ...obj,
  });
}

/**
 * <p>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response header and
 * 			the header’s value.</p>
 * 		       <p>For more information about the <code>X-XSS-Protection</code> HTTP response header, see
 * 				<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
 */
export interface ResponseHeadersPolicyXSSProtection {
  /**
   * <p>A Boolean that determines whether CloudFront overrides the <code>X-XSS-Protection</code> HTTP
   * 			response header received from the origin with the one specified in this response headers
   * 			policy.</p>
   */
  Override: boolean | undefined;

  /**
   * <p>A Boolean that determines the value of the <code>X-XSS-Protection</code> HTTP response
   * 			header. When this setting is <code>true</code>, the value of the
   * 			<code>X-XSS-Protection</code> header is <code>1</code>. When this setting is
   * 			<code>false</code>, the value of the <code>X-XSS-Protection</code> header is
   * 			<code>0</code>.</p>
   * 		       <p>For more information about these settings, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
   */
  Protection: boolean | undefined;

  /**
   * <p>A Boolean that determines whether CloudFront includes the <code>mode=block</code> directive in the
   * 			<code>X-XSS-Protection</code> header.</p>
   * 		       <p>For more information about this directive, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
   */
  ModeBlock?: boolean;

  /**
   * <p>A reporting URI, which CloudFront uses as the value of the <code>report</code> directive in the
   * 			<code>X-XSS-Protection</code> header.</p>
   * 		       <p>You cannot specify a <code>ReportUri</code> when <code>ModeBlock</code> is
   * 			<code>true</code>.</p>
   * 		       <p>For more information about using a reporting URL, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
   */
  ReportUri?: string;
}

export namespace ResponseHeadersPolicyXSSProtection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyXSSProtection): any => ({
    ...obj,
  });
}

/**
 * <p>A configuration for a set of security-related HTTP response headers. CloudFront adds these headers
 * 			to HTTP responses that it sends for requests that match a cache behavior associated with
 * 			this response headers policy.</p>
 */
export interface ResponseHeadersPolicySecurityHeadersConfig {
  /**
   * <p>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response header and
   * 			the header’s value.</p>
   * 		       <p>For more information about the <code>X-XSS-Protection</code> HTTP response header, see
   * 			<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
   */
  XSSProtection?: ResponseHeadersPolicyXSSProtection;

  /**
   * <p>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header and
   * 			the header’s value.</p>
   * 		       <p>For more information about the <code>X-Frame-Options</code> HTTP response header, see
   * 			<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>
   */
  FrameOptions?: ResponseHeadersPolicyFrameOptions;

  /**
   * <p>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header and
   * 			the header’s value.</p>
   * 		       <p>For more information about the <code>Referrer-Policy</code> HTTP response header, see
   * 			<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>
   */
  ReferrerPolicy?: ResponseHeadersPolicyReferrerPolicy;

  /**
   * <p>The policy directives and their values that CloudFront includes as values for the
   * 				<code>Content-Security-Policy</code> HTTP response header.</p>
   * 		       <p>For more information about the <code>Content-Security-Policy</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a> in the MDN Web Docs.</p>
   */
  ContentSecurityPolicy?: ResponseHeadersPolicyContentSecurityPolicy;

  /**
   * <p>Determines whether CloudFront includes the <code>X-Content-Type-Options</code> HTTP response
   * 			header with its value set to <code>nosniff</code>.</p>
   * 		       <p>For more information about the <code>X-Content-Type-Options</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">X-Content-Type-Options</a> in the MDN Web Docs.</p>
   */
  ContentTypeOptions?: ResponseHeadersPolicyContentTypeOptions;

  /**
   * <p>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP response
   * 			header and the header’s value.</p>
   * 		       <p>For more information about the <code>Strict-Transport-Security</code> HTTP response
   * 			header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> in the MDN Web Docs.</p>
   */
  StrictTransportSecurity?: ResponseHeadersPolicyStrictTransportSecurity;
}

export namespace ResponseHeadersPolicySecurityHeadersConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicySecurityHeadersConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A configuration for enabling the <code>Server-Timing</code> header in HTTP responses sent
 * 			from CloudFront. CloudFront adds this header to HTTP responses that it sends in response to requests
 * 			that match a cache behavior that's associated with this response headers policy.</p>
 * 		       <p>You can use the <code>Server-Timing</code> header to view metrics that can help you gain
 * 			insights about the behavior and performance of CloudFront. For example, you can see which
 * 			cache layer served a cache hit, or the first byte latency from the origin when there was
 * 			a cache miss. You can use the metrics in the <code>Server-Timing</code> header to
 * 			troubleshoot issues or test the efficiency of your CloudFront configuration. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#server-timing-header">Server-Timing header</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface ResponseHeadersPolicyServerTimingHeadersConfig {
  /**
   * <p>A Boolean that determines whether CloudFront adds the <code>Server-Timing</code> header to HTTP
   * 			responses that it sends in response to requests that match a cache behavior that's
   * 			associated with this response headers policy.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>A number 0–100 (inclusive) that specifies the percentage of responses that you want CloudFront to
   * 			add the <code>Server-Timing</code> header to. When you set the sampling rate to 100,
   * 			CloudFront adds the <code>Server-Timing</code> header to the HTTP response for every request
   * 			that matches the cache behavior that this response headers policy is attached to. When
   * 			you set it to 50, CloudFront adds the header to 50% of the responses for requests that match
   * 			the cache behavior. You can set the sampling rate to any number 0–100 with up to four
   * 			decimal places.</p>
   */
  SamplingRate?: number;
}

export namespace ResponseHeadersPolicyServerTimingHeadersConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyServerTimingHeadersConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The number of custom headers in the response headers policy exceeds the maximum.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyCustomHeadersInResponseHeadersPolicy extends __BaseException {
  readonly name: "TooManyCustomHeadersInResponseHeadersPolicy" = "TooManyCustomHeadersInResponseHeadersPolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCustomHeadersInResponseHeadersPolicy, __BaseException>) {
    super({
      name: "TooManyCustomHeadersInResponseHeadersPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCustomHeadersInResponseHeadersPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of response headers policies for this
 * 			Amazon Web Services account.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyResponseHeadersPolicies extends __BaseException {
  readonly name: "TooManyResponseHeadersPolicies" = "TooManyResponseHeadersPolicies";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyResponseHeadersPolicies, __BaseException>) {
    super({
      name: "TooManyResponseHeadersPolicies",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyResponseHeadersPolicies.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A complex type that controls whether access logs are written for this streaming distribution.</p>
 */
export interface StreamingLoggingConfig {
  /**
   * <p>Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't
   * 			want to enable logging when you create a streaming distribution or if you want to disable
   * 			logging for an existing streaming distribution, specify <code>false</code> for
   * 				<code>Enabled</code>, and specify <code>empty Bucket</code> and <code>Prefix</code>
   * 			elements. If you specify <code>false</code> for <code>Enabled</code> but you specify values
   * 			for <code>Bucket</code> and <code>Prefix</code>, the values are automatically deleted.
   * 		</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The Amazon S3 bucket to store the access logs in, for example, <code>myawslogbucket.s3.amazonaws.com</code>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>An optional string that you want CloudFront to prefix to the access log filenames for this streaming distribution, for example,
   * 			<code>myprefix/</code>. If you want to enable logging, but you don't want to specify a prefix, you still must include
   * 			an empty <code>Prefix</code> element in the <code>Logging</code> element.</p>
   */
  Prefix: string | undefined;
}

export namespace StreamingLoggingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingLoggingConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the Amazon S3 bucket from which you want
 * 			CloudFront to get your media files for distribution.</p>
 */
export interface S3Origin {
  /**
   * <p>The DNS name of the Amazon S3 origin. </p>
   */
  DomainName: string | undefined;

  /**
   * <p>The CloudFront origin access identity to associate with the distribution. Use an origin
   * 			access identity to configure the distribution so that end users can only access objects in an
   * 			Amazon S3 bucket through CloudFront.</p>
   * 		       <p>If you want end users to be able to access objects using either the CloudFront URL or the
   * 			Amazon S3 URL, specify an empty <code>OriginAccessIdentity</code> element.</p>
   * 		       <p>To delete the origin access identity from an existing distribution, update the
   * 			distribution configuration and include an empty <code>OriginAccessIdentity</code>
   * 			element.</p>
   * 		       <p>To replace the origin access identity, update the distribution configuration and
   * 			specify the new origin access identity.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html">Using an Origin Access
   * 				Identity to Restrict Access to Your Amazon S3 Content</a> in the <i>
   * 				Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginAccessIdentity: string | undefined;
}

export namespace S3Origin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Origin): any => ({
    ...obj,
  });
}

/**
 * <p>A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to
 * 			track and manage content delivery.</p>
 */
export interface StreamingDistribution {
  /**
   * <p>The identifier for the RTMP distribution. For example:
   * 			<code>EGTXBD79EXAMPLE</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) for the distribution. For example:
   * 			<code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where
   * 			<code>123456789012</code> is your Amazon Web Services account ID.</p>
   */
  ARN: string | undefined;

  /**
   * <p>The current status of the RTMP distribution. When the status is <code>Deployed</code>,
   * 			the distribution's information is propagated to all CloudFront edge locations.</p>
   */
  Status: string | undefined;

  /**
   * <p>The date and time that the distribution was last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The domain name that corresponds to the streaming distribution, for example, <code>s5c39gqb8ow64r.cloudfront.net</code>. </p>
   */
  DomainName: string | undefined;

  /**
   * <p>A complex type that lists the Amazon Web Services accounts, if any, that you included in the
   * 				<code>TrustedSigners</code> complex type for this distribution. These are the accounts that
   * 			you want to allow to create signed URLs for private content.</p>
   * 		       <p>The <code>Signer</code> complex type lists the Amazon Web Services account number of the trusted
   * 			signer or <code>self</code> if the signer is the Amazon Web Services account that created the distribution.
   * 			The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are
   * 			associated with the trusted signer's Amazon Web Services account. If no <code>KeyPairId</code> element
   * 			appears for a <code>Signer</code>, that signer can't create signed URLs.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private
   * 				Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
   */
  ActiveTrustedSigners: ActiveTrustedSigners | undefined;

  /**
   * <p>The current configuration information for the RTMP distribution.</p>
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;
}

export namespace StreamingDistribution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingDistribution): any => ({
    ...obj,
  });
}

/**
 * <p>The caller reference you attempted to create the streaming distribution with
 * 			is associated with another distribution</p>
 */
export class StreamingDistributionAlreadyExists extends __BaseException {
  readonly name: "StreamingDistributionAlreadyExists" = "StreamingDistributionAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StreamingDistributionAlreadyExists, __BaseException>) {
    super({
      name: "StreamingDistributionAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StreamingDistributionAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 */
export class TooManyStreamingDistributionCNAMEs extends __BaseException {
  readonly name: "TooManyStreamingDistributionCNAMEs" = "TooManyStreamingDistributionCNAMEs";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyStreamingDistributionCNAMEs, __BaseException>) {
    super({
      name: "TooManyStreamingDistributionCNAMEs",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyStreamingDistributionCNAMEs.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of streaming distributions allowed.</p>
 */
export class TooManyStreamingDistributions extends __BaseException {
  readonly name: "TooManyStreamingDistributions" = "TooManyStreamingDistributions";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyStreamingDistributions, __BaseException>) {
    super({
      name: "TooManyStreamingDistributions",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyStreamingDistributions.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You cannot delete a managed policy.</p>
 */
export class IllegalDelete extends __BaseException {
  readonly name: "IllegalDelete" = "IllegalDelete";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalDelete, __BaseException>) {
    super({
      name: "IllegalDelete",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalDelete.prototype);
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
 * <p>The Origin Access Identity specified is already in use.</p>
 */
export class CloudFrontOriginAccessIdentityInUse extends __BaseException {
  readonly name: "CloudFrontOriginAccessIdentityInUse" = "CloudFrontOriginAccessIdentityInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudFrontOriginAccessIdentityInUse, __BaseException>) {
    super({
      name: "CloudFrontOriginAccessIdentityInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudFrontOriginAccessIdentityInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified origin access identity does not exist.</p>
 */
export class NoSuchCloudFrontOriginAccessIdentity extends __BaseException {
  readonly name: "NoSuchCloudFrontOriginAccessIdentity" = "NoSuchCloudFrontOriginAccessIdentity";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchCloudFrontOriginAccessIdentity, __BaseException>) {
    super({
      name: "NoSuchCloudFrontOriginAccessIdentity",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchCloudFrontOriginAccessIdentity.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified CloudFront distribution is not disabled. You must disable
 * 			the distribution before you can delete it.</p>
 */
export class DistributionNotDisabled extends __BaseException {
  readonly name: "DistributionNotDisabled" = "DistributionNotDisabled";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DistributionNotDisabled, __BaseException>) {
    super({
      name: "DistributionNotDisabled",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DistributionNotDisabled.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified configuration for field-level encryption is in use.</p>
 */
export class FieldLevelEncryptionConfigInUse extends __BaseException {
  readonly name: "FieldLevelEncryptionConfigInUse" = "FieldLevelEncryptionConfigInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FieldLevelEncryptionConfigInUse, __BaseException>) {
    super({
      name: "FieldLevelEncryptionConfigInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FieldLevelEncryptionConfigInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified profile for field-level encryption is in use.</p>
 */
export class FieldLevelEncryptionProfileInUse extends __BaseException {
  readonly name: "FieldLevelEncryptionProfileInUse" = "FieldLevelEncryptionProfileInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FieldLevelEncryptionProfileInUse, __BaseException>) {
    super({
      name: "FieldLevelEncryptionProfileInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FieldLevelEncryptionProfileInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot delete the function because it’s attached to one or more cache
 * 			behaviors.</p>
 */
export class FunctionInUse extends __BaseException {
  readonly name: "FunctionInUse" = "FunctionInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FunctionInUse, __BaseException>) {
    super({
      name: "FunctionInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FunctionInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The function does not exist.</p>
 */
export class NoSuchFunctionExists extends __BaseException {
  readonly name: "NoSuchFunctionExists" = "NoSuchFunctionExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchFunctionExists, __BaseException>) {
    super({
      name: "NoSuchFunctionExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchFunctionExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource that was specified is not valid.</p>
 */
export class NoSuchResource extends __BaseException {
  readonly name: "NoSuchResource" = "NoSuchResource";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchResource, __BaseException>) {
    super({
      name: "NoSuchResource",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchResource.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot delete this resource because it is in use.</p>
 */
export class ResourceInUse extends __BaseException {
  readonly name: "ResourceInUse" = "ResourceInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUse, __BaseException>) {
    super({
      name: "ResourceInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot delete the origin request policy because it is attached to one or more cache
 * 			behaviors.</p>
 */
export class OriginRequestPolicyInUse extends __BaseException {
  readonly name: "OriginRequestPolicyInUse" = "OriginRequestPolicyInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OriginRequestPolicyInUse, __BaseException>) {
    super({
      name: "OriginRequestPolicyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OriginRequestPolicyInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified public key is in use. </p>
 */
export class PublicKeyInUse extends __BaseException {
  readonly name: "PublicKeyInUse" = "PublicKeyInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PublicKeyInUse, __BaseException>) {
    super({
      name: "PublicKeyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PublicKeyInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot delete the real-time log configuration because it is attached to one or more cache
 * 			behaviors.</p>
 */
export class RealtimeLogConfigInUse extends __BaseException {
  readonly name: "RealtimeLogConfigInUse" = "RealtimeLogConfigInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RealtimeLogConfigInUse, __BaseException>) {
    super({
      name: "RealtimeLogConfigInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RealtimeLogConfigInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot delete the response headers policy because it is attached to one or more cache
 * 			behaviors in a CloudFront distribution. </p>
 */
export class ResponseHeadersPolicyInUse extends __BaseException {
  readonly name: "ResponseHeadersPolicyInUse" = "ResponseHeadersPolicyInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResponseHeadersPolicyInUse, __BaseException>) {
    super({
      name: "ResponseHeadersPolicyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResponseHeadersPolicyInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified streaming distribution does not exist.</p>
 */
export class NoSuchStreamingDistribution extends __BaseException {
  readonly name: "NoSuchStreamingDistribution" = "NoSuchStreamingDistribution";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchStreamingDistribution, __BaseException>) {
    super({
      name: "NoSuchStreamingDistribution",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchStreamingDistribution.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified CloudFront distribution is not disabled. You must disable
 * 			the distribution before you can delete it.</p>
 */
export class StreamingDistributionNotDisabled extends __BaseException {
  readonly name: "StreamingDistributionNotDisabled" = "StreamingDistributionNotDisabled";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StreamingDistributionNotDisabled, __BaseException>) {
    super({
      name: "StreamingDistributionNotDisabled",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StreamingDistributionNotDisabled.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified invalidation does not exist.</p>
 */
export class NoSuchInvalidation extends __BaseException {
  readonly name: "NoSuchInvalidation" = "NoSuchInvalidation";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchInvalidation, __BaseException>) {
    super({
      name: "NoSuchInvalidation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchInvalidation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Summary of the information about a CloudFront origin access identity.</p>
 */
export interface CloudFrontOriginAccessIdentitySummary {
  /**
   * <p>The ID for the origin access identity. For example:
   * 			<code>E74FTE3AJFJ256A</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon S3 canonical user ID for the origin access identity, which you use when giving
   * 			the origin access identity read permission to an object in Amazon S3.</p>
   */
  S3CanonicalUserId: string | undefined;

  /**
   * <p>The comment for this origin access identity, as originally specified when
   * 			created.</p>
   */
  Comment: string | undefined;
}

export namespace CloudFrontOriginAccessIdentitySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudFrontOriginAccessIdentitySummary): any => ({
    ...obj,
  });
}

/**
 * <p>Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the
 * 					<code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code>
 * 			resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with
 * 			zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default,
 * 			your entire list of origin access identities is returned in one single page. If the list is
 * 			long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code>
 * 			parameters.</p>
 */
export interface CloudFrontOriginAccessIdentityList {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of origin
   * 			access identities. The results include identities in the list that occur after the marker. To
   * 			get the next page of results, set the <code>Marker</code> to the value of the
   * 				<code>NextMarker</code> from the current page's response (which is also the ID of the last
   * 			identity on that page). </p>
   */
  Marker: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   * 			the value you can use for the <code>Marker</code> request parameter to continue listing your
   * 			origin access identities where they left off. </p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of origin access identities you want in the response body.
   * 		</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more origin access identities remain to be listed. If
   * 			your results were truncated, you can make a follow-up pagination request using the
   * 				<code>Marker</code> request parameter to retrieve more items in the list.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of CloudFront origin access identities that were created by the current Amazon Web Services account.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains one <code>CloudFrontOriginAccessIdentitySummary</code>
   * 			element for each origin access identity that was created by the current Amazon Web Services account.</p>
   */
  Items?: CloudFrontOriginAccessIdentitySummary[];
}

export namespace CloudFrontOriginAccessIdentityList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudFrontOriginAccessIdentityList): any => ({
    ...obj,
  });
}

/**
 * <p>An alias (also called a CNAME) and the CloudFront distribution and Amazon Web Services account ID that it’s
 * 			associated with. The distribution and account IDs are partially hidden, which allows you
 * 			to identify the distributions and accounts that you own, but helps to protect the
 * 			information of ones that you don’t own.</p>
 */
export interface ConflictingAlias {
  /**
   * <p>An alias (also called a CNAME).</p>
   */
  Alias?: string;

  /**
   * <p>The (partially hidden) ID of the CloudFront distribution associated with the alias.</p>
   */
  DistributionId?: string;

  /**
   * <p>The (partially hidden) ID of the Amazon Web Services account that owns the distribution that’s
   * 			associated with the alias.</p>
   */
  AccountId?: string;
}

export namespace ConflictingAlias {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictingAlias): any => ({
    ...obj,
  });
}

/**
 * <p>A list of aliases (also called CNAMEs) and the CloudFront distributions and Amazon Web Services accounts that
 * 			they are associated with. In the list, the distribution and account IDs are partially
 * 			hidden, which allows you to identify the distributions and accounts that you own, but
 * 			helps to protect the information of ones that you don’t own.</p>
 */
export interface ConflictingAliasesList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It
   * 			contains the value that you should use in the <code>Marker</code> field of a subsequent
   * 			request to continue listing conflicting aliases where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of conflicting aliases requested.</p>
   */
  MaxItems?: number;

  /**
   * <p>The number of conflicting aliases returned in the response.</p>
   */
  Quantity?: number;

  /**
   * <p>Contains the conflicting aliases in the list.</p>
   */
  Items?: ConflictingAlias[];
}

export namespace ConflictingAliasesList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictingAliasesList): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the information about a CloudFront distribution.</p>
 */
export interface DistributionSummary {
  /**
   * <p>The identifier for the distribution. For example:
   * 			<code>EDFDVBD632BHDS5</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) for the distribution. For example:
   * 				<code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where
   * 				<code>123456789012</code> is your Amazon Web Services account ID.</p>
   */
  ARN: string | undefined;

  /**
   * <p>The current status of the distribution. When the status is <code>Deployed</code>, the
   * 			distribution's information is propagated to all CloudFront edge locations.</p>
   */
  Status: string | undefined;

  /**
   * <p>The date and time the distribution was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The domain name that corresponds to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any,
   * 			for this distribution.</p>
   */
  Aliases: Aliases | undefined;

  /**
   * <p>A complex type that contains information about origins for this distribution.</p>
   */
  Origins: Origins | undefined;

  /**
   * <p> A complex type that contains information about origin groups for this
   * 			distribution.</p>
   */
  OriginGroups?: OriginGroups;

  /**
   * <p>A complex type that describes the default cache behavior if you don't specify a
   * 				<code>CacheBehavior</code> element or if files don't match any of the values of
   * 				<code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one
   * 			default cache behavior.</p>
   */
  DefaultCacheBehavior: DefaultCacheBehavior | undefined;

  /**
   * <p>A complex type that contains zero or more <code>CacheBehavior</code>
   * 			elements.</p>
   */
  CacheBehaviors: CacheBehaviors | undefined;

  /**
   * <p>A complex type that contains zero or more <code>CustomErrorResponses</code>
   * 			elements.</p>
   */
  CustomErrorResponses: CustomErrorResponses | undefined;

  /**
   * <p>The comment originally specified when this distribution was created.</p>
   */
  Comment: string | undefined;

  /**
   * <p>A complex type that contains information about price class for this streaming
   * 			distribution. </p>
   */
  PriceClass: PriceClass | string | undefined;

  /**
   * <p>Whether the distribution is enabled to accept user requests for content.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>A complex type that determines the distribution’s SSL/TLS configuration for
   * 			communicating with viewers.</p>
   */
  ViewerCertificate: ViewerCertificate | undefined;

  /**
   * <p>A complex type that identifies ways in which you want to restrict distribution of your
   * 			content.</p>
   */
  Restrictions: Restrictions | undefined;

  /**
   * <p>The Web ACL Id (if any) associated with the distribution.</p>
   */
  WebACLId: string | undefined;

  /**
   * <p> Specify the maximum HTTP version that you want viewers to use to communicate with
   * 			CloudFront. The default value for new web distributions is <code>http2</code>. Viewers that don't
   * 			support <code>HTTP/2</code> will automatically use an earlier version.</p>
   */
  HttpVersion: HttpVersion | string | undefined;

  /**
   * <p>Whether CloudFront responds to IPv6 DNS requests with an IPv6 address for your
   * 			distribution.</p>
   */
  IsIPV6Enabled: boolean | undefined;

  /**
   * <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content
   * 			publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP
   * 			recordal status for CNAMEs associated with distributions.</p>
   * 		       <p>For more information about ICP recordals, see  <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html">
   * 			Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>
   */
  AliasICPRecordals?: AliasICPRecordal[];
}

export namespace DistributionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DistributionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A distribution list.</p>
 */
export interface DistributionList {
  /**
   * <p>The value you provided for the <code>Marker</code> request parameter.</p>
   */
  Marker: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   * 			the value you can use for the <code>Marker</code> request parameter to continue listing your
   * 			distributions where they left off. </p>
   */
  NextMarker?: string;

  /**
   * <p>The value you provided for the <code>MaxItems</code> request parameter.</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more distributions remain to be listed. If your results
   * 			were truncated, you can make a follow-up pagination request using the <code>Marker</code>
   * 			request parameter to retrieve more distributions in the list.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of distributions that were created by the current Amazon Web Services account.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains one <code>DistributionSummary</code> element for each
   * 			distribution that was created by the current Amazon Web Services account.</p>
   */
  Items?: DistributionSummary[];
}

export namespace DistributionList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DistributionList): any => ({
    ...obj,
  });
}

/**
 * <p>A list of distribution IDs.</p>
 */
export interface DistributionIdList {
  /**
   * <p>The value provided in the <code>Marker</code> request field.</p>
   */
  Marker: string | undefined;

  /**
   * <p>Contains the value that you should use in the <code>Marker</code> field of a
   * 			subsequent request to continue listing distribution IDs where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of distribution IDs requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more distribution IDs remain to be listed. If your
   * 			results were truncated, you can make a subsequent request using the <code>Marker</code>
   * 			request field to retrieve more distribution IDs in the list.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The total number of distribution IDs returned in the response.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the distribution IDs in the list.</p>
   */
  Items?: string[];
}

export namespace DistributionIdList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DistributionIdList): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of a field-level encryption item.</p>
 */
export interface FieldLevelEncryptionSummary {
  /**
   * <p>The unique ID of a field-level encryption item.</p>
   */
  Id: string | undefined;

  /**
   * <p>The last time that the summary of field-level encryption items was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>An optional comment about the field-level encryption item. The comment cannot be longer than
   * 			128 characters.</p>
   */
  Comment?: string;

  /**
   * <p>
   * 			A summary of a query argument-profile mapping.
   * 		</p>
   */
  QueryArgProfileConfig?: QueryArgProfileConfig;

  /**
   * <p>
   * 			A summary of a content type-profile mapping.
   * 		</p>
   */
  ContentTypeProfileConfig?: ContentTypeProfileConfig;
}

export namespace FieldLevelEncryptionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FieldLevelEncryptionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>List of field-level encrpytion configurations.</p>
 */
export interface FieldLevelEncryptionList {
  /**
   * <p>If there are more elements to be listed, this element is present and contains
   * 			the value that you can use for the <code>Marker</code> request parameter to continue
   * 			listing your configurations where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of elements you want in the response body. </p>
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of field-level encryption items.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>An array of field-level encryption items.</p>
   */
  Items?: FieldLevelEncryptionSummary[];
}

export namespace FieldLevelEncryptionList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FieldLevelEncryptionList): any => ({
    ...obj,
  });
}

/**
 * <p>The field-level encryption profile summary.</p>
 */
export interface FieldLevelEncryptionProfileSummary {
  /**
   * <p>ID for the field-level encryption profile summary.</p>
   */
  Id: string | undefined;

  /**
   * <p>The time when the the field-level encryption profile summary was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Name for the field-level encryption profile summary.</p>
   */
  Name: string | undefined;

  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and
   * 			field patterns for specifying which fields to encrypt with this key.</p>
   */
  EncryptionEntities: EncryptionEntities | undefined;

  /**
   * <p>An optional comment for the field-level encryption profile summary. The comment cannot be
   * 			longer than 128 characters.</p>
   */
  Comment?: string;
}

export namespace FieldLevelEncryptionProfileSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FieldLevelEncryptionProfileSummary): any => ({
    ...obj,
  });
}

/**
 * <p>List of field-level encryption profiles.</p>
 */
export interface FieldLevelEncryptionProfileList {
  /**
   * <p>If there are more elements to be listed, this element is present and contains
   * 			the value that you can use for the <code>Marker</code> request parameter to continue
   * 			listing your profiles where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of field-level encryption profiles you want in the response body. </p>
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of field-level encryption profiles.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The field-level encryption profile items.</p>
   */
  Items?: FieldLevelEncryptionProfileSummary[];
}

export namespace FieldLevelEncryptionProfileList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FieldLevelEncryptionProfileList): any => ({
    ...obj,
  });
}

/**
 * <p>A list of CloudFront functions.</p>
 */
export interface FunctionList {
  /**
   * <p>If there are more items in the list than are in this response, this element is
   * 			present. It contains the value that you should use in the <code>Marker</code> field of a
   * 			subsequent request to continue listing functions where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of functions requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of functions returned in the response.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the functions in the list.</p>
   */
  Items?: FunctionSummary[];
}

export namespace FunctionList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FunctionList): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of an invalidation request.</p>
 */
export interface InvalidationSummary {
  /**
   * <p>The unique ID for an invalidation request.</p>
   */
  Id: string | undefined;

  /**
   * <p>The time that an invalidation request was created.</p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The status of an invalidation request.</p>
   */
  Status: string | undefined;
}

export namespace InvalidationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>InvalidationList</code> complex type describes the list of invalidation
 * 			objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in
 * 			the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface InvalidationList {
  /**
   * <p>The value that you provided for the <code>Marker</code> request parameter.</p>
   */
  Marker: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   * 			the value that you can use for the <code>Marker</code> request parameter to continue listing
   * 			your invalidation batches where they left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The value that you provided for the <code>MaxItems</code> request parameter.</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more invalidation batch requests remain to be listed. If
   * 			your results were truncated, you can make a follow-up pagination request using the
   * 				<code>Marker</code> request parameter to retrieve more invalidation batches in the
   * 			list.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of invalidation batches that were created by the current Amazon Web Services account.
   * 		</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains one <code>InvalidationSummary</code> element for each
   * 			invalidation batch created by the current Amazon Web Services account.</p>
   */
  Items?: InvalidationSummary[];
}

export namespace InvalidationList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidationList): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a key group.</p>
 */
export interface KeyGroupSummary {
  /**
   * <p>A key group.</p>
   */
  KeyGroup: KeyGroup | undefined;
}

export namespace KeyGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyGroupSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A list of key groups.</p>
 */
export interface KeyGroupList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It
   * 			contains the value that you should use in the <code>Marker</code> field of a subsequent
   * 			request to continue listing key groups.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of key groups requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of key groups returned in the response.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of key groups.</p>
   */
  Items?: KeyGroupSummary[];
}

export namespace KeyGroupList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyGroupList): any => ({
    ...obj,
  });
}

export type OriginRequestPolicyType = "custom" | "managed";

/**
 * <p>Contains an origin request policy.</p>
 */
export interface OriginRequestPolicySummary {
  /**
   * <p>The type of origin request policy, either <code>managed</code> (created by Amazon Web Services) or
   * 			<code>custom</code> (created in this Amazon Web Services account).</p>
   */
  Type: OriginRequestPolicyType | string | undefined;

  /**
   * <p>The origin request policy.</p>
   */
  OriginRequestPolicy: OriginRequestPolicy | undefined;
}

export namespace OriginRequestPolicySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginRequestPolicySummary): any => ({
    ...obj,
  });
}

/**
 * <p>A list of origin request policies.</p>
 */
export interface OriginRequestPolicyList {
  /**
   * <p>If there are more items in the list than are in this response, this element is
   * 			present. It contains the value that you should use in the <code>Marker</code> field of a
   * 			subsequent request to continue listing origin request policies where you left
   * 			off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of origin request policies requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>The total number of origin request policies returned in the response.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the origin request policies in the list.</p>
   */
  Items?: OriginRequestPolicySummary[];
}

export namespace OriginRequestPolicyList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginRequestPolicyList): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a public key.</p>
 */
export interface PublicKeySummary {
  /**
   * <p>The identifier of the public key.</p>
   */
  Id: string | undefined;

  /**
   * <p>A name to help identify the public key.</p>
   */
  Name: string | undefined;

  /**
   * <p>The date and time when the public key was uploaded.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The public key.</p>
   */
  EncodedKey: string | undefined;

  /**
   * <p>A comment to describe the public key. The comment cannot be longer than 128
   * 			characters.</p>
   */
  Comment?: string;
}

export namespace PublicKeySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublicKeySummary): any => ({
    ...obj,
  });
}

/**
 * <p>A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
 */
export interface PublicKeyList {
  /**
   * <p>If there are more elements to be listed, this element is present and contains
   * 			the value that you can use for the <code>Marker</code> request parameter to continue
   * 			listing your public keys where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of public keys you want in the response.</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of public keys in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of public keys.</p>
   */
  Items?: PublicKeySummary[];
}

export namespace PublicKeyList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublicKeyList): any => ({
    ...obj,
  });
}

/**
 * <p>A list of real-time log configurations.</p>
 */
export interface RealtimeLogConfigs {
  /**
   * <p>The maximum number of real-time log configurations requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>Contains the list of real-time log configurations.</p>
   */
  Items?: RealtimeLogConfig[];

  /**
   * <p>A flag that indicates whether there are more real-time log configurations than are contained
   * 			in this list.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>This parameter indicates where this list of real-time log configurations begins. This list
   * 			includes real-time log configurations that occur after the marker.</p>
   */
  Marker: string | undefined;

  /**
   * <p>If there are more items in the list than are in this response, this element is present. It
   * 			contains the value that you should use in the <code>Marker</code> field of a subsequent
   * 			request to continue listing real-time log configurations where you left off. </p>
   */
  NextMarker?: string;
}

export namespace RealtimeLogConfigs {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RealtimeLogConfigs): any => ({
    ...obj,
  });
}

export enum ResponseHeadersPolicyType {
  custom = "custom",
  managed = "managed",
}

/**
 * <p>Contains a response headers policy.</p>
 */
export interface ResponseHeadersPolicySummary {
  /**
   * <p>The type of response headers policy, either <code>managed</code> (created by Amazon Web Services) or
   * 				<code>custom</code> (created in this Amazon Web Services account).</p>
   */
  Type: ResponseHeadersPolicyType | string | undefined;

  /**
   * <p>The response headers policy.</p>
   */
  ResponseHeadersPolicy: ResponseHeadersPolicy | undefined;
}

export namespace ResponseHeadersPolicySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicySummary): any => ({
    ...obj,
  });
}

/**
 * <p>A list of response headers policies.</p>
 */
export interface ResponseHeadersPolicyList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It
   * 			contains the value that you should use in the <code>Marker</code> field of a subsequent
   * 			request to continue listing response headers policies where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of response headers policies requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of response headers policies returned.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The response headers policies in the list.</p>
   */
  Items?: ResponseHeadersPolicySummary[];
}

export namespace ResponseHeadersPolicyList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyList): any => ({
    ...obj,
  });
}

/**
 * <p> A summary of the information for a CloudFront streaming distribution.</p>
 */
export interface StreamingDistributionSummary {
  /**
   * <p>The identifier for the distribution, for example, <code>EDFDVBD632BHDS5</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p> The ARN (Amazon Resource Name) for the streaming distribution. For example:
   * 				<code>arn:aws:cloudfront::123456789012:streaming-distribution/EDFDVBD632BHDS5</code>, where
   * 				<code>123456789012</code> is your Amazon Web Services account ID.</p>
   */
  ARN: string | undefined;

  /**
   * <p> Indicates the current status of the distribution. When the status is
   * 			<code>Deployed</code>, the distribution's information is fully propagated throughout the
   * 			Amazon CloudFront system.</p>
   */
  Status: string | undefined;

  /**
   * <p>The date and time the distribution was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The domain name corresponding to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want
   * 			CloudFront to get your media files for distribution.</p>
   */
  S3Origin: S3Origin | undefined;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any,
   * 			for this streaming distribution.</p>
   */
  Aliases: Aliases | undefined;

  /**
   * <p>A complex type that specifies the Amazon Web Services accounts, if any, that you want to allow to
   * 			create signed URLs for private content. If you want to require signed URLs in requests for
   * 			objects in the target origin that match the <code>PathPattern</code> for this cache behavior,
   * 			specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for
   * 				<code>Quantity</code> and <code>Items</code>.If you don't want to require signed URLs in
   * 			requests for objects that match <code>PathPattern</code>, specify <code>false</code> for
   * 				<code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.
   * 			To add, change, or remove one or more trusted signers, change <code>Enabled</code> to
   * 				<code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as
   * 			applicable, and specify all of the trusted signers that you want to include in the updated
   * 			distribution.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private
   * 			Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
   */
  TrustedSigners: TrustedSigners | undefined;

  /**
   * <p>The comment originally specified when this distribution was created.</p>
   */
  Comment: string | undefined;

  /**
   * <p>A complex type that contains information about price class for this streaming
   * 			distribution. </p>
   */
  PriceClass: PriceClass | string | undefined;

  /**
   * <p>Whether the distribution is enabled to accept end user requests for content.</p>
   */
  Enabled: boolean | undefined;
}

export namespace StreamingDistributionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingDistributionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A streaming distribution list. </p>
 */
export interface StreamingDistributionList {
  /**
   * <p>The value you provided for the <code>Marker</code> request parameter. </p>
   */
  Marker: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   * 			the value you can use for the <code>Marker</code> request parameter to continue listing your
   * 			RTMP distributions where they left off. </p>
   */
  NextMarker?: string;

  /**
   * <p>The value you provided for the <code>MaxItems</code> request parameter. </p>
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more streaming distributions remain to be listed. If your
   * 			results were truncated, you can make a follow-up pagination request using the
   * 				<code>Marker</code> request parameter to retrieve more distributions in the list. </p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of streaming distributions that were created by the current Amazon Web Services account.
   * 		</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains one <code>StreamingDistributionSummary</code> element for
   * 			each distribution that was created by the current Amazon Web Services account.</p>
   */
  Items?: StreamingDistributionSummary[];
}

export namespace StreamingDistributionList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingDistributionList): any => ({
    ...obj,
  });
}

/**
 * <p>The CloudFront function failed.</p>
 */
export class TestFunctionFailed extends __BaseException {
  readonly name: "TestFunctionFailed" = "TestFunctionFailed";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TestFunctionFailed, __BaseException>) {
    super({
      name: "TestFunctionFailed",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, TestFunctionFailed.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains the result of testing a CloudFront function with <code>TestFunction</code>.</p>
 */
export interface TestResult {
  /**
   * <p>Contains configuration information and metadata about the CloudFront function that was
   * 			tested.</p>
   */
  FunctionSummary?: FunctionSummary;

  /**
   * <p>The amount of time that the function took to run as a percentage of the maximum
   * 			allowed time. For example, a compute utilization of 35 means that the function completed
   * 			in 35% of the maximum allowed time.</p>
   */
  ComputeUtilization?: string;

  /**
   * <p>Contains the log lines that the function wrote (if any) when running the test.</p>
   */
  FunctionExecutionLogs?: string[];

  /**
   * <p>If the result of testing the function was an error, this field contains the error
   * 			message.</p>
   */
  FunctionErrorMessage?: string;

  /**
   * <p>The event object returned by the function. For more information about the structure of the
   * 			event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html">Event object
   * 			structure</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  FunctionOutput?: string;
}

export namespace TestResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestResult): any => ({
    ...obj,
    ...(obj.FunctionExecutionLogs && { FunctionExecutionLogs: SENSITIVE_STRING }),
    ...(obj.FunctionErrorMessage && { FunctionErrorMessage: SENSITIVE_STRING }),
    ...(obj.FunctionOutput && { FunctionOutput: SENSITIVE_STRING }),
  });
}
