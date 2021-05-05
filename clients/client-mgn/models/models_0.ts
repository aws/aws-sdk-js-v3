import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Operating denied due to a file permission or access check error.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
  code?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export interface InitializeServiceRequest {}

export namespace InitializeServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InitializeServiceRequest): any => ({
    ...obj,
  });
}

export interface InitializeServiceResponse {}

export namespace InitializeServiceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InitializeServiceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Validate exception field.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>Validate exception field name.</p>
   */
  name?: string;

  /**
   * <p>Validate exception field message.</p>
   */
  message?: string;
}

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
 * <p>Validate exception.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
  code?: string;
  /**
   * <p>Validate exception reason.</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * <p>Validate exception field list.</p>
   */
  fieldList?: ValidationExceptionField[];
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
  code?: string;
  /**
   * <p>A conflict occured when prompting for the Resource ID.</p>
   */
  resourceId?: string;

  /**
   * <p>A conflict occured when prompting for resource type.</p>
   */
  resourceType?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export interface DeleteJobRequest {
  /**
   * <p>Request to delete Job from service by Job ID.</p>
   */
  jobID: string | undefined;
}

export namespace DeleteJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobResponse {}

export namespace DeleteJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Resource not found exception.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
  code?: string;
  /**
   * <p>Resource ID not found error.</p>
   */
  resourceId?: string;

  /**
   * <p>Resource type not found error.</p>
   */
  resourceType?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Unitialized account exception.</p>
 */
export interface UninitializedAccountException extends __SmithyException, $MetadataBearer {
  name: "UninitializedAccountException";
  $fault: "client";
  message?: string;
  code?: string;
}

export namespace UninitializedAccountException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UninitializedAccountException): any => ({
    ...obj,
  });
}

export interface DescribeJobLogItemsRequest {
  /**
   * <p>Request to describe Job log job ID.</p>
   */
  jobID: string | undefined;

  /**
   * <p>Request to describe Job log item maximum results.</p>
   */
  maxResults?: number;

  /**
   * <p>Request to describe Job log next token.</p>
   */
  nextToken?: string;
}

export namespace DescribeJobLogItemsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobLogItemsRequest): any => ({
    ...obj,
  });
}

export enum JobLogEvent {
  CLEANUP_END = "CLEANUP_END",
  CLEANUP_FAIL = "CLEANUP_FAIL",
  CLEANUP_START = "CLEANUP_START",
  CONVERSION_END = "CONVERSION_END",
  CONVERSION_FAIL = "CONVERSION_FAIL",
  CONVERSION_START = "CONVERSION_START",
  JOB_CANCEL = "JOB_CANCEL",
  JOB_END = "JOB_END",
  JOB_START = "JOB_START",
  LAUNCH_FAILED = "LAUNCH_FAILED",
  LAUNCH_START = "LAUNCH_START",
  SERVER_SKIPPED = "SERVER_SKIPPED",
  SNAPSHOT_END = "SNAPSHOT_END",
  SNAPSHOT_FAIL = "SNAPSHOT_FAIL",
  SNAPSHOT_START = "SNAPSHOT_START",
  USING_PREVIOUS_SNAPSHOT = "USING_PREVIOUS_SNAPSHOT",
}

/**
 * <p>Job log data</p>
 */
export interface JobLogEventData {
  /**
   * <p>Job Event Source Server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Job Event conversion Server ID.</p>
   */
  conversionServerID?: string;

  /**
   * <p>Job Event Target instance ID.</p>
   */
  targetInstanceID?: string;

  /**
   * <p>Job error.</p>
   */
  rawError?: string;
}

export namespace JobLogEventData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobLogEventData): any => ({
    ...obj,
  });
}

/**
 * <p>Job log.</p>
 */
export interface JobLog {
  /**
   * <p>Job log event date and time.</p>
   */
  logDateTime?: string;

  /**
   * <p>Job log event.</p>
   */
  event?: JobLogEvent | string;

  /**
   * <p>Job event data</p>
   */
  eventData?: JobLogEventData;
}

export namespace JobLog {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobLog): any => ({
    ...obj,
  });
}

export interface DescribeJobLogItemsResponse {
  /**
   * <p>Request to describe Job log response items.</p>
   */
  items?: JobLog[];

  /**
   * <p>Request to describe Job log response next token.</p>
   */
  nextToken?: string;
}

export namespace DescribeJobLogItemsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobLogItemsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Request to describe Job log filters.</p>
 */
export interface DescribeJobsRequestFilters {
  /**
   * <p>Request to describe Job log filters by job ID.</p>
   */
  jobIDs?: string[];

  /**
   * <p>Request to describe Job log filters by date.</p>
   */
  fromDate?: string;

  /**
   * <p>Request to describe Job log by last date.</p>
   */
  toDate?: string;
}

export namespace DescribeJobsRequestFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobsRequestFilters): any => ({
    ...obj,
  });
}

export interface DescribeJobsRequest {
  /**
   * <p>Request to describe Job log filters.</p>
   */
  filters: DescribeJobsRequestFilters | undefined;

  /**
   * <p>Request to describe Job log by max results.</p>
   */
  maxResults?: number;

