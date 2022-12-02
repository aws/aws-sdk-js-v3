// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { S3ControlServiceException as __BaseException } from "./S3ControlServiceException";

/**
 * <p>The container for abort incomplete multipart upload</p>
 */
export interface AbortIncompleteMultipartUpload {
  /**
   * <p>Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload to
   *          the Outposts bucket.</p>
   */
  DaysAfterInitiation?: number;
}

export enum NetworkOrigin {
  Internet = "Internet",
  VPC = "VPC",
}

/**
 * <p>The virtual private cloud (VPC) configuration for an access point.</p>
 */
export interface VpcConfiguration {
  /**
   * <p>If this field is specified, this access point will only allow connections from the specified VPC
   *          ID.</p>
   */
  VpcId: string | undefined;
}

/**
 * <p>An access point used to access a bucket.</p>
 */
export interface AccessPoint {
  /**
   * <p>The name of this access point.</p>
   */
  Name: string | undefined;

  /**
   * <p>Indicates whether this access point allows access from the public internet. If
   *             <code>VpcConfiguration</code> is specified for this access point, then
   *             <code>NetworkOrigin</code> is <code>VPC</code>, and the access point doesn't allow access from
   *          the public internet. Otherwise, <code>NetworkOrigin</code> is <code>Internet</code>, and
   *          the access point allows access from the public internet, subject to the access point and bucket access
   *          policies.</p>
   */
  NetworkOrigin: NetworkOrigin | string | undefined;

  /**
   * <p>The virtual private cloud (VPC) configuration for this access point, if one exists.</p>
   *          <note>
   *             <p>This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other
   *                Amazon Web Services.</p>
   *          </note>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * <p>The name of the bucket associated with this access point.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ARN for the access point.</p>
   */
  AccessPointArn?: string;

  /**
   * <p>The name or alias of the access point.</p>
   */
  Alias?: string;

  /**
   * <p>The Amazon Web Services account ID associated with the S3 bucket associated with this access point.</p>
   */
  BucketAccountId?: string;
}

/**
 * <p>The container element for Amazon S3 Storage Lens activity metrics. Activity metrics show details about
 *          how your storage is requested, such as requests (for example, All requests, Get requests,
 *          Put requests), bytes uploaded or downloaded, and errors.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface ActivityMetrics {
  /**
   * <p>A container that indicates whether activity metrics are enabled.</p>
   */
  IsEnabled?: boolean;
}

/**
 * <p>The container element for Amazon S3 Storage Lens advanced cost-optimization metrics. Advanced
 *          cost-optimization metrics provide insights that you can use to manage and optimize your
 *          storage costs, for example, lifecycle rule counts for transitions, expirations, and
 *          incomplete multipart uploads.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface AdvancedCostOptimizationMetrics {
  /**
   * <p>A container that indicates whether advanced cost-optimization metrics are
   *          enabled.</p>
   */
  IsEnabled?: boolean;
}

/**
 * <p>The container element for Amazon S3 Storage Lens advanced data-protection metrics. Advanced
 *          data-protection metrics provide insights that you can use to perform audits and protect
 *          your data, for example replication rule counts within and across Regions.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface AdvancedDataProtectionMetrics {
  /**
   * <p>A container that indicates whether advanced data-protection metrics are enabled.</p>
   */
  IsEnabled?: boolean;
}

/**
 * <p>The container element for Amazon S3 Storage Lens detailed status code metrics. Detailed status
 *          code metrics generate metrics for HTTP status codes, such as <code>200 OK</code>, <code>403
 *             Forbidden</code>, <code>503 Service Unavailable</code> and others. </p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface DetailedStatusCodesMetrics {
  /**
   * <p>A container that indicates whether detailed status code metrics are enabled.</p>
   */
  IsEnabled?: boolean;
}

/**
 * <p></p>
 */
export interface SelectionCriteria {
  /**
   * <p>A container for the delimiter of the selection criteria being used.</p>
   */
  Delimiter?: string;

  /**
   * <p>The max depth of the selection criteria</p>
   */
  MaxDepth?: number;

  /**
   * <p>The minimum number of storage bytes percentage whose metrics will be selected.</p>
   *          <note>
   *             <p>You must choose a value greater than or equal to <code>1.0</code>.</p>
   *          </note>
   */
  MinStorageBytesPercentage?: number;
}

/**
 * <p>A container for the prefix-level storage metrics for S3 Storage Lens.</p>
 */
export interface PrefixLevelStorageMetrics {
  /**
   * <p>A container for whether prefix-level storage metrics are enabled.</p>
   */
  IsEnabled?: boolean;

  /**
   * <p></p>
   */
  SelectionCriteria?: SelectionCriteria;
}

/**
 * <p>A container for the prefix-level configuration.</p>
 */
export interface PrefixLevel {
  /**
   * <p>A container for the prefix-level storage metrics for S3 Storage Lens.</p>
   */
  StorageMetrics: PrefixLevelStorageMetrics | undefined;
}

/**
 * <p>A container for the bucket-level configuration for Amazon S3 Storage Lens.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface BucketLevel {
  /**
   * <p>A container for the bucket-level activity metrics for S3 Storage Lens.</p>
   */
  ActivityMetrics?: ActivityMetrics;

  /**
   * <p>A container for the prefix-level metrics for S3 Storage Lens. </p>
   */
  PrefixLevel?: PrefixLevel;

  /**
   * <p>A container for bucket-level advanced cost-optimization metrics for S3 Storage Lens.</p>
   */
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;

  /**
   * <p>A container for bucket-level advanced data-protection metrics for S3 Storage Lens.</p>
   */
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;

  /**
   * <p>A container for bucket-level detailed status code metrics for S3 Storage Lens.</p>
   */
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
}

/**
 * <p>A container for the account-level Amazon S3 Storage Lens configuration.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface AccountLevel {
  /**
   * <p>A container for S3 Storage Lens activity metrics.</p>
   */
  ActivityMetrics?: ActivityMetrics;

  /**
   * <p>A container for the S3 Storage Lens bucket-level configuration.</p>
   */
  BucketLevel: BucketLevel | undefined;

  /**
   * <p>A container for S3 Storage Lens advanced cost-optimization metrics.</p>
   */
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;

  /**
   * <p>A container for S3 Storage Lens advanced data-protection metrics.</p>
   */
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;

  /**
   * <p>A container for detailed status code metrics. </p>
   */
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
}

/**
 * <p>Error details for the failed asynchronous operation.</p>
 */
export interface AsyncErrorDetails {
  /**
   * <p>A string that uniquely identifies the error condition.</p>
   */
  Code?: string;

  /**
   * <p>A generic description of the error condition in English.</p>
   */
  Message?: string;

  /**
   * <p>The identifier of the resource associated with the error.</p>
   */
  Resource?: string;

  /**
   * <p>The ID of the request associated with the error.</p>
   */
  RequestId?: string;
}

export enum AsyncOperationName {
  CreateMultiRegionAccessPoint = "CreateMultiRegionAccessPoint",
  DeleteMultiRegionAccessPoint = "DeleteMultiRegionAccessPoint",
  PutMultiRegionAccessPointPolicy = "PutMultiRegionAccessPointPolicy",
}

/**
 * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
 *          account. You can enable the configuration options in any combination. For more information
 *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>This data type is not supported for Amazon S3 on Outposts.</p>
 */
export interface PublicAccessBlockConfiguration {
  /**
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
   * <p>Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting
   *          this element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on buckets in this
   *          account and any objects that they contain. </p>
   *          <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't
   *          prevent new public ACLs from being set.</p>
   *          <p>This property is not supported for Amazon S3 on Outposts.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should block public bucket policies for buckets in this account.
   *          Setting this element to <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket policy
   *          if the specified bucket policy allows public access. </p>
   *          <p>Enabling this setting doesn't affect existing bucket policies.</p>
   *          <p>This property is not supported for Amazon S3 on Outposts.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
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
 * <p>A Region that supports a Multi-Region Access Point as well as the associated bucket for the Region.</p>
 */
export interface Region {
  /**
   * <p>The name of the associated bucket for the Region.</p>
   */
  Bucket: string | undefined;
}

/**
 * <p>A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> request. </p>
 */
export interface CreateMultiRegionAccessPointInput {
  /**
   * <p>The name of the Multi-Region Access Point associated with this request.</p>
   */
  Name: string | undefined;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          account. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>This data type is not supported for Amazon S3 on Outposts.</p>
   */
  PublicAccessBlock?: PublicAccessBlockConfiguration;

  /**
   * <p>The buckets in different Regions that are associated with the Multi-Region Access Point.</p>
   */
  Regions: Region[] | undefined;
}

/**
 * <p>A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> request.</p>
 */
export interface DeleteMultiRegionAccessPointInput {
  /**
   * <p>The name of the Multi-Region Access Point associated with this request.</p>
   */
  Name: string | undefined;
}

/**
 * <p>A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html">PutMultiRegionAccessPoint</a> request.</p>
 */
export interface PutMultiRegionAccessPointPolicyInput {
  /**
   * <p>The name of the Multi-Region Access Point associated with the request.</p>
   */
  Name: string | undefined;

  /**
   * <p>The policy details for the <code>PutMultiRegionAccessPoint</code> request.</p>
   */
  Policy: string | undefined;
}

/**
 * <p>A container for the request parameters associated with an asynchronous request.</p>
 */
export interface AsyncRequestParameters {
  /**
   * <p>A container of the parameters for a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> request.</p>
   */
  CreateMultiRegionAccessPointRequest?: CreateMultiRegionAccessPointInput;

  /**
   * <p>A container of the parameters for a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> request.</p>
   */
  DeleteMultiRegionAccessPointRequest?: DeleteMultiRegionAccessPointInput;

  /**
   * <p>A container of the parameters for a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html">PutMultiRegionAccessPoint</a> request.</p>
   */
  PutMultiRegionAccessPointPolicyRequest?: PutMultiRegionAccessPointPolicyInput;
}

/**
 * <p>Status information for a single Multi-Region Access Point Region.</p>
 */
export interface MultiRegionAccessPointRegionalResponse {
  /**
   * <p>The name of the Region in the Multi-Region Access Point.</p>
   */
  Name?: string;

  /**
   * <p>The current status of the Multi-Region Access Point in this Region.</p>
   */
  RequestStatus?: string;
}

/**
 * <p>The Multi-Region Access Point details that are returned when querying about an asynchronous request.</p>
 */
export interface MultiRegionAccessPointsAsyncResponse {
  /**
   * <p>A collection of status information for the different Regions that a Multi-Region Access Point
   *          supports.</p>
   */
  Regions?: MultiRegionAccessPointRegionalResponse[];
}

/**
 * <p>A container for the response details that are returned when querying about an
 *          asynchronous request.</p>
 */
export interface AsyncResponseDetails {
  /**
   * <p>The details for the Multi-Region Access Point.</p>
   */
  MultiRegionAccessPointDetails?: MultiRegionAccessPointsAsyncResponse;

  /**
   * <p>Error details for an asynchronous request.</p>
   */
  ErrorDetails?: AsyncErrorDetails;
}

/**
 * <p>A container for the information about an asynchronous operation.</p>
 */
export interface AsyncOperation {
  /**
   * <p>The time that the request was sent to the service.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The specific operation for the asynchronous request.</p>
   */
  Operation?: AsyncOperationName | string;

  /**
   * <p>The request token associated with the request.</p>
   */
  RequestTokenARN?: string;

  /**
   * <p>The parameters associated with the request.</p>
   */
  RequestParameters?: AsyncRequestParameters;

  /**
   * <p>The current status of the request.</p>
   */
  RequestStatus?: string;

  /**
   * <p>The details of the response.</p>
   */
  ResponseDetails?: AsyncResponseDetails;
}

/**
 * <p>Lambda function used to transform objects through an Object Lambda Access Point.</p>
 */
export interface AwsLambdaTransformation {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function.</p>
   */
  FunctionArn: string | undefined;

  /**
   * <p>Additional JSON that provides supplemental data to the Lambda function used to transform
   *          objects.</p>
   */
  FunctionPayload?: string;
}

export interface CreateAccessPointRequest {
  /**
   * <p>The Amazon Web Services account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name you want to assign to this access point.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the bucket that you want to associate this access point with.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;

  /**
   * <p>If you include this field, Amazon S3 restricts access to this access point to requests from the
   *          specified virtual private cloud (VPC).</p>
   *          <note>
   *             <p>This is required for creating an access point for Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * <p> The <code>PublicAccessBlock</code> configuration that you want to apply to the access point.
   *       </p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;

  /**
   * <p>The Amazon Web Services account ID associated with the S3 bucket associated with this access point.</p>
   */
  BucketAccountId?: string;
}

export interface CreateAccessPointResult {
  /**
   * <p>The ARN of the access point.</p>
   *          <note>
   *             <p>This is only supported by Amazon S3 on Outposts.</p>
   *          </note>
   */
  AccessPointArn?: string;

