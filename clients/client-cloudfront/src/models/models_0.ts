// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { CloudFrontServiceException as __BaseException } from "./CloudFrontServiceException";
import {
  ActiveTrustedKeyGroups,
  ActiveTrustedSigners,
  Aliases,
  AliasICPRecordal,
  CacheBehaviors,
  CachePolicyList,
  CachePolicyType,
  CloudFrontOriginAccessIdentityList,
  ConflictingAliasesList,
  ContentTypeProfileConfig,
  CustomErrorResponses,
  DefaultCacheBehavior,
  DistributionIdList,
  DistributionList,
  EncryptionEntities,
  FieldLevelEncryptionList,
  FieldLevelEncryptionProfileList,
  FunctionList,
  FunctionMetadata,
  FunctionRuntime,
  FunctionStage,
  HttpVersion,
  InvalidationList,
  KeyGroupList,
  KinesisStreamConfig,
  LoggingConfig,
  OriginGroups,
  OriginRequestPolicyCookiesConfig,
  OriginRequestPolicyHeadersConfig,
  OriginRequestPolicyList,
  OriginRequestPolicyQueryStringsConfig,
  OriginRequestPolicyType,
  Origins,
  ParametersInCacheKeyAndForwardedToOrigin,
  Paths,
  PriceClass,
  PublicKeyList,
  QueryArgProfileConfig,
  RealtimeLogConfigs,
  RealtimeMetricsSubscriptionConfig,
  ResponseHeadersPolicyCorsConfig,
  ResponseHeadersPolicyCustomHeadersConfig,
  ResponseHeadersPolicyList,
  ResponseHeadersPolicySecurityHeadersConfig,
  ResponseHeadersPolicyServerTimingHeadersConfig,
  ResponseHeadersPolicyType,
  Restrictions,
  S3Origin,
  StreamingDistribution,
  StreamingDistributionList,
  StreamingLoggingConfig,
  Tag,
  TestResult,
  TrustedSigners,
  ViewerCertificate,
} from "./models_1";

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

export interface AssociateAliasRequest {
  /**
   * <p>The ID of the distribution that you’re associating the alias with.</p>
   */
  TargetDistributionId: string | undefined;

  /**
   * <p>The alias (also known as a CNAME) to add to the target distribution.</p>
   */
  Alias: string | undefined;
}

export namespace AssociateAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateAliasRequest): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CachePolicy): any => ({
    ...obj,
  });
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

export interface CreateCachePolicyRequest {
  /**
   * <p>A cache policy configuration.</p>
   */
  CachePolicyConfig: CachePolicyConfig | undefined;
}

export namespace CreateCachePolicyRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCachePolicyResult): any => ({
    ...obj,
  });
}

/**
 * <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
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
 * <p>You have reached the maximum number of cache policies for this Amazon Web Services account. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * <p>If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity but the content
 * 			of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a
 * 			<code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. </p>
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
   * <p>A comment to describe the origin access identity. The comment cannot be longer
   * 			than 128 characters.</p>
   */
  Comment: string | undefined;
}

export namespace CloudFrontOriginAccessIdentityConfig {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCloudFrontOriginAccessIdentityResult): any => ({
    ...obj,
  });
}

/**
 * <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
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
 * <p>Processing your request would cause you to exceed the maximum number of origin access identities allowed.</p>
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
   * <p>An optional comment to describe the distribution. The comment cannot be longer than 128
   * 			characters.</p>
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
   * <p>A unique identifier that specifies the WAF web ACL, if any, to associate
   * 			with this distribution. To specify a web ACL created using the latest version of
   *             WAF, use the ACL ARN, for example
   * 			<code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>.
   * 			To specify a web ACL created using WAF Classic, use the ACL ID, for example
   * 			<code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p>
   * 		       <p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS
   * 			requests that are forwarded to CloudFront, and lets you control access to your content. Based on
   * 			conditions that you specify, such as the IP addresses that requests originate from or the
   * 			values of query strings, CloudFront responds to requests either with the requested content or with
   * 			an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page
   * 			when a request is blocked. For more information about WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF
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
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html">Creating a Signed URL Using a Custom Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>If you're using an Route 53 Amazon Web Services Integration alias resource record set to route traffic to your CloudFront
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
   * 				to an Amazon CloudFront Web Distribution by Using Your Domain Name</a> in the <i>Route 53 Amazon Web Services Integration
   * 				Developer Guide</i>.</p>
   * 		       <p>If you created a CNAME resource record set, either with Route 53 Amazon Web Services Integration or with another DNS
   * 			service, you don't need to make any changes. A CNAME record will route traffic to your
   * 			distribution regardless of the IP address format of the viewer request.</p>
   */
  IsIPV6Enabled?: boolean;
}

export namespace DistributionConfig {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * 				<code>123456789012</code> is your Amazon Web Services account ID.</p>
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
   * 			list of Amazon Web Services account IDs and the active CloudFront key pairs in each account that CloudFront can use
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
   * <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content
   * 			publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP
   * 			recordal status for CNAMEs associated with distributions.</p>
   * 		       <p>For more information about ICP recordals, see  <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html">
   * 			Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>
   */
  AliasICPRecordals?: AliasICPRecordal[];
}

export namespace Distribution {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDistributionResult): any => ({
    ...obj,
    ...(obj.Distribution && { Distribution: Distribution.filterSensitiveLog(obj.Distribution) }),
  });
}

