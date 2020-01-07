import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum AppLaunchStatus {
    ConfigurationInProgress = "CONFIGURATION_IN_PROGRESS",
    ConfigurationInvalid = "CONFIGURATION_INVALID",
    DeltaLaunchFailed = "DELTA_LAUNCH_FAILED",
    DeltaLaunchInProgress = "DELTA_LAUNCH_IN_PROGRESS",
    LaunchFailed = "LAUNCH_FAILED",
    LaunchInProgress = "LAUNCH_IN_PROGRESS",
    LaunchPending = "LAUNCH_PENDING",
    Launched = "LAUNCHED",
    ReadyForConfiguration = "READY_FOR_CONFIGURATION",
    ReadyForLaunch = "READY_FOR_LAUNCH",
    TerminateFailed = "TERMINATE_FAILED",
    TerminateInProgress = "TERMINATE_IN_PROGRESS",
    Terminated = "TERMINATED",
    ValidationInProgress = "VALIDATION_IN_PROGRESS"
}
export declare enum AppReplicationStatus {
    ConfigurationInProgress = "CONFIGURATION_IN_PROGRESS",
    ConfigurationInvalid = "CONFIGURATION_INVALID",
    DeltaReplicated = "DELTA_REPLICATED",
    DeltaReplicationFailed = "DELTA_REPLICATION_FAILED",
    DeltaReplicationInProgress = "DELTA_REPLICATION_IN_PROGRESS",
    ReadyForConfiguration = "READY_FOR_CONFIGURATION",
    ReadyForReplication = "READY_FOR_REPLICATION",
    Replicated = "REPLICATED",
    ReplicationFailed = "REPLICATION_FAILED",
    ReplicationInProgress = "REPLICATION_IN_PROGRESS",
    ReplicationPending = "REPLICATION_PENDING",
    ReplicationStopFailed = "REPLICATION_STOP_FAILED",
    ReplicationStopped = "REPLICATION_STOPPED",
    ReplicationStopping = "REPLICATION_STOPPING",
    ValidationInProgress = "VALIDATION_IN_PROGRESS"
}
export declare enum AppStatus {
    Active = "ACTIVE",
    Creating = "CREATING",
    DELETE_FAILED = "DELETE_FAILED",
    Deleted = "DELETED",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * <p>Information about the application.</p>
 */
export interface AppSummary {
    __type?: "AppSummary";
    /**
     * <p>Unique ID of the application.</p>
     */
    appId?: string;
    /**
     * <p>Time of creation of this application.</p>
     */
    creationTime?: Date;
    /**
     * <p>Description of the application.</p>
     */
    description?: string;
    /**
     * <p>Timestamp of the application's creation.</p>
     */
    lastModified?: Date;
    /**
     * <p>Timestamp of the application's most recent successful replication.</p>
     */
    latestReplicationTime?: Date;
    /**
     * <p>Details about the latest launch of the application.</p>
     */
    launchDetails?: LaunchDetails;
    /**
     * <p>Launch status of the application.</p>
     */
    launchStatus?: AppLaunchStatus | string;
    /**
     * <p>A message related to the launch status of the application.</p>
     */
    launchStatusMessage?: string;
    /**
     * <p>Name of the application.</p>
     */
    name?: string;
    /**
     * <p>Replication status of the application.</p>
     */
    replicationStatus?: AppReplicationStatus | string;
    /**
     * <p>A message related to the replication status of the application.</p>
     */
    replicationStatusMessage?: string;
    /**
     * <p>Name of the service role in the customer's account used by AWS SMS.</p>
     */
    roleName?: string;
    /**
     * <p>Status of the application.</p>
     */
    status?: AppStatus | string;
    /**
     * <p>A message related to the status of the application</p>
     */
    statusMessage?: string;
    /**
     * <p>Number of server groups present in the application.</p>
     */
    totalServerGroups?: number;
    /**
     * <p>Number of servers present in the application.</p>
     */
    totalServers?: number;
}
export declare namespace AppSummary {
    function isa(o: any): o is AppSummary;
}
/**
 * <p>Represents a connector.</p>
 */
export interface Connector {
    __type?: "Connector";
    /**
     * <p>The time the connector was associated.</p>
     */
    associatedOn?: Date;
    /**
     * <p>The capabilities of the connector.</p>
     */
    capabilityList?: Array<ConnectorCapability | string>;
    /**
     * <p>The identifier of the connector.</p>
     */
    connectorId?: string;
    /**
     * <p>The IP address of the connector.</p>
     */
    ipAddress?: string;
    /**
     * <p>The MAC address of the connector.</p>
     */
    macAddress?: string;
    /**
     * <p>The status of the connector.</p>
     */
    status?: ConnectorStatus | string;
    /**
     * <p>The connector version.</p>
     */
    version?: string;
    /**
     * <p>The identifier of the VM manager.</p>
     */
    vmManagerId?: string;
    /**
     * <p>The name of the VM manager.</p>
     */
    vmManagerName?: string;
    /**
     * <p>The VM management product.</p>
     */
    vmManagerType?: VmManagerType | string;
}
export declare namespace Connector {
    function isa(o: any): o is Connector;
}
export declare enum ConnectorCapability {
    hyperVManager = "HYPERV-MANAGER",
    scvmm = "SCVMM",
    snapshotBatching = "SNAPSHOT_BATCHING",
    vSphere = "VSPHERE"
}
export declare enum ConnectorStatus {
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY"
}
export interface CreateAppRequest {
    __type?: "CreateAppRequest";
    /**
     * <p>A unique, case-sensitive identifier you provide to ensure idempotency of application
     *             creation.</p>
     */
    clientToken?: string;
    /**
     * <p>Description of the new application</p>
     */
    description?: string;
    /**
     * <p>Name of the new application.</p>
     */
    name?: string;
    /**
     * <p>Name of service role in customer's account to be used by AWS SMS.</p>
     */
    roleName?: string;
    /**
     * <p>List of server groups to include in the application.</p>
     */
    serverGroups?: Array<ServerGroup>;
    /**
     * <p>List of tags to be associated with the application.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace CreateAppRequest {
    function isa(o: any): o is CreateAppRequest;
}
export interface CreateAppResponse {
    __type?: "CreateAppResponse";
    /**
     * <p>Summary description of the application.</p>
     */
    appSummary?: AppSummary;
    /**
     * <p>List of server groups included in the application.</p>
     */
    serverGroups?: Array<ServerGroup>;
    /**
     * <p>List of taags associated with the application.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace CreateAppResponse {
    function isa(o: any): o is CreateAppResponse;
}
export interface CreateReplicationJobRequest {
    __type?: "CreateReplicationJobRequest";
    /**
     * <p>The description of the replication job.</p>
     */
    description?: string;
    /**
     * <p>When <i>true</i>, the replication job produces encrypted AMIs. See also
     *                 <code>KmsKeyId</code> below.</p>
     */
    encrypted?: boolean;
    /**
     * <p>The time between consecutive replication runs, in hours.</p>
     */
    frequency?: number;
    /**
     * <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the
     *             following: </p>
     *         <ul>
     *             <li>
     *                 <p>KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>KMS key alias</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to KMS key alias</p>
     *             </li>
     *          </ul>
     *         <p> If encrypted is <i>true</i> but a KMS key id is not specified, the
     *             customer's default KMS key for EBS is used. </p>
     */
    kmsKeyId?: string;
    /**
     * <p>The license type to be used for the AMI created by a successful replication
     *             run.</p>
     */
    licenseType?: LicenseType | string;
    /**
     * <p>The maximum number of SMS-created AMIs to retain. The oldest will be deleted once the
     *             maximum number is reached and a new AMI is created.</p>
     */
    numberOfRecentAmisToKeep?: number;
    /**
     * <p>The name of the IAM role to be used by the AWS SMS.</p>
     */
    roleName?: string;
    /**
     * <p></p>
     */
    runOnce?: boolean;
    /**
     * <p>The seed replication time.</p>
     */
    seedReplicationTime: Date | undefined;
    /**
     * <p>The identifier of the server.</p>
     */
    serverId: string | undefined;
}
export declare namespace CreateReplicationJobRequest {
    function isa(o: any): o is CreateReplicationJobRequest;
}
export interface CreateReplicationJobResponse {
    __type?: "CreateReplicationJobResponse";
    /**
     * <p>The unique identifier of the replication job.</p>
     */
    replicationJobId?: string;
}
export declare namespace CreateReplicationJobResponse {
    function isa(o: any): o is CreateReplicationJobResponse;
}
export interface DeleteAppLaunchConfigurationRequest {
    __type?: "DeleteAppLaunchConfigurationRequest";
    /**
     * <p>ID of the application associated with the launch configuration.</p>
     */
    appId?: string;
}
export declare namespace DeleteAppLaunchConfigurationRequest {
    function isa(o: any): o is DeleteAppLaunchConfigurationRequest;
}
export interface DeleteAppLaunchConfigurationResponse {
    __type?: "DeleteAppLaunchConfigurationResponse";
}
export declare namespace DeleteAppLaunchConfigurationResponse {
    function isa(o: any): o is DeleteAppLaunchConfigurationResponse;
}
export interface DeleteAppReplicationConfigurationRequest {
    __type?: "DeleteAppReplicationConfigurationRequest";
    /**
     * <p>ID of the application associated with the replication configuration.</p>
     */
    appId?: string;
}
export declare namespace DeleteAppReplicationConfigurationRequest {
    function isa(o: any): o is DeleteAppReplicationConfigurationRequest;
}
export interface DeleteAppReplicationConfigurationResponse {
    __type?: "DeleteAppReplicationConfigurationResponse";
}
export declare namespace DeleteAppReplicationConfigurationResponse {
    function isa(o: any): o is DeleteAppReplicationConfigurationResponse;
}
export interface DeleteAppRequest {
    __type?: "DeleteAppRequest";
    /**
     * <p>ID of the application to delete.</p>
     */
    appId?: string;
    /**
     * <p>While deleting the application, stop all replication jobs corresponding to the servers
     *             in the application.</p>
     */
    forceStopAppReplication?: boolean;
    /**
     * <p>While deleting the application, terminate the stack corresponding to the
     *             application.</p>
     */
    forceTerminateApp?: boolean;
}
export declare namespace DeleteAppRequest {
    function isa(o: any): o is DeleteAppRequest;
}
export interface DeleteAppResponse {
    __type?: "DeleteAppResponse";
}
export declare namespace DeleteAppResponse {
    function isa(o: any): o is DeleteAppResponse;
}
export interface DeleteReplicationJobRequest {
    __type?: "DeleteReplicationJobRequest";
    /**
     * <p>The identifier of the replication job.</p>
     */
    replicationJobId: string | undefined;
}
export declare namespace DeleteReplicationJobRequest {
    function isa(o: any): o is DeleteReplicationJobRequest;
}
export interface DeleteReplicationJobResponse {
    __type?: "DeleteReplicationJobResponse";
}
export declare namespace DeleteReplicationJobResponse {
    function isa(o: any): o is DeleteReplicationJobResponse;
}
export interface DeleteServerCatalogRequest {
    __type?: "DeleteServerCatalogRequest";
}
export declare namespace DeleteServerCatalogRequest {
    function isa(o: any): o is DeleteServerCatalogRequest;
}
export interface DeleteServerCatalogResponse {
    __type?: "DeleteServerCatalogResponse";
}
export declare namespace DeleteServerCatalogResponse {
    function isa(o: any): o is DeleteServerCatalogResponse;
}
export interface DisassociateConnectorRequest {
    __type?: "DisassociateConnectorRequest";
    /**
     * <p>The identifier of the connector.</p>
     */
    connectorId: string | undefined;
}
export declare namespace DisassociateConnectorRequest {
    function isa(o: any): o is DisassociateConnectorRequest;
}
export interface DisassociateConnectorResponse {
    __type?: "DisassociateConnectorResponse";
}
export declare namespace DisassociateConnectorResponse {
    function isa(o: any): o is DisassociateConnectorResponse;
}
export interface GenerateChangeSetRequest {
    __type?: "GenerateChangeSetRequest";
    /**
     * <p>ID of the application associated with the change set.</p>
     */
    appId?: string;
    /**
     * <p>Format for the change set.</p>
     */
    changesetFormat?: OutputFormat | string;
}
export declare namespace GenerateChangeSetRequest {
    function isa(o: any): o is GenerateChangeSetRequest;
}
export interface GenerateChangeSetResponse {
    __type?: "GenerateChangeSetResponse";
    /**
     * <p>Location of the Amazon S3 object.</p>
     */
    s3Location?: S3Location;
}
export declare namespace GenerateChangeSetResponse {
    function isa(o: any): o is GenerateChangeSetResponse;
}
export interface GenerateTemplateRequest {
    __type?: "GenerateTemplateRequest";
    /**
     * <p>ID of the application associated with the Amazon CloudFormation template.</p>
     */
    appId?: string;
    /**
     * <p>Format for generating the Amazon CloudFormation template.</p>
     */
    templateFormat?: OutputFormat | string;
}
export declare namespace GenerateTemplateRequest {
    function isa(o: any): o is GenerateTemplateRequest;
}
export interface GenerateTemplateResponse {
    __type?: "GenerateTemplateResponse";
    /**
     * <p>Location of the Amazon S3 object.</p>
     */
    s3Location?: S3Location;
}
export declare namespace GenerateTemplateResponse {
    function isa(o: any): o is GenerateTemplateResponse;
}
export interface GetAppLaunchConfigurationRequest {
    __type?: "GetAppLaunchConfigurationRequest";
    /**
     * <p>ID of the application launch configuration.</p>
     */
    appId?: string;
}
export declare namespace GetAppLaunchConfigurationRequest {
    function isa(o: any): o is GetAppLaunchConfigurationRequest;
}
export interface GetAppLaunchConfigurationResponse {
    __type?: "GetAppLaunchConfigurationResponse";
    /**
     * <p>ID of the application associated with the launch configuration.</p>
     */
    appId?: string;
    /**
     * <p>Name of the service role in the customer's account that Amazon CloudFormation uses to launch the
     *             application.</p>
     */
    roleName?: string;
    /**
     * <p>List of launch configurations for server groups in this application.</p>
     */
    serverGroupLaunchConfigurations?: Array<ServerGroupLaunchConfiguration>;
}
export declare namespace GetAppLaunchConfigurationResponse {
    function isa(o: any): o is GetAppLaunchConfigurationResponse;
}
export interface GetAppReplicationConfigurationRequest {
    __type?: "GetAppReplicationConfigurationRequest";
    /**
     * <p>ID of the application associated with the replication configuration.</p>
     */
    appId?: string;
}
export declare namespace GetAppReplicationConfigurationRequest {
    function isa(o: any): o is GetAppReplicationConfigurationRequest;
}
export interface GetAppReplicationConfigurationResponse {
    __type?: "GetAppReplicationConfigurationResponse";
    /**
     * <p>Replication configurations associated with server groups in this application.</p>
     */
    serverGroupReplicationConfigurations?: Array<ServerGroupReplicationConfiguration>;
}
export declare namespace GetAppReplicationConfigurationResponse {
    function isa(o: any): o is GetAppReplicationConfigurationResponse;
}
export interface GetAppRequest {
    __type?: "GetAppRequest";
    /**
     * <p>ID of the application whose information is being retrieved.</p>
     */
    appId?: string;
}
export declare namespace GetAppRequest {
    function isa(o: any): o is GetAppRequest;
}
export interface GetAppResponse {
    __type?: "GetAppResponse";
    /**
     * <p>Information about the application.</p>
     */
    appSummary?: AppSummary;
    /**
     * <p>List of server groups belonging to the application.</p>
     */
    serverGroups?: Array<ServerGroup>;
    /**
     * <p>List of tags associated with the application.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace GetAppResponse {
    function isa(o: any): o is GetAppResponse;
}
export interface GetConnectorsRequest {
    __type?: "GetConnectorsRequest";
    /**
     * <p>The maximum number of results to return in a single call. The default value is 50.
     *             To retrieve the remaining results, make another call with the returned
     *                 <code>NextToken</code> value.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace GetConnectorsRequest {
    function isa(o: any): o is GetConnectorsRequest;
}
export interface GetConnectorsResponse {
    __type?: "GetConnectorsResponse";
    /**
     * <p>Information about the registered connectors.</p>
     */
    connectorList?: Array<Connector>;
    /**
     * <p>The token required to retrieve the next set of results. This value is null when
     *             there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace GetConnectorsResponse {
    function isa(o: any): o is GetConnectorsResponse;
}
export interface GetReplicationJobsRequest {
    __type?: "GetReplicationJobsRequest";
    /**
     * <p>The maximum number of results to return in a single call. The default value is 50.
     *             To retrieve the remaining results, make another call with the returned
     *                 <code>NextToken</code> value.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The identifier of the replication job.</p>
     */
    replicationJobId?: string;
}
export declare namespace GetReplicationJobsRequest {
    function isa(o: any): o is GetReplicationJobsRequest;
}
export interface GetReplicationJobsResponse {
    __type?: "GetReplicationJobsResponse";
    /**
     * <p>The token required to retrieve the next set of results. This value is null when
     *             there are no more results to return.</p>
     */
    nextToken?: string;
    /**
     * <p>Information about the replication jobs.</p>
     */
    replicationJobList?: Array<ReplicationJob>;
}
export declare namespace GetReplicationJobsResponse {
    function isa(o: any): o is GetReplicationJobsResponse;
}
export interface GetReplicationRunsRequest {
    __type?: "GetReplicationRunsRequest";
    /**
     * <p>The maximum number of results to return in a single call. The default value is 50.
     *             To retrieve the remaining results, make another call with the returned
     *                 <code>NextToken</code> value.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The identifier of the replication job.</p>
     */
    replicationJobId: string | undefined;
}
export declare namespace GetReplicationRunsRequest {
    function isa(o: any): o is GetReplicationRunsRequest;
}
export interface GetReplicationRunsResponse {
    __type?: "GetReplicationRunsResponse";
    /**
     * <p>The token required to retrieve the next set of results. This value is null when
     *             there are no more results to return.</p>
     */
    nextToken?: string;
    /**
     * <p>Information about the replication job.</p>
     */
    replicationJob?: ReplicationJob;
    /**
     * <p>Information about the replication runs.</p>
     */
    replicationRunList?: Array<ReplicationRun>;
}
export declare namespace GetReplicationRunsResponse {
    function isa(o: any): o is GetReplicationRunsResponse;
}
export interface GetServersRequest {
    __type?: "GetServersRequest";
    /**
     * <p>The maximum number of results to return in a single call. The default value is 50.
     *             To retrieve the remaining results, make another call with the returned
     *                 <code>NextToken</code> value.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>List of <code>VmServerAddress</code> objects</p>
     */
    vmServerAddressList?: Array<VmServerAddress>;
}
export declare namespace GetServersRequest {
    function isa(o: any): o is GetServersRequest;
}
export interface GetServersResponse {
    __type?: "GetServersResponse";
    /**
     * <p>The time when the server was last modified.</p>
     */
    lastModifiedOn?: Date;
    /**
     * <p>The token required to retrieve the next set of results. This value is null when
     *             there are no more results to return.</p>
     */
    nextToken?: string;
    /**
     * <p>The status of the server catalog.</p>
     */
    serverCatalogStatus?: ServerCatalogStatus | string;
    /**
     * <p>Information about the servers.</p>
     */
    serverList?: Array<Server>;
}
export declare namespace GetServersResponse {
    function isa(o: any): o is GetServersResponse;
}
export interface ImportServerCatalogRequest {
    __type?: "ImportServerCatalogRequest";
}
export declare namespace ImportServerCatalogRequest {
    function isa(o: any): o is ImportServerCatalogRequest;
}
export interface ImportServerCatalogResponse {
    __type?: "ImportServerCatalogResponse";
}
export declare namespace ImportServerCatalogResponse {
    function isa(o: any): o is ImportServerCatalogResponse;
}
/**
 * <p>An internal error occurred.</p>
 */
export interface InternalError extends __SmithyException, $MetadataBearer {
    name: "InternalError";
    $fault: "server";
    message?: string;
}
export declare namespace InternalError {
    function isa(o: any): o is InternalError;
}
/**
 * <p>A specified parameter is not valid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidParameterException {
    function isa(o: any): o is InvalidParameterException;
}
export interface LaunchAppRequest {
    __type?: "LaunchAppRequest";
    /**
     * <p>ID of the application to launch.</p>
     */
    appId?: string;
}
export declare namespace LaunchAppRequest {
    function isa(o: any): o is LaunchAppRequest;
}
export interface LaunchAppResponse {
    __type?: "LaunchAppResponse";
}
export declare namespace LaunchAppResponse {
    function isa(o: any): o is LaunchAppResponse;
}
/**
 * <p>Details about the latest launch of an application.</p>
 */