  /**
   * <p>Request to describe Job logby next token.</p>
   */
  nextToken?: string;
}

export namespace DescribeJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobsRequest): any => ({
    ...obj,
  });
}

export enum InitiatedBy {
  DIAGNOSTIC = "DIAGNOSTIC",
  START_CUTOVER = "START_CUTOVER",
  START_TEST = "START_TEST",
  TERMINATE = "TERMINATE",
}

export enum LaunchStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  LAUNCHED = "LAUNCHED",
  PENDING = "PENDING",
  TERMINATED = "TERMINATED",
}

/**
 * <p>Server participating in Job.</p>
 */
export interface ParticipatingServer {
  /**
   * <p>Participating server Source Server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Participating server launch status.</p>
   */
  launchStatus?: LaunchStatus | string;
}

export namespace ParticipatingServer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParticipatingServer): any => ({
    ...obj,
  });
}

export enum JobStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  STARTED = "STARTED",
}

export enum JobType {
  LAUNCH = "LAUNCH",
  TERMINATE = "TERMINATE",
}

/**
 * <p>Job.</p>
 */
export interface Job {
  /**
   * <p>Job ID.</p>
   */
  jobID: string | undefined;

  /**
   * <p>the ARN of the specific Job.</p>
   */
  arn?: string;

  /**
   * <p>Job type.</p>
   */
  type?: JobType | string;

  /**
   * <p>Job initiated by field.</p>
   */
  initiatedBy?: InitiatedBy | string;

  /**
   * <p>Job creation time.</p>
   */
  creationDateTime?: string;

  /**
   * <p>Job end time.</p>
   */
  endDateTime?: string;

  /**
   * <p>Job status.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>Servers participating in a specific Job.</p>
   */
  participatingServers?: ParticipatingServer[];

  /**
   * <p>Tags associated with spcific Job.</p>
   */
  tags?: { [key: string]: string };
}

export namespace Job {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj,
    ...(obj.tags && { tags: SENSITIVE_STRING }),
  });
}

export interface DescribeJobsResponse {
  /**
   * <p>Request to describe Job log items.</p>
   */
  items?: Job[];

  /**
   * <p>Request to describe Job response by next token.</p>
   */
  nextToken?: string;
}

export namespace DescribeJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobsResponse): any => ({
    ...obj,
    ...(obj.items && { items: obj.items.map((item) => Job.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message: string | undefined;
  /**
   * <p>The server encountered an unexpected condition that prevented it from fulfilling the request. The request will be retried again after x seconds.</p>
   */
  retryAfterSeconds?: number;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>List tags for resource request by ARN.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>List tags for resource response.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
    ...(obj.tags && { tags: SENSITIVE_STRING }),
  });
}

/**
 * <p>Reached throttling quota exception.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>Reached throttling quota exception service code.</p>
   */
  serviceCode?: string;

  /**
   * <p>Reached throttling quota exception.</p>
   */
  quotaCode?: string;

  /**
   * <p>Reached throttling quota exception will retry after x seconds.</p>
   */
  retryAfterSeconds?: string;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

export enum ReplicationConfigurationDataPlaneRouting {
  PRIVATE_IP = "PRIVATE_IP",
  PUBLIC_IP = "PUBLIC_IP",
}

export enum ReplicationConfigurationDefaultLargeStagingDiskType {
  GP2 = "GP2",
  ST1 = "ST1",
}

export enum ReplicationConfigurationEbsEncryption {
  CUSTOM = "CUSTOM",
  DEFAULT = "DEFAULT",
  NONE = "NONE",
}

export interface CreateReplicationConfigurationTemplateRequest {
  /**
   * <p>Request to configure the Staging Area subnet ID during Replication Settings template creation.</p>
   */
  stagingAreaSubnetId: string | undefined;

  /**
   * <p>Request to associate the default Application Migration Service Security group with the Replication Settings template.</p>
   */
  associateDefaultSecurityGroup: boolean | undefined;

  /**
   * <p>Request to configure the Replication Server Secuirity group ID during Replication Settings template creation.</p>
   */
  replicationServersSecurityGroupsIDs: string[] | undefined;

  /**
   * <p>Request to configure the Replication Server instance type during Replication Settings template creation.</p>
   */
  replicationServerInstanceType: string | undefined;

  /**
   * <p>Request to use Dedicated Replication Servers during Replication Settings template creation.</p>
   */
  useDedicatedReplicationServer: boolean | undefined;

  /**
   * <p>Request to configure the Staging Disk EBS volume type to "gp2" during Replication Settings template creation.</p>
   */
  defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType | string | undefined;

  /**
   * <p>Request to configure EBS enryption during Replication Settings template creation.</p>
   */
  ebsEncryption: ReplicationConfigurationEbsEncryption | string | undefined;

  /**
   * <p>Request to configure an EBS enryption key during Replication Settings template creation.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Request to configure bandwidth throttling during Replication Settings template creation.</p>
   */
  bandwidthThrottling: number | undefined;

  /**
   * <p>Request to configure  data plane routing during Replication Settings template creation.</p>
   */
  dataPlaneRouting: ReplicationConfigurationDataPlaneRouting | string | undefined;

  /**
   * <p>Request to create Public IP during Replication Settings template creation.</p>
   */
  createPublicIP: boolean | undefined;

  /**
   * <p>Request to configure Staiging Area tags during Replication Settings template creation.</p>
   */
  stagingAreaTags: { [key: string]: string } | undefined;

  /**
   * <p>Request to configure tags during Replication Settings template creation.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateReplicationConfigurationTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReplicationConfigurationTemplateRequest): any => ({
    ...obj,
    ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
    ...(obj.tags && { tags: SENSITIVE_STRING }),
  });
}

export interface ReplicationConfigurationTemplate {
  /**
   * <p>Replication Configuration template template ID.</p>
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>Replication Configuration template ARN.</p>
   */
  arn?: string;

  /**
   * <p>Replication Configuration template Staging Area subnet ID.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Replication Configuration template associate default Application Migration Service Security group.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Replication Configuration template server Security Groups IDs.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Replication Configuration template server instance type.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Replication Configuration template use Dedicated Replication Server.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Replication Configuration template use dedault large Staging Disk type.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>Replication Configuration template EBS encryption.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>Replication Configuration template EBS encryption key ARN.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Replication Configuration template bandwidth throtting.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Replication Configuration template data plane routing.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Replication Configuration template create Public IP.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>Replication Configuration template Staging Area Tags.</p>
   */
  stagingAreaTags?: { [key: string]: string };

  /**
   * <p>Replication Configuration template Tags.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ReplicationConfigurationTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicationConfigurationTemplate): any => ({
    ...obj,
    ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
    ...(obj.tags && { tags: SENSITIVE_STRING }),
  });
}

export interface DeleteReplicationConfigurationTemplateRequest {
  /**
   * <p>Request to delete Replication Configuration Template from service by Replication Configuration Template ID.</p>
   */
  replicationConfigurationTemplateID: string | undefined;
}

export namespace DeleteReplicationConfigurationTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReplicationConfigurationTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteReplicationConfigurationTemplateResponse {}

export namespace DeleteReplicationConfigurationTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReplicationConfigurationTemplateResponse): any => ({
    ...obj,
  });
}

