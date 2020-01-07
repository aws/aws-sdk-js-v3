import { GreengrassClient } from "./GreengrassClient";
import { AssociateRoleToGroupCommandInput, AssociateRoleToGroupCommandOutput } from "./commands/AssociateRoleToGroupCommand";
import { AssociateServiceRoleToAccountCommandInput, AssociateServiceRoleToAccountCommandOutput } from "./commands/AssociateServiceRoleToAccountCommand";
import { CreateConnectorDefinitionCommandInput, CreateConnectorDefinitionCommandOutput } from "./commands/CreateConnectorDefinitionCommand";
import { CreateConnectorDefinitionVersionCommandInput, CreateConnectorDefinitionVersionCommandOutput } from "./commands/CreateConnectorDefinitionVersionCommand";
import { CreateCoreDefinitionCommandInput, CreateCoreDefinitionCommandOutput } from "./commands/CreateCoreDefinitionCommand";
import { CreateCoreDefinitionVersionCommandInput, CreateCoreDefinitionVersionCommandOutput } from "./commands/CreateCoreDefinitionVersionCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import { CreateDeviceDefinitionCommandInput, CreateDeviceDefinitionCommandOutput } from "./commands/CreateDeviceDefinitionCommand";
import { CreateDeviceDefinitionVersionCommandInput, CreateDeviceDefinitionVersionCommandOutput } from "./commands/CreateDeviceDefinitionVersionCommand";
import { CreateFunctionDefinitionCommandInput, CreateFunctionDefinitionCommandOutput } from "./commands/CreateFunctionDefinitionCommand";
import { CreateFunctionDefinitionVersionCommandInput, CreateFunctionDefinitionVersionCommandOutput } from "./commands/CreateFunctionDefinitionVersionCommand";
import { CreateGroupCertificateAuthorityCommandInput, CreateGroupCertificateAuthorityCommandOutput } from "./commands/CreateGroupCertificateAuthorityCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { CreateGroupVersionCommandInput, CreateGroupVersionCommandOutput } from "./commands/CreateGroupVersionCommand";
import { CreateLoggerDefinitionCommandInput, CreateLoggerDefinitionCommandOutput } from "./commands/CreateLoggerDefinitionCommand";
import { CreateLoggerDefinitionVersionCommandInput, CreateLoggerDefinitionVersionCommandOutput } from "./commands/CreateLoggerDefinitionVersionCommand";
import { CreateResourceDefinitionCommandInput, CreateResourceDefinitionCommandOutput } from "./commands/CreateResourceDefinitionCommand";
import { CreateResourceDefinitionVersionCommandInput, CreateResourceDefinitionVersionCommandOutput } from "./commands/CreateResourceDefinitionVersionCommand";
import { CreateSoftwareUpdateJobCommandInput, CreateSoftwareUpdateJobCommandOutput } from "./commands/CreateSoftwareUpdateJobCommand";
import { CreateSubscriptionDefinitionCommandInput, CreateSubscriptionDefinitionCommandOutput } from "./commands/CreateSubscriptionDefinitionCommand";
import { CreateSubscriptionDefinitionVersionCommandInput, CreateSubscriptionDefinitionVersionCommandOutput } from "./commands/CreateSubscriptionDefinitionVersionCommand";
import { DeleteConnectorDefinitionCommandInput, DeleteConnectorDefinitionCommandOutput } from "./commands/DeleteConnectorDefinitionCommand";
import { DeleteCoreDefinitionCommandInput, DeleteCoreDefinitionCommandOutput } from "./commands/DeleteCoreDefinitionCommand";
import { DeleteDeviceDefinitionCommandInput, DeleteDeviceDefinitionCommandOutput } from "./commands/DeleteDeviceDefinitionCommand";
import { DeleteFunctionDefinitionCommandInput, DeleteFunctionDefinitionCommandOutput } from "./commands/DeleteFunctionDefinitionCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { DeleteLoggerDefinitionCommandInput, DeleteLoggerDefinitionCommandOutput } from "./commands/DeleteLoggerDefinitionCommand";
import { DeleteResourceDefinitionCommandInput, DeleteResourceDefinitionCommandOutput } from "./commands/DeleteResourceDefinitionCommand";
import { DeleteSubscriptionDefinitionCommandInput, DeleteSubscriptionDefinitionCommandOutput } from "./commands/DeleteSubscriptionDefinitionCommand";
import { DisassociateRoleFromGroupCommandInput, DisassociateRoleFromGroupCommandOutput } from "./commands/DisassociateRoleFromGroupCommand";
import { DisassociateServiceRoleFromAccountCommandInput, DisassociateServiceRoleFromAccountCommandOutput } from "./commands/DisassociateServiceRoleFromAccountCommand";
import { GetAssociatedRoleCommandInput, GetAssociatedRoleCommandOutput } from "./commands/GetAssociatedRoleCommand";
import { GetBulkDeploymentStatusCommandInput, GetBulkDeploymentStatusCommandOutput } from "./commands/GetBulkDeploymentStatusCommand";
import { GetConnectivityInfoCommandInput, GetConnectivityInfoCommandOutput } from "./commands/GetConnectivityInfoCommand";
import { GetConnectorDefinitionCommandInput, GetConnectorDefinitionCommandOutput } from "./commands/GetConnectorDefinitionCommand";
import { GetConnectorDefinitionVersionCommandInput, GetConnectorDefinitionVersionCommandOutput } from "./commands/GetConnectorDefinitionVersionCommand";
import { GetCoreDefinitionCommandInput, GetCoreDefinitionCommandOutput } from "./commands/GetCoreDefinitionCommand";
import { GetCoreDefinitionVersionCommandInput, GetCoreDefinitionVersionCommandOutput } from "./commands/GetCoreDefinitionVersionCommand";
import { GetDeploymentStatusCommandInput, GetDeploymentStatusCommandOutput } from "./commands/GetDeploymentStatusCommand";
import { GetDeviceDefinitionCommandInput, GetDeviceDefinitionCommandOutput } from "./commands/GetDeviceDefinitionCommand";
import { GetDeviceDefinitionVersionCommandInput, GetDeviceDefinitionVersionCommandOutput } from "./commands/GetDeviceDefinitionVersionCommand";
import { GetFunctionDefinitionCommandInput, GetFunctionDefinitionCommandOutput } from "./commands/GetFunctionDefinitionCommand";
import { GetFunctionDefinitionVersionCommandInput, GetFunctionDefinitionVersionCommandOutput } from "./commands/GetFunctionDefinitionVersionCommand";
import { GetGroupCertificateAuthorityCommandInput, GetGroupCertificateAuthorityCommandOutput } from "./commands/GetGroupCertificateAuthorityCommand";
import { GetGroupCertificateConfigurationCommandInput, GetGroupCertificateConfigurationCommandOutput } from "./commands/GetGroupCertificateConfigurationCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import { GetGroupVersionCommandInput, GetGroupVersionCommandOutput } from "./commands/GetGroupVersionCommand";
import { GetLoggerDefinitionCommandInput, GetLoggerDefinitionCommandOutput } from "./commands/GetLoggerDefinitionCommand";
import { GetLoggerDefinitionVersionCommandInput, GetLoggerDefinitionVersionCommandOutput } from "./commands/GetLoggerDefinitionVersionCommand";
import { GetResourceDefinitionCommandInput, GetResourceDefinitionCommandOutput } from "./commands/GetResourceDefinitionCommand";
import { GetResourceDefinitionVersionCommandInput, GetResourceDefinitionVersionCommandOutput } from "./commands/GetResourceDefinitionVersionCommand";
import { GetServiceRoleForAccountCommandInput, GetServiceRoleForAccountCommandOutput } from "./commands/GetServiceRoleForAccountCommand";
import { GetSubscriptionDefinitionCommandInput, GetSubscriptionDefinitionCommandOutput } from "./commands/GetSubscriptionDefinitionCommand";
import { GetSubscriptionDefinitionVersionCommandInput, GetSubscriptionDefinitionVersionCommandOutput } from "./commands/GetSubscriptionDefinitionVersionCommand";
import { ListBulkDeploymentDetailedReportsCommandInput, ListBulkDeploymentDetailedReportsCommandOutput } from "./commands/ListBulkDeploymentDetailedReportsCommand";
import { ListBulkDeploymentsCommandInput, ListBulkDeploymentsCommandOutput } from "./commands/ListBulkDeploymentsCommand";
import { ListConnectorDefinitionVersionsCommandInput, ListConnectorDefinitionVersionsCommandOutput } from "./commands/ListConnectorDefinitionVersionsCommand";
import { ListConnectorDefinitionsCommandInput, ListConnectorDefinitionsCommandOutput } from "./commands/ListConnectorDefinitionsCommand";
import { ListCoreDefinitionVersionsCommandInput, ListCoreDefinitionVersionsCommandOutput } from "./commands/ListCoreDefinitionVersionsCommand";
import { ListCoreDefinitionsCommandInput, ListCoreDefinitionsCommandOutput } from "./commands/ListCoreDefinitionsCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand";
import { ListDeviceDefinitionVersionsCommandInput, ListDeviceDefinitionVersionsCommandOutput } from "./commands/ListDeviceDefinitionVersionsCommand";
import { ListDeviceDefinitionsCommandInput, ListDeviceDefinitionsCommandOutput } from "./commands/ListDeviceDefinitionsCommand";
import { ListFunctionDefinitionVersionsCommandInput, ListFunctionDefinitionVersionsCommandOutput } from "./commands/ListFunctionDefinitionVersionsCommand";
import { ListFunctionDefinitionsCommandInput, ListFunctionDefinitionsCommandOutput } from "./commands/ListFunctionDefinitionsCommand";
import { ListGroupCertificateAuthoritiesCommandInput, ListGroupCertificateAuthoritiesCommandOutput } from "./commands/ListGroupCertificateAuthoritiesCommand";
import { ListGroupVersionsCommandInput, ListGroupVersionsCommandOutput } from "./commands/ListGroupVersionsCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import { ListLoggerDefinitionVersionsCommandInput, ListLoggerDefinitionVersionsCommandOutput } from "./commands/ListLoggerDefinitionVersionsCommand";
import { ListLoggerDefinitionsCommandInput, ListLoggerDefinitionsCommandOutput } from "./commands/ListLoggerDefinitionsCommand";
import { ListResourceDefinitionVersionsCommandInput, ListResourceDefinitionVersionsCommandOutput } from "./commands/ListResourceDefinitionVersionsCommand";
import { ListResourceDefinitionsCommandInput, ListResourceDefinitionsCommandOutput } from "./commands/ListResourceDefinitionsCommand";
import { ListSubscriptionDefinitionVersionsCommandInput, ListSubscriptionDefinitionVersionsCommandOutput } from "./commands/ListSubscriptionDefinitionVersionsCommand";
import { ListSubscriptionDefinitionsCommandInput, ListSubscriptionDefinitionsCommandOutput } from "./commands/ListSubscriptionDefinitionsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ResetDeploymentsCommandInput, ResetDeploymentsCommandOutput } from "./commands/ResetDeploymentsCommand";
import { StartBulkDeploymentCommandInput, StartBulkDeploymentCommandOutput } from "./commands/StartBulkDeploymentCommand";
import { StopBulkDeploymentCommandInput, StopBulkDeploymentCommandOutput } from "./commands/StopBulkDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateConnectivityInfoCommandInput, UpdateConnectivityInfoCommandOutput } from "./commands/UpdateConnectivityInfoCommand";
import { UpdateConnectorDefinitionCommandInput, UpdateConnectorDefinitionCommandOutput } from "./commands/UpdateConnectorDefinitionCommand";
import { UpdateCoreDefinitionCommandInput, UpdateCoreDefinitionCommandOutput } from "./commands/UpdateCoreDefinitionCommand";
import { UpdateDeviceDefinitionCommandInput, UpdateDeviceDefinitionCommandOutput } from "./commands/UpdateDeviceDefinitionCommand";
import { UpdateFunctionDefinitionCommandInput, UpdateFunctionDefinitionCommandOutput } from "./commands/UpdateFunctionDefinitionCommand";
import { UpdateGroupCertificateConfigurationCommandInput, UpdateGroupCertificateConfigurationCommandOutput } from "./commands/UpdateGroupCertificateConfigurationCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import { UpdateLoggerDefinitionCommandInput, UpdateLoggerDefinitionCommandOutput } from "./commands/UpdateLoggerDefinitionCommand";
import { UpdateResourceDefinitionCommandInput, UpdateResourceDefinitionCommandOutput } from "./commands/UpdateResourceDefinitionCommand";
import { UpdateSubscriptionDefinitionCommandInput, UpdateSubscriptionDefinitionCommandOutput } from "./commands/UpdateSubscriptionDefinitionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.
 */
