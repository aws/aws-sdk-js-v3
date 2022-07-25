// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { CloudFrontServiceException as __BaseException } from "./CloudFrontServiceException";
import {
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
  S3Origin,
  StreamingDistribution,
  StreamingDistributionConfig,
  Tags,
  TrustedSigners,
  ViewerCertificate,
} from "./models_0";

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

export interface DeleteMonitoringSubscriptionRequest {
  /**
   * <p>The ID of the distribution that you are disabling metrics for.</p>
   */
  DistributionId: string | undefined;
}

export interface DeleteMonitoringSubscriptionResult {}

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

/**
 * <p>The request to get an origin access identity's information.</p>
 */
export interface GetCloudFrontOriginAccessIdentityRequest {
  /**
   * <p>The identity's ID.</p>
   */
  Id: string | undefined;
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

/**
 * <p>The request to get a distribution's information.</p>
 */
export interface GetDistributionRequest {
  /**
   * <p>The distribution's ID. If the ID is empty, an empty distribution configuration is returned.</p>
   */
  Id: string | undefined;
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

/**
 * <p>The request to get a distribution configuration.</p>
 */
export interface GetDistributionConfigRequest {
  /**
   * <p>The distribution's ID. If the ID is empty, an empty distribution configuration is returned.</p>
   */
  Id: string | undefined;
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

export interface GetFieldLevelEncryptionRequest {
  /**
   * <p>Request the ID for the field-level encryption configuration information.</p>
   */
  Id: string | undefined;
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

export interface GetFieldLevelEncryptionConfigRequest {
  /**
   * <p>Request the ID for the field-level encryption configuration information.</p>
   */
  Id: string | undefined;
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

export interface GetFieldLevelEncryptionProfileRequest {
  /**
   * <p>Get the ID for the field-level encryption profile information.</p>
   */
  Id: string | undefined;
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

export interface GetFieldLevelEncryptionProfileConfigRequest {
  /**
   * <p>Get the ID for the field-level encryption profile configuration information.</p>
   */
  Id: string | undefined;
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

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetInvalidationResult {
  /**
   * <p>The invalidation's information. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/InvalidationDatatype.html">Invalidation Complex Type</a>. </p>
   */
  Invalidation?: Invalidation;
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

export interface GetKeyGroupRequest {
  /**
   * <p>The identifier of the key group that you are getting. To get the identifier, use
   * 			<code>ListKeyGroups</code>.</p>
   */
  Id: string | undefined;
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

export interface GetKeyGroupConfigRequest {
  /**
   * <p>The identifier of the key group whose configuration you are getting. To get the
   * 			identifier, use <code>ListKeyGroups</code>.</p>
   */
  Id: string | undefined;
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

export interface GetMonitoringSubscriptionRequest {
  /**
   * <p>The ID of the distribution that you are getting metrics information for.</p>
   */
  DistributionId: string | undefined;
}

export interface GetMonitoringSubscriptionResult {
  /**
   * <p>A monitoring subscription. This structure contains information about whether additional
   * 			CloudWatch metrics are enabled for a given CloudFront distribution.</p>
   */
  MonitoringSubscription?: MonitoringSubscription;
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

export interface GetPublicKeyRequest {
  /**
   * <p>The identifier of the public key you are getting.</p>
   */
  Id: string | undefined;
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

export interface GetPublicKeyConfigRequest {
  /**
   * <p>The identifier of the public key whose configuration you are getting.</p>
   */
  Id: string | undefined;
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

export interface GetRealtimeLogConfigResult {
  /**
   * <p>A real-time log configuration.</p>
   */
  RealtimeLogConfig?: RealtimeLogConfig;
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

/**
 * <p>The request to get a streaming distribution's information.</p>
 */
export interface GetStreamingDistributionRequest {
  /**
   * <p>The streaming distribution's ID.</p>
   */
  Id: string | undefined;
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

/**
 * <p>To request to get a streaming distribution configuration.</p>
 */
export interface GetStreamingDistributionConfigRequest {
  /**
   * <p>The streaming distribution's ID.</p>
   */
  Id: string | undefined;
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

export interface ListCachePoliciesResult {
  /**
   * <p>A list of cache policies.</p>
   */
  CachePolicyList?: CachePolicyList;
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

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListCloudFrontOriginAccessIdentitiesResult {
  /**
   * <p>The <code>CloudFrontOriginAccessIdentityList</code> type. </p>
   */
  CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList;
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

export interface ListConflictingAliasesResult {
  /**
   * <p>A list of conflicting aliases.</p>
   */
  ConflictingAliasesList?: ConflictingAliasesList;
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

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListDistributionsResult {
  /**
   * <p>The <code>DistributionList</code> type. </p>
   */
  DistributionList?: DistributionList;
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

export interface ListDistributionsByCachePolicyIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   */
  DistributionIdList?: DistributionIdList;
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

export interface ListDistributionsByKeyGroupResult {
  /**
   * <p>A list of distribution IDs.</p>
   */
  DistributionIdList?: DistributionIdList;
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

export interface ListDistributionsByOriginRequestPolicyIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   */
  DistributionIdList?: DistributionIdList;
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

export interface ListDistributionsByRealtimeLogConfigResult {
  /**
   * <p>A distribution list.</p>
   */
  DistributionList?: DistributionList;
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

export interface ListDistributionsByResponseHeadersPolicyIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   */
  DistributionIdList?: DistributionIdList;
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

export interface ListFieldLevelEncryptionConfigsResult {
  /**
   * <p>Returns a list of all field-level encryption configurations that have been created in CloudFront for this account.</p>
   */
  FieldLevelEncryptionList?: FieldLevelEncryptionList;
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

export interface ListFieldLevelEncryptionProfilesResult {
  /**
   * <p>Returns a list of the field-level encryption profiles that have been created in CloudFront for this account.</p>
   */
  FieldLevelEncryptionProfileList?: FieldLevelEncryptionProfileList;
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

export interface ListFunctionsResult {
  /**
   * <p>A list of CloudFront functions.</p>
   */
  FunctionList?: FunctionList;
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

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListInvalidationsResult {
  /**
   * <p>Information about invalidation batches. </p>
   */
  InvalidationList?: InvalidationList;
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

/**
 * <p>Contains information about a key group.</p>
 */
export interface KeyGroupSummary {
  /**
   * <p>A key group.</p>
   */
  KeyGroup: KeyGroup | undefined;
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

export interface ListKeyGroupsResult {
  /**
   * <p>A list of key groups.</p>
   */
  KeyGroupList?: KeyGroupList;
}

export type OriginRequestPolicyType = "custom" | "managed";

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

export interface ListOriginRequestPoliciesResult {
  /**
   * <p>A list of origin request policies.</p>
   */
  OriginRequestPolicyList?: OriginRequestPolicyList;
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

export interface ListPublicKeysResult {
  /**
   * <p>Returns a list of all public keys that have been added to CloudFront for this account.</p>
   */
  PublicKeyList?: PublicKeyList;
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

export interface ListRealtimeLogConfigsResult {
  /**
   * <p>A list of real-time log configurations.</p>
   */
  RealtimeLogConfigs?: RealtimeLogConfigs;
}

export enum ResponseHeadersPolicyType {
  custom = "custom",
  managed = "managed",
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

export interface ListResponseHeadersPoliciesResult {
  /**
   * <p>A list of response headers policies.</p>
   */
  ResponseHeadersPolicyList?: ResponseHeadersPolicyList;
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

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListStreamingDistributionsResult {
  /**
   * <p>The <code>StreamingDistributionList</code> type. </p>
   */
  StreamingDistributionList?: StreamingDistributionList;
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

/**
 * <p> The returned result of the corresponding request.</p>
 */
export interface ListTagsForResourceResult {
  /**
   * <p> A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: Tags | undefined;
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

export interface PublishFunctionResult {
  /**
   * <p>Contains configuration information and metadata about a CloudFront function.</p>
   */
  FunctionSummary?: FunctionSummary;
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

export interface TestFunctionResult {
  /**
   * <p>An object that represents the result of running the function with the provided event
   * 			object.</p>
   */
  TestResult?: TestResult;
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

export interface UpdateRealtimeLogConfigResult {
  /**
   * <p>A real-time log configuration.</p>
   */
  RealtimeLogConfig?: RealtimeLogConfig;
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

/**
 * @internal
 */
export const DeleteMonitoringSubscriptionRequestFilterSensitiveLog = (
  obj: DeleteMonitoringSubscriptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMonitoringSubscriptionResultFilterSensitiveLog = (obj: DeleteMonitoringSubscriptionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOriginRequestPolicyRequestFilterSensitiveLog = (obj: DeleteOriginRequestPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePublicKeyRequestFilterSensitiveLog = (obj: DeletePublicKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRealtimeLogConfigRequestFilterSensitiveLog = (obj: DeleteRealtimeLogConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResponseHeadersPolicyRequestFilterSensitiveLog = (obj: DeleteResponseHeadersPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStreamingDistributionRequestFilterSensitiveLog = (obj: DeleteStreamingDistributionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFunctionRequestFilterSensitiveLog = (obj: DescribeFunctionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFunctionResultFilterSensitiveLog = (obj: DescribeFunctionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCachePolicyRequestFilterSensitiveLog = (obj: GetCachePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCachePolicyResultFilterSensitiveLog = (obj: GetCachePolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCachePolicyConfigRequestFilterSensitiveLog = (obj: GetCachePolicyConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCachePolicyConfigResultFilterSensitiveLog = (obj: GetCachePolicyConfigResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCloudFrontOriginAccessIdentityRequestFilterSensitiveLog = (
  obj: GetCloudFrontOriginAccessIdentityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCloudFrontOriginAccessIdentityResultFilterSensitiveLog = (
  obj: GetCloudFrontOriginAccessIdentityResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCloudFrontOriginAccessIdentityConfigRequestFilterSensitiveLog = (
  obj: GetCloudFrontOriginAccessIdentityConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCloudFrontOriginAccessIdentityConfigResultFilterSensitiveLog = (
  obj: GetCloudFrontOriginAccessIdentityConfigResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDistributionRequestFilterSensitiveLog = (obj: GetDistributionRequest): any => ({
  ...obj,
});

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
export const GetDistributionConfigRequestFilterSensitiveLog = (obj: GetDistributionConfigRequest): any => ({
  ...obj,
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
export const GetFieldLevelEncryptionRequestFilterSensitiveLog = (obj: GetFieldLevelEncryptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFieldLevelEncryptionResultFilterSensitiveLog = (obj: GetFieldLevelEncryptionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFieldLevelEncryptionConfigRequestFilterSensitiveLog = (
  obj: GetFieldLevelEncryptionConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFieldLevelEncryptionConfigResultFilterSensitiveLog = (
  obj: GetFieldLevelEncryptionConfigResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFieldLevelEncryptionProfileRequestFilterSensitiveLog = (
  obj: GetFieldLevelEncryptionProfileRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFieldLevelEncryptionProfileResultFilterSensitiveLog = (
  obj: GetFieldLevelEncryptionProfileResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFieldLevelEncryptionProfileConfigRequestFilterSensitiveLog = (
  obj: GetFieldLevelEncryptionProfileConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFieldLevelEncryptionProfileConfigResultFilterSensitiveLog = (
  obj: GetFieldLevelEncryptionProfileConfigResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFunctionRequestFilterSensitiveLog = (obj: GetFunctionRequest): any => ({
  ...obj,
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
export const GetInvalidationRequestFilterSensitiveLog = (obj: GetInvalidationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInvalidationResultFilterSensitiveLog = (obj: GetInvalidationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetKeyGroupRequestFilterSensitiveLog = (obj: GetKeyGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetKeyGroupResultFilterSensitiveLog = (obj: GetKeyGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetKeyGroupConfigRequestFilterSensitiveLog = (obj: GetKeyGroupConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetKeyGroupConfigResultFilterSensitiveLog = (obj: GetKeyGroupConfigResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMonitoringSubscriptionRequestFilterSensitiveLog = (obj: GetMonitoringSubscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMonitoringSubscriptionResultFilterSensitiveLog = (obj: GetMonitoringSubscriptionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOriginRequestPolicyRequestFilterSensitiveLog = (obj: GetOriginRequestPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOriginRequestPolicyResultFilterSensitiveLog = (obj: GetOriginRequestPolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOriginRequestPolicyConfigRequestFilterSensitiveLog = (
  obj: GetOriginRequestPolicyConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOriginRequestPolicyConfigResultFilterSensitiveLog = (obj: GetOriginRequestPolicyConfigResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPublicKeyRequestFilterSensitiveLog = (obj: GetPublicKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPublicKeyResultFilterSensitiveLog = (obj: GetPublicKeyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPublicKeyConfigRequestFilterSensitiveLog = (obj: GetPublicKeyConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPublicKeyConfigResultFilterSensitiveLog = (obj: GetPublicKeyConfigResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRealtimeLogConfigRequestFilterSensitiveLog = (obj: GetRealtimeLogConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRealtimeLogConfigResultFilterSensitiveLog = (obj: GetRealtimeLogConfigResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResponseHeadersPolicyRequestFilterSensitiveLog = (obj: GetResponseHeadersPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResponseHeadersPolicyResultFilterSensitiveLog = (obj: GetResponseHeadersPolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResponseHeadersPolicyConfigRequestFilterSensitiveLog = (
  obj: GetResponseHeadersPolicyConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResponseHeadersPolicyConfigResultFilterSensitiveLog = (
  obj: GetResponseHeadersPolicyConfigResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamingDistributionRequestFilterSensitiveLog = (obj: GetStreamingDistributionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamingDistributionResultFilterSensitiveLog = (obj: GetStreamingDistributionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamingDistributionConfigRequestFilterSensitiveLog = (
  obj: GetStreamingDistributionConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamingDistributionConfigResultFilterSensitiveLog = (
  obj: GetStreamingDistributionConfigResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCachePoliciesRequestFilterSensitiveLog = (obj: ListCachePoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCachePoliciesResultFilterSensitiveLog = (obj: ListCachePoliciesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCloudFrontOriginAccessIdentitiesRequestFilterSensitiveLog = (
  obj: ListCloudFrontOriginAccessIdentitiesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudFrontOriginAccessIdentitySummaryFilterSensitiveLog = (
  obj: CloudFrontOriginAccessIdentitySummary
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudFrontOriginAccessIdentityListFilterSensitiveLog = (obj: CloudFrontOriginAccessIdentityList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCloudFrontOriginAccessIdentitiesResultFilterSensitiveLog = (
  obj: ListCloudFrontOriginAccessIdentitiesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConflictingAliasesRequestFilterSensitiveLog = (obj: ListConflictingAliasesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConflictingAliasFilterSensitiveLog = (obj: ConflictingAlias): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConflictingAliasesListFilterSensitiveLog = (obj: ConflictingAliasesList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConflictingAliasesResultFilterSensitiveLog = (obj: ListConflictingAliasesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionsRequestFilterSensitiveLog = (obj: ListDistributionsRequest): any => ({
  ...obj,
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
export const ListDistributionsByCachePolicyIdRequestFilterSensitiveLog = (
  obj: ListDistributionsByCachePolicyIdRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DistributionIdListFilterSensitiveLog = (obj: DistributionIdList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionsByCachePolicyIdResultFilterSensitiveLog = (
  obj: ListDistributionsByCachePolicyIdResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionsByKeyGroupRequestFilterSensitiveLog = (obj: ListDistributionsByKeyGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionsByKeyGroupResultFilterSensitiveLog = (obj: ListDistributionsByKeyGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionsByOriginRequestPolicyIdRequestFilterSensitiveLog = (
  obj: ListDistributionsByOriginRequestPolicyIdRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionsByOriginRequestPolicyIdResultFilterSensitiveLog = (
  obj: ListDistributionsByOriginRequestPolicyIdResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionsByRealtimeLogConfigRequestFilterSensitiveLog = (
  obj: ListDistributionsByRealtimeLogConfigRequest
): any => ({
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
export const ListDistributionsByResponseHeadersPolicyIdRequestFilterSensitiveLog = (
  obj: ListDistributionsByResponseHeadersPolicyIdRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionsByResponseHeadersPolicyIdResultFilterSensitiveLog = (
  obj: ListDistributionsByResponseHeadersPolicyIdResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionsByWebACLIdRequestFilterSensitiveLog = (obj: ListDistributionsByWebACLIdRequest): any => ({
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
export const ListFieldLevelEncryptionConfigsRequestFilterSensitiveLog = (
  obj: ListFieldLevelEncryptionConfigsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldLevelEncryptionSummaryFilterSensitiveLog = (obj: FieldLevelEncryptionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldLevelEncryptionListFilterSensitiveLog = (obj: FieldLevelEncryptionList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFieldLevelEncryptionConfigsResultFilterSensitiveLog = (
  obj: ListFieldLevelEncryptionConfigsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFieldLevelEncryptionProfilesRequestFilterSensitiveLog = (
  obj: ListFieldLevelEncryptionProfilesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldLevelEncryptionProfileSummaryFilterSensitiveLog = (obj: FieldLevelEncryptionProfileSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldLevelEncryptionProfileListFilterSensitiveLog = (obj: FieldLevelEncryptionProfileList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFieldLevelEncryptionProfilesResultFilterSensitiveLog = (
  obj: ListFieldLevelEncryptionProfilesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFunctionsRequestFilterSensitiveLog = (obj: ListFunctionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunctionListFilterSensitiveLog = (obj: FunctionList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFunctionsResultFilterSensitiveLog = (obj: ListFunctionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInvalidationsRequestFilterSensitiveLog = (obj: ListInvalidationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvalidationSummaryFilterSensitiveLog = (obj: InvalidationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvalidationListFilterSensitiveLog = (obj: InvalidationList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInvalidationsResultFilterSensitiveLog = (obj: ListInvalidationsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListKeyGroupsRequestFilterSensitiveLog = (obj: ListKeyGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeyGroupSummaryFilterSensitiveLog = (obj: KeyGroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeyGroupListFilterSensitiveLog = (obj: KeyGroupList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListKeyGroupsResultFilterSensitiveLog = (obj: ListKeyGroupsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOriginRequestPoliciesRequestFilterSensitiveLog = (obj: ListOriginRequestPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginRequestPolicySummaryFilterSensitiveLog = (obj: OriginRequestPolicySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginRequestPolicyListFilterSensitiveLog = (obj: OriginRequestPolicyList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOriginRequestPoliciesResultFilterSensitiveLog = (obj: ListOriginRequestPoliciesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPublicKeysRequestFilterSensitiveLog = (obj: ListPublicKeysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublicKeySummaryFilterSensitiveLog = (obj: PublicKeySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublicKeyListFilterSensitiveLog = (obj: PublicKeyList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPublicKeysResultFilterSensitiveLog = (obj: ListPublicKeysResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRealtimeLogConfigsRequestFilterSensitiveLog = (obj: ListRealtimeLogConfigsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RealtimeLogConfigsFilterSensitiveLog = (obj: RealtimeLogConfigs): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRealtimeLogConfigsResultFilterSensitiveLog = (obj: ListRealtimeLogConfigsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResponseHeadersPoliciesRequestFilterSensitiveLog = (obj: ListResponseHeadersPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicySummaryFilterSensitiveLog = (obj: ResponseHeadersPolicySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseHeadersPolicyListFilterSensitiveLog = (obj: ResponseHeadersPolicyList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResponseHeadersPoliciesResultFilterSensitiveLog = (obj: ListResponseHeadersPoliciesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamingDistributionsRequestFilterSensitiveLog = (obj: ListStreamingDistributionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamingDistributionSummaryFilterSensitiveLog = (obj: StreamingDistributionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamingDistributionListFilterSensitiveLog = (obj: StreamingDistributionList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamingDistributionsResultFilterSensitiveLog = (obj: ListStreamingDistributionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResultFilterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishFunctionRequestFilterSensitiveLog = (obj: PublishFunctionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishFunctionResultFilterSensitiveLog = (obj: PublishFunctionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
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
export const TagKeysFilterSensitiveLog = (obj: TagKeys): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCachePolicyRequestFilterSensitiveLog = (obj: UpdateCachePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCachePolicyResultFilterSensitiveLog = (obj: UpdateCachePolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCloudFrontOriginAccessIdentityRequestFilterSensitiveLog = (
  obj: UpdateCloudFrontOriginAccessIdentityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCloudFrontOriginAccessIdentityResultFilterSensitiveLog = (
  obj: UpdateCloudFrontOriginAccessIdentityResult
): any => ({
  ...obj,
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
export const UpdateFieldLevelEncryptionConfigRequestFilterSensitiveLog = (
  obj: UpdateFieldLevelEncryptionConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFieldLevelEncryptionConfigResultFilterSensitiveLog = (
  obj: UpdateFieldLevelEncryptionConfigResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFieldLevelEncryptionProfileRequestFilterSensitiveLog = (
  obj: UpdateFieldLevelEncryptionProfileRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFieldLevelEncryptionProfileResultFilterSensitiveLog = (
  obj: UpdateFieldLevelEncryptionProfileResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFunctionRequestFilterSensitiveLog = (obj: UpdateFunctionRequest): any => ({
  ...obj,
  ...(obj.FunctionCode && { FunctionCode: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateFunctionResultFilterSensitiveLog = (obj: UpdateFunctionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateKeyGroupRequestFilterSensitiveLog = (obj: UpdateKeyGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateKeyGroupResultFilterSensitiveLog = (obj: UpdateKeyGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateOriginRequestPolicyRequestFilterSensitiveLog = (obj: UpdateOriginRequestPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateOriginRequestPolicyResultFilterSensitiveLog = (obj: UpdateOriginRequestPolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePublicKeyRequestFilterSensitiveLog = (obj: UpdatePublicKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePublicKeyResultFilterSensitiveLog = (obj: UpdatePublicKeyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRealtimeLogConfigRequestFilterSensitiveLog = (obj: UpdateRealtimeLogConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRealtimeLogConfigResultFilterSensitiveLog = (obj: UpdateRealtimeLogConfigResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResponseHeadersPolicyRequestFilterSensitiveLog = (obj: UpdateResponseHeadersPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResponseHeadersPolicyResultFilterSensitiveLog = (obj: UpdateResponseHeadersPolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStreamingDistributionRequestFilterSensitiveLog = (obj: UpdateStreamingDistributionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStreamingDistributionResultFilterSensitiveLog = (obj: UpdateStreamingDistributionResult): any => ({
  ...obj,
});
