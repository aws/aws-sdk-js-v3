import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Information about agents or connectors that were instructed to start collecting data.
 *       Information includes the agent/connector ID, a description of the operation, and whether the
 *       agent/connector configuration was updated.</p>
 */
export interface AgentConfigurationStatus {
  __type?: "AgentConfigurationStatus";
  /**
   * <p>The agent/connector ID.</p>
   */
  agentId?: string;

  /**
   * <p>A description of the operation performed.</p>
   */
  description?: string;

  /**
   * <p>Information about the status of the <code>StartDataCollection</code> and
   *         <code>StopDataCollection</code> operations. The system has recorded the data collection
   *       operation. The agent/connector receives this command the next time it polls for a new command.
   *     </p>
   */
  operationSucceeded?: boolean;
}

export namespace AgentConfigurationStatus {
  export const filterSensitiveLog = (obj: AgentConfigurationStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is AgentConfigurationStatus =>
    __isa(o, "AgentConfigurationStatus");
}

/**
 * <p>Information about agents or connectors associated with the user’s AWS account.
 *       Information includes agent or connector IDs, IP addresses, media access control (MAC)
 *       addresses, agent or connector health, hostname where the agent or connector resides, and agent
 *       version for each agent.</p>
 */
export interface AgentInfo {
  __type?: "AgentInfo";
  /**
   * <p>The agent or connector ID.</p>
   */
  agentId?: string;

  /**
   * <p>Network details about the host where the agent or connector resides.</p>
   */
  agentNetworkInfoList?: AgentNetworkInfo[];

  /**
   * <p>Type of agent.</p>
   */
  agentType?: string;

  /**
   * <p>Status of the collection process for an agent or connector.</p>
   */
  collectionStatus?: string;

  /**
   * <p>The ID of the connector.</p>
   */
  connectorId?: string;

  /**
   * <p>The health of the agent or connector.</p>
   */
  health?: AgentStatus | string;

  /**
   * <p>The name of the host where the agent or connector resides. The host can be a server or
   *       virtual machine.</p>
   */
  hostName?: string;

  /**
   * <p>Time since agent or connector health was reported.</p>
   */
  lastHealthPingTime?: string;

  /**
   * <p>Agent's first registration timestamp in UTC.</p>
   */
  registeredTime?: string;

  /**
   * <p>The agent or connector version.</p>
   */
  version?: string;
}

export namespace AgentInfo {
  export const filterSensitiveLog = (obj: AgentInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is AgentInfo => __isa(o, "AgentInfo");
}

/**
 * <p>Network details about the host where the agent/connector resides.</p>
 */
export interface AgentNetworkInfo {
  __type?: "AgentNetworkInfo";
  /**
   * <p>The IP address for the host where the agent/connector resides.</p>
   */
  ipAddress?: string;

  /**
   * <p>The MAC address for the host where the agent/connector resides.</p>
   */
  macAddress?: string;
}

export namespace AgentNetworkInfo {
  export const filterSensitiveLog = (obj: AgentNetworkInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is AgentNetworkInfo =>
    __isa(o, "AgentNetworkInfo");
}

export enum AgentStatus {
  BLACKLISTED = "BLACKLISTED",
  HEALTHY = "HEALTHY",
  RUNNING = "RUNNING",
  SHUTDOWN = "SHUTDOWN",
  UNHEALTHY = "UNHEALTHY",
  UNKNOWN = "UNKNOWN"
}

export interface AssociateConfigurationItemsToApplicationRequest {
  __type?: "AssociateConfigurationItemsToApplicationRequest";
  /**
   * <p>The configuration ID of an application with which items are to be associated.</p>
   */
  applicationConfigurationId: string | undefined;

  /**
   * <p>The ID of each configuration item to be associated with an application.</p>
   */
  configurationIds: string[] | undefined;
}

export namespace AssociateConfigurationItemsToApplicationRequest {
  export const filterSensitiveLog = (
    obj: AssociateConfigurationItemsToApplicationRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is AssociateConfigurationItemsToApplicationRequest =>
    __isa(o, "AssociateConfigurationItemsToApplicationRequest");
}

export interface AssociateConfigurationItemsToApplicationResponse {
  __type?: "AssociateConfigurationItemsToApplicationResponse";
}

export namespace AssociateConfigurationItemsToApplicationResponse {
  export const filterSensitiveLog = (
    obj: AssociateConfigurationItemsToApplicationResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is AssociateConfigurationItemsToApplicationResponse =>
    __isa(o, "AssociateConfigurationItemsToApplicationResponse");
}

/**
 * <p>The AWS user account does not have permission to perform the action. Check the IAM
 *       policy associated with this account.</p>
 */
export interface AuthorizationErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorizationErrorException";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationErrorException {
  export const filterSensitiveLog = (
    obj: AuthorizationErrorException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizationErrorException =>
    __isa(o, "AuthorizationErrorException");
}

/**
 * <p>Error messages returned for each import task that you deleted as a response for this
 *       command.</p>
 */
export interface BatchDeleteImportDataError {
  __type?: "BatchDeleteImportDataError";
  /**
   * <p>The type of error that occurred for a specific import task.</p>
   */
  errorCode?: BatchDeleteImportDataErrorCode | string;

  /**
   * <p>The description of the error that occurred for a specific import task.</p>
   */
  errorDescription?: string;

  /**
   * <p>The unique import ID associated with the error that occurred.</p>
   */
  importTaskId?: string;
}

export namespace BatchDeleteImportDataError {
  export const filterSensitiveLog = (obj: BatchDeleteImportDataError): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteImportDataError =>
    __isa(o, "BatchDeleteImportDataError");
}

export enum BatchDeleteImportDataErrorCode {
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  NOT_FOUND = "NOT_FOUND",
  OVER_LIMIT = "OVER_LIMIT"
}

export interface BatchDeleteImportDataRequest {
  __type?: "BatchDeleteImportDataRequest";
  /**
   * <p>The IDs for the import tasks that you want to delete.</p>
   */
  importTaskIds: string[] | undefined;
}

export namespace BatchDeleteImportDataRequest {
  export const filterSensitiveLog = (
    obj: BatchDeleteImportDataRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteImportDataRequest =>
    __isa(o, "BatchDeleteImportDataRequest");
}

export interface BatchDeleteImportDataResponse {
  __type?: "BatchDeleteImportDataResponse";
  /**
   * <p>Error messages returned for each import task that you deleted as a response for this
   *       command.</p>
   */
  errors?: BatchDeleteImportDataError[];
}

export namespace BatchDeleteImportDataResponse {
  export const filterSensitiveLog = (
    obj: BatchDeleteImportDataResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteImportDataResponse =>
    __isa(o, "BatchDeleteImportDataResponse");
}

export enum ConfigurationItemType {
  APPLICATION = "APPLICATION",
  CONNECTIONS = "CONNECTION",
  PROCESS = "PROCESS",
  SERVER = "SERVER"
}

/**
 * <p>Tags for a configuration item. Tags are metadata that help you categorize IT
 *       assets.</p>
 */
export interface ConfigurationTag {
  __type?: "ConfigurationTag";
  /**
   * <p>The configuration ID for the item to tag. You can specify a list of keys and
   *       values.</p>
   */
  configurationId?: string;