export interface LaunchDetails {
    __type?: "LaunchDetails";
    /**
     * <p>Latest time this application was launched successfully.</p>
     */
    latestLaunchTime?: Date;
    /**
     * <p>Identifier of the latest stack launched for this application.</p>
     */
    stackId?: string;
    /**
     * <p>Name of the latest stack launched for this application.</p>
     */
    stackName?: string;
}
export declare namespace LaunchDetails {
    function isa(o: any): o is LaunchDetails;
}
export declare enum LicenseType {
    AWS = "AWS",
    BYOL = "BYOL"
}
export interface ListAppsRequest {
    __type?: "ListAppsRequest";
    /**
     * <p></p>
     */
    appIds?: Array<string>;
    /**
     * <p>The maximum number of results to return in a single call. The default value is
     *             50.
     *             To retrieve the remaining results, make another call with the returned
     *                 <code>NextToken</code> value. </p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListAppsRequest {
    function isa(o: any): o is ListAppsRequest;
}
export interface ListAppsResponse {
    __type?: "ListAppsResponse";
    /**
     * <p>A list of application summaries.</p>
     */
    apps?: Array<AppSummary>;
    /**
     * <p>The token required to retrieve the next set of results. This value is null when there
     *             are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListAppsResponse {
    function isa(o: any): o is ListAppsResponse;
}
/**
 * <p>A required parameter is missing.</p>
 */
export interface MissingRequiredParameterException extends __SmithyException, $MetadataBearer {
    name: "MissingRequiredParameterException";
    $fault: "client";
    message?: string;
}
export declare namespace MissingRequiredParameterException {
    function isa(o: any): o is MissingRequiredParameterException;
}
/**
 * <p>There are no connectors available.</p>
 */
export interface NoConnectorsAvailableException extends __SmithyException, $MetadataBearer {
    name: "NoConnectorsAvailableException";
    $fault: "client";
    message?: string;
}
export declare namespace NoConnectorsAvailableException {
    function isa(o: any): o is NoConnectorsAvailableException;
}
/**
 * <p>This operation is not allowed.</p>
 */
export interface OperationNotPermittedException extends __SmithyException, $MetadataBearer {
    name: "OperationNotPermittedException";
    $fault: "client";
    message?: string;
}
export declare namespace OperationNotPermittedException {
    function isa(o: any): o is OperationNotPermittedException;
}
export declare enum OutputFormat {
    JSON = "JSON",
    YAML = "YAML"
}
export interface PutAppLaunchConfigurationRequest {
    __type?: "PutAppLaunchConfigurationRequest";
    /**
     * <p>ID of the application associated with the launch configuration.</p>
     */
    appId?: string;
    /**
     * <p>Name of service role in the customer's account that Amazon CloudFormation uses to launch the
     *             application.</p>
     */
    roleName?: string;
    /**
     * <p>Launch configurations for server groups in the application.</p>
     */
    serverGroupLaunchConfigurations?: Array<ServerGroupLaunchConfiguration>;
}
export declare namespace PutAppLaunchConfigurationRequest {
    function isa(o: any): o is PutAppLaunchConfigurationRequest;
}
export interface PutAppLaunchConfigurationResponse {
    __type?: "PutAppLaunchConfigurationResponse";
}
export declare namespace PutAppLaunchConfigurationResponse {
    function isa(o: any): o is PutAppLaunchConfigurationResponse;
}
export interface PutAppReplicationConfigurationRequest {
    __type?: "PutAppReplicationConfigurationRequest";
    /**
     * <p>ID of the application tassociated with the replication configuration.</p>
     */
    appId?: string;
    /**
     * <p>Replication configurations for server groups in the application.</p>
     */
    serverGroupReplicationConfigurations?: Array<ServerGroupReplicationConfiguration>;
}
export declare namespace PutAppReplicationConfigurationRequest {
    function isa(o: any): o is PutAppReplicationConfigurationRequest;
}
export interface PutAppReplicationConfigurationResponse {
    __type?: "PutAppReplicationConfigurationResponse";
}
export declare namespace PutAppReplicationConfigurationResponse {
    function isa(o: any): o is PutAppReplicationConfigurationResponse;
}
/**
 * <p>Represents a replication job.</p>
 */
export interface ReplicationJob {
    __type?: "ReplicationJob";
    /**
     * <p>The description of the replication job.</p>
     */
    description?: string;
    /**
     * <p>Whether the replication job should produce encrypted AMIs or not. See also
     *                 <code>KmsKeyId</code> below.</p>
     */
    encrypted?: boolean;
    /**
     * <p>The time between consecutive replication runs, in hours.</p>
     */
    frequency?: number;
    /**
     * <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the
     *             following: </p>
     *         <ul>
     *             <li>
     *                 <p>KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>KMS key alias</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to KMS key alias</p>
     *             </li>
     *          </ul>
     *         <p> If encrypted is <i>true</i> but a KMS key id is not specified, the
     *             customer's default KMS key for EBS is used. </p>
     */
    kmsKeyId?: string;
    /**
     * <p>The ID of the latest Amazon Machine Image (AMI).</p>
     */
    latestAmiId?: string;
    /**
     * <p>The license type to be used for the AMI created by a successful replication
     *             run.</p>
     */
    licenseType?: LicenseType | string;
    /**
     * <p>The start time of the next replication run.</p>
     */
    nextReplicationRunStartTime?: Date;
    /**
     * <p>Number of recent AMIs to keep in the customer's account for a replication job. By
     *             default the value is set to zero, meaning that all AMIs are kept.</p>
     */
    numberOfRecentAmisToKeep?: number;
    /**
     * <p>The identifier of the replication job.</p>
     */
    replicationJobId?: string;
    /**
     * <p>Information about the replication runs.</p>
     */
    replicationRunList?: Array<ReplicationRun>;
    /**
     * <p>The name of the IAM role to be used by the Server Migration Service.</p>
     */
    roleName?: string;
    /**
     * <p></p>
     */
    runOnce?: boolean;
    /**
     * <p>The seed replication time.</p>
     */
    seedReplicationTime?: Date;
    /**
     * <p>The identifier of the server.</p>
     */
    serverId?: string;
    /**
     * <p>The type of server.</p>
     */
    serverType?: ServerType | string;
    /**
     * <p>The state of the replication job.</p>
     */
    state?: ReplicationJobState | string;
    /**
     * <p>The description of the current status of the replication job.</p>
     */
    statusMessage?: string;
    /**
     * <p>Information about the VM server.</p>
     */
    vmServer?: VmServer;
}
export declare namespace ReplicationJob {
    function isa(o: any): o is ReplicationJob;
}
/**
 * <p>The specified replication job already exists.</p>
 */
export interface ReplicationJobAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ReplicationJobAlreadyExistsException";
    $fault: "client";
    message?: string;
}
export declare namespace ReplicationJobAlreadyExistsException {
    function isa(o: any): o is ReplicationJobAlreadyExistsException;
}
/**
 * <p>The specified replication job does not exist.</p>
 */