  /**
   * <p>The name or alias of the access point.</p>
   */
  Alias?: string;
}

export enum ObjectLambdaAllowedFeature {
  GetObjectPartNumber = "GetObject-PartNumber",
  GetObjectRange = "GetObject-Range",
  HeadObjectPartNumber = "HeadObject-PartNumber",
  HeadObjectRange = "HeadObject-Range",
}

export enum ObjectLambdaTransformationConfigurationAction {
  GetObject = "GetObject",
  HeadObject = "HeadObject",
  ListObjects = "ListObjects",
  ListObjectsV2 = "ListObjectsV2",
}

/**
 * <p>A container for AwsLambdaTransformation.</p>
 */
export type ObjectLambdaContentTransformation =
  | ObjectLambdaContentTransformation.AwsLambdaMember
  | ObjectLambdaContentTransformation.$UnknownMember;

export namespace ObjectLambdaContentTransformation {
  /**
   * <p>A container for an Lambda function.</p>
   */
  export interface AwsLambdaMember {
    AwsLambda: AwsLambdaTransformation;
    $unknown?: never;
  }

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
 * <p>A configuration used when creating an Object Lambda Access Point transformation.</p>
 */
export interface ObjectLambdaTransformationConfiguration {
  /**
   * <p>A container for the action of an Object Lambda Access Point configuration. Valid inputs are
   *             <code>GetObject</code>, <code>ListObjects</code>, <code>HeadObject</code>, and
   *             <code>ListObjectsV2</code>.</p>
   */
  Actions: (ObjectLambdaTransformationConfigurationAction | string)[] | undefined;

  /**
   * <p>A container for the content transformation of an Object Lambda Access Point configuration.</p>
   */
  ContentTransformation: ObjectLambdaContentTransformation | undefined;
}

/**
 * <p>A configuration used when creating an Object Lambda Access Point.</p>
 */
export interface ObjectLambdaConfiguration {
  /**
   * <p>Standard access point associated with the Object Lambda Access Point.</p>
   */
  SupportingAccessPoint: string | undefined;

  /**
   * <p>A container for whether the CloudWatch metrics configuration is enabled.</p>
   */
  CloudWatchMetricsEnabled?: boolean;

  /**
   * <p>A container for allowed features. Valid inputs are <code>GetObject-Range</code>,
   *             <code>GetObject-PartNumber</code>, <code>HeadObject-Range</code>, and
   *             <code>HeadObject-PartNumber</code>.</p>
   */
  AllowedFeatures?: (ObjectLambdaAllowedFeature | string)[];

  /**
   * <p>A container for transformation configurations for an Object Lambda Access Point.</p>
   */
  TransformationConfigurations: ObjectLambdaTransformationConfiguration[] | undefined;
}

export interface CreateAccessPointForObjectLambdaRequest {
  /**
   * <p>The Amazon Web Services account ID for owner of the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name you want to assign to this Object Lambda Access Point.</p>
   */
  Name: string | undefined;

  /**
   * <p>Object Lambda Access Point configuration as a JSON document.</p>
   */
  Configuration: ObjectLambdaConfiguration | undefined;
}

export interface CreateAccessPointForObjectLambdaResult {
  /**
   * <p>Specifies the ARN for the Object Lambda Access Point.</p>
   */
  ObjectLambdaAccessPointArn?: string;
}

/**
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

export enum BucketCannedACL {
  authenticated_read = "authenticated-read",
  private = "private",
  public_read = "public-read",
  public_read_write = "public-read-write",
}

export enum BucketLocationConstraint {
  EU = "EU",
  ap_northeast_1 = "ap-northeast-1",
  ap_south_1 = "ap-south-1",
  ap_southeast_1 = "ap-southeast-1",
  ap_southeast_2 = "ap-southeast-2",
  cn_north_1 = "cn-north-1",
  eu_central_1 = "eu-central-1",
  eu_west_1 = "eu-west-1",
  sa_east_1 = "sa-east-1",
  us_west_1 = "us-west-1",
  us_west_2 = "us-west-2",
}

/**
 * <p>The container for the bucket configuration.</p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 */
export interface CreateBucketConfiguration {
  /**
   * <p>Specifies the Region where the bucket will be created. If you are creating a bucket on
   *          the US East (N. Virginia) Region (us-east-1), you do not need to specify the location. </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  LocationConstraint?: BucketLocationConstraint | string;
}

export interface CreateBucketRequest {
  /**
   * <p>The canned ACL to apply to the bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  ACL?: BucketCannedACL | string;

  /**
   * <p>The name of the bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The configuration information for the bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  CreateBucketConfiguration?: CreateBucketConfiguration;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to list the objects in the bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the bucket ACL.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to create, overwrite, and delete any object in the bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  GrantWrite?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  GrantWriteACP?: string;

  /**
   * <p>Specifies whether you want S3 Object Lock to be enabled for the new bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  ObjectLockEnabledForBucket?: boolean;

  /**
   * <p>The ID of the Outposts where the bucket is being created.</p>
   *          <note>
   *             <p>This ID is required by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  OutpostId?: string;
}

export interface CreateBucketResult {
  /**
   * <p>The location of the bucket.</p>
   */
  Location?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  BucketArn?: string;
}

/**
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
 * <p>Contains the information required to locate a manifest object.</p>
 */
export interface JobManifestLocation {
  /**
   * <p>The Amazon Resource Name (ARN) for a manifest object.</p>
   *          <important>
   *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
   *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML related object key constraints</a>.</p>
   *          </important>
   */
  ObjectArn: string | undefined;

  /**
   * <p>The optional version ID to identify a specific version of the manifest object.</p>
   */
  ObjectVersionId?: string;

  /**
   * <p>The ETag for the specified manifest object.</p>
   */
  ETag: string | undefined;
}

export enum JobManifestFieldName {
  Bucket = "Bucket",
  Ignore = "Ignore",
  Key = "Key",
  VersionId = "VersionId",
}

export enum JobManifestFormat {
  S3BatchOperations_CSV_20180820 = "S3BatchOperations_CSV_20180820",
  S3InventoryReport_CSV_20161130 = "S3InventoryReport_CSV_20161130",
}

/**
 * <p>Describes the format of a manifest. If the manifest is in CSV format, also describes the
 *          columns contained within the manifest.</p>
 */
export interface JobManifestSpec {
  /**
   * <p>Indicates which of the available formats the specified manifest uses.</p>
   */
  Format: JobManifestFormat | string | undefined;

  /**
   * <p>If the specified manifest object is in the <code>S3BatchOperations_CSV_20180820</code>
   *          format, this element describes which columns contain the required data.</p>
   */
  Fields?: (JobManifestFieldName | string)[];
}

/**
 * <p>Contains the configuration information for a job's manifest.</p>
 */
export interface JobManifest {
  /**
   * <p>Describes the format of the specified job's manifest. If the manifest is in CSV format,
   *          also describes the columns contained within the manifest.</p>
   */
  Spec: JobManifestSpec | undefined;

  /**
   * <p>Contains the information required to locate the specified job's manifest.</p>
   */
  Location: JobManifestLocation | undefined;
}

export enum ReplicationStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  NONE = "NONE",
  REPLICA = "REPLICA",
}

/**
 * <p>The filter used to describe a set of objects for the job's manifest.</p>
 */
export interface JobManifestGeneratorFilter {
  /**
   * <p>Include objects in the generated manifest only if they are eligible for replication
   *          according to the Replication configuration on the source bucket.</p>
   */
  EligibleForReplication?: boolean;

  /**
   * <p>If provided, the generated manifest should include only source bucket objects that were
   *          created after this time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>If provided, the generated manifest should include only source bucket objects that were
   *          created before this time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>If provided, the generated manifest should include only source bucket objects that have
   *          one of the specified Replication statuses.</p>
   */
  ObjectReplicationStatuses?: (ReplicationStatus | string)[];
}

/**
 * <p>Configuration for the use of SSE-KMS to encrypt generated manifest objects.</p>
 */
export interface SSEKMSEncryption {
  /**
   * <p>Specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption
   *          customer managed key to use for encrypting generated manifest objects.</p>
   */
  KeyId: string | undefined;
}

/**
 * <p>Configuration for the use of SSE-S3 to encrypt generated manifest objects.</p>
 */
export interface SSES3Encryption {}

/**
 * <p>The encryption configuration to use when storing the generated manifest.</p>
 */
export interface GeneratedManifestEncryption {
  /**
   * <p>Specifies the use of SSE-S3 to encrypt generated manifest objects.</p>
   */
  SSES3?: SSES3Encryption;

  /**
   * <p>Configuration details on how SSE-KMS is used to encrypt generated manifest
   *          objects.</p>
   */
  SSEKMS?: SSEKMSEncryption;
}

export enum GeneratedManifestFormat {
  S3InventoryReport_CSV_20211130 = "S3InventoryReport_CSV_20211130",
}

/**
 * <p>Location details for where the generated manifest should be written.</p>
 */
export interface S3ManifestOutputLocation {
  /**
   * <p>The Account ID that owns the bucket the generated manifest is written to.</p>
   */
  ExpectedManifestBucketOwner?: string;

  /**
   * <p>The bucket ARN the generated manifest should be written to.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Prefix identifying one or more objects to which the manifest applies.</p>
   */
  ManifestPrefix?: string;

  /**
   * <p>Specifies what encryption should be used when the generated manifest objects are
   *          written.</p>
   */
  ManifestEncryption?: GeneratedManifestEncryption;

  /**
   * <p>The format of the generated manifest.</p>
   */
  ManifestFormat: GeneratedManifestFormat | string | undefined;
}

/**
 * <p>The container for the service that will create the S3 manifest.</p>
 */
export interface S3JobManifestGenerator {
  /**
   * <p>The Amazon Web Services account ID that owns the bucket the generated manifest is written to. If
   *          provided the generated manifest bucket's owner Amazon Web Services account ID must match this value, else
   *          the job fails.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>The source bucket used by the ManifestGenerator.</p>
   */
  SourceBucket: string | undefined;

  /**
   * <p>Specifies the location the generated manifest will be written to.</p>
   */
  ManifestOutputLocation?: S3ManifestOutputLocation;

  /**
   * <p>Specifies rules the S3JobManifestGenerator should use to use to decide whether an object
   *          in the source bucket should or should not be included in the generated job manifest.</p>
   */
  Filter?: JobManifestGeneratorFilter;

  /**
   * <p>Determines whether or not to write the job's generated manifest to a bucket.</p>
   */
  EnableManifestOutput: boolean | undefined;
}

/**
 * <p>Configures the type of the job's ManifestGenerator.</p>
 */
export type JobManifestGenerator =
  | JobManifestGenerator.S3JobManifestGeneratorMember
  | JobManifestGenerator.$UnknownMember;

export namespace JobManifestGenerator {
  /**
   * <p>The S3 job ManifestGenerator's configuration details.</p>
   */
  export interface S3JobManifestGeneratorMember {
    S3JobManifestGenerator: S3JobManifestGenerator;
    $unknown?: never;
  }

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
 * <p>Contains the configuration parameters for a <code>Lambda Invoke</code> operation.</p>
 */
export interface LambdaInvokeOperation {
  /**
   * <p>The Amazon Resource Name (ARN) for the Lambda function that the specified job will
   *          invoke on every object in the manifest.</p>
   */
  FunctionArn?: string;
}

/**
 * <p>Contains no configuration parameters because the DELETE Object tagging API only accepts
 *          the bucket name and key name as parameters, which are defined in the job's manifest.</p>
 */
export interface S3DeleteObjectTaggingOperation {}

export enum S3GlacierJobTier {
  BULK = "BULK",
  STANDARD = "STANDARD",
}

/**
 * <p>Contains the configuration parameters for an S3 Initiate Restore Object job.
 *          S3 Batch Operations passes every object to the underlying POST Object restore API. For more
 *          information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">RestoreObject</a>.</p>
 */
export interface S3InitiateRestoreObjectOperation {
  /**
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
   * <p>S3 Batch Operations supports <code>STANDARD</code> and <code>BULK</code> retrieval tiers, but
   *          not the <code>EXPEDITED</code> retrieval tier.</p>
   */
  GlacierJobTier?: S3GlacierJobTier | string;
}

export enum S3GranteeTypeIdentifier {
  CANONICAL = "id",
  EMAIL_ADDRESS = "emailAddress",
  GROUP = "uri",
}

/**
 * <p></p>
 */
export interface S3Grantee {
  /**
   * <p></p>
   */
  TypeIdentifier?: S3GranteeTypeIdentifier | string;

  /**
   * <p></p>
   */
  Identifier?: string;

  /**
   * <p></p>
   */
  DisplayName?: string;
}

export enum S3Permission {
  FULL_CONTROL = "FULL_CONTROL",
  READ = "READ",
  READ_ACP = "READ_ACP",
  WRITE = "WRITE",
  WRITE_ACP = "WRITE_ACP",
}

/**
 * <p></p>
 */
export interface S3Grant {
  /**
   * <p></p>
   */
  Grantee?: S3Grantee;

  /**
   * <p></p>
   */
  Permission?: S3Permission | string;
}

/**
 * <p></p>
 */
export interface S3ObjectOwner {
  /**
   * <p></p>
   */
  ID?: string;

  /**
   * <p></p>
   */
  DisplayName?: string;
}

/**
 * <p></p>
 */
export interface S3AccessControlList {
  /**
   * <p></p>
   */
  Owner: S3ObjectOwner | undefined;

  /**
   * <p></p>
   */
  Grants?: S3Grant[];
}

export enum S3CannedAccessControlList {
  AUTHENTICATED_READ = "authenticated-read",
  AWS_EXEC_READ = "aws-exec-read",
  BUCKET_OWNER_FULL_CONTROL = "bucket-owner-full-control",
  BUCKET_OWNER_READ = "bucket-owner-read",
  PRIVATE = "private",
  PUBLIC_READ = "public-read",
  PUBLIC_READ_WRITE = "public-read-write",
}

/**
 * <p></p>
 */
export interface S3AccessControlPolicy {
  /**
   * <p></p>
   */
  AccessControlList?: S3AccessControlList;