  /**
   * <p>A type of IT asset to tag.</p>
   */
  configurationType?: ConfigurationItemType | string;

  /**
   * <p>A type of tag on which to filter. For example,
   *       <i>serverType</i>.</p>
   */
  key?: string;

  /**
   * <p>The time the configuration tag was created in Coordinated Universal Time
   *       (UTC).</p>
   */
  timeOfCreation?: Date;

  /**
   * <p>A value on which to filter. For example <i>key = serverType</i> and
   *         <i>value = web server</i>.</p>
   */
  value?: string;
}

export namespace ConfigurationTag {
  export const filterSensitiveLog = (obj: ConfigurationTag): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConfigurationTag =>
    __isa(o, "ConfigurationTag");
}

/**
 * <p></p>
 */
export interface ConflictErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConflictErrorException";
  $fault: "client";
  message?: string;
}

export namespace ConflictErrorException {
  export const filterSensitiveLog = (obj: ConflictErrorException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictErrorException =>
    __isa(o, "ConflictErrorException");
}

/**
 * <p>A list of continuous export descriptions.</p>
 */
export interface ContinuousExportDescription {
  __type?: "ContinuousExportDescription";
  /**
   * <p>The type of data collector used to gather this data (currently only offered for
   *       AGENT).</p>
   */
  dataSource?: DataSource | string;

  /**
   * <p>The unique ID assigned to this export.</p>
   */
  exportId?: string;

  /**
   * <p>The name of the s3 bucket where the export data parquet files are stored.</p>
   */
  s3Bucket?: string;

  /**
   * <p>An object which describes how the data is stored.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>databaseName</code> - the name of the Glue database used to store the
   *           schema.</p>
   *             </li>
   *          </ul>
   */
  schemaStorageConfig?: { [key: string]: string };

  /**
   * <p>The timestamp representing when the continuous export was started.</p>
   */
  startTime?: Date;

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
   */
  status?: ContinuousExportStatus | string;

  /**
   * <p>Contains information about any errors that have occurred. This data type can have the
   *       following values:</p>
   *
   *          <ul>
   *             <li>
   *                <p>ACCESS_DENIED - You don’t have permission to start Data Exploration in Amazon
   *           Athena. Contact your AWS administrator for help. For more information, see <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/setting-up.html">Setting Up AWS Application Discovery Service</a> in the Application Discovery
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
   *           your IAM User is missing the AWSApplicationDiscoveryServiceFirehose role. Turn on Data
   *           Exploration in Amazon Athena and try again. For more information, see <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/setting-up.html#setting-up-user-policy">Step 3: Provide Application Discovery Service Access to Non-Administrator Users by
   *             Attaching Policies</a> in the Application Discovery Service User Guide.</p>
   *             </li>
   *             <li>
   *                <p>FIREHOSE_STREAM_DOES_NOT_EXIST - The Data Exploration feature is in an error state
   *           because your IAM User is missing one or more of the Kinesis data delivery
   *           streams.</p>
   *             </li>
   *             <li>
   *                <p>INTERNAL_FAILURE - The Data Exploration feature is in an error state because of an
   *           internal failure. Try again later. If this problem persists, contact AWS
   *           Support.</p>
   *             </li>
   *             <li>
   *                <p>S3_BUCKET_LIMIT_FAILURE - You reached the limit for Amazon S3 buckets. Reduce the
   *           number of Amazon S3 buckets or request a limit increase and try again. For more
   *           information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket
   *             Restrictions and Limitations</a> in the Amazon Simple Storage Service Developer
   *           Guide.</p>
   *             </li>
   *             <li>
   *                <p>S3_NOT_SIGNED_UP - Your account is not signed up for the Amazon S3 service. You
   *           must sign up before you can use Amazon S3. You can sign up at the following URL: <a href="https://aws.amazon.com/s3">https://aws.amazon.com/s3</a>.</p>
   *             </li>
   *          </ul>
   */
  statusDetail?: string;

  /**
   * <p>The timestamp that represents when this continuous export was stopped.</p>
   */
  stopTime?: Date;
}

export namespace ContinuousExportDescription {
  export const filterSensitiveLog = (
    obj: ContinuousExportDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContinuousExportDescription =>
    __isa(o, "ContinuousExportDescription");
}

export enum ContinuousExportStatus {
  ACTIVE = "ACTIVE",
  ERROR = "ERROR",
  INACTIVE = "INACTIVE",
  START_FAILED = "START_FAILED",
  START_IN_PROGRESS = "START_IN_PROGRESS",
  STOP_FAILED = "STOP_FAILED",
  STOP_IN_PROGRESS = "STOP_IN_PROGRESS"
}

export interface CreateApplicationRequest {
  __type?: "CreateApplicationRequest";
  /**
   * <p>Description of the application to be created.</p>
   */
  description?: string;

  /**
   * <p>Name of the application to be created.</p>
   */
  name: string | undefined;
}

export namespace CreateApplicationRequest {
  export const filterSensitiveLog = (obj: CreateApplicationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateApplicationRequest =>
    __isa(o, "CreateApplicationRequest");
}

export interface CreateApplicationResponse {
  __type?: "CreateApplicationResponse";
  /**
   * <p>Configuration ID of an application to be created.</p>
   */
  configurationId?: string;
}

export namespace CreateApplicationResponse {
  export const filterSensitiveLog = (obj: CreateApplicationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateApplicationResponse =>
    __isa(o, "CreateApplicationResponse");
}

export interface CreateTagsRequest {
  __type?: "CreateTagsRequest";
  /**
   * <p>A list of configuration items that you want to tag.</p>
   */
  configurationIds: string[] | undefined;

  /**
   * <p>Tags that you want to associate with one or more configuration items. Specify the tags
   *       that you want to create in a <i>key</i>-<i>value</i> format. For
   *       example:</p>
   *          <p>
   *             <code>{"key": "serverType", "value": "webServer"}</code>
   *          </p>
   */
  tags: Tag[] | undefined;
}

export namespace CreateTagsRequest {
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTagsRequest =>
    __isa(o, "CreateTagsRequest");
}

export interface CreateTagsResponse {
  __type?: "CreateTagsResponse";
}

export namespace CreateTagsResponse {
  export const filterSensitiveLog = (obj: CreateTagsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTagsResponse =>
    __isa(o, "CreateTagsResponse");
}

/**
 * <p>Inventory data for installed discovery agents.</p>
 */
export interface CustomerAgentInfo {
  __type?: "CustomerAgentInfo";
  /**
   * <p>Number of active discovery agents.</p>
   */
  activeAgents: number | undefined;

  /**
   * <p>Number of blacklisted discovery agents.</p>
   */
  blackListedAgents: number | undefined;

  /**
   * <p>Number of healthy discovery agents</p>
   */
  healthyAgents: number | undefined;

  /**
   * <p>Number of discovery agents with status SHUTDOWN.</p>
   */
  shutdownAgents: number | undefined;