export interface ReplicationJobNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ReplicationJobNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace ReplicationJobNotFoundException {
    function isa(o: any): o is ReplicationJobNotFoundException;
}
export declare enum ReplicationJobState {
    Active = "ACTIVE",
    Completed = "COMPLETED",
    Deleted = "DELETED",
    Deleting = "DELETING",
    Failed = "FAILED",
    Failing = "FAILING",
    PausedOnFailure = "PAUSED_ON_FAILURE",
    Pending = "PENDING"
}
/**
 * <p>Represents a replication run.</p>
 */
export interface ReplicationRun {
    __type?: "ReplicationRun";
    /**
     * <p>The identifier of the Amazon Machine Image (AMI) from the replication
     *             run.</p>
     */
    amiId?: string;
    /**
     * <p>The completion time of the last replication run.</p>
     */
    completedTime?: Date;
    /**
     * <p>The description of the replication run.</p>
     */
    description?: string;
    /**
     * <p>Whether the replication run should produce encrypted AMI or not. See also
     *                 <code>KmsKeyId</code> below.</p>
     */
    encrypted?: boolean;
    /**
     * <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the
     *             following: </p>
     *         <ul>
     *             <li>
     *                 <p>KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>KMS key alias</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to KMS key alias</p>
     *             </li>
     *          </ul>
     *         <p> If encrypted is <i>true</i> but a KMS key id is not specified, the
     *             customer's default KMS key for EBS is used. </p>
     */
    kmsKeyId?: string;
    /**
     * <p>The identifier of the replication run.</p>
     */
    replicationRunId?: string;
    /**
     * <p>The start time of the next replication run.</p>
     */
    scheduledStartTime?: Date;
    /**
     * <p>Details of the current stage of the replication run.</p>
     */
    stageDetails?: ReplicationRunStageDetails;
    /**
     * <p>The state of the replication run.</p>
     */
    state?: ReplicationRunState | string;
    /**
     * <p>The description of the current status of the replication job.</p>
     */
    statusMessage?: string;
    /**
     * <p>The type of replication run.</p>
     */
    type?: ReplicationRunType | string;
}
export declare namespace ReplicationRun {
    function isa(o: any): o is ReplicationRun;
}
/**
 * <p>You have exceeded the number of on-demand replication runs you can request in a
 *             24-hour period.</p>
 */
