import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface AssociateRoleToGroupRequest {
    __type?: "AssociateRoleToGroupRequest";
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The ARN of the role you wish to associate with this group. The existence of the role is not validated.
     */
    RoleArn: string | undefined;
}
export declare namespace AssociateRoleToGroupRequest {
    function isa(o: any): o is AssociateRoleToGroupRequest;
}
export interface AssociateRoleToGroupResponse {
    __type?: "AssociateRoleToGroupResponse";
    /**
     * The time, in milliseconds since the epoch, when the role ARN was associated with the group.
     */
    AssociatedAt?: string;
}
export declare namespace AssociateRoleToGroupResponse {
    function isa(o: any): o is AssociateRoleToGroupResponse;
}
export interface AssociateServiceRoleToAccountRequest {
    __type?: "AssociateServiceRoleToAccountRequest";
    /**
     * The ARN of the service role you wish to associate with your account.
     */
    RoleArn: string | undefined;
}
export declare namespace AssociateServiceRoleToAccountRequest {
    function isa(o: any): o is AssociateServiceRoleToAccountRequest;
}
export interface AssociateServiceRoleToAccountResponse {
    __type?: "AssociateServiceRoleToAccountResponse";
    /**
     * The time when the service role was associated with the account.
     */
    AssociatedAt?: string;
}
export declare namespace AssociateServiceRoleToAccountResponse {
    function isa(o: any): o is AssociateServiceRoleToAccountResponse;
}
/**
 * General error information.
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
    name: "BadRequestException";
    $fault: "client";
    /**
     * Details about the error.
     */
    ErrorDetails?: Array<ErrorDetail>;
    /**
     * A message containing information about the error.
     */
    Message?: string;
}
export declare namespace BadRequestException {
    function isa(o: any): o is BadRequestException;
}
/**
 * Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
 */
export interface BulkDeployment {
    __type?: "BulkDeployment";
    /**
     * The ARN of the bulk deployment.
     */
    BulkDeploymentArn?: string;
    /**
     * The ID of the bulk deployment.
     */
    BulkDeploymentId?: string;
    /**
     * The time, in ISO format, when the deployment was created.
     */
    CreatedAt?: string;
}
export declare namespace BulkDeployment {
    function isa(o: any): o is BulkDeployment;
}
/**
 * Relevant metrics on input records processed during bulk deployment.
 */
export interface BulkDeploymentMetrics {
    __type?: "BulkDeploymentMetrics";
    /**
     * The total number of records that returned a non-retryable error. For example, this can occur if a group record from the input file uses an invalid format or specifies a nonexistent group version, or if the execution role doesn't grant permission to deploy a group or group version.
     */
    InvalidInputRecords?: number;
    /**
     * The total number of group records from the input file that have been processed so far, or attempted.
     */
    RecordsProcessed?: number;
    /**
     * The total number of deployment attempts that returned a retryable error. For example, a retry is triggered if the attempt to deploy a group returns a throttling error. ''StartBulkDeployment'' retries a group deployment up to five times.
     */
    RetryAttempts?: number;
}
export declare namespace BulkDeploymentMetrics {
    function isa(o: any): o is BulkDeploymentMetrics;
}
/**
 * Information about an individual group deployment in a bulk deployment operation.
 */
export interface BulkDeploymentResult {
    __type?: "BulkDeploymentResult";
    /**
     * The time, in ISO format, when the deployment was created.
     */
    CreatedAt?: string;
    /**
     * The ARN of the group deployment.
     */
    DeploymentArn?: string;
    /**
     * The ID of the group deployment.
     */
    DeploymentId?: string;
    /**
     * The current status of the group deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
     */
    DeploymentStatus?: string;
    /**
     * The type of the deployment.
     */
    DeploymentType?: DeploymentType | string;
    /**
     * Details about the error.
     */
    ErrorDetails?: Array<ErrorDetail>;
    /**
     * The error message for a failed deployment
     */
    ErrorMessage?: string;
    /**
     * The ARN of the Greengrass group.
     */
    GroupArn?: string;
}
export declare namespace BulkDeploymentResult {
    function isa(o: any): o is BulkDeploymentResult;
}
export declare enum BulkDeploymentStatus {
    Completed = "Completed",
    Failed = "Failed",
    Initializing = "Initializing",
    Running = "Running",
    Stopped = "Stopped",
    Stopping = "Stopping"
}
/**
 * Information about a Greengrass core's connectivity.
 */
export interface ConnectivityInfo {
    __type?: "ConnectivityInfo";
    /**
     * The endpoint for the Greengrass core. Can be an IP address or DNS.
     */
    HostAddress?: string;
    /**
     * The ID of the connectivity information.
     */
    Id?: string;
    /**
     * Metadata for this endpoint.
     */
    Metadata?: string;
    /**
     * The port of the Greengrass core. Usually 8883.
     */
    PortNumber?: number;
}
export declare namespace ConnectivityInfo {
    function isa(o: any): o is ConnectivityInfo;
}
/**
 * Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
 */
export interface Connector {
    __type?: "Connector";
    /**
     * The ARN of the connector.
     */
    ConnectorArn: string | undefined;
    /**
     * A descriptive or arbitrary ID for the connector. This value must be unique within the connector definition version. Max length is 128 characters with pattern [a-zA-Z0-9:_-]+.
     */
    Id: string | undefined;
    /**
     * The parameters or configuration that the connector uses.
     */
    Parameters?: {
        [key: string]: string;
    };
}
export declare namespace Connector {
    function isa(o: any): o is Connector;
}
/**
 * Information about the connector definition version, which is a container for connectors.
 */
export interface ConnectorDefinitionVersion {
    __type?: "ConnectorDefinitionVersion";
    /**
     * A list of references to connectors in this version, with their corresponding configuration settings.
     */
    Connectors?: Array<Connector>;
}
export declare namespace ConnectorDefinitionVersion {
    function isa(o: any): o is ConnectorDefinitionVersion;
}
/**
 * Information about a core.
 */
export interface Core {
    __type?: "Core";
    /**
     * The ARN of the certificate associated with the core.
     */
    CertificateArn: string | undefined;
    /**
     * A descriptive or arbitrary ID for the core. This value must be unique within the core definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
     */
    Id: string | undefined;
    /**
     * If true, the core's local shadow is automatically synced with the cloud.
     */
    SyncShadow?: boolean;
    /**
     * The ARN of the thing which is the core.
     */
    ThingArn: string | undefined;
}
export declare namespace Core {
    function isa(o: any): o is Core;
}
/**
 * Information about a core definition version.
 */
