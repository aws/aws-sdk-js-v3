// smithy-typescript generated code
import type {
  ActionCategory,
  AnalyzerType,
  ApplicationHealthStatus,
  ApplicationProgressStatus,
  BootMode,
  ChangeServerLifeCycleStateSourceServerLifecycleState,
  CodeGenerationOutputFormatStatus,
  CodeGenerationOutputFormatType,
  DataReplicationErrorString,
  DataReplicationInitiationStepName,
  DataReplicationInitiationStepStatus,
  DataReplicationState,
  EncryptionAlgorithm,
  ExecutionStage,
  ExecutionStageActivity,
  ExecutionStatus,
  ExportStatus,
  FirstBoot,
  ImportErrorType,
  ImportFileEnrichmentStatus,
  ImportStatus,
  InitiatedBy,
  InternetProtocol,
  IpAssignmentStrategy,
  JobLogEvent,
  JobStatus,
  JobType,
  LastKnownCheckStatus,
  LastKnownCheckType,
  LaunchDisposition,
  LaunchStatus,
  LifeCycleState,
  NetworkMigrationAnalysisResultStatus,
  NetworkMigrationCodeGenerationArtifactSubType,
  NetworkMigrationCodeGenerationArtifactType,
  NetworkMigrationCodeGenerationSegmentType,
  NetworkMigrationDeployedStackStatus,
  NetworkMigrationFailedResourceStatus,
  NetworkMigrationJobStatus,
  NetworkMigrationMapperSegmentType,
  PostLaunchActionExecutionStatus,
  PostLaunchActionsDeploymentType,
  ReplicationConfigurationDataPlaneRouting,
  ReplicationConfigurationDefaultLargeStagingDiskType,
  ReplicationConfigurationEbsEncryption,
  ReplicationConfigurationReplicatedDiskStagingDiskType,
  ReplicationType,
  SecurityGroupMappingStrategy,
  SourceEnvironment,
  SsmDocumentType,
  SsmParameterStoreParameterType,
  StorageType,
  TargetDeployment,
  TargetInstanceTypeRightSizingMethod,
  TargetNetworkTopology,
  VolumeType,
  VpcProvisioningStrategy,
  WaveHealthStatus,
  WaveProgressStatus,
} from "./enums";

/**
 * Application aggregated status.
 *
 * @public
 */
export interface ApplicationAggregatedStatus {
  /**
   * Application aggregated status last update dateTime.
   *
   * @public
   */
  lastUpdateDateTime?: string | undefined;

  /**
   * Application aggregated status health status.
   *
   * @public
   */
  healthStatus?: ApplicationHealthStatus | undefined;

  /**
   * Application aggregated status progress status.
   *
   * @public
   */
  progressStatus?: ApplicationProgressStatus | undefined;

  /**
   * Application aggregated status total source servers amount.
   *
   * @public
   */
  totalSourceServers?: number | undefined;
}

/**
 * @public
 */
export interface Application {
  /**
   * Application ID.
   *
   * @public
   */
  applicationID?: string | undefined;

  /**
   * Application ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Application name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Application description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Application archival status.
   *
   * @public
   */
  isArchived?: boolean | undefined;

  /**
   * Application aggregated status.
   *
   * @public
   */
  applicationAggregatedStatus?: ApplicationAggregatedStatus | undefined;

  /**
   * Application creation dateTime.
   *
   * @public
   */
  creationDateTime?: string | undefined;

  /**
   * Application last modified dateTime.
   *
   * @public
   */
  lastModifiedDateTime?: string | undefined;

  /**
   * Application tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Application wave ID.
   *
   * @public
   */
  waveID?: string | undefined;
}

/**
 * @public
 */
