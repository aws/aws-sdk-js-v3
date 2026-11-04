// smithy-typescript generated code
import type {
  AgentStatus,
  BatchDeleteConfigurationTaskStatus,
  BatchDeleteImportDataErrorCode,
  ConfigurationItemType,
  ContinuousExportStatus,
  DataSource,
  DeleteAgentErrorCode,
  DeletionConfigurationItemType,
  ExportDataFormat,
  ExportStatus,
  FileClassification,
  ImportStatus,
  ImportTaskFilterName,
  OfferingClass,
  OrderString,
  PurchasingOption,
  Tenancy,
  TermLength,
} from "./enums";

/**
 * Information about agents that were instructed to start collecting data. Information includes the agent ID, a description of the operation, and whether the agent configuration was updated.
 *
 * @public
 */
export interface AgentConfigurationStatus {
  /**
   * The agent ID.
   *
   * @public
   */
  agentId?: string | undefined;

  /**
   * Information about the status of the `StartDataCollection` and `StopDataCollection` operations. The system has recorded the data collection operation. The agent receives this command the next time it polls for a new command.
   *
   * @public
   */
  operationSucceeded?: boolean | undefined;

  /**
   * A description of the operation performed.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Network details about the host where the agent/collector resides.
 *
 * @public
 */
export interface AgentNetworkInfo {
  /**
   * The IP address for the host where the agent/collector resides.
   *
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * The MAC address for the host where the agent/collector resides.
   *
   * @public
   */
  macAddress?: string | undefined;
}

/**
 * Information about agents associated with the user’s Amazon Web Services account. Information includes agent IDs, IP addresses, media access control (MAC) addresses, agent or collector status, hostname where the agent resides, and agent version for each agent.
 *
 * @public
 */
export interface AgentInfo {
  /**
   * The agent or collector ID.
   *
   * @public
   */
  agentId?: string | undefined;

  /**
   * The name of the host where the agent or collector resides. The host can be a server or virtual machine.
   *
   * @public
   */
  hostName?: string | undefined;

  /**
   * Network details about the host where the agent or collector resides.
   *
   * @public
   */
  agentNetworkInfoList?: AgentNetworkInfo[] | undefined;

  /**
   * The ID of the connector.
   *
   * @public
   */
  connectorId?: string | undefined;

  /**
   * The agent or collector version.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The health of the agent.
   *
   * @public
   */
  health?: AgentStatus | undefined;

  /**
   * Time since agent health was reported.
   *
   * @public
   */
  lastHealthPingTime?: string | undefined;

  /**
   * Status of the collection process for an agent.
   *
   * @public
   */
  collectionStatus?: string | undefined;

  /**
   * Type of agent.
   *
   * @public
   */
  agentType?: string | undefined;

  /**
   * Agent's first registration timestamp in UTC.
   *
   * @public
   */
  registeredTime?: string | undefined;
}

/**
 * @public
 */
export interface AssociateConfigurationItemsToApplicationRequest {
  /**
   * The configuration ID of an application with which items are to be associated.
   *
   * @public
   */
  applicationConfigurationId: string | undefined;

  /**
   * The ID of each configuration item to be associated with an application.
   *
   * @public
   */
  configurationIds: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateConfigurationItemsToApplicationResponse {}

/**
 * An object representing the agent or data collector to be deleted along with the optional configurations for error handling.
 *
 * @public
 */
export interface DeleteAgent {
  /**
   * The ID of the agent or data collector to delete.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * Optional flag used to force delete an agent or data collector. It is needed to delete any agent in HEALTHY/UNHEALTHY/RUNNING status. Note that deleting an agent that is actively reporting health causes it to be re-registered with a different agent ID after data collector re-connects with Amazon Web Services.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface BatchDeleteAgentsRequest {
  /**
   * The list of agents to delete.
   *
   * @public
   */
  deleteAgents: DeleteAgent[] | undefined;
}

/**
 * An object representing the agent or data collector that failed to delete, each containing agentId, errorMessage, and errorCode.
 *
 * @public
 */
export interface BatchDeleteAgentError {
  /**
   * The ID of the agent or data collector to delete.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The description of the error that occurred for the delete failed agent.
   *
   * @public
   */
  errorMessage: string | undefined;

  /**
   * The type of error that occurred for the delete failed agent. Valid status are: AGENT_IN_USE | NOT_FOUND | INTERNAL_SERVER_ERROR.
   *
   * @public
   */
  errorCode: DeleteAgentErrorCode | undefined;
}

/**
 * @public
 */
export interface BatchDeleteAgentsResponse {
  /**
   * A list of agent IDs that failed to delete during the deletion task, each paired with an error message.
   *
   * @public
   */
  errors?: BatchDeleteAgentError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteImportDataRequest {
  /**
   * The IDs for the import tasks that you want to delete.
   *
   * @public
   */
  importTaskIds: string[] | undefined;

  /**
   * Set to `true` to remove the deleted import task from DescribeImportTasks.
   *
   * @public
   */
  deleteHistory?: boolean | undefined;
}

/**
 * Error messages returned for each import task that you deleted as a response for this command.
 *
 * @public
 */
export interface BatchDeleteImportDataError {
  /**
   * The unique import ID associated with the error that occurred.
   *
   * @public
   */
  importTaskId?: string | undefined;

  /**
   * The type of error that occurred for a specific import task.
   *
   * @public
   */
  errorCode?: BatchDeleteImportDataErrorCode | undefined;

