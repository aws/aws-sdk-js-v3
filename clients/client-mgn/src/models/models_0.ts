// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

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
  DefinitionType,
  DeleteOnTermination,
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
  InsightLevel,
  InsightProducerName,
  InsightProducerType,
  InsightType,
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
  OutpostSnapshotLocation,
  PostLaunchActionExecutionStatus,
  PostLaunchActionsDeploymentType,
  RemoteSourceActionInvocationStatus,
  RemoteSourceActionJobStatus,
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
} from "./enums";

/**
 * <p>Application aggregated status.</p>
 * @public
 */
export interface ApplicationAggregatedStatus {
  /**
   * <p>Application aggregated status last update dateTime.</p>
   * @public
   */
  lastUpdateDateTime?: string | undefined;

  /**
   * <p>Application aggregated status health status.</p>
   * @public
   */
  healthStatus?: ApplicationHealthStatus | undefined;

  /**
   * <p>Application aggregated status progress status.</p>
   * @public
   */
  progressStatus?: ApplicationProgressStatus | undefined;

  /**
   * <p>Application aggregated status total source servers amount.</p>
   * @public
   */
  totalSourceServers?: number | undefined;
}

/**
 * @public
 */
export interface Application {
  /**
   * <p>Application ID.</p>
   * @public
   */
  applicationID?: string | undefined;

  /**
   * <p>Application ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Application name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Application description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Application archival status.</p>
   * @public
   */
  isArchived?: boolean | undefined;

  /**
   * <p>Application aggregated status.</p>
   * @public
   */
  applicationAggregatedStatus?: ApplicationAggregatedStatus | undefined;

  /**
   * <p>Application creation dateTime.</p>
   * @public
   */
  creationDateTime?: string | undefined;

  /**
   * <p>Application last modified dateTime.</p>
   * @public
   */
  lastModifiedDateTime?: string | undefined;

  /**
   * <p>Application tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Application wave ID.</p>
   * @public
   */
  waveID?: string | undefined;
}

/**
 * @public
 */
