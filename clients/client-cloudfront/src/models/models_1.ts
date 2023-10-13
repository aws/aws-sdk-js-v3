// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CloudFrontServiceException as __BaseException } from "./CloudFrontServiceException";
import {
  ActiveTrustedSigners,
  Aliases,
  AliasICPRecordal,
  CacheBehaviors,
  CachePolicy,
  CachePolicyConfig,
  CachePolicyList,
  CachePolicyType,
  CloudFrontOriginAccessIdentity,
  CloudFrontOriginAccessIdentityConfig,
  ContentTypeProfileConfig,
  ContinuousDeploymentPolicy,
  ContinuousDeploymentPolicyConfig,
  CustomErrorResponses,
  DefaultCacheBehavior,
  Distribution,
  DistributionConfig,
  DistributionConfigFilterSensitiveLog,
  DistributionFilterSensitiveLog,
  EncryptionEntities,
  EndPoint,
  FieldLevelEncryption,
  FieldLevelEncryptionConfig,
  FieldLevelEncryptionProfile,
  FieldLevelEncryptionProfileConfig,
  FunctionConfig,
  FunctionStage,
  FunctionSummary,
  HttpVersion,
  Invalidation,
  KeyGroup,
  KeyGroupConfig,
  MonitoringSubscription,
  OriginAccessControl,
  OriginAccessControlConfig,
  OriginAccessControlOriginTypes,
  OriginAccessControlSigningBehaviors,
  OriginAccessControlSigningProtocols,
  OriginGroups,
  OriginRequestPolicy,
  OriginRequestPolicyConfig,
  Origins,
  PriceClass,
  PublicKey,
  PublicKeyConfig,
  QueryArgProfileConfig,
  RealtimeLogConfig,
  ResponseHeadersPolicy,
  ResponseHeadersPolicyConfig,
  Restrictions,
  Tags,
  TrustedSigners,
  ViewerCertificate,
} from "./models_0";

/**
 * @public
 */
export interface CreateResponseHeadersPolicyResult {
  /**
   * @public
   * <p>Contains a response headers policy.</p>
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy;

  /**
   * @public
   * <p>The URL of the response headers policy.</p>
   */
  Location?: string;

  /**
   * @public
   * <p>The version identifier for the current version of the response headers policy.</p>
   */
  ETag?: string;
}

/**
 * @public
 * <p>A response headers policy with this name already exists. You must provide a unique
 * 			name. To modify an existing response headers policy, use
 * 				<code>UpdateResponseHeadersPolicy</code>.</p>
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
 * @public
 * <p>The length of the <code>Content-Security-Policy</code> header value in the response
 * 			headers policy exceeds the maximum.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
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
 * @public
 * <p>The number of custom headers in the response headers policy exceeds the
 * 			maximum.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
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
 * @public
 * <p>The number of headers in <code>RemoveHeadersConfig</code> in the response headers
 * 			policy exceeds the maximum.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class TooManyRemoveHeadersInResponseHeadersPolicy extends __BaseException {
  readonly name: "TooManyRemoveHeadersInResponseHeadersPolicy" = "TooManyRemoveHeadersInResponseHeadersPolicy";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRemoveHeadersInResponseHeadersPolicy, __BaseException>) {
    super({
      name: "TooManyRemoveHeadersInResponseHeadersPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRemoveHeadersInResponseHeadersPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>You have reached the maximum number of response headers policies for this
 * 			Amazon Web Services account.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
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
 * @public
 * <p>A complex type that controls whether access logs are written for this streaming
 * 			distribution.</p>
 */
export interface StreamingLoggingConfig {
  /**
   * @public
   * <p>Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't
   * 			want to enable logging when you create a streaming distribution or if you want to
   * 			disable logging for an existing streaming distribution, specify <code>false</code> for
   * 				<code>Enabled</code>, and specify <code>empty Bucket</code> and <code>Prefix</code>
   * 			elements. If you specify <code>false</code> for <code>Enabled</code> but you specify
   * 			values for <code>Bucket</code> and <code>Prefix</code>, the values are automatically
   * 			deleted.</p>
   */
  Enabled: boolean | undefined;

  /**
   * @public
   * <p>The Amazon S3 bucket to store the access logs in, for example,
   * 				<code>myawslogbucket.s3.amazonaws.com</code>.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>An optional string that you want CloudFront to prefix to the access log filenames for this
   * 			streaming distribution, for example, <code>myprefix/</code>. If you want to enable
   * 			logging, but you don't want to specify a prefix, you still must include an empty
   * 				<code>Prefix</code> element in the <code>Logging</code> element.</p>
   */
  Prefix: string | undefined;
}

/**
 * @public
 * <p>A complex type that contains information about the Amazon S3 bucket from which you want
 * 			CloudFront to get your media files for distribution.</p>
 */
export interface S3Origin {
  /**
   * @public
   * <p>The DNS name of the Amazon S3 origin.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The CloudFront origin access identity to associate with the distribution. Use an origin
   * 			access identity to configure the distribution so that end users can only access objects
   * 			in an Amazon S3 bucket through CloudFront.</p>
   *          <p>If you want end users to be able to access objects using either the CloudFront URL or the
   * 			Amazon S3 URL, specify an empty <code>OriginAccessIdentity</code> element.</p>
   *          <p>To delete the origin access identity from an existing distribution, update the
   * 			distribution configuration and include an empty <code>OriginAccessIdentity</code>
   * 			element.</p>
   *          <p>To replace the origin access identity, update the distribution configuration and
   * 			specify the new origin access identity.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html">Using an Origin Access Identity to Restrict Access to Your Amazon S3 Content</a> in
   * 			the <i> Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginAccessIdentity: string | undefined;
}

/**
 * @public
 * <p>The RTMP distribution's configuration information.</p>
 */
export interface StreamingDistributionConfig {
  /**
   * @public
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be
   * 			replayed.</p>
   *          <p>If the value of <code>CallerReference</code> is new (regardless of the content of the
   * 				<code>StreamingDistributionConfig</code> object), CloudFront creates a new
   * 			distribution.</p>
   *          <p>If <code>CallerReference</code> is a value that you already sent in a previous request
   * 			to create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code>
   * 			error.</p>
   */
  CallerReference: string | undefined;

  /**
   * @public
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want
   * 			CloudFront to get your media files for distribution.</p>
   */
  S3Origin: S3Origin | undefined;

  /**
   * @public
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if
   * 			any, for this streaming distribution.</p>
   */
  Aliases?: Aliases;

  /**
   * @public
   * <p>Any comments you want to include about the streaming distribution.</p>
   */
  Comment: string | undefined;

  /**
   * @public
   * <p>A complex type that controls whether access logs are written for the streaming
   * 			distribution.</p>
   */
  Logging?: StreamingLoggingConfig;

  /**
   * @public
   * <p>A complex type that specifies any Amazon Web Services accounts that you want to permit to create
   * 			signed URLs for private content. If you want the distribution to use signed URLs,
   * 			include this element; if you want the distribution to use public URLs, remove this
   * 			element. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private
   * 				Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  TrustedSigners: TrustedSigners | undefined;

  /**
   * @public
   * <p>A complex type that contains information about price class for this streaming
   * 			distribution.</p>
   */
  PriceClass?: PriceClass;

  /**
   * @public
   * <p>Whether the streaming distribution is enabled to accept user requests for
   * 			content.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * <p>The request to create a new streaming distribution.</p>
 */
export interface CreateStreamingDistributionRequest {
  /**
   * @public
   * <p>The streaming distribution's configuration information.</p>
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;
}

/**
 * @public
 * <p>A streaming distribution tells CloudFront where you want RTMP content to be delivered from,
 * 			and the details about how to track and manage content delivery.</p>
 */
export interface StreamingDistribution {
  /**
   * @public
   * <p>The identifier for the RTMP distribution. For example:
   * 			<code>EGTXBD79EXAMPLE</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) for the distribution. For example:
   * 				<code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where
   * 				<code>123456789012</code> is your Amazon Web Services account ID.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>The current status of the RTMP distribution. When the status is <code>Deployed</code>,
   * 			the distribution's information is propagated to all CloudFront edge locations.</p>
   */
  Status: string | undefined;

  /**
   * @public
   * <p>The date and time that the distribution was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The domain name that corresponds to the streaming distribution, for example,
   * 				<code>s5c39gqb8ow64r.cloudfront.net</code>.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>A complex type that lists the Amazon Web Services accounts, if any, that you included in the
   * 				<code>TrustedSigners</code> complex type for this distribution. These are the
   * 			accounts that you want to allow to create signed URLs for private content.</p>
   *          <p>The <code>Signer</code> complex type lists the Amazon Web Services account number of the trusted
   * 			signer or <code>self</code> if the signer is the Amazon Web Services account that created the
   * 			distribution. The <code>Signer</code> element also includes the IDs of any active CloudFront
   * 			key pairs that are associated with the trusted signer's Amazon Web Services account. If no
   * 				<code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can't
   * 			create signed URLs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private
   * 				Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  ActiveTrustedSigners: ActiveTrustedSigners | undefined;

  /**
   * @public
   * <p>The current configuration information for the RTMP distribution.</p>
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateStreamingDistributionResult {
  /**
   * @public
   * <p>The streaming distribution's information.</p>
   */
  StreamingDistribution?: StreamingDistribution;

  /**
   * @public
   * <p>The fully qualified URI of the new streaming distribution resource just
   * 			created.</p>
   */
  Location?: string;