  /**
   * <p>Total number of discovery agents.</p>
   */
  totalAgents: number | undefined;

  /**
   * <p>Number of unhealthy discovery agents.</p>
   */
  unhealthyAgents: number | undefined;

  /**
   * <p>Number of unknown discovery agents.</p>
   */
  unknownAgents: number | undefined;
}

export namespace CustomerAgentInfo {
  export const filterSensitiveLog = (obj: CustomerAgentInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is CustomerAgentInfo =>
    __isa(o, "CustomerAgentInfo");
}

/**
 * <p>Inventory data for installed discovery connectors.</p>
 */
export interface CustomerConnectorInfo {
  __type?: "CustomerConnectorInfo";
  /**
   * <p>Number of active discovery connectors.</p>
   */
  activeConnectors: number | undefined;

  /**
   * <p>Number of blacklisted discovery connectors.</p>
   */
  blackListedConnectors: number | undefined;

  /**
   * <p>Number of healthy discovery connectors.</p>
   */
  healthyConnectors: number | undefined;

  /**
   * <p>Number of discovery connectors with status SHUTDOWN,</p>
   */
  shutdownConnectors: number | undefined;

  /**
   * <p>Total number of discovery connectors.</p>
   */
  totalConnectors: number | undefined;

  /**
   * <p>Number of unhealthy discovery connectors.</p>
   */
  unhealthyConnectors: number | undefined;

  /**
   * <p>Number of unknown discovery connectors.</p>
   */
  unknownConnectors: number | undefined;
}

export namespace CustomerConnectorInfo {
  export const filterSensitiveLog = (obj: CustomerConnectorInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is CustomerConnectorInfo =>
    __isa(o, "CustomerConnectorInfo");
}

export enum DataSource {
  AGENT = "AGENT"
}

export interface DeleteApplicationsRequest {
  __type?: "DeleteApplicationsRequest";
  /**
   * <p>Configuration ID of an application to be deleted.</p>
   */
  configurationIds: string[] | undefined;
}

export namespace DeleteApplicationsRequest {
  export const filterSensitiveLog = (obj: DeleteApplicationsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteApplicationsRequest =>
    __isa(o, "DeleteApplicationsRequest");
}

export interface DeleteApplicationsResponse {
  __type?: "DeleteApplicationsResponse";
}

export namespace DeleteApplicationsResponse {
  export const filterSensitiveLog = (obj: DeleteApplicationsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteApplicationsResponse =>
    __isa(o, "DeleteApplicationsResponse");
}

export interface DeleteTagsRequest {
  __type?: "DeleteTagsRequest";
  /**
   * <p>A list of configuration items with tags that you want to delete.</p>
   */
  configurationIds: string[] | undefined;

  /**
   * <p>Tags that you want to delete from one or more configuration items. Specify the tags
   *       that you want to delete in a <i>key</i>-<i>value</i> format. For
   *       example:</p>
   *          <p>
   *             <code>{"key": "serverType", "value": "webServer"}</code>
   *          </p>
   */
  tags?: Tag[];
}

export namespace DeleteTagsRequest {
  export const filterSensitiveLog = (obj: DeleteTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTagsRequest =>
    __isa(o, "DeleteTagsRequest");
}

export interface DeleteTagsResponse {
  __type?: "DeleteTagsResponse";
}

export namespace DeleteTagsResponse {
  export const filterSensitiveLog = (obj: DeleteTagsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTagsResponse =>
    __isa(o, "DeleteTagsResponse");
}

export interface DescribeAgentsRequest {
  __type?: "DescribeAgentsRequest";
  /**
   * <p>The agent or the Connector IDs for which you want information. If you specify no IDs,
   *       the system returns information about all agents/Connectors associated with your AWS user
   *       account.</p>
   */
  agentIds?: string[];

  /**
   * <p>You can filter the request using various logical operators and a
   *         <i>key</i>-<i>value</i> format. For example: </p>
   *          <p>
   *             <code>{"key": "collectionStatus", "value": "STARTED"}</code>
   *          </p>
   */
  filters?: Filter[];

  /**
   * <p>The total number of agents/Connectors to return in a single page of output. The maximum
   *       value is 100.</p>
   */
  maxResults?: number;

  /**
   * <p>Token to retrieve the next set of results. For example, if you previously specified 100
   *       IDs for <code>DescribeAgentsRequest$agentIds</code> but set
   *         <code>DescribeAgentsRequest$maxResults</code> to 10, you received a set of 10 results along
   *       with a token. Use that token in this query to get the next set of 10.</p>
   */
  nextToken?: string;
}

export namespace DescribeAgentsRequest {
  export const filterSensitiveLog = (obj: DescribeAgentsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAgentsRequest =>
    __isa(o, "DescribeAgentsRequest");
}

export interface DescribeAgentsResponse {
  __type?: "DescribeAgentsResponse";
  /**
   * <p>Lists agents or the Connector by ID or lists all agents/Connectors associated with your
   *       user account if you did not specify an agent/Connector ID. The output includes agent/Connector
   *       IDs, IP addresses, media access control (MAC) addresses, agent/Connector health, host name
   *       where the agent/Connector resides, and the version number of each agent/Connector.</p>
   */
  agentsInfo?: AgentInfo[];

  /**
   * <p>Token to retrieve the next set of results. For example, if you specified 100 IDs for
   *         <code>DescribeAgentsRequest$agentIds</code> but set
   *         <code>DescribeAgentsRequest$maxResults</code> to 10, you received a set of 10 results along
   *       with this token. Use this token in the next query to retrieve the next set of 10.</p>
   */
  nextToken?: string;
}

export namespace DescribeAgentsResponse {
  export const filterSensitiveLog = (obj: DescribeAgentsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAgentsResponse =>
    __isa(o, "DescribeAgentsResponse");
}

export interface DescribeConfigurationsRequest {
  __type?: "DescribeConfigurationsRequest";
  /**
   * <p>One or more configuration IDs.</p>
   */
  configurationIds: string[] | undefined;
}

export namespace DescribeConfigurationsRequest {
  export const filterSensitiveLog = (
    obj: DescribeConfigurationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeConfigurationsRequest =>
    __isa(o, "DescribeConfigurationsRequest");
}

export interface DescribeConfigurationsResponse {
  __type?: "DescribeConfigurationsResponse";
  /**
   * <p>A key in the response map. The value is an array of data.</p>
   */
  configurations?: { [key: string]: string }[];
}

export namespace DescribeConfigurationsResponse {
  export const filterSensitiveLog = (
    obj: DescribeConfigurationsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeConfigurationsResponse =>
    __isa(o, "DescribeConfigurationsResponse");
}

export interface DescribeContinuousExportsRequest {
  __type?: "DescribeContinuousExportsRequest";
  /**
   * <p>The unique IDs assigned to the exports.</p>
   */
  exportIds?: string[];