export interface ArchiveApplicationRequest {
  /**
   * Application ID.
   *
   * @public
   */
  applicationID: string | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * Error details.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * Error details message.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * Error details code.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * Error details resourceId.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * Error details resourceType.
   *
   * @public
   */
  resourceType?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSourceServersRequest {
  /**
   * Application ID.
   *
   * @public
   */
  applicationID: string | undefined;

  /**
   * Source server IDs list.
   *
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSourceServersResponse {}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * Application name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Application description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Application tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * Application ID.
   *
   * @public
   */
  applicationID: string | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface DisassociateSourceServersRequest {
  /**
   * Application ID.
   *
   * @public
   */
  applicationID: string | undefined;

  /**
   * Source server IDs list.
   *
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceServersResponse {}

/**
 * Applications list filters.
 *
 * @public
 */
export interface ListApplicationsRequestFilters {
  /**
   * Filter applications list by application ID.
   *
   * @public
   */
  applicationIDs?: string[] | undefined;

  /**
   * Filter applications list by archival status.
   *
   * @public
   */
  isArchived?: boolean | undefined;

  /**
   * Filter applications list by wave ID.
   *
   * @public
   */
  waveIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * Applications list filters.
   *
   * @public
   */
  filters?: ListApplicationsRequestFilters | undefined;

  /**
   * Maximum results to return when listing applications.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Request next token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Applications list Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * Applications list.
   *
   * @public
   */
  items?: Application[] | undefined;

  /**
   * Response next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UnarchiveApplicationRequest {
  /**
   * Application ID.
   *
   * @public
   */
  applicationID: string | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * Application ID.
   *
   * @public
   */
  applicationID: string | undefined;

  /**
   * Application name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Application description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * Connector SSM command config.
 *
 * @public
 */
export interface ConnectorSsmCommandConfig {
  /**
   * Connector SSM command config S3 output enabled.
   *
   * @public
   */
  s3OutputEnabled: boolean | undefined;

  /**
   * Connector SSM command config output S3 bucket name.
   *
   * @public
   */
  outputS3BucketName?: string | undefined;

  /**
   * Connector SSM command config CloudWatch output enabled.
   *
   * @public
   */
  cloudWatchOutputEnabled: boolean | undefined;

  /**
   * Connector SSM command config CloudWatch log group name.
   *
   * @public
   */
  cloudWatchLogGroupName?: string | undefined;
}

/**
 * @public
 */
export interface Connector {
  /**
   * Connector ID.
   *
   * @public
   */
  connectorID?: string | undefined;

  /**
   * Connector name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Connector SSM instance ID.
   *
   * @public
   */
  ssmInstanceID?: string | undefined;

  /**
   * Connector arn.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Connector tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Connector SSM command config.
   *
   * @public
   */
  ssmCommandConfig?: ConnectorSsmCommandConfig | undefined;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * Create Connector request name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Create Connector request SSM instance ID.
   *
   * @public
   */
  ssmInstanceID: string | undefined;

  /**
   * Create Connector request tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Create Connector request SSM command config.
   *
   * @public
   */
  ssmCommandConfig?: ConnectorSsmCommandConfig | undefined;
}

/**
 * Validate exception field.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * Validate exception field name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Validate exception field message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * Delete Connector request connector ID.
   *
   * @public
   */
  connectorID: string | undefined;
}

/**
 * List Connectors Request Filters.
 *
 * @public
 */
export interface ListConnectorsRequestFilters {
  /**
   * List Connectors Request Filters connector IDs.
   *
   * @public
   */
  connectorIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * List Connectors Request filters.
   *
   * @public
   */
  filters?: ListConnectorsRequestFilters | undefined;

  /**
   * List Connectors Request max results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * List Connectors Request next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * List connectors response items.
   *
   * @public
   */
  items?: Connector[] | undefined;

  /**
   * List connectors response next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorRequest {
  /**
   * Update Connector request connector ID.
   *
   * @public
   */
  connectorID: string | undefined;

  /**
   * Update Connector request name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Update Connector request SSM command config.
   *
   * @public
   */
  ssmCommandConfig?: ConnectorSsmCommandConfig | undefined;
}

/**
 * List export errors request.
 *
 * @public
 */
export interface ListExportErrorsRequest {
  /**
   * List export errors request export id.
   *
   * @public
   */
  exportID: string | undefined;

  /**
   * List export errors request max results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * List export errors request next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Export errors data.
 *
 * @public
 */
export interface ExportErrorData {
  /**
   * Export errors data raw error.
   *
   * @public
   */
  rawError?: string | undefined;
}

/**
 * Export task error.
 *
 * @public
 */
export interface ExportTaskError {
  /**
   * Export task error datetime.
   *
   * @public
   */
  errorDateTime?: string | undefined;

  /**
   * Export task error data.
   *
   * @public
   */
  errorData?: ExportErrorData | undefined;
}

/**
 * List export errors response.
 *
 * @public
 */
export interface ListExportErrorsResponse {
  /**
   * List export errors response items.
   *
   * @public
   */
  items?: ExportTaskError[] | undefined;

  /**
   * List export errors response next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * List exports request filters.
 *
 * @public
 */
export interface ListExportsRequestFilters {
  /**
   * List exports request filters export ids.
   *
   * @public
   */
  exportIDs?: string[] | undefined;
}

/**
 * List export request.
 *
 * @public
 */
export interface ListExportsRequest {
  /**
   * List exports request filters.
   *
   * @public
   */
  filters?: ListExportsRequestFilters | undefined;

  /**
   * List export request max results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * List export request next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Export task summary.
 *
 * @public
 */
export interface ExportTaskSummary {
  /**
   * Export task summary servers count.
   *
   * @public
   */
  serversCount?: number | undefined;

  /**
   * Export task summary applications count.
   *
   * @public
   */
  applicationsCount?: number | undefined;

  /**
   * Export task summary waves count.
   *
   * @public
   */
  wavesCount?: number | undefined;
}

/**
 * Export task.
 *
 * @public
 */
export interface ExportTask {
  /**
   * Export task id.
   *
   * @public
   */
  exportID?: string | undefined;

  /**
   * ExportTask arn.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Export task s3 bucket.
   *
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * Export task s3 key.
   *
   * @public
   */
  s3Key?: string | undefined;

  /**
   * Export task s3 bucket owner.
   *
   * @public
   */
  s3BucketOwner?: string | undefined;

  /**
   * Export task creation datetime.
   *
   * @public
   */
  creationDateTime?: string | undefined;

  /**
   * Export task end datetime.
   *
   * @public
   */
  endDateTime?: string | undefined;

  /**
   * Export task status.
   *
   * @public
   */
  status?: ExportStatus | undefined;

  /**
   * Export task progress percentage.
   *
   * @public
   */
  progressPercentage?: number | undefined;

  /**
   * Export task summary.
   *
   * @public
   */
  summary?: ExportTaskSummary | undefined;

  /**
   * Export task tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * List export response.
 *
 * @public
 */
export interface ListExportsResponse {
  /**
   * List export response items.
   *
   * @public
   */
  items?: ExportTask[] | undefined;

  /**
   * List export response next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Start export request.
 *
 * @public
 */
export interface StartExportRequest {
  /**
   * Start export request s3 bucket.
   *
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * Start export request s3key.
   *
   * @public
   */
  s3Key: string | undefined;

  /**
   * Start export request s3 bucket owner.
   *
   * @public
   */
  s3BucketOwner?: string | undefined;

  /**
   * Start export request tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Start export response.
 *
 * @public
 */
export interface StartExportResponse {
  /**
   * Start export response export task.
   *
   * @public
   */
  exportTask?: ExportTask | undefined;
}

/**
 * List import errors request.
 *
 * @public
 */
export interface ListImportErrorsRequest {
  /**
   * List import errors request import id.
   *
   * @public
   */
  importID: string | undefined;

  /**
   * List import errors request max results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * List import errors request next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Import error data.
 *
 * @public
 */
export interface ImportErrorData {
  /**
   * Import error data source server ID.
   *
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * Import error data application ID.
   *
   * @public
   */
  applicationID?: string | undefined;

  /**
   * Import error data wave id.
   *
   * @public
   */
  waveID?: string | undefined;

  /**
   * Import error data ec2 LaunchTemplate ID.
   *
   * @public
   */
  ec2LaunchTemplateID?: string | undefined;

  /**
   * Import error data row number.
   *
   * @public
   */
  rowNumber?: number | undefined;

  /**
   * Import error data raw error.
   *
   * @public
   */
  rawError?: string | undefined;

  /**
   * Import error data source account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * Import task error.
 *
 * @public
 */
export interface ImportTaskError {
  /**
   * Import task error datetime.
   *
   * @public
   */
  errorDateTime?: string | undefined;

  /**
   * Import task error type.
   *
   * @public
   */
  errorType?: ImportErrorType | undefined;

  /**
   * Import task error data.
   *
   * @public
   */
  errorData?: ImportErrorData | undefined;
}

/**
 * List imports errors response.
 *
 * @public
 */
export interface ListImportErrorsResponse {
  /**
   * List imports errors response items.
   *
   * @public
   */
  items?: ImportTaskError[] | undefined;

  /**
   * List imports errors response next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * List imports request filters.
 *
 * @public
 */
export interface ListImportsRequestFilters {
  /**
   * List imports request filters import IDs.
   *
   * @public
   */
  importIDs?: string[] | undefined;
}

/**
 * List imports request.
 *
 * @public
 */
export interface ListImportsRequest {
  /**
   * List imports request filters.
   *
   * @public
   */
  filters?: ListImportsRequestFilters | undefined;

  /**
   * List imports request max results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * List imports request next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * S3 bucket source.
 *
 * @public
 */
export interface S3BucketSource {
  /**
   * S3 bucket source s3 bucket.
   *
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * S3 bucket source s3 key.
   *
   * @public
   */
  s3Key: string | undefined;

  /**
   * S3 bucket source s3 bucket owner.
   *
   * @public
   */
  s3BucketOwner?: string | undefined;
}

/**
 * Import task summary applications.
 *
 * @public
 */
export interface ImportTaskSummaryApplications {
  /**
   * Import task summary applications created count.
   *
   * @public
   */
  createdCount?: number | undefined;

  /**
   * Import task summary applications modified count.
   *
   * @public
   */
  modifiedCount?: number | undefined;
}

/**
 * Import task summary servers.
 *
 * @public
 */
export interface ImportTaskSummaryServers {
  /**
   * Import task summary servers created count.
   *
   * @public
   */
  createdCount?: number | undefined;

  /**
   * Import task summary servers modified count.
   *
   * @public
   */
  modifiedCount?: number | undefined;
}

/**
 * Import task summary waves.
 *
 * @public
 */
export interface ImportTaskSummaryWaves {
  /**
   * Import task summary waves created count.
   *
   * @public
   */
  createdCount?: number | undefined;

  /**
   * Import task summary waves modified count.
   *
   * @public
   */
  modifiedCount?: number | undefined;
}

/**
 * Import task summary.
 *
 * @public
 */
export interface ImportTaskSummary {
  /**
   * Import task summary waves.
   *
   * @public
   */
  waves?: ImportTaskSummaryWaves | undefined;

  /**
   * Import task summary applications.
   *
   * @public
   */
  applications?: ImportTaskSummaryApplications | undefined;

  /**
   * Import task summary servers.
   *
   * @public
   */
  servers?: ImportTaskSummaryServers | undefined;
}

/**
 * Import task.
 *
 * @public
 */
export interface ImportTask {
  /**
   * Import task id.
   *
   * @public
   */
  importID?: string | undefined;

  /**
   * ImportTask arn.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Import task s3 bucket source.
   *
   * @public
   */
  s3BucketSource?: S3BucketSource | undefined;

  /**
   * Import task creation datetime.
   *
   * @public
   */
  creationDateTime?: string | undefined;

  /**
   * Import task end datetime.
   *
   * @public
   */
  endDateTime?: string | undefined;

  /**
   * Import task status.
   *
   * @public
   */
  status?: ImportStatus | undefined;

  /**
   * Import task progress percentage.
   *
   * @public
   */
  progressPercentage?: number | undefined;

  /**
   * Import task summary.
   *
   * @public
   */
  summary?: ImportTaskSummary | undefined;

  /**
   * Import task tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * List import response.
 *
 * @public
 */
export interface ListImportsResponse {
  /**
   * List import response items.
   *
   * @public
   */
  items?: ImportTask[] | undefined;

  /**
   * List import response next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Start import request.
 *
 * @public
 */
export interface StartImportRequest {
  /**
   * Start import request client token.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Start import request s3 bucket source.
   *
   * @public
   */
  s3BucketSource: S3BucketSource | undefined;

  /**
   * Start import request tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Start import response.
 *
 * @public
 */
export interface StartImportResponse {
  /**
   * Start import response import task.
   *
   * @public
   */
  importTask?: ImportTask | undefined;
}

/**
 * @public
 */
export interface InitializeServiceRequest {}

/**
 * @public
 */
export interface InitializeServiceResponse {}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * Request to delete Job from service by Job ID.
   *
   * @public
   */
  jobID: string | undefined;

  /**
   * Request to delete Job from service by Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobResponse {}

/**
 * @public
 */
export interface DescribeJobLogItemsRequest {
  /**
   * Request to describe Job log job ID.
   *
   * @public
   */
  jobID: string | undefined;

  /**
   * Request to describe Job log item maximum results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Request to describe Job log next token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Request to describe Job log Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * Job log data
 *
 * @public
 */
export interface JobLogEventData {
  /**
   * Job Event Source Server ID.
   *
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * Job Event conversion Server ID.
   *
   * @public
   */
  conversionServerID?: string | undefined;

  /**
   * Job Event Target instance ID.
   *
   * @public
   */
  targetInstanceID?: string | undefined;

  /**
   * Job error.
   *
   * @public
   */
  rawError?: string | undefined;

  /**
   * Retries for this operation.
   *
   * @public
   */
  attemptCount?: number | undefined;

  /**
   * The maximum number of retries that will be attempted if this operation failed.
   *
   * @public
   */
  maxAttemptsCount?: number | undefined;
}

/**
 * Job log.
 *
 * @public
 */
export interface JobLog {
  /**
   * Job log event date and time.
   *
   * @public
   */
  logDateTime?: string | undefined;

  /**
   * Job log event.
   *
   * @public
   */
  event?: JobLogEvent | undefined;

  /**
   * Job event data
   *
   * @public
   */
  eventData?: JobLogEventData | undefined;
}

/**
 * @public
 */
export interface DescribeJobLogItemsResponse {
  /**
   * Request to describe Job log response items.
   *
   * @public
   */
  items?: JobLog[] | undefined;

  /**
   * Request to describe Job log response next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Request to describe Job log filters.
 *
 * @public
 */
export interface DescribeJobsRequestFilters {
  /**
   * Request to describe Job log filters by job ID.
   *
   * @public
   */
  jobIDs?: string[] | undefined;

  /**
   * Request to describe Job log filters by date.
   *
   * @public
   */
  fromDate?: string | undefined;

  /**
   * Request to describe job log items by last date.
   *
   * @public
   */
  toDate?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobsRequest {
  /**
   * Request to describe Job log filters.
   *
   * @public
   */
  filters?: DescribeJobsRequestFilters | undefined;

  /**
   * Request to describe job log items by max results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Request to describe job log items by next token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Request to describe job log items by Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * AWS Systems Manager Document external parameter.
 *
 * @public
 */
export type SsmExternalParameter =
  | SsmExternalParameter.DynamicPathMember
  | SsmExternalParameter.$UnknownMember;

/**
 * @public
 */
export namespace SsmExternalParameter {
  /**
   * AWS Systems Manager Document external parameters dynamic path.
   *
   * @public
   */
  export interface DynamicPathMember {
    dynamicPath: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    dynamicPath?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    dynamicPath: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * AWS Systems Manager Parameter Store parameter.
 *
 * @public
 */
export interface SsmParameterStoreParameter {
  /**
   * AWS Systems Manager Parameter Store parameter type.
   *
   * @public
   */
  parameterType: SsmParameterStoreParameterType | undefined;

  /**
   * AWS Systems Manager Parameter Store parameter name.
   *
   * @public
   */
  parameterName: string | undefined;
}

/**
 * AWS Systems Manager Document.
 *
 * @public
 */
export interface SsmDocument {
  /**
   * User-friendly name for the AWS Systems Manager Document.
   *
   * @public
   */
  actionName: string | undefined;

  /**
   * AWS Systems Manager Document name or full ARN.
   *
   * @public
   */
  ssmDocumentName: string | undefined;

  /**
   * AWS Systems Manager Document timeout seconds.
   *
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * If true, Cutover will not be enabled if the document has failed.
   *
   * @public
   */
  mustSucceedForCutover?: boolean | undefined;

  /**
   * AWS Systems Manager Document parameters.
   *
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]> | undefined;

  /**
   * AWS Systems Manager Document external parameters.
   *
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter> | undefined;
}

/**
 * Launch Status of the Job Post Launch Actions.
 *
 * @public
 */
export interface JobPostLaunchActionsLaunchStatus {
  /**
   * AWS Systems Manager's Document of the Job Post Launch Actions.
   *
   * @public
   */
  ssmDocument?: SsmDocument | undefined;

  /**
   * AWS Systems Manager Document type.
   *
   * @public
   */
  ssmDocumentType?: SsmDocumentType | undefined;

  /**
   * AWS Systems Manager Document's execution ID of the Job Post Launch Actions.
   *
   * @public
   */
  executionID?: string | undefined;

  /**
   * AWS Systems Manager Document's execution status.
   *
   * @public
   */
  executionStatus?: PostLaunchActionExecutionStatus | undefined;

  /**
   * AWS Systems Manager Document's failure reason.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * Status of the Post Launch Actions running on the Test or Cutover instance.
 *
 * @public
 */
export interface PostLaunchActionsStatus {
  /**
   * Time where the AWS Systems Manager was detected as running on the Test or Cutover instance.
   *
   * @public
   */
  ssmAgentDiscoveryDatetime?: string | undefined;

  /**
   * List of Post Launch Action status.
   *
   * @public
   */
  postLaunchActionsLaunchStatusList?: JobPostLaunchActionsLaunchStatus[] | undefined;
}

/**
 * Server participating in Job.
 *
 * @public
 */
export interface ParticipatingServer {
  /**
   * Participating server Source Server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Participating server launch status.
   *
   * @public
   */
  launchStatus?: LaunchStatus | undefined;

  /**
   * Participating server's launched ec2 instance ID.
   *
   * @public
   */
  launchedEc2InstanceID?: string | undefined;

  /**
   * Participating server's Post Launch Actions Status.
   *
   * @public
   */
  postLaunchActionsStatus?: PostLaunchActionsStatus | undefined;
}

/**
 * Job.
 *
 * @public
 */
export interface Job {
  /**
   * Job ID.
   *
   * @public
   */
  jobID: string | undefined;

  /**
   * the ARN of the specific Job.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Job type.
   *
   * @public
   */
  type?: JobType | undefined;

  /**
   * Job initiated by field.
   *
   * @public
   */
  initiatedBy?: InitiatedBy | undefined;

  /**
   * Job creation time.
   *
   * @public
   */
  creationDateTime?: string | undefined;

  /**
   * Job end time.
   *
   * @public
   */
  endDateTime?: string | undefined;

  /**
   * Job status.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * Servers participating in a specific Job.
   *
   * @public
   */
  participatingServers?: ParticipatingServer[] | undefined;

  /**
   * Tags associated with specific Job.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeJobsResponse {
  /**
   * Request to describe Job log items.
   *
   * @public
   */
  items?: Job[] | undefined;

  /**
   * Request to describe Job response by next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Launch template disk configuration.
 *
 * @public
 */
export interface LaunchTemplateDiskConf {
  /**
   * Launch template disk volume type configuration.
   *
   * @public
   */
  volumeType?: VolumeType | undefined;

  /**
   * Launch template disk iops configuration.
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * Launch template disk throughput configuration.
   *
   * @public
   */
  throughput?: number | undefined;

  /**
   * Launch template disk volume initialization rate configuration.
   *
   * @public
   */
  volumeInitializationRate?: number | undefined;

  /**
   * Launch template disk delete on termination configuration.
   *
   * @public
   */
  deleteOnTermination?: boolean | undefined;
}

/**
 * Configure Licensing.
 *
 * @public
 */
export interface Licensing {
  /**
   * Configure BYOL OS licensing.
   *
   * @public
   */
  osByol?: boolean | undefined;
}

/**
 * Post Launch Actions to be executed on the Test or Cutover instance.
 *
 * @public
 */
export interface PostLaunchActions {
  /**
   * Deployment type in which AWS Systems Manager Documents will be executed.
   *
   * @public
   */
  deployment?: PostLaunchActionsDeploymentType | undefined;

  /**
   * AWS Systems Manager Command's logs S3 log bucket.
   *
   * @public
   */
  s3LogBucket?: string | undefined;

  /**
   * AWS Systems Manager Command's logs S3 output key prefix.
   *
   * @public
   */
  s3OutputKeyPrefix?: string | undefined;

  /**
   * AWS Systems Manager Command's CloudWatch log group name.
   *
   * @public
   */
  cloudWatchLogGroupName?: string | undefined;

  /**
   * AWS Systems Manager Documents.
   *
   * @public
   */
  ssmDocuments?: SsmDocument[] | undefined;
}

/**
 * @public
 */
export interface CreateLaunchConfigurationTemplateRequest {
  /**
   * Launch configuration template post launch actions.
   *
   * @public
   */
  postLaunchActions?: PostLaunchActions | undefined;

  /**
   * Enable map auto tagging.
   *
   * @public
   */
  enableMapAutoTagging?: boolean | undefined;

  /**
   * Launch configuration template map auto tagging MPE ID.
   *
   * @public
   */
  mapAutoTaggingMpeID?: string | undefined;

  /**
   * Request to associate tags during creation of a Launch Configuration Template.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Launch disposition.
   *
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * Target instance type right-sizing method.
   *
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * Copy private Ip.
   *
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * Associate public Ip address.
   *
   * @public
   */
  associatePublicIpAddress?: boolean | undefined;

  /**
   * Copy tags.
   *
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * Configure Licensing.
   *
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * Launch configuration template boot mode.
   *
   * @public
   */
  bootMode?: BootMode | undefined;

  /**
   * Small volume maximum size.
   *
   * @public
   */
  smallVolumeMaxSize?: number | undefined;

  /**
   * Small volume config.
   *
   * @public
   */
  smallVolumeConf?: LaunchTemplateDiskConf | undefined;

  /**
   * Large volume config.
   *
   * @public
   */
  largeVolumeConf?: LaunchTemplateDiskConf | undefined;

  /**
   * Enable parameters encryption.
   *
   * @public
   */
  enableParametersEncryption?: boolean | undefined;

  /**
   * Parameters encryption key.
   *
   * @public
   */
  parametersEncryptionKey?: string | undefined;
}

/**
 * @public
 */
export interface LaunchConfigurationTemplate {
  /**
   * ID of the Launch Configuration Template.
   *
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * ARN of the Launch Configuration Template.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Post Launch Actions of the Launch Configuration Template.
   *
   * @public
   */
  postLaunchActions?: PostLaunchActions | undefined;

  /**
   * Enable map auto tagging.
   *
   * @public
   */
  enableMapAutoTagging?: boolean | undefined;

  /**
   * Launch configuration template map auto tagging MPE ID.
   *
   * @public
   */
  mapAutoTaggingMpeID?: string | undefined;

  /**
   * Tags of the Launch Configuration Template.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * EC2 launch template ID.
   *
   * @public
   */
  ec2LaunchTemplateID?: string | undefined;

  /**
   * Launch disposition.
   *
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * Target instance type right-sizing method.
   *
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * Copy private Ip.
   *
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * Associate public Ip address.
   *
   * @public
   */
  associatePublicIpAddress?: boolean | undefined;

  /**
   * Copy tags.
   *
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * Configure Licensing.
   *
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * Launch configuration template boot mode.
   *
   * @public
   */
  bootMode?: BootMode | undefined;

  /**
   * Small volume maximum size.
   *
   * @public
   */
  smallVolumeMaxSize?: number | undefined;

  /**
   * Small volume config.
   *
   * @public
   */
  smallVolumeConf?: LaunchTemplateDiskConf | undefined;

  /**
   * Large volume config.
   *
   * @public
   */
  largeVolumeConf?: LaunchTemplateDiskConf | undefined;

  /**
   * Enable parameters encryption.
   *
   * @public
   */
  enableParametersEncryption?: boolean | undefined;

  /**
   * Parameters encryption key.
   *
   * @public
   */
  parametersEncryptionKey?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchConfigurationTemplateRequest {
  /**
   * ID of resource to be deleted.
   *
   * @public
   */
  launchConfigurationTemplateID: string | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchConfigurationTemplateResponse {}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesRequest {
  /**
   * Request to filter Launch Configuration Templates list by Launch Configuration Template ID.
   *
   * @public
   */
  launchConfigurationTemplateIDs?: string[] | undefined;

  /**
   * Maximum results to be returned in DescribeLaunchConfigurationTemplates.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next pagination token returned from DescribeLaunchConfigurationTemplates.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesResponse {
  /**
   * List of items returned by DescribeLaunchConfigurationTemplates.
   *
   * @public
   */
  items?: LaunchConfigurationTemplate[] | undefined;

  /**
   * Next pagination token returned from DescribeLaunchConfigurationTemplates.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Template post migration custom action filters.
 *
 * @public
 */
export interface TemplateActionsRequestFilters {
  /**
   * Action IDs to filter template post migration custom actions by.
   *
   * @public
   */
  actionIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTemplateActionsRequest {
  /**
   * Launch configuration template ID.
   *
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * Filters to apply when listing template post migration custom actions.
   *
   * @public
   */
  filters?: TemplateActionsRequestFilters | undefined;

  /**
   * Maximum amount of items to return when listing template post migration custom actions.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token to use when listing template post migration custom actions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TemplateActionDocument {
  /**
   * Template post migration custom action ID.
   *
   * @public
   */
  actionID?: string | undefined;

  /**
   * Template post migration custom action name.
   *
   * @public
   */
  actionName?: string | undefined;

  /**
   * Template post migration custom action document identifier.
   *
   * @public
   */
  documentIdentifier?: string | undefined;

  /**
   * Template post migration custom action order.
   *
   * @public
   */
  order?: number | undefined;

  /**
   * Template post migration custom action document version.
   *
   * @public
   */
  documentVersion?: string | undefined;

  /**
   * Template post migration custom action active status.
   *
   * @public
   */
  active?: boolean | undefined;

  /**
   * Template post migration custom action timeout in seconds.
   *
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * Template post migration custom action must succeed for cutover.
   *
   * @public
   */
  mustSucceedForCutover?: boolean | undefined;

  /**
   * Template post migration custom action parameters.
   *
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]> | undefined;

  /**
   * Operating system eligible for this template post migration custom action.
   *
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * Template post migration custom action external parameters.
   *
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter> | undefined;

  /**
   * Template post migration custom action description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Template post migration custom action category.
   *
   * @public
   */
  category?: ActionCategory | undefined;
}

/**
 * @public
 */
export interface ListTemplateActionsResponse {
  /**
   * List of template post migration custom actions.
   *
   * @public
   */
  items?: TemplateActionDocument[] | undefined;

  /**
   * Next token returned when listing template post migration custom actions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutTemplateActionRequest {
  /**
   * Launch configuration template ID.
   *
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * Template post migration custom action name.
   *
   * @public
   */
  actionName: string | undefined;

  /**
   * Template post migration custom action document identifier.
   *
   * @public
   */
  documentIdentifier: string | undefined;

  /**
   * Template post migration custom action order.
   *
   * @public
   */
  order: number | undefined;

  /**
   * Template post migration custom action ID.
   *
   * @public
   */
  actionID: string | undefined;

  /**
   * Template post migration custom action document version.
   *
   * @public
   */
  documentVersion?: string | undefined;

  /**
   * Template post migration custom action active status.
   *
   * @public
   */
  active?: boolean | undefined;

  /**
   * Template post migration custom action timeout in seconds.
   *
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * Template post migration custom action must succeed for cutover.
   *
   * @public
   */
  mustSucceedForCutover?: boolean | undefined;

  /**
   * Template post migration custom action parameters.
   *
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]> | undefined;

  /**
   * Operating system eligible for this template post migration custom action.
   *
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * Template post migration custom action external parameters.
   *
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter> | undefined;

  /**
   * Template post migration custom action description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Template post migration custom action category.
   *
   * @public
   */
  category?: ActionCategory | undefined;
}

/**
 * @public
 */
export interface RemoveTemplateActionRequest {
  /**
   * Launch configuration template ID of the post migration custom action to remove.
   *
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * Template post migration custom action ID to remove.
   *
   * @public
   */
  actionID: string | undefined;
}

/**
 * @public
 */
export interface RemoveTemplateActionResponse {}

/**
 * @public
 */
export interface UpdateLaunchConfigurationTemplateRequest {
  /**
   * Launch Configuration Template ID.
   *
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * Post Launch Action to execute on the Test or Cutover instance.
   *
   * @public
   */
  postLaunchActions?: PostLaunchActions | undefined;

  /**
   * Enable map auto tagging.
   *
   * @public
   */
  enableMapAutoTagging?: boolean | undefined;

  /**
   * Launch configuration template map auto tagging MPE ID.
   *
   * @public
   */
  mapAutoTaggingMpeID?: string | undefined;

  /**
   * Launch disposition.
   *
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * Target instance type right-sizing method.
   *
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * Copy private Ip.
   *
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * Associate public Ip address.
   *
   * @public
   */
  associatePublicIpAddress?: boolean | undefined;

  /**
   * Copy tags.
   *
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * Configure Licensing.
   *
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * Launch configuration template boot mode.
   *
   * @public
   */
  bootMode?: BootMode | undefined;

  /**
   * Small volume maximum size.
   *
   * @public
   */
  smallVolumeMaxSize?: number | undefined;

  /**
   * Small volume config.
   *
   * @public
   */
  smallVolumeConf?: LaunchTemplateDiskConf | undefined;

  /**
   * Large volume config.
   *
   * @public
   */
  largeVolumeConf?: LaunchTemplateDiskConf | undefined;

  /**
   * Enable parameters encryption.
   *
   * @public
   */
  enableParametersEncryption?: boolean | undefined;

  /**
   * Parameters encryption key.
   *
   * @public
   */
  parametersEncryptionKey?: string | undefined;
}

/**
 * Filters for listing import file enrichment jobs.
 *
 * @public
 */
export interface ListImportFileEnrichmentsFilters {
  /**
   * A list of job IDs to filter by.
   *
   * @public
   */
  jobIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListImportFileEnrichmentsRequest {
  /**
   * Filters to apply when listing import file enrichment jobs.
   *
   * @public
   */
  filters?: ListImportFileEnrichmentsFilters | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A checksum structure used to verify data integrity.
 *
 * @public
 */
export interface Checksum {
  /**
   * The encryption algorithm used to generate the checksum.
   *
   * @public
   */
  encryptionAlgorithm?: EncryptionAlgorithm | undefined;

  /**
   * The hash value of the checksum.
   *
   * @public
   */
  hash?: string | undefined;
}

/**
 * S3 configuration for storing the enriched import file.
 *
 * @public
 */
export interface EnrichmentTargetS3Configuration {
  /**
   * The name of the S3 bucket where the enriched import file will be stored.
   *
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * The AWS account ID of the target S3 bucket owner.
   *
   * @public
   */
  s3BucketOwner: string | undefined;

  /**
   * The S3 key (path) where the enriched import file will be stored.
   *
   * @public
   */
  s3Key: string | undefined;
}

/**
 * Details about an import file enrichment job.
 *
 * @public
 */
export interface ImportFileEnrichment {
  /**
   * The unique identifier of the import file enrichment job.
   *
   * @public
   */
  jobID?: string | undefined;

  /**
   * The timestamp when the enrichment job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the enrichment job completed or failed.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The current status of the import file enrichment job.
   *
   * @public
   */
  status?: ImportFileEnrichmentStatus | undefined;

  /**
   * Detailed status information about the enrichment job.
   *
   * @public
   */
  statusDetails?: string | undefined;

  /**
   * The checksum of the enriched file for integrity verification.
   *
   * @public
   */
  checksum?: Checksum | undefined;

  /**
   * The target S3 configuration for the enriched import file.
   *
   * @public
   */
  s3BucketTarget?: EnrichmentTargetS3Configuration | undefined;
}

/**
 * @public
 */
export interface ListImportFileEnrichmentsResponse {
  /**
   * A list of import file enrichment jobs.
   *
   * @public
   */
  items?: ImportFileEnrichment[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * List managed accounts request.
 *
 * @public
 */
export interface ListManagedAccountsRequest {
  /**
   * List managed accounts request max results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * List managed accounts request next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Managed account.
 *
 * @public
 */
export interface ManagedAccount {
  /**
   * Managed account, account ID.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * List managed accounts response.
 *
 * @public
 */
export interface ListManagedAccountsResponse {
  /**
   * List managed accounts response items.
   *
   * @public
   */
  items: ManagedAccount[] | undefined;

  /**
   * List managed accounts response next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * List tags for resource request by ARN.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * List tags for resource response.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Maps a source CIDR range to the corresponding target CIDR range to use in the target network.
 *
 * @public
 */
export interface CidrMapping {
  /**
   * The original CIDR range in the source network.
   *
   * @public
   */
  originalCidr: string | undefined;

  /**
   * The updated CIDR range to use in the target network.
   *
   * @public
   */
  updatedCidr: string | undefined;
}

/**
 * S3 configuration for source network data.
 *
 * @public
 */
export interface SourceS3Configuration {
  /**
   * The name of the S3 bucket containing source data.
   *
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * The AWS account ID of the S3 bucket owner.
   *
   * @public
   */
  s3BucketOwner: string | undefined;

  /**
   * The S3 key (path) for the source data.
   *
   * @public
   */
  s3Key: string | undefined;
}

/**
 * Configuration for a migration source environment.
 *
 * @public
 */
export interface SourceConfiguration {
  /**
   * The source environment type.
   *
   * @public
   */
  sourceEnvironment: SourceEnvironment | undefined;

  /**
   * The S3 configuration for the source data.
   *
   * @public
   */
  sourceS3Configuration: SourceS3Configuration | undefined;
}

/**
 * Configuration for the target network topology and addressing.
 *
 * @public
 */
export interface TargetNetwork {
  /**
   * The network topology type for the target environment.
   *
   * @public
   */
  topology: TargetNetworkTopology | undefined;

  /**
   * The CIDR block for inbound traffic in the target network.
   *
   * @public
   */
  inboundCidr?: string | undefined;

  /**
   * The CIDR block for outbound traffic in the target network.
   *
   * @public
   */
  outboundCidr?: string | undefined;

  /**
   * The CIDR block for inspection traffic in the target network.
   *
   * @public
   */
  inspectionCidr?: string | undefined;
}

/**
 * S3 configuration for storing target network artifacts.
 *
 * @public
 */
export interface TargetS3Configuration {
  /**
   * The name of the S3 bucket for target artifacts.
   *
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * The AWS account ID of the S3 bucket owner.
   *
   * @public
   */
  s3BucketOwner: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkMigrationDefinitionRequest {
  /**
   * The name of the network migration definition.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the network migration definition.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of source configurations for the network migration.
   *
   * @public
   */
  sourceConfigurations?: SourceConfiguration[] | undefined;

  /**
   * The S3 configuration for storing the target network artifacts.
   *
   * @public
   */
  targetS3Configuration: TargetS3Configuration | undefined;

  /**
   * The target network configuration including topology and CIDR ranges.
   *
   * @public
   */
  targetNetwork: TargetNetwork | undefined;

  /**
   * The target deployment configuration for the migrated network.
   *
   * @public
   */
  targetDeployment?: TargetDeployment | undefined;

  /**
   * Specifies whether to create new target VPCs or use existing ones. Set to `CREATE_NEW` to provision new target VPCs as part of the migration, or `USE_EXISTING` to migrate into existing VPCs in the target account.
   *
   * @public
   */
  vpcProvisioningStrategy?: VpcProvisioningStrategy | undefined;

  /**
   * A list of CIDR mappings that map original source CIDR ranges to updated target CIDR ranges. CIDR mappings can be provided only when `vpcProvisioningStrategy` is set to `USE_EXISTING`.
   *
   * @public
   */
  cidrMappings?: CidrMapping[] | undefined;

  /**
   * Tags to assign to the network migration definition.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Scope tags for the network migration definition to control access and organization.
   *
   * @public
   */
  scopeTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface NetworkMigrationDefinition {
  /**
   * The Amazon Resource Name (ARN) of the network migration definition.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * The name of the network migration definition.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the network migration definition.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of source configurations for the network migration.
   *
   * @public
   */
  sourceConfigurations?: SourceConfiguration[] | undefined;

  /**
   * The S3 configuration for storing the target network artifacts.
   *
   * @public
   */
  targetS3Configuration?: TargetS3Configuration | undefined;

  /**
   * The target network configuration including topology and CIDR ranges.
   *
   * @public
   */
  targetNetwork?: TargetNetwork | undefined;

  /**
   * The target deployment configuration for the migrated network.
   *
   * @public
   */
  targetDeployment?: TargetDeployment | undefined;

  /**
   * Indicates whether the migration creates new target VPCs or uses existing ones. `CREATE_NEW` provisions new target VPCs; `USE_EXISTING` migrates into existing VPCs in the target account.
   *
   * @public
   */
  vpcProvisioningStrategy?: VpcProvisioningStrategy | undefined;

  /**
   * A list of CIDR mappings that map original source CIDR ranges to updated target CIDR ranges. CIDR mappings apply only when `vpcProvisioningStrategy` is set to `USE_EXISTING`.
   *
   * @public
   */
  cidrMappings?: CidrMapping[] | undefined;

  /**
   * The timestamp when the network migration definition was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the network migration definition was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Tags assigned to the network migration definition.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Scope tags for the network migration definition.
   *
   * @public
   */
  scopeTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkMigrationDefinitionRequest {
  /**
   * The unique identifier of the network migration definition to delete.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkMigrationDefinitionResponse {}

/**
 * @public
 */
export interface GetNetworkMigrationDefinitionRequest {
  /**
   * The unique identifier of the network migration definition to retrieve.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkMigrationMapperSegmentConstructRequest {
  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the mapper segment.
   *
   * @public
   */
  segmentID: string | undefined;

  /**
   * The unique identifier of the construct within the segment.
   *
   * @public
   */
  constructID: string | undefined;
}

/**
 * Represents a construct within a mapper segment. A construct is an individual infrastructure component such as a VPC, subnet, security group, route table, or other network resource that is part of the network migration.
 *
 * @public
 */
export interface NetworkMigrationMapperSegmentConstruct {
  /**
   * The unique identifier of the construct.
   *
   * @public
   */
  constructID?: string | undefined;

  /**
   * The type of the construct, such as VPC, subnet, security group, or route table.
   *
   * @public
   */
  constructType?: string | undefined;

  /**
   * The name of the construct.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the construct.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The logical identifier for the construct in the infrastructure code.
   *
   * @public
   */
  logicalID?: string | undefined;

  /**
   * Whether this construct is excluded from the migration.
   *
   * @public
   */
  excluded?: boolean | undefined;

  /**
   * The timestamp when the construct was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the construct was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The properties and configuration of the construct.
   *
   * @public
   */
  properties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetNetworkMigrationMapperSegmentConstructResponse {
  /**
   * The construct metadata including type, name, and configuration.
   *
   * @public
   */
  construct?: NetworkMigrationMapperSegmentConstruct | undefined;
}

/**
 * Filters for listing network migration analysis jobs.
 *
 * @public
 */
export interface ListNetworkMigrationAnalysesFilters {
  /**
   * A list of job IDs to filter by.
   *
   * @public
   */
  jobIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationAnalysesRequest {
  /**
   * The unique identifier of the network migration execution to list analyses for.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * Filters to apply when listing analysis jobs.
   *
   * @public
   */
  filters?: ListNetworkMigrationAnalysesFilters | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Details about a network migration analysis job.
 *
 * @public
 */
export interface NetworkMigrationAnalysisJobDetails {
  /**
   * The unique identifier of the analysis job.
   *
   * @public
   */
  jobID?: string | undefined;

  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * The timestamp when the job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the job completed or failed.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The current status of the analysis job.
   *
   * @public
   */
  status?: NetworkMigrationJobStatus | undefined;

  /**
   * Detailed status information about the job.
   *
   * @public
   */
  statusDetails?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationAnalysesResponse {
  /**
   * A list of network migration analysis job details.
   *
   * @public
   */
  items?: NetworkMigrationAnalysisJobDetails[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters for listing network migration analysis results.
 *
 * @public
 */
export interface ListNetworkMigrationAnalysisResultsFilters {
  /**
   * A list of VPC IDs to filter results by.
   *
   * @public
   */
  vpcIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationAnalysisResultsRequest {
  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * Filters to apply when listing analysis results, such as VPC IDs.
   *
   * @public
   */
  filters?: ListNetworkMigrationAnalysisResultsFilters | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The source resource information for an analysis result.
 *
 * @public
 */
export interface NetworkMigrationAnalysisResultSource {
  /**
   * The VPC ID of the source resource.
   *
   * @public
   */
  vpcID?: string | undefined;

  /**
   * The subnet ID of the source resource.
   *
   * @public
   */
  subnetID?: string | undefined;
}

/**
 * The target resource information for an analysis result.
 *
 * @public
 */
export interface NetworkMigrationAnalysisResultTarget {
  /**
   * The VPC ID of the target resource.
   *
   * @public
   */
  vpcID?: string | undefined;

  /**
   * The subnet ID of the target resource.
   *
   * @public
   */
  subnetID?: string | undefined;
}

/**
 * The result of a network migration analysis operation.
 *
 * @public
 */
export interface NetworkMigrationAnalysisResult {
  /**
   * The unique identifier of the analysis job that generated this result.
   *
   * @public
   */
  jobID?: string | undefined;

  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * The type of analyzer that generated this result.
   *
   * @public
   */
  analyzerType?: AnalyzerType | undefined;

  /**
   * The source resource that was analyzed.
   *
   * @public
   */
  source?: NetworkMigrationAnalysisResultSource | undefined;

  /**
   * The target resource in the analysis.
   *
   * @public
   */
  target?: NetworkMigrationAnalysisResultTarget | undefined;

  /**
   * The status of the analysis result.
   *
   * @public
   */
  status?: NetworkMigrationAnalysisResultStatus | undefined;

  /**
   * The detailed analysis findings and recommendations.
   *
   * @public
   */
  analysisResult?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationAnalysisResultsResponse {
  /**
   * A list of network migration analysis results.
   *
   * @public
   */
  items?: NetworkMigrationAnalysisResult[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters for listing code generation jobs.
 *
 * @public
 */
export interface ListNetworkMigrationCodeGenerationsFilters {
  /**
   * A list of job IDs to filter by.
   *
   * @public
   */
  jobIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationCodeGenerationsRequest {
  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * Filters to apply when listing code generation jobs.
   *
   * @public
   */
  filters?: ListNetworkMigrationCodeGenerationsFilters | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Status details for a specific code generation output format.
 *
 * @public
 */
export interface CodeGenerationOutputFormatStatusDetails {
  /**
   * The status of the code generation for this output format.
   *
   * @public
   */
  status?: CodeGenerationOutputFormatStatus | undefined;

  /**
   * A list of detailed status information for the code generation.
   *
   * @public
   */
  statusDetailList?: string | undefined;
}

/**
 * Details about a network migration code generation job.
 *
 * @public
 */
export interface NetworkMigrationCodeGenerationJobDetails {
  /**
   * The unique identifier of the code generation job.
   *
   * @public
   */
  jobID?: string | undefined;

  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * The timestamp when the job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the job completed or failed.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The current status of the code generation job.
   *
   * @public
   */
  status?: NetworkMigrationJobStatus | undefined;

  /**
   * Detailed status information about the job.
   *
   * @public
   */
  statusDetails?: string | undefined;

  /**
   * A map of output format types to their status details.
   *
   * @public
   */
  codeGenerationOutputFormatStatusDetailsMap?: Partial<Record<CodeGenerationOutputFormatType, CodeGenerationOutputFormatStatusDetails>> | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationCodeGenerationsResponse {
  /**
   * A list of network migration code generation job details.
   *
   * @public
   */
  items?: NetworkMigrationCodeGenerationJobDetails[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters for listing code generation segments.
 *
 * @public
 */
export interface ListNetworkMigrationCodeGenerationSegmentsFilters {
  /**
   * A list of segment IDs to filter by.
   *
   * @public
   */
  segmentIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationCodeGenerationSegmentsRequest {
  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * Filters to apply when listing code generation segments.
   *
   * @public
   */
  filters?: ListNetworkMigrationCodeGenerationSegmentsFilters | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Configuration for an S3 location.
 *
 * @public
 */
export interface S3Configuration {
  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * The AWS account ID of the S3 bucket owner.
   *
   * @public
   */
  s3BucketOwner?: string | undefined;

  /**
   * The S3 key (path) for the object.
   *
   * @public
   */
  s3Key?: string | undefined;
}

/**
 * An artifact generated during code generation, such as a CloudFormation template or Terraform file.
 *
 * @public
 */
export interface NetworkMigrationCodeGenerationArtifact {
  /**
   * The unique identifier of the artifact.
   *
   * @public
   */
  artifactID?: string | undefined;

  /**
   * The type of the generated artifact.
   *
   * @public
   */
  artifactType?: NetworkMigrationCodeGenerationArtifactType | undefined;

  /**
   * The sub-type of the artifact for further classification.
   *
   * @public
   */
  artifactSubType?: NetworkMigrationCodeGenerationArtifactSubType | undefined;

  /**
   * The logical identifier for the artifact.
   *
   * @public
   */
  logicalID?: string | undefined;

  /**
   * The S3 location where the artifact is stored.
   *
   * @public
   */
  outputS3Configuration?: S3Configuration | undefined;

  /**
   * The checksum of the artifact for integrity verification.
   *
   * @public
   */
  checksum?: Checksum | undefined;

  /**
   * The timestamp when the artifact was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * A segment of generated code representing a logical grouping of infrastructure resources.
 *
 * @public
 */
export interface NetworkMigrationCodeGenerationSegment {
  /**
   * The unique identifier of the code generation job.
   *
   * @public
   */
  jobID?: string | undefined;

  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * The unique identifier of the segment.
   *
   * @public
   */
  segmentID?: string | undefined;

  /**
   * The type of the segment.
   *
   * @public
   */
  segmentType?: NetworkMigrationCodeGenerationSegmentType | undefined;

  /**
   * The logical identifier for the segment.
   *
   * @public
   */
  logicalID?: string | undefined;

  /**
   * The ID of the mapper segment that this code generation segment was created from.
   *
   * @public
   */
  mapperSegmentID?: string | undefined;

  /**
   * A list of artifacts generated for this segment.
   *
   * @public
   */
  artifacts?: NetworkMigrationCodeGenerationArtifact[] | undefined;

  /**
   * A list of other segments that this segment depends on or references.
   *
   * @public
   */
  referencedSegments?: string[] | undefined;

  /**
   * The timestamp when the segment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationCodeGenerationSegmentsResponse {
  /**
   * A list of network migration code generation segments.
   *
   * @public
   */
  items?: NetworkMigrationCodeGenerationSegment[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters for listing network migration definitions.
 *
 * @public
 */
export interface ListNetworkMigrationDefinitionsRequestFilters {
  /**
   * A list of definition IDs to filter by.
   *
   * @public
   */
  networkMigrationDefinitionIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationDefinitionsRequest {
  /**
   * Filters to apply when listing network migration definitions.
   *
   * @public
   */
  filters?: ListNetworkMigrationDefinitionsRequestFilters | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of a network migration definition.
 *
 * @public
 */
export interface NetworkMigrationDefinitionSummary {
  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * The name of the network migration definition.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The source environment configuration.
   *
   * @public
   */
  sourceEnvironment?: SourceEnvironment | undefined;

  /**
   * The Amazon Resource Name (ARN) of the network migration definition.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Tags assigned to the network migration definition.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Scope tags for the network migration definition.
   *
   * @public
   */
  scopeTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationDefinitionsResponse {
  /**
   * A list of network migration definition summaries.
   *
   * @public
   */
  items?: NetworkMigrationDefinitionSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationDeployedStacksRequest {
  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Details about a resource that failed to deploy.
 *
 * @public
 */
export interface NetworkMigrationFailedResourceDetails {
  /**
   * The logical ID of the failed resource.
   *
   * @public
   */
  logicalID?: string | undefined;

  /**
   * The status of the failed resource.
   *
   * @public
   */
  status?: NetworkMigrationFailedResourceStatus | undefined;

  /**
   * The reason why the resource failed.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * Details about a CloudFormation stack that has been deployed as part of the network migration.
 *
 * @public
 */
export interface NetworkMigrationDeployedStackDetails {
  /**
   * The current status of the deployed stack.
   *
   * @public
   */
  status?: NetworkMigrationDeployedStackStatus | undefined;

  /**
   * The physical ID of the CloudFormation stack.
   *
   * @public
   */
  stackPhysicalID?: string | undefined;

  /**
   * The logical ID of the stack.
   *
   * @public
   */
  stackLogicalID?: string | undefined;

  /**
   * The ID of the segment that this stack was deployed for.
   *
   * @public
   */
  segmentID?: string | undefined;

  /**
   * The target AWS account where the stack was deployed.
   *
   * @public
   */
  targetAccount?: string | undefined;

  /**
   * A list of resources that failed to deploy.
   *
   * @public
   */
  failedResources?: NetworkMigrationFailedResourceDetails[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationDeployedStacksResponse {
  /**
   * A list of deployed stack details including status and resources.
   *
   * @public
   */
  items?: NetworkMigrationDeployedStackDetails[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Details about a network migration deployer job.
 *
 * @public
 */
export interface NetworkMigrationDeployerJobDetails {
  /**
   * The unique identifier of the deployer job.
   *
   * @public
   */
  jobID?: string | undefined;

  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * The timestamp when the job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the job completed or failed.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The current status of the deployer job.
   *
   * @public
   */
  status?: NetworkMigrationJobStatus | undefined;

  /**
   * Detailed status information about the job.
   *
   * @public
   */
  statusDetails?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationDeployerJobResponse {
  /**
   * A list of deployer job details.
   *
   * @public
   */
  items?: NetworkMigrationDeployerJobDetails[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters for listing deployer jobs.
 *
 * @public
 */
export interface ListNetworkMigrationDeployerJobFilters {
  /**
   * A list of job IDs to filter by.
   *
   * @public
   */
  jobIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationDeploymentsRequest {
  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * Filters to apply when listing deployment jobs.
   *
   * @public
   */
  filters?: ListNetworkMigrationDeployerJobFilters | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters for listing network migration executions.
 *
 * @public
 */
export interface ListNetworkMigrationExecutionRequestFilters {
  /**
   * A list of execution IDs to filter by.
   *
   * @public
   */
  networkMigrationExecutionIDs?: string[] | undefined;

  /**
   * A list of execution statuses to filter by.
   *
   * @public
   */
  networkMigrationExecutionStatuses?: ExecutionStatus[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationExecutionsRequest {
  /**
   * The unique identifier of the network migration definition to list executions for.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * Filters to apply when listing executions, such as status or execution ID.
   *
   * @public
   */
  filters?: ListNetworkMigrationExecutionRequestFilters | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Details about a network migration execution instance.
 *
 * @public
 */
export interface NetworkMigrationExecution {
  /**
   * The unique identifier of the network migration definition used by this execution.
   *
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * The unique identifier of the execution.
   *
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * The current status of the execution.
   *
   * @public
   */
  status?: ExecutionStatus | undefined;

  /**
   * The current stage of the execution in the migration workflow.
   *
   * @public
   */
  stage?: ExecutionStage | undefined;

  /**
   * The current activity being performed in the execution.
   *
   * @public
   */
  activity?: ExecutionStageActivity | undefined;

  /**
   * The timestamp when the execution was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the execution was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Tags assigned to the execution.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationExecutionsResponse {
  /**
   * A list of network migration execution details.
   *
   * @public
   */
  items?: NetworkMigrationExecution[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters for listing mapper segment constructs.
 *
 * @public
 */
export interface ListNetworkMigrationMapperSegmentConstructsFilters {
  /**
   * A list of construct IDs to filter by.
   *
   * @public
   */
  constructIDs?: string[] | undefined;

  /**
   * A list of construct types to filter by.
   *
   * @public
   */
  constructTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMapperSegmentConstructsRequest {
  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * The unique identifier of the segment to list constructs for.
   *
   * @public
   */
  segmentID: string | undefined;

  /**
   * Filters to apply when listing constructs, such as construct type or ID.
   *
   * @public
   */
  filters?: ListNetworkMigrationMapperSegmentConstructsFilters | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMapperSegmentConstructsResponse {
  /**
   * A list of mapper segment constructs.
   *
   * @public
   */
  items?: NetworkMigrationMapperSegmentConstruct[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters for listing mapper segments.
 *
 * @public
 */
export interface ListNetworkMigrationMapperSegmentsFilters {
  /**
   * A list of segment IDs to filter by.
   *
   * @public
   */
  segmentIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMapperSegmentsRequest {
  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * Filters to apply when listing segments.
   *
   * @public
   */
  filters?: ListNetworkMigrationMapperSegmentsFilters | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface NetworkMigrationMapperSegment {
  /**
   * The unique identifier of the job that created this segment.
   *
   * @public
   */
  jobID?: string | undefined;

  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * The unique identifier of the segment.
   *
   * @public
   */
  segmentID?: string | undefined;

  /**
   * The category of the network migration segment. A segment groups the network constructs (such as VPCs, subnets, and security groups) that are migrated together. Valid values: `WORKLOAD`, `APPLIANCE`.
   *
   * @public
   */
  segmentType?: NetworkMigrationMapperSegmentType | undefined;

  /**
   * The name of the segment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the segment.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The logical identifier for the segment in the infrastructure code.
   *
   * @public
   */
  logicalID?: string | undefined;

  /**
   * The checksum of the segment data for integrity verification.
   *
   * @public
   */
  checksum?: Checksum | undefined;

  /**
   * The S3 location where segment artifacts are stored.
   *
   * @public
   */
  outputS3Configuration?: S3Configuration | undefined;

  /**
   * The timestamp when the segment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the segment was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Scope tags for the segment.
   *
   * @public
   */
  scopeTags?: Record<string, string> | undefined;

  /**
   * The target AWS account where this segment will be deployed.
   *
   * @public
   */
  targetAccount?: string | undefined;

  /**
   * A list of other segments that this segment depends on or references.
   *
   * @public
   */
  referencedSegments?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMapperSegmentsResponse {
  /**
   * A list of mapper segments.
   *
   * @public
   */
  items?: NetworkMigrationMapperSegment[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters for listing network migration mapping jobs.
 *
 * @public
 */
export interface ListNetworkMigrationMappingsFilters {
  /**
   * A list of job IDs to filter by.
   *
   * @public
   */
  jobIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMappingsRequest {
  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * Filters to apply when listing mapping jobs.
   *
   * @public
   */
  filters?: ListNetworkMigrationMappingsFilters | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Details about a network migration mapping job.
 *
 * @public
 */
export interface NetworkMigrationMappingJobDetails {
  /**
   * The unique identifier of the mapping job.
   *
   * @public
   */
  jobID?: string | undefined;

  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * The timestamp when the job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the job completed or failed.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The current status of the mapping job.
   *
   * @public
   */
  status?: NetworkMigrationJobStatus | undefined;

  /**
   * Detailed status information about the job.
   *
   * @public
   */
  statusDetails?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMappingsResponse {
  /**
   * A list of network migration mapping job details.
   *
   * @public
   */
  items?: NetworkMigrationMappingJobDetails[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters for listing mapping update jobs.
 *
 * @public
 */
export interface ListNetworkMigrationMappingUpdatesFilters {
  /**
   * A list of job IDs to filter by.
   *
   * @public
   */
  jobIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMappingUpdatesRequest {
  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * Filters to apply when listing mapping update jobs.
   *
   * @public
   */
  filters?: ListNetworkMigrationMappingUpdatesFilters | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Details about a network migration mapping update job.
 *
 * @public
 */
export interface NetworkMigrationMappingUpdateJobDetails {
  /**
   * The unique identifier of the mapping update job.
   *
   * @public
   */
  jobID?: string | undefined;

  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * The timestamp when the job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the job completed or failed.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The current status of the mapping update job.
   *
   * @public
   */
  status?: NetworkMigrationJobStatus | undefined;

  /**
   * Detailed status information about the job.
   *
   * @public
   */
  statusDetails?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMappingUpdatesResponse {
  /**
   * A list of mapping update job details.
   *
   * @public
   */
  items?: NetworkMigrationMappingUpdateJobDetails[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationAnalysisRequest {
  /**
   * The unique identifier of the network migration execution to analyze.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationAnalysisResponse {
  /**
   * The unique identifier of the analysis job that was started.
   *
   * @public
   */
  jobID?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationCodeGenerationRequest {
  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * The output format types for code generation, such as CloudFormation or Terraform.
   *
   * @public
   */
  codeGenerationOutputFormatTypes?: CodeGenerationOutputFormatType[] | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationCodeGenerationResponse {
  /**
   * The unique identifier of the code generation job that was started.
   *
   * @public
   */
  jobID?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationDeployerJobResponse {
  /**
   * The unique identifier of the deployer job that was started.
   *
   * @public
   */
  jobID?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationDeploymentRequest {
  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationMappingRequest {
  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * The security group mapping strategy to use.
   *
   * @public
   */
  securityGroupMappingStrategy?: SecurityGroupMappingStrategy | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationMappingResponse {
  /**
   * The unique identifier of the mapping job that was started.
   *
   * @public
   */
  jobID?: string | undefined;
}

/**
 * An operation that deletes a construct from the mapping.
 *
 * @public
 */
export interface DeleteOperation {}

/**
 * A construct reference specifying the source segment and construct to merge.
 *
 * @public
 */
export interface MergeConstruct {
  /**
   * The segment ID of the construct to merge.
   *
   * @public
   */
  segmentID?: string | undefined;

  /**
   * The construct ID to merge.
   *
   * @public
   */
  constructID?: string | undefined;
}

/**
 * An operation that merges constructs from different segments into the target construct.
 *
 * @public
 */
export interface MergeOperation {
  /**
   * The list of constructs to merge into the target.
   *
   * @public
   */
  mergeConstructs?: MergeConstruct[] | undefined;
}

/**
 * A split target specifying the CIDR block for the new construct.
 *
 * @public
 */
export interface SplitConstruct {
  /**
   * The CIDR block for the split construct.
   *
   * @public
   */
  cidrBlock?: string | undefined;
}

/**
 * An operation that splits a construct into multiple constructs with different CIDR blocks.
 *
 * @public
 */
export interface SplitOperation {
  /**
   * The list of split targets with their CIDR blocks.
   *
   * @public
   */
  splitConstructs?: SplitConstruct[] | undefined;
}

/**
 * An operation that updates the properties of a construct.
 *
 * @public
 */
export interface UpdateOperation {
  /**
   * The updated name for the construct.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Whether to exclude this construct from the migration.
   *
   * @public
   */
  excluded?: boolean | undefined;

  /**
   * The properties to update on the construct.
   *
   * @public
   */
  properties?: Record<string, string> | undefined;
}

/**
 * A union type representing the operation to perform on a construct during a mapping update.
 *
 * @public
 */
export type OperationUnion =
  | OperationUnion.DeleteMember
  | OperationUnion.MergeMember
  | OperationUnion.SplitMember
  | OperationUnion.UpdateMember
  | OperationUnion.$UnknownMember;

/**
 * @public
 */
export namespace OperationUnion {
  /**
   * A merge operation to combine constructs from different segments.
   *
   * @public
   */
  export interface MergeMember {
    merge: MergeOperation;
    split?: never;
    delete?: never;
    update?: never;
    $unknown?: never;
  }

  /**
   * A split operation to divide a construct into multiple constructs with specified CIDR blocks.
   *
   * @public
   */
  export interface SplitMember {
    merge?: never;
    split: SplitOperation;
    delete?: never;
    update?: never;
    $unknown?: never;
  }

  /**
   * A delete operation to remove a construct from the mapping.
   *
   * @public
   */
  export interface DeleteMember {
    merge?: never;
    split?: never;
    delete: DeleteOperation;
    update?: never;
    $unknown?: never;
  }

  /**
   * An update operation to modify construct properties.
   *
   * @public
   */
  export interface UpdateMember {
    merge?: never;
    split?: never;
    delete?: never;
    update: UpdateOperation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    merge?: never;
    split?: never;
    delete?: never;
    update?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    merge: (value: MergeOperation) => T;
    split: (value: SplitOperation) => T;
    delete: (value: DeleteOperation) => T;
    update: (value: UpdateOperation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A construct update to apply during a mapping update operation.
 *
 * @public
 */
export interface StartNetworkMigrationMappingUpdateConstruct {
  /**
   * The ID of the segment containing the construct.
   *
   * @public
   */
  segmentID: string | undefined;

  /**
   * The ID of the construct to update.
   *
   * @public
   */
  constructID: string | undefined;

  /**
   * The type of the construct.
   *
   * @public
   */
  constructType: string | undefined;

  /**
   * The operation to perform on the construct.
   *
   * @public
   */
  operation?: OperationUnion | undefined;
}

/**
 * A segment update to apply during a mapping update operation.
 *
 * @public
 */
export interface StartNetworkMigrationMappingUpdateSegment {
  /**
   * The ID of the segment to update.
   *
   * @public
   */
  segmentID: string | undefined;

  /**
   * The updated target AWS account for the segment.
   *
   * @public
   */
  targetAccount?: string | undefined;

  /**
   * The updated scope tags for the segment.
   *
   * @public
   */
  scopeTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationMappingUpdateRequest {
  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * A list of construct updates to apply.
   *
   * @public
   */
  constructs?: StartNetworkMigrationMappingUpdateConstruct[] | undefined;

  /**
   * A list of segment updates to apply.
   *
   * @public
   */
  segments?: StartNetworkMigrationMappingUpdateSegment[] | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationMappingUpdateResponse {
  /**
   * The unique identifier of the mapping update job that was started.
   *
   * @public
   */
  jobID?: string | undefined;
}

/**
 * Updated configuration for the target network topology and addressing.
 *
 * @public
 */
export interface TargetNetworkUpdate {
  /**
   * The updated network topology type.
   *
   * @public
   */
  topology?: TargetNetworkTopology | undefined;

  /**
   * The updated CIDR block for inbound traffic.
   *
   * @public
   */
  inboundCidr?: string | undefined;

  /**
   * The updated CIDR block for outbound traffic.
   *
   * @public
   */
  outboundCidr?: string | undefined;

  /**
   * The updated CIDR block for inspection traffic.
   *
   * @public
   */
  inspectionCidr?: string | undefined;
}

/**
 * Updated S3 configuration for storing target network artifacts.
 *
 * @public
 */
export interface TargetS3ConfigurationUpdate {
  /**
   * The updated name of the S3 bucket.
   *
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * The updated AWS account ID of the S3 bucket owner.
   *
   * @public
   */
  s3BucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkMigrationDefinitionRequest {
  /**
   * The unique identifier of the network migration definition to update.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * The updated name of the network migration definition.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated description of the network migration definition.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated list of source configurations.
   *
   * @public
   */
  sourceConfigurations?: SourceConfiguration[] | undefined;

  /**
   * The updated S3 configuration for storing the target network artifacts.
   *
   * @public
   */
  targetS3Configuration?: TargetS3ConfigurationUpdate | undefined;

  /**
   * The updated target network configuration.
   *
   * @public
   */
  targetNetwork?: TargetNetworkUpdate | undefined;

  /**
   * The updated target deployment configuration.
   *
   * @public
   */
  targetDeployment?: TargetDeployment | undefined;

  /**
   * Updates whether the migration creates new target VPCs or uses existing ones. Set to `USE_EXISTING` to migrate into existing VPCs in the target account, or to `CREATE_NEW` to provision new target VPCs.
   *
   * @public
   */
  vpcProvisioningStrategy?: VpcProvisioningStrategy | undefined;

  /**
   * The updated list of CIDR mappings that map original source CIDR ranges to updated target CIDR ranges. CIDR mappings can be provided only when `vpcProvisioningStrategy` is set to `USE_EXISTING`.
   *
   * @public
   */
  cidrMappings?: CidrMapping[] | undefined;

  /**
   * The updated scope tags for the network migration definition.
   *
   * @public
   */
  scopeTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkMigrationMapperSegmentRequest {
  /**
   * The unique identifier of the network migration definition.
   *
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * The unique identifier of the network migration execution.
   *
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * The unique identifier of the segment to update.
   *
   * @public
   */
  segmentID: string | undefined;

  /**
   * The updated scope tags for the segment.
   *
   * @public
   */
  scopeTags?: Record<string, string> | undefined;
}

/**
 * FSx for ONTAP storage configuration.
 *
 * @public
 */
export interface FsxOntapConfiguration {
  /**
   * FSx ONTAP configuration storage virtual machine ID.
   *
   * @public
   */
  storageVirtualMachineId: string | undefined;

  /**
   * FSx ONTAP configuration credentials secret ARN.
   *
   * @public
   */
  credentialsSecretArn: string | undefined;
}

/**
 * Storage configuration for replication.
 *
 * @public
 */
export interface StorageConfiguration {
  /**
   * Storage configuration storage type.
   *
   * @public
   */
  storageType: StorageType | undefined;

  /**
   * Storage configuration FSx ONTAP configuration.
   *
   * @public
   */
  fsxOntapConfiguration?: FsxOntapConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateReplicationConfigurationTemplateRequest {
  /**
   * Request to configure the Staging Area subnet ID during Replication Settings template creation.
   *
   * @public
   */
  stagingAreaSubnetId: string | undefined;

  /**
   * Request to associate the default Application Migration Service Security group with the Replication Settings template.
   *
   * @public
   */
  associateDefaultSecurityGroup: boolean | undefined;

  /**
   * Request to configure the Replication Server Security group ID during Replication Settings template creation.
   *
   * @public
   */
  replicationServersSecurityGroupsIDs: string[] | undefined;

  /**
   * Request to configure the Replication Server instance type during Replication Settings template creation.
   *
   * @public
   */
  replicationServerInstanceType: string | undefined;

  /**
   * Request to use Dedicated Replication Servers during Replication Settings template creation.
   *
   * @public
   */
  useDedicatedReplicationServer: boolean | undefined;

  /**
   * Request to configure the default large staging disk EBS volume type during Replication Settings template creation.
   *
   * @public
   */
  defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * Request to configure EBS encryption during Replication Settings template creation.
   *
   * @public
   */
  ebsEncryption: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * Request to configure an EBS encryption key during Replication Settings template creation.
   *
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * Request to configure bandwidth throttling during Replication Settings template creation.
   *
   * @public
   */
  bandwidthThrottling: number | undefined;

  /**
   * Request to configure data plane routing during Replication Settings template creation.
   *
   * @public
   */
  dataPlaneRouting: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * Request to create Public IP during Replication Settings template creation.
   *
   * @public
   */
  createPublicIP: boolean | undefined;

  /**
   * Request to configure Staging Area tags during Replication Settings template creation.
   *
   * @public
   */
  stagingAreaTags: Record<string, string> | undefined;

  /**
   * Request to use Fips Endpoint during Replication Settings template creation.
   *
   * @public
   */
  useFipsEndpoint?: boolean | undefined;

  /**
   * Request to configure tags during Replication Settings template creation.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Request to configure the internet protocol to IPv4 or IPv6.
   *
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;

  /**
   * Request to store snapshot on local zone during Replication Settings template creation.
   *
   * @public
   */
  storeSnapshotOnLocalZone?: boolean | undefined;

  /**
   * Request to configure storage during Replication Settings template creation.
   *
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface ReplicationConfigurationTemplate {
  /**
   * Replication Configuration template ID.
   *
   * @public
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * Replication Configuration template ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Replication Configuration template Staging Area subnet ID.
   *
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * Replication Configuration template associate default Application Migration Service Security group.
   *
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * Replication Configuration template server Security Groups IDs.
   *
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * Replication Configuration template server instance type.
   *
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * Replication Configuration template use Dedicated Replication Server.
   *
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * Replication Configuration template use default large Staging Disk type.
   *
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * Replication Configuration template EBS encryption.
   *
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * Replication Configuration template EBS encryption key ARN.
   *
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * Replication Configuration template bandwidth throttling.
   *
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * Replication Configuration template data plane routing.
   *
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * Replication Configuration template create Public IP.
   *
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * Replication Configuration template Staging Area Tags.
   *
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * Replication Configuration template use Fips Endpoint.
   *
   * @public
   */
  useFipsEndpoint?: boolean | undefined;

  /**
   * Replication Configuration template Tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Replication Configuration template internet protocol.
   *
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;

  /**
   * Replication Configuration template store snapshot on local zone.
   *
   * @public
   */
  storeSnapshotOnLocalZone?: boolean | undefined;

  /**
   * Replication Configuration template storage configuration.
   *
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationConfigurationTemplateRequest {
  /**
   * Request to delete Replication Configuration Template from service by Replication Configuration Template ID.
   *
   * @public
   */
  replicationConfigurationTemplateID: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationConfigurationTemplateResponse {}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesRequest {
  /**
   * Request to describe Replication Configuration template by template IDs.
   *
   * @public
   */
  replicationConfigurationTemplateIDs?: string[] | undefined;

  /**
   * Request to describe Replication Configuration template by max results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Request to describe Replication Configuration template by next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesResponse {
  /**
   * Request to describe Replication Configuration template by items.
   *
   * @public
   */
  items?: ReplicationConfigurationTemplate[] | undefined;

  /**
   * Request to describe Replication Configuration template by next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationTemplateRequest {
  /**
   * Update replication configuration template template ID request.
   *
   * @public
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * Update replication configuration template ARN request.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Update replication configuration template Staging Area subnet ID request.
   *
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * Update replication configuration template associate default Application Migration Service Security group request.
   *
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * Update replication configuration template Replication Server Security groups IDs request.
   *
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * Update replication configuration template Replication Server instance type request.
   *
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * Update replication configuration template use dedicated Replication Server request.
   *
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * Update replication configuration template use default large Staging Disk type request.
   *
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * Update replication configuration template EBS encryption request.
   *
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * Update replication configuration template EBS encryption key ARN request.
   *
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * Update replication configuration template bandwidth throttling request.
   *
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * Update replication configuration template data plane routing request.
   *
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * Update replication configuration template create Public IP request.
   *
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * Update replication configuration template Staging Area Tags request.
   *
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * Update replication configuration template use Fips Endpoint request.
   *
   * @public
   */
  useFipsEndpoint?: boolean | undefined;

  /**
   * Update replication configuration template internet protocol request.
   *
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;

  /**
   * Update replication configuration template store snapshot on local zone request.
   *
   * @public
   */
  storeSnapshotOnLocalZone?: boolean | undefined;

  /**
   * Update replication configuration template storage configuration request.
   *
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * The request to change the source server migration lifecycle state.
 *
 * @public
 */
export interface ChangeServerLifeCycleStateSourceServerLifecycle {
  /**
   * The request to change the source server migration lifecycle state.
   *
   * @public
   */
  state: ChangeServerLifeCycleStateSourceServerLifecycleState | undefined;
}

/**
 * @public
 */
export interface ChangeServerLifeCycleStateRequest {
  /**
   * The request to change the source server migration lifecycle state by source server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * The request to change the source server migration lifecycle state.
   *
   * @public
   */
  lifeCycle: ChangeServerLifeCycleStateSourceServerLifecycle | undefined;

  /**
   * The request to change the source server migration account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * Source Server connector action.
 *
 * @public
 */
export interface SourceServerConnectorAction {
  /**
   * Source Server connector action credentials secret arn.
   *
   * @public
   */
  credentialsSecretArn?: string | undefined;

  /**
   * Source Server connector action connector arn.
   *
   * @public
   */
  connectorArn?: string | undefined;
}

/**
 * Error in data replication.
 *
 * @public
 */
export interface DataReplicationError {
  /**
   * Error in data replication.
   *
   * @public
   */
  error?: DataReplicationErrorString | undefined;

  /**
   * Error in data replication.
   *
   * @public
   */
  rawError?: string | undefined;
}

/**
 * Data replication initiation step.
 *
 * @public
 */
export interface DataReplicationInitiationStep {
  /**
   * Request to query data initiation step name.
   *
   * @public
   */
  name?: DataReplicationInitiationStepName | undefined;

  /**
   * Request to query data initiation status.
   *
   * @public
   */
  status?: DataReplicationInitiationStepStatus | undefined;
}

/**
 * Data replication initiation.
 *
 * @public
 */
export interface DataReplicationInitiation {
  /**
   * Request to query data initiation start date and time.
   *
   * @public
   */
  startDateTime?: string | undefined;

  /**
   * Request to query next data initiation date and time.
   *
   * @public
   */
  nextAttemptDateTime?: string | undefined;

  /**
   * Request to query data initiation steps.
   *
   * @public
   */
  steps?: DataReplicationInitiationStep[] | undefined;
}

/**
 * Request to query disks replicated.
 *
 * @public
 */
export interface DataReplicationInfoReplicatedDisk {
  /**
   * Request to query device name.
   *
   * @public
   */
  deviceName?: string | undefined;

  /**
   * Request to query total amount of data replicated in bytes.
   *
   * @public
   */
  totalStorageBytes?: number | undefined;

  /**
   * Request to query amount of data replicated in bytes.
   *
   * @public
   */
  replicatedStorageBytes?: number | undefined;

  /**
   * Request to query amount of data rescanned in bytes.
   *
   * @public
   */
  rescannedStorageBytes?: number | undefined;

  /**
   * Request to query data replication backlog size in bytes.
   *
   * @public
   */
  backloggedStorageBytes?: number | undefined;
}

/**
 * Request data replication info.
 *
 * @public
 */
export interface DataReplicationInfo {
  /**
   * Request to query data replication lag duration.
   *
   * @public
   */
  lagDuration?: string | undefined;

  /**
   * Request to query the time when data replication will be complete.
   *
   * @public
   */
  etaDateTime?: string | undefined;

  /**
   * Request to query disks replicated.
   *
   * @public
   */
  replicatedDisks?: DataReplicationInfoReplicatedDisk[] | undefined;

  /**
   * Request to query the data replication state.
   *
   * @public
   */
  dataReplicationState?: DataReplicationState | undefined;

  /**
   * Request to query whether data replication has been initiated.
   *
   * @public
   */
  dataReplicationInitiation?: DataReplicationInitiation | undefined;

  /**
   * Error in obtaining data replication info.
   *
   * @public
   */
  dataReplicationError?: DataReplicationError | undefined;

  /**
   * Request to query data replication last snapshot time.
   *
   * @public
   */
  lastSnapshotDateTime?: string | undefined;

  /**
   * Replication server instance ID.
   *
   * @public
   */
  replicatorId?: string | undefined;
}

/**
 * Last known check performed on a launched instance.
 *
 * @public
 */
export interface LastKnownCheck {
  /**
   * Last known check type.
   *
   * @public
   */
  type?: LastKnownCheckType | undefined;

  /**
   * Last known check name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Last known check status.
   *
   * @public
   */
  status?: LastKnownCheckStatus | undefined;

  /**
   * Last known check error.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * Last known check timestamp.
   *
   * @public
   */
  checkedAt?: Date | undefined;
}

/**
 * Launched instance.
 *
 * @public
 */
export interface LaunchedInstance {
  /**
   * Launched instance EC2 ID.
   *
   * @public
   */
  ec2InstanceID?: string | undefined;

  /**
   * Launched instance Job ID.
   *
   * @public
   */
  jobID?: string | undefined;

  /**
   * Launched instance first boot.
   *
   * @public
   */
  firstBoot?: FirstBoot | undefined;

  /**
   * Launched instance last known checks.
   *
   * @public
   */
  lastKnownChecks?: LastKnownCheck[] | undefined;

  /**
   * Launched instance last known FSx checks status.
   *
   * @public
   */
  lastKnownFsxChecksStatus?: LastKnownCheckStatus | undefined;
}

/**
 * Lifecycle Cutover finalized
 *
 * @public
 */
export interface LifeCycleLastCutoverFinalized {
  /**
   * Lifecycle Cutover finalized date and time.
   *
   * @public
   */
  apiCallDateTime?: string | undefined;
}

/**
 * Lifecycle last Cutover initiated.
 *
 * @public
 */
export interface LifeCycleLastCutoverInitiated {
  /**
   * @public
   */
  apiCallDateTime?: string | undefined;

  /**
   * Lifecycle last Cutover initiated by Job ID.
   *
   * @public
   */
  jobID?: string | undefined;
}

/**
 * Lifecycle last Cutover reverted.
 *
 * @public
 */
export interface LifeCycleLastCutoverReverted {
  /**
   * Lifecycle last Cutover reverted API call date time.
   *
   * @public
   */
  apiCallDateTime?: string | undefined;
}

/**
 * Lifecycle last Cutover .
 *
 * @public
 */
export interface LifeCycleLastCutover {
  /**
   * Lifecycle last Cutover initiated.
   *
   * @public
   */
  initiated?: LifeCycleLastCutoverInitiated | undefined;

  /**
   * Lifecycle last Cutover reverted.
   *
   * @public
   */
  reverted?: LifeCycleLastCutoverReverted | undefined;

  /**
   * Lifecycle Cutover finalized date and time.
   *
   * @public
   */
  finalized?: LifeCycleLastCutoverFinalized | undefined;
}

/**
 * Lifecycle last Test finalized.
 *
 * @public
 */
export interface LifeCycleLastTestFinalized {
  /**
   * Lifecycle Test finalized API call date and time.
   *
   * @public
   */
  apiCallDateTime?: string | undefined;
}

/**
 * Lifecycle last Test initiated.
 *
 * @public
 */
export interface LifeCycleLastTestInitiated {
  /**
   * Lifecycle last Test initiated API call date and time.
   *
   * @public
   */
  apiCallDateTime?: string | undefined;

  /**
   * Lifecycle last Test initiated Job ID.
   *
   * @public
   */
  jobID?: string | undefined;
}

/**
 * Lifecycle last Test reverted.
 *
 * @public
 */
export interface LifeCycleLastTestReverted {
  /**
   * Lifecycle last Test reverted API call date and time.
   *
   * @public
   */
  apiCallDateTime?: string | undefined;
}

/**
 * Lifecycle last Test.
 *
 * @public
 */
export interface LifeCycleLastTest {
  /**
   * Lifecycle last Test initiated.
   *
   * @public
   */
  initiated?: LifeCycleLastTestInitiated | undefined;

  /**
   * Lifecycle last Test reverted.
   *
   * @public
   */
  reverted?: LifeCycleLastTestReverted | undefined;

  /**
   * Lifecycle last Test finalized.
   *
   * @public
   */
  finalized?: LifeCycleLastTestFinalized | undefined;
}

/**
 * Lifecycle.
 *
 * @public
 */
export interface LifeCycle {
  /**
   * Lifecycle added to service date and time.
   *
   * @public
   */
  addedToServiceDateTime?: string | undefined;

  /**
   * Lifecycle replication initiation date and time.
   *
   * @public
   */
  firstByteDateTime?: string | undefined;

  /**
   * Lifecycle elapsed time and duration.
   *
   * @public
   */
  elapsedReplicationDuration?: string | undefined;

  /**
   * Lifecycle last seen date and time.
   *
   * @public
   */
  lastSeenByServiceDateTime?: string | undefined;

  /**
   * Lifecycle last Test.
   *
   * @public
   */
  lastTest?: LifeCycleLastTest | undefined;

  /**
   * Lifecycle last Cutover.
   *
   * @public
   */
  lastCutover?: LifeCycleLastCutover | undefined;

  /**
   * Lifecycle state.
   *
   * @public
   */
  state?: LifeCycleState | undefined;
}

/**
 * Source server CPU information.
 *
 * @public
 */
export interface CPU {
  /**
   * The number of CPU cores on the source server.
   *
   * @public
   */
  cores?: number | undefined;

  /**
   * The source server's CPU model name.
   *
   * @public
   */
  modelName?: string | undefined;
}

/**
 * The disk identifier.
 *
 * @public
 */
export interface Disk {
  /**
   * The disk or device name.
   *
   * @public
   */
  deviceName?: string | undefined;

  /**
   * The amount of storage on the disk in bytes.
   *
   * @public
   */
  bytes?: number | undefined;
}

/**
 * Identification hints.
 *
 * @public
 */
export interface IdentificationHints {
  /**
   * FQDN address identification hint.
   *
   * @public
   */
  fqdn?: string | undefined;

  /**
   * Hostname identification hint.
   *
   * @public
   */
  hostname?: string | undefined;

  /**
   * vmWare UUID identification hint.
   *
   * @public
   */
  vmWareUuid?: string | undefined;

  /**
   * AWS Instance ID identification hint.
   *
   * @public
   */
  awsInstanceID?: string | undefined;

  /**
   * vCenter VM path identification hint.
   *
   * @public
   */
  vmPath?: string | undefined;
}

/**
 * Network interface.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * Network interface Mac address.
   *
   * @public
   */
  macAddress?: string | undefined;

  /**
   * Network interface IPs.
   *
   * @public
   */
  ips?: string[] | undefined;

  /**
   * Network interface primary IP.
   *
   * @public
   */
  isPrimary?: boolean | undefined;
}

/**
 * Operating System.
 *
 * @public
 */
export interface OS {
  /**
   * OS full string.
   *
   * @public
   */
  fullString?: string | undefined;
}

/**
 * Source server properties.
 *
 * @public
 */
export interface SourceProperties {
  /**
   * Source server last update date and time.
   *
   * @public
   */
  lastUpdatedDateTime?: string | undefined;

  /**
   * Source server recommended instance type.
   *
   * @public
   */
  recommendedInstanceType?: string | undefined;

  /**
   * Source server identification hints.
   *
   * @public
   */
  identificationHints?: IdentificationHints | undefined;

  /**
   * Source server network interfaces.
   *
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * Source Server disks.
   *
   * @public
   */
  disks?: Disk[] | undefined;

  /**
   * Source Server CPUs.
   *
   * @public
   */
  cpus?: CPU[] | undefined;

  /**
   * Source server RAM in bytes.
   *
   * @public
   */
  ramBytes?: number | undefined;

  /**
   * Source server OS.
   *
   * @public
   */
  os?: OS | undefined;
}

/**
 * @public
 */
export interface SourceServer {
  /**
   * Source server ID.
   *
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * Source server ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Source server archived status.
   *
   * @public
   */
  isArchived?: boolean | undefined;

  /**
   * Source server Tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Source server launched instance.
   *
   * @public
   */
  launchedInstance?: LaunchedInstance | undefined;

  /**
   * Source server data replication info.
   *
   * @public
   */
  dataReplicationInfo?: DataReplicationInfo | undefined;

  /**
   * Source server lifecycle state.
   *
   * @public
   */
  lifeCycle?: LifeCycle | undefined;

  /**
   * Source server properties.
   *
   * @public
   */
  sourceProperties?: SourceProperties | undefined;

  /**
   * Source server replication type.
   *
   * @public
   */
  replicationType?: ReplicationType | undefined;

  /**
   * Source server vCenter client id.
   *
   * @public
   */
  vcenterClientID?: string | undefined;

  /**
   * Source server application ID.
   *
   * @public
   */
  applicationID?: string | undefined;

  /**
   * Source server user provided ID.
   *
   * @public
   */
  userProvidedID?: string | undefined;

  /**
   * Source server fqdn for action framework.
   *
   * @public
   */
  fqdnForActionFramework?: string | undefined;

  /**
   * Source Server connector action.
   *
   * @public
   */
  connectorAction?: SourceServerConnectorAction | undefined;
}

/**
 * @public
 */
export interface DeleteSourceServerRequest {
  /**
   * Request to delete Source Server from service by Server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Request to delete Source Server from service by Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSourceServerResponse {}

/**
 * Request to filter Source Servers list.
 *
 * @public
 */
export interface DescribeSourceServersRequestFilters {
  /**
   * Request to filter Source Servers list by Source Server ID.
   *
   * @public
   */
  sourceServerIDs?: string[] | undefined;

  /**
   * Request to filter Source Servers list by archived.
   *
   * @public
   */
  isArchived?: boolean | undefined;

  /**
   * Request to filter Source Servers list by replication type.
   *
   * @public
   */
  replicationTypes?: ReplicationType[] | undefined;

  /**
   * Request to filter Source Servers list by life cycle states.
   *
   * @public
   */
  lifeCycleStates?: LifeCycleState[] | undefined;

  /**
   * Request to filter Source Servers list by application IDs.
   *
   * @public
   */
  applicationIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSourceServersRequest {
  /**
   * Request to filter Source Servers list.
   *
   * @public
   */
  filters?: DescribeSourceServersRequestFilters | undefined;

  /**
   * Request to filter Source Servers list by maximum results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Request to filter Source Servers list by next token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Request to filter Source Servers list by Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSourceServersResponse {
  /**
   * The list of returned Source Servers.
   *
   * @public
   */
  items?: SourceServer[] | undefined;

  /**
   * The token of the next Source Server to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisconnectFromServiceRequest {
  /**
   * Request to disconnect Source Server from service by Server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Request to disconnect Source Server from service by Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface FinalizeCutoverRequest {
  /**
   * Request to finalize Cutover by Source Server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Request to finalize Cutover by Source Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface GetLaunchConfigurationRequest {
  /**
   * Request to get Launch Configuration information by Source Server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Request to get Launch Configuration information by Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface LaunchConfiguration {
  /**
   * Launch configuration Source Server ID.
   *
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * Launch configuration name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Launch configuration EC2 Launch template ID.
   *
   * @public
   */
  ec2LaunchTemplateID?: string | undefined;

  /**
   * Launch disposition for launch configuration.
   *
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * Launch configuration Target instance type right sizing method.
   *
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * Copy Private IP during Launch Configuration.
   *
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * Copy Tags during Launch Configuration.
   *
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * Launch configuration OS licensing.
   *
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * Launch configuration boot mode.
   *
   * @public
   */
  bootMode?: BootMode | undefined;

  /**
   * Post Launch Actions to be executed on the Test or Cutover instance.
   *
   * @public
   */
  postLaunchActions?: PostLaunchActions | undefined;

  /**
   * Enable map auto tagging.
   *
   * @public
   */
  enableMapAutoTagging?: boolean | undefined;

  /**
   * Map auto tagging MPE ID.
   *
   * @public
   */
  mapAutoTaggingMpeID?: string | undefined;
}

/**
 * @public
 */
export interface GetReplicationConfigurationRequest {
  /**
   * Request to get Replication Configuration by Source Server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Request to get Replication Configuration by Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * Replication Configuration replicated disk.
 *
 * @public
 */
export interface ReplicationConfigurationReplicatedDisk {
  /**
   * Replication Configuration replicated disk device name.
   *
   * @public
   */
  deviceName?: string | undefined;

  /**
   * Replication Configuration replicated disk boot disk.
   *
   * @public
   */
  isBootDisk?: boolean | undefined;

  /**
   * Replication Configuration replicated disk staging disk type.
   *
   * @public
   */
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | undefined;

  /**
   * Replication Configuration replicated disk IOPs.
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * Replication Configuration replicated disk throughput.
   *
   * @public
   */
  throughput?: number | undefined;
}

/**
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * Replication Configuration Source Server ID.
   *
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * Replication Configuration name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Replication Configuration Staging Area subnet ID.
   *
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * Replication Configuration associate default Application Migration Service Security Group.
   *
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * Replication Configuration Replication Server Security Group IDs.
   *
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * Replication Configuration Replication Server instance type.
   *
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * Replication Configuration use Dedicated Replication Server.
   *
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * Replication Configuration use default large Staging Disks.
   *
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * Replication Configuration replicated disks.
   *
   * @public
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[] | undefined;

  /**
   * Replication Configuration EBS encryption.
   *
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * Replication Configuration EBS encryption key ARN.
   *
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * Replication Configuration set bandwidth throttling.
   *
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * Replication Configuration data plane routing.
   *
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * Replication Configuration create Public IP.
   *
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * Replication Configuration Staging Area tags.
   *
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * Replication Configuration use Fips Endpoint.
   *
   * @public
   */
  useFipsEndpoint?: boolean | undefined;

  /**
   * Replication Configuration internet protocol.
   *
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;

  /**
   * Replication Configuration store snapshot on local zone.
   *
   * @public
   */
  storeSnapshotOnLocalZone?: boolean | undefined;

  /**
   * Replication Configuration storage configuration.
   *
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * Source server post migration custom action filters.
 *
 * @public
 */
export interface SourceServerActionsRequestFilters {
  /**
   * Action IDs to filter source server post migration custom actions by.
   *
   * @public
   */
  actionIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSourceServerActionsRequest {
  /**
   * Source server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Filters to apply when listing source server post migration custom actions.
   *
   * @public
   */
  filters?: SourceServerActionsRequestFilters | undefined;

  /**
   * Maximum amount of items to return when listing source server post migration custom actions.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token to use when listing source server post migration custom actions.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Account ID to return when listing source server post migration custom actions.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface SourceServerActionDocument {
  /**
   * Source server post migration custom action ID.
   *
   * @public
   */
  actionID?: string | undefined;

  /**
   * Source server post migration custom action name.
   *
   * @public
   */
  actionName?: string | undefined;

  /**
   * Source server post migration custom action document identifier.
   *
   * @public
   */
  documentIdentifier?: string | undefined;

  /**
   * Source server post migration custom action order.
   *
   * @public
   */
  order?: number | undefined;

  /**
   * Source server post migration custom action document version.
   *
   * @public
   */
  documentVersion?: string | undefined;

  /**
   * Source server post migration custom action active status.
   *
   * @public
   */
  active?: boolean | undefined;

  /**
   * Source server post migration custom action timeout in seconds.
   *
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * Source server post migration custom action must succeed for cutover.
   *
   * @public
   */
  mustSucceedForCutover?: boolean | undefined;

  /**
   * Source server post migration custom action parameters.
   *
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]> | undefined;

  /**
   * Source server post migration custom action external parameters.
   *
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter> | undefined;

  /**
   * Source server post migration custom action description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Source server post migration custom action category.
   *
   * @public
   */
  category?: ActionCategory | undefined;
}

/**
 * @public
 */
export interface ListSourceServerActionsResponse {
  /**
   * List of source server post migration custom actions.
   *
   * @public
   */
  items?: SourceServerActionDocument[] | undefined;

  /**
   * Next token returned when listing source server post migration custom actions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface MarkAsArchivedRequest {
  /**
   * Mark as archived by Source Server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Mark as archived by Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface PauseReplicationRequest {
  /**
   * Pause Replication Request source server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Pause Replication Request account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface PutSourceServerActionRequest {
  /**
   * Source server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Source server post migration custom action name.
   *
   * @public
   */
  actionName: string | undefined;

  /**
   * Source server post migration custom action document identifier.
   *
   * @public
   */
  documentIdentifier: string | undefined;

  /**
   * Source server post migration custom action order.
   *
   * @public
   */
  order: number | undefined;

  /**
   * Source server post migration custom action ID.
   *
   * @public
   */
  actionID: string | undefined;

  /**
   * Source server post migration custom action document version.
   *
   * @public
   */
  documentVersion?: string | undefined;

  /**
   * Source server post migration custom action active status.
   *
   * @public
   */
  active?: boolean | undefined;

  /**
   * Source server post migration custom action timeout in seconds.
   *
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * Source server post migration custom action must succeed for cutover.
   *
   * @public
   */
  mustSucceedForCutover?: boolean | undefined;

  /**
   * Source server post migration custom action parameters.
   *
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]> | undefined;

  /**
   * Source server post migration custom action external parameters.
   *
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter> | undefined;

  /**
   * Source server post migration custom action description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Source server post migration custom action category.
   *
   * @public
   */
  category?: ActionCategory | undefined;

  /**
   * Source server post migration custom account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface RemoveSourceServerActionRequest {
  /**
   * Source server ID of the post migration custom action to remove.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Source server post migration custom action ID to remove.
   *
   * @public
   */
  actionID: string | undefined;

  /**
   * Source server post migration account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface RemoveSourceServerActionResponse {}

/**
 * @public
 */
export interface ResumeReplicationRequest {
  /**
   * Resume Replication Request source server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Resume Replication Request account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface RetryDataReplicationRequest {
  /**
   * Retry data replication for Source Server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Retry data replication for Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface StartCutoverRequest {
  /**
   * Start Cutover by Source Server IDs.
   *
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * Start Cutover by Tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Start Cutover by Account IDs
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface StartCutoverResponse {
  /**
   * Start Cutover Job response.
   *
   * @public
   */
  job?: Job | undefined;
}

/**
 * @public
 */
export interface StartReplicationRequest {
  /**
   * ID of source server on which to start replication.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Account ID on which to start replication.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface StartTestRequest {
  /**
   * Start Test for Source Server IDs.
   *
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * Start Test by Tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Start Test for Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface StartTestResponse {
  /**
   * Start Test Job response.
   *
   * @public
   */
  job?: Job | undefined;
}

/**
 * @public
 */
export interface StopReplicationRequest {
  /**
   * Stop Replication Request source server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Stop Replication Request account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface TerminateTargetInstancesRequest {
  /**
   * Terminate Target instance by Source Server IDs.
   *
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * Terminate Target instance by Tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Terminate Target instance by Account ID
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface TerminateTargetInstancesResponse {
  /**
   * Terminate Target instance Job response.
   *
   * @public
   */
  job?: Job | undefined;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationRequest {
  /**
   * Update Launch configuration by Source Server ID request.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Update Launch configuration name request.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Update Launch configuration launch disposition request.
   *
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * Update Launch configuration Target instance right sizing request.
   *
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * Update Launch configuration copy Private IP request.
   *
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * Update Launch configuration copy Tags request.
   *
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * Update Launch configuration licensing request.
   *
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * Update Launch configuration boot mode request.
   *
   * @public
   */
  bootMode?: BootMode | undefined;

  /**
   * Post Launch Actions to be executed on the Test or Cutover instance.
   *
   * @public
   */
  postLaunchActions?: PostLaunchActions | undefined;

  /**
   * Enable map auto tagging.
   *
   * @public
   */
  enableMapAutoTagging?: boolean | undefined;

  /**
   * Launch configuration map auto tagging MPE ID.
   *
   * @public
   */
  mapAutoTaggingMpeID?: string | undefined;

  /**
   * Update Launch configuration Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationRequest {
  /**
   * Update replication configuration Source Server ID request.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Update replication configuration name request.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Update replication configuration Staging Area subnet request.
   *
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * Update replication configuration associate default Application Migration Service Security group request.
   *
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * Update replication configuration Replication Server Security Groups IDs request.
   *
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * Update replication configuration Replication Server instance type request.
   *
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * Update replication configuration use dedicated Replication Server request.
   *
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * Update replication configuration use default large Staging Disk type request.
   *
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * Update replication configuration replicated disks request.
   *
   * @public
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[] | undefined;

  /**
   * Update replication configuration EBS encryption request.
   *
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * Update replication configuration EBS encryption key ARN request.
   *
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * Update replication configuration bandwidth throttling request.
   *
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * Update replication configuration data plane routing request.
   *
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * Update replication configuration create Public IP request.
   *
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * Update replication configuration Staging Area Tags request.
   *
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * Update replication configuration use Fips Endpoint.
   *
   * @public
   */
  useFipsEndpoint?: boolean | undefined;

  /**
   * Update replication configuration Account ID request.
   *
   * @public
   */
  accountID?: string | undefined;

  /**
   * Update replication configuration internet protocol.
   *
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;

  /**
   * Update replication configuration store snapshot on local zone.
   *
   * @public
   */
  storeSnapshotOnLocalZone?: boolean | undefined;

  /**
   * Update replication configuration storage configuration.
   *
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSourceServerRequest {
  /**
   * Update Source Server request account ID.
   *
   * @public
   */
  accountID?: string | undefined;

  /**
   * Update Source Server request source server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Update Source Server request connector action.
   *
   * @public
   */
  connectorAction?: SourceServerConnectorAction | undefined;

  /**
   * Update Source Server request user provided ID.
   *
   * @public
   */
  userProvidedID?: string | undefined;

  /**
   * Update Source Server request FQDN for action framework.
   *
   * @public
   */
  fqdnForActionFramework?: string | undefined;

  /**
   * Update Source Server request platform operating system.
   *
   * @public
   */
  platform?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSourceServerReplicationTypeRequest {
  /**
   * ID of source server on which to update replication type.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * Replication type to which to update source server.
   *
   * @public
   */
  replicationType: ReplicationType | undefined;

  /**
   * Account ID on which to update replication type.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * S3 configuration for the source import file to be enriched.
 *
 * @public
 */
export interface EnrichmentSourceS3Configuration {
  /**
   * The name of the S3 bucket containing the source import file.
   *
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * The AWS account ID of the S3 bucket owner.
   *
   * @public
   */
  s3BucketOwner: string | undefined;

  /**
   * The S3 key (path) for the source import file.
   *
   * @public
   */
  s3Key: string | undefined;
}

/**
 * @public
 */
export interface StartImportFileEnrichmentRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The S3 configuration specifying the source location of the import file to be enriched.
   *
   * @public
   */
  s3BucketSource: EnrichmentSourceS3Configuration | undefined;

  /**
   * The S3 configuration specifying the target location where the enriched import file will be stored.
   *
   * @public
   */
  s3BucketTarget: EnrichmentTargetS3Configuration | undefined;

  /**
   * The IP assignment strategy to use when enriching the import file. Can be STATIC or DYNAMIC.
   *
   * @public
   */
  ipAssignmentStrategy?: IpAssignmentStrategy | undefined;
}

/**
 * @public
 */
export interface StartImportFileEnrichmentResponse {
  /**
   * The unique identifier of the import file enrichment job that was started.
   *
   * @public
   */
  jobID?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * Tag resource by ARN.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Tag resource by Tags.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * Untag resource by ARN.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Untag resource by Keys.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVcenterClientRequest {
  /**
   * ID of resource to be deleted.
   *
   * @public
   */
  vcenterClientID: string | undefined;
}

/**
 * @public
 */
export interface DescribeVcenterClientsRequest {
  /**
   * Maximum results to be returned in DescribeVcenterClients.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next pagination token to be provided for DescribeVcenterClients.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * vCenter client.
 *
 * @public
 */
export interface VcenterClient {
  /**
   * ID of vCenter client.
   *
   * @public
   */
  vcenterClientID?: string | undefined;

  /**
   * Arn of vCenter client.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Hostname of vCenter client .
   *
   * @public
   */
  hostname?: string | undefined;

  /**
   * Vcenter UUID of vCenter client.
   *
   * @public
   */
  vcenterUUID?: string | undefined;

  /**
   * Datacenter name of vCenter client.
   *
   * @public
   */
  datacenterName?: string | undefined;

  /**
   * Last seen time of vCenter client.
   *
   * @public
   */
  lastSeenDatetime?: string | undefined;

  /**
   * Tags for Source Server of vCenter client.
   *
   * @public
   */
  sourceServerTags?: Record<string, string> | undefined;

  /**
   * Tags for vCenter client.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeVcenterClientsResponse {
  /**
   * List of items returned by DescribeVcenterClients.
   *
   * @public
   */
  items?: VcenterClient[] | undefined;

  /**
   * Next pagination token returned from DescribeVcenterClients.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ArchiveWaveRequest {
  /**
   * Wave ID.
   *
   * @public
   */
  waveID: string | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * Wave aggregated status.
 *
 * @public
 */
export interface WaveAggregatedStatus {
  /**
   * Wave aggregated status last update dateTime.
   *
   * @public
   */
  lastUpdateDateTime?: string | undefined;

  /**
   * DateTime marking when the first source server in the wave started replication.
   *
   * @public
   */
  replicationStartedDateTime?: string | undefined;

  /**
   * Wave aggregated status health status.
   *
   * @public
   */
  healthStatus?: WaveHealthStatus | undefined;

  /**
   * Wave aggregated status progress status.
   *
   * @public
   */
  progressStatus?: WaveProgressStatus | undefined;

  /**
   * Wave aggregated status total applications amount.
   *
   * @public
   */
  totalApplications?: number | undefined;
}

/**
 * @public
 */
export interface Wave {
  /**
   * Wave ID.
   *
   * @public
   */
  waveID?: string | undefined;

  /**
   * Wave ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Wave name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Wave description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Wave archival status.
   *
   * @public
   */
  isArchived?: boolean | undefined;

  /**
   * Wave aggregated status.
   *
   * @public
   */
  waveAggregatedStatus?: WaveAggregatedStatus | undefined;

  /**
   * Wave creation dateTime.
   *
   * @public
   */
  creationDateTime?: string | undefined;

  /**
   * Wave last modified dateTime.
   *
   * @public
   */
  lastModifiedDateTime?: string | undefined;

  /**
   * Wave tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationsRequest {
  /**
   * Wave ID.
   *
   * @public
   */
  waveID: string | undefined;

  /**
   * Application IDs list.
   *
   * @public
   */
  applicationIDs: string[] | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationsResponse {}

/**
 * @public
 */
export interface CreateWaveRequest {
  /**
   * Wave name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Wave description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Wave tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWaveRequest {
  /**
   * Wave ID.
   *
   * @public
   */
  waveID: string | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWaveResponse {}

/**
 * @public
 */
export interface DisassociateApplicationsRequest {
  /**
   * Wave ID.
   *
   * @public
   */
  waveID: string | undefined;

  /**
   * Application IDs list.
   *
   * @public
   */
  applicationIDs: string[] | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateApplicationsResponse {}

/**
 * Waves list filters.
 *
 * @public
 */
export interface ListWavesRequestFilters {
  /**
   * Filter waves list by wave ID.
   *
   * @public
   */
  waveIDs?: string[] | undefined;

  /**
   * Filter waves list by archival status.
   *
   * @public
   */
  isArchived?: boolean | undefined;
}

/**
 * @public
 */
export interface ListWavesRequest {
  /**
   * Waves list filters.
   *
   * @public
   */
  filters?: ListWavesRequestFilters | undefined;

  /**
   * Maximum results to return when listing waves.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Request next token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Request account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface ListWavesResponse {
  /**
   * Waves list.
   *
   * @public
   */
  items?: Wave[] | undefined;

  /**
   * Response next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UnarchiveWaveRequest {
  /**
   * Wave ID.
   *
   * @public
   */
  waveID: string | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWaveRequest {
  /**
   * Wave ID.
   *
   * @public
   */
  waveID: string | undefined;

  /**
   * Wave name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Wave description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Account ID.
   *
   * @public
   */
  accountID?: string | undefined;
}
