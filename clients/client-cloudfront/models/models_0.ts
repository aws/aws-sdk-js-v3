import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Access denied.</p>
 */
export interface AccessDenied extends __SmithyException, $MetadataBearer {
  name: "AccessDenied";
  $fault: "client";
  Message?: string;
}

export namespace AccessDenied {
  export const filterSensitiveLog = (obj: AccessDenied): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: ActiveTrustedKeyGroups): any => ({
    ...obj,
  });
}

/**
 * <p>A list of AWS accounts and the active CloudFront key pairs in each account that CloudFront can use to
 * 			verify the signatures of signed URLs and signed cookies.</p>
 */
export interface Signer {
  /**
   * <p>An AWS account number that contains active CloudFront key pairs that CloudFront can use to verify the
   * 			signatures of signed URLs and signed cookies. If the AWS account that owns the key pairs
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
  export const filterSensitiveLog = (obj: Signer): any => ({
    ...obj,
  });
}

/**
 * <p>A list of AWS accounts and the active CloudFront key pairs in each account that CloudFront can use
 * 			to verify the signatures of signed URLs and signed cookies.</p>
 */
export interface ActiveTrustedSigners {
  /**
   * <p>This field is <code>true</code> if any of the AWS accounts in the list have active CloudFront
   * 			key pairs that CloudFront can use to verify the signatures of signed URLs and signed cookies.
   * 			If not, this field is <code>false</code>.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The number of AWS accounts in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of AWS accounts and the identifiers of active CloudFront key pairs in each account that
   * 			CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
   */
  Items?: Signer[];
}

export namespace ActiveTrustedSigners {
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
  export const filterSensitiveLog = (obj: Aliases): any => ({
    ...obj,
  });
}

export type ICPRecordalStatus = "APPROVED" | "PENDING" | "SUSPENDED";

/**
 * <p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content
 * 			publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP
 * 			recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure
 * 			it yourself.</p>
 * 		       <p>For more information about ICP recordals, see  <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html">
 * 			Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p>
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
  export const filterSensitiveLog = (obj: AllowedMethods): any => ({
    ...obj,
  });
}

/**
 * <p>Invalidation batch specified is too large.</p>
 */
export interface BatchTooLarge extends __SmithyException, $MetadataBearer {
  name: "BatchTooLarge";
  $fault: "client";
  Message?: string;
}

export namespace BatchTooLarge {
  export const filterSensitiveLog = (obj: BatchTooLarge): any => ({
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
   * 				CloudFront Limits</a> in the <i>AWS General Reference</i>.</p>
   */
  WhitelistedNames?: CookieNames;
}

export namespace CookiePreference {
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
  export const filterSensitiveLog = (obj: ForwardedValues): any => ({
    ...obj,
  });
}

export type EventType = "origin-request" | "origin-response" | "viewer-request" | "viewer-response";

/**
 * <p>A complex type that contains a Lambda function association.</p>
 */
export interface LambdaFunctionAssociation {
  /**
   * <p>The ARN of the Lambda function. You must specify the ARN of a function version; you can't specify a Lambda alias
   * 			or $LATEST.</p>
   */
  LambdaFunctionARN: string | undefined;

  /**
   * <p>Specifies the event type that triggers a Lambda function invocation. You can specify the following values:</p>
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
   * <p>A flag that allows a Lambda function to have read access to the body content. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html">Accessing the Request Body by Choosing the
   * 				Include Body Option</a> in the Amazon CloudFront Developer Guide.</p>
   */
  IncludeBody?: boolean;
}

export namespace LambdaFunctionAssociation {
  export const filterSensitiveLog = (obj: LambdaFunctionAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that specifies a list of Lambda functions associations for a cache
 * 			behavior.</p>
 *
 * 		       <p>If you want to invoke one or more Lambda functions triggered by requests that match the
 * 				<code>PathPattern</code> of the cache behavior, specify the applicable values for
 * 				<code>Quantity</code> and <code>Items</code>. Note that there can be up to 4
 * 				<code>LambdaFunctionAssociation</code> items in this list (one for each possible value of
 * 				<code>EventType</code>) and each <code>EventType</code> can be associated with the Lambda
 * 			function only once.</p>
 *
 * 		       <p>If you don't want to invoke any Lambda functions for the requests that match
 * 				<code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit
 * 				<code>Items</code>. </p>
 */
export interface LambdaFunctionAssociations {
  /**
   * <p>The number of Lambda function associations for this cache behavior.</p>
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
  export const filterSensitiveLog = (obj: TrustedKeyGroups): any => ({
    ...obj,
  });
}

/**
 * <p>A list of AWS accounts whose public keys CloudFront can use to verify the signatures of signed
 * 			URLs and signed cookies.</p>
 */
export interface TrustedSigners {
  /**
   * <p>This field is <code>true</code> if any of the AWS accounts have public keys that CloudFront can
   * 			use to verify the signatures of signed URLs and signed cookies. If not, this field is
   * 			<code>false</code>.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The number of AWS accounts in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>A list of AWS account identifiers.</p>
   */
  Items?: string[];
}

export namespace TrustedSigners {
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
   * 		       <p>A list of AWS account IDs whose public keys CloudFront can use to validate signed URLs or signed
   * 			cookies.</p>
   * 		       <p>When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies
   * 			for all requests that match the cache behavior. The URLs or cookies must be signed with
   * 			the private key of a CloudFront key pair in the trusted signer’s AWS account. The signed URL
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
   * <p>A complex type that contains zero or more Lambda function associations for a cache
   * 			behavior.</p>
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociations;

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
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  CachePolicyId?: string;

  /**
   * <p>The unique identifier of the origin request policy that is attached to this cache behavior.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginRequestPolicyId?: string;

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
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
  export const filterSensitiveLog = (obj: ParametersInCacheKeyAndForwardedToOrigin): any => ({
    ...obj,
  });
}

/**
 * <p>A cache policy configuration.</p>
 * 		       <p>This configuration determines the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The values that CloudFront includes in the cache key. These values can include HTTP headers,
 * 					cookies, and URL query strings. CloudFront uses the cache key to find an object in its
 * 					cache that it can return to the viewer.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay
 * 					in the CloudFront cache.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>The headers, cookies, and query strings that are included in the cache key are automatically
 * 			included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t
 * 			find a valid object in its cache that matches the request’s cache key. If you want to
 * 			send values to the origin but <i>not</i> include them in the cache key,
 * 			use <code>OriginRequestPolicy</code>.</p>
 */
export interface CachePolicyConfig {
  /**
   * <p>A comment to describe the cache policy.</p>
   */
  Comment?: string;

  /**
   * <p>A unique name to identify the cache policy.</p>
   */
  Name: string | undefined;

  /**
   * <p>The default amount of time, in seconds, that you want objects to stay in the CloudFront
   * 			cache before CloudFront sends another request to the origin to see if the object has been
   * 			updated. CloudFront uses this value as the object’s time to live (TTL) only when the origin
   * 			does <i>not</i> send <code>Cache-Control</code> or <code>Expires</code>
   * 			headers with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>The default value for this field is 86400 seconds (one day). If the value of
   * 			<code>MinTTL</code> is more than 86400 seconds, then the default value for this field is
   * 			the same as the value of <code>MinTTL</code>.</p>
   */
  DefaultTTL?: number;

  /**
   * <p>The maximum amount of time, in seconds, that objects stay in the CloudFront cache
   * 			before CloudFront sends another request to the origin to see if the object has been updated.
   * 			CloudFront uses this value only when the origin sends <code>Cache-Control</code> or
   * 			<code>Expires</code> headers with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>The default value for this field is 31536000 seconds (one year). If the value of
   * 			<code>MinTTL</code> or <code>DefaultTTL</code> is more than 31536000 seconds, then the
   * 			default value for this field is the same as the value of <code>DefaultTTL</code>.</p>
   */
  MaxTTL?: number;

  /**
   * <p>The minimum amount of time, in seconds, that you want objects to stay in the CloudFront
   * 			cache before CloudFront sends another request to the origin to see if the object has been
   * 			updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  MinTTL: number | undefined;

  /**
   * <p>The HTTP headers, cookies, and URL query strings to include in the cache key. The
   * 			values included in the cache key are automatically included in requests that CloudFront sends
   * 			to the origin.</p>
   */
  ParametersInCacheKeyAndForwardedToOrigin?: ParametersInCacheKeyAndForwardedToOrigin;
}

export namespace CachePolicyConfig {
  export const filterSensitiveLog = (obj: CachePolicyConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A cache policy.</p>
 * 		       <p>When it’s attached to a cache behavior, the cache policy determines the
 * 			following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The values that CloudFront includes in the cache key. These values can include HTTP headers,
 * 					cookies, and URL query strings. CloudFront uses the cache key to find an object in its
 * 					cache that it can return to the viewer.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay
 * 					in the CloudFront cache.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>The headers, cookies, and query strings that are included in the cache key are automatically
 * 			included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t
 * 			find a valid object in its cache that matches the request’s cache key. If you want to
 * 			send values to the origin but <i>not</i> include them in the cache key,
 * 			use <code>OriginRequestPolicy</code>.</p>
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

export namespace CachePolicy {
  export const filterSensitiveLog = (obj: CachePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>A cache policy with this name already exists. You must provide a unique name. To
 * 			modify an existing cache policy, use <code>UpdateCachePolicy</code>.</p>
 */
export interface CachePolicyAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "CachePolicyAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace CachePolicyAlreadyExists {
  export const filterSensitiveLog = (obj: CachePolicyAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>Cannot delete the cache policy because it is attached to one or more cache
 * 			behaviors.</p>
 */
export interface CachePolicyInUse extends __SmithyException, $MetadataBearer {
  name: "CachePolicyInUse";
  $fault: "client";
  Message?: string;
}

export namespace CachePolicyInUse {
  export const filterSensitiveLog = (obj: CachePolicyInUse): any => ({
    ...obj,
  });
}

export type CachePolicyType = "custom" | "managed";

/**
 * <p>Contains a cache policy.</p>
 */
export interface CachePolicySummary {
  /**
   * <p>The type of cache policy, either <code>managed</code> (created by AWS) or
   * 			<code>custom</code> (created in this AWS account).</p>
   */
  Type: CachePolicyType | string | undefined;

  /**
   * <p>The cache policy.</p>
   */
  CachePolicy: CachePolicy | undefined;
}

export namespace CachePolicySummary {
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
  export const filterSensitiveLog = (obj: CachePolicyList): any => ({
    ...obj,
  });
}

/**
 * <p>You can't change the value of a public key.</p>
 */
export interface CannotChangeImmutablePublicKeyFields extends __SmithyException, $MetadataBearer {
  name: "CannotChangeImmutablePublicKeyFields";
  $fault: "client";
  Message?: string;
}

export namespace CannotChangeImmutablePublicKeyFields {
  export const filterSensitiveLog = (obj: CannotChangeImmutablePublicKeyFields): any => ({
    ...obj,
  });
}

export type CertificateSource = "acm" | "cloudfront" | "iam";

export interface CreateCachePolicyRequest {
  /**
   * <p>A cache policy configuration.</p>
   */
  CachePolicyConfig: CachePolicyConfig | undefined;
}

export namespace CreateCachePolicyRequest {
  export const filterSensitiveLog = (obj: CreateCachePolicyRequest): any => ({
    ...obj,
  });
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

export namespace CreateCachePolicyResult {
  export const filterSensitiveLog = (obj: CreateCachePolicyResult): any => ({
    ...obj,
  });
}

/**
 * <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
 */
export interface InconsistentQuantities extends __SmithyException, $MetadataBearer {
  name: "InconsistentQuantities";
  $fault: "client";
  Message?: string;
}

export namespace InconsistentQuantities {
  export const filterSensitiveLog = (obj: InconsistentQuantities): any => ({
    ...obj,
  });
}

/**
 * <p>An argument is invalid.</p>
 */
export interface InvalidArgument extends __SmithyException, $MetadataBearer {
  name: "InvalidArgument";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgument {
  export const filterSensitiveLog = (obj: InvalidArgument): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the maximum number of cache policies for this AWS account. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyCachePolicies extends __SmithyException, $MetadataBearer {
  name: "TooManyCachePolicies";
  $fault: "client";
  Message?: string;
}

export namespace TooManyCachePolicies {
  export const filterSensitiveLog = (obj: TooManyCachePolicies): any => ({
    ...obj,
  });
}

/**
 * <p>The number of cookies in the cache policy exceeds the maximum. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyCookiesInCachePolicy extends __SmithyException, $MetadataBearer {
  name: "TooManyCookiesInCachePolicy";
  $fault: "client";
  Message?: string;
}

export namespace TooManyCookiesInCachePolicy {
  export const filterSensitiveLog = (obj: TooManyCookiesInCachePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>The number of headers in the cache policy exceeds the maximum. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyHeadersInCachePolicy extends __SmithyException, $MetadataBearer {
  name: "TooManyHeadersInCachePolicy";
  $fault: "client";
  Message?: string;
}

export namespace TooManyHeadersInCachePolicy {
  export const filterSensitiveLog = (obj: TooManyHeadersInCachePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>The number of query strings in the cache policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyQueryStringsInCachePolicy extends __SmithyException, $MetadataBearer {
  name: "TooManyQueryStringsInCachePolicy";
  $fault: "client";
  Message?: string;
}

export namespace TooManyQueryStringsInCachePolicy {
  export const filterSensitiveLog = (obj: TooManyQueryStringsInCachePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity but the content
 * 			of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a
 * 			<code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. </p>
 */
export interface CloudFrontOriginAccessIdentityAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "CloudFrontOriginAccessIdentityAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace CloudFrontOriginAccessIdentityAlreadyExists {
  export const filterSensitiveLog = (obj: CloudFrontOriginAccessIdentityAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>Origin access identity configuration. Send a <code>GET</code> request to the
 * 					<code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
 * 		</p>
 */
export interface CloudFrontOriginAccessIdentityConfig {
  /**
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p>
   * 		       <p>If the value of <code>CallerReference</code> is new (regardless of the content of the
   * 			<code>CloudFrontOriginAccessIdentityConfig</code> object), a new origin access identity is
   * 			created.</p>
   * 		       <p>If the <code>CallerReference</code> is a value already sent in a previous identity
   * 			request, and the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is identical
   * 			to the original request (ignoring white space), the response includes the same information
   * 			returned to the original request. </p>
   * 		       <p>If the <code>CallerReference</code> is a value you already sent in a previous request
   * 			to create an identity, but the content of the
   * 			<code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request,
   * 			CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. </p>
   */
  CallerReference: string | undefined;

  /**
   * <p>Any comments you want to include about the origin access identity. </p>
   */
  Comment: string | undefined;
}

export namespace CloudFrontOriginAccessIdentityConfig {
  export const filterSensitiveLog = (obj: CloudFrontOriginAccessIdentityConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The request to create a new origin access identity (OAI). An origin access identity is a
 * 			special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or
 * 			just some of your Amazon S3 content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html">
 * 			Restricting Access to Amazon S3 Content by Using an Origin Access Identity</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>. </p>
 */
export interface CreateCloudFrontOriginAccessIdentityRequest {
  /**
   * <p>The current configuration information for the identity.</p>
   */
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig | undefined;
}

export namespace CreateCloudFrontOriginAccessIdentityRequest {
  export const filterSensitiveLog = (obj: CreateCloudFrontOriginAccessIdentityRequest): any => ({
    ...obj,
  });
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
   * 			access identity read permission to an object in Amazon S3. </p>
   */
  S3CanonicalUserId: string | undefined;

  /**
   * <p>The current configuration information for the identity. </p>
   */
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
}

export namespace CloudFrontOriginAccessIdentity {
  export const filterSensitiveLog = (obj: CloudFrontOriginAccessIdentity): any => ({
    ...obj,
  });
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

export namespace CreateCloudFrontOriginAccessIdentityResult {
  export const filterSensitiveLog = (obj: CreateCloudFrontOriginAccessIdentityResult): any => ({
    ...obj,
  });
}

/**
 * <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
 */
export interface MissingBody extends __SmithyException, $MetadataBearer {
  name: "MissingBody";
  $fault: "client";
  Message?: string;
}

export namespace MissingBody {
  export const filterSensitiveLog = (obj: MissingBody): any => ({
    ...obj,
  });
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of origin access identities allowed.</p>
 */
export interface TooManyCloudFrontOriginAccessIdentities extends __SmithyException, $MetadataBearer {
  name: "TooManyCloudFrontOriginAccessIdentities";
  $fault: "client";
  Message?: string;
}

export namespace TooManyCloudFrontOriginAccessIdentities {
  export const filterSensitiveLog = (obj: TooManyCloudFrontOriginAccessIdentities): any => ({
    ...obj,
  });
}

/**
 * <p>The CNAME specified is already defined for CloudFront.</p>
 */
export interface CNAMEAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "CNAMEAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace CNAMEAlreadyExists {
  export const filterSensitiveLog = (obj: CNAMEAlreadyExists): any => ({
    ...obj,
  });
}

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
   * 		       <p>A list of AWS account IDs whose public keys CloudFront can use to validate signed URLs or signed
   * 			cookies.</p>
   * 		       <p>When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies
   * 			for all requests that match the cache behavior. The URLs or cookies must be signed with
   * 			the private key of a CloudFront key pair in a trusted signer’s AWS account. The signed URL or
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
   * <p>A complex type that contains zero or more Lambda function associations for a cache
   * 			behavior.</p>
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociations;

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
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  CachePolicyId?: string;

  /**
   * <p>The unique identifier of the origin request policy that is attached to the default cache
   * 			behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginRequestPolicyId?: string;

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
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
  export const filterSensitiveLog = (obj: OriginCustomHeader): any => ({
    ...obj,
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
  export const filterSensitiveLog = (obj: CustomHeaders): any => ({
    ...obj,
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
   * <p>The AWS Region for Origin Shield.</p>
   * 		       <p>Specify the AWS Region that has the lowest latency to your origin.
   *             To specify a region, use the region code, not the region name.
   *             For example, specify the US East (Ohio) region as <code>us-east-2</code>.</p>
   *         <p>When you enable CloudFront Origin Shield, you must specify the AWS Region for Origin
   *             Shield. For the list of AWS Regions that you can specify, and for help choosing the best
   *             Region for your origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region">Choosing the AWS Region for Origin Shield</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginShieldRegion?: string;
}

export namespace OriginShield {
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
  export const filterSensitiveLog = (obj: Origin): any => ({
    ...obj,
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
 *
 *                   </p>
 * 					             </li>
 *                   <li>
 * 						               <p>To accept HTTPS connections from all viewers, including those that don’t support SNI,
 * 							set <code>SSLSupportMethod</code> to <code>vip</code>. This is not
 * 							recommended, and results in additional monthly charges from
 * 							CloudFront.
 *                   </p>
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
 * 				           <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">AWS
 * 					Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">AWS Identity and Access Management (AWS IAM)</a>. You specify the location
 * 					by setting a value in one of the following fields (not both):</p>
 * 				           <ul>
 *                   <li>
 * 						               <p>
 *                         <code>ACMCertificateArn</code>
 *
 *                      </p>
 * 					             </li>
 *                   <li>
 * 						               <p>
 *                         <code>IAMCertificateId</code>
 *
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
   *
   *                </p>
   * 			         </li>
   *          </ul>
   */
  CloudFrontDefaultCertificate?: boolean;

  /**
   * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and
   * 			the SSL/TLS certificate is stored in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">AWS
   * 			Identity and Access Management (AWS IAM)</a>, provide the ID of the IAM
   * 			certificate.</p>
   * 		       <p>If you specify an IAM certificate ID, you must also specify values for
   * 			<code>MinimumProtocolVerison</code> and <code>SSLSupportMethod</code>.
   *       </p>
   */
  IAMCertificateId?: string;

  /**
   * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and
   * 			the SSL/TLS certificate is stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">AWS Certificate Manager (ACM)</a>, provide the Amazon Resource
   * 			Name (ARN) of the ACM certificate. CloudFront only supports ACM certificates in the US
   * 			East (N. Virginia) Region (<code>us-east-1</code>).</p>
   * 		       <p>If you specify an ACM certificate ARN, you must also specify values for
   * 			<code>MinimumProtocolVerison</code> and <code>SSLSupportMethod</code>.
   *       </p>
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
   * 					the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>.</p>
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
   * 			you must specify <code>TLSv1</code> or higher.
   *       </p>
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
   *
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>IAMCertificateId</code>
   *
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
   *
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>IAMCertificateId</code>
   *
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
  export const filterSensitiveLog = (obj: ViewerCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>A distribution configuration.</p>
 */
export interface DistributionConfig {
  /**
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be
   * 			replayed.</p>
   * 		       <p>If the value of <code>CallerReference</code> is new (regardless of the content of the
   * 				<code>DistributionConfig</code> object), CloudFront creates a new distribution.</p>
   * 		       <p>If <code>CallerReference</code> is a value that you already sent in a previous request to
   * 			create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any,
   * 			for this distribution.</p>
   */
  Aliases?: Aliases;

  /**
   * <p>The object that you want CloudFront to request from your origin (for example,
   * 				<code>index.html</code>) when a viewer requests the root URL for your distribution
   * 				(<code>http://www.example.com</code>) instead of an object in your distribution
   * 				(<code>http://www.example.com/product-description.html</code>). Specifying a default root
   * 			object avoids exposing the contents of your distribution.</p>
   * 		       <p>Specify only the object name, for example, <code>index.html</code>. Don't add a
   * 				<code>/</code> before the object name.</p>
   * 		       <p>If you don't want to specify a default root object when you create a distribution,
   * 			include an empty <code>DefaultRootObject</code> element.</p>
   * 		       <p>To delete the default root object from an existing distribution, update the
   * 			distribution configuration and include an empty <code>DefaultRootObject</code>
   * 			element.</p>
   * 		       <p>To replace the default root object, update the distribution configuration and specify
   * 			the new object.</p>
   * 		       <p>For more information about the default root object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html">Creating a Default Root Object</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  DefaultRootObject?: string;

  /**
   * <p>A complex type that contains information about origins for this distribution.
   * 		</p>
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
   * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.
   * 		</p>
   */
  CacheBehaviors?: CacheBehaviors;

  /**
   * <p>A complex type that controls the following:</p>
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
  CustomErrorResponses?: CustomErrorResponses;

  /**
   * <p>Any comments you want to include about the distribution.</p>
   * 		       <p>If you don't want to specify a comment, include an empty <code>Comment</code>
   * 			element.</p>
   * 		       <p>To delete an existing comment, update the distribution configuration and include an
   * 			empty <code>Comment</code> element.</p>
   * 		       <p>To add or change a comment, update the distribution configuration and specify the new
   * 			comment.</p>
   */
  Comment: string | undefined;

  /**
   * <p>A complex type that controls whether access logs are written for the
   * 			distribution.</p>
   * 		       <p>For more information about logging, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html">Access
   * 				Logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Logging?: LoggingConfig;

  /**
   * <p>The price class that corresponds with the maximum price that you want to pay for CloudFront
   * 			service. If you specify <code>PriceClass_All</code>, CloudFront responds to requests for your
   * 			objects from all CloudFront edge locations.</p>
   * 		       <p>If you specify a price class other than <code>PriceClass_All</code>, CloudFront serves your
   * 			objects from the CloudFront edge location that has the lowest latency among the edge locations in
   * 			your price class. Viewers who are in or near regions that are excluded from your specified
   * 			price class may encounter slower performance.</p>
   * 		       <p>For more information about price classes, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html">Choosing the Price Class
   * 			for a CloudFront Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>. For
   * 			information about CloudFront pricing, including how price classes (such as Price Class 100)
   * 			map to CloudFront regions, see <a href="http://aws.amazon.com/cloudfront/pricing/">Amazon CloudFront
   * 			Pricing</a>.</p>
   */
  PriceClass?: PriceClass | string;

  /**
   * <p>From this field, you can enable or disable the selected distribution.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>A complex type that determines the distribution’s SSL/TLS configuration for
   * 			communicating with viewers.</p>
   */
  ViewerCertificate?: ViewerCertificate;

  /**
   * <p>A complex type that identifies ways in which you want to restrict distribution of your
   * 			content.</p>
   */
  Restrictions?: Restrictions;

  /**
   * <p>A unique identifier that specifies the AWS WAF web ACL, if any, to associate
   * 			with this distribution. To specify a web ACL created using the latest version of AWS
   * 			WAF, use the ACL ARN, for example
   * 			<code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>.
   * 			To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example
   * 			<code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p>
   * 		       <p>AWS WAF is a web application firewall that lets you monitor the HTTP and HTTPS
   * 			requests that are forwarded to CloudFront, and lets you control access to your content. Based on
   * 			conditions that you specify, such as the IP addresses that requests originate from or the
   * 			values of query strings, CloudFront responds to requests either with the requested content or with
   * 			an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page
   * 			when a request is blocked. For more information about AWS WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">AWS WAF
   * 				Developer Guide</a>. </p>
   */
  WebACLId?: string;

  /**
   * <p>(Optional) Specify the maximum HTTP version that you want viewers to use to communicate
   * 			with CloudFront. The default value for new web distributions is http2. Viewers that don't support
   * 			HTTP/2 automatically use an earlier HTTP version.</p>
   * 		       <p>For viewers and CloudFront to use HTTP/2, viewers must support TLS 1.2 or later, and must
   * 			support Server Name Identification (SNI).</p>
   * 		       <p>In general, configuring CloudFront to communicate with viewers using HTTP/2 reduces latency.
   * 			You can improve performance by optimizing for HTTP/2. For more information, do an Internet
   * 			search for "http/2 optimization." </p>
   */
  HttpVersion?: HttpVersion | string;

  /**
   * <p>If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your
   * 			distribution, specify <code>true</code>. If you specify <code>false</code>, CloudFront responds to
   * 			IPv6 DNS requests with the DNS response code <code>NOERROR</code> and with no IP addresses.
   * 			This allows viewers to submit a second request, for an IPv4 address for your distribution. </p>
   * 		       <p>In general, you should enable IPv6 if you have users on IPv6 networks who want to
   * 			access your content. However, if you're using signed URLs or signed cookies to restrict access
   * 			to your content, and if you're using a custom policy that includes the <code>IpAddress</code>
   * 			parameter to restrict the IP addresses that can access your content, don't enable IPv6. If
   * 			you want to restrict access to some content by IP address and not restrict access to other
   * 			content (or restrict access but not by IP address), you can create two distributions. For more
   * 			information, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html">Creating a Signed URL Using a Custom Policy</a> in the <i>Amazon CloudFront Developer
   * 				Guide</i>.</p>
   * 		       <p>If you're using an Amazon Route 53 alias resource record set to route traffic to your CloudFront
   * 			distribution, you need to create a second alias resource record set when both of the following
   * 			are true:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>You enable IPv6 for the distribution</p>
   * 			         </li>
   *             <li>
   * 				           <p>You're using alternate domain names in the URLs for your objects</p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html">Routing Traffic
   * 				to an Amazon CloudFront Web Distribution by Using Your Domain Name</a> in the <i>Amazon Route 53
   * 				Developer Guide</i>.</p>
   * 		       <p>If you created a CNAME resource record set, either with Amazon Route 53 or with another DNS
   * 			service, you don't need to make any changes. A CNAME record will route traffic to your
   * 			distribution regardless of the IP address format of the viewer request.</p>
   */
  IsIPV6Enabled?: boolean;
}

export namespace DistributionConfig {
  export const filterSensitiveLog = (obj: DistributionConfig): any => ({
    ...obj,
    ...(obj.Comment && { Comment: SENSITIVE_STRING }),
  });
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

export namespace CreateDistributionRequest {
  export const filterSensitiveLog = (obj: CreateDistributionRequest): any => ({
    ...obj,
    ...(obj.DistributionConfig && {
      DistributionConfig: DistributionConfig.filterSensitiveLog(obj.DistributionConfig),
    }),
  });
}

/**
 * <p>A distribution tells CloudFront where you want content to be delivered from, and the details about how to
 * 			track and manage content delivery.</p>
 */
export interface Distribution {
  /**
   * <p>The identifier for the distribution. For example: <code>EDFDVBD632BHDS5</code>.
   * 		</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) for the distribution. For example:
   * 				<code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where
   * 				<code>123456789012</code> is your AWS account ID.</p>
   */
  ARN: string | undefined;

  /**
   * <p>This response element indicates the current status of the distribution. When the status
   * 			is <code>Deployed</code>, the distribution's information is fully propagated to all CloudFront edge
   * 			locations. </p>
   */
  Status: string | undefined;

  /**
   * <p>The date and time the distribution was last modified. </p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The number of invalidation batches currently in progress. </p>
   */
  InProgressInvalidationBatches: number | undefined;

  /**
   * <p>The domain name corresponding to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>. </p>
   */
  DomainName: string | undefined;

  /**
   * <important>
   * 			         <p>We recommend using <code>TrustedKeyGroups</code> instead of
   * 				<code>TrustedSigners</code>.</p>
   * 		       </important>
   * 		       <p>CloudFront automatically adds this field to the response if you’ve configured a cache behavior in
   * 			this distribution to serve private content using trusted signers. This field contains a
   * 			list of AWS account IDs and the active CloudFront key pairs in each account that CloudFront can use
   * 			to verify the signatures of signed URLs or signed cookies.</p>
   */
  ActiveTrustedSigners?: ActiveTrustedSigners;

  /**
   * <p>CloudFront automatically adds this field to the response if you’ve configured a cache
   * 			behavior in this distribution to serve private content using key groups. This field
   * 			contains a list of key groups and the public keys in each key group that CloudFront can use to
   * 			verify the signatures of signed URLs or signed cookies.</p>
   */
  ActiveTrustedKeyGroups?: ActiveTrustedKeyGroups;

  /**
   * <p>The current configuration information for the distribution. Send a <code>GET</code>
   * 			request to the <code>/<i>CloudFront API version</i>/distribution ID/config</code>
   * 			resource.</p>
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * <p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content
   * 			publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP
   * 			recordal status for CNAMEs associated with distributions.</p>
   * 		       <p>For more information about ICP recordals, see  <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html">
   * 			Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p>
   */
  AliasICPRecordals?: AliasICPRecordal[];
}

export namespace Distribution {
  export const filterSensitiveLog = (obj: Distribution): any => ({
    ...obj,
    ...(obj.DistributionConfig && {
      DistributionConfig: DistributionConfig.filterSensitiveLog(obj.DistributionConfig),
    }),
  });
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

export namespace CreateDistributionResult {
  export const filterSensitiveLog = (obj: CreateDistributionResult): any => ({
    ...obj,
    ...(obj.Distribution && { Distribution: Distribution.filterSensitiveLog(obj.Distribution) }),
  });
}

/**
 * <p>The caller reference you attempted to create the distribution with is associated with another distribution.</p>
 */
export interface DistributionAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "DistributionAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace DistributionAlreadyExists {
  export const filterSensitiveLog = (obj: DistributionAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>The specified configuration for field-level encryption can't be associated with the specified cache behavior.</p>
 */
export interface IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
  extends __SmithyException,
    $MetadataBearer {
  name: "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior";
  $fault: "client";
  Message?: string;
}

export namespace IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior {
  export const filterSensitiveLog = (obj: IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior): any => ({
    ...obj,
  });
}

/**
 * <p>The default root object file name is too big or contains an invalid character.</p>
 */
export interface InvalidDefaultRootObject extends __SmithyException, $MetadataBearer {
  name: "InvalidDefaultRootObject";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDefaultRootObject {
  export const filterSensitiveLog = (obj: InvalidDefaultRootObject): any => ({
    ...obj,
  });
}

/**
 * <p>An invalid error code was specified.</p>
 */
export interface InvalidErrorCode extends __SmithyException, $MetadataBearer {
  name: "InvalidErrorCode";
  $fault: "client";
  Message?: string;
}

export namespace InvalidErrorCode {
  export const filterSensitiveLog = (obj: InvalidErrorCode): any => ({
    ...obj,
  });
}

/**
 * <p>Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code>
 * 			list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected.</p>
 */
export interface InvalidForwardCookies extends __SmithyException, $MetadataBearer {
  name: "InvalidForwardCookies";
  $fault: "client";
  Message?: string;
}

export namespace InvalidForwardCookies {
  export const filterSensitiveLog = (obj: InvalidForwardCookies): any => ({
    ...obj,
  });
}

/**
 * <p>The specified geo restriction parameter is not valid.</p>
 */
export interface InvalidGeoRestrictionParameter extends __SmithyException, $MetadataBearer {
  name: "InvalidGeoRestrictionParameter";
  $fault: "client";
  Message?: string;
}

export namespace InvalidGeoRestrictionParameter {
  export const filterSensitiveLog = (obj: InvalidGeoRestrictionParameter): any => ({
    ...obj,
  });
}

/**
 * <p>The headers specified are not valid for an Amazon S3 origin.</p>
 */
export interface InvalidHeadersForS3Origin extends __SmithyException, $MetadataBearer {
  name: "InvalidHeadersForS3Origin";
  $fault: "client";
  Message?: string;
}

export namespace InvalidHeadersForS3Origin {
  export const filterSensitiveLog = (obj: InvalidHeadersForS3Origin): any => ({
    ...obj,
  });
}

/**
 * <p>The specified Lambda function association is invalid.</p>
 */
export interface InvalidLambdaFunctionAssociation extends __SmithyException, $MetadataBearer {
  name: "InvalidLambdaFunctionAssociation";
  $fault: "client";
  Message?: string;
}

export namespace InvalidLambdaFunctionAssociation {
  export const filterSensitiveLog = (obj: InvalidLambdaFunctionAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>The location code specified is not valid.</p>
 */
export interface InvalidLocationCode extends __SmithyException, $MetadataBearer {
  name: "InvalidLocationCode";
  $fault: "client";
  Message?: string;
}

export namespace InvalidLocationCode {
  export const filterSensitiveLog = (obj: InvalidLocationCode): any => ({
    ...obj,
  });
}

/**
 * <p>The minimum protocol version specified is not valid.</p>
 */
export interface InvalidMinimumProtocolVersion extends __SmithyException, $MetadataBearer {
  name: "InvalidMinimumProtocolVersion";
  $fault: "client";
  Message?: string;
}

export namespace InvalidMinimumProtocolVersion {
  export const filterSensitiveLog = (obj: InvalidMinimumProtocolVersion): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.</p>
 */
export interface InvalidOrigin extends __SmithyException, $MetadataBearer {
  name: "InvalidOrigin";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOrigin {
  export const filterSensitiveLog = (obj: InvalidOrigin): any => ({
    ...obj,
  });
}

/**
 * <p>The origin access identity is not valid or doesn't exist.</p>
 */
export interface InvalidOriginAccessIdentity extends __SmithyException, $MetadataBearer {
  name: "InvalidOriginAccessIdentity";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOriginAccessIdentity {
  export const filterSensitiveLog = (obj: InvalidOriginAccessIdentity): any => ({
    ...obj,
  });
}

/**
 * <p>The keep alive timeout specified for the origin is not valid.</p>
 */
export interface InvalidOriginKeepaliveTimeout extends __SmithyException, $MetadataBearer {
  name: "InvalidOriginKeepaliveTimeout";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOriginKeepaliveTimeout {
  export const filterSensitiveLog = (obj: InvalidOriginKeepaliveTimeout): any => ({
    ...obj,
  });
}

/**
 * <p>The read timeout specified for the origin is not valid.</p>
 */
export interface InvalidOriginReadTimeout extends __SmithyException, $MetadataBearer {
  name: "InvalidOriginReadTimeout";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOriginReadTimeout {
  export const filterSensitiveLog = (obj: InvalidOriginReadTimeout): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support
 * 			Server Name Indication (SNI).</p>
 */
export interface InvalidProtocolSettings extends __SmithyException, $MetadataBearer {
  name: "InvalidProtocolSettings";
  $fault: "client";
  Message?: string;
}

export namespace InvalidProtocolSettings {
  export const filterSensitiveLog = (obj: InvalidProtocolSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The query string parameters specified are not valid.</p>
 */
export interface InvalidQueryStringParameters extends __SmithyException, $MetadataBearer {
  name: "InvalidQueryStringParameters";
  $fault: "client";
  Message?: string;
}

export namespace InvalidQueryStringParameters {
  export const filterSensitiveLog = (obj: InvalidQueryStringParameters): any => ({
    ...obj,
  });
}

/**
 * <p>The relative path is too big, is not URL-encoded, or does not begin with a slash (/).</p>
 */
export interface InvalidRelativePath extends __SmithyException, $MetadataBearer {
  name: "InvalidRelativePath";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRelativePath {
  export const filterSensitiveLog = (obj: InvalidRelativePath): any => ({
    ...obj,
  });
}

/**
 * <p>This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the
 * 			<code>RequiredProtocols</code> element from your distribution configuration.</p>
 */
export interface InvalidRequiredProtocol extends __SmithyException, $MetadataBearer {
  name: "InvalidRequiredProtocol";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequiredProtocol {
  export const filterSensitiveLog = (obj: InvalidRequiredProtocol): any => ({
    ...obj,
  });
}

/**
 * <p>A response code is not valid.</p>
 */
export interface InvalidResponseCode extends __SmithyException, $MetadataBearer {
  name: "InvalidResponseCode";
  $fault: "client";
  Message?: string;
}

export namespace InvalidResponseCode {
  export const filterSensitiveLog = (obj: InvalidResponseCode): any => ({
    ...obj,
  });
}

/**
 * <p>The TTL order specified is not valid.</p>
 */
export interface InvalidTTLOrder extends __SmithyException, $MetadataBearer {
  name: "InvalidTTLOrder";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTTLOrder {
  export const filterSensitiveLog = (obj: InvalidTTLOrder): any => ({
    ...obj,
  });
}

/**
 * <p>A viewer certificate specified is not valid.</p>
 */
export interface InvalidViewerCertificate extends __SmithyException, $MetadataBearer {
  name: "InvalidViewerCertificate";
  $fault: "client";
  Message?: string;
}

export namespace InvalidViewerCertificate {
  export const filterSensitiveLog = (obj: InvalidViewerCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>A web ACL ID specified is not valid. To specify a web ACL created using the latest
 * 			version of AWS WAF, use the ACL ARN, for example
 * 			<code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>.
 * 			To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example
 * 			<code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p>
 */
export interface InvalidWebACLId extends __SmithyException, $MetadataBearer {
  name: "InvalidWebACLId";
  $fault: "client";
  Message?: string;
}

export namespace InvalidWebACLId {
  export const filterSensitiveLog = (obj: InvalidWebACLId): any => ({
    ...obj,
  });
}

/**
 * <p>The cache policy does not exist.</p>
 */
export interface NoSuchCachePolicy extends __SmithyException, $MetadataBearer {
  name: "NoSuchCachePolicy";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchCachePolicy {
  export const filterSensitiveLog = (obj: NoSuchCachePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>The specified configuration for field-level encryption doesn't exist.</p>
 */
export interface NoSuchFieldLevelEncryptionConfig extends __SmithyException, $MetadataBearer {
  name: "NoSuchFieldLevelEncryptionConfig";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchFieldLevelEncryptionConfig {
  export const filterSensitiveLog = (obj: NoSuchFieldLevelEncryptionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>No origin exists with the specified <code>Origin Id</code>. </p>
 */
export interface NoSuchOrigin extends __SmithyException, $MetadataBearer {
  name: "NoSuchOrigin";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchOrigin {
  export const filterSensitiveLog = (obj: NoSuchOrigin): any => ({
    ...obj,
  });
}

/**
 * <p>The origin request policy does not exist.</p>
 */
export interface NoSuchOriginRequestPolicy extends __SmithyException, $MetadataBearer {
  name: "NoSuchOriginRequestPolicy";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchOriginRequestPolicy {
  export const filterSensitiveLog = (obj: NoSuchOriginRequestPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot create more cache behaviors for the distribution.</p>
 */
export interface TooManyCacheBehaviors extends __SmithyException, $MetadataBearer {
  name: "TooManyCacheBehaviors";
  $fault: "client";
  Message?: string;
}

export namespace TooManyCacheBehaviors {
  export const filterSensitiveLog = (obj: TooManyCacheBehaviors): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot create anymore custom SSL/TLS certificates.</p>
 */
export interface TooManyCertificates extends __SmithyException, $MetadataBearer {
  name: "TooManyCertificates";
  $fault: "client";
  Message?: string;
}

export namespace TooManyCertificates {
  export const filterSensitiveLog = (obj: TooManyCertificates): any => ({
    ...obj,
  });
}

/**
 * <p>Your request contains more cookie names in the whitelist than are allowed per cache behavior.</p>
 */
export interface TooManyCookieNamesInWhiteList extends __SmithyException, $MetadataBearer {
  name: "TooManyCookieNamesInWhiteList";
  $fault: "client";
  Message?: string;
}

export namespace TooManyCookieNamesInWhiteList {
  export const filterSensitiveLog = (obj: TooManyCookieNamesInWhiteList): any => ({
    ...obj,
  });
}

/**
 * <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 */
export interface TooManyDistributionCNAMEs extends __SmithyException, $MetadataBearer {
  name: "TooManyDistributionCNAMEs";
  $fault: "client";
  Message?: string;
}

export namespace TooManyDistributionCNAMEs {
  export const filterSensitiveLog = (obj: TooManyDistributionCNAMEs): any => ({
    ...obj,
  });
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of distributions allowed.</p>
 */
export interface TooManyDistributions extends __SmithyException, $MetadataBearer {
  name: "TooManyDistributions";
  $fault: "client";
  Message?: string;
}

export namespace TooManyDistributions {
  export const filterSensitiveLog = (obj: TooManyDistributions): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of distributions have been associated with the specified cache
 * 			policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyDistributionsAssociatedToCachePolicy extends __SmithyException, $MetadataBearer {
  name: "TooManyDistributionsAssociatedToCachePolicy";
  $fault: "client";
  Message?: string;
}

export namespace TooManyDistributionsAssociatedToCachePolicy {
  export const filterSensitiveLog = (obj: TooManyDistributionsAssociatedToCachePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of distributions have been associated with the specified configuration for field-level encryption.</p>
 */
export interface TooManyDistributionsAssociatedToFieldLevelEncryptionConfig extends __SmithyException, $MetadataBearer {
  name: "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig";
  $fault: "client";
  Message?: string;
}

export namespace TooManyDistributionsAssociatedToFieldLevelEncryptionConfig {
  export const filterSensitiveLog = (obj: TooManyDistributionsAssociatedToFieldLevelEncryptionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The number of distributions that reference this key group is more than the maximum
 * 			allowed. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyDistributionsAssociatedToKeyGroup extends __SmithyException, $MetadataBearer {
  name: "TooManyDistributionsAssociatedToKeyGroup";
  $fault: "client";
  Message?: string;
}

export namespace TooManyDistributionsAssociatedToKeyGroup {
  export const filterSensitiveLog = (obj: TooManyDistributionsAssociatedToKeyGroup): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of distributions have been associated with the specified origin
 * 			request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyDistributionsAssociatedToOriginRequestPolicy extends __SmithyException, $MetadataBearer {
  name: "TooManyDistributionsAssociatedToOriginRequestPolicy";
  $fault: "client";
  Message?: string;
}

export namespace TooManyDistributionsAssociatedToOriginRequestPolicy {
  export const filterSensitiveLog = (obj: TooManyDistributionsAssociatedToOriginRequestPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Processing your request would cause the maximum number of distributions with Lambda function associations per owner
 * 			to be exceeded.</p>
 */
export interface TooManyDistributionsWithLambdaAssociations extends __SmithyException, $MetadataBearer {
  name: "TooManyDistributionsWithLambdaAssociations";
  $fault: "client";
  Message?: string;
}

export namespace TooManyDistributionsWithLambdaAssociations {
  export const filterSensitiveLog = (obj: TooManyDistributionsWithLambdaAssociations): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of distributions have been associated with the specified Lambda
 * 			function.</p>
 */
export interface TooManyDistributionsWithSingleFunctionARN extends __SmithyException, $MetadataBearer {
  name: "TooManyDistributionsWithSingleFunctionARN";
  $fault: "client";
  Message?: string;
}

export namespace TooManyDistributionsWithSingleFunctionARN {
  export const filterSensitiveLog = (obj: TooManyDistributionsWithSingleFunctionARN): any => ({
    ...obj,
  });
}

/**
 * <p>Your request contains too many headers in forwarded values.</p>
 */
export interface TooManyHeadersInForwardedValues extends __SmithyException, $MetadataBearer {
  name: "TooManyHeadersInForwardedValues";
  $fault: "client";
  Message?: string;
}

export namespace TooManyHeadersInForwardedValues {
  export const filterSensitiveLog = (obj: TooManyHeadersInForwardedValues): any => ({
    ...obj,
  });
}

/**
 * <p>The number of key groups referenced by this distribution is more than the maximum
 * 			allowed. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyKeyGroupsAssociatedToDistribution extends __SmithyException, $MetadataBearer {
  name: "TooManyKeyGroupsAssociatedToDistribution";
  $fault: "client";
  Message?: string;
}

export namespace TooManyKeyGroupsAssociatedToDistribution {
  export const filterSensitiveLog = (obj: TooManyKeyGroupsAssociatedToDistribution): any => ({
    ...obj,
  });
}

/**
 * <p>Your request contains more Lambda function associations than are allowed per distribution.</p>
 */
export interface TooManyLambdaFunctionAssociations extends __SmithyException, $MetadataBearer {
  name: "TooManyLambdaFunctionAssociations";
  $fault: "client";
  Message?: string;
}

export namespace TooManyLambdaFunctionAssociations {
  export const filterSensitiveLog = (obj: TooManyLambdaFunctionAssociations): any => ({
    ...obj,
  });
}

/**
 * <p>Your request contains too many origin custom headers.</p>
 */
export interface TooManyOriginCustomHeaders extends __SmithyException, $MetadataBearer {
  name: "TooManyOriginCustomHeaders";
  $fault: "client";
  Message?: string;
}

export namespace TooManyOriginCustomHeaders {
  export const filterSensitiveLog = (obj: TooManyOriginCustomHeaders): any => ({
    ...obj,
  });
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of origin groups allowed.</p>
 */
export interface TooManyOriginGroupsPerDistribution extends __SmithyException, $MetadataBearer {
  name: "TooManyOriginGroupsPerDistribution";
  $fault: "client";
  Message?: string;
}

export namespace TooManyOriginGroupsPerDistribution {
  export const filterSensitiveLog = (obj: TooManyOriginGroupsPerDistribution): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot create more origins for the distribution.</p>
 */
export interface TooManyOrigins extends __SmithyException, $MetadataBearer {
  name: "TooManyOrigins";
  $fault: "client";
  Message?: string;
}

export namespace TooManyOrigins {
  export const filterSensitiveLog = (obj: TooManyOrigins): any => ({
    ...obj,
  });
}

/**
 * <p>Your request contains too many query string parameters.</p>
 */
export interface TooManyQueryStringParameters extends __SmithyException, $MetadataBearer {
  name: "TooManyQueryStringParameters";
  $fault: "client";
  Message?: string;
}

export namespace TooManyQueryStringParameters {
  export const filterSensitiveLog = (obj: TooManyQueryStringParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Your request contains more trusted signers than are allowed per distribution.</p>
 */
export interface TooManyTrustedSigners extends __SmithyException, $MetadataBearer {
  name: "TooManyTrustedSigners";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTrustedSigners {
  export const filterSensitiveLog = (obj: TooManyTrustedSigners): any => ({
    ...obj,
  });
}

/**
 * <p>The specified key group does not exist.</p>
 */
export interface TrustedKeyGroupDoesNotExist extends __SmithyException, $MetadataBearer {
  name: "TrustedKeyGroupDoesNotExist";
  $fault: "client";
  Message?: string;
}

export namespace TrustedKeyGroupDoesNotExist {
  export const filterSensitiveLog = (obj: TrustedKeyGroupDoesNotExist): any => ({
    ...obj,
  });
}

/**
 * <p>One or more of your trusted signers don't exist.</p>
 */
export interface TrustedSignerDoesNotExist extends __SmithyException, $MetadataBearer {
  name: "TrustedSignerDoesNotExist";
  $fault: "client";
  Message?: string;
}

export namespace TrustedSignerDoesNotExist {
  export const filterSensitiveLog = (obj: TrustedSignerDoesNotExist): any => ({
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
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p> A complex type that contains zero or more <code>Tag</code> elements.</p>
 */
export interface Tags {
  /**
   * <p> A complex type that contains <code>Tag</code> elements.</p>
   */
  Items?: Tag[];
}

export namespace Tags {
  export const filterSensitiveLog = (obj: Tags): any => ({
    ...obj,
  });
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

export namespace DistributionConfigWithTags {
  export const filterSensitiveLog = (obj: DistributionConfigWithTags): any => ({
    ...obj,
    ...(obj.DistributionConfig && {
      DistributionConfig: DistributionConfig.filterSensitiveLog(obj.DistributionConfig),
    }),
  });
}

/**
 * <p>The request to create a new distribution with tags. </p>
 */
export interface CreateDistributionWithTagsRequest {
  /**
   * <p>The distribution's configuration information. </p>
   */
  DistributionConfigWithTags: DistributionConfigWithTags | undefined;
}

export namespace CreateDistributionWithTagsRequest {
  export const filterSensitiveLog = (obj: CreateDistributionWithTagsRequest): any => ({
    ...obj,
    ...(obj.DistributionConfigWithTags && {
      DistributionConfigWithTags: DistributionConfigWithTags.filterSensitiveLog(obj.DistributionConfigWithTags),
    }),
  });
}

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface CreateDistributionWithTagsResult {
  /**
   * <p>The distribution's information. </p>
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

export namespace CreateDistributionWithTagsResult {
  export const filterSensitiveLog = (obj: CreateDistributionWithTagsResult): any => ({
    ...obj,
    ...(obj.Distribution && { Distribution: Distribution.filterSensitiveLog(obj.Distribution) }),
  });
}

/**
 * <p>The tagging specified is not valid.</p>
 */
export interface InvalidTagging extends __SmithyException, $MetadataBearer {
  name: "InvalidTagging";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTagging {
  export const filterSensitiveLog = (obj: InvalidTagging): any => ({
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
  export const filterSensitiveLog = (obj: QueryArgProfileConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A complex data type that includes the profile configurations specified for field-level encryption. </p>
 */
export interface FieldLevelEncryptionConfig {
  /**
   * <p>A unique number that ensures the request can't be replayed.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>An optional comment about the configuration.</p>
   */
  Comment?: string;

  /**
   * <p>A complex data type that specifies when to forward content if a profile isn't found and the profile that can be provided as a
   * 			query argument in a request.</p>
   */
  QueryArgProfileConfig?: QueryArgProfileConfig;

  /**
   * <p>A complex data type that specifies when to forward content if a content type isn't recognized and profiles to use as by default
   * 			in a request if a query argument doesn't specify a profile to use.</p>
   */
  ContentTypeProfileConfig?: ContentTypeProfileConfig;
}

export namespace FieldLevelEncryptionConfig {
  export const filterSensitiveLog = (obj: FieldLevelEncryptionConfig): any => ({
    ...obj,
  });
}

export interface CreateFieldLevelEncryptionConfigRequest {
  /**
   * <p>The request to create a new field-level encryption configuration.</p>
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;
}

export namespace CreateFieldLevelEncryptionConfigRequest {
  export const filterSensitiveLog = (obj: CreateFieldLevelEncryptionConfigRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex data type that includes the profile configurations and other options specified for field-level encryption. </p>
 */
export interface FieldLevelEncryption {
  /**
   * <p>The configuration ID for a field-level encryption configuration which includes a set of profiles that specify certain
   * 		selected data fields to be encrypted by specific public keys.</p>
   */
  Id: string | undefined;

  /**
   * <p>The last time the field-level encryption configuration was changed. </p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A complex data type that includes the profile configurations specified for field-level encryption. </p>
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;
}

export namespace FieldLevelEncryption {
  export const filterSensitiveLog = (obj: FieldLevelEncryption): any => ({
    ...obj,
  });
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
   * <p>The current version of the field level encryption configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace CreateFieldLevelEncryptionConfigResult {
  export const filterSensitiveLog = (obj: CreateFieldLevelEncryptionConfigResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified configuration for field-level encryption already exists.</p>
 */
export interface FieldLevelEncryptionConfigAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "FieldLevelEncryptionConfigAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace FieldLevelEncryptionConfigAlreadyExists {
  export const filterSensitiveLog = (obj: FieldLevelEncryptionConfigAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>The specified profile for field-level encryption doesn't exist.</p>
 */
export interface NoSuchFieldLevelEncryptionProfile extends __SmithyException, $MetadataBearer {
  name: "NoSuchFieldLevelEncryptionProfile";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchFieldLevelEncryptionProfile {
  export const filterSensitiveLog = (obj: NoSuchFieldLevelEncryptionProfile): any => ({
    ...obj,
  });
}

/**
 * <p>No profile specified for the field-level encryption query argument.</p>
 */
export interface QueryArgProfileEmpty extends __SmithyException, $MetadataBearer {
  name: "QueryArgProfileEmpty";
  $fault: "client";
  Message?: string;
}

export namespace QueryArgProfileEmpty {
  export const filterSensitiveLog = (obj: QueryArgProfileEmpty): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of configurations for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionConfigs extends __SmithyException, $MetadataBearer {
  name: "TooManyFieldLevelEncryptionConfigs";
  $fault: "client";
  Message?: string;
}

export namespace TooManyFieldLevelEncryptionConfigs {
  export const filterSensitiveLog = (obj: TooManyFieldLevelEncryptionConfigs): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of content type profiles for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionContentTypeProfiles extends __SmithyException, $MetadataBearer {
  name: "TooManyFieldLevelEncryptionContentTypeProfiles";
  $fault: "client";
  Message?: string;
}

export namespace TooManyFieldLevelEncryptionContentTypeProfiles {
  export const filterSensitiveLog = (obj: TooManyFieldLevelEncryptionContentTypeProfiles): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of query arg profiles for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionQueryArgProfiles extends __SmithyException, $MetadataBearer {
  name: "TooManyFieldLevelEncryptionQueryArgProfiles";
  $fault: "client";
  Message?: string;
}

export namespace TooManyFieldLevelEncryptionQueryArgProfiles {
  export const filterSensitiveLog = (obj: TooManyFieldLevelEncryptionQueryArgProfiles): any => ({
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
  export const filterSensitiveLog = (obj: EncryptionEntities): any => ({
    ...obj,
  });
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
   * <p>An optional comment for the field-level encryption profile.</p>
   */
  Comment?: string;

  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and
   * 			field patterns for specifying which fields to encrypt with this key.</p>
   */
  EncryptionEntities: EncryptionEntities | undefined;
}

export namespace FieldLevelEncryptionProfileConfig {
  export const filterSensitiveLog = (obj: FieldLevelEncryptionProfileConfig): any => ({
    ...obj,
  });
}

export interface CreateFieldLevelEncryptionProfileRequest {
  /**
   * <p>The request to create a field-level encryption profile.</p>
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;
}

export namespace CreateFieldLevelEncryptionProfileRequest {
  export const filterSensitiveLog = (obj: CreateFieldLevelEncryptionProfileRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex data type for field-level encryption profiles.</p>
 */
export interface FieldLevelEncryptionProfile {
  /**
   * <p>The ID for a field-level encryption profile configuration which includes a set of profiles that specify certain
   * 			selected data fields to be encrypted by specific public keys.</p>
   */
  Id: string | undefined;

  /**
   * <p>The last time the field-level encryption profile was updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A complex data type that includes the profile name and the encryption entities for the field-level encryption profile.</p>
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;
}

export namespace FieldLevelEncryptionProfile {
  export const filterSensitiveLog = (obj: FieldLevelEncryptionProfile): any => ({
    ...obj,
  });
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
   * <p>The current version of the field level encryption profile. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace CreateFieldLevelEncryptionProfileResult {
  export const filterSensitiveLog = (obj: CreateFieldLevelEncryptionProfileResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified profile for field-level encryption already exists.</p>
 */
export interface FieldLevelEncryptionProfileAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "FieldLevelEncryptionProfileAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace FieldLevelEncryptionProfileAlreadyExists {
  export const filterSensitiveLog = (obj: FieldLevelEncryptionProfileAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum size of a profile for field-level encryption was exceeded.</p>
 */
export interface FieldLevelEncryptionProfileSizeExceeded extends __SmithyException, $MetadataBearer {
  name: "FieldLevelEncryptionProfileSizeExceeded";
  $fault: "client";
  Message?: string;
}

export namespace FieldLevelEncryptionProfileSizeExceeded {
  export const filterSensitiveLog = (obj: FieldLevelEncryptionProfileSizeExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>The specified public key doesn't exist.</p>
 */
export interface NoSuchPublicKey extends __SmithyException, $MetadataBearer {
  name: "NoSuchPublicKey";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchPublicKey {
  export const filterSensitiveLog = (obj: NoSuchPublicKey): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of encryption entities for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionEncryptionEntities extends __SmithyException, $MetadataBearer {
  name: "TooManyFieldLevelEncryptionEncryptionEntities";
  $fault: "client";
  Message?: string;
}

export namespace TooManyFieldLevelEncryptionEncryptionEntities {
  export const filterSensitiveLog = (obj: TooManyFieldLevelEncryptionEncryptionEntities): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of field patterns for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionFieldPatterns extends __SmithyException, $MetadataBearer {
  name: "TooManyFieldLevelEncryptionFieldPatterns";
  $fault: "client";
  Message?: string;
}

export namespace TooManyFieldLevelEncryptionFieldPatterns {
  export const filterSensitiveLog = (obj: TooManyFieldLevelEncryptionFieldPatterns): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of profiles for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionProfiles extends __SmithyException, $MetadataBearer {
  name: "TooManyFieldLevelEncryptionProfiles";
  $fault: "client";
  Message?: string;
}

export namespace TooManyFieldLevelEncryptionProfiles {
  export const filterSensitiveLog = (obj: TooManyFieldLevelEncryptionProfiles): any => ({
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
  export const filterSensitiveLog = (obj: Paths): any => ({
    ...obj,
  });
}

/**
 * <p>An invalidation batch.</p>
 */
export interface InvalidationBatch {
  /**
   * <p>A complex type that contains information about the objects that you want to invalidate.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects
   * 				to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
   */
  Paths: Paths | undefined;

  /**
   * <p>A value that you specify to uniquely identify an invalidation request. CloudFront uses the
   * 			value to prevent you from accidentally resubmitting an identical request. Whenever you create
   * 			a new invalidation request, you must specify a new value for <code>CallerReference</code> and
   * 			change other values in the request as applicable. One way to ensure that the value of
   * 				<code>CallerReference</code> is unique is to use a <code>timestamp</code>, for example,
   * 				<code>20120301090000</code>.</p>
   * 		       <p>If you make a second invalidation request with the same value for
   * 				<code>CallerReference</code>, and if the rest of the request is the same, CloudFront doesn't
   * 			create a new invalidation request. Instead, CloudFront returns information about the invalidation
   * 			request that you previously created with the same <code>CallerReference</code>.</p>
   * 		       <p>If <code>CallerReference</code> is a value you already sent in a previous invalidation
   * 			batch request but the content of any <code>Path</code> is different from the original request,
   * 			CloudFront returns an <code>InvalidationBatchAlreadyExists</code> error.</p>
   */
  CallerReference: string | undefined;
}

export namespace InvalidationBatch {
  export const filterSensitiveLog = (obj: InvalidationBatch): any => ({
    ...obj,
  });
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

export namespace CreateInvalidationRequest {
  export const filterSensitiveLog = (obj: CreateInvalidationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An invalidation. </p>
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
   * <p>The date and time the invalidation request was first made. </p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The current invalidation information for the batch request. </p>
   */
  InvalidationBatch: InvalidationBatch | undefined;
}

export namespace Invalidation {
  export const filterSensitiveLog = (obj: Invalidation): any => ({
    ...obj,
  });
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

export namespace CreateInvalidationResult {
  export const filterSensitiveLog = (obj: CreateInvalidationResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified distribution does not exist.</p>
 */
export interface NoSuchDistribution extends __SmithyException, $MetadataBearer {
  name: "NoSuchDistribution";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchDistribution {
  export const filterSensitiveLog = (obj: NoSuchDistribution): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects.</p>
 */
export interface TooManyInvalidationsInProgress extends __SmithyException, $MetadataBearer {
  name: "TooManyInvalidationsInProgress";
  $fault: "client";
  Message?: string;
}

export namespace TooManyInvalidationsInProgress {
  export const filterSensitiveLog = (obj: TooManyInvalidationsInProgress): any => ({
    ...obj,
  });
}

/**
 * <p>A key group configuration.</p>
 * 		       <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
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
   * <p>A comment to describe the key group.</p>
   */
  Comment?: string;
}

export namespace KeyGroupConfig {
  export const filterSensitiveLog = (obj: KeyGroupConfig): any => ({
    ...obj,
  });
}

export interface CreateKeyGroupRequest {
  /**
   * <p>A key group configuration.</p>
   */
  KeyGroupConfig: KeyGroupConfig | undefined;
}

export namespace CreateKeyGroupRequest {
  export const filterSensitiveLog = (obj: CreateKeyGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A key group.</p>
 * 		       <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
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

export namespace KeyGroup {
  export const filterSensitiveLog = (obj: KeyGroup): any => ({
    ...obj,
  });
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

export namespace CreateKeyGroupResult {
  export const filterSensitiveLog = (obj: CreateKeyGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>A key group with this name already exists. You must provide a unique name. To modify an
 * 			existing key group, use <code>UpdateKeyGroup</code>.</p>
 */
export interface KeyGroupAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "KeyGroupAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace KeyGroupAlreadyExists {
  export const filterSensitiveLog = (obj: KeyGroupAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the maximum number of key groups for this AWS account. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyKeyGroups extends __SmithyException, $MetadataBearer {
  name: "TooManyKeyGroups";
  $fault: "client";
  Message?: string;
}

export namespace TooManyKeyGroups {
  export const filterSensitiveLog = (obj: TooManyKeyGroups): any => ({
    ...obj,
  });
}

/**
 * <p>The number of public keys in this key group is more than the maximum allowed. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyPublicKeysInKeyGroup extends __SmithyException, $MetadataBearer {
  name: "TooManyPublicKeysInKeyGroup";
  $fault: "client";
  Message?: string;
}

export namespace TooManyPublicKeysInKeyGroup {
  export const filterSensitiveLog = (obj: TooManyPublicKeysInKeyGroup): any => ({
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
  export const filterSensitiveLog = (obj: RealtimeMetricsSubscriptionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A monitoring subscription. This structure contains information about whether additional
 * 			CloudWatch metrics are enabled for a given CloudFront distribution.</p>
 */
export interface MonitoringSubscription {
  /**
   * <p>A subscription configuration for additional CloudWatch metrics.</p>
   */
  RealtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfig;
}

export namespace MonitoringSubscription {
  export const filterSensitiveLog = (obj: MonitoringSubscription): any => ({
    ...obj,
  });
}

export interface CreateMonitoringSubscriptionRequest {
  /**
   * <p>The ID of the distribution that you are enabling metrics for.</p>
   */
  DistributionId: string | undefined;

  /**
   * <p>A monitoring subscription. This structure contains information about whether additional
   * 			CloudWatch metrics are enabled for a given CloudFront distribution.</p>
   */
  MonitoringSubscription: MonitoringSubscription | undefined;
}

export namespace CreateMonitoringSubscriptionRequest {
  export const filterSensitiveLog = (obj: CreateMonitoringSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface CreateMonitoringSubscriptionResult {
  /**
   * <p>A monitoring subscription. This structure contains information about whether additional
   * 			CloudWatch metrics are enabled for a given CloudFront distribution.</p>
   */
  MonitoringSubscription?: MonitoringSubscription;
}

export namespace CreateMonitoringSubscriptionResult {
  export const filterSensitiveLog = (obj: CreateMonitoringSubscriptionResult): any => ({
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
  export const filterSensitiveLog = (obj: OriginRequestPolicyQueryStringsConfig): any => ({
    ...obj,
  });
}

/**
 * <p>An origin request policy configuration.</p>
 * 		       <p>This configuration determines the values that CloudFront includes in requests that it sends to the
 * 			origin. Each request that CloudFront sends to the origin includes the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The request body and the URL path (without the domain name) from the viewer
 * 					request.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The headers that CloudFront automatically includes in every origin request, including
 * 					<code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>All HTTP headers, cookies, and URL query strings that are specified in the
 * 					cache policy or the origin request policy. These can include items from the
 * 					viewer request and, in the case of headers, additional ones that are added by
 * 					CloudFront.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>CloudFront sends a request when it can’t find an object in its cache that matches the request. If
 * 			you want to send values to the origin and also include them in the cache key, use
 * 			<code>CachePolicy</code>.</p>
 */
export interface OriginRequestPolicyConfig {
  /**
   * <p>A comment to describe the origin request policy.</p>
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

export namespace OriginRequestPolicyConfig {
  export const filterSensitiveLog = (obj: OriginRequestPolicyConfig): any => ({
    ...obj,
  });
}

export interface CreateOriginRequestPolicyRequest {
  /**
   * <p>An origin request policy configuration.</p>
   */
  OriginRequestPolicyConfig: OriginRequestPolicyConfig | undefined;
}

export namespace CreateOriginRequestPolicyRequest {
  export const filterSensitiveLog = (obj: CreateOriginRequestPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An origin request policy.</p>
 * 		       <p>When it’s attached to a cache behavior, the origin request policy determines the values that
 * 			CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to
 * 			the origin includes the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The request body and the URL path (without the domain name) from the viewer
 * 					request.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The headers that CloudFront automatically includes in every origin request, including
 * 					<code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>All HTTP headers, cookies, and URL query strings that are specified in the
 * 					cache policy or the origin request policy. These can include items from the
 * 					viewer request and, in the case of headers, additional ones that are added by
 * 					CloudFront.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>CloudFront sends a request when it can’t find an object in its cache that matches the request. If
 * 			you want to send values to the origin and also include them in the cache key, use
 * 			<code>CachePolicy</code>.</p>
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

export namespace OriginRequestPolicy {
  export const filterSensitiveLog = (obj: OriginRequestPolicy): any => ({
    ...obj,
  });
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

export namespace CreateOriginRequestPolicyResult {
  export const filterSensitiveLog = (obj: CreateOriginRequestPolicyResult): any => ({
    ...obj,
  });
}

/**
 * <p>An origin request policy with this name already exists. You must provide a unique
 * 			name. To modify an existing origin request policy, use
 * 			<code>UpdateOriginRequestPolicy</code>.</p>
 */
export interface OriginRequestPolicyAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "OriginRequestPolicyAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace OriginRequestPolicyAlreadyExists {
  export const filterSensitiveLog = (obj: OriginRequestPolicyAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>The number of cookies in the origin request policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyCookiesInOriginRequestPolicy extends __SmithyException, $MetadataBearer {
  name: "TooManyCookiesInOriginRequestPolicy";
  $fault: "client";
  Message?: string;
}

export namespace TooManyCookiesInOriginRequestPolicy {
  export const filterSensitiveLog = (obj: TooManyCookiesInOriginRequestPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>The number of headers in the origin request policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyHeadersInOriginRequestPolicy extends __SmithyException, $MetadataBearer {
  name: "TooManyHeadersInOriginRequestPolicy";
  $fault: "client";
  Message?: string;
}

export namespace TooManyHeadersInOriginRequestPolicy {
  export const filterSensitiveLog = (obj: TooManyHeadersInOriginRequestPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the maximum number of origin request policies for this AWS account.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyOriginRequestPolicies extends __SmithyException, $MetadataBearer {
  name: "TooManyOriginRequestPolicies";
  $fault: "client";
  Message?: string;
}

export namespace TooManyOriginRequestPolicies {
  export const filterSensitiveLog = (obj: TooManyOriginRequestPolicies): any => ({
    ...obj,
  });
}

/**
 * <p>The number of query strings in the origin request policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyQueryStringsInOriginRequestPolicy extends __SmithyException, $MetadataBearer {
  name: "TooManyQueryStringsInOriginRequestPolicy";
  $fault: "client";
  Message?: string;
}

export namespace TooManyQueryStringsInOriginRequestPolicy {
  export const filterSensitiveLog = (obj: TooManyQueryStringsInOriginRequestPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
 */
export interface PublicKeyConfig {
  /**
   * <p>A string included in the request to help make sure that the request can’t be
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
   * <p>A comment to describe the public key.</p>
   */
  Comment?: string;
}

export namespace PublicKeyConfig {
  export const filterSensitiveLog = (obj: PublicKeyConfig): any => ({
    ...obj,
  });
}

export interface CreatePublicKeyRequest {
  /**
   * <p>A CloudFront public key configuration.</p>
   */
  PublicKeyConfig: PublicKeyConfig | undefined;
}

export namespace CreatePublicKeyRequest {
  export const filterSensitiveLog = (obj: CreatePublicKeyRequest): any => ({
    ...obj,
  });
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

export namespace PublicKey {
  export const filterSensitiveLog = (obj: PublicKey): any => ({
    ...obj,
  });
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

export namespace CreatePublicKeyResult {
  export const filterSensitiveLog = (obj: CreatePublicKeyResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified public key already exists.</p>
 */
export interface PublicKeyAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "PublicKeyAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace PublicKeyAlreadyExists {
  export const filterSensitiveLog = (obj: PublicKeyAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of public keys for field-level encryption have been created. To create a new public key, delete one of the existing keys.</p>
 */
export interface TooManyPublicKeys extends __SmithyException, $MetadataBearer {
  name: "TooManyPublicKeys";
  $fault: "client";
  Message?: string;
}

export namespace TooManyPublicKeys {
  export const filterSensitiveLog = (obj: TooManyPublicKeys): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the Amazon Kinesis data stream where you are sending
 * 			real-time log data.</p>
 */
export interface KinesisStreamConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that
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
  export const filterSensitiveLog = (obj: KinesisStreamConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time
 * 			log data in a real-time log configuration.</p>
 */
export interface EndPoint {
  /**
   * <p>The type of data stream where you are sending real-time log data. The only valid value is
   * 			<code>Kinesis</code>.</p>
   */
  StreamType: string | undefined;

  /**
   * <p>Contains information about the Amazon Kinesis data stream where you are sending
   * 			real-time log data.</p>
   */
  KinesisStreamConfig?: KinesisStreamConfig;
}

export namespace EndPoint {
  export const filterSensitiveLog = (obj: EndPoint): any => ({
    ...obj,
  });
}

export interface CreateRealtimeLogConfigRequest {
  /**
   * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time
   * 			log data.</p>
   */
  EndPoints: EndPoint[] | undefined;

  /**
   * <p>A list of fields to include in each real-time log record.</p>
   * 		       <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Fields: string[] | undefined;

  /**
   * <p>A unique name to identify this real-time log configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The sampling rate for this real-time log configuration. The sampling rate determines the
   * 			percentage of viewer requests that are represented in the real-time log data. You must
   * 			provide an integer between 1 and 100, inclusive.</p>
   */
  SamplingRate: number | undefined;
}

export namespace CreateRealtimeLogConfigRequest {
  export const filterSensitiveLog = (obj: CreateRealtimeLogConfigRequest): any => ({
    ...obj,
  });
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
   * <p>The sampling rate for this real-time log configuration. The sampling rate determines the
   * 			percentage of viewer requests that are represented in the real-time log data. The
   * 			sampling rate is an integer between 1 and 100, inclusive.</p>
   */
  SamplingRate: number | undefined;

  /**
   * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time
   * 			log data for this real-time log configuration.</p>
   */
  EndPoints: EndPoint[] | undefined;

  /**
   * <p>A list of fields that are included in each real-time log record. In an API response, the
   * 			fields are provided in the same order in which they are sent to the Amazon Kinesis data
   * 			stream.</p>
   * 		       <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Fields: string[] | undefined;
}

export namespace RealtimeLogConfig {
  export const filterSensitiveLog = (obj: RealtimeLogConfig): any => ({
    ...obj,
  });
}

export interface CreateRealtimeLogConfigResult {
  /**
   * <p>A real-time log configuration.</p>
   */
  RealtimeLogConfig?: RealtimeLogConfig;
}

export namespace CreateRealtimeLogConfigResult {
  export const filterSensitiveLog = (obj: CreateRealtimeLogConfigResult): any => ({
    ...obj,
  });
}

/**
 * <p>A real-time log configuration with this name already exists. You must provide a unique name.
 * 			To modify an existing real-time log configuration, use
 * 			<code>UpdateRealtimeLogConfig</code>.</p>
 */
export interface RealtimeLogConfigAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "RealtimeLogConfigAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace RealtimeLogConfigAlreadyExists {
  export const filterSensitiveLog = (obj: RealtimeLogConfigAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the maximum number of real-time log configurations for this AWS account.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface TooManyRealtimeLogConfigs extends __SmithyException, $MetadataBearer {
  name: "TooManyRealtimeLogConfigs";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRealtimeLogConfigs {
  export const filterSensitiveLog = (obj: TooManyRealtimeLogConfigs): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: S3Origin): any => ({
    ...obj,
  });
}

/**
 * <p>The RTMP distribution's configuration information.</p>
 */
export interface StreamingDistributionConfig {
  /**
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be
   * 			replayed.</p>
   * 		       <p>If the value of <code>CallerReference</code> is new (regardless of the content of the
   * 			<code>StreamingDistributionConfig</code> object), CloudFront creates a new distribution.</p>
   * 		       <p>If <code>CallerReference</code> is a value that you already sent in a previous request to
   * 			create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want
   * 			CloudFront to get your media files for distribution. </p>
   */
  S3Origin: S3Origin | undefined;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any,
   * 			for this streaming distribution. </p>
   */
  Aliases?: Aliases;

  /**
   * <p>Any comments you want to include about the streaming distribution. </p>
   */
  Comment: string | undefined;

  /**
   * <p>A complex type that controls whether access logs are written for the streaming
   * 			distribution. </p>
   */
  Logging?: StreamingLoggingConfig;

  /**
   * <p>A complex type that specifies any AWS accounts that you want to permit to create signed
   * 			URLs for private content. If you want the distribution to use signed URLs, include this
   * 			element; if you want the distribution to use public URLs, remove this element. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through
   * 				CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
   */
  TrustedSigners: TrustedSigners | undefined;

  /**
   * <p>A complex type that contains information about price class for this streaming
   * 			distribution. </p>
   */
  PriceClass?: PriceClass | string;

  /**
   * <p>Whether the streaming distribution is enabled to accept user requests for
   * 			content.</p>
   */
  Enabled: boolean | undefined;
}

export namespace StreamingDistributionConfig {
  export const filterSensitiveLog = (obj: StreamingDistributionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The request to create a new streaming distribution.</p>
 */
export interface CreateStreamingDistributionRequest {
  /**
   * <p>The streaming distribution's configuration information.</p>
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;
}

export namespace CreateStreamingDistributionRequest {
  export const filterSensitiveLog = (obj: CreateStreamingDistributionRequest): any => ({
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
   * 			<code>123456789012</code> is your AWS account ID.</p>
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
   * <p>A complex type that lists the AWS accounts, if any, that you included in the
   * 				<code>TrustedSigners</code> complex type for this distribution. These are the accounts that
   * 			you want to allow to create signed URLs for private content.</p>
   * 		       <p>The <code>Signer</code> complex type lists the AWS account number of the trusted
   * 			signer or <code>self</code> if the signer is the AWS account that created the distribution.
   * 			The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are
   * 			associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element
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
  export const filterSensitiveLog = (obj: StreamingDistribution): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateStreamingDistributionResult {
  /**
   * <p>The streaming distribution's information.</p>
   */
  StreamingDistribution?: StreamingDistribution;

  /**
   * <p>The fully qualified URI of the new streaming distribution resource just created.</p>
   */
  Location?: string;

  /**
   * <p>The current version of the streaming distribution created.</p>
   */
  ETag?: string;
}

export namespace CreateStreamingDistributionResult {
  export const filterSensitiveLog = (obj: CreateStreamingDistributionResult): any => ({
    ...obj,
  });
}

/**
 * <p>The caller reference you attempted to create the streaming distribution with
 * 			is associated with another distribution</p>
 */
export interface StreamingDistributionAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "StreamingDistributionAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace StreamingDistributionAlreadyExists {
  export const filterSensitiveLog = (obj: StreamingDistributionAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 */
export interface TooManyStreamingDistributionCNAMEs extends __SmithyException, $MetadataBearer {
  name: "TooManyStreamingDistributionCNAMEs";
  $fault: "client";
  Message?: string;
}

export namespace TooManyStreamingDistributionCNAMEs {
  export const filterSensitiveLog = (obj: TooManyStreamingDistributionCNAMEs): any => ({
    ...obj,
  });
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of streaming distributions allowed.</p>
 */
export interface TooManyStreamingDistributions extends __SmithyException, $MetadataBearer {
  name: "TooManyStreamingDistributions";
  $fault: "client";
  Message?: string;
}

export namespace TooManyStreamingDistributions {
  export const filterSensitiveLog = (obj: TooManyStreamingDistributions): any => ({
    ...obj,
  });
}

/**
 * <p>A streaming distribution Configuration and a list of tags to be associated with the
 * 			streaming distribution.</p>
 */
export interface StreamingDistributionConfigWithTags {
  /**
   * <p>A streaming distribution Configuration.</p>
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: Tags | undefined;
}

export namespace StreamingDistributionConfigWithTags {
  export const filterSensitiveLog = (obj: StreamingDistributionConfigWithTags): any => ({
    ...obj,
  });
}

/**
 * <p>The request to create a new streaming distribution with tags.</p>
 */
export interface CreateStreamingDistributionWithTagsRequest {
  /**
   * <p> The streaming distribution's configuration information. </p>
   */
  StreamingDistributionConfigWithTags: StreamingDistributionConfigWithTags | undefined;
}

export namespace CreateStreamingDistributionWithTagsRequest {
  export const filterSensitiveLog = (obj: CreateStreamingDistributionWithTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface CreateStreamingDistributionWithTagsResult {
  /**
   * <p>The streaming distribution's information. </p>
   */
  StreamingDistribution?: StreamingDistribution;

  /**
   * <p>The fully qualified URI of the new streaming distribution resource just created.</p>
   */
  Location?: string;

  /**
   * <p>The current version of the distribution created.</p>
   */
  ETag?: string;
}

export namespace CreateStreamingDistributionWithTagsResult {
  export const filterSensitiveLog = (obj: CreateStreamingDistributionWithTagsResult): any => ({
    ...obj,
  });
}

export interface DeleteCachePolicyRequest {
  /**
   * <p>The unique identifier for the cache policy that you are deleting. To get the
   * 			identifier, you can use <code>ListCachePolicies</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The version of the cache policy that you are deleting. The version is the cache
   * 			policy’s <code>ETag</code> value, which you can get using
   * 			<code>ListCachePolicies</code>, <code>GetCachePolicy</code>, or
   * 			<code>GetCachePolicyConfig</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeleteCachePolicyRequest {
  export const filterSensitiveLog = (obj: DeleteCachePolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot delete a managed policy.</p>
 */
export interface IllegalDelete extends __SmithyException, $MetadataBearer {
  name: "IllegalDelete";
  $fault: "client";
  Message?: string;
}

export namespace IllegalDelete {
  export const filterSensitiveLog = (obj: IllegalDelete): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>If-Match</code> version is missing or not valid.</p>
 */
export interface InvalidIfMatchVersion extends __SmithyException, $MetadataBearer {
  name: "InvalidIfMatchVersion";
  $fault: "client";
  Message?: string;
}

export namespace InvalidIfMatchVersion {
  export const filterSensitiveLog = (obj: InvalidIfMatchVersion): any => ({
    ...obj,
  });
}

/**
 * <p>The precondition given in one or more of the request header fields evaluated to
 * 			<code>false</code>.</p>
 */
export interface PreconditionFailed extends __SmithyException, $MetadataBearer {
  name: "PreconditionFailed";
  $fault: "client";
  Message?: string;
}

export namespace PreconditionFailed {
  export const filterSensitiveLog = (obj: PreconditionFailed): any => ({
    ...obj,
  });
}

/**
 * <p>The Origin Access Identity specified is already in use.</p>
 */
export interface CloudFrontOriginAccessIdentityInUse extends __SmithyException, $MetadataBearer {
  name: "CloudFrontOriginAccessIdentityInUse";
  $fault: "client";
  Message?: string;
}

export namespace CloudFrontOriginAccessIdentityInUse {
  export const filterSensitiveLog = (obj: CloudFrontOriginAccessIdentityInUse): any => ({
    ...obj,
  });
}

/**
 * <p>Deletes a origin access identity.</p>
 */
export interface DeleteCloudFrontOriginAccessIdentityRequest {
  /**
   * <p>The origin access identity's ID.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header you received from a previous <code>GET</code>
   * 			or <code>PUT</code> request. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeleteCloudFrontOriginAccessIdentityRequest {
  export const filterSensitiveLog = (obj: DeleteCloudFrontOriginAccessIdentityRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The specified origin access identity does not exist.</p>
 */
export interface NoSuchCloudFrontOriginAccessIdentity extends __SmithyException, $MetadataBearer {
  name: "NoSuchCloudFrontOriginAccessIdentity";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchCloudFrontOriginAccessIdentity {
  export const filterSensitiveLog = (obj: NoSuchCloudFrontOriginAccessIdentity): any => ({
    ...obj,
  });
}

/**
 * <p>This action deletes a web distribution. To delete a web distribution using the CloudFront
 * 			API, perform the following steps.</p>
 * 		       <p>
 * 			         <b>To delete a web distribution using the CloudFront API:</b>
 * 		       </p>
 * 		       <ol>
 *             <li>
 * 				           <p>Disable the web distribution </p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>GET Distribution Config</code> request to get the current
 * 					configuration and the <code>Etag</code> header for the distribution.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Update the XML document that was returned in the response to your <code>GET
 * 						Distribution Config</code> request to change the value of <code>Enabled</code> to
 * 						<code>false</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>PUT Distribution Config</code> request to update the configuration
 * 					for your distribution. In the request body, include the XML document that you updated in
 * 					Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the
 * 						<code>ETag</code> header that CloudFront returned when you submitted the <code>GET
 * 						Distribution Config</code> request in Step 2.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Review the response to the <code>PUT Distribution Config</code> request to confirm
 * 					that the distribution was successfully disabled.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>GET Distribution</code> request to confirm that your changes have
 * 					propagated. When propagation is complete, the value of <code>Status</code> is
 * 						<code>Deployed</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP
 * 						<code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront
 * 					returned when you submitted the <code>GET Distribution Config</code> request in Step
 * 					6.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Review the response to your <code>DELETE Distribution</code> request to confirm
 * 					that the distribution was successfully deleted.</p>
 * 			         </li>
 *          </ol>
 * 		       <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface DeleteDistributionRequest {
  /**
   * <p>The distribution ID. </p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when you disabled the
   * 			distribution. For example: <code>E2QWRUHAPOMQZL</code>. </p>
   */
  IfMatch?: string;
}

export namespace DeleteDistributionRequest {
  export const filterSensitiveLog = (obj: DeleteDistributionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The specified CloudFront distribution is not disabled. You must disable
 * 			the distribution before you can delete it.</p>
 */
export interface DistributionNotDisabled extends __SmithyException, $MetadataBearer {
  name: "DistributionNotDisabled";
  $fault: "client";
  Message?: string;
}

export namespace DistributionNotDisabled {
  export const filterSensitiveLog = (obj: DistributionNotDisabled): any => ({
    ...obj,
  });
}

export interface DeleteFieldLevelEncryptionConfigRequest {
  /**
   * <p>The ID of the configuration you want to delete from CloudFront.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			configuration identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeleteFieldLevelEncryptionConfigRequest {
  export const filterSensitiveLog = (obj: DeleteFieldLevelEncryptionConfigRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The specified configuration for field-level encryption is in use.</p>
 */
export interface FieldLevelEncryptionConfigInUse extends __SmithyException, $MetadataBearer {
  name: "FieldLevelEncryptionConfigInUse";
  $fault: "client";
  Message?: string;
}

export namespace FieldLevelEncryptionConfigInUse {
  export const filterSensitiveLog = (obj: FieldLevelEncryptionConfigInUse): any => ({
    ...obj,
  });
}

export interface DeleteFieldLevelEncryptionProfileRequest {
  /**
   * <p>Request the ID of the profile you want to delete from CloudFront.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			profile to delete. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeleteFieldLevelEncryptionProfileRequest {
  export const filterSensitiveLog = (obj: DeleteFieldLevelEncryptionProfileRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The specified profile for field-level encryption is in use.</p>
 */
export interface FieldLevelEncryptionProfileInUse extends __SmithyException, $MetadataBearer {
  name: "FieldLevelEncryptionProfileInUse";
  $fault: "client";
  Message?: string;
}

export namespace FieldLevelEncryptionProfileInUse {
  export const filterSensitiveLog = (obj: FieldLevelEncryptionProfileInUse): any => ({
    ...obj,
  });
}

export interface DeleteKeyGroupRequest {
  /**
   * <p>The identifier of the key group that you are deleting. To get the identifier, use
   * 			<code>ListKeyGroups</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The version of the key group that you are deleting. The version is the key group’s
   * 			<code>ETag</code> value. To get the <code>ETag</code>, use <code>GetKeyGroup</code> or
   * 			<code>GetKeyGroupConfig</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeleteKeyGroupRequest {
  export const filterSensitiveLog = (obj: DeleteKeyGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A resource that was specified is not valid.</p>
 */
export interface NoSuchResource extends __SmithyException, $MetadataBearer {
  name: "NoSuchResource";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchResource {
  export const filterSensitiveLog = (obj: NoSuchResource): any => ({
    ...obj,
  });
}

/**
 * <p>Cannot delete this resource because it is in use.</p>
 */
export interface ResourceInUse extends __SmithyException, $MetadataBearer {
  name: "ResourceInUse";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUse {
  export const filterSensitiveLog = (obj: ResourceInUse): any => ({
    ...obj,
  });
}

export interface DeleteMonitoringSubscriptionRequest {
  /**
   * <p>The ID of the distribution that you are disabling metrics for.</p>
   */
  DistributionId: string | undefined;
}

export namespace DeleteMonitoringSubscriptionRequest {
  export const filterSensitiveLog = (obj: DeleteMonitoringSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface DeleteMonitoringSubscriptionResult {}

export namespace DeleteMonitoringSubscriptionResult {
  export const filterSensitiveLog = (obj: DeleteMonitoringSubscriptionResult): any => ({
    ...obj,
  });
}

export interface DeleteOriginRequestPolicyRequest {
  /**
   * <p>The unique identifier for the origin request policy that you are deleting. To get the
   * 			identifier, you can use <code>ListOriginRequestPolicies</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The version of the origin request policy that you are deleting. The version is the origin
   * 			request policy’s <code>ETag</code> value, which you can get using
   * 			<code>ListOriginRequestPolicies</code>, <code>GetOriginRequestPolicy</code>, or
   * 			<code>GetOriginRequestPolicyConfig</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeleteOriginRequestPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteOriginRequestPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Cannot delete the origin request policy because it is attached to one or more cache
 * 			behaviors.</p>
 */
export interface OriginRequestPolicyInUse extends __SmithyException, $MetadataBearer {
  name: "OriginRequestPolicyInUse";
  $fault: "client";
  Message?: string;
}

export namespace OriginRequestPolicyInUse {
  export const filterSensitiveLog = (obj: OriginRequestPolicyInUse): any => ({
    ...obj,
  });
}

export interface DeletePublicKeyRequest {
  /**
   * <p>The ID of the public key you want to remove from CloudFront.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			public key identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeletePublicKeyRequest {
  export const filterSensitiveLog = (obj: DeletePublicKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The specified public key is in use. </p>
 */
export interface PublicKeyInUse extends __SmithyException, $MetadataBearer {
  name: "PublicKeyInUse";
  $fault: "client";
  Message?: string;
}

export namespace PublicKeyInUse {
  export const filterSensitiveLog = (obj: PublicKeyInUse): any => ({
    ...obj,
  });
}

export interface DeleteRealtimeLogConfigRequest {
  /**
   * <p>The name of the real-time log configuration to delete.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration to delete.</p>
   */
  ARN?: string;
}

export namespace DeleteRealtimeLogConfigRequest {
  export const filterSensitiveLog = (obj: DeleteRealtimeLogConfigRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The real-time log configuration does not exist.</p>
 */
export interface NoSuchRealtimeLogConfig extends __SmithyException, $MetadataBearer {
  name: "NoSuchRealtimeLogConfig";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchRealtimeLogConfig {
  export const filterSensitiveLog = (obj: NoSuchRealtimeLogConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Cannot delete the real-time log configuration because it is attached to one or more cache
 * 			behaviors.</p>
 */
export interface RealtimeLogConfigInUse extends __SmithyException, $MetadataBearer {
  name: "RealtimeLogConfigInUse";
  $fault: "client";
  Message?: string;
}

export namespace RealtimeLogConfigInUse {
  export const filterSensitiveLog = (obj: RealtimeLogConfigInUse): any => ({
    ...obj,
  });
}

/**
 * <p>The request to delete a streaming distribution.</p>
 */
export interface DeleteStreamingDistributionRequest {
  /**
   * <p>The distribution ID. </p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when you disabled the
   * 			streaming distribution. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeleteStreamingDistributionRequest {
  export const filterSensitiveLog = (obj: DeleteStreamingDistributionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The specified streaming distribution does not exist.</p>
 */
export interface NoSuchStreamingDistribution extends __SmithyException, $MetadataBearer {
  name: "NoSuchStreamingDistribution";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchStreamingDistribution {
  export const filterSensitiveLog = (obj: NoSuchStreamingDistribution): any => ({
    ...obj,
  });
}

/**
 * <p>The specified CloudFront distribution is not disabled. You must disable
 * 			the distribution before you can delete it.</p>
 */
export interface StreamingDistributionNotDisabled extends __SmithyException, $MetadataBearer {
  name: "StreamingDistributionNotDisabled";
  $fault: "client";
  Message?: string;
}

export namespace StreamingDistributionNotDisabled {
  export const filterSensitiveLog = (obj: StreamingDistributionNotDisabled): any => ({
    ...obj,
  });
}

export interface GetCachePolicyRequest {
  /**
   * <p>The unique identifier for the cache policy. If the cache policy is attached to a
   * 			distribution’s cache behavior, you can get the policy’s identifier using
   * 			<code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is
   * 			not attached to a cache behavior, you can get the identifier using
   * 			<code>ListCachePolicies</code>.</p>
   */
  Id: string | undefined;
}

export namespace GetCachePolicyRequest {
  export const filterSensitiveLog = (obj: GetCachePolicyRequest): any => ({
    ...obj,
  });
}

export interface GetCachePolicyResult {
  /**
   * <p>The cache policy.</p>
   */
  CachePolicy?: CachePolicy;

  /**
   * <p>The current version of the cache policy.</p>
   */
  ETag?: string;
}

export namespace GetCachePolicyResult {
  export const filterSensitiveLog = (obj: GetCachePolicyResult): any => ({
    ...obj,
  });
}

export interface GetCachePolicyConfigRequest {
  /**
   * <p>The unique identifier for the cache policy. If the cache policy is attached to a
   * 			distribution’s cache behavior, you can get the policy’s identifier using
   * 			<code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is
   * 			not attached to a cache behavior, you can get the identifier using
   * 			<code>ListCachePolicies</code>.</p>
   */
  Id: string | undefined;
}

export namespace GetCachePolicyConfigRequest {
  export const filterSensitiveLog = (obj: GetCachePolicyConfigRequest): any => ({
    ...obj,
  });
}

export interface GetCachePolicyConfigResult {
  /**
   * <p>The cache policy configuration.</p>
   */
  CachePolicyConfig?: CachePolicyConfig;

  /**
   * <p>The current version of the cache policy.</p>
   */
  ETag?: string;
}

export namespace GetCachePolicyConfigResult {
  export const filterSensitiveLog = (obj: GetCachePolicyConfigResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to get an origin access identity's information.</p>
 */
export interface GetCloudFrontOriginAccessIdentityRequest {
  /**
   * <p>The identity's ID.</p>
   */
  Id: string | undefined;
}

export namespace GetCloudFrontOriginAccessIdentityRequest {
  export const filterSensitiveLog = (obj: GetCloudFrontOriginAccessIdentityRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetCloudFrontOriginAccessIdentityResult {
  /**
   * <p>The origin access identity's information.</p>
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;

  /**
   * <p>The current version of the origin access identity's information. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace GetCloudFrontOriginAccessIdentityResult {
  export const filterSensitiveLog = (obj: GetCloudFrontOriginAccessIdentityResult): any => ({
    ...obj,
  });
}

/**
 * <p>The origin access identity's configuration information. For more information, see
 * 			<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CloudFrontOriginAccessIdentityConfig.html">CloudFrontOriginAccessIdentityConfig</a>.</p>
 */
export interface GetCloudFrontOriginAccessIdentityConfigRequest {
  /**
   * <p>The identity's ID. </p>
   */
  Id: string | undefined;
}

export namespace GetCloudFrontOriginAccessIdentityConfigRequest {
  export const filterSensitiveLog = (obj: GetCloudFrontOriginAccessIdentityConfigRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetCloudFrontOriginAccessIdentityConfigResult {
  /**
   * <p>The origin access identity's configuration information. </p>
   */
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;

  /**
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace GetCloudFrontOriginAccessIdentityConfigResult {
  export const filterSensitiveLog = (obj: GetCloudFrontOriginAccessIdentityConfigResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to get a distribution's information.</p>
 */
export interface GetDistributionRequest {
  /**
   * <p>The distribution's ID. If the ID is empty, an empty distribution configuration is returned.</p>
   */
  Id: string | undefined;
}

export namespace GetDistributionRequest {
  export const filterSensitiveLog = (obj: GetDistributionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetDistributionResult {
  /**
   * <p>The distribution's information.</p>
   */
  Distribution?: Distribution;

  /**
   * <p>The current version of the distribution's information. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace GetDistributionResult {
  export const filterSensitiveLog = (obj: GetDistributionResult): any => ({
    ...obj,
    ...(obj.Distribution && { Distribution: Distribution.filterSensitiveLog(obj.Distribution) }),
  });
}

/**
 * <p>The request to get a distribution configuration.</p>
 */
export interface GetDistributionConfigRequest {
  /**
   * <p>The distribution's ID. If the ID is empty, an empty distribution configuration is returned.</p>
   */
  Id: string | undefined;
}

export namespace GetDistributionConfigRequest {
  export const filterSensitiveLog = (obj: GetDistributionConfigRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetDistributionConfigResult {
  /**
   * <p>The distribution's configuration information.</p>
   */
  DistributionConfig?: DistributionConfig;

  /**
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace GetDistributionConfigResult {
  export const filterSensitiveLog = (obj: GetDistributionConfigResult): any => ({
    ...obj,
    ...(obj.DistributionConfig && {
      DistributionConfig: DistributionConfig.filterSensitiveLog(obj.DistributionConfig),
    }),
  });
}

export interface GetFieldLevelEncryptionRequest {
  /**
   * <p>Request the ID for the field-level encryption configuration information.</p>
   */
  Id: string | undefined;
}

export namespace GetFieldLevelEncryptionRequest {
  export const filterSensitiveLog = (obj: GetFieldLevelEncryptionRequest): any => ({
    ...obj,
  });
}

export interface GetFieldLevelEncryptionResult {
  /**
   * <p>Return the field-level encryption configuration information.</p>
   */
  FieldLevelEncryption?: FieldLevelEncryption;

  /**
   * <p>The current version of the field level encryption configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace GetFieldLevelEncryptionResult {
  export const filterSensitiveLog = (obj: GetFieldLevelEncryptionResult): any => ({
    ...obj,
  });
}

export interface GetFieldLevelEncryptionConfigRequest {
  /**
   * <p>Request the ID for the field-level encryption configuration information.</p>
   */
  Id: string | undefined;
}

export namespace GetFieldLevelEncryptionConfigRequest {
  export const filterSensitiveLog = (obj: GetFieldLevelEncryptionConfigRequest): any => ({
    ...obj,
  });
}

export interface GetFieldLevelEncryptionConfigResult {
  /**
   * <p>Return the field-level encryption configuration information.</p>
   */
  FieldLevelEncryptionConfig?: FieldLevelEncryptionConfig;

  /**
   * <p>The current version of the field level encryption configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace GetFieldLevelEncryptionConfigResult {
  export const filterSensitiveLog = (obj: GetFieldLevelEncryptionConfigResult): any => ({
    ...obj,
  });
}

export interface GetFieldLevelEncryptionProfileRequest {
  /**
   * <p>Get the ID for the field-level encryption profile information.</p>
   */
  Id: string | undefined;
}

export namespace GetFieldLevelEncryptionProfileRequest {
  export const filterSensitiveLog = (obj: GetFieldLevelEncryptionProfileRequest): any => ({
    ...obj,
  });
}

export interface GetFieldLevelEncryptionProfileResult {
  /**
   * <p>Return the field-level encryption profile information.</p>
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;

  /**
   * <p>The current version of the field level encryption profile. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace GetFieldLevelEncryptionProfileResult {
  export const filterSensitiveLog = (obj: GetFieldLevelEncryptionProfileResult): any => ({
    ...obj,
  });
}

export interface GetFieldLevelEncryptionProfileConfigRequest {
  /**
   * <p>Get the ID for the field-level encryption profile configuration information.</p>
   */
  Id: string | undefined;
}

export namespace GetFieldLevelEncryptionProfileConfigRequest {
  export const filterSensitiveLog = (obj: GetFieldLevelEncryptionProfileConfigRequest): any => ({
    ...obj,
  });
}

export interface GetFieldLevelEncryptionProfileConfigResult {
  /**
   * <p>Return the field-level encryption profile configuration information.</p>
   */
  FieldLevelEncryptionProfileConfig?: FieldLevelEncryptionProfileConfig;

  /**
   * <p>The current version of the field-level encryption profile configuration result. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace GetFieldLevelEncryptionProfileConfigResult {
  export const filterSensitiveLog = (obj: GetFieldLevelEncryptionProfileConfigResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to get an invalidation's information. </p>
 */
export interface GetInvalidationRequest {
  /**
   * <p>The distribution's ID.</p>
   */
  DistributionId: string | undefined;

  /**
   * <p>The identifier for the invalidation request, for example,
   * 			<code>IDFDVBD632BHDS5</code>.</p>
   */
  Id: string | undefined;
}

export namespace GetInvalidationRequest {
  export const filterSensitiveLog = (obj: GetInvalidationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetInvalidationResult {
  /**
   * <p>The invalidation's information. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/InvalidationDatatype.html">Invalidation Complex Type</a>. </p>
   */
  Invalidation?: Invalidation;
}

export namespace GetInvalidationResult {
  export const filterSensitiveLog = (obj: GetInvalidationResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified invalidation does not exist.</p>
 */
export interface NoSuchInvalidation extends __SmithyException, $MetadataBearer {
  name: "NoSuchInvalidation";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchInvalidation {
  export const filterSensitiveLog = (obj: NoSuchInvalidation): any => ({
    ...obj,
  });
}

export interface GetKeyGroupRequest {
  /**
   * <p>The identifier of the key group that you are getting. To get the identifier, use
   * 			<code>ListKeyGroups</code>.</p>
   */
  Id: string | undefined;
}

export namespace GetKeyGroupRequest {
  export const filterSensitiveLog = (obj: GetKeyGroupRequest): any => ({
    ...obj,
  });
}

export interface GetKeyGroupResult {
  /**
   * <p>The key group.</p>
   */
  KeyGroup?: KeyGroup;

  /**
   * <p>The identifier for this version of the key group.</p>
   */
  ETag?: string;
}

export namespace GetKeyGroupResult {
  export const filterSensitiveLog = (obj: GetKeyGroupResult): any => ({
    ...obj,
  });
}

export interface GetKeyGroupConfigRequest {
  /**
   * <p>The identifier of the key group whose configuration you are getting. To get the
   * 			identifier, use <code>ListKeyGroups</code>.</p>
   */
  Id: string | undefined;
}

export namespace GetKeyGroupConfigRequest {
  export const filterSensitiveLog = (obj: GetKeyGroupConfigRequest): any => ({
    ...obj,
  });
}

export interface GetKeyGroupConfigResult {
  /**
   * <p>The key group configuration.</p>
   */
  KeyGroupConfig?: KeyGroupConfig;

  /**
   * <p>The identifier for this version of the key group.</p>
   */
  ETag?: string;
}

export namespace GetKeyGroupConfigResult {
  export const filterSensitiveLog = (obj: GetKeyGroupConfigResult): any => ({
    ...obj,
  });
}

export interface GetMonitoringSubscriptionRequest {
  /**
   * <p>The ID of the distribution that you are getting metrics information for.</p>
   */
  DistributionId: string | undefined;
}

export namespace GetMonitoringSubscriptionRequest {
  export const filterSensitiveLog = (obj: GetMonitoringSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface GetMonitoringSubscriptionResult {
  /**
   * <p>A monitoring subscription. This structure contains information about whether additional
   * 			CloudWatch metrics are enabled for a given CloudFront distribution.</p>
   */
  MonitoringSubscription?: MonitoringSubscription;
}

export namespace GetMonitoringSubscriptionResult {
  export const filterSensitiveLog = (obj: GetMonitoringSubscriptionResult): any => ({
    ...obj,
  });
}

export interface GetOriginRequestPolicyRequest {
  /**
   * <p>The unique identifier for the origin request policy. If the origin request policy is
   * 			attached to a distribution’s cache behavior, you can get the policy’s identifier using
   * 			<code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request
   * 			policy is not attached to a cache behavior, you can get the identifier using
   * 			<code>ListOriginRequestPolicies</code>.</p>
   */
  Id: string | undefined;
}

export namespace GetOriginRequestPolicyRequest {
  export const filterSensitiveLog = (obj: GetOriginRequestPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetOriginRequestPolicyResult {
  /**
   * <p>The origin request policy.</p>
   */
  OriginRequestPolicy?: OriginRequestPolicy;

  /**
   * <p>The current version of the origin request policy.</p>
   */
  ETag?: string;
}

export namespace GetOriginRequestPolicyResult {
  export const filterSensitiveLog = (obj: GetOriginRequestPolicyResult): any => ({
    ...obj,
  });
}

export interface GetOriginRequestPolicyConfigRequest {
  /**
   * <p>The unique identifier for the origin request policy. If the origin request policy is
   * 			attached to a distribution’s cache behavior, you can get the policy’s identifier using
   * 			<code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request
   * 			policy is not attached to a cache behavior, you can get the identifier using
   * 			<code>ListOriginRequestPolicies</code>.</p>
   */
  Id: string | undefined;
}

export namespace GetOriginRequestPolicyConfigRequest {
  export const filterSensitiveLog = (obj: GetOriginRequestPolicyConfigRequest): any => ({
    ...obj,
  });
}

export interface GetOriginRequestPolicyConfigResult {
  /**
   * <p>The origin request policy configuration.</p>
   */
  OriginRequestPolicyConfig?: OriginRequestPolicyConfig;

  /**
   * <p>The current version of the origin request policy.</p>
   */
  ETag?: string;
}

export namespace GetOriginRequestPolicyConfigResult {
  export const filterSensitiveLog = (obj: GetOriginRequestPolicyConfigResult): any => ({
    ...obj,
  });
}

export interface GetPublicKeyRequest {
  /**
   * <p>The identifier of the public key you are getting.</p>
   */
  Id: string | undefined;
}

export namespace GetPublicKeyRequest {
  export const filterSensitiveLog = (obj: GetPublicKeyRequest): any => ({
    ...obj,
  });
}

export interface GetPublicKeyResult {
  /**
   * <p>The public key.</p>
   */
  PublicKey?: PublicKey;

  /**
   * <p>The identifier for this version of the public key.</p>
   */
  ETag?: string;
}

export namespace GetPublicKeyResult {
  export const filterSensitiveLog = (obj: GetPublicKeyResult): any => ({
    ...obj,
  });
}

export interface GetPublicKeyConfigRequest {
  /**
   * <p>The identifier of the public key whose configuration you are getting.</p>
   */
  Id: string | undefined;
}

export namespace GetPublicKeyConfigRequest {
  export const filterSensitiveLog = (obj: GetPublicKeyConfigRequest): any => ({
    ...obj,
  });
}

export interface GetPublicKeyConfigResult {
  /**
   * <p>A public key configuration.</p>
   */
  PublicKeyConfig?: PublicKeyConfig;

  /**
   * <p>The identifier for this version of the public key configuration.</p>
   */
  ETag?: string;
}

export namespace GetPublicKeyConfigResult {
  export const filterSensitiveLog = (obj: GetPublicKeyConfigResult): any => ({
    ...obj,
  });
}

export interface GetRealtimeLogConfigRequest {
  /**
   * <p>The name of the real-time log configuration to get.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration to get.</p>
   */
  ARN?: string;
}

export namespace GetRealtimeLogConfigRequest {
  export const filterSensitiveLog = (obj: GetRealtimeLogConfigRequest): any => ({
    ...obj,
  });
}
