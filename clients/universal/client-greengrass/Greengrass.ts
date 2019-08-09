import { GreengrassClient } from "./GreengrassClient";
import { AssociateRoleToGroupInput } from "./types/AssociateRoleToGroupInput";
import { AssociateRoleToGroupOutput } from "./types/AssociateRoleToGroupOutput";
import { AssociateServiceRoleToAccountInput } from "./types/AssociateServiceRoleToAccountInput";
import { AssociateServiceRoleToAccountOutput } from "./types/AssociateServiceRoleToAccountOutput";
import { BadRequestException } from "./types/BadRequestException";
import { CreateConnectorDefinitionInput } from "./types/CreateConnectorDefinitionInput";
import { CreateConnectorDefinitionOutput } from "./types/CreateConnectorDefinitionOutput";
import { CreateConnectorDefinitionVersionInput } from "./types/CreateConnectorDefinitionVersionInput";
import { CreateConnectorDefinitionVersionOutput } from "./types/CreateConnectorDefinitionVersionOutput";
import { CreateCoreDefinitionInput } from "./types/CreateCoreDefinitionInput";
import { CreateCoreDefinitionOutput } from "./types/CreateCoreDefinitionOutput";
import { CreateCoreDefinitionVersionInput } from "./types/CreateCoreDefinitionVersionInput";
import { CreateCoreDefinitionVersionOutput } from "./types/CreateCoreDefinitionVersionOutput";
import { CreateDeploymentInput } from "./types/CreateDeploymentInput";
import { CreateDeploymentOutput } from "./types/CreateDeploymentOutput";
import { CreateDeviceDefinitionInput } from "./types/CreateDeviceDefinitionInput";
import { CreateDeviceDefinitionOutput } from "./types/CreateDeviceDefinitionOutput";
import { CreateDeviceDefinitionVersionInput } from "./types/CreateDeviceDefinitionVersionInput";
import { CreateDeviceDefinitionVersionOutput } from "./types/CreateDeviceDefinitionVersionOutput";
import { CreateFunctionDefinitionInput } from "./types/CreateFunctionDefinitionInput";
import { CreateFunctionDefinitionOutput } from "./types/CreateFunctionDefinitionOutput";
import { CreateFunctionDefinitionVersionInput } from "./types/CreateFunctionDefinitionVersionInput";
import { CreateFunctionDefinitionVersionOutput } from "./types/CreateFunctionDefinitionVersionOutput";
import { CreateGroupCertificateAuthorityInput } from "./types/CreateGroupCertificateAuthorityInput";
import { CreateGroupCertificateAuthorityOutput } from "./types/CreateGroupCertificateAuthorityOutput";
import { CreateGroupInput } from "./types/CreateGroupInput";
import { CreateGroupOutput } from "./types/CreateGroupOutput";
import { CreateGroupVersionInput } from "./types/CreateGroupVersionInput";
import { CreateGroupVersionOutput } from "./types/CreateGroupVersionOutput";
import { CreateLoggerDefinitionInput } from "./types/CreateLoggerDefinitionInput";
import { CreateLoggerDefinitionOutput } from "./types/CreateLoggerDefinitionOutput";
import { CreateLoggerDefinitionVersionInput } from "./types/CreateLoggerDefinitionVersionInput";
import { CreateLoggerDefinitionVersionOutput } from "./types/CreateLoggerDefinitionVersionOutput";
import { CreateResourceDefinitionInput } from "./types/CreateResourceDefinitionInput";
import { CreateResourceDefinitionOutput } from "./types/CreateResourceDefinitionOutput";
import { CreateResourceDefinitionVersionInput } from "./types/CreateResourceDefinitionVersionInput";
import { CreateResourceDefinitionVersionOutput } from "./types/CreateResourceDefinitionVersionOutput";
import { CreateSoftwareUpdateJobInput } from "./types/CreateSoftwareUpdateJobInput";
import { CreateSoftwareUpdateJobOutput } from "./types/CreateSoftwareUpdateJobOutput";
import { CreateSubscriptionDefinitionInput } from "./types/CreateSubscriptionDefinitionInput";
import { CreateSubscriptionDefinitionOutput } from "./types/CreateSubscriptionDefinitionOutput";
import { CreateSubscriptionDefinitionVersionInput } from "./types/CreateSubscriptionDefinitionVersionInput";
import { CreateSubscriptionDefinitionVersionOutput } from "./types/CreateSubscriptionDefinitionVersionOutput";
import { DeleteConnectorDefinitionInput } from "./types/DeleteConnectorDefinitionInput";
import { DeleteConnectorDefinitionOutput } from "./types/DeleteConnectorDefinitionOutput";
import { DeleteCoreDefinitionInput } from "./types/DeleteCoreDefinitionInput";
import { DeleteCoreDefinitionOutput } from "./types/DeleteCoreDefinitionOutput";
import { DeleteDeviceDefinitionInput } from "./types/DeleteDeviceDefinitionInput";
import { DeleteDeviceDefinitionOutput } from "./types/DeleteDeviceDefinitionOutput";
import { DeleteFunctionDefinitionInput } from "./types/DeleteFunctionDefinitionInput";
import { DeleteFunctionDefinitionOutput } from "./types/DeleteFunctionDefinitionOutput";
import { DeleteGroupInput } from "./types/DeleteGroupInput";
import { DeleteGroupOutput } from "./types/DeleteGroupOutput";
import { DeleteLoggerDefinitionInput } from "./types/DeleteLoggerDefinitionInput";
import { DeleteLoggerDefinitionOutput } from "./types/DeleteLoggerDefinitionOutput";
import { DeleteResourceDefinitionInput } from "./types/DeleteResourceDefinitionInput";
import { DeleteResourceDefinitionOutput } from "./types/DeleteResourceDefinitionOutput";
import { DeleteSubscriptionDefinitionInput } from "./types/DeleteSubscriptionDefinitionInput";
import { DeleteSubscriptionDefinitionOutput } from "./types/DeleteSubscriptionDefinitionOutput";
import { DisassociateRoleFromGroupInput } from "./types/DisassociateRoleFromGroupInput";
import { DisassociateRoleFromGroupOutput } from "./types/DisassociateRoleFromGroupOutput";
import { DisassociateServiceRoleFromAccountInput } from "./types/DisassociateServiceRoleFromAccountInput";
import { DisassociateServiceRoleFromAccountOutput } from "./types/DisassociateServiceRoleFromAccountOutput";
import { GetAssociatedRoleInput } from "./types/GetAssociatedRoleInput";
import { GetAssociatedRoleOutput } from "./types/GetAssociatedRoleOutput";
import { GetBulkDeploymentStatusInput } from "./types/GetBulkDeploymentStatusInput";
import { GetBulkDeploymentStatusOutput } from "./types/GetBulkDeploymentStatusOutput";
import { GetConnectivityInfoInput } from "./types/GetConnectivityInfoInput";
import { GetConnectivityInfoOutput } from "./types/GetConnectivityInfoOutput";
import { GetConnectorDefinitionInput } from "./types/GetConnectorDefinitionInput";
import { GetConnectorDefinitionOutput } from "./types/GetConnectorDefinitionOutput";
import { GetConnectorDefinitionVersionInput } from "./types/GetConnectorDefinitionVersionInput";
import { GetConnectorDefinitionVersionOutput } from "./types/GetConnectorDefinitionVersionOutput";
import { GetCoreDefinitionInput } from "./types/GetCoreDefinitionInput";
import { GetCoreDefinitionOutput } from "./types/GetCoreDefinitionOutput";
import { GetCoreDefinitionVersionInput } from "./types/GetCoreDefinitionVersionInput";
import { GetCoreDefinitionVersionOutput } from "./types/GetCoreDefinitionVersionOutput";
import { GetDeploymentStatusInput } from "./types/GetDeploymentStatusInput";
import { GetDeploymentStatusOutput } from "./types/GetDeploymentStatusOutput";
import { GetDeviceDefinitionInput } from "./types/GetDeviceDefinitionInput";
import { GetDeviceDefinitionOutput } from "./types/GetDeviceDefinitionOutput";
import { GetDeviceDefinitionVersionInput } from "./types/GetDeviceDefinitionVersionInput";
import { GetDeviceDefinitionVersionOutput } from "./types/GetDeviceDefinitionVersionOutput";
import { GetFunctionDefinitionInput } from "./types/GetFunctionDefinitionInput";
import { GetFunctionDefinitionOutput } from "./types/GetFunctionDefinitionOutput";
import { GetFunctionDefinitionVersionInput } from "./types/GetFunctionDefinitionVersionInput";
import { GetFunctionDefinitionVersionOutput } from "./types/GetFunctionDefinitionVersionOutput";
import { GetGroupCertificateAuthorityInput } from "./types/GetGroupCertificateAuthorityInput";
import { GetGroupCertificateAuthorityOutput } from "./types/GetGroupCertificateAuthorityOutput";
import { GetGroupCertificateConfigurationInput } from "./types/GetGroupCertificateConfigurationInput";
import { GetGroupCertificateConfigurationOutput } from "./types/GetGroupCertificateConfigurationOutput";
import { GetGroupInput } from "./types/GetGroupInput";
import { GetGroupOutput } from "./types/GetGroupOutput";
import { GetGroupVersionInput } from "./types/GetGroupVersionInput";
import { GetGroupVersionOutput } from "./types/GetGroupVersionOutput";
import { GetLoggerDefinitionInput } from "./types/GetLoggerDefinitionInput";
import { GetLoggerDefinitionOutput } from "./types/GetLoggerDefinitionOutput";
import { GetLoggerDefinitionVersionInput } from "./types/GetLoggerDefinitionVersionInput";
import { GetLoggerDefinitionVersionOutput } from "./types/GetLoggerDefinitionVersionOutput";
import { GetResourceDefinitionInput } from "./types/GetResourceDefinitionInput";
import { GetResourceDefinitionOutput } from "./types/GetResourceDefinitionOutput";
import { GetResourceDefinitionVersionInput } from "./types/GetResourceDefinitionVersionInput";
import { GetResourceDefinitionVersionOutput } from "./types/GetResourceDefinitionVersionOutput";
import { GetServiceRoleForAccountInput } from "./types/GetServiceRoleForAccountInput";
import { GetServiceRoleForAccountOutput } from "./types/GetServiceRoleForAccountOutput";
import { GetSubscriptionDefinitionInput } from "./types/GetSubscriptionDefinitionInput";
import { GetSubscriptionDefinitionOutput } from "./types/GetSubscriptionDefinitionOutput";
import { GetSubscriptionDefinitionVersionInput } from "./types/GetSubscriptionDefinitionVersionInput";
import { GetSubscriptionDefinitionVersionOutput } from "./types/GetSubscriptionDefinitionVersionOutput";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { ListBulkDeploymentDetailedReportsInput } from "./types/ListBulkDeploymentDetailedReportsInput";
import { ListBulkDeploymentDetailedReportsOutput } from "./types/ListBulkDeploymentDetailedReportsOutput";
import { ListBulkDeploymentsInput } from "./types/ListBulkDeploymentsInput";
import { ListBulkDeploymentsOutput } from "./types/ListBulkDeploymentsOutput";
import { ListConnectorDefinitionVersionsInput } from "./types/ListConnectorDefinitionVersionsInput";
import { ListConnectorDefinitionVersionsOutput } from "./types/ListConnectorDefinitionVersionsOutput";
import { ListConnectorDefinitionsInput } from "./types/ListConnectorDefinitionsInput";
import { ListConnectorDefinitionsOutput } from "./types/ListConnectorDefinitionsOutput";
import { ListCoreDefinitionVersionsInput } from "./types/ListCoreDefinitionVersionsInput";
import { ListCoreDefinitionVersionsOutput } from "./types/ListCoreDefinitionVersionsOutput";
import { ListCoreDefinitionsInput } from "./types/ListCoreDefinitionsInput";
import { ListCoreDefinitionsOutput } from "./types/ListCoreDefinitionsOutput";
import { ListDeploymentsInput } from "./types/ListDeploymentsInput";
import { ListDeploymentsOutput } from "./types/ListDeploymentsOutput";
import { ListDeviceDefinitionVersionsInput } from "./types/ListDeviceDefinitionVersionsInput";
import { ListDeviceDefinitionVersionsOutput } from "./types/ListDeviceDefinitionVersionsOutput";
import { ListDeviceDefinitionsInput } from "./types/ListDeviceDefinitionsInput";
import { ListDeviceDefinitionsOutput } from "./types/ListDeviceDefinitionsOutput";
import { ListFunctionDefinitionVersionsInput } from "./types/ListFunctionDefinitionVersionsInput";
import { ListFunctionDefinitionVersionsOutput } from "./types/ListFunctionDefinitionVersionsOutput";
import { ListFunctionDefinitionsInput } from "./types/ListFunctionDefinitionsInput";
import { ListFunctionDefinitionsOutput } from "./types/ListFunctionDefinitionsOutput";
import { ListGroupCertificateAuthoritiesInput } from "./types/ListGroupCertificateAuthoritiesInput";
import { ListGroupCertificateAuthoritiesOutput } from "./types/ListGroupCertificateAuthoritiesOutput";
import { ListGroupVersionsInput } from "./types/ListGroupVersionsInput";
import { ListGroupVersionsOutput } from "./types/ListGroupVersionsOutput";
import { ListGroupsInput } from "./types/ListGroupsInput";
import { ListGroupsOutput } from "./types/ListGroupsOutput";
import { ListLoggerDefinitionVersionsInput } from "./types/ListLoggerDefinitionVersionsInput";
import { ListLoggerDefinitionVersionsOutput } from "./types/ListLoggerDefinitionVersionsOutput";
import { ListLoggerDefinitionsInput } from "./types/ListLoggerDefinitionsInput";
import { ListLoggerDefinitionsOutput } from "./types/ListLoggerDefinitionsOutput";
import { ListResourceDefinitionVersionsInput } from "./types/ListResourceDefinitionVersionsInput";
import { ListResourceDefinitionVersionsOutput } from "./types/ListResourceDefinitionVersionsOutput";
import { ListResourceDefinitionsInput } from "./types/ListResourceDefinitionsInput";
import { ListResourceDefinitionsOutput } from "./types/ListResourceDefinitionsOutput";
import { ListSubscriptionDefinitionVersionsInput } from "./types/ListSubscriptionDefinitionVersionsInput";
import { ListSubscriptionDefinitionVersionsOutput } from "./types/ListSubscriptionDefinitionVersionsOutput";
import { ListSubscriptionDefinitionsInput } from "./types/ListSubscriptionDefinitionsInput";
import { ListSubscriptionDefinitionsOutput } from "./types/ListSubscriptionDefinitionsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ResetDeploymentsInput } from "./types/ResetDeploymentsInput";
import { ResetDeploymentsOutput } from "./types/ResetDeploymentsOutput";
import { StartBulkDeploymentInput } from "./types/StartBulkDeploymentInput";
import { StartBulkDeploymentOutput } from "./types/StartBulkDeploymentOutput";
import { StopBulkDeploymentInput } from "./types/StopBulkDeploymentInput";
import { StopBulkDeploymentOutput } from "./types/StopBulkDeploymentOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateConnectivityInfoInput } from "./types/UpdateConnectivityInfoInput";
import { UpdateConnectivityInfoOutput } from "./types/UpdateConnectivityInfoOutput";
import { UpdateConnectorDefinitionInput } from "./types/UpdateConnectorDefinitionInput";
import { UpdateConnectorDefinitionOutput } from "./types/UpdateConnectorDefinitionOutput";
import { UpdateCoreDefinitionInput } from "./types/UpdateCoreDefinitionInput";
import { UpdateCoreDefinitionOutput } from "./types/UpdateCoreDefinitionOutput";
import { UpdateDeviceDefinitionInput } from "./types/UpdateDeviceDefinitionInput";
import { UpdateDeviceDefinitionOutput } from "./types/UpdateDeviceDefinitionOutput";
import { UpdateFunctionDefinitionInput } from "./types/UpdateFunctionDefinitionInput";
import { UpdateFunctionDefinitionOutput } from "./types/UpdateFunctionDefinitionOutput";
import { UpdateGroupCertificateConfigurationInput } from "./types/UpdateGroupCertificateConfigurationInput";
import { UpdateGroupCertificateConfigurationOutput } from "./types/UpdateGroupCertificateConfigurationOutput";
import { UpdateGroupInput } from "./types/UpdateGroupInput";
import { UpdateGroupOutput } from "./types/UpdateGroupOutput";
import { UpdateLoggerDefinitionInput } from "./types/UpdateLoggerDefinitionInput";
import { UpdateLoggerDefinitionOutput } from "./types/UpdateLoggerDefinitionOutput";
import { UpdateResourceDefinitionInput } from "./types/UpdateResourceDefinitionInput";
import { UpdateResourceDefinitionOutput } from "./types/UpdateResourceDefinitionOutput";
import { UpdateSubscriptionDefinitionInput } from "./types/UpdateSubscriptionDefinitionInput";
import { UpdateSubscriptionDefinitionOutput } from "./types/UpdateSubscriptionDefinitionOutput";
import { AssociateRoleToGroupCommand } from "./commands/AssociateRoleToGroupCommand";
import { AssociateServiceRoleToAccountCommand } from "./commands/AssociateServiceRoleToAccountCommand";
import { CreateConnectorDefinitionCommand } from "./commands/CreateConnectorDefinitionCommand";
import { CreateConnectorDefinitionVersionCommand } from "./commands/CreateConnectorDefinitionVersionCommand";
import { CreateCoreDefinitionCommand } from "./commands/CreateCoreDefinitionCommand";
import { CreateCoreDefinitionVersionCommand } from "./commands/CreateCoreDefinitionVersionCommand";
import { CreateDeploymentCommand } from "./commands/CreateDeploymentCommand";
import { CreateDeviceDefinitionCommand } from "./commands/CreateDeviceDefinitionCommand";
import { CreateDeviceDefinitionVersionCommand } from "./commands/CreateDeviceDefinitionVersionCommand";
import { CreateFunctionDefinitionCommand } from "./commands/CreateFunctionDefinitionCommand";
import { CreateFunctionDefinitionVersionCommand } from "./commands/CreateFunctionDefinitionVersionCommand";
import { CreateGroupCertificateAuthorityCommand } from "./commands/CreateGroupCertificateAuthorityCommand";
import { CreateGroupCommand } from "./commands/CreateGroupCommand";
import { CreateGroupVersionCommand } from "./commands/CreateGroupVersionCommand";
import { CreateLoggerDefinitionCommand } from "./commands/CreateLoggerDefinitionCommand";
import { CreateLoggerDefinitionVersionCommand } from "./commands/CreateLoggerDefinitionVersionCommand";
import { CreateResourceDefinitionCommand } from "./commands/CreateResourceDefinitionCommand";
import { CreateResourceDefinitionVersionCommand } from "./commands/CreateResourceDefinitionVersionCommand";
import { CreateSoftwareUpdateJobCommand } from "./commands/CreateSoftwareUpdateJobCommand";
import { CreateSubscriptionDefinitionCommand } from "./commands/CreateSubscriptionDefinitionCommand";
import { CreateSubscriptionDefinitionVersionCommand } from "./commands/CreateSubscriptionDefinitionVersionCommand";
import { DeleteConnectorDefinitionCommand } from "./commands/DeleteConnectorDefinitionCommand";
import { DeleteCoreDefinitionCommand } from "./commands/DeleteCoreDefinitionCommand";
import { DeleteDeviceDefinitionCommand } from "./commands/DeleteDeviceDefinitionCommand";
import { DeleteFunctionDefinitionCommand } from "./commands/DeleteFunctionDefinitionCommand";
import { DeleteGroupCommand } from "./commands/DeleteGroupCommand";
import { DeleteLoggerDefinitionCommand } from "./commands/DeleteLoggerDefinitionCommand";
import { DeleteResourceDefinitionCommand } from "./commands/DeleteResourceDefinitionCommand";
import { DeleteSubscriptionDefinitionCommand } from "./commands/DeleteSubscriptionDefinitionCommand";
import { DisassociateRoleFromGroupCommand } from "./commands/DisassociateRoleFromGroupCommand";
import { DisassociateServiceRoleFromAccountCommand } from "./commands/DisassociateServiceRoleFromAccountCommand";
import { GetAssociatedRoleCommand } from "./commands/GetAssociatedRoleCommand";
import { GetBulkDeploymentStatusCommand } from "./commands/GetBulkDeploymentStatusCommand";
import { GetConnectivityInfoCommand } from "./commands/GetConnectivityInfoCommand";
import { GetConnectorDefinitionCommand } from "./commands/GetConnectorDefinitionCommand";
import { GetConnectorDefinitionVersionCommand } from "./commands/GetConnectorDefinitionVersionCommand";
import { GetCoreDefinitionCommand } from "./commands/GetCoreDefinitionCommand";
import { GetCoreDefinitionVersionCommand } from "./commands/GetCoreDefinitionVersionCommand";
import { GetDeploymentStatusCommand } from "./commands/GetDeploymentStatusCommand";
import { GetDeviceDefinitionCommand } from "./commands/GetDeviceDefinitionCommand";
import { GetDeviceDefinitionVersionCommand } from "./commands/GetDeviceDefinitionVersionCommand";
import { GetFunctionDefinitionCommand } from "./commands/GetFunctionDefinitionCommand";
import { GetFunctionDefinitionVersionCommand } from "./commands/GetFunctionDefinitionVersionCommand";
import { GetGroupCertificateAuthorityCommand } from "./commands/GetGroupCertificateAuthorityCommand";
import { GetGroupCertificateConfigurationCommand } from "./commands/GetGroupCertificateConfigurationCommand";
import { GetGroupCommand } from "./commands/GetGroupCommand";
import { GetGroupVersionCommand } from "./commands/GetGroupVersionCommand";
import { GetLoggerDefinitionCommand } from "./commands/GetLoggerDefinitionCommand";
import { GetLoggerDefinitionVersionCommand } from "./commands/GetLoggerDefinitionVersionCommand";
import { GetResourceDefinitionCommand } from "./commands/GetResourceDefinitionCommand";
import { GetResourceDefinitionVersionCommand } from "./commands/GetResourceDefinitionVersionCommand";
import { GetServiceRoleForAccountCommand } from "./commands/GetServiceRoleForAccountCommand";
import { GetSubscriptionDefinitionCommand } from "./commands/GetSubscriptionDefinitionCommand";
import { GetSubscriptionDefinitionVersionCommand } from "./commands/GetSubscriptionDefinitionVersionCommand";
import { ListBulkDeploymentDetailedReportsCommand } from "./commands/ListBulkDeploymentDetailedReportsCommand";
import { ListBulkDeploymentsCommand } from "./commands/ListBulkDeploymentsCommand";
import { ListConnectorDefinitionVersionsCommand } from "./commands/ListConnectorDefinitionVersionsCommand";
import { ListConnectorDefinitionsCommand } from "./commands/ListConnectorDefinitionsCommand";
import { ListCoreDefinitionVersionsCommand } from "./commands/ListCoreDefinitionVersionsCommand";
import { ListCoreDefinitionsCommand } from "./commands/ListCoreDefinitionsCommand";
import { ListDeploymentsCommand } from "./commands/ListDeploymentsCommand";
import { ListDeviceDefinitionVersionsCommand } from "./commands/ListDeviceDefinitionVersionsCommand";
import { ListDeviceDefinitionsCommand } from "./commands/ListDeviceDefinitionsCommand";
import { ListFunctionDefinitionVersionsCommand } from "./commands/ListFunctionDefinitionVersionsCommand";
import { ListFunctionDefinitionsCommand } from "./commands/ListFunctionDefinitionsCommand";
import { ListGroupCertificateAuthoritiesCommand } from "./commands/ListGroupCertificateAuthoritiesCommand";
import { ListGroupVersionsCommand } from "./commands/ListGroupVersionsCommand";
import { ListGroupsCommand } from "./commands/ListGroupsCommand";
import { ListLoggerDefinitionVersionsCommand } from "./commands/ListLoggerDefinitionVersionsCommand";
import { ListLoggerDefinitionsCommand } from "./commands/ListLoggerDefinitionsCommand";
import { ListResourceDefinitionVersionsCommand } from "./commands/ListResourceDefinitionVersionsCommand";
import { ListResourceDefinitionsCommand } from "./commands/ListResourceDefinitionsCommand";
import { ListSubscriptionDefinitionVersionsCommand } from "./commands/ListSubscriptionDefinitionVersionsCommand";
import { ListSubscriptionDefinitionsCommand } from "./commands/ListSubscriptionDefinitionsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ResetDeploymentsCommand } from "./commands/ResetDeploymentsCommand";
import { StartBulkDeploymentCommand } from "./commands/StartBulkDeploymentCommand";
import { StopBulkDeploymentCommand } from "./commands/StopBulkDeploymentCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateConnectivityInfoCommand } from "./commands/UpdateConnectivityInfoCommand";
import { UpdateConnectorDefinitionCommand } from "./commands/UpdateConnectorDefinitionCommand";
import { UpdateCoreDefinitionCommand } from "./commands/UpdateCoreDefinitionCommand";
import { UpdateDeviceDefinitionCommand } from "./commands/UpdateDeviceDefinitionCommand";
import { UpdateFunctionDefinitionCommand } from "./commands/UpdateFunctionDefinitionCommand";
import { UpdateGroupCertificateConfigurationCommand } from "./commands/UpdateGroupCertificateConfigurationCommand";
import { UpdateGroupCommand } from "./commands/UpdateGroupCommand";
import { UpdateLoggerDefinitionCommand } from "./commands/UpdateLoggerDefinitionCommand";
import { UpdateResourceDefinitionCommand } from "./commands/UpdateResourceDefinitionCommand";
import { UpdateSubscriptionDefinitionCommand } from "./commands/UpdateSubscriptionDefinitionCommand";