export interface DescribeReplicationConfigurationTemplatesRequest {
  /**
   * <p>Request to describe Replication Configuration template by template IDs.</p>
   */
  replicationConfigurationTemplateIDs: string[] | undefined;

  /**
   * <p>Request to describe Replication Configuration template by max results.</p>
   */
  maxResults?: number;

  /**
   * <p>Request to describe Replication Configuration template by next token.</p>
   */
  nextToken?: string;
}

export namespace DescribeReplicationConfigurationTemplatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReplicationConfigurationTemplatesRequest): any => ({
    ...obj,
  });
}

export interface DescribeReplicationConfigurationTemplatesResponse {
  /**
   * <p>Request to describe Replication Configuration template by items.</p>
   */
  items?: ReplicationConfigurationTemplate[];

  /**
   * <p>Request to describe Replication Configuration template by next token.</p>
   */
  nextToken?: string;
}

export namespace DescribeReplicationConfigurationTemplatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReplicationConfigurationTemplatesResponse): any => ({
    ...obj,
    ...(obj.items && { items: obj.items.map((item) => ReplicationConfigurationTemplate.filterSensitiveLog(item)) }),
  });
}

export interface UpdateReplicationConfigurationTemplateRequest {
  /**
   * <p>Update replication configuration template template ID request.</p>
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>Update replication configuration template ARN request.</p>
   */
  arn?: string;

  /**
   * <p>Update replication configuration template Staging Area subnet ID request.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Update replication configuration template associate default Application Migration Service Security group request.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Update replication configuration template Replication Server Security groups IDs request.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Update replication configuration template Replication Server instance type request.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Update replication configuration template use dedicated Replication Server request.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Update replication configuration template use default large Staging Disk type request.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>Update replication configuration template EBS encryption request.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>Update replication configuration template EBS encryption key ARN request.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Update replication configuration template bandwidth throttling request.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Update replication configuration template data plane routing request.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Update replication configuration template create Public IP request.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>Update replication configuration template Staging Area Tags request.</p>
   */
  stagingAreaTags?: { [key: string]: string };
}

export namespace UpdateReplicationConfigurationTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReplicationConfigurationTemplateRequest): any => ({
    ...obj,
    ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
  });
}

export enum ChangeServerLifeCycleStateSourceServerLifecycleState {
  CUTOVER = "CUTOVER",
  READY_FOR_CUTOVER = "READY_FOR_CUTOVER",
  READY_FOR_TEST = "READY_FOR_TEST",
}

/**
 * <p>The request to change the source server migration lifecycle state.</p>
 */
export interface ChangeServerLifeCycleStateSourceServerLifecycle {
  /**
   * <p>The request to change the source server migration lifecycle state.</p>
   */
  state: ChangeServerLifeCycleStateSourceServerLifecycleState | string | undefined;
}

export namespace ChangeServerLifeCycleStateSourceServerLifecycle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeServerLifeCycleStateSourceServerLifecycle): any => ({
    ...obj,
  });
}