  /**
   * <p>A number between 1 and 100 specifying the maximum number of continuous export
   *       descriptions returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token from the previous call to <code>DescribeExportTasks</code>.</p>
   */
  nextToken?: string;
}

export namespace DescribeContinuousExportsRequest {
  export const filterSensitiveLog = (
    obj: DescribeContinuousExportsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeContinuousExportsRequest =>
    __isa(o, "DescribeContinuousExportsRequest");
}

export interface DescribeContinuousExportsResponse {
  __type?: "DescribeContinuousExportsResponse";
  /**
   * <p>A list of continuous export descriptions.</p>
   */
  descriptions?: ContinuousExportDescription[];

  /**
   * <p>The token from the previous call to <code>DescribeExportTasks</code>.</p>
   */
  nextToken?: string;
}

export namespace DescribeContinuousExportsResponse {
  export const filterSensitiveLog = (
    obj: DescribeContinuousExportsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeContinuousExportsResponse =>
    __isa(o, "DescribeContinuousExportsResponse");
}

export interface DescribeExportConfigurationsRequest {
  __type?: "DescribeExportConfigurationsRequest";
  /**
   * <p>A list of continuous export IDs to search for.</p>
   */
  exportIds?: string[];

  /**
   * <p>A number between 1 and 100 specifying the maximum number of continuous export
   *       descriptions returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token from the previous call to describe-export-tasks.</p>
   */
  nextToken?: string;
}

export namespace DescribeExportConfigurationsRequest {
  export const filterSensitiveLog = (
    obj: DescribeExportConfigurationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeExportConfigurationsRequest =>
    __isa(o, "DescribeExportConfigurationsRequest");
}

export interface DescribeExportConfigurationsResponse {
  __type?: "DescribeExportConfigurationsResponse";
  /**
   * <p></p>
   */
  exportsInfo?: ExportInfo[];

  /**
   * <p>The token from the previous call to describe-export-tasks.</p>
   */
  nextToken?: string;
}

export namespace DescribeExportConfigurationsResponse {
  export const filterSensitiveLog = (
    obj: DescribeExportConfigurationsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeExportConfigurationsResponse =>
    __isa(o, "DescribeExportConfigurationsResponse");
}

export interface DescribeExportTasksRequest {
  __type?: "DescribeExportTasksRequest";
  /**
   * <p>One or more unique identifiers used to query the status of an export request.</p>
   */
  exportIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AgentId</code> - ID of the agent whose collected data will be
   *           exported</p>
   *             </li>
   *          </ul>
   */
  filters?: ExportFilter[];

  /**
   * <p>The maximum number of volume results returned by <code>DescribeExportTasks</code> in
   *       paginated output. When this parameter is used, <code>DescribeExportTasks</code> only returns
   *         <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *       response element.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *         <code>DescribeExportTasks</code> request where <code>maxResults</code> was used and the
   *       results exceeded the value of that parameter. Pagination continues from the end of the
   *       previous results that returned the <code>nextToken</code> value. This value is null when there
   *       are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace DescribeExportTasksRequest {
  export const filterSensitiveLog = (obj: DescribeExportTasksRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeExportTasksRequest =>
    __isa(o, "DescribeExportTasksRequest");
}

export interface DescribeExportTasksResponse {
  __type?: "DescribeExportTasksResponse";
  /**
   * <p>Contains one or more sets of export request details. When the status of a request is
   *         <code>SUCCEEDED</code>, the response includes a URL for an Amazon S3 bucket where you can
   *       view the data in a CSV file.</p>
   */
  exportsInfo?: ExportInfo[];

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *         <code>DescribeExportTasks</code> request. When the results of a
   *         <code>DescribeExportTasks</code> request exceed <code>maxResults</code>, this value can be
   *       used to retrieve the next page of results. This value is null when there are no more results
   *       to return.</p>
   */
  nextToken?: string;
}

export namespace DescribeExportTasksResponse {
  export const filterSensitiveLog = (
    obj: DescribeExportTasksResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeExportTasksResponse =>
    __isa(o, "DescribeExportTasksResponse");
}

export interface DescribeImportTasksRequest {
  __type?: "DescribeImportTasksRequest";
  /**
   * <p>An array of name-value pairs that you provide to filter the results for the
   *         <code>DescribeImportTask</code> request to a specific subset of results. Currently, wildcard
   *       values aren't supported for filters.</p>
   */
  filters?: ImportTaskFilter[];

  /**
   * <p>The maximum number of results that you want this request to return, up to 100.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to request a specific page of results.</p>
   */
  nextToken?: string;
}

export namespace DescribeImportTasksRequest {
  export const filterSensitiveLog = (obj: DescribeImportTasksRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeImportTasksRequest =>
    __isa(o, "DescribeImportTasksRequest");
}

export interface DescribeImportTasksResponse {
  __type?: "DescribeImportTasksResponse";
  /**
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A returned array of import tasks that match any applied filters, up to the specified
   *       number of maximum results.</p>
   */
  tasks?: ImportTask[];
}

export namespace DescribeImportTasksResponse {
  export const filterSensitiveLog = (
    obj: DescribeImportTasksResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeImportTasksResponse =>
    __isa(o, "DescribeImportTasksResponse");
}

export interface DescribeTagsRequest {
  __type?: "DescribeTagsRequest";
  /**
   * <p>You can filter the list using a <i>key</i>-<i>value</i>
   *       format. You can separate these items by using logical operators. Allowed filters include
   *         <code>tagKey</code>, <code>tagValue</code>, and <code>configurationId</code>. </p>
   */
  filters?: TagFilter[];

  /**
   * <p>The total number of items to return in a single page of output. The maximum value is
   *       100.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  nextToken?: string;
}

export namespace DescribeTagsRequest {
  export const filterSensitiveLog = (obj: DescribeTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTagsRequest =>
    __isa(o, "DescribeTagsRequest");
}

export interface DescribeTagsResponse {
  __type?: "DescribeTagsResponse";
  /**
   * <p>The call returns a token. Use this token to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Depending on the input, this is a list of configuration items tagged with a specific
   *       tag, or a list of tags for a specific configuration item.</p>
   */
  tags?: ConfigurationTag[];
}

export namespace DescribeTagsResponse {
  export const filterSensitiveLog = (obj: DescribeTagsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTagsResponse =>
    __isa(o, "DescribeTagsResponse");
}

export interface DisassociateConfigurationItemsFromApplicationRequest {
  __type?: "DisassociateConfigurationItemsFromApplicationRequest";
  /**
   * <p>Configuration ID of an application from which each item is disassociated.</p>
   */
  applicationConfigurationId: string | undefined;

