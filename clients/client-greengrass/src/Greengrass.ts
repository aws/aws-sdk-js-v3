// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateRoleToGroupCommand,
  AssociateRoleToGroupCommandInput,
  AssociateRoleToGroupCommandOutput,
} from "./commands/AssociateRoleToGroupCommand";
import {
  AssociateServiceRoleToAccountCommand,
  AssociateServiceRoleToAccountCommandInput,
  AssociateServiceRoleToAccountCommandOutput,
} from "./commands/AssociateServiceRoleToAccountCommand";
import {
  CreateConnectorDefinitionCommand,
  CreateConnectorDefinitionCommandInput,
  CreateConnectorDefinitionCommandOutput,
} from "./commands/CreateConnectorDefinitionCommand";
import {
  CreateConnectorDefinitionVersionCommand,
  CreateConnectorDefinitionVersionCommandInput,
  CreateConnectorDefinitionVersionCommandOutput,
} from "./commands/CreateConnectorDefinitionVersionCommand";
import {
  CreateCoreDefinitionCommand,
  CreateCoreDefinitionCommandInput,
  CreateCoreDefinitionCommandOutput,
} from "./commands/CreateCoreDefinitionCommand";
import {
  CreateCoreDefinitionVersionCommand,
  CreateCoreDefinitionVersionCommandInput,
  CreateCoreDefinitionVersionCommandOutput,
} from "./commands/CreateCoreDefinitionVersionCommand";
import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  CreateDeviceDefinitionCommand,
  CreateDeviceDefinitionCommandInput,
  CreateDeviceDefinitionCommandOutput,
} from "./commands/CreateDeviceDefinitionCommand";
import {
  CreateDeviceDefinitionVersionCommand,
  CreateDeviceDefinitionVersionCommandInput,
  CreateDeviceDefinitionVersionCommandOutput,
} from "./commands/CreateDeviceDefinitionVersionCommand";
import {
  CreateFunctionDefinitionCommand,
  CreateFunctionDefinitionCommandInput,
  CreateFunctionDefinitionCommandOutput,
} from "./commands/CreateFunctionDefinitionCommand";
import {
  CreateFunctionDefinitionVersionCommand,
  CreateFunctionDefinitionVersionCommandInput,
  CreateFunctionDefinitionVersionCommandOutput,
} from "./commands/CreateFunctionDefinitionVersionCommand";
import {
  CreateGroupCertificateAuthorityCommand,
  CreateGroupCertificateAuthorityCommandInput,
  CreateGroupCertificateAuthorityCommandOutput,
} from "./commands/CreateGroupCertificateAuthorityCommand";
import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateGroupVersionCommand,
  CreateGroupVersionCommandInput,
  CreateGroupVersionCommandOutput,
} from "./commands/CreateGroupVersionCommand";
import {
  CreateLoggerDefinitionCommand,
  CreateLoggerDefinitionCommandInput,
  CreateLoggerDefinitionCommandOutput,
} from "./commands/CreateLoggerDefinitionCommand";
import {
  CreateLoggerDefinitionVersionCommand,
  CreateLoggerDefinitionVersionCommandInput,
  CreateLoggerDefinitionVersionCommandOutput,
} from "./commands/CreateLoggerDefinitionVersionCommand";
import {
  CreateResourceDefinitionCommand,
  CreateResourceDefinitionCommandInput,
  CreateResourceDefinitionCommandOutput,
} from "./commands/CreateResourceDefinitionCommand";
import {
  CreateResourceDefinitionVersionCommand,
  CreateResourceDefinitionVersionCommandInput,
  CreateResourceDefinitionVersionCommandOutput,
} from "./commands/CreateResourceDefinitionVersionCommand";
import {
  CreateSoftwareUpdateJobCommand,
  CreateSoftwareUpdateJobCommandInput,
  CreateSoftwareUpdateJobCommandOutput,
} from "./commands/CreateSoftwareUpdateJobCommand";
import {
  CreateSubscriptionDefinitionCommand,
  CreateSubscriptionDefinitionCommandInput,
  CreateSubscriptionDefinitionCommandOutput,
} from "./commands/CreateSubscriptionDefinitionCommand";
import {
  CreateSubscriptionDefinitionVersionCommand,
  CreateSubscriptionDefinitionVersionCommandInput,
  CreateSubscriptionDefinitionVersionCommandOutput,
} from "./commands/CreateSubscriptionDefinitionVersionCommand";
import {
  DeleteConnectorDefinitionCommand,
  DeleteConnectorDefinitionCommandInput,
  DeleteConnectorDefinitionCommandOutput,
} from "./commands/DeleteConnectorDefinitionCommand";
import {
  DeleteCoreDefinitionCommand,
  DeleteCoreDefinitionCommandInput,
  DeleteCoreDefinitionCommandOutput,
} from "./commands/DeleteCoreDefinitionCommand";
import {
  DeleteDeviceDefinitionCommand,
  DeleteDeviceDefinitionCommandInput,
  DeleteDeviceDefinitionCommandOutput,
} from "./commands/DeleteDeviceDefinitionCommand";
import {
  DeleteFunctionDefinitionCommand,
  DeleteFunctionDefinitionCommandInput,
  DeleteFunctionDefinitionCommandOutput,
} from "./commands/DeleteFunctionDefinitionCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteLoggerDefinitionCommand,
  DeleteLoggerDefinitionCommandInput,
  DeleteLoggerDefinitionCommandOutput,
} from "./commands/DeleteLoggerDefinitionCommand";
import {
  DeleteResourceDefinitionCommand,
  DeleteResourceDefinitionCommandInput,
  DeleteResourceDefinitionCommandOutput,
} from "./commands/DeleteResourceDefinitionCommand";
import {
  DeleteSubscriptionDefinitionCommand,
  DeleteSubscriptionDefinitionCommandInput,
  DeleteSubscriptionDefinitionCommandOutput,
} from "./commands/DeleteSubscriptionDefinitionCommand";
import {
  DisassociateRoleFromGroupCommand,
  DisassociateRoleFromGroupCommandInput,
  DisassociateRoleFromGroupCommandOutput,
} from "./commands/DisassociateRoleFromGroupCommand";
import {
  DisassociateServiceRoleFromAccountCommand,
  DisassociateServiceRoleFromAccountCommandInput,
  DisassociateServiceRoleFromAccountCommandOutput,
} from "./commands/DisassociateServiceRoleFromAccountCommand";
import {
  GetAssociatedRoleCommand,
  GetAssociatedRoleCommandInput,
  GetAssociatedRoleCommandOutput,
} from "./commands/GetAssociatedRoleCommand";
import {
  GetBulkDeploymentStatusCommand,
  GetBulkDeploymentStatusCommandInput,
  GetBulkDeploymentStatusCommandOutput,
} from "./commands/GetBulkDeploymentStatusCommand";
import {
  GetConnectivityInfoCommand,
  GetConnectivityInfoCommandInput,
  GetConnectivityInfoCommandOutput,
} from "./commands/GetConnectivityInfoCommand";
import {
  GetConnectorDefinitionCommand,
  GetConnectorDefinitionCommandInput,
  GetConnectorDefinitionCommandOutput,
} from "./commands/GetConnectorDefinitionCommand";
import {
  GetConnectorDefinitionVersionCommand,
  GetConnectorDefinitionVersionCommandInput,
  GetConnectorDefinitionVersionCommandOutput,
} from "./commands/GetConnectorDefinitionVersionCommand";
import {
  GetCoreDefinitionCommand,
  GetCoreDefinitionCommandInput,
  GetCoreDefinitionCommandOutput,
} from "./commands/GetCoreDefinitionCommand";
import {
  GetCoreDefinitionVersionCommand,
  GetCoreDefinitionVersionCommandInput,
  GetCoreDefinitionVersionCommandOutput,
} from "./commands/GetCoreDefinitionVersionCommand";
import {
  GetDeploymentStatusCommand,
  GetDeploymentStatusCommandInput,
  GetDeploymentStatusCommandOutput,
} from "./commands/GetDeploymentStatusCommand";
import {
  GetDeviceDefinitionCommand,
  GetDeviceDefinitionCommandInput,
  GetDeviceDefinitionCommandOutput,
} from "./commands/GetDeviceDefinitionCommand";
import {
  GetDeviceDefinitionVersionCommand,
  GetDeviceDefinitionVersionCommandInput,
  GetDeviceDefinitionVersionCommandOutput,
} from "./commands/GetDeviceDefinitionVersionCommand";
import {
  GetFunctionDefinitionCommand,
  GetFunctionDefinitionCommandInput,
  GetFunctionDefinitionCommandOutput,
} from "./commands/GetFunctionDefinitionCommand";
import {
  GetFunctionDefinitionVersionCommand,
  GetFunctionDefinitionVersionCommandInput,
  GetFunctionDefinitionVersionCommandOutput,
} from "./commands/GetFunctionDefinitionVersionCommand";
import {
  GetGroupCertificateAuthorityCommand,
  GetGroupCertificateAuthorityCommandInput,
  GetGroupCertificateAuthorityCommandOutput,
} from "./commands/GetGroupCertificateAuthorityCommand";
import {
  GetGroupCertificateConfigurationCommand,
  GetGroupCertificateConfigurationCommandInput,
  GetGroupCertificateConfigurationCommandOutput,
} from "./commands/GetGroupCertificateConfigurationCommand";
import { GetGroupCommand, GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import {
  GetGroupVersionCommand,
  GetGroupVersionCommandInput,
  GetGroupVersionCommandOutput,
} from "./commands/GetGroupVersionCommand";
import {
  GetLoggerDefinitionCommand,
  GetLoggerDefinitionCommandInput,
  GetLoggerDefinitionCommandOutput,
} from "./commands/GetLoggerDefinitionCommand";
import {
  GetLoggerDefinitionVersionCommand,
  GetLoggerDefinitionVersionCommandInput,
  GetLoggerDefinitionVersionCommandOutput,
} from "./commands/GetLoggerDefinitionVersionCommand";
import {
  GetResourceDefinitionCommand,
  GetResourceDefinitionCommandInput,
  GetResourceDefinitionCommandOutput,
} from "./commands/GetResourceDefinitionCommand";
import {
  GetResourceDefinitionVersionCommand,
  GetResourceDefinitionVersionCommandInput,
  GetResourceDefinitionVersionCommandOutput,
} from "./commands/GetResourceDefinitionVersionCommand";
import {
  GetServiceRoleForAccountCommand,
  GetServiceRoleForAccountCommandInput,
  GetServiceRoleForAccountCommandOutput,
} from "./commands/GetServiceRoleForAccountCommand";
import {
  GetSubscriptionDefinitionCommand,
  GetSubscriptionDefinitionCommandInput,
  GetSubscriptionDefinitionCommandOutput,
} from "./commands/GetSubscriptionDefinitionCommand";
import {
  GetSubscriptionDefinitionVersionCommand,
  GetSubscriptionDefinitionVersionCommandInput,
  GetSubscriptionDefinitionVersionCommandOutput,
} from "./commands/GetSubscriptionDefinitionVersionCommand";
import {
  GetThingRuntimeConfigurationCommand,
  GetThingRuntimeConfigurationCommandInput,
  GetThingRuntimeConfigurationCommandOutput,
} from "./commands/GetThingRuntimeConfigurationCommand";
import {
  ListBulkDeploymentDetailedReportsCommand,
  ListBulkDeploymentDetailedReportsCommandInput,
  ListBulkDeploymentDetailedReportsCommandOutput,
} from "./commands/ListBulkDeploymentDetailedReportsCommand";
import {
  ListBulkDeploymentsCommand,
  ListBulkDeploymentsCommandInput,
  ListBulkDeploymentsCommandOutput,
} from "./commands/ListBulkDeploymentsCommand";
import {
  ListConnectorDefinitionsCommand,
  ListConnectorDefinitionsCommandInput,
  ListConnectorDefinitionsCommandOutput,
} from "./commands/ListConnectorDefinitionsCommand";
import {
  ListConnectorDefinitionVersionsCommand,
  ListConnectorDefinitionVersionsCommandInput,
  ListConnectorDefinitionVersionsCommandOutput,
} from "./commands/ListConnectorDefinitionVersionsCommand";
import {
  ListCoreDefinitionsCommand,
  ListCoreDefinitionsCommandInput,
  ListCoreDefinitionsCommandOutput,
} from "./commands/ListCoreDefinitionsCommand";
import {
  ListCoreDefinitionVersionsCommand,
  ListCoreDefinitionVersionsCommandInput,
  ListCoreDefinitionVersionsCommandOutput,
} from "./commands/ListCoreDefinitionVersionsCommand";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "./commands/ListDeploymentsCommand";
import {
  ListDeviceDefinitionsCommand,
  ListDeviceDefinitionsCommandInput,
  ListDeviceDefinitionsCommandOutput,
} from "./commands/ListDeviceDefinitionsCommand";
import {
  ListDeviceDefinitionVersionsCommand,
  ListDeviceDefinitionVersionsCommandInput,
  ListDeviceDefinitionVersionsCommandOutput,
} from "./commands/ListDeviceDefinitionVersionsCommand";
import {
  ListFunctionDefinitionsCommand,
  ListFunctionDefinitionsCommandInput,
  ListFunctionDefinitionsCommandOutput,
} from "./commands/ListFunctionDefinitionsCommand";
import {
  ListFunctionDefinitionVersionsCommand,
  ListFunctionDefinitionVersionsCommandInput,
  ListFunctionDefinitionVersionsCommandOutput,
} from "./commands/ListFunctionDefinitionVersionsCommand";
import {
  ListGroupCertificateAuthoritiesCommand,
  ListGroupCertificateAuthoritiesCommandInput,
  ListGroupCertificateAuthoritiesCommandOutput,
} from "./commands/ListGroupCertificateAuthoritiesCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListGroupVersionsCommand,
  ListGroupVersionsCommandInput,
  ListGroupVersionsCommandOutput,
} from "./commands/ListGroupVersionsCommand";
import {
  ListLoggerDefinitionsCommand,
  ListLoggerDefinitionsCommandInput,
  ListLoggerDefinitionsCommandOutput,
} from "./commands/ListLoggerDefinitionsCommand";
import {
  ListLoggerDefinitionVersionsCommand,
  ListLoggerDefinitionVersionsCommandInput,
  ListLoggerDefinitionVersionsCommandOutput,
} from "./commands/ListLoggerDefinitionVersionsCommand";
import {
  ListResourceDefinitionsCommand,
  ListResourceDefinitionsCommandInput,
  ListResourceDefinitionsCommandOutput,
} from "./commands/ListResourceDefinitionsCommand";
import {
  ListResourceDefinitionVersionsCommand,
  ListResourceDefinitionVersionsCommandInput,
  ListResourceDefinitionVersionsCommandOutput,
} from "./commands/ListResourceDefinitionVersionsCommand";
import {
  ListSubscriptionDefinitionsCommand,
  ListSubscriptionDefinitionsCommandInput,
  ListSubscriptionDefinitionsCommandOutput,
} from "./commands/ListSubscriptionDefinitionsCommand";
import {
  ListSubscriptionDefinitionVersionsCommand,
  ListSubscriptionDefinitionVersionsCommandInput,
  ListSubscriptionDefinitionVersionsCommandOutput,
} from "./commands/ListSubscriptionDefinitionVersionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ResetDeploymentsCommand,
  ResetDeploymentsCommandInput,
  ResetDeploymentsCommandOutput,
} from "./commands/ResetDeploymentsCommand";
import {
  StartBulkDeploymentCommand,
  StartBulkDeploymentCommandInput,
  StartBulkDeploymentCommandOutput,
} from "./commands/StartBulkDeploymentCommand";
import {
  StopBulkDeploymentCommand,
  StopBulkDeploymentCommandInput,
  StopBulkDeploymentCommandOutput,
} from "./commands/StopBulkDeploymentCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConnectivityInfoCommand,
  UpdateConnectivityInfoCommandInput,
  UpdateConnectivityInfoCommandOutput,
} from "./commands/UpdateConnectivityInfoCommand";
import {
  UpdateConnectorDefinitionCommand,
  UpdateConnectorDefinitionCommandInput,
  UpdateConnectorDefinitionCommandOutput,
} from "./commands/UpdateConnectorDefinitionCommand";
import {
  UpdateCoreDefinitionCommand,
  UpdateCoreDefinitionCommandInput,
  UpdateCoreDefinitionCommandOutput,
} from "./commands/UpdateCoreDefinitionCommand";
import {
  UpdateDeviceDefinitionCommand,
  UpdateDeviceDefinitionCommandInput,
  UpdateDeviceDefinitionCommandOutput,
} from "./commands/UpdateDeviceDefinitionCommand";
import {
  UpdateFunctionDefinitionCommand,
  UpdateFunctionDefinitionCommandInput,
  UpdateFunctionDefinitionCommandOutput,
} from "./commands/UpdateFunctionDefinitionCommand";
import {
  UpdateGroupCertificateConfigurationCommand,
  UpdateGroupCertificateConfigurationCommandInput,
  UpdateGroupCertificateConfigurationCommandOutput,
} from "./commands/UpdateGroupCertificateConfigurationCommand";
import { UpdateGroupCommand, UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateLoggerDefinitionCommand,
  UpdateLoggerDefinitionCommandInput,
  UpdateLoggerDefinitionCommandOutput,
} from "./commands/UpdateLoggerDefinitionCommand";
import {
  UpdateResourceDefinitionCommand,
  UpdateResourceDefinitionCommandInput,
  UpdateResourceDefinitionCommandOutput,
} from "./commands/UpdateResourceDefinitionCommand";
import {
  UpdateSubscriptionDefinitionCommand,
  UpdateSubscriptionDefinitionCommandInput,
  UpdateSubscriptionDefinitionCommandOutput,
} from "./commands/UpdateSubscriptionDefinitionCommand";
import {
  UpdateThingRuntimeConfigurationCommand,
  UpdateThingRuntimeConfigurationCommandInput,
  UpdateThingRuntimeConfigurationCommandOutput,
} from "./commands/UpdateThingRuntimeConfigurationCommand";
import { GreengrassClient } from "./GreengrassClient";