/**
 * <p>The caller reference you attempted to create the distribution with is associated with another distribution.</p>
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
 * <p>The specified configuration for field-level encryption can't be associated with the specified cache behavior.</p>
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
 * <p>Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code>
 * 			list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected.</p>
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
 * <p>You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support
 * 			Server Name Indication (SNI).</p>
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
 * <p>The relative path is too big, is not URL-encoded, or does not begin with a slash (/).</p>
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
 * <p>This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the
 * 			<code>RequiredProtocols</code> element from your distribution configuration.</p>
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
 * 			<code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>.
 * 			To specify a web ACL created using WAF Classic, use the ACL ID, for example
 * 			<code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p>
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
 * <p>No origin exists with the specified <code>Origin Id</code>. </p>
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
 * <p>Your request contains more cookie names in the whitelist than are allowed per cache behavior.</p>
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
 * <p>Processing your request would cause you to exceed the maximum number of distributions allowed.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * <p>The maximum number of distributions have been associated with the specified configuration for field-level encryption.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * <p>The maximum number of distributions have been associated with the specified response headers
 * 			policy.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * <p>Processing your request would cause the maximum number of distributions with Lambda@Edge function associations per owner
 * 			to be exceeded.</p>
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
 * <p>The maximum number of distributions have been associated with the specified Lambda@Edge
 * 			function.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * <p>Your request contains more Lambda@Edge function associations than are allowed per distribution.</p>
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
 * <p>Processing your request would cause you to exceed the maximum number of origin groups allowed.</p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDistributionWithTagsResult): any => ({
    ...obj,
    ...(obj.Distribution && { Distribution: Distribution.filterSensitiveLog(obj.Distribution) }),
  });
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

/**
 * <p>A complex data type that includes the profile configurations specified for field-level encryption. </p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFieldLevelEncryptionConfigResult): any => ({
    ...obj,
  });
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
 * <p>The maximum number of configurations for field-level encryption have been created.</p>
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
 * <p>The maximum number of content type profiles for field-level encryption have been created.</p>
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
 * <p>The maximum number of query arg profiles for field-level encryption have been created.</p>
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
   * <p>An optional comment for the field-level encryption profile. The comment cannot be longer
   * 			than 128 characters.</p>
   */
  Comment?: string;

  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and
   * 			field patterns for specifying which fields to encrypt with this key.</p>
   */
  EncryptionEntities: EncryptionEntities | undefined;
}

export namespace FieldLevelEncryptionProfileConfig {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFieldLevelEncryptionProfileResult): any => ({
    ...obj,
  });
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
 * <p>The maximum number of encryption entities for field-level encryption have been created.</p>
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
 * <p>The maximum number of field patterns for field-level encryption have been created.</p>
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

/**
 * <p>Contains configuration information about a CloudFront function.</p>
 */
export interface FunctionConfig {
  /**
   * <p>A comment to describe the function.</p>
   */
  Comment: string | undefined;

  /**
   * <p>The function’s runtime environment. The only valid value is
   * 			<code>cloudfront-js-1.0</code>.</p>
   */
  Runtime: FunctionRuntime | string | undefined;
}

export namespace FunctionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FunctionConfig): any => ({
    ...obj,
  });
}

export interface CreateFunctionRequest {
  /**
   * <p>A name to identify the function.</p>
   */
  Name: string | undefined;

  /**
   * <p>Configuration information about the function, including an optional comment and the
   * 			function’s runtime.</p>
   */
  FunctionConfig: FunctionConfig | undefined;

  /**
   * <p>The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function
   * 			code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  FunctionCode: Uint8Array | undefined;
}

export namespace CreateFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFunctionRequest): any => ({
    ...obj,
    ...(obj.FunctionCode && { FunctionCode: SENSITIVE_STRING }),
  });
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

export namespace FunctionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FunctionSummary): any => ({
    ...obj,
  });
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

export namespace CreateFunctionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFunctionResult): any => ({
    ...obj,
  });
}

/**
 * <p>A function with the same name already exists in this Amazon Web Services account. To create a
 * 			function, you must provide a unique name. To update an existing function, use
 * 			<code>UpdateFunction</code>.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInvalidationResult): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects.</p>
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
   * <p>A comment to describe the key group. The comment cannot be longer than 128
   * 			characters.</p>
   */
  Comment?: string;
}

export namespace KeyGroupConfig {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeyGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>A key group with this name already exists. You must provide a unique name. To modify an
 * 			existing key group, use <code>UpdateKeyGroup</code>.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMonitoringSubscriptionResult): any => ({
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

export namespace OriginRequestPolicyConfig {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOriginRequestPolicyResult): any => ({
    ...obj,
  });
}

/**
 * <p>An origin request policy with this name already exists. You must provide a unique
 * 			name. To modify an existing origin request policy, use
 * 			<code>UpdateOriginRequestPolicy</code>.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
   * <p>A comment to describe the public key. The comment cannot be longer than 128
   * 			characters.</p>
   */
  Comment?: string;
}

export namespace PublicKeyConfig {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePublicKeyResult): any => ({
    ...obj,
  });
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
 * <p>The maximum number of public keys for field-level encryption have been created. To create a new public key, delete one of the existing keys.</p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRealtimeLogConfigResult): any => ({
    ...obj,
  });
}

/**
 * <p>A real-time log configuration with this name already exists. You must provide a unique name.
 * 			To modify an existing real-time log configuration, use
 * 			<code>UpdateRealtimeLogConfig</code>.</p>
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
 * <p>You have reached the maximum number of real-time log configurations for this Amazon Web Services account.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * <p>A response headers policy configuration.</p>
 * 		       <p>A response headers policy configuration contains metadata about the response headers policy,
 * 			and configurations for sets of HTTP response headers and their values. CloudFront adds the
 * 			headers in the policy to HTTP responses that it sends for requests that match a cache
 * 			behavior associated with the policy.</p>
 */
export interface ResponseHeadersPolicyConfig {
  /**
   * <p>A comment to describe the response headers policy.</p>
   * 		       <p>The comment cannot be longer than 128 characters.</p>
   */
  Comment?: string;

  /**
   * <p>A name to identify the response headers policy.</p>
   * 		       <p>The name must be unique for response headers policies in this Amazon Web Services account.</p>
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
   * <p>A configuration for a set of custom HTTP response headers.</p>
   */
  CustomHeadersConfig?: ResponseHeadersPolicyCustomHeadersConfig;

  /**
   * <p>A configuration for enabling the <code>Server-Timing</code> header in HTTP responses
   * 			sent from CloudFront.</p>
   */
  ServerTimingHeadersConfig?: ResponseHeadersPolicyServerTimingHeadersConfig;
}

export namespace ResponseHeadersPolicyConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicyConfig): any => ({
    ...obj,
  });
}

export interface CreateResponseHeadersPolicyRequest {
  /**
   * <p>Contains metadata about the response headers policy, and a set of configurations that
   * 			specify the response headers.</p>
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig | undefined;
}

export namespace CreateResponseHeadersPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResponseHeadersPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A response headers policy.</p>
 * 		       <p>A response headers policy contains information about a set of HTTP response headers
 * 			and their values.</p>
 * 		       <p>After you create a response headers policy, you can use its ID to attach it to one or more
 * 			cache behaviors in a CloudFront distribution. When it’s attached to a cache behavior, CloudFront
 * 			adds the headers in the policy to HTTP responses that it sends for requests that match
 * 			the cache behavior.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/adding-response-headers.html">Adding HTTP headers to CloudFront responses</a> in the
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
   * 		       <p>A response headers policy contains information about a set of HTTP response headers and
   * 			their values. CloudFront adds the headers in the policy to HTTP responses that it sends for
   * 			requests that match a cache behavior that’s associated with the policy.</p>
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig | undefined;
}

export namespace ResponseHeadersPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseHeadersPolicy): any => ({
    ...obj,
  });
}

export interface CreateResponseHeadersPolicyResult {
  /**
   * <p>Contains a response headers policy.</p>
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy;

  /**
   * <p>The URL of the response headers policy.</p>
   */
  Location?: string;

