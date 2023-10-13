// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { S3ControlServiceException as __BaseException } from "./S3ControlServiceException";

/**
 * @public
 * <p>The container for abort incomplete multipart upload</p>
 */
export interface AbortIncompleteMultipartUpload {
  /**
   * @public
   * <p>Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload to
   *          the Outposts bucket.</p>
   */
  DaysAfterInitiation?: number;
}

/**
 * @public
 * @enum
 */
export const OwnerOverride = {
  Destination: "Destination",
} as const;

/**
 * @public
 */
export type OwnerOverride = (typeof OwnerOverride)[keyof typeof OwnerOverride];

/**
 * @public
 * <p>A container for information about access control for replicas.</p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 */
export interface AccessControlTranslation {
  /**
   * @public
   * <p>Specifies the replica ownership.</p>
   */
  Owner: OwnerOverride | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkOrigin = {
  Internet: "Internet",
  VPC: "VPC",
} as const;

/**
 * @public
 */
export type NetworkOrigin = (typeof NetworkOrigin)[keyof typeof NetworkOrigin];

/**
 * @public
 * <p>The virtual private cloud (VPC) configuration for an access point.</p>
 */
export interface VpcConfiguration {
  /**
   * @public
   * <p>If this field is specified, this access point will only allow connections from the specified VPC
   *          ID.</p>
   */
  VpcId: string | undefined;
}

/**
 * @public
 * <p>An access point used to access a bucket.</p>
 */
export interface AccessPoint {
  /**
   * @public
   * <p>The name of this access point.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Indicates whether this access point allows access from the public internet. If
   *             <code>VpcConfiguration</code> is specified for this access point, then
   *             <code>NetworkOrigin</code> is <code>VPC</code>, and the access point doesn't allow access from
   *          the public internet. Otherwise, <code>NetworkOrigin</code> is <code>Internet</code>, and
   *          the access point allows access from the public internet, subject to the access point and bucket access
   *          policies.</p>
   */
  NetworkOrigin: NetworkOrigin | undefined;

  /**
   * @public
   * <p>The virtual private cloud (VPC) configuration for this access point, if one exists.</p>
   *          <note>
   *             <p>This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other
   *                Amazon Web Services.</p>
   *          </note>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * @public
   * <p>The name of the bucket associated with this access point.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The ARN for the access point.</p>
   */
  AccessPointArn?: string;

  /**
   * @public
   * <p>The name or alias of the access point.</p>
   */
  Alias?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the S3 bucket associated with this access point.</p>
   */
  BucketAccountId?: string;
}

/**
 * @public
 * <p>The container element for Amazon S3 Storage Lens activity metrics. Activity metrics show details
 *          about how your storage is requested, such as requests (for example, All requests, Get
 *          requests, Put requests), bytes uploaded or downloaded, and errors.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface ActivityMetrics {
  /**
   * @public
   * <p>A container that indicates whether activity metrics are enabled.</p>
   */
  IsEnabled?: boolean;
}

/**
 * @public
 * <p>The container element for Amazon S3 Storage Lens advanced cost-optimization metrics. Advanced
 *          cost-optimization metrics provide insights that you can use to manage and optimize your
 *          storage costs, for example, lifecycle rule counts for transitions, expirations, and
 *          incomplete multipart uploads.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface AdvancedCostOptimizationMetrics {
  /**
   * @public
   * <p>A container that indicates whether advanced cost-optimization metrics are
   *          enabled.</p>
   */
  IsEnabled?: boolean;
}

/**
 * @public
 * <p>The container element for Amazon S3 Storage Lens advanced data-protection metrics. Advanced
 *          data-protection metrics provide insights that you can use to perform audits and protect
 *          your data, for example replication rule counts within and across Regions.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface AdvancedDataProtectionMetrics {
  /**
   * @public
   * <p>A container that indicates whether advanced data-protection metrics are enabled.</p>
   */
  IsEnabled?: boolean;
}

/**
 * @public
 * <p>The container element for Amazon S3 Storage Lens detailed status code metrics. Detailed status
 *          code metrics generate metrics for HTTP status codes, such as <code>200 OK</code>, <code>403
 *             Forbidden</code>, <code>503 Service Unavailable</code> and others. </p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface DetailedStatusCodesMetrics {
  /**
   * @public
   * <p>A container that indicates whether detailed status code metrics are enabled.</p>
   */
  IsEnabled?: boolean;
}

/**
 * @public
 * <p></p>
 */
export interface SelectionCriteria {
  /**
   * @public
   * <p>A container for the delimiter of the selection criteria being used.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>The max depth of the selection criteria</p>
   */
  MaxDepth?: number;

  /**
   * @public
   * <p>The minimum number of storage bytes percentage whose metrics will be selected.</p>
   *          <note>
   *             <p>You must choose a value greater than or equal to <code>1.0</code>.</p>
   *          </note>
   */
  MinStorageBytesPercentage?: number;
}

/**
 * @public
 * <p>A container for the prefix-level storage metrics for S3 Storage Lens.</p>
 */
export interface PrefixLevelStorageMetrics {
  /**
   * @public
   * <p>A container for whether prefix-level storage metrics are enabled.</p>
   */
  IsEnabled?: boolean;

  /**
   * @public
   * <p></p>
   */
  SelectionCriteria?: SelectionCriteria;
}

/**
 * @public
 * <p>A container for the prefix-level configuration.</p>
 */
export interface PrefixLevel {
  /**
   * @public
   * <p>A container for the prefix-level storage metrics for S3 Storage Lens.</p>
   */
  StorageMetrics: PrefixLevelStorageMetrics | undefined;
}

/**
 * @public
 * <p>A container for the bucket-level configuration for Amazon S3 Storage Lens.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface BucketLevel {
  /**
   * @public
   * <p>A container for the bucket-level activity metrics for S3 Storage Lens.</p>
   */
  ActivityMetrics?: ActivityMetrics;

  /**
   * @public
   * <p>A container for the prefix-level metrics for S3 Storage Lens. </p>
   */
  PrefixLevel?: PrefixLevel;

  /**
   * @public
   * <p>A container for bucket-level advanced cost-optimization metrics for S3 Storage Lens.</p>
   */
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;

  /**
   * @public
   * <p>A container for bucket-level advanced data-protection metrics for S3 Storage Lens.</p>
   */
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;

  /**
   * @public
   * <p>A container for bucket-level detailed status code metrics for S3 Storage Lens.</p>
   */
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
}

/**
 * @public
 * <p>A container for the account-level Amazon S3 Storage Lens configuration.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface AccountLevel {
  /**
   * @public
   * <p>A container for S3 Storage Lens activity metrics.</p>
   */
  ActivityMetrics?: ActivityMetrics;

  /**
   * @public
   * <p>A container for the S3 Storage Lens bucket-level configuration.</p>
   */
  BucketLevel: BucketLevel | undefined;

  /**
   * @public
   * <p>A container for S3 Storage Lens advanced cost-optimization metrics.</p>
   */
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;

  /**
   * @public
   * <p>A container for S3 Storage Lens advanced data-protection metrics.</p>
   */
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;

  /**
   * @public
   * <p>A container for detailed status code metrics. </p>
   */
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
}

/**
 * @public
 * <p>Error details for the failed asynchronous operation.</p>
 */
export interface AsyncErrorDetails {
  /**
   * @public
   * <p>A string that uniquely identifies the error condition.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>A generic description of the error condition in English.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The identifier of the resource associated with the error.</p>
   */
  Resource?: string;

  /**
   * @public
   * <p>The ID of the request associated with the error.</p>
   */
  RequestId?: string;
}

/**
 * @public
 * @enum
 */
export const AsyncOperationName = {
  CreateMultiRegionAccessPoint: "CreateMultiRegionAccessPoint",
  DeleteMultiRegionAccessPoint: "DeleteMultiRegionAccessPoint",
  PutMultiRegionAccessPointPolicy: "PutMultiRegionAccessPointPolicy",
} as const;

/**
 * @public
 */
export type AsyncOperationName = (typeof AsyncOperationName)[keyof typeof AsyncOperationName];

/**
 * @public
 * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
 *          account. You can enable the configuration options in any combination. For more information
 *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>This data type is not supported for Amazon S3 on Outposts.</p>
 */
export interface PublicAccessBlockConfiguration {
  /**
   * @public
   * <p>Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in
   *          this account. Setting this element to <code>TRUE</code> causes the following
   *          behavior:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PutBucketAcl</code> and <code>PutObjectAcl</code> calls fail if the
   *                specified ACL is public.</p>
   *             </li>
   *             <li>
   *                <p>PUT Object calls fail if the request includes a public ACL.</p>
   *             </li>
   *             <li>
   *                <p>PUT Bucket calls fail if the request includes a public ACL.</p>
   *             </li>
   *          </ul>
   *          <p>Enabling this setting doesn't affect existing policies or ACLs.</p>
   *          <p>This property is not supported for Amazon S3 on Outposts.</p>
   */
  BlockPublicAcls?: boolean;

  /**
   * @public
   * <p>Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting
   *          this element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on buckets in this
   *          account and any objects that they contain. </p>
   *          <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't
   *          prevent new public ACLs from being set.</p>
   *          <p>This property is not supported for Amazon S3 on Outposts.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * @public
   * <p>Specifies whether Amazon S3 should block public bucket policies for buckets in this account.
   *          Setting this element to <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket policy
   *          if the specified bucket policy allows public access. </p>
   *          <p>Enabling this setting doesn't affect existing bucket policies.</p>
   *          <p>This property is not supported for Amazon S3 on Outposts.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
   * @public
   * <p>Specifies whether Amazon S3 should restrict public bucket policies for buckets in this
   *          account. Setting this element to <code>TRUE</code> restricts access to buckets with public
   *          policies to only Amazon Web Service principals and authorized users within this
   *          account.</p>
   *          <p>Enabling this setting doesn't affect previously stored bucket policies, except that
   *          public and cross-account access within any public bucket policy, including non-public
   *          delegation to specific accounts, is blocked.</p>
   *          <p>This property is not supported for Amazon S3 on Outposts.</p>
   */
  RestrictPublicBuckets?: boolean;
}

/**
 * @public
 * <p>A Region that supports a Multi-Region Access Point as well as the associated bucket for the Region.</p>
 */
export interface Region {
  /**
   * @public
   * <p>The name of the associated bucket for the Region.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket that's associated with this
   *          Multi-Region Access Point.</p>
   */
  BucketAccountId?: string;
}

/**
 * @public
 * <p>A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> request. </p>
 */
export interface CreateMultiRegionAccessPointInput {
  /**
   * @public
   * <p>The name of the Multi-Region Access Point associated with this request.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          account. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>This data type is not supported for Amazon S3 on Outposts.</p>
   */
  PublicAccessBlock?: PublicAccessBlockConfiguration;

  /**
   * @public
   * <p>The buckets in different Regions that are associated with the Multi-Region Access Point.</p>
   */
  Regions: Region[] | undefined;
}

/**
 * @public
 * <p>A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> request.</p>
 */
export interface DeleteMultiRegionAccessPointInput {
  /**
   * @public
   * <p>The name of the Multi-Region Access Point associated with this request.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html">PutMultiRegionAccessPoint</a> request.</p>
 */
export interface PutMultiRegionAccessPointPolicyInput {
  /**
   * @public
   * <p>The name of the Multi-Region Access Point associated with the request.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The policy details for the <code>PutMultiRegionAccessPoint</code> request.</p>
   */
  Policy: string | undefined;
}

/**
 * @public
 * <p>A container for the request parameters associated with an asynchronous request.</p>
 */
export interface AsyncRequestParameters {
  /**
   * @public
   * <p>A container of the parameters for a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> request.</p>
   */
  CreateMultiRegionAccessPointRequest?: CreateMultiRegionAccessPointInput;

  /**
   * @public
   * <p>A container of the parameters for a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> request.</p>
   */
  DeleteMultiRegionAccessPointRequest?: DeleteMultiRegionAccessPointInput;

  /**
   * @public
   * <p>A container of the parameters for a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html">PutMultiRegionAccessPoint</a> request.</p>
   */
  PutMultiRegionAccessPointPolicyRequest?: PutMultiRegionAccessPointPolicyInput;
}

/**
 * @public
 * <p>Status information for a single Multi-Region Access Point Region.</p>
 */
export interface MultiRegionAccessPointRegionalResponse {
  /**
   * @public
   * <p>The name of the Region in the Multi-Region Access Point.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The current status of the Multi-Region Access Point in this Region.</p>
   */
  RequestStatus?: string;
}

/**
 * @public
 * <p>The Multi-Region Access Point details that are returned when querying about an asynchronous request.</p>
 */
export interface MultiRegionAccessPointsAsyncResponse {
  /**
   * @public
   * <p>A collection of status information for the different Regions that a Multi-Region Access Point
   *          supports.</p>
   */
  Regions?: MultiRegionAccessPointRegionalResponse[];
}

/**
 * @public
 * <p>A container for the response details that are returned when querying about an
 *          asynchronous request.</p>
 */
export interface AsyncResponseDetails {
  /**
   * @public
   * <p>The details for the Multi-Region Access Point.</p>
   */
  MultiRegionAccessPointDetails?: MultiRegionAccessPointsAsyncResponse;

  /**
   * @public
   * <p>Error details for an asynchronous request.</p>
   */
  ErrorDetails?: AsyncErrorDetails;
}

/**
 * @public
 * <p>A container for the information about an asynchronous operation.</p>
 */
export interface AsyncOperation {
  /**
   * @public
   * <p>The time that the request was sent to the service.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The specific operation for the asynchronous request.</p>
   */
  Operation?: AsyncOperationName;

  /**
   * @public
   * <p>The request token associated with the request.</p>
   */
  RequestTokenARN?: string;

  /**
   * @public
   * <p>The parameters associated with the request.</p>
   */
  RequestParameters?: AsyncRequestParameters;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  RequestStatus?: string;

  /**
   * @public
   * <p>The details of the response.</p>
   */
  ResponseDetails?: AsyncResponseDetails;
}

/**
 * @public
 * <p>Lambda function used to transform objects through an Object Lambda Access Point.</p>
 */
export interface AwsLambdaTransformation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda function.</p>
   */
  FunctionArn: string | undefined;

  /**
   * @public
   * <p>Additional JSON that provides supplemental data to the Lambda function used to transform
   *          objects.</p>
   */
  FunctionPayload?: string;
}

/**
 * @public
 */