export interface CoreDefinitionVersion {
    __type?: "CoreDefinitionVersion";
    /**
     * A list of cores in the core definition version.
     */
    Cores?: Array<Core>;
}
export declare namespace CoreDefinitionVersion {
    function isa(o: any): o is CoreDefinitionVersion;
}
export interface CreateConnectorDefinitionRequest {
    __type?: "CreateConnectorDefinitionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the connector definition.
     */
    InitialVersion?: ConnectorDefinitionVersion;
    /**
     * The name of the connector definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateConnectorDefinitionRequest {
    function isa(o: any): o is CreateConnectorDefinitionRequest;
}
export interface CreateConnectorDefinitionResponse {
    __type?: "CreateConnectorDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateConnectorDefinitionResponse {
    function isa(o: any): o is CreateConnectorDefinitionResponse;
}
export interface CreateConnectorDefinitionVersionRequest {
    __type?: "CreateConnectorDefinitionVersionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the connector definition.
     */
    ConnectorDefinitionId: string | undefined;
    /**
     * A list of references to connectors in this version, with their corresponding configuration settings.
     */
    Connectors?: Array<Connector>;
}
export declare namespace CreateConnectorDefinitionVersionRequest {
    function isa(o: any): o is CreateConnectorDefinitionVersionRequest;
}
export interface CreateConnectorDefinitionVersionResponse {
    __type?: "CreateConnectorDefinitionVersionResponse";
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateConnectorDefinitionVersionResponse {
    function isa(o: any): o is CreateConnectorDefinitionVersionResponse;
}
/**
 * Information needed to create a core definition.
 */
export interface CreateCoreDefinitionRequest {
    __type?: "CreateCoreDefinitionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the core definition.
     */
    InitialVersion?: CoreDefinitionVersion;
    /**
     * The name of the core definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateCoreDefinitionRequest {
    function isa(o: any): o is CreateCoreDefinitionRequest;
}
export interface CreateCoreDefinitionResponse {
    __type?: "CreateCoreDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateCoreDefinitionResponse {
    function isa(o: any): o is CreateCoreDefinitionResponse;
}
export interface CreateCoreDefinitionVersionRequest {
    __type?: "CreateCoreDefinitionVersionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the core definition.
     */
    CoreDefinitionId: string | undefined;
    /**
     * A list of cores in the core definition version.
     */
    Cores?: Array<Core>;
}
export declare namespace CreateCoreDefinitionVersionRequest {
    function isa(o: any): o is CreateCoreDefinitionVersionRequest;
}
export interface CreateCoreDefinitionVersionResponse {
    __type?: "CreateCoreDefinitionVersionResponse";
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateCoreDefinitionVersionResponse {
    function isa(o: any): o is CreateCoreDefinitionVersionResponse;
}
export interface CreateDeploymentRequest {
    __type?: "CreateDeploymentRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the deployment if you wish to redeploy a previous deployment.
     */
    DeploymentId?: string;
    /**
     * The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
     */
    DeploymentType: DeploymentType | string | undefined;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The ID of the group version to be deployed.
     */
    GroupVersionId?: string;
}
export declare namespace CreateDeploymentRequest {
    function isa(o: any): o is CreateDeploymentRequest;
}
export interface CreateDeploymentResponse {
    __type?: "CreateDeploymentResponse";
    /**
     * The ARN of the deployment.
     */
    DeploymentArn?: string;
    /**
     * The ID of the deployment.
     */
    DeploymentId?: string;
}
export declare namespace CreateDeploymentResponse {
    function isa(o: any): o is CreateDeploymentResponse;
}
export interface CreateDeviceDefinitionRequest {
    __type?: "CreateDeviceDefinitionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the device definition.
     */
    InitialVersion?: DeviceDefinitionVersion;
    /**
     * The name of the device definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateDeviceDefinitionRequest {
    function isa(o: any): o is CreateDeviceDefinitionRequest;
}
export interface CreateDeviceDefinitionResponse {
    __type?: "CreateDeviceDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateDeviceDefinitionResponse {
    function isa(o: any): o is CreateDeviceDefinitionResponse;
}
export interface CreateDeviceDefinitionVersionRequest {
    __type?: "CreateDeviceDefinitionVersionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the device definition.
     */
    DeviceDefinitionId: string | undefined;
    /**
     * A list of devices in the definition version.
     */
    Devices?: Array<Device>;
}
export declare namespace CreateDeviceDefinitionVersionRequest {
    function isa(o: any): o is CreateDeviceDefinitionVersionRequest;
}
export interface CreateDeviceDefinitionVersionResponse {
    __type?: "CreateDeviceDefinitionVersionResponse";
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateDeviceDefinitionVersionResponse {
    function isa(o: any): o is CreateDeviceDefinitionVersionResponse;
}
export interface CreateFunctionDefinitionRequest {
    __type?: "CreateFunctionDefinitionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the function definition.
     */
    InitialVersion?: FunctionDefinitionVersion;
    /**
     * The name of the function definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateFunctionDefinitionRequest {
    function isa(o: any): o is CreateFunctionDefinitionRequest;
}
export interface CreateFunctionDefinitionResponse {
    __type?: "CreateFunctionDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateFunctionDefinitionResponse {
    function isa(o: any): o is CreateFunctionDefinitionResponse;
}
/**
 * Information needed to create a function definition version.
 */
export interface CreateFunctionDefinitionVersionRequest {
    __type?: "CreateFunctionDefinitionVersionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
     */
    DefaultConfig?: FunctionDefaultConfig;
    /**
     * The ID of the Lambda function definition.
     */
    FunctionDefinitionId: string | undefined;
    /**
     * A list of Lambda functions in this function definition version.
     */
    Functions?: Array<Function>;
}
export declare namespace CreateFunctionDefinitionVersionRequest {
    function isa(o: any): o is CreateFunctionDefinitionVersionRequest;
}
export interface CreateFunctionDefinitionVersionResponse {
    __type?: "CreateFunctionDefinitionVersionResponse";
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateFunctionDefinitionVersionResponse {
    function isa(o: any): o is CreateFunctionDefinitionVersionResponse;
}
export interface CreateGroupCertificateAuthorityRequest {
    __type?: "CreateGroupCertificateAuthorityRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace CreateGroupCertificateAuthorityRequest {
    function isa(o: any): o is CreateGroupCertificateAuthorityRequest;
}
export interface CreateGroupCertificateAuthorityResponse {
    __type?: "CreateGroupCertificateAuthorityResponse";
    /**
     * The ARN of the group certificate authority.
     */
    GroupCertificateAuthorityArn?: string;
}
export declare namespace CreateGroupCertificateAuthorityResponse {
    function isa(o: any): o is CreateGroupCertificateAuthorityResponse;
}
export interface CreateGroupRequest {
    __type?: "CreateGroupRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the group.
     */
    InitialVersion?: GroupVersion;
    /**
     * The name of the group.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateGroupRequest {
    function isa(o: any): o is CreateGroupRequest;
}
export interface CreateGroupResponse {
    __type?: "CreateGroupResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateGroupResponse {
    function isa(o: any): o is CreateGroupResponse;
}
export interface CreateGroupVersionRequest {
    __type?: "CreateGroupVersionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ARN of the connector definition version for this group.
     */
    ConnectorDefinitionVersionArn?: string;
    /**
     * The ARN of the core definition version for this group.
     */
    CoreDefinitionVersionArn?: string;
    /**
     * The ARN of the device definition version for this group.
     */
    DeviceDefinitionVersionArn?: string;
    /**
     * The ARN of the function definition version for this group.
     */
    FunctionDefinitionVersionArn?: string;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The ARN of the logger definition version for this group.
     */
    LoggerDefinitionVersionArn?: string;
    /**
     * The ARN of the resource definition version for this group.
     */
    ResourceDefinitionVersionArn?: string;
    /**
     * The ARN of the subscription definition version for this group.
     */
    SubscriptionDefinitionVersionArn?: string;
}
export declare namespace CreateGroupVersionRequest {
    function isa(o: any): o is CreateGroupVersionRequest;
}
export interface CreateGroupVersionResponse {
    __type?: "CreateGroupVersionResponse";
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateGroupVersionResponse {
    function isa(o: any): o is CreateGroupVersionResponse;
}
export interface CreateLoggerDefinitionRequest {
    __type?: "CreateLoggerDefinitionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the logger definition.
     */
    InitialVersion?: LoggerDefinitionVersion;
    /**
     * The name of the logger definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateLoggerDefinitionRequest {
    function isa(o: any): o is CreateLoggerDefinitionRequest;
}
export interface CreateLoggerDefinitionResponse {
    __type?: "CreateLoggerDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateLoggerDefinitionResponse {
    function isa(o: any): o is CreateLoggerDefinitionResponse;
}
export interface CreateLoggerDefinitionVersionRequest {
    __type?: "CreateLoggerDefinitionVersionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the logger definition.
     */
    LoggerDefinitionId: string | undefined;
    /**
     * A list of loggers.
     */
    Loggers?: Array<Logger>;
}
export declare namespace CreateLoggerDefinitionVersionRequest {
    function isa(o: any): o is CreateLoggerDefinitionVersionRequest;
}
export interface CreateLoggerDefinitionVersionResponse {
    __type?: "CreateLoggerDefinitionVersionResponse";
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateLoggerDefinitionVersionResponse {
    function isa(o: any): o is CreateLoggerDefinitionVersionResponse;
}
export interface CreateResourceDefinitionRequest {
    __type?: "CreateResourceDefinitionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the resource definition.
     */
    InitialVersion?: ResourceDefinitionVersion;
    /**
     * The name of the resource definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateResourceDefinitionRequest {
    function isa(o: any): o is CreateResourceDefinitionRequest;
}
export interface CreateResourceDefinitionResponse {
    __type?: "CreateResourceDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateResourceDefinitionResponse {
    function isa(o: any): o is CreateResourceDefinitionResponse;
}
export interface CreateResourceDefinitionVersionRequest {
    __type?: "CreateResourceDefinitionVersionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the resource definition.
     */
    ResourceDefinitionId: string | undefined;
    /**
     * A list of resources.
     */
    Resources?: Array<Resource>;
}
export declare namespace CreateResourceDefinitionVersionRequest {
    function isa(o: any): o is CreateResourceDefinitionVersionRequest;
}
export interface CreateResourceDefinitionVersionResponse {
    __type?: "CreateResourceDefinitionVersionResponse";
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateResourceDefinitionVersionResponse {
    function isa(o: any): o is CreateResourceDefinitionVersionResponse;
}
export interface CreateSoftwareUpdateJobRequest {
    __type?: "CreateSoftwareUpdateJobRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
     */
    S3UrlSignerRole: string | undefined;
    /**
     * The piece of software on the Greengrass core that will be updated.
     */
    SoftwareToUpdate: SoftwareToUpdate | string | undefined;
    /**
     * The minimum level of log statements that should be logged by the OTA Agent during an update.
     */
    UpdateAgentLogLevel?: UpdateAgentLogLevel | string;
    /**
     * The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
     */
    UpdateTargets: Array<string> | undefined;
    /**
     * The architecture of the cores which are the targets of an update.
     */
    UpdateTargetsArchitecture: UpdateTargetsArchitecture | string | undefined;
    /**
     * The operating system of the cores which are the targets of an update.
     */
    UpdateTargetsOperatingSystem: UpdateTargetsOperatingSystem | string | undefined;
}
export declare namespace CreateSoftwareUpdateJobRequest {
    function isa(o: any): o is CreateSoftwareUpdateJobRequest;
}
export interface CreateSoftwareUpdateJobResponse {
    __type?: "CreateSoftwareUpdateJobResponse";
    /**
     * The IoT Job ARN corresponding to this update.
     */
    IotJobArn?: string;
    /**
     * The IoT Job Id corresponding to this update.
     */
    IotJobId?: string;
    /**
     * The software version installed on the device or devices after the update.
     */
    PlatformSoftwareVersion?: string;
}
export declare namespace CreateSoftwareUpdateJobResponse {
    function isa(o: any): o is CreateSoftwareUpdateJobResponse;
}
export interface CreateSubscriptionDefinitionRequest {
    __type?: "CreateSubscriptionDefinitionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the subscription definition.
     */
    InitialVersion?: SubscriptionDefinitionVersion;
    /**
     * The name of the subscription definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateSubscriptionDefinitionRequest {
    function isa(o: any): o is CreateSubscriptionDefinitionRequest;
}
export interface CreateSubscriptionDefinitionResponse {
    __type?: "CreateSubscriptionDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateSubscriptionDefinitionResponse {
    function isa(o: any): o is CreateSubscriptionDefinitionResponse;
}
export interface CreateSubscriptionDefinitionVersionRequest {
    __type?: "CreateSubscriptionDefinitionVersionRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the subscription definition.
     */
    SubscriptionDefinitionId: string | undefined;
    /**
     * A list of subscriptions.
     */
    Subscriptions?: Array<Subscription>;
}
export declare namespace CreateSubscriptionDefinitionVersionRequest {
    function isa(o: any): o is CreateSubscriptionDefinitionVersionRequest;
}
export interface CreateSubscriptionDefinitionVersionResponse {
    __type?: "CreateSubscriptionDefinitionVersionResponse";
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateSubscriptionDefinitionVersionResponse {
    function isa(o: any): o is CreateSubscriptionDefinitionVersionResponse;
}
/**
 * Information about a definition.
 */
export interface DefinitionInformation {
    __type?: "DefinitionInformation";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DefinitionInformation {
    function isa(o: any): o is DefinitionInformation;
}
export interface DeleteConnectorDefinitionRequest {
    __type?: "DeleteConnectorDefinitionRequest";
    /**
     * The ID of the connector definition.
     */
    ConnectorDefinitionId: string | undefined;
}
export declare namespace DeleteConnectorDefinitionRequest {
    function isa(o: any): o is DeleteConnectorDefinitionRequest;
}
export interface DeleteConnectorDefinitionResponse {
    __type?: "DeleteConnectorDefinitionResponse";
}
export declare namespace DeleteConnectorDefinitionResponse {
    function isa(o: any): o is DeleteConnectorDefinitionResponse;
}
export interface DeleteCoreDefinitionRequest {
    __type?: "DeleteCoreDefinitionRequest";
    /**
     * The ID of the core definition.
     */
    CoreDefinitionId: string | undefined;
}
export declare namespace DeleteCoreDefinitionRequest {
    function isa(o: any): o is DeleteCoreDefinitionRequest;
}
export interface DeleteCoreDefinitionResponse {
    __type?: "DeleteCoreDefinitionResponse";
}
export declare namespace DeleteCoreDefinitionResponse {
    function isa(o: any): o is DeleteCoreDefinitionResponse;
}
export interface DeleteDeviceDefinitionRequest {
    __type?: "DeleteDeviceDefinitionRequest";
    /**
     * The ID of the device definition.
     */
    DeviceDefinitionId: string | undefined;
}
export declare namespace DeleteDeviceDefinitionRequest {
    function isa(o: any): o is DeleteDeviceDefinitionRequest;
}
export interface DeleteDeviceDefinitionResponse {
    __type?: "DeleteDeviceDefinitionResponse";
}
export declare namespace DeleteDeviceDefinitionResponse {
    function isa(o: any): o is DeleteDeviceDefinitionResponse;
}
export interface DeleteFunctionDefinitionRequest {
    __type?: "DeleteFunctionDefinitionRequest";
    /**
     * The ID of the Lambda function definition.
     */
    FunctionDefinitionId: string | undefined;
}
export declare namespace DeleteFunctionDefinitionRequest {
    function isa(o: any): o is DeleteFunctionDefinitionRequest;
}
export interface DeleteFunctionDefinitionResponse {
    __type?: "DeleteFunctionDefinitionResponse";
}
export declare namespace DeleteFunctionDefinitionResponse {
    function isa(o: any): o is DeleteFunctionDefinitionResponse;
}
export interface DeleteGroupRequest {
    __type?: "DeleteGroupRequest";
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace DeleteGroupRequest {
    function isa(o: any): o is DeleteGroupRequest;
}
export interface DeleteGroupResponse {
    __type?: "DeleteGroupResponse";
}
export declare namespace DeleteGroupResponse {
    function isa(o: any): o is DeleteGroupResponse;
}
export interface DeleteLoggerDefinitionRequest {
    __type?: "DeleteLoggerDefinitionRequest";
    /**
     * The ID of the logger definition.
     */
    LoggerDefinitionId: string | undefined;
}
export declare namespace DeleteLoggerDefinitionRequest {
    function isa(o: any): o is DeleteLoggerDefinitionRequest;
}
export interface DeleteLoggerDefinitionResponse {
    __type?: "DeleteLoggerDefinitionResponse";
}
export declare namespace DeleteLoggerDefinitionResponse {
    function isa(o: any): o is DeleteLoggerDefinitionResponse;
}
export interface DeleteResourceDefinitionRequest {
    __type?: "DeleteResourceDefinitionRequest";
    /**
     * The ID of the resource definition.
     */
    ResourceDefinitionId: string | undefined;
}
export declare namespace DeleteResourceDefinitionRequest {
    function isa(o: any): o is DeleteResourceDefinitionRequest;
}
export interface DeleteResourceDefinitionResponse {
    __type?: "DeleteResourceDefinitionResponse";
}
export declare namespace DeleteResourceDefinitionResponse {
    function isa(o: any): o is DeleteResourceDefinitionResponse;
}
export interface DeleteSubscriptionDefinitionRequest {
    __type?: "DeleteSubscriptionDefinitionRequest";
    /**
     * The ID of the subscription definition.
     */
    SubscriptionDefinitionId: string | undefined;
}
export declare namespace DeleteSubscriptionDefinitionRequest {
    function isa(o: any): o is DeleteSubscriptionDefinitionRequest;
}
export interface DeleteSubscriptionDefinitionResponse {
    __type?: "DeleteSubscriptionDefinitionResponse";
}
export declare namespace DeleteSubscriptionDefinitionResponse {
    function isa(o: any): o is DeleteSubscriptionDefinitionResponse;
}
/**
 * Information about a deployment.
 */
export interface Deployment {
    __type?: "Deployment";
    /**
     * The time, in milliseconds since the epoch, when the deployment was created.
     */
    CreatedAt?: string;
    /**
     * The ARN of the deployment.
     */
    DeploymentArn?: string;
    /**
     * The ID of the deployment.
     */
    DeploymentId?: string;
    /**
     * The type of the deployment.
     */
    DeploymentType?: DeploymentType | string;
    /**
     * The ARN of the group for this deployment.
     */
    GroupArn?: string;
}
export declare namespace Deployment {
    function isa(o: any): o is Deployment;
}
export declare enum DeploymentType {
    ForceResetDeployment = "ForceResetDeployment",
    NewDeployment = "NewDeployment",
    Redeployment = "Redeployment",
    ResetDeployment = "ResetDeployment"
}
/**
 * Information about a device.
 */
export interface Device {
    __type?: "Device";
    /**
     * The ARN of the certificate associated with the device.
     */
    CertificateArn: string | undefined;
    /**
     * A descriptive or arbitrary ID for the device. This value must be unique within the device definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
     */
    Id: string | undefined;
    /**
     * If true, the device's local shadow will be automatically synced with the cloud.
     */
    SyncShadow?: boolean;
    /**
     * The thing ARN of the device.
     */
    ThingArn: string | undefined;
}
export declare namespace Device {
    function isa(o: any): o is Device;
}
/**
 * Information about a device definition version.
 */
export interface DeviceDefinitionVersion {
    __type?: "DeviceDefinitionVersion";
    /**
     * A list of devices in the definition version.
     */
    Devices?: Array<Device>;
}
export declare namespace DeviceDefinitionVersion {
    function isa(o: any): o is DeviceDefinitionVersion;
}
export interface DisassociateRoleFromGroupRequest {
    __type?: "DisassociateRoleFromGroupRequest";
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace DisassociateRoleFromGroupRequest {
    function isa(o: any): o is DisassociateRoleFromGroupRequest;
}
export interface DisassociateRoleFromGroupResponse {
    __type?: "DisassociateRoleFromGroupResponse";
    /**
     * The time, in milliseconds since the epoch, when the role was disassociated from the group.
     */
    DisassociatedAt?: string;
}
export declare namespace DisassociateRoleFromGroupResponse {
    function isa(o: any): o is DisassociateRoleFromGroupResponse;
}
export interface DisassociateServiceRoleFromAccountRequest {
    __type?: "DisassociateServiceRoleFromAccountRequest";
}
export declare namespace DisassociateServiceRoleFromAccountRequest {
    function isa(o: any): o is DisassociateServiceRoleFromAccountRequest;
}
export interface DisassociateServiceRoleFromAccountResponse {
    __type?: "DisassociateServiceRoleFromAccountResponse";
    /**
     * The time when the service role was disassociated from the account.
     */
    DisassociatedAt?: string;
}
export declare namespace DisassociateServiceRoleFromAccountResponse {
    function isa(o: any): o is DisassociateServiceRoleFromAccountResponse;
}
export declare enum EncodingType {
    binary = "binary",
    json = "json"
}
/**
 * Details about the error.
 */
export interface ErrorDetail {
    __type?: "ErrorDetail";
    /**
     * A detailed error code.
     */
    DetailedErrorCode?: string;
    /**
     * A detailed error message.
     */
    DetailedErrorMessage?: string;
}
export declare namespace ErrorDetail {
    function isa(o: any): o is ErrorDetail;
}
/**
 * Information about a Lambda function.
 */
export interface Function {
    __type?: "Function";
    /**
     * The ARN of the Lambda function.
     */
    FunctionArn?: string;
    /**
     * The configuration of the Lambda function.
     */
    FunctionConfiguration?: FunctionConfiguration;
    /**
     * A descriptive or arbitrary ID for the function. This value must be unique within the function definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
     */
    Id: string | undefined;
}
export declare namespace Function {
    function isa(o: any): o is Function;
}
/**
 * The configuration of the Lambda function.
 */
export interface FunctionConfiguration {
    __type?: "FunctionConfiguration";
    /**
     * The expected encoding type of the input payload for the function. The default is ''json''.
     */
    EncodingType?: EncodingType | string;
    /**
     * The environment configuration of the function.
     */
    Environment?: FunctionConfigurationEnvironment;
    /**
     * The execution arguments.
     */
    ExecArgs?: string;
    /**
     * The name of the function executable.
     */
    Executable?: string;
    /**
     * The memory size, in KB, which the function requires. This setting is not applicable and should be cleared when you run the Lambda function without containerization.
     */
    MemorySize?: number;
    /**
     * True if the function is pinned. Pinned means the function is long-lived and starts when the core starts.
     */
    Pinned?: boolean;
    /**
     * The allowed function execution time, after which Lambda should terminate the function. This timeout still applies to pinned Lambda functions for each request.
     */
    Timeout?: number;
}
export declare namespace FunctionConfiguration {
    function isa(o: any): o is FunctionConfiguration;
}
/**
 * The environment configuration of the function.
 */
export interface FunctionConfigurationEnvironment {
    __type?: "FunctionConfigurationEnvironment";
    /**
     * If true, the Lambda function is allowed to access the host's /sys folder. Use this when the Lambda function needs to read device information from /sys. This setting applies only when you run the Lambda function in a Greengrass container.
     */
    AccessSysfs?: boolean;
    /**
     * Configuration related to executing the Lambda function
     */
    Execution?: FunctionExecutionConfig;
    /**
     * A list of the resources, with their permissions, to which the Lambda function will be granted access. A Lambda function can have at most 10 resources. ResourceAccessPolicies apply only when you run the Lambda function in a Greengrass container.
     */
    ResourceAccessPolicies?: Array<ResourceAccessPolicy>;
    /**
     * Environment variables for the Lambda function's configuration.
     */
    Variables?: {
        [key: string]: string;
    };
}
export declare namespace FunctionConfigurationEnvironment {
    function isa(o: any): o is FunctionConfigurationEnvironment;
}
/**
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
 */
export interface FunctionDefaultConfig {
    __type?: "FunctionDefaultConfig";
    /**
     * Configuration information that specifies how a Lambda function runs.
     */
    Execution?: FunctionDefaultExecutionConfig;
}
export declare namespace FunctionDefaultConfig {
    function isa(o: any): o is FunctionDefaultConfig;
}
/**
 * Configuration information that specifies how a Lambda function runs.
 */
export interface FunctionDefaultExecutionConfig {
    __type?: "FunctionDefaultExecutionConfig";
    /**
     * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
     */
    IsolationMode?: FunctionIsolationMode | string;
    /**
     * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
     */
    RunAs?: FunctionRunAsConfig;
}
export declare namespace FunctionDefaultExecutionConfig {
    function isa(o: any): o is FunctionDefaultExecutionConfig;
}
/**
 * Information about a function definition version.
 */
export interface FunctionDefinitionVersion {
    __type?: "FunctionDefinitionVersion";
    /**
     * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
     */
    DefaultConfig?: FunctionDefaultConfig;
    /**
     * A list of Lambda functions in this function definition version.
     */
    Functions?: Array<Function>;
}
export declare namespace FunctionDefinitionVersion {
    function isa(o: any): o is FunctionDefinitionVersion;
}
/**
 * Configuration information that specifies how a Lambda function runs.
 */
export interface FunctionExecutionConfig {
    __type?: "FunctionExecutionConfig";
    /**
     * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
     */
    IsolationMode?: FunctionIsolationMode | string;
    /**
     * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
     */
    RunAs?: FunctionRunAsConfig;
}
export declare namespace FunctionExecutionConfig {
    function isa(o: any): o is FunctionExecutionConfig;
}
export declare enum FunctionIsolationMode {
    GreengrassContainer = "GreengrassContainer",
    NoContainer = "NoContainer"
}
/**
 * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
 */
export interface FunctionRunAsConfig {
    __type?: "FunctionRunAsConfig";
    /**
     * The group ID whose permissions are used to run a Lambda function.
     */
    Gid?: number;
    /**
     * The user ID whose permissions are used to run a Lambda function.
     */
    Uid?: number;
}
export declare namespace FunctionRunAsConfig {
    function isa(o: any): o is FunctionRunAsConfig;
}
export interface GetAssociatedRoleRequest {
    __type?: "GetAssociatedRoleRequest";
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace GetAssociatedRoleRequest {
    function isa(o: any): o is GetAssociatedRoleRequest;
}
export interface GetAssociatedRoleResponse {
    __type?: "GetAssociatedRoleResponse";
    /**
     * The time when the role was associated with the group.
     */
    AssociatedAt?: string;
    /**
     * The ARN of the role that is associated with the group.
     */
    RoleArn?: string;
}
export declare namespace GetAssociatedRoleResponse {
    function isa(o: any): o is GetAssociatedRoleResponse;
}
export interface GetBulkDeploymentStatusRequest {
    __type?: "GetBulkDeploymentStatusRequest";
    /**
     * The ID of the bulk deployment.
     */
    BulkDeploymentId: string | undefined;
}
export declare namespace GetBulkDeploymentStatusRequest {
    function isa(o: any): o is GetBulkDeploymentStatusRequest;
}
export interface GetBulkDeploymentStatusResponse {
    __type?: "GetBulkDeploymentStatusResponse";
    /**
     * Relevant metrics on input records processed during bulk deployment.
     */
    BulkDeploymentMetrics?: BulkDeploymentMetrics;
    /**
     * The status of the bulk deployment.
     */
    BulkDeploymentStatus?: BulkDeploymentStatus | string;
    /**
     * The time, in ISO format, when the deployment was created.
     */
    CreatedAt?: string;
    /**
     * Error details
     */
    ErrorDetails?: Array<ErrorDetail>;
    /**
     * Error message
     */
    ErrorMessage?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetBulkDeploymentStatusResponse {
    function isa(o: any): o is GetBulkDeploymentStatusResponse;
}
export interface GetConnectivityInfoRequest {
    __type?: "GetConnectivityInfoRequest";
    /**
     * The thing name.
     */
    ThingName: string | undefined;
}
export declare namespace GetConnectivityInfoRequest {
    function isa(o: any): o is GetConnectivityInfoRequest;
}
export interface GetConnectivityInfoResponse {
    __type?: "GetConnectivityInfoResponse";
    /**
     * Connectivity info list.
     */
    ConnectivityInfo?: Array<ConnectivityInfo>;
    /**
     * A message about the connectivity info request.
     */
    Message?: string;
}
export declare namespace GetConnectivityInfoResponse {
    function isa(o: any): o is GetConnectivityInfoResponse;
}
export interface GetConnectorDefinitionRequest {
    __type?: "GetConnectorDefinitionRequest";
    /**
     * The ID of the connector definition.
     */
    ConnectorDefinitionId: string | undefined;
}
export declare namespace GetConnectorDefinitionRequest {
    function isa(o: any): o is GetConnectorDefinitionRequest;
}
export interface GetConnectorDefinitionResponse {
    __type?: "GetConnectorDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetConnectorDefinitionResponse {
    function isa(o: any): o is GetConnectorDefinitionResponse;
}
export interface GetConnectorDefinitionVersionRequest {
    __type?: "GetConnectorDefinitionVersionRequest";
    /**
     * The ID of the connector definition.
     */
    ConnectorDefinitionId: string | undefined;
    /**
     * The ID of the connector definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListConnectorDefinitionVersions'' requests. If the version is the last one that was associated with a connector definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    ConnectorDefinitionVersionId: string | undefined;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace GetConnectorDefinitionVersionRequest {
    function isa(o: any): o is GetConnectorDefinitionVersionRequest;
}
export interface GetConnectorDefinitionVersionResponse {
    __type?: "GetConnectorDefinitionVersionResponse";
    /**
     * The ARN of the connector definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the connector definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the connector definition version.
     */
    Definition?: ConnectorDefinitionVersion;
    /**
     * The ID of the connector definition version.
     */
    Id?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The version of the connector definition version.
     */
    Version?: string;
}
export declare namespace GetConnectorDefinitionVersionResponse {
    function isa(o: any): o is GetConnectorDefinitionVersionResponse;
}
export interface GetCoreDefinitionRequest {
    __type?: "GetCoreDefinitionRequest";
    /**
     * The ID of the core definition.
     */
    CoreDefinitionId: string | undefined;
}
export declare namespace GetCoreDefinitionRequest {
    function isa(o: any): o is GetCoreDefinitionRequest;
}
export interface GetCoreDefinitionResponse {
    __type?: "GetCoreDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetCoreDefinitionResponse {
    function isa(o: any): o is GetCoreDefinitionResponse;
}
export interface GetCoreDefinitionVersionRequest {
    __type?: "GetCoreDefinitionVersionRequest";
    /**
     * The ID of the core definition.
     */
    CoreDefinitionId: string | undefined;
    /**
     * The ID of the core definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListCoreDefinitionVersions'' requests. If the version is the last one that was associated with a core definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    CoreDefinitionVersionId: string | undefined;
}
export declare namespace GetCoreDefinitionVersionRequest {
    function isa(o: any): o is GetCoreDefinitionVersionRequest;
}
export interface GetCoreDefinitionVersionResponse {
    __type?: "GetCoreDefinitionVersionResponse";
    /**
     * The ARN of the core definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the core definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the core definition version.
     */
    Definition?: CoreDefinitionVersion;
    /**
     * The ID of the core definition version.
     */
    Id?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The version of the core definition version.
     */
    Version?: string;
}
export declare namespace GetCoreDefinitionVersionResponse {
    function isa(o: any): o is GetCoreDefinitionVersionResponse;
}
export interface GetDeploymentStatusRequest {
    __type?: "GetDeploymentStatusRequest";
    /**
     * The ID of the deployment.
     */
    DeploymentId: string | undefined;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace GetDeploymentStatusRequest {
    function isa(o: any): o is GetDeploymentStatusRequest;
}
export interface GetDeploymentStatusResponse {
    __type?: "GetDeploymentStatusResponse";
    /**
     * The status of the deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
     */
    DeploymentStatus?: string;
    /**
     * The type of the deployment.
     */
    DeploymentType?: DeploymentType | string;
    /**
     * Error details
     */
    ErrorDetails?: Array<ErrorDetail>;
    /**
     * Error message
     */
    ErrorMessage?: string;
    /**
     * The time, in milliseconds since the epoch, when the deployment status was updated.
     */
    UpdatedAt?: string;
}
export declare namespace GetDeploymentStatusResponse {
    function isa(o: any): o is GetDeploymentStatusResponse;
}
export interface GetDeviceDefinitionRequest {
    __type?: "GetDeviceDefinitionRequest";
    /**
     * The ID of the device definition.
     */
    DeviceDefinitionId: string | undefined;
}
export declare namespace GetDeviceDefinitionRequest {
    function isa(o: any): o is GetDeviceDefinitionRequest;
}
export interface GetDeviceDefinitionResponse {
    __type?: "GetDeviceDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetDeviceDefinitionResponse {
    function isa(o: any): o is GetDeviceDefinitionResponse;
}
export interface GetDeviceDefinitionVersionRequest {
    __type?: "GetDeviceDefinitionVersionRequest";
    /**
     * The ID of the device definition.
     */
    DeviceDefinitionId: string | undefined;
    /**
     * The ID of the device definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListDeviceDefinitionVersions'' requests. If the version is the last one that was associated with a device definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    DeviceDefinitionVersionId: string | undefined;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace GetDeviceDefinitionVersionRequest {
    function isa(o: any): o is GetDeviceDefinitionVersionRequest;
}
export interface GetDeviceDefinitionVersionResponse {
    __type?: "GetDeviceDefinitionVersionResponse";
    /**
     * The ARN of the device definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the device definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the device definition version.
     */
    Definition?: DeviceDefinitionVersion;
    /**
     * The ID of the device definition version.
     */
    Id?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The version of the device definition version.
     */
    Version?: string;
}
export declare namespace GetDeviceDefinitionVersionResponse {
    function isa(o: any): o is GetDeviceDefinitionVersionResponse;
}
export interface GetFunctionDefinitionRequest {
    __type?: "GetFunctionDefinitionRequest";
    /**
     * The ID of the Lambda function definition.
     */
    FunctionDefinitionId: string | undefined;
}
export declare namespace GetFunctionDefinitionRequest {
    function isa(o: any): o is GetFunctionDefinitionRequest;
}
export interface GetFunctionDefinitionResponse {
    __type?: "GetFunctionDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetFunctionDefinitionResponse {
    function isa(o: any): o is GetFunctionDefinitionResponse;
}
export interface GetFunctionDefinitionVersionRequest {
    __type?: "GetFunctionDefinitionVersionRequest";
    /**
     * The ID of the Lambda function definition.
     */
    FunctionDefinitionId: string | undefined;
    /**
     * The ID of the function definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListFunctionDefinitionVersions'' requests. If the version is the last one that was associated with a function definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    FunctionDefinitionVersionId: string | undefined;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace GetFunctionDefinitionVersionRequest {
    function isa(o: any): o is GetFunctionDefinitionVersionRequest;
}
export interface GetFunctionDefinitionVersionResponse {
    __type?: "GetFunctionDefinitionVersionResponse";
    /**
     * The ARN of the function definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the function definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information on the definition.
     */
    Definition?: FunctionDefinitionVersion;
    /**
     * The ID of the function definition version.
     */
    Id?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The version of the function definition version.
     */
    Version?: string;
}
export declare namespace GetFunctionDefinitionVersionResponse {
    function isa(o: any): o is GetFunctionDefinitionVersionResponse;
}
export interface GetGroupCertificateAuthorityRequest {
    __type?: "GetGroupCertificateAuthorityRequest";
    /**
     * The ID of the certificate authority.
     */
    CertificateAuthorityId: string | undefined;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace GetGroupCertificateAuthorityRequest {
    function isa(o: any): o is GetGroupCertificateAuthorityRequest;
}
export interface GetGroupCertificateAuthorityResponse {
    __type?: "GetGroupCertificateAuthorityResponse";
    /**
     * The ARN of the certificate authority for the group.
     */
    GroupCertificateAuthorityArn?: string;
    /**
     * The ID of the certificate authority for the group.
     */
    GroupCertificateAuthorityId?: string;
    /**
     * The PEM encoded certificate for the group.
     */
    PemEncodedCertificate?: string;
}
export declare namespace GetGroupCertificateAuthorityResponse {
    function isa(o: any): o is GetGroupCertificateAuthorityResponse;
}
export interface GetGroupCertificateConfigurationRequest {
    __type?: "GetGroupCertificateConfigurationRequest";
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace GetGroupCertificateConfigurationRequest {
    function isa(o: any): o is GetGroupCertificateConfigurationRequest;
}
export interface GetGroupCertificateConfigurationResponse {
    __type?: "GetGroupCertificateConfigurationResponse";
    /**
     * The amount of time remaining before the certificate authority expires, in milliseconds.
     */
    CertificateAuthorityExpiryInMilliseconds?: string;
    /**
     * The amount of time remaining before the certificate expires, in milliseconds.
     */
    CertificateExpiryInMilliseconds?: string;
    /**
     * The ID of the group certificate configuration.
     */
    GroupId?: string;
}
export declare namespace GetGroupCertificateConfigurationResponse {
    function isa(o: any): o is GetGroupCertificateConfigurationResponse;
}
export interface GetGroupRequest {
    __type?: "GetGroupRequest";
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace GetGroupRequest {
    function isa(o: any): o is GetGroupRequest;
}
export interface GetGroupResponse {
    __type?: "GetGroupResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetGroupResponse {
    function isa(o: any): o is GetGroupResponse;
}
export interface GetGroupVersionRequest {
    __type?: "GetGroupVersionRequest";
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The ID of the group version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListGroupVersions'' requests. If the version is the last one that was associated with a group, the value also maps to the ''LatestVersion'' property of the corresponding ''GroupInformation'' object.
     */
    GroupVersionId: string | undefined;
}
export declare namespace GetGroupVersionRequest {
    function isa(o: any): o is GetGroupVersionRequest;
}
export interface GetGroupVersionResponse {
    __type?: "GetGroupVersionResponse";
    /**
     * The ARN of the group version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the group version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the group version definition.
     */
    Definition?: GroupVersion;
    /**
     * The ID of the group that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the group version.
     */
    Version?: string;
}
export declare namespace GetGroupVersionResponse {
    function isa(o: any): o is GetGroupVersionResponse;
}
export interface GetLoggerDefinitionRequest {
    __type?: "GetLoggerDefinitionRequest";
    /**
     * The ID of the logger definition.
     */
    LoggerDefinitionId: string | undefined;
}
export declare namespace GetLoggerDefinitionRequest {
    function isa(o: any): o is GetLoggerDefinitionRequest;
}
export interface GetLoggerDefinitionResponse {
    __type?: "GetLoggerDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetLoggerDefinitionResponse {
    function isa(o: any): o is GetLoggerDefinitionResponse;
}
export interface GetLoggerDefinitionVersionRequest {
    __type?: "GetLoggerDefinitionVersionRequest";
    /**
     * The ID of the logger definition.
     */
    LoggerDefinitionId: string | undefined;
    /**
     * The ID of the logger definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListLoggerDefinitionVersions'' requests. If the version is the last one that was associated with a logger definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    LoggerDefinitionVersionId: string | undefined;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace GetLoggerDefinitionVersionRequest {
    function isa(o: any): o is GetLoggerDefinitionVersionRequest;
}
export interface GetLoggerDefinitionVersionResponse {
    __type?: "GetLoggerDefinitionVersionResponse";
    /**
     * The ARN of the logger definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the logger definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the logger definition version.
     */
    Definition?: LoggerDefinitionVersion;
    /**
     * The ID of the logger definition version.
     */
    Id?: string;
    /**
     * The version of the logger definition version.
     */
    Version?: string;
}
export declare namespace GetLoggerDefinitionVersionResponse {
    function isa(o: any): o is GetLoggerDefinitionVersionResponse;
}
export interface GetResourceDefinitionRequest {
    __type?: "GetResourceDefinitionRequest";
    /**
     * The ID of the resource definition.
     */
    ResourceDefinitionId: string | undefined;
}
export declare namespace GetResourceDefinitionRequest {
    function isa(o: any): o is GetResourceDefinitionRequest;
}
export interface GetResourceDefinitionResponse {
    __type?: "GetResourceDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetResourceDefinitionResponse {
    function isa(o: any): o is GetResourceDefinitionResponse;
}
export interface GetResourceDefinitionVersionRequest {
    __type?: "GetResourceDefinitionVersionRequest";
    /**
     * The ID of the resource definition.
     */
    ResourceDefinitionId: string | undefined;
    /**
     * The ID of the resource definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListResourceDefinitionVersions'' requests. If the version is the last one that was associated with a resource definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    ResourceDefinitionVersionId: string | undefined;
}
export declare namespace GetResourceDefinitionVersionRequest {
    function isa(o: any): o is GetResourceDefinitionVersionRequest;
}
export interface GetResourceDefinitionVersionResponse {
    __type?: "GetResourceDefinitionVersionResponse";
    /**
     * Arn of the resource definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the resource definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the definition.
     */
    Definition?: ResourceDefinitionVersion;
    /**
     * The ID of the resource definition version.
     */
    Id?: string;
    /**
     * The version of the resource definition version.
     */
    Version?: string;
}
export declare namespace GetResourceDefinitionVersionResponse {
    function isa(o: any): o is GetResourceDefinitionVersionResponse;
}
export interface GetServiceRoleForAccountRequest {
    __type?: "GetServiceRoleForAccountRequest";
}
export declare namespace GetServiceRoleForAccountRequest {
    function isa(o: any): o is GetServiceRoleForAccountRequest;
}
export interface GetServiceRoleForAccountResponse {
    __type?: "GetServiceRoleForAccountResponse";
    /**
     * The time when the service role was associated with the account.
     */
    AssociatedAt?: string;
    /**
     * The ARN of the role which is associated with the account.
     */
    RoleArn?: string;
}
export declare namespace GetServiceRoleForAccountResponse {
    function isa(o: any): o is GetServiceRoleForAccountResponse;
}
export interface GetSubscriptionDefinitionRequest {
    __type?: "GetSubscriptionDefinitionRequest";
    /**
     * The ID of the subscription definition.
     */
    SubscriptionDefinitionId: string | undefined;
}
export declare namespace GetSubscriptionDefinitionRequest {
    function isa(o: any): o is GetSubscriptionDefinitionRequest;
}
export interface GetSubscriptionDefinitionResponse {
    __type?: "GetSubscriptionDefinitionResponse";
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetSubscriptionDefinitionResponse {
    function isa(o: any): o is GetSubscriptionDefinitionResponse;
}
export interface GetSubscriptionDefinitionVersionRequest {
    __type?: "GetSubscriptionDefinitionVersionRequest";
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The ID of the subscription definition.
     */
    SubscriptionDefinitionId: string | undefined;
    /**
     * The ID of the subscription definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListSubscriptionDefinitionVersions'' requests. If the version is the last one that was associated with a subscription definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    SubscriptionDefinitionVersionId: string | undefined;
}
export declare namespace GetSubscriptionDefinitionVersionRequest {
    function isa(o: any): o is GetSubscriptionDefinitionVersionRequest;
}
export interface GetSubscriptionDefinitionVersionResponse {
    __type?: "GetSubscriptionDefinitionVersionResponse";
    /**
     * The ARN of the subscription definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the subscription definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the subscription definition version.
     */
    Definition?: SubscriptionDefinitionVersion;
    /**
     * The ID of the subscription definition version.
     */
    Id?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The version of the subscription definition version.
     */
    Version?: string;
}
export declare namespace GetSubscriptionDefinitionVersionResponse {
    function isa(o: any): o is GetSubscriptionDefinitionVersionResponse;
}
/**
 * Information about a certificate authority for a group.
 */
export interface GroupCertificateAuthorityProperties {
    __type?: "GroupCertificateAuthorityProperties";
    /**
     * The ARN of the certificate authority for the group.
     */
    GroupCertificateAuthorityArn?: string;
    /**
     * The ID of the certificate authority for the group.
     */
    GroupCertificateAuthorityId?: string;
}
export declare namespace GroupCertificateAuthorityProperties {
    function isa(o: any): o is GroupCertificateAuthorityProperties;
}
/**
 * Information about a group.
 */
export interface GroupInformation {
    __type?: "GroupInformation";
    /**
     * The ARN of the group.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the group was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the group.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the group was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the group.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the group.
     */
    LatestVersionArn?: string;
    /**
     * The name of the group.
     */
    Name?: string;
}
export declare namespace GroupInformation {
    function isa(o: any): o is GroupInformation;
}
/**
 * Group owner related settings for local resources.
 */
export interface GroupOwnerSetting {
    __type?: "GroupOwnerSetting";
    /**
     * If true, AWS IoT Greengrass automatically adds the specified Linux OS group owner of the resource to the Lambda process privileges. Thus the Lambda process will have the file access permissions of the added Linux group.
     */
    AutoAddGroupOwner?: boolean;
    /**
     * The name of the Linux OS group whose privileges will be added to the Lambda process. This field is optional.
     */
    GroupOwner?: string;
}
export declare namespace GroupOwnerSetting {
    function isa(o: any): o is GroupOwnerSetting;
}
/**
 * Information about a group version.
 */
export interface GroupVersion {
    __type?: "GroupVersion";
    /**
     * The ARN of the connector definition version for this group.
     */
    ConnectorDefinitionVersionArn?: string;
    /**
     * The ARN of the core definition version for this group.
     */
    CoreDefinitionVersionArn?: string;
    /**
     * The ARN of the device definition version for this group.
     */
    DeviceDefinitionVersionArn?: string;
    /**
     * The ARN of the function definition version for this group.
     */
    FunctionDefinitionVersionArn?: string;
    /**
     * The ARN of the logger definition version for this group.
     */
    LoggerDefinitionVersionArn?: string;
    /**
     * The ARN of the resource definition version for this group.
     */
    ResourceDefinitionVersionArn?: string;
    /**
     * The ARN of the subscription definition version for this group.
     */
    SubscriptionDefinitionVersionArn?: string;
}
export declare namespace GroupVersion {
    function isa(o: any): o is GroupVersion;
}
/**
 * General error information.
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
    name: "InternalServerErrorException";
    $fault: "server";
    /**
     * Details about the error.
     */
    ErrorDetails?: Array<ErrorDetail>;
    /**
     * A message containing information about the error.
     */
    Message?: string;
}
export declare namespace InternalServerErrorException {
    function isa(o: any): o is InternalServerErrorException;
}
export interface ListBulkDeploymentDetailedReportsRequest {
    __type?: "ListBulkDeploymentDetailedReportsRequest";
    /**
     * The ID of the bulk deployment.
     */
    BulkDeploymentId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListBulkDeploymentDetailedReportsRequest {
    function isa(o: any): o is ListBulkDeploymentDetailedReportsRequest;
}
export interface ListBulkDeploymentDetailedReportsResponse {
    __type?: "ListBulkDeploymentDetailedReportsResponse";
    /**
     * A list of the individual group deployments in the bulk deployment operation.
     */
    Deployments?: Array<BulkDeploymentResult>;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListBulkDeploymentDetailedReportsResponse {
    function isa(o: any): o is ListBulkDeploymentDetailedReportsResponse;
}
export interface ListBulkDeploymentsRequest {
    __type?: "ListBulkDeploymentsRequest";
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListBulkDeploymentsRequest {
    function isa(o: any): o is ListBulkDeploymentsRequest;
}
export interface ListBulkDeploymentsResponse {
    __type?: "ListBulkDeploymentsResponse";
    /**
     * A list of bulk deployments.
     */
    BulkDeployments?: Array<BulkDeployment>;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListBulkDeploymentsResponse {
    function isa(o: any): o is ListBulkDeploymentsResponse;
}
export interface ListConnectorDefinitionVersionsRequest {
    __type?: "ListConnectorDefinitionVersionsRequest";
    /**
     * The ID of the connector definition.
     */
    ConnectorDefinitionId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListConnectorDefinitionVersionsRequest {
    function isa(o: any): o is ListConnectorDefinitionVersionsRequest;
}
export interface ListConnectorDefinitionVersionsResponse {
    __type?: "ListConnectorDefinitionVersionsResponse";
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: Array<VersionInformation>;
}
export declare namespace ListConnectorDefinitionVersionsResponse {
    function isa(o: any): o is ListConnectorDefinitionVersionsResponse;
}
export interface ListConnectorDefinitionsRequest {
    __type?: "ListConnectorDefinitionsRequest";
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListConnectorDefinitionsRequest {
    function isa(o: any): o is ListConnectorDefinitionsRequest;
}
export interface ListConnectorDefinitionsResponse {
    __type?: "ListConnectorDefinitionsResponse";
    /**
     * Information about a definition.
     */
    Definitions?: Array<DefinitionInformation>;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListConnectorDefinitionsResponse {
    function isa(o: any): o is ListConnectorDefinitionsResponse;
}
export interface ListCoreDefinitionVersionsRequest {
    __type?: "ListCoreDefinitionVersionsRequest";
    /**
     * The ID of the core definition.
     */
    CoreDefinitionId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListCoreDefinitionVersionsRequest {
    function isa(o: any): o is ListCoreDefinitionVersionsRequest;
}
export interface ListCoreDefinitionVersionsResponse {
    __type?: "ListCoreDefinitionVersionsResponse";
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: Array<VersionInformation>;
}
export declare namespace ListCoreDefinitionVersionsResponse {
    function isa(o: any): o is ListCoreDefinitionVersionsResponse;
}
export interface ListCoreDefinitionsRequest {
    __type?: "ListCoreDefinitionsRequest";
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListCoreDefinitionsRequest {
    function isa(o: any): o is ListCoreDefinitionsRequest;
}
export interface ListCoreDefinitionsResponse {
    __type?: "ListCoreDefinitionsResponse";
    /**
     * Information about a definition.
     */
    Definitions?: Array<DefinitionInformation>;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListCoreDefinitionsResponse {
    function isa(o: any): o is ListCoreDefinitionsResponse;
}
export interface ListDeploymentsRequest {
    __type?: "ListDeploymentsRequest";
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListDeploymentsRequest {
    function isa(o: any): o is ListDeploymentsRequest;
}
export interface ListDeploymentsResponse {
    __type?: "ListDeploymentsResponse";
    /**
     * A list of deployments for the requested groups.
     */
    Deployments?: Array<Deployment>;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListDeploymentsResponse {
    function isa(o: any): o is ListDeploymentsResponse;
}
export interface ListDeviceDefinitionVersionsRequest {
    __type?: "ListDeviceDefinitionVersionsRequest";
    /**
     * The ID of the device definition.
     */
    DeviceDefinitionId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListDeviceDefinitionVersionsRequest {
    function isa(o: any): o is ListDeviceDefinitionVersionsRequest;
}
export interface ListDeviceDefinitionVersionsResponse {
    __type?: "ListDeviceDefinitionVersionsResponse";
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: Array<VersionInformation>;
}
export declare namespace ListDeviceDefinitionVersionsResponse {
    function isa(o: any): o is ListDeviceDefinitionVersionsResponse;
}
export interface ListDeviceDefinitionsRequest {
    __type?: "ListDeviceDefinitionsRequest";
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListDeviceDefinitionsRequest {
    function isa(o: any): o is ListDeviceDefinitionsRequest;
}
export interface ListDeviceDefinitionsResponse {
    __type?: "ListDeviceDefinitionsResponse";
    /**
     * Information about a definition.
     */
    Definitions?: Array<DefinitionInformation>;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListDeviceDefinitionsResponse {
    function isa(o: any): o is ListDeviceDefinitionsResponse;
}
export interface ListFunctionDefinitionVersionsRequest {
    __type?: "ListFunctionDefinitionVersionsRequest";
    /**
     * The ID of the Lambda function definition.
     */
    FunctionDefinitionId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListFunctionDefinitionVersionsRequest {
    function isa(o: any): o is ListFunctionDefinitionVersionsRequest;
}
export interface ListFunctionDefinitionVersionsResponse {
    __type?: "ListFunctionDefinitionVersionsResponse";
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: Array<VersionInformation>;
}
export declare namespace ListFunctionDefinitionVersionsResponse {
    function isa(o: any): o is ListFunctionDefinitionVersionsResponse;
}
export interface ListFunctionDefinitionsRequest {
    __type?: "ListFunctionDefinitionsRequest";
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListFunctionDefinitionsRequest {
    function isa(o: any): o is ListFunctionDefinitionsRequest;
}
export interface ListFunctionDefinitionsResponse {
    __type?: "ListFunctionDefinitionsResponse";
    /**
     * Information about a definition.
     */
    Definitions?: Array<DefinitionInformation>;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListFunctionDefinitionsResponse {
    function isa(o: any): o is ListFunctionDefinitionsResponse;
}
export interface ListGroupCertificateAuthoritiesRequest {
    __type?: "ListGroupCertificateAuthoritiesRequest";
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace ListGroupCertificateAuthoritiesRequest {
    function isa(o: any): o is ListGroupCertificateAuthoritiesRequest;
}
export interface ListGroupCertificateAuthoritiesResponse {
    __type?: "ListGroupCertificateAuthoritiesResponse";
    /**
     * A list of certificate authorities associated with the group.
     */
    GroupCertificateAuthorities?: Array<GroupCertificateAuthorityProperties>;
}
export declare namespace ListGroupCertificateAuthoritiesResponse {
    function isa(o: any): o is ListGroupCertificateAuthoritiesResponse;
}
export interface ListGroupVersionsRequest {
    __type?: "ListGroupVersionsRequest";
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListGroupVersionsRequest {
    function isa(o: any): o is ListGroupVersionsRequest;
}
export interface ListGroupVersionsResponse {
    __type?: "ListGroupVersionsResponse";
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: Array<VersionInformation>;
}
export declare namespace ListGroupVersionsResponse {
    function isa(o: any): o is ListGroupVersionsResponse;
}
export interface ListGroupsRequest {
    __type?: "ListGroupsRequest";
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListGroupsRequest {
    function isa(o: any): o is ListGroupsRequest;
}
export interface ListGroupsResponse {
    __type?: "ListGroupsResponse";
    /**
     * Information about a group.
     */
    Groups?: Array<GroupInformation>;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListGroupsResponse {
    function isa(o: any): o is ListGroupsResponse;
}
export interface ListLoggerDefinitionVersionsRequest {
    __type?: "ListLoggerDefinitionVersionsRequest";
    /**
     * The ID of the logger definition.
     */
    LoggerDefinitionId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListLoggerDefinitionVersionsRequest {
    function isa(o: any): o is ListLoggerDefinitionVersionsRequest;
}
export interface ListLoggerDefinitionVersionsResponse {
    __type?: "ListLoggerDefinitionVersionsResponse";
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: Array<VersionInformation>;
}
export declare namespace ListLoggerDefinitionVersionsResponse {
    function isa(o: any): o is ListLoggerDefinitionVersionsResponse;
}
export interface ListLoggerDefinitionsRequest {
    __type?: "ListLoggerDefinitionsRequest";
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListLoggerDefinitionsRequest {
    function isa(o: any): o is ListLoggerDefinitionsRequest;
}
export interface ListLoggerDefinitionsResponse {
    __type?: "ListLoggerDefinitionsResponse";
    /**
     * Information about a definition.
     */
    Definitions?: Array<DefinitionInformation>;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListLoggerDefinitionsResponse {
    function isa(o: any): o is ListLoggerDefinitionsResponse;
}
export interface ListResourceDefinitionVersionsRequest {
    __type?: "ListResourceDefinitionVersionsRequest";
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The ID of the resource definition.
     */
    ResourceDefinitionId: string | undefined;
}
export declare namespace ListResourceDefinitionVersionsRequest {
    function isa(o: any): o is ListResourceDefinitionVersionsRequest;
}
export interface ListResourceDefinitionVersionsResponse {
    __type?: "ListResourceDefinitionVersionsResponse";
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: Array<VersionInformation>;
}
export declare namespace ListResourceDefinitionVersionsResponse {
    function isa(o: any): o is ListResourceDefinitionVersionsResponse;
}
export interface ListResourceDefinitionsRequest {
    __type?: "ListResourceDefinitionsRequest";
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListResourceDefinitionsRequest {
    function isa(o: any): o is ListResourceDefinitionsRequest;
}
export interface ListResourceDefinitionsResponse {
    __type?: "ListResourceDefinitionsResponse";
    /**
     * Information about a definition.
     */
    Definitions?: Array<DefinitionInformation>;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListResourceDefinitionsResponse {
    function isa(o: any): o is ListResourceDefinitionsResponse;
}
export interface ListSubscriptionDefinitionVersionsRequest {
    __type?: "ListSubscriptionDefinitionVersionsRequest";
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The ID of the subscription definition.
     */
    SubscriptionDefinitionId: string | undefined;
}
export declare namespace ListSubscriptionDefinitionVersionsRequest {
    function isa(o: any): o is ListSubscriptionDefinitionVersionsRequest;
}
export interface ListSubscriptionDefinitionVersionsResponse {
    __type?: "ListSubscriptionDefinitionVersionsResponse";
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: Array<VersionInformation>;
}
export declare namespace ListSubscriptionDefinitionVersionsResponse {
    function isa(o: any): o is ListSubscriptionDefinitionVersionsResponse;
}
export interface ListSubscriptionDefinitionsRequest {
    __type?: "ListSubscriptionDefinitionsRequest";
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListSubscriptionDefinitionsRequest {
    function isa(o: any): o is ListSubscriptionDefinitionsRequest;
}
export interface ListSubscriptionDefinitionsResponse {
    __type?: "ListSubscriptionDefinitionsResponse";
    /**
     * Information about a definition.
     */
    Definitions?: Array<DefinitionInformation>;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListSubscriptionDefinitionsResponse {
    function isa(o: any): o is ListSubscriptionDefinitionsResponse;
}
export interface ListTagsForResourceRequest {
    __type?: "ListTagsForResourceRequest";
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    function isa(o: any): o is ListTagsForResourceRequest;
}
export interface ListTagsForResourceResponse {
    __type?: "ListTagsForResourceResponse";
    /**
     * The key-value pair for the resource tag.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    function isa(o: any): o is ListTagsForResourceResponse;
}
/**
 * Attributes that define a local device resource.
 */
export interface LocalDeviceResourceData {
    __type?: "LocalDeviceResourceData";
    /**
     * Group/owner related settings for local resources.
     */
    GroupOwnerSetting?: GroupOwnerSetting;
    /**
     * The local absolute path of the device resource. The source path for a device resource can refer only to a character device or block device under ''/dev''.
     */
    SourcePath?: string;
}
export declare namespace LocalDeviceResourceData {
    function isa(o: any): o is LocalDeviceResourceData;
}
/**
 * Attributes that define a local volume resource.
 */
export interface LocalVolumeResourceData {
    __type?: "LocalVolumeResourceData";
    /**
     * The absolute local path of the resource inside the Lambda environment.
     */
    DestinationPath?: string;
    /**
     * Allows you to configure additional group privileges for the Lambda process. This field is optional.
     */
    GroupOwnerSetting?: GroupOwnerSetting;
    /**
     * The local absolute path of the volume resource on the host. The source path for a volume resource type cannot start with ''/sys''.
     */
    SourcePath?: string;
}
export declare namespace LocalVolumeResourceData {
    function isa(o: any): o is LocalVolumeResourceData;
}
/**
 * Information about a logger
 */
export interface Logger {
    __type?: "Logger";
    /**
     * The component that will be subject to logging.
     */
    Component: LoggerComponent | string | undefined;
    /**
     * A descriptive or arbitrary ID for the logger. This value must be unique within the logger definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
     */
    Id: string | undefined;
    /**
     * The level of the logs.
     */
    Level: LoggerLevel | string | undefined;
    /**
     * The amount of file space, in KB, to use if the local file system is used for logging purposes.
     */
    Space?: number;
    /**
     * The type of log output which will be used.
     */
    Type: LoggerType | string | undefined;
}
export declare namespace Logger {
    function isa(o: any): o is Logger;
}
export declare enum LoggerComponent {
    GreengrassSystem = "GreengrassSystem",
    Lambda = "Lambda"
}
/**
 * Information about a logger definition version.
 */
export interface LoggerDefinitionVersion {
    __type?: "LoggerDefinitionVersion";
    /**
     * A list of loggers.
     */
    Loggers?: Array<Logger>;
}
export declare namespace LoggerDefinitionVersion {
    function isa(o: any): o is LoggerDefinitionVersion;
}
export declare enum LoggerLevel {
    DEBUG = "DEBUG",
    ERROR = "ERROR",
    FATAL = "FATAL",
    INFO = "INFO",
    WARN = "WARN"
}
export declare enum LoggerType {
    AWSCloudWatch = "AWSCloudWatch",
    FileSystem = "FileSystem"
}
export declare enum Permission {
    ro = "ro",
    rw = "rw"
}
/**
 * Information needed to reset deployments.
 */
export interface ResetDeploymentsRequest {
    __type?: "ResetDeploymentsRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * If true, performs a best-effort only core reset.
     */
    Force?: boolean;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace ResetDeploymentsRequest {
    function isa(o: any): o is ResetDeploymentsRequest;
}
export interface ResetDeploymentsResponse {
    __type?: "ResetDeploymentsResponse";
    /**
     * The ARN of the deployment.
     */
    DeploymentArn?: string;
    /**
     * The ID of the deployment.
     */
    DeploymentId?: string;
}
export declare namespace ResetDeploymentsResponse {
    function isa(o: any): o is ResetDeploymentsResponse;
}
/**
 * Information about a resource.
 */
export interface Resource {
    __type?: "Resource";
    /**
     * The resource ID, used to refer to a resource in the Lambda function configuration. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
     */
    Id: string | undefined;
    /**
     * The descriptive resource name, which is displayed on the AWS IoT Greengrass console. Max length 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
     */
    Name: string | undefined;
    /**
     * A container of data for all resource types.
     */
    ResourceDataContainer: ResourceDataContainer | undefined;
}
export declare namespace Resource {
    function isa(o: any): o is Resource;
}
/**
 * A policy used by the function to access a resource.
 */
export interface ResourceAccessPolicy {
    __type?: "ResourceAccessPolicy";
    /**
     * The permissions that the Lambda function has to the resource. Can be one of ''rw'' (read/write) or ''ro'' (read-only).
     */
    Permission?: Permission | string;
    /**
     * The ID of the resource. (This ID is assigned to the resource when you create the resource definiton.)
     */
    ResourceId: string | undefined;
}
export declare namespace ResourceAccessPolicy {
    function isa(o: any): o is ResourceAccessPolicy;
}
/**
 * A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
 */
export interface ResourceDataContainer {
    __type?: "ResourceDataContainer";
    /**
     * Attributes that define the local device resource.
     */
    LocalDeviceResourceData?: LocalDeviceResourceData;
    /**
     * Attributes that define the local volume resource.
     */
    LocalVolumeResourceData?: LocalVolumeResourceData;
    /**
     * Attributes that define an Amazon S3 machine learning resource.
     */
    S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;
    /**
     * Attributes that define an Amazon SageMaker machine learning resource.
     */
    SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;
    /**
     * Attributes that define a secret resource, which references a secret from AWS Secrets Manager.
     */
    SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
}
export declare namespace ResourceDataContainer {
    function isa(o: any): o is ResourceDataContainer;
}
/**
 * Information about a resource definition version.
 */
export interface ResourceDefinitionVersion {
    __type?: "ResourceDefinitionVersion";
    /**
     * A list of resources.
     */
    Resources?: Array<Resource>;
}
export declare namespace ResourceDefinitionVersion {
    function isa(o: any): o is ResourceDefinitionVersion;
}
/**
 * The owner setting for downloaded machine learning resources.
 */
export interface ResourceDownloadOwnerSetting {
    __type?: "ResourceDownloadOwnerSetting";
    /**
     * The group owner of the resource. This is the name of an existing Linux OS group on the system or a GID. The group's permissions are added to the Lambda process.
     */
    GroupOwner: string | undefined;
    /**
     * The permissions that the group owner has to the resource. Valid values are ''rw'' (read/write) or ''ro'' (read-only).
     */
    GroupPermission: Permission | string | undefined;
}
export declare namespace ResourceDownloadOwnerSetting {
    function isa(o: any): o is ResourceDownloadOwnerSetting;
}
/**
 * Attributes that define an Amazon S3 machine learning resource.
 */
export interface S3MachineLearningModelResourceData {
    __type?: "S3MachineLearningModelResourceData";
    /**
     * The absolute local path of the resource inside the Lambda environment.
     */
    DestinationPath?: string;
    /**
     * The owner setting for downloaded machine learning resources.
     */
    OwnerSetting?: ResourceDownloadOwnerSetting;
    /**
     * The URI of the source model in an S3 bucket. The model package must be in tar.gz or .zip format.
     */
    S3Uri?: string;
}
export declare namespace S3MachineLearningModelResourceData {
    function isa(o: any): o is S3MachineLearningModelResourceData;
}
/**
 * Attributes that define an Amazon SageMaker machine learning resource.
 */
export interface SageMakerMachineLearningModelResourceData {
    __type?: "SageMakerMachineLearningModelResourceData";
    /**
     * The absolute local path of the resource inside the Lambda environment.
     */
    DestinationPath?: string;
    /**
     * The owner setting for downloaded machine learning resources.
     */
    OwnerSetting?: ResourceDownloadOwnerSetting;
    /**
     * The ARN of the Amazon SageMaker training job that represents the source model.
     */
    SageMakerJobArn?: string;
}
export declare namespace SageMakerMachineLearningModelResourceData {
    function isa(o: any): o is SageMakerMachineLearningModelResourceData;
}
/**
 * Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.
 */
export interface SecretsManagerSecretResourceData {
    __type?: "SecretsManagerSecretResourceData";
    /**
     * The ARN of the Secrets Manager secret to make available on the core. The value of the secret's latest version (represented by the ''AWSCURRENT'' staging label) is included by default.
     */
    ARN?: string;
    /**
     * Optional. The staging labels whose values you want to make available on the core, in addition to ''AWSCURRENT''.
     */
    AdditionalStagingLabelsToDownload?: Array<string>;
}
export declare namespace SecretsManagerSecretResourceData {
    function isa(o: any): o is SecretsManagerSecretResourceData;
}
export declare enum SoftwareToUpdate {
    core = "core",
    ota_agent = "ota_agent"
}
export interface StartBulkDeploymentRequest {
    __type?: "StartBulkDeploymentRequest";
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.
     */
    ExecutionRoleArn: string | undefined;
    /**
     * The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.
     */
    InputFileUri: string | undefined;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace StartBulkDeploymentRequest {
    function isa(o: any): o is StartBulkDeploymentRequest;
}
export interface StartBulkDeploymentResponse {
    __type?: "StartBulkDeploymentResponse";
    /**
     * The ARN of the bulk deployment.
     */
    BulkDeploymentArn?: string;
    /**
     * The ID of the bulk deployment.
     */
    BulkDeploymentId?: string;
}
export declare namespace StartBulkDeploymentResponse {
    function isa(o: any): o is StartBulkDeploymentResponse;
}
export interface StopBulkDeploymentRequest {
    __type?: "StopBulkDeploymentRequest";
    /**
     * The ID of the bulk deployment.
     */
    BulkDeploymentId: string | undefined;
}
export declare namespace StopBulkDeploymentRequest {
    function isa(o: any): o is StopBulkDeploymentRequest;
}
export interface StopBulkDeploymentResponse {
    __type?: "StopBulkDeploymentResponse";
}
export declare namespace StopBulkDeploymentResponse {
    function isa(o: any): o is StopBulkDeploymentResponse;
}
/**
 * Information about a subscription.
 */
export interface Subscription {
    __type?: "Subscription";
    /**
     * A descriptive or arbitrary ID for the subscription. This value must be unique within the subscription definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
     */
    Id: string | undefined;
    /**
     * The source of the subscription. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
     */
    Source: string | undefined;
    /**
     * The MQTT topic used to route the message.
     */
    Subject: string | undefined;
    /**
     * Where the message is sent to. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
     */
    Target: string | undefined;
}
export declare namespace Subscription {
    function isa(o: any): o is Subscription;
}
/**
 * Information about a subscription definition version.
 */
export interface SubscriptionDefinitionVersion {
    __type?: "SubscriptionDefinitionVersion";
    /**
     * A list of subscriptions.
     */
    Subscriptions?: Array<Subscription>;
}
export declare namespace SubscriptionDefinitionVersion {
    function isa(o: any): o is SubscriptionDefinitionVersion;
}
/**
 * A map of the key-value pairs for the resource tag.
 */
export interface TagResourceRequest {
    __type?: "TagResourceRequest";
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: string | undefined;
    /**
     * The key-value pair for the resource tag.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace TagResourceRequest {
    function isa(o: any): o is TagResourceRequest;
}
export interface UntagResourceRequest {
    __type?: "UntagResourceRequest";
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: string | undefined;
    /**
     * An array of tag keys to delete
     */
    TagKeys: Array<string> | undefined;
}
export declare namespace UntagResourceRequest {
    function isa(o: any): o is UntagResourceRequest;
}
export declare enum UpdateAgentLogLevel {
    DEBUG = "DEBUG",
    ERROR = "ERROR",
    FATAL = "FATAL",
    INFO = "INFO",
    NONE = "NONE",
    TRACE = "TRACE",
    VERBOSE = "VERBOSE",
    WARN = "WARN"
}
/**
 * Connectivity information.
 */
export interface UpdateConnectivityInfoRequest {
    __type?: "UpdateConnectivityInfoRequest";
    /**
     * A list of connectivity info.
     */
    ConnectivityInfo?: Array<ConnectivityInfo>;
    /**
     * The thing name.
     */
    ThingName: string | undefined;
}
export declare namespace UpdateConnectivityInfoRequest {
    function isa(o: any): o is UpdateConnectivityInfoRequest;
}
export interface UpdateConnectivityInfoResponse {
    __type?: "UpdateConnectivityInfoResponse";
    /**
     * A message about the connectivity info update request.
     */
    Message?: string;
    /**
     * The new version of the connectivity info.
     */
    Version?: string;
}
export declare namespace UpdateConnectivityInfoResponse {
    function isa(o: any): o is UpdateConnectivityInfoResponse;
}
export interface UpdateConnectorDefinitionRequest {
    __type?: "UpdateConnectorDefinitionRequest";
    /**
     * The ID of the connector definition.
     */
    ConnectorDefinitionId: string | undefined;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace UpdateConnectorDefinitionRequest {
    function isa(o: any): o is UpdateConnectorDefinitionRequest;
}
export interface UpdateConnectorDefinitionResponse {
    __type?: "UpdateConnectorDefinitionResponse";
}
export declare namespace UpdateConnectorDefinitionResponse {
    function isa(o: any): o is UpdateConnectorDefinitionResponse;
}
export interface UpdateCoreDefinitionRequest {
    __type?: "UpdateCoreDefinitionRequest";
    /**
     * The ID of the core definition.
     */
    CoreDefinitionId: string | undefined;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace UpdateCoreDefinitionRequest {
    function isa(o: any): o is UpdateCoreDefinitionRequest;
}
export interface UpdateCoreDefinitionResponse {
    __type?: "UpdateCoreDefinitionResponse";
}
export declare namespace UpdateCoreDefinitionResponse {
    function isa(o: any): o is UpdateCoreDefinitionResponse;
}
export interface UpdateDeviceDefinitionRequest {
    __type?: "UpdateDeviceDefinitionRequest";
    /**
     * The ID of the device definition.
     */
    DeviceDefinitionId: string | undefined;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace UpdateDeviceDefinitionRequest {
    function isa(o: any): o is UpdateDeviceDefinitionRequest;
}
export interface UpdateDeviceDefinitionResponse {
    __type?: "UpdateDeviceDefinitionResponse";
}
export declare namespace UpdateDeviceDefinitionResponse {
    function isa(o: any): o is UpdateDeviceDefinitionResponse;
}
export interface UpdateFunctionDefinitionRequest {
    __type?: "UpdateFunctionDefinitionRequest";
    /**
     * The ID of the Lambda function definition.
     */
    FunctionDefinitionId: string | undefined;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace UpdateFunctionDefinitionRequest {
    function isa(o: any): o is UpdateFunctionDefinitionRequest;
}
export interface UpdateFunctionDefinitionResponse {
    __type?: "UpdateFunctionDefinitionResponse";
}
export declare namespace UpdateFunctionDefinitionResponse {
    function isa(o: any): o is UpdateFunctionDefinitionResponse;
}
export interface UpdateGroupCertificateConfigurationRequest {
    __type?: "UpdateGroupCertificateConfigurationRequest";
    /**
     * The amount of time remaining before the certificate expires, in milliseconds.
     */
    CertificateExpiryInMilliseconds?: string;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace UpdateGroupCertificateConfigurationRequest {
    function isa(o: any): o is UpdateGroupCertificateConfigurationRequest;
}
export interface UpdateGroupCertificateConfigurationResponse {
    __type?: "UpdateGroupCertificateConfigurationResponse";
    /**
     * The amount of time remaining before the certificate authority expires, in milliseconds.
     */
    CertificateAuthorityExpiryInMilliseconds?: string;
    /**
     * The amount of time remaining before the certificate expires, in milliseconds.
     */
    CertificateExpiryInMilliseconds?: string;
    /**
     * The ID of the group certificate configuration.
     */
    GroupId?: string;
}
export declare namespace UpdateGroupCertificateConfigurationResponse {
    function isa(o: any): o is UpdateGroupCertificateConfigurationResponse;
}
export interface UpdateGroupRequest {
    __type?: "UpdateGroupRequest";
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace UpdateGroupRequest {
    function isa(o: any): o is UpdateGroupRequest;
}
export interface UpdateGroupResponse {
    __type?: "UpdateGroupResponse";
}
export declare namespace UpdateGroupResponse {
    function isa(o: any): o is UpdateGroupResponse;
}
export interface UpdateLoggerDefinitionRequest {
    __type?: "UpdateLoggerDefinitionRequest";
    /**
     * The ID of the logger definition.
     */
    LoggerDefinitionId: string | undefined;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace UpdateLoggerDefinitionRequest {
    function isa(o: any): o is UpdateLoggerDefinitionRequest;
}
export interface UpdateLoggerDefinitionResponse {
    __type?: "UpdateLoggerDefinitionResponse";
}
export declare namespace UpdateLoggerDefinitionResponse {
    function isa(o: any): o is UpdateLoggerDefinitionResponse;
}
export interface UpdateResourceDefinitionRequest {
    __type?: "UpdateResourceDefinitionRequest";
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * The ID of the resource definition.
     */
    ResourceDefinitionId: string | undefined;
}
export declare namespace UpdateResourceDefinitionRequest {
    function isa(o: any): o is UpdateResourceDefinitionRequest;
}
export interface UpdateResourceDefinitionResponse {
    __type?: "UpdateResourceDefinitionResponse";
}
export declare namespace UpdateResourceDefinitionResponse {
    function isa(o: any): o is UpdateResourceDefinitionResponse;
}
export interface UpdateSubscriptionDefinitionRequest {
    __type?: "UpdateSubscriptionDefinitionRequest";
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * The ID of the subscription definition.
     */
    SubscriptionDefinitionId: string | undefined;
}
export declare namespace UpdateSubscriptionDefinitionRequest {
    function isa(o: any): o is UpdateSubscriptionDefinitionRequest;
}
export interface UpdateSubscriptionDefinitionResponse {
    __type?: "UpdateSubscriptionDefinitionResponse";
}
export declare namespace UpdateSubscriptionDefinitionResponse {
    function isa(o: any): o is UpdateSubscriptionDefinitionResponse;
}
export declare enum UpdateTargetsArchitecture {
    aarch64 = "aarch64",
    armv6l = "armv6l",
    armv7l = "armv7l",
    x86_64 = "x86_64"
}
export declare enum UpdateTargetsOperatingSystem {
    amazon_linux = "amazon_linux",
    openwrt = "openwrt",
    raspbian = "raspbian",
    ubuntu = "ubuntu"
}
/**
 * Information about a version.
 */
export interface VersionInformation {
    __type?: "VersionInformation";
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace VersionInformation {
    function isa(o: any): o is VersionInformation;
}
