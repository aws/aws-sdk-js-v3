// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudFrontServiceException as __BaseException } from "./CloudFrontServiceException";

import {
  ActiveTrustedSigners,
  Aliases,
  AliasICPRecordal,
  AnycastIpList,
  AnycastIpListCollection,
  CacheBehaviors,
  CachePolicy,
  CachePolicyConfig,
  CachePolicyList,
  CachePolicyType,
  CloudFrontOriginAccessIdentity,
  CloudFrontOriginAccessIdentityConfig,
  ConnectionGroup,
  ConnectionMode,
  ContentTypeProfileConfig,
  ContinuousDeploymentPolicy,
  ContinuousDeploymentPolicyConfig,
  CookieNames,
  CustomErrorResponses,
  Customizations,
  DefaultCacheBehavior,
  Distribution,
  DistributionConfig,
  DistributionTenant,
  DomainResult,
  EncryptionEntities,
  FieldLevelEncryption,
  FieldLevelEncryptionConfig,
  FieldLevelEncryptionProfile,
  FieldLevelEncryptionProfileConfig,
  FunctionStage,
  FunctionSummary,
  Headers,
  HttpVersion,
  Invalidation,
  KeyGroup,
  KeyGroupConfig,
  KeyValueStore,
  MonitoringSubscription,
  OriginAccessControl,
  OriginAccessControlConfig,
  OriginAccessControlOriginTypes,
  OriginAccessControlSigningBehaviors,
  OriginAccessControlSigningProtocols,
  OriginGroups,
  OriginProtocolPolicy,
  Origins,
  OriginSslProtocols,
  PriceClass,
  QueryArgProfileConfig,
  QueryStringNames,
  ResponseHeadersPolicyAccessControlAllowMethodsValues,
  Restrictions,
  Tags,
  TrustedSigners,
  ValidationTokenHost,
  ViewerCertificate,
} from "./models_0";

/**
 * <p>An origin access control with the specified parameters already exists.</p>
 * @public
 */
