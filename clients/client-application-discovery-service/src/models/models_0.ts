// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ApplicationDiscoveryServiceServiceException as __BaseException } from "./ApplicationDiscoveryServiceServiceException";

/**
 * <p>Information about agents that were instructed to start collecting data.
 *       Information includes the agent ID, a description of the operation, and whether the
 *       agent configuration was updated.</p>
 * @public
 */
export interface AgentConfigurationStatus {
  /**
   * <p>The agent ID.</p>
   * @public
   */
  agentId?: string | undefined;

  /**
   * <p>Information about the status of the <code>StartDataCollection</code> and
   *         <code>StopDataCollection</code> operations. The system has recorded the data collection
   *       operation. The agent receives this command the next time it polls for a new command.
   *     </p>
   * @public
   */
  operationSucceeded?: boolean | undefined;

  /**
   * <p>A description of the operation performed.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Network details about the host where the agent/collector resides.</p>
 * @public
 */
export interface AgentNetworkInfo {
  /**
   * <p>The IP address for the host where the agent/collector resides.</p>
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * <p>The MAC address for the host where the agent/collector resides.</p>
   * @public
   */
  macAddress?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AgentStatus = {
  BLACKLISTED: "BLACKLISTED",
  HEALTHY: "HEALTHY",
  RUNNING: "RUNNING",
  SHUTDOWN: "SHUTDOWN",
  UNHEALTHY: "UNHEALTHY",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type AgentStatus = (typeof AgentStatus)[keyof typeof AgentStatus];

/**
 * <p>Information about agents associated with the user’s Amazon Web Services account.
 *       Information includes agent IDs, IP addresses, media access control (MAC)
 *       addresses, agent or collector status, hostname where the agent resides, and agent
 *       version for each agent.</p>
 * @public
 */
export interface AgentInfo {
  /**
   * <p>The agent or collector ID.</p>
   * @public
   */
  agentId?: string | undefined;

  /**
   * <p>The name of the host where the agent or collector resides. The host can be a server or
   *       virtual machine.</p>
   * @public
   */
  hostName?: string | undefined;

  /**
   * <p>Network details about the host where the agent or collector resides.</p>
   * @public
   */
  agentNetworkInfoList?: AgentNetworkInfo[] | undefined;

  /**
   * <p>The ID of the connector.</p>
   * @public
   */
  connectorId?: string | undefined;

  /**
   * <p>The agent or collector version.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The health of the agent.</p>
   * @public
   */
  health?: AgentStatus | undefined;

  /**
   * <p>Time since agent health was reported.</p>
   * @public
   */
  lastHealthPingTime?: string | undefined;

  /**
   * <p>Status of the collection process for an agent.</p>
   * @public
   */
  collectionStatus?: string | undefined;

  /**
   * <p>Type of agent.</p>
   * @public
   */
  agentType?: string | undefined;

  /**
   * <p>Agent's first registration timestamp in UTC.</p>
   * @public
   */
  registeredTime?: string | undefined;
}

/**
 * @public
 */
export interface AssociateConfigurationItemsToApplicationRequest {
  /**
   * <p>The configuration ID of an application with which items are to be associated.</p>
   * @public
   */
  applicationConfigurationId: string | undefined;

  /**
   * <p>The ID of each configuration item to be associated with an application.</p>
   * @public
   */
  configurationIds: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateConfigurationItemsToApplicationResponse {}

/**
 * <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 * @public
 */
export class AuthorizationErrorException extends __BaseException {
  readonly name: "AuthorizationErrorException" = "AuthorizationErrorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationErrorException, __BaseException>) {
    super({
      name: "AuthorizationErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationErrorException.prototype);
  }
}

/**
 * <p>The home Region is not set. Set the home Region to continue.</p>
 * @public
 */
export class HomeRegionNotSetException extends __BaseException {
  readonly name: "HomeRegionNotSetException" = "HomeRegionNotSetException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HomeRegionNotSetException, __BaseException>) {
    super({
      name: "HomeRegionNotSetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HomeRegionNotSetException.prototype);
  }
}

/**
 * <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
  }
}

/**
 * <p>The server experienced an internal error. Try again.</p>
 * @public
 */
export class ServerInternalErrorException extends __BaseException {
  readonly name: "ServerInternalErrorException" = "ServerInternalErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerInternalErrorException, __BaseException>) {
    super({
      name: "ServerInternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerInternalErrorException.prototype);
  }
}

/**
 * <p>
 *       An object representing the agent or data collector to be deleted along with
 *       the optional configurations for error handling.
 *     </p>
 * @public
 */
export interface DeleteAgent {
  /**
   * <p>
   *       The ID of the agent or data collector to delete.
   *     </p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>
   *       Optional flag used to force delete an agent or data collector. It is needed to delete any agent in
   *       HEALTHY/UNHEALTHY/RUNNING status. Note that deleting an agent that is actively reporting health causes it
   *       to be re-registered with a different agent ID after data collector re-connects with Amazon Web Services.
   *     </p>
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface BatchDeleteAgentsRequest {
  /**
   * <p>
   *       The list of agents to delete.
   *     </p>
   * @public
   */
  deleteAgents: DeleteAgent[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DeleteAgentErrorCode = {
  AGENT_IN_USE: "AGENT_IN_USE",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;

/**
 * @public
 */
export type DeleteAgentErrorCode = (typeof DeleteAgentErrorCode)[keyof typeof DeleteAgentErrorCode];

/**
 * <p>
 *       An object representing the agent or data collector that failed to delete, each containing agentId,
 *       errorMessage, and errorCode.
 *     </p>
 * @public
 */
export interface BatchDeleteAgentError {
  /**
   * <p>
   *       The ID of the agent or data collector to delete.
   *     </p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>
   *       The description of the error that occurred for the delete failed agent.
   *     </p>
   * @public
   */
  errorMessage: string | undefined;

  /**
   * <p>
   *       The type of error that occurred for the delete failed agent.
   *       Valid status are: AGENT_IN_USE | NOT_FOUND | INTERNAL_SERVER_ERROR.
   *     </p>
   * @public
   */
  errorCode: DeleteAgentErrorCode | undefined;
}

/**
 * @public
 */
export interface BatchDeleteAgentsResponse {
  /**
   * <p>
   *       A list of agent IDs that failed to delete during the deletion task, each paired with an error message.
   *     </p>
   * @public
   */
  errors?: BatchDeleteAgentError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteImportDataRequest {
  /**
   * <p>The IDs for the import tasks that you want to delete.</p>
   * @public
   */
  importTaskIds: string[] | undefined;

  /**
   * <p>
   *       Set to <code>true</code> to remove the deleted import task from
   *       <a>DescribeImportTasks</a>.
   *     </p>
   * @public
   */
  deleteHistory?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchDeleteImportDataErrorCode = {
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
  OVER_LIMIT: "OVER_LIMIT",
} as const;

/**
 * @public
 */
export type BatchDeleteImportDataErrorCode =
  (typeof BatchDeleteImportDataErrorCode)[keyof typeof BatchDeleteImportDataErrorCode];

/**
 * <p>Error messages returned for each import task that you deleted as a response for this
 *       command.</p>
 * @public
 */
export interface BatchDeleteImportDataError {
  /**
   * <p>The unique import ID associated with the error that occurred.</p>
   * @public
   */
  importTaskId?: string | undefined;

  /**
   * <p>The type of error that occurred for a specific import task.</p>
   * @public
   */
  errorCode?: BatchDeleteImportDataErrorCode | undefined;

  /**
   * <p>The description of the error that occurred for a specific import task.</p>
   * @public
   */
  errorDescription?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteImportDataResponse {
  /**
   * <p>Error messages returned for each import task that you deleted as a response for this
   *       command.</p>
   * @public
   */
  errors?: BatchDeleteImportDataError[] | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>Name of the application to be created.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Description of the application to be created.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>Configuration ID of an application to be created.</p>
   * @public
   */
  configurationId?: string | undefined;
}

/**
 * <p>Metadata that help you categorize IT assets.</p>
 *          <important>
 *             <p>Do not store sensitive information (like personal data) in tags.</p>
 *          </important>
 * @public
 */
export interface Tag {
  /**
   * <p>The type of tag on which to filter.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>A value for a tag key on which to filter.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateTagsRequest {
  /**
   * <p>A list of configuration items that you want to tag.</p>
   * @public
   */
  configurationIds: string[] | undefined;

  /**
   * <p>Tags that you want to associate with one or more configuration items. Specify the tags
   *       that you want to create in a <i>key</i>-<i>value</i> format. For
   *       example:</p>
   *          <p>
   *             <code>\{"key": "serverType", "value": "webServer"\}</code>
   *          </p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTagsResponse {}

/**
 * <p>The specified configuration ID was not located. Verify the configuration ID and try
 *       again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteApplicationsRequest {
  /**
   * <p>Configuration ID of an application to be deleted.</p>
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
   * <p>A list of configuration items with tags that you want to delete.</p>
   * @public
   */
  configurationIds: string[] | undefined;

  /**
   * <p>Tags that you want to delete from one or more configuration items. Specify the tags
   *       that you want to delete in a <i>key</i>-<i>value</i> format. For
   *       example:</p>
   *          <p>
   *             <code>\{"key": "serverType", "value": "webServer"\}</code>
   *          </p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DeleteTagsResponse {}

/**
 * <p>A filter that can use conditional operators.</p>
 *          <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered
 *         Configuration Items</a> in the <i>Amazon Web Services Application Discovery Service User
 *         Guide</i>. </p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A string value on which to filter. For example, if you choose the
   *         <code>destinationServer.osVersion</code> filter name, you could specify <code>Ubuntu</code>
   *       for the value.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>A conditional operator. The following operators are valid: EQUALS, NOT_EQUALS,
   *       CONTAINS, NOT_CONTAINS. If you specify multiple filters, the system utilizes all filters as
   *       though concatenated by <i>AND</i>. If you specify multiple values for a
   *       particular filter, the system differentiates the values using <i>OR</i>. Calling
   *       either <i>DescribeConfigurations</i> or <i>ListConfigurations</i>
   *       returns attributes of matching configuration items.</p>
   * @public
   */
  condition: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgentsRequest {
  /**
   * <p>The agent or the collector IDs for which you want information. If you specify no IDs,
   *       the system returns information about all agents/collectors associated with your user.</p>
   * @public
   */
  agentIds?: string[] | undefined;

  /**
   * <p>You can filter the request using various logical operators and a
   *         <i>key</i>-<i>value</i> format. For example: </p>
   *          <p>
   *             <code>\{"key": "collectionStatus", "value": "STARTED"\}</code>
   *          </p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The total number of agents/collectors to return in a single page of output. The maximum
   *       value is 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token to retrieve the next set of results. For example, if you previously specified 100
   *       IDs for <code>DescribeAgentsRequest$agentIds</code> but set
   *         <code>DescribeAgentsRequest$maxResults</code> to 10, you received a set of 10 results along
   *       with a token. Use that token in this query to get the next set of 10.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgentsResponse {
  /**
   * <p>Lists agents or the collector by ID or lists all agents/collectors associated with your
   *       user, if you did not specify an agent/collector ID. The output includes agent/collector
   *       IDs, IP addresses, media access control (MAC) addresses, agent/collector health, host name
   *       where the agent/collector resides, and the version number of each agent/collector.</p>
   * @public
   */
  agentsInfo?: AgentInfo[] | undefined;

  /**
   * <p>Token to retrieve the next set of results. For example, if you specified 100 IDs for
   *         <code>DescribeAgentsRequest$agentIds</code> but set
   *         <code>DescribeAgentsRequest$maxResults</code> to 10, you received a set of 10 results along
   *       with this token. Use this token in the next query to retrieve the next set of 10.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBatchDeleteConfigurationTaskRequest {
  /**
   * <p>
   *         The ID of the task to delete.
   *       </p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeletionConfigurationItemType = {
  SERVER: "SERVER",
} as const;

/**
 * @public
 */
export type DeletionConfigurationItemType =
  (typeof DeletionConfigurationItemType)[keyof typeof DeletionConfigurationItemType];

/**
 * <p>
 *       A configuration ID paired with a warning message.
 *     </p>
 * @public
 */
export interface DeletionWarning {
  /**
   * <p>
   *       The unique identifier of the configuration that produced a warning.
   *     </p>
   * @public
   */
  configurationId?: string | undefined;

  /**
   * <p>
   *       The integer warning code associated with the warning message.
   *     </p>
   * @public
   */
  warningCode?: number | undefined;

  /**
   * <p>
   *       A descriptive message of the warning the associated configuration ID produced.
   *     </p>
   * @public
   */
  warningText?: string | undefined;
}

/**
 * <p>
 *       A configuration ID paired with an error message.
 *     </p>
 * @public
 */
export interface FailedConfiguration {
  /**
   * <p>
   *       The unique identifier of the configuration the failed to delete.
   *     </p>
   * @public
   */
  configurationId?: string | undefined;

  /**
   * <p>
   *       The integer error code associated with the error message.
   *     </p>
   * @public
   */
  errorStatusCode?: number | undefined;

  /**
   * <p>
   *       A descriptive message indicating why the associated configuration failed to delete.
   *     </p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchDeleteConfigurationTaskStatus = {
  COMPLETED: "COMPLETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INITIALIZING: "INITIALIZING",
  VALIDATING: "VALIDATING",
} as const;

/**
 * @public
 */
export type BatchDeleteConfigurationTaskStatus =
  (typeof BatchDeleteConfigurationTaskStatus)[keyof typeof BatchDeleteConfigurationTaskStatus];

/**
 * <p>
 *       A metadata object that represents the deletion task being executed.
 *     </p>
 * @public
 */
export interface BatchDeleteConfigurationTask {
  /**
   * <p>
   *       The deletion task's unique identifier.
   *     </p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>
   *       The current execution status of the deletion task.
   *       Valid status are: INITIALIZING | VALIDATING | DELETING | COMPLETED | FAILED.
   *     </p>
   * @public
   */
  status?: BatchDeleteConfigurationTaskStatus | undefined;

  /**
   * <p>
   *       An epoch seconds timestamp (UTC) of when the deletion task was started.
   *     </p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>
   *       An epoch seconds timestamp (UTC) of when the deletion task was completed or failed.
   *     </p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>
   *       The type of configuration item to delete. Supported types are: SERVER.
   *     </p>
   * @public
   */
  configurationType?: DeletionConfigurationItemType | undefined;

  /**
   * <p>
   *       The list of configuration IDs that were originally requested to be deleted by the deletion task.
   *     </p>
   * @public
   */
  requestedConfigurations?: string[] | undefined;

  /**
   * <p>
   *       The list of configuration IDs that were successfully deleted by the deletion task.
   *     </p>
   * @public
   */
  deletedConfigurations?: string[] | undefined;

  /**
   * <p>
   *       A list of configuration IDs that failed to delete during the deletion task,
   *       each paired with an error message.
   *     </p>
   * @public
   */
  failedConfigurations?: FailedConfiguration[] | undefined;

  /**
   * <p>
   *       A list of configuration IDs that produced warnings regarding their deletion,
   *       paired with a warning message.
   *     </p>
   * @public
   */
  deletionWarnings?: DeletionWarning[] | undefined;
}

/**
 * @public
 */
export interface DescribeBatchDeleteConfigurationTaskResponse {
  /**
   * <p>
   *         The <code>BatchDeleteConfigurationTask</code> that represents the deletion task being executed.
   *       </p>
   * @public
   */
  task?: BatchDeleteConfigurationTask | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationsRequest {
  /**
   * <p>One or more configuration IDs.</p>
   * @public
   */
  configurationIds: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationsResponse {
  /**
   * <p>A key in the response map. The value is an array of data.</p>
   * @public
   */
  configurations?: Record<string, string>[] | undefined;
}

/**
 * @public
 */
export interface DescribeContinuousExportsRequest {
  /**
   * <p>The unique IDs assigned to the exports.</p>
   * @public
   */
  exportIds?: string[] | undefined;

  /**
   * <p>A number between 1 and 100 specifying the maximum number of continuous export
   *       descriptions returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token from the previous call to <code>DescribeExportTasks</code>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSource = {
  AGENT: "AGENT",
} as const;

/**
 * @public
 */
export type DataSource = (typeof DataSource)[keyof typeof DataSource];

/**
 * @public
 * @enum
 */
export const ContinuousExportStatus = {
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
  START_FAILED: "START_FAILED",
  START_IN_PROGRESS: "START_IN_PROGRESS",
  STOP_FAILED: "STOP_FAILED",
  STOP_IN_PROGRESS: "STOP_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ContinuousExportStatus = (typeof ContinuousExportStatus)[keyof typeof ContinuousExportStatus];

/**
 * <p>A list of continuous export descriptions.</p>
 * @public
 */
export interface ContinuousExportDescription {
  /**
   * <p>The unique ID assigned to this export.</p>
   * @public
   */
  exportId?: string | undefined;

  /**
   * <p>Describes the status of the export. Can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>START_IN_PROGRESS - setting up resources to start continuous export.</p>
   *             </li>
   *             <li>
   *                <p>START_FAILED - an error occurred setting up continuous export. To recover, call
   *           start-continuous-export again.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE - data is being exported to the customer bucket.</p>
   *             </li>
   *             <li>
   *                <p>ERROR - an error occurred during export. To fix the issue, call
   *           stop-continuous-export and start-continuous-export.</p>
   *             </li>
   *             <li>
   *                <p>STOP_IN_PROGRESS - stopping the export.</p>
   *             </li>
   *             <li>
   *                <p>STOP_FAILED - an error occurred stopping the export. To recover, call
   *           stop-continuous-export again.</p>
   *             </li>
   *             <li>
   *                <p>INACTIVE - the continuous export has been stopped. Data is no longer being exported
   *           to the customer bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ContinuousExportStatus | undefined;

  /**
   * <p>Contains information about any errors that have occurred. This data type can have the
   *       following values:</p>
   *          <ul>
   *             <li>
   *                <p>ACCESS_DENIED - You don’t have permission to start Data Exploration in Amazon
   *           Athena. Contact your Amazon Web Services administrator for help. For more information, see <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/setting-up.html">Setting Up Amazon Web Services Application Discovery Service</a> in the Application Discovery
   *           Service User Guide.</p>
   *             </li>
   *             <li>
   *                <p>DELIVERY_STREAM_LIMIT_FAILURE - You reached the limit for Amazon Kinesis Data
   *           Firehose delivery streams. Reduce the number of streams or request a limit increase and
   *           try again. For more information, see <a href="http://docs.aws.amazon.com/streams/latest/dev/service-sizes-and-limits.html">Kinesis Data Streams Limits</a> in the Amazon Kinesis Data Streams Developer
   *           Guide.</p>
   *             </li>
   *             <li>
   *                <p>FIREHOSE_ROLE_MISSING - The Data Exploration feature is in an error state because
   *           your user is missing the Amazon Web ServicesApplicationDiscoveryServiceFirehose role. Turn on Data
   *           Exploration in Amazon Athena and try again. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/security-iam-awsmanpol.html#security-iam-awsmanpol-create-firehose-role">Creating the Amazon Web ServicesApplicationDiscoveryServiceFirehose Role</a> in the Application Discovery Service User Guide.</p>
   *             </li>
   *             <li>
   *                <p>FIREHOSE_STREAM_DOES_NOT_EXIST - The Data Exploration feature is in an error state
   *           because your user is missing one or more of the Kinesis data delivery
   *           streams.</p>
   *             </li>
   *             <li>
   *                <p>INTERNAL_FAILURE - The Data Exploration feature is in an error state because of an
   *           internal failure. Try again later. If this problem persists, contact Amazon Web Services
   *           Support.</p>
   *             </li>
   *             <li>
   *                <p>LAKE_FORMATION_ACCESS_DENIED - You don't have sufficient lake formation permissions
   *           to start continuous export. For more information, see <a href="http://docs.aws.amazon.com/lake-formation/latest/dg/upgrade-glue-lake-formation.html">
   *             Upgrading Amazon Web Services Glue Data Permissions to the Amazon Web Services Lake Formation Model </a> in the
   *           Amazon Web Services <i>Lake Formation Developer Guide</i>. </p>
   *                <p>You can use one of the following two ways to resolve this issue.</p>
   *                <ol>
   *                   <li>
   *                      <p>If you don’t want to use the Lake Formation permission model, you can change
   *               the default Data Catalog settings to use only Amazon Web Services Identity and Access Management
   *               (IAM) access control for new databases. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/getting-started-setup.html#setup-change-cat-settings">Change Data Catalog Settings</a> in the <i>Lake Formation Developer
   *                 Guide</i>.</p>
   *                   </li>
   *                   <li>
   *                      <p>You can give the service-linked IAM roles
   *               AWSServiceRoleForApplicationDiscoveryServiceContinuousExport and
   *               AWSApplicationDiscoveryServiceFirehose the required Lake Formation permissions. For
   *               more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/granting-database-permissions.html">
   *                 Granting Database Permissions</a> in the <i>Lake Formation Developer
   *                 Guide</i>. </p>
   *                      <ol>
   *                         <li>
   *                            <p>AWSServiceRoleForApplicationDiscoveryServiceContinuousExport - Grant
   *                   database creator permissions, which gives the role database creation ability and
   *                   implicit permissions for any created tables. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/implicit-permissions.html">
   *                     Implicit Lake Formation Permissions </a> in the <i>Lake Formation
   *                     Developer Guide</i>.</p>
   *                         </li>
   *                         <li>
   *                            <p>AWSApplicationDiscoveryServiceFirehose - Grant describe permissions for all
   *                   tables in the database.</p>
   *                         </li>
   *                      </ol>
   *                   </li>
   *                </ol>
   *             </li>
   *             <li>
   *                <p>S3_BUCKET_LIMIT_FAILURE - You reached the limit for Amazon S3 buckets. Reduce the
   *           number of S3 buckets or request a limit increase and try again. For more information, see
   *             <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket Restrictions and Limitations</a> in the Amazon Simple Storage Service
   *           Developer Guide.</p>
   *             </li>
   *             <li>
   *                <p>S3_NOT_SIGNED_UP - Your account is not signed up for the  Amazon S3 service. You
   *           must sign up before you can use Amazon S3. You can sign up at the following URL: <a href="https://aws.amazon.com/s3">https://aws.amazon.com/s3</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statusDetail?: string | undefined;

  /**
   * <p>The name of the s3 bucket where the export data parquet files are stored.</p>
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * <p>The timestamp representing when the continuous export was started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The timestamp that represents when this continuous export was stopped.</p>
   * @public
   */
  stopTime?: Date | undefined;

  /**
   * <p>The type of data collector used to gather this data (currently only offered for
   *       AGENT).</p>
   * @public
   */
  dataSource?: DataSource | undefined;

  /**
   * <p>An object which describes how the data is stored.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>databaseName</code> - the name of the Glue database used to store the
   *           schema.</p>
   *             </li>
   *          </ul>
   * @public
   */
  schemaStorageConfig?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeContinuousExportsResponse {
  /**
   * <p>A list of continuous export descriptions.</p>
   * @public
   */
  descriptions?: ContinuousExportDescription[] | undefined;

  /**
   * <p>The token from the previous call to <code>DescribeExportTasks</code>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>This operation is not permitted.</p>
 * @public
 */
export class OperationNotPermittedException extends __BaseException {
  readonly name: "OperationNotPermittedException" = "OperationNotPermittedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotPermittedException, __BaseException>) {
    super({
      name: "OperationNotPermittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotPermittedException.prototype);
  }
}

/**
 * @public
 */
export interface DescribeExportConfigurationsRequest {
  /**
   * <p>A list of continuous export IDs to search for.</p>
   * @public
   */
  exportIds?: string[] | undefined;

  /**
   * <p>A number between 1 and 100 specifying the maximum number of continuous export
   *       descriptions returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token from the previous call to describe-export-tasks.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus];

/**
 * <p>Information regarding the export status of discovered data. The value is an array of
 *       objects.</p>
 * @public
 */
export interface ExportInfo {
  /**
   * <p>A unique identifier used to query an export.</p>
   * @public
   */
  exportId: string | undefined;

  /**
   * <p>The status of the data export job.</p>
   * @public
   */
  exportStatus: ExportStatus | undefined;

  /**
   * <p>A status message provided for API callers.</p>
   * @public
   */
  statusMessage: string | undefined;

  /**
   * <p>A URL for an Amazon S3 bucket where you can review the exported data. The URL is
   *       displayed only if the export succeeded.</p>
   * @public
   */
  configurationsDownloadUrl?: string | undefined;

  /**
   * <p>The time that the data export was initiated.</p>
   * @public
   */
  exportRequestTime: Date | undefined;

  /**
   * <p>If true, the export of agent information exceeded the size limit for a single export
   *       and the exported data is incomplete for the requested time range. To address this, select a
   *       smaller time range for the export by using <code>startDate</code> and
   *       <code>endDate</code>.</p>
   * @public
   */
  isTruncated?: boolean | undefined;

  /**
   * <p>The value of <code>startTime</code> parameter in the <code>StartExportTask</code>
   *       request. If no <code>startTime</code> was requested, this result does not appear in
   *         <code>ExportInfo</code>.</p>
   * @public
   */
  requestedStartTime?: Date | undefined;

  /**
   * <p>The <code>endTime</code> used in the <code>StartExportTask</code> request. If no
   *         <code>endTime</code> was requested, this result does not appear in
   *       <code>ExportInfo</code>.</p>
   * @public
   */
  requestedEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeExportConfigurationsResponse {
  /**
   * <p></p>
   * @public
   */
  exportsInfo?: ExportInfo[] | undefined;

  /**
   * <p>The token from the previous call to describe-export-tasks.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Used to select which agent's data is to be exported. A single agent ID may be selected
 *       for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.</p>
 * @public
 */
export interface ExportFilter {
  /**
   * <p>A single <code>ExportFilter</code> name. Supported filters:
   *       <code>agentIds</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A single agent ID for a Discovery Agent. An agent ID can be found using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeAgents.html">DescribeAgents</a> action. Typically an ADS agent ID is in the form
   *         <code>o-0123456789abcdef0</code>.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>Supported condition: <code>EQUALS</code>
   *          </p>
   * @public
   */
  condition: string | undefined;
}

/**
 * @public
 */
export interface DescribeExportTasksRequest {
  /**
   * <p>One or more unique identifiers used to query the status of an export request.</p>
   * @public
   */
  exportIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AgentId</code> - ID of the agent whose collected data will be
   *           exported</p>
   *             </li>
   *          </ul>
   * @public
   */
  filters?: ExportFilter[] | undefined;

  /**
   * <p>The maximum number of volume results returned by <code>DescribeExportTasks</code> in
   *       paginated output. When this parameter is used, <code>DescribeExportTasks</code> only returns
   *         <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *       response element.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *         <code>DescribeExportTasks</code> request where <code>maxResults</code> was used and the
   *       results exceeded the value of that parameter. Pagination continues from the end of the
   *       previous results that returned the <code>nextToken</code> value. This value is null when there
   *       are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeExportTasksResponse {
  /**
   * <p>Contains one or more sets of export request details. When the status of a request is
   *         <code>SUCCEEDED</code>, the response includes a URL for an Amazon S3 bucket where you can
   *       view the data in a CSV file.</p>
   * @public
   */
  exportsInfo?: ExportInfo[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *         <code>DescribeExportTasks</code> request. When the results of a
   *         <code>DescribeExportTasks</code> request exceed <code>maxResults</code>, this value can be
   *       used to retrieve the next page of results. This value is null when there are no more results
   *       to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImportTaskFilterName = {
  IMPORT_TASK_ID: "IMPORT_TASK_ID",
  NAME: "NAME",
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type ImportTaskFilterName = (typeof ImportTaskFilterName)[keyof typeof ImportTaskFilterName];

/**
 * <p>A name-values pair of elements you can use to filter the results when querying your import
 *       tasks. Currently, wildcards are not supported for filters.</p>
 *          <note>
 *             <p>When filtering by import status, all other filter values are ignored.</p>
 *          </note>
 * @public
 */
export interface ImportTaskFilter {
  /**
   * <p>The name, status, or import task ID for a specific import task.</p>
   * @public
   */
  name?: ImportTaskFilterName | undefined;

  /**
   * <p>An array of strings that you can provide to match against a specific name, status, or
   *       import task ID to filter the results for your import task queries.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeImportTasksRequest {
  /**
   * <p>An array of name-value pairs that you provide to filter the results for the
   *         <code>DescribeImportTask</code> request to a specific subset of results. Currently, wildcard
   *       values aren't supported for filters.</p>
   * @public
   */
  filters?: ImportTaskFilter[] | undefined;

  /**
   * <p>The maximum number of results that you want this request to return, up to 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to request a specific page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImportStatus = {
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_FAILED_LIMIT_EXCEEDED: "DELETE_FAILED_LIMIT_EXCEEDED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  IMPORT_COMPLETE: "IMPORT_COMPLETE",
  IMPORT_COMPLETE_WITH_ERRORS: "IMPORT_COMPLETE_WITH_ERRORS",
  IMPORT_FAILED: "IMPORT_FAILED",
  IMPORT_FAILED_RECORD_LIMIT_EXCEEDED: "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED",
  IMPORT_FAILED_SERVER_LIMIT_EXCEEDED: "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;

/**
 * @public
 */
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];

/**
 * <p>An array of information related to the import task request that includes status
 *       information, times, IDs, the Amazon S3 Object URL for the import file, and more.</p>
 * @public
 */
export interface ImportTask {
  /**
   * <p>The unique ID for a specific import task. These IDs aren't globally unique, but they are
   *       unique within an Amazon Web Services account.</p>
   * @public
   */
  importTaskId?: string | undefined;

  /**
   * <p>A unique token used to prevent the same import request from occurring more than once. If
   *       you didn't provide a token, a token was automatically generated when the import task request
   *       was sent.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>A descriptive name for an import task. You can use this name to filter future requests
   *       related to this import task, such as identifying applications and servers that were included
   *       in this import task. We recommend that you use a meaningful name for each import task.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The URL for your import file that you've uploaded to Amazon S3.</p>
   * @public
   */
  importUrl?: string | undefined;

  /**
   * <p>The status of the import task. An import can have the status of
   *         <code>IMPORT_COMPLETE</code> and still have some records fail to import from the overall
   *       request. More information can be found in the downloadable archive defined in the
   *         <code>errorsAndFailedEntriesZip</code> field, or in the Migration Hub management
   *       console.</p>
   * @public
   */
  status?: ImportStatus | undefined;

  /**
   * <p>The time that the import task request was made, presented in the Unix time stamp
   *       format.</p>
   * @public
   */
  importRequestTime?: Date | undefined;

  /**
   * <p>The time that the import task request finished, presented in the Unix time stamp
   *       format.</p>
   * @public
   */
  importCompletionTime?: Date | undefined;

  /**
   * <p>The time that the import task request was deleted, presented in the Unix time stamp
   *       format.</p>
   * @public
   */
  importDeletedTime?: Date | undefined;

  /**
   * <p>The total number of server records in the import file that were successfully
   *       imported.</p>
   * @public
   */
  serverImportSuccess?: number | undefined;

  /**
   * <p>The total number of server records in the import file that failed to be imported.</p>
   * @public
   */
  serverImportFailure?: number | undefined;

  /**
   * <p>The total number of application records in the import file that were successfully
   *       imported.</p>
   * @public
   */
  applicationImportSuccess?: number | undefined;

  /**
   * <p>The total number of application records in the import file that failed to be
   *       imported.</p>
   * @public
   */
  applicationImportFailure?: number | undefined;

  /**
   * <p>A link to a compressed archive folder (in the ZIP format) that contains an error log and a
   *       file of failed records. You can use these two files to quickly identify records that failed,
   *       why they failed, and correct those records. Afterward, you can upload the corrected file to
   *       your Amazon S3 bucket and create another import task request.</p>
   *          <p>This field also includes authorization information so you can confirm the authenticity of
   *       the compressed archive before you download it.</p>
   *          <p>If some records failed to be imported we recommend that you correct the records in the
   *       failed entries file and then imports that failed entries file. This prevents you from having
   *       to correct and update the larger original file and attempt importing it again.</p>
   * @public
   */
  errorsAndFailedEntriesZip?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImportTasksResponse {
  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A returned array of import tasks that match any applied filters, up to the specified
   *       number of maximum results.</p>
   * @public
   */
  tasks?: ImportTask[] | undefined;
}

/**
 * <p>The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>,
 *         <code>configurationId</code>.</p>
 * @public
 */
export interface TagFilter {
  /**
   * <p>A name of the tag filter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Values for the tag filter.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeTagsRequest {
  /**
   * <p>You can filter the list using a <i>key</i>-<i>value</i>
   *       format. You can separate these items by using logical operators. Allowed filters include
   *         <code>tagKey</code>, <code>tagValue</code>, and <code>configurationId</code>. </p>
   * @public
   */
  filters?: TagFilter[] | undefined;

  /**
   * <p>The total number of items to return in a single page of output. The maximum value is
   *       100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfigurationItemType = {
  APPLICATION: "APPLICATION",
  CONNECTIONS: "CONNECTION",
  PROCESS: "PROCESS",
  SERVER: "SERVER",
} as const;

/**
 * @public
 */
export type ConfigurationItemType = (typeof ConfigurationItemType)[keyof typeof ConfigurationItemType];

/**
 * <p>Tags for a configuration item. Tags are metadata that help you categorize IT
 *       assets.</p>
 * @public
 */
export interface ConfigurationTag {
  /**
   * <p>A type of IT asset to tag.</p>
   * @public
   */
  configurationType?: ConfigurationItemType | undefined;

  /**
   * <p>The configuration ID for the item to tag. You can specify a list of keys and
   *       values.</p>
   * @public
   */
  configurationId?: string | undefined;

  /**
   * <p>A type of tag on which to filter. For example,
   *       <i>serverType</i>.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>A value on which to filter. For example <i>key = serverType</i> and
   *         <i>value = web server</i>.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>The time the configuration tag was created in Coordinated Universal Time
   *       (UTC).</p>
   * @public
   */
  timeOfCreation?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTagsResponse {
  /**
   * <p>Depending on the input, this is a list of configuration items tagged with a specific
   *       tag, or a list of tags for a specific configuration item.</p>
   * @public
   */
  tags?: ConfigurationTag[] | undefined;

  /**
   * <p>The call returns a token. Use this token to get the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConfigurationItemsFromApplicationRequest {
  /**
   * <p>Configuration ID of an application from which each item is disassociated.</p>
   * @public
   */
  applicationConfigurationId: string | undefined;

  /**
   * <p>Configuration ID of each item to be disassociated from an application.</p>
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
   * <p>A unique identifier that you can use to query the export status.</p>
   * @public
   */
  exportId?: string | undefined;
}

/**
 * @public
 */
export interface GetDiscoverySummaryRequest {}

/**
 * <p>The inventory data for installed Agentless Collector collectors. </p>
 * @public
 */
export interface CustomerAgentlessCollectorInfo {
  /**
   * <p>The number of active Agentless Collector collectors. </p>
   * @public
   */
  activeAgentlessCollectors: number | undefined;

  /**
   * <p>The number of healthy Agentless Collector collectors. </p>
   * @public
   */
  healthyAgentlessCollectors: number | undefined;

  /**
   * <p>The number of deny-listed Agentless Collector collectors. </p>
   * @public
   */
  denyListedAgentlessCollectors: number | undefined;

  /**
   * <p>The number of Agentless Collector collectors with <code>SHUTDOWN</code> status.
   *     </p>
   * @public
   */
  shutdownAgentlessCollectors: number | undefined;

  /**
   * <p> The number of unhealthy Agentless Collector collectors. </p>
   * @public
   */
  unhealthyAgentlessCollectors: number | undefined;

  /**
   * <p> The total number of Agentless Collector collectors. </p>
   * @public
   */
  totalAgentlessCollectors: number | undefined;

  /**
   * <p> The number of unknown Agentless Collector collectors. </p>
   * @public
   */
  unknownAgentlessCollectors: number | undefined;
}

/**
 * <p>Inventory data for installed discovery agents.</p>
 * @public
 */
export interface CustomerAgentInfo {
  /**
   * <p>Number of active discovery agents.</p>
   * @public
   */
  activeAgents: number | undefined;

  /**
   * <p>Number of healthy discovery agents</p>
   * @public
   */
  healthyAgents: number | undefined;

  /**
   * <p>Number of blacklisted discovery agents.</p>
   * @public
   */
  blackListedAgents: number | undefined;

  /**
   * <p>Number of discovery agents with status SHUTDOWN.</p>
   * @public
   */
  shutdownAgents: number | undefined;

  /**
   * <p>Number of unhealthy discovery agents.</p>
   * @public
   */
  unhealthyAgents: number | undefined;

  /**
   * <p>Total number of discovery agents.</p>
   * @public
   */
  totalAgents: number | undefined;

  /**
   * <p>Number of unknown discovery agents.</p>
   * @public
   */
  unknownAgents: number | undefined;
}

/**
 * <p>Inventory data for installed discovery connectors.</p>
 * @public
 */
export interface CustomerConnectorInfo {
  /**
   * <p>Number of active discovery connectors.</p>
   * @public
   */
  activeConnectors: number | undefined;

  /**
   * <p>Number of healthy discovery connectors.</p>
   * @public
   */
  healthyConnectors: number | undefined;

  /**
   * <p>Number of blacklisted discovery connectors.</p>
   * @public
   */
  blackListedConnectors: number | undefined;

  /**
   * <p>Number of discovery connectors with status SHUTDOWN,</p>
   * @public
   */
  shutdownConnectors: number | undefined;

  /**
   * <p>Number of unhealthy discovery connectors.</p>
   * @public
   */
  unhealthyConnectors: number | undefined;

  /**
   * <p>Total number of discovery connectors.</p>
   * @public
   */
  totalConnectors: number | undefined;

  /**
   * <p>Number of unknown discovery connectors.</p>
   * @public
   */
  unknownConnectors: number | undefined;
}

/**
 * <p> The inventory data for installed Migration Evaluator collectors. </p>
 * @public
 */
export interface CustomerMeCollectorInfo {
  /**
   * <p> The number of active Migration Evaluator collectors. </p>
   * @public
   */
  activeMeCollectors: number | undefined;

  /**
   * <p> The number of healthy Migration Evaluator collectors. </p>
   * @public
   */
  healthyMeCollectors: number | undefined;

  /**
   * <p> The number of deny-listed Migration Evaluator collectors. </p>
   * @public
   */
  denyListedMeCollectors: number | undefined;

  /**
   * <p> The number of Migration Evaluator collectors with <code>SHUTDOWN</code> status. </p>
   * @public
   */
  shutdownMeCollectors: number | undefined;

  /**
   * <p> The number of unhealthy Migration Evaluator collectors. </p>
   * @public
   */
  unhealthyMeCollectors: number | undefined;

  /**
   * <p> The total number of Migration Evaluator collectors. </p>
   * @public
   */
  totalMeCollectors: number | undefined;

  /**
   * <p> The number of unknown Migration Evaluator collectors. </p>
   * @public
   */
  unknownMeCollectors: number | undefined;
}

/**
 * @public
 */
export interface GetDiscoverySummaryResponse {
  /**
   * <p>The number of servers discovered.</p>
   * @public
   */
  servers?: number | undefined;

  /**
   * <p>The number of applications discovered.</p>
   * @public
   */
  applications?: number | undefined;

  /**
   * <p>The number of servers mapped to applications.</p>
   * @public
   */
  serversMappedToApplications?: number | undefined;

  /**
   * <p>The number of servers mapped to tags.</p>
   * @public
   */
  serversMappedtoTags?: number | undefined;

  /**
   * <p>Details about discovered agents, including agent status and health.</p>
   * @public
   */
  agentSummary?: CustomerAgentInfo | undefined;

  /**
   * <p>Details about discovered connectors, including connector status and health.</p>
   * @public
   */
  connectorSummary?: CustomerConnectorInfo | undefined;

  /**
   * <p> Details about Migration Evaluator collectors, including collector status and health. </p>
   * @public
   */
  meCollectorSummary?: CustomerMeCollectorInfo | undefined;

  /**
   * <p> Details about Agentless Collector collectors, including status. </p>
   * @public
   */
  agentlessCollectorSummary?: CustomerAgentlessCollectorInfo | undefined;
}

/**
 * @public
 * @enum
 */
export const OrderString = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type OrderString = (typeof OrderString)[keyof typeof OrderString];

/**
 * <p>A field and direction for ordered output.</p>
 * @public
 */
export interface OrderByElement {
  /**
   * <p>The field on which to order.</p>
   * @public
   */
  fieldName: string | undefined;

  /**
   * <p>Ordering direction.</p>
   * @public
   */
  sortOrder?: OrderString | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsRequest {
  /**
   * <p>A valid configuration identified by Application Discovery Service. </p>
   * @public
   */
  configurationType: ConfigurationItemType | undefined;

  /**
   * <p>You can filter the request using various logical operators and a
   *         <i>key</i>-<i>value</i> format. For example: </p>
   *          <p>
   *             <code>\{"key": "serverType", "value": "webServer"\}</code>
   *          </p>
   *          <p>For a complete list of filter options and guidance about using them with this action,
   *       see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#ListConfigurations">Using the ListConfigurations Action</a> in the <i>Amazon Web Services Application Discovery
   *         Service User Guide</i>.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The total number of items to return. The maximum value is 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token to retrieve the next set of results. For example, if a previous call to
   *       ListConfigurations returned 100 items, but you set
   *         <code>ListConfigurationsRequest$maxResults</code> to 10, you received a set of 10 results
   *       along with a token. Use that token in this query to get the next set of 10.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Certain filter criteria return output that can be sorted in ascending or descending
   *       order. For a list of output characteristics for each filter, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#ListConfigurations">Using the ListConfigurations Action</a> in the <i>Amazon Web Services Application Discovery
   *         Service User Guide</i>.</p>
   * @public
   */
  orderBy?: OrderByElement[] | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsResponse {
  /**
   * <p>Returns configuration details, including the configuration ID, attribute names, and
   *       attribute values.</p>
   * @public
   */
  configurations?: Record<string, string>[] | undefined;

  /**
   * <p>Token to retrieve the next set of results. For example, if your call to
   *       ListConfigurations returned 100 items, but you set
   *         <code>ListConfigurationsRequest$maxResults</code> to 10, you received a set of 10 results
   *       along with this token. Use this token in the next query to retrieve the next set of
   *       10.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServerNeighborsRequest {
  /**
   * <p>Configuration ID of the server for which neighbors are being listed.</p>
   * @public
   */
  configurationId: string | undefined;

  /**
   * <p>Flag to indicate if port and protocol information is needed as part of the
   *       response.</p>
   * @public
   */
  portInformationNeeded?: boolean | undefined;

  /**
   * <p>List of configuration IDs to test for one-hop-away.</p>
   * @public
   */
  neighborConfigurationIds?: string[] | undefined;

  /**
   * <p>Maximum number of results to return in a single page of output.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token to retrieve the next set of results. For example, if you previously specified 100
   *       IDs for <code>ListServerNeighborsRequest$neighborConfigurationIds</code> but set
   *         <code>ListServerNeighborsRequest$maxResults</code> to 10, you received a set of 10 results
   *       along with a token. Use that token in this query to get the next set of 10.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Details about neighboring servers.</p>
 * @public
 */
export interface NeighborConnectionDetail {
  /**
   * <p>The ID of the server that opened the network connection.</p>
   * @public
   */
  sourceServerId: string | undefined;

  /**
   * <p>The ID of the server that accepted the network connection.</p>
   * @public
   */
  destinationServerId: string | undefined;

  /**
   * <p>The destination network port for the connection.</p>
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * <p>The network protocol used for the connection.</p>
   * @public
   */
  transportProtocol?: string | undefined;

  /**
   * <p>The number of open network connections with the neighboring server.</p>
   * @public
   */
  connectionsCount: number | undefined;
}

/**
 * @public
 */
export interface ListServerNeighborsResponse {
  /**
   * <p>List of distinct servers that are one hop away from the given server.</p>
   * @public
   */
  neighbors: NeighborConnectionDetail[] | undefined;

  /**
   * <p>Token to retrieve the next set of results. For example, if you specified 100 IDs for
   *         <code>ListServerNeighborsRequest$neighborConfigurationIds</code> but set
   *         <code>ListServerNeighborsRequest$maxResults</code> to 10, you received a set of 10 results
   *       along with this token. Use this token in the next query to retrieve the next set of
   *       10.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Count of distinct servers that are one hop away from the given server.</p>
   * @public
   */
  knownDependencyCount?: number | undefined;
}

/**
 * <p>
 *       The limit of 200 configuration IDs per request has been exceeded.
 *     </p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * @public
 */
export interface StartBatchDeleteConfigurationTaskRequest {
  /**
   * <p>
   *         The type of configuration item to delete. Supported types are: SERVER.
   *       </p>
   * @public
   */
  configurationType: DeletionConfigurationItemType | undefined;

  /**
   * <p>
   *         The list of configuration IDs that will be deleted by the task.
   *       </p>
   * @public
   */
  configurationIds: string[] | undefined;
}

/**
 * @public
 */
export interface StartBatchDeleteConfigurationTaskResponse {
  /**
   * <p>
   *         The unique identifier associated with the newly started deletion task.
   *       </p>
   * @public
   */
  taskId?: string | undefined;
}

/**
 * <p>Conflict error.</p>
 * @public
 */
export class ConflictErrorException extends __BaseException {
  readonly name: "ConflictErrorException" = "ConflictErrorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictErrorException, __BaseException>) {
    super({
      name: "ConflictErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictErrorException.prototype);
  }
}

/**
 * <p>This issue occurs when the same <code>clientRequestToken</code> is used with the
 *         <code>StartImportTask</code> action, but with different parameters. For example, you use the
 *       same request token but have two different import URLs, you can encounter this issue. If the
 *       import tasks are meant to be different, use a different <code>clientRequestToken</code>, and
 *       try again.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
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
   * <p>The unique ID assigned to this export.</p>
   * @public
   */
  exportId?: string | undefined;

  /**
   * <p>The name of the s3 bucket where the export data parquet files are stored.</p>
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * <p>The timestamp representing when the continuous export was started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The type of data collector used to gather this data (currently only offered for
   *       AGENT).</p>
   * @public
   */
  dataSource?: DataSource | undefined;

  /**
   * <p>A dictionary which describes how the data is stored.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>databaseName</code> - the name of the Glue database used to store the
   *           schema.</p>
   *             </li>
   *          </ul>
   * @public
   */
  schemaStorageConfig?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartDataCollectionByAgentIdsRequest {
  /**
   * <p>The IDs of the agents from which to start collecting data. If you send a request to an
   *       agent ID that you do not have permission to contact, according to your Amazon Web Services account, the
   *       service does not throw an exception. Instead, it returns the error in the
   *         <i>Description</i> field. If you send a request to multiple agents and you do
   *       not have permission to contact some of those agents, the system does not throw an exception.
   *       Instead, the system shows <code>Failed</code> in the <i>Description</i>
   *       field.</p>
   * @public
   */
  agentIds: string[] | undefined;
}

/**
 * @public
 */
export interface StartDataCollectionByAgentIdsResponse {
  /**
   * <p>Information about agents that were instructed to start collecting data. Information
   *       includes the agent ID, a description of the operation performed, and whether the agent
   *       configuration was updated.</p>
   * @public
   */
  agentsConfigurationStatus?: AgentConfigurationStatus[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportDataFormat = {
  CSV: "CSV",
} as const;

/**
 * @public
 */
export type ExportDataFormat = (typeof ExportDataFormat)[keyof typeof ExportDataFormat];

/**
 * <p>
 *       Specifies the performance metrics to use for the server that is used for recommendations.
 *     </p>
 * @public
 */
export interface UsageMetricBasis {
  /**
   * <p>
   *       A utilization metric that is used by the recommendations.
   *     </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *       Specifies the percentage of the specified utilization metric that is used by the recommendations.
   *     </p>
   * @public
   */
  percentageAdjust?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const OfferingClass = {
  CONVERTIBLE: "CONVERTIBLE",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type OfferingClass = (typeof OfferingClass)[keyof typeof OfferingClass];

/**
 * @public
 * @enum
 */
export const PurchasingOption = {
  ALL_UPFRONT: "ALL_UPFRONT",
  NO_UPFRONT: "NO_UPFRONT",
  PARTIAL_UPFRONT: "PARTIAL_UPFRONT",
} as const;

/**
 * @public
 */
export type PurchasingOption = (typeof PurchasingOption)[keyof typeof PurchasingOption];

/**
 * @public
 * @enum
 */
export const TermLength = {
  ONE_YEAR: "ONE_YEAR",
  THREE_YEAR: "THREE_YEAR",
} as const;

/**
 * @public
 */
export type TermLength = (typeof TermLength)[keyof typeof TermLength];

/**
 * <p>
 *       Used to provide Reserved Instance preferences for the recommendation.
 *     </p>
 * @public
 */
export interface ReservedInstanceOptions {
  /**
   * <p>
   *       The payment plan to use for your Reserved Instance.
   *     </p>
   * @public
   */
  purchasingOption: PurchasingOption | undefined;

  /**
   * <p>
   *     The flexibility to change the instance types needed for your Reserved Instance.
   *     </p>
   * @public
   */
  offeringClass: OfferingClass | undefined;

  /**
   * <p>
   *       The preferred duration of the Reserved Instance term.
   *     </p>
   * @public
   */
  termLength: TermLength | undefined;
}

/**
 * @public
 * @enum
 */
export const Tenancy = {
  DEDICATED: "DEDICATED",
  SHARED: "SHARED",
} as const;

/**
 * @public
 */
export type Tenancy = (typeof Tenancy)[keyof typeof Tenancy];

/**
 * <p>
 *       Indicates that the exported data must include EC2 instance type matches for on-premises servers
 *       that are discovered through Amazon Web Services Application Discovery Service.
 *     </p>
 * @public
 */
export interface Ec2RecommendationsExportPreferences {
  /**
   * <p>
   *       If set to true, the export
   *       <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html#API_StartExportTask_RequestSyntax">preferences</a>
   *       is set to <code>Ec2RecommendationsExportPreferences</code>.
   *     </p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>
   *       The recommended EC2 instance type that matches the CPU usage metric of server performance data.
   *     </p>
   * @public
   */
  cpuPerformanceMetricBasis?: UsageMetricBasis | undefined;

  /**
   * <p>
   *       The recommended EC2 instance type that matches the Memory usage metric of server performance data.
   *     </p>
   * @public
   */
  ramPerformanceMetricBasis?: UsageMetricBasis | undefined;

  /**
   * <p>
   *       The target tenancy to use for your recommended EC2 instances.
   *     </p>
   * @public
   */
  tenancy?: Tenancy | undefined;

  /**
   * <p>
   *       An array of instance types to exclude from recommendations.
   *     </p>
   * @public
   */
  excludedInstanceTypes?: string[] | undefined;

  /**
   * <p>
   *       The target Amazon Web Services Region for the recommendations.
   *       You can use any of the Region codes available for the chosen service,
   *       as listed in <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Amazon Web Services service endpoints</a> in the <i>Amazon Web Services General Reference</i>.
   *     </p>
   * @public
   */
  preferredRegion?: string | undefined;

  /**
   * <p>
   *       The contract type for a reserved instance.
   *       If blank, we assume an On-Demand instance is preferred.
   *     </p>
   * @public
   */
  reservedInstanceOptions?: ReservedInstanceOptions | undefined;
}

/**
 * <p>
 *       Indicates the type of data that is being exported. Only one
 *       <code>ExportPreferences</code> can be enabled for a
 *       <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.
 *     </p>
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
   * <p>
   *       If enabled, exported data includes EC2 instance type matches for on-premises servers
   *       discovered through Amazon Web Services Application Discovery Service.
   *     </p>
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

  export interface Visitor<T> {
    ec2RecommendationsPreferences: (value: Ec2RecommendationsExportPreferences) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ExportPreferences, visitor: Visitor<T>): T => {
    if (value.ec2RecommendationsPreferences !== undefined)
      return visitor.ec2RecommendationsPreferences(value.ec2RecommendationsPreferences);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface StartExportTaskRequest {
  /**
   * <p>The file format for the returned export data. Default value is <code>CSV</code>.
   *         <b>Note:</b>
   *             <i>The</i>
   *             <code>GRAPHML</code>
   *             <i>option has been deprecated.</i>
   *          </p>
   * @public
   */
  exportDataFormat?: ExportDataFormat[] | undefined;

  /**
   * <p>If a filter is present, it selects the single <code>agentId</code> of the Application
   *       Discovery Agent for which data is exported. The <code>agentId</code> can be found in the
   *       results of the <code>DescribeAgents</code> API or CLI. If no filter is present,
   *         <code>startTime</code> and <code>endTime</code> are ignored and exported data includes both
   *       Amazon Web Services Application Discovery Service Agentless Collector collectors data and summary data from Application Discovery
   *       Agent agents. </p>
   * @public
   */
  filters?: ExportFilter[] | undefined;

  /**
   * <p>The start timestamp for exported data from the single Application Discovery Agent
   *       selected in the filters. If no value is specified, data is exported starting from the first
   *       data collected by the agent.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The end timestamp for exported data from the single Application Discovery Agent
   *       selected in the filters. If no value is specified, exported data includes the most recent data
   *       collected by the agent.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>
   *       Indicates the type of data that needs to be exported. Only one
   *       <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ExportPreferences.html">ExportPreferences</a> can be enabled at any time.
   *     </p>
   * @public
   */
  preferences?: ExportPreferences | undefined;
}

/**
 * @public
 */
export interface StartExportTaskResponse {
  /**
   * <p>A unique identifier used to query the status of an export request.</p>
   * @public
   */
  exportId?: string | undefined;
}

/**
 * @public
 */
export interface StartImportTaskRequest {
  /**
   * <p>Optional. A unique token that you can provide to prevent the same import request from
   *       occurring more than once. If you don't provide a token, a token is automatically
   *       generated.</p>
   *          <p>Sending more than one <code>StartImportTask</code> request with the same client request
   *       token will return information about the original import task with that client request
   *       token.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>A descriptive name for this request. You can use this name to filter future requests
   *       related to this import task, such as identifying applications and servers that were included
   *       in this import task. We recommend that you use a meaningful name for each import task.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The URL for your import file that you've uploaded to Amazon S3.</p>
   *          <note>
   *             <p>If you're using the Amazon Web Services CLI, this URL is structured as follows:
   *           <code>s3://BucketName/ImportFileName.CSV</code>
   *             </p>
   *          </note>
   * @public
   */
  importUrl: string | undefined;
}

/**
 * @public
 */
export interface StartImportTaskResponse {
  /**
   * <p>An array of information related to the import task request including status information,
   *       times, IDs, the Amazon S3 Object URL for the import file, and more. </p>
   * @public
   */
  task?: ImportTask | undefined;
}

/**
 * @public
 */
export interface StopContinuousExportRequest {
  /**
   * <p>The unique ID assigned to this export.</p>
   * @public
   */
  exportId: string | undefined;
}

/**
 * @public
 */
export interface StopContinuousExportResponse {
  /**
   * <p>Timestamp that represents when this continuous export started collecting
   *       data.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>Timestamp that represents when this continuous export was stopped.</p>
   * @public
   */
  stopTime?: Date | undefined;
}

/**
 * @public
 */
export interface StopDataCollectionByAgentIdsRequest {
  /**
   * <p>The IDs of the agents from which to stop collecting data.</p>
   * @public
   */
  agentIds: string[] | undefined;
}

/**
 * @public
 */
export interface StopDataCollectionByAgentIdsResponse {
  /**
   * <p>Information about the agents that were instructed to stop collecting data. Information
   *       includes the agent ID, a description of the operation performed, and whether the agent
   *       configuration was updated.</p>
   * @public
   */
  agentsConfigurationStatus?: AgentConfigurationStatus[] | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>Configuration ID of the application to be updated.</p>
   * @public
   */
  configurationId: string | undefined;

  /**
   * <p>New name of the application to be updated.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>New description of the application to be updated.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {}

/**
 * @internal
 */
export const AgentNetworkInfoFilterSensitiveLog = (obj: AgentNetworkInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AgentInfoFilterSensitiveLog = (obj: AgentInfo): any => ({
  ...obj,
  ...(obj.agentNetworkInfoList && { agentNetworkInfoList: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeAgentsResponseFilterSensitiveLog = (obj: DescribeAgentsResponse): any => ({
  ...obj,
  ...(obj.agentsInfo && { agentsInfo: obj.agentsInfo.map((item) => AgentInfoFilterSensitiveLog(item)) }),
});