export interface ReplicationRunLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "ReplicationRunLimitExceededException";
    $fault: "client";
    message?: string;
}
export declare namespace ReplicationRunLimitExceededException {
    function isa(o: any): o is ReplicationRunLimitExceededException;
}
/**
 * <p>Details of the current stage of a replication run.</p>
 */
export interface ReplicationRunStageDetails {
    __type?: "ReplicationRunStageDetails";
    /**
     * <p>String describing the current stage of a replication run.</p>
     */
    stage?: string;
    /**
     * <p>String describing the progress of the current stage of a replication run.</p>
     */
    stageProgress?: string;
}
export declare namespace ReplicationRunStageDetails {
    function isa(o: any): o is ReplicationRunStageDetails;
}
export declare enum ReplicationRunState {
    Active = "ACTIVE",
    Completed = "COMPLETED",
    Deleted = "DELETED",
    Deleting = "DELETING",
    Failed = "FAILED",
    Missed = "MISSED",
    Pending = "PENDING"
}
export declare enum ReplicationRunType {
    Automatic = "AUTOMATIC",
    OnDemand = "ON_DEMAND"
}
/**
 * <p>Location of the Amazon S3 object in the customer's account.</p>
 */
export interface S3Location {
    __type?: "S3Location";
    /**
     * <p>Amazon S3 bucket name.</p>
     */
    bucket?: string;
    /**
     * <p>Amazon S3 bucket key.</p>
     */
    key?: string;
}
export declare namespace S3Location {
    function isa(o: any): o is S3Location;
}
/**
 * <p>Represents a server.</p>
 */