  /**
   * The description of the error that occurred for a specific import task.
   *
   * @public
   */
  errorDescription?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteImportDataResponse {
  /**
   * Error messages returned for each import task that you deleted as a response for this command.
   *
   * @public
   */
  errors?: BatchDeleteImportDataError[] | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * The name of the application to be created.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the application to be created.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the migration wave of the application to be created.
   *
   * @public
   */
  wave?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * The configuration ID of an application to be created.
   *
   * @public
   */
  configurationId?: string | undefined;
}

/**
 * Metadata that help you categorize IT assets.
 *
 * > **Important:** Do not store sensitive information (like personal data) in tags.
 *
 * @public
 */
export interface Tag {
  /**
   * The type of tag on which to filter.
   *
   * @public
   */
  key: string | undefined;

  /**
   * A value for a tag key on which to filter.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateTagsRequest {
  /**
   * A list of configuration items that you want to tag.
   *
   * @public
   */
  configurationIds: string[] | undefined;

  /**
   * Tags that you want to associate with one or more configuration items. Specify the tags that you want to create in a *key*-*value* format. For example:
   *
   * `\{"key": "serverType", "value": "webServer"\}`
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTagsResponse {}

/**
 * @public
 */
export interface DeleteApplicationsRequest {
  /**
   * Configuration ID of an application to be deleted.
   *
   * @public
   */
  configurationIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationsResponse {}

/**
 * @public
 */
export interface DeleteTagsRequest {
  /**
   * A list of configuration items with tags that you want to delete.
   *
   * @public
   */
  configurationIds: string[] | undefined;

  /**
   * Tags that you want to delete from one or more configuration items. Specify the tags that you want to delete in a *key*-*value* format. For example:
   *
   * `\{"key": "serverType", "value": "webServer"\}`
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DeleteTagsResponse {}

/**
 * A filter that can use conditional operators.
 *
 * For more information about filters, see [Querying Discovered Configuration Items](https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html) in the *Amazon Web Services Application Discovery Service User Guide*.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A string value on which to filter. For example, if you choose the `destinationServer.osVersion` filter name, you could specify `Ubuntu` for the value.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * A conditional operator. The following operators are valid: EQUALS, NOT_EQUALS, CONTAINS, NOT_CONTAINS. If you specify multiple filters, the system utilizes all filters as though concatenated by *AND*. If you specify multiple values for a particular filter, the system differentiates the values using *OR*. Calling either *DescribeConfigurations* or *ListConfigurations* returns attributes of matching configuration items.
   *
   * @public
   */
  condition: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgentsRequest {
  /**
   * The agent or the collector IDs for which you want information. If you specify no IDs, the system returns information about all agents/collectors associated with your user.
   *
   * @public
   */
  agentIds?: string[] | undefined;

  /**
   * You can filter the request using various logical operators and a *key*-*value* format. For example:
   *
   * `\{"key": "collectionStatus", "value": "STARTED"\}`
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The total number of agents/collectors to return in a single page of output. The maximum value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token to retrieve the next set of results. For example, if you previously specified 100 IDs for `DescribeAgentsRequest$agentIds` but set `DescribeAgentsRequest$maxResults` to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgentsResponse {
  /**
   * Lists agents or the collector by ID or lists all agents/collectors associated with your user, if you did not specify an agent/collector ID. The output includes agent/collector IDs, IP addresses, media access control (MAC) addresses, agent/collector health, host name where the agent/collector resides, and the version number of each agent/collector.
   *
   * @public
   */
  agentsInfo?: AgentInfo[] | undefined;

  /**
   * Token to retrieve the next set of results. For example, if you specified 100 IDs for `DescribeAgentsRequest$agentIds` but set `DescribeAgentsRequest$maxResults` to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBatchDeleteConfigurationTaskRequest {
  /**
   * The ID of the task to delete.
   *
   * @public
   */
  taskId: string | undefined;
}

/**
 * A configuration ID paired with a warning message.
 *
 * @public
 */
export interface DeletionWarning {
  /**
   * The unique identifier of the configuration that produced a warning.
   *
   * @public
   */
  configurationId?: string | undefined;

  /**
   * The integer warning code associated with the warning message.
   *
   * @public
   */
  warningCode?: number | undefined;

  /**
   * A descriptive message of the warning the associated configuration ID produced.
   *
   * @public
   */
  warningText?: string | undefined;
}

/**
 * A configuration ID paired with an error message.
 *
 * @public
 */
export interface FailedConfiguration {
  /**
   * The unique identifier of the configuration the failed to delete.
   *
   * @public
   */
  configurationId?: string | undefined;

  /**
   * The integer error code associated with the error message.
   *
   * @public
   */
  errorStatusCode?: number | undefined;

  /**
   * A descriptive message indicating why the associated configuration failed to delete.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * A metadata object that represents the deletion task being executed.
 *
 * @public
 */
export interface BatchDeleteConfigurationTask {
  /**
   * The deletion task's unique identifier.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The current execution status of the deletion task. Valid status are: INITIALIZING | VALIDATING | DELETING | COMPLETED | FAILED.
   *
   * @public
   */
  status?: BatchDeleteConfigurationTaskStatus | undefined;

  /**
   * An epoch seconds timestamp (UTC) of when the deletion task was started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * An epoch seconds timestamp (UTC) of when the deletion task was completed or failed.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The type of configuration item to delete. Supported types are: SERVER.
   *
   * @public
   */
  configurationType?: DeletionConfigurationItemType | undefined;

  /**
   * The list of configuration IDs that were originally requested to be deleted by the deletion task.
   *
   * @public
   */
  requestedConfigurations?: string[] | undefined;

  /**
   * The list of configuration IDs that were successfully deleted by the deletion task.
   *
   * @public
   */
  deletedConfigurations?: string[] | undefined;