  /**
   * <p></p>
   */
  CannedAccessControlList?: S3CannedAccessControlList | string;
}

/**
 * <p>Contains the configuration parameters for a Set Object ACL operation. S3 Batch Operations
 *          passes every object to the underlying <code>PutObjectAcl</code> API. For more information
 *          about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">
 *                <code>PutObjectAcl</code>
 *             </a>.</p>
 */
export interface S3SetObjectAclOperation {
  /**
   * <p></p>
   */
  AccessControlPolicy?: S3AccessControlPolicy;
}

export enum S3ChecksumAlgorithm {
  CRC32 = "CRC32",
  CRC32C = "CRC32C",
  SHA1 = "SHA1",
  SHA256 = "SHA256",
}

export enum S3MetadataDirective {
  COPY = "COPY",
  REPLACE = "REPLACE",
}

export enum S3SSEAlgorithm {
  AES256 = "AES256",
  KMS = "KMS",
}

/**
 * <p></p>
 */
export interface S3ObjectMetadata {
  /**
   * <p></p>
   */
  CacheControl?: string;

  /**
   * <p></p>
   */
  ContentDisposition?: string;

  /**
   * <p></p>
   */
  ContentEncoding?: string;

  /**
   * <p></p>
   */
  ContentLanguage?: string;

  /**
   * <p></p>
   */
  UserMetadata?: Record<string, string>;

  /**
   * <p></p>
   */
  ContentLength?: number;

  /**
   * <p></p>
   */
  ContentMD5?: string;

  /**
   * <p></p>
   */
  ContentType?: string;

  /**
   * <p></p>
   */
  HttpExpiresDate?: Date;

  /**
   * <p></p>
   */
  RequesterCharged?: boolean;

  /**
   * <p></p>
   */
  SSEAlgorithm?: S3SSEAlgorithm | string;
}

/**
 * <p>A container for a key-value name pair.</p>
 */
export interface S3Tag {
  /**
   * <p>Key of the tag</p>
   */
  Key: string | undefined;

  /**
   * <p>Value of the tag</p>
   */
  Value: string | undefined;
}

export enum S3ObjectLockLegalHoldStatus {
  OFF = "OFF",
  ON = "ON",
}

export enum S3ObjectLockMode {
  COMPLIANCE = "COMPLIANCE",
  GOVERNANCE = "GOVERNANCE",
}

export enum S3StorageClass {
  DEEP_ARCHIVE = "DEEP_ARCHIVE",
  GLACIER = "GLACIER",
  GLACIER_IR = "GLACIER_IR",
  INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
  ONEZONE_IA = "ONEZONE_IA",
  STANDARD = "STANDARD",
  STANDARD_IA = "STANDARD_IA",
}

/**
 * <p>Contains the configuration parameters for a PUT Copy object operation. S3 Batch Operations
 *          passes every object to the underlying PUT Copy object API. For more information about the
 *          parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">PUT Object - Copy</a>.</p>
 */
export interface S3CopyObjectOperation {
  /**
   * <p>Specifies the destination bucket ARN for the batch copy operation. For example, to copy
   *          objects to a bucket named <code>destinationBucket</code>, set the
   *             <code>TargetResource</code> property to
   *          <code>arn:aws:s3:::destinationBucket</code>.</p>
   */
  TargetResource?: string;

  /**
   * <p></p>
   */
  CannedAccessControlList?: S3CannedAccessControlList | string;

  /**
   * <p></p>
   */
  AccessControlGrants?: S3Grant[];

  /**
   * <p></p>
   */
  MetadataDirective?: S3MetadataDirective | string;

  /**
   * <p></p>
   */
  ModifiedSinceConstraint?: Date;

  /**
   * <p>If you don't provide this parameter, Amazon S3 copies all the metadata from the original
   *          objects. If you specify an empty set, the new objects will have no tags. Otherwise, Amazon S3
   *          assigns the supplied tags to the new objects.</p>
   */
  NewObjectMetadata?: S3ObjectMetadata;

  /**
   * <p></p>
   */
  NewObjectTagging?: S3Tag[];

  /**
   * <p>Specifies an optional metadata property for website redirects,
   *             <code>x-amz-website-redirect-location</code>. Allows webpage redirects if the object is
   *          accessed through a website endpoint.</p>
   */
  RedirectLocation?: string;

  /**
   * <p></p>
   */
  RequesterPays?: boolean;

  /**
   * <p></p>
   */
  StorageClass?: S3StorageClass | string;

  /**
   * <p></p>
   */
  UnModifiedSinceConstraint?: Date;

  /**
   * <p></p>
   */
  SSEAwsKmsKeyId?: string;

  /**
   * <p>Specifies the folder prefix into which you would like the objects to be copied. For
   *          example, to copy objects into a folder named <code>Folder1</code> in the destination
   *          bucket, set the TargetKeyPrefix to <code>Folder1</code>.</p>
   */
  TargetKeyPrefix?: string;

  /**
   * <p>The legal hold status to be applied to all objects in the Batch Operations job.</p>
   */
  ObjectLockLegalHoldStatus?: S3ObjectLockLegalHoldStatus | string;

  /**
   * <p>The retention mode to be applied to all objects in the Batch Operations job.</p>
   */
  ObjectLockMode?: S3ObjectLockMode | string;

  /**
   * <p>The date when the applied object retention configuration expires on all objects in the
   *          Batch Operations job.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with
   *          server-side encryption using Amazon Web Services KMS (SSE-KMS). Setting this header to <code>true</code>
   *          causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.</p>
   *          <p>Specifying this header with an <i>object</i> action doesn’t affect
   *             <i>bucket-level</i> settings for S3 Bucket Key.</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>Indicates the algorithm you want Amazon S3 to use to create the checksum. For more
   *          information see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CheckingObjectIntegrity.xml"> Checking object
   *             integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumAlgorithm?: S3ChecksumAlgorithm | string;
}

/**
 * <p>Whether S3 Object Lock legal hold will be applied to objects in an S3 Batch Operations
 *          job.</p>
 */
export interface S3ObjectLockLegalHold {
  /**
   * <p>The Object Lock legal hold status to be applied to all objects in the Batch Operations
   *          job.</p>
   */
  Status: S3ObjectLockLegalHoldStatus | string | undefined;
}

/**
 * <p>Contains the configuration for an S3 Object Lock legal hold operation that an
 *          S3 Batch Operations job passes every object to the underlying <code>PutObjectLegalHold</code>
 *          API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold
 *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface S3SetObjectLegalHoldOperation {
  /**
   * <p>Contains the Object Lock legal hold status to be applied to all objects in the
   *          Batch Operations job.</p>
   */
  LegalHold: S3ObjectLockLegalHold | undefined;
}

export enum S3ObjectLockRetentionMode {
  COMPLIANCE = "COMPLIANCE",
  GOVERNANCE = "GOVERNANCE",
}

/**
 * <p>Contains the S3 Object Lock retention mode to be applied to all objects in the
 *          S3 Batch Operations job. If you don't provide <code>Mode</code> and <code>RetainUntilDate</code>
 *          data types in your operation, you will remove the retention from your objects. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention
 *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface S3Retention {
  /**
   * <p>The date when the applied Object Lock retention will expire on all objects set by the
   *          Batch Operations job.</p>
   */
  RetainUntilDate?: Date;

  /**
   * <p>The Object Lock retention mode to be applied to all objects in the Batch Operations
   *          job.</p>
   */
  Mode?: S3ObjectLockRetentionMode | string;
}

/**
 * <p>Contains the configuration parameters for the Object Lock retention action for an
 *          S3 Batch Operations job. Batch Operations passes every object to the underlying
 *             <code>PutObjectRetention</code> API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using
 *             S3 Object Lock retention with S3 Batch Operations</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 */
export interface S3SetObjectRetentionOperation {
  /**
   * <p>Indicates if the action should be applied to objects in the Batch Operations job even if they
   *          have Object Lock <code> GOVERNANCE</code> type in place.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * <p>Contains the Object Lock retention mode to be applied to all objects in the Batch Operations
   *          job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention
   *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Retention: S3Retention | undefined;
}

/**
 * <p>Contains the configuration parameters for a Set Object Tagging operation. S3 Batch Operations
 *          passes every object to the underlying PUT Object tagging API. For more information about
 *          the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PUT Object tagging</a>.</p>
 */
export interface S3SetObjectTaggingOperation {
  /**
   * <p></p>
   */
  TagSet?: S3Tag[];
}

/**
 * <p>Directs the specified job to invoke <code>ReplicateObject</code> on every object in the
 *          job's manifest.</p>
 */
export interface S3ReplicateObjectOperation {}

/**
 * <p>The operation that you want this job to perform on every object listed in the manifest.
 *          For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 */
export interface JobOperation {
  /**
   * <p>Directs the specified job to invoke an Lambda function on every object in the
   *          manifest.</p>
   */
  LambdaInvoke?: LambdaInvokeOperation;

  /**
   * <p>Directs the specified job to run a PUT Copy object call on every object in the
   *          manifest.</p>
   */
  S3PutObjectCopy?: S3CopyObjectOperation;

  /**
   * <p>Directs the specified job to run a <code>PutObjectAcl</code> call on every object in the
   *          manifest.</p>
   */
  S3PutObjectAcl?: S3SetObjectAclOperation;

  /**
   * <p>Directs the specified job to run a PUT Object tagging call on every object in the
   *          manifest.</p>
   */
  S3PutObjectTagging?: S3SetObjectTaggingOperation;

  /**
   * <p>Directs the specified job to execute a DELETE Object tagging call on every object in the
   *          manifest.</p>
   */
  S3DeleteObjectTagging?: S3DeleteObjectTaggingOperation;

  /**
   * <p>Directs the specified job to initiate restore requests for every archived object in the
   *          manifest.</p>
   */
  S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation;

  /**
   * <p>Contains the configuration for an S3 Object Lock legal hold operation that an
   *          S3 Batch Operations job passes every object to the underlying <code>PutObjectLegalHold</code>
   *          API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold
   *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation;

  /**
   * <p>Contains the configuration parameters for the Object Lock retention action for an
   *          S3 Batch Operations job. Batch Operations passes every object to the underlying
   *             <code>PutObjectRetention</code> API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using
   *             S3 Object Lock retention with S3 Batch Operations</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  S3PutObjectRetention?: S3SetObjectRetentionOperation;

  /**
   * <p>Directs the specified job to invoke <code>ReplicateObject</code> on every object in the
   *          job's manifest.</p>
   */
  S3ReplicateObject?: S3ReplicateObjectOperation;
}

export enum JobReportFormat {
  Report_CSV_20180820 = "Report_CSV_20180820",
}

export enum JobReportScope {
  AllTasks = "AllTasks",
  FailedTasksOnly = "FailedTasksOnly",
}

/**
 * <p>Contains the configuration parameters for a job-completion report.</p>
 */
export interface JobReport {
  /**
   * <p>The Amazon Resource Name (ARN) for the bucket where specified job-completion report will
   *          be stored.</p>
   */
  Bucket?: string;

  /**
   * <p>The format of the specified job-completion report.</p>
   */
  Format?: JobReportFormat | string;

  /**
   * <p>Indicates whether the specified job will generate a job-completion report.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>An optional prefix to describe where in the specified bucket the job-completion report
   *          will be stored. Amazon S3 stores the job-completion report at
   *             <code><prefix>/job-<job-id>/report.json</code>.</p>
   */
  Prefix?: string;

  /**
   * <p>Indicates whether the job-completion report will include details of all tasks or only
   *          failed tasks.</p>
   */
  ReportScope?: JobReportScope | string;
}

export interface CreateJobRequest {
  /**
   * <p>The Amazon Web Services account ID that creates the job.</p>
   */
  AccountId?: string;

  /**
   * <p>Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is
   *          only required for jobs created through the Amazon S3 console.</p>
   */
  ConfirmationRequired?: boolean;

  /**
   * <p>The action that you want this job to perform on every object listed in the manifest. For
   *          more information about the available actions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-actions.html">Operations</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  Operation: JobOperation | undefined;

  /**
   * <p>Configuration parameters for the optional job-completion report.</p>
   */
  Report: JobReport | undefined;

  /**
   * <p>An idempotency token to ensure that you don't accidentally submit the same request
   *          twice. You can use any string up to the maximum length.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Configuration parameters for the manifest.</p>
   */
  Manifest?: JobManifest;

  /**
   * <p>A description for this job. You can use any string within the permitted length.
   *          Descriptions don't need to be unique and can be used for multiple jobs.</p>
   */
  Description?: string;

  /**
   * <p>The numerical priority for this job. Higher numbers indicate higher priority.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role that Batch Operations will
   *          use to run this job's action on every object in the manifest.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A set of tags to associate with the S3 Batch Operations job. This is an optional parameter.
   *       </p>
   */
  Tags?: S3Tag[];

  /**
   * <p>The attribute container for the ManifestGenerator details. Jobs must be created with
   *          either a manifest file or a ManifestGenerator, but not both.</p>
   */
  ManifestGenerator?: JobManifestGenerator;
}

export interface CreateJobResult {
  /**
   * <p>The ID for this job. Amazon S3 generates this ID automatically and returns it after a
   *          successful <code>Create Job</code> request.</p>
   */
  JobId?: string;
}

/**
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

export interface CreateMultiRegionAccessPointRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point. The owner of the Multi-Region Access Point also must own
   *          the underlying buckets.</p>
   */
  AccountId?: string;

  /**
   * <p>An idempotency token used to identify the request and guarantee that requests are
   *          unique.</p>
   */
  ClientToken?: string;

