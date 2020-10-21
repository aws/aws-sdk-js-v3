import {
  Aliases,
  CachePolicy,
  CachePolicyConfig,
  CloudFrontOriginAccessIdentity,
  CloudFrontOriginAccessIdentityConfig,
  ContentTypeProfileConfig,
  Distribution,
  DistributionConfig,
  DistributionList,
  EncryptionEntities,
  EndPoint,
  FieldLevelEncryption,
  FieldLevelEncryptionConfig,
  FieldLevelEncryptionProfile,
  FieldLevelEncryptionProfileConfig,
  OriginRequestPolicy,
  OriginRequestPolicyConfig,
  PriceClass,
  PublicKey,
  PublicKeyConfig,
  QueryArgProfileConfig,
  RealtimeLogConfig,
  S3Origin,
  StreamingDistribution,
  StreamingDistributionConfig,
  Tags,
  TrustedSigners,
} from "./models_0";
import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface ListDistributionsByRealtimeLogConfigResult {
  /**
   * <p>A distribution list.</p>
   */
  DistributionList?: DistributionList;
}

export namespace ListDistributionsByRealtimeLogConfigResult {
  export const filterSensitiveLog = (obj: ListDistributionsByRealtimeLogConfigResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request to list distributions that are associated with a specified AWS WAF web
 * 			ACL. </p>
 */
export interface ListDistributionsByWebACLIdRequest {
  /**
   * <p>The maximum number of distributions that you want CloudFront to return in the response body.
   * 			The maximum and default values are both 100.</p>
   */
  MaxItems?: string;

  /**
   * <p>Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If
   * 			you have more than <code>MaxItems</code> distributions that satisfy the request, the response
   * 			includes a <code>NextMarker</code> element. To get the next page of results, submit another
   * 			request. For the value of <code>Marker</code>, specify the value of <code>NextMarker</code>
   * 			from the last response. (For the first request, omit <code>Marker</code>.) </p>
   */
  Marker?: string;

  /**
   * <p>The ID of the AWS WAF web ACL that you want to list the associated distributions.
   * 			If you specify "null" for the ID, the request returns a list of the distributions that aren't
   * 			associated with a web ACL. </p>
   */
  WebACLId: string | undefined;
}

export namespace ListDistributionsByWebACLIdRequest {
  export const filterSensitiveLog = (obj: ListDistributionsByWebACLIdRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response to a request to list the distributions that are associated with a
 * 			specified AWS WAF web ACL. </p>
 */
export interface ListDistributionsByWebACLIdResult {
  /**
   * <p>The <code>DistributionList</code> type. </p>
   */
  DistributionList?: DistributionList;
}

export namespace ListDistributionsByWebACLIdResult {
  export const filterSensitiveLog = (obj: ListDistributionsByWebACLIdResult): any => ({
    ...obj,
  });
}

export interface ListFieldLevelEncryptionConfigsRequest {
  /**
   * <p>The maximum number of field-level encryption configurations you want in the response body. </p>
   */
  MaxItems?: string;

  /**
   * <p>Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that
   * 			occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the
   * 			<code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page). </p>
   */
  Marker?: string;
}

export namespace ListFieldLevelEncryptionConfigsRequest {
  export const filterSensitiveLog = (obj: ListFieldLevelEncryptionConfigsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of a field-level encryption item.</p>
 */
export interface FieldLevelEncryptionSummary {
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

  /**
   * <p>The last time that the summary of field-level encryption items was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>An optional comment about the field-level encryption item.</p>
   */
  Comment?: string;

  /**
   * <p>The unique ID of a field-level encryption item.</p>
   */
  Id: string | undefined;
}

export namespace FieldLevelEncryptionSummary {
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
   * <p>The number of field-level encryption items.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The maximum number of elements you want in the response body. </p>
   */
  MaxItems: number | undefined;

  /**
   * <p>An array of field-level encryption items.</p>
   */
  Items?: FieldLevelEncryptionSummary[];
}

export namespace FieldLevelEncryptionList {
  export const filterSensitiveLog = (obj: FieldLevelEncryptionList): any => ({
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
  MaxItems?: string;
}

export namespace ListFieldLevelEncryptionProfilesRequest {
  export const filterSensitiveLog = (obj: ListFieldLevelEncryptionProfilesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The field-level encryption profile summary.</p>
 */
export interface FieldLevelEncryptionProfileSummary {
  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and
   * 			field patterns for specifying which fields to encrypt with this key.</p>
   */
  EncryptionEntities: EncryptionEntities | undefined;

  /**
   * <p>Name for the field-level encryption profile summary.</p>
   */
  Name: string | undefined;

  /**
   * <p>An optional comment for the field-level encryption profile summary.</p>
   */
  Comment?: string;

  /**
   * <p>ID for the field-level encryption profile summary.</p>
   */
  Id: string | undefined;

  /**
   * <p>The time when the the field-level encryption profile summary was last updated.</p>
   */
  LastModifiedTime: Date | undefined;
}

export namespace FieldLevelEncryptionProfileSummary {
  export const filterSensitiveLog = (obj: FieldLevelEncryptionProfileSummary): any => ({
    ...obj,
  });
}

/**
 * <p>List of field-level encryption profiles.</p>
 */
export interface FieldLevelEncryptionProfileList {
  /**
   * <p>The number of field-level encryption profiles.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The maximum number of field-level encryption profiles you want in the response body. </p>
   */
  MaxItems: number | undefined;

  /**
   * <p>The field-level encryption profile items.</p>
   */
  Items?: FieldLevelEncryptionProfileSummary[];

  /**
   * <p>If there are more elements to be listed, this element is present and contains
   * 			the value that you can use for the <code>Marker</code> request parameter to continue
   * 			listing your profiles where you left off.</p>
   */
  NextMarker?: string;
}

export namespace FieldLevelEncryptionProfileList {
  export const filterSensitiveLog = (obj: FieldLevelEncryptionProfileList): any => ({
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
  export const filterSensitiveLog = (obj: ListFieldLevelEncryptionProfilesResult): any => ({
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
   * <p>The maximum number of invalidation batches that you want in the response
   * 			body.</p>
   */
  MaxItems?: string;

  /**
   * <p>Use this parameter when paginating results to indicate where to begin in your list of
   * 			invalidation batches. Because the results are returned in decreasing order from most recent to
   * 			oldest, the most recent results are on the first page, the second page will contain earlier
   * 			results, and so on. To get the next page of results, set <code>Marker</code> to the value of
   * 			the <code>NextMarker</code> from the current page's response. This value is the same as the ID
   * 			of the last invalidation batch on that page. </p>
   */
  Marker?: string;
}

export namespace ListInvalidationsRequest {
  export const filterSensitiveLog = (obj: ListInvalidationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of an invalidation request.</p>
 */
export interface InvalidationSummary {
  /**
   * <p>The time that an invalidation request was created.</p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The unique ID for an invalidation request.</p>
   */
  Id: string | undefined;

  /**
   * <p>The status of an invalidation request.</p>
   */
  Status: string | undefined;
}

export namespace InvalidationSummary {
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
   * <p>A complex type that contains one <code>InvalidationSummary</code> element for each
   * 			invalidation batch created by the current AWS account.</p>
   */
  Items?: InvalidationSummary[];

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
   * <p>The number of invalidation batches that were created by the current AWS account.
   * 		</p>
   */
  Quantity: number | undefined;

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
}

export namespace InvalidationList {
  export const filterSensitiveLog = (obj: InvalidationList): any => ({
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
  export const filterSensitiveLog = (obj: ListInvalidationsResult): any => ({
    ...obj,
  });
}

export type OriginRequestPolicyType = "custom" | "managed";

export interface ListOriginRequestPoliciesRequest {
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
  MaxItems?: string;

  /**
   * <p>A filter to return only the specified kinds of origin request policies. Valid values
   * 			are:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>managed</code> – Returns only the managed policies created by AWS.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>custom</code> – Returns only the custom policies created in your AWS
   * 					account.</p>
   * 			         </li>
   *          </ul>
   */
  Type?: OriginRequestPolicyType | string;
}

export namespace ListOriginRequestPoliciesRequest {
  export const filterSensitiveLog = (obj: ListOriginRequestPoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an origin request policy.</p>
 */
export interface OriginRequestPolicySummary {
  /**
   * <p>The type of origin request policy, either <code>managed</code> (created by AWS) or
   * 			<code>custom</code> (created in this AWS account).</p>
   */
  Type: OriginRequestPolicyType | string | undefined;

  /**
   * <p>The origin request policy.</p>
   */
  OriginRequestPolicy: OriginRequestPolicy | undefined;
}

export namespace OriginRequestPolicySummary {
  export const filterSensitiveLog = (obj: OriginRequestPolicySummary): any => ({
    ...obj,
  });
}

/**
 * <p>A list of origin request policies.</p>
 */
export interface OriginRequestPolicyList {
  /**
   * <p>The total number of origin request policies returned in the response.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the origin request policies in the list.</p>
   */
  Items?: OriginRequestPolicySummary[];

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
}

export namespace OriginRequestPolicyList {
  export const filterSensitiveLog = (obj: OriginRequestPolicyList): any => ({
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
  MaxItems?: string;
}

export namespace ListPublicKeysRequest {
  export const filterSensitiveLog = (obj: ListPublicKeysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex data type for public key information.
 * 		</p>
 */
export interface PublicKeySummary {
  /**
   * <p>
   * 			Encoded key for public key information summary.
   * 		</p>
   */
  EncodedKey: string | undefined;

  /**
   * <p>
   * 			Comment for public key information summary.
   * 		</p>
   */
  Comment?: string;

  /**
   * <p>
   * 			Name for public key information summary.
   * 		</p>
   */
  Name: string | undefined;

  /**
   * <p>
   * 			ID for public key information summary.
   * 		</p>
   */
  Id: string | undefined;

  /**
   * <p>
   * 			Creation time for public key information summary.
   * 		</p>
   */
  CreatedTime: Date | undefined;
}

export namespace PublicKeySummary {
  export const filterSensitiveLog = (obj: PublicKeySummary): any => ({
    ...obj,
  });
}

/**
 * <p>A list of public keys you've added to CloudFront to use with features like field-level encryption.</p>
 */
export interface PublicKeyList {
  /**
   * <p>The number of public keys you added to CloudFront to use with features like field-level
   * 			encryption.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The maximum number of public keys you want in the response body. </p>
   */
  MaxItems: number | undefined;

  /**
   * <p>If there are more elements to be listed, this element is present and contains
   * 			the value that you can use for the <code>Marker</code> request parameter to continue
   * 			listing your public keys where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of information about a public key you add to CloudFront to use with features like field-level encryption.</p>
   */
  Items?: PublicKeySummary[];
}

export namespace PublicKeyList {
  export const filterSensitiveLog = (obj: PublicKeyList): any => ({
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
  export const filterSensitiveLog = (obj: ListPublicKeysResult): any => ({
    ...obj,
  });
}

export interface ListRealtimeLogConfigsRequest {
  /**
   * <p>The maximum number of real-time log configurations that you want in the response.</p>
   */
  MaxItems?: string;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of real-time
   * 			log configurations. The response includes real-time log configurations in the list that
   * 			occur after the marker. To get the next page of the list, set this field’s value to the
   * 			value of <code>NextMarker</code> from the current page’s response.</p>
   */
  Marker?: string;
}

export namespace ListRealtimeLogConfigsRequest {
  export const filterSensitiveLog = (obj: ListRealtimeLogConfigsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A list of real-time log configurations.</p>
 */
export interface RealtimeLogConfigs {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It
   * 			contains the value that you should use in the <code>Marker</code> field of a subsequent
   * 			request to continue listing real-time log configurations where you left off. </p>
   */
  NextMarker?: string;

  /**
   * <p>This parameter indicates where this list of real-time log configurations begins. This list
   * 			includes real-time log configurations that occur after the marker.</p>
   */
  Marker: string | undefined;

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
   * <p>The maximum number of real-time log configurations requested.</p>
   */
  MaxItems: number | undefined;
}

export namespace RealtimeLogConfigs {
  export const filterSensitiveLog = (obj: RealtimeLogConfigs): any => ({
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
  export const filterSensitiveLog = (obj: ListRealtimeLogConfigsResult): any => ({
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
  MaxItems?: string;
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
   * <p>The date and time the distribution was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Whether the distribution is enabled to accept end user requests for content.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The domain name corresponding to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>A complex type that contains information about price class for this streaming
   * 			distribution. </p>
   */
  PriceClass: PriceClass | string | undefined;

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
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want
   * 			CloudFront to get your media files for distribution.</p>
   */
  S3Origin: S3Origin | undefined;

  /**
   * <p>The comment originally specified when this distribution was created.</p>
   */
  Comment: string | undefined;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any,
   * 			for this streaming distribution.</p>
   */
  Aliases: Aliases | undefined;

  /**
   * <p> Indicates the current status of the distribution. When the status is
   * 			<code>Deployed</code>, the distribution's information is fully propagated throughout the
   * 			Amazon CloudFront system.</p>
   */
  Status: string | undefined;
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
   * <p>A complex type that contains one <code>StreamingDistributionSummary</code> element for
   * 			each distribution that was created by the current AWS account.</p>
   */
  Items?: StreamingDistributionSummary[];

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
   * <p>The number of streaming distributions that were created by the current AWS account.
   * 		</p>
   */
  Quantity: number | undefined;

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
   * <p> A complex type that contains zero or more <code>Tag</code> key elements.</p>
   */
  TagKeys: TagKeys | undefined;

  /**
   * <p> An ARN of a CloudFront resource.</p>
   */
  Resource: string | undefined;
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
   * <p>A cache policy configuration.</p>
   */
  CachePolicyConfig: CachePolicyConfig | undefined;

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
}

export namespace UpdateCachePolicyRequest {
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
  export const filterSensitiveLog = (obj: UpdateCloudFrontOriginAccessIdentityRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface UpdateCloudFrontOriginAccessIdentityResult {
  /**
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>The origin access identity's information.</p>
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
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
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;

  /**
   * <p>The distribution's id.</p>
   */
  Id: string | undefined;

  /**
   * <p>The distribution's configuration information.</p>
   */
  DistributionConfig: DistributionConfig | undefined;
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
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>The distribution's information.</p>
   */
  Distribution?: Distribution;
}

export namespace UpdateDistributionResult {
  export const filterSensitiveLog = (obj: UpdateDistributionResult): any => ({
    ...obj,
    ...(obj.Distribution && { Distribution: Distribution.filterSensitiveLog(obj.Distribution) }),
  });
}

export interface UpdateFieldLevelEncryptionConfigRequest {
  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the configuration identity to update.
   * 			For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;

  /**
   * <p>The ID of the configuration you want to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>Request to update a field-level encryption configuration. </p>
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;
}

export namespace UpdateFieldLevelEncryptionConfigRequest {
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
  export const filterSensitiveLog = (obj: UpdateFieldLevelEncryptionProfileResult): any => ({
    ...obj,
  });
}

export interface UpdateOriginRequestPolicyRequest {
  /**
   * <p>The version of the origin request policy that you are updating. The version is returned in
   * 			the origin request policy’s <code>ETag</code> field in the response to
   * 			<code>GetOriginRequestPolicyConfig</code>.</p>
   */
  IfMatch?: string;

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
   * <p>The value of the <code>ETag</code> header that you received when retrieving the public key to update.
   * 			For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;

  /**
   * <p>ID of the public key to be updated.</p>
   */
  Id: string | undefined;

  /**
   * <p>Request to update public key information.</p>
   */
  PublicKeyConfig: PublicKeyConfig | undefined;
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

export interface UpdateRealtimeLogConfigRequest {
  /**
   * <p>A list of fields to include in each real-time log record.</p>
   * 		       <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Fields?: string[];

  /**
   * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time
   * 			log data.</p>
   */
  EndPoints?: EndPoint[];

  /**
   * <p>The sampling rate for this real-time log configuration. The sampling rate determines the
   * 			percentage of viewer requests that are represented in the real-time log data. You must
   * 			provide an integer between 1 and 100, inclusive.</p>
   */
  SamplingRate?: number;

  /**
   * <p>The name for this real-time log configuration.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for this real-time log configuration.</p>
   */
  ARN?: string;
}

export namespace UpdateRealtimeLogConfigRequest {
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
  export const filterSensitiveLog = (obj: UpdateRealtimeLogConfigResult): any => ({
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
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			streaming distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;

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
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>The streaming distribution's information.</p>
   */
  StreamingDistribution?: StreamingDistribution;
}

export namespace UpdateStreamingDistributionResult {
  export const filterSensitiveLog = (obj: UpdateStreamingDistributionResult): any => ({
    ...obj,
  });
}