  /**
   * A list of configuration IDs that failed to delete during the deletion task, each paired with an error message.
   *
   * @public
   */
  failedConfigurations?: FailedConfiguration[] | undefined;

  /**
   * A list of configuration IDs that produced warnings regarding their deletion, paired with a warning message.
   *
   * @public
   */
  deletionWarnings?: DeletionWarning[] | undefined;
}

/**
 * @public
 */
export interface DescribeBatchDeleteConfigurationTaskResponse {
  /**
   * The `BatchDeleteConfigurationTask` that represents the deletion task being executed.
   *
   * @public
   */
  task?: BatchDeleteConfigurationTask | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationsRequest {
  /**
   * One or more configuration IDs.
   *
   * @public
   */
  configurationIds: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationsResponse {
  /**
   * A key in the response map. The value is an array of data.
   *
   * @public
   */
  configurations?: Record<string, string>[] | undefined;
}

/**
 * @public
 */
export interface DescribeContinuousExportsRequest {
  /**
   * The unique IDs assigned to the exports.
   *
   * @public
   */
  exportIds?: string[] | undefined;

  /**
   * A number between 1 and 100 specifying the maximum number of continuous export descriptions returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token from the previous call to `DescribeExportTasks`.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A list of continuous export descriptions.
 *
 * @public
 */
export interface ContinuousExportDescription {
  /**
   * The unique ID assigned to this export.
   *
   * @public
   */
  exportId?: string | undefined;

  /**
   * Describes the status of the export. Can be one of the following values:
   *
   * - START_IN_PROGRESS - setting up resources to start continuous export.
   * - START_FAILED - an error occurred setting up continuous export. To recover, call start-continuous-export again.
   * - ACTIVE - data is being exported to the customer bucket.
   * - ERROR - an error occurred during export. To fix the issue, call stop-continuous-export and start-continuous-export.
   * - STOP_IN_PROGRESS - stopping the export.
   * - STOP_FAILED - an error occurred stopping the export. To recover, call stop-continuous-export again.
   * - INACTIVE - the continuous export has been stopped. Data is no longer being exported to the customer bucket.
   *
   * @public
   */
  status?: ContinuousExportStatus | undefined;

  /**
   * Contains information about any errors that have occurred. This data type can have the following values:
   *
   * - ACCESS_DENIED - You don’t have permission to start Data Exploration in Amazon Athena. Contact your Amazon Web Services administrator for help. For more information, see [Setting Up Amazon Web Services Application Discovery Service](http://docs.aws.amazon.com/application-discovery/latest/userguide/setting-up.html) in the Application Discovery Service User Guide.
   * - DELIVERY_STREAM_LIMIT_FAILURE - You reached the limit for Amazon Kinesis Data Firehose delivery streams. Reduce the number of streams or request a limit increase and try again. For more information, see [Kinesis Data Streams Limits](http://docs.aws.amazon.com/streams/latest/dev/service-sizes-and-limits.html) in the Amazon Kinesis Data Streams Developer Guide.
   * - FIREHOSE_ROLE_MISSING - The Data Exploration feature is in an error state because your user is missing the Amazon Web ServicesApplicationDiscoveryServiceFirehose role. Turn on Data Exploration in Amazon Athena and try again. For more information, see [Creating the Amazon Web ServicesApplicationDiscoveryServiceFirehose Role](https://docs.aws.amazon.com/application-discovery/latest/userguide/security-iam-awsmanpol.html#security-iam-awsmanpol-create-firehose-role) in the Application Discovery Service User Guide.
   * - FIREHOSE_STREAM_DOES_NOT_EXIST - The Data Exploration feature is in an error state because your user is missing one or more of the Kinesis data delivery streams.
   * - INTERNAL_FAILURE - The Data Exploration feature is in an error state because of an internal failure. Try again later. If this problem persists, contact Amazon Web Services Support.
   * - LAKE_FORMATION_ACCESS_DENIED - You don't have sufficient lake formation permissions to start continuous export. For more information, see [Upgrading Amazon Web Services Glue Data Permissions to the Amazon Web Services Lake Formation Model](http://docs.aws.amazon.com/lake-formation/latest/dg/upgrade-glue-lake-formation.html) in the Amazon Web Services *Lake Formation Developer Guide*.
   *
   *   You can use one of the following two ways to resolve this issue.
   *
   *   1. If you don’t want to use the Lake Formation permission model, you can change the default Data Catalog settings to use only Amazon Web Services Identity and Access Management (IAM) access control for new databases. For more information, see [Change Data Catalog Settings](https://docs.aws.amazon.com/lake-formation/latest/dg/getting-started-setup.html#setup-change-cat-settings) in the *Lake Formation Developer Guide*.
   *   2. You can give the service-linked IAM roles AWSServiceRoleForApplicationDiscoveryServiceContinuousExport and AWSApplicationDiscoveryServiceFirehose the required Lake Formation permissions. For more information, see [Granting Database Permissions](https://docs.aws.amazon.com/lake-formation/latest/dg/granting-database-permissions.html) in the *Lake Formation Developer Guide*.
   *
   *      1. AWSServiceRoleForApplicationDiscoveryServiceContinuousExport - Grant database creator permissions, which gives the role database creation ability and implicit permissions for any created tables. For more information, see [Implicit Lake Formation Permissions](https://docs.aws.amazon.com/lake-formation/latest/dg/implicit-permissions.html) in the *Lake Formation Developer Guide*.
   *      2. AWSApplicationDiscoveryServiceFirehose - Grant describe permissions for all tables in the database.
   * - S3_BUCKET_LIMIT_FAILURE - You reached the limit for Amazon S3 buckets. Reduce the number of S3 buckets or request a limit increase and try again. For more information, see [Bucket Restrictions and Limitations](http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html) in the Amazon Simple Storage Service Developer Guide.
   * - S3_NOT_SIGNED_UP - Your account is not signed up for the Amazon S3 service. You must sign up before you can use Amazon S3. You can sign up at the following URL: [https://aws.amazon.com/s3](https://aws.amazon.com/s3).
   *
   * @public
   */
  statusDetail?: string | undefined;

  /**
   * The name of the s3 bucket where the export data parquet files are stored.
   *
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * The timestamp representing when the continuous export was started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The timestamp that represents when this continuous export was stopped.
   *
   * @public
   */
  stopTime?: Date | undefined;

  /**
   * The type of data collector used to gather this data (currently only offered for AGENT).
   *
   * @public
   */
  dataSource?: DataSource | undefined;

  /**
   * An object which describes how the data is stored.
   *
   * - `databaseName` - the name of the Glue database used to store the schema.
   *
   * @public
   */
  schemaStorageConfig?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeContinuousExportsResponse {
  /**
   * A list of continuous export descriptions.
   *
   * @public
   */
  descriptions?: ContinuousExportDescription[] | undefined;

  /**
   * The token from the previous call to `DescribeExportTasks`.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeExportConfigurationsRequest {
  /**
   * A list of continuous export IDs to search for.
   *
   * @public
   */
  exportIds?: string[] | undefined;

  /**
   * A number between 1 and 100 specifying the maximum number of continuous export descriptions returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token from the previous call to describe-export-tasks.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information regarding the export status of discovered data. The value is an array of objects.
 *
 * @public
 */
export interface ExportInfo {
  /**
   * A unique identifier used to query an export.
   *
   * @public
   */
  exportId: string | undefined;

  /**
   * The status of the data export job.
   *
   * @public
   */
  exportStatus: ExportStatus | undefined;

  /**
   * A status message provided for API callers.
   *
   * @public
   */
  statusMessage: string | undefined;

  /**
   * A URL for an Amazon S3 bucket where you can review the exported data. The URL is displayed only if the export succeeded.
   *
   * @public
   */
  configurationsDownloadUrl?: string | undefined;

  /**
   * The time that the data export was initiated.
   *
   * @public
   */
  exportRequestTime: Date | undefined;

  /**
   * If true, the export of agent information exceeded the size limit for a single export and the exported data is incomplete for the requested time range. To address this, select a smaller time range for the export by using `startDate` and `endDate`.
   *
   * @public
   */
  isTruncated?: boolean | undefined;

  /**
   * The value of `startTime` parameter in the `StartExportTask` request. If no `startTime` was requested, this result does not appear in `ExportInfo`.
   *
   * @public
   */
  requestedStartTime?: Date | undefined;

  /**
   * The `endTime` used in the `StartExportTask` request. If no `endTime` was requested, this result does not appear in `ExportInfo`.
   *
   * @public
   */
  requestedEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeExportConfigurationsResponse {
  /**
   * @public
   */
  exportsInfo?: ExportInfo[] | undefined;

  /**
   * The token from the previous call to describe-export-tasks.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Used to select which agent's data is to be exported. A single agent ID may be selected for export using the [StartExportTask](http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html) action.
 *
 * @public
 */
export interface ExportFilter {
  /**
   * A single `ExportFilter` name. Supported filters: `agentIds`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A single agent ID for a Discovery Agent. An agent ID can be found using the [DescribeAgents](http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeAgents.html) action. Typically an ADS agent ID is in the form `o-0123456789abcdef0`.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * Supported condition: `EQUALS`
   *
   * @public
   */
  condition: string | undefined;
}

/**
 * @public
 */
export interface DescribeExportTasksRequest {
  /**
   * One or more unique identifiers used to query the status of an export request.
   *
   * @public
   */
  exportIds?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `AgentId` - ID of the agent whose collected data will be exported
   *
   * @public
   */
  filters?: ExportFilter[] | undefined;

  /**
   * The maximum number of volume results returned by `DescribeExportTasks` in paginated output. When this parameter is used, `DescribeExportTasks` only returns `maxResults` results in a single page along with a `nextToken` response element.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `DescribeExportTasks` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeExportTasksResponse {
  /**
   * Contains one or more sets of export request details. When the status of a request is `SUCCEEDED`, the response includes a URL for an Amazon S3 bucket where you can view the data in a CSV file.
   *
   * @public
   */
  exportsInfo?: ExportInfo[] | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeExportTasks` request. When the results of a `DescribeExportTasks` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.
 *
 * > **Note:** When filtering by import status, all other filter values are ignored.
 *
 * @public
 */
export interface ImportTaskFilter {
  /**
   * The name, status, or import task ID for a specific import task.
   *
   * @public
   */
  name?: ImportTaskFilterName | undefined;

  /**
   * An array of strings that you can provide to match against a specific name, status, or import task ID to filter the results for your import task queries.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeImportTasksRequest {
  /**
   * An array of name-value pairs that you provide to filter the results for the `DescribeImportTask` request to a specific subset of results. Currently, wildcard values aren't supported for filters.
   *
   * @public
   */
  filters?: ImportTaskFilter[] | undefined;

  /**
   * The maximum number of results that you want this request to return, up to 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to request a specific page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
 *
 * @public
 */
export interface ImportTask {
  /**
   * The unique ID for a specific import task. These IDs aren't globally unique, but they are unique within an Amazon Web Services account.
   *
   * @public
   */
  importTaskId?: string | undefined;

  /**
   * A unique token used to prevent the same import request from occurring more than once. If you didn't provide a token, a token was automatically generated when the import task request was sent.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * A descriptive name for an import task. You can use this name to filter future requests related to this import task, such as identifying applications and servers that were included in this import task. We recommend that you use a meaningful name for each import task.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The URL for your import file that you've uploaded to Amazon S3.
   *
   * @public
   */
  importUrl?: string | undefined;

  /**
   * The status of the import task. An import can have the status of `IMPORT_COMPLETE` and still have some records fail to import from the overall request. More information can be found in the downloadable archive defined in the `errorsAndFailedEntriesZip` field, or in the Migration Hub management console.
   *
   * @public
   */
  status?: ImportStatus | undefined;

  /**
   * The time that the import task request was made, presented in the Unix time stamp format.
   *
   * @public
   */
  importRequestTime?: Date | undefined;

  /**
   * The time that the import task request finished, presented in the Unix time stamp format.
   *
   * @public
   */
  importCompletionTime?: Date | undefined;

  /**
   * The time that the import task request was deleted, presented in the Unix time stamp format.
   *
   * @public
   */
  importDeletedTime?: Date | undefined;

  /**
   * The type of file detected by the import task.
   *
   * @public
   */
  fileClassification?: FileClassification | undefined;

  /**
   * The total number of server records in the import file that were successfully imported.
   *
   * @public
   */
  serverImportSuccess?: number | undefined;

  /**
   * The total number of server records in the import file that failed to be imported.
   *
   * @public
   */
  serverImportFailure?: number | undefined;

  /**
   * The total number of application records in the import file that were successfully imported.
   *
   * @public
   */
  applicationImportSuccess?: number | undefined;

  /**
   * The total number of application records in the import file that failed to be imported.
   *
   * @public
   */
  applicationImportFailure?: number | undefined;

  /**
   * A link to a compressed archive folder (in the ZIP format) that contains an error log and a file of failed records. You can use these two files to quickly identify records that failed, why they failed, and correct those records. Afterward, you can upload the corrected file to your Amazon S3 bucket and create another import task request.
   *
   * This field also includes authorization information so you can confirm the authenticity of the compressed archive before you download it.
   *
   * If some records failed to be imported we recommend that you correct the records in the failed entries file and then imports that failed entries file. This prevents you from having to correct and update the larger original file and attempt importing it again.
   *
   * @public
   */
  errorsAndFailedEntriesZip?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImportTasksResponse {
  /**
   * The token to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A returned array of import tasks that match any applied filters, up to the specified number of maximum results.
   *
   * @public
   */
  tasks?: ImportTask[] | undefined;
}

/**
 * The tag filter. Valid names are: `tagKey`, `tagValue`, `configurationId`.
 *
 * @public
 */
export interface TagFilter {
  /**
   * A name of the tag filter.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Values for the tag filter.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeTagsRequest {
  /**
   * You can filter the list using a *key*-*value* format. You can separate these items by using logical operators. Allowed filters include `tagKey`, `tagValue`, and `configurationId`.
   *
   * @public
   */
  filters?: TagFilter[] | undefined;

  /**
   * The total number of items to return in a single page of output. The maximum value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Tags for a configuration item. Tags are metadata that help you categorize IT assets.
 *
 * @public
 */
export interface ConfigurationTag {
  /**
   * A type of IT asset to tag.
   *
   * @public
   */
  configurationType?: ConfigurationItemType | undefined;

  /**
   * The configuration ID for the item to tag. You can specify a list of keys and values.
   *
   * @public
   */
  configurationId?: string | undefined;

  /**
   * A type of tag on which to filter. For example, *serverType*.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * A value on which to filter. For example *key = serverType* and *value = web server*.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The time the configuration tag was created in Coordinated Universal Time (UTC).
   *
   * @public
   */
  timeOfCreation?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTagsResponse {
  /**
   * Depending on the input, this is a list of configuration items tagged with a specific tag, or a list of tags for a specific configuration item.
   *
   * @public
   */
  tags?: ConfigurationTag[] | undefined;

  /**
   * The call returns a token. Use this token to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConfigurationItemsFromApplicationRequest {
  /**
   * Configuration ID of an application from which each item is disassociated.
   *
   * @public
   */
  applicationConfigurationId: string | undefined;

  /**
   * Configuration ID of each item to be disassociated from an application.
   *
   * @public
   */
  configurationIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateConfigurationItemsFromApplicationResponse {}

/**
 * @public
 */
export interface ExportConfigurationsResponse {
  /**
   * A unique identifier that you can use to query the export status.
   *
   * @public
   */
  exportId?: string | undefined;
}

/**
 * @public
 */
export interface GetDiscoverySummaryRequest {}

/**
 * The inventory data for installed Agentless Collector collectors.
 *
 * @public
 */
export interface CustomerAgentlessCollectorInfo {
  /**
   * The number of active Agentless Collector collectors.
   *
   * @public
   */
  activeAgentlessCollectors: number | undefined;

  /**
   * The number of healthy Agentless Collector collectors.
   *
   * @public
   */
  healthyAgentlessCollectors: number | undefined;

  /**
   * The number of deny-listed Agentless Collector collectors.
   *
   * @public
   */
  denyListedAgentlessCollectors: number | undefined;

  /**
   * The number of Agentless Collector collectors with `SHUTDOWN` status.
   *
   * @public
   */
  shutdownAgentlessCollectors: number | undefined;

  /**
   * The number of unhealthy Agentless Collector collectors.
   *
   * @public
   */
  unhealthyAgentlessCollectors: number | undefined;

  /**
   * The total number of Agentless Collector collectors.
   *
   * @public
   */
  totalAgentlessCollectors: number | undefined;

  /**
   * The number of unknown Agentless Collector collectors.
   *
   * @public
   */
  unknownAgentlessCollectors: number | undefined;
}

/**
 * Inventory data for installed discovery agents.
 *
 * @public
 */
export interface CustomerAgentInfo {
  /**
   * Number of active discovery agents.
   *
   * @public
   */
  activeAgents: number | undefined;

  /**
   * Number of healthy discovery agents
   *
   * @public
   */
  healthyAgents: number | undefined;

  /**
   * Number of blacklisted discovery agents.
   *
   * @public
   */
  blackListedAgents: number | undefined;

  /**
   * Number of discovery agents with status SHUTDOWN.
   *
   * @public
   */
  shutdownAgents: number | undefined;

  /**
   * Number of unhealthy discovery agents.
   *
   * @public
   */
  unhealthyAgents: number | undefined;

  /**
   * Total number of discovery agents.
   *
   * @public
   */
  totalAgents: number | undefined;

  /**
   * Number of unknown discovery agents.
   *
   * @public
   */
  unknownAgents: number | undefined;
}

/**
 * Inventory data for installed discovery connectors.
 *
 * @public
 */
export interface CustomerConnectorInfo {
  /**
   * Number of active discovery connectors.
   *
   * @public
   */
  activeConnectors: number | undefined;

  /**
   * Number of healthy discovery connectors.
   *
   * @public
   */
  healthyConnectors: number | undefined;

  /**
   * Number of blacklisted discovery connectors.
   *
   * @public
   */
  blackListedConnectors: number | undefined;

  /**
   * Number of discovery connectors with status SHUTDOWN,
   *
   * @public
   */
  shutdownConnectors: number | undefined;

  /**
   * Number of unhealthy discovery connectors.
   *
   * @public
   */
  unhealthyConnectors: number | undefined;

  /**
   * Total number of discovery connectors.
   *
   * @public
   */
  totalConnectors: number | undefined;

  /**
   * Number of unknown discovery connectors.
   *
   * @public
   */
  unknownConnectors: number | undefined;
}

/**
 * The inventory data for installed Migration Evaluator collectors.
 *
 * @public
 */
export interface CustomerMeCollectorInfo {
  /**
   * The number of active Migration Evaluator collectors.
   *
   * @public
   */
  activeMeCollectors: number | undefined;

  /**
   * The number of healthy Migration Evaluator collectors.
   *
   * @public
   */
  healthyMeCollectors: number | undefined;

  /**
   * The number of deny-listed Migration Evaluator collectors.
   *
   * @public
   */
  denyListedMeCollectors: number | undefined;

  /**
   * The number of Migration Evaluator collectors with `SHUTDOWN` status.
   *
   * @public
   */
  shutdownMeCollectors: number | undefined;

  /**
   * The number of unhealthy Migration Evaluator collectors.
   *
   * @public
   */
  unhealthyMeCollectors: number | undefined;

  /**
   * The total number of Migration Evaluator collectors.
   *
   * @public
   */
  totalMeCollectors: number | undefined;

  /**
   * The number of unknown Migration Evaluator collectors.
   *
   * @public
   */
  unknownMeCollectors: number | undefined;
}

/**
 * @public
 */
export interface GetDiscoverySummaryResponse {
  /**
   * The number of servers discovered.
   *
   * @public
   */
  servers?: number | undefined;

  /**
   * The number of applications discovered.
   *
   * @public
   */
  applications?: number | undefined;

  /**
   * The number of servers mapped to applications.
   *
   * @public
   */
  serversMappedToApplications?: number | undefined;

  /**
   * The number of servers mapped to tags.
   *
   * @public
   */
  serversMappedtoTags?: number | undefined;

  /**
   * Details about discovered agents, including agent status and health.
   *
   * @public
   */
  agentSummary?: CustomerAgentInfo | undefined;

  /**
   * Details about discovered connectors, including connector status and health.
   *
   * @public
   */
  connectorSummary?: CustomerConnectorInfo | undefined;

  /**
   * Details about Migration Evaluator collectors, including collector status and health.
   *
   * @public
   */
  meCollectorSummary?: CustomerMeCollectorInfo | undefined;

  /**
   * Details about Agentless Collector collectors, including status.
   *
   * @public
   */
  agentlessCollectorSummary?: CustomerAgentlessCollectorInfo | undefined;
}

/**
 * A field and direction for ordered output.
 *
 * @public
 */
export interface OrderByElement {
  /**
   * The field on which to order.
   *
   * @public
   */
  fieldName: string | undefined;

  /**
   * Ordering direction.
   *
   * @public
   */
  sortOrder?: OrderString | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsRequest {
  /**
   * A valid configuration identified by Application Discovery Service.
   *
   * @public
   */
  configurationType: ConfigurationItemType | undefined;

  /**
   * You can filter the request using various logical operators and a *key*-*value* format. For example:
   *
   * `\{"key": "serverType", "value": "webServer"\}`
   *
   * For a complete list of filter options and guidance about using them with this action, see [Using the ListConfigurations Action](https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#ListConfigurations) in the *Amazon Web Services Application Discovery Service User Guide*.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The total number of items to return. The maximum value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token to retrieve the next set of results. For example, if a previous call to ListConfigurations returned 100 items, but you set `ListConfigurationsRequest$maxResults` to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Certain filter criteria return output that can be sorted in ascending or descending order. For a list of output characteristics for each filter, see [Using the ListConfigurations Action](https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#ListConfigurations) in the *Amazon Web Services Application Discovery Service User Guide*.
   *
   * @public
   */
  orderBy?: OrderByElement[] | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsResponse {
  /**
   * Returns configuration details, including the configuration ID, attribute names, and attribute values.
   *
   * @public
   */
  configurations?: Record<string, string>[] | undefined;

  /**
   * Token to retrieve the next set of results. For example, if your call to ListConfigurations returned 100 items, but you set `ListConfigurationsRequest$maxResults` to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServerNeighborsRequest {
  /**
   * Configuration ID of the server for which neighbors are being listed.
   *
   * @public
   */
  configurationId: string | undefined;

  /**
   * Flag to indicate if port and protocol information is needed as part of the response.
   *
   * @public
   */
  portInformationNeeded?: boolean | undefined;

  /**
   * List of configuration IDs to test for one-hop-away.
   *
   * @public
   */
  neighborConfigurationIds?: string[] | undefined;

  /**
   * Maximum number of results to return in a single page of output.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token to retrieve the next set of results. For example, if you previously specified 100 IDs for `ListServerNeighborsRequest$neighborConfigurationIds` but set `ListServerNeighborsRequest$maxResults` to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Details about neighboring servers.
 *
 * @public
 */
export interface NeighborConnectionDetail {
  /**
   * The ID of the server that opened the network connection.
   *
   * @public
   */
  sourceServerId: string | undefined;

  /**
   * The ID of the server that accepted the network connection.
   *
   * @public
   */
  destinationServerId: string | undefined;

  /**
   * The destination network port for the connection.
   *
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * The network protocol used for the connection.
   *
   * @public
   */
  transportProtocol?: string | undefined;

  /**
   * The number of open network connections with the neighboring server.
   *
   * @public
   */
  connectionsCount: number | undefined;
}

/**
 * @public
 */
export interface ListServerNeighborsResponse {
  /**
   * List of distinct servers that are one hop away from the given server.
   *
   * @public
   */
  neighbors: NeighborConnectionDetail[] | undefined;

  /**
   * Token to retrieve the next set of results. For example, if you specified 100 IDs for `ListServerNeighborsRequest$neighborConfigurationIds` but set `ListServerNeighborsRequest$maxResults` to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Count of distinct servers that are one hop away from the given server.
   *
   * @public
   */
  knownDependencyCount?: number | undefined;
}

/**
 * @public
 */
export interface StartBatchDeleteConfigurationTaskRequest {
  /**
   * The type of configuration item to delete. Supported types are: SERVER.
   *
   * @public
   */
  configurationType: DeletionConfigurationItemType | undefined;

  /**
   * The list of configuration IDs that will be deleted by the task.
   *
   * @public
   */
  configurationIds: string[] | undefined;
}

/**
 * @public
 */
export interface StartBatchDeleteConfigurationTaskResponse {
  /**
   * The unique identifier associated with the newly started deletion task.
   *
   * @public
   */
  taskId?: string | undefined;
}

/**
 * @public
 */
export interface StartContinuousExportRequest {}

/**
 * @public
 */
export interface StartContinuousExportResponse {
  /**
   * The unique ID assigned to this export.
   *
   * @public
   */
  exportId?: string | undefined;

  /**
   * The name of the s3 bucket where the export data parquet files are stored.
   *
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * The timestamp representing when the continuous export was started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The type of data collector used to gather this data (currently only offered for AGENT).
   *
   * @public
   */
  dataSource?: DataSource | undefined;

  /**
   * A dictionary which describes how the data is stored.
   *
   * - `databaseName` - the name of the Glue database used to store the schema.
   *
   * @public
   */
  schemaStorageConfig?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartDataCollectionByAgentIdsRequest {
  /**
   * The IDs of the agents from which to start collecting data. If you send a request to an agent ID that you do not have permission to contact, according to your Amazon Web Services account, the service does not throw an exception. Instead, it returns the error in the *Description* field. If you send a request to multiple agents and you do not have permission to contact some of those agents, the system does not throw an exception. Instead, the system shows `Failed` in the *Description* field.
   *
   * @public
   */
  agentIds: string[] | undefined;
}

/**
 * @public
 */
export interface StartDataCollectionByAgentIdsResponse {
  /**
   * Information about agents that were instructed to start collecting data. Information includes the agent ID, a description of the operation performed, and whether the agent configuration was updated.
   *
   * @public
   */
  agentsConfigurationStatus?: AgentConfigurationStatus[] | undefined;
}

/**
 * Specifies the performance metrics to use for the server that is used for recommendations.
 *
 * @public
 */
export interface UsageMetricBasis {
  /**
   * A utilization metric that is used by the recommendations.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies the percentage of the specified utilization metric that is used by the recommendations.
   *
   * @public
   */
  percentageAdjust?: number | undefined;
}

/**
 * Used to provide Reserved Instance preferences for the recommendation.
 *
 * @public
 */
export interface ReservedInstanceOptions {
  /**
   * The payment plan to use for your Reserved Instance.
   *
   * @public
   */
  purchasingOption: PurchasingOption | undefined;

  /**
   * The flexibility to change the instance types needed for your Reserved Instance.
   *
   * @public
   */
  offeringClass: OfferingClass | undefined;

  /**
   * The preferred duration of the Reserved Instance term.
   *
   * @public
   */
  termLength: TermLength | undefined;
}

/**
 * Indicates that the exported data must include EC2 instance type matches for on-premises servers that are discovered through Amazon Web Services Application Discovery Service.
 *
 * @public
 */
export interface Ec2RecommendationsExportPreferences {
  /**
   * If set to true, the export [preferences](https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html#API_StartExportTask_RequestSyntax) is set to `Ec2RecommendationsExportPreferences`.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The recommended EC2 instance type that matches the CPU usage metric of server performance data.
   *
   * @public
   */
  cpuPerformanceMetricBasis?: UsageMetricBasis | undefined;

  /**
   * The recommended EC2 instance type that matches the Memory usage metric of server performance data.
   *
   * @public
   */
  ramPerformanceMetricBasis?: UsageMetricBasis | undefined;

  /**
   * The target tenancy to use for your recommended EC2 instances.
   *
   * @public
   */
  tenancy?: Tenancy | undefined;

  /**
   * An array of instance types to exclude from recommendations.
   *
   * @public
   */
  excludedInstanceTypes?: string[] | undefined;

  /**
   * The target Amazon Web Services Region for the recommendations. You can use any of the Region codes available for the chosen service, as listed in [Amazon Web Services service endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  preferredRegion?: string | undefined;

  /**
   * The contract type for a reserved instance. If blank, we assume an On-Demand instance is preferred.
   *
   * @public
   */
  reservedInstanceOptions?: ReservedInstanceOptions | undefined;
}

/**
 * Indicates the type of data that is being exported. Only one `ExportPreferences` can be enabled for a [StartExportTask](https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html) action.
 *
 * @public
 */
export type ExportPreferences =
  | ExportPreferences.Ec2RecommendationsPreferencesMember
  | ExportPreferences.$UnknownMember;

/**
 * @public
 */
export namespace ExportPreferences {
  /**
   * If enabled, exported data includes EC2 instance type matches for on-premises servers discovered through Amazon Web Services Application Discovery Service.
   *
   * @public
   */
  export interface Ec2RecommendationsPreferencesMember {
    ec2RecommendationsPreferences: Ec2RecommendationsExportPreferences;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ec2RecommendationsPreferences?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ec2RecommendationsPreferences: (value: Ec2RecommendationsExportPreferences) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartExportTaskRequest {
  /**
   * The file format for the returned export data. Default value is `CSV`. **Note:** *The* `GRAPHML` *option has been deprecated.*
   *
   * @public
   */
  exportDataFormat?: ExportDataFormat[] | undefined;

  /**
   * If a filter is present, it selects the single `agentId` of the Application Discovery Agent for which data is exported. The `agentId` can be found in the results of the `DescribeAgents` API or CLI. If no filter is present, `startTime` and `endTime` are ignored and exported data includes both Amazon Web Services Application Discovery Service Agentless Collector collectors data and summary data from Application Discovery Agent agents.
   *
   * @public
   */
  filters?: ExportFilter[] | undefined;

  /**
   * The start timestamp for exported data from the single Application Discovery Agent selected in the filters. If no value is specified, data is exported starting from the first data collected by the agent.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end timestamp for exported data from the single Application Discovery Agent selected in the filters. If no value is specified, exported data includes the most recent data collected by the agent.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Indicates the type of data that needs to be exported. Only one [ExportPreferences](https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ExportPreferences.html) can be enabled at any time.
   *
   * @public
   */
  preferences?: ExportPreferences | undefined;
}

/**
 * @public
 */
export interface StartExportTaskResponse {
  /**
   * A unique identifier used to query the status of an export request.
   *
   * @public
   */
  exportId?: string | undefined;
}

/**
 * @public
 */
export interface StartImportTaskRequest {
  /**
   * Optional. A unique token that you can provide to prevent the same import request from occurring more than once. If you don't provide a token, a token is automatically generated.
   *
   * Sending more than one `StartImportTask` request with the same client request token will return information about the original import task with that client request token.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * A descriptive name for this request. You can use this name to filter future requests related to this import task, such as identifying applications and servers that were included in this import task. We recommend that you use a meaningful name for each import task.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The URL for your import file that you've uploaded to Amazon S3.
   *
   * > **Note:** If you're using the Amazon Web Services CLI, this URL is structured as follows: `s3://BucketName/ImportFileName.CSV`
   *
   * @public
   */
  importUrl: string | undefined;
}

/**
 * @public
 */
export interface StartImportTaskResponse {
  /**
   * An array of information related to the import task request including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
   *
   * @public
   */
  task?: ImportTask | undefined;
}

/**
 * @public
 */
export interface StopContinuousExportRequest {
  /**
   * The unique ID assigned to this export.
   *
   * @public
   */
  exportId: string | undefined;
}

/**
 * @public
 */
export interface StopContinuousExportResponse {
  /**
   * Timestamp that represents when this continuous export started collecting data.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * Timestamp that represents when this continuous export was stopped.
   *
   * @public
   */
  stopTime?: Date | undefined;
}

/**
 * @public
 */
export interface StopDataCollectionByAgentIdsRequest {
  /**
   * The IDs of the agents from which to stop collecting data.
   *
   * @public
   */
  agentIds: string[] | undefined;
}

/**
 * @public
 */
export interface StopDataCollectionByAgentIdsResponse {
  /**
   * Information about the agents that were instructed to stop collecting data. Information includes the agent ID, a description of the operation performed, and whether the agent configuration was updated.
   *
   * @public
   */
  agentsConfigurationStatus?: AgentConfigurationStatus[] | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * Configuration ID of the application to be updated.
   *
   * @public
   */
  configurationId: string | undefined;

  /**
   * New name of the application to be updated.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * New description of the application to be updated.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The new migration wave of the application that you want to update.
   *
   * @public
   */
  wave?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {}