  /**
   * <p>Configuration ID of each item to be disassociated from an application.</p>
   */
  configurationIds: string[] | undefined;
}

export namespace DisassociateConfigurationItemsFromApplicationRequest {
  export const filterSensitiveLog = (
    obj: DisassociateConfigurationItemsFromApplicationRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DisassociateConfigurationItemsFromApplicationRequest =>
    __isa(o, "DisassociateConfigurationItemsFromApplicationRequest");
}

export interface DisassociateConfigurationItemsFromApplicationResponse {
  __type?: "DisassociateConfigurationItemsFromApplicationResponse";
}

export namespace DisassociateConfigurationItemsFromApplicationResponse {
  export const filterSensitiveLog = (
    obj: DisassociateConfigurationItemsFromApplicationResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DisassociateConfigurationItemsFromApplicationResponse =>
    __isa(o, "DisassociateConfigurationItemsFromApplicationResponse");
}

export interface ExportConfigurationsResponse {
  __type?: "ExportConfigurationsResponse";
  /**
   * <p>A unique identifier that you can use to query the export status.</p>
   */
  exportId?: string;
}

export namespace ExportConfigurationsResponse {
  export const filterSensitiveLog = (
    obj: ExportConfigurationsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExportConfigurationsResponse =>
    __isa(o, "ExportConfigurationsResponse");
}

export enum ExportDataFormat {
  CSV = "CSV",
  GRAPHML = "GRAPHML"
}

/**
 * <p>Used to select which agent's data is to be exported. A single agent ID may be selected
 *       for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.</p>
 */
export interface ExportFilter {
  __type?: "ExportFilter";
  /**
   * <p>Supported condition: <code>EQUALS</code>
   *          </p>
   */
  condition: string | undefined;

  /**
   * <p>A single <code>ExportFilter</code> name. Supported filters:
   *       <code>agentId</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>A single <code>agentId</code> for a Discovery Agent. An <code>agentId</code> can be
   *       found using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeAgents</a> action. Typically an ADS <code>agentId</code> is in the form
   *         <code>o-0123456789abcdef0</code>.</p>
   */
  values: string[] | undefined;
}

export namespace ExportFilter {
  export const filterSensitiveLog = (obj: ExportFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExportFilter => __isa(o, "ExportFilter");
}

/**
 * <p>Information regarding the export status of discovered data. The value is an array of
 *       objects.</p>
 */
export interface ExportInfo {
  __type?: "ExportInfo";
  /**
   * <p>A URL for an Amazon S3 bucket where you can review the exported data. The URL is
   *       displayed only if the export succeeded.</p>
   */
  configurationsDownloadUrl?: string;

  /**
   * <p>A unique identifier used to query an export.</p>
   */
  exportId: string | undefined;

  /**
   * <p>The time that the data export was initiated.</p>
   */
  exportRequestTime: Date | undefined;

  /**
   * <p>The status of the data export job.</p>
   */
  exportStatus: ExportStatus | string | undefined;

  /**
   * <p>If true, the export of agent information exceeded the size limit for a single export
   *       and the exported data is incomplete for the requested time range. To address this, select a
   *       smaller time range for the export by using <code>startDate</code> and
   *       <code>endDate</code>.</p>
   */
  isTruncated?: boolean;

  /**
   * <p>The <code>endTime</code> used in the <code>StartExportTask</code> request. If no
   *         <code>endTime</code> was requested, this result does not appear in
   *       <code>ExportInfo</code>.</p>
   */
  requestedEndTime?: Date;

  /**
   * <p>The value of <code>startTime</code> parameter in the <code>StartExportTask</code>
   *       request. If no <code>startTime</code> was requested, this result does not appear in
   *         <code>ExportInfo</code>.</p>
   */
  requestedStartTime?: Date;

  /**
   * <p>A status message provided for API callers.</p>
   */
  statusMessage: string | undefined;
}

export namespace ExportInfo {
  export const filterSensitiveLog = (obj: ExportInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExportInfo => __isa(o, "ExportInfo");
}

export enum ExportStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED"
}

/**
 * <p>A filter that can use conditional operators.</p>
 *          <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered
 *         Configuration Items</a> in the <i>AWS Application Discovery Service User
 *         Guide</i>. </p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>A conditional operator. The following operators are valid: EQUALS, NOT_EQUALS,
   *       CONTAINS, NOT_CONTAINS. If you specify multiple filters, the system utilizes all filters as
   *       though concatenated by <i>AND</i>. If you specify multiple values for a
   *       particular filter, the system differentiates the values using <i>OR</i>. Calling
   *       either <i>DescribeConfigurations</i> or <i>ListConfigurations</i>
   *       returns attributes of matching configuration items.</p>
   */
  condition: string | undefined;

  /**
   * <p>The name of the filter.</p>
   */
  name: string | undefined;

  /**
   * <p>A string value on which to filter. For example, if you choose the
   *         <code>destinationServer.osVersion</code> filter name, you could specify <code>Ubuntu</code>
   *       for the value.</p>
   */
  values: string[] | undefined;
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj
  });
  export const isa = (o: any): o is Filter => __isa(o, "Filter");
}

export interface GetDiscoverySummaryRequest {
  __type?: "GetDiscoverySummaryRequest";
}

export namespace GetDiscoverySummaryRequest {
  export const filterSensitiveLog = (obj: GetDiscoverySummaryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDiscoverySummaryRequest =>
    __isa(o, "GetDiscoverySummaryRequest");
}

export interface GetDiscoverySummaryResponse {
  __type?: "GetDiscoverySummaryResponse";
  /**
   * <p>Details about discovered agents, including agent status and health.</p>
   */
  agentSummary?: CustomerAgentInfo;

  /**
   * <p>The number of applications discovered.</p>
   */
  applications?: number;

  /**
   * <p>Details about discovered connectors, including connector status and health.</p>
   */
  connectorSummary?: CustomerConnectorInfo;

  /**
   * <p>The number of servers discovered.</p>
   */
  servers?: number;

  /**
   * <p>The number of servers mapped to applications.</p>
   */
  serversMappedToApplications?: number;

  /**
   * <p>The number of servers mapped to tags.</p>
   */
  serversMappedtoTags?: number;
}

export namespace GetDiscoverySummaryResponse {
  export const filterSensitiveLog = (
    obj: GetDiscoverySummaryResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDiscoverySummaryResponse =>
    __isa(o, "GetDiscoverySummaryResponse");
}

/**
 * <p>The home region is not set. Set the home region to continue.</p>
 */
export interface HomeRegionNotSetException
  extends __SmithyException,
    $MetadataBearer {
  name: "HomeRegionNotSetException";
  $fault: "client";
  message?: string;
}

export namespace HomeRegionNotSetException {
  export const filterSensitiveLog = (obj: HomeRegionNotSetException): any => ({
    ...obj
  });
  export const isa = (o: any): o is HomeRegionNotSetException =>
    __isa(o, "HomeRegionNotSetException");
}

export enum ImportStatus {
  DELETE_COMPLETE = "DELETE_COMPLETE",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_FAILED_LIMIT_EXCEEDED = "DELETE_FAILED_LIMIT_EXCEEDED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  IMPORT_COMPLETE = "IMPORT_COMPLETE",
  IMPORT_COMPLETE_WITH_ERRORS = "IMPORT_COMPLETE_WITH_ERRORS",
  IMPORT_FAILED = "IMPORT_FAILED",
  IMPORT_FAILED_RECORD_LIMIT_EXCEEDED = "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED",
  IMPORT_FAILED_SERVER_LIMIT_EXCEEDED = "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED",
  IMPORT_IN_PROGRESS = "IMPORT_IN_PROGRESS",
  INTERNAL_ERROR = "INTERNAL_ERROR"
}

/**
 * <p>An array of information related to the import task request that includes status
 *       information, times, IDs, the Amazon S3 Object URL for the import file, and more.</p>
 */
export interface ImportTask {
  __type?: "ImportTask";
  /**
   * <p>The total number of application records in the import file that failed to be
   *       imported.</p>
   */
  applicationImportFailure?: number;