export interface ChangeServerLifeCycleStateRequest {
  /**
   * <p>The request to change the source server migration lifecycle state by source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>The request to change the source server migration lifecycle state.</p>
   */
  lifeCycle: ChangeServerLifeCycleStateSourceServerLifecycle | undefined;
}

export namespace ChangeServerLifeCycleStateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeServerLifeCycleStateRequest): any => ({
    ...obj,
  });
}

export enum DataReplicationErrorString {
  AGENT_NOT_SEEN = "AGENT_NOT_SEEN",
  FAILED_TO_ATTACH_STAGING_DISKS = "FAILED_TO_ATTACH_STAGING_DISKS",
  FAILED_TO_AUTHENTICATE_WITH_SERVICE = "FAILED_TO_AUTHENTICATE_WITH_SERVICE",
  FAILED_TO_BOOT_REPLICATION_SERVER = "FAILED_TO_BOOT_REPLICATION_SERVER",
  FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER = "FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER",
  FAILED_TO_CREATE_SECURITY_GROUP = "FAILED_TO_CREATE_SECURITY_GROUP",
  FAILED_TO_CREATE_STAGING_DISKS = "FAILED_TO_CREATE_STAGING_DISKS",
  FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE = "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE",
  FAILED_TO_LAUNCH_REPLICATION_SERVER = "FAILED_TO_LAUNCH_REPLICATION_SERVER",
  FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT = "FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT",
  FAILED_TO_START_DATA_TRANSFER = "FAILED_TO_START_DATA_TRANSFER",
  NOT_CONVERGING = "NOT_CONVERGING",
  SNAPSHOTS_FAILURE = "SNAPSHOTS_FAILURE",
  UNSTABLE_NETWORK = "UNSTABLE_NETWORK",
}

/**
 * <p>Error in data replication.</p>
 */
export interface DataReplicationError {
  /**
   * <p>Error in data replication.</p>
   */
  error?: DataReplicationErrorString | string;

  /**
   * <p>Error in data replication.</p>
   */
  rawError?: string;
}

export namespace DataReplicationError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataReplicationError): any => ({
    ...obj,
  });
}

export enum DataReplicationInitiationStepName {
  ATTACH_STAGING_DISKS = "ATTACH_STAGING_DISKS",
  AUTHENTICATE_WITH_SERVICE = "AUTHENTICATE_WITH_SERVICE",
  BOOT_REPLICATION_SERVER = "BOOT_REPLICATION_SERVER",
  CONNECT_AGENT_TO_REPLICATION_SERVER = "CONNECT_AGENT_TO_REPLICATION_SERVER",
  CREATE_SECURITY_GROUP = "CREATE_SECURITY_GROUP",
  CREATE_STAGING_DISKS = "CREATE_STAGING_DISKS",
  DOWNLOAD_REPLICATION_SOFTWARE = "DOWNLOAD_REPLICATION_SOFTWARE",
  LAUNCH_REPLICATION_SERVER = "LAUNCH_REPLICATION_SERVER",
  PAIR_REPLICATION_SERVER_WITH_AGENT = "PAIR_REPLICATION_SERVER_WITH_AGENT",
  START_DATA_TRANSFER = "START_DATA_TRANSFER",
  WAIT = "WAIT",
}

export enum DataReplicationInitiationStepStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
  SKIPPED = "SKIPPED",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Data replication intiation step.</p>
 */
export interface DataReplicationInitiationStep {
  /**
   * <p>Request to query data initiation step name.</p>
   */
  name?: DataReplicationInitiationStepName | string;

  /**
   * <p>Request to query data initiation status.</p>
   */
  status?: DataReplicationInitiationStepStatus | string;
}

export namespace DataReplicationInitiationStep {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataReplicationInitiationStep): any => ({
    ...obj,
  });
}

/**
 * <p>Data replication initiation.</p>
 */
export interface DataReplicationInitiation {
  /**
   * <p>Request to query data initiation start date and time.</p>
   */
  startDateTime?: string;

  /**
   * <p>Request to query next data initiation date and time.</p>
   */
  nextAttemptDateTime?: string;

  /**
   * <p>Request to query data initiation steps.</p>
   */
  steps?: DataReplicationInitiationStep[];
}

export namespace DataReplicationInitiation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataReplicationInitiation): any => ({
    ...obj,
  });
}

export enum DataReplicationState {
  BACKLOG = "BACKLOG",
  CONTINUOUS = "CONTINUOUS",
  CREATING_SNAPSHOT = "CREATING_SNAPSHOT",
  DISCONNECTED = "DISCONNECTED",
  INITIAL_SYNC = "INITIAL_SYNC",
  INITIATING = "INITIATING",
  PAUSED = "PAUSED",
  RESCAN = "RESCAN",
  STALLED = "STALLED",
  STOPPED = "STOPPED",
}

/**
 * <p>Request to query disks replicated.</p>
 */
export interface DataReplicationInfoReplicatedDisk {
  /**
   * <p>Request to query device name.</p>
   */
  deviceName?: string;

  /**
   * <p>Request to query total amount of data replicated in bytes.</p>
   */
  totalStorageBytes?: number;

  /**
   * <p>Request to query amount of data replicated in bytes.</p>
   */
  replicatedStorageBytes?: number;