export interface Server {
    __type?: "Server";
    /**
     * <p>The identifier of the replication job.</p>
     */
    replicationJobId?: string;
    /**
     * <p>Indicates whether the replication job is deleted or failed.</p>
     */
    replicationJobTerminated?: boolean;
    /**
     * <p>The identifier of the server.</p>
     */
    serverId?: string;
    /**
     * <p>The type of server.</p>
     */
    serverType?: ServerType | string;
    /**
     * <p>Information about the VM server.</p>
     */
    vmServer?: VmServer;
}
export declare namespace Server {
    function isa(o: any): o is Server;
}
/**
 * <p>The specified server cannot be replicated.</p>
 */
export interface ServerCannotBeReplicatedException extends __SmithyException, $MetadataBearer {
    name: "ServerCannotBeReplicatedException";
    $fault: "client";
    message?: string;
}
export declare namespace ServerCannotBeReplicatedException {
    function isa(o: any): o is ServerCannotBeReplicatedException;
}
export declare enum ServerCatalogStatus {
    Available = "AVAILABLE",
    Deleted = "DELETED",
    Expired = "EXPIRED",
    Importing = "IMPORTING",
    NotImported = "NOT_IMPORTED"
}
/**
 * <p>A logical grouping of servers.</p>
 */
export interface ServerGroup {
    __type?: "ServerGroup";
    /**
     * <p>Name of a server group.</p>
     */
    name?: string;
    /**
     * <p>Identifier of a server group.</p>
     */
    serverGroupId?: string;
    /**
     * <p>List of servers belonging to a server group.</p>
     */
    serverList?: Array<Server>;
}
export declare namespace ServerGroup {
    function isa(o: any): o is ServerGroup;
}
/**
 * <p>Launch configuration for a server group.</p>
 */