  /**
   * @public
   * <p>The current version of the streaming distribution created.</p>
   */
  ETag?: string;
}

/**
 * @public
 * <p>The caller reference you attempted to create the streaming distribution with is
 * 			associated with another distribution</p>
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
 * @public
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
 * @public
 * <p>Processing your request would cause you to exceed the maximum number of streaming
 * 			distributions allowed.</p>
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
 * @public
 * <p>A streaming distribution Configuration and a list of tags to be associated with the
 * 			streaming distribution.</p>
 */
export interface StreamingDistributionConfigWithTags {
  /**
   * @public
   * <p>A streaming distribution Configuration.</p>
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;

  /**
   * @public
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: Tags | undefined;
}

/**
 * @public
 * <p>The request to create a new streaming distribution with tags.</p>
 */
export interface CreateStreamingDistributionWithTagsRequest {
  /**
   * @public
   * <p>The streaming distribution's configuration information.</p>
   */
  StreamingDistributionConfigWithTags: StreamingDistributionConfigWithTags | undefined;
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateStreamingDistributionWithTagsResult {
  /**
   * @public
   * <p>The streaming distribution's information.</p>
   */
  StreamingDistribution?: StreamingDistribution;

  /**
   * @public
   * <p>The fully qualified URI of the new streaming distribution resource just
   * 			created.</p>
   */
  Location?: string;

  /**
   * @public
   * <p>The current version of the distribution created.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface DeleteCachePolicyRequest {
  /**
   * @public
   * <p>The unique identifier for the cache policy that you are deleting. To get the
   * 			identifier, you can use <code>ListCachePolicies</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The version of the cache policy that you are deleting. The version is the cache
   * 			policy's <code>ETag</code> value, which you can get using
   * 			<code>ListCachePolicies</code>, <code>GetCachePolicy</code>, or
   * 				<code>GetCachePolicyConfig</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
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
 * @public
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
 * @public
 * <p>Deletes a origin access identity.</p>
 */
export interface DeleteCloudFrontOriginAccessIdentityRequest {
  /**
   * @public
   * <p>The origin access identity's ID.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The value of the <code>ETag</code> header you received from a previous
   * 				<code>GET</code> or <code>PUT</code> request. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
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
 * @public
 */
export interface DeleteContinuousDeploymentPolicyRequest {
  /**
   * @public
   * <p>The identifier of the continuous deployment policy that you are deleting.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The current version (<code>ETag</code> value) of the continuous deployment policy that
   * 			you are deleting.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 * <p>This action deletes a web distribution. To delete a web distribution using the CloudFront
 * 			API, perform the following steps.</p>
 *          <p>
 *             <b>To delete a web distribution using the CloudFront API:</b>
 *          </p>
 *          <ol>
 *             <li>
 *                <p>Disable the web distribution</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>GET Distribution Config</code> request to get the current
 * 					configuration and the <code>Etag</code> header for the distribution.</p>
 *             </li>
 *             <li>
 *                <p>Update the XML document that was returned in the response to your <code>GET
 * 						Distribution Config</code> request to change the value of
 * 						<code>Enabled</code> to <code>false</code>.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>PUT Distribution Config</code> request to update the
 * 					configuration for your distribution. In the request body, include the XML
 * 					document that you updated in Step 3. Set the value of the HTTP
 * 						<code>If-Match</code> header to the value of the <code>ETag</code> header
 * 					that CloudFront returned when you submitted the <code>GET Distribution Config</code>
 * 					request in Step 2.</p>
 *             </li>
 *             <li>
 *                <p>Review the response to the <code>PUT Distribution Config</code> request to
 * 					confirm that the distribution was successfully disabled.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>GET Distribution</code> request to confirm that your changes
 * 					have propagated. When propagation is complete, the value of <code>Status</code>
 * 					is <code>Deployed</code>.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP
 * 						<code>If-Match</code> header to the value of the <code>ETag</code> header
 * 					that CloudFront returned when you submitted the <code>GET Distribution Config</code>
 * 					request in Step 6.</p>
 *             </li>
 *             <li>
 *                <p>Review the response to your <code>DELETE Distribution</code> request to
 * 					confirm that the distribution was successfully deleted.</p>
 *             </li>
 *          </ol>
 *          <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a
 * 				Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface DeleteDistributionRequest {
  /**
   * @public
   * <p>The distribution ID.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The value of the <code>ETag</code> header that you received when you disabled the
   * 			distribution. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 * <p>The specified CloudFront distribution is not disabled. You must disable the distribution
 * 			before you can delete it.</p>
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
 * @public
 */
export interface DeleteFieldLevelEncryptionConfigRequest {
  /**
   * @public
   * <p>The ID of the configuration you want to delete from CloudFront.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			configuration identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
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
 * @public
 */
export interface DeleteFieldLevelEncryptionProfileRequest {
  /**
   * @public
   * <p>Request the ID of the profile you want to delete from CloudFront.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			profile to delete. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
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
 * @public
 */
export interface DeleteFunctionRequest {
  /**
   * @public
   * <p>The name of the function that you are deleting.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The current version (<code>ETag</code> value) of the function that you are deleting,
   * 			which you can get using <code>DescribeFunction</code>.</p>
   */
  IfMatch: string | undefined;
}

/**
 * @public
 * <p>Cannot delete the function because it's attached to one or more cache
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
 * @public
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
 * @public
 */
export interface DeleteKeyGroupRequest {
  /**
   * @public
   * <p>The identifier of the key group that you are deleting. To get the identifier, use
   * 				<code>ListKeyGroups</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The version of the key group that you are deleting. The version is the key group's
   * 				<code>ETag</code> value. To get the <code>ETag</code>, use <code>GetKeyGroup</code>
   * 			or <code>GetKeyGroupConfig</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
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
 * @public
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
 * @public
 */
export interface DeleteMonitoringSubscriptionRequest {
  /**
   * @public
   * <p>The ID of the distribution that you are disabling metrics for.</p>
   */
  DistributionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitoringSubscriptionResult {}

/**
 * @public
 * <p>A monitoring subscription does not exist for the specified distribution.</p>
 */
export class NoSuchMonitoringSubscription extends __BaseException {
  readonly name: "NoSuchMonitoringSubscription" = "NoSuchMonitoringSubscription";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchMonitoringSubscription, __BaseException>) {
    super({
      name: "NoSuchMonitoringSubscription",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchMonitoringSubscription.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteOriginAccessControlRequest {
  /**
   * @public
   * <p>The unique identifier of the origin access control that you are deleting.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The current version (<code>ETag</code> value) of the origin access control that you
   * 			are deleting.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 * <p>The origin access control does not exist.</p>
 */
export class NoSuchOriginAccessControl extends __BaseException {
  readonly name: "NoSuchOriginAccessControl" = "NoSuchOriginAccessControl";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchOriginAccessControl, __BaseException>) {
    super({
      name: "NoSuchOriginAccessControl",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchOriginAccessControl.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Cannot delete the origin access control because it's in use by one or more
 * 			distributions.</p>
 */
export class OriginAccessControlInUse extends __BaseException {
  readonly name: "OriginAccessControlInUse" = "OriginAccessControlInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OriginAccessControlInUse, __BaseException>) {
    super({
      name: "OriginAccessControlInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OriginAccessControlInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteOriginRequestPolicyRequest {
  /**
   * @public
   * <p>The unique identifier for the origin request policy that you are deleting. To get the
   * 			identifier, you can use <code>ListOriginRequestPolicies</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The version of the origin request policy that you are deleting. The version is the
   * 			origin request policy's <code>ETag</code> value, which you can get using
   * 				<code>ListOriginRequestPolicies</code>, <code>GetOriginRequestPolicy</code>, or
   * 				<code>GetOriginRequestPolicyConfig</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
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
 * @public
 */
export interface DeletePublicKeyRequest {
  /**
   * @public
   * <p>The ID of the public key you want to remove from CloudFront.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The value of the <code>ETag</code> header that you received when retrieving the public
   * 			key identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 * <p>The specified public key is in use.</p>
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
 * @public
 */
export interface DeleteRealtimeLogConfigRequest {
  /**
   * @public
   * <p>The name of the real-time log configuration to delete.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration to delete.</p>
   */
  ARN?: string;
}

/**
 * @public
 * <p>Cannot delete the real-time log configuration because it is attached to one or more
 * 			cache behaviors.</p>
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
 * @public
 */
export interface DeleteResponseHeadersPolicyRequest {
  /**
   * @public
   * <p>The identifier for the response headers policy that you are deleting.</p>
   *          <p>To get the identifier, you can use <code>ListResponseHeadersPolicies</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The version of the response headers policy that you are deleting.</p>
   *          <p>The version is the response headers policy's <code>ETag</code> value, which you can
   * 			get using <code>ListResponseHeadersPolicies</code>,
   * 				<code>GetResponseHeadersPolicy</code>, or
   * 				<code>GetResponseHeadersPolicyConfig</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 * <p>Cannot delete the response headers policy because it is attached to one or more cache
 * 			behaviors in a CloudFront distribution.</p>
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
 * @public
 * <p>The request to delete a streaming distribution.</p>
 */
export interface DeleteStreamingDistributionRequest {
  /**
   * @public
   * <p>The distribution ID.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The value of the <code>ETag</code> header that you received when you disabled the
   * 			streaming distribution. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
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
 * @public
 * <p>The specified CloudFront distribution is not disabled. You must disable the distribution
 * 			before you can delete it.</p>
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
 * @public
 */
export interface DescribeFunctionRequest {
  /**
   * @public
   * <p>The name of the function that you are getting information about.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   */
  Stage?: FunctionStage;
}

/**
 * @public
 */
export interface DescribeFunctionResult {
  /**
   * @public
   * <p>Contains configuration information and metadata about a CloudFront function.</p>
   */
  FunctionSummary?: FunctionSummary;

  /**
   * @public
   * <p>The version identifier for the current version of the CloudFront function.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetCachePolicyRequest {
  /**
   * @public
   * <p>The unique identifier for the cache policy. If the cache policy is attached to a
   * 			distribution's cache behavior, you can get the policy's identifier using
   * 				<code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy
   * 			is not attached to a cache behavior, you can get the identifier using
   * 				<code>ListCachePolicies</code>.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetCachePolicyResult {
  /**
   * @public
   * <p>The cache policy.</p>
   */
  CachePolicy?: CachePolicy;

  /**
   * @public
   * <p>The current version of the cache policy.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetCachePolicyConfigRequest {
  /**
   * @public
   * <p>The unique identifier for the cache policy. If the cache policy is attached to a
   * 			distribution's cache behavior, you can get the policy's identifier using
   * 				<code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy
   * 			is not attached to a cache behavior, you can get the identifier using
   * 				<code>ListCachePolicies</code>.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetCachePolicyConfigResult {
  /**
   * @public
   * <p>The cache policy configuration.</p>
   */
  CachePolicyConfig?: CachePolicyConfig;

  /**
   * @public
   * <p>The current version of the cache policy.</p>
   */
  ETag?: string;
}

/**
 * @public
 * <p>The request to get an origin access identity's information.</p>
 */
export interface GetCloudFrontOriginAccessIdentityRequest {
  /**
   * @public
   * <p>The identity's ID.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetCloudFrontOriginAccessIdentityResult {
  /**
   * @public
   * <p>The origin access identity's information.</p>
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;

  /**
   * @public
   * <p>The current version of the origin access identity's information. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * @public
 * <p>The origin access identity's configuration information. For more information, see
 * 				<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CloudFrontOriginAccessIdentityConfig.html">CloudFrontOriginAccessIdentityConfig</a>.</p>
 */
export interface GetCloudFrontOriginAccessIdentityConfigRequest {
  /**
   * @public
   * <p>The identity's ID.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetCloudFrontOriginAccessIdentityConfigResult {
  /**
   * @public
   * <p>The origin access identity's configuration information.</p>
   */
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;

  /**
   * @public
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetContinuousDeploymentPolicyRequest {
  /**
   * @public
   * <p>The identifier of the continuous deployment policy that you are getting.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetContinuousDeploymentPolicyResult {
  /**
   * @public
   * <p>A continuous deployment policy.</p>
   */
  ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy;

  /**
   * @public
   * <p>The version identifier for the current version of the continuous deployment
   * 			policy.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetContinuousDeploymentPolicyConfigRequest {
  /**
   * @public
   * <p>The identifier of the continuous deployment policy whose configuration you are
   * 			getting.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetContinuousDeploymentPolicyConfigResult {
  /**
   * @public
   * <p>Contains the configuration for a continuous deployment policy.</p>
   */
  ContinuousDeploymentPolicyConfig?: ContinuousDeploymentPolicyConfig;

  /**
   * @public
   * <p>The version identifier for the current version of the continuous deployment
   * 			policy.</p>
   */
  ETag?: string;
}

/**
 * @public
 * <p>The request to get a distribution's information.</p>
 */
export interface GetDistributionRequest {
  /**
   * @public
   * <p>The distribution's ID. If the ID is empty, an empty distribution configuration is
   * 			returned.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetDistributionResult {
  /**
   * @public
   * <p>The distribution's information.</p>
   */
  Distribution?: Distribution;

  /**
   * @public
   * <p>The current version of the distribution's information. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * @public
 * <p>The request to get a distribution configuration.</p>
 */
export interface GetDistributionConfigRequest {
  /**
   * @public
   * <p>The distribution's ID. If the ID is empty, an empty distribution configuration is
   * 			returned.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetDistributionConfigResult {
  /**
   * @public
   * <p>The distribution's configuration information.</p>
   */
  DistributionConfig?: DistributionConfig;

  /**
   * @public
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionRequest {
  /**
   * @public
   * <p>Request the ID for the field-level encryption configuration information.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionResult {
  /**
   * @public
   * <p>Return the field-level encryption configuration information.</p>
   */
  FieldLevelEncryption?: FieldLevelEncryption;

  /**
   * @public
   * <p>The current version of the field level encryption configuration. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionConfigRequest {
  /**
   * @public
   * <p>Request the ID for the field-level encryption configuration information.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionConfigResult {
  /**
   * @public
   * <p>Return the field-level encryption configuration information.</p>
   */
  FieldLevelEncryptionConfig?: FieldLevelEncryptionConfig;

  /**
   * @public
   * <p>The current version of the field level encryption configuration. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionProfileRequest {
  /**
   * @public
   * <p>Get the ID for the field-level encryption profile information.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionProfileResult {
  /**
   * @public
   * <p>Return the field-level encryption profile information.</p>
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;

  /**
   * @public
   * <p>The current version of the field level encryption profile. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionProfileConfigRequest {
  /**
   * @public
   * <p>Get the ID for the field-level encryption profile configuration information.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetFieldLevelEncryptionProfileConfigResult {
  /**
   * @public
   * <p>Return the field-level encryption profile configuration information.</p>
   */
  FieldLevelEncryptionProfileConfig?: FieldLevelEncryptionProfileConfig;

  /**
   * @public
   * <p>The current version of the field-level encryption profile configuration result. For
   * 			example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetFunctionRequest {
  /**
   * @public
   * <p>The name of the function whose code you are getting.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   */
  Stage?: FunctionStage;
}

/**
 * @public
 */
export interface GetFunctionResult {
  /**
   * @public
   * <p>The function code of a CloudFront function.</p>
   */
  FunctionCode?: Uint8Array;

  /**
   * @public
   * <p>The version identifier for the current version of the CloudFront function.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>The content type (media type) of the response.</p>
   */
  ContentType?: string;
}

/**
 * @public
 * <p>The request to get an invalidation's information.</p>
 */
export interface GetInvalidationRequest {
  /**
   * @public
   * <p>The distribution's ID.</p>
   */
  DistributionId: string | undefined;

  /**
   * @public
   * <p>The identifier for the invalidation request, for example,
   * 			<code>IDFDVBD632BHDS5</code>.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetInvalidationResult {
  /**
   * @public
   * <p>The invalidation's information. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/InvalidationDatatype.html">Invalidation
   * 				Complex Type</a>.</p>
   */
  Invalidation?: Invalidation;
}

/**
 * @public
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
 * @public
 */
export interface GetKeyGroupRequest {
  /**
   * @public
   * <p>The identifier of the key group that you are getting. To get the identifier, use
   * 				<code>ListKeyGroups</code>.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetKeyGroupResult {
  /**
   * @public
   * <p>The key group.</p>
   */
  KeyGroup?: KeyGroup;

  /**
   * @public
   * <p>The identifier for this version of the key group.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetKeyGroupConfigRequest {
  /**
   * @public
   * <p>The identifier of the key group whose configuration you are getting. To get the
   * 			identifier, use <code>ListKeyGroups</code>.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetKeyGroupConfigResult {
  /**
   * @public
   * <p>The key group configuration.</p>
   */
  KeyGroupConfig?: KeyGroupConfig;

  /**
   * @public
   * <p>The identifier for this version of the key group.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetMonitoringSubscriptionRequest {
  /**
   * @public
   * <p>The ID of the distribution that you are getting metrics information for.</p>
   */
  DistributionId: string | undefined;
}

/**
 * @public
 */
export interface GetMonitoringSubscriptionResult {
  /**
   * @public
   * <p>A monitoring subscription. This structure contains information about whether
   * 			additional CloudWatch metrics are enabled for a given CloudFront distribution.</p>
   */
  MonitoringSubscription?: MonitoringSubscription;
}

/**
 * @public
 */
export interface GetOriginAccessControlRequest {
  /**
   * @public
   * <p>The unique identifier of the origin access control.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlResult {
  /**
   * @public
   * <p>Contains an origin access control, including its unique identifier.</p>
   */
  OriginAccessControl?: OriginAccessControl;

  /**
   * @public
   * <p>The version identifier for the current version of the origin access control.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetOriginAccessControlConfigRequest {
  /**
   * @public
   * <p>The unique identifier of the origin access control.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlConfigResult {
  /**
   * @public
   * <p>Contains an origin access control configuration.</p>
   */
  OriginAccessControlConfig?: OriginAccessControlConfig;

  /**
   * @public
   * <p>The version identifier for the current version of the origin access control.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyRequest {
  /**
   * @public
   * <p>The unique identifier for the origin request policy. If the origin request policy is
   * 			attached to a distribution's cache behavior, you can get the policy's identifier using
   * 				<code>ListDistributions</code> or <code>GetDistribution</code>. If the origin
   * 			request policy is not attached to a cache behavior, you can get the identifier using
   * 				<code>ListOriginRequestPolicies</code>.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyResult {
  /**
   * @public
   * <p>The origin request policy.</p>
   */
  OriginRequestPolicy?: OriginRequestPolicy;

  /**
   * @public
   * <p>The current version of the origin request policy.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyConfigRequest {
  /**
   * @public
   * <p>The unique identifier for the origin request policy. If the origin request policy is
   * 			attached to a distribution's cache behavior, you can get the policy's identifier using
   * 				<code>ListDistributions</code> or <code>GetDistribution</code>. If the origin
   * 			request policy is not attached to a cache behavior, you can get the identifier using
   * 				<code>ListOriginRequestPolicies</code>.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyConfigResult {
  /**
   * @public
   * <p>The origin request policy configuration.</p>
   */
  OriginRequestPolicyConfig?: OriginRequestPolicyConfig;

  /**
   * @public
   * <p>The current version of the origin request policy.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetPublicKeyRequest {
  /**
   * @public
   * <p>The identifier of the public key you are getting.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyResult {
  /**
   * @public
   * <p>The public key.</p>
   */
  PublicKey?: PublicKey;

  /**
   * @public
   * <p>The identifier for this version of the public key.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetPublicKeyConfigRequest {
  /**
   * @public
   * <p>The identifier of the public key whose configuration you are getting.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyConfigResult {
  /**
   * @public
   * <p>A public key configuration.</p>
   */
  PublicKeyConfig?: PublicKeyConfig;

  /**
   * @public
   * <p>The identifier for this version of the public key configuration.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetRealtimeLogConfigRequest {
  /**
   * @public
   * <p>The name of the real-time log configuration to get.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration to get.</p>
   */
  ARN?: string;
}

/**
 * @public
 */
export interface GetRealtimeLogConfigResult {
  /**
   * @public
   * <p>A real-time log configuration.</p>
   */
  RealtimeLogConfig?: RealtimeLogConfig;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyRequest {
  /**
   * @public
   * <p>The identifier for the response headers policy.</p>
   *          <p>If the response headers policy is attached to a distribution's cache behavior, you can
   * 			get the policy's identifier using <code>ListDistributions</code> or
   * 				<code>GetDistribution</code>. If the response headers policy is not attached to a
   * 			cache behavior, you can get the identifier using
   * 				<code>ListResponseHeadersPolicies</code>.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyResult {
  /**
   * @public
   * <p>Contains a response headers policy.</p>
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy;

  /**
   * @public
   * <p>The version identifier for the current version of the response headers policy.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyConfigRequest {
  /**
   * @public
   * <p>The identifier for the response headers policy.</p>
   *          <p>If the response headers policy is attached to a distribution's cache behavior, you can
   * 			get the policy's identifier using <code>ListDistributions</code> or
   * 				<code>GetDistribution</code>. If the response headers policy is not attached to a
   * 			cache behavior, you can get the identifier using
   * 				<code>ListResponseHeadersPolicies</code>.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyConfigResult {
  /**
   * @public
   * <p>Contains a response headers policy.</p>
   */
  ResponseHeadersPolicyConfig?: ResponseHeadersPolicyConfig;

  /**
   * @public
   * <p>The version identifier for the current version of the response headers policy.</p>
   */
  ETag?: string;
}

/**
 * @public
 * <p>The request to get a streaming distribution's information.</p>
 */
export interface GetStreamingDistributionRequest {
  /**
   * @public
   * <p>The streaming distribution's ID.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetStreamingDistributionResult {
  /**
   * @public
   * <p>The streaming distribution's information.</p>
   */
  StreamingDistribution?: StreamingDistribution;

  /**
   * @public
   * <p>The current version of the streaming distribution's information. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * @public
 * <p>To request to get a streaming distribution configuration.</p>
 */
export interface GetStreamingDistributionConfigRequest {
  /**
   * @public
   * <p>The streaming distribution's ID.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetStreamingDistributionConfigResult {
  /**
   * @public
   * <p>The streaming distribution's configuration information.</p>
   */
  StreamingDistributionConfig?: StreamingDistributionConfig;

  /**
   * @public
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.
   * 		</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface ListCachePoliciesRequest {
  /**
   * @public
   * <p>A filter to return only the specified kinds of cache policies. Valid values
   * 			are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>managed</code> – Returns only the managed policies created by
   * 					Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom</code> – Returns only the custom policies created in your
   * 					Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   */
  Type?: CachePolicyType;

  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			cache policies. The response includes cache policies in the list that occur after the
   * 			marker. To get the next page of the list, set this field's value to the value of
   * 				<code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of cache policies that you want in the response.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 */
export interface ListCachePoliciesResult {
  /**
   * @public
   * <p>A list of cache policies.</p>
   */
  CachePolicyList?: CachePolicyList;
}

/**
 * @public
 * <p>The request to list origin access identities.</p>
 */
export interface ListCloudFrontOriginAccessIdentitiesRequest {
  /**
   * @public
   * <p>Use this when paginating results to indicate where to begin in your list of origin
   * 			access identities. The results include identities in the list that occur after the
   * 			marker. To get the next page of results, set the <code>Marker</code> to the value of the
   * 				<code>NextMarker</code> from the current page's response (which is also the ID of
   * 			the last identity on that page).</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of origin access identities you want in the response body.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>Summary of the information about a CloudFront origin access identity.</p>
 */
export interface CloudFrontOriginAccessIdentitySummary {
  /**
   * @public
   * <p>The ID for the origin access identity. For example:
   * 			<code>E74FTE3AJFJ256A</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 canonical user ID for the origin access identity, which you use when giving
   * 			the origin access identity read permission to an object in Amazon S3.</p>
   */
  S3CanonicalUserId: string | undefined;

  /**
   * @public
   * <p>The comment for this origin access identity, as originally specified when
   * 			created.</p>
   */
  Comment: string | undefined;
}

/**
 * @public
 * <p>Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the
 * 					<code>/<i>CloudFront API
 * 				version</i>/origin-access-identity/cloudfront</code> resource. The response
 * 			includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more
 * 				<code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your
 * 			entire list of origin access identities is returned in one single page. If the list is
 * 			long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code>
 * 			parameters.</p>
 */
export interface CloudFrontOriginAccessIdentityList {
  /**
   * @public
   * <p>Use this when paginating results to indicate where to begin in your list of origin
   * 			access identities. The results include identities in the list that occur after the
   * 			marker. To get the next page of results, set the <code>Marker</code> to the value of the
   * 				<code>NextMarker</code> from the current page's response (which is also the ID of
   * 			the last identity on that page).</p>
   */
  Marker: string | undefined;

  /**
   * @public
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   * 			the value you can use for the <code>Marker</code> request parameter to continue listing
   * 			your origin access identities where they left off.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of origin access identities you want in the response body.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>A flag that indicates whether more origin access identities remain to be listed. If
   * 			your results were truncated, you can make a follow-up pagination request using the
   * 				<code>Marker</code> request parameter to retrieve more items in the list.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * @public
   * <p>The number of CloudFront origin access identities that were created by the current
   * 			Amazon Web Services account.</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>A complex type that contains one <code>CloudFrontOriginAccessIdentitySummary</code>
   * 			element for each origin access identity that was created by the current
   * 			Amazon Web Services account.</p>
   */
  Items?: CloudFrontOriginAccessIdentitySummary[];
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface ListCloudFrontOriginAccessIdentitiesResult {
  /**
   * @public
   * <p>The <code>CloudFrontOriginAccessIdentityList</code> type.</p>
   */
  CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList;
}

/**
 * @public
 */
export interface ListConflictingAliasesRequest {
  /**
   * @public
   * <p>The ID of a distribution in your account that has an attached SSL/TLS certificate that
   * 			includes the provided alias.</p>
   */
  DistributionId: string | undefined;

  /**
   * @public
   * <p>The alias (also called a CNAME) to search for conflicting aliases.</p>
   */
  Alias: string | undefined;

  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in the list of
   * 			conflicting aliases. The response includes conflicting aliases in the list that occur
   * 			after the marker. To get the next page of the list, set this field's value to the value
   * 			of <code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of conflicting aliases that you want in the response.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>An alias (also called a CNAME) and the CloudFront distribution and Amazon Web Services account ID that
 * 			it's associated with. The distribution and account IDs are partially hidden, which
 * 			allows you to identify the distributions and accounts that you own, but helps to protect
 * 			the information of ones that you don't own.</p>
 */
export interface ConflictingAlias {
  /**
   * @public
   * <p>An alias (also called a CNAME).</p>
   */
  Alias?: string;

  /**
   * @public
   * <p>The (partially hidden) ID of the CloudFront distribution associated with the alias.</p>
   */
  DistributionId?: string;

  /**
   * @public
   * <p>The (partially hidden) ID of the Amazon Web Services account that owns the distribution that's
   * 			associated with the alias.</p>
   */
  AccountId?: string;
}

/**
 * @public
 * <p>A list of aliases (also called CNAMEs) and the CloudFront distributions and Amazon Web Services accounts
 * 			that they are associated with. In the list, the distribution and account IDs are
 * 			partially hidden, which allows you to identify the distributions and accounts that you
 * 			own, but helps to protect the information of ones that you don't own.</p>
 */
export interface ConflictingAliasesList {
  /**
   * @public
   * <p>If there are more items in the list than are in this response, this element is
   * 			present. It contains the value that you should use in the <code>Marker</code> field of a
   * 			subsequent request to continue listing conflicting aliases where you left off.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of conflicting aliases requested.</p>
   */
  MaxItems?: number;

  /**
   * @public
   * <p>The number of conflicting aliases returned in the response.</p>
   */
  Quantity?: number;

  /**
   * @public
   * <p>Contains the conflicting aliases in the list.</p>
   */
  Items?: ConflictingAlias[];
}

/**
 * @public
 */
export interface ListConflictingAliasesResult {
  /**
   * @public
   * <p>A list of conflicting aliases.</p>
   */
  ConflictingAliasesList?: ConflictingAliasesList;
}

/**
 * @public
 */
export interface ListContinuousDeploymentPoliciesRequest {
  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			continuous deployment policies. The response includes policies in the list that occur
   * 			after the marker. To get the next page of the list, set this field's value to the value
   * 			of <code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of continuous deployment policies that you want returned in the
   * 			response.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>A summary of the information about your continuous deployment policies.</p>
 */
export interface ContinuousDeploymentPolicySummary {
  /**
   * @public
   * <p>The continuous deployment policy.</p>
   */
  ContinuousDeploymentPolicy: ContinuousDeploymentPolicy | undefined;
}

/**
 * @public
 * <p>Contains a list of continuous deployment policies.</p>
 */
export interface ContinuousDeploymentPolicyList {
  /**
   * @public
   * <p>Indicates the next page of continuous deployment policies. To get the next page of the
   * 			list, use this value in the <code>Marker</code> field of your request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of continuous deployment policies that were specified in your
   * 			request.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>The total number of continuous deployment policies in your Amazon Web Services account, regardless
   * 			of the <code>MaxItems</code> value.</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>A list of continuous deployment policy items.</p>
   */
  Items?: ContinuousDeploymentPolicySummary[];
}

/**
 * @public
 */
export interface ListContinuousDeploymentPoliciesResult {
  /**
   * @public
   * <p>A list of continuous deployment policies.</p>
   */
  ContinuousDeploymentPolicyList?: ContinuousDeploymentPolicyList;
}

/**
 * @public
 * <p>The request to list your distributions.</p>
 */
export interface ListDistributionsRequest {
  /**
   * @public
   * <p>Use this when paginating results to indicate where to begin in your list of
   * 			distributions. The results include distributions in the list that occur after the
   * 			marker. To get the next page of results, set the <code>Marker</code> to the value of the
   * 				<code>NextMarker</code> from the current page's response (which is also the ID of
   * 			the last distribution on that page).</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of distributions you want in the response body.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>A summary of the information about a CloudFront distribution.</p>
 */
export interface DistributionSummary {
  /**
   * @public
   * <p>The identifier for the distribution. For example: <code>EDFDVBD632BHDS5</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) for the distribution. For example:
   * 				<code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where
   * 				<code>123456789012</code> is your Amazon Web Services account ID.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>The current status of the distribution. When the status is <code>Deployed</code>, the
   * 			distribution's information is propagated to all CloudFront edge locations.</p>
   */
  Status: string | undefined;

  /**
   * @public
   * <p>The date and time the distribution was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The domain name that corresponds to the distribution, for example,
   * 				<code>d111111abcdef8.cloudfront.net</code>.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if
   * 			any, for this distribution.</p>
   */
  Aliases: Aliases | undefined;

  /**
   * @public
   * <p>A complex type that contains information about origins for this distribution.</p>
   */
  Origins: Origins | undefined;

  /**
   * @public
   * <p>A complex type that contains information about origin groups for this
   * 			distribution.</p>
   */
  OriginGroups?: OriginGroups;

  /**
   * @public
   * <p>A complex type that describes the default cache behavior if you don't specify a
   * 				<code>CacheBehavior</code> element or if files don't match any of the values of
   * 				<code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create
   * 			exactly one default cache behavior.</p>
   */
  DefaultCacheBehavior: DefaultCacheBehavior | undefined;

  /**
   * @public
   * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.</p>
   */
  CacheBehaviors: CacheBehaviors | undefined;

  /**
   * @public
   * <p>A complex type that contains zero or more <code>CustomErrorResponses</code>
   * 			elements.</p>
   */
  CustomErrorResponses: CustomErrorResponses | undefined;

  /**
   * @public
   * <p>The comment originally specified when this distribution was created.</p>
   */
  Comment: string | undefined;

  /**
   * @public
   * <p>A complex type that contains information about price class for this streaming
   * 			distribution.</p>
   */
  PriceClass: PriceClass | undefined;

  /**
   * @public
   * <p>Whether the distribution is enabled to accept user requests for content.</p>
   */
  Enabled: boolean | undefined;

  /**
   * @public
   * <p>A complex type that determines the distribution's SSL/TLS configuration for
   * 			communicating with viewers.</p>
   */
  ViewerCertificate: ViewerCertificate | undefined;

  /**
   * @public
   * <p>A complex type that identifies ways in which you want to restrict distribution of your
   * 			content.</p>
   */
  Restrictions: Restrictions | undefined;

  /**
   * @public
   * <p>The Web ACL Id (if any) associated with the distribution.</p>
   */
  WebACLId: string | undefined;

  /**
   * @public
   * <p>Specify the maximum HTTP version that you want viewers to use to communicate with
   * 			CloudFront. The default value for new web distributions is <code>http2</code>. Viewers that
   * 			don't support <code>HTTP/2</code> will automatically use an earlier version.</p>
   */
  HttpVersion: HttpVersion | undefined;

  /**
   * @public
   * <p>Whether CloudFront responds to IPv6 DNS requests with an IPv6 address for your
   * 			distribution.</p>
   */
  IsIPV6Enabled: boolean | undefined;

  /**
   * @public
   * <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP)
   * 			recordal if they want to serve content publicly on an alternate domain name, also known
   * 			as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal
   * 			status for CNAMEs associated with distributions.</p>
   *          <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services
   * 				services in China</i>.</p>
   */
  AliasICPRecordals?: AliasICPRecordal[];

  /**
   * @public
   * <p>Whether the primary distribution has a staging distribution enabled.</p>
   */
  Staging: boolean | undefined;
}

/**
 * @public
 * <p>A distribution list.</p>
 */
export interface DistributionList {
  /**
   * @public
   * <p>The value you provided for the <code>Marker</code> request parameter.</p>
   */
  Marker: string | undefined;

  /**
   * @public
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   * 			the value you can use for the <code>Marker</code> request parameter to continue listing
   * 			your distributions where they left off.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The value you provided for the <code>MaxItems</code> request parameter.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>A flag that indicates whether more distributions remain to be listed. If your results
   * 			were truncated, you can make a follow-up pagination request using the
   * 				<code>Marker</code> request parameter to retrieve more distributions in the
   * 			list.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * @public
   * <p>The number of distributions that were created by the current Amazon Web Services account.</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>A complex type that contains one <code>DistributionSummary</code> element for each
   * 			distribution that was created by the current Amazon Web Services account.</p>
   */
  Items?: DistributionSummary[];
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface ListDistributionsResult {
  /**
   * @public
   * <p>The <code>DistributionList</code> type.</p>
   */
  DistributionList?: DistributionList;
}

/**
 * @public
 */
export interface ListDistributionsByCachePolicyIdRequest {
  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			distribution IDs. The response includes distribution IDs in the list that occur after
   * 			the marker. To get the next page of the list, set this field's value to the value of
   * 				<code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of distribution IDs that you want in the response.</p>
   */
  MaxItems?: number;

  /**
   * @public
   * <p>The ID of the cache policy whose associated distribution IDs you want to list.</p>
   */
  CachePolicyId: string | undefined;
}

/**
 * @public
 * <p>A list of distribution IDs.</p>
 */
export interface DistributionIdList {
  /**
   * @public
   * <p>The value provided in the <code>Marker</code> request field.</p>
   */
  Marker: string | undefined;

  /**
   * @public
   * <p>Contains the value that you should use in the <code>Marker</code> field of a
   * 			subsequent request to continue listing distribution IDs where you left off.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of distribution IDs requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>A flag that indicates whether more distribution IDs remain to be listed. If your
   * 			results were truncated, you can make a subsequent request using the <code>Marker</code>
   * 			request field to retrieve more distribution IDs in the list.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * @public
   * <p>The total number of distribution IDs returned in the response.</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>Contains the distribution IDs in the list.</p>
   */
  Items?: string[];
}

/**
 * @public
 */
export interface ListDistributionsByCachePolicyIdResult {
  /**
   * @public
   * <p>A list of distribution IDs.</p>
   */
  DistributionIdList?: DistributionIdList;
}

/**
 * @public
 */
export interface ListDistributionsByKeyGroupRequest {
  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			distribution IDs. The response includes distribution IDs in the list that occur after
   * 			the marker. To get the next page of the list, set this field's value to the value of
   * 				<code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of distribution IDs that you want in the response.</p>
   */
  MaxItems?: number;

  /**
   * @public
   * <p>The ID of the key group whose associated distribution IDs you are listing.</p>
   */
  KeyGroupId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByKeyGroupResult {
  /**
   * @public
   * <p>A list of distribution IDs.</p>
   */
  DistributionIdList?: DistributionIdList;
}

/**
 * @public
 */
export interface ListDistributionsByOriginRequestPolicyIdRequest {
  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			distribution IDs. The response includes distribution IDs in the list that occur after
   * 			the marker. To get the next page of the list, set this field's value to the value of
   * 				<code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of distribution IDs that you want in the response.</p>
   */
  MaxItems?: number;

  /**
   * @public
   * <p>The ID of the origin request policy whose associated distribution IDs you want to
   * 			list.</p>
   */
  OriginRequestPolicyId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByOriginRequestPolicyIdResult {
  /**
   * @public
   * <p>A list of distribution IDs.</p>
   */
  DistributionIdList?: DistributionIdList;
}

/**
 * @public
 */
export interface ListDistributionsByRealtimeLogConfigRequest {
  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			distributions. The response includes distributions in the list that occur after the
   * 			marker. To get the next page of the list, set this field's value to the value of
   * 				<code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of distributions that you want in the response.</p>
   */
  MaxItems?: number;

  /**
   * @public
   * <p>The name of the real-time log configuration whose associated distributions you want to
   * 			list.</p>
   */
  RealtimeLogConfigName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration whose associated
   * 			distributions you want to list.</p>
   */
  RealtimeLogConfigArn?: string;
}

/**
 * @public
 */
export interface ListDistributionsByRealtimeLogConfigResult {
  /**
   * @public
   * <p>A distribution list.</p>
   */
  DistributionList?: DistributionList;
}

/**
 * @public
 */
export interface ListDistributionsByResponseHeadersPolicyIdRequest {
  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			distribution IDs. The response includes distribution IDs in the list that occur after
   * 			the marker. To get the next page of the list, set this field's value to the value of
   * 				<code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of distribution IDs that you want to get in the response.</p>
   */
  MaxItems?: number;

  /**
   * @public
   * <p>The ID of the response headers policy whose associated distribution IDs you want to
   * 			list.</p>
   */
  ResponseHeadersPolicyId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByResponseHeadersPolicyIdResult {
  /**
   * @public
   * <p>A list of distribution IDs.</p>
   */
  DistributionIdList?: DistributionIdList;
}

/**
 * @public
 * <p>The request to list distributions that are associated with a specified WAF web
 * 			ACL.</p>
 */
export interface ListDistributionsByWebACLIdRequest {
  /**
   * @public
   * <p>Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If
   * 			you have more than <code>MaxItems</code> distributions that satisfy the request, the
   * 			response includes a <code>NextMarker</code> element. To get the next page of results,
   * 			submit another request. For the value of <code>Marker</code>, specify the value of
   * 				<code>NextMarker</code> from the last response. (For the first request, omit
   * 				<code>Marker</code>.)</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of distributions that you want CloudFront to return in the response body.
   * 			The maximum and default values are both 100.</p>
   */
  MaxItems?: number;

  /**
   * @public
   * <p>The ID of the WAF web ACL that you want to list the associated distributions. If you
   * 			specify "null" for the ID, the request returns a list of the distributions that aren't
   * 			associated with a web ACL.</p>
   */
  WebACLId: string | undefined;
}

/**
 * @public
 * <p>The response to a request to list the distributions that are associated with a
 * 			specified WAF web ACL.</p>
 */
export interface ListDistributionsByWebACLIdResult {
  /**
   * @public
   * <p>The <code>DistributionList</code> type.</p>
   */
  DistributionList?: DistributionList;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionConfigsRequest {
  /**
   * @public
   * <p>Use this when paginating results to indicate where to begin in your list of
   * 			configurations. The results include configurations in the list that occur after the
   * 			marker. To get the next page of results, set the <code>Marker</code> to the value of the
   * 				<code>NextMarker</code> from the current page's response (which is also the ID of
   * 			the last configuration on that page).</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of field-level encryption configurations you want in the response
   * 			body.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>A summary of a field-level encryption item.</p>
 */
export interface FieldLevelEncryptionSummary {
  /**
   * @public
   * <p>The unique ID of a field-level encryption item.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The last time that the summary of field-level encryption items was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>An optional comment about the field-level encryption item. The comment cannot be
   * 			longer than 128 characters.</p>
   */
  Comment?: string;

  /**
   * @public
   * <p>A summary of a query argument-profile mapping.</p>
   */
  QueryArgProfileConfig?: QueryArgProfileConfig;

  /**
   * @public
   * <p>A summary of a content type-profile mapping.</p>
   */
  ContentTypeProfileConfig?: ContentTypeProfileConfig;
}

/**
 * @public
 * <p>List of field-level encrpytion configurations.</p>
 */
export interface FieldLevelEncryptionList {
  /**
   * @public
   * <p>If there are more elements to be listed, this element is present and contains the
   * 			value that you can use for the <code>Marker</code> request parameter to continue listing
   * 			your configurations where you left off.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of elements you want in the response body.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>The number of field-level encryption items.</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>An array of field-level encryption items.</p>
   */
  Items?: FieldLevelEncryptionSummary[];
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionConfigsResult {
  /**
   * @public
   * <p>Returns a list of all field-level encryption configurations that have been created in
   * 			CloudFront for this account.</p>
   */
  FieldLevelEncryptionList?: FieldLevelEncryptionList;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionProfilesRequest {
  /**
   * @public
   * <p>Use this when paginating results to indicate where to begin in your list of profiles.
   * 			The results include profiles in the list that occur after the marker. To get the next
   * 			page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code>
   * 			from the current page's response (which is also the ID of the last profile on that
   * 			page).</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of field-level encryption profiles you want in the response body.
   * 		</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>The field-level encryption profile summary.</p>
 */
export interface FieldLevelEncryptionProfileSummary {
  /**
   * @public
   * <p>ID for the field-level encryption profile summary.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The time when the the field-level encryption profile summary was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>Name for the field-level encryption profile summary.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A complex data type of encryption entities for the field-level encryption profile that
   * 			include the public key ID, provider, and field patterns for specifying which fields to
   * 			encrypt with this key.</p>
   */
  EncryptionEntities: EncryptionEntities | undefined;

  /**
   * @public
   * <p>An optional comment for the field-level encryption profile summary. The comment cannot
   * 			be longer than 128 characters.</p>
   */
  Comment?: string;
}

/**
 * @public
 * <p>List of field-level encryption profiles.</p>
 */
export interface FieldLevelEncryptionProfileList {
  /**
   * @public
   * <p>If there are more elements to be listed, this element is present and contains the
   * 			value that you can use for the <code>Marker</code> request parameter to continue listing
   * 			your profiles where you left off.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of field-level encryption profiles you want in the response body.
   * 		</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>The number of field-level encryption profiles.</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>The field-level encryption profile items.</p>
   */
  Items?: FieldLevelEncryptionProfileSummary[];
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionProfilesResult {
  /**
   * @public
   * <p>Returns a list of the field-level encryption profiles that have been created in CloudFront
   * 			for this account.</p>
   */
  FieldLevelEncryptionProfileList?: FieldLevelEncryptionProfileList;
}

/**
 * @public
 */
export interface ListFunctionsRequest {
  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			functions. The response includes functions in the list that occur after the marker. To
   * 			get the next page of the list, set this field's value to the value of
   * 				<code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of functions that you want in the response.</p>
   */
  MaxItems?: number;

  /**
   * @public
   * <p>An optional filter to return only the functions that are in the specified stage,
   * 			either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   */
  Stage?: FunctionStage;
}

/**
 * @public
 * <p>A list of CloudFront functions.</p>
 */
export interface FunctionList {
  /**
   * @public
   * <p>If there are more items in the list than are in this response, this element is
   * 			present. It contains the value that you should use in the <code>Marker</code> field of a
   * 			subsequent request to continue listing functions where you left off.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of functions requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>The number of functions returned in the response.</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>Contains the functions in the list.</p>
   */
  Items?: FunctionSummary[];
}

/**
 * @public
 */
export interface ListFunctionsResult {
  /**
   * @public
   * <p>A list of CloudFront functions.</p>
   */
  FunctionList?: FunctionList;
}

/**
 * @public
 * <p>The request to list invalidations.</p>
 */
export interface ListInvalidationsRequest {
  /**
   * @public
   * <p>The distribution's ID.</p>
   */
  DistributionId: string | undefined;

  /**
   * @public
   * <p>Use this parameter when paginating results to indicate where to begin in your list of
   * 			invalidation batches. Because the results are returned in decreasing order from most
   * 			recent to oldest, the most recent results are on the first page, the second page will
   * 			contain earlier results, and so on. To get the next page of results, set
   * 				<code>Marker</code> to the value of the <code>NextMarker</code> from the current
   * 			page's response. This value is the same as the ID of the last invalidation batch on that
   * 			page.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of invalidation batches that you want in the response body.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>A summary of an invalidation request.</p>
 */
export interface InvalidationSummary {
  /**
   * @public
   * <p>The unique ID for an invalidation request.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The time that an invalidation request was created.</p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The status of an invalidation request.</p>
   */
  Status: string | undefined;
}

/**
 * @public
 * <p>The <code>InvalidationList</code> complex type describes the list of invalidation
 * 			objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects
 * 				(Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface InvalidationList {
  /**
   * @public
   * <p>The value that you provided for the <code>Marker</code> request parameter.</p>
   */
  Marker: string | undefined;

  /**
   * @public
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   * 			the value that you can use for the <code>Marker</code> request parameter to continue
   * 			listing your invalidation batches where they left off.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The value that you provided for the <code>MaxItems</code> request parameter.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>A flag that indicates whether more invalidation batch requests remain to be listed. If
   * 			your results were truncated, you can make a follow-up pagination request using the
   * 				<code>Marker</code> request parameter to retrieve more invalidation batches in the
   * 			list.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * @public
   * <p>The number of invalidation batches that were created by the current Amazon Web Services account.
   * 		</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>A complex type that contains one <code>InvalidationSummary</code> element for each
   * 			invalidation batch created by the current Amazon Web Services account.</p>
   */
  Items?: InvalidationSummary[];
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface ListInvalidationsResult {
  /**
   * @public
   * <p>Information about invalidation batches.</p>
   */
  InvalidationList?: InvalidationList;
}

/**
 * @public
 */
export interface ListKeyGroupsRequest {
  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in your list of key
   * 			groups. The response includes key groups in the list that occur after the marker. To get
   * 			the next page of the list, set this field's value to the value of
   * 				<code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of key groups that you want in the response.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>Contains information about a key group.</p>
 */
export interface KeyGroupSummary {
  /**
   * @public
   * <p>A key group.</p>
   */
  KeyGroup: KeyGroup | undefined;
}

/**
 * @public
 * <p>A list of key groups.</p>
 */
export interface KeyGroupList {
  /**
   * @public
   * <p>If there are more items in the list than are in this response, this element is
   * 			present. It contains the value that you should use in the <code>Marker</code> field of a
   * 			subsequent request to continue listing key groups.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of key groups requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>The number of key groups returned in the response.</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>A list of key groups.</p>
   */
  Items?: KeyGroupSummary[];
}

/**
 * @public
 */
export interface ListKeyGroupsResult {
  /**
   * @public
   * <p>A list of key groups.</p>
   */
  KeyGroupList?: KeyGroupList;
}

/**
 * @public
 */
export interface ListOriginAccessControlsRequest {
  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			origin access controls. The response includes the items in the list that occur after the
   * 			marker. To get the next page of the list, set this field's value to the value of
   * 				<code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of origin access controls that you want in the response.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>A CloudFront origin access control.</p>
 */
export interface OriginAccessControlSummary {
  /**
   * @public
   * <p>The unique identifier of the origin access control.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A description of the origin access control.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>A unique name that identifies the origin access control.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The signing protocol of the origin access control. The signing protocol determines how
   * 			CloudFront signs (authenticates) requests. The only valid value is <code>sigv4</code>.</p>
   */
  SigningProtocol: OriginAccessControlSigningProtocols | undefined;

  /**
   * @public
   * <p>A value that specifies which requests CloudFront signs (adds authentication information to).
   * 			This field can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>never</code> – CloudFront doesn't sign any origin requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>always</code> – CloudFront signs all origin requests, overwriting the
   * 						<code>Authorization</code> header from the viewer request if
   * 					necessary.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>no-override</code> – If the viewer request doesn't contain the
   * 						<code>Authorization</code> header, CloudFront signs the origin request. If the
   * 					viewer request contains the <code>Authorization</code> header, CloudFront doesn't sign
   * 					the origin request, but instead passes along the <code>Authorization</code>
   * 					header that it received in the viewer request.</p>
   *             </li>
   *          </ul>
   */
  SigningBehavior: OriginAccessControlSigningBehaviors | undefined;

  /**
   * @public
   * <p>The type of origin that this origin access control is for.</p>
   */
  OriginAccessControlOriginType: OriginAccessControlOriginTypes | undefined;
}

/**
 * @public
 * <p>A list of CloudFront origin access controls.</p>
 */
export interface OriginAccessControlList {
  /**
   * @public
   * <p>The value of the <code>Marker</code> field that was provided in the request.</p>
   */
  Marker: string | undefined;

  /**
   * @public
   * <p>If there are more items in the list than are in this response, this element is
   * 			present. It contains the value to use in the <code>Marker</code> field of another
   * 			request to continue listing origin access controls.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of origin access controls requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>If there are more items in the list than are in this response, this value is
   * 				<code>true</code>.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * @public
   * <p>The number of origin access controls returned in the response.</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>Contains the origin access controls in the list.</p>
   */
  Items?: OriginAccessControlSummary[];
}

/**
 * @public
 */
export interface ListOriginAccessControlsResult {
  /**
   * @public
   * <p>A list of origin access controls.</p>
   */
  OriginAccessControlList?: OriginAccessControlList;
}

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
 */
export interface ListOriginRequestPoliciesRequest {
  /**
   * @public
   * <p>A filter to return only the specified kinds of origin request policies. Valid values
   * 			are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>managed</code> – Returns only the managed policies created by
   * 					Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom</code> – Returns only the custom policies created in your
   * 					Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   */
  Type?: OriginRequestPolicyType;

  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			origin request policies. The response includes origin request policies in the list that
   * 			occur after the marker. To get the next page of the list, set this field's value to the
   * 			value of <code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of origin request policies that you want in the response.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>Contains an origin request policy.</p>
 */
export interface OriginRequestPolicySummary {
  /**
   * @public
   * <p>The type of origin request policy, either <code>managed</code> (created by Amazon Web Services) or
   * 				<code>custom</code> (created in this Amazon Web Services account).</p>
   */
  Type: OriginRequestPolicyType | undefined;

  /**
   * @public
   * <p>The origin request policy.</p>
   */
  OriginRequestPolicy: OriginRequestPolicy | undefined;
}

/**
 * @public
 * <p>A list of origin request policies.</p>
 */
export interface OriginRequestPolicyList {
  /**
   * @public
   * <p>If there are more items in the list than are in this response, this element is
   * 			present. It contains the value that you should use in the <code>Marker</code> field of a
   * 			subsequent request to continue listing origin request policies where you left
   * 			off.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of origin request policies requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>The total number of origin request policies returned in the response.</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>Contains the origin request policies in the list.</p>
   */
  Items?: OriginRequestPolicySummary[];
}

/**
 * @public
 */
export interface ListOriginRequestPoliciesResult {
  /**
   * @public
   * <p>A list of origin request policies.</p>
   */
  OriginRequestPolicyList?: OriginRequestPolicyList;
}

/**
 * @public
 */
export interface ListPublicKeysRequest {
  /**
   * @public
   * <p>Use this when paginating results to indicate where to begin in your list of public
   * 			keys. The results include public keys in the list that occur after the marker. To get
   * 			the next page of results, set the <code>Marker</code> to the value of the
   * 				<code>NextMarker</code> from the current page's response (which is also the ID of
   * 			the last public key on that page).</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of public keys you want in the response body.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>Contains information about a public key.</p>
 */
export interface PublicKeySummary {
  /**
   * @public
   * <p>The identifier of the public key.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A name to help identify the public key.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The date and time when the public key was uploaded.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * @public
   * <p>The public key.</p>
   */
  EncodedKey: string | undefined;

  /**
   * @public
   * <p>A comment to describe the public key. The comment cannot be longer than 128
   * 			characters.</p>
   */
  Comment?: string;
}

/**
 * @public
 * <p>A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
 */
export interface PublicKeyList {
  /**
   * @public
   * <p>If there are more elements to be listed, this element is present and contains the
   * 			value that you can use for the <code>Marker</code> request parameter to continue listing
   * 			your public keys where you left off.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of public keys you want in the response.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>The number of public keys in the list.</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>A list of public keys.</p>
   */
  Items?: PublicKeySummary[];
}

/**
 * @public
 */
export interface ListPublicKeysResult {
  /**
   * @public
   * <p>Returns a list of all public keys that have been added to CloudFront for this
   * 			account.</p>
   */
  PublicKeyList?: PublicKeyList;
}

/**
 * @public
 */
export interface ListRealtimeLogConfigsRequest {
  /**
   * @public
   * <p>The maximum number of real-time log configurations that you want in the
   * 			response.</p>
   */
  MaxItems?: number;

  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			real-time log configurations. The response includes real-time log configurations in the
   * 			list that occur after the marker. To get the next page of the list, set this field's
   * 			value to the value of <code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>A list of real-time log configurations.</p>
 */
export interface RealtimeLogConfigs {
  /**
   * @public
   * <p>The maximum number of real-time log configurations requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>Contains the list of real-time log configurations.</p>
   */
  Items?: RealtimeLogConfig[];

  /**
   * @public
   * <p>A flag that indicates whether there are more real-time log configurations than are
   * 			contained in this list.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * @public
   * <p>This parameter indicates where this list of real-time log configurations begins. This
   * 			list includes real-time log configurations that occur after the marker.</p>
   */
  Marker: string | undefined;

  /**
   * @public
   * <p>If there are more items in the list than are in this response, this element is
   * 			present. It contains the value that you should use in the <code>Marker</code> field of a
   * 			subsequent request to continue listing real-time log configurations where you left off.
   * 		</p>
   */
  NextMarker?: string;
}

/**
 * @public
 */
export interface ListRealtimeLogConfigsResult {
  /**
   * @public
   * <p>A list of real-time log configurations.</p>
   */
  RealtimeLogConfigs?: RealtimeLogConfigs;
}

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
 */
export interface ListResponseHeadersPoliciesRequest {
  /**
   * @public
   * <p>A filter to get only the specified kind of response headers policies. Valid values
   * 			are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>managed</code> – Gets only the managed policies created by Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom</code> – Gets only the custom policies created in your
   * 					Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   */
  Type?: ResponseHeadersPolicyType;

  /**
   * @public
   * <p>Use this field when paginating results to indicate where to begin in your list of
   * 			response headers policies. The response includes response headers policies in the list
   * 			that occur after the marker. To get the next page of the list, set this field's value to
   * 			the value of <code>NextMarker</code> from the current page's response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of response headers policies that you want to get in the
   * 			response.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>Contains a response headers policy.</p>
 */
export interface ResponseHeadersPolicySummary {
  /**
   * @public
   * <p>The type of response headers policy, either <code>managed</code> (created by Amazon Web Services) or
   * 				<code>custom</code> (created in this Amazon Web Services account).</p>
   */
  Type: ResponseHeadersPolicyType | undefined;

  /**
   * @public
   * <p>The response headers policy.</p>
   */
  ResponseHeadersPolicy: ResponseHeadersPolicy | undefined;
}

/**
 * @public
 * <p>A list of response headers policies.</p>
 */
export interface ResponseHeadersPolicyList {
  /**
   * @public
   * <p>If there are more items in the list than are in this response, this element is
   * 			present. It contains the value that you should use in the <code>Marker</code> field of a
   * 			subsequent request to continue listing response headers policies where you left
   * 			off.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of response headers policies requested.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>The number of response headers policies returned.</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>The response headers policies in the list.</p>
   */
  Items?: ResponseHeadersPolicySummary[];
}

/**
 * @public
 */
export interface ListResponseHeadersPoliciesResult {
  /**
   * @public
   * <p>A list of response headers policies.</p>
   */
  ResponseHeadersPolicyList?: ResponseHeadersPolicyList;
}

/**
 * @public
 * <p>The request to list your streaming distributions.</p>
 */
export interface ListStreamingDistributionsRequest {
  /**
   * @public
   * <p>The value that you provided for the <code>Marker</code> request parameter.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The value that you provided for the <code>MaxItems</code> request parameter.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>A summary of the information for a CloudFront streaming distribution.</p>
 */
export interface StreamingDistributionSummary {
  /**
   * @public
   * <p>The identifier for the distribution, for example, <code>EDFDVBD632BHDS5</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) for the streaming distribution. For example:
   * 				<code>arn:aws:cloudfront::123456789012:streaming-distribution/EDFDVBD632BHDS5</code>,
   * 			where <code>123456789012</code> is your Amazon Web Services account ID.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>Indicates the current status of the distribution. When the status is
   * 				<code>Deployed</code>, the distribution's information is fully propagated throughout
   * 			the Amazon CloudFront system.</p>
   */
  Status: string | undefined;

  /**
   * @public
   * <p>The date and time the distribution was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The domain name corresponding to the distribution, for example,
   * 				<code>d111111abcdef8.cloudfront.net</code>.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want
   * 			CloudFront to get your media files for distribution.</p>
   */
  S3Origin: S3Origin | undefined;

  /**
   * @public
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if
   * 			any, for this streaming distribution.</p>
   */
  Aliases: Aliases | undefined;

  /**
   * @public
   * <p>A complex type that specifies the Amazon Web Services accounts, if any, that you want to allow to
   * 			create signed URLs for private content. If you want to require signed URLs in requests
   * 			for objects in the target origin that match the <code>PathPattern</code> for this cache
   * 			behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable
   * 			values for <code>Quantity</code> and <code>Items</code>.If you don't want to require
   * 			signed URLs in requests for objects that match <code>PathPattern</code>, specify
   * 				<code>false</code> for <code>Enabled</code> and <code>0</code> for
   * 				<code>Quantity</code>. Omit <code>Items</code>. To add, change, or remove one or
   * 			more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's
   * 			currently <code>false</code>), change <code>Quantity</code> as applicable, and specify
   * 			all of the trusted signers that you want to include in the updated distribution.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private
   * 				Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  TrustedSigners: TrustedSigners | undefined;

  /**
   * @public
   * <p>The comment originally specified when this distribution was created.</p>
   */
  Comment: string | undefined;

  /**
   * @public
   * <p>A complex type that contains information about price class for this streaming
   * 			distribution.</p>
   */
  PriceClass: PriceClass | undefined;

  /**
   * @public
   * <p>Whether the distribution is enabled to accept end user requests for content.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * <p>A streaming distribution list.</p>
 */
export interface StreamingDistributionList {
  /**
   * @public
   * <p>The value you provided for the <code>Marker</code> request parameter.</p>
   */
  Marker: string | undefined;

  /**
   * @public
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   * 			the value you can use for the <code>Marker</code> request parameter to continue listing
   * 			your RTMP distributions where they left off.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The value you provided for the <code>MaxItems</code> request parameter.</p>
   */
  MaxItems: number | undefined;

  /**
   * @public
   * <p>A flag that indicates whether more streaming distributions remain to be listed. If
   * 			your results were truncated, you can make a follow-up pagination request using the
   * 				<code>Marker</code> request parameter to retrieve more distributions in the list.
   * 		</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * @public
   * <p>The number of streaming distributions that were created by the current Amazon Web Services account.
   * 		</p>
   */
  Quantity: number | undefined;

  /**
   * @public
   * <p>A complex type that contains one <code>StreamingDistributionSummary</code> element for
   * 			each distribution that was created by the current Amazon Web Services account.</p>
   */
  Items?: StreamingDistributionSummary[];
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface ListStreamingDistributionsResult {
  /**
   * @public
   * <p>The <code>StreamingDistributionList</code> type.</p>
   */
  StreamingDistributionList?: StreamingDistributionList;
}

/**
 * @public
 * <p>The request to list tags for a CloudFront resource.</p>
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>An ARN of a CloudFront resource.</p>
   */
  Resource: string | undefined;
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface ListTagsForResourceResult {
  /**
   * @public
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: Tags | undefined;
}

/**
 * @public
 */
export interface PublishFunctionRequest {
  /**
   * @public
   * <p>The name of the function that you are publishing.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The current version (<code>ETag</code> value) of the function that you are publishing,
   * 			which you can get using <code>DescribeFunction</code>.</p>
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface PublishFunctionResult {
  /**
   * @public
   * <p>Contains configuration information and metadata about a CloudFront function.</p>
   */
  FunctionSummary?: FunctionSummary;
}

/**
 * @public
 * <p>The request to add tags to a CloudFront resource.</p>
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>An ARN of a CloudFront resource.</p>
   */
  Resource: string | undefined;

  /**
   * @public
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: Tags | undefined;
}

/**
 * @public
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
 * @public
 */
export interface TestFunctionRequest {
  /**
   * @public
   * <p>The name of the function that you are testing.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The current version (<code>ETag</code> value) of the function that you are testing,
   * 			which you can get using <code>DescribeFunction</code>.</p>
   */
  IfMatch: string | undefined;

  /**
   * @public
   * <p>The stage of the function that you are testing, either <code>DEVELOPMENT</code> or
   * 				<code>LIVE</code>.</p>
   */
  Stage?: FunctionStage;

  /**
   * @public
   * <p>The event object to test the function with. For more information about the structure
   * 			of the event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  EventObject: Uint8Array | undefined;
}

/**
 * @public
 * <p>Contains the result of testing a CloudFront function with <code>TestFunction</code>.</p>
 */
export interface TestResult {
  /**
   * @public
   * <p>Contains configuration information and metadata about the CloudFront function that was
   * 			tested.</p>
   */
  FunctionSummary?: FunctionSummary;

  /**
   * @public
   * <p>The amount of time that the function took to run as a percentage of the maximum
   * 			allowed time. For example, a compute utilization of 35 means that the function completed
   * 			in 35% of the maximum allowed time.</p>
   */
  ComputeUtilization?: string;

  /**
   * @public
   * <p>Contains the log lines that the function wrote (if any) when running the test.</p>
   */
  FunctionExecutionLogs?: string[];

  /**
   * @public
   * <p>If the result of testing the function was an error, this field contains the error
   * 			message.</p>
   */
  FunctionErrorMessage?: string;

  /**
   * @public
   * <p>The event object returned by the function. For more information about the structure of
   * 			the event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html">Event
   * 				object structure</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  FunctionOutput?: string;
}

/**
 * @public
 */
export interface TestFunctionResult {
  /**
   * @public
   * <p>An object that represents the result of running the function with the provided event
   * 			object.</p>
   */
  TestResult?: TestResult;
}

/**
 * @public
 * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
 */
export interface TagKeys {
  /**
   * @public
   * <p>A complex type that contains <code>Tag</code> key elements.</p>
   */
  Items?: string[];
}

/**
 * @public
 * <p>The request to remove tags from a CloudFront resource.</p>
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>An ARN of a CloudFront resource.</p>
   */
  Resource: string | undefined;

  /**
   * @public
   * <p>A complex type that contains zero or more <code>Tag</code> key elements.</p>
   */
  TagKeys: TagKeys | undefined;
}

/**
 * @public
 */
export interface UpdateCachePolicyRequest {
  /**
   * @public
   * <p>A cache policy configuration.</p>
   */
  CachePolicyConfig: CachePolicyConfig | undefined;

  /**
   * @public
   * <p>The unique identifier for the cache policy that you are updating. The identifier is
   * 			returned in a cache behavior's <code>CachePolicyId</code> field in the response to
   * 				<code>GetDistributionConfig</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The version of the cache policy that you are updating. The version is returned in the
   * 			cache policy's <code>ETag</code> field in the response to
   * 				<code>GetCachePolicyConfig</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 */
export interface UpdateCachePolicyResult {
  /**
   * @public
   * <p>A cache policy.</p>
   */
  CachePolicy?: CachePolicy;

  /**
   * @public
   * <p>The current version of the cache policy.</p>
   */
  ETag?: string;
}

/**
 * @public
 * <p>The request to update an origin access identity.</p>
 */
export interface UpdateCloudFrontOriginAccessIdentityRequest {
  /**
   * @public
   * <p>The identity's configuration information.</p>
   */
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig | undefined;

  /**
   * @public
   * <p>The identity's id.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			identity's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface UpdateCloudFrontOriginAccessIdentityResult {
  /**
   * @public
   * <p>The origin access identity's information.</p>
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;

  /**
   * @public
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface UpdateContinuousDeploymentPolicyRequest {
  /**
   * @public
   * <p>The continuous deployment policy configuration.</p>
   */
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig | undefined;

  /**
   * @public
   * <p>The identifier of the continuous deployment policy that you are updating.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The current version (<code>ETag</code> value) of the continuous deployment policy that
   * 			you are updating.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 */
export interface UpdateContinuousDeploymentPolicyResult {
  /**
   * @public
   * <p>A continuous deployment policy.</p>
   */
  ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy;

  /**
   * @public
   * <p>The version identifier for the current version of the continuous deployment
   * 			policy.</p>
   */
  ETag?: string;
}

/**
 * @public
 * <p>The request to update a distribution.</p>
 */
export interface UpdateDistributionRequest {
  /**
   * @public
   * <p>The distribution's configuration information.</p>
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * @public
   * <p>The distribution's id.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface UpdateDistributionResult {
  /**
   * @public
   * <p>The distribution's information.</p>
   */
  Distribution?: Distribution;

  /**
   * @public
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface UpdateDistributionWithStagingConfigRequest {
  /**
   * @public
   * <p>The identifier of the primary distribution to which you are copying a staging distribution's
   * 			configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the staging distribution whose configuration you are copying to the primary distribution.</p>
   */
  StagingDistributionId?: string;

  /**
   * @public
   * <p>The current versions (<code>ETag</code> values) of both primary and staging distributions.
   * 			Provide these in the following format:</p>
   *          <p>
   *             <code><primary ETag>, <staging ETag></code>
   *          </p>
   */
  IfMatch?: string;
}

/**
 * @public
 */
export interface UpdateDistributionWithStagingConfigResult {
  /**
   * @public
   * <p>A distribution tells CloudFront where you want content to be delivered from, and the details
   * 			about how to track and manage content delivery.</p>
   */
  Distribution?: Distribution;

  /**
   * @public
   * <p>The current version of the primary distribution (after it's updated).</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionConfigRequest {
  /**
   * @public
   * <p>Request to update a field-level encryption configuration.</p>
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;

  /**
   * @public
   * <p>The ID of the configuration you want to update.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			configuration identity to update. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionConfigResult {
  /**
   * @public
   * <p>Return the results of updating the configuration.</p>
   */
  FieldLevelEncryption?: FieldLevelEncryption;

  /**
   * @public
   * <p>The value of the <code>ETag</code> header that you received when updating the
   * 			configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionProfileRequest {
  /**
   * @public
   * <p>Request to update a field-level encryption profile.</p>
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;

  /**
   * @public
   * <p>The ID of the field-level encryption profile request.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			profile identity to update. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionProfileResult {
  /**
   * @public
   * <p>Return the results of updating the profile.</p>
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;

  /**
   * @public
   * <p>The result of the field-level encryption profile request.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface UpdateFunctionRequest {
  /**
   * @public
   * <p>The name of the function that you are updating.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The current version (<code>ETag</code> value) of the function that you are updating,
   * 			which you can get using <code>DescribeFunction</code>.</p>
   */
  IfMatch: string | undefined;

  /**
   * @public
   * <p>Configuration information about the function.</p>
   */
  FunctionConfig: FunctionConfig | undefined;

  /**
   * @public
   * <p>The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing
   * 				function code for CloudFront Functions</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  FunctionCode: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionResult {
  /**
   * @public
   * <p>Contains configuration information and metadata about a CloudFront function.</p>
   */
  FunctionSummary?: FunctionSummary;

  /**
   * @public
   * <p>The version identifier for the current version of the CloudFront function.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface UpdateKeyGroupRequest {
  /**
   * @public
   * <p>The key group configuration.</p>
   */
  KeyGroupConfig: KeyGroupConfig | undefined;

  /**
   * @public
   * <p>The identifier of the key group that you are updating.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The version of the key group that you are updating. The version is the key group's
   * 				<code>ETag</code> value.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 */
export interface UpdateKeyGroupResult {
  /**
   * @public
   * <p>The key group that was just updated.</p>
   */
  KeyGroup?: KeyGroup;

  /**
   * @public
   * <p>The identifier for this version of the key group.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface UpdateOriginAccessControlRequest {
  /**
   * @public
   * <p>An origin access control.</p>
   */
  OriginAccessControlConfig: OriginAccessControlConfig | undefined;

  /**
   * @public
   * <p>The unique identifier of the origin access control that you are updating.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The current version (<code>ETag</code> value) of the origin access control that you
   * 			are updating.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 */
export interface UpdateOriginAccessControlResult {
  /**
   * @public
   * <p>The origin access control after it has been updated.</p>
   */
  OriginAccessControl?: OriginAccessControl;

  /**
   * @public
   * <p>The new version of the origin access control after it has been updated.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface UpdateOriginRequestPolicyRequest {
  /**
   * @public
   * <p>An origin request policy configuration.</p>
   */
  OriginRequestPolicyConfig: OriginRequestPolicyConfig | undefined;

  /**
   * @public
   * <p>The unique identifier for the origin request policy that you are updating. The
   * 			identifier is returned in a cache behavior's <code>OriginRequestPolicyId</code> field in
   * 			the response to <code>GetDistributionConfig</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The version of the origin request policy that you are updating. The version is
   * 			returned in the origin request policy's <code>ETag</code> field in the response to
   * 				<code>GetOriginRequestPolicyConfig</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 */
export interface UpdateOriginRequestPolicyResult {
  /**
   * @public
   * <p>An origin request policy.</p>
   */
  OriginRequestPolicy?: OriginRequestPolicy;

  /**
   * @public
   * <p>The current version of the origin request policy.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface UpdatePublicKeyRequest {
  /**
   * @public
   * <p>A public key configuration.</p>
   */
  PublicKeyConfig: PublicKeyConfig | undefined;

  /**
   * @public
   * <p>The identifier of the public key that you are updating.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The value of the <code>ETag</code> header that you received when retrieving the public
   * 			key to update. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 */
export interface UpdatePublicKeyResult {
  /**
   * @public
   * <p>The public key.</p>
   */
  PublicKey?: PublicKey;

  /**
   * @public
   * <p>The identifier of the current version of the public key.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface UpdateRealtimeLogConfigRequest {
  /**
   * @public
   * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time
   * 			log data.</p>
   */
  EndPoints?: EndPoint[];

  /**
   * @public
   * <p>A list of fields to include in each real-time log record.</p>
   *          <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Fields?: string[];

  /**
   * @public
   * <p>The name for this real-time log configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for this real-time log configuration.</p>
   */
  ARN?: string;

  /**
   * @public
   * <p>The sampling rate for this real-time log configuration. The sampling rate determines
   * 			the percentage of viewer requests that are represented in the real-time log data. You
   * 			must provide an integer between 1 and 100, inclusive.</p>
   */
  SamplingRate?: number;
}

/**
 * @public
 */
export interface UpdateRealtimeLogConfigResult {
  /**
   * @public
   * <p>A real-time log configuration.</p>
   */
  RealtimeLogConfig?: RealtimeLogConfig;
}

/**
 * @public
 */
export interface UpdateResponseHeadersPolicyRequest {
  /**
   * @public
   * <p>A response headers policy configuration.</p>
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig | undefined;

  /**
   * @public
   * <p>The identifier for the response headers policy that you are updating.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The version of the response headers policy that you are updating.</p>
   *          <p>The version is returned in the cache policy's <code>ETag</code> field in the response
   * 			to <code>GetResponseHeadersPolicyConfig</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 */
export interface UpdateResponseHeadersPolicyResult {
  /**
   * @public
   * <p>A response headers policy.</p>
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy;

  /**
   * @public
   * <p>The current version of the response headers policy.</p>
   */
  ETag?: string;
}

/**
 * @public
 * <p>The request to update a streaming distribution.</p>
 */
export interface UpdateStreamingDistributionRequest {
  /**
   * @public
   * <p>The streaming distribution's configuration information.</p>
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;

  /**
   * @public
   * <p>The streaming distribution's id.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			streaming distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

/**
 * @public
 * <p>The returned result of the corresponding request.</p>
 */
export interface UpdateStreamingDistributionResult {
  /**
   * @public
   * <p>The streaming distribution's information.</p>
   */
  StreamingDistribution?: StreamingDistribution;

  /**
   * @public
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

/**
 * @internal
 */
export const GetDistributionResultFilterSensitiveLog = (obj: GetDistributionResult): any => ({
  ...obj,
  ...(obj.Distribution && { Distribution: DistributionFilterSensitiveLog(obj.Distribution) }),
});

/**
 * @internal
 */
export const GetDistributionConfigResultFilterSensitiveLog = (obj: GetDistributionConfigResult): any => ({
  ...obj,
  ...(obj.DistributionConfig && { DistributionConfig: DistributionConfigFilterSensitiveLog(obj.DistributionConfig) }),
});

/**
 * @internal
 */
export const GetFunctionResultFilterSensitiveLog = (obj: GetFunctionResult): any => ({
  ...obj,
  ...(obj.FunctionCode && { FunctionCode: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DistributionSummaryFilterSensitiveLog = (obj: DistributionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DistributionListFilterSensitiveLog = (obj: DistributionList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionsResultFilterSensitiveLog = (obj: ListDistributionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionsByRealtimeLogConfigResultFilterSensitiveLog = (
  obj: ListDistributionsByRealtimeLogConfigResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionsByWebACLIdResultFilterSensitiveLog = (obj: ListDistributionsByWebACLIdResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestFunctionRequestFilterSensitiveLog = (obj: TestFunctionRequest): any => ({
  ...obj,
  ...(obj.EventObject && { EventObject: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TestResultFilterSensitiveLog = (obj: TestResult): any => ({
  ...obj,
  ...(obj.FunctionExecutionLogs && { FunctionExecutionLogs: SENSITIVE_STRING }),
  ...(obj.FunctionErrorMessage && { FunctionErrorMessage: SENSITIVE_STRING }),
  ...(obj.FunctionOutput && { FunctionOutput: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TestFunctionResultFilterSensitiveLog = (obj: TestFunctionResult): any => ({
  ...obj,
  ...(obj.TestResult && { TestResult: TestResultFilterSensitiveLog(obj.TestResult) }),
});

/**
 * @internal
 */
export const UpdateDistributionRequestFilterSensitiveLog = (obj: UpdateDistributionRequest): any => ({
  ...obj,
  ...(obj.DistributionConfig && { DistributionConfig: DistributionConfigFilterSensitiveLog(obj.DistributionConfig) }),
});

/**
 * @internal
 */
export const UpdateDistributionResultFilterSensitiveLog = (obj: UpdateDistributionResult): any => ({
  ...obj,
  ...(obj.Distribution && { Distribution: DistributionFilterSensitiveLog(obj.Distribution) }),
});

/**
 * @internal
 */
export const UpdateDistributionWithStagingConfigResultFilterSensitiveLog = (
  obj: UpdateDistributionWithStagingConfigResult
): any => ({
  ...obj,
  ...(obj.Distribution && { Distribution: DistributionFilterSensitiveLog(obj.Distribution) }),
});

/**
 * @internal
 */
export const UpdateFunctionRequestFilterSensitiveLog = (obj: UpdateFunctionRequest): any => ({
  ...obj,
  ...(obj.FunctionCode && { FunctionCode: SENSITIVE_STRING }),
});