  /**
   * <p>The version identifier for the current version of the response headers policy.</p>
   */
  ETag?: string;
}

export namespace CreateResponseHeadersPolicyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResponseHeadersPolicyResult): any => ({
    ...obj,
  });
}

/**
 * <p>A response headers policy with this name already exists. You must provide a unique name. To
 * 			modify an existing response headers policy, use
 * 			<code>UpdateResponseHeadersPolicy</code>.</p>
 */
export class ResponseHeadersPolicyAlreadyExists extends __BaseException {
  readonly name: "ResponseHeadersPolicyAlreadyExists" = "ResponseHeadersPolicyAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResponseHeadersPolicyAlreadyExists, __BaseException>) {
    super({
      name: "ResponseHeadersPolicyAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResponseHeadersPolicyAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The length of the <code>Content-Security-Policy</code> header value in the response headers
 * 			policy exceeds the maximum.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooLongCSPInResponseHeadersPolicy extends __BaseException {
  readonly name: "TooLongCSPInResponseHeadersPolicy" = "TooLongCSPInResponseHeadersPolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooLongCSPInResponseHeadersPolicy, __BaseException>) {
    super({
      name: "TooLongCSPInResponseHeadersPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooLongCSPInResponseHeadersPolicy.prototype);
    this.Message = opts.Message;
  }
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
   * <p>A complex type that specifies any Amazon Web Services accounts that you want to permit to create signed
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamingDistributionRequest): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamingDistributionResult): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCachePolicyRequest): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCloudFrontOriginAccessIdentityRequest): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDistributionRequest): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFieldLevelEncryptionConfigRequest): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFieldLevelEncryptionProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteFunctionRequest {
  /**
   * <p>The name of the function that you are deleting.</p>
   */
  Name: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the function that you are deleting, which
   * 			you can get using <code>DescribeFunction</code>.</p>
   */
  IfMatch: string | undefined;
}

export namespace DeleteFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFunctionRequest): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKeyGroupRequest): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMonitoringSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface DeleteMonitoringSubscriptionResult {}

export namespace DeleteMonitoringSubscriptionResult {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOriginRequestPolicyRequest): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePublicKeyRequest): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRealtimeLogConfigRequest): any => ({
    ...obj,
  });
}

export interface DeleteResponseHeadersPolicyRequest {
  /**
   * <p>The identifier for the response headers policy that you are deleting.</p>
   * 		       <p>To get the identifier, you can use <code>ListResponseHeadersPolicies</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The version of the response headers policy that you are deleting.</p>
   * 		       <p>The version is the response headers policy’s <code>ETag</code> value, which you can
   * 			get using <code>ListResponseHeadersPolicies</code>,
   * 				<code>GetResponseHeadersPolicy</code>, or
   * 				<code>GetResponseHeadersPolicyConfig</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeleteResponseHeadersPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResponseHeadersPolicyRequest): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStreamingDistributionRequest): any => ({
    ...obj,
  });
}

export interface DescribeFunctionRequest {
  /**
   * <p>The name of the function that you are getting information about.</p>
   */
  Name: string | undefined;

  /**
   * <p>The function’s stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   */
  Stage?: FunctionStage | string;
}

export namespace DescribeFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFunctionRequest): any => ({
    ...obj,
  });
}

export interface DescribeFunctionResult {
  /**
   * <p>Contains configuration information and metadata about a CloudFront function.</p>
   */
  FunctionSummary?: FunctionSummary;

  /**
   * <p>The version identifier for the current version of the CloudFront function.</p>
   */
  ETag?: string;
}

export namespace DescribeFunctionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFunctionResult): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFieldLevelEncryptionProfileConfigResult): any => ({
    ...obj,
  });
}

export interface GetFunctionRequest {
  /**
   * <p>The name of the function whose code you are getting.</p>
   */
  Name: string | undefined;

  /**
   * <p>The function’s stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   */
  Stage?: FunctionStage | string;
}

export namespace GetFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFunctionRequest): any => ({
    ...obj,
  });
}

export interface GetFunctionResult {
  /**
   * <p>The function code of a CloudFront function.</p>
   */
  FunctionCode?: Uint8Array;

  /**
   * <p>The version identifier for the current version of the CloudFront function.</p>
   */
  ETag?: string;

  /**
   * <p>The content type (media type) of the response.</p>
   */
  ContentType?: string;
}

export namespace GetFunctionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFunctionResult): any => ({
    ...obj,
    ...(obj.FunctionCode && { FunctionCode: SENSITIVE_STRING }),
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInvalidationResult): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRealtimeLogConfigRequest): any => ({
    ...obj,
  });
}

export interface GetRealtimeLogConfigResult {
  /**
   * <p>A real-time log configuration.</p>
   */
  RealtimeLogConfig?: RealtimeLogConfig;
}

export namespace GetRealtimeLogConfigResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRealtimeLogConfigResult): any => ({
    ...obj,
  });
}

export interface GetResponseHeadersPolicyRequest {
  /**
   * <p>The identifier for the response headers policy.</p>
   * 		       <p>If the response headers policy is attached to a distribution’s cache behavior, you can
   * 			get the policy’s identifier using <code>ListDistributions</code> or
   * 				<code>GetDistribution</code>. If the response headers policy is not attached to a
   * 			cache behavior, you can get the identifier using
   * 				<code>ListResponseHeadersPolicies</code>.</p>
   */
  Id: string | undefined;
}

export namespace GetResponseHeadersPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResponseHeadersPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetResponseHeadersPolicyResult {
  /**
   * <p>Contains a response headers policy.</p>
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy;

  /**
   * <p>The version identifier for the current version of the response headers policy.</p>
   */
  ETag?: string;
}

export namespace GetResponseHeadersPolicyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResponseHeadersPolicyResult): any => ({
    ...obj,
  });
}

