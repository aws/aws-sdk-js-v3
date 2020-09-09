import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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
   * <p>The virtual private cloud (VPC) configuration for this access point, if one exists.</p>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * <p>The name of the bucket associated with this access point.</p>
   */
  Bucket: string | undefined;

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
   * <p>The name of this access point.</p>
   */
  Name: string | undefined;
}

export namespace AccessPoint {
  export const filterSensitiveLog = (obj: AccessPoint): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
 *       bucket. You can enable the configuration options in any combination. For more information
 *       about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide.</p>
 */
export interface PublicAccessBlockConfiguration {
  /**
   * <p>Specifies whether Amazon S3 should ignore public ACLs for buckets in this account.
   *       Setting this element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain.
   *    </p>
   *          <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't
   *          prevent new public ACLs from being set.</p>
   */
  IgnorePublicAcls?: boolean;

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
   */
  BlockPublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should block public bucket policies for buckets in this account.
   *       Setting this element to <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket
   *       policy if the specified bucket policy allows public access. </p>
   *          <p>Enabling this setting doesn't affect existing bucket policies.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should restrict public bucket policies for buckets in this
   *       account. Setting this element to <code>TRUE</code> restricts access to buckets with public
   *       policies to only AWS services and authorized users within this account.</p>
   *          <p>Enabling this setting doesn't affect previously stored bucket policies, except that public
   *          and cross-account access within any public bucket policy, including non-public delegation to
   *          specific accounts, is blocked.</p>
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
   * <p>The name of the bucket that you want to associate this access point with.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name you want to assign to this access point.</p>
   */
  Name: string | undefined;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *       bucket. You can enable the configuration options in any combination. For more information
   *       about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;

