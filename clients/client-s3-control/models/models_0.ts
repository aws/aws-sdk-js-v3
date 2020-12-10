import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export namespace AbortIncompleteMultipartUpload {
  export const filterSensitiveLog = (obj: AbortIncompleteMultipartUpload): any => ({
    ...obj,
  });
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
   * <p>If this field is specified, this access point will only allow connections from the specified VPC ID.</p>
   */
  VpcId: string | undefined;
}

export namespace VpcConfiguration {
  export const filterSensitiveLog = (obj: VpcConfiguration): any => ({
    ...obj,
  });
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
}

export namespace AccessPoint {
  export const filterSensitiveLog = (obj: AccessPoint): any => ({
    ...obj,
  });
}

/**
 * <p>A container for the activity metrics.</p>
 */
export interface ActivityMetrics {
  /**
   * <p>A container for whether the activity metrics are enabled.</p>
   */
  IsEnabled?: boolean;
}

export namespace ActivityMetrics {
  export const filterSensitiveLog = (obj: ActivityMetrics): any => ({
    ...obj,
  });
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

export namespace SelectionCriteria {
  export const filterSensitiveLog = (obj: SelectionCriteria): any => ({
    ...obj,
  });
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

export namespace PrefixLevelStorageMetrics {
  export const filterSensitiveLog = (obj: PrefixLevelStorageMetrics): any => ({
    ...obj,
  });
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

export namespace PrefixLevel {
  export const filterSensitiveLog = (obj: PrefixLevel): any => ({
    ...obj,
  });
}

/**
 * <p>A container for the bucket-level configuration.</p>
 */
export interface BucketLevel {
  /**
   * <p>A container for the bucket-level activity metrics for Amazon S3 Storage Lens</p>
   */
  ActivityMetrics?: ActivityMetrics;

  /**
   * <p>A container for the bucket-level prefix-level metrics for S3 Storage Lens</p>
   */
  PrefixLevel?: PrefixLevel;
}

export namespace BucketLevel {
  export const filterSensitiveLog = (obj: BucketLevel): any => ({
    ...obj,
  });
}

/**
 * <p>A container for the account level Amazon S3 Storage Lens configuration.</p>
 */
export interface AccountLevel {
  /**
   * <p>A container for the S3 Storage Lens activity metrics.</p>
   */
  ActivityMetrics?: ActivityMetrics;