export class Greengrass extends GreengrassClient {
  /**
   * Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateRoleToGroup(
    args: AssociateRoleToGroupInput
  ): Promise<AssociateRoleToGroupOutput>;
  public associateRoleToGroup(
    args: AssociateRoleToGroupInput,
    cb: (err: any, data?: AssociateRoleToGroupOutput) => void
  ): void;
  public associateRoleToGroup(
    args: AssociateRoleToGroupInput,
    cb?: (err: any, data?: AssociateRoleToGroupOutput) => void
  ): Promise<AssociateRoleToGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateRoleToGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountInput
  ): Promise<AssociateServiceRoleToAccountOutput>;
  public associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountInput,
    cb: (err: any, data?: AssociateServiceRoleToAccountOutput) => void
  ): void;
  public associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountInput,
    cb?: (err: any, data?: AssociateServiceRoleToAccountOutput) => void
  ): Promise<AssociateServiceRoleToAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateServiceRoleToAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConnectorDefinition(
    args: CreateConnectorDefinitionInput
  ): Promise<CreateConnectorDefinitionOutput>;
  public createConnectorDefinition(
    args: CreateConnectorDefinitionInput,
    cb: (err: any, data?: CreateConnectorDefinitionOutput) => void
  ): void;
  public createConnectorDefinition(
    args: CreateConnectorDefinitionInput,
    cb?: (err: any, data?: CreateConnectorDefinitionOutput) => void
  ): Promise<CreateConnectorDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConnectorDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a version of a connector definition which has already been defined.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConnectorDefinitionVersion(
    args: CreateConnectorDefinitionVersionInput
  ): Promise<CreateConnectorDefinitionVersionOutput>;
  public createConnectorDefinitionVersion(
    args: CreateConnectorDefinitionVersionInput,
    cb: (err: any, data?: CreateConnectorDefinitionVersionOutput) => void
  ): void;
  public createConnectorDefinitionVersion(
    args: CreateConnectorDefinitionVersionInput,
    cb?: (err: any, data?: CreateConnectorDefinitionVersionOutput) => void
  ): Promise<CreateConnectorDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConnectorDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCoreDefinition(
    args: CreateCoreDefinitionInput
  ): Promise<CreateCoreDefinitionOutput>;
  public createCoreDefinition(
    args: CreateCoreDefinitionInput,
    cb: (err: any, data?: CreateCoreDefinitionOutput) => void
  ): void;
  public createCoreDefinition(
    args: CreateCoreDefinitionInput,
    cb?: (err: any, data?: CreateCoreDefinitionOutput) => void
  ): Promise<CreateCoreDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCoreDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCoreDefinitionVersion(
    args: CreateCoreDefinitionVersionInput
  ): Promise<CreateCoreDefinitionVersionOutput>;
  public createCoreDefinitionVersion(
    args: CreateCoreDefinitionVersionInput,
    cb: (err: any, data?: CreateCoreDefinitionVersionOutput) => void
  ): void;
  public createCoreDefinitionVersion(
    args: CreateCoreDefinitionVersionInput,
    cb?: (err: any, data?: CreateCoreDefinitionVersionOutput) => void
  ): Promise<CreateCoreDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCoreDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDeployment(
    args: CreateDeploymentInput
  ): Promise<CreateDeploymentOutput>;
  public createDeployment(
    args: CreateDeploymentInput,
    cb: (err: any, data?: CreateDeploymentOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentInput,
    cb?: (err: any, data?: CreateDeploymentOutput) => void
  ): Promise<CreateDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDeviceDefinition(
    args: CreateDeviceDefinitionInput
  ): Promise<CreateDeviceDefinitionOutput>;
  public createDeviceDefinition(
    args: CreateDeviceDefinitionInput,
    cb: (err: any, data?: CreateDeviceDefinitionOutput) => void
  ): void;
  public createDeviceDefinition(
    args: CreateDeviceDefinitionInput,
    cb?: (err: any, data?: CreateDeviceDefinitionOutput) => void
  ): Promise<CreateDeviceDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDeviceDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a version of a device definition that has already been defined.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDeviceDefinitionVersion(
    args: CreateDeviceDefinitionVersionInput
  ): Promise<CreateDeviceDefinitionVersionOutput>;
  public createDeviceDefinitionVersion(
    args: CreateDeviceDefinitionVersionInput,
    cb: (err: any, data?: CreateDeviceDefinitionVersionOutput) => void
  ): void;
  public createDeviceDefinitionVersion(
    args: CreateDeviceDefinitionVersionInput,
    cb?: (err: any, data?: CreateDeviceDefinitionVersionOutput) => void
  ): Promise<CreateDeviceDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDeviceDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFunctionDefinition(
    args: CreateFunctionDefinitionInput
  ): Promise<CreateFunctionDefinitionOutput>;
  public createFunctionDefinition(
    args: CreateFunctionDefinitionInput,
    cb: (err: any, data?: CreateFunctionDefinitionOutput) => void
  ): void;
  public createFunctionDefinition(
    args: CreateFunctionDefinitionInput,
    cb?: (err: any, data?: CreateFunctionDefinitionOutput) => void
  ): Promise<CreateFunctionDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFunctionDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a version of a Lambda function definition that has already been defined.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFunctionDefinitionVersion(
    args: CreateFunctionDefinitionVersionInput
  ): Promise<CreateFunctionDefinitionVersionOutput>;
  public createFunctionDefinitionVersion(
    args: CreateFunctionDefinitionVersionInput,
    cb: (err: any, data?: CreateFunctionDefinitionVersionOutput) => void
  ): void;
  public createFunctionDefinitionVersion(
    args: CreateFunctionDefinitionVersionInput,
    cb?: (err: any, data?: CreateFunctionDefinitionVersionOutput) => void
  ): Promise<CreateFunctionDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFunctionDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGroup(args: CreateGroupInput): Promise<CreateGroupOutput>;
  public createGroup(
    args: CreateGroupInput,
    cb: (err: any, data?: CreateGroupOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupInput,
    cb?: (err: any, data?: CreateGroupOutput) => void
  ): Promise<CreateGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGroupCertificateAuthority(
    args: CreateGroupCertificateAuthorityInput
  ): Promise<CreateGroupCertificateAuthorityOutput>;
  public createGroupCertificateAuthority(
    args: CreateGroupCertificateAuthorityInput,
    cb: (err: any, data?: CreateGroupCertificateAuthorityOutput) => void
  ): void;
  public createGroupCertificateAuthority(
    args: CreateGroupCertificateAuthorityInput,
    cb?: (err: any, data?: CreateGroupCertificateAuthorityOutput) => void
  ): Promise<CreateGroupCertificateAuthorityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGroupCertificateAuthorityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a version of a group which has already been defined.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGroupVersion(
    args: CreateGroupVersionInput
  ): Promise<CreateGroupVersionOutput>;
  public createGroupVersion(
    args: CreateGroupVersionInput,
    cb: (err: any, data?: CreateGroupVersionOutput) => void
  ): void;
  public createGroupVersion(
    args: CreateGroupVersionInput,
    cb?: (err: any, data?: CreateGroupVersionOutput) => void
  ): Promise<CreateGroupVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGroupVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLoggerDefinition(
    args: CreateLoggerDefinitionInput
  ): Promise<CreateLoggerDefinitionOutput>;
  public createLoggerDefinition(
    args: CreateLoggerDefinitionInput,
    cb: (err: any, data?: CreateLoggerDefinitionOutput) => void
  ): void;
  public createLoggerDefinition(
    args: CreateLoggerDefinitionInput,
    cb?: (err: any, data?: CreateLoggerDefinitionOutput) => void
  ): Promise<CreateLoggerDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLoggerDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a version of a logger definition that has already been defined.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLoggerDefinitionVersion(
    args: CreateLoggerDefinitionVersionInput
  ): Promise<CreateLoggerDefinitionVersionOutput>;
  public createLoggerDefinitionVersion(
    args: CreateLoggerDefinitionVersionInput,
    cb: (err: any, data?: CreateLoggerDefinitionVersionOutput) => void
  ): void;
  public createLoggerDefinitionVersion(
    args: CreateLoggerDefinitionVersionInput,
    cb?: (err: any, data?: CreateLoggerDefinitionVersionOutput) => void
  ): Promise<CreateLoggerDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLoggerDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createResourceDefinition(
    args: CreateResourceDefinitionInput
  ): Promise<CreateResourceDefinitionOutput>;
  public createResourceDefinition(
    args: CreateResourceDefinitionInput,
    cb: (err: any, data?: CreateResourceDefinitionOutput) => void
  ): void;
  public createResourceDefinition(
    args: CreateResourceDefinitionInput,
    cb?: (err: any, data?: CreateResourceDefinitionOutput) => void
  ): Promise<CreateResourceDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateResourceDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a version of a resource definition that has already been defined.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createResourceDefinitionVersion(
    args: CreateResourceDefinitionVersionInput
  ): Promise<CreateResourceDefinitionVersionOutput>;
  public createResourceDefinitionVersion(
    args: CreateResourceDefinitionVersionInput,
    cb: (err: any, data?: CreateResourceDefinitionVersionOutput) => void
  ): void;
  public createResourceDefinitionVersion(
    args: CreateResourceDefinitionVersionInput,
    cb?: (err: any, data?: CreateResourceDefinitionVersionOutput) => void
  ): Promise<CreateResourceDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateResourceDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSoftwareUpdateJob(
    args: CreateSoftwareUpdateJobInput
  ): Promise<CreateSoftwareUpdateJobOutput>;
  public createSoftwareUpdateJob(
    args: CreateSoftwareUpdateJobInput,
    cb: (err: any, data?: CreateSoftwareUpdateJobOutput) => void
  ): void;
  public createSoftwareUpdateJob(
    args: CreateSoftwareUpdateJobInput,
    cb?: (err: any, data?: CreateSoftwareUpdateJobOutput) => void
  ): Promise<CreateSoftwareUpdateJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSoftwareUpdateJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSubscriptionDefinition(
    args: CreateSubscriptionDefinitionInput
  ): Promise<CreateSubscriptionDefinitionOutput>;
  public createSubscriptionDefinition(
    args: CreateSubscriptionDefinitionInput,
    cb: (err: any, data?: CreateSubscriptionDefinitionOutput) => void
  ): void;
  public createSubscriptionDefinition(
    args: CreateSubscriptionDefinitionInput,
    cb?: (err: any, data?: CreateSubscriptionDefinitionOutput) => void
  ): Promise<CreateSubscriptionDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSubscriptionDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a version of a subscription definition which has already been defined.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSubscriptionDefinitionVersion(
    args: CreateSubscriptionDefinitionVersionInput
  ): Promise<CreateSubscriptionDefinitionVersionOutput>;
  public createSubscriptionDefinitionVersion(
    args: CreateSubscriptionDefinitionVersionInput,
    cb: (err: any, data?: CreateSubscriptionDefinitionVersionOutput) => void
  ): void;
  public createSubscriptionDefinitionVersion(
    args: CreateSubscriptionDefinitionVersionInput,
    cb?: (err: any, data?: CreateSubscriptionDefinitionVersionOutput) => void
  ): Promise<CreateSubscriptionDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSubscriptionDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes a connector definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConnectorDefinition(
    args: DeleteConnectorDefinitionInput
  ): Promise<DeleteConnectorDefinitionOutput>;
  public deleteConnectorDefinition(
    args: DeleteConnectorDefinitionInput,
    cb: (err: any, data?: DeleteConnectorDefinitionOutput) => void
  ): void;
  public deleteConnectorDefinition(
    args: DeleteConnectorDefinitionInput,
    cb?: (err: any, data?: DeleteConnectorDefinitionOutput) => void
  ): Promise<DeleteConnectorDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConnectorDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes a core definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCoreDefinition(
    args: DeleteCoreDefinitionInput
  ): Promise<DeleteCoreDefinitionOutput>;
  public deleteCoreDefinition(
    args: DeleteCoreDefinitionInput,
    cb: (err: any, data?: DeleteCoreDefinitionOutput) => void
  ): void;
  public deleteCoreDefinition(
    args: DeleteCoreDefinitionInput,
    cb?: (err: any, data?: DeleteCoreDefinitionOutput) => void
  ): Promise<DeleteCoreDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCoreDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes a device definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDeviceDefinition(
    args: DeleteDeviceDefinitionInput
  ): Promise<DeleteDeviceDefinitionOutput>;
  public deleteDeviceDefinition(
    args: DeleteDeviceDefinitionInput,
    cb: (err: any, data?: DeleteDeviceDefinitionOutput) => void
  ): void;
  public deleteDeviceDefinition(
    args: DeleteDeviceDefinitionInput,
    cb?: (err: any, data?: DeleteDeviceDefinitionOutput) => void
  ): Promise<DeleteDeviceDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDeviceDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes a Lambda function definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFunctionDefinition(
    args: DeleteFunctionDefinitionInput
  ): Promise<DeleteFunctionDefinitionOutput>;
  public deleteFunctionDefinition(
    args: DeleteFunctionDefinitionInput,
    cb: (err: any, data?: DeleteFunctionDefinitionOutput) => void
  ): void;
  public deleteFunctionDefinition(
    args: DeleteFunctionDefinitionInput,
    cb?: (err: any, data?: DeleteFunctionDefinitionOutput) => void
  ): Promise<DeleteFunctionDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFunctionDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes a group.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGroup(args: DeleteGroupInput): Promise<DeleteGroupOutput>;
  public deleteGroup(
    args: DeleteGroupInput,
    cb: (err: any, data?: DeleteGroupOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupInput,
    cb?: (err: any, data?: DeleteGroupOutput) => void
  ): Promise<DeleteGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes a logger definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLoggerDefinition(
    args: DeleteLoggerDefinitionInput
  ): Promise<DeleteLoggerDefinitionOutput>;
  public deleteLoggerDefinition(
    args: DeleteLoggerDefinitionInput,
    cb: (err: any, data?: DeleteLoggerDefinitionOutput) => void
  ): void;
  public deleteLoggerDefinition(
    args: DeleteLoggerDefinitionInput,
    cb?: (err: any, data?: DeleteLoggerDefinitionOutput) => void
  ): Promise<DeleteLoggerDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLoggerDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes a resource definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteResourceDefinition(
    args: DeleteResourceDefinitionInput
  ): Promise<DeleteResourceDefinitionOutput>;
  public deleteResourceDefinition(
    args: DeleteResourceDefinitionInput,
    cb: (err: any, data?: DeleteResourceDefinitionOutput) => void
  ): void;
  public deleteResourceDefinition(
    args: DeleteResourceDefinitionInput,
    cb?: (err: any, data?: DeleteResourceDefinitionOutput) => void
  ): Promise<DeleteResourceDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteResourceDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes a subscription definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSubscriptionDefinition(
    args: DeleteSubscriptionDefinitionInput
  ): Promise<DeleteSubscriptionDefinitionOutput>;
  public deleteSubscriptionDefinition(
    args: DeleteSubscriptionDefinitionInput,
    cb: (err: any, data?: DeleteSubscriptionDefinitionOutput) => void
  ): void;
  public deleteSubscriptionDefinition(
    args: DeleteSubscriptionDefinitionInput,
    cb?: (err: any, data?: DeleteSubscriptionDefinitionOutput) => void
  ): Promise<DeleteSubscriptionDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSubscriptionDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Disassociates the role from a group.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateRoleFromGroup(
    args: DisassociateRoleFromGroupInput
  ): Promise<DisassociateRoleFromGroupOutput>;
  public disassociateRoleFromGroup(
    args: DisassociateRoleFromGroupInput,
    cb: (err: any, data?: DisassociateRoleFromGroupOutput) => void
  ): void;
  public disassociateRoleFromGroup(
    args: DisassociateRoleFromGroupInput,
    cb?: (err: any, data?: DisassociateRoleFromGroupOutput) => void
  ): Promise<DisassociateRoleFromGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateRoleFromGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Disassociates the service role from your account. Without a service role, deployments will not work.
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountInput
  ): Promise<DisassociateServiceRoleFromAccountOutput>;
  public disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountInput,
    cb: (err: any, data?: DisassociateServiceRoleFromAccountOutput) => void
  ): void;
  public disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountInput,
    cb?: (err: any, data?: DisassociateServiceRoleFromAccountOutput) => void
  ): Promise<DisassociateServiceRoleFromAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateServiceRoleFromAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves the role associated with a particular group.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAssociatedRole(
    args: GetAssociatedRoleInput
  ): Promise<GetAssociatedRoleOutput>;
  public getAssociatedRole(
    args: GetAssociatedRoleInput,
    cb: (err: any, data?: GetAssociatedRoleOutput) => void
  ): void;
  public getAssociatedRole(
    args: GetAssociatedRoleInput,
    cb?: (err: any, data?: GetAssociatedRoleOutput) => void
  ): Promise<GetAssociatedRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAssociatedRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns the status of a bulk deployment.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBulkDeploymentStatus(
    args: GetBulkDeploymentStatusInput
  ): Promise<GetBulkDeploymentStatusOutput>;
  public getBulkDeploymentStatus(
    args: GetBulkDeploymentStatusInput,
    cb: (err: any, data?: GetBulkDeploymentStatusOutput) => void
  ): void;
  public getBulkDeploymentStatus(
    args: GetBulkDeploymentStatusInput,
    cb?: (err: any, data?: GetBulkDeploymentStatusOutput) => void
  ): Promise<GetBulkDeploymentStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBulkDeploymentStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves the connectivity information for a core.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConnectivityInfo(
    args: GetConnectivityInfoInput
  ): Promise<GetConnectivityInfoOutput>;
  public getConnectivityInfo(
    args: GetConnectivityInfoInput,
    cb: (err: any, data?: GetConnectivityInfoOutput) => void
  ): void;
  public getConnectivityInfo(
    args: GetConnectivityInfoInput,
    cb?: (err: any, data?: GetConnectivityInfoOutput) => void
  ): Promise<GetConnectivityInfoOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConnectivityInfoCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a connector definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConnectorDefinition(
    args: GetConnectorDefinitionInput
  ): Promise<GetConnectorDefinitionOutput>;
  public getConnectorDefinition(
    args: GetConnectorDefinitionInput,
    cb: (err: any, data?: GetConnectorDefinitionOutput) => void
  ): void;
  public getConnectorDefinition(
    args: GetConnectorDefinitionInput,
    cb?: (err: any, data?: GetConnectorDefinitionOutput) => void
  ): Promise<GetConnectorDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConnectorDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConnectorDefinitionVersion(
    args: GetConnectorDefinitionVersionInput
  ): Promise<GetConnectorDefinitionVersionOutput>;
  public getConnectorDefinitionVersion(
    args: GetConnectorDefinitionVersionInput,
    cb: (err: any, data?: GetConnectorDefinitionVersionOutput) => void
  ): void;
  public getConnectorDefinitionVersion(
    args: GetConnectorDefinitionVersionInput,
    cb?: (err: any, data?: GetConnectorDefinitionVersionOutput) => void
  ): Promise<GetConnectorDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConnectorDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a core definition version.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCoreDefinition(
    args: GetCoreDefinitionInput
  ): Promise<GetCoreDefinitionOutput>;
  public getCoreDefinition(
    args: GetCoreDefinitionInput,
    cb: (err: any, data?: GetCoreDefinitionOutput) => void
  ): void;
  public getCoreDefinition(
    args: GetCoreDefinitionInput,
    cb?: (err: any, data?: GetCoreDefinitionOutput) => void
  ): Promise<GetCoreDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCoreDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a core definition version.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCoreDefinitionVersion(
    args: GetCoreDefinitionVersionInput
  ): Promise<GetCoreDefinitionVersionOutput>;
  public getCoreDefinitionVersion(
    args: GetCoreDefinitionVersionInput,
    cb: (err: any, data?: GetCoreDefinitionVersionOutput) => void
  ): void;
  public getCoreDefinitionVersion(
    args: GetCoreDefinitionVersionInput,
    cb?: (err: any, data?: GetCoreDefinitionVersionOutput) => void
  ): Promise<GetCoreDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCoreDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns the status of a deployment.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeploymentStatus(
    args: GetDeploymentStatusInput
  ): Promise<GetDeploymentStatusOutput>;
  public getDeploymentStatus(
    args: GetDeploymentStatusInput,
    cb: (err: any, data?: GetDeploymentStatusOutput) => void
  ): void;
  public getDeploymentStatus(
    args: GetDeploymentStatusInput,
    cb?: (err: any, data?: GetDeploymentStatusOutput) => void
  ): Promise<GetDeploymentStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeploymentStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a device definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeviceDefinition(
    args: GetDeviceDefinitionInput
  ): Promise<GetDeviceDefinitionOutput>;
  public getDeviceDefinition(
    args: GetDeviceDefinitionInput,
    cb: (err: any, data?: GetDeviceDefinitionOutput) => void
  ): void;
  public getDeviceDefinition(
    args: GetDeviceDefinitionInput,
    cb?: (err: any, data?: GetDeviceDefinitionOutput) => void
  ): Promise<GetDeviceDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeviceDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a device definition version.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeviceDefinitionVersion(
    args: GetDeviceDefinitionVersionInput
  ): Promise<GetDeviceDefinitionVersionOutput>;
  public getDeviceDefinitionVersion(
    args: GetDeviceDefinitionVersionInput,
    cb: (err: any, data?: GetDeviceDefinitionVersionOutput) => void
  ): void;
  public getDeviceDefinitionVersion(
    args: GetDeviceDefinitionVersionInput,
    cb?: (err: any, data?: GetDeviceDefinitionVersionOutput) => void
  ): Promise<GetDeviceDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeviceDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a Lambda function definition, including its creation time and latest version.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFunctionDefinition(
    args: GetFunctionDefinitionInput
  ): Promise<GetFunctionDefinitionOutput>;
  public getFunctionDefinition(
    args: GetFunctionDefinitionInput,
    cb: (err: any, data?: GetFunctionDefinitionOutput) => void
  ): void;
  public getFunctionDefinition(
    args: GetFunctionDefinitionInput,
    cb?: (err: any, data?: GetFunctionDefinitionOutput) => void
  ): Promise<GetFunctionDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFunctionDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFunctionDefinitionVersion(
    args: GetFunctionDefinitionVersionInput
  ): Promise<GetFunctionDefinitionVersionOutput>;
  public getFunctionDefinitionVersion(
    args: GetFunctionDefinitionVersionInput,
    cb: (err: any, data?: GetFunctionDefinitionVersionOutput) => void
  ): void;
  public getFunctionDefinitionVersion(
    args: GetFunctionDefinitionVersionInput,
    cb?: (err: any, data?: GetFunctionDefinitionVersionOutput) => void
  ): Promise<GetFunctionDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFunctionDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a group.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGroup(args: GetGroupInput): Promise<GetGroupOutput>;
  public getGroup(
    args: GetGroupInput,
    cb: (err: any, data?: GetGroupOutput) => void
  ): void;
  public getGroup(
    args: GetGroupInput,
    cb?: (err: any, data?: GetGroupOutput) => void
  ): Promise<GetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retreives the CA associated with a group. Returns the public key of the CA.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGroupCertificateAuthority(
    args: GetGroupCertificateAuthorityInput
  ): Promise<GetGroupCertificateAuthorityOutput>;
  public getGroupCertificateAuthority(
    args: GetGroupCertificateAuthorityInput,
    cb: (err: any, data?: GetGroupCertificateAuthorityOutput) => void
  ): void;
  public getGroupCertificateAuthority(
    args: GetGroupCertificateAuthorityInput,
    cb?: (err: any, data?: GetGroupCertificateAuthorityOutput) => void
  ): Promise<GetGroupCertificateAuthorityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGroupCertificateAuthorityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves the current configuration for the CA used by the group.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGroupCertificateConfiguration(
    args: GetGroupCertificateConfigurationInput
  ): Promise<GetGroupCertificateConfigurationOutput>;
  public getGroupCertificateConfiguration(
    args: GetGroupCertificateConfigurationInput,
    cb: (err: any, data?: GetGroupCertificateConfigurationOutput) => void
  ): void;
  public getGroupCertificateConfiguration(
    args: GetGroupCertificateConfigurationInput,
    cb?: (err: any, data?: GetGroupCertificateConfigurationOutput) => void
  ): Promise<GetGroupCertificateConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGroupCertificateConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a group version.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGroupVersion(
    args: GetGroupVersionInput
  ): Promise<GetGroupVersionOutput>;
  public getGroupVersion(
    args: GetGroupVersionInput,
    cb: (err: any, data?: GetGroupVersionOutput) => void
  ): void;
  public getGroupVersion(
    args: GetGroupVersionInput,
    cb?: (err: any, data?: GetGroupVersionOutput) => void
  ): Promise<GetGroupVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGroupVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a logger definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLoggerDefinition(
    args: GetLoggerDefinitionInput
  ): Promise<GetLoggerDefinitionOutput>;
  public getLoggerDefinition(
    args: GetLoggerDefinitionInput,
    cb: (err: any, data?: GetLoggerDefinitionOutput) => void
  ): void;
  public getLoggerDefinition(
    args: GetLoggerDefinitionInput,
    cb?: (err: any, data?: GetLoggerDefinitionOutput) => void
  ): Promise<GetLoggerDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLoggerDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a logger definition version.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLoggerDefinitionVersion(
    args: GetLoggerDefinitionVersionInput
  ): Promise<GetLoggerDefinitionVersionOutput>;
  public getLoggerDefinitionVersion(
    args: GetLoggerDefinitionVersionInput,
    cb: (err: any, data?: GetLoggerDefinitionVersionOutput) => void
  ): void;
  public getLoggerDefinitionVersion(
    args: GetLoggerDefinitionVersionInput,
    cb?: (err: any, data?: GetLoggerDefinitionVersionOutput) => void
  ): Promise<GetLoggerDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLoggerDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a resource definition, including its creation time and latest version.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResourceDefinition(
    args: GetResourceDefinitionInput
  ): Promise<GetResourceDefinitionOutput>;
  public getResourceDefinition(
    args: GetResourceDefinitionInput,
    cb: (err: any, data?: GetResourceDefinitionOutput) => void
  ): void;
  public getResourceDefinition(
    args: GetResourceDefinitionInput,
    cb?: (err: any, data?: GetResourceDefinitionOutput) => void
  ): Promise<GetResourceDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResourceDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a resource definition version, including which resources are included in the version.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResourceDefinitionVersion(
    args: GetResourceDefinitionVersionInput
  ): Promise<GetResourceDefinitionVersionOutput>;
  public getResourceDefinitionVersion(
    args: GetResourceDefinitionVersionInput,
    cb: (err: any, data?: GetResourceDefinitionVersionOutput) => void
  ): void;
  public getResourceDefinitionVersion(
    args: GetResourceDefinitionVersionInput,
    cb?: (err: any, data?: GetResourceDefinitionVersionOutput) => void
  ): Promise<GetResourceDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResourceDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves the service role that is attached to your account.
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getServiceRoleForAccount(
    args: GetServiceRoleForAccountInput
  ): Promise<GetServiceRoleForAccountOutput>;
  public getServiceRoleForAccount(
    args: GetServiceRoleForAccountInput,
    cb: (err: any, data?: GetServiceRoleForAccountOutput) => void
  ): void;
  public getServiceRoleForAccount(
    args: GetServiceRoleForAccountInput,
    cb?: (err: any, data?: GetServiceRoleForAccountOutput) => void
  ): Promise<GetServiceRoleForAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetServiceRoleForAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a subscription definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSubscriptionDefinition(
    args: GetSubscriptionDefinitionInput
  ): Promise<GetSubscriptionDefinitionOutput>;
  public getSubscriptionDefinition(
    args: GetSubscriptionDefinitionInput,
    cb: (err: any, data?: GetSubscriptionDefinitionOutput) => void
  ): void;
  public getSubscriptionDefinition(
    args: GetSubscriptionDefinitionInput,
    cb?: (err: any, data?: GetSubscriptionDefinitionOutput) => void
  ): Promise<GetSubscriptionDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSubscriptionDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves information about a subscription definition version.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSubscriptionDefinitionVersion(
    args: GetSubscriptionDefinitionVersionInput
  ): Promise<GetSubscriptionDefinitionVersionOutput>;
  public getSubscriptionDefinitionVersion(
    args: GetSubscriptionDefinitionVersionInput,
    cb: (err: any, data?: GetSubscriptionDefinitionVersionOutput) => void
  ): void;
  public getSubscriptionDefinitionVersion(
    args: GetSubscriptionDefinitionVersionInput,
    cb?: (err: any, data?: GetSubscriptionDefinitionVersionOutput) => void
  ): Promise<GetSubscriptionDefinitionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSubscriptionDefinitionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBulkDeploymentDetailedReports(
    args: ListBulkDeploymentDetailedReportsInput
  ): Promise<ListBulkDeploymentDetailedReportsOutput>;
  public listBulkDeploymentDetailedReports(
    args: ListBulkDeploymentDetailedReportsInput,
    cb: (err: any, data?: ListBulkDeploymentDetailedReportsOutput) => void
  ): void;
  public listBulkDeploymentDetailedReports(
    args: ListBulkDeploymentDetailedReportsInput,
    cb?: (err: any, data?: ListBulkDeploymentDetailedReportsOutput) => void
  ): Promise<ListBulkDeploymentDetailedReportsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBulkDeploymentDetailedReportsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns a list of bulk deployments.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBulkDeployments(
    args: ListBulkDeploymentsInput
  ): Promise<ListBulkDeploymentsOutput>;
  public listBulkDeployments(
    args: ListBulkDeploymentsInput,
    cb: (err: any, data?: ListBulkDeploymentsOutput) => void
  ): void;
  public listBulkDeployments(
    args: ListBulkDeploymentsInput,
    cb?: (err: any, data?: ListBulkDeploymentsOutput) => void
  ): Promise<ListBulkDeploymentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBulkDeploymentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listConnectorDefinitionVersions(
    args: ListConnectorDefinitionVersionsInput
  ): Promise<ListConnectorDefinitionVersionsOutput>;
  public listConnectorDefinitionVersions(
    args: ListConnectorDefinitionVersionsInput,
    cb: (err: any, data?: ListConnectorDefinitionVersionsOutput) => void
  ): void;
  public listConnectorDefinitionVersions(
    args: ListConnectorDefinitionVersionsInput,
    cb?: (err: any, data?: ListConnectorDefinitionVersionsOutput) => void
  ): Promise<ListConnectorDefinitionVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListConnectorDefinitionVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves a list of connector definitions.
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listConnectorDefinitions(
    args: ListConnectorDefinitionsInput
  ): Promise<ListConnectorDefinitionsOutput>;
  public listConnectorDefinitions(
    args: ListConnectorDefinitionsInput,
    cb: (err: any, data?: ListConnectorDefinitionsOutput) => void
  ): void;
  public listConnectorDefinitions(
    args: ListConnectorDefinitionsInput,
    cb?: (err: any, data?: ListConnectorDefinitionsOutput) => void
  ): Promise<ListConnectorDefinitionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListConnectorDefinitionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Lists the versions of a core definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCoreDefinitionVersions(
    args: ListCoreDefinitionVersionsInput
  ): Promise<ListCoreDefinitionVersionsOutput>;
  public listCoreDefinitionVersions(
    args: ListCoreDefinitionVersionsInput,
    cb: (err: any, data?: ListCoreDefinitionVersionsOutput) => void
  ): void;
  public listCoreDefinitionVersions(
    args: ListCoreDefinitionVersionsInput,
    cb?: (err: any, data?: ListCoreDefinitionVersionsOutput) => void
  ): Promise<ListCoreDefinitionVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCoreDefinitionVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves a list of core definitions.
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCoreDefinitions(
    args: ListCoreDefinitionsInput
  ): Promise<ListCoreDefinitionsOutput>;
  public listCoreDefinitions(
    args: ListCoreDefinitionsInput,
    cb: (err: any, data?: ListCoreDefinitionsOutput) => void
  ): void;
  public listCoreDefinitions(
    args: ListCoreDefinitionsInput,
    cb?: (err: any, data?: ListCoreDefinitionsOutput) => void
  ): Promise<ListCoreDefinitionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCoreDefinitionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns a history of deployments for the group.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDeployments(
    args: ListDeploymentsInput
  ): Promise<ListDeploymentsOutput>;
  public listDeployments(
    args: ListDeploymentsInput,
    cb: (err: any, data?: ListDeploymentsOutput) => void
  ): void;
  public listDeployments(
    args: ListDeploymentsInput,
    cb?: (err: any, data?: ListDeploymentsOutput) => void
  ): Promise<ListDeploymentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDeploymentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Lists the versions of a device definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDeviceDefinitionVersions(
    args: ListDeviceDefinitionVersionsInput
  ): Promise<ListDeviceDefinitionVersionsOutput>;
  public listDeviceDefinitionVersions(
    args: ListDeviceDefinitionVersionsInput,
    cb: (err: any, data?: ListDeviceDefinitionVersionsOutput) => void
  ): void;
  public listDeviceDefinitionVersions(
    args: ListDeviceDefinitionVersionsInput,
    cb?: (err: any, data?: ListDeviceDefinitionVersionsOutput) => void
  ): Promise<ListDeviceDefinitionVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDeviceDefinitionVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves a list of device definitions.
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDeviceDefinitions(
    args: ListDeviceDefinitionsInput
  ): Promise<ListDeviceDefinitionsOutput>;
  public listDeviceDefinitions(
    args: ListDeviceDefinitionsInput,
    cb: (err: any, data?: ListDeviceDefinitionsOutput) => void
  ): void;
  public listDeviceDefinitions(
    args: ListDeviceDefinitionsInput,
    cb?: (err: any, data?: ListDeviceDefinitionsOutput) => void
  ): Promise<ListDeviceDefinitionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDeviceDefinitionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Lists the versions of a Lambda function definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFunctionDefinitionVersions(
    args: ListFunctionDefinitionVersionsInput
  ): Promise<ListFunctionDefinitionVersionsOutput>;
  public listFunctionDefinitionVersions(
    args: ListFunctionDefinitionVersionsInput,
    cb: (err: any, data?: ListFunctionDefinitionVersionsOutput) => void
  ): void;
  public listFunctionDefinitionVersions(
    args: ListFunctionDefinitionVersionsInput,
    cb?: (err: any, data?: ListFunctionDefinitionVersionsOutput) => void
  ): Promise<ListFunctionDefinitionVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFunctionDefinitionVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves a list of Lambda function definitions.
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFunctionDefinitions(
    args: ListFunctionDefinitionsInput
  ): Promise<ListFunctionDefinitionsOutput>;
  public listFunctionDefinitions(
    args: ListFunctionDefinitionsInput,
    cb: (err: any, data?: ListFunctionDefinitionsOutput) => void
  ): void;
  public listFunctionDefinitions(
    args: ListFunctionDefinitionsInput,
    cb?: (err: any, data?: ListFunctionDefinitionsOutput) => void
  ): Promise<ListFunctionDefinitionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFunctionDefinitionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves the current CAs for a group.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGroupCertificateAuthorities(
    args: ListGroupCertificateAuthoritiesInput
  ): Promise<ListGroupCertificateAuthoritiesOutput>;
  public listGroupCertificateAuthorities(
    args: ListGroupCertificateAuthoritiesInput,
    cb: (err: any, data?: ListGroupCertificateAuthoritiesOutput) => void
  ): void;
  public listGroupCertificateAuthorities(
    args: ListGroupCertificateAuthoritiesInput,
    cb?: (err: any, data?: ListGroupCertificateAuthoritiesOutput) => void
  ): Promise<ListGroupCertificateAuthoritiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGroupCertificateAuthoritiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Lists the versions of a group.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGroupVersions(
    args: ListGroupVersionsInput
  ): Promise<ListGroupVersionsOutput>;
  public listGroupVersions(
    args: ListGroupVersionsInput,
    cb: (err: any, data?: ListGroupVersionsOutput) => void
  ): void;
  public listGroupVersions(
    args: ListGroupVersionsInput,
    cb?: (err: any, data?: ListGroupVersionsOutput) => void
  ): Promise<ListGroupVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGroupVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves a list of groups.
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGroups(args: ListGroupsInput): Promise<ListGroupsOutput>;
  public listGroups(
    args: ListGroupsInput,
    cb: (err: any, data?: ListGroupsOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsInput,
    cb?: (err: any, data?: ListGroupsOutput) => void
  ): Promise<ListGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Lists the versions of a logger definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLoggerDefinitionVersions(
    args: ListLoggerDefinitionVersionsInput
  ): Promise<ListLoggerDefinitionVersionsOutput>;
  public listLoggerDefinitionVersions(
    args: ListLoggerDefinitionVersionsInput,
    cb: (err: any, data?: ListLoggerDefinitionVersionsOutput) => void
  ): void;
  public listLoggerDefinitionVersions(
    args: ListLoggerDefinitionVersionsInput,
    cb?: (err: any, data?: ListLoggerDefinitionVersionsOutput) => void
  ): Promise<ListLoggerDefinitionVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLoggerDefinitionVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves a list of logger definitions.
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLoggerDefinitions(
    args: ListLoggerDefinitionsInput
  ): Promise<ListLoggerDefinitionsOutput>;
  public listLoggerDefinitions(
    args: ListLoggerDefinitionsInput,
    cb: (err: any, data?: ListLoggerDefinitionsOutput) => void
  ): void;
  public listLoggerDefinitions(
    args: ListLoggerDefinitionsInput,
    cb?: (err: any, data?: ListLoggerDefinitionsOutput) => void
  ): Promise<ListLoggerDefinitionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLoggerDefinitionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Lists the versions of a resource definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResourceDefinitionVersions(
    args: ListResourceDefinitionVersionsInput
  ): Promise<ListResourceDefinitionVersionsOutput>;
  public listResourceDefinitionVersions(
    args: ListResourceDefinitionVersionsInput,
    cb: (err: any, data?: ListResourceDefinitionVersionsOutput) => void
  ): void;
  public listResourceDefinitionVersions(
    args: ListResourceDefinitionVersionsInput,
    cb?: (err: any, data?: ListResourceDefinitionVersionsOutput) => void
  ): Promise<ListResourceDefinitionVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResourceDefinitionVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves a list of resource definitions.
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResourceDefinitions(
    args: ListResourceDefinitionsInput
  ): Promise<ListResourceDefinitionsOutput>;
  public listResourceDefinitions(
    args: ListResourceDefinitionsInput,
    cb: (err: any, data?: ListResourceDefinitionsOutput) => void
  ): void;
  public listResourceDefinitions(
    args: ListResourceDefinitionsInput,
    cb?: (err: any, data?: ListResourceDefinitionsOutput) => void
  ): Promise<ListResourceDefinitionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResourceDefinitionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Lists the versions of a subscription definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSubscriptionDefinitionVersions(
    args: ListSubscriptionDefinitionVersionsInput
  ): Promise<ListSubscriptionDefinitionVersionsOutput>;
  public listSubscriptionDefinitionVersions(
    args: ListSubscriptionDefinitionVersionsInput,
    cb: (err: any, data?: ListSubscriptionDefinitionVersionsOutput) => void
  ): void;
  public listSubscriptionDefinitionVersions(
    args: ListSubscriptionDefinitionVersionsInput,
    cb?: (err: any, data?: ListSubscriptionDefinitionVersionsOutput) => void
  ): Promise<ListSubscriptionDefinitionVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSubscriptionDefinitionVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves a list of subscription definitions.
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSubscriptionDefinitions(
    args: ListSubscriptionDefinitionsInput
  ): Promise<ListSubscriptionDefinitionsOutput>;
  public listSubscriptionDefinitions(
    args: ListSubscriptionDefinitionsInput,
    cb: (err: any, data?: ListSubscriptionDefinitionsOutput) => void
  ): void;
  public listSubscriptionDefinitions(
    args: ListSubscriptionDefinitionsInput,
    cb?: (err: any, data?: ListSubscriptionDefinitionsOutput) => void
  ): Promise<ListSubscriptionDefinitionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSubscriptionDefinitionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieves a list of resource tags for a resource arn.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Resets a group's deployments.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetDeployments(
    args: ResetDeploymentsInput
  ): Promise<ResetDeploymentsOutput>;
  public resetDeployments(
    args: ResetDeploymentsInput,
    cb: (err: any, data?: ResetDeploymentsOutput) => void
  ): void;
  public resetDeployments(
    args: ResetDeploymentsInput,
    cb?: (err: any, data?: ResetDeploymentsOutput) => void
  ): Promise<ResetDeploymentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetDeploymentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startBulkDeployment(
    args: StartBulkDeploymentInput
  ): Promise<StartBulkDeploymentOutput>;
  public startBulkDeployment(
    args: StartBulkDeploymentInput,
    cb: (err: any, data?: StartBulkDeploymentOutput) => void
  ): void;
  public startBulkDeployment(
    args: StartBulkDeploymentInput,
    cb?: (err: any, data?: StartBulkDeploymentOutput) => void
  ): Promise<StartBulkDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartBulkDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopBulkDeployment(
    args: StopBulkDeploymentInput
  ): Promise<StopBulkDeploymentOutput>;
  public stopBulkDeployment(
    args: StopBulkDeploymentInput,
    cb: (err: any, data?: StopBulkDeploymentOutput) => void
  ): void;
  public stopBulkDeployment(
    args: StopBulkDeploymentInput,
    cb?: (err: any, data?: StopBulkDeploymentOutput) => void
  ): Promise<StopBulkDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopBulkDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Add resource tags to a Greengrass Resource. Valid resources are Group, Connector, Core, Device, Function, Logger, Subscription, and Resource Defintions, and also BulkDeploymentIds.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Remove resource tags from a Greengrass Resource.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConnectivityInfo(
    args: UpdateConnectivityInfoInput
  ): Promise<UpdateConnectivityInfoOutput>;
  public updateConnectivityInfo(
    args: UpdateConnectivityInfoInput,
    cb: (err: any, data?: UpdateConnectivityInfoOutput) => void
  ): void;
  public updateConnectivityInfo(
    args: UpdateConnectivityInfoInput,
    cb?: (err: any, data?: UpdateConnectivityInfoOutput) => void
  ): Promise<UpdateConnectivityInfoOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConnectivityInfoCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates a connector definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConnectorDefinition(
    args: UpdateConnectorDefinitionInput
  ): Promise<UpdateConnectorDefinitionOutput>;
  public updateConnectorDefinition(
    args: UpdateConnectorDefinitionInput,
    cb: (err: any, data?: UpdateConnectorDefinitionOutput) => void
  ): void;
  public updateConnectorDefinition(
    args: UpdateConnectorDefinitionInput,
    cb?: (err: any, data?: UpdateConnectorDefinitionOutput) => void
  ): Promise<UpdateConnectorDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConnectorDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates a core definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCoreDefinition(
    args: UpdateCoreDefinitionInput
  ): Promise<UpdateCoreDefinitionOutput>;
  public updateCoreDefinition(
    args: UpdateCoreDefinitionInput,
    cb: (err: any, data?: UpdateCoreDefinitionOutput) => void
  ): void;
  public updateCoreDefinition(
    args: UpdateCoreDefinitionInput,
    cb?: (err: any, data?: UpdateCoreDefinitionOutput) => void
  ): Promise<UpdateCoreDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCoreDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates a device definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDeviceDefinition(
    args: UpdateDeviceDefinitionInput
  ): Promise<UpdateDeviceDefinitionOutput>;
  public updateDeviceDefinition(
    args: UpdateDeviceDefinitionInput,
    cb: (err: any, data?: UpdateDeviceDefinitionOutput) => void
  ): void;
  public updateDeviceDefinition(
    args: UpdateDeviceDefinitionInput,
    cb?: (err: any, data?: UpdateDeviceDefinitionOutput) => void
  ): Promise<UpdateDeviceDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDeviceDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates a Lambda function definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFunctionDefinition(
    args: UpdateFunctionDefinitionInput
  ): Promise<UpdateFunctionDefinitionOutput>;
  public updateFunctionDefinition(
    args: UpdateFunctionDefinitionInput,
    cb: (err: any, data?: UpdateFunctionDefinitionOutput) => void
  ): void;
  public updateFunctionDefinition(
    args: UpdateFunctionDefinitionInput,
    cb?: (err: any, data?: UpdateFunctionDefinitionOutput) => void
  ): Promise<UpdateFunctionDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFunctionDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates a group.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGroup(args: UpdateGroupInput): Promise<UpdateGroupOutput>;
  public updateGroup(
    args: UpdateGroupInput,
    cb: (err: any, data?: UpdateGroupOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupInput,
    cb?: (err: any, data?: UpdateGroupOutput) => void
  ): Promise<UpdateGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates the Certificate expiry time for a group.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {InternalServerErrorException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGroupCertificateConfiguration(
    args: UpdateGroupCertificateConfigurationInput
  ): Promise<UpdateGroupCertificateConfigurationOutput>;
  public updateGroupCertificateConfiguration(
    args: UpdateGroupCertificateConfigurationInput,
    cb: (err: any, data?: UpdateGroupCertificateConfigurationOutput) => void
  ): void;
  public updateGroupCertificateConfiguration(
    args: UpdateGroupCertificateConfigurationInput,
    cb?: (err: any, data?: UpdateGroupCertificateConfigurationOutput) => void
  ): Promise<UpdateGroupCertificateConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGroupCertificateConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates a logger definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateLoggerDefinition(
    args: UpdateLoggerDefinitionInput
  ): Promise<UpdateLoggerDefinitionOutput>;
  public updateLoggerDefinition(
    args: UpdateLoggerDefinitionInput,
    cb: (err: any, data?: UpdateLoggerDefinitionOutput) => void
  ): void;
  public updateLoggerDefinition(
    args: UpdateLoggerDefinitionInput,
    cb?: (err: any, data?: UpdateLoggerDefinitionOutput) => void
  ): Promise<UpdateLoggerDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateLoggerDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates a resource definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateResourceDefinition(
    args: UpdateResourceDefinitionInput
  ): Promise<UpdateResourceDefinitionOutput>;
  public updateResourceDefinition(
    args: UpdateResourceDefinitionInput,
    cb: (err: any, data?: UpdateResourceDefinitionOutput) => void
  ): void;
  public updateResourceDefinition(
    args: UpdateResourceDefinitionInput,
    cb?: (err: any, data?: UpdateResourceDefinitionOutput) => void
  ): Promise<UpdateResourceDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateResourceDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates a subscription definition.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} General error information.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSubscriptionDefinition(
    args: UpdateSubscriptionDefinitionInput
  ): Promise<UpdateSubscriptionDefinitionOutput>;
  public updateSubscriptionDefinition(
    args: UpdateSubscriptionDefinitionInput,
    cb: (err: any, data?: UpdateSubscriptionDefinitionOutput) => void
  ): void;
  public updateSubscriptionDefinition(
    args: UpdateSubscriptionDefinitionInput,
    cb?: (err: any, data?: UpdateSubscriptionDefinitionOutput) => void
  ): Promise<UpdateSubscriptionDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSubscriptionDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