  /**
   * <p>A container element containing details about the Multi-Region Access Point.</p>
   */
  Details: CreateMultiRegionAccessPointInput | undefined;
}

export interface CreateMultiRegionAccessPointResult {
  /**
   * <p>The request token associated with the request. You can use this token with <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> to determine the status of asynchronous
   *          requests.</p>
   */
  RequestTokenARN?: string;
}

export interface DeleteAccessPointRequest {
  /**
   * <p>The Amazon Web Services account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the access point you want to delete.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;
}

export interface DeleteAccessPointForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the access point you want to delete.</p>
   */
  Name: string | undefined;
}

export interface DeleteAccessPointPolicyRequest {
  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the access point whose policy you want to delete.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;
}

export interface DeleteAccessPointPolicyForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the Object Lambda Access Point you want to delete the policy for.</p>
   */
  Name: string | undefined;
}

export interface DeleteBucketRequest {
  /**
   * <p>The account ID that owns the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket being deleted.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export interface DeleteBucketLifecycleConfigurationRequest {
  /**
   * <p>The account ID of the lifecycle configuration to delete.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export interface DeleteBucketPolicyRequest {
  /**
   * <p>The account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export interface DeleteBucketTaggingRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket tag set to be removed.</p>
   */
  AccountId?: string;

  /**
   * <p>The bucket ARN that has the tag set to be removed.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export interface DeleteJobTaggingRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID for the S3 Batch Operations job whose tags you want to delete.</p>
   */
  JobId: string | undefined;
}

export interface DeleteJobTaggingResult {}

/**
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

export interface DeleteMultiRegionAccessPointRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>An idempotency token used to identify the request and guarantee that requests are
   *          unique.</p>
   */
  ClientToken?: string;

  /**
   * <p>A container element containing details about the Multi-Region Access Point.</p>
   */
  Details: DeleteMultiRegionAccessPointInput | undefined;
}

export interface DeleteMultiRegionAccessPointResult {
  /**
   * <p>The request token associated with the request. You can use this token with <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> to determine the status of asynchronous
   *          requests.</p>
   */
  RequestTokenARN?: string;
}

export interface DeletePublicAccessBlockRequest {
  /**
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration
   *          you want to remove.</p>
   */
  AccountId?: string;
}

export interface DeleteStorageLensConfigurationRequest {
  /**
   * <p>The ID of the S3 Storage Lens configuration.</p>
   */
  ConfigId: string | undefined;

  /**
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;
}

export interface DeleteStorageLensConfigurationTaggingRequest {
  /**
   * <p>The ID of the S3 Storage Lens configuration.</p>
   */
  ConfigId: string | undefined;

  /**
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;
}

export interface DeleteStorageLensConfigurationTaggingResult {}

export interface DescribeJobRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID for the job whose information you want to retrieve.</p>
   */
  JobId: string | undefined;
}

/**
 * <p>If this job failed, this element indicates why the job failed.</p>
 */
export interface JobFailure {
  /**
   * <p>The failure code, if any, for the specified job.</p>
   */
  FailureCode?: string;

  /**
   * <p>The failure reason, if any, for the specified job.</p>
   */
  FailureReason?: string;
}

/**
 * <p>Describes the specified job's generated manifest. Batch Operations jobs created with a
 *          ManifestGenerator populate details of this descriptor after execution of the
 *          ManifestGenerator.</p>
 */
export interface S3GeneratedManifestDescriptor {
  /**
   * <p>The format of the generated manifest.</p>
   */
  Format?: GeneratedManifestFormat | string;

  /**
   * <p>Contains the information required to locate a manifest object.</p>
   */
  Location?: JobManifestLocation;
}

/**
 * <p>Provides timing details for the job.</p>
 */
export interface JobTimers {
  /**
   * <p>Indicates the elapsed time in seconds the job has been in the Active job state.</p>
   */
  ElapsedTimeInActiveSeconds?: number;
}

/**
 * <p>Describes the total number of tasks that the specified job has started, the number of
 *          tasks that succeeded, and the number of tasks that failed.</p>
 */
export interface JobProgressSummary {
  /**
   * <p></p>
   */
  TotalNumberOfTasks?: number;

  /**
   * <p></p>
   */
  NumberOfTasksSucceeded?: number;

  /**
   * <p></p>
   */
  NumberOfTasksFailed?: number;

  /**
   * <p>The JobTimers attribute of a job's progress summary.</p>
   */
  Timers?: JobTimers;
}

export enum JobStatus {
  Active = "Active",
  Cancelled = "Cancelled",
  Cancelling = "Cancelling",
  Complete = "Complete",
  Completing = "Completing",
  Failed = "Failed",
  Failing = "Failing",
  New = "New",
  Paused = "Paused",
  Pausing = "Pausing",
  Preparing = "Preparing",
  Ready = "Ready",
  Suspended = "Suspended",
}

/**
 * <p>A container element for the job configuration and status information returned by a
 *             <code>Describe Job</code> request.</p>
 */
export interface JobDescriptor {
  /**
   * <p>The ID for the specified job.</p>
   */
  JobId?: string;

  /**
   * <p>Indicates whether confirmation is required before Amazon S3 begins running the specified job.
   *          Confirmation is required only for jobs created through the Amazon S3 console.</p>
   */
  ConfirmationRequired?: boolean;

  /**
   * <p>The description for this job, if one was provided in this job's <code>Create Job</code>
   *          request.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for this job.</p>
   */
  JobArn?: string;

  /**
   * <p>The current status of the specified job.</p>
   */
  Status?: JobStatus | string;

  /**
   * <p>The configuration information for the specified job's manifest object.</p>
   */
  Manifest?: JobManifest;

  /**
   * <p>The operation that the specified job is configured to run on the objects listed in the
   *          manifest.</p>
   */
  Operation?: JobOperation;

  /**
   * <p>The priority of the specified job.</p>
   */
  Priority?: number;

  /**
   * <p>Describes the total number of tasks that the specified job has run, the number of tasks
   *          that succeeded, and the number of tasks that failed.</p>
   */
  ProgressSummary?: JobProgressSummary;

  /**
   * <p>The reason for updating the job.</p>
   */
  StatusUpdateReason?: string;

  /**
   * <p>If the specified job failed, this field contains information describing the
   *          failure.</p>
   */
  FailureReasons?: JobFailure[];

  /**
   * <p>Contains the configuration information for the job-completion report if you requested
   *          one in the <code>Create Job</code> request.</p>
   */
  Report?: JobReport;

  /**
   * <p>A timestamp indicating when this job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp indicating when this job terminated. A job's termination date is the date
   *          and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role assigned to run the tasks
   *          for this job.</p>
   */
  RoleArn?: string;

  /**
   * <p>The timestamp when this job was suspended, if it has been suspended.</p>
   */
  SuspendedDate?: Date;

  /**
   * <p>The reason why the specified job was suspended. A job is only suspended if you create it
   *          through the Amazon S3 console. When you create the job, it enters the <code>Suspended</code>
   *          state to await confirmation before running. After you confirm the job, it automatically
   *          exits the <code>Suspended</code> state.</p>
   */
  SuspendedCause?: string;

  /**
   * <p>The manifest generator that was used to generate a job manifest for this job.</p>
   */
  ManifestGenerator?: JobManifestGenerator;

  /**
   * <p>The attribute of the JobDescriptor containing details about the job's generated
   *          manifest.</p>
   */
  GeneratedManifestDescriptor?: S3GeneratedManifestDescriptor;
}

export interface DescribeJobResult {
  /**
   * <p>Contains the configuration parameters and status for the job specified in the
   *             <code>Describe Job</code> request.</p>
   */
  Job?: JobDescriptor;
}

export interface DescribeMultiRegionAccessPointOperationRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>The request token associated with the request you want to know about. This request token
   *          is returned as part of the response when you make an asynchronous request. You provide this
   *          token to query about the status of the asynchronous action.</p>
   */
  RequestTokenARN: string | undefined;
}

export interface DescribeMultiRegionAccessPointOperationResult {
  /**
   * <p>A container element containing the details of the asynchronous operation.</p>
   */
  AsyncOperation?: AsyncOperation;
}

export interface GetAccessPointRequest {
  /**
   * <p>The Amazon Web Services account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the access point whose configuration information you want to retrieve.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;
}

export interface GetAccessPointResult {
  /**
   * <p>The name of the specified access point.</p>
   */
  Name?: string;

  /**
   * <p>The name of the bucket associated with the specified access point.</p>
   */
  Bucket?: string;

  /**
   * <p>Indicates whether this access point allows access from the public internet. If
   *             <code>VpcConfiguration</code> is specified for this access point, then
   *             <code>NetworkOrigin</code> is <code>VPC</code>, and the access point doesn't allow access from
   *          the public internet. Otherwise, <code>NetworkOrigin</code> is <code>Internet</code>, and
   *          the access point allows access from the public internet, subject to the access point and bucket access
   *          policies.</p>
   *          <p>This will always be true for an Amazon S3 on Outposts access point</p>
   */
  NetworkOrigin?: NetworkOrigin | string;

  /**
   * <p>Contains the virtual private cloud (VPC) configuration for the specified access point.</p>
   *          <note>
   *             <p>This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other
   *                Amazon Web Services.</p>
   *          </note>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          account. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>This data type is not supported for Amazon S3 on Outposts.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;

  /**
   * <p>The date and time when the specified access point was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The name or alias of the access point.</p>
   */
  Alias?: string;

  /**
   * <p>The ARN of the access point.</p>
   */
  AccessPointArn?: string;

  /**
   * <p>The VPC endpoint for the access point.</p>
   */
  Endpoints?: Record<string, string>;

  /**
   * <p>The Amazon Web Services account ID associated with the S3 bucket associated with this access point.</p>
   */
  BucketAccountId?: string;
}

export interface GetAccessPointConfigurationForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the Object Lambda Access Point you want to return the configuration for.</p>
   */
  Name: string | undefined;
}

export interface GetAccessPointConfigurationForObjectLambdaResult {
  /**
   * <p>Object Lambda Access Point configuration document.</p>
   */
  Configuration?: ObjectLambdaConfiguration;
}

export interface GetAccessPointForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name: string | undefined;
}

export interface GetAccessPointForObjectLambdaResult {
  /**
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name?: string;

  /**
   * <p>Configuration to block all public access. This setting is turned on and can not be
   *          edited. </p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;

  /**
   * <p>The date and time when the specified Object Lambda Access Point was created.</p>
   */
  CreationDate?: Date;
}

export interface GetAccessPointPolicyRequest {
  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the access point whose policy you want to retrieve.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;
}

export interface GetAccessPointPolicyResult {
  /**
   * <p>The access point policy associated with the specified access point.</p>
   */
  Policy?: string;
}

export interface GetAccessPointPolicyForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name: string | undefined;
}

export interface GetAccessPointPolicyForObjectLambdaResult {
  /**
   * <p>Object Lambda Access Point resource policy document.</p>
   */
  Policy?: string;
}

export interface GetAccessPointPolicyStatusRequest {
  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the access point whose policy status you want to retrieve.</p>
   */
  Name: string | undefined;
}

/**
 * <p>Indicates whether this access point policy is public. For more information about how Amazon S3
 *          evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. </p>
 */
export interface PolicyStatus {
  /**
   * <p></p>
   */
  IsPublic?: boolean;
}

export interface GetAccessPointPolicyStatusResult {
  /**
   * <p>Indicates the current policy status of the specified access point.</p>
   */
  PolicyStatus?: PolicyStatus;
}

export interface GetAccessPointPolicyStatusForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name: string | undefined;
}

export interface GetAccessPointPolicyStatusForObjectLambdaResult {
  /**
   * <p>Indicates whether this access point policy is public. For more information about how Amazon S3
   *          evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. </p>
   */
  PolicyStatus?: PolicyStatus;
}

export interface GetBucketRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export interface GetBucketResult {
  /**
   * <p>The Outposts bucket requested.</p>
   */
  Bucket?: string;

  /**
   * <p></p>
   */
  PublicAccessBlockEnabled?: boolean;

  /**
   * <p>The creation date of the Outposts bucket.</p>
   */
  CreationDate?: Date;
}

export interface GetBucketLifecycleConfigurationRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

/**
 * <p>The container of the Outposts bucket lifecycle expiration.</p>
 */
export interface LifecycleExpiration {
  /**
   * <p>Indicates at what date the object is to be deleted. Should be in GMT ISO 8601
   *          format.</p>
   */
  Date?: Date;

  /**
   * <p>Indicates the lifetime, in days, of the objects that are subject to the rule. The value
   *          must be a non-zero positive integer.</p>
   */
  Days?: number;

  /**
   * <p>Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set
   *          to true, the delete marker will be expired. If set to false, the policy takes no action.
   *          This cannot be specified with Days or Date in a Lifecycle Expiration Policy.</p>
   */
  ExpiredObjectDeleteMarker?: boolean;
}

/**
 * <p>The container for the Outposts bucket lifecycle rule and operator.</p>
 */
export interface LifecycleRuleAndOperator {
  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Prefix?: string;

  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to
   *          apply.</p>
   */
  Tags?: S3Tag[];

  /**
   * <p>Minimum object size to which the rule applies.</p>
   */
  ObjectSizeGreaterThan?: number;

  /**
   * <p>Maximum object size to which the rule applies.</p>
   */
  ObjectSizeLessThan?: number;
}

/**
 * <p>The container for the filter of the lifecycle rule.</p>
 */