export declare class Greengrass extends GreengrassClient {
    /**
     * Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
     */
    associateRoleToGroup(args: AssociateRoleToGroupCommandInput, options?: __HttpHandlerOptions): Promise<AssociateRoleToGroupCommandOutput>;
    associateRoleToGroup(args: AssociateRoleToGroupCommandInput, cb: (err: any, data?: AssociateRoleToGroupCommandOutput) => void): void;
    associateRoleToGroup(args: AssociateRoleToGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateRoleToGroupCommandOutput) => void): void;
    /**
     * Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
     */
    associateServiceRoleToAccount(args: AssociateServiceRoleToAccountCommandInput, options?: __HttpHandlerOptions): Promise<AssociateServiceRoleToAccountCommandOutput>;
    associateServiceRoleToAccount(args: AssociateServiceRoleToAccountCommandInput, cb: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void): void;
    associateServiceRoleToAccount(args: AssociateServiceRoleToAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void): void;
    /**
     * Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
     */
    createConnectorDefinition(args: CreateConnectorDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateConnectorDefinitionCommandOutput>;
    createConnectorDefinition(args: CreateConnectorDefinitionCommandInput, cb: (err: any, data?: CreateConnectorDefinitionCommandOutput) => void): void;
    createConnectorDefinition(args: CreateConnectorDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConnectorDefinitionCommandOutput) => void): void;
    /**
     * Creates a version of a connector definition which has already been defined.
     */
    createConnectorDefinitionVersion(args: CreateConnectorDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateConnectorDefinitionVersionCommandOutput>;
    createConnectorDefinitionVersion(args: CreateConnectorDefinitionVersionCommandInput, cb: (err: any, data?: CreateConnectorDefinitionVersionCommandOutput) => void): void;
    createConnectorDefinitionVersion(args: CreateConnectorDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConnectorDefinitionVersionCommandOutput) => void): void;
    /**
     * Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
     */
    createCoreDefinition(args: CreateCoreDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateCoreDefinitionCommandOutput>;
    createCoreDefinition(args: CreateCoreDefinitionCommandInput, cb: (err: any, data?: CreateCoreDefinitionCommandOutput) => void): void;
    createCoreDefinition(args: CreateCoreDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCoreDefinitionCommandOutput) => void): void;
    /**
     * Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
     */
    createCoreDefinitionVersion(args: CreateCoreDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateCoreDefinitionVersionCommandOutput>;
    createCoreDefinitionVersion(args: CreateCoreDefinitionVersionCommandInput, cb: (err: any, data?: CreateCoreDefinitionVersionCommandOutput) => void): void;
    createCoreDefinitionVersion(args: CreateCoreDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCoreDefinitionVersionCommandOutput) => void): void;
    /**
     * Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
     */
    createDeployment(args: CreateDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeploymentCommandOutput>;
    createDeployment(args: CreateDeploymentCommandInput, cb: (err: any, data?: CreateDeploymentCommandOutput) => void): void;
    createDeployment(args: CreateDeploymentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeploymentCommandOutput) => void): void;
    /**
     * Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
     */
    createDeviceDefinition(args: CreateDeviceDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeviceDefinitionCommandOutput>;
    createDeviceDefinition(args: CreateDeviceDefinitionCommandInput, cb: (err: any, data?: CreateDeviceDefinitionCommandOutput) => void): void;
    createDeviceDefinition(args: CreateDeviceDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeviceDefinitionCommandOutput) => void): void;
    /**
     * Creates a version of a device definition that has already been defined.
     */
    createDeviceDefinitionVersion(args: CreateDeviceDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeviceDefinitionVersionCommandOutput>;
    createDeviceDefinitionVersion(args: CreateDeviceDefinitionVersionCommandInput, cb: (err: any, data?: CreateDeviceDefinitionVersionCommandOutput) => void): void;
    createDeviceDefinitionVersion(args: CreateDeviceDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeviceDefinitionVersionCommandOutput) => void): void;
    /**
     * Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
     */
    createFunctionDefinition(args: CreateFunctionDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateFunctionDefinitionCommandOutput>;
    createFunctionDefinition(args: CreateFunctionDefinitionCommandInput, cb: (err: any, data?: CreateFunctionDefinitionCommandOutput) => void): void;
    createFunctionDefinition(args: CreateFunctionDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFunctionDefinitionCommandOutput) => void): void;
    /**
     * Creates a version of a Lambda function definition that has already been defined.
     */
    createFunctionDefinitionVersion(args: CreateFunctionDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateFunctionDefinitionVersionCommandOutput>;
    createFunctionDefinitionVersion(args: CreateFunctionDefinitionVersionCommandInput, cb: (err: any, data?: CreateFunctionDefinitionVersionCommandOutput) => void): void;
    createFunctionDefinitionVersion(args: CreateFunctionDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFunctionDefinitionVersionCommandOutput) => void): void;
    /**
     * Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
     */
    createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
    createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    createGroup(args: CreateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    /**
     * Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
     */
    createGroupCertificateAuthority(args: CreateGroupCertificateAuthorityCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCertificateAuthorityCommandOutput>;
    createGroupCertificateAuthority(args: CreateGroupCertificateAuthorityCommandInput, cb: (err: any, data?: CreateGroupCertificateAuthorityCommandOutput) => void): void;
    createGroupCertificateAuthority(args: CreateGroupCertificateAuthorityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGroupCertificateAuthorityCommandOutput) => void): void;
    /**
     * Creates a version of a group which has already been defined.
     */
    createGroupVersion(args: CreateGroupVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupVersionCommandOutput>;
    createGroupVersion(args: CreateGroupVersionCommandInput, cb: (err: any, data?: CreateGroupVersionCommandOutput) => void): void;
    createGroupVersion(args: CreateGroupVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGroupVersionCommandOutput) => void): void;
    /**
     * Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
     */
    createLoggerDefinition(args: CreateLoggerDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateLoggerDefinitionCommandOutput>;
    createLoggerDefinition(args: CreateLoggerDefinitionCommandInput, cb: (err: any, data?: CreateLoggerDefinitionCommandOutput) => void): void;
    createLoggerDefinition(args: CreateLoggerDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLoggerDefinitionCommandOutput) => void): void;
    /**
     * Creates a version of a logger definition that has already been defined.
     */
    createLoggerDefinitionVersion(args: CreateLoggerDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateLoggerDefinitionVersionCommandOutput>;
    createLoggerDefinitionVersion(args: CreateLoggerDefinitionVersionCommandInput, cb: (err: any, data?: CreateLoggerDefinitionVersionCommandOutput) => void): void;
    createLoggerDefinitionVersion(args: CreateLoggerDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLoggerDefinitionVersionCommandOutput) => void): void;
    /**
     * Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
     */
    createResourceDefinition(args: CreateResourceDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateResourceDefinitionCommandOutput>;
    createResourceDefinition(args: CreateResourceDefinitionCommandInput, cb: (err: any, data?: CreateResourceDefinitionCommandOutput) => void): void;
    createResourceDefinition(args: CreateResourceDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResourceDefinitionCommandOutput) => void): void;
    /**
     * Creates a version of a resource definition that has already been defined.
     */
    createResourceDefinitionVersion(args: CreateResourceDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateResourceDefinitionVersionCommandOutput>;
    createResourceDefinitionVersion(args: CreateResourceDefinitionVersionCommandInput, cb: (err: any, data?: CreateResourceDefinitionVersionCommandOutput) => void): void;
    createResourceDefinitionVersion(args: CreateResourceDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResourceDefinitionVersionCommandOutput) => void): void;
    /**
     * Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
     */
    createSoftwareUpdateJob(args: CreateSoftwareUpdateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateSoftwareUpdateJobCommandOutput>;
    createSoftwareUpdateJob(args: CreateSoftwareUpdateJobCommandInput, cb: (err: any, data?: CreateSoftwareUpdateJobCommandOutput) => void): void;
    createSoftwareUpdateJob(args: CreateSoftwareUpdateJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSoftwareUpdateJobCommandOutput) => void): void;
    /**
     * Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
     */
    createSubscriptionDefinition(args: CreateSubscriptionDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateSubscriptionDefinitionCommandOutput>;
    createSubscriptionDefinition(args: CreateSubscriptionDefinitionCommandInput, cb: (err: any, data?: CreateSubscriptionDefinitionCommandOutput) => void): void;
    createSubscriptionDefinition(args: CreateSubscriptionDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSubscriptionDefinitionCommandOutput) => void): void;
    /**
     * Creates a version of a subscription definition which has already been defined.
     */
    createSubscriptionDefinitionVersion(args: CreateSubscriptionDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateSubscriptionDefinitionVersionCommandOutput>;
    createSubscriptionDefinitionVersion(args: CreateSubscriptionDefinitionVersionCommandInput, cb: (err: any, data?: CreateSubscriptionDefinitionVersionCommandOutput) => void): void;
    createSubscriptionDefinitionVersion(args: CreateSubscriptionDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSubscriptionDefinitionVersionCommandOutput) => void): void;
    /**
     * Deletes a connector definition.
     */
    deleteConnectorDefinition(args: DeleteConnectorDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConnectorDefinitionCommandOutput>;
    deleteConnectorDefinition(args: DeleteConnectorDefinitionCommandInput, cb: (err: any, data?: DeleteConnectorDefinitionCommandOutput) => void): void;
    deleteConnectorDefinition(args: DeleteConnectorDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConnectorDefinitionCommandOutput) => void): void;
    /**
     * Deletes a core definition.
     */
    deleteCoreDefinition(args: DeleteCoreDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCoreDefinitionCommandOutput>;
    deleteCoreDefinition(args: DeleteCoreDefinitionCommandInput, cb: (err: any, data?: DeleteCoreDefinitionCommandOutput) => void): void;
    deleteCoreDefinition(args: DeleteCoreDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCoreDefinitionCommandOutput) => void): void;
    /**
     * Deletes a device definition.
     */
    deleteDeviceDefinition(args: DeleteDeviceDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDeviceDefinitionCommandOutput>;
    deleteDeviceDefinition(args: DeleteDeviceDefinitionCommandInput, cb: (err: any, data?: DeleteDeviceDefinitionCommandOutput) => void): void;
    deleteDeviceDefinition(args: DeleteDeviceDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDeviceDefinitionCommandOutput) => void): void;
    /**
     * Deletes a Lambda function definition.
     */
    deleteFunctionDefinition(args: DeleteFunctionDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFunctionDefinitionCommandOutput>;
    deleteFunctionDefinition(args: DeleteFunctionDefinitionCommandInput, cb: (err: any, data?: DeleteFunctionDefinitionCommandOutput) => void): void;
    deleteFunctionDefinition(args: DeleteFunctionDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFunctionDefinitionCommandOutput) => void): void;
    /**
     * Deletes a group.
     */
    deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
    deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    deleteGroup(args: DeleteGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    /**
     * Deletes a logger definition.
     */
    deleteLoggerDefinition(args: DeleteLoggerDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLoggerDefinitionCommandOutput>;
    deleteLoggerDefinition(args: DeleteLoggerDefinitionCommandInput, cb: (err: any, data?: DeleteLoggerDefinitionCommandOutput) => void): void;
    deleteLoggerDefinition(args: DeleteLoggerDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLoggerDefinitionCommandOutput) => void): void;
    /**
     * Deletes a resource definition.
     */
    deleteResourceDefinition(args: DeleteResourceDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourceDefinitionCommandOutput>;
    deleteResourceDefinition(args: DeleteResourceDefinitionCommandInput, cb: (err: any, data?: DeleteResourceDefinitionCommandOutput) => void): void;
    deleteResourceDefinition(args: DeleteResourceDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourceDefinitionCommandOutput) => void): void;
    /**
     * Deletes a subscription definition.
     */
    deleteSubscriptionDefinition(args: DeleteSubscriptionDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSubscriptionDefinitionCommandOutput>;
    deleteSubscriptionDefinition(args: DeleteSubscriptionDefinitionCommandInput, cb: (err: any, data?: DeleteSubscriptionDefinitionCommandOutput) => void): void;
    deleteSubscriptionDefinition(args: DeleteSubscriptionDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSubscriptionDefinitionCommandOutput) => void): void;
    /**
     * Disassociates the role from a group.
     */
    disassociateRoleFromGroup(args: DisassociateRoleFromGroupCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateRoleFromGroupCommandOutput>;
    disassociateRoleFromGroup(args: DisassociateRoleFromGroupCommandInput, cb: (err: any, data?: DisassociateRoleFromGroupCommandOutput) => void): void;
    disassociateRoleFromGroup(args: DisassociateRoleFromGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateRoleFromGroupCommandOutput) => void): void;
    /**
     * Disassociates the service role from your account. Without a service role, deployments will not work.
     */
    disassociateServiceRoleFromAccount(args: DisassociateServiceRoleFromAccountCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateServiceRoleFromAccountCommandOutput>;
    disassociateServiceRoleFromAccount(args: DisassociateServiceRoleFromAccountCommandInput, cb: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void): void;
    disassociateServiceRoleFromAccount(args: DisassociateServiceRoleFromAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void): void;
    /**
     * Retrieves the role associated with a particular group.
     */
    getAssociatedRole(args: GetAssociatedRoleCommandInput, options?: __HttpHandlerOptions): Promise<GetAssociatedRoleCommandOutput>;
    getAssociatedRole(args: GetAssociatedRoleCommandInput, cb: (err: any, data?: GetAssociatedRoleCommandOutput) => void): void;
    getAssociatedRole(args: GetAssociatedRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAssociatedRoleCommandOutput) => void): void;
    /**
     * Returns the status of a bulk deployment.
     */
    getBulkDeploymentStatus(args: GetBulkDeploymentStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetBulkDeploymentStatusCommandOutput>;
    getBulkDeploymentStatus(args: GetBulkDeploymentStatusCommandInput, cb: (err: any, data?: GetBulkDeploymentStatusCommandOutput) => void): void;
    getBulkDeploymentStatus(args: GetBulkDeploymentStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBulkDeploymentStatusCommandOutput) => void): void;
    /**
     * Retrieves the connectivity information for a core.
     */
    getConnectivityInfo(args: GetConnectivityInfoCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectivityInfoCommandOutput>;
    getConnectivityInfo(args: GetConnectivityInfoCommandInput, cb: (err: any, data?: GetConnectivityInfoCommandOutput) => void): void;
    getConnectivityInfo(args: GetConnectivityInfoCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConnectivityInfoCommandOutput) => void): void;
    /**
     * Retrieves information about a connector definition.
     */
    getConnectorDefinition(args: GetConnectorDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectorDefinitionCommandOutput>;
    getConnectorDefinition(args: GetConnectorDefinitionCommandInput, cb: (err: any, data?: GetConnectorDefinitionCommandOutput) => void): void;
    getConnectorDefinition(args: GetConnectorDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConnectorDefinitionCommandOutput) => void): void;
    /**
     * Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
     */
    getConnectorDefinitionVersion(args: GetConnectorDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectorDefinitionVersionCommandOutput>;
    getConnectorDefinitionVersion(args: GetConnectorDefinitionVersionCommandInput, cb: (err: any, data?: GetConnectorDefinitionVersionCommandOutput) => void): void;
    getConnectorDefinitionVersion(args: GetConnectorDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConnectorDefinitionVersionCommandOutput) => void): void;
    /**
     * Retrieves information about a core definition version.
     */
    getCoreDefinition(args: GetCoreDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<GetCoreDefinitionCommandOutput>;
    getCoreDefinition(args: GetCoreDefinitionCommandInput, cb: (err: any, data?: GetCoreDefinitionCommandOutput) => void): void;
    getCoreDefinition(args: GetCoreDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCoreDefinitionCommandOutput) => void): void;
    /**
     * Retrieves information about a core definition version.
     */
    getCoreDefinitionVersion(args: GetCoreDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetCoreDefinitionVersionCommandOutput>;
    getCoreDefinitionVersion(args: GetCoreDefinitionVersionCommandInput, cb: (err: any, data?: GetCoreDefinitionVersionCommandOutput) => void): void;
    getCoreDefinitionVersion(args: GetCoreDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCoreDefinitionVersionCommandOutput) => void): void;
    /**
     * Returns the status of a deployment.
     */
    getDeploymentStatus(args: GetDeploymentStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentStatusCommandOutput>;
    getDeploymentStatus(args: GetDeploymentStatusCommandInput, cb: (err: any, data?: GetDeploymentStatusCommandOutput) => void): void;
    getDeploymentStatus(args: GetDeploymentStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeploymentStatusCommandOutput) => void): void;
    /**
     * Retrieves information about a device definition.
     */
    getDeviceDefinition(args: GetDeviceDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceDefinitionCommandOutput>;
    getDeviceDefinition(args: GetDeviceDefinitionCommandInput, cb: (err: any, data?: GetDeviceDefinitionCommandOutput) => void): void;
    getDeviceDefinition(args: GetDeviceDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeviceDefinitionCommandOutput) => void): void;
    /**
     * Retrieves information about a device definition version.
     */
    getDeviceDefinitionVersion(args: GetDeviceDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceDefinitionVersionCommandOutput>;
    getDeviceDefinitionVersion(args: GetDeviceDefinitionVersionCommandInput, cb: (err: any, data?: GetDeviceDefinitionVersionCommandOutput) => void): void;
    getDeviceDefinitionVersion(args: GetDeviceDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeviceDefinitionVersionCommandOutput) => void): void;
    /**
     * Retrieves information about a Lambda function definition, including its creation time and latest version.
     */
    getFunctionDefinition(args: GetFunctionDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionDefinitionCommandOutput>;
    getFunctionDefinition(args: GetFunctionDefinitionCommandInput, cb: (err: any, data?: GetFunctionDefinitionCommandOutput) => void): void;
    getFunctionDefinition(args: GetFunctionDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFunctionDefinitionCommandOutput) => void): void;
    /**
     * Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
     */
    getFunctionDefinitionVersion(args: GetFunctionDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionDefinitionVersionCommandOutput>;
    getFunctionDefinitionVersion(args: GetFunctionDefinitionVersionCommandInput, cb: (err: any, data?: GetFunctionDefinitionVersionCommandOutput) => void): void;
    getFunctionDefinitionVersion(args: GetFunctionDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFunctionDefinitionVersionCommandOutput) => void): void;
    /**
     * Retrieves information about a group.
     */
    getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
    getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
    getGroup(args: GetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
    /**
     * Retreives the CA associated with a group. Returns the public key of the CA.
     */
    getGroupCertificateAuthority(args: GetGroupCertificateAuthorityCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCertificateAuthorityCommandOutput>;
    getGroupCertificateAuthority(args: GetGroupCertificateAuthorityCommandInput, cb: (err: any, data?: GetGroupCertificateAuthorityCommandOutput) => void): void;
    getGroupCertificateAuthority(args: GetGroupCertificateAuthorityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGroupCertificateAuthorityCommandOutput) => void): void;
    /**
     * Retrieves the current configuration for the CA used by the group.
     */
    getGroupCertificateConfiguration(args: GetGroupCertificateConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCertificateConfigurationCommandOutput>;
    getGroupCertificateConfiguration(args: GetGroupCertificateConfigurationCommandInput, cb: (err: any, data?: GetGroupCertificateConfigurationCommandOutput) => void): void;
    getGroupCertificateConfiguration(args: GetGroupCertificateConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGroupCertificateConfigurationCommandOutput) => void): void;
    /**
     * Retrieves information about a group version.
     */
    getGroupVersion(args: GetGroupVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupVersionCommandOutput>;
    getGroupVersion(args: GetGroupVersionCommandInput, cb: (err: any, data?: GetGroupVersionCommandOutput) => void): void;
    getGroupVersion(args: GetGroupVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGroupVersionCommandOutput) => void): void;
    /**
     * Retrieves information about a logger definition.
     */
    getLoggerDefinition(args: GetLoggerDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<GetLoggerDefinitionCommandOutput>;
    getLoggerDefinition(args: GetLoggerDefinitionCommandInput, cb: (err: any, data?: GetLoggerDefinitionCommandOutput) => void): void;
    getLoggerDefinition(args: GetLoggerDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLoggerDefinitionCommandOutput) => void): void;
    /**
     * Retrieves information about a logger definition version.
     */
    getLoggerDefinitionVersion(args: GetLoggerDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetLoggerDefinitionVersionCommandOutput>;
    getLoggerDefinitionVersion(args: GetLoggerDefinitionVersionCommandInput, cb: (err: any, data?: GetLoggerDefinitionVersionCommandOutput) => void): void;
    getLoggerDefinitionVersion(args: GetLoggerDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLoggerDefinitionVersionCommandOutput) => void): void;
    /**
     * Retrieves information about a resource definition, including its creation time and latest version.
     */
    getResourceDefinition(args: GetResourceDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceDefinitionCommandOutput>;
    getResourceDefinition(args: GetResourceDefinitionCommandInput, cb: (err: any, data?: GetResourceDefinitionCommandOutput) => void): void;
    getResourceDefinition(args: GetResourceDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourceDefinitionCommandOutput) => void): void;
    /**
     * Retrieves information about a resource definition version, including which resources are included in the version.
     */
    getResourceDefinitionVersion(args: GetResourceDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceDefinitionVersionCommandOutput>;
    getResourceDefinitionVersion(args: GetResourceDefinitionVersionCommandInput, cb: (err: any, data?: GetResourceDefinitionVersionCommandOutput) => void): void;
    getResourceDefinitionVersion(args: GetResourceDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourceDefinitionVersionCommandOutput) => void): void;
    /**
     * Retrieves the service role that is attached to your account.
     */
    getServiceRoleForAccount(args: GetServiceRoleForAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceRoleForAccountCommandOutput>;
    getServiceRoleForAccount(args: GetServiceRoleForAccountCommandInput, cb: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void): void;
    getServiceRoleForAccount(args: GetServiceRoleForAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void): void;
    /**
     * Retrieves information about a subscription definition.
     */
    getSubscriptionDefinition(args: GetSubscriptionDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<GetSubscriptionDefinitionCommandOutput>;
    getSubscriptionDefinition(args: GetSubscriptionDefinitionCommandInput, cb: (err: any, data?: GetSubscriptionDefinitionCommandOutput) => void): void;
    getSubscriptionDefinition(args: GetSubscriptionDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSubscriptionDefinitionCommandOutput) => void): void;
    /**
     * Retrieves information about a subscription definition version.
     */
    getSubscriptionDefinitionVersion(args: GetSubscriptionDefinitionVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetSubscriptionDefinitionVersionCommandOutput>;
    getSubscriptionDefinitionVersion(args: GetSubscriptionDefinitionVersionCommandInput, cb: (err: any, data?: GetSubscriptionDefinitionVersionCommandOutput) => void): void;
    getSubscriptionDefinitionVersion(args: GetSubscriptionDefinitionVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSubscriptionDefinitionVersionCommandOutput) => void): void;
    /**
     * Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
     */
    listBulkDeploymentDetailedReports(args: ListBulkDeploymentDetailedReportsCommandInput, options?: __HttpHandlerOptions): Promise<ListBulkDeploymentDetailedReportsCommandOutput>;
    listBulkDeploymentDetailedReports(args: ListBulkDeploymentDetailedReportsCommandInput, cb: (err: any, data?: ListBulkDeploymentDetailedReportsCommandOutput) => void): void;
    listBulkDeploymentDetailedReports(args: ListBulkDeploymentDetailedReportsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBulkDeploymentDetailedReportsCommandOutput) => void): void;
    /**
     * Returns a list of bulk deployments.
     */
    listBulkDeployments(args: ListBulkDeploymentsCommandInput, options?: __HttpHandlerOptions): Promise<ListBulkDeploymentsCommandOutput>;
    listBulkDeployments(args: ListBulkDeploymentsCommandInput, cb: (err: any, data?: ListBulkDeploymentsCommandOutput) => void): void;
    listBulkDeployments(args: ListBulkDeploymentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBulkDeploymentsCommandOutput) => void): void;
    /**
     * Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
     */
    listConnectorDefinitionVersions(args: ListConnectorDefinitionVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListConnectorDefinitionVersionsCommandOutput>;
    listConnectorDefinitionVersions(args: ListConnectorDefinitionVersionsCommandInput, cb: (err: any, data?: ListConnectorDefinitionVersionsCommandOutput) => void): void;
    listConnectorDefinitionVersions(args: ListConnectorDefinitionVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConnectorDefinitionVersionsCommandOutput) => void): void;
    /**
     * Retrieves a list of connector definitions.
     */
    listConnectorDefinitions(args: ListConnectorDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListConnectorDefinitionsCommandOutput>;
    listConnectorDefinitions(args: ListConnectorDefinitionsCommandInput, cb: (err: any, data?: ListConnectorDefinitionsCommandOutput) => void): void;
    listConnectorDefinitions(args: ListConnectorDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConnectorDefinitionsCommandOutput) => void): void;
    /**
     * Lists the versions of a core definition.
     */
    listCoreDefinitionVersions(args: ListCoreDefinitionVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListCoreDefinitionVersionsCommandOutput>;
    listCoreDefinitionVersions(args: ListCoreDefinitionVersionsCommandInput, cb: (err: any, data?: ListCoreDefinitionVersionsCommandOutput) => void): void;
    listCoreDefinitionVersions(args: ListCoreDefinitionVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCoreDefinitionVersionsCommandOutput) => void): void;
    /**
     * Retrieves a list of core definitions.
     */
    listCoreDefinitions(args: ListCoreDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListCoreDefinitionsCommandOutput>;
    listCoreDefinitions(args: ListCoreDefinitionsCommandInput, cb: (err: any, data?: ListCoreDefinitionsCommandOutput) => void): void;
    listCoreDefinitions(args: ListCoreDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCoreDefinitionsCommandOutput) => void): void;
    /**
     * Returns a history of deployments for the group.
     */
    listDeployments(args: ListDeploymentsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeploymentsCommandOutput>;
    listDeployments(args: ListDeploymentsCommandInput, cb: (err: any, data?: ListDeploymentsCommandOutput) => void): void;
    listDeployments(args: ListDeploymentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeploymentsCommandOutput) => void): void;
    /**
     * Lists the versions of a device definition.
     */
    listDeviceDefinitionVersions(args: ListDeviceDefinitionVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeviceDefinitionVersionsCommandOutput>;
    listDeviceDefinitionVersions(args: ListDeviceDefinitionVersionsCommandInput, cb: (err: any, data?: ListDeviceDefinitionVersionsCommandOutput) => void): void;
    listDeviceDefinitionVersions(args: ListDeviceDefinitionVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeviceDefinitionVersionsCommandOutput) => void): void;
    /**
     * Retrieves a list of device definitions.
     */
    listDeviceDefinitions(args: ListDeviceDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeviceDefinitionsCommandOutput>;
    listDeviceDefinitions(args: ListDeviceDefinitionsCommandInput, cb: (err: any, data?: ListDeviceDefinitionsCommandOutput) => void): void;
    listDeviceDefinitions(args: ListDeviceDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeviceDefinitionsCommandOutput) => void): void;
    /**
     * Lists the versions of a Lambda function definition.
     */
    listFunctionDefinitionVersions(args: ListFunctionDefinitionVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListFunctionDefinitionVersionsCommandOutput>;
    listFunctionDefinitionVersions(args: ListFunctionDefinitionVersionsCommandInput, cb: (err: any, data?: ListFunctionDefinitionVersionsCommandOutput) => void): void;
    listFunctionDefinitionVersions(args: ListFunctionDefinitionVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFunctionDefinitionVersionsCommandOutput) => void): void;
    /**
     * Retrieves a list of Lambda function definitions.
     */
    listFunctionDefinitions(args: ListFunctionDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListFunctionDefinitionsCommandOutput>;
    listFunctionDefinitions(args: ListFunctionDefinitionsCommandInput, cb: (err: any, data?: ListFunctionDefinitionsCommandOutput) => void): void;
    listFunctionDefinitions(args: ListFunctionDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFunctionDefinitionsCommandOutput) => void): void;
    /**
     * Retrieves the current CAs for a group.
     */
    listGroupCertificateAuthorities(args: ListGroupCertificateAuthoritiesCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupCertificateAuthoritiesCommandOutput>;
    listGroupCertificateAuthorities(args: ListGroupCertificateAuthoritiesCommandInput, cb: (err: any, data?: ListGroupCertificateAuthoritiesCommandOutput) => void): void;
    listGroupCertificateAuthorities(args: ListGroupCertificateAuthoritiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupCertificateAuthoritiesCommandOutput) => void): void;
    /**
     * Lists the versions of a group.
     */
    listGroupVersions(args: ListGroupVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupVersionsCommandOutput>;
    listGroupVersions(args: ListGroupVersionsCommandInput, cb: (err: any, data?: ListGroupVersionsCommandOutput) => void): void;
    listGroupVersions(args: ListGroupVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupVersionsCommandOutput) => void): void;
    /**
     * Retrieves a list of groups.
     */
    listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
    listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    listGroups(args: ListGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    /**
     * Lists the versions of a logger definition.
     */
    listLoggerDefinitionVersions(args: ListLoggerDefinitionVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListLoggerDefinitionVersionsCommandOutput>;
    listLoggerDefinitionVersions(args: ListLoggerDefinitionVersionsCommandInput, cb: (err: any, data?: ListLoggerDefinitionVersionsCommandOutput) => void): void;
    listLoggerDefinitionVersions(args: ListLoggerDefinitionVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLoggerDefinitionVersionsCommandOutput) => void): void;
    /**
     * Retrieves a list of logger definitions.
     */
    listLoggerDefinitions(args: ListLoggerDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListLoggerDefinitionsCommandOutput>;
    listLoggerDefinitions(args: ListLoggerDefinitionsCommandInput, cb: (err: any, data?: ListLoggerDefinitionsCommandOutput) => void): void;
    listLoggerDefinitions(args: ListLoggerDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLoggerDefinitionsCommandOutput) => void): void;
    /**
     * Lists the versions of a resource definition.
     */
    listResourceDefinitionVersions(args: ListResourceDefinitionVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListResourceDefinitionVersionsCommandOutput>;
    listResourceDefinitionVersions(args: ListResourceDefinitionVersionsCommandInput, cb: (err: any, data?: ListResourceDefinitionVersionsCommandOutput) => void): void;
    listResourceDefinitionVersions(args: ListResourceDefinitionVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourceDefinitionVersionsCommandOutput) => void): void;
    /**
     * Retrieves a list of resource definitions.
     */
    listResourceDefinitions(args: ListResourceDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListResourceDefinitionsCommandOutput>;
    listResourceDefinitions(args: ListResourceDefinitionsCommandInput, cb: (err: any, data?: ListResourceDefinitionsCommandOutput) => void): void;
    listResourceDefinitions(args: ListResourceDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourceDefinitionsCommandOutput) => void): void;
    /**
     * Lists the versions of a subscription definition.
     */
    listSubscriptionDefinitionVersions(args: ListSubscriptionDefinitionVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSubscriptionDefinitionVersionsCommandOutput>;
    listSubscriptionDefinitionVersions(args: ListSubscriptionDefinitionVersionsCommandInput, cb: (err: any, data?: ListSubscriptionDefinitionVersionsCommandOutput) => void): void;
    listSubscriptionDefinitionVersions(args: ListSubscriptionDefinitionVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSubscriptionDefinitionVersionsCommandOutput) => void): void;
    /**
     * Retrieves a list of subscription definitions.
     */
    listSubscriptionDefinitions(args: ListSubscriptionDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSubscriptionDefinitionsCommandOutput>;
    listSubscriptionDefinitions(args: ListSubscriptionDefinitionsCommandInput, cb: (err: any, data?: ListSubscriptionDefinitionsCommandOutput) => void): void;
    listSubscriptionDefinitions(args: ListSubscriptionDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSubscriptionDefinitionsCommandOutput) => void): void;
    /**
     * Retrieves a list of resource tags for a resource arn.
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * Resets a group's deployments.
     */
    resetDeployments(args: ResetDeploymentsCommandInput, options?: __HttpHandlerOptions): Promise<ResetDeploymentsCommandOutput>;
    resetDeployments(args: ResetDeploymentsCommandInput, cb: (err: any, data?: ResetDeploymentsCommandOutput) => void): void;
    resetDeployments(args: ResetDeploymentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetDeploymentsCommandOutput) => void): void;
    /**
     * Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
     */
    startBulkDeployment(args: StartBulkDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<StartBulkDeploymentCommandOutput>;
    startBulkDeployment(args: StartBulkDeploymentCommandInput, cb: (err: any, data?: StartBulkDeploymentCommandOutput) => void): void;
    startBulkDeployment(args: StartBulkDeploymentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartBulkDeploymentCommandOutput) => void): void;
    /**
     * Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
     */
    stopBulkDeployment(args: StopBulkDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<StopBulkDeploymentCommandOutput>;
    stopBulkDeployment(args: StopBulkDeploymentCommandInput, cb: (err: any, data?: StopBulkDeploymentCommandOutput) => void): void;
    stopBulkDeployment(args: StopBulkDeploymentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopBulkDeploymentCommandOutput) => void): void;
    /**
     * Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * Remove resource tags from a Greengrass Resource.
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
     */
    updateConnectivityInfo(args: UpdateConnectivityInfoCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConnectivityInfoCommandOutput>;
    updateConnectivityInfo(args: UpdateConnectivityInfoCommandInput, cb: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void): void;
    updateConnectivityInfo(args: UpdateConnectivityInfoCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void): void;
    /**
     * Updates a connector definition.
     */
    updateConnectorDefinition(args: UpdateConnectorDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConnectorDefinitionCommandOutput>;
    updateConnectorDefinition(args: UpdateConnectorDefinitionCommandInput, cb: (err: any, data?: UpdateConnectorDefinitionCommandOutput) => void): void;
    updateConnectorDefinition(args: UpdateConnectorDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConnectorDefinitionCommandOutput) => void): void;
    /**
     * Updates a core definition.
     */
    updateCoreDefinition(args: UpdateCoreDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCoreDefinitionCommandOutput>;
    updateCoreDefinition(args: UpdateCoreDefinitionCommandInput, cb: (err: any, data?: UpdateCoreDefinitionCommandOutput) => void): void;
    updateCoreDefinition(args: UpdateCoreDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCoreDefinitionCommandOutput) => void): void;
    /**
     * Updates a device definition.
     */
    updateDeviceDefinition(args: UpdateDeviceDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDeviceDefinitionCommandOutput>;
    updateDeviceDefinition(args: UpdateDeviceDefinitionCommandInput, cb: (err: any, data?: UpdateDeviceDefinitionCommandOutput) => void): void;
    updateDeviceDefinition(args: UpdateDeviceDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDeviceDefinitionCommandOutput) => void): void;
    /**
     * Updates a Lambda function definition.
     */
    updateFunctionDefinition(args: UpdateFunctionDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFunctionDefinitionCommandOutput>;
    updateFunctionDefinition(args: UpdateFunctionDefinitionCommandInput, cb: (err: any, data?: UpdateFunctionDefinitionCommandOutput) => void): void;
    updateFunctionDefinition(args: UpdateFunctionDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFunctionDefinitionCommandOutput) => void): void;
    /**
     * Updates a group.
     */
    updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
    updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
    updateGroup(args: UpdateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
    /**
     * Updates the Certificate expiry time for a group.
     */
    updateGroupCertificateConfiguration(args: UpdateGroupCertificateConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCertificateConfigurationCommandOutput>;
    updateGroupCertificateConfiguration(args: UpdateGroupCertificateConfigurationCommandInput, cb: (err: any, data?: UpdateGroupCertificateConfigurationCommandOutput) => void): void;
    updateGroupCertificateConfiguration(args: UpdateGroupCertificateConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGroupCertificateConfigurationCommandOutput) => void): void;
    /**
     * Updates a logger definition.
     */
    updateLoggerDefinition(args: UpdateLoggerDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLoggerDefinitionCommandOutput>;
    updateLoggerDefinition(args: UpdateLoggerDefinitionCommandInput, cb: (err: any, data?: UpdateLoggerDefinitionCommandOutput) => void): void;
    updateLoggerDefinition(args: UpdateLoggerDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLoggerDefinitionCommandOutput) => void): void;
    /**
     * Updates a resource definition.
     */
    updateResourceDefinition(args: UpdateResourceDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResourceDefinitionCommandOutput>;
    updateResourceDefinition(args: UpdateResourceDefinitionCommandInput, cb: (err: any, data?: UpdateResourceDefinitionCommandOutput) => void): void;
    updateResourceDefinition(args: UpdateResourceDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResourceDefinitionCommandOutput) => void): void;
    /**
     * Updates a subscription definition.
     */
    updateSubscriptionDefinition(args: UpdateSubscriptionDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSubscriptionDefinitionCommandOutput>;
    updateSubscriptionDefinition(args: UpdateSubscriptionDefinitionCommandInput, cb: (err: any, data?: UpdateSubscriptionDefinitionCommandOutput) => void): void;
    updateSubscriptionDefinition(args: UpdateSubscriptionDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSubscriptionDefinitionCommandOutput) => void): void;
}