  /**
   * <p>A container for the S3 Storage Lens bucket-level configuration.</p>
   */
  BucketLevel: BucketLevel | undefined;
}

export namespace AccountLevel {
  export const filterSensitiveLog = (obj: AccountLevel): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account.
 *          You can enable the configuration options in any combination. For more information about
 *          when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer
 *          Guide</i>.</p>
 *          <p>This is not supported for Amazon S3 on Outposts.</p>
 */
export interface PublicAccessBlockConfiguration {
  /**
   * <p>Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in
   *       this account. Setting this element to <code>TRUE</code> causes the following behavior:</p>
   *          <ul>
   *             <li>
   *                <p>PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.</p>
   *             </li>
   *             <li>
   *                <p>PUT Object calls fail if the request includes a public ACL.</p>
   *             </li>
   *             <li>
   *                <p>PUT Bucket calls fail if the request includes a public ACL.</p>
   *             </li>
   *          </ul>
   *          <p>Enabling this setting doesn't affect existing policies or ACLs.</p>
   *          <p>This is not supported for Amazon S3 on Outposts.</p>
   */
  BlockPublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this
   *          element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on buckets in this
   *          account and any objects that they contain. </p>
   *          <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't
   *          prevent new public ACLs from being set.</p>
   *          <p>This is not supported for Amazon S3 on Outposts.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should block public bucket policies for buckets in this account.
   *          Setting this element to <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket
   *          policy if the specified bucket policy allows public access. </p>
   *          <p>Enabling this setting doesn't affect existing bucket policies.</p>
   *          <p>This is not supported for Amazon S3 on Outposts.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account.
   *          Setting this element to <code>TRUE</code> restricts access to buckets with public policies
   *          to only AWS service principals and authorized users within this account.</p>
   *          <p>Enabling this setting doesn't affect previously stored bucket policies, except that public
   *          and cross-account access within any public bucket policy, including non-public delegation to
   *          specific accounts, is blocked.</p>
   *          <p>This is not supported for Amazon S3 on Outposts.</p>
   */
  RestrictPublicBuckets?: boolean;
}

export namespace PublicAccessBlockConfiguration {
  export const filterSensitiveLog = (obj: PublicAccessBlockConfiguration): any => ({
    ...obj,
  });
}

export interface CreateAccessPointRequest {
  /**
   * <p>The AWS account ID for the owner of the bucket for which you want to create an access point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name you want to assign to this access point.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the bucket that you want to associate this access point with.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
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
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account.
   *          You can enable the configuration options in any combination. For more information about
   *          when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer
   *          Guide</i>.</p>
   *          <p>This is not supported for Amazon S3 on Outposts.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}

export namespace CreateAccessPointRequest {
  export const filterSensitiveLog = (obj: CreateAccessPointRequest): any => ({
    ...obj,
  });
}

export interface CreateAccessPointResult {
  /**
   * <p>The ARN of the access point.</p>
   *          <note>
   *             <p>This is only supported by Amazon S3 on Outposts.</p>
   *          </note>
   */
  AccessPointArn?: string;
}

export namespace CreateAccessPointResult {
  export const filterSensitiveLog = (obj: CreateAccessPointResult): any => ({
    ...obj,
  });
}

/**
 * <p>The requested Outposts bucket name is not available. The bucket namespace is shared by
 *          all users of the AWS Outposts in this Region. Select a different name and try
 *          again.</p>
 */
export interface BucketAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "BucketAlreadyExists";
  $fault: "client";
}

export namespace BucketAlreadyExists {
  export const filterSensitiveLog = (obj: BucketAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>The Outposts bucket you tried to create already exists, and you own it. </p>
 */
export interface BucketAlreadyOwnedByYou extends __SmithyException, $MetadataBearer {
  name: "BucketAlreadyOwnedByYou";
  $fault: "client";
}

export namespace BucketAlreadyOwnedByYou {
  export const filterSensitiveLog = (obj: BucketAlreadyOwnedByYou): any => ({
    ...obj,
  });
}

export type BucketCannedACL = "authenticated-read" | "private" | "public-read" | "public-read-write";

export type BucketLocationConstraint =
  | "EU"
  | "ap-northeast-1"
  | "ap-south-1"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "cn-north-1"
  | "eu-central-1"
  | "eu-west-1"
  | "sa-east-1"
  | "us-west-1"
  | "us-west-2";

/**
 * <p>The container for the bucket configuration.</p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 */
export interface CreateBucketConfiguration {
  /**
   * <p>Specifies the Region where the bucket will be created.
   *          If you are creating a bucket on the US East (N. Virginia) Region (us-east-1),
   *          you do not need to specify the location.
   *       </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  LocationConstraint?: BucketLocationConstraint | string;
}

export namespace CreateBucketConfiguration {
  export const filterSensitiveLog = (obj: CreateBucketConfiguration): any => ({
    ...obj,
  });
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
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.</p>
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
   *             <p>This is required by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  OutpostId?: string;
}

export namespace CreateBucketRequest {
  export const filterSensitiveLog = (obj: CreateBucketRequest): any => ({
    ...obj,
  });
}

export interface CreateBucketResult {
  /**
   * <p>The location of the bucket.</p>
   */
  Location?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  BucketArn?: string;
}

export namespace CreateBucketResult {
  export const filterSensitiveLog = (obj: CreateBucketResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the information required to locate a manifest object.</p>
 */
export interface JobManifestLocation {
  /**
   * <p>The Amazon Resource Name (ARN) for a manifest object.</p>
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

export namespace JobManifestLocation {
  export const filterSensitiveLog = (obj: JobManifestLocation): any => ({
    ...obj,
  });
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
 * <p>Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.</p>
 */
export interface JobManifestSpec {
  /**
   * <p>Indicates which of the available formats the specified manifest uses.</p>
   */
  Format: JobManifestFormat | string | undefined;

  /**
   * <p>If the specified manifest object is in the <code>S3BatchOperations_CSV_20180820</code> format, this element describes which columns contain the required data.</p>
   */
  Fields?: (JobManifestFieldName | string)[];
}

export namespace JobManifestSpec {
  export const filterSensitiveLog = (obj: JobManifestSpec): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration information for a job's manifest.</p>
 */
export interface JobManifest {
  /**
   * <p>Describes the format of the specified job's manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.</p>
   */
  Spec: JobManifestSpec | undefined;

  /**
   * <p>Contains the information required to locate the specified job's manifest.</p>
   */
  Location: JobManifestLocation | undefined;
}

export namespace JobManifest {
  export const filterSensitiveLog = (obj: JobManifest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration parameters for a <code>Lambda Invoke</code> operation.</p>
 */
export interface LambdaInvokeOperation {
  /**
   * <p>The Amazon Resource Name (ARN) for the AWS Lambda function that the specified job will invoke for each object in the manifest.</p>
   */
  FunctionArn?: string;
}

export namespace LambdaInvokeOperation {
  export const filterSensitiveLog = (obj: LambdaInvokeOperation): any => ({
    ...obj,
  });
}

export enum S3GlacierJobTier {
  BULK = "BULK",
  STANDARD = "STANDARD",
}

/**
 * <p>Contains the configuration parameters for an Initiate Glacier Restore job.
 *          S3 Batch Operations passes each value through to the underlying POST Object restore API. For
 *          more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">RestoreObject</a>.</p>
 */
export interface S3InitiateRestoreObjectOperation {
  /**
   * <p></p>
   */
  ExpirationInDays?: number;

  /**
   * <p></p>
   */
  GlacierJobTier?: S3GlacierJobTier | string;
}

export namespace S3InitiateRestoreObjectOperation {
  export const filterSensitiveLog = (obj: S3InitiateRestoreObjectOperation): any => ({
    ...obj,
  });
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

export namespace S3Grantee {
  export const filterSensitiveLog = (obj: S3Grantee): any => ({
    ...obj,
  });
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

export namespace S3Grant {
  export const filterSensitiveLog = (obj: S3Grant): any => ({
    ...obj,
  });
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

export namespace S3ObjectOwner {
  export const filterSensitiveLog = (obj: S3ObjectOwner): any => ({
    ...obj,
  });
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

export namespace S3AccessControlList {
  export const filterSensitiveLog = (obj: S3AccessControlList): any => ({
    ...obj,
  });
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

export namespace S3AccessControlPolicy {
  export const filterSensitiveLog = (obj: S3AccessControlPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration parameters for a Set Object ACL operation. S3 Batch Operations passes each value through to the underlying PUT Object acl API.
 *          For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PUT Object acl</a>.</p>
 */
export interface S3SetObjectAclOperation {
  /**
   * <p></p>
   */
  AccessControlPolicy?: S3AccessControlPolicy;
}

export namespace S3SetObjectAclOperation {
  export const filterSensitiveLog = (obj: S3SetObjectAclOperation): any => ({
    ...obj,
  });
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
  UserMetadata?: { [key: string]: string };

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

export namespace S3ObjectMetadata {
  export const filterSensitiveLog = (obj: S3ObjectMetadata): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface S3Tag {
  /**
   * <p></p>
   */
  Key: string | undefined;

  /**
   * <p></p>
   */
  Value: string | undefined;
}

export namespace S3Tag {
  export const filterSensitiveLog = (obj: S3Tag): any => ({
    ...obj,
  });
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
  INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
  ONEZONE_IA = "ONEZONE_IA",
  STANDARD = "STANDARD",
  STANDARD_IA = "STANDARD_IA",
}

/**
 * <p>Contains the configuration parameters for a PUT Copy object operation. S3 Batch Operations passes each value through to the underlying PUT Copy object
 *          API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">PUT Object - Copy</a>.</p>
 */
export interface S3CopyObjectOperation {
  /**
   * <p>Specifies the destination bucket ARN for the batch copy operation.
   *          For example, to copy objects to a bucket named "destinationBucket",
   *          set the TargetResource to "arn:aws:s3:::destinationBucket".</p>
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
   * <p></p>
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
   *          example, to copy objects into a folder named "Folder1" in the destination bucket, set the
   *          TargetKeyPrefix to "Folder1/".</p>
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
   * <p>The date when the applied object retention configuration expires on all objects in
   *          the Batch Operations job.</p>
   */
  ObjectLockRetainUntilDate?: Date;
}

export namespace S3CopyObjectOperation {
  export const filterSensitiveLog = (obj: S3CopyObjectOperation): any => ({
    ...obj,
  });
}

/**
 * <p>Whether S3 Object Lock legal hold will be applied to objects in an S3 Batch Operations
 *          job.</p>
 */
export interface S3ObjectLockLegalHold {
  /**
   * <p>The Object Lock legal hold status to be applied to all objects in the Batch Operations job.</p>
   */
  Status: S3ObjectLockLegalHoldStatus | string | undefined;
}

export namespace S3ObjectLockLegalHold {
  export const filterSensitiveLog = (obj: S3ObjectLockLegalHold): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration for an S3 Object Lock legal hold operation that an
 *          S3 Batch Operations job passes each object through to the underlying
 *             <code>PutObjectLegalHold</code> API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using
 *             S3 Object Lock legal hold with S3 Batch Operations</a> in the
 *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface S3SetObjectLegalHoldOperation {
  /**
   * <p>Contains the Object Lock legal hold status to be applied to all objects in the Batch Operations job.</p>
   */
  LegalHold: S3ObjectLockLegalHold | undefined;
}

export namespace S3SetObjectLegalHoldOperation {
  export const filterSensitiveLog = (obj: S3SetObjectLegalHoldOperation): any => ({
    ...obj,
  });
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
 *             with S3 Batch Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface S3Retention {
  /**
   * <p>The date when the applied Object Lock retention will expire on all objects set by the Batch Operations job.</p>
   */
  RetainUntilDate?: Date;

  /**
   * <p>The Object Lock retention mode to be applied to all objects in the Batch Operations job.</p>
   */
  Mode?: S3ObjectLockRetentionMode | string;
}

export namespace S3Retention {
  export const filterSensitiveLog = (obj: S3Retention): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration parameters for the Object Lock retention action for an
 *          S3 Batch Operations job. Batch Operations passes each value through to the underlying
 *             <code>PutObjectRetention</code> API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using
 *             S3 Object Lock retention with S3 Batch Operations</a> in the
 *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface S3SetObjectRetentionOperation {
  /**
   * <p>Indicates if the action should be applied to objects in the Batch Operations job even if they have Object Lock <code>
   *          GOVERNANCE</code> type in place.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * <p>Contains the Object Lock retention mode to be applied to all objects in the Batch Operations
   *          job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention
   *             with S3 Batch Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Retention: S3Retention | undefined;
}

export namespace S3SetObjectRetentionOperation {
  export const filterSensitiveLog = (obj: S3SetObjectRetentionOperation): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration parameters for a Set Object Tagging operation. S3 Batch Operations passes each value through to the underlying PUT Object tagging API.
 *          For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PUT Object tagging</a>.</p>
 */
export interface S3SetObjectTaggingOperation {
  /**
   * <p></p>
   */
  TagSet?: S3Tag[];
}

export namespace S3SetObjectTaggingOperation {
  export const filterSensitiveLog = (obj: S3SetObjectTaggingOperation): any => ({
    ...obj,
  });
}

/**
 * <p>The operation that you want this job to perform on each object listed in the manifest.
 *          For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the
 *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface JobOperation {
  /**
   * <p>Directs the specified job to invoke an AWS Lambda function on each object in the manifest.</p>
   */
  LambdaInvoke?: LambdaInvokeOperation;

  /**
   * <p>Directs the specified job to run a PUT Copy object call on each object in the manifest.</p>
   */
  S3PutObjectCopy?: S3CopyObjectOperation;

  /**
   * <p>Directs the specified job to run a PUT Object acl call on each object in the manifest.</p>
   */
  S3PutObjectAcl?: S3SetObjectAclOperation;

  /**
   * <p>Directs the specified job to run a PUT Object tagging call on each object in the manifest.</p>
   */
  S3PutObjectTagging?: S3SetObjectTaggingOperation;

  /**
   * <p>Directs the specified job to run an Initiate Glacier Restore call on each object in the manifest.</p>
   */
  S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation;

  /**
   * <p>Contains the configuration for an S3 Object Lock legal hold operation that an
   *          S3 Batch Operations job passes each object through to the underlying
   *             <code>PutObjectLegalHold</code> API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using
   *             S3 Object Lock legal hold with S3 Batch Operations</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation;

  /**
   * <p>Contains the configuration parameters for the Object Lock retention action for an
   *          S3 Batch Operations job. Batch Operations passes each value through to the underlying
   *             <code>PutObjectRetention</code> API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using
   *             S3 Object Lock retention with S3 Batch Operations</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  S3PutObjectRetention?: S3SetObjectRetentionOperation;
}

export namespace JobOperation {
  export const filterSensitiveLog = (obj: JobOperation): any => ({
    ...obj,
  });
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
   * <p>The Amazon Resource Name (ARN) for the bucket where specified job-completion report will be stored.</p>
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
   * <p>Indicates whether the job-completion report will include details of all tasks or only failed tasks.</p>
   */
  ReportScope?: JobReportScope | string;
}

export namespace JobReport {
  export const filterSensitiveLog = (obj: JobReport): any => ({
    ...obj,
  });
}

export interface CreateJobRequest {
  /**
   * <p>The AWS account ID that creates the job.</p>
   */
  AccountId?: string;

  /**
   * <p>Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.</p>
   */
  ConfirmationRequired?: boolean;

  /**
   * <p>The operation that you want this job to perform on each object listed in the manifest.
   *          For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Operation: JobOperation | undefined;

  /**
   * <p>Configuration parameters for the optional job-completion report.</p>
   */
  Report: JobReport | undefined;

  /**
   * <p>An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Configuration parameters for the manifest.</p>
   */
  Manifest: JobManifest | undefined;

  /**
   * <p>A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs.</p>
   */
  Description?: string;

  /**
   * <p>The numerical priority for this job. Higher numbers indicate higher priority.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role
   *          that Batch Operations will use to run this job's operation on each object in the
   *          manifest.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A set of tags to associate with the S3 Batch Operations job. This is an optional parameter. </p>
   */
  Tags?: S3Tag[];
}

export namespace CreateJobRequest {
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj,
  });
}

export interface CreateJobResult {
  /**
   * <p>The ID for this job. Amazon S3 generates this ID automatically and returns it after a
   *          successful <code>Create Job</code> request.</p>
   */
  JobId?: string;
}

export namespace CreateJobResult {
  export const filterSensitiveLog = (obj: CreateJobResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface IdempotencyException extends __SmithyException, $MetadataBearer {
  name: "IdempotencyException";
  $fault: "client";
  Message?: string;
}

export namespace IdempotencyException {
  export const filterSensitiveLog = (obj: IdempotencyException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceException {
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

export interface DeleteAccessPointRequest {
  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the access point you want to delete.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;
}

export namespace DeleteAccessPointRequest {
  export const filterSensitiveLog = (obj: DeleteAccessPointRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccessPointPolicyRequest {
  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the access point whose policy you want to delete.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;
}

export namespace DeleteAccessPointPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteAccessPointPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketRequest {
  /**
   * <p>The account ID that owns the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket being deleted.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketRequest {
  export const filterSensitiveLog = (obj: DeleteBucketRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketLifecycleConfigurationRequest {
  /**
   * <p>The account ID of the lifecycle configuration to delete.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketLifecycleConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketLifecycleConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketPolicyRequest {
  /**
   * <p>The account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteBucketPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketTaggingRequest {
  /**
   * <p>The AWS account ID of the Outposts bucket tag set to be removed.</p>
   */
  AccountId?: string;

  /**
   * <p>The bucket ARN that has the tag set to be removed.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketTaggingRequest {
  export const filterSensitiveLog = (obj: DeleteBucketTaggingRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobTaggingRequest {
  /**
   * <p>The AWS account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID for the S3 Batch Operations job whose tags you want to delete.</p>
   */
  JobId: string | undefined;
}

export namespace DeleteJobTaggingRequest {
  export const filterSensitiveLog = (obj: DeleteJobTaggingRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobTaggingResult {}

export namespace DeleteJobTaggingResult {
  export const filterSensitiveLog = (obj: DeleteJobTaggingResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

export interface DeletePublicAccessBlockRequest {
  /**
   * <p>The account ID for the AWS account whose <code>PublicAccessBlock</code> configuration you want
   *          to remove.</p>
   */
  AccountId?: string;
}

export namespace DeletePublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: DeletePublicAccessBlockRequest): any => ({
    ...obj,
  });
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

export namespace DeleteStorageLensConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteStorageLensConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace DeleteStorageLensConfigurationTaggingRequest {
  export const filterSensitiveLog = (obj: DeleteStorageLensConfigurationTaggingRequest): any => ({
    ...obj,
  });
}

export interface DeleteStorageLensConfigurationTaggingResult {}

export namespace DeleteStorageLensConfigurationTaggingResult {
  export const filterSensitiveLog = (obj: DeleteStorageLensConfigurationTaggingResult): any => ({
    ...obj,
  });
}

export interface DescribeJobRequest {
  /**
   * <p></p>
   */
  AccountId?: string;

  /**
   * <p>The ID for the job whose information you want to retrieve.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeJobRequest {
  export const filterSensitiveLog = (obj: DescribeJobRequest): any => ({
    ...obj,
  });
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

export namespace JobFailure {
  export const filterSensitiveLog = (obj: JobFailure): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the total number of tasks that the specified job has started, the number of tasks that succeeded, and the number of tasks that failed.</p>
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
}

export namespace JobProgressSummary {
  export const filterSensitiveLog = (obj: JobProgressSummary): any => ({
    ...obj,
  });
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
 * <p>A container element for the job configuration and status information returned by a <code>Describe Job</code> request.</p>
 */
export interface JobDescriptor {
  /**
   * <p>The ID for the specified job.</p>
   */
  JobId?: string;

  /**
   * <p>Indicates whether confirmation is required before Amazon S3 begins running the specified job. Confirmation is required only for jobs created through the Amazon S3 console.</p>
   */
  ConfirmationRequired?: boolean;

  /**
   * <p>The description for this job, if one was provided in this job's <code>Create Job</code> request.</p>
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
   * <p>The operation that the specified job is configured to run on the objects listed in the manifest.</p>
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
   * <p>If the specified job failed, this field contains information describing the failure.</p>
   */
  FailureReasons?: JobFailure[];

  /**
   * <p>Contains the configuration information for the job-completion report if you requested one in the <code>Create Job</code> request.</p>
   */
  Report?: JobReport;

  /**
   * <p>A timestamp indicating when this job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp indicating when this job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role
   *          assigned to run the tasks for this job.</p>
   */
  RoleArn?: string;

  /**
   * <p>The timestamp when this job was suspended, if it has been suspended.</p>
   */
  SuspendedDate?: Date;

  /**
   * <p>The reason why the specified job was suspended. A job is only suspended if you create it through the Amazon S3 console. When you create the job, it enters
   *             the <code>Suspended</code> state to await confirmation before running. After you confirm the job, it automatically exits the <code>Suspended</code> state.</p>
   */
  SuspendedCause?: string;
}

export namespace JobDescriptor {
  export const filterSensitiveLog = (obj: JobDescriptor): any => ({
    ...obj,
  });
}

export interface DescribeJobResult {
  /**
   * <p>Contains the configuration parameters and status for the job specified in the <code>Describe Job</code> request.</p>
   */
  Job?: JobDescriptor;
}

export namespace DescribeJobResult {
  export const filterSensitiveLog = (obj: DescribeJobResult): any => ({
    ...obj,
  });
}

export interface GetAccessPointRequest {
  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the access point whose configuration information you want to retrieve.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;
}

export namespace GetAccessPointRequest {
  export const filterSensitiveLog = (obj: GetAccessPointRequest): any => ({
    ...obj,
  });
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
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account.
   *          You can enable the configuration options in any combination. For more information about
   *          when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer
   *          Guide</i>.</p>
   *          <p>This is not supported for Amazon S3 on Outposts.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;

  /**
   * <p>The date and time when the specified access point was created.</p>
   */
  CreationDate?: Date;
}

export namespace GetAccessPointResult {
  export const filterSensitiveLog = (obj: GetAccessPointResult): any => ({
    ...obj,
  });
}

export interface GetAccessPointPolicyRequest {
  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the access point whose policy you want to retrieve.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;
}

export namespace GetAccessPointPolicyRequest {
  export const filterSensitiveLog = (obj: GetAccessPointPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetAccessPointPolicyResult {
  /**
   * <p>The access point policy associated with the specified access point.</p>
   */
  Policy?: string;
}

export namespace GetAccessPointPolicyResult {
  export const filterSensitiveLog = (obj: GetAccessPointPolicyResult): any => ({
    ...obj,
  });
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

export namespace GetAccessPointPolicyStatusRequest {
  export const filterSensitiveLog = (obj: GetAccessPointPolicyStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the
 * 	 <i>Amazon Simple Storage Service Developer Guide</i>.
 *       </p>
 */
export interface PolicyStatus {
  /**
   * <p></p>
   */
  IsPublic?: boolean;
}

export namespace PolicyStatus {
  export const filterSensitiveLog = (obj: PolicyStatus): any => ({
    ...obj,
  });
}

export interface GetAccessPointPolicyStatusResult {
  /**
   * <p>Indicates the current policy status of the specified access point.</p>
   */
  PolicyStatus?: PolicyStatus;
}

export namespace GetAccessPointPolicyStatusResult {
  export const filterSensitiveLog = (obj: GetAccessPointPolicyStatusResult): any => ({
    ...obj,
  });
}

export interface GetBucketRequest {
  /**
   * <p>The AWS account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketRequest {
  export const filterSensitiveLog = (obj: GetBucketRequest): any => ({
    ...obj,
  });
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

export namespace GetBucketResult {
  export const filterSensitiveLog = (obj: GetBucketResult): any => ({
    ...obj,
  });
}

export interface GetBucketLifecycleConfigurationRequest {
  /**
   * <p>The AWS account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketLifecycleConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketLifecycleConfigurationRequest): any => ({
    ...obj,
  });
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
   * <p>Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.</p>
   */
  Days?: number;

  /**
   * <p>Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set
   *          to true, the delete marker will be expired. If set to false, the policy takes no action.
   *          This cannot be specified with Days or Date in a Lifecycle Expiration Policy.</p>
   */
  ExpiredObjectDeleteMarker?: boolean;
}

export namespace LifecycleExpiration {
  export const filterSensitiveLog = (obj: LifecycleExpiration): any => ({
    ...obj,
  });
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
   * <p>All of these tags must exist in the object's tag set in order for the rule to apply.</p>
   */
  Tags?: S3Tag[];
}

export namespace LifecycleRuleAndOperator {
  export const filterSensitiveLog = (obj: LifecycleRuleAndOperator): any => ({
    ...obj,
  });
}

/**
 * <p>The container for the filter of the lifecycle rule.</p>
 */
export interface LifecycleRuleFilter {
  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Prefix?: string;

  /**
   * <p></p>
   */
  Tag?: S3Tag;

  /**
   * <p>The container for the <code>AND</code> condition for the lifecycle rule.</p>
   */
  And?: LifecycleRuleAndOperator;
}

export namespace LifecycleRuleFilter {
  export const filterSensitiveLog = (obj: LifecycleRuleFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The container of the noncurrent version expiration.</p>
 */
export interface NoncurrentVersionExpiration {
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How
   *             Amazon S3 Calculates When an Object Became Noncurrent</a> in the <i>Amazon
   *                Simple Storage Service Developer Guide</i>.</p>
   */
  NoncurrentDays?: number;
}

export namespace NoncurrentVersionExpiration {
  export const filterSensitiveLog = (obj: NoncurrentVersionExpiration): any => ({
    ...obj,
  });
}

export type TransitionStorageClass = "DEEP_ARCHIVE" | "GLACIER" | "INTELLIGENT_TIERING" | "ONEZONE_IA" | "STANDARD_IA";

/**
 * <p>The container for the noncurrent version transition.</p>
 */
export interface NoncurrentVersionTransition {
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action.
   *          For information about the noncurrent days calculations, see
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">
   *             How Amazon S3 Calculates How Long an Object Has Been Noncurrent</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  NoncurrentDays?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: TransitionStorageClass | string;
}

export namespace NoncurrentVersionTransition {
  export const filterSensitiveLog = (obj: NoncurrentVersionTransition): any => ({
    ...obj,
  });
}

export type ExpirationStatus = "Disabled" | "Enabled";

/**
 * <p>Specifies when an object transitions to a specified storage class. For more information
 *          about Amazon S3 Lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html">
 *             Transitioning objects using Amazon S3 Lifecycle</a> in the
 *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface Transition {
  /**
   * <p>Indicates when objects are transitioned to the specified storage class.
   *          The date value must be in ISO 8601 format. The time is always midnight UTC.</p>
   */
  Date?: Date;

  /**
   * <p>Indicates the number of days after creation when objects are transitioned to the specified storage class.
   *          The value must be a positive integer.</p>
   */
  Days?: number;

  /**
   * <p>The storage class to which you want the object to transition.</p>
   */
  StorageClass?: TransitionStorageClass | string;
}

export namespace Transition {
  export const filterSensitiveLog = (obj: Transition): any => ({
    ...obj,
  });
}

/**
 * <p>The container for the Outposts bucket lifecycle rule.</p>
 */
export interface LifecycleRule {
  /**
   * <p>Specifies the expiration for the lifecycle of the object in the form of date, days and, whether the object
   *          has a delete marker.</p>
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
   * <p>If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being applied.</p>
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
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration;

  /**
   * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3
   *          waits before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
   *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
}

export namespace LifecycleRule {
  export const filterSensitiveLog = (obj: LifecycleRule): any => ({
    ...obj,
  });
}

export interface GetBucketLifecycleConfigurationResult {
  /**
   * <p>Container for the lifecycle rule of the Outposts bucket.</p>
   */
  Rules?: LifecycleRule[];
}

export namespace GetBucketLifecycleConfigurationResult {
  export const filterSensitiveLog = (obj: GetBucketLifecycleConfigurationResult): any => ({
    ...obj,
  });
}

export interface GetBucketPolicyRequest {
  /**
   * <p>The AWS account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketPolicyRequest {
  export const filterSensitiveLog = (obj: GetBucketPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetBucketPolicyResult {
  /**
   * <p>The policy of the Outposts bucket.</p>
   */
  Policy?: string;
}

export namespace GetBucketPolicyResult {
  export const filterSensitiveLog = (obj: GetBucketPolicyResult): any => ({
    ...obj,
  });
}

export interface GetBucketTaggingRequest {
  /**
   * <p>The AWS account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketTaggingRequest {
  export const filterSensitiveLog = (obj: GetBucketTaggingRequest): any => ({
    ...obj,
  });
}

export interface GetBucketTaggingResult {
  /**
   * <p>The tags set of the Outposts bucket.</p>
   */
  TagSet: S3Tag[] | undefined;
}

export namespace GetBucketTaggingResult {
  export const filterSensitiveLog = (obj: GetBucketTaggingResult): any => ({
    ...obj,
  });
}

export interface GetJobTaggingRequest {
  /**
   * <p>The AWS account ID associated with the S3 Batch Operations job.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID for the S3 Batch Operations job whose tags you want to retrieve.</p>
   */
  JobId: string | undefined;
}

export namespace GetJobTaggingRequest {
  export const filterSensitiveLog = (obj: GetJobTaggingRequest): any => ({
    ...obj,
  });
}

export interface GetJobTaggingResult {
  /**
   * <p>The set of tags associated with the S3 Batch Operations job.</p>
   */
  Tags?: S3Tag[];
}

export namespace GetJobTaggingResult {
  export const filterSensitiveLog = (obj: GetJobTaggingResult): any => ({
    ...obj,
  });
}

export interface GetPublicAccessBlockOutput {
  /**
   * <p>The <code>PublicAccessBlock</code> configuration currently in effect for this AWS
   *          account.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}

export namespace GetPublicAccessBlockOutput {
  export const filterSensitiveLog = (obj: GetPublicAccessBlockOutput): any => ({
    ...obj,
  });
}

export interface GetPublicAccessBlockRequest {
  /**
   * <p>The account ID for the AWS account whose <code>PublicAccessBlock</code> configuration you want
   *          to retrieve.</p>
   */
  AccountId?: string;
}

export namespace GetPublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: GetPublicAccessBlockRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon S3 throws this exception if you make a <code>GetPublicAccessBlock</code> request
 *       against an account that doesn't have a <code>PublicAccessBlockConfiguration</code> set.</p>
 */
export interface NoSuchPublicAccessBlockConfiguration extends __SmithyException, $MetadataBearer {
  name: "NoSuchPublicAccessBlockConfiguration";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchPublicAccessBlockConfiguration {
  export const filterSensitiveLog = (obj: NoSuchPublicAccessBlockConfiguration): any => ({
    ...obj,
  });
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

export namespace GetStorageLensConfigurationRequest {
  export const filterSensitiveLog = (obj: GetStorageLensConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The AWS organization for your S3 Storage Lens.</p>
 */
export interface StorageLensAwsOrg {
  /**
   * <p>A container for the Amazon Resource Name (ARN) of the AWS organization.
   *          This property is read-only and follows the following format:
   *          <code> arn:aws:organizations:<i>us-east-1</i>:<i>example-account-id</i>:organization/<i>o-ex2l495dck</i>
   *             </code>
   *          </p>
   */
  Arn: string | undefined;
}

export namespace StorageLensAwsOrg {
  export const filterSensitiveLog = (obj: StorageLensAwsOrg): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SSEKMS {
  /**
   * <p>A container for the ARN of the SSE-KMS encryption.
   *          This property is read-only and follows the following format:
   *          <code> arn:aws:kms:<i>us-east-1</i>:<i>example-account-id</i>:key/<i>example-9a73-4afc-8d29-8f5900cef44e</i>
   *             </code>
   *          </p>
   */
  KeyId: string | undefined;
}

export namespace SSEKMS {
  export const filterSensitiveLog = (obj: SSEKMS): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SSES3 {}

export namespace SSES3 {
  export const filterSensitiveLog = (obj: SSES3): any => ({
    ...obj,
  });
}

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

export namespace StorageLensDataExportEncryption {
  export const filterSensitiveLog = (obj: StorageLensDataExportEncryption): any => ({
    ...obj,
  });
}

export type Format = "CSV" | "Parquet";

export type OutputSchemaVersion = "V_1";

/**
 * <p>A container for the bucket where the Amazon S3 Storage Lens metrics export files are located.</p>
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
   * <p>The Amazon Resource Name (ARN) of the bucket.
   *          This property is read-only and follows the following format:
   *          <code> arn:aws:s3:<i>us-east-1</i>:<i>example-account-id</i>:bucket/<i>your-destination-bucket-name</i>
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

export namespace S3BucketDestination {
  export const filterSensitiveLog = (obj: S3BucketDestination): any => ({
    ...obj,
  });
}

/**
 * <p>A container to specify the properties of your S3 Storage Lens metrics export, including the
 *          destination, schema, and format.</p>
 */
export interface StorageLensDataExport {
  /**
   * <p>A container for the bucket where the S3 Storage Lens metrics export will be located.</p>
   */
  S3BucketDestination: S3BucketDestination | undefined;
}

export namespace StorageLensDataExport {
  export const filterSensitiveLog = (obj: StorageLensDataExport): any => ({
    ...obj,
  });
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

export namespace _Exclude {
  export const filterSensitiveLog = (obj: _Exclude): any => ({
    ...obj,
  });
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

export namespace Include {
  export const filterSensitiveLog = (obj: Include): any => ({
    ...obj,
  });
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
   * <p>A container to specify the properties of your S3 Storage Lens metrics export including, the destination, schema and
   *          format.</p>
   */
  DataExport?: StorageLensDataExport;

  /**
   * <p>A container for whether the S3 Storage Lens configuration is enabled.</p>
   */
  IsEnabled: boolean | undefined;

  /**
   * <p>A container for the AWS organization for this S3 Storage Lens configuration.</p>
   */
  AwsOrg?: StorageLensAwsOrg;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Storage Lens configuration. This property is
   *          read-only and follows the following format:
   *          <code> arn:aws:s3:<i>us-east-1</i>:<i>example-account-id</i>:storage-lens/<i>your-dashboard-name</i>
   *             </code>
   *          </p>
   */
  StorageLensArn?: string;
}

export namespace StorageLensConfiguration {
  export const filterSensitiveLog = (obj: StorageLensConfiguration): any => ({
    ...obj,
  });
}

export interface GetStorageLensConfigurationResult {
  /**
   * <p>The S3 Storage Lens configuration requested.</p>
   */
  StorageLensConfiguration?: StorageLensConfiguration;
}

export namespace GetStorageLensConfigurationResult {
  export const filterSensitiveLog = (obj: GetStorageLensConfigurationResult): any => ({
    ...obj,
  });
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

export namespace GetStorageLensConfigurationTaggingRequest {
  export const filterSensitiveLog = (obj: GetStorageLensConfigurationTaggingRequest): any => ({
    ...obj,
  });
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

export namespace StorageLensTag {
  export const filterSensitiveLog = (obj: StorageLensTag): any => ({
    ...obj,
  });
}

export interface GetStorageLensConfigurationTaggingResult {
  /**
   * <p>The tags of S3 Storage Lens configuration requested.</p>
   */
  Tags?: StorageLensTag[];
}

export namespace GetStorageLensConfigurationTaggingResult {
  export const filterSensitiveLog = (obj: GetStorageLensConfigurationTaggingResult): any => ({
    ...obj,
  });
}

export interface ListAccessPointsRequest {
  /**
   * <p>The AWS account ID for owner of the bucket whose access points you want to list.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the bucket whose associated access points you want to list.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket?: string;

  /**
   * <p>A continuation token. If a previous call to <code>ListAccessPoints</code> returned a continuation token in the <code>NextToken</code> field, then providing that value here causes Amazon S3 to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of access points that you want to include in the list. If the specified
   *          bucket has more than this number of access points, then the response will include a
   *          continuation token in the <code>NextToken</code> field that you can use to retrieve the
   *          next page of access points.</p>
   */
  MaxResults?: number;
}

export namespace ListAccessPointsRequest {
  export const filterSensitiveLog = (obj: ListAccessPointsRequest): any => ({
    ...obj,
  });
}

export interface ListAccessPointsResult {
  /**
   * <p>Contains identification and configuration information for one or more access points
   *          associated with the specified bucket.</p>
   */
  AccessPointList?: AccessPoint[];

  /**
   * <p>If the specified bucket has more access points than can be returned in one call to this
   *          API, this field contains a continuation token that you can provide in subsequent calls to
   *          this API to retrieve additional access points.</p>
   */
  NextToken?: string;
}

export namespace ListAccessPointsResult {
  export const filterSensitiveLog = (obj: ListAccessPointsResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

export interface ListJobsRequest {
  /**
   * <p></p>
   */
  AccountId?: string;

  /**
   * <p>The <code>List Jobs</code> request returns jobs that match the statuses listed in this element.</p>
   */
  JobStatuses?: (JobStatus | string)[];

  /**
   * <p>A pagination token to request the next page of results. Use the token that Amazon S3 returned in the <code>NextToken</code> element of the <code>ListJobsResult</code> from the previous <code>List Jobs</code> request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs that Amazon S3 will include in the <code>List Jobs</code> response. If there are more jobs than this number, the response will include a pagination token in the <code>NextToken</code> field to enable you to retrieve the next page of results.</p>
   */
  MaxResults?: number;
}

export namespace ListJobsRequest {
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj,
  });
}

export enum OperationName {
  LambdaInvoke = "LambdaInvoke",
  S3InitiateRestoreObject = "S3InitiateRestoreObject",
  S3PutObjectAcl = "S3PutObjectAcl",
  S3PutObjectCopy = "S3PutObjectCopy",
  S3PutObjectLegalHold = "S3PutObjectLegalHold",
  S3PutObjectRetention = "S3PutObjectRetention",
  S3PutObjectTagging = "S3PutObjectTagging",
}

/**
 * <p>Contains the configuration and status information for a single job retrieved as part of a job list.</p>
 */
export interface JobListDescriptor {
  /**
   * <p>The ID for the specified job.</p>
   */
  JobId?: string;

  /**
   * <p>The user-specified description that was included in the specified job's <code>Create Job</code> request.</p>
   */
  Description?: string;

  /**
   * <p>The operation that the specified job is configured to run on each object listed in the manifest.</p>
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
   * <p>A timestamp indicating when the specified job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date;

  /**
   * <p>Describes the total number of tasks that the specified job has run, the number of tasks
   *          that succeeded, and the number of tasks that failed.</p>
   */
  ProgressSummary?: JobProgressSummary;
}

export namespace JobListDescriptor {
  export const filterSensitiveLog = (obj: JobListDescriptor): any => ({
    ...obj,
  });
}

export interface ListJobsResult {
  /**
   * <p>If the <code>List Jobs</code> request produced more than the maximum number of results, you can pass this value into a subsequent <code>List Jobs</code> request in order to retrieve
   *             the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of current jobs and jobs that have ended within the last 30 days.</p>
   */
  Jobs?: JobListDescriptor[];
}

export namespace ListJobsResult {
  export const filterSensitiveLog = (obj: ListJobsResult): any => ({
    ...obj,
  });
}

export interface ListRegionalBucketsRequest {
  /**
   * <p>The AWS account ID of the Outposts bucket.</p>
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
   * <p>The ID of the AWS Outposts.</p>
   *          <note>
   *             <p>This is required by Amazon S3 on Outposts buckets.</p>
   *          </note>
   */
  OutpostId?: string;
}

export namespace ListRegionalBucketsRequest {
  export const filterSensitiveLog = (obj: ListRegionalBucketsRequest): any => ({
    ...obj,
  });
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
   * <p>The AWS Outposts ID of the regional bucket.</p>
   */
  OutpostId?: string;
}

export namespace RegionalBucket {
  export const filterSensitiveLog = (obj: RegionalBucket): any => ({
    ...obj,
  });
}

export interface ListRegionalBucketsResult {
  /**
   * <p></p>
   */
  RegionalBucketList?: RegionalBucket[];

  /**
   * <p>
   *             <code>NextToken</code> is sent when <code>isTruncated</code> is true, which means
   *       there are more buckets that can be listed. The next list requests to Amazon S3
   *       can be continued with this <code>NextToken</code>.
   *       <code>NextToken</code> is obfuscated and is not a real key.</p>
   */
  NextToken?: string;
}

export namespace ListRegionalBucketsResult {
  export const filterSensitiveLog = (obj: ListRegionalBucketsResult): any => ({
    ...obj,
  });
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

export namespace ListStorageLensConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListStorageLensConfigurationsRequest): any => ({
    ...obj,
  });
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
   * <p>A container for whether the S3 Storage Lens configuration is enabled. This property is required.</p>
   */
  IsEnabled?: boolean;
}

export namespace ListStorageLensConfigurationEntry {
  export const filterSensitiveLog = (obj: ListStorageLensConfigurationEntry): any => ({
    ...obj,
  });
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

export namespace ListStorageLensConfigurationsResult {
  export const filterSensitiveLog = (obj: ListStorageLensConfigurationsResult): any => ({
    ...obj,
  });
}

export interface PutAccessPointPolicyRequest {
  /**
   * <p>The AWS account ID for owner of the bucket associated with the specified access point.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the access point that you want to associate with the specified policy.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   */
  Name: string | undefined;

  /**
   * <p>The policy that you want to apply to the specified access point. For more information about access point policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">Managing data access with Amazon S3 Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Policy: string | undefined;
}

export namespace PutAccessPointPolicyRequest {
  export const filterSensitiveLog = (obj: PutAccessPointPolicyRequest): any => ({
    ...obj,
  });
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

export namespace LifecycleConfiguration {
  export const filterSensitiveLog = (obj: LifecycleConfiguration): any => ({
    ...obj,
  });
}

export interface PutBucketLifecycleConfigurationRequest {
  /**
   * <p>The AWS account ID of the Outposts bucket.</p>
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

export namespace PutBucketLifecycleConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketLifecycleConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutBucketPolicyRequest {
  /**
   * <p>The AWS account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;

  /**
   * <p>Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.</p>
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

export namespace PutBucketPolicyRequest {
  export const filterSensitiveLog = (obj: PutBucketPolicyRequest): any => ({
    ...obj,
  });
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

export namespace Tagging {
  export const filterSensitiveLog = (obj: Tagging): any => ({
    ...obj,
  });
}

export interface PutBucketTaggingRequest {
  /**
   * <p>The AWS account ID of the Outposts bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   */
  Bucket: string | undefined;

  /**
   * <p></p>
   */
  Tagging: Tagging | undefined;
}

export namespace PutBucketTaggingRequest {
  export const filterSensitiveLog = (obj: PutBucketTaggingRequest): any => ({
    ...obj,
  });
}

export interface PutJobTaggingRequest {
  /**
   * <p>The AWS account ID associated with the S3 Batch Operations job.</p>
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

export namespace PutJobTaggingRequest {
  export const filterSensitiveLog = (obj: PutJobTaggingRequest): any => ({
    ...obj,
  });
}

export interface PutJobTaggingResult {}

export namespace PutJobTaggingResult {
  export const filterSensitiveLog = (obj: PutJobTaggingResult): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon S3 throws this exception if you have too many tags in your tag set.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

export interface PutPublicAccessBlockRequest {
  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to the specified AWS
   *          account.</p>
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The account ID for the AWS account whose <code>PublicAccessBlock</code> configuration you want
   *          to set.</p>
   */
  AccountId?: string;
}

export namespace PutPublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: PutPublicAccessBlockRequest): any => ({
    ...obj,
  });
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

export namespace PutStorageLensConfigurationRequest {
  export const filterSensitiveLog = (obj: PutStorageLensConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace PutStorageLensConfigurationTaggingRequest {
  export const filterSensitiveLog = (obj: PutStorageLensConfigurationTaggingRequest): any => ({
    ...obj,
  });
}

export interface PutStorageLensConfigurationTaggingResult {}

export namespace PutStorageLensConfigurationTaggingResult {
  export const filterSensitiveLog = (obj: PutStorageLensConfigurationTaggingResult): any => ({
    ...obj,
  });
}

export interface UpdateJobPriorityRequest {
  /**
   * <p></p>
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

export namespace UpdateJobPriorityRequest {
  export const filterSensitiveLog = (obj: UpdateJobPriorityRequest): any => ({
    ...obj,
  });
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

export namespace UpdateJobPriorityResult {
  export const filterSensitiveLog = (obj: UpdateJobPriorityResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface JobStatusException extends __SmithyException, $MetadataBearer {
  name: "JobStatusException";
  $fault: "client";
  Message?: string;
}

export namespace JobStatusException {
  export const filterSensitiveLog = (obj: JobStatusException): any => ({
    ...obj,
  });
}

export enum RequestedJobStatus {
  Cancelled = "Cancelled",
  Ready = "Ready",
}

export interface UpdateJobStatusRequest {
  /**
   * <p></p>
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
   * <p>A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length.</p>
   */
  StatusUpdateReason?: string;
}

export namespace UpdateJobStatusRequest {
  export const filterSensitiveLog = (obj: UpdateJobStatusRequest): any => ({
    ...obj,
  });
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

export namespace UpdateJobStatusResult {
  export const filterSensitiveLog = (obj: UpdateJobStatusResult): any => ({
    ...obj,
  });
}