export interface GetResponseHeadersPolicyConfigRequest {
  /**
   * <p>The identifier for the response headers policy.</p>
   * 		       <p>If the response headers policy is attached to a distribution’s cache behavior, you can
   * 			get the policy’s identifier using <code>ListDistributions</code> or
   * 				<code>GetDistribution</code>. If the response headers policy is not attached to a
   * 			cache behavior, you can get the identifier using
   * 				<code>ListResponseHeadersPolicies</code>.</p>
   */
  Id: string | undefined;
}

export namespace GetResponseHeadersPolicyConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResponseHeadersPolicyConfigRequest): any => ({
    ...obj,
  });
}

export interface GetResponseHeadersPolicyConfigResult {
  /**
   * <p>Contains a response headers policy.</p>
   */
  ResponseHeadersPolicyConfig?: ResponseHeadersPolicyConfig;

  /**
   * <p>The version identifier for the current version of the response headers policy.</p>
   */
  ETag?: string;
}

export namespace GetResponseHeadersPolicyConfigResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResponseHeadersPolicyConfigResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to get a streaming distribution's information.</p>
 */
export interface GetStreamingDistributionRequest {
  /**
   * <p>The streaming distribution's ID.</p>
   */
  Id: string | undefined;
}

export namespace GetStreamingDistributionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamingDistributionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetStreamingDistributionResult {
  /**
   * <p>The streaming distribution's information.</p>
   */
  StreamingDistribution?: StreamingDistribution;

  /**
   * <p>The current version of the streaming distribution's information. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace GetStreamingDistributionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamingDistributionResult): any => ({
    ...obj,
  });
}

/**
 * <p>To request to get a streaming distribution configuration.</p>
 */
export interface GetStreamingDistributionConfigRequest {
  /**
   * <p>The streaming distribution's ID.</p>
   */
  Id: string | undefined;
}

export namespace GetStreamingDistributionConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamingDistributionConfigRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetStreamingDistributionConfigResult {
  /**
   * <p>The streaming distribution's configuration information.</p>
   */
  StreamingDistributionConfig?: StreamingDistributionConfig;

  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.
   * 		</p>
   */
  ETag?: string;
}

export namespace GetStreamingDistributionConfigResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamingDistributionConfigResult): any => ({
    ...obj,
  });
}

export interface ListCachePoliciesRequest {
  /**
   * <p>A filter to return only the specified kinds of cache policies. Valid values
   * 			are:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p>
   * 			         </li>
   *          </ul>
   */
  Type?: CachePolicyType | string;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			cache policies. The response includes cache policies in the list that occur after the
   * 			marker. To get the next page of the list, set this field’s value to the value of
   * 			<code>NextMarker</code> from the current page’s response.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of cache policies that you want in the response.</p>
   */
  MaxItems?: number;
}

export namespace ListCachePoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCachePoliciesRequest): any => ({
    ...obj,
  });
}

export interface ListCachePoliciesResult {
  /**
   * <p>A list of cache policies.</p>
   */
  CachePolicyList?: CachePolicyList;
}

export namespace ListCachePoliciesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCachePoliciesResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to list origin access identities. </p>
 */
export interface ListCloudFrontOriginAccessIdentitiesRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of origin
   * 			access identities. The results include identities in the list that occur after the marker. To
   * 			get the next page of results, set the <code>Marker</code> to the value of the
   * 				<code>NextMarker</code> from the current page's response (which is also the ID of the last
   * 			identity on that page).</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of origin access identities you want in the response body.
   * 		</p>
   */
  MaxItems?: number;
}

export namespace ListCloudFrontOriginAccessIdentitiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCloudFrontOriginAccessIdentitiesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListCloudFrontOriginAccessIdentitiesResult {
  /**
   * <p>The <code>CloudFrontOriginAccessIdentityList</code> type. </p>
   */
  CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList;
}

export namespace ListCloudFrontOriginAccessIdentitiesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCloudFrontOriginAccessIdentitiesResult): any => ({
    ...obj,
  });
}

export interface ListConflictingAliasesRequest {
  /**
   * <p>The ID of a distribution in your account that has an attached SSL/TLS certificate that
   * 			includes the provided alias.</p>
   */
  DistributionId: string | undefined;

  /**
   * <p>The alias (also called a CNAME) to search for conflicting aliases.</p>
   */
  Alias: string | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in the list of
   * 			conflicting aliases. The response includes conflicting aliases in the list that occur
   * 			after the marker. To get the next page of the list, set this field’s value to the value
   * 			of <code>NextMarker</code> from the current page’s response.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of conflicting aliases that you want in the response.</p>
   */
  MaxItems?: number;
}

export namespace ListConflictingAliasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConflictingAliasesRequest): any => ({
    ...obj,
  });
}

export interface ListConflictingAliasesResult {
  /**
   * <p>A list of conflicting aliases.</p>
   */
  ConflictingAliasesList?: ConflictingAliasesList;
}

export namespace ListConflictingAliasesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConflictingAliasesResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to list your distributions. </p>
 */
export interface ListDistributionsRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of
   * 			distributions. The results include distributions in the list that occur after the marker. To
   * 			get the next page of results, set the <code>Marker</code> to the value of the
   * 				<code>NextMarker</code> from the current page's response (which is also the ID of the last
   * 			distribution on that page).</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of distributions you want in the response body.</p>
   */
  MaxItems?: number;
}

export namespace ListDistributionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListDistributionsResult {
  /**
   * <p>The <code>DistributionList</code> type. </p>
   */
  DistributionList?: DistributionList;
}

export namespace ListDistributionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsResult): any => ({
    ...obj,
  });
}

export interface ListDistributionsByCachePolicyIdRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			distribution IDs. The response includes distribution IDs in the list that occur after
   * 			the marker. To get the next page of the list, set this field’s value to the value of
   * 			<code>NextMarker</code> from the current page’s response.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of distribution IDs that you want in the response.</p>
   */
  MaxItems?: number;

  /**
   * <p>The ID of the cache policy whose associated distribution IDs you want to list.</p>
   */
  CachePolicyId: string | undefined;
}

export namespace ListDistributionsByCachePolicyIdRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsByCachePolicyIdRequest): any => ({
    ...obj,
  });
}

export interface ListDistributionsByCachePolicyIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   */
  DistributionIdList?: DistributionIdList;
}

export namespace ListDistributionsByCachePolicyIdResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsByCachePolicyIdResult): any => ({
    ...obj,
  });
}

export interface ListDistributionsByKeyGroupRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			distribution IDs. The response includes distribution IDs in the list that occur after
   * 			the marker. To get the next page of the list, set this field’s value to the value of
   * 			<code>NextMarker</code> from the current page’s response.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of distribution IDs that you want in the response.</p>
   */
  MaxItems?: number;

  /**
   * <p>The ID of the key group whose associated distribution IDs you are listing.</p>
   */
  KeyGroupId: string | undefined;
}

export namespace ListDistributionsByKeyGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsByKeyGroupRequest): any => ({
    ...obj,
  });
}

export interface ListDistributionsByKeyGroupResult {
  /**
   * <p>A list of distribution IDs.</p>
   */
  DistributionIdList?: DistributionIdList;
}

export namespace ListDistributionsByKeyGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsByKeyGroupResult): any => ({
    ...obj,
  });
}

export interface ListDistributionsByOriginRequestPolicyIdRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			distribution IDs. The response includes distribution IDs in the list that occur after
   * 			the marker. To get the next page of the list, set this field’s value to the value of
   * 			<code>NextMarker</code> from the current page’s response.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of distribution IDs that you want in the response.</p>
   */
  MaxItems?: number;

  /**
   * <p>The ID of the origin request policy whose associated distribution IDs you want to
   * 			list.</p>
   */
  OriginRequestPolicyId: string | undefined;
}

export namespace ListDistributionsByOriginRequestPolicyIdRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsByOriginRequestPolicyIdRequest): any => ({
    ...obj,
  });
}

export interface ListDistributionsByOriginRequestPolicyIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   */
  DistributionIdList?: DistributionIdList;
}

export namespace ListDistributionsByOriginRequestPolicyIdResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsByOriginRequestPolicyIdResult): any => ({
    ...obj,
  });
}

export interface ListDistributionsByRealtimeLogConfigRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			distributions. The response includes distributions in the list that occur after the
   * 			marker. To get the next page of the list, set this field’s value to the value of
   * 			<code>NextMarker</code> from the current page’s response.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of distributions that you want in the response.</p>
   */
  MaxItems?: number;

  /**
   * <p>The name of the real-time log configuration whose associated distributions you want to
   * 			list.</p>
   */
  RealtimeLogConfigName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration whose associated
   * 			distributions you want to list.</p>
   */
  RealtimeLogConfigArn?: string;
}

export namespace ListDistributionsByRealtimeLogConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsByRealtimeLogConfigRequest): any => ({
    ...obj,
  });
}

export interface ListDistributionsByRealtimeLogConfigResult {
  /**
   * <p>A distribution list.</p>
   */
  DistributionList?: DistributionList;
}

export namespace ListDistributionsByRealtimeLogConfigResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsByRealtimeLogConfigResult): any => ({
    ...obj,
  });
}

export interface ListDistributionsByResponseHeadersPolicyIdRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			distribution IDs. The response includes distribution IDs in the list that occur after
   * 			the marker. To get the next page of the list, set this field’s value to the value of
   * 				<code>NextMarker</code> from the current page’s response.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of distribution IDs that you want to get in the response.</p>
   */
  MaxItems?: number;

  /**
   * <p>The ID of the response headers policy whose associated distribution IDs you want to
   * 			list.</p>
   */
  ResponseHeadersPolicyId: string | undefined;
}

export namespace ListDistributionsByResponseHeadersPolicyIdRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsByResponseHeadersPolicyIdRequest): any => ({
    ...obj,
  });
}

export interface ListDistributionsByResponseHeadersPolicyIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   */
  DistributionIdList?: DistributionIdList;
}

export namespace ListDistributionsByResponseHeadersPolicyIdResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsByResponseHeadersPolicyIdResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to list distributions that are associated with a specified WAF web
 * 			ACL.</p>
 */
export interface ListDistributionsByWebACLIdRequest {
  /**
   * <p>Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If
   * 			you have more than <code>MaxItems</code> distributions that satisfy the request, the response
   * 			includes a <code>NextMarker</code> element. To get the next page of results, submit another
   * 			request. For the value of <code>Marker</code>, specify the value of <code>NextMarker</code>
   * 			from the last response. (For the first request, omit <code>Marker</code>.) </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of distributions that you want CloudFront to return in the response body.
   * 			The maximum and default values are both 100.</p>
   */
  MaxItems?: number;

  /**
   * <p>The ID of the WAF web ACL that you want to list the associated distributions.
   * 			If you specify "null" for the ID, the request returns a list of the distributions that aren't
   * 			associated with a web ACL.</p>
   */
  WebACLId: string | undefined;
}

export namespace ListDistributionsByWebACLIdRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsByWebACLIdRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response to a request to list the distributions that are associated with a
 * 			specified WAF web ACL.</p>
 */
export interface ListDistributionsByWebACLIdResult {
  /**
   * <p>The <code>DistributionList</code> type. </p>
   */
  DistributionList?: DistributionList;
}

export namespace ListDistributionsByWebACLIdResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionsByWebACLIdResult): any => ({
    ...obj,
  });
}

export interface ListFieldLevelEncryptionConfigsRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that
   * 			occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the
   * 			<code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page). </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of field-level encryption configurations you want in the response body. </p>
   */
  MaxItems?: number;
}

export namespace ListFieldLevelEncryptionConfigsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFieldLevelEncryptionConfigsRequest): any => ({
    ...obj,
  });
}

export interface ListFieldLevelEncryptionConfigsResult {
  /**
   * <p>Returns a list of all field-level encryption configurations that have been created in CloudFront for this account.</p>
   */
  FieldLevelEncryptionList?: FieldLevelEncryptionList;
}

export namespace ListFieldLevelEncryptionConfigsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFieldLevelEncryptionConfigsResult): any => ({
    ...obj,
  });
}

export interface ListFieldLevelEncryptionProfilesRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that
   * 			occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the
   * 			<code>NextMarker</code> from the current page's response (which is also the ID of the last profile on that page). </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of field-level encryption profiles you want in the response body. </p>
   */
  MaxItems?: number;
}

export namespace ListFieldLevelEncryptionProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFieldLevelEncryptionProfilesRequest): any => ({
    ...obj,
  });
}

export interface ListFieldLevelEncryptionProfilesResult {
  /**
   * <p>Returns a list of the field-level encryption profiles that have been created in CloudFront for this account.</p>
   */
  FieldLevelEncryptionProfileList?: FieldLevelEncryptionProfileList;
}

export namespace ListFieldLevelEncryptionProfilesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFieldLevelEncryptionProfilesResult): any => ({
    ...obj,
  });
}

export interface ListFunctionsRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			functions. The response includes functions in the list that occur after the marker. To
   * 			get the next page of the list, set this field’s value to the value of
   * 			<code>NextMarker</code> from the current page’s response.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of functions that you want in the response.</p>
   */
  MaxItems?: number;

  /**
   * <p>An optional filter to return only the functions that are in the specified stage,
   * 			either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   */
  Stage?: FunctionStage | string;
}

export namespace ListFunctionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFunctionsRequest): any => ({
    ...obj,
  });
}

export interface ListFunctionsResult {
  /**
   * <p>A list of CloudFront functions.</p>
   */
  FunctionList?: FunctionList;
}

export namespace ListFunctionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFunctionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to list invalidations. </p>
 */
export interface ListInvalidationsRequest {
  /**
   * <p>The distribution's ID.</p>
   */
  DistributionId: string | undefined;

  /**
   * <p>Use this parameter when paginating results to indicate where to begin in your list of
   * 			invalidation batches. Because the results are returned in decreasing order from most recent to
   * 			oldest, the most recent results are on the first page, the second page will contain earlier
   * 			results, and so on. To get the next page of results, set <code>Marker</code> to the value of
   * 			the <code>NextMarker</code> from the current page's response. This value is the same as the ID
   * 			of the last invalidation batch on that page. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of invalidation batches that you want in the response
   * 			body.</p>
   */
  MaxItems?: number;
}

export namespace ListInvalidationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInvalidationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListInvalidationsResult {
  /**
   * <p>Information about invalidation batches. </p>
   */
  InvalidationList?: InvalidationList;
}

export namespace ListInvalidationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInvalidationsResult): any => ({
    ...obj,
  });
}

export interface ListKeyGroupsRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of key
   * 			groups. The response includes key groups in the list that occur after the marker. To get
   * 			the next page of the list, set this field’s value to the value of
   * 			<code>NextMarker</code> from the current page’s response.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of key groups that you want in the response.</p>
   */
  MaxItems?: number;
}

export namespace ListKeyGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKeyGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListKeyGroupsResult {
  /**
   * <p>A list of key groups.</p>
   */
  KeyGroupList?: KeyGroupList;
}

export namespace ListKeyGroupsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKeyGroupsResult): any => ({
    ...obj,
  });
}

export interface ListOriginRequestPoliciesRequest {
  /**
   * <p>A filter to return only the specified kinds of origin request policies. Valid values
   * 			are:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p>
   * 			         </li>
   *          </ul>
   */
  Type?: OriginRequestPolicyType | string;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			origin request policies. The response includes origin request policies in the list that
   * 			occur after the marker. To get the next page of the list, set this field’s value to the
   * 			value of <code>NextMarker</code> from the current page’s response.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of origin request policies that you want in the response.</p>
   */
  MaxItems?: number;
}

export namespace ListOriginRequestPoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOriginRequestPoliciesRequest): any => ({
    ...obj,
  });
}

export interface ListOriginRequestPoliciesResult {
  /**
   * <p>A list of origin request policies.</p>
   */
  OriginRequestPolicyList?: OriginRequestPolicyList;
}

export namespace ListOriginRequestPoliciesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOriginRequestPoliciesResult): any => ({
    ...obj,
  });
}

export interface ListPublicKeysRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that
   * 			occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the
   * 			<code>NextMarker</code> from the current page's response (which is also the ID of the last public key on that page). </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of public keys you want in the response body. </p>
   */
  MaxItems?: number;
}

export namespace ListPublicKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPublicKeysRequest): any => ({
    ...obj,
  });
}

export interface ListPublicKeysResult {
  /**
   * <p>Returns a list of all public keys that have been added to CloudFront for this account.</p>
   */
  PublicKeyList?: PublicKeyList;
}

export namespace ListPublicKeysResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPublicKeysResult): any => ({
    ...obj,
  });
}

export interface ListRealtimeLogConfigsRequest {
  /**
   * <p>The maximum number of real-time log configurations that you want in the response.</p>
   */
  MaxItems?: number;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of real-time
   * 			log configurations. The response includes real-time log configurations in the list that
   * 			occur after the marker. To get the next page of the list, set this field’s value to the
   * 			value of <code>NextMarker</code> from the current page’s response.</p>
   */
  Marker?: string;
}

export namespace ListRealtimeLogConfigsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRealtimeLogConfigsRequest): any => ({
    ...obj,
  });
}

export interface ListRealtimeLogConfigsResult {
  /**
   * <p>A list of real-time log configurations.</p>
   */
  RealtimeLogConfigs?: RealtimeLogConfigs;
}

export namespace ListRealtimeLogConfigsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRealtimeLogConfigsResult): any => ({
    ...obj,
  });
}

export interface ListResponseHeadersPoliciesRequest {
  /**
   * <p>A filter to get only the specified kind of response headers policies. Valid values
   * 			are:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>managed</code> – Gets only the managed policies created by Amazon Web Services.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>custom</code> – Gets only the custom policies created in your
   * 					Amazon Web Services account.</p>
   * 			         </li>
   *          </ul>
   */
  Type?: ResponseHeadersPolicyType | string;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of response
   * 			headers policies. The response includes response headers policies in the list that occur
   * 			after the marker. To get the next page of the list, set this field’s value to the value
   * 			of <code>NextMarker</code> from the current page’s response. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response headers policies that you want to get in the response.</p>
   */
  MaxItems?: number;
}

export namespace ListResponseHeadersPoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResponseHeadersPoliciesRequest): any => ({
    ...obj,
  });
}

export interface ListResponseHeadersPoliciesResult {
  /**
   * <p>A list of response headers policies.</p>
   */
  ResponseHeadersPolicyList?: ResponseHeadersPolicyList;
}

export namespace ListResponseHeadersPoliciesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResponseHeadersPoliciesResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to list your streaming distributions. </p>
 */
export interface ListStreamingDistributionsRequest {
  /**
   * <p>The value that you provided for the <code>Marker</code> request parameter.</p>
   */
  Marker?: string;

  /**
   * <p>The value that you provided for the <code>MaxItems</code> request parameter.</p>
   */
  MaxItems?: number;
}

export namespace ListStreamingDistributionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamingDistributionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListStreamingDistributionsResult {
  /**
   * <p>The <code>StreamingDistributionList</code> type. </p>
   */
  StreamingDistributionList?: StreamingDistributionList;
}