export interface ServerGroupLaunchConfiguration {
    __type?: "ServerGroupLaunchConfiguration";
    /**
     * <p>Launch order of servers in the server group.</p>
     */
    launchOrder?: number;
    /**
     * <p>Identifier of the server group the launch configuration is associated with.</p>
     */
    serverGroupId?: string;
    /**
     * <p>Launch configuration for servers in the server group.</p>
     */
    serverLaunchConfigurations?: Array<ServerLaunchConfiguration>;
}
export declare namespace ServerGroupLaunchConfiguration {
    function isa(o: any): o is ServerGroupLaunchConfiguration;
}
/**
 * <p>Replication configuration for a server group.</p>
 */
export interface ServerGroupReplicationConfiguration {
    __type?: "ServerGroupReplicationConfiguration";
    /**
     * <p>Identifier of the server group this replication configuration is associated
     *             with.</p>
     */
    serverGroupId?: string;
    /**
     * <p>Replication configuration for servers in the server group.</p>
     */
    serverReplicationConfigurations?: Array<ServerReplicationConfiguration>;
}
export declare namespace ServerGroupReplicationConfiguration {
    function isa(o: any): o is ServerGroupReplicationConfiguration;
}
/**
 * <p>Launch configuration for a server.</p>
 */
export interface ServerLaunchConfiguration {
    __type?: "ServerLaunchConfiguration";
    /**
     * <p>If true, a publicly accessible IP address is created when launching the server.</p>
     */
    associatePublicIpAddress?: boolean;
    /**
     * <p>Name of the EC2 SSH Key to be used for connecting to the launched server.</p>
     */
    ec2KeyName?: string;
    /**
     * <p>Instance type to be used for launching the server.</p>
     */
    instanceType?: string;
    /**
     * <p>Logical ID of the server in the Amazon CloudFormation template.</p>
     */
    logicalId?: string;
    /**
     * <p>Identifier of the security group that applies to the launched server.</p>
     */
    securityGroup?: string;
    /**
     * <p>Identifier of the server the launch configuration is associated with.</p>
     */
    server?: Server;
    /**
     * <p>Identifier of the subnet the server should be launched into.</p>
     */
    subnet?: string;
    /**
     * <p>Location of the user-data script to be executed when launching the server.</p>
     */
    userData?: UserData;
    /**
     * <p>Identifier of the VPC the server should be launched into.</p>
     */
    vpc?: string;
}
export declare namespace ServerLaunchConfiguration {
    function isa(o: any): o is ServerLaunchConfiguration;
}
/**
 * <p>Replication configuration of a server.</p>
 */