  /**
   * <p>Request to query amount of data rescanned in bytes.</p>
   */
  rescannedStorageBytes?: number;

  /**
   * <p>Request to query data replication backlog size in bytes.</p>
   */
  backloggedStorageBytes?: number;
}

export namespace DataReplicationInfoReplicatedDisk {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataReplicationInfoReplicatedDisk): any => ({
    ...obj,
  });
}

/**
 * <p>Request data replication info.</p>
 */
export interface DataReplicationInfo {
  /**
   * <p>Request to query data replication lag durating.</p>
   */
  lagDuration?: string;

  /**
   * <p>Request to query the time when data replication will be complete.</p>
   */
  etaDateTime?: string;

  /**
   * <p>Request to query disks replicated.</p>
   */
  replicatedDisks?: DataReplicationInfoReplicatedDisk[];

  /**
   * <p>Request to query the data replication state.</p>
   */
  dataReplicationState?: DataReplicationState | string;

  /**
   * <p>Request to query whether data replication has been initiated.</p>
   */
  dataReplicationInitiation?: DataReplicationInitiation;

  /**
   * <p>Error in obtaining data replication info.</p>
   */
  dataReplicationError?: DataReplicationError;
}

export namespace DataReplicationInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataReplicationInfo): any => ({
    ...obj,
  });
}

export enum FirstBoot {
  STOPPED = "STOPPED",
  SUCCEEDED = "SUCCEEDED",
  UNKNOWN = "UNKNOWN",
  WAITING = "WAITING",
}

/**
 * <p>Configure launced instance.</p>
 */
export interface LaunchedInstance {
  /**
   * <p>Configure launced instance EC2 ID.</p>
   */
  ec2InstanceID?: string;

  /**
   * <p>Configure launced instance Job ID.</p>
   */
  jobID?: string;

  /**
   * <p>Configure launced instance first boot.</p>
   */
  firstBoot?: FirstBoot | string;
}

export namespace LaunchedInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchedInstance): any => ({
    ...obj,
  });
}

/**
 * <p>Lifecycle Cutover finalized</p>
 */
export interface LifeCycleLastCutoverFinalized {
  /**
   * <p>Lifecycle Cutover finalized date and time.</p>
   */
  apiCallDateTime?: string;
}

export namespace LifeCycleLastCutoverFinalized {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifeCycleLastCutoverFinalized): any => ({
    ...obj,
  });
}

/**
 * <p>Lifecycle last Cutover initiated.</p>
 */
export interface LifeCycleLastCutoverInitiated {
  /**
   * <p/>
   */
  apiCallDateTime?: string;

  /**
   * <p>Lifecycle last Cutover initiated by Job ID.</p>
   */
  jobID?: string;
}

export namespace LifeCycleLastCutoverInitiated {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifeCycleLastCutoverInitiated): any => ({
    ...obj,
  });
}

/**
 * <p>Lifecycle last Cutover reverted.</p>
 */
export interface LifeCycleLastCutoverReverted {
  /**
   * <p>Lifecycle last Cutover reverted API call date time.</p>
   */
  apiCallDateTime?: string;
}

export namespace LifeCycleLastCutoverReverted {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifeCycleLastCutoverReverted): any => ({
    ...obj,
  });
}

/**
 * <p>Lifecycle last Cutover .</p>
 */
export interface LifeCycleLastCutover {
  /**
   * <p>Lifecycle last Cutover initiated.</p>
   */
  initiated?: LifeCycleLastCutoverInitiated;

  /**
   * <p>Lifecycle last Cutover reverted.</p>
   */
  reverted?: LifeCycleLastCutoverReverted;

  /**
   * <p>Lifecycle Cutover finalized date and time.</p>
   */
  finalized?: LifeCycleLastCutoverFinalized;
}

export namespace LifeCycleLastCutover {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifeCycleLastCutover): any => ({
    ...obj,
  });
}

/**
 * <p>Lifecycle last Test finlized.</p>
 */
export interface LifeCycleLastTestFinalized {
  /**
   * <p>Lifecycle Test failed API call date and time.</p>
   */
  apiCallDateTime?: string;
}

export namespace LifeCycleLastTestFinalized {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifeCycleLastTestFinalized): any => ({
    ...obj,
  });
}

/**
 * <p>Lifecycle last Test initiated.</p>
 */
export interface LifeCycleLastTestInitiated {
  /**
   * <p>Lifecycle last Test initiated API call date and time.</p>
   */
  apiCallDateTime?: string;

  /**
   * <p>Lifecycle last Test initiated Job ID.</p>
   */
  jobID?: string;
}

export namespace LifeCycleLastTestInitiated {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifeCycleLastTestInitiated): any => ({
    ...obj,
  });
}

/**
 * <p>Lifecycle last Test reverted.</p>
 */
export interface LifeCycleLastTestReverted {
  /**
   * <p>Lifecycle last Test reverted API call date and time.</p>
   */
  apiCallDateTime?: string;
}

export namespace LifeCycleLastTestReverted {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifeCycleLastTestReverted): any => ({
    ...obj,
  });
}

/**
 * <p>Lifecycle last Test.</p>
 */
