import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An access point used to access a bucket.</p>
 */
export interface AccessPoint {
  __type?: "AccessPoint";
  /**
   * <p>The name of the bucket associated with this access point.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name of this access point.</p>
   */
  Name: string | undefined;

  /**
   * <p>Indicates whether this access point allows access from the public Internet. If <code>VpcConfiguration</code> is specified for this access point, then <code>NetworkOrigin</code> is <code>VPC</code>, and the access point doesn't allow
   *       access from the public Internet. Otherwise, <code>NetworkOrigin</code> is <code>Internet</code>, and the access point allows access from the public Internet, subject to the access point and bucket access policies.</p>
   */
  NetworkOrigin: NetworkOrigin | string | undefined;

  /**
   * <p>The Virtual Private Cloud (VPC) configuration for this access point, if one exists.</p>
   */
  VpcConfiguration?: VpcConfiguration;
}

export namespace AccessPoint {
  export const filterSensitiveLog = (obj: AccessPoint): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessPoint => __isa(o, "AccessPoint");
}

/**
 * <p></p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BadRequestException =>
    __isa(o, "BadRequestException");
}

export interface CreateAccessPointRequest {
  __type?: "CreateAccessPointRequest";
  /**
   * <p>The AWS account ID for the owner of the bucket for which you want to create an access point.</p>
   */
  AccountId: string | undefined;

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
   * <p>If you include this field, Amazon S3 restricts access to this access point to requests from the specified Virtual Private Cloud (VPC).</p>
   */
  VpcConfiguration?: VpcConfiguration;
}

export namespace CreateAccessPointRequest {
  export const filterSensitiveLog = (obj: CreateAccessPointRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAccessPointRequest =>
    __isa(o, "CreateAccessPointRequest");
}

export interface CreateJobRequest {
  __type?: "CreateJobRequest";
  /**
   * <p></p>
   */
  AccountId: string | undefined;

  /**
   * <p>An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.</p>
   */
  ConfirmationRequired?: boolean;

  /**
   * <p>A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs.</p>
   */
  Description?: string;

  /**
   * <p>Configuration parameters for the manifest.</p>
   */
  Manifest: JobManifest | undefined;

  /**
   * <p>The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Available Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Operation: JobOperation | undefined;

  /**
   * <p>The numerical priority for this job. Higher numbers indicate higher priority.</p>
   */
  Priority: number | undefined;

  /**
   * <p>Configuration parameters for the optional job-completion report.</p>
   */
  Report: JobReport | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) Role that batch operations will use to execute this job's operation on each object in the manifest.</p>
   */
  RoleArn: string | undefined;
}

export namespace CreateJobRequest {
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobRequest =>
    __isa(o, "CreateJobRequest");
}

export interface CreateJobResult {
  __type?: "CreateJobResult";
  /**
   * <p>The ID for this job. Amazon S3 generates this ID automatically and returns it after a
   *          successful <code>Create Job</code> request.</p>
   */
  JobId?: string;
}

export namespace CreateJobResult {
  export const filterSensitiveLog = (obj: CreateJobResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobResult =>
    __isa(o, "CreateJobResult");
}

export interface DeleteAccessPointPolicyRequest {
  __type?: "DeleteAccessPointPolicyRequest";
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
  export const filterSensitiveLog = (
    obj: DeleteAccessPointPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAccessPointPolicyRequest =>
    __isa(o, "DeleteAccessPointPolicyRequest");
}

export interface DeleteAccessPointRequest {
  __type?: "DeleteAccessPointRequest";
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
    ...obj
  });
  export const isa = (o: any): o is DeleteAccessPointRequest =>
    __isa(o, "DeleteAccessPointRequest");
}

export interface DeletePublicAccessBlockRequest {
  __type?: "DeletePublicAccessBlockRequest";
  /**
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code>
   *       configuration you want to remove.</p>
   */
  AccountId: string | undefined;
}

export namespace DeletePublicAccessBlockRequest {
  export const filterSensitiveLog = (
    obj: DeletePublicAccessBlockRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePublicAccessBlockRequest =>
    __isa(o, "DeletePublicAccessBlockRequest");
}

export interface DescribeJobRequest {
  __type?: "DescribeJobRequest";
  /**
   * <p></p>
   */
  AccountId: string | undefined;

