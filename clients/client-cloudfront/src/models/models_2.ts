// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CloudFrontServiceException as __BaseException } from "./CloudFrontServiceException";

import {
  CachePolicy,
  CachePolicyConfig,
  CloudFrontOriginAccessIdentity,
  CloudFrontOriginAccessIdentityConfig,
  ConnectionGroup,
  ContinuousDeploymentPolicy,
  ContinuousDeploymentPolicyConfig,
  Customizations,
  Distribution,
  DistributionConfig,
  DistributionConfigFilterSensitiveLog,
  DistributionFilterSensitiveLog,
  DistributionTenant,
  DomainItem,
  FieldLevelEncryption,
  FieldLevelEncryptionConfig,
  FieldLevelEncryptionProfile,
  FieldLevelEncryptionProfileConfig,
  FunctionConfig,
  FunctionStage,
  FunctionSummary,
  KeyGroup,
  KeyGroupConfig,
  KeyValueStore,
  ManagedCertificateRequest,
  OriginAccessControl,
  OriginAccessControlConfig,
  Parameter,
  Tags,
} from "./models_0";

import {
  DistributionResourceId,
  EndPoint,
  OriginRequestPolicy,
  OriginRequestPolicyConfig,
  PublicKey,
  PublicKeyConfig,
  RealtimeLogConfig,
  ResponseHeadersPolicy,
  ResponseHeadersPolicyConfig,
  StreamingDistribution,
  StreamingDistributionConfig,
  StreamingDistributionSummary,
  VpcOrigin,
  VpcOriginEndpointConfig,
} from "./models_1";

/**
 * <p>A streaming distribution list.</p>
 * @public
 */
export interface StreamingDistributionList {
  /**
   * <p>The value you provided for the <code>Marker</code> request parameter.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value you can use for the <code>Marker</code> request parameter to continue listing your RTMP distributions where they left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The value you provided for the <code>MaxItems</code> request parameter.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more streaming distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more distributions in the list. </p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of streaming distributions that were created by the current Amazon Web Services account. </p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains one <code>StreamingDistributionSummary</code> element for each distribution that was created by the current Amazon Web Services account.</p>
   * @public
   */
  Items?: StreamingDistributionSummary[] | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface ListStreamingDistributionsResult {
  /**
   * <p>The <code>StreamingDistributionList</code> type.</p>
   * @public
   */
  StreamingDistributionList?: StreamingDistributionList | undefined;
}

/**
 * <p>The request to list tags for a CloudFront resource.</p>
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>An ARN of a CloudFront resource.</p>
   * @public
   */
  Resource: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   * @public
   */
  Tags: Tags | undefined;
}

/**
 * @public
 */
export interface ListVpcOriginsRequest {
  /**
   * <p>The marker associated with the VPC origins list.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of items included in the list.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary of the CloudFront VPC origin.</p>
 * @public
 */
export interface VpcOriginSummary {
  /**
   * <p>The VPC origin summary ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The VPC origin summary name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The VPC origin summary status.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The VPC origin summary created time.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The VPC origin summary last modified time.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The VPC origin summary ARN.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The VPC origin summary origin endpoint ARN.</p>
   * @public
   */
  OriginEndpointArn: string | undefined;
}

/**
 * <p>A list of CloudFront VPC origins.</p>
 * @public
 */
export interface VpcOriginList {
  /**
   * <p>The marker associated with the VPC origins list.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>The next marker associated with the VPC origins list.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of items included in the list.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more VPC origins remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more VPC origins in the list.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of VPC origins in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The items of the VPC origins list.</p>
   * @public
   */
  Items?: VpcOriginSummary[] | undefined;
}

/**
 * @public
 */
export interface ListVpcOriginsResult {
  /**
   * <p>List of VPC origins.</p>
   * @public
   */
  VpcOriginList?: VpcOriginList | undefined;
}

/**
 * @public
 */
export interface PublishFunctionRequest {
  /**
   * <p>The name of the function that you are publishing.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the function that you are publishing, which you can get using <code>DescribeFunction</code>.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface PublishFunctionResult {
  /**
   * <p>Contains configuration information and metadata about a CloudFront function.</p>
   * @public
   */
  FunctionSummary?: FunctionSummary | undefined;
}

/**
 * <p>The request to add tags to a CloudFront resource.</p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>An ARN of a CloudFront resource.</p>
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   * @public
   */
  Tags: Tags | undefined;
}

/**
 * <p>The CloudFront function failed.</p>
 * @public
 */