export interface ServerReplicationConfiguration {
    __type?: "ServerReplicationConfiguration";
    /**
     * <p>Identifier of the server this replication configuration is associated with.</p>
     */
    server?: Server;
    /**
     * <p>Parameters for replicating the server.</p>
     */
    serverReplicationParameters?: ServerReplicationParameters;
}
export declare namespace ServerReplicationConfiguration {
    function isa(o: any): o is ServerReplicationConfiguration;
}
/**
 * <p>Replication parameters for replicating a server.</p>
 */
export interface ServerReplicationParameters {
    __type?: "ServerReplicationParameters";
    /**
     * <p>When true, the replication job produces encrypted AMIs. See also <code>KmsKeyId</code>
     *             below.</p>
     */
    encrypted?: boolean;
    /**
     * <p>Frequency of creating replication jobs for the server.</p>
     */
    frequency?: number;
    /**
     * <p></p>
     *         <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the
     *             following: </p>
     *         <ul>
     *             <li>
     *                 <p>KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>KMS key alias</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to KMS key alias</p>
     *             </li>
     *          </ul>
     *         <p> If encrypted is <i>true</i> but a KMS key id is not specified, the
     *             customer's default KMS key for EBS is used. </p>
     */
    kmsKeyId?: string;
    /**
     * <p>License type for creating a replication job for the server.</p>
     */
    licenseType?: LicenseType | string;
    /**
     * <p>Number of recent AMIs to keep when creating a replication job for this server.</p>
     */
    numberOfRecentAmisToKeep?: number;
    /**
     * <p></p>
     */
    runOnce?: boolean;
    /**
     * <p>Seed time for creating a replication job for the server.</p>
     */
    seedTime?: Date;
}
export declare namespace ServerReplicationParameters {
    function isa(o: any): o is ServerReplicationParameters;
}
export declare enum ServerType {
    VirtualMachine = "VIRTUAL_MACHINE"
}
export interface StartAppReplicationRequest {
    __type?: "StartAppReplicationRequest";
    /**
     * <p>ID of the application to replicate.</p>
     */
    appId?: string;
}
export declare namespace StartAppReplicationRequest {
    function isa(o: any): o is StartAppReplicationRequest;
}
export interface StartAppReplicationResponse {
    __type?: "StartAppReplicationResponse";
}
export declare namespace StartAppReplicationResponse {
    function isa(o: any): o is StartAppReplicationResponse;
}
export interface StartOnDemandReplicationRunRequest {
    __type?: "StartOnDemandReplicationRunRequest";
    /**
     * <p>The description of the replication run.</p>
     */
    description?: string;
    /**
     * <p>The identifier of the replication job.</p>
     */
    replicationJobId: string | undefined;
}
export declare namespace StartOnDemandReplicationRunRequest {
    function isa(o: any): o is StartOnDemandReplicationRunRequest;
}
export interface StartOnDemandReplicationRunResponse {
    __type?: "StartOnDemandReplicationRunResponse";
    /**
     * <p>The identifier of the replication run.</p>
     */
    replicationRunId?: string;
}
export declare namespace StartOnDemandReplicationRunResponse {
    function isa(o: any): o is StartOnDemandReplicationRunResponse;
}
export interface StopAppReplicationRequest {
    __type?: "StopAppReplicationRequest";
    /**
     * <p>ID of the application to stop replicating.</p>
     */
    appId?: string;
}
export declare namespace StopAppReplicationRequest {
    function isa(o: any): o is StopAppReplicationRequest;
}
export interface StopAppReplicationResponse {
    __type?: "StopAppReplicationResponse";
}
export declare namespace StopAppReplicationResponse {
    function isa(o: any): o is StopAppReplicationResponse;
}
/**
 * <p>A label that can be assigned to an application.</p>
 */
