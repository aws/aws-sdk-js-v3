// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  BucketVersioningStatus,
  JobListDescriptor,
  JobStatus,
  LifecycleRule,
  MultiRegionAccessPointReport,
  MultiRegionAccessPointRoute,
  ObjectLambdaConfiguration,
  PublicAccessBlockConfiguration,
  PutMultiRegionAccessPointPolicyInput,
  ReplicationConfiguration,
  S3Tag,
  Scope,
  StorageLensConfiguration,
  StorageLensGroup,
  StorageLensTag,
  Tag,
} from "./models_0";

import { S3ControlServiceException as __BaseException } from "./S3ControlServiceException";

/**
 * @public
 */
export interface ListJobsResult {
  /**
   * <p>If the <code>List Jobs</code> request produced more than the maximum number of results,
   *          you can pass this value into a subsequent <code>List Jobs</code> request in order to
   *          retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of current jobs and jobs that have ended within the last 30 days.</p>
   * @public
   */
  Jobs?: JobListDescriptor[] | undefined;
}

/**
 * @public
 */
export interface ListMultiRegionAccessPointsRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Not currently used. Do not use this parameter.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Not currently used. Do not use this parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMultiRegionAccessPointsResult {
  /**
   * <p>The list of Multi-Region Access Points associated with the user.</p>
   * @public
   */
  AccessPoints?: MultiRegionAccessPointReport[] | undefined;

  /**
   * <p>If the specified bucket has more Multi-Region Access Points than can be returned in one call to this
   *          action, this field contains a continuation token. You can use this token tin subsequent
   *          calls to this action to retrieve additional Multi-Region Access Points.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRegionalBucketsRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The ID of the Outposts resource.</p>
   *          <note>
   *             <p>This ID is required by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  OutpostId?: string | undefined;
}

/**
 * <p>The container for the regional bucket.</p>
 * @public
 */
export interface RegionalBucket {
  /**
   * <p></p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the regional bucket.</p>
   * @public
   */
  BucketArn?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  PublicAccessBlockEnabled: boolean | undefined;

  /**
   * <p>The creation date of the regional bucket</p>
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * <p>The Outposts ID of the regional bucket.</p>
   * @public
   */
  OutpostId?: string | undefined;
}

/**
 * @public
 */
export interface ListRegionalBucketsResult {
  /**
   * <p></p>
   * @public
   */
  RegionalBucketList?: RegionalBucket[] | undefined;

  /**
   * <p>
   *             <code>NextToken</code> is sent when <code>isTruncated</code> is true, which means there
   *          are more buckets that can be listed. The next list requests to Amazon S3 can be continued with
   *          this <code>NextToken</code>. <code>NextToken</code> is obfuscated and is not a real
   *          key.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStorageLensConfigurationsRequest {
  /**
   * <p>The account ID of the requester.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>A pagination token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Part of <code>ListStorageLensConfigurationResult</code>. Each entry includes the
 *          description of the S3 Storage Lens configuration, its home Region, whether it is enabled, its
 *          Amazon Resource Name (ARN), and config ID.</p>
 * @public
 */
export interface ListStorageLensConfigurationEntry {
  /**
   * <p>A container for the S3 Storage Lens configuration ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ARN of the S3 Storage Lens configuration. This property is read-only.</p>
   * @public
   */
  StorageLensArn: string | undefined;

  /**
   * <p>A container for the S3 Storage Lens home Region. Your metrics data is stored and retained in
   *          your designated S3 Storage Lens home Region.</p>
   * @public
   */
  HomeRegion: string | undefined;

  /**
   * <p>A container for whether the S3 Storage Lens configuration is enabled. This property is
   *          required.</p>
   * @public
   */
  IsEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ListStorageLensConfigurationsResult {
  /**
   * <p>If the request produced more than the maximum number of S3 Storage Lens configuration results,
   *          you can pass this value into a subsequent request to retrieve the next page of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of S3 Storage Lens configurations.</p>
   * @public
   */
  StorageLensConfigurationList?: ListStorageLensConfigurationEntry[] | undefined;
}

/**
 * @public
 */
export interface ListStorageLensGroupsRequest {
  /**
   * <p>
   *    The Amazon Web Services account ID that owns the Storage Lens groups.
   * </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> if there are no more results.
   *    </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 * Each entry contains a Storage Lens group that exists in the specified home Region.
 * </p>
 * @public
 */
export interface ListStorageLensGroupEntry {
  /**
   * <p>
   * Contains the name of the Storage Lens group that exists in the specified home Region.
   * </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   * Contains the Amazon Resource Name (ARN) of the Storage Lens group. This property is read-only.
   * </p>
   * @public
   */
  StorageLensGroupArn: string | undefined;