export class OriginAccessControlAlreadyExists extends __BaseException {
  readonly name: "OriginAccessControlAlreadyExists" = "OriginAccessControlAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The number of origin access controls in your Amazon Web Services account exceeds the maximum allowed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyOriginAccessControls extends __BaseException {
  readonly name: "TooManyOriginAccessControls" = "TooManyOriginAccessControls";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>An origin request policy with this name already exists. You must provide a unique name. To modify an existing origin request policy, use <code>UpdateOriginRequestPolicy</code>.</p>
 * @public
 */
export class OriginRequestPolicyAlreadyExists extends __BaseException {
  readonly name: "OriginRequestPolicyAlreadyExists" = "OriginRequestPolicyAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The number of cookies in the origin request policy exceeds the maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyCookiesInOriginRequestPolicy extends __BaseException {
  readonly name: "TooManyCookiesInOriginRequestPolicy" = "TooManyCookiesInOriginRequestPolicy";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The number of headers in the origin request policy exceeds the maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyHeadersInOriginRequestPolicy extends __BaseException {
  readonly name: "TooManyHeadersInOriginRequestPolicy" = "TooManyHeadersInOriginRequestPolicy";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>You have reached the maximum number of origin request policies for this Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyOriginRequestPolicies extends __BaseException {
  readonly name: "TooManyOriginRequestPolicies" = "TooManyOriginRequestPolicies";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The number of query strings in the origin request policy exceeds the maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyQueryStringsInOriginRequestPolicy extends __BaseException {
  readonly name: "TooManyQueryStringsInOriginRequestPolicy" = "TooManyQueryStringsInOriginRequestPolicy";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>A public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
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
 * <p>The specified public key already exists.</p>
 * @public
 */
export class PublicKeyAlreadyExists extends __BaseException {
  readonly name: "PublicKeyAlreadyExists" = "PublicKeyAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class TooManyPublicKeys extends __BaseException {
  readonly name: "TooManyPublicKeys" = "TooManyPublicKeys";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>A real-time log configuration with this name already exists. You must provide a unique name. To modify an existing real-time log configuration, use <code>UpdateRealtimeLogConfig</code>.</p>
 * @public
 */
export class RealtimeLogConfigAlreadyExists extends __BaseException {
  readonly name: "RealtimeLogConfigAlreadyExists" = "RealtimeLogConfigAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>You have reached the maximum number of real-time log configurations for this Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyRealtimeLogConfigs extends __BaseException {
  readonly name: "TooManyRealtimeLogConfigs" = "TooManyRealtimeLogConfigs";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>A response headers policy with this name already exists. You must provide a unique name. To modify an existing response headers policy, use <code>UpdateResponseHeadersPolicy</code>.</p>
 * @public
 */
export class ResponseHeadersPolicyAlreadyExists extends __BaseException {
  readonly name: "ResponseHeadersPolicyAlreadyExists" = "ResponseHeadersPolicyAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The length of the <code>Content-Security-Policy</code> header value in the response headers policy exceeds the maximum.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooLongCSPInResponseHeadersPolicy extends __BaseException {
  readonly name: "TooLongCSPInResponseHeadersPolicy" = "TooLongCSPInResponseHeadersPolicy";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The number of custom headers in the response headers policy exceeds the maximum.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyCustomHeadersInResponseHeadersPolicy extends __BaseException {
  readonly name: "TooManyCustomHeadersInResponseHeadersPolicy" = "TooManyCustomHeadersInResponseHeadersPolicy";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The number of headers in <code>RemoveHeadersConfig</code> in the response headers policy exceeds the maximum.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyRemoveHeadersInResponseHeadersPolicy extends __BaseException {
  readonly name: "TooManyRemoveHeadersInResponseHeadersPolicy" = "TooManyRemoveHeadersInResponseHeadersPolicy";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>You have reached the maximum number of response headers policies for this Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyResponseHeadersPolicies extends __BaseException {
  readonly name: "TooManyResponseHeadersPolicies" = "TooManyResponseHeadersPolicies";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The caller reference you attempted to create the streaming distribution with is associated with another distribution</p>
 * @public
 */
export class StreamingDistributionAlreadyExists extends __BaseException {
  readonly name: "StreamingDistributionAlreadyExists" = "StreamingDistributionAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class TooManyStreamingDistributionCNAMEs extends __BaseException {
  readonly name: "TooManyStreamingDistributionCNAMEs" = "TooManyStreamingDistributionCNAMEs";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class TooManyStreamingDistributions extends __BaseException {
  readonly name: "TooManyStreamingDistributions" = "TooManyStreamingDistributions";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>Deletion is not allowed for this entity.</p>
 * @public
 */
export class IllegalDelete extends __BaseException {
  readonly name: "IllegalDelete" = "IllegalDelete";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The Origin Access Identity specified is already in use.</p>
 * @public
 */
export class CloudFrontOriginAccessIdentityInUse extends __BaseException {
  readonly name: "CloudFrontOriginAccessIdentityInUse" = "CloudFrontOriginAccessIdentityInUse";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The specified origin access identity does not exist.</p>
 * @public
 */
export class NoSuchCloudFrontOriginAccessIdentity extends __BaseException {
  readonly name: "NoSuchCloudFrontOriginAccessIdentity" = "NoSuchCloudFrontOriginAccessIdentity";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The specified CloudFront resource hasn't been disabled yet.</p>
 * @public
 */
export class ResourceNotDisabled extends __BaseException {
  readonly name: "ResourceNotDisabled" = "ResourceNotDisabled";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotDisabled, __BaseException>) {
    super({
      name: "ResourceNotDisabled",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotDisabled.prototype);
    this.Message = opts.Message;
  }
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
 * <p>The specified CloudFront distribution is not disabled. You must disable the distribution before you can delete it.</p>
 * @public
 */
export class DistributionNotDisabled extends __BaseException {
  readonly name: "DistributionNotDisabled" = "DistributionNotDisabled";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>Cannot delete this resource because it is in use.</p>
 * @public
 */
export class ResourceInUse extends __BaseException {
  readonly name: "ResourceInUse" = "ResourceInUse";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The specified configuration for field-level encryption is in use.</p>
 * @public
 */
export class FieldLevelEncryptionConfigInUse extends __BaseException {
  readonly name: "FieldLevelEncryptionConfigInUse" = "FieldLevelEncryptionConfigInUse";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The specified profile for field-level encryption is in use.</p>
 * @public
 */
export class FieldLevelEncryptionProfileInUse extends __BaseException {
  readonly name: "FieldLevelEncryptionProfileInUse" = "FieldLevelEncryptionProfileInUse";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>Cannot delete the function because it's attached to one or more cache behaviors.</p>
 * @public
 */
export class FunctionInUse extends __BaseException {
  readonly name: "FunctionInUse" = "FunctionInUse";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class NoSuchFunctionExists extends __BaseException {
  readonly name: "NoSuchFunctionExists" = "NoSuchFunctionExists";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>A resource that was specified is not valid.</p>
 * @public
 */
export class NoSuchResource extends __BaseException {
  readonly name: "NoSuchResource" = "NoSuchResource";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>A monitoring subscription does not exist for the specified distribution.</p>
 * @public
 */
export class NoSuchMonitoringSubscription extends __BaseException {
  readonly name: "NoSuchMonitoringSubscription" = "NoSuchMonitoringSubscription";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The origin access control does not exist.</p>
 * @public
 */
export class NoSuchOriginAccessControl extends __BaseException {
  readonly name: "NoSuchOriginAccessControl" = "NoSuchOriginAccessControl";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>Cannot delete the origin access control because it's in use by one or more distributions.</p>
 * @public
 */
export class OriginAccessControlInUse extends __BaseException {
  readonly name: "OriginAccessControlInUse" = "OriginAccessControlInUse";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>Cannot delete the origin request policy because it is attached to one or more cache behaviors.</p>
 * @public
 */
export class OriginRequestPolicyInUse extends __BaseException {
  readonly name: "OriginRequestPolicyInUse" = "OriginRequestPolicyInUse";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The specified public key is in use.</p>
 * @public
 */
export class PublicKeyInUse extends __BaseException {
  readonly name: "PublicKeyInUse" = "PublicKeyInUse";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>Cannot delete the real-time log configuration because it is attached to one or more cache behaviors.</p>
 * @public
 */
export class RealtimeLogConfigInUse extends __BaseException {
  readonly name: "RealtimeLogConfigInUse" = "RealtimeLogConfigInUse";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>Cannot delete the response headers policy because it is attached to one or more cache behaviors in a CloudFront distribution.</p>
 * @public
 */
export class ResponseHeadersPolicyInUse extends __BaseException {
  readonly name: "ResponseHeadersPolicyInUse" = "ResponseHeadersPolicyInUse";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The specified streaming distribution does not exist.</p>
 * @public
 */
export class NoSuchStreamingDistribution extends __BaseException {
  readonly name: "NoSuchStreamingDistribution" = "NoSuchStreamingDistribution";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The specified CloudFront distribution is not disabled. You must disable the distribution before you can delete it.</p>
 * @public
 */
export class StreamingDistributionNotDisabled extends __BaseException {
  readonly name: "StreamingDistributionNotDisabled" = "StreamingDistributionNotDisabled";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The specified invalidation does not exist.</p>
 * @public
 */
export class NoSuchInvalidation extends __BaseException {
  readonly name: "NoSuchInvalidation" = "NoSuchInvalidation";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 */
export interface GetRealtimeLogConfigRequest {
  /**
   * <p>The name of the real-time log configuration to get.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration to get.</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface GetRealtimeLogConfigResult {
  /**
   * <p>A real-time log configuration.</p>
   * @public
   */
  RealtimeLogConfig?: RealtimeLogConfig | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyRequest {
  /**
   * <p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyResult {
  /**
   * <p>Contains a response headers policy.</p>
   * @public
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy | undefined;

  /**
   * <p>The version identifier for the current version of the response headers policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyConfigRequest {
  /**
   * <p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyConfigResult {
  /**
   * <p>Contains a response headers policy.</p>
   * @public
   */
  ResponseHeadersPolicyConfig?: ResponseHeadersPolicyConfig | undefined;

  /**
   * <p>The version identifier for the current version of the response headers policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The request to get a streaming distribution's information.</p>
 * @public
 */
export interface GetStreamingDistributionRequest {
  /**
   * <p>The streaming distribution's ID.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface GetStreamingDistributionResult {
  /**
   * <p>The streaming distribution's information.</p>
   * @public
   */
  StreamingDistribution?: StreamingDistribution | undefined;

  /**
   * <p>The current version of the streaming distribution's information. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>To request to get a streaming distribution configuration.</p>
 * @public
 */
export interface GetStreamingDistributionConfigRequest {
  /**
   * <p>The streaming distribution's ID.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface GetStreamingDistributionConfigResult {
  /**
   * <p>The streaming distribution's configuration information.</p>
   * @public
   */
  StreamingDistributionConfig?: StreamingDistributionConfig | undefined;

  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>. </p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetVpcOriginRequest {
  /**
   * <p>The VPC origin ID.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetVpcOriginResult {
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
export interface ListAnycastIpListsRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of Anycast static IP lists that you want returned in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListAnycastIpListsResult {
  /**
   * <p>Root level tag for the <code>AnycastIpLists</code> parameters.</p>
   * @public
   */
  AnycastIpLists?: AnycastIpListCollection | undefined;
}

/**
 * @public
 */
export interface ListCachePoliciesRequest {
  /**
   * <p>A filter to return only the specified kinds of cache policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>
   * @public
   */
  Type?: CachePolicyType | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of cache policies. The response includes cache policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of cache policies that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListCachePoliciesResult {
  /**
   * <p>A list of cache policies.</p>
   * @public
   */
  CachePolicyList?: CachePolicyList | undefined;
}

/**
 * <p>The request to list origin access identities.</p>
 * @public
 */
export interface ListCloudFrontOriginAccessIdentitiesRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of origin access identities you want in the response body.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Summary of the information about a CloudFront origin access identity.</p>
 * @public
 */
export interface CloudFrontOriginAccessIdentitySummary {
  /**
   * <p>The ID for the origin access identity. For example: <code>E74FTE3AJFJ256A</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon S3 canonical user ID for the origin access identity, which you use when giving the origin access identity read permission to an object in Amazon S3.</p>
   * @public
   */
  S3CanonicalUserId: string | undefined;

  /**
   * <p>The comment for this origin access identity, as originally specified when created.</p>
   * @public
   */
  Comment: string | undefined;
}

/**
 * <p>Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 * @public
 */
export interface CloudFrontOriginAccessIdentityList {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value you can use for the <code>Marker</code> request parameter to continue listing your origin access identities where they left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of origin access identities you want in the response body.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more origin access identities remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more items in the list.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of CloudFront origin access identities that were created by the current Amazon Web Services account.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains one <code>CloudFrontOriginAccessIdentitySummary</code> element for each origin access identity that was created by the current Amazon Web Services account.</p>
   * @public
   */
  Items?: CloudFrontOriginAccessIdentitySummary[] | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface ListCloudFrontOriginAccessIdentitiesResult {
  /**
   * <p>The <code>CloudFrontOriginAccessIdentityList</code> type.</p>
   * @public
   */
  CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList | undefined;
}

/**
 * @public
 */
export interface ListConflictingAliasesRequest {
  /**
   * <p>The ID of a standard distribution in your account that has an attached TLS certificate that includes the provided alias.</p>
   * @public
   */
  DistributionId: string | undefined;

  /**
   * <p>The alias (also called a CNAME) to search for conflicting aliases.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in the list of conflicting aliases. The response includes conflicting aliases in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of conflicting aliases that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>An alias (also called a CNAME) and the CloudFront standard distribution and Amazon Web Services account ID that it's associated with. The standard distribution and account IDs are partially hidden, which allows you to identify the standard distributions and accounts that you own, and helps to protect the information of ones that you don't own.</p>
 * @public
 */
export interface ConflictingAlias {
  /**
   * <p>An alias (also called a CNAME).</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>The (partially hidden) ID of the CloudFront standard distribution associated with the alias.</p>
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * <p>The (partially hidden) ID of the Amazon Web Services account that owns the standard distribution that's associated with the alias.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p>A list of aliases (also called CNAMEs) and the CloudFront standard distributions and Amazon Web Services accounts that they are associated with. In the list, the standard distribution and account IDs are partially hidden, which allows you to identify the standard distributions and accounts that you own, but helps to protect the information of ones that you don't own.</p>
 * @public
 */
export interface ConflictingAliasesList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing conflicting aliases where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of conflicting aliases requested.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The number of conflicting aliases returned in the response.</p>
   * @public
   */
  Quantity?: number | undefined;

  /**
   * <p>Contains the conflicting aliases in the list.</p>
   * @public
   */
  Items?: ConflictingAlias[] | undefined;
}

/**
 * @public
 */
export interface ListConflictingAliasesResult {
  /**
   * <p>A list of conflicting aliases.</p>
   * @public
   */
  ConflictingAliasesList?: ConflictingAliasesList | undefined;
}

/**
 * <p>Contains information about what CloudFront resources your connection groups are associated with.</p>
 * @public
 */
export interface ConnectionGroupAssociationFilter {
  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  AnycastIpListId?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionGroupsRequest {
  /**
   * <p>Filter by associated Anycast IP list ID.</p>
   * @public
   */
  AssociationFilter?: ConnectionGroupAssociationFilter | undefined;

  /**
   * <p>The marker for the next set of connection groups to retrieve.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of connection groups to return.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary that contains details about your connection groups.</p>
 * @public
 */
export interface ConnectionGroupSummary {
  /**
   * <p>The ID of the connection group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the connection group.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection group.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The routing endpoint (also known as the DNS name) that is assigned to the connection group, such as d111111abcdef8.cloudfront.net.</p>
   * @public
   */
  RoutingEndpoint: string | undefined;

  /**
   * <p>The date and time when the connection group was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The date and time when the connection group was updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The current version of the connection group.</p>
   * @public
   */
  ETag: string | undefined;

  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * <p>Whether the connection group is enabled</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The status of the connection group.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Whether the connection group is the default connection group for the distribution tenants.</p>
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface ListConnectionGroupsResult {
  /**
   * <p>A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The list of connection groups that you retrieved.</p>
   * @public
   */
  ConnectionGroups?: ConnectionGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListContinuousDeploymentPoliciesRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of continuous deployment policies. The response includes policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of continuous deployment policies that you want returned in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary of the information about your continuous deployment policies.</p>
 * @public
 */
export interface ContinuousDeploymentPolicySummary {
  /**
   * <p>The continuous deployment policy.</p>
   * @public
   */
  ContinuousDeploymentPolicy: ContinuousDeploymentPolicy | undefined;
}

/**
 * <p>Contains a list of continuous deployment policies.</p>
 * @public
 */
export interface ContinuousDeploymentPolicyList {
  /**
   * <p>Indicates the next page of continuous deployment policies. To get the next page of the list, use this value in the <code>Marker</code> field of your request.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of continuous deployment policies that were specified in your request.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The total number of continuous deployment policies in your Amazon Web Services account, regardless of the <code>MaxItems</code> value.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of continuous deployment policy items.</p>
   * @public
   */
  Items?: ContinuousDeploymentPolicySummary[] | undefined;
}

/**
 * @public
 */
export interface ListContinuousDeploymentPoliciesResult {
  /**
   * <p>A list of continuous deployment policies.</p>
   * @public
   */
  ContinuousDeploymentPolicyList?: ContinuousDeploymentPolicyList | undefined;
}

/**
 * <p>The request to list your distributions.</p>
 * @public
 */
export interface ListDistributionsRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last distribution on that page).</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distributions you want in the response body.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary of the information about a CloudFront distribution.</p>
 * @public
 */
export interface DistributionSummary {
  /**
   * <p>The identifier for the distribution. For example: <code>EDFDVBD632BHDS5</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) for the distribution. For example: <code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where <code>123456789012</code> is your Amazon Web Services account ID.</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p>The current version of the distribution.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The current status of the distribution. When the status is <code>Deployed</code>, the distribution's information is propagated to all CloudFront edge locations.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The date and time the distribution was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The domain name that corresponds to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.</p>
   * @public
   */
  Aliases: Aliases | undefined;

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
  CacheBehaviors: CacheBehaviors | undefined;

  /**
   * <p>A complex type that contains zero or more <code>CustomErrorResponses</code> elements.</p>
   * @public
   */
  CustomErrorResponses: CustomErrorResponses | undefined;

  /**
   * <p>The comment originally specified when this distribution was created.</p>
   * @public
   */
  Comment: string | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>A complex type that contains information about price class for this streaming distribution.</p>
   * @public
   */
  PriceClass: PriceClass | undefined;

  /**
   * <p>Whether the distribution is enabled to accept user requests for content.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.</p>
   * @public
   */
  ViewerCertificate: ViewerCertificate | undefined;

  /**
   * <p>A complex type that identifies ways in which you want to restrict distribution of your content.</p>
   * @public
   */
  Restrictions: Restrictions | undefined;

  /**
   * <p>The Web ACL Id (if any) associated with the distribution.</p>
   * @public
   */
  WebACLId: string | undefined;

  /**
   * <p>Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront. The default value for new web distributions is <code>http2</code>. Viewers that don't support <code>HTTP/2</code> will automatically use an earlier version.</p>
   * @public
   */
  HttpVersion: HttpVersion | undefined;

  /**
   * <p>Whether CloudFront responds to IPv6 DNS requests with an IPv6 address for your distribution.</p>
   * @public
   */
  IsIPV6Enabled: boolean | undefined;

  /**
   * <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>
   * @public
   */
  AliasICPRecordals?: AliasICPRecordal[] | undefined;

  /**
   * <p>A Boolean that indicates whether this is a staging distribution. When this value is <code>true</code>, this is a staging distribution. When this value is <code>false</code>, this is not a staging distribution.</p>
   * @public
   */
  Staging: boolean | undefined;

  /**
   * <p>This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).</p>
   * @public
   */
  ConnectionMode?: ConnectionMode | undefined;

  /**
   * <p>ID of the Anycast static IP list that is associated with the distribution.</p>
   * @public
   */
  AnycastIpListId?: string | undefined;
}

/**
 * <p>A distribution list.</p>
 * @public
 */
export interface DistributionList {
  /**
   * <p>The value you provided for the <code>Marker</code> request parameter.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value you can use for the <code>Marker</code> request parameter to continue listing your distributions where they left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The value you provided for the <code>MaxItems</code> request parameter.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more distributions in the list.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of distributions that were created by the current Amazon Web Services account.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains one <code>DistributionSummary</code> element for each distribution that was created by the current Amazon Web Services account.</p>
   * @public
   */
  Items?: DistributionSummary[] | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface ListDistributionsResult {
  /**
   * <p>The <code>DistributionList</code> type.</p>
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByAnycastIpListIdRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distributions that you want returned in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  AnycastIpListId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByAnycastIpListIdResult {
  /**
   * <p>A distribution list.</p>
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByCachePolicyIdRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distribution IDs that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The ID of the cache policy whose associated distribution IDs you want to list.</p>
   * @public
   */
  CachePolicyId: string | undefined;
}

/**
 * <p>A list of distribution IDs.</p>
 * @public
 */
export interface DistributionIdList {
  /**
   * <p>The value provided in the <code>Marker</code> request field.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>Contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing distribution IDs where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of distribution IDs requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more distribution IDs remain to be listed. If your results were truncated, you can make a subsequent request using the <code>Marker</code> request field to retrieve more distribution IDs in the list.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The total number of distribution IDs returned in the response.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the distribution IDs in the list.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByCachePolicyIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByConnectionModeRequest {
  /**
   * <p> The marker for the next set of distributions to retrieve.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distributions to return.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).</p>
   * @public
   */
  ConnectionMode: ConnectionMode | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByConnectionModeResult {
  /**
   * <p>A distribution list.</p>
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByKeyGroupRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distribution IDs that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The ID of the key group whose associated distribution IDs you are listing.</p>
   * @public
   */
  KeyGroupId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByKeyGroupResult {
  /**
   * <p>A list of distribution IDs.</p>
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByOriginRequestPolicyIdRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distribution IDs that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The ID of the origin request policy whose associated distribution IDs you want to list.</p>
   * @public
   */
  OriginRequestPolicyId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByOriginRequestPolicyIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByRealtimeLogConfigRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of distributions. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distributions that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The name of the real-time log configuration whose associated distributions you want to list.</p>
   * @public
   */
  RealtimeLogConfigName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration whose associated distributions you want to list.</p>
   * @public
   */
  RealtimeLogConfigArn?: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByRealtimeLogConfigResult {
  /**
   * <p>A distribution list.</p>
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByResponseHeadersPolicyIdRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distribution IDs that you want to get in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The ID of the response headers policy whose associated distribution IDs you want to list.</p>
   * @public
   */
  ResponseHeadersPolicyId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByResponseHeadersPolicyIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByVpcOriginIdRequest {
  /**
   * <p>The marker associated with the VPC origin distributions list.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of items included in the list.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The VPC origin ID.</p>
   * @public
   */
  VpcOriginId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByVpcOriginIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * <p>The request to list distributions that are associated with a specified WAF web ACL.</p>
 * @public
 */
export interface ListDistributionsByWebACLIdRequest {
  /**
   * <p>Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If you have more than <code>MaxItems</code> distributions that satisfy the request, the response includes a <code>NextMarker</code> element. To get the next page of results, submit another request. For the value of <code>Marker</code>, specify the value of <code>NextMarker</code> from the last response. (For the first request, omit <code>Marker</code>.)</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distributions that you want CloudFront to return in the response body. The maximum and default values are both 100.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The ID of the WAF web ACL that you want to list the associated distributions. If you specify "null" for the ID, the request returns a list of the distributions that aren't associated with a web ACL. </p> <p>For WAFV2, this is the ARN of the web ACL, such as <code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>.</p> <p>For WAF Classic, this is the ID of the web ACL, such as <code>a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>.</p>
   * @public
   */
  WebACLId: string | undefined;
}

/**
 * <p>The response to a request to list the distributions that are associated with a specified WAF web ACL.</p>
 * @public
 */
export interface ListDistributionsByWebACLIdResult {
  /**
   * <p>The <code>DistributionList</code> type.</p>
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * <p>Filter by the associated distribution ID or connection group ID.</p>
 * @public
 */
export interface DistributionTenantAssociationFilter {
  /**
   * <p>The distribution ID to filter by. You can find distribution tenants associated with a specific distribution.</p>
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * <p>The ID of the connection group to filter by. You can find distribution tenants associated with a specific connection group.</p>
   * @public
   */
  ConnectionGroupId?: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionTenantsRequest {
  /**
   * <p>Filter by the associated distribution ID or connection group ID.</p>
   * @public
   */
  AssociationFilter?: DistributionTenantAssociationFilter | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distribution tenants to return.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary of the information about a distribution tenant.</p>
 * @public
 */
export interface DistributionTenantSummary {
  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier for the multi-tenant distribution. For example: <code>EDFDVBD632BHDS5</code>.</p>
   * @public
   */
  DistributionId: string | undefined;

  /**
   * <p>The name of the distribution tenant.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution tenant.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The domains associated with the distribution tenant.</p>
   * @public
   */
  Domains: DomainResult[] | undefined;

  /**
   * <p>The ID of the connection group ID for the distribution tenant. If you don't specify a connection group, CloudFront uses the default connection group.</p>
   * @public
   */
  ConnectionGroupId?: string | undefined;

  /**
   * <p>Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.</p>
   * @public
   */
  Customizations?: Customizations | undefined;

  /**
   * <p>The date and time when the distribution tenant was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The date and time when the distribution tenant was updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The current version of the distribution tenant.</p>
   * @public
   */
  ETag: string | undefined;

  /**
   * <p>Indicates whether the distribution tenants are in an enabled state. If disabled, the distribution tenant won't service traffic.</p>
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
export interface ListDistributionTenantsResult {
  /**
   * <p>A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The list of distribution tenants that you retrieved.</p>
   * @public
   */
  DistributionTenantList?: DistributionTenantSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDistributionTenantsByCustomizationRequest {
  /**
   * <p>Filter by the ARN of the associated WAF web ACL.</p>
   * @public
   */
  WebACLArn?: string | undefined;

  /**
   * <p>Filter by the ARN of the associated ACM certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distribution tenants to return by the specified customization.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListDistributionTenantsByCustomizationResult {
  /**
   * <p>A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>A list of distribution tenants with the specified customization.</p>
   * @public
   */
  DistributionTenantList?: DistributionTenantSummary[] | undefined;
}

/**
 * <p>The IDs for the distribution resources.</p>
 * @public
 */
export interface DistributionResourceId {
  /**
   * <p>The ID of the multi-tenant distribution.</p>
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  DistributionTenantId?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainConflictsRequest {
  /**
   * <p>The domain to check for conflicts.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The distribution resource identifier. This can be the standard distribution or distribution tenant that has a valid certificate, which covers the domain that you specify.</p>
   * @public
   */
  DomainControlValidationResource: DistributionResourceId | undefined;

  /**
   * <p>The maximum number of domain conflicts to return.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The marker for the next set of domain conflicts.</p>
   * @public
   */
  Marker?: string | undefined;
}

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
 * <p>Contains information about the domain conflict. Use this information to determine the affected domain, the related resource, and the affected Amazon Web Services account.</p>
 * @public
 */
export interface DomainConflict {
  /**
   * <p>The domain used to find existing conflicts for domain configurations.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The CloudFront resource type that has a domain conflict.</p>
   * @public
   */
  ResourceType: DistributionResourceType | undefined;

  /**
   * <p>The ID of the resource that has a domain conflict.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account for the domain conflict.</p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface ListDomainConflictsResult {
  /**
   * <p>Contains details about the domain conflicts.</p>
   * @public
   */
  DomainConflicts?: DomainConflict[] | undefined;

  /**
   * <p>A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.</p>
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionConfigsRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page).</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of field-level encryption configurations you want in the response body.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary of a field-level encryption item.</p>
 * @public
 */
export interface FieldLevelEncryptionSummary {
  /**
   * <p>The unique ID of a field-level encryption item.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The last time that the summary of field-level encryption items was modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>An optional comment about the field-level encryption item. The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>A summary of a query argument-profile mapping.</p>
   * @public
   */
  QueryArgProfileConfig?: QueryArgProfileConfig | undefined;

  /**
   * <p>A summary of a content type-profile mapping.</p>
   * @public
   */
  ContentTypeProfileConfig?: ContentTypeProfileConfig | undefined;
}

/**
 * <p>List of field-level encryption configurations.</p>
 * @public
 */
export interface FieldLevelEncryptionList {
  /**
   * <p>If there are more elements to be listed, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your configurations where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of elements you want in the response body.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of field-level encryption items.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>An array of field-level encryption items.</p>
   * @public
   */
  Items?: FieldLevelEncryptionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionConfigsResult {
  /**
   * <p>Returns a list of all field-level encryption configurations that have been created in CloudFront for this account.</p>
   * @public
   */
  FieldLevelEncryptionList?: FieldLevelEncryptionList | undefined;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionProfilesRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last profile on that page).</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of field-level encryption profiles you want in the response body. </p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>The field-level encryption profile summary.</p>
 * @public
 */
export interface FieldLevelEncryptionProfileSummary {
  /**
   * <p>ID for the field-level encryption profile summary.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The time when the field-level encryption profile summary was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Name for the field-level encryption profile summary.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.</p>
   * @public
   */
  EncryptionEntities: EncryptionEntities | undefined;

  /**
   * <p>An optional comment for the field-level encryption profile summary. The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment?: string | undefined;
}

/**
 * <p>List of field-level encryption profiles.</p>
 * @public
 */
export interface FieldLevelEncryptionProfileList {
  /**
   * <p>If there are more elements to be listed, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your profiles where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of field-level encryption profiles you want in the response body. </p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of field-level encryption profiles.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The field-level encryption profile items.</p>
   * @public
   */
  Items?: FieldLevelEncryptionProfileSummary[] | undefined;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionProfilesResult {
  /**
   * <p>Returns a list of the field-level encryption profiles that have been created in CloudFront for this account.</p>
   * @public
   */
  FieldLevelEncryptionProfileList?: FieldLevelEncryptionProfileList | undefined;
}

/**
 * @public
 */
export interface ListFunctionsRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of functions. The response includes functions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of functions that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>An optional filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   * @public
   */
  Stage?: FunctionStage | undefined;
}

/**
 * <p>A list of CloudFront functions.</p>
 * @public
 */
export interface FunctionList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing functions where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of functions requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of functions returned in the response.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the functions in the list.</p>
   * @public
   */
  Items?: FunctionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListFunctionsResult {
  /**
   * <p>A list of CloudFront functions.</p>
   * @public
   */
  FunctionList?: FunctionList | undefined;
}

/**
 * <p>The request to list invalidations.</p>
 * @public
 */
export interface ListInvalidationsRequest {
  /**
   * <p>The distribution's ID.</p>
   * @public
   */
  DistributionId: string | undefined;

  /**
   * <p>Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response. This value is the same as the ID of the last invalidation batch on that page.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of invalidation batches that you want in the response body.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary of an invalidation request.</p>
 * @public
 */
export interface InvalidationSummary {
  /**
   * <p>The unique ID for an invalidation request.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The time that an invalidation request was created.</p>
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * <p>The status of an invalidation request.</p>
   * @public
   */
  Status: string | undefined;
}

/**
 * <p>The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface InvalidationList {
  /**
   * <p>The value that you provided for the <code>Marker</code> request parameter.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your invalidation batches where they left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The value that you provided for the <code>MaxItems</code> request parameter.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more invalidation batch requests remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more invalidation batches in the list.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of invalidation batches that were created by the current Amazon Web Services account. </p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains one <code>InvalidationSummary</code> element for each invalidation batch created by the current Amazon Web Services account.</p>
   * @public
   */
  Items?: InvalidationSummary[] | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface ListInvalidationsResult {
  /**
   * <p>Information about invalidation batches.</p>
   * @public
   */
  InvalidationList?: InvalidationList | undefined;
}

/**
 * @public
 */
export interface ListInvalidationsForDistributionTenantRequest {
  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response. This value is the same as the ID of the last invalidation batch on that page.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of invalidations to return for the distribution tenant.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListInvalidationsForDistributionTenantResult {
  /**
   * <p>The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  InvalidationList?: InvalidationList | undefined;
}

/**
 * @public
 */
export interface ListKeyGroupsRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of key groups. The response includes key groups in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of key groups that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains information about a key group.</p>
 * @public
 */
export interface KeyGroupSummary {
  /**
   * <p>A key group.</p>
   * @public
   */
  KeyGroup: KeyGroup | undefined;
}

/**
 * <p>A list of key groups.</p>
 * @public
 */
export interface KeyGroupList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing key groups.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of key groups requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of key groups returned in the response.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of key groups.</p>
   * @public
   */
  Items?: KeyGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListKeyGroupsResult {
  /**
   * <p>A list of key groups.</p>
   * @public
   */
  KeyGroupList?: KeyGroupList | undefined;
}

/**
 * @public
 */
export interface ListKeyValueStoresRequest {
  /**
   * <p>The marker associated with the key value stores list.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of items in the key value stores list.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The status of the request for the key value stores list.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>The key value store list.</p>
 * @public
 */
export interface KeyValueStoreList {
  /**
   * <p>The next marker associated with the key value store list.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of items in the key value store list.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The quantity of the key value store list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The items of the key value store list.</p>
   * @public
   */
  Items?: KeyValueStore[] | undefined;
}

/**
 * @public
 */
export interface ListKeyValueStoresResult {
  /**
   * <p>The resulting key value stores list.</p>
   * @public
   */
  KeyValueStoreList?: KeyValueStoreList | undefined;
}

/**
 * @public
 */
export interface ListOriginAccessControlsRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of origin access controls. The response includes the items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of origin access controls that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A CloudFront origin access control.</p>
 * @public
 */
export interface OriginAccessControlSummary {
  /**
   * <p>The unique identifier of the origin access control.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>A description of the origin access control.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A unique name that identifies the origin access control.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The signing protocol of the origin access control. The signing protocol determines how CloudFront signs (authenticates) requests. The only valid value is <code>sigv4</code>.</p>
   * @public
   */
  SigningProtocol: OriginAccessControlSigningProtocols | undefined;

  /**
   * <p>A value that specifies which requests CloudFront signs (adds authentication information to). This field can have one of the following values:</p> <ul> <li> <p> <code>never</code> – CloudFront doesn't sign any origin requests.</p> </li> <li> <p> <code>always</code> – CloudFront signs all origin requests, overwriting the <code>Authorization</code> header from the viewer request if necessary.</p> </li> <li> <p> <code>no-override</code> – If the viewer request doesn't contain the <code>Authorization</code> header, CloudFront signs the origin request. If the viewer request contains the <code>Authorization</code> header, CloudFront doesn't sign the origin request, but instead passes along the <code>Authorization</code> header that it received in the viewer request.</p> </li> </ul>
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
 * <p>A list of CloudFront origin access controls.</p>
 * @public
 */
export interface OriginAccessControlList {
  /**
   * <p>The value of the <code>Marker</code> field that was provided in the request.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value to use in the <code>Marker</code> field of another request to continue listing origin access controls.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of origin access controls requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>If there are more items in the list than are in this response, this value is <code>true</code>.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of origin access controls returned in the response.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the origin access controls in the list.</p>
   * @public
   */
  Items?: OriginAccessControlSummary[] | undefined;
}

/**
 * @public
 */
export interface ListOriginAccessControlsResult {
  /**
   * <p>A list of origin access controls.</p>
   * @public
   */
  OriginAccessControlList?: OriginAccessControlList | undefined;
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
   * <p>A filter to return only the specified kinds of origin request policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>
   * @public
   */
  Type?: OriginRequestPolicyType | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of origin request policies. The response includes origin request policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of origin request policies that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains an origin request policy.</p>
 * @public
 */
export interface OriginRequestPolicySummary {
  /**
   * <p>The type of origin request policy, either <code>managed</code> (created by Amazon Web Services) or <code>custom</code> (created in this Amazon Web Services account).</p>
   * @public
   */
  Type: OriginRequestPolicyType | undefined;

  /**
   * <p>The origin request policy.</p>
   * @public
   */
  OriginRequestPolicy: OriginRequestPolicy | undefined;
}

/**
 * <p>A list of origin request policies.</p>
 * @public
 */
export interface OriginRequestPolicyList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing origin request policies where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of origin request policies requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The total number of origin request policies returned in the response.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the origin request policies in the list.</p>
   * @public
   */
  Items?: OriginRequestPolicySummary[] | undefined;
}

/**
 * @public
 */
export interface ListOriginRequestPoliciesResult {
  /**
   * <p>A list of origin request policies.</p>
   * @public
   */
  OriginRequestPolicyList?: OriginRequestPolicyList | undefined;
}

/**
 * @public
 */
export interface ListPublicKeysRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last public key on that page).</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of public keys you want in the response body.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains information about a public key.</p>
 * @public
 */
export interface PublicKeySummary {
  /**
   * <p>The identifier of the public key.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>A name to help identify the public key.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The date and time when the public key was uploaded.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The public key.</p>
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
 * <p>A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
 * @public
 */
export interface PublicKeyList {
  /**
   * <p>If there are more elements to be listed, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your public keys where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of public keys you want in the response.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of public keys in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of public keys.</p>
   * @public
   */
  Items?: PublicKeySummary[] | undefined;
}

/**
 * @public
 */
export interface ListPublicKeysResult {
  /**
   * <p>Returns a list of all public keys that have been added to CloudFront for this account.</p>
   * @public
   */
  PublicKeyList?: PublicKeyList | undefined;
}

/**
 * @public
 */
export interface ListRealtimeLogConfigsRequest {
  /**
   * <p>The maximum number of real-time log configurations that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of real-time log configurations. The response includes real-time log configurations in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>A list of real-time log configurations.</p>
 * @public
 */
export interface RealtimeLogConfigs {
  /**
   * <p>The maximum number of real-time log configurations requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>Contains the list of real-time log configurations.</p>
   * @public
   */
  Items?: RealtimeLogConfig[] | undefined;

  /**
   * <p>A flag that indicates whether there are more real-time log configurations than are contained in this list.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>This parameter indicates where this list of real-time log configurations begins. This list includes real-time log configurations that occur after the marker.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing real-time log configurations where you left off. </p>
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListRealtimeLogConfigsResult {
  /**
   * <p>A list of real-time log configurations.</p>
   * @public
   */
  RealtimeLogConfigs?: RealtimeLogConfigs | undefined;
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
   * <p>A filter to get only the specified kind of response headers policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Gets only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Gets only the custom policies created in your Amazon Web Services account.</p> </li> </ul>
   * @public
   */
  Type?: ResponseHeadersPolicyType | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of response headers policies. The response includes response headers policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of response headers policies that you want to get in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains a response headers policy.</p>
 * @public
 */
export interface ResponseHeadersPolicySummary {
  /**
   * <p>The type of response headers policy, either <code>managed</code> (created by Amazon Web Services) or <code>custom</code> (created in this Amazon Web Services account).</p>
   * @public
   */
  Type: ResponseHeadersPolicyType | undefined;

  /**
   * <p>The response headers policy.</p>
   * @public
   */
  ResponseHeadersPolicy: ResponseHeadersPolicy | undefined;
}

/**
 * <p>A list of response headers policies.</p>
 * @public
 */
export interface ResponseHeadersPolicyList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing response headers policies where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of response headers policies requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of response headers policies returned.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The response headers policies in the list.</p>
   * @public
   */
  Items?: ResponseHeadersPolicySummary[] | undefined;
}

/**
 * @public
 */
export interface ListResponseHeadersPoliciesResult {
  /**
   * <p>A list of response headers policies.</p>
   * @public
   */
  ResponseHeadersPolicyList?: ResponseHeadersPolicyList | undefined;
}

/**
 * <p>The request to list your streaming distributions.</p>
 * @public
 */
export interface ListStreamingDistributionsRequest {
  /**
   * <p>The value that you provided for the <code>Marker</code> request parameter.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The value that you provided for the <code>MaxItems</code> request parameter.</p>
   * @public
   */
  MaxItems?: number | undefined;
}