  /**
   * <p>The total number of application records in the import file that were successfully
   *       imported.</p>
   */
  applicationImportSuccess?: number;

  /**
   * <p>A unique token used to prevent the same import request from occurring more than once. If
   *       you didn't provide a token, a token was automatically generated when the import task request
   *       was sent.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>A link to a compressed archive folder (in the ZIP format) that contains an error log and a
   *       file of failed records. You can use these two files to quickly identify records that failed,
   *       why they failed, and correct those records. Afterward, you can upload the corrected file to
   *       your Amazon S3 bucket and create another import task request.</p>
   *
   *          <p>This field also includes authorization information so you can confirm the authenticity of
   *       the compressed archive before you download it.</p>
   *
   *          <p>If some records failed to be imported we recommend that you correct the records in the
   *       failed entries file and then imports that failed entries file. This prevents you from having
   *       to correct and update the larger original file and attempt importing it again.</p>
   */
  errorsAndFailedEntriesZip?: string;

  /**
   * <p>The time that the import task request finished, presented in the Unix time stamp
   *       format.</p>
   */
  importCompletionTime?: Date;

  /**
   * <p>The time that the import task request was deleted, presented in the Unix time stamp
   *       format.</p>
   */
  importDeletedTime?: Date;

  /**
   * <p>The time that the import task request was made, presented in the Unix time stamp
   *       format.</p>
   */
  importRequestTime?: Date;

  /**
   * <p>The unique ID for a specific import task. These IDs aren't globally unique, but they are
   *       unique within an AWS account.</p>
   */
  importTaskId?: string;

  /**
   * <p>The URL for your import file that you've uploaded to Amazon S3.</p>
   */
  importUrl?: string;

  /**
   * <p>A descriptive name for an import task. You can use this name to filter future requests
   *       related to this import task, such as identifying applications and servers that were included
   *       in this import task. We recommend that you use a meaningful name for each import task.</p>
   */
  name?: string;

  /**
   * <p>The total number of server records in the import file that failed to be imported.</p>
   */
  serverImportFailure?: number;

  /**
   * <p>The total number of server records in the import file that were successfully
   *       imported.</p>
   */
  serverImportSuccess?: number;

  /**
   * <p>The status of the import task. An import can have the status of
   *         <code>IMPORT_COMPLETE</code> and still have some records fail to import from the overall
   *       request. More information can be found in the downloadable archive defined in the
   *         <code>errorsAndFailedEntriesZip</code> field, or in the Migration Hub management
   *       console.</p>
   */
  status?: ImportStatus | string;
}

export namespace ImportTask {
  export const filterSensitiveLog = (obj: ImportTask): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportTask => __isa(o, "ImportTask");
}

/**
 * <p>A name-values pair of elements you can use to filter the results when querying your import
 *       tasks. Currently, wildcards are not supported for filters.</p>
 *
 *          <note>
 *             <p>When filtering by import status, all other filter values are ignored.</p>
 *          </note>
 */
export interface ImportTaskFilter {
  __type?: "ImportTaskFilter";
  /**
   * <p>The name, status, or import task ID for a specific import task.</p>
   */
  name?: ImportTaskFilterName | string;

  /**
   * <p>An array of strings that you can provide to match against a specific name, status, or
   *       import task ID to filter the results for your import task queries.</p>
   */
  values?: string[];
}

export namespace ImportTaskFilter {
  export const filterSensitiveLog = (obj: ImportTaskFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportTaskFilter =>
    __isa(o, "ImportTaskFilter");
}

export enum ImportTaskFilterName {
  IMPORT_TASK_ID = "IMPORT_TASK_ID",
  NAME = "NAME",
  STATUS = "STATUS"
}

/**
 * <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParameterException =>
    __isa(o, "InvalidParameterException");
}

/**
 * <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 */
export interface InvalidParameterValueException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterValueException {
  export const filterSensitiveLog = (
    obj: InvalidParameterValueException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParameterValueException =>
    __isa(o, "InvalidParameterValueException");
}

export interface ListConfigurationsRequest {
  __type?: "ListConfigurationsRequest";
  /**
   * <p>A valid configuration identified by Application Discovery Service. </p>
   */
  configurationType: ConfigurationItemType | string | undefined;

  /**
   * <p>You can filter the request using various logical operators and a
   *         <i>key</i>-<i>value</i> format. For example: </p>
   *          <p>
   *             <code>{"key": "serverType", "value": "webServer"}</code>
   *          </p>
   *          <p>For a complete list of filter options and guidance about using them with this action,
   *       see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#ListConfigurations">Using the ListConfigurations Action</a> in the <i>AWS Application Discovery
   *         Service User Guide</i>.</p>
   */
  filters?: Filter[];

  /**
   * <p>The total number of items to return. The maximum value is 100.</p>
   */
  maxResults?: number;

  /**
   * <p>Token to retrieve the next set of results. For example, if a previous call to
   *       ListConfigurations returned 100 items, but you set
   *         <code>ListConfigurationsRequest$maxResults</code> to 10, you received a set of 10 results
   *       along with a token. Use that token in this query to get the next set of 10.</p>
   */
  nextToken?: string;

  /**
   * <p>Certain filter criteria return output that can be sorted in ascending or descending
   *       order. For a list of output characteristics for each filter, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#ListConfigurations">Using the ListConfigurations Action</a> in the <i>AWS Application Discovery
   *         Service User Guide</i>.</p>
   */
  orderBy?: OrderByElement[];
}

export namespace ListConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListConfigurationsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListConfigurationsRequest =>
    __isa(o, "ListConfigurationsRequest");
}

export interface ListConfigurationsResponse {
  __type?: "ListConfigurationsResponse";
  /**
   * <p>Returns configuration details, including the configuration ID, attribute names, and
   *       attribute values.</p>
   */
  configurations?: { [key: string]: string }[];

  /**
   * <p>Token to retrieve the next set of results. For example, if your call to
   *       ListConfigurations returned 100 items, but you set
   *         <code>ListConfigurationsRequest$maxResults</code> to 10, you received a set of 10 results
   *       along with this token. Use this token in the next query to retrieve the next set of
   *       10.</p>
   */
  nextToken?: string;
}

export namespace ListConfigurationsResponse {
  export const filterSensitiveLog = (obj: ListConfigurationsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListConfigurationsResponse =>
    __isa(o, "ListConfigurationsResponse");
}

export interface ListServerNeighborsRequest {
  __type?: "ListServerNeighborsRequest";
  /**
   * <p>Configuration ID of the server for which neighbors are being listed.</p>
   */
  configurationId: string | undefined;

  /**
   * <p>Maximum number of results to return in a single page of output.</p>
   */
  maxResults?: number;

  /**
   * <p>List of configuration IDs to test for one-hop-away.</p>
   */
  neighborConfigurationIds?: string[];