export interface CreateAccessPointRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name you want to assign to this access point.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of the bucket that you want to associate this access point with.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>If you include this field, Amazon S3 restricts access to this access point to requests from the
   *          specified virtual private cloud (VPC).</p>
   *          <note>
   *             <p>This is required for creating an access point for Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * @public
   * <p> The <code>PublicAccessBlock</code> configuration that you want to apply to the access point.
   *       </p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;

  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the S3 bucket associated with this access point.</p>
   */
  BucketAccountId?: string;
}

/**
 * @public
 */
export interface CreateAccessPointResult {
  /**
   * @public
   * <p>The ARN of the access point.</p>
   *          <note>
   *             <p>This is only supported by Amazon S3 on Outposts.</p>
   *          </note>
   */
  AccessPointArn?: string;

  /**
   * @public
   * <p>The name or alias of the access point.</p>
   */
  Alias?: string;
}

/**
 * @public
 * @enum
 */
export const ObjectLambdaAllowedFeature = {
  GetObjectPartNumber: "GetObject-PartNumber",
  GetObjectRange: "GetObject-Range",
  HeadObjectPartNumber: "HeadObject-PartNumber",
  HeadObjectRange: "HeadObject-Range",
} as const;

/**
 * @public
 */
export type ObjectLambdaAllowedFeature = (typeof ObjectLambdaAllowedFeature)[keyof typeof ObjectLambdaAllowedFeature];

/**
 * @public
 * @enum
 */
export const ObjectLambdaTransformationConfigurationAction = {
  GetObject: "GetObject",
  HeadObject: "HeadObject",
  ListObjects: "ListObjects",
  ListObjectsV2: "ListObjectsV2",
} as const;

/**
 * @public
 */
export type ObjectLambdaTransformationConfigurationAction =
  (typeof ObjectLambdaTransformationConfigurationAction)[keyof typeof ObjectLambdaTransformationConfigurationAction];

/**
 * @public
 * <p>A container for AwsLambdaTransformation.</p>
 */
export type ObjectLambdaContentTransformation =
  | ObjectLambdaContentTransformation.AwsLambdaMember
  | ObjectLambdaContentTransformation.$UnknownMember;

/**
 * @public
 */