  /**
   * <p>
   * Contains the Amazon Web Services Region where the Storage Lens group was created.
   * </p>
   * @public
   */
  HomeRegion: string | undefined;
}

/**
 * @public
 */
export interface ListStorageLensGroupsResult {
  /**
   * <p>
   *    If <code>NextToken</code> is returned, there are more Storage Lens groups results available. The value of <code>NextToken</code> is a
   *       unique pagination token for each page. Make the call again using the returned token to
   *       retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 24 hours.
   * </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   * The list of Storage Lens groups that exist in the specified home Region.
   * </p>
   * @public
   */
  StorageLensGroupList?: ListStorageLensGroupEntry[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>
   * The Amazon Web Services account ID of the resource owner.
   * </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>
   * The Amazon Resource Name (ARN) of the S3 resource that you want to list tags for. The tagged resource can be a directory bucket, S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.
   * </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * <p>
   * The Amazon Web Services resource tags that are associated with the resource.
   * </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAccessGrantsInstanceResourcePolicyRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The resource policy of the S3 Access Grants instance that you are updating.</p>
   * @public
   */
  Policy: string | undefined;

  /**
   * <p>The Organization of the resource policy of the S3 Access Grants instance.</p>
   * @public
   */
  Organization?: string | undefined;
}

/**
 * @public
 */
export interface PutAccessGrantsInstanceResourcePolicyResult {
  /**
   * <p>The updated resource policy of the S3 Access Grants instance.</p>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>The Organization of the resource policy of the S3 Access Grants instance.</p>
   * @public
   */
  Organization?: string | undefined;

  /**
   * <p>The date and time when you created the S3 Access Grants instance resource policy. </p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface PutAccessPointConfigurationForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the Object Lambda Access Point.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Object Lambda Access Point configuration document.</p>
   * @public
   */
  Configuration: ObjectLambdaConfiguration | undefined;
}

/**
 * @public
 */
export interface PutAccessPointPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID for owner of the bucket associated with the specified access point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the access point that you want to associate with the specified policy.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The policy that you want to apply to the specified access point. For more information about access point
   *          policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing data access with Amazon S3
   *             access points</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-directory-buckets.html">Managing access to shared datasets in directory buckets with access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutAccessPointPolicyForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the Object Lambda Access Point.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Object Lambda Access Point resource policy document.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutAccessPointScopeRequest {
  /**
   * <p>
   *          The Amazon Web Services account ID that owns the access point with scope that you want to create or replace.
   *       </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the access point with the scope that you want to create or replace.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Object prefixes, API operations, or a combination of both.</p>
   * @public
   */
  Scope: Scope | undefined;
}

/**
 * <p>The container for the Outposts bucket lifecycle configuration.</p>
 * @public
 */
export interface LifecycleConfiguration {
  /**
   * <p>A lifecycle rule for individual objects in an Outposts bucket. </p>
   * @public
   */
  Rules?: LifecycleRule[] | undefined;
}

/**
 * @public
 */
export interface PutBucketLifecycleConfigurationRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the bucket for which to set the configuration.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
   * @public
   */
  LifecycleConfiguration?: LifecycleConfiguration | undefined;
}

/**
 * @public
 */
export interface PutBucketPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Set this parameter to true to confirm that you want to remove your permissions to change
   *          this bucket policy in the future.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  ConfirmRemoveSelfBucketAccess?: boolean | undefined;

  /**
   * <p>The bucket policy as a JSON document.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutBucketReplicationRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the S3 on Outposts bucket to set the configuration for.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p></p>
   * @public
   */
  ReplicationConfiguration: ReplicationConfiguration | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface Tagging {
  /**
   * <p>A collection for a set of tags.</p>
   * @public
   */
  TagSet: S3Tag[] | undefined;
}

/**
 * @public
 */
export interface PutBucketTaggingRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p></p>
   * @public
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
 * <p>Describes the versioning state of an Amazon S3 on Outposts bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html">PutBucketVersioning</a>.</p>
 * @public
 */
export interface VersioningConfiguration {
  /**
   * <p>Specifies whether MFA delete is enabled or disabled in the bucket versioning
   *          configuration for the S3 on Outposts bucket.</p>
   * @public
   */
  MFADelete?: MFADelete | undefined;

  /**
   * <p>Sets the versioning state of the S3 on Outposts bucket.</p>
   * @public
   */
  Status?: BucketVersioningStatus | undefined;
}

/**
 * @public
 */
export interface PutBucketVersioningRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 on Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The S3 on Outposts bucket to set the versioning state for.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device.</p>
   * @public
   */
  MFA?: string | undefined;

  /**
   * <p>The root-level tag for the <code>VersioningConfiguration</code> parameters.</p>
   * @public
   */
  VersioningConfiguration: VersioningConfiguration | undefined;
}

/**
 * @public
 */
export interface PutJobTaggingRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID for the S3 Batch Operations job whose tags you want to replace.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The set of tags to associate with the S3 Batch Operations job.</p>
   * @public
   */
  Tags: S3Tag[] | undefined;
}

/**
 * @public
 */
export interface PutJobTaggingResult {}

/**
 * <p>Amazon S3 throws this exception if you have too many tags in your tag set.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>An idempotency token used to identify the request and guarantee that requests are
   *          unique.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A container element containing the details of the policy for the Multi-Region Access Point.</p>
   * @public
   */
  Details: PutMultiRegionAccessPointPolicyInput | undefined;
}