export class TestFunctionFailed extends __BaseException {
  readonly name: "TestFunctionFailed" = "TestFunctionFailed";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
   * <p>The name of the function that you are testing.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the function that you are testing, which you can get using <code>DescribeFunction</code>.</p>
   * @public
   */
  IfMatch: string | undefined;

  /**
   * <p>The stage of the function that you are testing, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   * @public
   */
  Stage?: FunctionStage | undefined;

  /**
   * <p>The event object to test the function with. For more information about the structure of the event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  EventObject: Uint8Array | undefined;
}

/**
 * <p>Contains the result of testing a CloudFront function with <code>TestFunction</code>.</p>
 * @public
 */
export interface TestResult {
  /**
   * <p>Contains configuration information and metadata about the CloudFront function that was tested.</p>
   * @public
   */
  FunctionSummary?: FunctionSummary | undefined;

  /**
   * <p>The amount of time that the function took to run as a percentage of the maximum allowed time. For example, a compute utilization of 35 means that the function completed in 35% of the maximum allowed time.</p>
   * @public
   */
  ComputeUtilization?: string | undefined;

  /**
   * <p>Contains the log lines that the function wrote (if any) when running the test.</p>
   * @public
   */
  FunctionExecutionLogs?: string[] | undefined;

  /**
   * <p>If the result of testing the function was an error, this field contains the error message.</p>
   * @public
   */
  FunctionErrorMessage?: string | undefined;

  /**
   * <p>The event object returned by the function. For more information about the structure of the event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html">Event object structure</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  FunctionOutput?: string | undefined;
}

/**
 * @public
 */
export interface TestFunctionResult {
  /**
   * <p>An object that represents the result of running the function with the provided event object.</p>
   * @public
   */
  TestResult?: TestResult | undefined;
}

/**
 * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
 * @public
 */
export interface TagKeys {
  /**
   * <p>A complex type that contains <code>Tag</code> key elements.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>The request to remove tags from a CloudFront resource.</p>
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>An ARN of a CloudFront resource.</p>
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> key elements.</p>
   * @public
   */
  TagKeys: TagKeys | undefined;
}

/**
 * @public
 */
export interface UpdateCachePolicyRequest {
  /**
   * <p>A cache policy configuration.</p>
   * @public
   */
  CachePolicyConfig: CachePolicyConfig | undefined;

  /**
   * <p>The unique identifier for the cache policy that you are updating. The identifier is returned in a cache behavior's <code>CachePolicyId</code> field in the response to <code>GetDistributionConfig</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version of the cache policy that you are updating. The version is returned in the cache policy's <code>ETag</code> field in the response to <code>GetCachePolicyConfig</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCachePolicyResult {
  /**
   * <p>A cache policy.</p>
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
 * <p>The request to update an origin access identity.</p>
 * @public
 */
export interface UpdateCloudFrontOriginAccessIdentityRequest {
  /**
   * <p>The identity's configuration information.</p>
   * @public
   */
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig | undefined;