export namespace ObjectLambdaContentTransformation {
  /**
   * @public
   * <p>A container for an Lambda function.</p>
   */
  export interface AwsLambdaMember {
    AwsLambda: AwsLambdaTransformation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AwsLambda?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    AwsLambda: (value: AwsLambdaTransformation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ObjectLambdaContentTransformation, visitor: Visitor<T>): T => {
    if (value.AwsLambda !== undefined) return visitor.AwsLambda(value.AwsLambda);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>A configuration used when creating an Object Lambda Access Point transformation.</p>
 */
export interface ObjectLambdaTransformationConfiguration {
  /**
   * @public
   * <p>A container for the action of an Object Lambda Access Point configuration. Valid inputs are
   *             <code>GetObject</code>, <code>ListObjects</code>, <code>HeadObject</code>, and
   *             <code>ListObjectsV2</code>.</p>
   */
  Actions: ObjectLambdaTransformationConfigurationAction[] | undefined;

  /**
   * @public
   * <p>A container for the content transformation of an Object Lambda Access Point configuration.</p>
   */
  ContentTransformation: ObjectLambdaContentTransformation | undefined;
}

/**
 * @public
 * <p>A configuration used when creating an Object Lambda Access Point.</p>
 */
export interface ObjectLambdaConfiguration {
  /**
   * @public
   * <p>Standard access point associated with the Object Lambda Access Point.</p>
   */
  SupportingAccessPoint: string | undefined;

  /**
   * @public
   * <p>A container for whether the CloudWatch metrics configuration is enabled.</p>
   */
  CloudWatchMetricsEnabled?: boolean;

  /**
   * @public
   * <p>A container for allowed features. Valid inputs are <code>GetObject-Range</code>,
   *             <code>GetObject-PartNumber</code>, <code>HeadObject-Range</code>, and
   *             <code>HeadObject-PartNumber</code>.</p>
   */
  AllowedFeatures?: ObjectLambdaAllowedFeature[];

  /**
   * @public
   * <p>A container for transformation configurations for an Object Lambda Access Point.</p>
   */
  TransformationConfigurations: ObjectLambdaTransformationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointForObjectLambdaRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for owner of the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name you want to assign to this Object Lambda Access Point.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Object Lambda Access Point configuration as a JSON document.</p>
   */
  Configuration: ObjectLambdaConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const ObjectLambdaAccessPointAliasStatus = {
  PROVISIONING: "PROVISIONING",
  READY: "READY",
} as const;

/**
 * @public
 */
export type ObjectLambdaAccessPointAliasStatus =
  (typeof ObjectLambdaAccessPointAliasStatus)[keyof typeof ObjectLambdaAccessPointAliasStatus];

/**
 * @public
 * <p>The alias of an Object Lambda Access Point. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.html#ol-access-points-alias">How to use a bucket-style alias for your S3 bucket
 *          Object Lambda Access Point</a>.</p>
 */
export interface ObjectLambdaAccessPointAlias {
  /**
   * @public
   * <p>The alias value of the Object Lambda Access Point.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The status of the Object Lambda Access Point alias. If the status is <code>PROVISIONING</code>, the Object Lambda Access Point is provisioning the alias and the alias is not ready for use yet. If
   *          the status is <code>READY</code>, the Object Lambda Access Point alias is successfully provisioned and ready for use.</p>
   */
  Status?: ObjectLambdaAccessPointAliasStatus;
}

/**
 * @public
 */
export interface CreateAccessPointForObjectLambdaResult {
  /**
   * @public
   * <p>Specifies the ARN for the Object Lambda Access Point.</p>
   */
  ObjectLambdaAccessPointArn?: string;

  /**
   * @public
   * <p>The alias of the Object Lambda Access Point.</p>
   */
  Alias?: ObjectLambdaAccessPointAlias;
}

/**
 * @public
 * <p>The requested Outposts bucket name is not available. The bucket namespace is shared by
 *          all users of the Outposts in this Region. Select a different name and try
 *          again.</p>
 */
export class BucketAlreadyExists extends __BaseException {
  readonly name: "BucketAlreadyExists" = "BucketAlreadyExists";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketAlreadyExists, __BaseException>) {
    super({
      name: "BucketAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketAlreadyExists.prototype);
  }
}

/**
 * @public
 * <p>The Outposts bucket you tried to create already exists, and you own it. </p>
 */
export class BucketAlreadyOwnedByYou extends __BaseException {
  readonly name: "BucketAlreadyOwnedByYou" = "BucketAlreadyOwnedByYou";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketAlreadyOwnedByYou, __BaseException>) {
    super({
      name: "BucketAlreadyOwnedByYou",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketAlreadyOwnedByYou.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const BucketCannedACL = {
  authenticated_read: "authenticated-read",
  private: "private",
  public_read: "public-read",
  public_read_write: "public-read-write",
} as const;

/**
 * @public
 */
export type BucketCannedACL = (typeof BucketCannedACL)[keyof typeof BucketCannedACL];

/**
 * @public
 * @enum
 */
export const BucketLocationConstraint = {
  EU: "EU",
  ap_northeast_1: "ap-northeast-1",
  ap_south_1: "ap-south-1",
  ap_southeast_1: "ap-southeast-1",
  ap_southeast_2: "ap-southeast-2",
  cn_north_1: "cn-north-1",
  eu_central_1: "eu-central-1",
  eu_west_1: "eu-west-1",
  sa_east_1: "sa-east-1",
  us_west_1: "us-west-1",
  us_west_2: "us-west-2",
} as const;

/**
 * @public
 */
export type BucketLocationConstraint = (typeof BucketLocationConstraint)[keyof typeof BucketLocationConstraint];

/**
 * @public
 * <p>The container for the bucket configuration.</p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 */
export interface CreateBucketConfiguration {
  /**
   * @public
   * <p>Specifies the Region where the bucket will be created. If you are creating a bucket on
   *          the US East (N. Virginia) Region (us-east-1), you do not need to specify the location. </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  LocationConstraint?: BucketLocationConstraint;
}

/**
 * @public
 */
export interface CreateBucketRequest {
  /**
   * @public
   * <p>The canned ACL to apply to the bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  ACL?: BucketCannedACL;

  /**
   * @public
   * <p>The name of the bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The configuration information for the bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  CreateBucketConfiguration?: CreateBucketConfiguration;

  /**
   * @public
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  GrantFullControl?: string;

  /**
   * @public
   * <p>Allows grantee to list the objects in the bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  GrantRead?: string;

  /**
   * @public
   * <p>Allows grantee to read the bucket ACL.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  GrantReadACP?: string;

  /**
   * @public
   * <p>Allows grantee to create, overwrite, and delete any object in the bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  GrantWrite?: string;

  /**
   * @public
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  GrantWriteACP?: string;

  /**
   * @public
   * <p>Specifies whether you want S3 Object Lock to be enabled for the new bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  ObjectLockEnabledForBucket?: boolean;

  /**
   * @public
   * <p>The ID of the Outposts where the bucket is being created.</p>
   *          <note>
   *             <p>This ID is required by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  OutpostId?: string;
}

/**
 * @public
 */
export interface CreateBucketResult {
  /**
   * @public
   * <p>The location of the bucket.</p>
   */
  Location?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  BucketArn?: string;
}

/**
 * @public
 * <p></p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Contains the information required to locate a manifest object.</p>
 */
export interface JobManifestLocation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a manifest object.</p>
   *          <important>
   *             <p>When you're using XML requests, you must
   * replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes.
   * For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML-related object key constraints</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          </important>
   */
  ObjectArn: string | undefined;

  /**
   * @public
   * <p>The optional version ID to identify a specific version of the manifest object.</p>
   */
  ObjectVersionId?: string;

  /**
   * @public
   * <p>The ETag for the specified manifest object.</p>
   */
  ETag: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobManifestFieldName = {
  Bucket: "Bucket",
  Ignore: "Ignore",
  Key: "Key",
  VersionId: "VersionId",
} as const;

/**
 * @public
 */
export type JobManifestFieldName = (typeof JobManifestFieldName)[keyof typeof JobManifestFieldName];

/**
 * @public
 * @enum
 */
export const JobManifestFormat = {
  S3BatchOperations_CSV_20180820: "S3BatchOperations_CSV_20180820",
  S3InventoryReport_CSV_20161130: "S3InventoryReport_CSV_20161130",
} as const;

/**
 * @public
 */
export type JobManifestFormat = (typeof JobManifestFormat)[keyof typeof JobManifestFormat];

/**
 * @public
 * <p>Describes the format of a manifest. If the manifest is in CSV format, also describes the
 *          columns contained within the manifest.</p>
 */
export interface JobManifestSpec {
  /**
   * @public
   * <p>Indicates which of the available formats the specified manifest uses.</p>
   */
  Format: JobManifestFormat | undefined;

  /**
   * @public
   * <p>If the specified manifest object is in the <code>S3BatchOperations_CSV_20180820</code>
   *          format, this element describes which columns contain the required data.</p>
   */
  Fields?: JobManifestFieldName[];
}

/**
 * @public
 * <p>Contains the configuration information for a job's manifest.</p>
 */
export interface JobManifest {
  /**
   * @public
   * <p>Describes the format of the specified job's manifest. If the manifest is in CSV format,
   *          also describes the columns contained within the manifest.</p>
   */
  Spec: JobManifestSpec | undefined;

  /**
   * @public
   * <p>Contains the information required to locate the specified job's manifest.</p>
   */
  Location: JobManifestLocation | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplicationStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  NONE: "NONE",
  REPLICA: "REPLICA",
} as const;

/**
 * @public
 */
export type ReplicationStatus = (typeof ReplicationStatus)[keyof typeof ReplicationStatus];

/**
 * @public
 * <p>The filter used to describe a set of objects for the job's manifest.</p>
 */
export interface JobManifestGeneratorFilter {
  /**
   * @public
   * <p>Include objects in the generated manifest only if they are eligible for replication
   *          according to the Replication configuration on the source bucket.</p>
   */
  EligibleForReplication?: boolean;

  /**
   * @public
   * <p>If provided, the generated manifest should include only source bucket objects that were
   *          created after this time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>If provided, the generated manifest should include only source bucket objects that were
   *          created before this time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>If provided, the generated manifest should include only source bucket objects that have
   *          one of the specified Replication statuses.</p>
   */
  ObjectReplicationStatuses?: ReplicationStatus[];
}

/**
 * @public
 * <p>Configuration for the use of SSE-KMS to encrypt generated manifest objects.</p>
 */
export interface SSEKMSEncryption {
  /**
   * @public
   * <p>Specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption
   *          customer managed key to use for encrypting generated manifest objects.</p>
   */
  KeyId: string | undefined;
}

/**
 * @public
 * <p>Configuration for the use of SSE-S3 to encrypt generated manifest objects.</p>
 */
export interface SSES3Encryption {}

/**
 * @public
 * <p>The encryption configuration to use when storing the generated manifest.</p>
 */
export interface GeneratedManifestEncryption {
  /**
   * @public
   * <p>Specifies the use of SSE-S3 to encrypt generated manifest objects.</p>
   */
  SSES3?: SSES3Encryption;

  /**
   * @public
   * <p>Configuration details on how SSE-KMS is used to encrypt generated manifest
   *          objects.</p>
   */
  SSEKMS?: SSEKMSEncryption;
}

/**
 * @public
 * @enum
 */
export const GeneratedManifestFormat = {
  S3InventoryReport_CSV_20211130: "S3InventoryReport_CSV_20211130",
} as const;

/**
 * @public
 */
export type GeneratedManifestFormat = (typeof GeneratedManifestFormat)[keyof typeof GeneratedManifestFormat];

/**
 * @public
 * <p>Location details for where the generated manifest should be written.</p>
 */
export interface S3ManifestOutputLocation {
  /**
   * @public
   * <p>The Account ID that owns the bucket the generated manifest is written to.</p>
   */
  ExpectedManifestBucketOwner?: string;

  /**
   * @public
   * <p>The bucket ARN the generated manifest should be written to.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Prefix identifying one or more objects to which the manifest applies.</p>
   */
  ManifestPrefix?: string;

  /**
   * @public
   * <p>Specifies what encryption should be used when the generated manifest objects are
   *          written.</p>
   */
  ManifestEncryption?: GeneratedManifestEncryption;

  /**
   * @public
   * <p>The format of the generated manifest.</p>
   */
  ManifestFormat: GeneratedManifestFormat | undefined;
}

/**
 * @public
 * <p>The container for the service that will create the S3 manifest.</p>
 */
export interface S3JobManifestGenerator {
  /**
   * @public
   * <p>The Amazon Web Services account ID that owns the bucket the generated manifest is written to. If
   *          provided the generated manifest bucket's owner Amazon Web Services account ID must match this value, else
   *          the job fails.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>The source bucket used by the ManifestGenerator.</p>
   */
  SourceBucket: string | undefined;

  /**
   * @public
   * <p>Specifies the location the generated manifest will be written to.</p>
   */
  ManifestOutputLocation?: S3ManifestOutputLocation;

  /**
   * @public
   * <p>Specifies rules the S3JobManifestGenerator should use to use to decide whether an object
   *          in the source bucket should or should not be included in the generated job manifest.</p>
   */
  Filter?: JobManifestGeneratorFilter;

  /**
   * @public
   * <p>Determines whether or not to write the job's generated manifest to a bucket.</p>
   */
  EnableManifestOutput: boolean | undefined;
}

/**
 * @public
 * <p>Configures the type of the job's ManifestGenerator.</p>
 */
export type JobManifestGenerator =
  | JobManifestGenerator.S3JobManifestGeneratorMember
  | JobManifestGenerator.$UnknownMember;

/**
 * @public
 */
export namespace JobManifestGenerator {
  /**
   * @public
   * <p>The S3 job ManifestGenerator's configuration details.</p>
   */
  export interface S3JobManifestGeneratorMember {
    S3JobManifestGenerator: S3JobManifestGenerator;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3JobManifestGenerator?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    S3JobManifestGenerator: (value: S3JobManifestGenerator) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: JobManifestGenerator, visitor: Visitor<T>): T => {
    if (value.S3JobManifestGenerator !== undefined) return visitor.S3JobManifestGenerator(value.S3JobManifestGenerator);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Contains the configuration parameters for a <code>Lambda Invoke</code> operation.</p>
 */
export interface LambdaInvokeOperation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the Lambda function that the specified job will
   *          invoke on every object in the manifest.</p>
   */
  FunctionArn?: string;
}

/**
 * @public
 * <p>Contains no configuration parameters because the DELETE Object tagging
 *             (<code>DeleteObjectTagging</code>)
 *          API
 *          operation
 *          accepts
 *          only
 *          the bucket name and key name as parameters, which are defined in the
 *          job's manifest.</p>
 */
export interface S3DeleteObjectTaggingOperation {}

/**
 * @public
 * @enum
 */
export const S3GlacierJobTier = {
  BULK: "BULK",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type S3GlacierJobTier = (typeof S3GlacierJobTier)[keyof typeof S3GlacierJobTier];

/**
 * @public
 * <p>Contains the configuration parameters for
 *          a
 *          POST Object restore job. S3 Batch Operations passes every object to the
 *          underlying
 *             <code>RestoreObject</code>
 *          API
 *          operation. For more information about the parameters for this operation,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">RestoreObject</a>.</p>
 */
export interface S3InitiateRestoreObjectOperation {
  /**
   * @public
   * <p>This argument specifies how long the S3 Glacier or S3 Glacier Deep Archive object remains
   *          available in Amazon S3. S3 Initiate Restore Object jobs that target S3 Glacier and S3 Glacier Deep Archive
   *          objects require <code>ExpirationInDays</code> set to 1 or greater.</p>
   *          <p>Conversely, do <i>not</i> set <code>ExpirationInDays</code> when creating
   *          S3 Initiate Restore Object jobs that target S3 Intelligent-Tiering Archive Access and
   *          Deep Archive Access tier objects. Objects in S3 Intelligent-Tiering archive access tiers are
   *          not subject to restore expiry, so specifying <code>ExpirationInDays</code> results in
   *          restore request failure.</p>
   *          <p>S3 Batch Operations jobs can operate either on S3 Glacier and S3 Glacier Deep Archive storage class
   *          objects or on S3 Intelligent-Tiering Archive Access and Deep Archive Access storage tier
   *          objects, but not both types in the same job. If you need to restore objects of both types
   *          you <i>must</i> create separate Batch Operations jobs. </p>
   */
  ExpirationInDays?: number;

  /**
   * @public
   * <p>S3 Batch Operations supports <code>STANDARD</code> and <code>BULK</code> retrieval tiers, but
   *          not the <code>EXPEDITED</code> retrieval tier.</p>
   */
  GlacierJobTier?: S3GlacierJobTier;
}

/**
 * @public
 * @enum
 */
export const S3GranteeTypeIdentifier = {
  CANONICAL: "id",
  EMAIL_ADDRESS: "emailAddress",
  GROUP: "uri",
} as const;

/**
 * @public
 */
export type S3GranteeTypeIdentifier = (typeof S3GranteeTypeIdentifier)[keyof typeof S3GranteeTypeIdentifier];

/**
 * @public
 * <p></p>
 */
export interface S3Grantee {
  /**
   * @public
   * <p></p>
   */
  TypeIdentifier?: S3GranteeTypeIdentifier;

  /**
   * @public
   * <p></p>
   */
  Identifier?: string;

  /**
   * @public
   * <p></p>
   */
  DisplayName?: string;
}

/**
 * @public
 * @enum
 */
export const S3Permission = {
  FULL_CONTROL: "FULL_CONTROL",
  READ: "READ",
  READ_ACP: "READ_ACP",
  WRITE: "WRITE",
  WRITE_ACP: "WRITE_ACP",
} as const;

/**
 * @public
 */
export type S3Permission = (typeof S3Permission)[keyof typeof S3Permission];

/**
 * @public
 * <p></p>
 */
export interface S3Grant {
  /**
   * @public
   * <p></p>
   */
  Grantee?: S3Grantee;

  /**
   * @public
   * <p></p>
   */
  Permission?: S3Permission;
}

/**
 * @public
 * <p></p>
 */
export interface S3ObjectOwner {
  /**
   * @public
   * <p></p>
   */
  ID?: string;

  /**
   * @public
   * <p></p>
   */
  DisplayName?: string;
}

/**
 * @public
 * <p></p>
 */
export interface S3AccessControlList {
  /**
   * @public
   * <p></p>
   */
  Owner: S3ObjectOwner | undefined;

  /**
   * @public
   * <p></p>
   */
  Grants?: S3Grant[];
}

/**
 * @public
 * @enum
 */
export const S3CannedAccessControlList = {
  AUTHENTICATED_READ: "authenticated-read",
  AWS_EXEC_READ: "aws-exec-read",
  BUCKET_OWNER_FULL_CONTROL: "bucket-owner-full-control",
  BUCKET_OWNER_READ: "bucket-owner-read",
  PRIVATE: "private",
  PUBLIC_READ: "public-read",
  PUBLIC_READ_WRITE: "public-read-write",
} as const;

/**
 * @public
 */
export type S3CannedAccessControlList = (typeof S3CannedAccessControlList)[keyof typeof S3CannedAccessControlList];

/**
 * @public
 * <p></p>
 */
export interface S3AccessControlPolicy {
  /**
   * @public
   * <p></p>
   */
  AccessControlList?: S3AccessControlList;

  /**
   * @public
   * <p></p>
   */
  CannedAccessControlList?: S3CannedAccessControlList;
}

/**
 * @public
 * <p>Contains the configuration parameters for a
 *          PUT
 *          Object ACL operation. S3 Batch Operations passes every object to the underlying
 *             <code>PutObjectAcl</code>
 *          API
 *          operation. For more information about the parameters for this operation,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PutObjectAcl</a>.</p>
 */
export interface S3SetObjectAclOperation {
  /**
   * @public
   * <p></p>
   */
  AccessControlPolicy?: S3AccessControlPolicy;
}

/**
 * @public
 * @enum
 */
export const S3ChecksumAlgorithm = {
  CRC32: "CRC32",
  CRC32C: "CRC32C",
  SHA1: "SHA1",
  SHA256: "SHA256",
} as const;

/**
 * @public
 */
export type S3ChecksumAlgorithm = (typeof S3ChecksumAlgorithm)[keyof typeof S3ChecksumAlgorithm];

/**
 * @public
 * @enum
 */
export const S3MetadataDirective = {
  COPY: "COPY",
  REPLACE: "REPLACE",
} as const;

/**
 * @public
 */
export type S3MetadataDirective = (typeof S3MetadataDirective)[keyof typeof S3MetadataDirective];

/**
 * @public
 * @enum
 */
export const S3SSEAlgorithm = {
  AES256: "AES256",
  KMS: "KMS",
} as const;

/**
 * @public
 */
export type S3SSEAlgorithm = (typeof S3SSEAlgorithm)[keyof typeof S3SSEAlgorithm];

/**
 * @public
 * <p></p>
 */
export interface S3ObjectMetadata {
  /**
   * @public
   * <p></p>
   */
  CacheControl?: string;

  /**
   * @public
   * <p></p>
   */
  ContentDisposition?: string;

  /**
   * @public
   * <p></p>
   */
  ContentEncoding?: string;

  /**
   * @public
   * <p></p>
   */
  ContentLanguage?: string;

  /**
   * @public
   * <p></p>
   */
  UserMetadata?: Record<string, string>;

  /**
   * @public
   * <p></p>
   */
  ContentLength?: number;

  /**
   * @public
   * <p></p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p></p>
   */
  ContentType?: string;

  /**
   * @public
   * <p></p>
   */
  HttpExpiresDate?: Date;

  /**
   * @public
   * <p></p>
   */
  RequesterCharged?: boolean;

  /**
   * @public
   * <p></p>
   */
  SSEAlgorithm?: S3SSEAlgorithm;
}

/**
 * @public
 * <p>A container for a key-value name pair.</p>
 */
export interface S3Tag {
  /**
   * @public
   * <p>Key of the tag</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Value of the tag</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const S3ObjectLockLegalHoldStatus = {
  OFF: "OFF",
  ON: "ON",
} as const;

/**
 * @public
 */
export type S3ObjectLockLegalHoldStatus =
  (typeof S3ObjectLockLegalHoldStatus)[keyof typeof S3ObjectLockLegalHoldStatus];

/**
 * @public
 * @enum
 */
export const S3ObjectLockMode = {
  COMPLIANCE: "COMPLIANCE",
  GOVERNANCE: "GOVERNANCE",
} as const;

/**
 * @public
 */
export type S3ObjectLockMode = (typeof S3ObjectLockMode)[keyof typeof S3ObjectLockMode];

/**
 * @public
 * @enum
 */
export const S3StorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  GLACIER_IR: "GLACIER_IR",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  STANDARD: "STANDARD",
  STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * @public
 */
export type S3StorageClass = (typeof S3StorageClass)[keyof typeof S3StorageClass];

/**
 * @public
 * <p>Contains
 *          the configuration parameters for a PUT Copy object operation. S3 Batch Operations passes every
 *          object to the underlying
 *             <code>CopyObject</code>
 *          API
 *          operation. For more information about the parameters for this operation,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">CopyObject</a>.</p>
 */
export interface S3CopyObjectOperation {
  /**
   * @public
   * <p>Specifies the destination bucket
   *          Amazon Resource Name
   *          (ARN)
   *          for the batch copy operation. For example, to copy objects to a bucket named
   *             <code>destinationBucket</code>, set the <code>TargetResource</code> property to
   *             <code>arn:aws:s3:::destinationBucket</code>.</p>
   */
  TargetResource?: string;

  /**
   * @public
   * <p></p>
   */
  CannedAccessControlList?: S3CannedAccessControlList;

  /**
   * @public
   * <p></p>
   */
  AccessControlGrants?: S3Grant[];

  /**
   * @public
   * <p></p>
   */
  MetadataDirective?: S3MetadataDirective;

  /**
   * @public
   * <p></p>
   */
  ModifiedSinceConstraint?: Date;

  /**
   * @public
   * <p>If you don't provide this parameter, Amazon S3 copies all the metadata from the original
   *          objects. If you specify an empty set, the new objects will have no tags. Otherwise, Amazon S3
   *          assigns the supplied tags to the new objects.</p>
   */
  NewObjectMetadata?: S3ObjectMetadata;

  /**
   * @public
   * <p></p>
   */
  NewObjectTagging?: S3Tag[];

  /**
   * @public
   * <p>Specifies an optional metadata property for website redirects,
   *             <code>x-amz-website-redirect-location</code>. Allows webpage redirects if the object is
   *          accessed through a website endpoint.</p>
   */
  RedirectLocation?: string;

  /**
   * @public
   * <p></p>
   */
  RequesterPays?: boolean;

  /**
   * @public
   * <p></p>
   */
  StorageClass?: S3StorageClass;

  /**
   * @public
   * <p></p>
   */
  UnModifiedSinceConstraint?: Date;

  /**
   * @public
   * <p></p>
   */
  SSEAwsKmsKeyId?: string;

  /**
   * @public
   * <p>Specifies the folder prefix
   *          that
   *          you
   *          want
   *          the objects to be
   *          copied
   *          into. For example, to copy objects into a folder named
   *             <code>Folder1</code> in the destination bucket, set the
   *             <code>TargetKeyPrefix</code>
   *          property
   *          to <code>Folder1</code>.</p>
   */
  TargetKeyPrefix?: string;

  /**
   * @public
   * <p>The legal hold status to be applied to all objects in the Batch Operations job.</p>
   */
  ObjectLockLegalHoldStatus?: S3ObjectLockLegalHoldStatus;

  /**
   * @public
   * <p>The retention mode to be applied to all objects in the Batch Operations job.</p>
   */
  ObjectLockMode?: S3ObjectLockMode;

  /**
   * @public
   * <p>The date when the applied object retention configuration expires on all objects in the
   *          Batch Operations job.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * @public
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with
   *          server-side encryption using Amazon Web Services KMS (SSE-KMS). Setting this header to <code>true</code>
   *          causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.</p>
   *          <p>Specifying this header with an <i>object</i> action doesn’t affect
   *             <i>bucket-level</i> settings for S3 Bucket Key.</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * @public
   * <p>Indicates the algorithm
   *          that
   *          you want Amazon S3 to use to create the checksum. For more
   *          information,
   *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CheckingObjectIntegrity.xml"> Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumAlgorithm?: S3ChecksumAlgorithm;
}

/**
 * @public
 * <p>Whether S3 Object Lock legal hold will be applied to objects in an S3 Batch Operations
 *          job.</p>
 */
export interface S3ObjectLockLegalHold {
  /**
   * @public
   * <p>The Object Lock legal hold status to be applied to all objects in the Batch Operations
   *          job.</p>
   */
  Status: S3ObjectLockLegalHoldStatus | undefined;
}

/**
 * @public
 * <p>Contains the configuration for an S3 Object Lock legal hold operation that an
 *          S3 Batch Operations job passes
 *          to
 *          every object to the underlying
 *             <code>PutObjectLegalHold</code>
 *          API
 *          operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold
 *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface S3SetObjectLegalHoldOperation {
  /**
   * @public
   * <p>Contains the Object Lock legal hold status to be applied to all objects in the
   *          Batch Operations job.</p>
   */
  LegalHold: S3ObjectLockLegalHold | undefined;
}

/**
 * @public
 * @enum
 */
export const S3ObjectLockRetentionMode = {
  COMPLIANCE: "COMPLIANCE",
  GOVERNANCE: "GOVERNANCE",
} as const;

/**
 * @public
 */
export type S3ObjectLockRetentionMode = (typeof S3ObjectLockRetentionMode)[keyof typeof S3ObjectLockRetentionMode];

/**
 * @public
 * <p>Contains the S3 Object Lock retention mode to be applied to all objects in the
 *          S3 Batch Operations job. If you don't provide <code>Mode</code> and <code>RetainUntilDate</code>
 *          data types in your operation, you will remove the retention from your objects. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention
 *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface S3Retention {
  /**
   * @public
   * <p>The date when the applied Object Lock retention will expire on all objects set by the
   *          Batch Operations job.</p>
   */
  RetainUntilDate?: Date;

  /**
   * @public
   * <p>The Object Lock retention mode to be applied to all objects in the Batch Operations
   *          job.</p>
   */
  Mode?: S3ObjectLockRetentionMode;
}

/**
 * @public
 * <p>Contains the configuration parameters for the Object Lock retention action for an
 *          S3 Batch Operations job. Batch Operations passes every object to the underlying
 *             <code>PutObjectRetention</code>
 *          API
 *          operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention
 *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface S3SetObjectRetentionOperation {
  /**
   * @public
   * <p>Indicates if the action should be applied to objects in the Batch Operations job even if they
   *          have Object Lock <code> GOVERNANCE</code> type in place.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * @public
   * <p>Contains the Object Lock retention mode to be applied to all objects in the Batch Operations
   *          job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention
   *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Retention: S3Retention | undefined;
}

/**
 * @public
 * <p>Contains the configuration parameters for a
 *          PUT
 *          Object Tagging operation. S3 Batch Operations passes every object to the underlying
 *             <code>PutObjectTagging</code>
 *          API
 *          operation. For more information about the parameters for this operation,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PutObjectTagging</a>.</p>
 */
export interface S3SetObjectTaggingOperation {
  /**
   * @public
   * <p></p>
   */
  TagSet?: S3Tag[];
}

/**
 * @public
 * <p>Directs the specified job to invoke <code>ReplicateObject</code> on every object in the
 *          job's manifest.</p>
 */
export interface S3ReplicateObjectOperation {}

/**
 * @public
 * <p>The operation that you want this job to perform on every object listed in the manifest.
 *          For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 */
export interface JobOperation {
  /**
   * @public
   * <p>Directs the specified job to invoke an Lambda function on every object in the
   *          manifest.</p>
   */
  LambdaInvoke?: LambdaInvokeOperation;

  /**
   * @public
   * <p>Directs the specified job to run a PUT Copy object call on every object in the
   *          manifest.</p>
   */
  S3PutObjectCopy?: S3CopyObjectOperation;

  /**
   * @public
   * <p>Directs the specified job to run a <code>PutObjectAcl</code> call on every object in the
   *          manifest.</p>
   */
  S3PutObjectAcl?: S3SetObjectAclOperation;

  /**
   * @public
   * <p>Directs the specified job to run a PUT Object tagging call on every object in the
   *          manifest.</p>
   */
  S3PutObjectTagging?: S3SetObjectTaggingOperation;

  /**
   * @public
   * <p>Directs the specified job to execute a DELETE Object tagging call on every object in the
   *          manifest.</p>
   */
  S3DeleteObjectTagging?: S3DeleteObjectTaggingOperation;

  /**
   * @public
   * <p>Directs the specified job to initiate restore requests for every archived object in the
   *          manifest.</p>
   */
  S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation;

  /**
   * @public
   * <p>Contains the configuration for an S3 Object Lock legal hold operation that an
   *          S3 Batch Operations job passes
   *          to
   *          every object to the underlying
   *             <code>PutObjectLegalHold</code>
   *          API
   *          operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold
   *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation;

  /**
   * @public
   * <p>Contains the configuration parameters for the Object Lock retention action for an
   *          S3 Batch Operations job. Batch Operations passes every object to the underlying
   *             <code>PutObjectRetention</code>
   *          API
   *          operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention
   *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  S3PutObjectRetention?: S3SetObjectRetentionOperation;

  /**
   * @public
   * <p>Directs the specified job to invoke <code>ReplicateObject</code> on every object in the
   *          job's manifest.</p>
   */
  S3ReplicateObject?: S3ReplicateObjectOperation;
}

/**
 * @public
 * @enum
 */
export const JobReportFormat = {
  Report_CSV_20180820: "Report_CSV_20180820",
} as const;

/**
 * @public
 */
export type JobReportFormat = (typeof JobReportFormat)[keyof typeof JobReportFormat];

/**
 * @public
 * @enum
 */
export const JobReportScope = {
  AllTasks: "AllTasks",
  FailedTasksOnly: "FailedTasksOnly",
} as const;

/**
 * @public
 */
export type JobReportScope = (typeof JobReportScope)[keyof typeof JobReportScope];

/**
 * @public
 * <p>Contains the configuration parameters for a job-completion report.</p>
 */
export interface JobReport {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the bucket where specified job-completion report will
   *          be stored.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>The format of the specified job-completion report.</p>
   */
  Format?: JobReportFormat;

  /**
   * @public
   * <p>Indicates whether the specified job will generate a job-completion report.</p>
   */
  Enabled: boolean | undefined;

  /**
   * @public
   * <p>An optional prefix to describe where in the specified bucket the job-completion report
   *          will be stored. Amazon S3 stores the job-completion report at
   *             <code><prefix>/job-<job-id>/report.json</code>.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>Indicates whether the job-completion report will include details of all tasks or only
   *          failed tasks.</p>
   */
  ReportScope?: JobReportScope;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID that creates the job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is
   *          only required for jobs created through the Amazon S3 console.</p>
   */
  ConfirmationRequired?: boolean;

  /**
   * @public
   * <p>The action that you want this job to perform on every object listed in the manifest. For
   *          more information about the available actions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-actions.html">Operations</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  Operation: JobOperation | undefined;

  /**
   * @public
   * <p>Configuration parameters for the optional job-completion report.</p>
   */
  Report: JobReport | undefined;

  /**
   * @public
   * <p>An idempotency token to ensure that you don't accidentally submit the same request
   *          twice. You can use any string up to the maximum length.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Configuration parameters for the manifest.</p>
   */
  Manifest?: JobManifest;

  /**
   * @public
   * <p>A description for this job. You can use any string within the permitted length.
   *          Descriptions don't need to be unique and can be used for multiple jobs.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The numerical priority for this job. Higher numbers indicate higher priority.</p>
   */
  Priority: number | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role that Batch Operations will
   *          use to run this job's action on every object in the manifest.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A set of tags to associate with the S3 Batch Operations job. This is an optional parameter.
   *       </p>
   */
  Tags?: S3Tag[];

  /**
   * @public
   * <p>The attribute container for the ManifestGenerator details. Jobs must be created with
   *          either a manifest file or a ManifestGenerator, but not both.</p>
   */
  ManifestGenerator?: JobManifestGenerator;
}

/**
 * @public
 */
export interface CreateJobResult {
  /**
   * @public
   * <p>The ID for this job. Amazon S3 generates this ID automatically and returns it after a
   *          successful <code>Create Job</code> request.</p>
   */
  JobId?: string;
}

/**
 * @public
 * <p></p>
 */
export class IdempotencyException extends __BaseException {
  readonly name: "IdempotencyException" = "IdempotencyException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotencyException, __BaseException>) {
    super({
      name: "IdempotencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotencyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p></p>
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p></p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateMultiRegionAccessPointRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point. The owner of the Multi-Region Access Point also must own
   *          the underlying buckets.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>An idempotency token used to identify the request and guarantee that requests are
   *          unique.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>A container element containing details about the Multi-Region Access Point.</p>
   */
  Details: CreateMultiRegionAccessPointInput | undefined;
}

/**
 * @public
 */
export interface CreateMultiRegionAccessPointResult {
  /**
   * @public
   * <p>The request token associated with the request. You can use this token with <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> to determine the status of asynchronous
   *          requests.</p>
   */
  RequestTokenARN?: string;
}

/**
 * @public
 */
export interface DeleteAccessPointRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the access point you want to delete.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointForObjectLambdaRequest {
  /**
   * @public
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the access point you want to delete.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointPolicyRequest {
  /**
   * @public
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the access point whose policy you want to delete.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointPolicyForObjectLambdaRequest {
  /**
   * @public
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the Object Lambda Access Point you want to delete the policy for.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketRequest {
  /**
   * @public
   * <p>The account ID that owns the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Specifies the bucket being deleted.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketLifecycleConfigurationRequest {
  /**
   * @public
   * <p>The account ID of the lifecycle configuration to delete.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketPolicyRequest {
  /**
   * @public
   * <p>The account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketReplicationRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Outposts bucket to delete the replication configuration
   *          for.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Specifies the S3 on Outposts bucket to delete the replication configuration for.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketTaggingRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Outposts bucket tag set to be removed.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The bucket ARN that has the tag set to be removed.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTaggingRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ID for the S3 Batch Operations job whose tags you want to delete.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTaggingResult {}

/**
 * @public
 * <p></p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteMultiRegionAccessPointRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>An idempotency token used to identify the request and guarantee that requests are
   *          unique.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>A container element containing details about the Multi-Region Access Point.</p>
   */
  Details: DeleteMultiRegionAccessPointInput | undefined;
}

/**
 * @public
 */
export interface DeleteMultiRegionAccessPointResult {
  /**
   * @public
   * <p>The request token associated with the request. You can use this token with <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> to determine the status of asynchronous
   *          requests.</p>
   */
  RequestTokenARN?: string;
}

/**
 * @public
 */
export interface DeletePublicAccessBlockRequest {
  /**
   * @public
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration
   *          you want to remove.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface DeleteStorageLensConfigurationRequest {
  /**
   * @public
   * <p>The ID of the S3 Storage Lens configuration.</p>
   */
  ConfigId: string | undefined;

  /**
   * @public
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface DeleteStorageLensConfigurationTaggingRequest {
  /**
   * @public
   * <p>The ID of the S3 Storage Lens configuration.</p>
   */
  ConfigId: string | undefined;

  /**
   * @public
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface DeleteStorageLensConfigurationTaggingResult {}

/**
 * @public
 */
export interface DescribeJobRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ID for the job whose information you want to retrieve.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>If this job failed, this element indicates why the job failed.</p>
 */
export interface JobFailure {
  /**
   * @public
   * <p>The failure code, if any, for the specified job.</p>
   */
  FailureCode?: string;

  /**
   * @public
   * <p>The failure reason, if any, for the specified job.</p>
   */
  FailureReason?: string;
}

/**
 * @public
 * <p>Describes the specified job's generated manifest. Batch Operations jobs created with a
 *          ManifestGenerator populate details of this descriptor after execution of the
 *          ManifestGenerator.</p>
 */
export interface S3GeneratedManifestDescriptor {
  /**
   * @public
   * <p>The format of the generated manifest.</p>
   */
  Format?: GeneratedManifestFormat;

  /**
   * @public
   * <p>Contains the information required to locate a manifest object.</p>
   */
  Location?: JobManifestLocation;
}

/**
 * @public
 * <p>Provides timing details for the job.</p>
 */
export interface JobTimers {
  /**
   * @public
   * <p>Indicates the elapsed time in seconds the job has been in the Active job state.</p>
   */
  ElapsedTimeInActiveSeconds?: number;
}

/**
 * @public
 * <p>Describes the total number of tasks that the specified job has started, the number of
 *          tasks that succeeded, and the number of tasks that failed.</p>
 */
export interface JobProgressSummary {
  /**
   * @public
   * <p></p>
   */
  TotalNumberOfTasks?: number;

  /**
   * @public
   * <p></p>
   */
  NumberOfTasksSucceeded?: number;

  /**
   * @public
   * <p></p>
   */
  NumberOfTasksFailed?: number;

  /**
   * @public
   * <p>The JobTimers attribute of a job's progress summary.</p>
   */
  Timers?: JobTimers;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  Active: "Active",
  Cancelled: "Cancelled",
  Cancelling: "Cancelling",
  Complete: "Complete",
  Completing: "Completing",
  Failed: "Failed",
  Failing: "Failing",
  New: "New",
  Paused: "Paused",
  Pausing: "Pausing",
  Preparing: "Preparing",
  Ready: "Ready",
  Suspended: "Suspended",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * <p>A container element for the job configuration and status information returned by a
 *             <code>Describe Job</code> request.</p>
 */
export interface JobDescriptor {
  /**
   * @public
   * <p>The ID for the specified job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>Indicates whether confirmation is required before Amazon S3 begins running the specified job.
   *          Confirmation is required only for jobs created through the Amazon S3 console.</p>
   */
  ConfirmationRequired?: boolean;

  /**
   * @public
   * <p>The description for this job, if one was provided in this job's <code>Create Job</code>
   *          request.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for this job.</p>
   */
  JobArn?: string;

  /**
   * @public
   * <p>The current status of the specified job.</p>
   */
  Status?: JobStatus;

  /**
   * @public
   * <p>The configuration information for the specified job's manifest object.</p>
   */
  Manifest?: JobManifest;

  /**
   * @public
   * <p>The operation that the specified job is configured to run on the objects listed in the
   *          manifest.</p>
   */
  Operation?: JobOperation;

  /**
   * @public
   * <p>The priority of the specified job.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>Describes the total number of tasks that the specified job has run, the number of tasks
   *          that succeeded, and the number of tasks that failed.</p>
   */
  ProgressSummary?: JobProgressSummary;

  /**
   * @public
   * <p>The reason for updating the job.</p>
   */
  StatusUpdateReason?: string;

  /**
   * @public
   * <p>If the specified job failed, this field contains information describing the
   *          failure.</p>
   */
  FailureReasons?: JobFailure[];

  /**
   * @public
   * <p>Contains the configuration information for the job-completion report if you requested
   *          one in the <code>Create Job</code> request.</p>
   */
  Report?: JobReport;

  /**
   * @public
   * <p>A timestamp indicating when this job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A timestamp indicating when this job terminated. A job's termination date is the date
   *          and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role assigned to run the tasks
   *          for this job.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The timestamp when this job was suspended, if it has been suspended.</p>
   */
  SuspendedDate?: Date;

  /**
   * @public
   * <p>The reason why the specified job was suspended. A job is only suspended if you create it
   *          through the Amazon S3 console. When you create the job, it enters the <code>Suspended</code>
   *          state to await confirmation before running. After you confirm the job, it automatically
   *          exits the <code>Suspended</code> state.</p>
   */
  SuspendedCause?: string;

  /**
   * @public
   * <p>The manifest generator that was used to generate a job manifest for this job.</p>
   */
  ManifestGenerator?: JobManifestGenerator;

  /**
   * @public
   * <p>The attribute of the JobDescriptor containing details about the job's generated
   *          manifest.</p>
   */
  GeneratedManifestDescriptor?: S3GeneratedManifestDescriptor;
}

/**
 * @public
 */
export interface DescribeJobResult {
  /**
   * @public
   * <p>Contains the configuration parameters and status for the job specified in the
   *             <code>Describe Job</code> request.</p>
   */
  Job?: JobDescriptor;
}

/**
 * @public
 */
export interface DescribeMultiRegionAccessPointOperationRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The request token associated with the request you want to know about. This request token
   *          is returned as part of the response when you make an asynchronous request. You provide this
   *          token to query about the status of the asynchronous action.</p>
   */
  RequestTokenARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionAccessPointOperationResult {
  /**
   * @public
   * <p>A container element containing the details of the asynchronous operation.</p>
   */
  AsyncOperation?: AsyncOperation;
}

/**
 * @public
 */
export interface GetAccessPointRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the access point whose configuration information you want to retrieve.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointResult {
  /**
   * @public
   * <p>The name of the specified access point.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The name of the bucket associated with the specified access point.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>Indicates whether this access point allows access from the public internet. If
   *             <code>VpcConfiguration</code> is specified for this access point, then
   *             <code>NetworkOrigin</code> is <code>VPC</code>, and the access point doesn't allow access from
   *          the public internet. Otherwise, <code>NetworkOrigin</code> is <code>Internet</code>, and
   *          the access point allows access from the public internet, subject to the access point and bucket access
   *          policies.</p>
   *          <p>This will always be true for an Amazon S3 on Outposts access point</p>
   */
  NetworkOrigin?: NetworkOrigin;

  /**
   * @public
   * <p>Contains the virtual private cloud (VPC) configuration for the specified access point.</p>
   *          <note>
   *             <p>This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other
   *                Amazon Web Services.</p>
   *          </note>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * @public
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          account. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>This data type is not supported for Amazon S3 on Outposts.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;

  /**
   * @public
   * <p>The date and time when the specified access point was created.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The name or alias of the access point.</p>
   */
  Alias?: string;

  /**
   * @public
   * <p>The ARN of the access point.</p>
   */
  AccessPointArn?: string;

  /**
   * @public
   * <p>The VPC endpoint for the access point.</p>
   */
  Endpoints?: Record<string, string>;

  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the S3 bucket associated with this access point.</p>
   */
  BucketAccountId?: string;
}

/**
 * @public
 */
export interface GetAccessPointConfigurationForObjectLambdaRequest {
  /**
   * @public
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the Object Lambda Access Point you want to return the configuration for.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointConfigurationForObjectLambdaResult {
  /**
   * @public
   * <p>Object Lambda Access Point configuration document.</p>
   */
  Configuration?: ObjectLambdaConfiguration;
}

/**
 * @public
 */
export interface GetAccessPointForObjectLambdaRequest {
  /**
   * @public
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointForObjectLambdaResult {
  /**
   * @public
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Configuration to block all public access. This setting is turned on and can not be
   *          edited. </p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;

  /**
   * @public
   * <p>The date and time when the specified Object Lambda Access Point was created.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The alias of the Object Lambda Access Point.</p>
   */
  Alias?: ObjectLambdaAccessPointAlias;
}

/**
 * @public
 */
export interface GetAccessPointPolicyRequest {
  /**
   * @public
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the access point whose policy you want to retrieve.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyResult {
  /**
   * @public
   * <p>The access point policy associated with the specified access point.</p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface GetAccessPointPolicyForObjectLambdaRequest {
  /**
   * @public
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyForObjectLambdaResult {
  /**
   * @public
   * <p>Object Lambda Access Point resource policy document.</p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface GetAccessPointPolicyStatusRequest {
  /**
   * @public
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the access point whose policy status you want to retrieve.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Indicates whether this access point policy is public. For more information about how Amazon S3
 *          evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. </p>
 */
export interface PolicyStatus {
  /**
   * @public
   * <p></p>
   */
  IsPublic?: boolean;
}

/**
 * @public
 */
export interface GetAccessPointPolicyStatusResult {
  /**
   * @public
   * <p>Indicates the current policy status of the specified access point.</p>
   */
  PolicyStatus?: PolicyStatus;
}

/**
 * @public
 */
export interface GetAccessPointPolicyStatusForObjectLambdaRequest {
  /**
   * @public
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyStatusForObjectLambdaResult {
  /**
   * @public
   * <p>Indicates whether this access point policy is public. For more information about how Amazon S3
   *          evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. </p>
   */
  PolicyStatus?: PolicyStatus;
}

/**
 * @public
 */
export interface GetBucketRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface GetBucketResult {
  /**
   * @public
   * <p>The Outposts bucket requested.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p></p>
   */
  PublicAccessBlockEnabled?: boolean;

  /**
   * @public
   * <p>The creation date of the Outposts bucket.</p>
   */
  CreationDate?: Date;
}

/**
 * @public
 */
export interface GetBucketLifecycleConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

/**
 * @public
 * <p>The container of the Outposts bucket lifecycle expiration.</p>
 */
export interface LifecycleExpiration {
  /**
   * @public
   * <p>Indicates at what date the object is to be deleted. Should be in GMT ISO 8601
   *          format.</p>
   */
  Date?: Date;

  /**
   * @public
   * <p>Indicates the lifetime, in days, of the objects that are subject to the rule. The value
   *          must be a non-zero positive integer.</p>
   */
  Days?: number;

  /**
   * @public
   * <p>Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set
   *          to true, the delete marker will be expired. If set to false, the policy takes no action.
   *          This cannot be specified with Days or Date in a Lifecycle Expiration Policy.</p>
   */
  ExpiredObjectDeleteMarker?: boolean;
}

/**
 * @public
 * <p>The container for the Outposts bucket lifecycle rule and operator.</p>
 */
export interface LifecycleRuleAndOperator {
  /**
   * @public
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>All of these tags must exist in the object's tag set in order for the rule to
   *          apply.</p>
   */
  Tags?: S3Tag[];

  /**
   * @public
   * <p>Minimum object size to which the rule applies.</p>
   */
  ObjectSizeGreaterThan?: number;

  /**
   * @public
   * <p>Maximum object size to which the rule applies.</p>
   */
  ObjectSizeLessThan?: number;
}

/**
 * @public
 * <p>The container for the filter of the lifecycle rule.</p>
 */
export interface LifecycleRuleFilter {
  /**
   * @public
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   *          <important>
   *             <p>When you're using XML requests, you must
   * replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes.
   * For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML-related object key constraints</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          </important>
   */
  Prefix?: string;

  /**
   * @public
   * <p>A container for a key-value name pair.</p>
   */
  Tag?: S3Tag;

  /**
   * @public
   * <p>The container for the <code>AND</code> condition for the lifecycle rule.</p>
   */
  And?: LifecycleRuleAndOperator;

  /**
   * @public
   * <p>Minimum object size to which the rule applies.</p>
   */
  ObjectSizeGreaterThan?: number;

  /**
   * @public
   * <p>Maximum object size to which the rule applies.</p>
   */
  ObjectSizeLessThan?: number;
}

/**
 * @public
 * <p>The container of the noncurrent version expiration.</p>
 */
export interface NoncurrentVersionExpiration {
  /**
   * @public
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How
   *             Amazon S3 Calculates When an Object Became Noncurrent</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  NoncurrentDays?: number;

  /**
   * @public
   * <p>Specifies how many noncurrent versions S3 on Outposts will retain. If there are this many
   *          more recent noncurrent versions, S3 on Outposts will take the associated action. For more
   *          information about noncurrent versions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html">Lifecycle configuration
   *             elements</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  NewerNoncurrentVersions?: number;
}

/**
 * @public
 * @enum
 */
export const TransitionStorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * @public
 */
export type TransitionStorageClass = (typeof TransitionStorageClass)[keyof typeof TransitionStorageClass];

/**
 * @public
 * <p>The container for the noncurrent version transition.</p>
 */
export interface NoncurrentVersionTransition {
  /**
   * @public
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations"> How
   *             Amazon S3 Calculates How Long an Object Has Been Noncurrent</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  NoncurrentDays?: number;

  /**
   * @public
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: TransitionStorageClass;
}

/**
 * @public
 * @enum
 */
export const ExpirationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ExpirationStatus = (typeof ExpirationStatus)[keyof typeof ExpirationStatus];

/**
 * @public
 * <p>Specifies when an object transitions to a specified storage class. For more information
 *          about Amazon S3 Lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html">
 *             Transitioning objects using Amazon S3 Lifecycle</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 */
export interface Transition {
  /**
   * @public
   * <p>Indicates when objects are transitioned to the specified storage class. The date value
   *          must be in ISO 8601 format. The time is always midnight UTC.</p>
   */
  Date?: Date;

  /**
   * @public
   * <p>Indicates the number of days after creation when objects are transitioned to the
   *          specified storage class. The value must be a positive integer.</p>
   */
  Days?: number;

  /**
   * @public
   * <p>The storage class to which you want the object to transition.</p>
   */
  StorageClass?: TransitionStorageClass;
}

/**
 * @public
 * <p>The container for the Outposts bucket lifecycle rule.</p>
 */
export interface LifecycleRule {
  /**
   * @public
   * <p>Specifies the expiration for the lifecycle of the object in the form of date, days and,
   *          whether the object has a delete marker.</p>
   */
  Expiration?: LifecycleExpiration;

  /**
   * @public
   * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
   */
  ID?: string;

  /**
   * @public
   * <p>The container for the filter of lifecycle rule.</p>
   */
  Filter?: LifecycleRuleFilter;

  /**
   * @public
   * <p>If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not
   *          currently being applied.</p>
   */
  Status: ExpirationStatus | undefined;

  /**
   * @public
   * <p>Specifies when an Amazon S3 object transitions to a specified storage class.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  Transitions?: Transition[];

  /**
   * @public
   * <p> Specifies the transition rule for the lifecycle rule that describes when noncurrent
   *          objects transition to a specific storage class. If your bucket is versioning-enabled (or
   *          versioning is suspended), you can set this action to request that Amazon S3 transition
   *          noncurrent object versions to a specific storage class at a set period in the object's
   *          lifetime. </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  NoncurrentVersionTransitions?: NoncurrentVersionTransition[];

  /**
   * @public
   * <p>The noncurrent version expiration of the lifecycle rule.</p>
   */
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration;

  /**
   * @public
   * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3
   *          waits before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
   *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
}

/**
 * @public
 */
export interface GetBucketLifecycleConfigurationResult {
  /**
   * @public
   * <p>Container for the lifecycle rule of the Outposts bucket.</p>
   */
  Rules?: LifecycleRule[];
}

/**
 * @public
 */
export interface GetBucketPolicyRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface GetBucketPolicyResult {
  /**
   * @public
   * <p>The policy of the Outposts bucket.</p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface GetBucketReplicationRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Specifies the bucket to get the replication information for.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeleteMarkerReplicationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type DeleteMarkerReplicationStatus =
  (typeof DeleteMarkerReplicationStatus)[keyof typeof DeleteMarkerReplicationStatus];

/**
 * @public
 * <p>Specifies whether S3 on Outposts replicates delete markers. If you specify a
 *             <code>Filter</code> element in your replication configuration, you must also include a
 *             <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a
 *             <code>Tag</code> element, the <code>DeleteMarkerReplication</code> element's
 *             <code>Status</code> child element must be set to <code>Disabled</code>, because
 *          S3 on Outposts does not support replicating delete markers for tag-based rules.</p>
 *          <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html#outposts-replication-what-is-replicated">How delete operations affect replication</a> in the <i>Amazon S3 User Guide</i>. </p>
 */
export interface DeleteMarkerReplication {
  /**
   * @public
   * <p>Indicates whether to replicate delete markers.</p>
   */
  Status: DeleteMarkerReplicationStatus | undefined;
}

/**
 * @public
 * <p>Specifies encryption-related information for an Amazon S3 bucket that is a destination for
 *          replicated objects.</p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 */
export interface EncryptionConfiguration {
  /**
   * @public
   * <p>Specifies the ID of the customer managed KMS key that's stored in Key Management Service (KMS)
   *          for the destination bucket. This ID is either the Amazon Resource Name (ARN) for the
   *          KMS key or the alias ARN for the KMS key. Amazon S3 uses this KMS key to encrypt
   *          replica objects. Amazon S3 supports only symmetric encryption KMS keys. For more information,
   *          see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks">Symmetric encryption
   *             KMS keys</a> in the <i>Amazon Web Services Key Management Service Developer
   *             Guide</i>.</p>
   */
  ReplicaKmsKeyID?: string;
}

/**
 * @public
 * <p>A container that specifies the time value for S3 Replication Time Control (S3 RTC). This value is also used for
 *          the replication metrics <code>EventThreshold</code> element. </p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 */
export interface ReplicationTimeValue {
  /**
   * @public
   * <p>Contains an integer that specifies the time period in minutes. </p>
   *          <p>Valid value: 15</p>
   */
  Minutes?: number;
}

/**
 * @public
 * @enum
 */
export const MetricsStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type MetricsStatus = (typeof MetricsStatus)[keyof typeof MetricsStatus];

/**
 * @public
 * <p>A container that specifies replication metrics-related settings.</p>
 */
export interface Metrics {
  /**
   * @public
   * <p>Specifies whether replication metrics are enabled. </p>
   */
  Status: MetricsStatus | undefined;

  /**
   * @public
   * <p>A container that specifies the time threshold for emitting the
   *             <code>s3:Replication:OperationMissedThreshold</code> event. </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  EventThreshold?: ReplicationTimeValue;
}

/**
 * @public
 * @enum
 */
export const ReplicationTimeStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ReplicationTimeStatus = (typeof ReplicationTimeStatus)[keyof typeof ReplicationTimeStatus];

/**
 * @public
 * <p>A container that specifies S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC
 *          is enabled and the time when all objects and operations on objects must be
 *          replicated.</p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 */
export interface ReplicationTime {
  /**
   * @public
   * <p>Specifies whether S3 Replication Time Control (S3 RTC) is enabled. </p>
   */
  Status: ReplicationTimeStatus | undefined;

  /**
   * @public
   * <p>A container that specifies the time by which replication should be complete for all
   *          objects and operations on objects. </p>
   */
  Time: ReplicationTimeValue | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplicationStorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  GLACIER_IR: "GLACIER_IR",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  OUTPOSTS: "OUTPOSTS",
  REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
  STANDARD: "STANDARD",
  STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * @public
 */
export type ReplicationStorageClass = (typeof ReplicationStorageClass)[keyof typeof ReplicationStorageClass];

/**
 * @public
 * <p>Specifies information about the replication destination bucket and its settings for an
 *          S3 on Outposts replication configuration.</p>
 */
export interface Destination {
  /**
   * @public
   * <p>The destination bucket owner's account ID. </p>
   */
  Account?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the access point for the destination bucket where you want
   *          S3 on Outposts to store the replication results.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>A container that specifies S3 Replication Time Control (S3 RTC) settings, including whether S3 RTC is enabled
   *          and the time when all objects and operations on objects must be replicated. Must be
   *          specified together with a <code>Metrics</code> block. </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  ReplicationTime?: ReplicationTime;

  /**
   * @public
   * <p>Specify this property only in a cross-account scenario (where the source and destination
   *          bucket owners are not the same), and you want to change replica ownership to the
   *          Amazon Web Services account that owns the destination bucket. If this property is not specified in the
   *          replication configuration, the replicas are owned by same Amazon Web Services account that owns the
   *          source object.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  AccessControlTranslation?: AccessControlTranslation;

  /**
   * @public
   * <p>A container that provides information about encryption. If
   *             <code>SourceSelectionCriteria</code> is specified, you must specify this element.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * @public
   * <p> A container that specifies replication metrics-related settings. </p>
   */
  Metrics?: Metrics;

  /**
   * @public
   * <p> The storage class to use when replicating objects. All objects stored on S3 on Outposts
   *          are stored in the <code>OUTPOSTS</code> storage class. S3 on Outposts uses the
   *             <code>OUTPOSTS</code> storage class to create the object replicas. </p>
   *          <note>
   *             <p>Values other than <code>OUTPOSTS</code> are not supported by Amazon S3 on Outposts. </p>
   *          </note>
   */
  StorageClass?: ReplicationStorageClass;
}

/**
 * @public
 * @enum
 */
export const ExistingObjectReplicationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ExistingObjectReplicationStatus =
  (typeof ExistingObjectReplicationStatus)[keyof typeof ExistingObjectReplicationStatus];

/**
 * @public
 * <p>An optional configuration to replicate existing source bucket objects. </p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 */
export interface ExistingObjectReplication {
  /**
   * @public
   * <p>Specifies whether Amazon S3 replicates existing source bucket objects. </p>
   */
  Status: ExistingObjectReplicationStatus | undefined;
}

/**
 * @public
 * <p>A container for specifying rule filters. The filters determine the subset of objects to
 *          which the rule applies. This element is required only if you specify more than one filter. </p>
 *          <p>For example:</p>
 *          <ul>
 *             <li>
 *                <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap
 *                these filters in an <code>And</code> element. </p>
 *             </li>
 *             <li>
 *                <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements
 *                in an <code>And</code> element.</p>
 *             </li>
 *          </ul>
 */
export interface ReplicationRuleAndOperator {
  /**
   * @public
   * <p>An object key name prefix that identifies the subset of objects that the rule applies
   *          to.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>An array of tags that contain key and value pairs.</p>
   */
  Tags?: S3Tag[];
}

/**
 * @public
 * <p>A filter that identifies the subset of objects to which the replication rule applies. A
 *             <code>Filter</code> element must specify exactly one <code>Prefix</code>,
 *             <code>Tag</code>, or <code>And</code> child element.</p>
 */
export interface ReplicationRuleFilter {
  /**
   * @public
   * <p>An object key name prefix that identifies the subset of objects that the rule applies
   *          to.</p>
   *          <important>
   *             <p>When you're using XML requests, you must
   * replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes.
   * For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML-related object key constraints</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          </important>
   */
  Prefix?: string;

  /**
   * @public
   * <p>A container for a key-value name pair.</p>
   */
  Tag?: S3Tag;

  /**
   * @public
   * <p>A container for specifying rule filters. The filters determine the subset of objects
   *          that the rule applies to. This element is required only if you specify more than one
   *          filter. For example: </p>
   *          <ul>
   *             <li>
   *                <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap
   *                these filters in an <code>And</code> element.</p>
   *             </li>
   *             <li>
   *                <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements
   *                in an <code>And</code> element.</p>
   *             </li>
   *          </ul>
   */
  And?: ReplicationRuleAndOperator;
}

/**
 * @public
 * @enum
 */
export const ReplicaModificationsStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ReplicaModificationsStatus = (typeof ReplicaModificationsStatus)[keyof typeof ReplicaModificationsStatus];

/**
 * @public
 * <p>A filter that you can use to specify whether replica modification sync is enabled.
 *          S3 on Outposts replica modification sync can help you keep object metadata synchronized
 *          between replicas and source objects. By default, S3 on Outposts replicates metadata from the
 *          source objects to the replicas only. When replica modification sync is enabled,
 *          S3 on Outposts replicates metadata changes made to the replica copies back to the source
 *          object, making the replication bidirectional.</p>
 *          <p>To replicate object metadata modifications on replicas, you can specify this element and
 *          set the <code>Status</code> of this element to <code>Enabled</code>.</p>
 *          <note>
 *             <p>You must enable replica modification sync on the source and destination buckets to
 *             replicate replica metadata changes between the source and the replicas.</p>
 *          </note>
 */
export interface ReplicaModifications {
  /**
   * @public
   * <p>Specifies whether S3 on Outposts replicates modifications to object metadata on
   *          replicas.</p>
   */
  Status: ReplicaModificationsStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const SseKmsEncryptedObjectsStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type SseKmsEncryptedObjectsStatus =
  (typeof SseKmsEncryptedObjectsStatus)[keyof typeof SseKmsEncryptedObjectsStatus];

/**
 * @public
 * <p>A container for filter information that you can use to select S3 objects that are
 *          encrypted with Key Management Service (KMS).</p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 */
export interface SseKmsEncryptedObjects {
  /**
   * @public
   * <p>Specifies whether Amazon S3 replicates objects that are created with server-side encryption
   *          by using an KMS key stored in Key Management Service.</p>
   */
  Status: SseKmsEncryptedObjectsStatus | undefined;
}

/**
 * @public
 * <p>A container that describes additional filters for identifying the source objects that
 *          you want to replicate. You can choose to enable or disable the replication of these
 *          objects.</p>
 */
export interface SourceSelectionCriteria {
  /**
   * @public
   * <p>A filter that you can use to select Amazon S3 objects that are encrypted with server-side
   *          encryption by using Key Management Service (KMS) keys. If you include
   *             <code>SourceSelectionCriteria</code> in the replication configuration, this element is
   *          required. </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  SseKmsEncryptedObjects?: SseKmsEncryptedObjects;

  /**
   * @public
   * <p>A filter that you can use to specify whether replica modification sync is enabled.
   *          S3 on Outposts replica modification sync can help you keep object metadata synchronized
   *          between replicas and source objects. By default, S3 on Outposts replicates metadata from the
   *          source objects to the replicas only. When replica modification sync is enabled,
   *          S3 on Outposts replicates metadata changes made to the replica copies back to the source
   *          object, making the replication bidirectional.</p>
   *          <p>To replicate object metadata modifications on replicas, you can specify this element and
   *          set the <code>Status</code> of this element to <code>Enabled</code>.</p>
   *          <note>
   *             <p>You must enable replica modification sync on the source and destination buckets to
   *             replicate replica metadata changes between the source and the replicas.</p>
   *          </note>
   */
  ReplicaModifications?: ReplicaModifications;
}

/**
 * @public
 * @enum
 */
export const ReplicationRuleStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ReplicationRuleStatus = (typeof ReplicationRuleStatus)[keyof typeof ReplicationRuleStatus];

/**
 * @public
 * <p>Specifies which S3 on Outposts objects to replicate and where to store the replicas.</p>
 */
export interface ReplicationRule {
  /**
   * @public
   * <p>A unique identifier for the rule. The maximum value is 255 characters.</p>
   */
  ID?: string;

  /**
   * @public
   * <p>The priority indicates which rule has precedence whenever two or more replication rules
   *          conflict. S3 on Outposts attempts to replicate objects according to all replication rules.
   *          However, if there are two or more rules with the same destination Outposts bucket, then objects will
   *          be replicated according to the rule with the highest priority. The higher the number, the
   *          higher the priority. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-between-outposts.html">Creating replication rules on Outposts</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  Priority?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>An object key name prefix that identifies the object or objects to which the rule
   *          applies. The maximum prefix length is 1,024 characters. To include all objects in an
   *          Outposts bucket, specify an empty string.</p>
   *          <important>
   *             <p>When you're using XML requests, you must
   * replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes.
   * For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML-related object key constraints</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          </important>
   */
  Prefix?: string;

  /**
   * @public
   * <p>A filter that identifies the subset of objects to which the replication rule applies. A
   *             <code>Filter</code> element must specify exactly one <code>Prefix</code>,
   *             <code>Tag</code>, or <code>And</code> child element.</p>
   */
  Filter?: ReplicationRuleFilter;

  /**
   * @public
   * <p>Specifies whether the rule is enabled.</p>
   */
  Status: ReplicationRuleStatus | undefined;

  /**
   * @public
   * <p>A container that describes additional filters for identifying the source Outposts objects that
   *          you want to replicate. You can choose to enable or disable the replication of these
   *          objects.</p>
   */
  SourceSelectionCriteria?: SourceSelectionCriteria;

  /**
   * @public
   * <p>An optional configuration to replicate existing source bucket objects. </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  ExistingObjectReplication?: ExistingObjectReplication;

  /**
   * @public
   * <p>A container for information about the replication destination and its configurations.</p>
   */
  Destination: Destination | undefined;

  /**
   * @public
   * <p>Specifies whether S3 on Outposts replicates delete markers. If you specify a
   *             <code>Filter</code> element in your replication configuration, you must also include a
   *             <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a
   *             <code>Tag</code> element, the <code>DeleteMarkerReplication</code> element's
   *             <code>Status</code> child element must be set to <code>Disabled</code>, because
   *          S3 on Outposts doesn't support replicating delete markers for tag-based rules.</p>
   *          <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html#outposts-replication-what-is-replicated">How delete operations affect replication</a> in the <i>Amazon S3 User Guide</i>. </p>
   */
  DeleteMarkerReplication?: DeleteMarkerReplication;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the access point for the source Outposts bucket that you want
   *          S3 on Outposts to replicate the objects from.</p>
   */
  Bucket: string | undefined;
}

/**
 * @public
 * <p>A container for one or more replication rules. A replication configuration must have at least one rule and you can add up to 100 rules. The maximum size of a
 *          replication configuration is 128 KB.</p>
 */
export interface ReplicationConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that S3 on Outposts assumes
   *          when replicating objects. For information about S3 replication on Outposts configuration,
   *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-replication-how-setup.html">Setting up
   *             replication</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Role: string | undefined;

  /**
   * @public
   * <p>A container for one or more replication rules. A replication configuration must have at
   *          least one rule and can contain an array of 100 rules at the most. </p>
   */
  Rules: ReplicationRule[] | undefined;
}

/**
 * @public
 */
export interface GetBucketReplicationResult {
  /**
   * @public
   * <p>A container for one or more replication rules. A replication configuration must have at least one rule and you can add up to 100 rules. The maximum size of a
   *          replication configuration is 128 KB.</p>
   */
  ReplicationConfiguration?: ReplicationConfiguration;
}

/**
 * @public
 */
export interface GetBucketTaggingRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface GetBucketTaggingResult {
  /**
   * @public
   * <p>The tags set of the Outposts bucket.</p>
   */
  TagSet: S3Tag[] | undefined;
}

/**
 * @public
 */
export interface GetBucketVersioningRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the S3 on Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The S3 on Outposts bucket to return the versioning state for.</p>
   */
  Bucket: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MFADeleteStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type MFADeleteStatus = (typeof MFADeleteStatus)[keyof typeof MFADeleteStatus];

/**
 * @public
 * @enum
 */
export const BucketVersioningStatus = {
  Enabled: "Enabled",
  Suspended: "Suspended",
} as const;

/**
 * @public
 */
export type BucketVersioningStatus = (typeof BucketVersioningStatus)[keyof typeof BucketVersioningStatus];

/**
 * @public
 */
export interface GetBucketVersioningResult {
  /**
   * @public
   * <p>The versioning state of the S3 on Outposts bucket.</p>
   */
  Status?: BucketVersioningStatus;

  /**
   * @public
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This
   *          element is returned only if the bucket has been configured with MFA delete. If MFA delete
   *          has never been configured for the bucket, this element is not returned.</p>
   */
  MFADelete?: MFADeleteStatus;
}

/**
 * @public
 */
export interface GetJobTaggingRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ID for the S3 Batch Operations job whose tags you want to retrieve.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobTaggingResult {
  /**
   * @public
   * <p>The set of tags associated with the S3 Batch Operations job.</p>
   */
  Tags?: S3Tag[];
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the Multi-Region Access Point whose configuration information you want to receive. The name of
   *          the Multi-Region Access Point is different from the alias. For more information about the distinction between
   *          the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>A combination of a bucket and Region that's part of a Multi-Region Access Point.</p>
 */
export interface RegionReport {
  /**
   * @public
   * <p>The name of the bucket.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>The name of the Region.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket that's associated with this
   *          Multi-Region Access Point.</p>
   */
  BucketAccountId?: string;
}

/**
 * @public
 * @enum
 */
export const MultiRegionAccessPointStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  INCONSISTENT_ACROSS_REGIONS: "INCONSISTENT_ACROSS_REGIONS",
  PARTIALLY_CREATED: "PARTIALLY_CREATED",
  PARTIALLY_DELETED: "PARTIALLY_DELETED",
  READY: "READY",
} as const;

/**
 * @public
 */
export type MultiRegionAccessPointStatus =
  (typeof MultiRegionAccessPointStatus)[keyof typeof MultiRegionAccessPointStatus];

/**
 * @public
 * <p>A collection of statuses for a Multi-Region Access Point in the various Regions it supports.</p>
 */
export interface MultiRegionAccessPointReport {
  /**
   * @public
   * <p>The name of the Multi-Region Access Point.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The alias for the Multi-Region Access Point. For more information about the distinction between the name
   *          and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a>.</p>
   */
  Alias?: string;

  /**
   * @public
   * <p>When the Multi-Region Access Point create request was received.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          account. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>This data type is not supported for Amazon S3 on Outposts.</p>
   */
  PublicAccessBlock?: PublicAccessBlockConfiguration;

  /**
   * @public
   * <p>The current status of the Multi-Region Access Point.</p>
   *          <p>
   *             <code>CREATING</code> and <code>DELETING</code> are temporary states that exist while
   *          the request is propagating and being completed. If a Multi-Region Access Point has a status of
   *             <code>PARTIALLY_CREATED</code>, you can retry creation or send a request to delete the
   *          Multi-Region Access Point. If a Multi-Region Access Point has a status of <code>PARTIALLY_DELETED</code>, you can retry a delete
   *          request to finish the deletion of the Multi-Region Access Point.</p>
   */
  Status?: MultiRegionAccessPointStatus;

  /**
   * @public
   * <p>A collection of the Regions and buckets associated with the Multi-Region Access Point.</p>
   */
  Regions?: RegionReport[];
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointResult {
  /**
   * @public
   * <p>A container element containing the details of the requested Multi-Region Access Point.</p>
   */
  AccessPoint?: MultiRegionAccessPointReport;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointPolicyRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more
   *          information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>The last established access control policy for a Multi-Region Access Point.</p>
 *          <p>When you update the policy, the update is first listed as the proposed policy. After the
 *          update is finished and all Regions have been updated, the proposed policy is listed as the
 *          established policy. If both policies have the same version number, the proposed policy is
 *          the established policy.</p>
 */
export interface EstablishedMultiRegionAccessPointPolicy {
  /**
   * @public
   * <p>The details of the last established policy.</p>
   */
  Policy?: string;
}

/**
 * @public
 * <p>The proposed access control policy for the Multi-Region Access Point.</p>
 *          <p>When you update the policy, the update is first listed as the proposed policy. After the
 *          update is finished and all Regions have been updated, the proposed policy is listed as the
 *          established policy. If both policies have the same version number, the proposed policy is
 *          the established policy.</p>
 */
export interface ProposedMultiRegionAccessPointPolicy {
  /**
   * @public
   * <p>The details of the proposed policy.</p>
   */
  Policy?: string;
}

/**
 * @public
 * <p>The Multi-Region Access Point access control policy.</p>
 *          <p>When you update the policy, the update is first listed as the proposed policy. After the
 *          update is finished and all Regions have been updated, the proposed policy is listed as the
 *          established policy. If both policies have the same version number, the proposed policy is
 *          the established policy.</p>
 */
export interface MultiRegionAccessPointPolicyDocument {
  /**
   * @public
   * <p>The last established policy for the Multi-Region Access Point.</p>
   */
  Established?: EstablishedMultiRegionAccessPointPolicy;

  /**
   * @public
   * <p>The proposed policy for the Multi-Region Access Point.</p>
   */
  Proposed?: ProposedMultiRegionAccessPointPolicy;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointPolicyResult {
  /**
   * @public
   * <p>The policy associated with the specified Multi-Region Access Point.</p>
   */
  Policy?: MultiRegionAccessPointPolicyDocument;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointPolicyStatusRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more
   *          information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointPolicyStatusResult {
  /**
   * @public
   * <p>Indicates whether this access point policy is public. For more information about how Amazon S3
   *          evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. </p>
   */
  Established?: PolicyStatus;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointRoutesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Multi-Region Access Point ARN.</p>
   */
  Mrap: string | undefined;
}

/**
 * @public
 * <p>A structure for a Multi-Region Access Point that indicates where Amazon S3 traffic can be routed. Routes can be
 *          either active or passive. Active routes can process Amazon S3 requests through the Multi-Region Access Point, but
 *          passive routes are not eligible to process Amazon S3 requests. </p>
 *          <p>Each route contains the Amazon S3 bucket name and the Amazon Web Services Region that the bucket is located
 *          in. The route also includes the <code>TrafficDialPercentage</code> value, which shows
 *          whether the bucket and Region are active (indicated by a value of <code>100</code>) or
 *          passive (indicated by a value of <code>0</code>).</p>
 */
export interface MultiRegionAccessPointRoute {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket for which you'll submit a routing configuration change.
   *          Either the <code>Bucket</code> or the <code>Region</code> value must be provided. If both
   *          are provided, the bucket must be in the specified Region.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region to which you'll be submitting a routing configuration change. Either
   *          the <code>Bucket</code> or the <code>Region</code> value must be provided. If both are
   *          provided, the bucket must be in the specified Region.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The traffic state for the specified bucket or Amazon Web Services Region. </p>
   *          <p>A value of <code>0</code> indicates a passive state, which means that no new traffic
   *          will be routed to the Region. </p>
   *          <p>A value of <code>100</code> indicates an active state, which means that traffic will be
   *          routed to the specified Region. </p>
   *          <p>When the routing configuration for a Region is changed from active to passive, any
   *          in-progress operations (uploads, copies, deletes, and so on) to the formerly active Region
   *          will continue to run to until a final success or failure status is reached.</p>
   *          <p>If all Regions in the routing configuration are designated as passive, you'll receive an
   *             <code>InvalidRequest</code> error.</p>
   */
  TrafficDialPercentage: number | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointRoutesResult {
  /**
   * @public
   * <p>The Multi-Region Access Point ARN.</p>
   */
  Mrap?: string;

  /**
   * @public
   * <p>The different routes that make up the route configuration. Active routes return a value
   *          of <code>100</code>, and passive routes return a value of <code>0</code>.</p>
   */
  Routes?: MultiRegionAccessPointRoute[];
}

/**
 * @public
 */
export interface GetPublicAccessBlockOutput {
  /**
   * @public
   * <p>The <code>PublicAccessBlock</code> configuration currently in effect for this
   *          Amazon Web Services account.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}

/**
 * @public
 */
export interface GetPublicAccessBlockRequest {
  /**
   * @public
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration
   *          you want to retrieve.</p>
   */
  AccountId?: string;
}

/**
 * @public
 * <p>Amazon S3 throws this exception if you make a <code>GetPublicAccessBlock</code> request
 *          against an account that doesn't have a <code>PublicAccessBlockConfiguration</code>
 *          set.</p>
 */
export class NoSuchPublicAccessBlockConfiguration extends __BaseException {
  readonly name: "NoSuchPublicAccessBlockConfiguration" = "NoSuchPublicAccessBlockConfiguration";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchPublicAccessBlockConfiguration, __BaseException>) {
    super({
      name: "NoSuchPublicAccessBlockConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchPublicAccessBlockConfiguration.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetStorageLensConfigurationRequest {
  /**
   * @public
   * <p>The ID of the Amazon S3 Storage Lens configuration.</p>
   */
  ConfigId: string | undefined;

  /**
   * @public
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;
}

/**
 * @public
 * <p>The Amazon Web Services organization for your S3 Storage Lens.</p>
 */
export interface StorageLensAwsOrg {
  /**
   * @public
   * <p>A container for the Amazon Resource Name (ARN) of the Amazon Web Services organization. This property
   *          is read-only and follows the following format: <code>
   *                arn:aws:organizations:<i>us-east-1</i>:<i>example-account-id</i>:organization/<i>o-ex2l495dck</i>
   *             </code>
   *          </p>
   */
  Arn: string | undefined;
}

/**
 * @public
 * <p>A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.</p>
 *          <p>For more information about publishing S3 Storage Lens metrics to CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_view_metrics_cloudwatch.html">Monitor
 *             S3 Storage Lens metrics in CloudWatch</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface CloudWatchMetrics {
  /**
   * @public
   * <p>A container that indicates whether CloudWatch publishing for S3 Storage Lens metrics is enabled. A
   *          value of <code>true</code> indicates that CloudWatch publishing for S3 Storage Lens metrics is
   *          enabled.</p>
   */
  IsEnabled: boolean | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface SSEKMS {
  /**
   * @public
   * <p>A container for the ARN of the SSE-KMS encryption. This property is read-only and
   *          follows the following format: <code>
   *                arn:aws:kms:<i>us-east-1</i>:<i>example-account-id</i>:key/<i>example-9a73-4afc-8d29-8f5900cef44e</i>
   *             </code>
   *          </p>
   */
  KeyId: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface SSES3 {}

/**
 * @public
 * <p>A container for the encryption of the S3 Storage Lens metrics exports.</p>
 */
export interface StorageLensDataExportEncryption {
  /**
   * @public
   * <p></p>
   */
  SSES3?: SSES3;

  /**
   * @public
   * <p></p>
   */
  SSEKMS?: SSEKMS;
}

/**
 * @public
 * @enum
 */
export const Format = {
  CSV: "CSV",
  Parquet: "Parquet",
} as const;

/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const OutputSchemaVersion = {
  V_1: "V_1",
} as const;

/**
 * @public
 */
export type OutputSchemaVersion = (typeof OutputSchemaVersion)[keyof typeof OutputSchemaVersion];

/**
 * @public
 * <p>A container for the bucket where the Amazon S3 Storage Lens metrics export files are
 *          located.</p>
 */
export interface S3BucketDestination {
  /**
   * @public
   * <p></p>
   */
  Format: Format | undefined;

  /**
   * @public
   * <p>The schema version of the export file.</p>
   */
  OutputSchemaVersion: OutputSchemaVersion | undefined;

  /**
   * @public
   * <p>The account ID of the owner of the S3 Storage Lens metrics export bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bucket. This property is read-only and follows the
   *          following format: <code>
   *                arn:aws:s3:<i>us-east-1</i>:<i>example-account-id</i>:bucket/<i>your-destination-bucket-name</i>
   *             </code>
   *          </p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The prefix of the destination bucket where the metrics export will be delivered.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>The container for the type encryption of the metrics exports in this bucket.</p>
   */
  Encryption?: StorageLensDataExportEncryption;
}

/**
 * @public
 * <p>A container to specify the properties of your S3 Storage Lens metrics export, including the
 *          destination, schema, and format.</p>
 */
export interface StorageLensDataExport {
  /**
   * @public
   * <p>A container for the bucket where the S3 Storage Lens metrics export will be located.</p>
   *          <note>
   *             <p>This bucket must be located in the same Region as the storage lens configuration.
   *          </p>
   *          </note>
   */
  S3BucketDestination?: S3BucketDestination;

  /**
   * @public
   * <p>A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.</p>
   */
  CloudWatchMetrics?: CloudWatchMetrics;
}

/**
 * @public
 * <p>A container for what Amazon S3 Storage Lens will exclude.</p>
 */
export interface _Exclude {
  /**
   * @public
   * <p>A container for the S3 Storage Lens bucket excludes.</p>
   */
  Buckets?: string[];

  /**
   * @public
   * <p>A container for the S3 Storage Lens Region excludes.</p>
   */
  Regions?: string[];
}

/**
 * @public
 * <p>A container for what Amazon S3 Storage Lens configuration includes.</p>
 */
export interface Include {
  /**
   * @public
   * <p>A container for the S3 Storage Lens bucket includes.</p>
   */
  Buckets?: string[];

  /**
   * @public
   * <p>A container for the S3 Storage Lens Region includes.</p>
   */
  Regions?: string[];
}

/**
 * @public
 * <p>A container for the Amazon S3 Storage Lens configuration.</p>
 */
export interface StorageLensConfiguration {
  /**
   * @public
   * <p>A container for the Amazon S3 Storage Lens configuration ID.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A container for all the account-level configurations of your S3 Storage Lens
   *          configuration.</p>
   */
  AccountLevel: AccountLevel | undefined;

  /**
   * @public
   * <p>A container for what is included in this configuration. This container can only be valid
   *          if there is no <code>Exclude</code> container submitted, and it's not empty. </p>
   */
  Include?: Include;

  /**
   * @public
   * <p>A container for what is excluded in this configuration. This container can only be valid
   *          if there is no <code>Include</code> container submitted, and it's not empty. </p>
   */
  Exclude?: _Exclude;

  /**
   * @public
   * <p>A container to specify the properties of your S3 Storage Lens metrics export including, the
   *          destination, schema and format.</p>
   */
  DataExport?: StorageLensDataExport;

  /**
   * @public
   * <p>A container for whether the S3 Storage Lens configuration is enabled.</p>
   */
  IsEnabled: boolean | undefined;

  /**
   * @public
   * <p>A container for the Amazon Web Services organization for this S3 Storage Lens configuration.</p>
   */
  AwsOrg?: StorageLensAwsOrg;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the S3 Storage Lens configuration. This property is read-only
   *          and follows the following format: <code>
   *                arn:aws:s3:<i>us-east-1</i>:<i>example-account-id</i>:storage-lens/<i>your-dashboard-name</i>
   *             </code>
   *          </p>
   */
  StorageLensArn?: string;
}

/**
 * @public
 */
export interface GetStorageLensConfigurationResult {
  /**
   * @public
   * <p>The S3 Storage Lens configuration requested.</p>
   */
  StorageLensConfiguration?: StorageLensConfiguration;
}

/**
 * @public
 */
export interface GetStorageLensConfigurationTaggingRequest {
  /**
   * @public
   * <p>The ID of the Amazon S3 Storage Lens configuration.</p>
   */
  ConfigId: string | undefined;

  /**
   * @public
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;
}

/**
 * @public
 * <p></p>
 */
export interface StorageLensTag {
  /**
   * @public
   * <p></p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p></p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface GetStorageLensConfigurationTaggingResult {
  /**
   * @public
   * <p>The tags of S3 Storage Lens configuration requested.</p>
   */
  Tags?: StorageLensTag[];
}

/**
 * @public
 */
export interface ListAccessPointsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the account that owns the specified access points.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the bucket whose associated access points you want to list.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>A continuation token. If a previous call to <code>ListAccessPoints</code> returned a
   *          continuation token in the <code>NextToken</code> field, then providing that value here
   *          causes Amazon S3 to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of access points that you want to include in the list. If the specified
   *          bucket has more than this number of access points, then the response will include a continuation
   *          token in the <code>NextToken</code> field that you can use to retrieve the next page of
   *          access points.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAccessPointsResult {
  /**
   * @public
   * <p>Contains identification and configuration information for one or more access points associated
   *          with the specified bucket.</p>
   */
  AccessPointList?: AccessPoint[];

  /**
   * @public
   * <p>If the specified bucket has more access points than can be returned in one call to this API,
   *          this field contains a continuation token that you can provide in subsequent calls to this
   *          API to retrieve additional access points.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAccessPointsForObjectLambdaRequest {
  /**
   * @public
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>If the list has more access points than can be returned in one call to this API, this field
   *          contains a continuation token that you can provide in subsequent calls to this API to
   *          retrieve additional access points.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of access points that you want to include in the list. The response may
   *          contain fewer access points but will never contain more. If there are more than this number of
   *          access points, then the response will include a continuation token in the <code>NextToken</code>
   *          field that you can use to retrieve the next page of access points.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>An access point with an attached Lambda function used to access transformed data from an Amazon S3
 *          bucket.</p>
 */
export interface ObjectLambdaAccessPoint {
  /**
   * @public
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies the ARN for the Object Lambda Access Point.</p>
   */
  ObjectLambdaAccessPointArn?: string;

  /**
   * @public
   * <p>The alias of the Object Lambda Access Point.</p>
   */
  Alias?: ObjectLambdaAccessPointAlias;
}

/**
 * @public
 */
export interface ListAccessPointsForObjectLambdaResult {
  /**
   * @public
   * <p>Returns list of Object Lambda Access Points.</p>
   */
  ObjectLambdaAccessPointList?: ObjectLambdaAccessPoint[];

  /**
   * @public
   * <p>If the list has more access points than can be returned in one call to this API, this field
   *          contains a continuation token that you can provide in subsequent calls to this API to
   *          retrieve additional access points.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p></p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p></p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The <code>List Jobs</code> request returns jobs that match the statuses listed in this
   *          element.</p>
   */
  JobStatuses?: JobStatus[];

  /**
   * @public
   * <p>A pagination token to request the next page of results. Use the token that Amazon S3 returned
   *          in the <code>NextToken</code> element of the <code>ListJobsResult</code> from the previous
   *             <code>List Jobs</code> request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of jobs that Amazon S3 will include in the <code>List Jobs</code>
   *          response. If there are more jobs than this number, the response will include a pagination
   *          token in the <code>NextToken</code> field to enable you to retrieve the next page of
   *          results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const OperationName = {
  LambdaInvoke: "LambdaInvoke",
  S3DeleteObjectTagging: "S3DeleteObjectTagging",
  S3InitiateRestoreObject: "S3InitiateRestoreObject",
  S3PutObjectAcl: "S3PutObjectAcl",
  S3PutObjectCopy: "S3PutObjectCopy",
  S3PutObjectLegalHold: "S3PutObjectLegalHold",
  S3PutObjectRetention: "S3PutObjectRetention",
  S3PutObjectTagging: "S3PutObjectTagging",
  S3ReplicateObject: "S3ReplicateObject",
} as const;

/**
 * @public
 */
export type OperationName = (typeof OperationName)[keyof typeof OperationName];

/**
 * @public
 * <p>Contains the configuration and status information for a single job retrieved as part of
 *          a job list.</p>
 */
export interface JobListDescriptor {
  /**
   * @public
   * <p>The ID for the specified job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The user-specified description that was included in the specified job's <code>Create
   *             Job</code> request.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The operation that the specified job is configured to run on every object listed in the
   *          manifest.</p>
   */
  Operation?: OperationName;

  /**
   * @public
   * <p>The current priority for the specified job.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The specified job's current status.</p>
   */
  Status?: JobStatus;

  /**
   * @public
   * <p>A timestamp indicating when the specified job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A timestamp indicating when the specified job terminated. A job's termination date is
   *          the date and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date;

  /**
   * @public
   * <p>Describes the total number of tasks that the specified job has run, the number of tasks
   *          that succeeded, and the number of tasks that failed.</p>
   */
  ProgressSummary?: JobProgressSummary;
}

/**
 * @public
 */
export interface ListJobsResult {
  /**
   * @public
   * <p>If the <code>List Jobs</code> request produced more than the maximum number of results,
   *          you can pass this value into a subsequent <code>List Jobs</code> request in order to
   *          retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The list of current jobs and jobs that have ended within the last 30 days.</p>
   */
  Jobs?: JobListDescriptor[];
}

/**
 * @public
 */
export interface ListMultiRegionAccessPointsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Not currently used. Do not use this parameter.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Not currently used. Do not use this parameter.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListMultiRegionAccessPointsResult {
  /**
   * @public
   * <p>The list of Multi-Region Access Points associated with the user.</p>
   */
  AccessPoints?: MultiRegionAccessPointReport[];

  /**
   * @public
   * <p>If the specified bucket has more Multi-Region Access Points than can be returned in one call to this
   *          action, this field contains a continuation token. You can use this token tin subsequent
   *          calls to this action to retrieve additional Multi-Region Access Points.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRegionalBucketsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p></p>
   */
  NextToken?: string;

  /**
   * @public
   * <p></p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The ID of the Outposts resource.</p>
   *          <note>
   *             <p>This ID is required by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  OutpostId?: string;
}

/**
 * @public
 * <p>The container for the regional bucket.</p>
 */
export interface RegionalBucket {
  /**
   * @public
   * <p></p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the regional bucket.</p>
   */
  BucketArn?: string;

  /**
   * @public
   * <p></p>
   */
  PublicAccessBlockEnabled: boolean | undefined;

  /**
   * @public
   * <p>The creation date of the regional bucket</p>
   */
  CreationDate: Date | undefined;

  /**
   * @public
   * <p>The Outposts ID of the regional bucket.</p>
   */
  OutpostId?: string;
}

/**
 * @public
 */
export interface ListRegionalBucketsResult {
  /**
   * @public
   * <p></p>
   */
  RegionalBucketList?: RegionalBucket[];

  /**
   * @public
   * <p>
   *             <code>NextToken</code> is sent when <code>isTruncated</code> is true, which means there
   *          are more buckets that can be listed. The next list requests to Amazon S3 can be continued with
   *          this <code>NextToken</code>. <code>NextToken</code> is obfuscated and is not a real
   *          key.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStorageLensConfigurationsRequest {
  /**
   * @public
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>A pagination token to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Part of <code>ListStorageLensConfigurationResult</code>. Each entry includes the
 *          description of the S3 Storage Lens configuration, its home Region, whether it is enabled, its
 *          Amazon Resource Name (ARN), and config ID.</p>
 */
export interface ListStorageLensConfigurationEntry {
  /**
   * @public
   * <p>A container for the S3 Storage Lens configuration ID.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The ARN of the S3 Storage Lens configuration. This property is read-only.</p>
   */
  StorageLensArn: string | undefined;

  /**
   * @public
   * <p>A container for the S3 Storage Lens home Region. Your metrics data is stored and retained in
   *          your designated S3 Storage Lens home Region.</p>
   */
  HomeRegion: string | undefined;

  /**
   * @public
   * <p>A container for whether the S3 Storage Lens configuration is enabled. This property is
   *          required.</p>
   */
  IsEnabled?: boolean;
}

/**
 * @public
 */
export interface ListStorageLensConfigurationsResult {
  /**
   * @public
   * <p>If the request produced more than the maximum number of S3 Storage Lens configuration results,
   *          you can pass this value into a subsequent request to retrieve the next page of
   *          results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of S3 Storage Lens configurations.</p>
   */
  StorageLensConfigurationList?: ListStorageLensConfigurationEntry[];
}

/**
 * @public
 */
export interface PutAccessPointConfigurationForObjectLambdaRequest {
  /**
   * @public
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Object Lambda Access Point configuration document.</p>
   */
  Configuration: ObjectLambdaConfiguration | undefined;
}

/**
 * @public
 */
export interface PutAccessPointPolicyRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for owner of the bucket associated with the specified access point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the access point that you want to associate with the specified policy.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The policy that you want to apply to the specified access point. For more information about access point
   *          policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing data access with Amazon S3
   *             access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutAccessPointPolicyForObjectLambdaRequest {
  /**
   * @public
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Object Lambda Access Point resource policy document.</p>
   */
  Policy: string | undefined;
}

/**
 * @public
 * <p>The container for the Outposts bucket lifecycle configuration.</p>
 */
export interface LifecycleConfiguration {
  /**
   * @public
   * <p>A lifecycle rule for individual objects in an Outposts bucket. </p>
   */
  Rules?: LifecycleRule[];
}

/**
 * @public
 */
export interface PutBucketLifecycleConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the bucket for which to set the configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
   */
  LifecycleConfiguration?: LifecycleConfiguration;
}

/**
 * @public
 */
export interface PutBucketPolicyRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Set this parameter to true to confirm that you want to remove your permissions to change
   *          this bucket policy in the future.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  ConfirmRemoveSelfBucketAccess?: boolean;

  /**
   * @public
   * <p>The bucket policy as a JSON document.</p>
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutBucketReplicationRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Specifies the S3 on Outposts bucket to set the configuration for.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p></p>
   */
  ReplicationConfiguration: ReplicationConfiguration | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface Tagging {
  /**
   * @public
   * <p>A collection for a set of tags.</p>
   */
  TagSet: S3Tag[] | undefined;
}

/**
 * @public
 */
export interface PutBucketTaggingRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p></p>
   */
  Tagging: Tagging | undefined;
}

/**
 * @public
 * @enum
 */
export const MFADelete = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type MFADelete = (typeof MFADelete)[keyof typeof MFADelete];

/**
 * @public
 * <p>Describes the versioning state of an Amazon S3 on Outposts bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html">PutBucketVersioning</a>.</p>
 */
export interface VersioningConfiguration {
  /**
   * @public
   * <p>Specifies whether MFA delete is enabled or disabled in the bucket versioning
   *          configuration for the S3 on Outposts bucket.</p>
   */
  MFADelete?: MFADelete;

  /**
   * @public
   * <p>Sets the versioning state of the S3 on Outposts bucket.</p>
   */
  Status?: BucketVersioningStatus;
}

/**
 * @public
 */
export interface PutBucketVersioningRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the S3 on Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The S3 on Outposts bucket to set the versioning state for.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device.</p>
   */
  MFA?: string;

  /**
   * @public
   * <p>The root-level tag for the <code>VersioningConfiguration</code> parameters.</p>
   */
  VersioningConfiguration: VersioningConfiguration | undefined;
}

/**
 * @public
 */
export interface PutJobTaggingRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ID for the S3 Batch Operations job whose tags you want to replace.</p>
   */
  JobId: string | undefined;

  /**
   * @public
   * <p>The set of tags to associate with the S3 Batch Operations job.</p>
   */
  Tags: S3Tag[] | undefined;
}

/**
 * @public
 */
export interface PutJobTaggingResult {}

/**
 * @public
 * <p>Amazon S3 throws this exception if you have too many tags in your tag set.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface PutMultiRegionAccessPointPolicyRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>An idempotency token used to identify the request and guarantee that requests are
   *          unique.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>A container element containing the details of the policy for the Multi-Region Access Point.</p>
   */
  Details: PutMultiRegionAccessPointPolicyInput | undefined;
}

/**
 * @public
 */
export interface PutMultiRegionAccessPointPolicyResult {
  /**
   * @public
   * <p>The request token associated with the request. You can use this token with <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> to determine the status of asynchronous
   *          requests.</p>
   */
  RequestTokenARN?: string;
}

/**
 * @public
 */
export interface PutPublicAccessBlockRequest {
  /**
   * @public
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to the specified
   *          Amazon Web Services account.</p>
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;

  /**
   * @public
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration
   *          you want to set.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface PutStorageLensConfigurationRequest {
  /**
   * @public
   * <p>The ID of the S3 Storage Lens configuration.</p>
   */
  ConfigId: string | undefined;

  /**
   * @public
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The S3 Storage Lens configuration.</p>
   */
  StorageLensConfiguration: StorageLensConfiguration | undefined;

  /**
   * @public
   * <p>The tag set of the S3 Storage Lens configuration.</p>
   *          <note>
   *             <p>You can set up to a maximum of 50 tags.</p>
   *          </note>
   */
  Tags?: StorageLensTag[];
}

/**
 * @public
 */
export interface PutStorageLensConfigurationTaggingRequest {
  /**
   * @public
   * <p>The ID of the S3 Storage Lens configuration.</p>
   */
  ConfigId: string | undefined;

  /**
   * @public
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The tag set of the S3 Storage Lens configuration.</p>
   *          <note>
   *             <p>You can set up to a maximum of 50 tags.</p>
   *          </note>
   */
  Tags: StorageLensTag[] | undefined;
}

/**
 * @public
 */
export interface PutStorageLensConfigurationTaggingResult {}

/**
 * @public
 */
export interface SubmitMultiRegionAccessPointRoutesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Multi-Region Access Point ARN.</p>
   */
  Mrap: string | undefined;

  /**
   * @public
   * <p>The different routes that make up the new route configuration. Active routes return a
   *          value of <code>100</code>, and passive routes return a value of <code>0</code>.</p>
   */
  RouteUpdates: MultiRegionAccessPointRoute[] | undefined;
}

/**
 * @public
 */
export interface SubmitMultiRegionAccessPointRoutesResult {}

/**
 * @public
 */
export interface UpdateJobPriorityRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ID for the job whose priority you want to update.</p>
   */
  JobId: string | undefined;

  /**
   * @public
   * <p>The priority you want to assign to this job.</p>
   */
  Priority: number | undefined;
}

/**
 * @public
 */
export interface UpdateJobPriorityResult {
  /**
   * @public
   * <p>The ID for the job whose priority Amazon S3 updated.</p>
   */
  JobId: string | undefined;

  /**
   * @public
   * <p>The new priority assigned to the specified job.</p>
   */
  Priority: number | undefined;
}

/**
 * @public
 * <p></p>
 */
export class JobStatusException extends __BaseException {
  readonly name: "JobStatusException" = "JobStatusException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<JobStatusException, __BaseException>) {
    super({
      name: "JobStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, JobStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const RequestedJobStatus = {
  Cancelled: "Cancelled",
  Ready: "Ready",
} as const;

/**
 * @public
 */
export type RequestedJobStatus = (typeof RequestedJobStatus)[keyof typeof RequestedJobStatus];

/**
 * @public
 */
export interface UpdateJobStatusRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ID of the job whose status you want to update.</p>
   */
  JobId: string | undefined;

  /**
   * @public
   * <p>The status that you want to move the specified job to.</p>
   */
  RequestedJobStatus: RequestedJobStatus | undefined;

  /**
   * @public
   * <p>A description of the reason why you want to change the specified job's status. This
   *          field can be any string up to the maximum length.</p>
   */
  StatusUpdateReason?: string;
}

/**
 * @public
 */
export interface UpdateJobStatusResult {
  /**
   * @public
   * <p>The ID for the job whose status was updated.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The current status for the specified job.</p>
   */
  Status?: JobStatus;

  /**
   * @public
   * <p>The reason that the specified job's status was updated.</p>
   */
  StatusUpdateReason?: string;
}