export interface LifeCycleLastTest {
  /**
   * <p>Lifecycle last Test initiated.</p>
   */
  initiated?: LifeCycleLastTestInitiated;

  /**
   * <p>Lifecycle last Test reverted.</p>
   */
  reverted?: LifeCycleLastTestReverted;

  /**
   * <p>Lifecycle last Test finlized.</p>
   */
  finalized?: LifeCycleLastTestFinalized;
}

export namespace LifeCycleLastTest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifeCycleLastTest): any => ({
    ...obj,
  });
}

export enum LifeCycleState {
  CUTOVER = "CUTOVER",
  CUTTING_OVER = "CUTTING_OVER",
  DISCONNECTED = "DISCONNECTED",
  NOT_READY = "NOT_READY",
  READY_FOR_CUTOVER = "READY_FOR_CUTOVER",
  READY_FOR_TEST = "READY_FOR_TEST",
  STOPPED = "STOPPED",
  TESTING = "TESTING",
}

/**
 * <p>Lifecycle.</p>
 */
export interface LifeCycle {
  /**
   * <p>Lifecycle added to service data and time.</p>
   */
  addedToServiceDateTime?: string;

  /**
   * <p>Lifecycle replication initiation date and time.</p>
   */
  firstByteDateTime?: string;

  /**
   * <p>Lifecycle elapsed time and duration.</p>
   */
  elapsedReplicationDuration?: string;

  /**
   * <p>Lifecycle last seen date and time.</p>
   */
  lastSeenByServiceDateTime?: string;

  /**
   * <p>Lifecycle last Test.</p>
   */
  lastTest?: LifeCycleLastTest;

  /**
   * <p>Lifecycle last Cutover.</p>
   */
  lastCutover?: LifeCycleLastCutover;

  /**
   * <p>Lifecycle state.</p>
   */
  state?: LifeCycleState | string;
}

export namespace LifeCycle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifeCycle): any => ({
    ...obj,
  });
}

/**
 * <p>Source server CPU information.</p>
 */
export interface CPU {
  /**
   * <p>The number of CPU cores on the source server.</p>
   */
  cores?: number;

  /**
   * <p>The source server's CPU model name.</p>
   */
  modelName?: string;
}

export namespace CPU {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CPU): any => ({
    ...obj,
  });
}

/**
 * <p>The disk identifier.</p>
 */
export interface Disk {
  /**
   * <p>The disk or device name.</p>
   */
  deviceName?: string;

  /**
   * <p>The amount of storage on the disk in bytes.</p>
   */
  bytes?: number;
}

export namespace Disk {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Disk): any => ({
    ...obj,
  });
}

/**
 * <p>Identification hints.</p>
 */
export interface IdentificationHints {
  /**
   * <p>FQDN address identification hint.</p>
   */
  fqdn?: string;

  /**
   * <p>Hostname identification hint.</p>
   */
  hostname?: string;

  /**
   * <p>vmWare UUID identification hint.</p>
   */
  vmWareUuid?: string;

  /**
   * <p>AWS Instance ID identification hint.</p>
   */
  awsInstanceID?: string;
}

export namespace IdentificationHints {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdentificationHints): any => ({
    ...obj,
  });
}

/**
 * <p>Network interface.</p>
 */
export interface NetworkInterface {
  /**
   * <p>Network interface Mac address.</p>
   */
  macAddress?: string;

  /**
   * <p>Network interface IPs.</p>
   */
  ips?: string[];

  /**
   * <p>Network interface primary IP.</p>
   */
  isPrimary?: boolean;
}

export namespace NetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
}

/**
 * <p>Operating System.</p>
 */
export interface OS {
  /**
   * <p>OS full string.</p>
   */
  fullString?: string;
}

export namespace OS {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OS): any => ({
    ...obj,
  });
}

/**
 * <p>Source server properties.</p>
 */
export interface SourceProperties {
  /**
   * <p>Source server last update date and time.</p>
   */
  lastUpdatedDateTime?: string;

  /**
   * <p>Source server recommended instance type.</p>
   */
  recommendedInstanceType?: string;

  /**
   * <p>Source server identification hints.</p>
   */
  identificationHints?: IdentificationHints;

  /**
   * <p>Source server network interfaces.</p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p>Source Server disks.</p>
   */
  disks?: Disk[];

  /**
   * <p>Source Server CPUs.</p>
   */
  cpus?: CPU[];

  /**
   * <p>Source server RAM in bytes.</p>
   */
  ramBytes?: number;

  /**
   * <p>Source server OS.</p>
   */
  os?: OS;
}

export namespace SourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceProperties): any => ({
    ...obj,
  });
}

export interface SourceServer {
  /**
   * <p>Source server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Source server ARN.</p>
   */
  arn?: string;

  /**
   * <p>Source server archived status.</p>
   */
  isArchived?: boolean;

  /**
   * <p>Source server Tags.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Source server launched instance.</p>
   */
  launchedInstance?: LaunchedInstance;

  /**
   * <p>Source server data replication info.</p>
   */
  dataReplicationInfo?: DataReplicationInfo;

  /**
   * <p>Source server lifecycle state.</p>
   */
  lifeCycle?: LifeCycle;