export interface LifecycleRuleFilter {
  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   *          <important>
   *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
   *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML related object key constraints</a>.</p>
   *          </important>
   */
  Prefix?: string;

  /**
   * <p>A container for a key-value name pair.</p>
   */
  Tag?: S3Tag;

  /**
   * <p>The container for the <code>AND</code> condition for the lifecycle rule.</p>
   */
  And?: LifecycleRuleAndOperator;

  /**
   * <p>Minimum object size to which the rule applies.</p>
   */
  ObjectSizeGreaterThan?: number;

  /**
   * <p>Maximum object size to which the rule applies.</p>
   */
  ObjectSizeLessThan?: number;
}

/**
 * <p>The container of the noncurrent version expiration.</p>
 */
export interface NoncurrentVersionExpiration {
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How
   *             Amazon S3 Calculates When an Object Became Noncurrent</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  NoncurrentDays?: number;

  /**
   * <p>Specifies how many noncurrent versions S3 on Outposts will retain. If there are this many more
   *          recent noncurrent versions, S3 on Outposts will take the associated action. For more information
   *          about noncurrent versions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html">Lifecycle configuration
   *             elements</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  NewerNoncurrentVersions?: number;
}

export enum TransitionStorageClass {
  DEEP_ARCHIVE = "DEEP_ARCHIVE",
  GLACIER = "GLACIER",
  INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
  ONEZONE_IA = "ONEZONE_IA",
  STANDARD_IA = "STANDARD_IA",
}

/**
 * <p>The container for the noncurrent version transition.</p>
 */
export interface NoncurrentVersionTransition {
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations"> How
   *             Amazon S3 Calculates How Long an Object Has Been Noncurrent</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  NoncurrentDays?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: TransitionStorageClass | string;
}

export enum ExpirationStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

/**
 * <p>Specifies when an object transitions to a specified storage class. For more information
 *          about Amazon S3 Lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html">
 *             Transitioning objects using Amazon S3 Lifecycle</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 */
export interface Transition {
  /**
   * <p>Indicates when objects are transitioned to the specified storage class. The date value
   *          must be in ISO 8601 format. The time is always midnight UTC.</p>
   */
  Date?: Date;

  /**
   * <p>Indicates the number of days after creation when objects are transitioned to the
   *          specified storage class. The value must be a positive integer.</p>
   */
  Days?: number;

  /**
   * <p>The storage class to which you want the object to transition.</p>
   */
  StorageClass?: TransitionStorageClass | string;
}

/**
 * <p>The container for the Outposts bucket lifecycle rule.</p>
 */
export interface LifecycleRule {
  /**
   * <p>Specifies the expiration for the lifecycle of the object in the form of date, days and,
   *          whether the object has a delete marker.</p>
   */
  Expiration?: LifecycleExpiration;

  /**
   * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
   */
  ID?: string;

  /**
   * <p>The container for the filter of lifecycle rule.</p>
   */
  Filter?: LifecycleRuleFilter;

  /**
   * <p>If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not
   *          currently being applied.</p>
   */
  Status: ExpirationStatus | string | undefined;

  /**
   * <p>Specifies when an Amazon S3 object transitions to a specified storage class.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  Transitions?: Transition[];

  /**
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
   * <p>The noncurrent version expiration of the lifecycle rule.</p>
   */
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration;

  /**
   * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3
   *          waits before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
   *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
}

export interface GetBucketLifecycleConfigurationResult {
  /**
   * <p>Container for the lifecycle rule of the Outposts bucket.</p>
   */
  Rules?: LifecycleRule[];
}

export interface GetBucketPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export interface GetBucketPolicyResult {
  /**
   * <p>The policy of the Outposts bucket.</p>
   */
  Policy?: string;
}

export interface GetBucketTaggingRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export interface GetBucketTaggingResult {
  /**
   * <p>The tags set of the Outposts bucket.</p>
   */
  TagSet: S3Tag[] | undefined;
}

export interface GetBucketVersioningRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 on Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>The S3 on Outposts bucket to return the versioning state for.</p>
   */
  Bucket: string | undefined;
}

export enum MFADeleteStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

export enum BucketVersioningStatus {
  Enabled = "Enabled",
  Suspended = "Suspended",
}

export interface GetBucketVersioningResult {
  /**
   * <p>The versioning state of the S3 on Outposts bucket.</p>
   */
  Status?: BucketVersioningStatus | string;

  /**
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This
   *          element is returned only if the bucket has been configured with MFA delete. If MFA delete
   *          has never been configured for the bucket, this element is not returned.</p>
   */
  MFADelete?: MFADeleteStatus | string;
}

export interface GetJobTaggingRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID for the S3 Batch Operations job whose tags you want to retrieve.</p>
   */
  JobId: string | undefined;
}

export interface GetJobTaggingResult {
  /**
   * <p>The set of tags associated with the S3 Batch Operations job.</p>
   */
  Tags?: S3Tag[];
}

export interface GetMultiRegionAccessPointRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the Multi-Region Access Point whose configuration information you want to receive. The name of
   *          the Multi-Region Access Point is different from the alias. For more information about the distinction between
   *          the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   */
  Name: string | undefined;
}

/**
 * <p>A combination of a bucket and Region that's part of a Multi-Region Access Point.</p>
 */
export interface RegionReport {
  /**
   * <p>The name of the bucket.</p>
   */
  Bucket?: string;

  /**
   * <p>The name of the Region.</p>
   */
  Region?: string;
}

export enum MultiRegionAccessPointStatus {
  CREATING = "CREATING",
  DELETING = "DELETING",
  INCONSISTENT_ACROSS_REGIONS = "INCONSISTENT_ACROSS_REGIONS",
  PARTIALLY_CREATED = "PARTIALLY_CREATED",
  PARTIALLY_DELETED = "PARTIALLY_DELETED",
  READY = "READY",
}

/**
 * <p>A collection of statuses for a Multi-Region Access Point in the various Regions it supports.</p>
 */
export interface MultiRegionAccessPointReport {
  /**
   * <p>The name of the Multi-Region Access Point.</p>
   */
  Name?: string;

  /**
   * <p>The alias for the Multi-Region Access Point. For more information about the distinction between the name
   *          and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a>.</p>
   */
  Alias?: string;

  /**
   * <p>When the Multi-Region Access Point create request was received.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          account. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>This data type is not supported for Amazon S3 on Outposts.</p>
   */
  PublicAccessBlock?: PublicAccessBlockConfiguration;

  /**
   * <p>The current status of the Multi-Region Access Point.</p>
   *          <p>
   *             <code>CREATING</code> and <code>DELETING</code> are temporary states that exist while
   *          the request is propagating and being completed. If a Multi-Region Access Point has a status of
   *             <code>PARTIALLY_CREATED</code>, you can retry creation or send a request to delete the
   *          Multi-Region Access Point. If a Multi-Region Access Point has a status of <code>PARTIALLY_DELETED</code>, you can retry a delete
   *          request to finish the deletion of the Multi-Region Access Point.</p>
   */
  Status?: MultiRegionAccessPointStatus | string;

  /**
   * <p>A collection of the Regions and buckets associated with the Multi-Region Access Point.</p>
   */
  Regions?: RegionReport[];
}

export interface GetMultiRegionAccessPointResult {
  /**
   * <p>A container element containing the details of the requested Multi-Region Access Point.</p>
   */
  AccessPoint?: MultiRegionAccessPointReport;
}

export interface GetMultiRegionAccessPointPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more
   *          information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   */
  Name: string | undefined;
}

/**
 * <p>The last established access control policy for a Multi-Region Access Point.</p>
 *          <p>When you update the policy, the update is first listed as the proposed policy. After the
 *          update is finished and all Regions have been updated, the proposed policy is listed as the
 *          established policy. If both policies have the same version number, the proposed policy is
 *          the established policy.</p>
 */
export interface EstablishedMultiRegionAccessPointPolicy {
  /**
   * <p>The details of the last established policy.</p>
   */
  Policy?: string;
}

/**
 * <p>The proposed access control policy for the Multi-Region Access Point.</p>
 *          <p>When you update the policy, the update is first listed as the proposed policy. After the
 *          update is finished and all Regions have been updated, the proposed policy is listed as the
 *          established policy. If both policies have the same version number, the proposed policy is
 *          the established policy.</p>
 */
export interface ProposedMultiRegionAccessPointPolicy {
  /**
   * <p>The details of the proposed policy.</p>
   */
  Policy?: string;
}

/**
 * <p>The Multi-Region Access Point access control policy.</p>
 *          <p>When you update the policy, the update is first listed as the proposed policy. After the
 *          update is finished and all Regions have been updated, the proposed policy is listed as the
 *          established policy. If both policies have the same version number, the proposed policy is
 *          the established policy.</p>
 */
export interface MultiRegionAccessPointPolicyDocument {
  /**
   * <p>The last established policy for the Multi-Region Access Point.</p>
   */
  Established?: EstablishedMultiRegionAccessPointPolicy;

  /**
   * <p>The proposed policy for the Multi-Region Access Point.</p>
   */
  Proposed?: ProposedMultiRegionAccessPointPolicy;
}

export interface GetMultiRegionAccessPointPolicyResult {
  /**
   * <p>The policy associated with the specified Multi-Region Access Point.</p>
   */
  Policy?: MultiRegionAccessPointPolicyDocument;
}

export interface GetMultiRegionAccessPointPolicyStatusRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more
   *          information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   */
  Name: string | undefined;
}

export interface GetMultiRegionAccessPointPolicyStatusResult {
  /**
   * <p>Indicates whether this access point policy is public. For more information about how Amazon S3
   *          evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. </p>
   */
  Established?: PolicyStatus;
}

export interface GetMultiRegionAccessPointRoutesRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>The Multi-Region Access Point ARN.</p>
   */
  Mrap: string | undefined;
}

/**
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
   * <p>The name of the Amazon S3 bucket for which you'll submit a routing configuration change.
   *          Either the <code>Bucket</code> or the <code>Region</code> value must be provided. If both
   *          are provided, the bucket must be in the specified Region.</p>
   */
  Bucket?: string;

  /**
   * <p>The Amazon Web Services Region to which you'll be submitting a routing configuration change. Either
   *          the <code>Bucket</code> or the <code>Region</code> value must be provided. If both are
   *          provided, the bucket must be in the specified Region.</p>
   */
  Region?: string;

  /**
   * <p>The traffic state for the specified bucket or Amazon Web Services Region. </p>
   *          <p>A value of <code>0</code> indicates a passive state, which means that no new traffic
   *          will be routed to the
   *          Region. </p>
   *          <p>A value of <code>100</code> indicates an active state, which means that traffic will be
   *          routed to the specified Region. </p>
   *          <p>When
   *          the routing configuration for a Region is changed from active to passive, any in-progress
   *          operations (uploads, copies, deletes, and so on) to the formerly active Region will
   *          continue to run to until a final success or failure status is reached.</p>
   *          <p>If all Regions in the routing configuration are designated as passive, you'll receive an
   *             <code>InvalidRequest</code> error. </p>
   */
  TrafficDialPercentage: number | undefined;
}

export interface GetMultiRegionAccessPointRoutesResult {
  /**
   * <p>The Multi-Region Access Point ARN.</p>
   */
  Mrap?: string;

  /**
   * <p>The different routes that make up the route configuration. Active routes return a value
   *          of <code>100</code>, and passive routes return a value of <code>0</code>.</p>
   */
  Routes?: MultiRegionAccessPointRoute[];
}

export interface GetPublicAccessBlockOutput {
  /**
   * <p>The <code>PublicAccessBlock</code> configuration currently in effect for this
   *          Amazon Web Services account.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}

export interface GetPublicAccessBlockRequest {
  /**
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration
   *          you want to retrieve.</p>
   */
  AccountId?: string;
}

/**
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

export interface GetStorageLensConfigurationRequest {
  /**
   * <p>The ID of the Amazon S3 Storage Lens configuration.</p>
   */
  ConfigId: string | undefined;

  /**
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;
}

/**
 * <p>The Amazon Web Services organization for your S3 Storage Lens.</p>
 */
export interface StorageLensAwsOrg {
  /**
   * <p>A container for the Amazon Resource Name (ARN) of the Amazon Web Services organization. This property
   *          is read-only and follows the following format: <code>
   *                arn:aws:organizations:<i>us-east-1</i>:<i>example-account-id</i>:organization/<i>o-ex2l495dck</i>
   *             </code>
   *          </p>
   */
  Arn: string | undefined;
}

/**
 * <p>A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.</p>
 *          <p>For more information about publishing S3 Storage Lens metrics to CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_view_metrics_cloudwatch.html">Monitor
 *             S3 Storage Lens metrics in CloudWatch</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface CloudWatchMetrics {
  /**
   * <p>A container that indicates whether CloudWatch publishing for S3 Storage Lens metrics is enabled. A
   *          value of <code>true</code> indicates that CloudWatch publishing for S3 Storage Lens metrics is
   *          enabled.</p>
   */
  IsEnabled: boolean | undefined;
}

/**
 * <p></p>
 */
export interface SSEKMS {
  /**
   * <p>A container for the ARN of the SSE-KMS encryption. This property is read-only and
   *          follows the following format: <code>
   *                arn:aws:kms:<i>us-east-1</i>:<i>example-account-id</i>:key/<i>example-9a73-4afc-8d29-8f5900cef44e</i>
   *             </code>
   *          </p>
   */
  KeyId: string | undefined;
}

/**
 * <p></p>
 */
export interface SSES3 {}