  /**
   * <p>Token to retrieve the next set of results. For example, if you previously specified 100
   *       IDs for <code>ListServerNeighborsRequest$neighborConfigurationIds</code> but set
   *         <code>ListServerNeighborsRequest$maxResults</code> to 10, you received a set of 10 results
   *       along with a token. Use that token in this query to get the next set of 10.</p>
   */
  nextToken?: string;

  /**
   * <p>Flag to indicate if port and protocol information is needed as part of the
   *       response.</p>
   */
  portInformationNeeded?: boolean;
}

export namespace ListServerNeighborsRequest {
  export const filterSensitiveLog = (obj: ListServerNeighborsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListServerNeighborsRequest =>
    __isa(o, "ListServerNeighborsRequest");
}

export interface ListServerNeighborsResponse {
  __type?: "ListServerNeighborsResponse";
  /**
   * <p>Count of distinct servers that are one hop away from the given server.</p>
   */
  knownDependencyCount?: number;

  /**
   * <p>List of distinct servers that are one hop away from the given server.</p>
   */
  neighbors: NeighborConnectionDetail[] | undefined;

  /**
   * <p>Token to retrieve the next set of results. For example, if you specified 100 IDs for
   *         <code>ListServerNeighborsRequest$neighborConfigurationIds</code> but set
   *         <code>ListServerNeighborsRequest$maxResults</code> to 10, you received a set of 10 results
   *       along with this token. Use this token in the next query to retrieve the next set of
   *       10.</p>
   */
  nextToken?: string;
}

export namespace ListServerNeighborsResponse {
  export const filterSensitiveLog = (
    obj: ListServerNeighborsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListServerNeighborsResponse =>
    __isa(o, "ListServerNeighborsResponse");
}

/**
 * <p>Details about neighboring servers.</p>
 */
export interface NeighborConnectionDetail {
  __type?: "NeighborConnectionDetail";
  /**
   * <p>The number of open network connections with the neighboring server.</p>
   */
  connectionsCount: number | undefined;

  /**
   * <p>The destination network port for the connection.</p>
   */
  destinationPort?: number;

  /**
   * <p>The ID of the server that accepted the network connection.</p>
   */
  destinationServerId: string | undefined;

  /**
   * <p>The ID of the server that opened the network connection.</p>
   */
  sourceServerId: string | undefined;

  /**
   * <p>The network protocol used for the connection.</p>
   */
  transportProtocol?: string;
}

export namespace NeighborConnectionDetail {
  export const filterSensitiveLog = (obj: NeighborConnectionDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is NeighborConnectionDetail =>
    __isa(o, "NeighborConnectionDetail");
}

/**
 * <p>This operation is not permitted.</p>
 */
export interface OperationNotPermittedException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationNotPermittedException";
  $fault: "client";
  message?: string;
}

export namespace OperationNotPermittedException {
  export const filterSensitiveLog = (
    obj: OperationNotPermittedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperationNotPermittedException =>
    __isa(o, "OperationNotPermittedException");
}

/**
 * <p>A field and direction for ordered output.</p>
 */
export interface OrderByElement {
  __type?: "OrderByElement";
  /**
   * <p>The field on which to order.</p>
   */
  fieldName: string | undefined;

  /**
   * <p>Ordering direction.</p>
   */
  sortOrder?: OrderString | string;
}

export namespace OrderByElement {
  export const filterSensitiveLog = (obj: OrderByElement): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrderByElement =>
    __isa(o, "OrderByElement");
}

export enum OrderString {
  ASC = "ASC",
  DESC = "DESC"
}

/**
 * <p>This issue occurs when the same <code>clientRequestToken</code> is used with the
 *         <code>StartImportTask</code> action, but with different parameters. For example, you use the
 *       same request token but have two different import URLs, you can encounter this issue. If the
 *       import tasks are meant to be different, use a different <code>clientRequestToken</code>, and
 *       try again.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceInUseException =>
    __isa(o, "ResourceInUseException");
}

/**
 * <p>The specified configuration ID was not located. Verify the configuration ID and try
 *       again.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The server experienced an internal error. Try again.</p>
 */
export interface ServerInternalErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServerInternalErrorException";
  $fault: "server";
  message?: string;
}

export namespace ServerInternalErrorException {
  export const filterSensitiveLog = (
    obj: ServerInternalErrorException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServerInternalErrorException =>
    __isa(o, "ServerInternalErrorException");
}

export interface StartContinuousExportRequest {
  __type?: "StartContinuousExportRequest";
}

export namespace StartContinuousExportRequest {
  export const filterSensitiveLog = (
    obj: StartContinuousExportRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartContinuousExportRequest =>
    __isa(o, "StartContinuousExportRequest");
}

export interface StartContinuousExportResponse {
  __type?: "StartContinuousExportResponse";
  /**
   * <p>The type of data collector used to gather this data (currently only offered for
   *       AGENT).</p>
   */
  dataSource?: DataSource | string;

  /**
   * <p>The unique ID assigned to this export.</p>
   */
  exportId?: string;

  /**
   * <p>The name of the s3 bucket where the export data parquet files are stored.</p>
   */
  s3Bucket?: string;

  /**
   * <p>A dictionary which describes how the data is stored.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>databaseName</code> - the name of the Glue database used to store the
   *           schema.</p>
   *             </li>
   *          </ul>
   */
  schemaStorageConfig?: { [key: string]: string };

  /**
   * <p>The timestamp representing when the continuous export was started.</p>
   */
  startTime?: Date;
}

export namespace StartContinuousExportResponse {
  export const filterSensitiveLog = (
    obj: StartContinuousExportResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartContinuousExportResponse =>
    __isa(o, "StartContinuousExportResponse");
}

export interface StartDataCollectionByAgentIdsRequest {
  __type?: "StartDataCollectionByAgentIdsRequest";
  /**
   * <p>The IDs of the agents or connectors from which to start collecting data. If you send a
   *       request to an agent/connector ID that you do not have permission to contact, according to your
   *       AWS account, the service does not throw an exception. Instead, it returns the error in the
   *         <i>Description</i> field. If you send a request to multiple agents/connectors
   *       and you do not have permission to contact some of those agents/connectors, the system does not
   *       throw an exception. Instead, the system shows <code>Failed</code> in the
   *         <i>Description</i> field.</p>
   */
  agentIds: string[] | undefined;
}

export namespace StartDataCollectionByAgentIdsRequest {
  export const filterSensitiveLog = (
    obj: StartDataCollectionByAgentIdsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartDataCollectionByAgentIdsRequest =>
    __isa(o, "StartDataCollectionByAgentIdsRequest");
}

export interface StartDataCollectionByAgentIdsResponse {
  __type?: "StartDataCollectionByAgentIdsResponse";
  /**
   * <p>Information about agents or the connector that were instructed to start collecting
   *       data. Information includes the agent/connector ID, a description of the operation performed,
   *       and whether the agent/connector configuration was updated.</p>
   */
  agentsConfigurationStatus?: AgentConfigurationStatus[];
}

export namespace StartDataCollectionByAgentIdsResponse {
  export const filterSensitiveLog = (
    obj: StartDataCollectionByAgentIdsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartDataCollectionByAgentIdsResponse =>
    __isa(o, "StartDataCollectionByAgentIdsResponse");
}

export interface StartExportTaskRequest {
  __type?: "StartExportTaskRequest";
  /**
   * <p>The end timestamp for exported data from the single Application Discovery Agent
   *       selected in the filters. If no value is specified, exported data includes the most recent data
   *       collected by the agent.</p>
   */
  endTime?: Date;