  /**
   * <p>Source server properties.</p>
   */
  sourceProperties?: SourceProperties;
}

export namespace SourceServer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceServer): any => ({
    ...obj,
    ...(obj.tags && { tags: SENSITIVE_STRING }),
  });
}

export interface DeleteSourceServerRequest {
  /**
   * <p>Request to delete Source Server from service by Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export namespace DeleteSourceServerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSourceServerRequest): any => ({
    ...obj,
  });
}

export interface DeleteSourceServerResponse {}

export namespace DeleteSourceServerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSourceServerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Request to filter Source Servers list.</p>
 */
export interface DescribeSourceServersRequestFilters {
  /**
   * <p>Request to filter Source Servers list by Source Server ID.</p>
   */
  sourceServerIDs?: string[];

  /**
   * <p>Request to filter Source Servers list by archived.</p>
   */
  isArchived?: boolean;
}

export namespace DescribeSourceServersRequestFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSourceServersRequestFilters): any => ({
    ...obj,
  });
}

export interface DescribeSourceServersRequest {
  /**
   * <p>Request to filter Source Servers list.</p>
   */
  filters: DescribeSourceServersRequestFilters | undefined;

  /**
   * <p>Request to filter Source Servers list by maximum results.</p>
   */
  maxResults?: number;

  /**
   * <p>Request to filter Source Servers list by next token.</p>
   */
  nextToken?: string;
}

export namespace DescribeSourceServersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSourceServersRequest): any => ({
    ...obj,
  });
}

export interface DescribeSourceServersResponse {
  /**
   * <p>Request to filter Source Servers list by item.</p>
   */
  items?: SourceServer[];

  /**
   * <p>Request to filter Source Servers next token.</p>
   */
  nextToken?: string;
}

export namespace DescribeSourceServersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSourceServersResponse): any => ({
    ...obj,
    ...(obj.items && { items: obj.items.map((item) => SourceServer.filterSensitiveLog(item)) }),
  });
}

export interface DisconnectFromServiceRequest {
  /**
   * <p>Request to disconnect Source Server from service by Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export namespace DisconnectFromServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisconnectFromServiceRequest): any => ({
    ...obj,
  });
}

export interface FinalizeCutoverRequest {
  /**
   * <p>Request to finalize Cutover by Soure Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export namespace FinalizeCutoverRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FinalizeCutoverRequest): any => ({
    ...obj,
  });
}

export interface GetLaunchConfigurationRequest {
  /**
   * <p>Request to get Launch Configuration information by Source Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export namespace GetLaunchConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLaunchConfigurationRequest): any => ({
    ...obj,
  });
}

export enum LaunchDisposition {
  STARTED = "STARTED",
  STOPPED = "STOPPED",
}

/**
 * <p>Configure Licensing.</p>
 */
export interface Licensing {
  /**
   * <p>Configure BYOL OS licensing.</p>
   */
  osByol?: boolean;
}

export namespace Licensing {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Licensing): any => ({
    ...obj,
  });
}

export enum TargetInstanceTypeRightSizingMethod {
  BASIC = "BASIC",
  NONE = "NONE",
}

export interface LaunchConfiguration {
  /**
   * <p>Configure launch configuration Source Server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Configure launch configuration name.</p>
   */
  name?: string;

  /**
   * <p>Configure EC2 lauch configuration template ID.</p>
   */
  ec2LaunchTemplateID?: string;

  /**
   * <p>Configure launch dispostion for launch configuration.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Configure launch configuration Target instance type right sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Copy Private IP during Launch Configuration.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Copy Tags during Launch Configuration.</p>
   */
  copyTags?: boolean;

  /**
   * <p>Configure launch configuration OS licensing.</p>
   */
  licensing?: Licensing;
}

export namespace LaunchConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchConfiguration): any => ({
    ...obj,
  });
}

export interface GetReplicationConfigurationRequest {
  /**
   * <p>Request to get Replication Configuaration by Source Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export namespace GetReplicationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReplicationConfigurationRequest): any => ({
    ...obj,
  });
}

export enum ReplicationConfigurationReplicatedDiskStagingDiskType {
  AUTO = "AUTO",
  GP2 = "GP2",
  IO1 = "IO1",
  SC1 = "SC1",
  ST1 = "ST1",
  STANDARD = "STANDARD",
}

/**
 * <p>Replication Configuration replicated disk.</p>
 */
export interface ReplicationConfigurationReplicatedDisk {
  /**
   * <p>Replication Configuration replicated disk device name.</p>
   */
  deviceName?: string;

  /**
   * <p>Replication Configuration replicated disk boot disk.</p>
   */
  isBootDisk?: boolean;

  /**
   * <p>Replication Configuration replicated disk staging disk type.</p>
   */
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | string;

  /**
   * <p>Replication Configuration replicated disk IOPs.</p>
   */
  iops?: number;
}

export namespace ReplicationConfigurationReplicatedDisk {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicationConfigurationReplicatedDisk): any => ({
    ...obj,
  });
}

export interface ReplicationConfiguration {
  /**
   * <p>Replication Configuration Source Server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Replication Configuration name.</p>
   */
  name?: string;