  /**
   * <p>The ID for the job whose information you want to retrieve.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeJobRequest {
  export const filterSensitiveLog = (obj: DescribeJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeJobRequest =>
    __isa(o, "DescribeJobRequest");
}

export interface DescribeJobResult {
  __type?: "DescribeJobResult";
  /**
   * <p>Contains the configuration parameters and status for the job specified in the <code>Describe Job</code> request.</p>
   */
  Job?: JobDescriptor;
}

export namespace DescribeJobResult {
  export const filterSensitiveLog = (obj: DescribeJobResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeJobResult =>
    __isa(o, "DescribeJobResult");
}

export interface GetAccessPointPolicyRequest {
  __type?: "GetAccessPointPolicyRequest";
  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the access point whose policy you want to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetAccessPointPolicyRequest {
  export const filterSensitiveLog = (
    obj: GetAccessPointPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccessPointPolicyRequest =>
    __isa(o, "GetAccessPointPolicyRequest");
}

export interface GetAccessPointPolicyResult {
  __type?: "GetAccessPointPolicyResult";
  /**
   * <p>The access point policy associated with the specified access point.</p>
   */
  Policy?: string;
}

export namespace GetAccessPointPolicyResult {
  export const filterSensitiveLog = (obj: GetAccessPointPolicyResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccessPointPolicyResult =>
    __isa(o, "GetAccessPointPolicyResult");
}

export interface GetAccessPointPolicyStatusRequest {
  __type?: "GetAccessPointPolicyStatusRequest";
  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the access point whose policy status you want to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetAccessPointPolicyStatusRequest {
  export const filterSensitiveLog = (
    obj: GetAccessPointPolicyStatusRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccessPointPolicyStatusRequest =>
    __isa(o, "GetAccessPointPolicyStatusRequest");
}

export interface GetAccessPointPolicyStatusResult {
  __type?: "GetAccessPointPolicyStatusResult";
  /**
   * <p>Indicates the current policy status of the specified access point.</p>
   */
  PolicyStatus?: PolicyStatus;
}

export namespace GetAccessPointPolicyStatusResult {
  export const filterSensitiveLog = (
    obj: GetAccessPointPolicyStatusResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccessPointPolicyStatusResult =>
    __isa(o, "GetAccessPointPolicyStatusResult");
}

export interface GetAccessPointRequest {
  __type?: "GetAccessPointRequest";
  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the access point whose configuration information you want to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetAccessPointRequest {
  export const filterSensitiveLog = (obj: GetAccessPointRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccessPointRequest =>
    __isa(o, "GetAccessPointRequest");
}

export interface GetAccessPointResult {
  __type?: "GetAccessPointResult";
  /**
   * <p>The name of the bucket associated with the specified access point.</p>
   */
  Bucket?: string;

  /**
   * <p>The date and time when the specified access point was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The name of the specified access point.</p>
   */
  Name?: string;

  /**
   * <p>Indicates whether this access point allows access from the public Internet. If <code>VpcConfiguration</code> is specified for this access point, then <code>NetworkOrigin</code> is <code>VPC</code>, and the access point doesn't allow
   *       access from the public Internet. Otherwise, <code>NetworkOrigin</code> is <code>Internet</code>, and the access point allows access from the public Internet, subject to the access point and bucket access policies.</p>
   */
  NetworkOrigin?: NetworkOrigin | string;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *       bucket. You can enable the configuration options in any combination. For more information
   *       about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;

  /**
   * <p>Contains the Virtual Private Cloud (VPC) configuration for the specified access point.</p>
   */
  VpcConfiguration?: VpcConfiguration;
}

export namespace GetAccessPointResult {
  export const filterSensitiveLog = (obj: GetAccessPointResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccessPointResult =>
    __isa(o, "GetAccessPointResult");
}

export interface GetPublicAccessBlockOutput {
  __type?: "GetPublicAccessBlockOutput";
  /**
   * <p>The <code>PublicAccessBlock</code> configuration currently in effect for this Amazon Web Services
   *       account.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}

export namespace GetPublicAccessBlockOutput {
  export const filterSensitiveLog = (obj: GetPublicAccessBlockOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPublicAccessBlockOutput =>
    __isa(o, "GetPublicAccessBlockOutput");
}

export interface GetPublicAccessBlockRequest {
  __type?: "GetPublicAccessBlockRequest";
  /**
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code>
   *       configuration you want to retrieve.</p>
   */
  AccountId: string | undefined;
}

export namespace GetPublicAccessBlockRequest {
  export const filterSensitiveLog = (
    obj: GetPublicAccessBlockRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPublicAccessBlockRequest =>
    __isa(o, "GetPublicAccessBlockRequest");
}

/**
 * <p></p>
 */
export interface IdempotencyException
  extends __SmithyException,
    $MetadataBearer {
  name: "IdempotencyException";
  $fault: "client";
  Message?: string;
}

export namespace IdempotencyException {
  export const filterSensitiveLog = (obj: IdempotencyException): any => ({
    ...obj
  });
  export const isa = (o: any): o is IdempotencyException =>
    __isa(o, "IdempotencyException");
}

/**
 * <p></p>
 */
export interface InternalServiceException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceException {
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServiceException =>
    __isa(o, "InternalServiceException");
}

/**
 * <p></p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidNextTokenException =>
    __isa(o, "InvalidNextTokenException");
}

/**
 * <p></p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRequestException =>
    __isa(o, "InvalidRequestException");
}

/**
 * <p>A container element for the job configuration and status information returned by a <code>Describe Job</code> request.</p>
 */
export interface JobDescriptor {
  __type?: "JobDescriptor";
  /**
   * <p>Indicates whether confirmation is required before Amazon S3 begins running the specified job. Confirmation is required only for jobs created through the Amazon S3 console.</p>
   */
  ConfirmationRequired?: boolean;

  /**
   * <p>A timestamp indicating when this job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The description for this job, if one was provided in this job's <code>Create Job</code> request.</p>
   */
  Description?: string;

  /**
   * <p>If the specified job failed, this field contains information describing the failure.</p>
   */
  FailureReasons?: JobFailure[];

  /**
   * <p>The Amazon Resource Name (ARN) for this job.</p>
   */
  JobArn?: string;

  /**
   * <p>The ID for the specified job.</p>
   */
  JobId?: string;

  /**
   * <p>The configuration information for the specified job's manifest object.</p>
   */
  Manifest?: JobManifest;

  /**
   * <p>The operation that the specified job is configured to execute on the objects listed in the manifest.</p>
   */
  Operation?: JobOperation;

  /**
   * <p>The priority of the specified job.</p>
   */
  Priority?: number;

  /**
   * <p>Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed.</p>
   */
  ProgressSummary?: JobProgressSummary;

  /**
   * <p>Contains the configuration information for the job-completion report if you requested one in the <code>Create Job</code> request.</p>
   */
  Report?: JobReport;

  /**
   * <p>The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) Role assigned to execute the tasks for this job.</p>
   */
  RoleArn?: string;

  /**
   * <p>The current status of the specified job.</p>
   */
  Status?: JobStatus | string;

  /**
   * <p></p>
   */
  StatusUpdateReason?: string;

  /**
   * <p>The reason why the specified job was suspended. A job is only suspended if you create it through the Amazon S3 console. When you create the job, it enters
   *             the <code>Suspended</code> state to await confirmation before running. After you confirm the job, it automatically exits the <code>Suspended</code> state.</p>
   */
  SuspendedCause?: string;

  /**
   * <p>The timestamp when this job was suspended, if it has been suspended.</p>
   */
  SuspendedDate?: Date;

  /**
   * <p>A timestamp indicating when this job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date;
}

export namespace JobDescriptor {
  export const filterSensitiveLog = (obj: JobDescriptor): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobDescriptor => __isa(o, "JobDescriptor");
}

/**
 * <p>If this job failed, this element indicates why the job failed.</p>
 */
export interface JobFailure {
  __type?: "JobFailure";
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
    ...obj
  });
  export const isa = (o: any): o is JobFailure => __isa(o, "JobFailure");
}

/**
 * <p>Contains the configuration and status information for a single job retrieved as part of a job list.</p>
 */
export interface JobListDescriptor {
  __type?: "JobListDescriptor";
  /**
   * <p>A timestamp indicating when the specified job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The user-specified description that was included in the specified job's <code>Create Job</code> request.</p>
   */
  Description?: string;

  /**
   * <p>The ID for the specified job.</p>
   */
  JobId?: string;

  /**
   * <p>The operation that the specified job is configured to run on each object listed in the manifest.</p>
   */
  Operation?: OperationName | string;

  /**
   * <p>The current priority for the specified job.</p>
   */
  Priority?: number;

  /**
   * <p>Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed.</p>
   */
  ProgressSummary?: JobProgressSummary;

  /**
   * <p>The specified job's current status.</p>
   */
  Status?: JobStatus | string;

  /**
   * <p>A timestamp indicating when the specified job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date;
}

export namespace JobListDescriptor {
  export const filterSensitiveLog = (obj: JobListDescriptor): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobListDescriptor =>
    __isa(o, "JobListDescriptor");
}

/**
 * <p>Contains the configuration information for a job's manifest.</p>
 */
export interface JobManifest {
  __type?: "JobManifest";
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
    ...obj
  });
  export const isa = (o: any): o is JobManifest => __isa(o, "JobManifest");
}

export enum JobManifestFieldName {
  Bucket = "Bucket",
  Ignore = "Ignore",
  Key = "Key",
  VersionId = "VersionId"
}

export enum JobManifestFormat {
  S3BatchOperations_CSV_20180820 = "S3BatchOperations_CSV_20180820",
  S3InventoryReport_CSV_20161130 = "S3InventoryReport_CSV_20161130"
}

/**
 * <p>Contains the information required to locate a manifest object.</p>
 */
export interface JobManifestLocation {
  __type?: "JobManifestLocation";
  /**
   * <p>The ETag for the specified manifest object.</p>
   */
  ETag: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for a manifest object.</p>
   */
  ObjectArn: string | undefined;

  /**
   * <p>The optional version ID to identify a specific version of the manifest object.</p>
   */
  ObjectVersionId?: string;
}

export namespace JobManifestLocation {
  export const filterSensitiveLog = (obj: JobManifestLocation): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobManifestLocation =>
    __isa(o, "JobManifestLocation");
}

/**
 * <p>Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.</p>
 */
export interface JobManifestSpec {
  __type?: "JobManifestSpec";
  /**
   * <p>If the specified manifest object is in the <code>S3BatchOperations_CSV_20180820</code> format, this element describes which columns contain the required data.</p>
   */
  Fields?: (JobManifestFieldName | string)[];

  /**
   * <p>Indicates which of the available formats the specified manifest uses.</p>
   */
  Format: JobManifestFormat | string | undefined;
}

export namespace JobManifestSpec {
  export const filterSensitiveLog = (obj: JobManifestSpec): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobManifestSpec =>
    __isa(o, "JobManifestSpec");
}

/**
 * <p>The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Available Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface JobOperation {
  __type?: "JobOperation";
  /**
   * <p>Directs the specified job to invoke an AWS Lambda function on each object in the manifest.</p>
   */
  LambdaInvoke?: LambdaInvokeOperation;

  /**
   * <p>Directs the specified job to execute an Initiate Glacier Restore call on each object in the manifest.</p>
   */
  S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation;

  /**
   * <p>Directs the specified job to execute a PUT Object acl call on each object in the manifest.</p>
   */
  S3PutObjectAcl?: S3SetObjectAclOperation;

  /**
   * <p>Directs the specified job to execute a PUT Copy object call on each object in the manifest.</p>
   */
  S3PutObjectCopy?: S3CopyObjectOperation;

  /**
   * <p>Directs the specified job to execute a PUT Object tagging call on each object in the manifest.</p>
   */
  S3PutObjectTagging?: S3SetObjectTaggingOperation;
}

export namespace JobOperation {
  export const filterSensitiveLog = (obj: JobOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobOperation => __isa(o, "JobOperation");
}

/**
 * <p>Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed.</p>
 */
export interface JobProgressSummary {
  __type?: "JobProgressSummary";
  /**
   * <p></p>
   */
  NumberOfTasksFailed?: number;

  /**
   * <p></p>
   */
  NumberOfTasksSucceeded?: number;

  /**
   * <p></p>
   */
  TotalNumberOfTasks?: number;
}

export namespace JobProgressSummary {
  export const filterSensitiveLog = (obj: JobProgressSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobProgressSummary =>
    __isa(o, "JobProgressSummary");
}

/**
 * <p>Contains the configuration parameters for a job-completion report.</p>
 */
export interface JobReport {
  __type?: "JobReport";
  /**
   * <p>The Amazon Resource Name (ARN) for the bucket where specified job-completion report will be stored.</p>
   */
  Bucket?: string;

  /**
   * <p>Indicates whether the specified job will generate a job-completion report.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The format of the specified job-completion report.</p>
   */
  Format?: JobReportFormat | string;

  /**
   * <p>An optional prefix to describe where in the specified bucket the job-completion report will be stored. Amazon S3 will store the job-completion report at <prefix>/job-<job-id>/report.json.</p>
   */
  Prefix?: string;

  /**
   * <p>Indicates whether the job-completion report will include details of all tasks or only failed tasks.</p>
   */
  ReportScope?: JobReportScope | string;
}

export namespace JobReport {
  export const filterSensitiveLog = (obj: JobReport): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobReport => __isa(o, "JobReport");
}

export enum JobReportFormat {
  Report_CSV_20180820 = "Report_CSV_20180820"
}

export enum JobReportScope {
  AllTasks = "AllTasks",
  FailedTasksOnly = "FailedTasksOnly"
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
  Suspended = "Suspended"
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
    ...obj
  });
  export const isa = (o: any): o is JobStatusException =>
    __isa(o, "JobStatusException");
}

/**
 * <p>Contains the configuration parameters for a <code>Lambda Invoke</code> operation.</p>
 */
export interface LambdaInvokeOperation {
  __type?: "LambdaInvokeOperation";
  /**
   * <p>The Amazon Resource Name (ARN) for the AWS Lambda function that the specified job will invoke for each object in the manifest.</p>
   */
  FunctionArn?: string;
}

export namespace LambdaInvokeOperation {
  export const filterSensitiveLog = (obj: LambdaInvokeOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is LambdaInvokeOperation =>
    __isa(o, "LambdaInvokeOperation");
}

export interface ListAccessPointsRequest {
  __type?: "ListAccessPointsRequest";
  /**
   * <p>The AWS account ID for owner of the bucket whose access points you want to list.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the bucket whose associated access points you want to list.</p>
   */
  Bucket?: string;

  /**
   * <p>The maximum number of access points that you want to include in the list. If the specified bucket has more than this number of access points, then the response will include a continuation token in the <code>NextToken</code> field that you can use to retrieve the next page of access points.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token. If a previous call to <code>ListAccessPoints</code> returned a continuation token in the <code>NextToken</code> field, then providing that value here causes Amazon S3 to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListAccessPointsRequest {
  export const filterSensitiveLog = (obj: ListAccessPointsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAccessPointsRequest =>
    __isa(o, "ListAccessPointsRequest");
}

export interface ListAccessPointsResult {
  __type?: "ListAccessPointsResult";
  /**
   * <p>Contains identification and configuration information for one or more access points associated with the specified bucket.</p>
   */
  AccessPointList?: AccessPoint[];

  /**
   * <p>If the specified bucket has more access points than can be returned in one call to this API, then this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.</p>
   */
  NextToken?: string;
}

export namespace ListAccessPointsResult {
  export const filterSensitiveLog = (obj: ListAccessPointsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAccessPointsResult =>
    __isa(o, "ListAccessPointsResult");
}

export interface ListJobsRequest {
  __type?: "ListJobsRequest";
  /**
   * <p></p>
   */
  AccountId: string | undefined;

  /**
   * <p>The <code>List Jobs</code> request returns jobs that match the statuses listed in this element.</p>
   */
  JobStatuses?: (JobStatus | string)[];

  /**
   * <p>The maximum number of jobs that Amazon S3 will include in the <code>List Jobs</code> response. If there are more jobs than this number, the response will include a pagination token in the <code>NextToken</code> field to enable you to retrieve the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token to request the next page of results. Use the token that Amazon S3 returned in the <code>NextToken</code> element of the <code>ListJobsResult</code> from the previous <code>List Jobs</code> request.</p>
   */
  NextToken?: string;
}

export namespace ListJobsRequest {
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobsRequest =>
    __isa(o, "ListJobsRequest");
}

export interface ListJobsResult {
  __type?: "ListJobsResult";
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
    ...obj
  });
  export const isa = (o: any): o is ListJobsResult =>
    __isa(o, "ListJobsResult");
}

export enum NetworkOrigin {
  Internet = "Internet",
  VPC = "VPC"
}

/**
 * <p>Amazon S3 throws this exception if you make a <code>GetPublicAccessBlock</code> request
 *       against an account that doesn't have a <code>PublicAccessBlockConfiguration</code> set.</p>
 */
export interface NoSuchPublicAccessBlockConfiguration
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchPublicAccessBlockConfiguration";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchPublicAccessBlockConfiguration {
  export const filterSensitiveLog = (
    obj: NoSuchPublicAccessBlockConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoSuchPublicAccessBlockConfiguration =>
    __isa(o, "NoSuchPublicAccessBlockConfiguration");
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
    ...obj
  });
  export const isa = (o: any): o is NotFoundException =>
    __isa(o, "NotFoundException");
}

export enum OperationName {
  LambdaInvoke = "LambdaInvoke",
  S3InitiateRestoreObject = "S3InitiateRestoreObject",
  S3PutObjectAcl = "S3PutObjectAcl",
  S3PutObjectCopy = "S3PutObjectCopy",
  S3PutObjectTagging = "S3PutObjectTagging"
}

/**
 * <p>Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the
 * 	 <i>Amazon Simple Storage Service Developer Guide</i>.
 *       </p>
 */
export interface PolicyStatus {
  __type?: "PolicyStatus";
  /**
   * <p></p>
   */
  IsPublic?: boolean;
}

export namespace PolicyStatus {
  export const filterSensitiveLog = (obj: PolicyStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyStatus => __isa(o, "PolicyStatus");
}

/**
 * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
 *       bucket. You can enable the configuration options in any combination. For more information
 *       about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide.</p>
 */
export interface PublicAccessBlockConfiguration {
  __type?: "PublicAccessBlockConfiguration";
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
   * <p>Specifies whether Amazon S3 should ignore public ACLs for buckets in this account.
   *       Setting this element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain.
   *    </p>
   *          <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't
   *          prevent new public ACLs from being set.</p>
   */
  IgnorePublicAcls?: boolean;

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
  export const filterSensitiveLog = (
    obj: PublicAccessBlockConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PublicAccessBlockConfiguration =>
    __isa(o, "PublicAccessBlockConfiguration");
}

export interface PutAccessPointPolicyRequest {
  __type?: "PutAccessPointPolicyRequest";
  /**
   * <p>The AWS account ID for owner of the bucket associated with the specified access point.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the access point that you want to associate with the specified policy.</p>
   */
  Name: string | undefined;

  /**
   * <p>The policy that you want to apply to the specified access point. For more information about access point policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">Managing Data Access with Amazon S3 Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Policy: string | undefined;
}

export namespace PutAccessPointPolicyRequest {
  export const filterSensitiveLog = (
    obj: PutAccessPointPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutAccessPointPolicyRequest =>
    __isa(o, "PutAccessPointPolicyRequest");
}

export interface PutPublicAccessBlockRequest {
  __type?: "PutPublicAccessBlockRequest";
  /**
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code>
   *       configuration you want to set.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to the specified
   *       Amazon Web Services account.</p>
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;
}

export namespace PutPublicAccessBlockRequest {
  export const filterSensitiveLog = (
    obj: PutPublicAccessBlockRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutPublicAccessBlockRequest =>
    __isa(o, "PutPublicAccessBlockRequest");
}

export enum RequestedJobStatus {
  Cancelled = "Cancelled",
  Ready = "Ready"
}

/**
 * <p></p>
 */
export interface S3AccessControlList {
  __type?: "S3AccessControlList";
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
    ...obj
  });
  export const isa = (o: any): o is S3AccessControlList =>
    __isa(o, "S3AccessControlList");
}

/**
 * <p></p>
 */
export interface S3AccessControlPolicy {
  __type?: "S3AccessControlPolicy";
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
    ...obj
  });
  export const isa = (o: any): o is S3AccessControlPolicy =>
    __isa(o, "S3AccessControlPolicy");
}

export enum S3CannedAccessControlList {
  AUTHENTICATED_READ = "authenticated-read",
  AWS_EXEC_READ = "aws-exec-read",
  BUCKET_OWNER_FULL_CONTROL = "bucket-owner-full-control",
  BUCKET_OWNER_READ = "bucket-owner-read",
  PRIVATE = "private",
  PUBLIC_READ = "public-read",
  PUBLIC_READ_WRITE = "public-read-write"
}

/**
 * <p>Contains the configuration parameters for a PUT Copy object operation. Amazon S3 batch operations passes each value through to the underlying PUT Copy object
 *          API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">PUT Object - Copy</a>.</p>
 */
export interface S3CopyObjectOperation {
  __type?: "S3CopyObjectOperation";
  /**
   * <p></p>
   */
  AccessControlGrants?: S3Grant[];

  /**
   * <p></p>
   */
  CannedAccessControlList?: S3CannedAccessControlList | string;

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
   * <p></p>
   */
  ObjectLockLegalHoldStatus?: S3ObjectLockLegalHoldStatus | string;

  /**
   * <p></p>
   */
  ObjectLockMode?: S3ObjectLockMode | string;

  /**
   * <p></p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p></p>
   */
  RedirectLocation?: string;

  /**
   * <p></p>
   */
  RequesterPays?: boolean;

  /**
   * <p></p>
   */
  SSEAwsKmsKeyId?: string;

  /**
   * <p></p>
   */
  StorageClass?: S3StorageClass | string;

  /**
   * <p></p>
   */
  TargetKeyPrefix?: string;

  /**
   * <p></p>
   */
  TargetResource?: string;

  /**
   * <p></p>
   */
  UnModifiedSinceConstraint?: Date;
}

export namespace S3CopyObjectOperation {
  export const filterSensitiveLog = (obj: S3CopyObjectOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3CopyObjectOperation =>
    __isa(o, "S3CopyObjectOperation");
}

export enum S3GlacierJobTier {
  BULK = "BULK",
  STANDARD = "STANDARD"
}

/**
 * <p></p>
 */
export interface S3Grant {
  __type?: "S3Grant";
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
    ...obj
  });
  export const isa = (o: any): o is S3Grant => __isa(o, "S3Grant");
}

/**
 * <p></p>
 */
export interface S3Grantee {
  __type?: "S3Grantee";
  /**
   * <p></p>
   */
  DisplayName?: string;

  /**
   * <p></p>
   */
  Identifier?: string;

  /**
   * <p></p>
   */
  TypeIdentifier?: S3GranteeTypeIdentifier | string;
}

export namespace S3Grantee {
  export const filterSensitiveLog = (obj: S3Grantee): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3Grantee => __isa(o, "S3Grantee");
}

export enum S3GranteeTypeIdentifier {
  CANONICAL = "id",
  EMAIL_ADDRESS = "emailAddress",
  GROUP = "uri"
}

/**
 * <p>Contains the configuration parameters for an Initiate Glacier Restore job. Amazon S3 batch operations passes each value through to the underlying POST Object restore API.
 *          For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">Restoring Archives</a>.</p>
 */
export interface S3InitiateRestoreObjectOperation {
  __type?: "S3InitiateRestoreObjectOperation";
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
  export const filterSensitiveLog = (
    obj: S3InitiateRestoreObjectOperation
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3InitiateRestoreObjectOperation =>
    __isa(o, "S3InitiateRestoreObjectOperation");
}

export enum S3MetadataDirective {
  COPY = "COPY",
  REPLACE = "REPLACE"
}

export enum S3ObjectLockLegalHoldStatus {
  OFF = "OFF",
  ON = "ON"
}

export enum S3ObjectLockMode {
  COMPLIANCE = "COMPLIANCE",
  GOVERNANCE = "GOVERNANCE"
}

/**
 * <p></p>
 */
export interface S3ObjectMetadata {
  __type?: "S3ObjectMetadata";
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

  /**
   * <p></p>
   */
  UserMetadata?: { [key: string]: string };
}

export namespace S3ObjectMetadata {
  export const filterSensitiveLog = (obj: S3ObjectMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3ObjectMetadata =>
    __isa(o, "S3ObjectMetadata");
}

/**
 * <p></p>
 */
export interface S3ObjectOwner {
  __type?: "S3ObjectOwner";
  /**
   * <p></p>
   */
  DisplayName?: string;

  /**
   * <p></p>
   */
  ID?: string;
}

export namespace S3ObjectOwner {
  export const filterSensitiveLog = (obj: S3ObjectOwner): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3ObjectOwner => __isa(o, "S3ObjectOwner");
}

export enum S3Permission {
  FULL_CONTROL = "FULL_CONTROL",
  READ = "READ",
  READ_ACP = "READ_ACP",
  WRITE = "WRITE",
  WRITE_ACP = "WRITE_ACP"
}

/**
 * <p>Contains the configuration parameters for a Set Object ACL operation. Amazon S3 batch operations passes each value through to the underlying PUT Object acl API.
 *          For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PUT Object acl</a>.</p>
 */
export interface S3SetObjectAclOperation {
  __type?: "S3SetObjectAclOperation";
  /**
   * <p></p>
   */
  AccessControlPolicy?: S3AccessControlPolicy;
}

export namespace S3SetObjectAclOperation {
  export const filterSensitiveLog = (obj: S3SetObjectAclOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3SetObjectAclOperation =>
    __isa(o, "S3SetObjectAclOperation");
}

/**
 * <p>Contains the configuration parameters for a Set Object Tagging operation. Amazon S3 batch operations passes each value through to the underlying PUT Object tagging API.
 *          For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PUT Object tagging</a>.</p>
 */
export interface S3SetObjectTaggingOperation {
  __type?: "S3SetObjectTaggingOperation";
  /**
   * <p></p>
   */
  TagSet?: S3Tag[];
}

export namespace S3SetObjectTaggingOperation {
  export const filterSensitiveLog = (
    obj: S3SetObjectTaggingOperation
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3SetObjectTaggingOperation =>
    __isa(o, "S3SetObjectTaggingOperation");
}

export enum S3SSEAlgorithm {
  AES256 = "AES256",
  KMS = "KMS"
}

export enum S3StorageClass {
  DEEP_ARCHIVE = "DEEP_ARCHIVE",
  GLACIER = "GLACIER",
  INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
  ONEZONE_IA = "ONEZONE_IA",
  STANDARD = "STANDARD",
  STANDARD_IA = "STANDARD_IA"
}

/**
 * <p></p>
 */
export interface S3Tag {
  __type?: "S3Tag";
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
    ...obj
  });
  export const isa = (o: any): o is S3Tag => __isa(o, "S3Tag");
}

/**
 * <p></p>
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyRequestsException =>
    __isa(o, "TooManyRequestsException");
}

export interface UpdateJobPriorityRequest {
  __type?: "UpdateJobPriorityRequest";
  /**
   * <p></p>
   */
  AccountId: string | undefined;

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
    ...obj
  });
  export const isa = (o: any): o is UpdateJobPriorityRequest =>
    __isa(o, "UpdateJobPriorityRequest");
}

export interface UpdateJobPriorityResult {
  __type?: "UpdateJobPriorityResult";
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
    ...obj
  });
  export const isa = (o: any): o is UpdateJobPriorityResult =>
    __isa(o, "UpdateJobPriorityResult");
}

export interface UpdateJobStatusRequest {
  __type?: "UpdateJobStatusRequest";
  /**
   * <p></p>
   */
  AccountId: string | undefined;

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
    ...obj
  });
  export const isa = (o: any): o is UpdateJobStatusRequest =>
    __isa(o, "UpdateJobStatusRequest");
}

export interface UpdateJobStatusResult {
  __type?: "UpdateJobStatusResult";
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
    ...obj
  });
  export const isa = (o: any): o is UpdateJobStatusResult =>
    __isa(o, "UpdateJobStatusResult");
}

/**
 * <p>The Virtual Private Cloud (VPC) configuration for an access point.</p>
 */
export interface VpcConfiguration {
  __type?: "VpcConfiguration";
  /**
   * <p>If this field is specified, this access point will only allow connections from the specified VPC ID.</p>
   */
  VpcId: string | undefined;
}

export namespace VpcConfiguration {
  export const filterSensitiveLog = (obj: VpcConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is VpcConfiguration =>
    __isa(o, "VpcConfiguration");
}