export namespace ListStreamingDistributionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamingDistributionsResult): any => ({
    ...obj,
  });
}

/**
 * <p> The request to list tags for a CloudFront resource.</p>
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> An ARN of a CloudFront resource.</p>
   */
  Resource: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p> The returned result of the corresponding request.</p>
 */
export interface ListTagsForResourceResult {
  /**
   * <p> A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: Tags | undefined;
}

export namespace ListTagsForResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
    ...obj,
  });
}

export interface PublishFunctionRequest {
  /**
   * <p>The name of the function that you are publishing.</p>
   */
  Name: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the function that you are publishing, which
   * 			you can get using <code>DescribeFunction</code>.</p>
   */
  IfMatch: string | undefined;
}

export namespace PublishFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublishFunctionRequest): any => ({
    ...obj,
  });
}

export interface PublishFunctionResult {
  /**
   * <p>Contains configuration information and metadata about a CloudFront function.</p>
   */
  FunctionSummary?: FunctionSummary;
}

export namespace PublishFunctionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublishFunctionResult): any => ({
    ...obj,
  });
}

/**
 * <p> The request to add tags to a CloudFront resource.</p>
 */
export interface TagResourceRequest {
  /**
   * <p> An ARN of a CloudFront resource.</p>
   */
  Resource: string | undefined;

  /**
   * <p> A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: Tags | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TestFunctionRequest {
  /**
   * <p>The name of the function that you are testing.</p>
   */
  Name: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the function that you are testing, which
   * 			you can get using <code>DescribeFunction</code>.</p>
   */
  IfMatch: string | undefined;

  /**
   * <p>The stage of the function that you are testing, either <code>DEVELOPMENT</code> or
   * 			<code>LIVE</code>.</p>
   */
  Stage?: FunctionStage | string;

  /**
   * <p>The event object to test the function with. For more information about the structure of the
   * 			event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  EventObject: Uint8Array | undefined;
}

export namespace TestFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestFunctionRequest): any => ({
    ...obj,
    ...(obj.EventObject && { EventObject: SENSITIVE_STRING }),
  });
}

export interface TestFunctionResult {
  /**
   * <p>An object that represents the result of running the function with the provided event
   * 			object.</p>
   */
  TestResult?: TestResult;
}

export namespace TestFunctionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestFunctionResult): any => ({
    ...obj,
    ...(obj.TestResult && { TestResult: TestResult.filterSensitiveLog(obj.TestResult) }),
  });
}

/**
 * <p> A complex type that contains zero or more <code>Tag</code> elements.</p>
 */
export interface TagKeys {
  /**
   * <p> A complex type that contains <code>Tag</code> key elements.</p>
   */
  Items?: string[];
}

export namespace TagKeys {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagKeys): any => ({
    ...obj,
  });
}

/**
 * <p> The request to remove tags from a CloudFront resource.</p>
 */
export interface UntagResourceRequest {
  /**
   * <p> An ARN of a CloudFront resource.</p>
   */
  Resource: string | undefined;

  /**
   * <p> A complex type that contains zero or more <code>Tag</code> key elements.</p>
   */
  TagKeys: TagKeys | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateCachePolicyRequest {
  /**
   * <p>A cache policy configuration.</p>
   */
  CachePolicyConfig: CachePolicyConfig | undefined;

  /**
   * <p>The unique identifier for the cache policy that you are updating. The identifier is returned
   * 			in a cache behavior’s <code>CachePolicyId</code> field in the response to
   * 			<code>GetDistributionConfig</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The version of the cache policy that you are updating. The version is returned in the cache
   * 			policy’s <code>ETag</code> field in the response to
   * 			<code>GetCachePolicyConfig</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdateCachePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCachePolicyRequest): any => ({
    ...obj,
  });
}

export interface UpdateCachePolicyResult {
  /**
   * <p>A cache policy.</p>
   */
  CachePolicy?: CachePolicy;

  /**
   * <p>The current version of the cache policy.</p>
   */
  ETag?: string;
}

export namespace UpdateCachePolicyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCachePolicyResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to update an origin access identity.</p>
 */
export interface UpdateCloudFrontOriginAccessIdentityRequest {
  /**
   * <p>The identity's configuration information.</p>
   */
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig | undefined;

  /**
   * <p>The identity's id.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			identity's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdateCloudFrontOriginAccessIdentityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCloudFrontOriginAccessIdentityRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface UpdateCloudFrontOriginAccessIdentityResult {
  /**
   * <p>The origin access identity's information.</p>
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;

  /**
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace UpdateCloudFrontOriginAccessIdentityResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCloudFrontOriginAccessIdentityResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to update a distribution.</p>
 */
export interface UpdateDistributionRequest {
  /**
   * <p>The distribution's configuration information.</p>
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * <p>The distribution's id.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdateDistributionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDistributionRequest): any => ({
    ...obj,
    ...(obj.DistributionConfig && {
      DistributionConfig: DistributionConfig.filterSensitiveLog(obj.DistributionConfig),
    }),
  });
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface UpdateDistributionResult {
  /**
   * <p>The distribution's information.</p>
   */
  Distribution?: Distribution;

  /**
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace UpdateDistributionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDistributionResult): any => ({
    ...obj,
    ...(obj.Distribution && { Distribution: Distribution.filterSensitiveLog(obj.Distribution) }),
  });
}

export interface UpdateFieldLevelEncryptionConfigRequest {
  /**
   * <p>Request to update a field-level encryption configuration. </p>
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;

  /**
   * <p>The ID of the configuration you want to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the configuration identity to update.
   * 			For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdateFieldLevelEncryptionConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFieldLevelEncryptionConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateFieldLevelEncryptionConfigResult {
  /**
   * <p>Return the results of updating the configuration.</p>
   */
  FieldLevelEncryption?: FieldLevelEncryption;

  /**
   * <p>The value of the <code>ETag</code> header that you received when updating the configuration.
   * 			For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace UpdateFieldLevelEncryptionConfigResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFieldLevelEncryptionConfigResult): any => ({
    ...obj,
  });
}

export interface UpdateFieldLevelEncryptionProfileRequest {
  /**
   * <p>Request to update a field-level encryption profile. </p>
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;

  /**
   * <p>The ID of the field-level encryption profile request. </p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the profile identity to update.
   * 			For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdateFieldLevelEncryptionProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFieldLevelEncryptionProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateFieldLevelEncryptionProfileResult {
  /**
   * <p>Return the results of updating the profile.</p>
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;

  /**
   * <p>The result of the field-level encryption profile request. </p>
   */
  ETag?: string;
}

export namespace UpdateFieldLevelEncryptionProfileResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFieldLevelEncryptionProfileResult): any => ({
    ...obj,
  });
}