  /**
   * <p>Replication Configuration Staging Area subnet ID.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Replication Configuration associate default Application Migration Service Security Group.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Replication Configuration Replication Server Security Group IDs.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Replication Configuration Replication Server instance type.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Replication Configuration use Dedicated Replication Server.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Replication Configuration use default large Staging Disks.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>Replication Configuration replicated disks.</p>
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * <p>Replication Configuration EBS encryption.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>Replication Configuration EBS encryption key ARN.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Replication Configuration set bandwidth throttling.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Replication Configuration data plane routing.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Replication Configuration create Public IP.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>Replication Configuration Staging Area tags.</p>
   */
  stagingAreaTags?: { [key: string]: string };
}

export namespace ReplicationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicationConfiguration): any => ({
    ...obj,
    ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
  });
}

export interface MarkAsArchivedRequest {
  /**
   * <p>Mark as archived by Source Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export namespace MarkAsArchivedRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MarkAsArchivedRequest): any => ({
    ...obj,
  });
}

export interface RetryDataReplicationRequest {
  /**
   * <p>Retry data replication for Source Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export namespace RetryDataReplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetryDataReplicationRequest): any => ({
    ...obj,
  });
}

export interface StartCutoverRequest {
  /**
   * <p>Start Cutover by Source Server IDs.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Start Cutover by Tags.</p>
   */
  tags?: { [key: string]: string };
}

export namespace StartCutoverRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCutoverRequest): any => ({
    ...obj,
    ...(obj.tags && { tags: SENSITIVE_STRING }),
  });
}

export interface StartCutoverResponse {
  /**
   * <p>Start Cutover Job response.</p>
   */
  job?: Job;
}

export namespace StartCutoverResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCutoverResponse): any => ({
    ...obj,
    ...(obj.job && { job: Job.filterSensitiveLog(obj.job) }),
  });
}

export interface StartTestRequest {
  /**
   * <p>Start Test for Source Server IDs.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Start Test by Tags.</p>
   */
  tags?: { [key: string]: string };
}

export namespace StartTestRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTestRequest): any => ({
    ...obj,
    ...(obj.tags && { tags: SENSITIVE_STRING }),
  });
}

export interface StartTestResponse {
  /**
   * <p>Start Test Job response.</p>
   */
  job?: Job;
}

export namespace StartTestResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTestResponse): any => ({
    ...obj,
    ...(obj.job && { job: Job.filterSensitiveLog(obj.job) }),
  });
}

export interface TerminateTargetInstancesRequest {
  /**
   * <p>Terminate Target instance by Source Server IDs.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Terminate Target instance by Tags.</p>
   */
  tags?: { [key: string]: string };
}

export namespace TerminateTargetInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateTargetInstancesRequest): any => ({
    ...obj,
    ...(obj.tags && { tags: SENSITIVE_STRING }),
  });
}

export interface TerminateTargetInstancesResponse {
  /**
   * <p>Terminate Target instance Job response.</p>
   */
  job?: Job;
}

export namespace TerminateTargetInstancesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateTargetInstancesResponse): any => ({
    ...obj,
    ...(obj.job && { job: Job.filterSensitiveLog(obj.job) }),
  });
}

export interface UpdateLaunchConfigurationRequest {
  /**
   * <p>Update Launch configuration by Source Server ID request.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Update Launch configuration name request.</p>
   */
  name?: string;

  /**
   * <p>Update Launch configuration launch disposition request.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Update Launch configuration Target instance right sizing request.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Update Launch configuration copy Private IP request.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Update Launch configuration copy Tags request.</p>
   */
  copyTags?: boolean;

  /**
   * <p>Update Launch configuration licensing request.</p>
   */
  licensing?: Licensing;
}

export namespace UpdateLaunchConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLaunchConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateReplicationConfigurationRequest {
  /**
   * <p>Update replication configuration Source Server ID request.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Update replication configuration name request.</p>
   */
  name?: string;

  /**
   * <p>Update replication configuration Staging Area subnet request.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Update replication configuration associate default Application Migration Service Security group request.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Update replication configuration Replication Server Security Groups IDs request.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Update replication configuration Replication Server instance type request.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Update replication configuration use dedicated Replication Server request.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Update replication configuration use default large Staging Disk type request.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>Update replication configuration replicated disks request.</p>
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * <p>Update replication configuration EBS encryption request.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>Update replication configuration EBS encryption key ARN request.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Update replication configuration bandwidth throttling request.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Update replication configuration data plane routing request.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Update replication configuration create Public IP request.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>Update replication configuration Staging Area Tags request.</p>
   */
  stagingAreaTags?: { [key: string]: string };
}

export namespace UpdateReplicationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReplicationConfigurationRequest): any => ({
    ...obj,
    ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
  });
}

export interface TagResourceRequest {
  /**
   * <p>Tag resource by ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Tag resource by Tags.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
    ...(obj.tags && { tags: SENSITIVE_STRING }),
  });
}

export interface UntagResourceRequest {
  /**
   * <p>Untag resource by ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Untag resource by Keys.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
    ...(obj.tagKeys && { tagKeys: SENSITIVE_STRING }),
  });
}