/**
 * @public
 */
export interface PutMultiRegionAccessPointPolicyResult {
  /**
   * <p>The request token associated with the request. You can use this token with <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> to determine the status of asynchronous
   *          requests.</p>
   * @public
   */
  RequestTokenARN?: string | undefined;
}

/**
 * @public
 */
export interface PutPublicAccessBlockRequest {
  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to the specified
   *          Amazon Web Services account.</p>
   * @public
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration
   *          you want to set.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface PutStorageLensConfigurationRequest {
  /**
   * <p>The ID of the S3 Storage Lens configuration.</p>
   * @public
   */
  ConfigId: string | undefined;

  /**
   * <p>The account ID of the requester.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The S3 Storage Lens configuration.</p>
   * @public
   */
  StorageLensConfiguration: StorageLensConfiguration | undefined;

  /**
   * <p>The tag set of the S3 Storage Lens configuration.</p>
   *          <note>
   *             <p>You can set up to a maximum of 50 tags.</p>
   *          </note>
   * @public
   */
  Tags?: StorageLensTag[] | undefined;
}

/**
 * @public
 */
export interface PutStorageLensConfigurationTaggingRequest {
  /**
   * <p>The ID of the S3 Storage Lens configuration.</p>
   * @public
   */
  ConfigId: string | undefined;

  /**
   * <p>The account ID of the requester.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The tag set of the S3 Storage Lens configuration.</p>
   *          <note>
   *             <p>You can set up to a maximum of 50 tags.</p>
   *          </note>
   * @public
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
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Multi-Region Access Point ARN.</p>
   * @public
   */
  Mrap: string | undefined;

  /**
   * <p>The different routes that make up the new route configuration. Active routes return a
   *          value of <code>100</code>, and passive routes return a value of <code>0</code>.</p>
   * @public
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
   * <p>
   * The Amazon Web Services account ID that created the S3 resource that you're trying to add tags to or the requester's account ID.
   * </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 resource that you're applying tags to. The tagged resource can be a directory bucket, S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>
   * The Amazon Web Services resource tags that you want to add to the specified S3 resource.
   * </p>
   * @public
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
   * <p>
   *    The Amazon Web Services account ID that owns the resource that you're trying to remove the tags from.
   *    </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 resource that you're removing tags from. The tagged resource can be a directory bucket, S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>
   *    The array of tag key-value pairs that you're trying to remove from of the S3 resource.
   *    </p>
   * @public
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
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the registered location that you are updating. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   *          <p>The ID of the registered location to which you are granting access. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   *          <p>If you are passing the <code>default</code> location, you cannot create an access grant for the entire default location. You must also specify a bucket or a bucket and prefix in the <code>Subprefix</code> field. </p>
   * @public
   */
  AccessGrantsLocationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location. </p>
   * @public
   */
  IAMRoleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessGrantsLocationResult {
  /**
   * <p>The date and time when you registered the location. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The ID of the registered location to which you are granting access. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registered location that you are updating. </p>
   * @public
   */
  AccessGrantsLocationArn?: string | undefined;

  /**
   * <p>The S3 URI path of the location that you are updating. You cannot update the scope of the registered location. The location scope can be the default S3 location <code>s3://</code>, the S3 path to a bucket <code>s3://<bucket></code>, or the S3 path to a bucket and prefix <code>s3://<bucket>/<prefix></code>. </p>
   * @public
   */
  LocationScope?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role of the registered location. S3 Access Grants assumes this role to manage access to the registered location. </p>
   * @public
   */
  IAMRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateJobPriorityRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID for the job whose priority you want to update.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The priority you want to assign to this job.</p>
   * @public
   */
  Priority: number | undefined;
}

/**
 * @public
 */
export interface UpdateJobPriorityResult {
  /**
   * <p>The ID for the job whose priority Amazon S3 updated.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The new priority assigned to the specified job.</p>
   * @public
   */
  Priority: number | undefined;
}

/**
 * <p></p>
 * @public
 */
export class JobStatusException extends __BaseException {
  readonly name: "JobStatusException" = "JobStatusException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the job whose status you want to update.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The status that you want to move the specified job to.</p>
   * @public
   */
  RequestedJobStatus: RequestedJobStatus | undefined;

  /**
   * <p>A description of the reason why you want to change the specified job's status. This
   *          field can be any string up to the maximum length.</p>
   * @public
   */
  StatusUpdateReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateJobStatusResult {
  /**
   * <p>The ID for the job whose status was updated.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The current status for the specified job.</p>
   * @public
   */
  Status?: JobStatus | undefined;

  /**
   * <p>The reason that the specified job's status was updated.</p>
   * @public
   */
  StatusUpdateReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStorageLensGroupRequest {
  /**
   * <p>
   * The name of the Storage Lens group that you want to update.
   * </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   * The Amazon Web Services account ID of the Storage Lens group owner.
   * </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>
   * The JSON file that contains the Storage Lens group configuration.
   * </p>
   * @public
   */
  StorageLensGroup: StorageLensGroup | undefined;
}