  /**
   * <p>The AWS account ID for the owner of the bucket for which you want to create an access point.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>If you include this field, Amazon S3 restricts access to this access point to requests from the
   *          specified virtual private cloud (VPC).</p>
   */
  VpcConfiguration?: VpcConfiguration;
}

export namespace CreateAccessPointRequest {
  export const filterSensitiveLog = (obj: CreateAccessPointRequest): any => ({
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
   * <p>The ETag for the specified manifest object.</p>
   */
  ETag: string | undefined;

  /**
   * <p>The optional version ID to identify a specific version of the manifest object.</p>
   */
  ObjectVersionId?: string;
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
   * <p>Contains the information required to locate the specified job's manifest.</p>
   */
  Location: JobManifestLocation | undefined;

  /**
   * <p>Describes the format of the specified job's manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.</p>
   */
  Spec: JobManifestSpec | undefined;
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
 * <p>Contains the configuration parameters for an Initiate Glacier Restore job. Amazon S3 Batch Operations passes each value through to the underlying POST Object restore API.
 *          For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">Restoring Archives</a>.</p>
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
  Identifier?: string;

  /**
   * <p></p>
   */
  DisplayName?: string;

  /**
   * <p></p>
   */
  TypeIdentifier?: S3GranteeTypeIdentifier | string;
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
  Permission?: S3Permission | string;

  /**
   * <p></p>
   */
  Grantee?: S3Grantee;
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
  Grants?: S3Grant[];

  /**
   * <p></p>
   */
  Owner: S3ObjectOwner | undefined;
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
  CannedAccessControlList?: S3CannedAccessControlList | string;

  /**
   * <p></p>
   */
  AccessControlList?: S3AccessControlList;
}

export namespace S3AccessControlPolicy {
  export const filterSensitiveLog = (obj: S3AccessControlPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration parameters for a Set Object ACL operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object acl API.
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
  ContentLanguage?: string;

  /**
   * <p></p>
   */
  ContentEncoding?: string;

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
  SSEAlgorithm?: S3SSEAlgorithm | string;

  /**
   * <p></p>
   */
  ContentMD5?: string;

  /**
   * <p></p>
   */
  RequesterCharged?: boolean;

  /**
   * <p></p>
   */
  CacheControl?: string;

  /**
   * <p></p>
   */
  HttpExpiresDate?: Date;

  /**
   * <p></p>
   */
  ContentDisposition?: string;

  /**
   * <p></p>
   */
  ContentType?: string;
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
  Value: string | undefined;

  /**
   * <p></p>
   */
  Key: string | undefined;
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
 * <p>Contains the configuration parameters for a PUT Copy object operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Copy object
 *          API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">PUT Object - Copy</a>.</p>
 */
export interface S3CopyObjectOperation {
  /**
   * <p></p>
   */
  RedirectLocation?: string;

  /**
   * <p>The Legal Hold status to be applied to all objects in the Batch Operations job.</p>
   */
  ObjectLockLegalHoldStatus?: S3ObjectLockLegalHoldStatus | string;

  /**
   * <p></p>
   */
  SSEAwsKmsKeyId?: string;

  /**
   * <p>The Retention mode to be applied to all objects in the Batch Operations job.</p>
   */
  ObjectLockMode?: S3ObjectLockMode | string;

  /**
   * <p></p>
   */
  ModifiedSinceConstraint?: Date;

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
  CannedAccessControlList?: S3CannedAccessControlList | string;

  /**
   * <p></p>
   */
  RequesterPays?: boolean;

  /**
   * <p></p>
   */
  NewObjectTagging?: S3Tag[];

  /**
   * <p></p>
   */
  UnModifiedSinceConstraint?: Date;

  /**
   * <p></p>
   */
  StorageClass?: S3StorageClass | string;

  /**
   * <p></p>
   */
  NewObjectMetadata?: S3ObjectMetadata;

  /**
   * <p></p>
   */
  TargetKeyPrefix?: string;

  /**
   * <p>The date when the applied Object Retention configuration will expire on all objects in the Batch Operations job.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p></p>
   */
  TargetResource?: string;
}

export namespace S3CopyObjectOperation {
  export const filterSensitiveLog = (obj: S3CopyObjectOperation): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface S3ObjectLockLegalHold {
  /**
   * <p>The Legal Hold status to be applied to all objects in the Batch Operations job.</p>
   */
  Status: S3ObjectLockLegalHoldStatus | string | undefined;
}

export namespace S3ObjectLockLegalHold {
  export const filterSensitiveLog = (obj: S3ObjectLockLegalHold): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration parameters for a Set Object Legal Hold operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object Legal Hold API.
 *      For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.htmll#object-lock-legal-holds">PUT Object Legal Hold</a>.</p>
 */
export interface S3SetObjectLegalHoldOperation {
  /**
   * <p>The Legal Hold contains the status to be applied to all objects in the Batch Operations job.</p>
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
 * <p></p>
 */
export interface S3Retention {
  /**
   * <p>The date when the applied Object Retention will expire on all objects in the Batch Operations job.</p>
   */
  RetainUntilDate?: Date;

  /**
   * <p>The Retention mode to be applied to all objects in the Batch Operations job.</p>
   */
  Mode?: S3ObjectLockRetentionMode | string;
}

export namespace S3Retention {
  export const filterSensitiveLog = (obj: S3Retention): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration parameters for a Set Object Retention operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object Retention API.
 *      For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes">PUT Object Retention</a>.</p>
 */
export interface S3SetObjectRetentionOperation {
  /**
   * <p>Amazon S3 object lock Retention contains the retention mode to be applied to all objects in the Batch Operations job.</p>
   */
  Retention: S3Retention | undefined;

  /**
   * <p>Indicates if the operation should be applied to objects in the Batch Operations job even if they have Governance-type Object Lock in place.</p>
   */
  BypassGovernanceRetention?: boolean;
}

export namespace S3SetObjectRetentionOperation {
  export const filterSensitiveLog = (obj: S3SetObjectRetentionOperation): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration parameters for a Set Object Tagging operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object tagging API.
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
 * <p>The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Available Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface JobOperation {
  /**
   * <p>Contains the configuration parameters for a Set Object Legal Hold operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object Legal Hold API.
   *      For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.htmll#object-lock-legal-holds">PUT Object Legal Hold</a>.</p>
   */
  S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation;

  /**
   * <p>Directs the specified job to execute an Initiate Glacier Restore call on each object in the manifest.</p>
   */
  S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation;

  /**
   * <p>Directs the specified job to execute a PUT Object tagging call on each object in the manifest.</p>
   */
  S3PutObjectTagging?: S3SetObjectTaggingOperation;

  /**
   * <p>Directs the specified job to invoke an AWS Lambda function on each object in the manifest.</p>
   */
  LambdaInvoke?: LambdaInvokeOperation;

  /**
   * <p>Contains the configuration parameters for a Set Object Retention operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object Retention API.
   *      For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes">PUT Object Retention</a>.</p>
   */
  S3PutObjectRetention?: S3SetObjectRetentionOperation;

  /**
   * <p>Directs the specified job to execute a PUT Copy object call on each object in the manifest.</p>
   */
  S3PutObjectCopy?: S3CopyObjectOperation;

  /**
   * <p>Directs the specified job to execute a PUT Object acl call on each object in the manifest.</p>
   */
  S3PutObjectAcl?: S3SetObjectAclOperation;
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
   * <p>An optional prefix to describe where in the specified bucket the job-completion report will be stored. Amazon S3 will store the job-completion report at <prefix>/job-<job-id>/report.json.</p>
   */
  Prefix?: string;

  /**
   * <p>Indicates whether the job-completion report will include details of all tasks or only failed tasks.</p>
   */
  ReportScope?: JobReportScope | string;

  /**
   * <p>Indicates whether the specified job will generate a job-completion report.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the bucket where specified job-completion report will be stored.</p>
   */
  Bucket?: string;

  /**
   * <p>The format of the specified job-completion report.</p>
   */
  Format?: JobReportFormat | string;
}

export namespace JobReport {
  export const filterSensitiveLog = (obj: JobReport): any => ({
    ...obj,
  });
}

export interface CreateJobRequest {
  /**
   * <p>A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs.</p>
   */
  Description?: string;

  /**
   * <p></p>
   */
  AccountId: string | undefined;

  /**
   * <p>Configuration parameters for the optional job-completion report.</p>
   */
  Report: JobReport | undefined;

  /**
   * <p>The numerical priority for this job. Higher numbers indicate higher priority.</p>
   */
  Priority: number | undefined;

  /**
   * <p>An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.</p>
   */
  ConfirmationRequired?: boolean;

  /**
   * <p>The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Available Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Operation: JobOperation | undefined;

  /**
   * <p>Configuration parameters for the manifest.</p>
   */
  Manifest: JobManifest | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role
   *          that Batch Operations will use to execute this job's operation on each object in the
   *          manifest.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A set of tags to associate with the Amazon S3 Batch Operations job. This is an optional parameter. </p>
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
  AccountId: string | undefined;

  /**
   * <p>The name of the access point you want to delete.</p>
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
  AccountId: string | undefined;

  /**
   * <p>The name of the access point whose policy you want to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteAccessPointPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteAccessPointPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobTaggingRequest {
  /**
   * <p>The ID for the Amazon S3 Batch Operations job whose tags you want to delete.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The AWS account ID associated with the Amazon S3 Batch Operations job.</p>
   */
  AccountId: string | undefined;
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
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code>
   *       configuration you want to remove.</p>
   */
  AccountId: string | undefined;
}

export namespace DeletePublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: DeletePublicAccessBlockRequest): any => ({
    ...obj,
  });
}

export interface DescribeJobRequest {
  /**
   * <p>The ID for the job whose information you want to retrieve.</p>
   */
  JobId: string | undefined;

  /**
   * <p></p>
   */
  AccountId: string | undefined;
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
   * <p>The failure reason, if any, for the specified job.</p>
   */
  FailureReason?: string;

  /**
   * <p>The failure code, if any, for the specified job.</p>
   */
  FailureCode?: string;
}

export namespace JobFailure {
  export const filterSensitiveLog = (obj: JobFailure): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed.</p>
 */
export interface JobProgressSummary {
  /**
   * <p></p>
   */
  NumberOfTasksSucceeded?: number;

  /**
   * <p></p>
   */
  TotalNumberOfTasks?: number;

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
   * <p>The configuration information for the specified job's manifest object.</p>
   */
  Manifest?: JobManifest;

  /**
   * <p>The Amazon Resource Name (ARN) for this job.</p>
   */
  JobArn?: string;

  /**
   * <p>The ID for the specified job.</p>
   */
  JobId?: string;

  /**
   * <p>The timestamp when this job was suspended, if it has been suspended.</p>
   */
  SuspendedDate?: Date;

  /**
   * <p>If the specified job failed, this field contains information describing the failure.</p>
   */
  FailureReasons?: JobFailure[];

  /**
   * <p>The Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role
   *          assigned to execute the tasks for this job.</p>
   */
  RoleArn?: string;

  /**
   * <p>The reason why the specified job was suspended. A job is only suspended if you create it through the Amazon S3 console. When you create the job, it enters
   *             the <code>Suspended</code> state to await confirmation before running. After you confirm the job, it automatically exits the <code>Suspended</code> state.</p>
   */
  SuspendedCause?: string;

  /**
   * <p>The operation that the specified job is configured to execute on the objects listed in the manifest.</p>
   */
  Operation?: JobOperation;

  /**
   * <p>The description for this job, if one was provided in this job's <code>Create Job</code> request.</p>
   */
  Description?: string;

  /**
   * <p>A timestamp indicating when this job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p></p>
   */
  StatusUpdateReason?: string;

  /**
   * <p>Contains the configuration information for the job-completion report if you requested one in the <code>Create Job</code> request.</p>
   */
  Report?: JobReport;

  /**
   * <p>Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed.</p>
   */
  ProgressSummary?: JobProgressSummary;

  /**
   * <p>Indicates whether confirmation is required before Amazon S3 begins running the specified job. Confirmation is required only for jobs created through the Amazon S3 console.</p>
   */
  ConfirmationRequired?: boolean;

  /**
   * <p>The current status of the specified job.</p>
   */
  Status?: JobStatus | string;

  /**
   * <p>The priority of the specified job.</p>
   */
  Priority?: number;

  /**
   * <p>A timestamp indicating when this job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date;
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
   * <p>The name of the access point whose configuration information you want to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId: string | undefined;
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
   * <p>Contains the virtual private cloud (VPC) configuration for the specified access point.</p>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * <p>The date and time when the specified access point was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Indicates whether this access point allows access from the public internet. If
   *             <code>VpcConfiguration</code> is specified for this access point, then
   *             <code>NetworkOrigin</code> is <code>VPC</code>, and the access point doesn't allow access from
   *          the public internet. Otherwise, <code>NetworkOrigin</code> is <code>Internet</code>, and
   *          the access point allows access from the public internet, subject to the access point and bucket access
   *          policies.</p>
   */
  NetworkOrigin?: NetworkOrigin | string;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *       bucket. You can enable the configuration options in any combination. For more information
   *       about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}

export namespace GetAccessPointResult {
  export const filterSensitiveLog = (obj: GetAccessPointResult): any => ({
    ...obj,
  });
}

export interface GetAccessPointPolicyRequest {
  /**
   * <p>The name of the access point whose policy you want to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId: string | undefined;
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
   * <p>The name of the access point whose policy status you want to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId: string | undefined;
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

export interface GetJobTaggingRequest {
  /**
   * <p>The ID for the Amazon S3 Batch Operations job whose tags you want to retrieve.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The AWS account ID associated with the Amazon S3 Batch Operations job.</p>
   */
  AccountId: string | undefined;
}

export namespace GetJobTaggingRequest {
  export const filterSensitiveLog = (obj: GetJobTaggingRequest): any => ({
    ...obj,
  });
}

export interface GetJobTaggingResult {
  /**
   * <p>The set of tags associated with the Amazon S3 Batch Operations job.</p>
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
   * <p>The <code>PublicAccessBlock</code> configuration currently in effect for this Amazon Web Services
   *       account.</p>
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
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code>
   *       configuration you want to retrieve.</p>
   */
  AccountId: string | undefined;
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

export interface ListAccessPointsRequest {
  /**
   * <p>The name of the bucket whose associated access points you want to list.</p>
   */
  Bucket?: string;

  /**
   * <p>The maximum number of access points that you want to include in the list. If the specified
   *          bucket has more than this number of access points, then the response will include a
   *          continuation token in the <code>NextToken</code> field that you can use to retrieve the
   *          next page of access points.</p>
   */
  MaxResults?: number;

  /**
   * <p>The AWS account ID for owner of the bucket whose access points you want to list.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>A continuation token. If a previous call to <code>ListAccessPoints</code> returned a continuation token in the <code>NextToken</code> field, then providing that value here causes Amazon S3 to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListAccessPointsRequest {
  export const filterSensitiveLog = (obj: ListAccessPointsRequest): any => ({
    ...obj,
  });
}

export interface ListAccessPointsResult {
  /**
   * <p>If the specified bucket has more access points than can be returned in one call to this
   *          API, then this field contains a continuation token that you can provide in subsequent calls
   *          to this API to retrieve additional access points.</p>
   */
  NextToken?: string;

  /**
   * <p>Contains identification and configuration information for one or more access points
   *          associated with the specified bucket.</p>
   */
  AccessPointList?: AccessPoint[];
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

  /**
   * <p></p>
   */
  AccountId: string | undefined;
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
   * <p>Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed.</p>
   */
  ProgressSummary?: JobProgressSummary;

  /**
   * <p>The current priority for the specified job.</p>
   */
  Priority?: number;

  /**
   * <p>The ID for the specified job.</p>
   */
  JobId?: string;

  /**
   * <p>The user-specified description that was included in the specified job's <code>Create Job</code> request.</p>
   */
  Description?: string;

  /**
   * <p>A timestamp indicating when the specified job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date;

  /**
   * <p>A timestamp indicating when the specified job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The specified job's current status.</p>
   */
  Status?: JobStatus | string;

  /**
   * <p>The operation that the specified job is configured to run on each object listed in the manifest.</p>
   */
  Operation?: OperationName | string;
}

export namespace JobListDescriptor {
  export const filterSensitiveLog = (obj: JobListDescriptor): any => ({
    ...obj,
  });
}

export interface ListJobsResult {
  /**
   * <p>The list of current jobs and jobs that have ended within the last 30 days.</p>
   */
  Jobs?: JobListDescriptor[];

  /**
   * <p>If the <code>List Jobs</code> request produced more than the maximum number of results, you can pass this value into a subsequent <code>List Jobs</code> request in order to retrieve
   *             the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListJobsResult {
  export const filterSensitiveLog = (obj: ListJobsResult): any => ({
    ...obj,
  });
}

export interface PutAccessPointPolicyRequest {
  /**
   * <p>The policy that you want to apply to the specified access point. For more information about access point policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">Managing Data Access with Amazon S3 Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Policy: string | undefined;

  /**
   * <p>The AWS account ID for owner of the bucket associated with the specified access point.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the access point that you want to associate with the specified policy.</p>
   */
  Name: string | undefined;
}

export namespace PutAccessPointPolicyRequest {
  export const filterSensitiveLog = (obj: PutAccessPointPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutJobTaggingRequest {
  /**
   * <p>The ID for the Amazon S3 Batch Operations job whose tags you want to replace.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The set of tags to associate with the Amazon S3 Batch Operations job.</p>
   */
  Tags: S3Tag[] | undefined;

  /**
   * <p>The AWS account ID associated with the Amazon S3 Batch Operations job.</p>
   */
  AccountId: string | undefined;
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
 * <p></p>
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
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to the specified
   *       Amazon Web Services account.</p>
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code>
   *       configuration you want to set.</p>
   */
  AccountId: string | undefined;
}

export namespace PutPublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: PutPublicAccessBlockRequest): any => ({
    ...obj,
  });
}

export interface UpdateJobPriorityRequest {
  /**
   * <p>The ID for the job whose priority you want to update.</p>
   */
  JobId: string | undefined;

  /**
   * <p></p>
   */
  AccountId: string | undefined;

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
   * <p>The ID of the job whose status you want to update.</p>
   */
  JobId: string | undefined;

  /**
   * <p>A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length.</p>
   */
  StatusUpdateReason?: string;

  /**
   * <p>The status that you want to move the specified job to.</p>
   */
  RequestedJobStatus: RequestedJobStatus | string | undefined;

  /**
   * <p></p>
   */
  AccountId: string | undefined;
}

export namespace UpdateJobStatusRequest {
  export const filterSensitiveLog = (obj: UpdateJobStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateJobStatusResult {
  /**
   * <p>The reason that the specified job's status was updated.</p>
   */
  StatusUpdateReason?: string;

  /**
   * <p>The ID for the job whose status was updated.</p>
   */
  JobId?: string;

  /**
   * <p>The current status for the specified job.</p>
   */
  Status?: JobStatus | string;
}

export namespace UpdateJobStatusResult {
  export const filterSensitiveLog = (obj: UpdateJobStatusResult): any => ({
    ...obj,
  });
}