export interface UpdateFunctionRequest {
  /**
   * <p>The name of the function that you are updating.</p>
   */
  Name: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the function that you are updating, which
   * 			you can get using <code>DescribeFunction</code>.</p>
   */
  IfMatch: string | undefined;

  /**
   * <p>Configuration information about the function.</p>
   */
  FunctionConfig: FunctionConfig | undefined;

  /**
   * <p>The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function
   * 			code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  FunctionCode: Uint8Array | undefined;
}

export namespace UpdateFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFunctionRequest): any => ({
    ...obj,
    ...(obj.FunctionCode && { FunctionCode: SENSITIVE_STRING }),
  });
}

export interface UpdateFunctionResult {
  /**
   * <p>Contains configuration information and metadata about a CloudFront function.</p>
   */
  FunctionSummary?: FunctionSummary;

  /**
   * <p>The version identifier for the current version of the CloudFront function.</p>
   */
  ETag?: string;
}

export namespace UpdateFunctionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFunctionResult): any => ({
    ...obj,
  });
}

export interface UpdateKeyGroupRequest {
  /**
   * <p>The key group configuration.</p>
   */
  KeyGroupConfig: KeyGroupConfig | undefined;

  /**
   * <p>The identifier of the key group that you are updating.</p>
   */
  Id: string | undefined;

  /**
   * <p>The version of the key group that you are updating. The version is the key group’s
   * 			<code>ETag</code> value.</p>
   */
  IfMatch?: string;
}

export namespace UpdateKeyGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateKeyGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateKeyGroupResult {
  /**
   * <p>The key group that was just updated.</p>
   */
  KeyGroup?: KeyGroup;

  /**
   * <p>The identifier for this version of the key group.</p>
   */
  ETag?: string;
}

export namespace UpdateKeyGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateKeyGroupResult): any => ({
    ...obj,
  });
}

export interface UpdateOriginRequestPolicyRequest {
  /**
   * <p>An origin request policy configuration.</p>
   */
  OriginRequestPolicyConfig: OriginRequestPolicyConfig | undefined;

  /**
   * <p>The unique identifier for the origin request policy that you are updating. The identifier is
   * 			returned in a cache behavior’s <code>OriginRequestPolicyId</code> field in the response
   * 			to <code>GetDistributionConfig</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The version of the origin request policy that you are updating. The version is returned in
   * 			the origin request policy’s <code>ETag</code> field in the response to
   * 			<code>GetOriginRequestPolicyConfig</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdateOriginRequestPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOriginRequestPolicyRequest): any => ({
    ...obj,
  });
}

export interface UpdateOriginRequestPolicyResult {
  /**
   * <p>An origin request policy.</p>
   */
  OriginRequestPolicy?: OriginRequestPolicy;

  /**
   * <p>The current version of the origin request policy.</p>
   */
  ETag?: string;
}

export namespace UpdateOriginRequestPolicyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOriginRequestPolicyResult): any => ({
    ...obj,
  });
}

export interface UpdatePublicKeyRequest {
  /**
   * <p>A public key configuration.</p>
   */
  PublicKeyConfig: PublicKeyConfig | undefined;

  /**
   * <p>The identifier of the public key that you are updating.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the public key to update.
   * 			For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdatePublicKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePublicKeyRequest): any => ({
    ...obj,
  });
}

export interface UpdatePublicKeyResult {
  /**
   * <p>The public key.</p>
   */
  PublicKey?: PublicKey;

  /**
   * <p>The identifier of the current version of the public key.</p>
   */
  ETag?: string;
}

export namespace UpdatePublicKeyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePublicKeyResult): any => ({
    ...obj,
  });
}

export interface UpdateRealtimeLogConfigRequest {
  /**
   * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time
   * 			log data.</p>
   */
  EndPoints?: EndPoint[];

  /**
   * <p>A list of fields to include in each real-time log record.</p>
   * 		       <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Fields?: string[];

  /**
   * <p>The name for this real-time log configuration.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for this real-time log configuration.</p>
   */
  ARN?: string;

  /**
   * <p>The sampling rate for this real-time log configuration. The sampling rate determines the
   * 			percentage of viewer requests that are represented in the real-time log data. You must
   * 			provide an integer between 1 and 100, inclusive.</p>
   */
  SamplingRate?: number;
}

export namespace UpdateRealtimeLogConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRealtimeLogConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateRealtimeLogConfigResult {
  /**
   * <p>A real-time log configuration.</p>
   */
  RealtimeLogConfig?: RealtimeLogConfig;
}

export namespace UpdateRealtimeLogConfigResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRealtimeLogConfigResult): any => ({
    ...obj,
  });
}

export interface UpdateResponseHeadersPolicyRequest {
  /**
   * <p>A response headers policy configuration.</p>
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig | undefined;

  /**
   * <p>The identifier for the response headers policy that you are updating.</p>
   */
  Id: string | undefined;

  /**
   * <p>The version of the response headers policy that you are updating.</p>
   * 		       <p>The version is returned in the cache policy’s <code>ETag</code> field in the response
   * 			to <code>GetResponseHeadersPolicyConfig</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdateResponseHeadersPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResponseHeadersPolicyRequest): any => ({
    ...obj,
  });
}

export interface UpdateResponseHeadersPolicyResult {
  /**
   * <p>A response headers policy.</p>
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy;

  /**
   * <p>The current version of the response headers policy.</p>
   */
  ETag?: string;
}

export namespace UpdateResponseHeadersPolicyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResponseHeadersPolicyResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to update a streaming distribution.</p>
 */
export interface UpdateStreamingDistributionRequest {
  /**
   * <p>The streaming distribution's configuration information.</p>
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;

  /**
   * <p>The streaming distribution's id.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			streaming distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdateStreamingDistributionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStreamingDistributionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface UpdateStreamingDistributionResult {
  /**
   * <p>The streaming distribution's information.</p>
   */
  StreamingDistribution?: StreamingDistribution;

  /**
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace UpdateStreamingDistributionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStreamingDistributionResult): any => ({
    ...obj,
  });
}
