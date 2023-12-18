// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  BucketVersioningStatus,
  JobStatus,
  LifecycleRule,
  MultiRegionAccessPointRoute,
  ObjectLambdaConfiguration,
  PublicAccessBlockConfiguration,
  PutMultiRegionAccessPointPolicyInput,
  ReplicationConfiguration,
  S3Tag,
  StorageLensConfiguration,
  StorageLensGroup,
  StorageLensTag,
  Tag,
} from "./models_0";

import { S3ControlServiceException as __BaseException } from "./S3ControlServiceException";

/**
 * @public
 * <p>
 * Each entry contains a Storage Lens group that exists in the specified home Region.
 * </p>
 */
export interface ListStorageLensGroupEntry {
  /**
   * @public
   * <p>
   * Contains the name of the Storage Lens group that exists in the specified home Region.
   * </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>
   * Contains the Amazon Resource Name (ARN) of the Storage Lens group. This property is read-only.
   * </p>
   */
  StorageLensGroupArn: string | undefined;

  /**
   * @public
   * <p>
   * Contains the Amazon Web Services Region where the Storage Lens group was created.
   * </p>
   */
  HomeRegion: string | undefined;
}

/**
 * @public
 */
export interface ListStorageLensGroupsResult {
  /**
   * @public
   * <p>
   *    If <code>NextToken</code> is returned, there are more Storage Lens groups results available. The value of <code>NextToken</code> is a
   *       unique pagination token for each page. Make the call again using the returned token to
   *       retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 24 hours.
   * </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>
   * The list of Storage Lens groups that exist in the specified home Region.
   * </p>
   */
  StorageLensGroupList?: ListStorageLensGroupEntry[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>
   * The Amazon Web Services account ID of the resource owner.
   * </p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>
   * The Amazon Resource Name (ARN) of the S3 resource that you want to list the tags for. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.
   * </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * @public
   * <p>
   * The Amazon Web Services resource tags that are associated with the resource.
   * </p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutAccessGrantsInstanceResourcePolicyRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that is making this request.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The resource policy of the S3 Access Grants instance that you are updating.</p>
   */
  Policy: string | undefined;

  /**
   * @public
   * <p>The Organization of the resource policy of the S3 Access Grants instance.</p>
   */
  Organization?: string;
}

/**
 * @public
 */
export interface PutAccessGrantsInstanceResourcePolicyResult {
  /**
   * @public
   * <p>The updated resource policy of the S3 Access Grants instance.</p>
   */
  Policy?: string;

  /**
   * @public
   * <p>The Organization of the resource policy of the S3 Access Grants instance.</p>
   */
  Organization?: string;

  /**
   * @public
   * <p>The date and time when you created the S3 Access Grants instance resource policy. </p>
   */
  CreatedAt?: Date;
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
export interface TagResourceRequest {
  /**
   * @public
   * <p>
   * The Amazon Web Services account ID that created the S3 resource that you're trying to add tags to or the requester's account ID.
   * </p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the S3 resource that you're trying to add tags to. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>
   * The Amazon Web Services resource tags that you want to add to the specified S3 resource.
   * </p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResult {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>
   *    The Amazon Web Services account ID that owns the resource that you're trying to remove the tags from.
   *    </p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>
   *    The Amazon Resource Name (ARN) of the S3 resource that you're trying to remove the tags from.
   *    </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>
   *    The array of tag key-value pairs that you're trying to remove from of the S3 resource.
   *    </p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResult {}

/**
 * @public
 */
export interface UpdateAccessGrantsLocationRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that is making this request.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ID of the registered location that you are updating. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   *          <p>The ID of the registered location to which you are granting access. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   *          <p>If you are passing the <code>default</code> location, you cannot create an access grant for the entire default location. You must also specify a bucket or a bucket and prefix in the <code>Subprefix</code> field. </p>
   */
  AccessGrantsLocationId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location. </p>
   */
  IAMRoleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessGrantsLocationResult {
  /**
   * @public
   * <p>The date and time when you registered the location. </p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The ID of the registered location to which you are granting access. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   */
  AccessGrantsLocationId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the registered location that you are updating. </p>
   */
  AccessGrantsLocationArn?: string;

  /**
   * @public
   * <p>The S3 URI path of the location that you are updating. You cannot update the scope of the registered location. The location scope can be the default S3 location <code>s3://</code>, the S3 path to a bucket <code>s3://<bucket></code>, or the S3 path to a bucket and prefix <code>s3://<bucket>/<prefix></code>. </p>
   */
  LocationScope?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role of the registered location. S3 Access Grants assumes this role to manage access to the registered location. </p>
   */
  IAMRoleArn?: string;
}

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

/**
 * @public
 */
export interface UpdateStorageLensGroupRequest {
  /**
   * @public
   * <p>
   * The name of the Storage Lens group that you want to update.
   * </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>
   * The Amazon Web Services account ID of the Storage Lens group owner.
   * </p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>
   * The JSON file that contains the Storage Lens group configuration.
   * </p>
   */
  StorageLensGroup: StorageLensGroup | undefined;
}