  /**
   * <p>The file format for the returned export data. Default value is <code>CSV</code>.
   *         <b>Note:</b>
   *             <i>The</i>
   *             <code>GRAPHML</code>
   *             <i>option has been deprecated.</i>
   *          </p>
   */
  exportDataFormat?: (ExportDataFormat | string)[];

  /**
   * <p>If a filter is present, it selects the single <code>agentId</code> of the Application
   *       Discovery Agent for which data is exported. The <code>agentId</code> can be found in the
   *       results of the <code>DescribeAgents</code> API or CLI. If no filter is present,
   *         <code>startTime</code> and <code>endTime</code> are ignored and exported data includes both
   *       Agentless Discovery Connector data and summary data from Application Discovery agents.
   *     </p>
   */
  filters?: ExportFilter[];

  /**
   * <p>The start timestamp for exported data from the single Application Discovery Agent
   *       selected in the filters. If no value is specified, data is exported starting from the first
   *       data collected by the agent.</p>
   */
  startTime?: Date;
}

export namespace StartExportTaskRequest {
  export const filterSensitiveLog = (obj: StartExportTaskRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartExportTaskRequest =>
    __isa(o, "StartExportTaskRequest");
}

export interface StartExportTaskResponse {
  __type?: "StartExportTaskResponse";
  /**
   * <p>A unique identifier used to query the status of an export request.</p>
   */
  exportId?: string;
}

export namespace StartExportTaskResponse {
  export const filterSensitiveLog = (obj: StartExportTaskResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartExportTaskResponse =>
    __isa(o, "StartExportTaskResponse");
}

export interface StartImportTaskRequest {
  __type?: "StartImportTaskRequest";
  /**
   * <p>Optional. A unique token that you can provide to prevent the same import request from
   *       occurring more than once. If you don't provide a token, a token is automatically
   *       generated.</p>
   *
   *          <p>Sending more than one <code>StartImportTask</code> request with the same client request
   *       token will return information about the original import task with that client request
   *       token.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The URL for your import file that you've uploaded to Amazon S3.</p>
   *
   *          <note>
   *             <p>If you're using the AWS CLI, this URL is structured as follows:
   *           <code>s3://BucketName/ImportFileName.CSV</code>
   *             </p>
   *          </note>
   */
  importUrl: string | undefined;

  /**
   * <p>A descriptive name for this request. You can use this name to filter future requests
   *       related to this import task, such as identifying applications and servers that were included
   *       in this import task. We recommend that you use a meaningful name for each import task.</p>
   */
  name: string | undefined;
}

export namespace StartImportTaskRequest {
  export const filterSensitiveLog = (obj: StartImportTaskRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartImportTaskRequest =>
    __isa(o, "StartImportTaskRequest");
}

export interface StartImportTaskResponse {
  __type?: "StartImportTaskResponse";
  /**
   * <p>An array of information related to the import task request including status information,
   *       times, IDs, the Amazon S3 Object URL for the import file, and more. </p>
   */
  task?: ImportTask;
}

export namespace StartImportTaskResponse {
  export const filterSensitiveLog = (obj: StartImportTaskResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartImportTaskResponse =>
    __isa(o, "StartImportTaskResponse");
}

export interface StopContinuousExportRequest {
  __type?: "StopContinuousExportRequest";
  /**
   * <p>The unique ID assigned to this export.</p>
   */
  exportId: string | undefined;
}

export namespace StopContinuousExportRequest {
  export const filterSensitiveLog = (
    obj: StopContinuousExportRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopContinuousExportRequest =>
    __isa(o, "StopContinuousExportRequest");
}

export interface StopContinuousExportResponse {
  __type?: "StopContinuousExportResponse";
  /**
   * <p>Timestamp that represents when this continuous export started collecting
   *       data.</p>
   */
  startTime?: Date;

  /**
   * <p>Timestamp that represents when this continuous export was stopped.</p>
   */
  stopTime?: Date;
}

export namespace StopContinuousExportResponse {
  export const filterSensitiveLog = (
    obj: StopContinuousExportResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopContinuousExportResponse =>
    __isa(o, "StopContinuousExportResponse");
}

export interface StopDataCollectionByAgentIdsRequest {
  __type?: "StopDataCollectionByAgentIdsRequest";
  /**
   * <p>The IDs of the agents or connectors from which to stop collecting data.</p>
   */
  agentIds: string[] | undefined;
}

export namespace StopDataCollectionByAgentIdsRequest {
  export const filterSensitiveLog = (
    obj: StopDataCollectionByAgentIdsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopDataCollectionByAgentIdsRequest =>
    __isa(o, "StopDataCollectionByAgentIdsRequest");
}

export interface StopDataCollectionByAgentIdsResponse {
  __type?: "StopDataCollectionByAgentIdsResponse";
  /**
   * <p>Information about the agents or connector that were instructed to stop collecting data.
   *       Information includes the agent/connector ID, a description of the operation performed, and
   *       whether the agent/connector configuration was updated.</p>
   */
  agentsConfigurationStatus?: AgentConfigurationStatus[];
}

export namespace StopDataCollectionByAgentIdsResponse {
  export const filterSensitiveLog = (
    obj: StopDataCollectionByAgentIdsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopDataCollectionByAgentIdsResponse =>
    __isa(o, "StopDataCollectionByAgentIdsResponse");
}

/**
 * <p>Metadata that help you categorize IT assets.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The type of tag on which to filter.</p>
   */
  key: string | undefined;

  /**
   * <p>A value for a tag key on which to filter.</p>
   */
  value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>,
 *         <code>configurationId</code>.</p>
 */
export interface TagFilter {
  __type?: "TagFilter";
  /**
   * <p>A name of the tag filter.</p>
   */
  name: string | undefined;

  /**
   * <p>Values for the tag filter.</p>
   */
  values: string[] | undefined;
}

export namespace TagFilter {
  export const filterSensitiveLog = (obj: TagFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagFilter => __isa(o, "TagFilter");
}

export interface UpdateApplicationRequest {
  __type?: "UpdateApplicationRequest";
  /**
   * <p>Configuration ID of the application to be updated.</p>
   */
  configurationId: string | undefined;

  /**
   * <p>New description of the application to be updated.</p>
   */
  description?: string;

  /**
   * <p>New name of the application to be updated.</p>
   */
  name?: string;
}

export namespace UpdateApplicationRequest {
  export const filterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateApplicationRequest =>
    __isa(o, "UpdateApplicationRequest");
}

export interface UpdateApplicationResponse {
  __type?: "UpdateApplicationResponse";
}

export namespace UpdateApplicationResponse {
  export const filterSensitiveLog = (obj: UpdateApplicationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateApplicationResponse =>
    __isa(o, "UpdateApplicationResponse");
}