/**
 * <p>A container for the encryption of the S3 Storage Lens metrics exports.</p>
 */
export interface StorageLensDataExportEncryption {
  /**
   * <p></p>
   */
  SSES3?: SSES3;

  /**
   * <p></p>
   */
  SSEKMS?: SSEKMS;
}

export enum Format {
  CSV = "CSV",
  Parquet = "Parquet",
}

export enum OutputSchemaVersion {
  V_1 = "V_1",
}

/**
 * <p>A container for the bucket where the Amazon S3 Storage Lens metrics export files are
 *          located.</p>
 */
export interface S3BucketDestination {
  /**
   * <p></p>
   */
  Format: Format | string | undefined;

  /**
   * <p>The schema version of the export file.</p>
   */
  OutputSchemaVersion: OutputSchemaVersion | string | undefined;

  /**
   * <p>The account ID of the owner of the S3 Storage Lens metrics export bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket. This property is read-only and follows the
   *          following format: <code>
   *                arn:aws:s3:<i>us-east-1</i>:<i>example-account-id</i>:bucket/<i>your-destination-bucket-name</i>
   *             </code>
   *          </p>
   */
  Arn: string | undefined;

  /**
   * <p>The prefix of the destination bucket where the metrics export will be delivered.</p>
   */
  Prefix?: string;

  /**
   * <p>The container for the type encryption of the metrics exports in this bucket.</p>
   */
  Encryption?: StorageLensDataExportEncryption;
}

/**
 * <p>A container to specify the properties of your S3 Storage Lens metrics export, including the
 *          destination, schema, and format.</p>
 */
export interface StorageLensDataExport {
  /**
   * <p>A container for the bucket where the S3 Storage Lens metrics export will be located.</p>
   *          <note>
   *             <p>This bucket must be located in the same Region as the storage lens configuration.
   *          </p>
   *          </note>
   */
  S3BucketDestination?: S3BucketDestination;

  /**
   * <p>A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.</p>
   */
  CloudWatchMetrics?: CloudWatchMetrics;
}

/**
 * <p>A container for what Amazon S3 Storage Lens will exclude.</p>
 */
export interface _Exclude {
  /**
   * <p>A container for the S3 Storage Lens bucket excludes.</p>
   */
  Buckets?: string[];

  /**
   * <p>A container for the S3 Storage Lens Region excludes.</p>
   */
  Regions?: string[];
}

/**
 * <p>A container for what Amazon S3 Storage Lens configuration includes.</p>
 */
export interface Include {
  /**
   * <p>A container for the S3 Storage Lens bucket includes.</p>
   */
  Buckets?: string[];

  /**
   * <p>A container for the S3 Storage Lens Region includes.</p>
   */
  Regions?: string[];
}

/**
 * <p>A container for the Amazon S3 Storage Lens configuration.</p>
 */
export interface StorageLensConfiguration {
  /**
   * <p>A container for the Amazon S3 Storage Lens configuration ID.</p>
   */
  Id: string | undefined;

  /**
   * <p>A container for all the account-level configurations of your S3 Storage Lens
   *          configuration.</p>
   */
  AccountLevel: AccountLevel | undefined;

  /**
   * <p>A container for what is included in this configuration. This container can only be valid
   *          if there is no <code>Exclude</code> container submitted, and it's not empty. </p>
   */
  Include?: Include;

  /**
   * <p>A container for what is excluded in this configuration. This container can only be valid
   *          if there is no <code>Include</code> container submitted, and it's not empty. </p>
   */
  Exclude?: _Exclude;

  /**
   * <p>A container to specify the properties of your S3 Storage Lens metrics export including, the
   *          destination, schema and format.</p>
   */
  DataExport?: StorageLensDataExport;

  /**
   * <p>A container for whether the S3 Storage Lens configuration is enabled.</p>
   */
  IsEnabled: boolean | undefined;

  /**
   * <p>A container for the Amazon Web Services organization for this S3 Storage Lens configuration.</p>
   */
  AwsOrg?: StorageLensAwsOrg;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Storage Lens configuration. This property is read-only
   *          and follows the following format: <code>
   *                arn:aws:s3:<i>us-east-1</i>:<i>example-account-id</i>:storage-lens/<i>your-dashboard-name</i>
   *             </code>
   *          </p>
   */
  StorageLensArn?: string;
}

export interface GetStorageLensConfigurationResult {
  /**
   * <p>The S3 Storage Lens configuration requested.</p>
   */
  StorageLensConfiguration?: StorageLensConfiguration;
}

export interface GetStorageLensConfigurationTaggingRequest {
  /**
   * <p>The ID of the Amazon S3 Storage Lens configuration.</p>
   */
  ConfigId: string | undefined;

  /**
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;
}

/**
 * <p></p>
 */
export interface StorageLensTag {
  /**
   * <p></p>
   */
  Key: string | undefined;

  /**
   * <p></p>
   */
  Value: string | undefined;
}

export interface GetStorageLensConfigurationTaggingResult {
  /**
   * <p>The tags of S3 Storage Lens configuration requested.</p>
   */
  Tags?: StorageLensTag[];
}

export interface ListAccessPointsRequest {
  /**
   * <p>The Amazon Web Services account ID for the account that owns the specified access points.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the bucket whose associated access points you want to list.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket?: string;

  /**
   * <p>A continuation token. If a previous call to <code>ListAccessPoints</code> returned a
   *          continuation token in the <code>NextToken</code> field, then providing that value here
   *          causes Amazon S3 to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of access points that you want to include in the list. If the specified
   *          bucket has more than this number of access points, then the response will include a continuation
   *          token in the <code>NextToken</code> field that you can use to retrieve the next page of
   *          access points.</p>
   */
  MaxResults?: number;
}

export interface ListAccessPointsResult {
  /**
   * <p>Contains identification and configuration information for one or more access points associated
   *          with the specified bucket.</p>
   */
  AccessPointList?: AccessPoint[];

  /**
   * <p>If the specified bucket has more access points than can be returned in one call to this API,
   *          this field contains a continuation token that you can provide in subsequent calls to this
   *          API to retrieve additional access points.</p>
   */
  NextToken?: string;
}

export interface ListAccessPointsForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>If the list has more access points than can be returned in one call to this API, this field
   *          contains a continuation token that you can provide in subsequent calls to this API to
   *          retrieve additional access points.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of access points that you want to include in the list. The response may
   *          contain fewer access points but will never contain more. If there are more than this number of
   *          access points, then the response will include a continuation token in the <code>NextToken</code>
   *          field that you can use to retrieve the next page of access points.</p>
   */
  MaxResults?: number;
}

/**
 * <p>An access point with an attached Lambda function used to access transformed data from an Amazon S3
 *          bucket.</p>
 */
export interface ObjectLambdaAccessPoint {
  /**
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies the ARN for the Object Lambda Access Point.</p>
   */
  ObjectLambdaAccessPointArn?: string;
}

export interface ListAccessPointsForObjectLambdaResult {
  /**
   * <p>Returns list of Object Lambda Access Points.</p>
   */
  ObjectLambdaAccessPointList?: ObjectLambdaAccessPoint[];

  /**
   * <p>If the list has more access points than can be returned in one call to this API, this field
   *          contains a continuation token that you can provide in subsequent calls to this API to
   *          retrieve additional access points.</p>
   */
  NextToken?: string;
}

/**
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

export interface ListJobsRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * <p>The <code>List Jobs</code> request returns jobs that match the statuses listed in this
   *          element.</p>
   */
  JobStatuses?: (JobStatus | string)[];

  /**
   * <p>A pagination token to request the next page of results. Use the token that Amazon S3 returned
   *          in the <code>NextToken</code> element of the <code>ListJobsResult</code> from the previous
   *             <code>List Jobs</code> request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs that Amazon S3 will include in the <code>List Jobs</code>
   *          response. If there are more jobs than this number, the response will include a pagination
   *          token in the <code>NextToken</code> field to enable you to retrieve the next page of
   *          results.</p>
   */
  MaxResults?: number;
}

export enum OperationName {
  LambdaInvoke = "LambdaInvoke",
  S3DeleteObjectTagging = "S3DeleteObjectTagging",
  S3InitiateRestoreObject = "S3InitiateRestoreObject",
  S3PutObjectAcl = "S3PutObjectAcl",
  S3PutObjectCopy = "S3PutObjectCopy",
  S3PutObjectLegalHold = "S3PutObjectLegalHold",
  S3PutObjectRetention = "S3PutObjectRetention",
  S3PutObjectTagging = "S3PutObjectTagging",
  S3ReplicateObject = "S3ReplicateObject",
}

/**
 * <p>Contains the configuration and status information for a single job retrieved as part of
 *          a job list.</p>
 */
export interface JobListDescriptor {
  /**
   * <p>The ID for the specified job.</p>
   */
  JobId?: string;

  /**
   * <p>The user-specified description that was included in the specified job's <code>Create
   *             Job</code> request.</p>
   */
  Description?: string;

  /**
   * <p>The operation that the specified job is configured to run on every object listed in the
   *          manifest.</p>
   */
  Operation?: OperationName | string;

  /**
   * <p>The current priority for the specified job.</p>
   */
  Priority?: number;

  /**
   * <p>The specified job's current status.</p>
   */
  Status?: JobStatus | string;

  /**
   * <p>A timestamp indicating when the specified job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp indicating when the specified job terminated. A job's termination date is
   *          the date and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date;

  /**
   * <p>Describes the total number of tasks that the specified job has run, the number of tasks
   *          that succeeded, and the number of tasks that failed.</p>
   */
  ProgressSummary?: JobProgressSummary;
}

export interface ListJobsResult {
  /**
   * <p>If the <code>List Jobs</code> request produced more than the maximum number of results,
   *          you can pass this value into a subsequent <code>List Jobs</code> request in order to
   *          retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of current jobs and jobs that have ended within the last 30 days.</p>
   */
  Jobs?: JobListDescriptor[];
}

export interface ListMultiRegionAccessPointsRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>Not currently used. Do not use this parameter.</p>
   */
  NextToken?: string;

  /**
   * <p>Not currently used. Do not use this parameter.</p>
   */
  MaxResults?: number;
}

export interface ListMultiRegionAccessPointsResult {
  /**
   * <p>The list of Multi-Region Access Points associated with the user.</p>
   */
  AccessPoints?: MultiRegionAccessPointReport[];

  /**
   * <p>If the specified bucket has more Multi-Region Access Points than can be returned in one call to this
   *          action, this field contains a continuation token. You can use this token tin subsequent
   *          calls to this action to retrieve additional Multi-Region Access Points.</p>
   */
  NextToken?: string;
}

export interface ListRegionalBucketsRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p></p>
   */
  NextToken?: string;

  /**
   * <p></p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the Outposts resource.</p>
   *          <note>
   *             <p>This ID is required by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  OutpostId?: string;
}

/**
 * <p>The container for the regional bucket.</p>
 */
export interface RegionalBucket {
  /**
   * <p></p>
   */
  Bucket: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the regional bucket.</p>
   */
  BucketArn?: string;

  /**
   * <p></p>
   */
  PublicAccessBlockEnabled: boolean | undefined;

  /**
   * <p>The creation date of the regional bucket</p>
   */
  CreationDate: Date | undefined;

  /**
   * <p>The Outposts ID of the regional bucket.</p>
   */
  OutpostId?: string;
}

export interface ListRegionalBucketsResult {
  /**
   * <p></p>
   */
  RegionalBucketList?: RegionalBucket[];

  /**
   * <p>
   *             <code>NextToken</code> is sent when <code>isTruncated</code> is true, which means there
   *          are more buckets that can be listed. The next list requests to Amazon S3 can be continued with
   *          this <code>NextToken</code>. <code>NextToken</code> is obfuscated and is not a real
   *          key.</p>
   */
  NextToken?: string;
}

export interface ListStorageLensConfigurationsRequest {
  /**
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;

  /**
   * <p>A pagination token to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Part of <code>ListStorageLensConfigurationResult</code>. Each entry includes the
 *          description of the S3 Storage Lens configuration, its home Region, whether it is enabled, its
 *          Amazon Resource Name (ARN), and config ID.</p>
 */
export interface ListStorageLensConfigurationEntry {
  /**
   * <p>A container for the S3 Storage Lens configuration ID.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN of the S3 Storage Lens configuration. This property is read-only.</p>
   */
  StorageLensArn: string | undefined;

  /**
   * <p>A container for the S3 Storage Lens home Region. Your metrics data is stored and retained in
   *          your designated S3 Storage Lens home Region.</p>
   */
  HomeRegion: string | undefined;

  /**
   * <p>A container for whether the S3 Storage Lens configuration is enabled. This property is
   *          required.</p>
   */
  IsEnabled?: boolean;
}

export interface ListStorageLensConfigurationsResult {
  /**
   * <p>If the request produced more than the maximum number of S3 Storage Lens configuration results,
   *          you can pass this value into a subsequent request to retrieve the next page of
   *          results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of S3 Storage Lens configurations.</p>
   */
  StorageLensConfigurationList?: ListStorageLensConfigurationEntry[];
}

export interface PutAccessPointConfigurationForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name: string | undefined;

  /**
   * <p>Object Lambda Access Point configuration document.</p>
   */
  Configuration: ObjectLambdaConfiguration | undefined;
}