export interface Tag {
    __type?: "Tag";
    /**
     * <p>Tag key.</p>
     */
    key?: string;
    /**
     * <p>Tag value.</p>
     */
    value?: string;
}
export declare namespace Tag {
    function isa(o: any): o is Tag;
}
/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface TemporarilyUnavailableException extends __SmithyException, $MetadataBearer {
    name: "TemporarilyUnavailableException";
    $fault: "server";
}
export declare namespace TemporarilyUnavailableException {
    function isa(o: any): o is TemporarilyUnavailableException;
}
export interface TerminateAppRequest {
    __type?: "TerminateAppRequest";
    /**
     * <p>ID of the application to terminate.</p>
     */
    appId?: string;
}
export declare namespace TerminateAppRequest {
    function isa(o: any): o is TerminateAppRequest;
}
export interface TerminateAppResponse {
    __type?: "TerminateAppResponse";
}
export declare namespace TerminateAppResponse {
    function isa(o: any): o is TerminateAppResponse;
}
/**
 * <p>You lack permissions needed to perform this operation. Check your IAM policies, and
 *             ensure that you are using the correct access keys.</p>
 */
export interface UnauthorizedOperationException extends __SmithyException, $MetadataBearer {
    name: "UnauthorizedOperationException";
    $fault: "client";
    message?: string;
}
export declare namespace UnauthorizedOperationException {
    function isa(o: any): o is UnauthorizedOperationException;
}
export interface UpdateAppRequest {
    __type?: "UpdateAppRequest";
    /**
     * <p>ID of the application to update.</p>
     */
    appId?: string;
    /**
     * <p>New description of the application.</p>
     */
    description?: string;
    /**
     * <p>New name of the application.</p>
     */
    name?: string;
    /**
     * <p>Name of the service role in the customer's account used by AWS SMS.</p>
     */
    roleName?: string;
    /**
     * <p>List of server groups in the application to update.</p>
     */
    serverGroups?: Array<ServerGroup>;
    /**
     * <p>List of tags to associate with the application.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace UpdateAppRequest {
    function isa(o: any): o is UpdateAppRequest;
}
export interface UpdateAppResponse {
    __type?: "UpdateAppResponse";
    /**
     * <p>Summary description of the application.</p>
     */
    appSummary?: AppSummary;
    /**
     * <p>List of updated server groups in the application.</p>
     */
    serverGroups?: Array<ServerGroup>;
    /**
     * <p>List of tags associated with the application.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace UpdateAppResponse {
    function isa(o: any): o is UpdateAppResponse;
}
export interface UpdateReplicationJobRequest {
    __type?: "UpdateReplicationJobRequest";
    /**
     * <p>The description of the replication job.</p>
     */
    description?: string;
    /**
     * <p>When true, the replication job produces encrypted AMIs . See also
     *                 <code>KmsKeyId</code> below.</p>
     */
    encrypted?: boolean;
    /**
     * <p>The time between consecutive replication runs, in hours.</p>
     */
    frequency?: number;
    /**
     * <p></p>
     *         <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the
     *             following: </p>
     *         <ul>
     *             <li>
     *                 <p>KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>KMS key alias</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to KMS key alias</p>
     *             </li>
     *          </ul>
     *         <p> If encrypted is <i>true</i> but a KMS key id is not specified, the
     *             customer's default KMS key for EBS is used. </p>
     */
    kmsKeyId?: string;
    /**
     * <p>The license type to be used for the AMI created by a successful replication
     *             run.</p>
     */
    licenseType?: LicenseType | string;
    /**
     * <p>The start time of the next replication run.</p>
     */
    nextReplicationRunStartTime?: Date;
    /**
     * <p>The maximum number of SMS-created AMIs to retain. The oldest will be deleted once the
     *             maximum number is reached and a new AMI is created.</p>
     */
    numberOfRecentAmisToKeep?: number;
    /**
     * <p>The identifier of the replication job.</p>
     */
    replicationJobId: string | undefined;
    /**
     * <p>The name of the IAM role to be used by AWS SMS.</p>
     */
    roleName?: string;
}
export declare namespace UpdateReplicationJobRequest {
    function isa(o: any): o is UpdateReplicationJobRequest;
}
export interface UpdateReplicationJobResponse {
    __type?: "UpdateReplicationJobResponse";
}
export declare namespace UpdateReplicationJobResponse {
    function isa(o: any): o is UpdateReplicationJobResponse;
}
/**
 * <p>A script that runs on first launch of an Amazon EC2 instance. Used for configuring the
 *             server during launch.</p>
 */
export interface UserData {
    __type?: "UserData";
    /**
     * <p>Amazon S3 location of the user-data script.</p>
     */
    s3Location?: S3Location;
}
export declare namespace UserData {
    function isa(o: any): o is UserData;
}
export declare enum VmManagerType {
    hyperVManager = "HYPERV-MANAGER",
    scvmm = "SCVMM",
    vSphere = "VSPHERE"
}
/**
 * <p>Represents a VM server.</p>
 */
export interface VmServer {
    __type?: "VmServer";
    /**
     * <p>The name of the VM manager.</p>
     */
    vmManagerName?: string;
    /**
     * <p>The type of VM management product.</p>
     */
    vmManagerType?: VmManagerType | string;
    /**
     * <p>The name of the VM.</p>
     */
    vmName?: string;
    /**
     * <p>The VM folder path in the vCenter Server virtual machine inventory tree.</p>
     */
    vmPath?: string;
    /**
     * <p>Information about the VM server location.</p>
     */
    vmServerAddress?: VmServerAddress;
}
export declare namespace VmServer {
    function isa(o: any): o is VmServer;
}
/**
 * <p>Represents a VM server location.</p>
 */
export interface VmServerAddress {
    __type?: "VmServerAddress";
    /**
     * <p>The identifier of the VM.</p>
     */
    vmId?: string;
    /**
     * <p>The identifier of the VM manager.</p>
     */
    vmManagerId?: string;
}
export declare namespace VmServerAddress {
    function isa(o: any): o is VmServerAddress;
}
