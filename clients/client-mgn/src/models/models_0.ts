// smithy-typescript generated code
import {
  ActionCategory,
  ApplicationHealthStatus,
  ApplicationProgressStatus,
  BootMode,
  ChangeServerLifeCycleStateSourceServerLifecycleState,
  DataReplicationErrorString,
  DataReplicationInitiationStepName,
  DataReplicationInitiationStepStatus,
  DataReplicationState,
  ExportStatus,
  FirstBoot,
  ImportErrorType,
  ImportStatus,
  InitiatedBy,
  JobLogEvent,
  JobStatus,
  JobType,
  LaunchDisposition,
  LaunchStatus,
  LifeCycleState,
  PostLaunchActionExecutionStatus,
  PostLaunchActionsDeploymentType,
  ReplicationConfigurationDataPlaneRouting,
  ReplicationConfigurationDefaultLargeStagingDiskType,
  ReplicationConfigurationEbsEncryption,
  ReplicationConfigurationReplicatedDiskStagingDiskType,
  ReplicationType,
  SsmDocumentType,
  SsmParameterStoreParameterType,
  TargetInstanceTypeRightSizingMethod,
  VolumeType,
  WaveHealthStatus,
  WaveProgressStatus,
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
 * <p>Import task summery waves.</p>
 * @public
 */
export interface ImportTaskSummaryWaves {
  /**
   * <p>Import task summery waves created count.</p>
   * @public
   */
  createdCount?: number | undefined;

  /**
   * <p>Import task summery waves modified count.</p>
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
export type SsmExternalParameter = SsmExternalParameter.DynamicPathMember | SsmExternalParameter.$UnknownMember;

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
   * <p>AWS Systems Manager's Document of the of the Job Post Launch Actions.</p>
   * @public
   */
  ssmDocument?: SsmDocument | undefined;

  /**
   * <p>AWS Systems Manager Document type.</p>
   * @public
   */
  ssmDocumentType?: SsmDocumentType | undefined;

  /**
   * <p>AWS Systems Manager Document's execution ID of the of the Job Post Launch Actions.</p>
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
 * <p>Post Launch Actions to executed on the Test or Cutover instance.</p>
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
   * <p>Request to configure  data plane routing during Replication Settings template creation.</p>
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
   * <p>Lifecycle Test failed API call date and time.</p>
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
   * <p>Lifecycle added to service data and time.</p>
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
   * <p>Request to filter Source Servers list by Accoun ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSourceServersResponse {
  /**
   * <p>Request to filter Source Servers list by item.</p>
   * @public
   */
  items?: SourceServer[] | undefined;

  /**
   * <p>Request to filter Source Servers next token.</p>
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
   * <p>Post Launch Actions to executed on the Test or Cutover instance.</p>
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
   * <p>Post Launch Actions to executed on the Test or Cutover instance.</p>
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
   * <p>Update Launch configuration Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
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
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Tag resource by ARN.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tag resource by Tags.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>Untag resource by ARN.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Untag resource by Keys.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVcenterClientRequest {
  /**
   * <p>ID of resource to be deleted.</p>
   * @public
   */
  vcenterClientID: string | undefined;
}

/**
 * @public
 */
export interface DescribeVcenterClientsRequest {
  /**
   * <p>Maximum results to be returned in DescribeVcenterClients.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Next pagination token to be provided for DescribeVcenterClients.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>vCenter client.</p>
 * @public
 */
export interface VcenterClient {
  /**
   * <p>ID of vCenter client.</p>
   * @public
   */
  vcenterClientID?: string | undefined;

  /**
   * <p>Arn of vCenter client.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Hostname of vCenter client .</p>
   * @public
   */
  hostname?: string | undefined;

  /**
   * <p>Vcenter UUID of vCenter client.</p>
   * @public
   */
  vcenterUUID?: string | undefined;

  /**
   * <p>Datacenter name of vCenter client.</p>
   * @public
   */
  datacenterName?: string | undefined;

  /**
   * <p>Last seen time of vCenter client.</p>
   * @public
   */
  lastSeenDatetime?: string | undefined;

  /**
   * <p>Tags for Source Server of vCenter client.</p>
   * @public
   */
  sourceServerTags?: Record<string, string> | undefined;

  /**
   * <p>Tags for vCenter client.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeVcenterClientsResponse {
  /**
   * <p>List of items returned by DescribeVcenterClients.</p>
   * @public
   */
  items?: VcenterClient[] | undefined;

  /**
   * <p>Next pagination token returned from DescribeVcenterClients.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ArchiveWaveRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>Wave aggregated status.</p>
 * @public
 */
export interface WaveAggregatedStatus {
  /**
   * <p>Wave aggregated status last update dateTime.</p>
   * @public
   */
  lastUpdateDateTime?: string | undefined;

  /**
   * <p>DateTime marking when the first source server in the wave started replication.</p>
   * @public
   */
  replicationStartedDateTime?: string | undefined;

  /**
   * <p>Wave aggregated status health status.</p>
   * @public
   */
  healthStatus?: WaveHealthStatus | undefined;

  /**
   * <p>Wave aggregated status progress status.</p>
   * @public
   */
  progressStatus?: WaveProgressStatus | undefined;

  /**
   * <p>Wave aggregated status total applications amount.</p>
   * @public
   */
  totalApplications?: number | undefined;
}

/**
 * @public
 */
export interface Wave {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID?: string | undefined;

  /**
   * <p>Wave ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Wave name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Wave description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Wave archival status.</p>
   * @public
   */
  isArchived?: boolean | undefined;

  /**
   * <p>Wave aggregated status.</p>
   * @public
   */
  waveAggregatedStatus?: WaveAggregatedStatus | undefined;

  /**
   * <p>Wave creation dateTime.</p>
   * @public
   */
  creationDateTime?: string | undefined;

  /**
   * <p>Wave last modified dateTime.</p>
   * @public
   */
  lastModifiedDateTime?: string | undefined;

  /**
   * <p>Wave tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationsRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Application IDs list.</p>
   * @public
   */
  applicationIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
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
   * <p>Wave name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Wave description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Wave tags.</p>
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
export interface DeleteWaveRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Account ID.</p>
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
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Application IDs list.</p>
   * @public
   */
  applicationIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateApplicationsResponse {}

/**
 * <p>Waves list filters.</p>
 * @public
 */
export interface ListWavesRequestFilters {
  /**
   * <p>Filter waves list by wave ID.</p>
   * @public
   */
  waveIDs?: string[] | undefined;

  /**
   * <p>Filter waves list by archival status.</p>
   * @public
   */
  isArchived?: boolean | undefined;
}

/**
 * @public
 */
export interface ListWavesRequest {
  /**
   * <p>Waves list filters.</p>
   * @public
   */
  filters?: ListWavesRequestFilters | undefined;

  /**
   * <p>Maximum results to return when listing waves.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Request next token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Request account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface ListWavesResponse {
  /**
   * <p>Waves list.</p>
   * @public
   */
  items?: Wave[] | undefined;

  /**
   * <p>Response next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UnarchiveWaveRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWaveRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Wave name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Wave description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}