export interface PutAccessPointPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID for owner of the bucket associated with the specified access point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the access point that you want to associate with the specified policy.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;

  /**
   * <p>The policy that you want to apply to the specified access point. For more information about access point
   *          policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing data access with Amazon S3
   *             access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Policy: string | undefined;
}

export interface PutAccessPointPolicyForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the Object Lambda Access Point.</p>
   */
  Name: string | undefined;

  /**
   * <p>Object Lambda Access Point resource policy document.</p>
   */
  Policy: string | undefined;
}

/**
 * <p>The container for the Outposts bucket lifecycle configuration.</p>
 */
export interface LifecycleConfiguration {
  /**
   * <p>A lifecycle rule for individual objects in an Outposts bucket. </p>
   */
  Rules?: LifecycleRule[];
}

export interface PutBucketLifecycleConfigurationRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the bucket for which to set the configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
   */
  LifecycleConfiguration?: LifecycleConfiguration;
}

export interface PutBucketPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;

  /**
   * <p>Set this parameter to true to confirm that you want to remove your permissions to change
   *          this bucket policy in the future.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  ConfirmRemoveSelfBucketAccess?: boolean;

  /**
   * <p>The bucket policy as a JSON document.</p>
   */
  Policy: string | undefined;
}

/**
 * <p></p>
 */
export interface Tagging {
  /**
   * <p>A collection for a set of tags.</p>
   */
  TagSet: S3Tag[] | undefined;
}

export interface PutBucketTaggingRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;

  /**
   * <p></p>
   */
  Tagging: Tagging | undefined;
}

export enum MFADelete {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

/**
 * <p>Describes the versioning state of an Amazon S3 on Outposts bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html">PutBucketVersioning</a>.</p>
 */
export interface VersioningConfiguration {
  /**
   * <p>Specifies whether MFA delete is enabled or disabled in the bucket versioning
   *          configuration for the S3 on Outposts bucket.</p>
   */
  MFADelete?: MFADelete | string;

  /**
   * <p>Sets the versioning state of the S3 on Outposts bucket.</p>
   */
  Status?: BucketVersioningStatus | string;
}

export interface PutBucketVersioningRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 on Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>The S3 on Outposts bucket to set the versioning state for.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device.</p>
   */
  MFA?: string;

  /**
   * <p>The root-level tag for the <code>VersioningConfiguration</code> parameters.</p>
   */
  VersioningConfiguration: VersioningConfiguration | undefined;
}

export interface PutJobTaggingRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID for the S3 Batch Operations job whose tags you want to replace.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The set of tags to associate with the S3 Batch Operations job.</p>
   */
  Tags: S3Tag[] | undefined;
}

export interface PutJobTaggingResult {}

/**
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

export interface PutMultiRegionAccessPointPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>An idempotency token used to identify the request and guarantee that requests are
   *          unique.</p>
   */
  ClientToken?: string;

  /**
   * <p>A container element containing the details of the policy for the Multi-Region Access Point.</p>
   */
  Details: PutMultiRegionAccessPointPolicyInput | undefined;
}

export interface PutMultiRegionAccessPointPolicyResult {
  /**
   * <p>The request token associated with the request. You can use this token with <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> to determine the status of asynchronous
   *          requests.</p>
   */
  RequestTokenARN?: string;
}

export interface PutPublicAccessBlockRequest {
  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to the specified
   *          Amazon Web Services account.</p>
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration
   *          you want to set.</p>
   */
  AccountId?: string;
}

export interface PutStorageLensConfigurationRequest {
  /**
   * <p>The ID of the S3 Storage Lens configuration.</p>
   */
  ConfigId: string | undefined;

  /**
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;

  /**
   * <p>The S3 Storage Lens configuration.</p>
   */
  StorageLensConfiguration: StorageLensConfiguration | undefined;

  /**
   * <p>The tag set of the S3 Storage Lens configuration.</p>
   *          <note>
   *             <p>You can set up to a maximum of 50 tags.</p>
   *          </note>
   */
  Tags?: StorageLensTag[];
}

export interface PutStorageLensConfigurationTaggingRequest {
  /**
   * <p>The ID of the S3 Storage Lens configuration.</p>
   */
  ConfigId: string | undefined;

  /**
   * <p>The account ID of the requester.</p>
   */
  AccountId?: string;

  /**
   * <p>The tag set of the S3 Storage Lens configuration.</p>
   *          <note>
   *             <p>You can set up to a maximum of 50 tags.</p>
   *          </note>
   */
  Tags: StorageLensTag[] | undefined;
}

export interface PutStorageLensConfigurationTaggingResult {}

export interface SubmitMultiRegionAccessPointRoutesRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   */
  AccountId?: string;

  /**
   * <p>The Multi-Region Access Point ARN.</p>
   */
  Mrap: string | undefined;

  /**
   * <p>The different routes that make up the new route configuration. Active routes return a
   *          value of <code>100</code>, and passive routes return a value of <code>0</code>.</p>
   */
  RouteUpdates: MultiRegionAccessPointRoute[] | undefined;
}

export interface SubmitMultiRegionAccessPointRoutesResult {}

export interface UpdateJobPriorityRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID for the job whose priority you want to update.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The priority you want to assign to this job.</p>
   */
  Priority: number | undefined;
}

export interface UpdateJobPriorityResult {
  /**
   * <p>The ID for the job whose priority Amazon S3 updated.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The new priority assigned to the specified job.</p>
   */
  Priority: number | undefined;
}

/**
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

export enum RequestedJobStatus {
  Cancelled = "Cancelled",
  Ready = "Ready",
}

export interface UpdateJobStatusRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the job whose status you want to update.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The status that you want to move the specified job to.</p>
   */
  RequestedJobStatus: RequestedJobStatus | string | undefined;

  /**
   * <p>A description of the reason why you want to change the specified job's status. This
   *          field can be any string up to the maximum length.</p>
   */
  StatusUpdateReason?: string;
}

export interface UpdateJobStatusResult {
  /**
   * <p>The ID for the job whose status was updated.</p>
   */
  JobId?: string;

  /**
   * <p>The current status for the specified job.</p>
   */
  Status?: JobStatus | string;

  /**
   * <p>The reason that the specified job's status was updated.</p>
   */
  StatusUpdateReason?: string;
}

/**
 * @internal
 */