export interface ArchiveApplicationRequest {
  /**
   * <p>Application ID.</p>
   * @public
   */
  applicationID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>Error details.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>Error details message.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>Error details code.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>Error details resourceId.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>Error details resourceType.</p>
   * @public
   */
  resourceType?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSourceServersRequest {
  /**
   * <p>Application ID.</p>
   * @public
   */
  applicationID: string | undefined;

  /**
   * <p>Source server IDs list.</p>
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
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
   * <p>Application name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Application description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Application tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>Application ID.</p>
   * @public
   */
  applicationID: string | undefined;

  /**
   * <p>Account ID.</p>
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
   * <p>Application ID.</p>
   * @public
   */
  applicationID: string | undefined;

  /**
   * <p>Source server IDs list.</p>
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceServersResponse {}

/**
 * <p>Applications list filters.</p>
 * @public
 */
export interface ListApplicationsRequestFilters {
  /**
   * <p>Filter applications list by application ID.</p>
   * @public
   */
  applicationIDs?: string[] | undefined;

  /**
   * <p>Filter applications list by archival status.</p>
   * @public
   */
  isArchived?: boolean | undefined;

  /**
   * <p>Filter applications list by wave ID.</p>
   * @public
   */
  waveIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>Applications list filters.</p>
   * @public
   */
  filters?: ListApplicationsRequestFilters | undefined;

  /**
   * <p>Maximum results to return when listing applications.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Request next token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Applications list Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>Applications list.</p>
   * @public
   */
  items?: Application[] | undefined;

  /**
   * <p>Response next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UnarchiveApplicationRequest {
  /**
   * <p>Application ID.</p>
   * @public
   */
  applicationID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>Application ID.</p>
   * @public
   */
  applicationID: string | undefined;

  /**
   * <p>Application name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Application description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>Connector SSM command config.</p>
 * @public
 */
export interface ConnectorSsmCommandConfig {
  /**
   * <p>Connector SSM command config S3 output enabled.</p>
   * @public
   */
  s3OutputEnabled: boolean | undefined;

  /**
   * <p>Connector SSM command config output S3 bucket name.</p>
   * @public
   */
  outputS3BucketName?: string | undefined;

  /**
   * <p>Connector SSM command config CloudWatch output enabled.</p>
   * @public
   */
  cloudWatchOutputEnabled: boolean | undefined;

  /**
   * <p>Connector SSM command config CloudWatch log group name.</p>
   * @public
   */
  cloudWatchLogGroupName?: string | undefined;
}

/**
 * @public
 */
export interface Connector {
  /**
   * <p>Connector ID.</p>
   * @public
   */
  connectorID?: string | undefined;

  /**
   * <p>Connector name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Connector SSM instance ID.</p>
   * @public
   */
  ssmInstanceID?: string | undefined;

  /**
   * <p>Connector arn.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Connector tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Connector SSM command config.</p>
   * @public
   */
  ssmCommandConfig?: ConnectorSsmCommandConfig | undefined;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * <p>Create Connector request name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Create Connector request SSM instance ID.</p>
   * @public
   */
  ssmInstanceID: string | undefined;

  /**
   * <p>Create Connector request tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Create Connector request SSM command config.</p>
   * @public
   */
  ssmCommandConfig?: ConnectorSsmCommandConfig | undefined;
}

/**
 * <p>Validate exception field.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>Validate exception field name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Validate exception field message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * <p>Delete Connector request connector ID.</p>
   * @public
   */
  connectorID: string | undefined;
}

/**
 * <p>List Connectors Request Filters.</p>
 * @public
 */
export interface ListConnectorsRequestFilters {
  /**
   * <p>List Connectors Request Filters connector IDs.</p>
   * @public
   */
  connectorIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * <p>List Connectors Request filters.</p>
   * @public
   */
  filters?: ListConnectorsRequestFilters | undefined;

  /**
   * <p>List Connectors Request max results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>List Connectors Request next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * <p>List connectors response items.</p>
   * @public
   */
  items?: Connector[] | undefined;

  /**
   * <p>List connectors response next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorRequest {
  /**
   * <p>Update Connector request connector ID.</p>
   * @public
   */
  connectorID: string | undefined;

  /**
   * <p>Update Connector request name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Update Connector request SSM command config.</p>
   * @public
   */
  ssmCommandConfig?: ConnectorSsmCommandConfig | undefined;
}

/**
 * <p>List export errors request.</p>
 * @public
 */
export interface ListExportErrorsRequest {
  /**
   * <p>List export errors request export id.</p>
   * @public
   */
  exportID: string | undefined;

  /**
   * <p>List export errors request max results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>List export errors request next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Export errors data.</p>
 * @public
 */
export interface ExportErrorData {
  /**
   * <p>Export errors data raw error.</p>
   * @public
   */
  rawError?: string | undefined;
}

/**
 * <p>Export task error.</p>
 * @public
 */
export interface ExportTaskError {
  /**
   * <p>Export task error datetime.</p>
   * @public
   */
  errorDateTime?: string | undefined;

  /**
   * <p>Export task error data.</p>
   * @public
   */
  errorData?: ExportErrorData | undefined;
}

/**
 * <p>List export errors response.</p>
 * @public
 */
export interface ListExportErrorsResponse {
  /**
   * <p>List export errors response items.</p>
   * @public
   */
  items?: ExportTaskError[] | undefined;

  /**
   * <p>List export errors response next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>List exports request filters.</p>
 * @public
 */
export interface ListExportsRequestFilters {
  /**
   * <p>List exports request filters export ids.</p>
   * @public
   */
  exportIDs?: string[] | undefined;
}

/**
 * <p>List export request.</p>
 * @public
 */
export interface ListExportsRequest {
  /**
   * <p>List exports request filters.</p>
   * @public
   */
  filters?: ListExportsRequestFilters | undefined;

  /**
   * <p>List export request max results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>List export request next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Export task summary.</p>
 * @public
 */
export interface ExportTaskSummary {
  /**
   * <p>Export task summary servers count.</p>
   * @public
   */
  serversCount?: number | undefined;

  /**
   * <p>Export task summary applications count.</p>
   * @public
   */
  applicationsCount?: number | undefined;

  /**
   * <p>Export task summary waves count.</p>
   * @public
   */
  wavesCount?: number | undefined;
}

/**
 * <p>Export task.</p>
 * @public
 */
export interface ExportTask {
  /**
   * <p>Export task id.</p>
   * @public
   */
  exportID?: string | undefined;

  /**
   * <p>ExportTask arn.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Export task s3 bucket.</p>
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * <p>Export task s3 key.</p>
   * @public
   */
  s3Key?: string | undefined;

  /**
   * <p>Export task s3 bucket owner.</p>
   * @public
   */
  s3BucketOwner?: string | undefined;

  /**
   * <p>Export task creation datetime.</p>
   * @public
   */
  creationDateTime?: string | undefined;

  /**
   * <p>Export task end datetime.</p>
   * @public
   */
  endDateTime?: string | undefined;

  /**
   * <p>Export task status.</p>
   * @public
   */
  status?: ExportStatus | undefined;

  /**
   * <p>Export task progress percentage.</p>
   * @public
   */
  progressPercentage?: number | undefined;

  /**
   * <p>Export task summary.</p>
   * @public
   */
  summary?: ExportTaskSummary | undefined;

  /**
   * <p>Export task tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>List export response.</p>
 * @public
 */
export interface ListExportsResponse {
  /**
   * <p>List export response items.</p>
   * @public
   */
  items?: ExportTask[] | undefined;

  /**
   * <p>List export response next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Start export request.</p>
 * @public
 */
export interface StartExportRequest {
  /**
   * <p>Start export request s3 bucket.</p>
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * <p>Start export request s3key.</p>
   * @public
   */
  s3Key: string | undefined;

  /**
   * <p>Start export request s3 bucket owner.</p>
   * @public
   */
  s3BucketOwner?: string | undefined;

  /**
   * <p>Start export request tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Start export response.</p>
 * @public
 */
export interface StartExportResponse {
  /**
   * <p>Start export response export task.</p>
   * @public
   */
  exportTask?: ExportTask | undefined;
}

/**
 * <p>List import errors request.</p>
 * @public
 */
export interface ListImportErrorsRequest {
  /**
   * <p>List import errors request import id.</p>
   * @public
   */
  importID: string | undefined;

  /**
   * <p>List import errors request max results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>List import errors request next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Import error data.</p>
 * @public
 */
export interface ImportErrorData {
  /**
   * <p>Import error data source server ID.</p>
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * <p>Import error data application ID.</p>
   * @public
   */
  applicationID?: string | undefined;

  /**
   * <p>Import error data wave id.</p>
   * @public
   */
  waveID?: string | undefined;

  /**
   * <p>Import error data ec2 LaunchTemplate ID.</p>
   * @public
   */
  ec2LaunchTemplateID?: string | undefined;

  /**
   * <p>Import error data row number.</p>
   * @public
   */
  rowNumber?: number | undefined;

  /**
   * <p>Import error data raw error.</p>
   * @public
   */
  rawError?: string | undefined;

  /**
   * <p>Import error data source account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>Import task error.</p>
 * @public
 */
export interface ImportTaskError {
  /**
   * <p>Import task error datetime.</p>
   * @public
   */
  errorDateTime?: string | undefined;

  /**
   * <p>Import task error type.</p>
   * @public
   */
  errorType?: ImportErrorType | undefined;

  /**
   * <p>Import task error data.</p>
   * @public
   */
  errorData?: ImportErrorData | undefined;
}

/**
 * <p>List imports errors response.</p>
 * @public
 */
export interface ListImportErrorsResponse {
  /**
   * <p>List imports errors response items.</p>
   * @public
   */
  items?: ImportTaskError[] | undefined;

  /**
   * <p>List imports errors response next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>List imports request filters.</p>
 * @public
 */
export interface ListImportsRequestFilters {
  /**
   * <p>List imports request filters import IDs.</p>
   * @public
   */
  importIDs?: string[] | undefined;
}

/**
 * <p>List imports request.</p>
 * @public
 */
export interface ListImportsRequest {
  /**
   * <p>List imports request filters.</p>
   * @public
   */
  filters?: ListImportsRequestFilters | undefined;

  /**
   * <p>List imports request max results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>List imports request next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>S3 bucket source.</p>
 * @public
 */
export interface S3BucketSource {
  /**
   * <p>S3 bucket source s3 bucket.</p>
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * <p>S3 bucket source s3 key.</p>
   * @public
   */
  s3Key: string | undefined;

  /**
   * <p>S3 bucket source s3 bucket owner.</p>
   * @public
   */
  s3BucketOwner?: string | undefined;
}

/**
 * <p>Import task summary applications.</p>
 * @public
 */
export interface ImportTaskSummaryApplications {
  /**
   * <p>Import task summary applications created count.</p>
   * @public
   */
  createdCount?: number | undefined;

  /**
   * <p>Import task summary applications modified count.</p>
   * @public
   */
  modifiedCount?: number | undefined;
}

/**
 * <p>Import task summary servers.</p>
 * @public
 */
export interface ImportTaskSummaryServers {
  /**
   * <p>Import task summary servers created count.</p>
   * @public
   */
  createdCount?: number | undefined;

  /**
   * <p>Import task summary servers modified count.</p>
   * @public
   */
  modifiedCount?: number | undefined;
}

/**
 * <p>Import task summary waves.</p>
 * @public
 */
export interface ImportTaskSummaryWaves {
  /**
   * <p>Import task summary waves created count.</p>
   * @public
   */
  createdCount?: number | undefined;

  /**
   * <p>Import task summary waves modified count.</p>
   * @public
   */
  modifiedCount?: number | undefined;
}

/**
 * <p>Import task summary.</p>
 * @public
 */
export interface ImportTaskSummary {
  /**
   * <p>Import task summary waves.</p>
   * @public
   */
  waves?: ImportTaskSummaryWaves | undefined;

  /**
   * <p>Import task summary applications.</p>
   * @public
   */
  applications?: ImportTaskSummaryApplications | undefined;

  /**
   * <p>Import task summary servers.</p>
   * @public
   */
  servers?: ImportTaskSummaryServers | undefined;
}

/**
 * <p>Import task.</p>
 * @public
 */
export interface ImportTask {
  /**
   * <p>Import task id.</p>
   * @public
   */
  importID?: string | undefined;

  /**
   * <p>ImportTask arn.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Import task s3 bucket source.</p>
   * @public
   */
  s3BucketSource?: S3BucketSource | undefined;

  /**
   * <p>Import task creation datetime.</p>
   * @public
   */
  creationDateTime?: string | undefined;

  /**
   * <p>Import task end datetime.</p>
   * @public
   */
  endDateTime?: string | undefined;

  /**
   * <p>Import task status.</p>
   * @public
   */
  status?: ImportStatus | undefined;

  /**
   * <p>Import task progress percentage.</p>
   * @public
   */
  progressPercentage?: number | undefined;

  /**
   * <p>Import task summary.</p>
   * @public
   */
  summary?: ImportTaskSummary | undefined;

  /**
   * <p>Import task tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>List import response.</p>
 * @public
 */
export interface ListImportsResponse {
  /**
   * <p>List import response items.</p>
   * @public
   */
  items?: ImportTask[] | undefined;

  /**
   * <p>List import response next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Start import request.</p>
 * @public
 */
export interface StartImportRequest {
  /**
   * <p>Start import request client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Start import request s3 bucket source.</p>
   * @public
   */
  s3BucketSource: S3BucketSource | undefined;

  /**
   * <p>Start import request tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Start import response.</p>
 * @public
 */
export interface StartImportResponse {
  /**
   * <p>Start import response import task.</p>
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
   * <p>Request to delete Job from service by Job ID.</p>
   * @public
   */
  jobID: string | undefined;

  /**
   * <p>Request to delete Job from service by Account ID.</p>
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
   * <p>Request to describe Job log job ID.</p>
   * @public
   */
  jobID: string | undefined;

  /**
   * <p>Request to describe Job log item maximum results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Request to describe Job log next token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Request to describe Job log Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>Job log data</p>
 * @public
 */
export interface JobLogEventData {
  /**
   * <p>Job Event Source Server ID.</p>
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * <p>Job Event conversion Server ID.</p>
   * @public
   */
  conversionServerID?: string | undefined;

  /**
   * <p>Job Event Target instance ID.</p>
   * @public
   */
  targetInstanceID?: string | undefined;

  /**
   * <p>Job error.</p>
   * @public
   */
  rawError?: string | undefined;

  /**
   * <p>Retries for this operation.</p>
   * @public
   */
  attemptCount?: number | undefined;

  /**
   * <p>The maximum number of retries that will be attempted if this operation failed.</p>
   * @public
   */
  maxAttemptsCount?: number | undefined;
}

/**
 * <p>Job log.</p>
 * @public
 */
export interface JobLog {
  /**
   * <p>Job log event date and time.</p>
   * @public
   */
  logDateTime?: string | undefined;

  /**
   * <p>Job log event.</p>
   * @public
   */
  event?: JobLogEvent | undefined;

  /**
   * <p>Job event data</p>
   * @public
   */
  eventData?: JobLogEventData | undefined;
}

/**
 * @public
 */
export interface DescribeJobLogItemsResponse {
  /**
   * <p>Request to describe Job log response items.</p>
   * @public
   */
  items?: JobLog[] | undefined;

  /**
   * <p>Request to describe Job log response next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Request to describe Job log filters.</p>
 * @public
 */
export interface DescribeJobsRequestFilters {
  /**
   * <p>Request to describe Job log filters by job ID.</p>
   * @public
   */
  jobIDs?: string[] | undefined;

  /**
   * <p>Request to describe Job log filters by date.</p>
   * @public
   */
  fromDate?: string | undefined;

  /**
   * <p>Request to describe job log items by last date.</p>
   * @public
   */
  toDate?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobsRequest {
  /**
   * <p>Request to describe Job log filters.</p>
   * @public
   */
  filters?: DescribeJobsRequestFilters | undefined;

  /**
   * <p>Request to describe job log items by max results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Request to describe job log items by next token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Request to describe job log items by Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>AWS Systems Manager Document external parameter.</p>
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
   * <p>AWS Systems Manager Document external parameters dynamic path.</p>
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
 * <p>AWS Systems Manager Parameter Store parameter.</p>
 * @public
 */
export interface SsmParameterStoreParameter {
  /**
   * <p>AWS Systems Manager Parameter Store parameter type.</p>
   * @public
   */
  parameterType: SsmParameterStoreParameterType | undefined;

  /**
   * <p>AWS Systems Manager Parameter Store parameter name.</p>
   * @public
   */
  parameterName: string | undefined;
}

/**
 * <p>AWS Systems Manager Document.</p>
 * @public
 */
export interface SsmDocument {
  /**
   * <p>User-friendly name for the AWS Systems Manager Document.</p>
   * @public
   */
  actionName: string | undefined;

  /**
   * <p>AWS Systems Manager Document name or full ARN.</p>
   * @public
   */
  ssmDocumentName: string | undefined;

  /**
   * <p>AWS Systems Manager Document timeout seconds.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>If true, Cutover will not be enabled if the document has failed.</p>
   * @public
   */
  mustSucceedForCutover?: boolean | undefined;

  /**
   * <p>AWS Systems Manager Document parameters.</p>
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]> | undefined;

  /**
   * <p>AWS Systems Manager Document external parameters.</p>
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter> | undefined;
}

/**
 * <p>Launch Status of the Job Post Launch Actions.</p>
 * @public
 */
export interface JobPostLaunchActionsLaunchStatus {
  /**
   * <p>AWS Systems Manager's Document of the Job Post Launch Actions.</p>
   * @public
   */
  ssmDocument?: SsmDocument | undefined;

  /**
   * <p>AWS Systems Manager Document type.</p>
   * @public
   */
  ssmDocumentType?: SsmDocumentType | undefined;

  /**
   * <p>AWS Systems Manager Document's execution ID of the Job Post Launch Actions.</p>
   * @public
   */
  executionID?: string | undefined;

  /**
   * <p>AWS Systems Manager Document's execution status.</p>
   * @public
   */
  executionStatus?: PostLaunchActionExecutionStatus | undefined;

  /**
   * <p>AWS Systems Manager Document's failure reason.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * <p>Status of the Post Launch Actions running on the Test or Cutover instance.</p>
 * @public
 */
export interface PostLaunchActionsStatus {
  /**
   * <p>Time where the AWS Systems Manager was detected as running on the Test or Cutover instance.</p>
   * @public
   */
  ssmAgentDiscoveryDatetime?: string | undefined;

  /**
   * <p>List of Post Launch Action status.</p>
   * @public
   */
  postLaunchActionsLaunchStatusList?: JobPostLaunchActionsLaunchStatus[] | undefined;
}

/**
 * <p>Server participating in Job.</p>
 * @public
 */
export interface ParticipatingServer {
  /**
   * <p>Participating server Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Participating server launch status.</p>
   * @public
   */
  launchStatus?: LaunchStatus | undefined;

  /**
   * <p>Participating server's launched ec2 instance ID.</p>
   * @public
   */
  launchedEc2InstanceID?: string | undefined;

  /**
   * <p>Participating server's Post Launch Actions Status.</p>
   * @public
   */
  postLaunchActionsStatus?: PostLaunchActionsStatus | undefined;
}

/**
 * <p>Job.</p>
 * @public
 */
export interface Job {
  /**
   * <p>Job ID.</p>
   * @public
   */
  jobID: string | undefined;

  /**
   * <p>the ARN of the specific Job.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Job type.</p>
   * @public
   */
  type?: JobType | undefined;

  /**
   * <p>Job initiated by field.</p>
   * @public
   */
  initiatedBy?: InitiatedBy | undefined;

  /**
   * <p>Job creation time.</p>
   * @public
   */
  creationDateTime?: string | undefined;

  /**
   * <p>Job end time.</p>
   * @public
   */
  endDateTime?: string | undefined;

  /**
   * <p>Job status.</p>
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * <p>Servers participating in a specific Job.</p>
   * @public
   */
  participatingServers?: ParticipatingServer[] | undefined;

  /**
   * <p>Tags associated with specific Job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeJobsResponse {
  /**
   * <p>Request to describe Job log items.</p>
   * @public
   */
  items?: Job[] | undefined;

  /**
   * <p>Request to describe Job response by next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Launch template disk configuration.</p>
 * @public
 */
export interface LaunchTemplateDiskConf {
  /**
   * <p>Launch template disk volume type configuration.</p>
   * @public
   */
  volumeType?: VolumeType | undefined;

  /**
   * <p>Launch template disk iops configuration.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>Launch template disk throughput configuration.</p>
   * @public
   */
  throughput?: number | undefined;

  /**
   * <p>Launch template disk volume initialization rate configuration.</p>
   * @public
   */
  volumeInitializationRate?: number | undefined;

  /**
   * <p>Launch template disk delete on termination configuration.</p>
   * @public
   */
  deleteOnTermination?: boolean | undefined;
}

/**
 * <p>Configure Licensing.</p>
 * @public
 */
export interface Licensing {
  /**
   * <p>Configure BYOL OS licensing.</p>
   * @public
   */
  osByol?: boolean | undefined;
}

/**
 * <p>Post Launch Actions to be executed on the Test or Cutover instance.</p>
 * @public
 */
export interface PostLaunchActions {
  /**
   * <p>Deployment type in which AWS Systems Manager Documents will be executed.</p>
   * @public
   */
  deployment?: PostLaunchActionsDeploymentType | undefined;

  /**
   * <p>AWS Systems Manager Command's logs S3 log bucket.</p>
   * @public
   */
  s3LogBucket?: string | undefined;

  /**
   * <p>AWS Systems Manager Command's logs S3 output key prefix.</p>
   * @public
   */
  s3OutputKeyPrefix?: string | undefined;

  /**
   * <p>AWS Systems Manager Command's CloudWatch log group name.</p>
   * @public
   */
  cloudWatchLogGroupName?: string | undefined;

  /**
   * <p>AWS Systems Manager Documents.</p>
   * @public
   */
  ssmDocuments?: SsmDocument[] | undefined;
}

/**
 * @public
 */
export interface CreateLaunchConfigurationTemplateRequest {
  /**
   * <p>Launch configuration template post launch actions.</p>
   * @public
   */
  postLaunchActions?: PostLaunchActions | undefined;

  /**
   * <p>Enable map auto tagging.</p>
   * @public
   */
  enableMapAutoTagging?: boolean | undefined;

  /**
   * <p>Launch configuration template map auto tagging MPE ID.</p>
   * @public
   */
  mapAutoTaggingMpeID?: string | undefined;

  /**
   * <p>Launch configuration template map auto tagging key.</p>
   * @public
   */
  mapAutoTaggingKey?: string | undefined;

  /**
   * <p>Request to associate tags during creation of a Launch Configuration Template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Launch disposition.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * <p>Target instance type right-sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * <p>Copy private Ip.</p>
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * <p>Associate public Ip address.</p>
   * @public
   */
  associatePublicIpAddress?: boolean | undefined;

  /**
   * <p>Copy tags.</p>
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * <p>Configure Licensing.</p>
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * <p>Launch configuration template boot mode.</p>
   * @public
   */
  bootMode?: BootMode | undefined;

  /**
   * <p>Small volume maximum size.</p>
   * @public
   */
  smallVolumeMaxSize?: number | undefined;

  /**
   * <p>Small volume config.</p>
   * @public
   */
  smallVolumeConf?: LaunchTemplateDiskConf | undefined;

  /**
   * <p>Large volume config.</p>
   * @public
   */
  largeVolumeConf?: LaunchTemplateDiskConf | undefined;

  /**
   * <p>Enable parameters encryption.</p>
   * @public
   */
  enableParametersEncryption?: boolean | undefined;

  /**
   * <p>Parameters encryption key.</p>
   * @public
   */
  parametersEncryptionKey?: string | undefined;
}

/**
 * @public
 */
export interface LaunchConfigurationTemplate {
  /**
   * <p>ID of the Launch Configuration Template.</p>
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>ARN of the Launch Configuration Template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Post Launch Actions of the Launch Configuration Template.</p>
   * @public
   */
  postLaunchActions?: PostLaunchActions | undefined;

  /**
   * <p>Enable map auto tagging.</p>
   * @public
   */
  enableMapAutoTagging?: boolean | undefined;

  /**
   * <p>Launch configuration template map auto tagging MPE ID.</p>
   * @public
   */
  mapAutoTaggingMpeID?: string | undefined;

  /**
   * <p>Launch configuration template map auto tagging key.</p>
   * @public
   */
  mapAutoTaggingKey?: string | undefined;

  /**
   * <p>Tags of the Launch Configuration Template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>EC2 launch template ID.</p>
   * @public
   */
  ec2LaunchTemplateID?: string | undefined;

  /**
   * <p>Launch disposition.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * <p>Target instance type right-sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * <p>Copy private Ip.</p>
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * <p>Associate public Ip address.</p>
   * @public
   */
  associatePublicIpAddress?: boolean | undefined;

  /**
   * <p>Copy tags.</p>
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * <p>Configure Licensing.</p>
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * <p>Launch configuration template boot mode.</p>
   * @public
   */
  bootMode?: BootMode | undefined;

  /**
   * <p>Small volume maximum size.</p>
   * @public
   */
  smallVolumeMaxSize?: number | undefined;

  /**
   * <p>Small volume config.</p>
   * @public
   */
  smallVolumeConf?: LaunchTemplateDiskConf | undefined;

  /**
   * <p>Large volume config.</p>
   * @public
   */
  largeVolumeConf?: LaunchTemplateDiskConf | undefined;

  /**
   * <p>Enable parameters encryption.</p>
   * @public
   */
  enableParametersEncryption?: boolean | undefined;

  /**
   * <p>Parameters encryption key.</p>
   * @public
   */
  parametersEncryptionKey?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchConfigurationTemplateRequest {
  /**
   * <p>ID of resource to be deleted.</p>
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
   * <p>Request to filter Launch Configuration Templates list by Launch Configuration Template ID.</p>
   * @public
   */
  launchConfigurationTemplateIDs?: string[] | undefined;

  /**
   * <p>Maximum results to be returned in DescribeLaunchConfigurationTemplates.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Next pagination token returned from DescribeLaunchConfigurationTemplates.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesResponse {
  /**
   * <p>List of items returned by DescribeLaunchConfigurationTemplates.</p>
   * @public
   */
  items?: LaunchConfigurationTemplate[] | undefined;

  /**
   * <p>Next pagination token returned from DescribeLaunchConfigurationTemplates.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Template post migration custom action filters.</p>
 * @public
 */
export interface TemplateActionsRequestFilters {
  /**
   * <p>Action IDs to filter template post migration custom actions by.</p>
   * @public
   */
  actionIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTemplateActionsRequest {
  /**
   * <p>Launch configuration template ID.</p>
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Filters to apply when listing template post migration custom actions.</p>
   * @public
   */
  filters?: TemplateActionsRequestFilters | undefined;

  /**
   * <p>Maximum amount of items to return when listing template post migration custom actions.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Next token to use when listing template post migration custom actions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TemplateActionDocument {
  /**
   * <p>Template post migration custom action ID.</p>
   * @public
   */
  actionID?: string | undefined;

  /**
   * <p>Template post migration custom action name.</p>
   * @public
   */
  actionName?: string | undefined;

  /**
   * <p>Template post migration custom action document identifier.</p>
   * @public
   */
  documentIdentifier?: string | undefined;

  /**
   * <p>Template post migration custom action order.</p>
   * @public
   */
  order?: number | undefined;

  /**
   * <p>Template post migration custom action document version.</p>
   * @public
   */
  documentVersion?: string | undefined;

  /**
   * <p>Template post migration custom action active status.</p>
   * @public
   */
  active?: boolean | undefined;

  /**
   * <p>Template post migration custom action timeout in seconds.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>Template post migration custom action must succeed for cutover.</p>
   * @public
   */
  mustSucceedForCutover?: boolean | undefined;

  /**
   * <p>Template post migration custom action parameters.</p>
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]> | undefined;

  /**
   * <p>Operating system eligible for this template post migration custom action.</p>
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * <p>Template post migration custom action external parameters.</p>
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter> | undefined;

  /**
   * <p>Template post migration custom action description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Template post migration custom action category.</p>
   * @public
   */
  category?: ActionCategory | undefined;
}

/**
 * @public
 */
export interface ListTemplateActionsResponse {
  /**
   * <p>List of template post migration custom actions.</p>
   * @public
   */
  items?: TemplateActionDocument[] | undefined;

  /**
   * <p>Next token returned when listing template post migration custom actions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutTemplateActionRequest {
  /**
   * <p>Launch configuration template ID.</p>
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Template post migration custom action name.</p>
   * @public
   */
  actionName: string | undefined;

  /**
   * <p>Template post migration custom action document identifier.</p>
   * @public
   */
  documentIdentifier: string | undefined;

  /**
   * <p>Template post migration custom action order.</p>
   * @public
   */
  order: number | undefined;

  /**
   * <p>Template post migration custom action ID.</p>
   * @public
   */
  actionID: string | undefined;

  /**
   * <p>Template post migration custom action document version.</p>
   * @public
   */
  documentVersion?: string | undefined;

  /**
   * <p>Template post migration custom action active status.</p>
   * @public
   */
  active?: boolean | undefined;

  /**
   * <p>Template post migration custom action timeout in seconds.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>Template post migration custom action must succeed for cutover.</p>
   * @public
   */
  mustSucceedForCutover?: boolean | undefined;

  /**
   * <p>Template post migration custom action parameters.</p>
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]> | undefined;

  /**
   * <p>Operating system eligible for this template post migration custom action.</p>
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * <p>Template post migration custom action external parameters.</p>
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter> | undefined;

  /**
   * <p>Template post migration custom action description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Template post migration custom action category.</p>
   * @public
   */
  category?: ActionCategory | undefined;
}

/**
 * @public
 */
export interface RemoveTemplateActionRequest {
  /**
   * <p>Launch configuration template ID of the post migration custom action to remove.</p>
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Template post migration custom action ID to remove.</p>
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
   * <p>Launch Configuration Template ID.</p>
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Post Launch Action to execute on the Test or Cutover instance.</p>
   * @public
   */
  postLaunchActions?: PostLaunchActions | undefined;

  /**
   * <p>Enable map auto tagging.</p>
   * @public
   */
  enableMapAutoTagging?: boolean | undefined;

  /**
   * <p>Launch configuration template map auto tagging MPE ID.</p>
   * @public
   */
  mapAutoTaggingMpeID?: string | undefined;

  /**
   * <p>Launch configuration template map auto tagging key.</p>
   * @public
   */
  mapAutoTaggingKey?: string | undefined;

  /**
   * <p>Launch disposition.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * <p>Target instance type right-sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * <p>Copy private Ip.</p>
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * <p>Associate public Ip address.</p>
   * @public
   */
  associatePublicIpAddress?: boolean | undefined;

  /**
   * <p>Copy tags.</p>
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * <p>Configure Licensing.</p>
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * <p>Launch configuration template boot mode.</p>
   * @public
   */
  bootMode?: BootMode | undefined;

  /**
   * <p>Small volume maximum size.</p>
   * @public
   */
  smallVolumeMaxSize?: number | undefined;

  /**
   * <p>Small volume config.</p>
   * @public
   */
  smallVolumeConf?: LaunchTemplateDiskConf | undefined;

  /**
   * <p>Large volume config.</p>
   * @public
   */
  largeVolumeConf?: LaunchTemplateDiskConf | undefined;

  /**
   * <p>Enable parameters encryption.</p>
   * @public
   */
  enableParametersEncryption?: boolean | undefined;

  /**
   * <p>Parameters encryption key.</p>
   * @public
   */
  parametersEncryptionKey?: string | undefined;
}

/**
 * <p>Filters for listing import file enrichment jobs.</p>
 * @public
 */
export interface ListImportFileEnrichmentsFilters {
  /**
   * <p>A list of job IDs to filter by.</p>
   * @public
   */
  jobIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListImportFileEnrichmentsRequest {
  /**
   * <p>Filters to apply when listing import file enrichment jobs.</p>
   * @public
   */
  filters?: ListImportFileEnrichmentsFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A checksum structure used to verify data integrity.</p>
 * @public
 */
export interface Checksum {
  /**
   * <p>The encryption algorithm used to generate the checksum.</p>
   * @public
   */
  encryptionAlgorithm?: EncryptionAlgorithm | undefined;

  /**
   * <p>The hash value of the checksum.</p>
   * @public
   */
  hash?: string | undefined;
}

/**
 * <p>S3 configuration for storing the enriched import file.</p>
 * @public
 */
export interface EnrichmentTargetS3Configuration {
  /**
   * <p>The name of the S3 bucket where the enriched import file will be stored.</p>
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * <p>The AWS account ID of the target S3 bucket owner.</p>
   * @public
   */
  s3BucketOwner: string | undefined;

  /**
   * <p>The S3 key (path) where the enriched import file will be stored.</p>
   * @public
   */
  s3Key: string | undefined;
}

/**
 * <p>Details about an import file enrichment job.</p>
 * @public
 */
export interface ImportFileEnrichment {
  /**
   * <p>The unique identifier of the import file enrichment job.</p>
   * @public
   */
  jobID?: string | undefined;

  /**
   * <p>The timestamp when the enrichment job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the enrichment job completed or failed.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The current status of the import file enrichment job.</p>
   * @public
   */
  status?: ImportFileEnrichmentStatus | undefined;

  /**
   * <p>Detailed status information about the enrichment job.</p>
   * @public
   */
  statusDetails?: string | undefined;

  /**
   * <p>The checksum of the enriched file for integrity verification.</p>
   * @public
   */
  checksum?: Checksum | undefined;

  /**
   * <p>The target S3 configuration for the enriched import file.</p>
   * @public
   */
  s3BucketTarget?: EnrichmentTargetS3Configuration | undefined;
}

/**
 * @public
 */
export interface ListImportFileEnrichmentsResponse {
  /**
   * <p>A list of import file enrichment jobs.</p>
   * @public
   */
  items?: ImportFileEnrichment[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>List managed accounts request.</p>
 * @public
 */
export interface ListManagedAccountsRequest {
  /**
   * <p>List managed accounts request max results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>List managed accounts request next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Managed account.</p>
 * @public
 */
export interface ManagedAccount {
  /**
   * <p>Managed account, account ID.</p>
   * @public
   */
  accountId?: string | undefined;
}

/**
 * <p>List managed accounts response.</p>
 * @public
 */
export interface ListManagedAccountsResponse {
  /**
   * <p>List managed accounts response items.</p>
   * @public
   */
  items: ManagedAccount[] | undefined;

  /**
   * <p>List managed accounts response next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>List tags for resource request by ARN.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>List tags for resource response.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Maps a source CIDR range to the corresponding target CIDR range to use in the target network.</p>
 * @public
 */
export interface CidrMapping {
  /**
   * <p>The original CIDR range in the source network.</p>
   * @public
   */
  originalCidr: string | undefined;

  /**
   * <p>The updated CIDR range to use in the target network.</p>
   * @public
   */
  updatedCidr: string | undefined;
}

/**
 * <p>S3 configuration for source network data.</p>
 * @public
 */
export interface SourceS3Configuration {
  /**
   * <p>The name of the S3 bucket containing source data.</p>
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * <p>The AWS account ID of the S3 bucket owner.</p>
   * @public
   */
  s3BucketOwner: string | undefined;

  /**
   * <p>The S3 key (path) for the source data.</p>
   * @public
   */
  s3Key: string | undefined;
}

/**
 * <p>Configuration for a migration source environment.</p>
 * @public
 */
export interface SourceConfiguration {
  /**
   * <p>The source environment type.</p>
   * @public
   */
  sourceEnvironment: SourceEnvironment | undefined;

  /**
   * <p>The S3 configuration for the source data.</p>
   * @public
   */
  sourceS3Configuration: SourceS3Configuration | undefined;
}

/**
 * <p>Configuration for the target network topology and addressing.</p>
 * @public
 */
export interface TargetNetwork {
  /**
   * <p>The network topology type for the target environment.</p>
   * @public
   */
  topology: TargetNetworkTopology | undefined;

  /**
   * <p>The CIDR block for inbound traffic in the target network.</p>
   * @public
   */
  inboundCidr?: string | undefined;

  /**
   * <p>The CIDR block for outbound traffic in the target network.</p>
   * @public
   */
  outboundCidr?: string | undefined;

  /**
   * <p>The CIDR block for inspection traffic in the target network.</p>
   * @public
   */
  inspectionCidr?: string | undefined;
}

/**
 * <p>S3 configuration for storing target network artifacts.</p>
 * @public
 */
export interface TargetS3Configuration {
  /**
   * <p>The name of the S3 bucket for target artifacts.</p>
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * <p>The AWS account ID of the S3 bucket owner.</p>
   * @public
   */
  s3BucketOwner: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkMigrationDefinitionRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the network migration definition.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the network migration definition.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of source configurations for the network migration.</p>
   * @public
   */
  sourceConfigurations?: SourceConfiguration[] | undefined;

  /**
   * <p>Specifies the type of the definition. <code>MIGRATION</code> migrates an existing network. <code>NEW_NETWORK</code> designs a new network. If you omit this value, the definition type is <code>MIGRATION</code>.</p>
   * @public
   */
  definitionType?: DefinitionType | undefined;

  /**
   * <p>The S3 configuration for storing the target network artifacts.</p>
   * @public
   */
  targetS3Configuration: TargetS3Configuration | undefined;

  /**
   * <p>The target network configuration including topology and CIDR ranges.</p>
   * @public
   */
  targetNetwork: TargetNetwork | undefined;

  /**
   * <p>The target deployment configuration for the migrated network.</p>
   * @public
   */
  targetDeployment?: TargetDeployment | undefined;

  /**
   * <p>Specifies whether to create new target VPCs or use existing ones. Set to <code>CREATE_NEW</code> to provision new target VPCs as part of the migration, or <code>USE_EXISTING</code> to migrate into existing VPCs in the target account.</p>
   * @public
   */
  vpcProvisioningStrategy?: VpcProvisioningStrategy | undefined;

  /**
   * <p>A list of CIDR mappings that map original source CIDR ranges to updated target CIDR ranges. CIDR mappings can be provided only when <code>vpcProvisioningStrategy</code> is set to <code>USE_EXISTING</code>.</p>
   * @public
   */
  cidrMappings?: CidrMapping[] | undefined;

  /**
   * <p>Tags to assign to the network migration definition.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Scope tags for the network migration definition to control access and organization.</p>
   * @public
   */
  scopeTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface NetworkMigrationDefinition {
  /**
   * <p>The Amazon Resource Name (ARN) of the network migration definition.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * <p>The name of the network migration definition.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the network migration definition.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of source configurations for the network migration.</p>
   * @public
   */
  sourceConfigurations?: SourceConfiguration[] | undefined;

  /**
   * <p>Specifies the type of the definition. <code>MIGRATION</code> migrates an existing network. <code>NEW_NETWORK</code> designs a new network.</p>
   * @public
   */
  definitionType?: DefinitionType | undefined;

  /**
   * <p>The S3 configuration for storing the target network artifacts.</p>
   * @public
   */
  targetS3Configuration?: TargetS3Configuration | undefined;

  /**
   * <p>The target network configuration including topology and CIDR ranges.</p>
   * @public
   */
  targetNetwork?: TargetNetwork | undefined;

  /**
   * <p>The target deployment configuration for the migrated network.</p>
   * @public
   */
  targetDeployment?: TargetDeployment | undefined;

  /**
   * <p>Indicates whether the migration creates new target VPCs or uses existing ones. <code>CREATE_NEW</code> provisions new target VPCs; <code>USE_EXISTING</code> migrates into existing VPCs in the target account.</p>
   * @public
   */
  vpcProvisioningStrategy?: VpcProvisioningStrategy | undefined;

  /**
   * <p>A list of CIDR mappings that map original source CIDR ranges to updated target CIDR ranges. CIDR mappings apply only when <code>vpcProvisioningStrategy</code> is set to <code>USE_EXISTING</code>.</p>
   * @public
   */
  cidrMappings?: CidrMapping[] | undefined;

  /**
   * <p>The timestamp when the network migration definition was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the network migration definition was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>Tags assigned to the network migration definition.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Scope tags for the network migration definition.</p>
   * @public
   */
  scopeTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkMigrationDefinitionRequest {
  /**
   * <p>The unique identifier of the network migration definition to delete.</p>
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
   * <p>The unique identifier of the network migration definition to retrieve.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkMigrationMapperSegmentConstructRequest {
  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the mapper segment.</p>
   * @public
   */
  segmentID: string | undefined;

  /**
   * <p>The unique identifier of the construct within the segment.</p>
   * @public
   */
  constructID: string | undefined;
}

/**
 * <p>The associations that bind a security group to source machines before they are provisioned.</p>
 * @public
 */
export interface SecurityGroupAssociations {
  /**
   * <p>The CIDR ranges associated with the security group. A provided list replaces the stored list; an empty list clears it, and omitting the field leaves it unchanged.</p>
   * @public
   */
  cidrs?: string[] | undefined;

  /**
   * <p>The UUIDs of the source machines associated with the security group.</p>
   * @public
   */
  vmUUIDs?: string[] | undefined;

  /**
   * <p>The user-provided identifiers of the source machines associated with the security group.</p>
   * @public
   */
  userProvidedIDs?: string[] | undefined;
}

/**
 * <p>Behavioral configuration for a security group construct.</p>
 * @public
 */
export interface SecurityGroupConfiguration {
  /**
   * <p>The CIDR ranges and machine identifiers that associate source machines with the security group. Each list provided replaces the stored list rather than merging into it.</p>
   * @public
   */
  associations?: SecurityGroupAssociations | undefined;
}

/**
 * <p>Behavioral configuration for a security group rule construct.</p>
 * @public
 */
export interface SecurityGroupRuleConfiguration {
  /**
   * <p>Whether automatic conversion of CIDR-based sources and destinations to security group references applies to this rule.</p>
   * @public
   */
  enableReferencing?: boolean | undefined;
}

/**
 * <p>Construct-type-specific behavioral configuration. The variant provided must match the construct type.</p>
 * @public
 */
export type OperationConfigurationUnion =
  | OperationConfigurationUnion.SecurityGroupMember
  | OperationConfigurationUnion.SecurityGroupRuleMember
  | OperationConfigurationUnion.$UnknownMember;

/**
 * @public
 */
export namespace OperationConfigurationUnion {
  /**
   * <p>Behavioral configuration for a security group construct.</p>
   * @public
   */
  export interface SecurityGroupMember {
    securityGroup: SecurityGroupConfiguration;
    securityGroupRule?: never;
    $unknown?: never;
  }

  /**
   * <p>Behavioral configuration for a security group rule construct.</p>
   * @public
   */
  export interface SecurityGroupRuleMember {
    securityGroup?: never;
    securityGroupRule: SecurityGroupRuleConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    securityGroup?: never;
    securityGroupRule?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    securityGroup: (value: SecurityGroupConfiguration) => T;
    securityGroupRule: (value: SecurityGroupRuleConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Represents a construct within a mapper segment. A construct is an individual infrastructure component such as a VPC, subnet, security group, route table, or other network resource that is part of the network migration.</p>
 * @public
 */
export interface NetworkMigrationMapperSegmentConstruct {
  /**
   * <p>The unique identifier of the construct.</p>
   * @public
   */
  constructID?: string | undefined;

  /**
   * <p>The type of the construct, such as VPC, subnet, security group, or route table.</p>
   * @public
   */
  constructType?: string | undefined;

  /**
   * <p>The name of the construct.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the construct.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The logical identifier for the construct in the infrastructure code.</p>
   * @public
   */
  logicalID?: string | undefined;

  /**
   * <p>Whether this construct is excluded from the migration.</p>
   * @public
   */
  excluded?: boolean | undefined;

  /**
   * <p>The timestamp when the construct was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the construct was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The properties and configuration of the construct.</p>
   * @public
   */
  properties?: Record<string, string> | undefined;

  /**
   * <p>The construct properties using their native value types. Returned by Get, and by List when includeEnrichedProperties is true.</p>
   * @public
   */
  enrichedProperties?: Record<string, __DocumentType> | undefined;

  /**
   * <p>The construct-type-specific behavioral configuration. Returned by Get, and by List when includeConfiguration is true.</p>
   * @public
   */
  configuration?: OperationConfigurationUnion | undefined;
}

/**
 * @public
 */
export interface GetNetworkMigrationMapperSegmentConstructResponse {
  /**
   * <p>The construct metadata including type, name, and configuration.</p>
   * @public
   */
  construct?: NetworkMigrationMapperSegmentConstruct | undefined;
}

/**
 * <p>Filters for listing network migration analysis jobs.</p>
 * @public
 */
export interface ListNetworkMigrationAnalysesFilters {
  /**
   * <p>A list of job IDs to filter by.</p>
   * @public
   */
  jobIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationAnalysesRequest {
  /**
   * <p>The unique identifier of the network migration execution to list analyses for.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>Filters to apply when listing analysis jobs.</p>
   * @public
   */
  filters?: ListNetworkMigrationAnalysesFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Details about a network migration analysis job.</p>
 * @public
 */
export interface NetworkMigrationAnalysisJobDetails {
  /**
   * <p>The unique identifier of the analysis job.</p>
   * @public
   */
  jobID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * <p>The timestamp when the job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the job completed or failed.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The current status of the analysis job.</p>
   * @public
   */
  status?: NetworkMigrationJobStatus | undefined;

  /**
   * <p>Detailed status information about the job.</p>
   * @public
   */
  statusDetails?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationAnalysesResponse {
  /**
   * <p>A list of network migration analysis job details.</p>
   * @public
   */
  items?: NetworkMigrationAnalysisJobDetails[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for listing network migration analysis results.</p>
 * @public
 */
export interface ListNetworkMigrationAnalysisResultsFilters {
  /**
   * <p>A list of VPC IDs to filter results by.</p>
   * @public
   */
  vpcIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationAnalysisResultsRequest {
  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>Filters to apply when listing analysis results, such as VPC IDs.</p>
   * @public
   */
  filters?: ListNetworkMigrationAnalysisResultsFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The source resource information for an analysis result.</p>
 * @public
 */
export interface NetworkMigrationAnalysisResultSource {
  /**
   * <p>The VPC ID of the source resource.</p>
   * @public
   */
  vpcID?: string | undefined;

  /**
   * <p>The subnet ID of the source resource.</p>
   * @public
   */
  subnetID?: string | undefined;
}

/**
 * <p>The target resource information for an analysis result.</p>
 * @public
 */
export interface NetworkMigrationAnalysisResultTarget {
  /**
   * <p>The VPC ID of the target resource.</p>
   * @public
   */
  vpcID?: string | undefined;

  /**
   * <p>The subnet ID of the target resource.</p>
   * @public
   */
  subnetID?: string | undefined;
}

/**
 * <p>The result of a network migration analysis operation.</p>
 * @public
 */
export interface NetworkMigrationAnalysisResult {
  /**
   * <p>The unique identifier of the analysis job that generated this result.</p>
   * @public
   */
  jobID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * <p>The type of analyzer that generated this result.</p>
   * @public
   */
  analyzerType?: AnalyzerType | undefined;

  /**
   * <p>The source resource that was analyzed.</p>
   * @public
   */
  source?: NetworkMigrationAnalysisResultSource | undefined;

  /**
   * <p>The target resource in the analysis.</p>
   * @public
   */
  target?: NetworkMigrationAnalysisResultTarget | undefined;

  /**
   * <p>The status of the analysis result.</p>
   * @public
   */
  status?: NetworkMigrationAnalysisResultStatus | undefined;

  /**
   * <p>The detailed analysis findings and recommendations.</p>
   * @public
   */
  analysisResult?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationAnalysisResultsResponse {
  /**
   * <p>A list of network migration analysis results.</p>
   * @public
   */
  items?: NetworkMigrationAnalysisResult[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for listing code generation jobs.</p>
 * @public
 */
export interface ListNetworkMigrationCodeGenerationsFilters {
  /**
   * <p>A list of job IDs to filter by.</p>
   * @public
   */
  jobIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationCodeGenerationsRequest {
  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>Filters to apply when listing code generation jobs.</p>
   * @public
   */
  filters?: ListNetworkMigrationCodeGenerationsFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Status details for a specific code generation output format.</p>
 * @public
 */
export interface CodeGenerationOutputFormatStatusDetails {
  /**
   * <p>The status of the code generation for this output format.</p>
   * @public
   */
  status?: CodeGenerationOutputFormatStatus | undefined;

  /**
   * <p>A list of detailed status information for the code generation.</p>
   * @public
   */
  statusDetailList?: string | undefined;
}

/**
 * <p>Details about a network migration code generation job.</p>
 * @public
 */
export interface NetworkMigrationCodeGenerationJobDetails {
  /**
   * <p>The unique identifier of the code generation job.</p>
   * @public
   */
  jobID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * <p>The timestamp when the job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the job completed or failed.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The current status of the code generation job.</p>
   * @public
   */
  status?: NetworkMigrationJobStatus | undefined;

  /**
   * <p>Detailed status information about the job.</p>
   * @public
   */
  statusDetails?: string | undefined;

  /**
   * <p>A map of output format types to their status details.</p>
   * @public
   */
  codeGenerationOutputFormatStatusDetailsMap?: Partial<Record<CodeGenerationOutputFormatType, CodeGenerationOutputFormatStatusDetails>> | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationCodeGenerationsResponse {
  /**
   * <p>A list of network migration code generation job details.</p>
   * @public
   */
  items?: NetworkMigrationCodeGenerationJobDetails[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for listing code generation segments.</p>
 * @public
 */
export interface ListNetworkMigrationCodeGenerationSegmentsFilters {
  /**
   * <p>A list of segment IDs to filter by.</p>
   * @public
   */
  segmentIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationCodeGenerationSegmentsRequest {
  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>Filters to apply when listing code generation segments.</p>
   * @public
   */
  filters?: ListNetworkMigrationCodeGenerationSegmentsFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Configuration for an S3 location.</p>
 * @public
 */
export interface S3Configuration {
  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * <p>The AWS account ID of the S3 bucket owner.</p>
   * @public
   */
  s3BucketOwner?: string | undefined;

  /**
   * <p>The S3 key (path) for the object.</p>
   * @public
   */
  s3Key?: string | undefined;
}

/**
 * <p>An artifact generated during code generation, such as a CloudFormation template or Terraform file.</p>
 * @public
 */
export interface NetworkMigrationCodeGenerationArtifact {
  /**
   * <p>The unique identifier of the artifact.</p>
   * @public
   */
  artifactID?: string | undefined;

  /**
   * <p>The type of the generated artifact.</p>
   * @public
   */
  artifactType?: NetworkMigrationCodeGenerationArtifactType | undefined;

  /**
   * <p>The sub-type of the artifact for further classification.</p>
   * @public
   */
  artifactSubType?: NetworkMigrationCodeGenerationArtifactSubType | undefined;

  /**
   * <p>The logical identifier for the artifact.</p>
   * @public
   */
  logicalID?: string | undefined;

  /**
   * <p>The S3 location where the artifact is stored.</p>
   * @public
   */
  outputS3Configuration?: S3Configuration | undefined;

  /**
   * <p>The checksum of the artifact for integrity verification.</p>
   * @public
   */
  checksum?: Checksum | undefined;

  /**
   * <p>The timestamp when the artifact was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * <p>A segment of generated code representing a logical grouping of infrastructure resources.</p>
 * @public
 */
export interface NetworkMigrationCodeGenerationSegment {
  /**
   * <p>The unique identifier of the code generation job.</p>
   * @public
   */
  jobID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * <p>The unique identifier of the segment.</p>
   * @public
   */
  segmentID?: string | undefined;

  /**
   * <p>The type of the segment.</p>
   * @public
   */
  segmentType?: NetworkMigrationCodeGenerationSegmentType | undefined;

  /**
   * <p>The logical identifier for the segment.</p>
   * @public
   */
  logicalID?: string | undefined;

  /**
   * <p>The ID of the mapper segment that this code generation segment was created from.</p>
   * @public
   */
  mapperSegmentID?: string | undefined;

  /**
   * <p>A list of artifacts generated for this segment.</p>
   * @public
   */
  artifacts?: NetworkMigrationCodeGenerationArtifact[] | undefined;

  /**
   * <p>A list of other segments that this segment depends on or references.</p>
   * @public
   */
  referencedSegments?: string[] | undefined;

  /**
   * <p>The timestamp when the segment was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationCodeGenerationSegmentsResponse {
  /**
   * <p>A list of network migration code generation segments.</p>
   * @public
   */
  items?: NetworkMigrationCodeGenerationSegment[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for listing network migration definitions.</p>
 * @public
 */
export interface ListNetworkMigrationDefinitionsRequestFilters {
  /**
   * <p>A list of definition IDs to filter by.</p>
   * @public
   */
  networkMigrationDefinitionIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationDefinitionsRequest {
  /**
   * <p>Filters to apply when listing network migration definitions.</p>
   * @public
   */
  filters?: ListNetworkMigrationDefinitionsRequestFilters | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of a network migration definition.</p>
 * @public
 */
export interface NetworkMigrationDefinitionSummary {
  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * <p>The name of the network migration definition.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The source environment configuration.</p>
   * @public
   */
  sourceEnvironment?: SourceEnvironment | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network migration definition.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Tags assigned to the network migration definition.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Scope tags for the network migration definition.</p>
   * @public
   */
  scopeTags?: Record<string, string> | undefined;

  /**
   * <p>The type of the network migration definition.</p>
   * @public
   */
  definitionType?: DefinitionType | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationDefinitionsResponse {
  /**
   * <p>A list of network migration definition summaries.</p>
   * @public
   */
  items?: NetworkMigrationDefinitionSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationDeployedStacksRequest {
  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Details about a resource that failed to deploy.</p>
 * @public
 */
export interface NetworkMigrationFailedResourceDetails {
  /**
   * <p>The logical ID of the failed resource.</p>
   * @public
   */
  logicalID?: string | undefined;

  /**
   * <p>The status of the failed resource.</p>
   * @public
   */
  status?: NetworkMigrationFailedResourceStatus | undefined;

  /**
   * <p>The reason why the resource failed.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * <p>Details about a CloudFormation stack that has been deployed as part of the network migration.</p>
 * @public
 */
export interface NetworkMigrationDeployedStackDetails {
  /**
   * <p>The current status of the deployed stack.</p>
   * @public
   */
  status?: NetworkMigrationDeployedStackStatus | undefined;

  /**
   * <p>The physical ID of the CloudFormation stack.</p>
   * @public
   */
  stackPhysicalID?: string | undefined;

  /**
   * <p>The logical ID of the stack.</p>
   * @public
   */
  stackLogicalID?: string | undefined;

  /**
   * <p>The ID of the segment that this stack was deployed for.</p>
   * @public
   */
  segmentID?: string | undefined;

  /**
   * <p>The target AWS account where the stack was deployed.</p>
   * @public
   */
  targetAccount?: string | undefined;

  /**
   * <p>A list of resources that failed to deploy.</p>
   * @public
   */
  failedResources?: NetworkMigrationFailedResourceDetails[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationDeployedStacksResponse {
  /**
   * <p>A list of deployed stack details including status and resources.</p>
   * @public
   */
  items?: NetworkMigrationDeployedStackDetails[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Details about a network migration deployer job.</p>
 * @public
 */
export interface NetworkMigrationDeployerJobDetails {
  /**
   * <p>The unique identifier of the deployer job.</p>
   * @public
   */
  jobID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * <p>The timestamp when the job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the job completed or failed.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The current status of the deployer job.</p>
   * @public
   */
  status?: NetworkMigrationJobStatus | undefined;

  /**
   * <p>Detailed status information about the job.</p>
   * @public
   */
  statusDetails?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationDeployerJobResponse {
  /**
   * <p>A list of deployer job details.</p>
   * @public
   */
  items?: NetworkMigrationDeployerJobDetails[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for listing deployer jobs.</p>
 * @public
 */
export interface ListNetworkMigrationDeployerJobFilters {
  /**
   * <p>A list of job IDs to filter by.</p>
   * @public
   */
  jobIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationDeploymentsRequest {
  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>Filters to apply when listing deployment jobs.</p>
   * @public
   */
  filters?: ListNetworkMigrationDeployerJobFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for listing network migration executions.</p>
 * @public
 */
export interface ListNetworkMigrationExecutionRequestFilters {
  /**
   * <p>A list of execution IDs to filter by.</p>
   * @public
   */
  networkMigrationExecutionIDs?: string[] | undefined;

  /**
   * <p>A list of execution statuses to filter by.</p>
   * @public
   */
  networkMigrationExecutionStatuses?: ExecutionStatus[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationExecutionsRequest {
  /**
   * <p>The unique identifier of the network migration definition to list executions for.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>Filters to apply when listing executions, such as status or execution ID.</p>
   * @public
   */
  filters?: ListNetworkMigrationExecutionRequestFilters | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Details about a network migration execution instance.</p>
 * @public
 */
export interface NetworkMigrationExecution {
  /**
   * <p>The unique identifier of the network migration definition used by this execution.</p>
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * <p>The unique identifier of the execution.</p>
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * <p>The current status of the execution.</p>
   * @public
   */
  status?: ExecutionStatus | undefined;

  /**
   * <p>The current stage of the execution in the migration workflow.</p>
   * @public
   */
  stage?: ExecutionStage | undefined;

  /**
   * <p>The current activity being performed in the execution.</p>
   * @public
   */
  activity?: ExecutionStageActivity | undefined;

  /**
   * <p>The timestamp when the execution was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the execution was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>Tags assigned to the execution.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationExecutionsResponse {
  /**
   * <p>A list of network migration execution details.</p>
   * @public
   */
  items?: NetworkMigrationExecution[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for listing network migration insights.</p>
 * @public
 */
export interface ListNetworkMigrationInsightsFilters {
  /**
   * <p>The insight types to include in the results.</p>
   * @public
   */
  insightTypes?: InsightType[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationInsightsRequest {
  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration execution to narrow the results to.</p>
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * <p>The identifier of the job or API request to narrow the results to.</p>
   * @public
   */
  producerID?: string | undefined;

  /**
   * <p>The unique identifier of the segment to narrow the results to.</p>
   * @public
   */
  segmentID?: string | undefined;

  /**
   * <p>The unique identifier of the construct to narrow the results to.</p>
   * @public
   */
  constructID?: string | undefined;

  /**
   * <p>Filters to apply when listing insights.</p>
   * @public
   */
  filters?: ListNetworkMigrationInsightsFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The content of a network migration insight.</p>
 * @public
 */
export interface InsightMessage {
  /**
   * <p>A stable identifier for the kind of insight.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The human-readable insight message.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The topic that the insight relates to.</p>
   * @public
   */
  topic?: string | undefined;
}

/**
 * <p>An insight produced during a network migration, such as a warning, decision, question, or other context beyond the migrated output.</p>
 * @public
 */
export interface NetworkMigrationInsight {
  /**
   * <p>The unique identifier of the network migration definition the insight belongs to.</p>
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration execution the insight belongs to.</p>
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * <p>The identifier of the job or API request that produced the insight.</p>
   * @public
   */
  producerID?: string | undefined;

  /**
   * <p>Whether the insight was produced by a job or by an API request.</p>
   * @public
   */
  producerType?: InsightProducerType | undefined;

  /**
   * <p>The job type or API name that produced the insight.</p>
   * @public
   */
  producerName?: InsightProducerName | undefined;

  /**
   * <p>The unique identifier of the segment the insight relates to; absent for run-level insights.</p>
   * @public
   */
  segmentID?: string | undefined;

  /**
   * <p>The unique identifier of the construct the insight relates to; absent for run-level and segment-level insights.</p>
   * @public
   */
  constructID?: string | undefined;

  /**
   * <p>The unique identifier of the insight.</p>
   * @public
   */
  insightID?: string | undefined;

  /**
   * <p>The level that the insight applies to: the run, a segment, or a construct.</p>
   * @public
   */
  insightLevel?: InsightLevel | undefined;

  /**
   * <p>The type of the insight.</p>
   * @public
   */
  insightType?: InsightType | undefined;

  /**
   * <p>The content of the insight.</p>
   * @public
   */
  insightMessage?: InsightMessage | undefined;

  /**
   * <p>The timestamp when the insight was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationInsightsResponse {
  /**
   * <p>A list of network migration insights.</p>
   * @public
   */
  items?: NetworkMigrationInsight[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for listing mapper segment constructs.</p>
 * @public
 */
export interface ListNetworkMigrationMapperSegmentConstructsFilters {
  /**
   * <p>A list of construct IDs to filter by.</p>
   * @public
   */
  constructIDs?: string[] | undefined;

  /**
   * <p>A list of construct types to filter by.</p>
   * @public
   */
  constructTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMapperSegmentConstructsRequest {
  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>The unique identifier of the segment to list constructs for.</p>
   * @public
   */
  segmentID: string | undefined;

  /**
   * <p>Filters to apply when listing constructs, such as construct type or ID.</p>
   * @public
   */
  filters?: ListNetworkMigrationMapperSegmentConstructsFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Whether to return construct properties using their native value types.</p>
   * @public
   */
  includeEnrichedProperties?: boolean | undefined;

  /**
   * <p>Whether to return construct-type-specific behavioral configuration.</p>
   * @public
   */
  includeConfiguration?: boolean | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMapperSegmentConstructsResponse {
  /**
   * <p>A list of mapper segment constructs.</p>
   * @public
   */
  items?: NetworkMigrationMapperSegmentConstruct[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for listing mapper segments.</p>
 * @public
 */
export interface ListNetworkMigrationMapperSegmentsFilters {
  /**
   * <p>A list of segment IDs to filter by.</p>
   * @public
   */
  segmentIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMapperSegmentsRequest {
  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>Filters to apply when listing segments.</p>
   * @public
   */
  filters?: ListNetworkMigrationMapperSegmentsFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface NetworkMigrationMapperSegment {
  /**
   * <p>The unique identifier of the job that created this segment.</p>
   * @public
   */
  jobID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * <p>The unique identifier of the segment.</p>
   * @public
   */
  segmentID?: string | undefined;

  /**
   * <p>The category of the network migration segment. A segment groups the network constructs (such as VPCs, subnets, and security groups) that are migrated together. Valid values: <code>WORKLOAD</code>, <code>APPLIANCE</code>.</p>
   * @public
   */
  segmentType?: NetworkMigrationMapperSegmentType | undefined;

  /**
   * <p>The name of the segment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the segment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The logical identifier for the segment in the infrastructure code.</p>
   * @public
   */
  logicalID?: string | undefined;

  /**
   * <p>The checksum of the segment data for integrity verification.</p>
   * @public
   */
  checksum?: Checksum | undefined;

  /**
   * <p>The S3 location where segment artifacts are stored.</p>
   * @public
   */
  outputS3Configuration?: S3Configuration | undefined;

  /**
   * <p>The timestamp when the segment was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the segment was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>Scope tags for the segment.</p>
   * @public
   */
  scopeTags?: Record<string, string> | undefined;

  /**
   * <p>The target AWS account where this segment will be deployed.</p>
   * @public
   */
  targetAccount?: string | undefined;

  /**
   * <p>A list of other segments that this segment depends on or references.</p>
   * @public
   */
  referencedSegments?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMapperSegmentsResponse {
  /**
   * <p>A list of mapper segments.</p>
   * @public
   */
  items?: NetworkMigrationMapperSegment[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for listing network migration mapping jobs.</p>
 * @public
 */
export interface ListNetworkMigrationMappingsFilters {
  /**
   * <p>A list of job IDs to filter by.</p>
   * @public
   */
  jobIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMappingsRequest {
  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>Filters to apply when listing mapping jobs.</p>
   * @public
   */
  filters?: ListNetworkMigrationMappingsFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Details about a network migration mapping job.</p>
 * @public
 */
export interface NetworkMigrationMappingJobDetails {
  /**
   * <p>The unique identifier of the mapping job.</p>
   * @public
   */
  jobID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * <p>The timestamp when the job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the job completed or failed.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The current status of the mapping job.</p>
   * @public
   */
  status?: NetworkMigrationJobStatus | undefined;

  /**
   * <p>Detailed status information about the job.</p>
   * @public
   */
  statusDetails?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMappingsResponse {
  /**
   * <p>A list of network migration mapping job details.</p>
   * @public
   */
  items?: NetworkMigrationMappingJobDetails[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for listing mapping update jobs.</p>
 * @public
 */
export interface ListNetworkMigrationMappingUpdatesFilters {
  /**
   * <p>A list of job IDs to filter by.</p>
   * @public
   */
  jobIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMappingUpdatesRequest {
  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>Filters to apply when listing mapping update jobs.</p>
   * @public
   */
  filters?: ListNetworkMigrationMappingUpdatesFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Details about a network migration mapping update job.</p>
 * @public
 */
export interface NetworkMigrationMappingUpdateJobDetails {
  /**
   * <p>The unique identifier of the mapping update job.</p>
   * @public
   */
  jobID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID?: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID?: string | undefined;

  /**
   * <p>The timestamp when the job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the job completed or failed.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The current status of the mapping update job.</p>
   * @public
   */
  status?: NetworkMigrationJobStatus | undefined;

  /**
   * <p>Detailed status information about the job.</p>
   * @public
   */
  statusDetails?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkMigrationMappingUpdatesResponse {
  /**
   * <p>A list of mapping update job details.</p>
   * @public
   */
  items?: NetworkMigrationMappingUpdateJobDetails[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationAnalysisRequest {
  /**
   * <p>The unique identifier of the network migration execution to analyze.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationAnalysisResponse {
  /**
   * <p>The unique identifier of the analysis job that was started.</p>
   * @public
   */
  jobID?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationCodeGenerationRequest {
  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>The output format types for code generation, such as CloudFormation or Terraform.</p>
   * @public
   */
  codeGenerationOutputFormatTypes?: CodeGenerationOutputFormatType[] | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationCodeGenerationResponse {
  /**
   * <p>The unique identifier of the code generation job that was started.</p>
   * @public
   */
  jobID?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationDeployerJobResponse {
  /**
   * <p>The unique identifier of the deployer job that was started.</p>
   * @public
   */
  jobID?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationDeploymentRequest {
  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationMappingRequest {
  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>The security group mapping strategy to use.</p>
   * @public
   */
  securityGroupMappingStrategy?: SecurityGroupMappingStrategy | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationMappingResponse {
  /**
   * <p>The unique identifier of the mapping job that was started.</p>
   * @public
   */
  jobID?: string | undefined;
}

/**
 * <p>An operation that creates a new construct in the segment.</p>
 * @public
 */
export interface CreateOperation {
  /**
   * <p>The name for the new construct.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Whether the new construct is excluded from the migration.</p>
   * @public
   */
  excluded?: boolean | undefined;

  /**
   * <p>The properties of the new construct, using their native value types.</p>
   * @public
   */
  properties?: Record<string, __DocumentType> | undefined;

  /**
   * <p>The initial construct-type-specific behavioral configuration for the new construct.</p>
   * @public
   */
  configuration?: OperationConfigurationUnion | undefined;
}

/**
 * <p>An operation that deletes a construct from the mapping.</p>
 * @public
 */
export interface DeleteOperation {}

/**
 * <p>A construct reference specifying the source segment and construct to merge.</p>
 * @public
 */
export interface MergeConstruct {
  /**
   * <p>The segment ID of the construct to merge.</p>
   * @public
   */
  segmentID?: string | undefined;

  /**
   * <p>The construct ID to merge.</p>
   * @public
   */
  constructID?: string | undefined;
}

/**
 * <p>An operation that merges constructs from different segments into the target construct.</p>
 * @public
 */
export interface MergeOperation {
  /**
   * <p>The list of constructs to merge into the target.</p>
   * @public
   */
  mergeConstructs?: MergeConstruct[] | undefined;
}

/**
 * <p>A split target specifying the CIDR block for the new construct.</p>
 * @public
 */
export interface SplitConstruct {
  /**
   * <p>The CIDR block for the split construct.</p>
   * @public
   */
  cidrBlock?: string | undefined;
}

/**
 * <p>An operation that splits a construct into multiple constructs with different CIDR blocks.</p>
 * @public
 */
export interface SplitOperation {
  /**
   * <p>The list of split targets with their CIDR blocks.</p>
   * @public
   */
  splitConstructs?: SplitConstruct[] | undefined;
}

/**
 * <p>An operation that updates the properties of a construct.</p>
 * @public
 */
export interface UpdateOperation {
  /**
   * <p>The updated name for the construct.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Whether to exclude this construct from the migration.</p>
   * @public
   */
  excluded?: boolean | undefined;

  /**
   * <p>The properties to update on the construct.</p>
   * @public
   */
  properties?: Record<string, string> | undefined;
}

/**
 * <p>An operation that updates a construct using native property value types and construct-type-specific behavioral configuration.</p>
 * @public
 */
export interface UpdateOperationV2 {
  /**
   * <p>The updated name for the construct.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Whether to exclude this construct from the migration.</p>
   * @public
   */
  excluded?: boolean | undefined;

  /**
   * <p>The properties to set or overwrite on the construct, using their native value types; omitted keys are unchanged.</p>
   * @public
   */
  properties?: Record<string, __DocumentType> | undefined;

  /**
   * <p>The property keys to remove from the construct.</p>
   * @public
   */
  propertiesToDelete?: string[] | undefined;

  /**
   * <p>Construct-type-specific behavioral configuration to apply, such as security group associations or security group rule referencing.</p>
   * @public
   */
  configuration?: OperationConfigurationUnion | undefined;
}

/**
 * <p>A union type representing the operation to perform on a construct during a mapping update.</p>
 * @public
 */
export type OperationUnion =
  | OperationUnion.CreateMember
  | OperationUnion.DeleteMember
  | OperationUnion.MergeMember
  | OperationUnion.SplitMember
  | OperationUnion.UpdateMember
  | OperationUnion.UpdateV2Member
  | OperationUnion.$UnknownMember;

/**
 * @public
 */
export namespace OperationUnion {
  /**
   * <p>A merge operation to combine constructs from different segments.</p>
   * @public
   */
  export interface MergeMember {
    merge: MergeOperation;
    split?: never;
    delete?: never;
    update?: never;
    updateV2?: never;
    create?: never;
    $unknown?: never;
  }

  /**
   * <p>A split operation to divide a construct into multiple constructs with specified CIDR blocks.</p>
   * @public
   */
  export interface SplitMember {
    merge?: never;
    split: SplitOperation;
    delete?: never;
    update?: never;
    updateV2?: never;
    create?: never;
    $unknown?: never;
  }

  /**
   * <p>A delete operation to remove a construct from the mapping.</p>
   * @public
   */
  export interface DeleteMember {
    merge?: never;
    split?: never;
    delete: DeleteOperation;
    update?: never;
    updateV2?: never;
    create?: never;
    $unknown?: never;
  }

  /**
   * <p>An update operation to modify construct properties.</p>
   * @public
   */
  export interface UpdateMember {
    merge?: never;
    split?: never;
    delete?: never;
    update: UpdateOperation;
    updateV2?: never;
    create?: never;
    $unknown?: never;
  }

  /**
   * <p>An update operation that modifies a construct using native property value types and behavioral configuration, with partial updates and property removal.</p>
   * @public
   */
  export interface UpdateV2Member {
    merge?: never;
    split?: never;
    delete?: never;
    update?: never;
    updateV2: UpdateOperationV2;
    create?: never;
    $unknown?: never;
  }

  /**
   * <p>A create operation that adds a new construct to the segment, identified by the constructLogicalID on the parent construct entry.</p>
   * @public
   */
  export interface CreateMember {
    merge?: never;
    split?: never;
    delete?: never;
    update?: never;
    updateV2?: never;
    create: CreateOperation;
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
    updateV2?: never;
    create?: never;
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
    updateV2: (value: UpdateOperationV2) => T;
    create: (value: CreateOperation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A construct update to apply during a mapping update operation.</p>
 * @public
 */
export interface StartNetworkMigrationMappingUpdateConstruct {
  /**
   * <p>The ID of the segment containing the construct.</p>
   * @public
   */
  segmentID?: string | undefined;

  /**
   * <p>The identifier of a segment created in the same request that this construct belongs to. Use it instead of <code>segmentID</code> for a new segment.</p>
   * @public
   */
  segmentLogicalID?: string | undefined;

  /**
   * <p>The ID of the construct to update.</p>
   * @public
   */
  constructID?: string | undefined;

  /**
   * <p>The type of the construct.</p>
   * @public
   */
  constructType: string | undefined;

  /**
   * <p>The logical identifier for a construct created by a create operation; other operations identify the construct by constructID. Other entries in the same request can reference the new construct as \{"Ref": "&lt;constructLogicalID&gt;"\}.</p>
   * @public
   */
  constructLogicalID?: string | undefined;

  /**
   * <p>The operation to perform on the construct.</p>
   * @public
   */
  operation?: OperationUnion | undefined;
}

/**
 * <p>An operation that creates a segment.</p>
 * @public
 */
export interface SegmentCreateOperation {
  /**
   * <p>The name of the new segment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the new segment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The target AWS account for the new segment.</p>
   * @public
   */
  targetAccount?: string | undefined;

  /**
   * <p>Scope tags for the new segment.</p>
   * @public
   */
  scopeTags?: Record<string, string> | undefined;
}

/**
 * <p>An operation that deletes a segment from the mapping.</p>
 * @public
 */
export interface SegmentDeleteOperation {}

/**
 * <p>An operation that updates the properties of a segment.</p>
 * @public
 */
export interface SegmentUpdateOperation {
  /**
   * <p>The updated name for the segment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description for the segment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated target AWS account for the segment.</p>
   * @public
   */
  targetAccount?: string | undefined;

  /**
   * <p>The updated scope tags for the segment.</p>
   * @public
   */
  scopeTags?: Record<string, string> | undefined;
}

/**
 * <p>Specifies the operation to perform on a segment during a mapping update. Specify one of a create, update, or delete operation.</p>
 * @public
 */
export type SegmentOperation =
  | SegmentOperation.CreateMember
  | SegmentOperation.DeleteMember
  | SegmentOperation.UpdateMember
  | SegmentOperation.$UnknownMember;

/**
 * @public
 */
export namespace SegmentOperation {
  /**
   * <p>A create operation to add a new segment.</p>
   * @public
   */
  export interface CreateMember {
    create: SegmentCreateOperation;
    update?: never;
    delete?: never;
    $unknown?: never;
  }

  /**
   * <p>An update operation to modify segment properties.</p>
   * @public
   */
  export interface UpdateMember {
    create?: never;
    update: SegmentUpdateOperation;
    delete?: never;
    $unknown?: never;
  }

  /**
   * <p>A delete operation to remove a segment from the mapping.</p>
   * @public
   */
  export interface DeleteMember {
    create?: never;
    update?: never;
    delete: SegmentDeleteOperation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    create?: never;
    update?: never;
    delete?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    create: (value: SegmentCreateOperation) => T;
    update: (value: SegmentUpdateOperation) => T;
    delete: (value: SegmentDeleteOperation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A segment update to apply during a mapping update operation.</p>
 * @public
 */
export interface StartNetworkMigrationMappingUpdateSegment {
  /**
   * <p>The ID of the segment to update.</p>
   * @public
   */
  segmentID?: string | undefined;

  /**
   * <p>An identifier that you choose for a segment created by this request. You can use it in other constructs in the same request to refer to the new segment.</p>
   * @public
   */
  segmentLogicalID?: string | undefined;

  /**
   * <p>The operation to perform on the segment.</p>
   * @public
   */
  operation?: SegmentOperation | undefined;

  /**
   * <p>The updated target AWS account for the segment.</p>
   * @public
   */
  targetAccount?: string | undefined;

  /**
   * <p>The updated scope tags for the segment.</p>
   * @public
   */
  scopeTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationMappingUpdateRequest {
  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>A list of construct updates to apply.</p>
   * @public
   */
  constructs?: StartNetworkMigrationMappingUpdateConstruct[] | undefined;

  /**
   * <p>A list of segment updates to apply.</p>
   * @public
   */
  segments?: StartNetworkMigrationMappingUpdateSegment[] | undefined;
}

/**
 * @public
 */
export interface StartNetworkMigrationMappingUpdateResponse {
  /**
   * <p>The unique identifier of the mapping update job that was started.</p>
   * @public
   */
  jobID?: string | undefined;
}

/**
 * <p>Updated configuration for the target network topology and addressing.</p>
 * @public
 */
export interface TargetNetworkUpdate {
  /**
   * <p>The updated network topology type.</p>
   * @public
   */
  topology?: TargetNetworkTopology | undefined;

  /**
   * <p>The updated CIDR block for inbound traffic.</p>
   * @public
   */
  inboundCidr?: string | undefined;

  /**
   * <p>The updated CIDR block for outbound traffic.</p>
   * @public
   */
  outboundCidr?: string | undefined;

  /**
   * <p>The updated CIDR block for inspection traffic.</p>
   * @public
   */
  inspectionCidr?: string | undefined;
}

/**
 * <p>Updated S3 configuration for storing target network artifacts.</p>
 * @public
 */
export interface TargetS3ConfigurationUpdate {
  /**
   * <p>The updated name of the S3 bucket.</p>
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * <p>The updated AWS account ID of the S3 bucket owner.</p>
   * @public
   */
  s3BucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkMigrationDefinitionRequest {
  /**
   * <p>The unique identifier of the network migration definition to update.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>The updated name of the network migration definition.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description of the network migration definition.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated list of source configurations.</p>
   * @public
   */
  sourceConfigurations?: SourceConfiguration[] | undefined;

  /**
   * <p>The updated S3 configuration for storing the target network artifacts.</p>
   * @public
   */
  targetS3Configuration?: TargetS3ConfigurationUpdate | undefined;

  /**
   * <p>The updated target network configuration.</p>
   * @public
   */
  targetNetwork?: TargetNetworkUpdate | undefined;

  /**
   * <p>The updated target deployment configuration.</p>
   * @public
   */
  targetDeployment?: TargetDeployment | undefined;

  /**
   * <p>Updates whether the migration creates new target VPCs or uses existing ones. Set to <code>USE_EXISTING</code> to migrate into existing VPCs in the target account, or to <code>CREATE_NEW</code> to provision new target VPCs.</p>
   * @public
   */
  vpcProvisioningStrategy?: VpcProvisioningStrategy | undefined;

  /**
   * <p>The updated list of CIDR mappings that map original source CIDR ranges to updated target CIDR ranges. CIDR mappings can be provided only when <code>vpcProvisioningStrategy</code> is set to <code>USE_EXISTING</code>.</p>
   * @public
   */
  cidrMappings?: CidrMapping[] | undefined;

  /**
   * <p>The updated scope tags for the network migration definition.</p>
   * @public
   */
  scopeTags?: Record<string, string> | undefined;

  /**
   * <p>The updated type of the network migration definition.</p>
   * @public
   */
  definitionType?: DefinitionType | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkMigrationMapperSegmentRequest {
  /**
   * <p>The unique identifier of the network migration definition.</p>
   * @public
   */
  networkMigrationDefinitionID: string | undefined;

  /**
   * <p>The unique identifier of the network migration execution.</p>
   * @public
   */
  networkMigrationExecutionID: string | undefined;

  /**
   * <p>The unique identifier of the segment to update.</p>
   * @public
   */
  segmentID: string | undefined;

  /**
   * <p>The updated scope tags for the segment.</p>
   * @public
   */
  scopeTags?: Record<string, string> | undefined;
}

/**
 * <p>Filters for listing source action invocations.</p>
 * @public
 */
export interface ListRemoteSourceActionInvocationsRequestFilters {
  /**
   * <p>A list of source server ARNs to filter by.</p>
   * @public
   */
  sourceServerArns?: string[] | undefined;

  /**
   * <p>A list of source action ARNs to filter by.</p>
   * @public
   */
  remoteSourceActionArns?: string[] | undefined;

  /**
   * <p>A list of invocation statuses to filter by.</p>
   * @public
   */
  statuses?: RemoteSourceActionInvocationStatus[] | undefined;
}

/**
 * @public
 */
export interface ListRemoteSourceActionInvocationsRequest {
  /**
   * <p>The unique identifier of the job to list invocations for.</p>
   * @public
   */
  remoteSourceActionJobID: string | undefined;

  /**
   * <p>Filters to apply when listing invocations, such as source server or status.</p>
   * @public
   */
  filters?: ListRemoteSourceActionInvocationsRequestFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>The run of a source action on one source server as part of a job.</p>
 * @public
 */
export interface RemoteSourceActionInvocation {
  /**
   * <p>The ARN of the source server.</p>
   * @public
   */
  sourceServerArn?: string | undefined;

  /**
   * <p>The ARN of the source action.</p>
   * @public
   */
  remoteSourceActionArn?: string | undefined;

  /**
   * <p>The ID of the AWS Systems Manager command that runs the source action on the connector.</p>
   * @public
   */
  ssmCommandInvocationID?: string | undefined;

  /**
   * <p>The current status of the invocation.</p>
   * @public
   */
  status?: RemoteSourceActionInvocationStatus | undefined;

  /**
   * <p>The timestamp when the command started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The timestamp when the command finished.</p>
   * @public
   */
  endedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListRemoteSourceActionInvocationsResponse {
  /**
   * <p>A list of source action invocations.</p>
   * @public
   */
  items?: RemoteSourceActionInvocation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for listing source action jobs.</p>
 * @public
 */
export interface ListRemoteSourceActionJobsRequestFilters {
  /**
   * <p>A list of job IDs to filter by.</p>
   * @public
   */
  remoteSourceActionJobIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListRemoteSourceActionJobsRequest {
  /**
   * <p>Filters to apply when listing source action jobs.</p>
   * @public
   */
  filters?: ListRemoteSourceActionJobsRequestFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>A job that runs a source action on source servers through a connector.</p>
 * @public
 */
export interface RemoteSourceActionJob {
  /**
   * <p>The unique identifier of the job.</p>
   * @public
   */
  remoteSourceActionJobID?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The current status of the job.</p>
   * @public
   */
  status?: RemoteSourceActionJobStatus | undefined;

  /**
   * <p>The ARNs of the source servers that the job runs on.</p>
   * @public
   */
  sourceServerArns?: string[] | undefined;

  /**
   * <p>The ARNs of the source actions that the job runs.</p>
   * @public
   */
  remoteSourceActionArns?: string[] | undefined;

  /**
   * <p>The ARN of the connector that runs the job.</p>
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * <p>The timestamp when the job started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The timestamp when the job completed or failed.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The reason the job failed.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>Tags assigned to the job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListRemoteSourceActionJobsResponse {
  /**
   * <p>A list of source action jobs.</p>
   * @public
   */
  items?: RemoteSourceActionJob[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartRemoteSourceActionJobRequest {
  /**
   * <p>The ARNs of the source actions to run.</p>
   * @public
   */
  remoteSourceActionArns: string[] | undefined;

  /**
   * <p>The ARN of the connector that runs the source actions.</p>
   * @public
   */
  connectorArn: string | undefined;

  /**
   * <p>The ARNs of the source servers to run the source actions on.</p>
   * @public
   */
  sourceServerArns: string[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Tags to assign to the job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface StartRemoteSourceActionJobResponse {
  /**
   * <p>The job that was started.</p>
   * @public
   */
  remoteSourceActionJob?: RemoteSourceActionJob | undefined;
}

/**
 * @public
 */
export interface CreateRemoteSourceActionRequest {
  /**
   * <p>The name of the source action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the source action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>AWS Systems Manager Parameter Store parameter name.</p>
   * @public
   */
  ssmParameterName: string | undefined;

  /**
   * <p>The maximum time, in seconds, that the script can run on each source server.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>The operating system of the source servers that the script runs on. Set to <code>linux</code> or <code>windows</code> to run the script only on source servers with that operating system, or <code>all</code> to run it on both.</p>
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * <p>Tags to assign to the source action.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface CreateRemoteSourceActionResponse {
  /**
   * <p>The unique identifier of the source action.</p>
   * @public
   */
  remoteSourceActionID?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source action.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the source action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the source action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>AWS Systems Manager Parameter Store parameter name.</p>
   * @public
   */
  ssmParameterName?: string | undefined;

  /**
   * <p>The maximum time, in seconds, that the script can run on each source server.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>The operating system of the source servers that the script runs on. Absent when the script runs on both Linux and Windows.</p>
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * <p>Tags assigned to the source action.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteRemoteSourceActionRequest {
  /**
   * <p>The unique identifier of the source action to delete.</p>
   * @public
   */
  remoteSourceActionID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRemoteSourceActionResponse {}

/**
 * <p>Filters for listing source actions.</p>
 * @public
 */
export interface ListRemoteSourceActionsRequestFilters {
  /**
   * <p>A list of source action IDs to filter by.</p>
   * @public
   */
  remoteSourceActionIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListRemoteSourceActionsRequest {
  /**
   * <p>Filters to apply when listing source actions.</p>
   * @public
   */
  filters?: ListRemoteSourceActionsRequestFilters | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>A source action, which references a script in AWS Systems Manager Parameter Store that Application Migration Service runs on source servers through a connector.</p>
 * @public
 */
export interface RemoteSourceAction {
  /**
   * <p>The unique identifier of the source action.</p>
   * @public
   */
  remoteSourceActionID?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source action.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the source action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the source action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>AWS Systems Manager Parameter Store parameter name.</p>
   * @public
   */
  ssmParameterName?: string | undefined;

  /**
   * <p>The maximum time, in seconds, that the script can run on each source server.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>The operating system of the source servers that the script runs on. Absent when the script runs on both Linux and Windows.</p>
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * <p>Tags assigned to the source action.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListRemoteSourceActionsResponse {
  /**
   * <p>A list of source actions.</p>
   * @public
   */
  items?: RemoteSourceAction[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRemoteSourceActionRequest {
  /**
   * <p>The unique identifier of the source action to update.</p>
   * @public
   */
  remoteSourceActionID: string | undefined;

  /**
   * <p>The updated name of the source action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description of the source action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>AWS Systems Manager Parameter Store parameter name.</p>
   * @public
   */
  ssmParameterName?: string | undefined;

  /**
   * <p>The updated maximum time, in seconds, that the script can run on each source server.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>The updated operating system of the source servers that the script runs on. Set to <code>linux</code> or <code>windows</code> to run the script only on source servers with that operating system, or <code>all</code> to run it on both.</p>
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRemoteSourceActionResponse {
  /**
   * <p>The unique identifier of the source action.</p>
   * @public
   */
  remoteSourceActionID?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source action.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the source action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the source action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>AWS Systems Manager Parameter Store parameter name.</p>
   * @public
   */
  ssmParameterName?: string | undefined;

  /**
   * <p>The maximum time, in seconds, that the script can run on each source server.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>The operating system of the source servers that the script runs on. Absent when the script runs on both Linux and Windows.</p>
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * <p>Tags assigned to the source action.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>FSx for ONTAP storage configuration.</p>
 * @public
 */
export interface FsxOntapConfiguration {
  /**
   * <p>FSx ONTAP configuration storage virtual machine ID.</p>
   * @public
   */
  storageVirtualMachineId: string | undefined;

  /**
   * <p>FSx ONTAP configuration credentials secret ARN.</p>
   * @public
   */
  credentialsSecretArn: string | undefined;
}

/**
 * <p>Storage configuration for replication.</p>
 * @public
 */
export interface StorageConfiguration {
  /**
   * <p>Storage configuration storage type.</p>
   * @public
   */
  storageType: StorageType | undefined;

  /**
   * <p>Storage configuration FSx ONTAP configuration.</p>
   * @public
   */
  fsxOntapConfiguration?: FsxOntapConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateReplicationConfigurationTemplateRequest {
  /**
   * <p>Request to configure the Staging Area subnet ID during Replication Settings template creation.</p>
   * @public
   */
  stagingAreaSubnetId: string | undefined;

  /**
   * <p>Request to associate the default Application Migration Service Security group with the Replication Settings template.</p>
   * @public
   */
  associateDefaultSecurityGroup: boolean | undefined;

  /**
   * <p>Request to configure the Replication Server Security group ID during Replication Settings template creation.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs: string[] | undefined;

  /**
   * <p>Request to configure the Replication Server instance type during Replication Settings template creation.</p>
   * @public
   */
  replicationServerInstanceType: string | undefined;

  /**
   * <p>Request to use Dedicated Replication Servers during Replication Settings template creation.</p>
   * @public
   */
  useDedicatedReplicationServer: boolean | undefined;

  /**
   * <p>Request to configure the default large staging disk EBS volume type during Replication Settings template creation.</p>
   * @public
   */
  defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * <p>Request to configure EBS encryption during Replication Settings template creation.</p>
   * @public
   */
  ebsEncryption: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * <p>Request to configure an EBS encryption key during Replication Settings template creation.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * <p>Request to configure bandwidth throttling during Replication Settings template creation.</p>
   * @public
   */
  bandwidthThrottling: number | undefined;

  /**
   * <p>Request to configure data plane routing during Replication Settings template creation.</p>
   * @public
   */
  dataPlaneRouting: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * <p>Request to create Public IP during Replication Settings template creation.</p>
   * @public
   */
  createPublicIP: boolean | undefined;

  /**
   * <p>Request to configure Staging Area tags during Replication Settings template creation.</p>
   * @public
   */
  stagingAreaTags: Record<string, string> | undefined;

  /**
   * <p>Request to use Fips Endpoint during Replication Settings template creation.</p>
   * @public
   */
  useFipsEndpoint?: boolean | undefined;

  /**
   * <p>Request to configure tags during Replication Settings template creation.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Request to configure the internet protocol to IPv4 or IPv6.</p>
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;

  /**
   * <p>Request to store snapshot on local zone during Replication Settings template creation.</p>
   * @public
   */
  storeSnapshotOnLocalZone?: boolean | undefined;

  /**
   * <p>Request to set the location of replication snapshots when the staging area subnet is on an AWS Outpost during Replication Settings template creation. Set to <code>OUTPOST</code> to keep replication snapshots on the Outpost, or <code>REGION</code> to store them in the AWS Region. Required when the staging area subnet is on an Outpost, and not allowed otherwise.</p>
   * @public
   */
  outpostSnapshotLocation?: OutpostSnapshotLocation | undefined;

  /**
   * <p>Request to configure storage during Replication Settings template creation.</p>
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface ReplicationConfigurationTemplate {
  /**
   * <p>Replication Configuration template ID.</p>
   * @public
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>Replication Configuration template ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Replication Configuration template Staging Area subnet ID.</p>
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * <p>Replication Configuration template associate default Application Migration Service Security group.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * <p>Replication Configuration template server Security Groups IDs.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * <p>Replication Configuration template server instance type.</p>
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * <p>Replication Configuration template use Dedicated Replication Server.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * <p>Replication Configuration template use default large Staging Disk type.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * <p>Replication Configuration template EBS encryption.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * <p>Replication Configuration template EBS encryption key ARN.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * <p>Replication Configuration template bandwidth throttling.</p>
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * <p>Replication Configuration template data plane routing.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * <p>Replication Configuration template create Public IP.</p>
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * <p>Replication Configuration template Staging Area Tags.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * <p>Replication Configuration template use Fips Endpoint.</p>
   * @public
   */
  useFipsEndpoint?: boolean | undefined;

  /**
   * <p>Replication Configuration template Tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Replication Configuration template internet protocol.</p>
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;

  /**
   * <p>Replication Configuration template store snapshot on local zone.</p>
   * @public
   */
  storeSnapshotOnLocalZone?: boolean | undefined;

  /**
   * <p>Indicates the location of replication snapshots in the Replication Configuration template when the staging area subnet is on an AWS Outpost. <code>OUTPOST</code> keeps replication snapshots on the Outpost, and <code>REGION</code> stores them in the AWS Region.</p>
   * @public
   */
  outpostSnapshotLocation?: OutpostSnapshotLocation | undefined;

  /**
   * <p>Replication Configuration template storage configuration.</p>
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationConfigurationTemplateRequest {
  /**
   * <p>Request to delete Replication Configuration Template from service by Replication Configuration Template ID.</p>
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
   * <p>Request to describe Replication Configuration template by template IDs.</p>
   * @public
   */
  replicationConfigurationTemplateIDs?: string[] | undefined;

  /**
   * <p>Request to describe Replication Configuration template by max results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Request to describe Replication Configuration template by next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesResponse {
  /**
   * <p>Request to describe Replication Configuration template by items.</p>
   * @public
   */
  items?: ReplicationConfigurationTemplate[] | undefined;

  /**
   * <p>Request to describe Replication Configuration template by next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationTemplateRequest {
  /**
   * <p>Update replication configuration template template ID request.</p>
   * @public
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>Update replication configuration template ARN request.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Update replication configuration template Staging Area subnet ID request.</p>
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * <p>Update replication configuration template associate default Application Migration Service Security group request.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * <p>Update replication configuration template Replication Server Security groups IDs request.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * <p>Update replication configuration template Replication Server instance type request.</p>
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * <p>Update replication configuration template use dedicated Replication Server request.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * <p>Update replication configuration template use default large Staging Disk type request.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * <p>Update replication configuration template EBS encryption request.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * <p>Update replication configuration template EBS encryption key ARN request.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * <p>Update replication configuration template bandwidth throttling request.</p>
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * <p>Update replication configuration template data plane routing request.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * <p>Update replication configuration template create Public IP request.</p>
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * <p>Update replication configuration template Staging Area Tags request.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * <p>Update replication configuration template use Fips Endpoint request.</p>
   * @public
   */
  useFipsEndpoint?: boolean | undefined;

  /**
   * <p>Update replication configuration template internet protocol request.</p>
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;

  /**
   * <p>Update replication configuration template store snapshot on local zone request.</p>
   * @public
   */
  storeSnapshotOnLocalZone?: boolean | undefined;

  /**
   * <p>Updates the location of replication snapshots in the Replication Configuration template when the staging area subnet is on an AWS Outpost. Set to <code>OUTPOST</code> to keep replication snapshots on the Outpost, or <code>REGION</code> to store them in the AWS Region. Required when the staging area subnet is on an Outpost, and not allowed otherwise.</p>
   * @public
   */
  outpostSnapshotLocation?: OutpostSnapshotLocation | undefined;

  /**
   * <p>Update replication configuration template storage configuration request.</p>
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * <p>The request to change the source server migration lifecycle state.</p>
 * @public
 */
export interface ChangeServerLifeCycleStateSourceServerLifecycle {
  /**
   * <p>The request to change the source server migration lifecycle state.</p>
   * @public
   */
  state: ChangeServerLifeCycleStateSourceServerLifecycleState | undefined;
}

/**
 * @public
 */
export interface ChangeServerLifeCycleStateRequest {
  /**
   * <p>The request to change the source server migration lifecycle state by source server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>The request to change the source server migration lifecycle state.</p>
   * @public
   */
  lifeCycle: ChangeServerLifeCycleStateSourceServerLifecycle | undefined;

  /**
   * <p>The request to change the source server migration account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>Source Server connector action.</p>
 * @public
 */
export interface SourceServerConnectorAction {
  /**
   * <p>Source Server connector action credentials secret arn.</p>
   * @public
   */
  credentialsSecretArn?: string | undefined;

  /**
   * <p>Source Server connector action connector arn.</p>
   * @public
   */
  connectorArn?: string | undefined;
}

/**
 * <p>Error in data replication.</p>
 * @public
 */
export interface DataReplicationError {
  /**
   * <p>Error in data replication.</p>
   * @public
   */
  error?: DataReplicationErrorString | undefined;

  /**
   * <p>Error in data replication.</p>
   * @public
   */
  rawError?: string | undefined;
}

/**
 * <p>Data replication initiation step.</p>
 * @public
 */
export interface DataReplicationInitiationStep {
  /**
   * <p>Request to query data initiation step name.</p>
   * @public
   */
  name?: DataReplicationInitiationStepName | undefined;

  /**
   * <p>Request to query data initiation status.</p>
   * @public
   */
  status?: DataReplicationInitiationStepStatus | undefined;
}

/**
 * <p>Data replication initiation.</p>
 * @public
 */
export interface DataReplicationInitiation {
  /**
   * <p>Request to query data initiation start date and time.</p>
   * @public
   */
  startDateTime?: string | undefined;

  /**
   * <p>Request to query next data initiation date and time.</p>
   * @public
   */
  nextAttemptDateTime?: string | undefined;

  /**
   * <p>Request to query data initiation steps.</p>
   * @public
   */
  steps?: DataReplicationInitiationStep[] | undefined;
}

/**
 * <p>Request to query disks replicated.</p>
 * @public
 */
export interface DataReplicationInfoReplicatedDisk {
  /**
   * <p>Request to query device name.</p>
   * @public
   */
  deviceName?: string | undefined;

  /**
   * <p>Request to query total amount of data replicated in bytes.</p>
   * @public
   */
  totalStorageBytes?: number | undefined;

  /**
   * <p>Request to query amount of data replicated in bytes.</p>
   * @public
   */
  replicatedStorageBytes?: number | undefined;

  /**
   * <p>Request to query amount of data rescanned in bytes.</p>
   * @public
   */
  rescannedStorageBytes?: number | undefined;

  /**
   * <p>Request to query data replication backlog size in bytes.</p>
   * @public
   */
  backloggedStorageBytes?: number | undefined;
}

/**
 * <p>Request data replication info.</p>
 * @public
 */
export interface DataReplicationInfo {
  /**
   * <p>Request to query data replication lag duration.</p>
   * @public
   */
  lagDuration?: string | undefined;

  /**
   * <p>Request to query the time when data replication will be complete.</p>
   * @public
   */
  etaDateTime?: string | undefined;

  /**
   * <p>Request to query disks replicated.</p>
   * @public
   */
  replicatedDisks?: DataReplicationInfoReplicatedDisk[] | undefined;

  /**
   * <p>Request to query the data replication state.</p>
   * @public
   */
  dataReplicationState?: DataReplicationState | undefined;

  /**
   * <p>Request to query whether data replication has been initiated.</p>
   * @public
   */
  dataReplicationInitiation?: DataReplicationInitiation | undefined;

  /**
   * <p>Error in obtaining data replication info.</p>
   * @public
   */
  dataReplicationError?: DataReplicationError | undefined;

  /**
   * <p>Request to query data replication last snapshot time.</p>
   * @public
   */
  lastSnapshotDateTime?: string | undefined;

  /**
   * <p>Replication server instance ID.</p>
   * @public
   */
  replicatorId?: string | undefined;

  /**
   * <p>The ARN of the AWS Outpost that hosts the staging area, when the staging area subnet is on an Outpost.</p>
   * @public
   */
  stagingOutpostArn?: string | undefined;
}

/**
 * <p>Last known check performed on a launched instance.</p>
 * @public
 */
export interface LastKnownCheck {
  /**
   * <p>Last known check type.</p>
   * @public
   */
  type?: LastKnownCheckType | undefined;

  /**
   * <p>Last known check name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Last known check status.</p>
   * @public
   */
  status?: LastKnownCheckStatus | undefined;

  /**
   * <p>Last known check error.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Last known check timestamp.</p>
   * @public
   */
  checkedAt?: Date | undefined;
}

/**
 * <p>Launched instance.</p>
 * @public
 */
export interface LaunchedInstance {
  /**
   * <p>Launched instance EC2 ID.</p>
   * @public
   */
  ec2InstanceID?: string | undefined;

  /**
   * <p>Launched instance Job ID.</p>
   * @public
   */
  jobID?: string | undefined;

  /**
   * <p>Launched instance first boot.</p>
   * @public
   */
  firstBoot?: FirstBoot | undefined;

  /**
   * <p>Launched instance last known checks.</p>
   * @public
   */
  lastKnownChecks?: LastKnownCheck[] | undefined;

  /**
   * <p>Launched instance last known FSx checks status.</p>
   * @public
   */
  lastKnownFsxChecksStatus?: LastKnownCheckStatus | undefined;
}

/**
 * <p>Lifecycle Cutover finalized</p>
 * @public
 */
export interface LifeCycleLastCutoverFinalized {
  /**
   * <p>Lifecycle Cutover finalized date and time.</p>
   * @public
   */
  apiCallDateTime?: string | undefined;
}

/**
 * <p>Lifecycle last Cutover initiated.</p>
 * @public
 */
export interface LifeCycleLastCutoverInitiated {
  /**
   * <p/>
   * @public
   */
  apiCallDateTime?: string | undefined;

  /**
   * <p>Lifecycle last Cutover initiated by Job ID.</p>
   * @public
   */
  jobID?: string | undefined;
}

/**
 * <p>Lifecycle last Cutover reverted.</p>
 * @public
 */
export interface LifeCycleLastCutoverReverted {
  /**
   * <p>Lifecycle last Cutover reverted API call date time.</p>
   * @public
   */
  apiCallDateTime?: string | undefined;
}

/**
 * <p>Lifecycle last Cutover .</p>
 * @public
 */
export interface LifeCycleLastCutover {
  /**
   * <p>Lifecycle last Cutover initiated.</p>
   * @public
   */
  initiated?: LifeCycleLastCutoverInitiated | undefined;

  /**
   * <p>Lifecycle last Cutover reverted.</p>
   * @public
   */
  reverted?: LifeCycleLastCutoverReverted | undefined;

  /**
   * <p>Lifecycle Cutover finalized date and time.</p>
   * @public
   */
  finalized?: LifeCycleLastCutoverFinalized | undefined;
}

/**
 * <p>Lifecycle last Test finalized.</p>
 * @public
 */
export interface LifeCycleLastTestFinalized {
  /**
   * <p>Lifecycle Test finalized API call date and time.</p>
   * @public
   */
  apiCallDateTime?: string | undefined;
}

/**
 * <p>Lifecycle last Test initiated.</p>
 * @public
 */
export interface LifeCycleLastTestInitiated {
  /**
   * <p>Lifecycle last Test initiated API call date and time.</p>
   * @public
   */
  apiCallDateTime?: string | undefined;

  /**
   * <p>Lifecycle last Test initiated Job ID.</p>
   * @public
   */
  jobID?: string | undefined;
}

/**
 * <p>Lifecycle last Test reverted.</p>
 * @public
 */
export interface LifeCycleLastTestReverted {
  /**
   * <p>Lifecycle last Test reverted API call date and time.</p>
   * @public
   */
  apiCallDateTime?: string | undefined;
}

/**
 * <p>Lifecycle last Test.</p>
 * @public
 */
export interface LifeCycleLastTest {
  /**
   * <p>Lifecycle last Test initiated.</p>
   * @public
   */
  initiated?: LifeCycleLastTestInitiated | undefined;

  /**
   * <p>Lifecycle last Test reverted.</p>
   * @public
   */
  reverted?: LifeCycleLastTestReverted | undefined;

  /**
   * <p>Lifecycle last Test finalized.</p>
   * @public
   */
  finalized?: LifeCycleLastTestFinalized | undefined;
}

/**
 * <p>Lifecycle.</p>
 * @public
 */
export interface LifeCycle {
  /**
   * <p>Lifecycle added to service date and time.</p>
   * @public
   */
  addedToServiceDateTime?: string | undefined;

  /**
   * <p>Lifecycle replication initiation date and time.</p>
   * @public
   */
  firstByteDateTime?: string | undefined;

  /**
   * <p>Lifecycle elapsed time and duration.</p>
   * @public
   */
  elapsedReplicationDuration?: string | undefined;

  /**
   * <p>Lifecycle last seen date and time.</p>
   * @public
   */
  lastSeenByServiceDateTime?: string | undefined;

  /**
   * <p>Lifecycle last Test.</p>
   * @public
   */
  lastTest?: LifeCycleLastTest | undefined;

  /**
   * <p>Lifecycle last Cutover.</p>
   * @public
   */
  lastCutover?: LifeCycleLastCutover | undefined;

  /**
   * <p>Lifecycle state.</p>
   * @public
   */
  state?: LifeCycleState | undefined;
}

/**
 * <p>Source server CPU information.</p>
 * @public
 */
export interface CPU {
  /**
   * <p>The number of CPU cores on the source server.</p>
   * @public
   */
  cores?: number | undefined;

  /**
   * <p>The source server's CPU model name.</p>
   * @public
   */
  modelName?: string | undefined;
}

/**
 * <p>The disk identifier.</p>
 * @public
 */
export interface Disk {
  /**
   * <p>The disk or device name.</p>
   * @public
   */
  deviceName?: string | undefined;

  /**
   * <p>The amount of storage on the disk in bytes.</p>
   * @public
   */
  bytes?: number | undefined;
}

/**
 * <p>Identification hints.</p>
 * @public
 */
export interface IdentificationHints {
  /**
   * <p>FQDN address identification hint.</p>
   * @public
   */
  fqdn?: string | undefined;

  /**
   * <p>Hostname identification hint.</p>
   * @public
   */
  hostname?: string | undefined;

  /**
   * <p>vmWare UUID identification hint.</p>
   * @public
   */
  vmWareUuid?: string | undefined;

  /**
   * <p>AWS Instance ID identification hint.</p>
   * @public
   */
  awsInstanceID?: string | undefined;

  /**
   * <p>vCenter VM path identification hint.</p>
   * @public
   */
  vmPath?: string | undefined;
}

/**
 * <p>Network interface.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>Network interface Mac address.</p>
   * @public
   */
  macAddress?: string | undefined;

  /**
   * <p>Network interface IPs.</p>
   * @public
   */
  ips?: string[] | undefined;

  /**
   * <p>Network interface primary IP.</p>
   * @public
   */
  isPrimary?: boolean | undefined;
}

/**
 * <p>Operating System.</p>
 * @public
 */
export interface OS {
  /**
   * <p>OS full string.</p>
   * @public
   */
  fullString?: string | undefined;
}

/**
 * <p>Source server properties.</p>
 * @public
 */
export interface SourceProperties {
  /**
   * <p>Source server last update date and time.</p>
   * @public
   */
  lastUpdatedDateTime?: string | undefined;

  /**
   * <p>Source server recommended instance type.</p>
   * @public
   */
  recommendedInstanceType?: string | undefined;

  /**
   * <p>Source server identification hints.</p>
   * @public
   */
  identificationHints?: IdentificationHints | undefined;

  /**
   * <p>Source server network interfaces.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * <p>Source Server disks.</p>
   * @public
   */
  disks?: Disk[] | undefined;

  /**
   * <p>Source Server CPUs.</p>
   * @public
   */
  cpus?: CPU[] | undefined;

  /**
   * <p>Source server RAM in bytes.</p>
   * @public
   */
  ramBytes?: number | undefined;

  /**
   * <p>Source server OS.</p>
   * @public
   */
  os?: OS | undefined;
}

/**
 * @public
 */
export interface SourceServer {
  /**
   * <p>Source server ID.</p>
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * <p>Source server ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Source server archived status.</p>
   * @public
   */
  isArchived?: boolean | undefined;

  /**
   * <p>Source server Tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Source server launched instance.</p>
   * @public
   */
  launchedInstance?: LaunchedInstance | undefined;

  /**
   * <p>Source server data replication info.</p>
   * @public
   */
  dataReplicationInfo?: DataReplicationInfo | undefined;

  /**
   * <p>Source server lifecycle state.</p>
   * @public
   */
  lifeCycle?: LifeCycle | undefined;

  /**
   * <p>Source server properties.</p>
   * @public
   */
  sourceProperties?: SourceProperties | undefined;

  /**
   * <p>Source server replication type.</p>
   * @public
   */
  replicationType?: ReplicationType | undefined;

  /**
   * <p>Source server vCenter client id.</p>
   * @public
   */
  vcenterClientID?: string | undefined;

  /**
   * <p>Source server application ID.</p>
   * @public
   */
  applicationID?: string | undefined;

  /**
   * <p>Source server user provided ID.</p>
   * @public
   */
  userProvidedID?: string | undefined;

  /**
   * <p>Source server fqdn for action framework.</p>
   * @public
   */
  fqdnForActionFramework?: string | undefined;

  /**
   * <p>Source Server connector action.</p>
   * @public
   */
  connectorAction?: SourceServerConnectorAction | undefined;
}

/**
 * @public
 */
export interface DeleteSourceServerRequest {
  /**
   * <p>Request to delete Source Server from service by Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to delete Source Server from service by Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSourceServerResponse {}

/**
 * <p>Request to filter Source Servers list.</p>
 * @public
 */
export interface DescribeSourceServersRequestFilters {
  /**
   * <p>Request to filter Source Servers list by Source Server ID.</p>
   * @public
   */
  sourceServerIDs?: string[] | undefined;

  /**
   * <p>Request to filter Source Servers list by archived.</p>
   * @public
   */
  isArchived?: boolean | undefined;

  /**
   * <p>Request to filter Source Servers list by replication type.</p>
   * @public
   */
  replicationTypes?: ReplicationType[] | undefined;

  /**
   * <p>Request to filter Source Servers list by life cycle states.</p>
   * @public
   */
  lifeCycleStates?: LifeCycleState[] | undefined;

  /**
   * <p>Request to filter Source Servers list by application IDs.</p>
   * @public
   */
  applicationIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSourceServersRequest {
  /**
   * <p>Request to filter Source Servers list.</p>
   * @public
   */
  filters?: DescribeSourceServersRequestFilters | undefined;

  /**
   * <p>Request to filter Source Servers list by maximum results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Request to filter Source Servers list by next token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Request to filter Source Servers list by Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSourceServersResponse {
  /**
   * <p>The list of returned Source Servers.</p>
   * @public
   */
  items?: SourceServer[] | undefined;

  /**
   * <p>The token of the next Source Server to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisconnectFromServiceRequest {
  /**
   * <p>Request to disconnect Source Server from service by Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to disconnect Source Server from service by Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface FinalizeCutoverRequest {
  /**
   * <p>Request to finalize Cutover by Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to finalize Cutover by Source Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface GetLaunchConfigurationRequest {
  /**
   * <p>Request to get Launch Configuration information by Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to get Launch Configuration information by Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface LaunchConfiguration {
  /**
   * <p>Launch configuration Source Server ID.</p>
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * <p>Launch configuration name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Launch configuration EC2 Launch template ID.</p>
   * @public
   */
  ec2LaunchTemplateID?: string | undefined;

  /**
   * <p>Launch disposition for launch configuration.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * <p>Launch configuration Target instance type right sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * <p>Copy Private IP during Launch Configuration.</p>
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * <p>Copy Tags during Launch Configuration.</p>
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * <p>Launch configuration OS licensing.</p>
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * <p>Launch configuration boot mode.</p>
   * @public
   */
  bootMode?: BootMode | undefined;

  /**
   * <p>Post Launch Actions to be executed on the Test or Cutover instance.</p>
   * @public
   */
  postLaunchActions?: PostLaunchActions | undefined;

  /**
   * <p>Enable map auto tagging.</p>
   * @public
   */
  enableMapAutoTagging?: boolean | undefined;

  /**
   * <p>Map auto tagging MPE ID.</p>
   * @public
   */
  mapAutoTaggingMpeID?: string | undefined;

  /**
   * <p>Map auto tagging key.</p>
   * @public
   */
  mapAutoTaggingKey?: string | undefined;
}

/**
 * @public
 */
export interface GetLaunchConfigurationDefaultsRequest {
  /**
   * <p>Request to get the launch configuration defaults by Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to get the launch configuration defaults by Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>Contains the Amazon Elastic Block Store (Amazon EBS) volume configuration for the disk mappings created later in the source server's Amazon Elastic Compute Cloud (Amazon EC2) launch template. Fields that aren't set get the service's default values.</p>
 * @public
 */
export interface SourceServerVolumeConfiguration {
  /**
   * <p>EBS volume type.</p>
   * @public
   */
  volumeType?: VolumeType | undefined;

  /**
   * <p>Provisioned IOPS, for io1, io2 and gp3 volumes.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>Throughput in MiB/s, for gp3 volumes only.</p>
   * @public
   */
  throughput?: number | undefined;

  /**
   * <p>Provisioned rate for volume initialization, in MiB/s.</p>
   * @public
   */
  volumeInitializationRate?: number | undefined;

  /**
   * <p>Specifies whether the volume is deleted when the launched instance terminates.</p>
   * @public
   */
  deleteOnTermination?: DeleteOnTermination | undefined;
}

/**
 * @public
 */
export interface GetLaunchConfigurationDefaultsResponse {
  /**
   * <p>Source Server ID of the launch configuration defaults.</p>
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * <p>Disks up to this size, in GiB, use the small volume configuration, and larger disks use the large one. <code>0</code> means every disk uses the large one.</p>
   * @public
   */
  smallVolumeMaxSize?: number | undefined;

  /**
   * <p>Volume configuration for disks up to <code>smallVolumeMaxSize</code>. Omitted when none of its fields is set.</p>
   * @public
   */
  smallVolumeConfiguration?: SourceServerVolumeConfiguration | undefined;

  /**
   * <p>Volume configuration for disks larger than <code>smallVolumeMaxSize</code>. Omitted when none of its fields is set.</p>
   * @public
   */
  largeVolumeConfiguration?: SourceServerVolumeConfiguration | undefined;
}

/**
 * @public
 */
export interface GetReplicationConfigurationRequest {
  /**
   * <p>Request to get Replication Configuration by Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to get Replication Configuration by Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>Replication Configuration replicated disk.</p>
 * @public
 */
export interface ReplicationConfigurationReplicatedDisk {
  /**
   * <p>Replication Configuration replicated disk device name.</p>
   * @public
   */
  deviceName?: string | undefined;

  /**
   * <p>Replication Configuration replicated disk boot disk.</p>
   * @public
   */
  isBootDisk?: boolean | undefined;

  /**
   * <p>Replication Configuration replicated disk staging disk type.</p>
   * @public
   */
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | undefined;

  /**
   * <p>Replication Configuration replicated disk IOPs.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>Replication Configuration replicated disk throughput.</p>
   * @public
   */
  throughput?: number | undefined;
}

/**
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * <p>Replication Configuration Source Server ID.</p>
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * <p>Replication Configuration name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Replication Configuration Staging Area subnet ID.</p>
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * <p>Replication Configuration associate default Application Migration Service Security Group.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * <p>Replication Configuration Replication Server Security Group IDs.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * <p>Replication Configuration Replication Server instance type.</p>
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * <p>Replication Configuration use Dedicated Replication Server.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * <p>Replication Configuration use default large Staging Disks.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * <p>Replication Configuration replicated disks.</p>
   * @public
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[] | undefined;

  /**
   * <p>Replication Configuration EBS encryption.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * <p>Replication Configuration EBS encryption key ARN.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * <p>Replication Configuration set bandwidth throttling.</p>
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * <p>Replication Configuration data plane routing.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * <p>Replication Configuration create Public IP.</p>
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * <p>Replication Configuration Staging Area tags.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * <p>Replication Configuration use Fips Endpoint.</p>
   * @public
   */
  useFipsEndpoint?: boolean | undefined;

  /**
   * <p>Replication Configuration internet protocol.</p>
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;

  /**
   * <p>Replication Configuration store snapshot on local zone.</p>
   * @public
   */
  storeSnapshotOnLocalZone?: boolean | undefined;

  /**
   * <p>Indicates the location of replication snapshots when the staging area subnet is on an AWS Outpost. <code>OUTPOST</code> keeps replication snapshots on the Outpost, and <code>REGION</code> stores them in the AWS Region.</p>
   * @public
   */
  outpostSnapshotLocation?: OutpostSnapshotLocation | undefined;

  /**
   * <p>Replication Configuration storage configuration.</p>
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface ListRemoteSourceActionInvocationResultsRequest {
  /**
   * <p>The unique identifier of the source server to list invocation results for.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>The latest invocation result of a source action on a source server.</p>
 * @public
 */
export interface RemoteSourceActionInvocationResult {
  /**
   * <p>The unique identifier of the source action.</p>
   * @public
   */
  remoteSourceActionID?: string | undefined;

  /**
   * <p>The ID of the account that owns the connector that ran the source action.</p>
   * @public
   */
  connectorOwnerAccountID?: string | undefined;

  /**
   * <p>The status of the latest invocation.</p>
   * @public
   */
  status?: RemoteSourceActionInvocationStatus | undefined;

  /**
   * <p>The timestamp when the command started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The timestamp when the command finished.</p>
   * @public
   */
  endedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListRemoteSourceActionInvocationResultsResponse {
  /**
   * <p>A list of source action invocation results.</p>
   * @public
   */
  items?: RemoteSourceActionInvocationResult[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Source server post migration custom action filters.</p>
 * @public
 */
export interface SourceServerActionsRequestFilters {
  /**
   * <p>Action IDs to filter source server post migration custom actions by.</p>
   * @public
   */
  actionIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSourceServerActionsRequest {
  /**
   * <p>Source server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Filters to apply when listing source server post migration custom actions.</p>
   * @public
   */
  filters?: SourceServerActionsRequestFilters | undefined;

  /**
   * <p>Maximum amount of items to return when listing source server post migration custom actions.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Next token to use when listing source server post migration custom actions.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Account ID to return when listing source server post migration custom actions.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface SourceServerActionDocument {
  /**
   * <p>Source server post migration custom action ID.</p>
   * @public
   */
  actionID?: string | undefined;

  /**
   * <p>Source server post migration custom action name.</p>
   * @public
   */
  actionName?: string | undefined;

  /**
   * <p>Source server post migration custom action document identifier.</p>
   * @public
   */
  documentIdentifier?: string | undefined;

  /**
   * <p>Source server post migration custom action order.</p>
   * @public
   */
  order?: number | undefined;

  /**
   * <p>Source server post migration custom action document version.</p>
   * @public
   */
  documentVersion?: string | undefined;

  /**
   * <p>Source server post migration custom action active status.</p>
   * @public
   */
  active?: boolean | undefined;

  /**
   * <p>Source server post migration custom action timeout in seconds.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>Source server post migration custom action must succeed for cutover.</p>
   * @public
   */
  mustSucceedForCutover?: boolean | undefined;

  /**
   * <p>Source server post migration custom action parameters.</p>
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]> | undefined;

  /**
   * <p>Source server post migration custom action external parameters.</p>
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter> | undefined;

  /**
   * <p>Source server post migration custom action description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Source server post migration custom action category.</p>
   * @public
   */
  category?: ActionCategory | undefined;
}

/**
 * @public
 */
export interface ListSourceServerActionsResponse {
  /**
   * <p>List of source server post migration custom actions.</p>
   * @public
   */
  items?: SourceServerActionDocument[] | undefined;

  /**
   * <p>Next token returned when listing source server post migration custom actions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface MarkAsArchivedRequest {
  /**
   * <p>Mark as archived by Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Mark as archived by Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface PauseReplicationRequest {
  /**
   * <p>Pause Replication Request source server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Pause Replication Request account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface PutSourceServerActionRequest {
  /**
   * <p>Source server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Source server post migration custom action name.</p>
   * @public
   */
  actionName: string | undefined;

  /**
   * <p>Source server post migration custom action document identifier.</p>
   * @public
   */
  documentIdentifier: string | undefined;

  /**
   * <p>Source server post migration custom action order.</p>
   * @public
   */
  order: number | undefined;

  /**
   * <p>Source server post migration custom action ID.</p>
   * @public
   */
  actionID: string | undefined;

  /**
   * <p>Source server post migration custom action document version.</p>
   * @public
   */
  documentVersion?: string | undefined;

  /**
   * <p>Source server post migration custom action active status.</p>
   * @public
   */
  active?: boolean | undefined;

  /**
   * <p>Source server post migration custom action timeout in seconds.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>Source server post migration custom action must succeed for cutover.</p>
   * @public
   */
  mustSucceedForCutover?: boolean | undefined;

  /**
   * <p>Source server post migration custom action parameters.</p>
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]> | undefined;

  /**
   * <p>Source server post migration custom action external parameters.</p>
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter> | undefined;

  /**
   * <p>Source server post migration custom action description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Source server post migration custom action category.</p>
   * @public
   */
  category?: ActionCategory | undefined;

  /**
   * <p>Source server post migration custom account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface RemoveSourceServerActionRequest {
  /**
   * <p>Source server ID of the post migration custom action to remove.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Source server post migration custom action ID to remove.</p>
   * @public
   */
  actionID: string | undefined;

  /**
   * <p>Source server post migration account ID.</p>
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
   * <p>Resume Replication Request source server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Resume Replication Request account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface RetryDataReplicationRequest {
  /**
   * <p>Retry data replication for Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Retry data replication for Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface StartCutoverRequest {
  /**
   * <p>Start Cutover by Source Server IDs.</p>
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Start Cutover by Tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Start Cutover by Account IDs</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface StartCutoverResponse {
  /**
   * <p>Start Cutover Job response.</p>
   * @public
   */
  job?: Job | undefined;
}

/**
 * @public
 */
export interface StartReplicationRequest {
  /**
   * <p>ID of source server on which to start replication.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Account ID on which to start replication.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface StartTestRequest {
  /**
   * <p>Start Test for Source Server IDs.</p>
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Start Test by Tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Start Test for Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface StartTestResponse {
  /**
   * <p>Start Test Job response.</p>
   * @public
   */
  job?: Job | undefined;
}

/**
 * @public
 */
export interface StopReplicationRequest {
  /**
   * <p>Stop Replication Request source server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Stop Replication Request account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface TerminateTargetInstancesRequest {
  /**
   * <p>Terminate Target instance by Source Server IDs.</p>
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Terminate Target instance by Tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Terminate Target instance by Account ID</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface TerminateTargetInstancesResponse {
  /**
   * <p>Terminate Target instance Job response.</p>
   * @public
   */
  job?: Job | undefined;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationRequest {
  /**
   * <p>Update Launch configuration by Source Server ID request.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Update Launch configuration name request.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Update Launch configuration launch disposition request.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * <p>Update Launch configuration Target instance right sizing request.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * <p>Update Launch configuration copy Private IP request.</p>
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * <p>Update Launch configuration copy Tags request.</p>
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * <p>Update Launch configuration licensing request.</p>
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * <p>Update Launch configuration boot mode request.</p>
   * @public
   */
  bootMode?: BootMode | undefined;

  /**
   * <p>Post Launch Actions to be executed on the Test or Cutover instance.</p>
   * @public
   */
  postLaunchActions?: PostLaunchActions | undefined;

  /**
   * <p>Enable map auto tagging.</p>
   * @public
   */
  enableMapAutoTagging?: boolean | undefined;

  /**
   * <p>Launch configuration map auto tagging MPE ID.</p>
   * @public
   */
  mapAutoTaggingMpeID?: string | undefined;

  /**
   * <p>Launch configuration map auto tagging key.</p>
   * @public
   */
  mapAutoTaggingKey?: string | undefined;

  /**
   * <p>Update Launch configuration Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationDefaultsRequest {
  /**
   * <p>Request to update the launch configuration defaults by Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to update the launch configuration defaults by Account ID.</p>
   * @public
   */
  accountID?: string | undefined;

  /**
   * <p>Disks up to this size, in GiB, use the small volume configuration, and larger disks use the large one. <code>0</code> means every disk uses the large one. If you omit it, the current value is kept.</p>
   * @public
   */
  smallVolumeMaxSize?: number | undefined;

  /**
   * <p>Volume configuration for disks up to <code>smallVolumeMaxSize</code>. If you omit it, the current one is kept. If you send it, it replaces the current one: fields you omit are cleared, and an empty configuration, <code>\{\}</code>, clears all of them.</p>
   * @public
   */
  smallVolumeConfiguration?: SourceServerVolumeConfiguration | undefined;

  /**
   * <p>Volume configuration for disks larger than <code>smallVolumeMaxSize</code>. If you omit it, the current one is kept. If you send it, it replaces the current one: fields you omit are cleared, and an empty configuration, <code>\{\}</code>, clears all of them.</p>
   * @public
   */
  largeVolumeConfiguration?: SourceServerVolumeConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationDefaultsResponse {
  /**
   * <p>Source Server ID of the launch configuration defaults.</p>
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * <p>Disks up to this size, in GiB, use the small volume configuration, and larger disks use the large one. <code>0</code> means every disk uses the large one.</p>
   * @public
   */
  smallVolumeMaxSize?: number | undefined;

  /**
   * <p>Volume configuration for disks up to <code>smallVolumeMaxSize</code>. Omitted when none of its fields is set.</p>
   * @public
   */
  smallVolumeConfiguration?: SourceServerVolumeConfiguration | undefined;

  /**
   * <p>Volume configuration for disks larger than <code>smallVolumeMaxSize</code>. Omitted when none of its fields is set.</p>
   * @public
   */
  largeVolumeConfiguration?: SourceServerVolumeConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationRequest {
  /**
   * <p>Update replication configuration Source Server ID request.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Update replication configuration name request.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Update replication configuration Staging Area subnet request.</p>
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * <p>Update replication configuration associate default Application Migration Service Security group request.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * <p>Update replication configuration Replication Server Security Groups IDs request.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * <p>Update replication configuration Replication Server instance type request.</p>
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * <p>Update replication configuration use dedicated Replication Server request.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * <p>Update replication configuration use default large Staging Disk type request.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * <p>Update replication configuration replicated disks request.</p>
   * @public
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[] | undefined;

  /**
   * <p>Update replication configuration EBS encryption request.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * <p>Update replication configuration EBS encryption key ARN request.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * <p>Update replication configuration bandwidth throttling request.</p>
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * <p>Update replication configuration data plane routing request.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * <p>Update replication configuration create Public IP request.</p>
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * <p>Update replication configuration Staging Area Tags request.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * <p>Update replication configuration use Fips Endpoint.</p>
   * @public
   */
  useFipsEndpoint?: boolean | undefined;

  /**
   * <p>Update replication configuration Account ID request.</p>
   * @public
   */
  accountID?: string | undefined;

  /**
   * <p>Update replication configuration internet protocol.</p>
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;

  /**
   * <p>Update replication configuration store snapshot on local zone.</p>
   * @public
   */
  storeSnapshotOnLocalZone?: boolean | undefined;

  /**
   * <p>Updates the location of replication snapshots when the staging area subnet is on an AWS Outpost. Set to <code>OUTPOST</code> to keep replication snapshots on the Outpost, or <code>REGION</code> to store them in the AWS Region. Required when the staging area subnet is on an Outpost, and not allowed otherwise.</p>
   * @public
   */
  outpostSnapshotLocation?: OutpostSnapshotLocation | undefined;

  /**
   * <p>Update replication configuration storage configuration.</p>
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSourceServerRequest {
  /**
   * <p>Update Source Server request account ID.</p>
   * @public
   */
  accountID?: string | undefined;

  /**
   * <p>Update Source Server request source server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Update Source Server request connector action.</p>
   * @public
   */
  connectorAction?: SourceServerConnectorAction | undefined;

  /**
   * <p>Update Source Server request user provided ID.</p>
   * @public
   */
  userProvidedID?: string | undefined;

  /**
   * <p>Update Source Server request FQDN for action framework.</p>
   * @public
   */
  fqdnForActionFramework?: string | undefined;

  /**
   * <p>Update Source Server request platform operating system.</p>
   * @public
   */
  platform?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSourceServerReplicationTypeRequest {
  /**
   * <p>ID of source server on which to update replication type.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Replication type to which to update source server.</p>
   * @public
   */
  replicationType: ReplicationType | undefined;

  /**
   * <p>Account ID on which to update replication type.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>S3 configuration for the source import file to be enriched.</p>
 * @public
 */
export interface EnrichmentSourceS3Configuration {
  /**
   * <p>The name of the S3 bucket containing the source import file.</p>
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * <p>The AWS account ID of the S3 bucket owner.</p>
   * @public
   */
  s3BucketOwner: string | undefined;

  /**
   * <p>The S3 key (path) for the source import file.</p>
   * @public
   */
  s3Key: string | undefined;
}

/**
 * @public
 */
export interface StartImportFileEnrichmentRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The S3 configuration specifying the source location of the import file to be enriched.</p>
   * @public
   */
  s3BucketSource: EnrichmentSourceS3Configuration | undefined;

  /**
   * <p>The S3 configuration specifying the target location where the enriched import file will be stored.</p>
   * @public
   */
  s3BucketTarget: EnrichmentTargetS3Configuration | undefined;

  /**
   * <p>The IP assignment strategy to use when enriching the import file. Can be STATIC or DYNAMIC.</p>
   * @public
   */
  ipAssignmentStrategy?: IpAssignmentStrategy | undefined;
}