/**
 * AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.
 */
export class Greengrass extends GreengrassClient {
  /**
   * Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
   */
  public associateRoleToGroup(
    args: AssociateRoleToGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateRoleToGroupCommandOutput>;
  public associateRoleToGroup(
    args: AssociateRoleToGroupCommandInput,
    cb: (err: any, data?: AssociateRoleToGroupCommandOutput) => void
  ): void;
  public associateRoleToGroup(
    args: AssociateRoleToGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateRoleToGroupCommandOutput) => void
  ): void;
  public associateRoleToGroup(
    args: AssociateRoleToGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateRoleToGroupCommandOutput) => void),
    cb?: (err: any, data?: AssociateRoleToGroupCommandOutput) => void
  ): Promise<AssociateRoleToGroupCommandOutput> | void {
    const command = new AssociateRoleToGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
   */
  public associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateServiceRoleToAccountCommandOutput>;
  public associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    cb: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void
  ): void;
  public associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void
  ): void;
  public associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void),
    cb?: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void
  ): Promise<AssociateServiceRoleToAccountCommandOutput> | void {
    const command = new AssociateServiceRoleToAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
   */
  public createConnectorDefinition(
    args: CreateConnectorDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorDefinitionCommandOutput>;
  public createConnectorDefinition(
    args: CreateConnectorDefinitionCommandInput,
    cb: (err: any, data?: CreateConnectorDefinitionCommandOutput) => void
  ): void;
  public createConnectorDefinition(
    args: CreateConnectorDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorDefinitionCommandOutput) => void
  ): void;
  public createConnectorDefinition(
    args: CreateConnectorDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectorDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectorDefinitionCommandOutput) => void
  ): Promise<CreateConnectorDefinitionCommandOutput> | void {
    const command = new CreateConnectorDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a version of a connector definition which has already been defined.
   */
  public createConnectorDefinitionVersion(
    args: CreateConnectorDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorDefinitionVersionCommandOutput>;
  public createConnectorDefinitionVersion(
    args: CreateConnectorDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateConnectorDefinitionVersionCommandOutput) => void
  ): void;
  public createConnectorDefinitionVersion(
    args: CreateConnectorDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorDefinitionVersionCommandOutput) => void
  ): void;
  public createConnectorDefinitionVersion(
    args: CreateConnectorDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectorDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectorDefinitionVersionCommandOutput) => void
  ): Promise<CreateConnectorDefinitionVersionCommandOutput> | void {
    const command = new CreateConnectorDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
   */
  public createCoreDefinition(
    args: CreateCoreDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCoreDefinitionCommandOutput>;
  public createCoreDefinition(
    args: CreateCoreDefinitionCommandInput,
    cb: (err: any, data?: CreateCoreDefinitionCommandOutput) => void
  ): void;
  public createCoreDefinition(
    args: CreateCoreDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCoreDefinitionCommandOutput) => void
  ): void;
  public createCoreDefinition(
    args: CreateCoreDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCoreDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateCoreDefinitionCommandOutput) => void
  ): Promise<CreateCoreDefinitionCommandOutput> | void {
    const command = new CreateCoreDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
   */
  public createCoreDefinitionVersion(
    args: CreateCoreDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCoreDefinitionVersionCommandOutput>;
  public createCoreDefinitionVersion(
    args: CreateCoreDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateCoreDefinitionVersionCommandOutput) => void
  ): void;
  public createCoreDefinitionVersion(
    args: CreateCoreDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCoreDefinitionVersionCommandOutput) => void
  ): void;
  public createCoreDefinitionVersion(
    args: CreateCoreDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCoreDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateCoreDefinitionVersionCommandOutput) => void
  ): Promise<CreateCoreDefinitionVersionCommandOutput> | void {
    const command = new CreateCoreDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
   */
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeploymentCommandOutput) => void),
    cb?: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): Promise<CreateDeploymentCommandOutput> | void {
    const command = new CreateDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
   */
  public createDeviceDefinition(
    args: CreateDeviceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeviceDefinitionCommandOutput>;
  public createDeviceDefinition(
    args: CreateDeviceDefinitionCommandInput,
    cb: (err: any, data?: CreateDeviceDefinitionCommandOutput) => void
  ): void;
  public createDeviceDefinition(
    args: CreateDeviceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeviceDefinitionCommandOutput) => void
  ): void;
  public createDeviceDefinition(
    args: CreateDeviceDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeviceDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateDeviceDefinitionCommandOutput) => void
  ): Promise<CreateDeviceDefinitionCommandOutput> | void {
    const command = new CreateDeviceDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a version of a device definition that has already been defined.
   */
  public createDeviceDefinitionVersion(
    args: CreateDeviceDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeviceDefinitionVersionCommandOutput>;
  public createDeviceDefinitionVersion(
    args: CreateDeviceDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateDeviceDefinitionVersionCommandOutput) => void
  ): void;
  public createDeviceDefinitionVersion(
    args: CreateDeviceDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeviceDefinitionVersionCommandOutput) => void
  ): void;
  public createDeviceDefinitionVersion(
    args: CreateDeviceDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeviceDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateDeviceDefinitionVersionCommandOutput) => void
  ): Promise<CreateDeviceDefinitionVersionCommandOutput> | void {
    const command = new CreateDeviceDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
   */
  public createFunctionDefinition(
    args: CreateFunctionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionDefinitionCommandOutput>;
  public createFunctionDefinition(
    args: CreateFunctionDefinitionCommandInput,
    cb: (err: any, data?: CreateFunctionDefinitionCommandOutput) => void
  ): void;
  public createFunctionDefinition(
    args: CreateFunctionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionDefinitionCommandOutput) => void
  ): void;
  public createFunctionDefinition(
    args: CreateFunctionDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFunctionDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateFunctionDefinitionCommandOutput) => void
  ): Promise<CreateFunctionDefinitionCommandOutput> | void {
    const command = new CreateFunctionDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a version of a Lambda function definition that has already been defined.
   */
  public createFunctionDefinitionVersion(
    args: CreateFunctionDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionDefinitionVersionCommandOutput>;
  public createFunctionDefinitionVersion(
    args: CreateFunctionDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateFunctionDefinitionVersionCommandOutput) => void
  ): void;
  public createFunctionDefinitionVersion(
    args: CreateFunctionDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionDefinitionVersionCommandOutput) => void
  ): void;
  public createFunctionDefinitionVersion(
    args: CreateFunctionDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFunctionDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateFunctionDefinitionVersionCommandOutput) => void
  ): Promise<CreateFunctionDefinitionVersionCommandOutput> | void {
    const command = new CreateFunctionDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
   */
  public createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  public createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  public createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupCommandOutput) => void
  ): Promise<CreateGroupCommandOutput> | void {
    const command = new CreateGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
   */
  public createGroupCertificateAuthority(
    args: CreateGroupCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupCertificateAuthorityCommandOutput>;
  public createGroupCertificateAuthority(
    args: CreateGroupCertificateAuthorityCommandInput,
    cb: (err: any, data?: CreateGroupCertificateAuthorityCommandOutput) => void
  ): void;
  public createGroupCertificateAuthority(
    args: CreateGroupCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCertificateAuthorityCommandOutput) => void
  ): void;
  public createGroupCertificateAuthority(
    args: CreateGroupCertificateAuthorityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGroupCertificateAuthorityCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupCertificateAuthorityCommandOutput) => void
  ): Promise<CreateGroupCertificateAuthorityCommandOutput> | void {
    const command = new CreateGroupCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a version of a group which has already been defined.
   */
  public createGroupVersion(
    args: CreateGroupVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupVersionCommandOutput>;
  public createGroupVersion(
    args: CreateGroupVersionCommandInput,
    cb: (err: any, data?: CreateGroupVersionCommandOutput) => void
  ): void;
  public createGroupVersion(
    args: CreateGroupVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupVersionCommandOutput) => void
  ): void;
  public createGroupVersion(
    args: CreateGroupVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGroupVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupVersionCommandOutput) => void
  ): Promise<CreateGroupVersionCommandOutput> | void {
    const command = new CreateGroupVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
   */
  public createLoggerDefinition(
    args: CreateLoggerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoggerDefinitionCommandOutput>;
  public createLoggerDefinition(
    args: CreateLoggerDefinitionCommandInput,
    cb: (err: any, data?: CreateLoggerDefinitionCommandOutput) => void
  ): void;
  public createLoggerDefinition(
    args: CreateLoggerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoggerDefinitionCommandOutput) => void
  ): void;
  public createLoggerDefinition(
    args: CreateLoggerDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLoggerDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateLoggerDefinitionCommandOutput) => void
  ): Promise<CreateLoggerDefinitionCommandOutput> | void {
    const command = new CreateLoggerDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a version of a logger definition that has already been defined.
   */
  public createLoggerDefinitionVersion(
    args: CreateLoggerDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoggerDefinitionVersionCommandOutput>;
  public createLoggerDefinitionVersion(
    args: CreateLoggerDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateLoggerDefinitionVersionCommandOutput) => void
  ): void;
  public createLoggerDefinitionVersion(
    args: CreateLoggerDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoggerDefinitionVersionCommandOutput) => void
  ): void;
  public createLoggerDefinitionVersion(
    args: CreateLoggerDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLoggerDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateLoggerDefinitionVersionCommandOutput) => void
  ): Promise<CreateLoggerDefinitionVersionCommandOutput> | void {
    const command = new CreateLoggerDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
   */
  public createResourceDefinition(
    args: CreateResourceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceDefinitionCommandOutput>;
  public createResourceDefinition(
    args: CreateResourceDefinitionCommandInput,
    cb: (err: any, data?: CreateResourceDefinitionCommandOutput) => void
  ): void;
  public createResourceDefinition(
    args: CreateResourceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceDefinitionCommandOutput) => void
  ): void;
  public createResourceDefinition(
    args: CreateResourceDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResourceDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateResourceDefinitionCommandOutput) => void
  ): Promise<CreateResourceDefinitionCommandOutput> | void {
    const command = new CreateResourceDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a version of a resource definition that has already been defined.
   */
  public createResourceDefinitionVersion(
    args: CreateResourceDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceDefinitionVersionCommandOutput>;
  public createResourceDefinitionVersion(
    args: CreateResourceDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateResourceDefinitionVersionCommandOutput) => void
  ): void;
  public createResourceDefinitionVersion(
    args: CreateResourceDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceDefinitionVersionCommandOutput) => void
  ): void;
  public createResourceDefinitionVersion(
    args: CreateResourceDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResourceDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateResourceDefinitionVersionCommandOutput) => void
  ): Promise<CreateResourceDefinitionVersionCommandOutput> | void {
    const command = new CreateResourceDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
   */
  public createSoftwareUpdateJob(
    args: CreateSoftwareUpdateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSoftwareUpdateJobCommandOutput>;
  public createSoftwareUpdateJob(
    args: CreateSoftwareUpdateJobCommandInput,
    cb: (err: any, data?: CreateSoftwareUpdateJobCommandOutput) => void
  ): void;
  public createSoftwareUpdateJob(
    args: CreateSoftwareUpdateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSoftwareUpdateJobCommandOutput) => void
  ): void;
  public createSoftwareUpdateJob(
    args: CreateSoftwareUpdateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSoftwareUpdateJobCommandOutput) => void),
    cb?: (err: any, data?: CreateSoftwareUpdateJobCommandOutput) => void
  ): Promise<CreateSoftwareUpdateJobCommandOutput> | void {
    const command = new CreateSoftwareUpdateJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
   */
  public createSubscriptionDefinition(
    args: CreateSubscriptionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriptionDefinitionCommandOutput>;
  public createSubscriptionDefinition(
    args: CreateSubscriptionDefinitionCommandInput,
    cb: (err: any, data?: CreateSubscriptionDefinitionCommandOutput) => void
  ): void;
  public createSubscriptionDefinition(
    args: CreateSubscriptionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriptionDefinitionCommandOutput) => void
  ): void;
  public createSubscriptionDefinition(
    args: CreateSubscriptionDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSubscriptionDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateSubscriptionDefinitionCommandOutput) => void
  ): Promise<CreateSubscriptionDefinitionCommandOutput> | void {
    const command = new CreateSubscriptionDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a version of a subscription definition which has already been defined.
   */
  public createSubscriptionDefinitionVersion(
    args: CreateSubscriptionDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriptionDefinitionVersionCommandOutput>;
  public createSubscriptionDefinitionVersion(
    args: CreateSubscriptionDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateSubscriptionDefinitionVersionCommandOutput) => void
  ): void;
  public createSubscriptionDefinitionVersion(
    args: CreateSubscriptionDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriptionDefinitionVersionCommandOutput) => void
  ): void;
  public createSubscriptionDefinitionVersion(
    args: CreateSubscriptionDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSubscriptionDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateSubscriptionDefinitionVersionCommandOutput) => void
  ): Promise<CreateSubscriptionDefinitionVersionCommandOutput> | void {
    const command = new CreateSubscriptionDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Deletes a connector definition.
   */
  public deleteConnectorDefinition(
    args: DeleteConnectorDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectorDefinitionCommandOutput>;
  public deleteConnectorDefinition(
    args: DeleteConnectorDefinitionCommandInput,
    cb: (err: any, data?: DeleteConnectorDefinitionCommandOutput) => void
  ): void;
  public deleteConnectorDefinition(
    args: DeleteConnectorDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorDefinitionCommandOutput) => void
  ): void;
  public deleteConnectorDefinition(
    args: DeleteConnectorDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectorDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectorDefinitionCommandOutput) => void
  ): Promise<DeleteConnectorDefinitionCommandOutput> | void {
    const command = new DeleteConnectorDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Deletes a core definition.
   */
  public deleteCoreDefinition(
    args: DeleteCoreDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCoreDefinitionCommandOutput>;
  public deleteCoreDefinition(
    args: DeleteCoreDefinitionCommandInput,
    cb: (err: any, data?: DeleteCoreDefinitionCommandOutput) => void
  ): void;
  public deleteCoreDefinition(
    args: DeleteCoreDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCoreDefinitionCommandOutput) => void
  ): void;
  public deleteCoreDefinition(
    args: DeleteCoreDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCoreDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteCoreDefinitionCommandOutput) => void
  ): Promise<DeleteCoreDefinitionCommandOutput> | void {
    const command = new DeleteCoreDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Deletes a device definition.
   */
  public deleteDeviceDefinition(
    args: DeleteDeviceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeviceDefinitionCommandOutput>;
  public deleteDeviceDefinition(
    args: DeleteDeviceDefinitionCommandInput,
    cb: (err: any, data?: DeleteDeviceDefinitionCommandOutput) => void
  ): void;
  public deleteDeviceDefinition(
    args: DeleteDeviceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceDefinitionCommandOutput) => void
  ): void;
  public deleteDeviceDefinition(
    args: DeleteDeviceDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDeviceDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteDeviceDefinitionCommandOutput) => void
  ): Promise<DeleteDeviceDefinitionCommandOutput> | void {
    const command = new DeleteDeviceDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Deletes a Lambda function definition.
   */
  public deleteFunctionDefinition(
    args: DeleteFunctionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionDefinitionCommandOutput>;
  public deleteFunctionDefinition(
    args: DeleteFunctionDefinitionCommandInput,
    cb: (err: any, data?: DeleteFunctionDefinitionCommandOutput) => void
  ): void;
  public deleteFunctionDefinition(
    args: DeleteFunctionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionDefinitionCommandOutput) => void
  ): void;
  public deleteFunctionDefinition(
    args: DeleteFunctionDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFunctionDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteFunctionDefinitionCommandOutput) => void
  ): Promise<DeleteFunctionDefinitionCommandOutput> | void {
    const command = new DeleteFunctionDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Deletes a group.
   */
  public deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  public deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteGroupCommandOutput) => void
  ): Promise<DeleteGroupCommandOutput> | void {
    const command = new DeleteGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Deletes a logger definition.
   */
  public deleteLoggerDefinition(
    args: DeleteLoggerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoggerDefinitionCommandOutput>;
  public deleteLoggerDefinition(
    args: DeleteLoggerDefinitionCommandInput,
    cb: (err: any, data?: DeleteLoggerDefinitionCommandOutput) => void
  ): void;
  public deleteLoggerDefinition(
    args: DeleteLoggerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoggerDefinitionCommandOutput) => void
  ): void;
  public deleteLoggerDefinition(
    args: DeleteLoggerDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLoggerDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteLoggerDefinitionCommandOutput) => void
  ): Promise<DeleteLoggerDefinitionCommandOutput> | void {
    const command = new DeleteLoggerDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Deletes a resource definition.
   */
  public deleteResourceDefinition(
    args: DeleteResourceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceDefinitionCommandOutput>;
  public deleteResourceDefinition(
    args: DeleteResourceDefinitionCommandInput,
    cb: (err: any, data?: DeleteResourceDefinitionCommandOutput) => void
  ): void;
  public deleteResourceDefinition(
    args: DeleteResourceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceDefinitionCommandOutput) => void
  ): void;
  public deleteResourceDefinition(
    args: DeleteResourceDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourceDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourceDefinitionCommandOutput) => void
  ): Promise<DeleteResourceDefinitionCommandOutput> | void {
    const command = new DeleteResourceDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Deletes a subscription definition.
   */
  public deleteSubscriptionDefinition(
    args: DeleteSubscriptionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriptionDefinitionCommandOutput>;
  public deleteSubscriptionDefinition(
    args: DeleteSubscriptionDefinitionCommandInput,
    cb: (err: any, data?: DeleteSubscriptionDefinitionCommandOutput) => void
  ): void;
  public deleteSubscriptionDefinition(
    args: DeleteSubscriptionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriptionDefinitionCommandOutput) => void
  ): void;
  public deleteSubscriptionDefinition(
    args: DeleteSubscriptionDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSubscriptionDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteSubscriptionDefinitionCommandOutput) => void
  ): Promise<DeleteSubscriptionDefinitionCommandOutput> | void {
    const command = new DeleteSubscriptionDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Disassociates the role from a group.
   */
  public disassociateRoleFromGroup(
    args: DisassociateRoleFromGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRoleFromGroupCommandOutput>;
  public disassociateRoleFromGroup(
    args: DisassociateRoleFromGroupCommandInput,
    cb: (err: any, data?: DisassociateRoleFromGroupCommandOutput) => void
  ): void;
  public disassociateRoleFromGroup(
    args: DisassociateRoleFromGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRoleFromGroupCommandOutput) => void
  ): void;
  public disassociateRoleFromGroup(
    args: DisassociateRoleFromGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateRoleFromGroupCommandOutput) => void),
    cb?: (err: any, data?: DisassociateRoleFromGroupCommandOutput) => void
  ): Promise<DisassociateRoleFromGroupCommandOutput> | void {
    const command = new DisassociateRoleFromGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Disassociates the service role from your account. Without a service role, deployments will not work.
   */
  public disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateServiceRoleFromAccountCommandOutput>;
  public disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    cb: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void
  ): void;
  public disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void
  ): void;
  public disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void),
    cb?: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void
  ): Promise<DisassociateServiceRoleFromAccountCommandOutput> | void {
    const command = new DisassociateServiceRoleFromAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves the role associated with a particular group.
   */
  public getAssociatedRole(
    args: GetAssociatedRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssociatedRoleCommandOutput>;
  public getAssociatedRole(
    args: GetAssociatedRoleCommandInput,
    cb: (err: any, data?: GetAssociatedRoleCommandOutput) => void
  ): void;
  public getAssociatedRole(
    args: GetAssociatedRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssociatedRoleCommandOutput) => void
  ): void;
  public getAssociatedRole(
    args: GetAssociatedRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssociatedRoleCommandOutput) => void),
    cb?: (err: any, data?: GetAssociatedRoleCommandOutput) => void
  ): Promise<GetAssociatedRoleCommandOutput> | void {
    const command = new GetAssociatedRoleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Returns the status of a bulk deployment.
   */
  public getBulkDeploymentStatus(
    args: GetBulkDeploymentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBulkDeploymentStatusCommandOutput>;
  public getBulkDeploymentStatus(
    args: GetBulkDeploymentStatusCommandInput,
    cb: (err: any, data?: GetBulkDeploymentStatusCommandOutput) => void
  ): void;
  public getBulkDeploymentStatus(
    args: GetBulkDeploymentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBulkDeploymentStatusCommandOutput) => void
  ): void;
  public getBulkDeploymentStatus(
    args: GetBulkDeploymentStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBulkDeploymentStatusCommandOutput) => void),
    cb?: (err: any, data?: GetBulkDeploymentStatusCommandOutput) => void
  ): Promise<GetBulkDeploymentStatusCommandOutput> | void {
    const command = new GetBulkDeploymentStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves the connectivity information for a core.
   */
  public getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectivityInfoCommandOutput>;
  public getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    cb: (err: any, data?: GetConnectivityInfoCommandOutput) => void
  ): void;
  public getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectivityInfoCommandOutput) => void
  ): void;
  public getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectivityInfoCommandOutput) => void),
    cb?: (err: any, data?: GetConnectivityInfoCommandOutput) => void
  ): Promise<GetConnectivityInfoCommandOutput> | void {
    const command = new GetConnectivityInfoCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a connector definition.
   */
  public getConnectorDefinition(
    args: GetConnectorDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectorDefinitionCommandOutput>;
  public getConnectorDefinition(
    args: GetConnectorDefinitionCommandInput,
    cb: (err: any, data?: GetConnectorDefinitionCommandOutput) => void
  ): void;
  public getConnectorDefinition(
    args: GetConnectorDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectorDefinitionCommandOutput) => void
  ): void;
  public getConnectorDefinition(
    args: GetConnectorDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectorDefinitionCommandOutput) => void),
    cb?: (err: any, data?: GetConnectorDefinitionCommandOutput) => void
  ): Promise<GetConnectorDefinitionCommandOutput> | void {
    const command = new GetConnectorDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
   */
  public getConnectorDefinitionVersion(
    args: GetConnectorDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectorDefinitionVersionCommandOutput>;
  public getConnectorDefinitionVersion(
    args: GetConnectorDefinitionVersionCommandInput,
    cb: (err: any, data?: GetConnectorDefinitionVersionCommandOutput) => void
  ): void;
  public getConnectorDefinitionVersion(
    args: GetConnectorDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectorDefinitionVersionCommandOutput) => void
  ): void;
  public getConnectorDefinitionVersion(
    args: GetConnectorDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectorDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: GetConnectorDefinitionVersionCommandOutput) => void
  ): Promise<GetConnectorDefinitionVersionCommandOutput> | void {
    const command = new GetConnectorDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a core definition version.
   */
  public getCoreDefinition(
    args: GetCoreDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoreDefinitionCommandOutput>;
  public getCoreDefinition(
    args: GetCoreDefinitionCommandInput,
    cb: (err: any, data?: GetCoreDefinitionCommandOutput) => void
  ): void;
  public getCoreDefinition(
    args: GetCoreDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreDefinitionCommandOutput) => void
  ): void;
  public getCoreDefinition(
    args: GetCoreDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCoreDefinitionCommandOutput) => void),
    cb?: (err: any, data?: GetCoreDefinitionCommandOutput) => void
  ): Promise<GetCoreDefinitionCommandOutput> | void {
    const command = new GetCoreDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a core definition version.
   */
  public getCoreDefinitionVersion(
    args: GetCoreDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoreDefinitionVersionCommandOutput>;
  public getCoreDefinitionVersion(
    args: GetCoreDefinitionVersionCommandInput,
    cb: (err: any, data?: GetCoreDefinitionVersionCommandOutput) => void
  ): void;
  public getCoreDefinitionVersion(
    args: GetCoreDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreDefinitionVersionCommandOutput) => void
  ): void;
  public getCoreDefinitionVersion(
    args: GetCoreDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCoreDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: GetCoreDefinitionVersionCommandOutput) => void
  ): Promise<GetCoreDefinitionVersionCommandOutput> | void {
    const command = new GetCoreDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Returns the status of a deployment.
   */
  public getDeploymentStatus(
    args: GetDeploymentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentStatusCommandOutput>;
  public getDeploymentStatus(
    args: GetDeploymentStatusCommandInput,
    cb: (err: any, data?: GetDeploymentStatusCommandOutput) => void
  ): void;
  public getDeploymentStatus(
    args: GetDeploymentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentStatusCommandOutput) => void
  ): void;
  public getDeploymentStatus(
    args: GetDeploymentStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeploymentStatusCommandOutput) => void),
    cb?: (err: any, data?: GetDeploymentStatusCommandOutput) => void
  ): Promise<GetDeploymentStatusCommandOutput> | void {
    const command = new GetDeploymentStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a device definition.
   */
  public getDeviceDefinition(
    args: GetDeviceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceDefinitionCommandOutput>;
  public getDeviceDefinition(
    args: GetDeviceDefinitionCommandInput,
    cb: (err: any, data?: GetDeviceDefinitionCommandOutput) => void
  ): void;
  public getDeviceDefinition(
    args: GetDeviceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceDefinitionCommandOutput) => void
  ): void;
  public getDeviceDefinition(
    args: GetDeviceDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeviceDefinitionCommandOutput) => void),
    cb?: (err: any, data?: GetDeviceDefinitionCommandOutput) => void
  ): Promise<GetDeviceDefinitionCommandOutput> | void {
    const command = new GetDeviceDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a device definition version.
   */
  public getDeviceDefinitionVersion(
    args: GetDeviceDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceDefinitionVersionCommandOutput>;
  public getDeviceDefinitionVersion(
    args: GetDeviceDefinitionVersionCommandInput,
    cb: (err: any, data?: GetDeviceDefinitionVersionCommandOutput) => void
  ): void;
  public getDeviceDefinitionVersion(
    args: GetDeviceDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceDefinitionVersionCommandOutput) => void
  ): void;
  public getDeviceDefinitionVersion(
    args: GetDeviceDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeviceDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: GetDeviceDefinitionVersionCommandOutput) => void
  ): Promise<GetDeviceDefinitionVersionCommandOutput> | void {
    const command = new GetDeviceDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a Lambda function definition, including its creation time and latest version.
   */
  public getFunctionDefinition(
    args: GetFunctionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionDefinitionCommandOutput>;
  public getFunctionDefinition(
    args: GetFunctionDefinitionCommandInput,
    cb: (err: any, data?: GetFunctionDefinitionCommandOutput) => void
  ): void;
  public getFunctionDefinition(
    args: GetFunctionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionDefinitionCommandOutput) => void
  ): void;
  public getFunctionDefinition(
    args: GetFunctionDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFunctionDefinitionCommandOutput) => void),
    cb?: (err: any, data?: GetFunctionDefinitionCommandOutput) => void
  ): Promise<GetFunctionDefinitionCommandOutput> | void {
    const command = new GetFunctionDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
   */
  public getFunctionDefinitionVersion(
    args: GetFunctionDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionDefinitionVersionCommandOutput>;
  public getFunctionDefinitionVersion(
    args: GetFunctionDefinitionVersionCommandInput,
    cb: (err: any, data?: GetFunctionDefinitionVersionCommandOutput) => void
  ): void;
  public getFunctionDefinitionVersion(
    args: GetFunctionDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionDefinitionVersionCommandOutput) => void
  ): void;
  public getFunctionDefinitionVersion(
    args: GetFunctionDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFunctionDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: GetFunctionDefinitionVersionCommandOutput) => void
  ): Promise<GetFunctionDefinitionVersionCommandOutput> | void {
    const command = new GetFunctionDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a group.
   */
  public getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
  public getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
  public getGroup(
    args: GetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;
  public getGroup(
    args: GetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupCommandOutput) => void),
    cb?: (err: any, data?: GetGroupCommandOutput) => void
  ): Promise<GetGroupCommandOutput> | void {
    const command = new GetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retreives the CA associated with a group. Returns the public key of the CA.
   */
  public getGroupCertificateAuthority(
    args: GetGroupCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupCertificateAuthorityCommandOutput>;
  public getGroupCertificateAuthority(
    args: GetGroupCertificateAuthorityCommandInput,
    cb: (err: any, data?: GetGroupCertificateAuthorityCommandOutput) => void
  ): void;
  public getGroupCertificateAuthority(
    args: GetGroupCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCertificateAuthorityCommandOutput) => void
  ): void;
  public getGroupCertificateAuthority(
    args: GetGroupCertificateAuthorityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupCertificateAuthorityCommandOutput) => void),
    cb?: (err: any, data?: GetGroupCertificateAuthorityCommandOutput) => void
  ): Promise<GetGroupCertificateAuthorityCommandOutput> | void {
    const command = new GetGroupCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves the current configuration for the CA used by the group.
   */
  public getGroupCertificateConfiguration(
    args: GetGroupCertificateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupCertificateConfigurationCommandOutput>;
  public getGroupCertificateConfiguration(
    args: GetGroupCertificateConfigurationCommandInput,
    cb: (err: any, data?: GetGroupCertificateConfigurationCommandOutput) => void
  ): void;
  public getGroupCertificateConfiguration(
    args: GetGroupCertificateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCertificateConfigurationCommandOutput) => void
  ): void;
  public getGroupCertificateConfiguration(
    args: GetGroupCertificateConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupCertificateConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetGroupCertificateConfigurationCommandOutput) => void
  ): Promise<GetGroupCertificateConfigurationCommandOutput> | void {
    const command = new GetGroupCertificateConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a group version.
   */
  public getGroupVersion(
    args: GetGroupVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupVersionCommandOutput>;
  public getGroupVersion(
    args: GetGroupVersionCommandInput,
    cb: (err: any, data?: GetGroupVersionCommandOutput) => void
  ): void;
  public getGroupVersion(
    args: GetGroupVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupVersionCommandOutput) => void
  ): void;
  public getGroupVersion(
    args: GetGroupVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupVersionCommandOutput) => void),
    cb?: (err: any, data?: GetGroupVersionCommandOutput) => void
  ): Promise<GetGroupVersionCommandOutput> | void {
    const command = new GetGroupVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a logger definition.
   */
  public getLoggerDefinition(
    args: GetLoggerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoggerDefinitionCommandOutput>;
  public getLoggerDefinition(
    args: GetLoggerDefinitionCommandInput,
    cb: (err: any, data?: GetLoggerDefinitionCommandOutput) => void
  ): void;
  public getLoggerDefinition(
    args: GetLoggerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoggerDefinitionCommandOutput) => void
  ): void;
  public getLoggerDefinition(
    args: GetLoggerDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLoggerDefinitionCommandOutput) => void),
    cb?: (err: any, data?: GetLoggerDefinitionCommandOutput) => void
  ): Promise<GetLoggerDefinitionCommandOutput> | void {
    const command = new GetLoggerDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a logger definition version.
   */
  public getLoggerDefinitionVersion(
    args: GetLoggerDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoggerDefinitionVersionCommandOutput>;
  public getLoggerDefinitionVersion(
    args: GetLoggerDefinitionVersionCommandInput,
    cb: (err: any, data?: GetLoggerDefinitionVersionCommandOutput) => void
  ): void;
  public getLoggerDefinitionVersion(
    args: GetLoggerDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoggerDefinitionVersionCommandOutput) => void
  ): void;
  public getLoggerDefinitionVersion(
    args: GetLoggerDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLoggerDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: GetLoggerDefinitionVersionCommandOutput) => void
  ): Promise<GetLoggerDefinitionVersionCommandOutput> | void {
    const command = new GetLoggerDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a resource definition, including its creation time and latest version.
   */
  public getResourceDefinition(
    args: GetResourceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceDefinitionCommandOutput>;
  public getResourceDefinition(
    args: GetResourceDefinitionCommandInput,
    cb: (err: any, data?: GetResourceDefinitionCommandOutput) => void
  ): void;
  public getResourceDefinition(
    args: GetResourceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceDefinitionCommandOutput) => void
  ): void;
  public getResourceDefinition(
    args: GetResourceDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceDefinitionCommandOutput) => void),
    cb?: (err: any, data?: GetResourceDefinitionCommandOutput) => void
  ): Promise<GetResourceDefinitionCommandOutput> | void {
    const command = new GetResourceDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a resource definition version, including which resources are included in the version.
   */
  public getResourceDefinitionVersion(
    args: GetResourceDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceDefinitionVersionCommandOutput>;
  public getResourceDefinitionVersion(
    args: GetResourceDefinitionVersionCommandInput,
    cb: (err: any, data?: GetResourceDefinitionVersionCommandOutput) => void
  ): void;
  public getResourceDefinitionVersion(
    args: GetResourceDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceDefinitionVersionCommandOutput) => void
  ): void;
  public getResourceDefinitionVersion(
    args: GetResourceDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: GetResourceDefinitionVersionCommandOutput) => void
  ): Promise<GetResourceDefinitionVersionCommandOutput> | void {
    const command = new GetResourceDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves the service role that is attached to your account.
   */
  public getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceRoleForAccountCommandOutput>;
  public getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    cb: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void
  ): void;
  public getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void
  ): void;
  public getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceRoleForAccountCommandOutput) => void),
    cb?: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void
  ): Promise<GetServiceRoleForAccountCommandOutput> | void {
    const command = new GetServiceRoleForAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a subscription definition.
   */
  public getSubscriptionDefinition(
    args: GetSubscriptionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionDefinitionCommandOutput>;
  public getSubscriptionDefinition(
    args: GetSubscriptionDefinitionCommandInput,
    cb: (err: any, data?: GetSubscriptionDefinitionCommandOutput) => void
  ): void;
  public getSubscriptionDefinition(
    args: GetSubscriptionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionDefinitionCommandOutput) => void
  ): void;
  public getSubscriptionDefinition(
    args: GetSubscriptionDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSubscriptionDefinitionCommandOutput) => void),
    cb?: (err: any, data?: GetSubscriptionDefinitionCommandOutput) => void
  ): Promise<GetSubscriptionDefinitionCommandOutput> | void {
    const command = new GetSubscriptionDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves information about a subscription definition version.
   */
  public getSubscriptionDefinitionVersion(
    args: GetSubscriptionDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionDefinitionVersionCommandOutput>;
  public getSubscriptionDefinitionVersion(
    args: GetSubscriptionDefinitionVersionCommandInput,
    cb: (err: any, data?: GetSubscriptionDefinitionVersionCommandOutput) => void
  ): void;
  public getSubscriptionDefinitionVersion(
    args: GetSubscriptionDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionDefinitionVersionCommandOutput) => void
  ): void;
  public getSubscriptionDefinitionVersion(
    args: GetSubscriptionDefinitionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSubscriptionDefinitionVersionCommandOutput) => void),
    cb?: (err: any, data?: GetSubscriptionDefinitionVersionCommandOutput) => void
  ): Promise<GetSubscriptionDefinitionVersionCommandOutput> | void {
    const command = new GetSubscriptionDefinitionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Get the runtime configuration of a thing.
   */
  public getThingRuntimeConfiguration(
    args: GetThingRuntimeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetThingRuntimeConfigurationCommandOutput>;
  public getThingRuntimeConfiguration(
    args: GetThingRuntimeConfigurationCommandInput,
    cb: (err: any, data?: GetThingRuntimeConfigurationCommandOutput) => void
  ): void;
  public getThingRuntimeConfiguration(
    args: GetThingRuntimeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetThingRuntimeConfigurationCommandOutput) => void
  ): void;
  public getThingRuntimeConfiguration(
    args: GetThingRuntimeConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetThingRuntimeConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetThingRuntimeConfigurationCommandOutput) => void
  ): Promise<GetThingRuntimeConfigurationCommandOutput> | void {
    const command = new GetThingRuntimeConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
   */
  public listBulkDeploymentDetailedReports(
    args: ListBulkDeploymentDetailedReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBulkDeploymentDetailedReportsCommandOutput>;
  public listBulkDeploymentDetailedReports(
    args: ListBulkDeploymentDetailedReportsCommandInput,
    cb: (err: any, data?: ListBulkDeploymentDetailedReportsCommandOutput) => void
  ): void;
  public listBulkDeploymentDetailedReports(
    args: ListBulkDeploymentDetailedReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBulkDeploymentDetailedReportsCommandOutput) => void
  ): void;
  public listBulkDeploymentDetailedReports(
    args: ListBulkDeploymentDetailedReportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBulkDeploymentDetailedReportsCommandOutput) => void),
    cb?: (err: any, data?: ListBulkDeploymentDetailedReportsCommandOutput) => void
  ): Promise<ListBulkDeploymentDetailedReportsCommandOutput> | void {
    const command = new ListBulkDeploymentDetailedReportsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Returns a list of bulk deployments.
   */
  public listBulkDeployments(
    args: ListBulkDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBulkDeploymentsCommandOutput>;
  public listBulkDeployments(
    args: ListBulkDeploymentsCommandInput,
    cb: (err: any, data?: ListBulkDeploymentsCommandOutput) => void
  ): void;
  public listBulkDeployments(
    args: ListBulkDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBulkDeploymentsCommandOutput) => void
  ): void;
  public listBulkDeployments(
    args: ListBulkDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBulkDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: ListBulkDeploymentsCommandOutput) => void
  ): Promise<ListBulkDeploymentsCommandOutput> | void {
    const command = new ListBulkDeploymentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves a list of connector definitions.
   */
  public listConnectorDefinitions(
    args: ListConnectorDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorDefinitionsCommandOutput>;
  public listConnectorDefinitions(
    args: ListConnectorDefinitionsCommandInput,
    cb: (err: any, data?: ListConnectorDefinitionsCommandOutput) => void
  ): void;
  public listConnectorDefinitions(
    args: ListConnectorDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorDefinitionsCommandOutput) => void
  ): void;
  public listConnectorDefinitions(
    args: ListConnectorDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConnectorDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListConnectorDefinitionsCommandOutput) => void
  ): Promise<ListConnectorDefinitionsCommandOutput> | void {
    const command = new ListConnectorDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
   */
  public listConnectorDefinitionVersions(
    args: ListConnectorDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorDefinitionVersionsCommandOutput>;
  public listConnectorDefinitionVersions(
    args: ListConnectorDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListConnectorDefinitionVersionsCommandOutput) => void
  ): void;
  public listConnectorDefinitionVersions(
    args: ListConnectorDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorDefinitionVersionsCommandOutput) => void
  ): void;
  public listConnectorDefinitionVersions(
    args: ListConnectorDefinitionVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConnectorDefinitionVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListConnectorDefinitionVersionsCommandOutput) => void
  ): Promise<ListConnectorDefinitionVersionsCommandOutput> | void {
    const command = new ListConnectorDefinitionVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves a list of core definitions.
   */
  public listCoreDefinitions(
    args: ListCoreDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoreDefinitionsCommandOutput>;
  public listCoreDefinitions(
    args: ListCoreDefinitionsCommandInput,
    cb: (err: any, data?: ListCoreDefinitionsCommandOutput) => void
  ): void;
  public listCoreDefinitions(
    args: ListCoreDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoreDefinitionsCommandOutput) => void
  ): void;
  public listCoreDefinitions(
    args: ListCoreDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCoreDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListCoreDefinitionsCommandOutput) => void
  ): Promise<ListCoreDefinitionsCommandOutput> | void {
    const command = new ListCoreDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Lists the versions of a core definition.
   */
  public listCoreDefinitionVersions(
    args: ListCoreDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoreDefinitionVersionsCommandOutput>;
  public listCoreDefinitionVersions(
    args: ListCoreDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListCoreDefinitionVersionsCommandOutput) => void
  ): void;
  public listCoreDefinitionVersions(
    args: ListCoreDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoreDefinitionVersionsCommandOutput) => void
  ): void;
  public listCoreDefinitionVersions(
    args: ListCoreDefinitionVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCoreDefinitionVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListCoreDefinitionVersionsCommandOutput) => void
  ): Promise<ListCoreDefinitionVersionsCommandOutput> | void {
    const command = new ListCoreDefinitionVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Returns a history of deployments for the group.
   */
  public listDeployments(
    args: ListDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentsCommandOutput>;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): Promise<ListDeploymentsCommandOutput> | void {
    const command = new ListDeploymentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves a list of device definitions.
   */
  public listDeviceDefinitions(
    args: ListDeviceDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceDefinitionsCommandOutput>;
  public listDeviceDefinitions(
    args: ListDeviceDefinitionsCommandInput,
    cb: (err: any, data?: ListDeviceDefinitionsCommandOutput) => void
  ): void;
  public listDeviceDefinitions(
    args: ListDeviceDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceDefinitionsCommandOutput) => void
  ): void;
  public listDeviceDefinitions(
    args: ListDeviceDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeviceDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListDeviceDefinitionsCommandOutput) => void
  ): Promise<ListDeviceDefinitionsCommandOutput> | void {
    const command = new ListDeviceDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Lists the versions of a device definition.
   */
  public listDeviceDefinitionVersions(
    args: ListDeviceDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceDefinitionVersionsCommandOutput>;
  public listDeviceDefinitionVersions(
    args: ListDeviceDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListDeviceDefinitionVersionsCommandOutput) => void
  ): void;
  public listDeviceDefinitionVersions(
    args: ListDeviceDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceDefinitionVersionsCommandOutput) => void
  ): void;
  public listDeviceDefinitionVersions(
    args: ListDeviceDefinitionVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeviceDefinitionVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListDeviceDefinitionVersionsCommandOutput) => void
  ): Promise<ListDeviceDefinitionVersionsCommandOutput> | void {
    const command = new ListDeviceDefinitionVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves a list of Lambda function definitions.
   */
  public listFunctionDefinitions(
    args: ListFunctionDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFunctionDefinitionsCommandOutput>;
  public listFunctionDefinitions(
    args: ListFunctionDefinitionsCommandInput,
    cb: (err: any, data?: ListFunctionDefinitionsCommandOutput) => void
  ): void;
  public listFunctionDefinitions(
    args: ListFunctionDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionDefinitionsCommandOutput) => void
  ): void;
  public listFunctionDefinitions(
    args: ListFunctionDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFunctionDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListFunctionDefinitionsCommandOutput) => void
  ): Promise<ListFunctionDefinitionsCommandOutput> | void {
    const command = new ListFunctionDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Lists the versions of a Lambda function definition.
   */
  public listFunctionDefinitionVersions(
    args: ListFunctionDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFunctionDefinitionVersionsCommandOutput>;
  public listFunctionDefinitionVersions(
    args: ListFunctionDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListFunctionDefinitionVersionsCommandOutput) => void
  ): void;
  public listFunctionDefinitionVersions(
    args: ListFunctionDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionDefinitionVersionsCommandOutput) => void
  ): void;
  public listFunctionDefinitionVersions(
    args: ListFunctionDefinitionVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFunctionDefinitionVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListFunctionDefinitionVersionsCommandOutput) => void
  ): Promise<ListFunctionDefinitionVersionsCommandOutput> | void {
    const command = new ListFunctionDefinitionVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves the current CAs for a group.
   */
  public listGroupCertificateAuthorities(
    args: ListGroupCertificateAuthoritiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupCertificateAuthoritiesCommandOutput>;
  public listGroupCertificateAuthorities(
    args: ListGroupCertificateAuthoritiesCommandInput,
    cb: (err: any, data?: ListGroupCertificateAuthoritiesCommandOutput) => void
  ): void;
  public listGroupCertificateAuthorities(
    args: ListGroupCertificateAuthoritiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupCertificateAuthoritiesCommandOutput) => void
  ): void;
  public listGroupCertificateAuthorities(
    args: ListGroupCertificateAuthoritiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupCertificateAuthoritiesCommandOutput) => void),
    cb?: (err: any, data?: ListGroupCertificateAuthoritiesCommandOutput) => void
  ): Promise<ListGroupCertificateAuthoritiesCommandOutput> | void {
    const command = new ListGroupCertificateAuthoritiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves a list of groups.
   */
  public listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  public listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
  public listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListGroupsCommandOutput) => void
  ): Promise<ListGroupsCommandOutput> | void {
    const command = new ListGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Lists the versions of a group.
   */
  public listGroupVersions(
    args: ListGroupVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupVersionsCommandOutput>;
  public listGroupVersions(
    args: ListGroupVersionsCommandInput,
    cb: (err: any, data?: ListGroupVersionsCommandOutput) => void
  ): void;
  public listGroupVersions(
    args: ListGroupVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupVersionsCommandOutput) => void
  ): void;
  public listGroupVersions(
    args: ListGroupVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListGroupVersionsCommandOutput) => void
  ): Promise<ListGroupVersionsCommandOutput> | void {
    const command = new ListGroupVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves a list of logger definitions.
   */
  public listLoggerDefinitions(
    args: ListLoggerDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLoggerDefinitionsCommandOutput>;
  public listLoggerDefinitions(
    args: ListLoggerDefinitionsCommandInput,
    cb: (err: any, data?: ListLoggerDefinitionsCommandOutput) => void
  ): void;
  public listLoggerDefinitions(
    args: ListLoggerDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLoggerDefinitionsCommandOutput) => void
  ): void;
  public listLoggerDefinitions(
    args: ListLoggerDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLoggerDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListLoggerDefinitionsCommandOutput) => void
  ): Promise<ListLoggerDefinitionsCommandOutput> | void {
    const command = new ListLoggerDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Lists the versions of a logger definition.
   */
  public listLoggerDefinitionVersions(
    args: ListLoggerDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLoggerDefinitionVersionsCommandOutput>;
  public listLoggerDefinitionVersions(
    args: ListLoggerDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListLoggerDefinitionVersionsCommandOutput) => void
  ): void;
  public listLoggerDefinitionVersions(
    args: ListLoggerDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLoggerDefinitionVersionsCommandOutput) => void
  ): void;
  public listLoggerDefinitionVersions(
    args: ListLoggerDefinitionVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLoggerDefinitionVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListLoggerDefinitionVersionsCommandOutput) => void
  ): Promise<ListLoggerDefinitionVersionsCommandOutput> | void {
    const command = new ListLoggerDefinitionVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves a list of resource definitions.
   */
  public listResourceDefinitions(
    args: ListResourceDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceDefinitionsCommandOutput>;
  public listResourceDefinitions(
    args: ListResourceDefinitionsCommandInput,
    cb: (err: any, data?: ListResourceDefinitionsCommandOutput) => void
  ): void;
  public listResourceDefinitions(
    args: ListResourceDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceDefinitionsCommandOutput) => void
  ): void;
  public listResourceDefinitions(
    args: ListResourceDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListResourceDefinitionsCommandOutput) => void
  ): Promise<ListResourceDefinitionsCommandOutput> | void {
    const command = new ListResourceDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Lists the versions of a resource definition.
   */
  public listResourceDefinitionVersions(
    args: ListResourceDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceDefinitionVersionsCommandOutput>;
  public listResourceDefinitionVersions(
    args: ListResourceDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListResourceDefinitionVersionsCommandOutput) => void
  ): void;
  public listResourceDefinitionVersions(
    args: ListResourceDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceDefinitionVersionsCommandOutput) => void
  ): void;
  public listResourceDefinitionVersions(
    args: ListResourceDefinitionVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceDefinitionVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListResourceDefinitionVersionsCommandOutput) => void
  ): Promise<ListResourceDefinitionVersionsCommandOutput> | void {
    const command = new ListResourceDefinitionVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves a list of subscription definitions.
   */
  public listSubscriptionDefinitions(
    args: ListSubscriptionDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionDefinitionsCommandOutput>;
  public listSubscriptionDefinitions(
    args: ListSubscriptionDefinitionsCommandInput,
    cb: (err: any, data?: ListSubscriptionDefinitionsCommandOutput) => void
  ): void;
  public listSubscriptionDefinitions(
    args: ListSubscriptionDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionDefinitionsCommandOutput) => void
  ): void;
  public listSubscriptionDefinitions(
    args: ListSubscriptionDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSubscriptionDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListSubscriptionDefinitionsCommandOutput) => void
  ): Promise<ListSubscriptionDefinitionsCommandOutput> | void {
    const command = new ListSubscriptionDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Lists the versions of a subscription definition.
   */
  public listSubscriptionDefinitionVersions(
    args: ListSubscriptionDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionDefinitionVersionsCommandOutput>;
  public listSubscriptionDefinitionVersions(
    args: ListSubscriptionDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListSubscriptionDefinitionVersionsCommandOutput) => void
  ): void;
  public listSubscriptionDefinitionVersions(
    args: ListSubscriptionDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionDefinitionVersionsCommandOutput) => void
  ): void;
  public listSubscriptionDefinitionVersions(
    args: ListSubscriptionDefinitionVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSubscriptionDefinitionVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListSubscriptionDefinitionVersionsCommandOutput) => void
  ): Promise<ListSubscriptionDefinitionVersionsCommandOutput> | void {
    const command = new ListSubscriptionDefinitionVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieves a list of resource tags for a resource arn.
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Resets a group's deployments.
   */
  public resetDeployments(
    args: ResetDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetDeploymentsCommandOutput>;
  public resetDeployments(
    args: ResetDeploymentsCommandInput,
    cb: (err: any, data?: ResetDeploymentsCommandOutput) => void
  ): void;
  public resetDeployments(
    args: ResetDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetDeploymentsCommandOutput) => void
  ): void;
  public resetDeployments(
    args: ResetDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: ResetDeploymentsCommandOutput) => void
  ): Promise<ResetDeploymentsCommandOutput> | void {
    const command = new ResetDeploymentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
   */
  public startBulkDeployment(
    args: StartBulkDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBulkDeploymentCommandOutput>;
  public startBulkDeployment(
    args: StartBulkDeploymentCommandInput,
    cb: (err: any, data?: StartBulkDeploymentCommandOutput) => void
  ): void;
  public startBulkDeployment(
    args: StartBulkDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBulkDeploymentCommandOutput) => void
  ): void;
  public startBulkDeployment(
    args: StartBulkDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartBulkDeploymentCommandOutput) => void),
    cb?: (err: any, data?: StartBulkDeploymentCommandOutput) => void
  ): Promise<StartBulkDeploymentCommandOutput> | void {
    const command = new StartBulkDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
   */
  public stopBulkDeployment(
    args: StopBulkDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBulkDeploymentCommandOutput>;
  public stopBulkDeployment(
    args: StopBulkDeploymentCommandInput,
    cb: (err: any, data?: StopBulkDeploymentCommandOutput) => void
  ): void;
  public stopBulkDeployment(
    args: StopBulkDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBulkDeploymentCommandOutput) => void
  ): void;
  public stopBulkDeployment(
    args: StopBulkDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopBulkDeploymentCommandOutput) => void),
    cb?: (err: any, data?: StopBulkDeploymentCommandOutput) => void
  ): Promise<StopBulkDeploymentCommandOutput> | void {
    const command = new StopBulkDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Remove resource tags from a Greengrass Resource.
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
   */
  public updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectivityInfoCommandOutput>;
  public updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    cb: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void
  ): void;
  public updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void
  ): void;
  public updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConnectivityInfoCommandOutput) => void),
    cb?: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void
  ): Promise<UpdateConnectivityInfoCommandOutput> | void {
    const command = new UpdateConnectivityInfoCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates a connector definition.
   */
  public updateConnectorDefinition(
    args: UpdateConnectorDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorDefinitionCommandOutput>;
  public updateConnectorDefinition(
    args: UpdateConnectorDefinitionCommandInput,
    cb: (err: any, data?: UpdateConnectorDefinitionCommandOutput) => void
  ): void;
  public updateConnectorDefinition(
    args: UpdateConnectorDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorDefinitionCommandOutput) => void
  ): void;
  public updateConnectorDefinition(
    args: UpdateConnectorDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConnectorDefinitionCommandOutput) => void),
    cb?: (err: any, data?: UpdateConnectorDefinitionCommandOutput) => void
  ): Promise<UpdateConnectorDefinitionCommandOutput> | void {
    const command = new UpdateConnectorDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates a core definition.
   */
  public updateCoreDefinition(
    args: UpdateCoreDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCoreDefinitionCommandOutput>;
  public updateCoreDefinition(
    args: UpdateCoreDefinitionCommandInput,
    cb: (err: any, data?: UpdateCoreDefinitionCommandOutput) => void
  ): void;
  public updateCoreDefinition(
    args: UpdateCoreDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCoreDefinitionCommandOutput) => void
  ): void;
  public updateCoreDefinition(
    args: UpdateCoreDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCoreDefinitionCommandOutput) => void),
    cb?: (err: any, data?: UpdateCoreDefinitionCommandOutput) => void
  ): Promise<UpdateCoreDefinitionCommandOutput> | void {
    const command = new UpdateCoreDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates a device definition.
   */
  public updateDeviceDefinition(
    args: UpdateDeviceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeviceDefinitionCommandOutput>;
  public updateDeviceDefinition(
    args: UpdateDeviceDefinitionCommandInput,
    cb: (err: any, data?: UpdateDeviceDefinitionCommandOutput) => void
  ): void;
  public updateDeviceDefinition(
    args: UpdateDeviceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceDefinitionCommandOutput) => void
  ): void;
  public updateDeviceDefinition(
    args: UpdateDeviceDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDeviceDefinitionCommandOutput) => void),
    cb?: (err: any, data?: UpdateDeviceDefinitionCommandOutput) => void
  ): Promise<UpdateDeviceDefinitionCommandOutput> | void {
    const command = new UpdateDeviceDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates a Lambda function definition.
   */
  public updateFunctionDefinition(
    args: UpdateFunctionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionDefinitionCommandOutput>;
  public updateFunctionDefinition(
    args: UpdateFunctionDefinitionCommandInput,
    cb: (err: any, data?: UpdateFunctionDefinitionCommandOutput) => void
  ): void;
  public updateFunctionDefinition(
    args: UpdateFunctionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionDefinitionCommandOutput) => void
  ): void;
  public updateFunctionDefinition(
    args: UpdateFunctionDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFunctionDefinitionCommandOutput) => void),
    cb?: (err: any, data?: UpdateFunctionDefinitionCommandOutput) => void
  ): Promise<UpdateFunctionDefinitionCommandOutput> | void {
    const command = new UpdateFunctionDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates a group.
   */
  public updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  public updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateGroupCommandOutput) => void
  ): Promise<UpdateGroupCommandOutput> | void {
    const command = new UpdateGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates the Certificate expiry time for a group.
   */
  public updateGroupCertificateConfiguration(
    args: UpdateGroupCertificateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGroupCertificateConfigurationCommandOutput>;
  public updateGroupCertificateConfiguration(
    args: UpdateGroupCertificateConfigurationCommandInput,
    cb: (err: any, data?: UpdateGroupCertificateConfigurationCommandOutput) => void
  ): void;
  public updateGroupCertificateConfiguration(
    args: UpdateGroupCertificateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCertificateConfigurationCommandOutput) => void
  ): void;
  public updateGroupCertificateConfiguration(
    args: UpdateGroupCertificateConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGroupCertificateConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateGroupCertificateConfigurationCommandOutput) => void
  ): Promise<UpdateGroupCertificateConfigurationCommandOutput> | void {
    const command = new UpdateGroupCertificateConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates a logger definition.
   */
  public updateLoggerDefinition(
    args: UpdateLoggerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLoggerDefinitionCommandOutput>;
  public updateLoggerDefinition(
    args: UpdateLoggerDefinitionCommandInput,
    cb: (err: any, data?: UpdateLoggerDefinitionCommandOutput) => void
  ): void;
  public updateLoggerDefinition(
    args: UpdateLoggerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLoggerDefinitionCommandOutput) => void
  ): void;
  public updateLoggerDefinition(
    args: UpdateLoggerDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLoggerDefinitionCommandOutput) => void),
    cb?: (err: any, data?: UpdateLoggerDefinitionCommandOutput) => void
  ): Promise<UpdateLoggerDefinitionCommandOutput> | void {
    const command = new UpdateLoggerDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates a resource definition.
   */
  public updateResourceDefinition(
    args: UpdateResourceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceDefinitionCommandOutput>;
  public updateResourceDefinition(
    args: UpdateResourceDefinitionCommandInput,
    cb: (err: any, data?: UpdateResourceDefinitionCommandOutput) => void
  ): void;
  public updateResourceDefinition(
    args: UpdateResourceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceDefinitionCommandOutput) => void
  ): void;
  public updateResourceDefinition(
    args: UpdateResourceDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResourceDefinitionCommandOutput) => void),
    cb?: (err: any, data?: UpdateResourceDefinitionCommandOutput) => void
  ): Promise<UpdateResourceDefinitionCommandOutput> | void {
    const command = new UpdateResourceDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates a subscription definition.
   */
  public updateSubscriptionDefinition(
    args: UpdateSubscriptionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriptionDefinitionCommandOutput>;
  public updateSubscriptionDefinition(
    args: UpdateSubscriptionDefinitionCommandInput,
    cb: (err: any, data?: UpdateSubscriptionDefinitionCommandOutput) => void
  ): void;
  public updateSubscriptionDefinition(
    args: UpdateSubscriptionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriptionDefinitionCommandOutput) => void
  ): void;
  public updateSubscriptionDefinition(
    args: UpdateSubscriptionDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSubscriptionDefinitionCommandOutput) => void),
    cb?: (err: any, data?: UpdateSubscriptionDefinitionCommandOutput) => void
  ): Promise<UpdateSubscriptionDefinitionCommandOutput> | void {
    const command = new UpdateSubscriptionDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates the runtime configuration of a thing.
   */
  public updateThingRuntimeConfiguration(
    args: UpdateThingRuntimeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThingRuntimeConfigurationCommandOutput>;
  public updateThingRuntimeConfiguration(
    args: UpdateThingRuntimeConfigurationCommandInput,
    cb: (err: any, data?: UpdateThingRuntimeConfigurationCommandOutput) => void
  ): void;
  public updateThingRuntimeConfiguration(
    args: UpdateThingRuntimeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThingRuntimeConfigurationCommandOutput) => void
  ): void;
  public updateThingRuntimeConfiguration(
    args: UpdateThingRuntimeConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateThingRuntimeConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateThingRuntimeConfigurationCommandOutput) => void
  ): Promise<UpdateThingRuntimeConfigurationCommandOutput> | void {
    const command = new UpdateThingRuntimeConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