export const AbortIncompleteMultipartUploadFilterSensitiveLog = (obj: AbortIncompleteMultipartUpload): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcConfigurationFilterSensitiveLog = (obj: VpcConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessPointFilterSensitiveLog = (obj: AccessPoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivityMetricsFilterSensitiveLog = (obj: ActivityMetrics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdvancedCostOptimizationMetricsFilterSensitiveLog = (obj: AdvancedCostOptimizationMetrics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdvancedDataProtectionMetricsFilterSensitiveLog = (obj: AdvancedDataProtectionMetrics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetailedStatusCodesMetricsFilterSensitiveLog = (obj: DetailedStatusCodesMetrics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelectionCriteriaFilterSensitiveLog = (obj: SelectionCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrefixLevelStorageMetricsFilterSensitiveLog = (obj: PrefixLevelStorageMetrics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrefixLevelFilterSensitiveLog = (obj: PrefixLevel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketLevelFilterSensitiveLog = (obj: BucketLevel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountLevelFilterSensitiveLog = (obj: AccountLevel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AsyncErrorDetailsFilterSensitiveLog = (obj: AsyncErrorDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublicAccessBlockConfigurationFilterSensitiveLog = (obj: PublicAccessBlockConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegionFilterSensitiveLog = (obj: Region): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMultiRegionAccessPointInputFilterSensitiveLog = (obj: CreateMultiRegionAccessPointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMultiRegionAccessPointInputFilterSensitiveLog = (obj: DeleteMultiRegionAccessPointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMultiRegionAccessPointPolicyInputFilterSensitiveLog = (
  obj: PutMultiRegionAccessPointPolicyInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AsyncRequestParametersFilterSensitiveLog = (obj: AsyncRequestParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiRegionAccessPointRegionalResponseFilterSensitiveLog = (
  obj: MultiRegionAccessPointRegionalResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiRegionAccessPointsAsyncResponseFilterSensitiveLog = (
  obj: MultiRegionAccessPointsAsyncResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AsyncResponseDetailsFilterSensitiveLog = (obj: AsyncResponseDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AsyncOperationFilterSensitiveLog = (obj: AsyncOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsLambdaTransformationFilterSensitiveLog = (obj: AwsLambdaTransformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccessPointRequestFilterSensitiveLog = (obj: CreateAccessPointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccessPointResultFilterSensitiveLog = (obj: CreateAccessPointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ObjectLambdaContentTransformationFilterSensitiveLog = (obj: ObjectLambdaContentTransformation): any => {
  if (obj.AwsLambda !== undefined) return { AwsLambda: AwsLambdaTransformationFilterSensitiveLog(obj.AwsLambda) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ObjectLambdaTransformationConfigurationFilterSensitiveLog = (
  obj: ObjectLambdaTransformationConfiguration
): any => ({
  ...obj,
  ...(obj.ContentTransformation && {
    ContentTransformation: ObjectLambdaContentTransformationFilterSensitiveLog(obj.ContentTransformation),
  }),
});

/**
 * @internal
 */
export const ObjectLambdaConfigurationFilterSensitiveLog = (obj: ObjectLambdaConfiguration): any => ({
  ...obj,
  ...(obj.TransformationConfigurations && {
    TransformationConfigurations: obj.TransformationConfigurations.map((item) =>
      ObjectLambdaTransformationConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const CreateAccessPointForObjectLambdaRequestFilterSensitiveLog = (
  obj: CreateAccessPointForObjectLambdaRequest
): any => ({
  ...obj,
  ...(obj.Configuration && { Configuration: ObjectLambdaConfigurationFilterSensitiveLog(obj.Configuration) }),
});

/**
 * @internal
 */
export const CreateAccessPointForObjectLambdaResultFilterSensitiveLog = (
  obj: CreateAccessPointForObjectLambdaResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBucketConfigurationFilterSensitiveLog = (obj: CreateBucketConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBucketRequestFilterSensitiveLog = (obj: CreateBucketRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBucketResultFilterSensitiveLog = (obj: CreateBucketResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobManifestLocationFilterSensitiveLog = (obj: JobManifestLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobManifestSpecFilterSensitiveLog = (obj: JobManifestSpec): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobManifestFilterSensitiveLog = (obj: JobManifest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobManifestGeneratorFilterFilterSensitiveLog = (obj: JobManifestGeneratorFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SSEKMSEncryptionFilterSensitiveLog = (obj: SSEKMSEncryption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SSES3EncryptionFilterSensitiveLog = (obj: SSES3Encryption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeneratedManifestEncryptionFilterSensitiveLog = (obj: GeneratedManifestEncryption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ManifestOutputLocationFilterSensitiveLog = (obj: S3ManifestOutputLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3JobManifestGeneratorFilterSensitiveLog = (obj: S3JobManifestGenerator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobManifestGeneratorFilterSensitiveLog = (obj: JobManifestGenerator): any => {
  if (obj.S3JobManifestGenerator !== undefined)
    return { S3JobManifestGenerator: S3JobManifestGeneratorFilterSensitiveLog(obj.S3JobManifestGenerator) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const LambdaInvokeOperationFilterSensitiveLog = (obj: LambdaInvokeOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DeleteObjectTaggingOperationFilterSensitiveLog = (obj: S3DeleteObjectTaggingOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3InitiateRestoreObjectOperationFilterSensitiveLog = (obj: S3InitiateRestoreObjectOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3GranteeFilterSensitiveLog = (obj: S3Grantee): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3GrantFilterSensitiveLog = (obj: S3Grant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ObjectOwnerFilterSensitiveLog = (obj: S3ObjectOwner): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3AccessControlListFilterSensitiveLog = (obj: S3AccessControlList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3AccessControlPolicyFilterSensitiveLog = (obj: S3AccessControlPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3SetObjectAclOperationFilterSensitiveLog = (obj: S3SetObjectAclOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ObjectMetadataFilterSensitiveLog = (obj: S3ObjectMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3TagFilterSensitiveLog = (obj: S3Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3CopyObjectOperationFilterSensitiveLog = (obj: S3CopyObjectOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ObjectLockLegalHoldFilterSensitiveLog = (obj: S3ObjectLockLegalHold): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3SetObjectLegalHoldOperationFilterSensitiveLog = (obj: S3SetObjectLegalHoldOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3RetentionFilterSensitiveLog = (obj: S3Retention): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3SetObjectRetentionOperationFilterSensitiveLog = (obj: S3SetObjectRetentionOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3SetObjectTaggingOperationFilterSensitiveLog = (obj: S3SetObjectTaggingOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ReplicateObjectOperationFilterSensitiveLog = (obj: S3ReplicateObjectOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobOperationFilterSensitiveLog = (obj: JobOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobReportFilterSensitiveLog = (obj: JobReport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobRequestFilterSensitiveLog = (obj: CreateJobRequest): any => ({
  ...obj,
  ...(obj.ManifestGenerator && { ManifestGenerator: JobManifestGeneratorFilterSensitiveLog(obj.ManifestGenerator) }),
});

/**
 * @internal
 */
export const CreateJobResultFilterSensitiveLog = (obj: CreateJobResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMultiRegionAccessPointRequestFilterSensitiveLog = (
  obj: CreateMultiRegionAccessPointRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMultiRegionAccessPointResultFilterSensitiveLog = (obj: CreateMultiRegionAccessPointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccessPointRequestFilterSensitiveLog = (obj: DeleteAccessPointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccessPointForObjectLambdaRequestFilterSensitiveLog = (
  obj: DeleteAccessPointForObjectLambdaRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccessPointPolicyRequestFilterSensitiveLog = (obj: DeleteAccessPointPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccessPointPolicyForObjectLambdaRequestFilterSensitiveLog = (
  obj: DeleteAccessPointPolicyForObjectLambdaRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBucketRequestFilterSensitiveLog = (obj: DeleteBucketRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBucketLifecycleConfigurationRequestFilterSensitiveLog = (
  obj: DeleteBucketLifecycleConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBucketPolicyRequestFilterSensitiveLog = (obj: DeleteBucketPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBucketTaggingRequestFilterSensitiveLog = (obj: DeleteBucketTaggingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobTaggingRequestFilterSensitiveLog = (obj: DeleteJobTaggingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobTaggingResultFilterSensitiveLog = (obj: DeleteJobTaggingResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMultiRegionAccessPointRequestFilterSensitiveLog = (
  obj: DeleteMultiRegionAccessPointRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMultiRegionAccessPointResultFilterSensitiveLog = (obj: DeleteMultiRegionAccessPointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePublicAccessBlockRequestFilterSensitiveLog = (obj: DeletePublicAccessBlockRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStorageLensConfigurationRequestFilterSensitiveLog = (
  obj: DeleteStorageLensConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStorageLensConfigurationTaggingRequestFilterSensitiveLog = (
  obj: DeleteStorageLensConfigurationTaggingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStorageLensConfigurationTaggingResultFilterSensitiveLog = (
  obj: DeleteStorageLensConfigurationTaggingResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobRequestFilterSensitiveLog = (obj: DescribeJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobFailureFilterSensitiveLog = (obj: JobFailure): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3GeneratedManifestDescriptorFilterSensitiveLog = (obj: S3GeneratedManifestDescriptor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobTimersFilterSensitiveLog = (obj: JobTimers): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobProgressSummaryFilterSensitiveLog = (obj: JobProgressSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobDescriptorFilterSensitiveLog = (obj: JobDescriptor): any => ({
  ...obj,
  ...(obj.ManifestGenerator && { ManifestGenerator: JobManifestGeneratorFilterSensitiveLog(obj.ManifestGenerator) }),
});

/**
 * @internal
 */
export const DescribeJobResultFilterSensitiveLog = (obj: DescribeJobResult): any => ({
  ...obj,
  ...(obj.Job && { Job: JobDescriptorFilterSensitiveLog(obj.Job) }),
});

/**
 * @internal
 */
export const DescribeMultiRegionAccessPointOperationRequestFilterSensitiveLog = (
  obj: DescribeMultiRegionAccessPointOperationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMultiRegionAccessPointOperationResultFilterSensitiveLog = (
  obj: DescribeMultiRegionAccessPointOperationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPointRequestFilterSensitiveLog = (obj: GetAccessPointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPointResultFilterSensitiveLog = (obj: GetAccessPointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPointConfigurationForObjectLambdaRequestFilterSensitiveLog = (
  obj: GetAccessPointConfigurationForObjectLambdaRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPointConfigurationForObjectLambdaResultFilterSensitiveLog = (
  obj: GetAccessPointConfigurationForObjectLambdaResult
): any => ({
  ...obj,
  ...(obj.Configuration && { Configuration: ObjectLambdaConfigurationFilterSensitiveLog(obj.Configuration) }),
});

/**
 * @internal
 */
export const GetAccessPointForObjectLambdaRequestFilterSensitiveLog = (
  obj: GetAccessPointForObjectLambdaRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPointForObjectLambdaResultFilterSensitiveLog = (
  obj: GetAccessPointForObjectLambdaResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPointPolicyRequestFilterSensitiveLog = (obj: GetAccessPointPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPointPolicyResultFilterSensitiveLog = (obj: GetAccessPointPolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPointPolicyForObjectLambdaRequestFilterSensitiveLog = (
  obj: GetAccessPointPolicyForObjectLambdaRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPointPolicyForObjectLambdaResultFilterSensitiveLog = (
  obj: GetAccessPointPolicyForObjectLambdaResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPointPolicyStatusRequestFilterSensitiveLog = (obj: GetAccessPointPolicyStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyStatusFilterSensitiveLog = (obj: PolicyStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPointPolicyStatusResultFilterSensitiveLog = (obj: GetAccessPointPolicyStatusResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPointPolicyStatusForObjectLambdaRequestFilterSensitiveLog = (
  obj: GetAccessPointPolicyStatusForObjectLambdaRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPointPolicyStatusForObjectLambdaResultFilterSensitiveLog = (
  obj: GetAccessPointPolicyStatusForObjectLambdaResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBucketRequestFilterSensitiveLog = (obj: GetBucketRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBucketResultFilterSensitiveLog = (obj: GetBucketResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBucketLifecycleConfigurationRequestFilterSensitiveLog = (
  obj: GetBucketLifecycleConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifecycleExpirationFilterSensitiveLog = (obj: LifecycleExpiration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifecycleRuleAndOperatorFilterSensitiveLog = (obj: LifecycleRuleAndOperator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifecycleRuleFilterFilterSensitiveLog = (obj: LifecycleRuleFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NoncurrentVersionExpirationFilterSensitiveLog = (obj: NoncurrentVersionExpiration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NoncurrentVersionTransitionFilterSensitiveLog = (obj: NoncurrentVersionTransition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitionFilterSensitiveLog = (obj: Transition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifecycleRuleFilterSensitiveLog = (obj: LifecycleRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBucketLifecycleConfigurationResultFilterSensitiveLog = (
  obj: GetBucketLifecycleConfigurationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBucketPolicyRequestFilterSensitiveLog = (obj: GetBucketPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBucketPolicyResultFilterSensitiveLog = (obj: GetBucketPolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBucketTaggingRequestFilterSensitiveLog = (obj: GetBucketTaggingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBucketTaggingResultFilterSensitiveLog = (obj: GetBucketTaggingResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBucketVersioningRequestFilterSensitiveLog = (obj: GetBucketVersioningRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBucketVersioningResultFilterSensitiveLog = (obj: GetBucketVersioningResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetJobTaggingRequestFilterSensitiveLog = (obj: GetJobTaggingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetJobTaggingResultFilterSensitiveLog = (obj: GetJobTaggingResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMultiRegionAccessPointRequestFilterSensitiveLog = (obj: GetMultiRegionAccessPointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegionReportFilterSensitiveLog = (obj: RegionReport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiRegionAccessPointReportFilterSensitiveLog = (obj: MultiRegionAccessPointReport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMultiRegionAccessPointResultFilterSensitiveLog = (obj: GetMultiRegionAccessPointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMultiRegionAccessPointPolicyRequestFilterSensitiveLog = (
  obj: GetMultiRegionAccessPointPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EstablishedMultiRegionAccessPointPolicyFilterSensitiveLog = (
  obj: EstablishedMultiRegionAccessPointPolicy
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProposedMultiRegionAccessPointPolicyFilterSensitiveLog = (
  obj: ProposedMultiRegionAccessPointPolicy
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiRegionAccessPointPolicyDocumentFilterSensitiveLog = (
  obj: MultiRegionAccessPointPolicyDocument
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMultiRegionAccessPointPolicyResultFilterSensitiveLog = (
  obj: GetMultiRegionAccessPointPolicyResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMultiRegionAccessPointPolicyStatusRequestFilterSensitiveLog = (
  obj: GetMultiRegionAccessPointPolicyStatusRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMultiRegionAccessPointPolicyStatusResultFilterSensitiveLog = (
  obj: GetMultiRegionAccessPointPolicyStatusResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMultiRegionAccessPointRoutesRequestFilterSensitiveLog = (
  obj: GetMultiRegionAccessPointRoutesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiRegionAccessPointRouteFilterSensitiveLog = (obj: MultiRegionAccessPointRoute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMultiRegionAccessPointRoutesResultFilterSensitiveLog = (
  obj: GetMultiRegionAccessPointRoutesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPublicAccessBlockOutputFilterSensitiveLog = (obj: GetPublicAccessBlockOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPublicAccessBlockRequestFilterSensitiveLog = (obj: GetPublicAccessBlockRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStorageLensConfigurationRequestFilterSensitiveLog = (obj: GetStorageLensConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageLensAwsOrgFilterSensitiveLog = (obj: StorageLensAwsOrg): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchMetricsFilterSensitiveLog = (obj: CloudWatchMetrics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SSEKMSFilterSensitiveLog = (obj: SSEKMS): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SSES3FilterSensitiveLog = (obj: SSES3): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageLensDataExportEncryptionFilterSensitiveLog = (obj: StorageLensDataExportEncryption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3BucketDestinationFilterSensitiveLog = (obj: S3BucketDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageLensDataExportFilterSensitiveLog = (obj: StorageLensDataExport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const _ExcludeFilterSensitiveLog = (obj: _Exclude): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IncludeFilterSensitiveLog = (obj: Include): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageLensConfigurationFilterSensitiveLog = (obj: StorageLensConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStorageLensConfigurationResultFilterSensitiveLog = (obj: GetStorageLensConfigurationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStorageLensConfigurationTaggingRequestFilterSensitiveLog = (
  obj: GetStorageLensConfigurationTaggingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageLensTagFilterSensitiveLog = (obj: StorageLensTag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStorageLensConfigurationTaggingResultFilterSensitiveLog = (
  obj: GetStorageLensConfigurationTaggingResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessPointsRequestFilterSensitiveLog = (obj: ListAccessPointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessPointsResultFilterSensitiveLog = (obj: ListAccessPointsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessPointsForObjectLambdaRequestFilterSensitiveLog = (
  obj: ListAccessPointsForObjectLambdaRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ObjectLambdaAccessPointFilterSensitiveLog = (obj: ObjectLambdaAccessPoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessPointsForObjectLambdaResultFilterSensitiveLog = (
  obj: ListAccessPointsForObjectLambdaResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsRequestFilterSensitiveLog = (obj: ListJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobListDescriptorFilterSensitiveLog = (obj: JobListDescriptor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsResultFilterSensitiveLog = (obj: ListJobsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMultiRegionAccessPointsRequestFilterSensitiveLog = (obj: ListMultiRegionAccessPointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMultiRegionAccessPointsResultFilterSensitiveLog = (obj: ListMultiRegionAccessPointsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRegionalBucketsRequestFilterSensitiveLog = (obj: ListRegionalBucketsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegionalBucketFilterSensitiveLog = (obj: RegionalBucket): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRegionalBucketsResultFilterSensitiveLog = (obj: ListRegionalBucketsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStorageLensConfigurationsRequestFilterSensitiveLog = (
  obj: ListStorageLensConfigurationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStorageLensConfigurationEntryFilterSensitiveLog = (obj: ListStorageLensConfigurationEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStorageLensConfigurationsResultFilterSensitiveLog = (
  obj: ListStorageLensConfigurationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAccessPointConfigurationForObjectLambdaRequestFilterSensitiveLog = (
  obj: PutAccessPointConfigurationForObjectLambdaRequest
): any => ({
  ...obj,
  ...(obj.Configuration && { Configuration: ObjectLambdaConfigurationFilterSensitiveLog(obj.Configuration) }),
});

/**
 * @internal
 */
export const PutAccessPointPolicyRequestFilterSensitiveLog = (obj: PutAccessPointPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAccessPointPolicyForObjectLambdaRequestFilterSensitiveLog = (
  obj: PutAccessPointPolicyForObjectLambdaRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifecycleConfigurationFilterSensitiveLog = (obj: LifecycleConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutBucketLifecycleConfigurationRequestFilterSensitiveLog = (
  obj: PutBucketLifecycleConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutBucketPolicyRequestFilterSensitiveLog = (obj: PutBucketPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaggingFilterSensitiveLog = (obj: Tagging): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutBucketTaggingRequestFilterSensitiveLog = (obj: PutBucketTaggingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VersioningConfigurationFilterSensitiveLog = (obj: VersioningConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutBucketVersioningRequestFilterSensitiveLog = (obj: PutBucketVersioningRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutJobTaggingRequestFilterSensitiveLog = (obj: PutJobTaggingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutJobTaggingResultFilterSensitiveLog = (obj: PutJobTaggingResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMultiRegionAccessPointPolicyRequestFilterSensitiveLog = (
  obj: PutMultiRegionAccessPointPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMultiRegionAccessPointPolicyResultFilterSensitiveLog = (
  obj: PutMultiRegionAccessPointPolicyResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPublicAccessBlockRequestFilterSensitiveLog = (obj: PutPublicAccessBlockRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutStorageLensConfigurationRequestFilterSensitiveLog = (obj: PutStorageLensConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutStorageLensConfigurationTaggingRequestFilterSensitiveLog = (
  obj: PutStorageLensConfigurationTaggingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutStorageLensConfigurationTaggingResultFilterSensitiveLog = (
  obj: PutStorageLensConfigurationTaggingResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubmitMultiRegionAccessPointRoutesRequestFilterSensitiveLog = (
  obj: SubmitMultiRegionAccessPointRoutesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubmitMultiRegionAccessPointRoutesResultFilterSensitiveLog = (
  obj: SubmitMultiRegionAccessPointRoutesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateJobPriorityRequestFilterSensitiveLog = (obj: UpdateJobPriorityRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateJobPriorityResultFilterSensitiveLog = (obj: UpdateJobPriorityResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateJobStatusRequestFilterSensitiveLog = (obj: UpdateJobStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateJobStatusResultFilterSensitiveLog = (obj: UpdateJobStatusResult): any => ({
  ...obj,
});