  /**
   * <p>The identity's id.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the identity's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface UpdateCloudFrontOriginAccessIdentityResult {
  /**
   * <p>The origin access identity's information.</p>
   * @public
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity | undefined;

  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionGroupRequest {
  /**
   * <p>The ID of the connection group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Enable IPv6 for the connection group. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesEnableIPv6">Enable IPv6</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  Ipv6Enabled?: boolean | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the connection group that you're updating.</p>
   * @public
   */
  IfMatch: string | undefined;

  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * <p>Whether the connection group is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionGroupResult {
  /**
   * <p>The connection group that you updated.</p>
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
export interface UpdateContinuousDeploymentPolicyRequest {
  /**
   * <p>The continuous deployment policy configuration.</p>
   * @public
   */
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig | undefined;

  /**
   * <p>The identifier of the continuous deployment policy that you are updating.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the continuous deployment policy that you are updating.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContinuousDeploymentPolicyResult {
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
 * <p>The request to update a distribution.</p>
 * @public
 */
export interface UpdateDistributionRequest {
  /**
   * <p>The distribution's configuration information.</p>
   * @public
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * <p>The distribution's id.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface UpdateDistributionResult {
  /**
   * <p>The distribution's information.</p>
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionTenantRequest {
  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ID for the multi-tenant distribution.</p>
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * <p>The domains to update for the distribution tenant. A domain object can contain only a domain property. You must specify at least one domain. Each distribution tenant can have up to 5 domains.</p>
   * @public
   */
  Domains?: DomainItem[] | undefined;

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
   * <p>The ID of the target connection group.</p>
   * @public
   */
  ConnectionGroupId?: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the distribution tenant to update. This value is returned in the response of the <code>GetDistributionTenant</code> API operation.</p>
   * @public
   */
  IfMatch: string | undefined;

  /**
   * <p>An object that contains the CloudFront managed ACM certificate request.</p>
   * @public
   */
  ManagedCertificateRequest?: ManagedCertificateRequest | undefined;

  /**
   * <p>Indicates whether the distribution tenant should be updated to an enabled state. If you update the distribution tenant and it's not enabled, the distribution tenant won't serve traffic.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionTenantResult {
  /**
   * <p>The distribution tenant that you're updating.</p>
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
export interface UpdateDistributionWithStagingConfigRequest {
  /**
   * <p>The identifier of the primary distribution to which you are copying a staging distribution's configuration.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the staging distribution whose configuration you are copying to the primary distribution.</p>
   * @public
   */
  StagingDistributionId?: string | undefined;

  /**
   * <p>The current versions (<code>ETag</code> values) of both primary and staging distributions. Provide these in the following format:</p> <p> <code>&lt;primary ETag&gt;, &lt;staging ETag&gt;</code> </p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionWithStagingConfigResult {
  /**
   * <p>A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.</p>
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * <p>The current version of the primary distribution (after it's updated).</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainAssociationRequest {
  /**
   * <p>The domain to update.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The target standard distribution or distribution tenant resource for the domain. You can specify either <code>DistributionId</code> or <code>DistributionTenantId</code>, but not both.</p>
   * @public
   */
  TargetResource: DistributionResourceId | undefined;

  /**
   * <p>The value of the <code>ETag</code> identifier for the standard distribution or distribution tenant that will be associated with the domain.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainAssociationResult {
  /**
   * <p>The domain that you're moving.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The intended destination for the domain.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The current version of the target standard distribution or distribution tenant that was associated with the domain.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionConfigRequest {
  /**
   * <p>Request to update a field-level encryption configuration.</p>
   * @public
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;

  /**
   * <p>The ID of the configuration you want to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the configuration identity to update. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionConfigResult {
  /**
   * <p>Return the results of updating the configuration.</p>
   * @public
   */
  FieldLevelEncryption?: FieldLevelEncryption | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when updating the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionProfileRequest {
  /**
   * <p>Request to update a field-level encryption profile.</p>
   * @public
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;

  /**
   * <p>The ID of the field-level encryption profile request.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the profile identity to update. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionProfileResult {
  /**
   * <p>Return the results of updating the profile.</p>
   * @public
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile | undefined;

  /**
   * <p>The result of the field-level encryption profile request.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionRequest {
  /**
   * <p>The name of the function that you are updating.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the function that you are updating, which you can get using <code>DescribeFunction</code>.</p>
   * @public
   */
  IfMatch: string | undefined;

  /**
   * <p>Configuration information about the function.</p>
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
 * @public
 */
export interface UpdateFunctionResult {
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
export interface UpdateKeyGroupRequest {
  /**
   * <p>The key group configuration.</p>
   * @public
   */
  KeyGroupConfig: KeyGroupConfig | undefined;

  /**
   * <p>The identifier of the key group that you are updating.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version of the key group that you are updating. The version is the key group's <code>ETag</code> value.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeyGroupResult {
  /**
   * <p>The key group that was just updated.</p>
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
export interface UpdateKeyValueStoreRequest {
  /**
   * <p>The name of the key value store to update.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The comment of the key value store to update.</p>
   * @public
   */
  Comment: string | undefined;

  /**
   * <p>The key value store to update, if a match occurs.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeyValueStoreResult {
  /**
   * <p>The resulting key value store to update.</p>
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
export interface UpdateOriginAccessControlRequest {
  /**
   * <p>An origin access control.</p>
   * @public
   */
  OriginAccessControlConfig: OriginAccessControlConfig | undefined;

  /**
   * <p>The unique identifier of the origin access control that you are updating.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the origin access control that you are updating.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOriginAccessControlResult {
  /**
   * <p>The origin access control after it has been updated.</p>
   * @public
   */
  OriginAccessControl?: OriginAccessControl | undefined;

  /**
   * <p>The new version of the origin access control after it has been updated.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOriginRequestPolicyRequest {
  /**
   * <p>An origin request policy configuration.</p>
   * @public
   */
  OriginRequestPolicyConfig: OriginRequestPolicyConfig | undefined;

  /**
   * <p>The unique identifier for the origin request policy that you are updating. The identifier is returned in a cache behavior's <code>OriginRequestPolicyId</code> field in the response to <code>GetDistributionConfig</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version of the origin request policy that you are updating. The version is returned in the origin request policy's <code>ETag</code> field in the response to <code>GetOriginRequestPolicyConfig</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOriginRequestPolicyResult {
  /**
   * <p>An origin request policy.</p>
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
export interface UpdatePublicKeyRequest {
  /**
   * <p>A public key configuration.</p>
   * @public
   */
  PublicKeyConfig: PublicKeyConfig | undefined;

  /**
   * <p>The identifier of the public key that you are updating.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the public key to update. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePublicKeyResult {
  /**
   * <p>The public key.</p>
   * @public
   */
  PublicKey?: PublicKey | undefined;

  /**
   * <p>The identifier of the current version of the public key.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRealtimeLogConfigRequest {
  /**
   * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time log data.</p>
   * @public
   */
  EndPoints?: EndPoint[] | undefined;

  /**
   * <p>A list of fields to include in each real-time log record.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  Fields?: string[] | undefined;

  /**
   * <p>The name for this real-time log configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for this real-time log configuration.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. You must provide an integer between 1 and 100, inclusive.</p>
   * @public
   */
  SamplingRate?: number | undefined;
}

/**
 * @public
 */
export interface UpdateRealtimeLogConfigResult {
  /**
   * <p>A real-time log configuration.</p>
   * @public
   */
  RealtimeLogConfig?: RealtimeLogConfig | undefined;
}

/**
 * @public
 */
export interface UpdateResponseHeadersPolicyRequest {
  /**
   * <p>A response headers policy configuration.</p>
   * @public
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig | undefined;

  /**
   * <p>The identifier for the response headers policy that you are updating.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version of the response headers policy that you are updating.</p> <p>The version is returned in the cache policy's <code>ETag</code> field in the response to <code>GetResponseHeadersPolicyConfig</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateResponseHeadersPolicyResult {
  /**
   * <p>A response headers policy.</p>
   * @public
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy | undefined;

  /**
   * <p>The current version of the response headers policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The request to update a streaming distribution.</p>
 * @public
 */
export interface UpdateStreamingDistributionRequest {
  /**
   * <p>The streaming distribution's configuration information.</p>
   * @public
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;

  /**
   * <p>The streaming distribution's id.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the streaming distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface UpdateStreamingDistributionResult {
  /**
   * <p>The streaming distribution's information.</p>
   * @public
   */
  StreamingDistribution?: StreamingDistribution | undefined;

  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVpcOriginRequest {
  /**
   * <p>The VPC origin endpoint configuration.</p>
   * @public
   */
  VpcOriginEndpointConfig: VpcOriginEndpointConfig | undefined;

  /**
   * <p>The VPC origin ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The VPC origin to update, if a match occurs.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface UpdateVpcOriginResult {
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
export interface VerifyDnsConfigurationRequest {
  /**
   * <p>The domain name that you're verifying.</p>
   * @public
   */
  Domain?: string | undefined;

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
export const DnsConfigurationStatus = {
  Invalid: "invalid-configuration",
  Unknown: "unknown-configuration",
  Valid: "valid-configuration",
} as const;

/**
 * @public
 */
export type DnsConfigurationStatus = (typeof DnsConfigurationStatus)[keyof typeof DnsConfigurationStatus];

/**
 * <p>The DNS configuration for your domain names.</p>
 * @public
 */
export interface DnsConfiguration {
  /**
   * <p>The domain name that you're verifying.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The status of your domain name.</p> <ul> <li> <p> <code>valid-configuration</code>: The domain name is correctly configured and points to the correct routing endpoint of the connection group.</p> </li> <li> <p> <code>invalid-configuration</code>: There is either a missing DNS record or the DNS record exists but it's using an incorrect routing endpoint. Update the DNS record to point to the correct routing endpoint.</p> </li> <li> <p> <code>unknown-configuration</code>: CloudFront can't validate your DNS configuration. This status can appear if CloudFront can't verify the DNS record, or the DNS lookup request failed or timed out.</p> </li> </ul>
   * @public
   */
  Status: DnsConfigurationStatus | undefined;

  /**
   * <p>Explains the status of the DNS configuration.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface VerifyDnsConfigurationResult {
  /**
   * <p>The list of domain names, their statuses, and a description of each status.</p>
   * @public
   */
  DnsConfigurationList?: DnsConfiguration[] | undefined;
}

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
