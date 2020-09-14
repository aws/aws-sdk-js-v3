import {
  Aliases,
  CachePolicy,
  CachePolicyConfig,
  CloudFrontOriginAccessIdentity,
  CloudFrontOriginAccessIdentityConfig,
  Distribution,
  DistributionConfig,
  FieldLevelEncryption,
  FieldLevelEncryptionConfig,
  FieldLevelEncryptionProfile,
  FieldLevelEncryptionProfileConfig,
  OriginRequestPolicy,
  OriginRequestPolicyConfig,
  PriceClass,
  PublicKey,
  PublicKeyConfig,
  PublicKeyList,
  S3Origin,
  StreamingDistribution,
  StreamingDistributionConfig,
  Tags,
  TrustedSigners,
} from "./models_0";
import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface ListPublicKeysResult {
  /**
   * <p>Returns a list of all public keys that have been added to CloudFront for this account.</p>
   */
  PublicKeyList?: PublicKeyList;
}

export namespace ListPublicKeysResult {
  export const filterSensitiveLog = (obj: ListPublicKeysResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to list your streaming distributions. </p>
 */
export interface ListStreamingDistributionsRequest {
  /**
   * <p>The value that you provided for the <code>MaxItems</code> request parameter.</p>
   */
  MaxItems?: string;

  /**
   * <p>The value that you provided for the <code>Marker</code> request parameter.</p>
   */
  Marker?: string;
}

export namespace ListStreamingDistributionsRequest {
  export const filterSensitiveLog = (obj: ListStreamingDistributionsRequest): any => ({
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
   * 				<code>123456789012</code> is your AWS account ID.</p>
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
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any,
   * 			for this streaming distribution.</p>
   */
  Aliases: Aliases | undefined;

  /**
   * <p>A complex type that contains information about price class for this streaming
   * 			distribution. </p>
   */
  PriceClass: PriceClass | string | undefined;

  /**
   * <p>The comment originally specified when this distribution was created.</p>
   */
  Comment: string | undefined;

  /**
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want
   * 			CloudFront to get your media files for distribution.</p>
   */
  S3Origin: S3Origin | undefined;

  /**
   * <p>Whether the distribution is enabled to accept end user requests for content.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>A complex type that specifies the AWS accounts, if any, that you want to allow to
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
   * <p>The domain name corresponding to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.</p>
   */
  DomainName: string | undefined;
}

export namespace StreamingDistributionSummary {
  export const filterSensitiveLog = (obj: StreamingDistributionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A streaming distribution list. </p>
 */
export interface StreamingDistributionList {
  /**
   * <p>A flag that indicates whether more streaming distributions remain to be listed. If your
   * 			results were truncated, you can make a follow-up pagination request using the
   * 				<code>Marker</code> request parameter to retrieve more distributions in the list. </p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The value you provided for the <code>Marker</code> request parameter. </p>
   */
  Marker: string | undefined;

  /**
   * <p>The value you provided for the <code>MaxItems</code> request parameter. </p>
   */
  MaxItems: number | undefined;

  /**
   * <p>A complex type that contains one <code>StreamingDistributionSummary</code> element for
   * 			each distribution that was created by the current AWS account.</p>
   */
  Items?: StreamingDistributionSummary[];

  /**
   * <p>The number of streaming distributions that were created by the current AWS account.
   * 		</p>
   */
  Quantity: number | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   * 			the value you can use for the <code>Marker</code> request parameter to continue listing your
   * 			RTMP distributions where they left off. </p>
   */
  NextMarker?: string;
}

export namespace StreamingDistributionList {
  export const filterSensitiveLog = (obj: StreamingDistributionList): any => ({
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
  export const filterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
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
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
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
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The update contains modifications that are not allowed.</p>
 */
export interface IllegalUpdate extends __SmithyException, $MetadataBearer {
  name: "IllegalUpdate";
  $fault: "client";
  Message?: string;
}

export namespace IllegalUpdate {
  export const filterSensitiveLog = (obj: IllegalUpdate): any => ({
    ...obj,
  });
}

export interface UpdateCachePolicyRequest {
  /**
   * <p>The version of the cache policy that you are updating. The version is returned in the cache
   * 			policy’s <code>ETag</code> field in the response to
   * 			<code>GetCachePolicyConfig</code>.</p>
   */
  IfMatch?: string;

  /**
   * <p>The unique identifier for the cache policy that you are updating. The identifier is returned
   * 			in a cache behavior’s <code>CachePolicyId</code> field in the response to
   * 			<code>GetDistributionConfig</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>A cache policy configuration.</p>
   */
  CachePolicyConfig: CachePolicyConfig | undefined;
}

export namespace UpdateCachePolicyRequest {
  export const filterSensitiveLog = (obj: UpdateCachePolicyRequest): any => ({
    ...obj,
  });
}

export interface UpdateCachePolicyResult {
  /**
   * <p>The current version of the cache policy.</p>
   */
  ETag?: string;

  /**
   * <p>A cache policy.</p>
   */
  CachePolicy?: CachePolicy;
}

export namespace UpdateCachePolicyResult {
  export const filterSensitiveLog = (obj: UpdateCachePolicyResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to update an origin access identity.</p>
 */
export interface UpdateCloudFrontOriginAccessIdentityRequest {
  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			identity's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;

  /**
   * <p>The identity's id.</p>
   */
  Id: string | undefined;

  /**
   * <p>The identity's configuration information.</p>
   */
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig | undefined;
}

export namespace UpdateCloudFrontOriginAccessIdentityRequest {
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
  export const filterSensitiveLog = (obj: UpdateFieldLevelEncryptionConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateFieldLevelEncryptionConfigResult {
  /**
   * <p>The value of the <code>ETag</code> header that you received when updating the configuration.
   * 			For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>Return the results of updating the configuration.</p>
   */
  FieldLevelEncryption?: FieldLevelEncryption;
}

export namespace UpdateFieldLevelEncryptionConfigResult {
  export const filterSensitiveLog = (obj: UpdateFieldLevelEncryptionConfigResult): any => ({
    ...obj,
  });
}

export interface UpdateFieldLevelEncryptionProfileRequest {
  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the profile identity to update.
   * 			For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;

  /**
   * <p>Request to update a field-level encryption profile. </p>
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;

  /**
   * <p>The ID of the field-level encryption profile request. </p>
   */
  Id: string | undefined;
}

export namespace UpdateFieldLevelEncryptionProfileRequest {
  export const filterSensitiveLog = (obj: UpdateFieldLevelEncryptionProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateFieldLevelEncryptionProfileResult {
  /**
   * <p>The result of the field-level encryption profile request. </p>
   */
  ETag?: string;

  /**
   * <p>Return the results of updating the profile.</p>
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
}

export namespace UpdateFieldLevelEncryptionProfileResult {
  export const filterSensitiveLog = (obj: UpdateFieldLevelEncryptionProfileResult): any => ({
    ...obj,
  });
}

export interface UpdateOriginRequestPolicyRequest {
  /**
   * <p>An origin request policy configuration.</p>
   */
  OriginRequestPolicyConfig: OriginRequestPolicyConfig | undefined;

  /**
   * <p>The version of the origin request policy that you are updating. The version is returned in
   * 			the origin request policy’s <code>ETag</code> field in the response to
   * 			<code>GetOriginRequestPolicyConfig</code>.</p>
   */
  IfMatch?: string;

  /**
   * <p>The unique identifier for the origin request policy that you are updating. The identifier is
   * 			returned in a cache behavior’s <code>OriginRequestPolicyId</code> field in the response
   * 			to <code>GetDistributionConfig</code>.</p>
   */
  Id: string | undefined;
}

export namespace UpdateOriginRequestPolicyRequest {
  export const filterSensitiveLog = (obj: UpdateOriginRequestPolicyRequest): any => ({
    ...obj,
  });
}

export interface UpdateOriginRequestPolicyResult {
  /**
   * <p>The current version of the origin request policy.</p>
   */
  ETag?: string;

  /**
   * <p>An origin request policy.</p>
   */
  OriginRequestPolicy?: OriginRequestPolicy;
}

export namespace UpdateOriginRequestPolicyResult {
  export const filterSensitiveLog = (obj: UpdateOriginRequestPolicyResult): any => ({
    ...obj,
  });
}

export interface UpdatePublicKeyRequest {
  /**
   * <p>Request to update public key information.</p>
   */
  PublicKeyConfig: PublicKeyConfig | undefined;

  /**
   * <p>ID of the public key to be updated.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the public key to update.
   * 			For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdatePublicKeyRequest {
  export const filterSensitiveLog = (obj: UpdatePublicKeyRequest): any => ({
    ...obj,
  });
}

export interface UpdatePublicKeyResult {
  /**
   * <p>The current version of the update public key result. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>Return the results of updating the public key.</p>
   */
  PublicKey?: PublicKey;
}

export namespace UpdatePublicKeyResult {
  export const filterSensitiveLog = (obj: UpdatePublicKeyResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to update a streaming distribution.</p>
 */
export interface UpdateStreamingDistributionRequest {
  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			streaming distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;

  /**
   * <p>The streaming distribution's configuration information.</p>
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;

  /**
   * <p>The streaming distribution's id.</p>
   */
  Id: string | undefined;
}

export namespace UpdateStreamingDistributionRequest {
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
  export const filterSensitiveLog = (obj: UpdateStreamingDistributionResult): any => ({
    ...obj,
  });
}
