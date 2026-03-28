// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type AssociateRoleToGroupCommandInput,
  type AssociateRoleToGroupCommandOutput,
  AssociateRoleToGroupCommand,
} from "./commands/AssociateRoleToGroupCommand";
import {
  type AssociateServiceRoleToAccountCommandInput,
  type AssociateServiceRoleToAccountCommandOutput,
  AssociateServiceRoleToAccountCommand,
} from "./commands/AssociateServiceRoleToAccountCommand";
import {
  type CreateConnectorDefinitionCommandInput,
  type CreateConnectorDefinitionCommandOutput,
  CreateConnectorDefinitionCommand,
} from "./commands/CreateConnectorDefinitionCommand";
import {
  type CreateConnectorDefinitionVersionCommandInput,
  type CreateConnectorDefinitionVersionCommandOutput,
  CreateConnectorDefinitionVersionCommand,
} from "./commands/CreateConnectorDefinitionVersionCommand";
import {
  type CreateCoreDefinitionCommandInput,
  type CreateCoreDefinitionCommandOutput,
  CreateCoreDefinitionCommand,
} from "./commands/CreateCoreDefinitionCommand";
import {
  type CreateCoreDefinitionVersionCommandInput,
  type CreateCoreDefinitionVersionCommandOutput,
  CreateCoreDefinitionVersionCommand,
} from "./commands/CreateCoreDefinitionVersionCommand";
import {
  type CreateDeploymentCommandInput,
  type CreateDeploymentCommandOutput,
  CreateDeploymentCommand,
} from "./commands/CreateDeploymentCommand";
import {
  type CreateDeviceDefinitionCommandInput,
  type CreateDeviceDefinitionCommandOutput,
  CreateDeviceDefinitionCommand,
} from "./commands/CreateDeviceDefinitionCommand";
import {
  type CreateDeviceDefinitionVersionCommandInput,
  type CreateDeviceDefinitionVersionCommandOutput,
  CreateDeviceDefinitionVersionCommand,
} from "./commands/CreateDeviceDefinitionVersionCommand";
import {
  type CreateFunctionDefinitionCommandInput,
  type CreateFunctionDefinitionCommandOutput,
  CreateFunctionDefinitionCommand,
} from "./commands/CreateFunctionDefinitionCommand";
import {
  type CreateFunctionDefinitionVersionCommandInput,
  type CreateFunctionDefinitionVersionCommandOutput,
  CreateFunctionDefinitionVersionCommand,
} from "./commands/CreateFunctionDefinitionVersionCommand";
import {
  type CreateGroupCertificateAuthorityCommandInput,
  type CreateGroupCertificateAuthorityCommandOutput,
  CreateGroupCertificateAuthorityCommand,
} from "./commands/CreateGroupCertificateAuthorityCommand";
import {
  type CreateGroupCommandInput,
  type CreateGroupCommandOutput,
  CreateGroupCommand,
} from "./commands/CreateGroupCommand";
import {
  type CreateGroupVersionCommandInput,
  type CreateGroupVersionCommandOutput,
  CreateGroupVersionCommand,
} from "./commands/CreateGroupVersionCommand";
import {
  type CreateLoggerDefinitionCommandInput,
  type CreateLoggerDefinitionCommandOutput,
  CreateLoggerDefinitionCommand,
} from "./commands/CreateLoggerDefinitionCommand";
import {
  type CreateLoggerDefinitionVersionCommandInput,
  type CreateLoggerDefinitionVersionCommandOutput,
  CreateLoggerDefinitionVersionCommand,
} from "./commands/CreateLoggerDefinitionVersionCommand";
import {
  type CreateResourceDefinitionCommandInput,
  type CreateResourceDefinitionCommandOutput,
  CreateResourceDefinitionCommand,
} from "./commands/CreateResourceDefinitionCommand";
import {
  type CreateResourceDefinitionVersionCommandInput,
  type CreateResourceDefinitionVersionCommandOutput,
  CreateResourceDefinitionVersionCommand,
} from "./commands/CreateResourceDefinitionVersionCommand";
import {
  type CreateSoftwareUpdateJobCommandInput,
  type CreateSoftwareUpdateJobCommandOutput,
  CreateSoftwareUpdateJobCommand,
} from "./commands/CreateSoftwareUpdateJobCommand";
import {
  type CreateSubscriptionDefinitionCommandInput,
  type CreateSubscriptionDefinitionCommandOutput,
  CreateSubscriptionDefinitionCommand,
} from "./commands/CreateSubscriptionDefinitionCommand";
import {
  type CreateSubscriptionDefinitionVersionCommandInput,
  type CreateSubscriptionDefinitionVersionCommandOutput,
  CreateSubscriptionDefinitionVersionCommand,
} from "./commands/CreateSubscriptionDefinitionVersionCommand";
import {
  type DeleteConnectorDefinitionCommandInput,
  type DeleteConnectorDefinitionCommandOutput,
  DeleteConnectorDefinitionCommand,
} from "./commands/DeleteConnectorDefinitionCommand";
import {
  type DeleteCoreDefinitionCommandInput,
  type DeleteCoreDefinitionCommandOutput,
  DeleteCoreDefinitionCommand,
} from "./commands/DeleteCoreDefinitionCommand";
import {
  type DeleteDeviceDefinitionCommandInput,
  type DeleteDeviceDefinitionCommandOutput,
  DeleteDeviceDefinitionCommand,
} from "./commands/DeleteDeviceDefinitionCommand";
import {
  type DeleteFunctionDefinitionCommandInput,
  type DeleteFunctionDefinitionCommandOutput,
  DeleteFunctionDefinitionCommand,
} from "./commands/DeleteFunctionDefinitionCommand";
import {
  type DeleteGroupCommandInput,
  type DeleteGroupCommandOutput,
  DeleteGroupCommand,
} from "./commands/DeleteGroupCommand";
import {
  type DeleteLoggerDefinitionCommandInput,
  type DeleteLoggerDefinitionCommandOutput,
  DeleteLoggerDefinitionCommand,
} from "./commands/DeleteLoggerDefinitionCommand";
import {
  type DeleteResourceDefinitionCommandInput,
  type DeleteResourceDefinitionCommandOutput,
  DeleteResourceDefinitionCommand,
} from "./commands/DeleteResourceDefinitionCommand";
import {
  type DeleteSubscriptionDefinitionCommandInput,
  type DeleteSubscriptionDefinitionCommandOutput,
  DeleteSubscriptionDefinitionCommand,
} from "./commands/DeleteSubscriptionDefinitionCommand";
import {
  type DisassociateRoleFromGroupCommandInput,
  type DisassociateRoleFromGroupCommandOutput,
  DisassociateRoleFromGroupCommand,
} from "./commands/DisassociateRoleFromGroupCommand";
import {
  type DisassociateServiceRoleFromAccountCommandInput,
  type DisassociateServiceRoleFromAccountCommandOutput,
  DisassociateServiceRoleFromAccountCommand,
} from "./commands/DisassociateServiceRoleFromAccountCommand";
import {
  type GetAssociatedRoleCommandInput,
  type GetAssociatedRoleCommandOutput,
  GetAssociatedRoleCommand,
} from "./commands/GetAssociatedRoleCommand";
import {
  type GetBulkDeploymentStatusCommandInput,
  type GetBulkDeploymentStatusCommandOutput,
  GetBulkDeploymentStatusCommand,
} from "./commands/GetBulkDeploymentStatusCommand";
import {
  type GetConnectivityInfoCommandInput,
  type GetConnectivityInfoCommandOutput,
  GetConnectivityInfoCommand,
} from "./commands/GetConnectivityInfoCommand";
import {
  type GetConnectorDefinitionCommandInput,
  type GetConnectorDefinitionCommandOutput,
  GetConnectorDefinitionCommand,
} from "./commands/GetConnectorDefinitionCommand";
import {
  type GetConnectorDefinitionVersionCommandInput,
  type GetConnectorDefinitionVersionCommandOutput,
  GetConnectorDefinitionVersionCommand,
} from "./commands/GetConnectorDefinitionVersionCommand";
import {
  type GetCoreDefinitionCommandInput,
  type GetCoreDefinitionCommandOutput,
  GetCoreDefinitionCommand,
} from "./commands/GetCoreDefinitionCommand";
import {
  type GetCoreDefinitionVersionCommandInput,
  type GetCoreDefinitionVersionCommandOutput,
  GetCoreDefinitionVersionCommand,
} from "./commands/GetCoreDefinitionVersionCommand";
import {
  type GetDeploymentStatusCommandInput,
  type GetDeploymentStatusCommandOutput,
  GetDeploymentStatusCommand,
} from "./commands/GetDeploymentStatusCommand";
import {
  type GetDeviceDefinitionCommandInput,
  type GetDeviceDefinitionCommandOutput,
  GetDeviceDefinitionCommand,
} from "./commands/GetDeviceDefinitionCommand";
import {
  type GetDeviceDefinitionVersionCommandInput,
  type GetDeviceDefinitionVersionCommandOutput,
  GetDeviceDefinitionVersionCommand,
} from "./commands/GetDeviceDefinitionVersionCommand";
import {
  type GetFunctionDefinitionCommandInput,
  type GetFunctionDefinitionCommandOutput,
  GetFunctionDefinitionCommand,
} from "./commands/GetFunctionDefinitionCommand";
import {
  type GetFunctionDefinitionVersionCommandInput,
  type GetFunctionDefinitionVersionCommandOutput,
  GetFunctionDefinitionVersionCommand,
} from "./commands/GetFunctionDefinitionVersionCommand";
import {
  type GetGroupCertificateAuthorityCommandInput,
  type GetGroupCertificateAuthorityCommandOutput,
  GetGroupCertificateAuthorityCommand,
} from "./commands/GetGroupCertificateAuthorityCommand";
import {
  type GetGroupCertificateConfigurationCommandInput,
  type GetGroupCertificateConfigurationCommandOutput,
  GetGroupCertificateConfigurationCommand,
} from "./commands/GetGroupCertificateConfigurationCommand";
import { type GetGroupCommandInput, type GetGroupCommandOutput, GetGroupCommand } from "./commands/GetGroupCommand";
import {
  type GetGroupVersionCommandInput,
  type GetGroupVersionCommandOutput,
  GetGroupVersionCommand,
} from "./commands/GetGroupVersionCommand";
import {
  type GetLoggerDefinitionCommandInput,
  type GetLoggerDefinitionCommandOutput,
  GetLoggerDefinitionCommand,
} from "./commands/GetLoggerDefinitionCommand";
import {
  type GetLoggerDefinitionVersionCommandInput,
  type GetLoggerDefinitionVersionCommandOutput,
  GetLoggerDefinitionVersionCommand,
} from "./commands/GetLoggerDefinitionVersionCommand";
import {
  type GetResourceDefinitionCommandInput,
  type GetResourceDefinitionCommandOutput,
  GetResourceDefinitionCommand,
} from "./commands/GetResourceDefinitionCommand";
import {
  type GetResourceDefinitionVersionCommandInput,
  type GetResourceDefinitionVersionCommandOutput,
  GetResourceDefinitionVersionCommand,
} from "./commands/GetResourceDefinitionVersionCommand";
import {
  type GetServiceRoleForAccountCommandInput,
  type GetServiceRoleForAccountCommandOutput,
  GetServiceRoleForAccountCommand,
} from "./commands/GetServiceRoleForAccountCommand";
import {
  type GetSubscriptionDefinitionCommandInput,
  type GetSubscriptionDefinitionCommandOutput,
  GetSubscriptionDefinitionCommand,
} from "./commands/GetSubscriptionDefinitionCommand";
import {
  type GetSubscriptionDefinitionVersionCommandInput,
  type GetSubscriptionDefinitionVersionCommandOutput,
  GetSubscriptionDefinitionVersionCommand,
} from "./commands/GetSubscriptionDefinitionVersionCommand";
import {
  type GetThingRuntimeConfigurationCommandInput,
  type GetThingRuntimeConfigurationCommandOutput,
  GetThingRuntimeConfigurationCommand,
} from "./commands/GetThingRuntimeConfigurationCommand";
import {
  type ListBulkDeploymentDetailedReportsCommandInput,
  type ListBulkDeploymentDetailedReportsCommandOutput,
  ListBulkDeploymentDetailedReportsCommand,
} from "./commands/ListBulkDeploymentDetailedReportsCommand";
import {
  type ListBulkDeploymentsCommandInput,
  type ListBulkDeploymentsCommandOutput,
  ListBulkDeploymentsCommand,
} from "./commands/ListBulkDeploymentsCommand";
import {
  type ListConnectorDefinitionsCommandInput,
  type ListConnectorDefinitionsCommandOutput,
  ListConnectorDefinitionsCommand,
} from "./commands/ListConnectorDefinitionsCommand";
import {
  type ListConnectorDefinitionVersionsCommandInput,
  type ListConnectorDefinitionVersionsCommandOutput,
  ListConnectorDefinitionVersionsCommand,
} from "./commands/ListConnectorDefinitionVersionsCommand";
import {
  type ListCoreDefinitionsCommandInput,
  type ListCoreDefinitionsCommandOutput,
  ListCoreDefinitionsCommand,
} from "./commands/ListCoreDefinitionsCommand";
import {
  type ListCoreDefinitionVersionsCommandInput,
  type ListCoreDefinitionVersionsCommandOutput,
  ListCoreDefinitionVersionsCommand,
} from "./commands/ListCoreDefinitionVersionsCommand";
import {
  type ListDeploymentsCommandInput,
  type ListDeploymentsCommandOutput,
  ListDeploymentsCommand,
} from "./commands/ListDeploymentsCommand";
import {
  type ListDeviceDefinitionsCommandInput,
  type ListDeviceDefinitionsCommandOutput,
  ListDeviceDefinitionsCommand,
} from "./commands/ListDeviceDefinitionsCommand";
import {
  type ListDeviceDefinitionVersionsCommandInput,
  type ListDeviceDefinitionVersionsCommandOutput,
  ListDeviceDefinitionVersionsCommand,
} from "./commands/ListDeviceDefinitionVersionsCommand";
import {
  type ListFunctionDefinitionsCommandInput,
  type ListFunctionDefinitionsCommandOutput,
  ListFunctionDefinitionsCommand,
} from "./commands/ListFunctionDefinitionsCommand";
import {
  type ListFunctionDefinitionVersionsCommandInput,
  type ListFunctionDefinitionVersionsCommandOutput,
  ListFunctionDefinitionVersionsCommand,
} from "./commands/ListFunctionDefinitionVersionsCommand";
import {
  type ListGroupCertificateAuthoritiesCommandInput,
  type ListGroupCertificateAuthoritiesCommandOutput,
  ListGroupCertificateAuthoritiesCommand,
} from "./commands/ListGroupCertificateAuthoritiesCommand";
import {
  type ListGroupsCommandInput,
  type ListGroupsCommandOutput,
  ListGroupsCommand,
} from "./commands/ListGroupsCommand";
import {
  type ListGroupVersionsCommandInput,
  type ListGroupVersionsCommandOutput,
  ListGroupVersionsCommand,
} from "./commands/ListGroupVersionsCommand";
import {
  type ListLoggerDefinitionsCommandInput,
  type ListLoggerDefinitionsCommandOutput,
  ListLoggerDefinitionsCommand,
} from "./commands/ListLoggerDefinitionsCommand";
import {
  type ListLoggerDefinitionVersionsCommandInput,
  type ListLoggerDefinitionVersionsCommandOutput,
  ListLoggerDefinitionVersionsCommand,
} from "./commands/ListLoggerDefinitionVersionsCommand";
import {
  type ListResourceDefinitionsCommandInput,
  type ListResourceDefinitionsCommandOutput,
  ListResourceDefinitionsCommand,
} from "./commands/ListResourceDefinitionsCommand";
import {
  type ListResourceDefinitionVersionsCommandInput,
  type ListResourceDefinitionVersionsCommandOutput,
  ListResourceDefinitionVersionsCommand,
} from "./commands/ListResourceDefinitionVersionsCommand";
import {
  type ListSubscriptionDefinitionsCommandInput,
  type ListSubscriptionDefinitionsCommandOutput,
  ListSubscriptionDefinitionsCommand,
} from "./commands/ListSubscriptionDefinitionsCommand";
import {
  type ListSubscriptionDefinitionVersionsCommandInput,
  type ListSubscriptionDefinitionVersionsCommandOutput,
  ListSubscriptionDefinitionVersionsCommand,
} from "./commands/ListSubscriptionDefinitionVersionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ResetDeploymentsCommandInput,
  type ResetDeploymentsCommandOutput,
  ResetDeploymentsCommand,
} from "./commands/ResetDeploymentsCommand";
import {
  type StartBulkDeploymentCommandInput,
  type StartBulkDeploymentCommandOutput,
  StartBulkDeploymentCommand,
} from "./commands/StartBulkDeploymentCommand";
import {
  type StopBulkDeploymentCommandInput,
  type StopBulkDeploymentCommandOutput,
  StopBulkDeploymentCommand,
} from "./commands/StopBulkDeploymentCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateConnectivityInfoCommandInput,
  type UpdateConnectivityInfoCommandOutput,
  UpdateConnectivityInfoCommand,
} from "./commands/UpdateConnectivityInfoCommand";
import {
  type UpdateConnectorDefinitionCommandInput,
  type UpdateConnectorDefinitionCommandOutput,
  UpdateConnectorDefinitionCommand,
} from "./commands/UpdateConnectorDefinitionCommand";
import {
  type UpdateCoreDefinitionCommandInput,
  type UpdateCoreDefinitionCommandOutput,
  UpdateCoreDefinitionCommand,
} from "./commands/UpdateCoreDefinitionCommand";
import {
  type UpdateDeviceDefinitionCommandInput,
  type UpdateDeviceDefinitionCommandOutput,
  UpdateDeviceDefinitionCommand,
} from "./commands/UpdateDeviceDefinitionCommand";
import {
  type UpdateFunctionDefinitionCommandInput,
  type UpdateFunctionDefinitionCommandOutput,
  UpdateFunctionDefinitionCommand,
} from "./commands/UpdateFunctionDefinitionCommand";
import {
  type UpdateGroupCertificateConfigurationCommandInput,
  type UpdateGroupCertificateConfigurationCommandOutput,
  UpdateGroupCertificateConfigurationCommand,
} from "./commands/UpdateGroupCertificateConfigurationCommand";
import {
  type UpdateGroupCommandInput,
  type UpdateGroupCommandOutput,
  UpdateGroupCommand,
} from "./commands/UpdateGroupCommand";
import {
  type UpdateLoggerDefinitionCommandInput,
  type UpdateLoggerDefinitionCommandOutput,
  UpdateLoggerDefinitionCommand,
} from "./commands/UpdateLoggerDefinitionCommand";
import {
  type UpdateResourceDefinitionCommandInput,
  type UpdateResourceDefinitionCommandOutput,
  UpdateResourceDefinitionCommand,
} from "./commands/UpdateResourceDefinitionCommand";
import {
  type UpdateSubscriptionDefinitionCommandInput,
  type UpdateSubscriptionDefinitionCommandOutput,
  UpdateSubscriptionDefinitionCommand,
} from "./commands/UpdateSubscriptionDefinitionCommand";
import {
  type UpdateThingRuntimeConfigurationCommandInput,
  type UpdateThingRuntimeConfigurationCommandOutput,
  UpdateThingRuntimeConfigurationCommand,
} from "./commands/UpdateThingRuntimeConfigurationCommand";
import { GreengrassClient } from "./GreengrassClient";

const commands = {
  AssociateRoleToGroupCommand,
  AssociateServiceRoleToAccountCommand,
  CreateConnectorDefinitionCommand,
  CreateConnectorDefinitionVersionCommand,
  CreateCoreDefinitionCommand,
  CreateCoreDefinitionVersionCommand,
  CreateDeploymentCommand,
  CreateDeviceDefinitionCommand,
  CreateDeviceDefinitionVersionCommand,
  CreateFunctionDefinitionCommand,
  CreateFunctionDefinitionVersionCommand,
  CreateGroupCommand,
  CreateGroupCertificateAuthorityCommand,
  CreateGroupVersionCommand,
  CreateLoggerDefinitionCommand,
  CreateLoggerDefinitionVersionCommand,
  CreateResourceDefinitionCommand,
  CreateResourceDefinitionVersionCommand,
  CreateSoftwareUpdateJobCommand,
  CreateSubscriptionDefinitionCommand,
  CreateSubscriptionDefinitionVersionCommand,
  DeleteConnectorDefinitionCommand,
  DeleteCoreDefinitionCommand,
  DeleteDeviceDefinitionCommand,
  DeleteFunctionDefinitionCommand,
  DeleteGroupCommand,
  DeleteLoggerDefinitionCommand,
  DeleteResourceDefinitionCommand,
  DeleteSubscriptionDefinitionCommand,
  DisassociateRoleFromGroupCommand,
  DisassociateServiceRoleFromAccountCommand,
  GetAssociatedRoleCommand,
  GetBulkDeploymentStatusCommand,
  GetConnectivityInfoCommand,
  GetConnectorDefinitionCommand,
  GetConnectorDefinitionVersionCommand,
  GetCoreDefinitionCommand,
  GetCoreDefinitionVersionCommand,
  GetDeploymentStatusCommand,
  GetDeviceDefinitionCommand,
  GetDeviceDefinitionVersionCommand,
  GetFunctionDefinitionCommand,
  GetFunctionDefinitionVersionCommand,
  GetGroupCommand,
  GetGroupCertificateAuthorityCommand,
  GetGroupCertificateConfigurationCommand,
  GetGroupVersionCommand,
  GetLoggerDefinitionCommand,
  GetLoggerDefinitionVersionCommand,
  GetResourceDefinitionCommand,
  GetResourceDefinitionVersionCommand,
  GetServiceRoleForAccountCommand,
  GetSubscriptionDefinitionCommand,
  GetSubscriptionDefinitionVersionCommand,
  GetThingRuntimeConfigurationCommand,
  ListBulkDeploymentDetailedReportsCommand,
  ListBulkDeploymentsCommand,
  ListConnectorDefinitionsCommand,
  ListConnectorDefinitionVersionsCommand,
  ListCoreDefinitionsCommand,
  ListCoreDefinitionVersionsCommand,
  ListDeploymentsCommand,
  ListDeviceDefinitionsCommand,
  ListDeviceDefinitionVersionsCommand,
  ListFunctionDefinitionsCommand,
  ListFunctionDefinitionVersionsCommand,
  ListGroupCertificateAuthoritiesCommand,
  ListGroupsCommand,
  ListGroupVersionsCommand,
  ListLoggerDefinitionsCommand,
  ListLoggerDefinitionVersionsCommand,
  ListResourceDefinitionsCommand,
  ListResourceDefinitionVersionsCommand,
  ListSubscriptionDefinitionsCommand,
  ListSubscriptionDefinitionVersionsCommand,
  ListTagsForResourceCommand,
  ResetDeploymentsCommand,
  StartBulkDeploymentCommand,
  StopBulkDeploymentCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConnectivityInfoCommand,
  UpdateConnectorDefinitionCommand,
  UpdateCoreDefinitionCommand,
  UpdateDeviceDefinitionCommand,
  UpdateFunctionDefinitionCommand,
  UpdateGroupCommand,
  UpdateGroupCertificateConfigurationCommand,
  UpdateLoggerDefinitionCommand,
  UpdateResourceDefinitionCommand,
  UpdateSubscriptionDefinitionCommand,
  UpdateThingRuntimeConfigurationCommand,
};

export interface Greengrass {
  /**
   * @see {@link AssociateRoleToGroupCommand}
   */
  associateRoleToGroup(
    args: AssociateRoleToGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateRoleToGroupCommandOutput>;
  associateRoleToGroup(
    args: AssociateRoleToGroupCommandInput,
    cb: (err: any, data?: AssociateRoleToGroupCommandOutput) => void
  ): void;
  associateRoleToGroup(
    args: AssociateRoleToGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateRoleToGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateServiceRoleToAccountCommand}
   */
  associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateServiceRoleToAccountCommandOutput>;
  associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    cb: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void
  ): void;
  associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectorDefinitionCommand}
   */
  createConnectorDefinition(): Promise<CreateConnectorDefinitionCommandOutput>;
  createConnectorDefinition(
    args: CreateConnectorDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorDefinitionCommandOutput>;
  createConnectorDefinition(
    args: CreateConnectorDefinitionCommandInput,
    cb: (err: any, data?: CreateConnectorDefinitionCommandOutput) => void
  ): void;
  createConnectorDefinition(
    args: CreateConnectorDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectorDefinitionVersionCommand}
   */
  createConnectorDefinitionVersion(
    args: CreateConnectorDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorDefinitionVersionCommandOutput>;
  createConnectorDefinitionVersion(
    args: CreateConnectorDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateConnectorDefinitionVersionCommandOutput) => void
  ): void;
  createConnectorDefinitionVersion(
    args: CreateConnectorDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCoreDefinitionCommand}
   */
  createCoreDefinition(): Promise<CreateCoreDefinitionCommandOutput>;
  createCoreDefinition(
    args: CreateCoreDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCoreDefinitionCommandOutput>;
  createCoreDefinition(
    args: CreateCoreDefinitionCommandInput,
    cb: (err: any, data?: CreateCoreDefinitionCommandOutput) => void
  ): void;
  createCoreDefinition(
    args: CreateCoreDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCoreDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCoreDefinitionVersionCommand}
   */
  createCoreDefinitionVersion(
    args: CreateCoreDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCoreDefinitionVersionCommandOutput>;
  createCoreDefinitionVersion(
    args: CreateCoreDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateCoreDefinitionVersionCommandOutput) => void
  ): void;
  createCoreDefinitionVersion(
    args: CreateCoreDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCoreDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeviceDefinitionCommand}
   */
  createDeviceDefinition(): Promise<CreateDeviceDefinitionCommandOutput>;
  createDeviceDefinition(
    args: CreateDeviceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeviceDefinitionCommandOutput>;
  createDeviceDefinition(
    args: CreateDeviceDefinitionCommandInput,
    cb: (err: any, data?: CreateDeviceDefinitionCommandOutput) => void
  ): void;
  createDeviceDefinition(
    args: CreateDeviceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeviceDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeviceDefinitionVersionCommand}
   */
  createDeviceDefinitionVersion(
    args: CreateDeviceDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeviceDefinitionVersionCommandOutput>;
  createDeviceDefinitionVersion(
    args: CreateDeviceDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateDeviceDefinitionVersionCommandOutput) => void
  ): void;
  createDeviceDefinitionVersion(
    args: CreateDeviceDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeviceDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFunctionDefinitionCommand}
   */
  createFunctionDefinition(): Promise<CreateFunctionDefinitionCommandOutput>;
  createFunctionDefinition(
    args: CreateFunctionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionDefinitionCommandOutput>;
  createFunctionDefinition(
    args: CreateFunctionDefinitionCommandInput,
    cb: (err: any, data?: CreateFunctionDefinitionCommandOutput) => void
  ): void;
  createFunctionDefinition(
    args: CreateFunctionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFunctionDefinitionVersionCommand}
   */
  createFunctionDefinitionVersion(
    args: CreateFunctionDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionDefinitionVersionCommandOutput>;
  createFunctionDefinitionVersion(
    args: CreateFunctionDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateFunctionDefinitionVersionCommandOutput) => void
  ): void;
  createFunctionDefinitionVersion(
    args: CreateFunctionDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(
    args: CreateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupCommandOutput>;
  createGroup(
    args: CreateGroupCommandInput,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupCertificateAuthorityCommand}
   */
  createGroupCertificateAuthority(
    args: CreateGroupCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupCertificateAuthorityCommandOutput>;
  createGroupCertificateAuthority(
    args: CreateGroupCertificateAuthorityCommandInput,
    cb: (err: any, data?: CreateGroupCertificateAuthorityCommandOutput) => void
  ): void;
  createGroupCertificateAuthority(
    args: CreateGroupCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCertificateAuthorityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupVersionCommand}
   */
  createGroupVersion(
    args: CreateGroupVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupVersionCommandOutput>;
  createGroupVersion(
    args: CreateGroupVersionCommandInput,
    cb: (err: any, data?: CreateGroupVersionCommandOutput) => void
  ): void;
  createGroupVersion(
    args: CreateGroupVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLoggerDefinitionCommand}
   */
  createLoggerDefinition(): Promise<CreateLoggerDefinitionCommandOutput>;
  createLoggerDefinition(
    args: CreateLoggerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoggerDefinitionCommandOutput>;
  createLoggerDefinition(
    args: CreateLoggerDefinitionCommandInput,
    cb: (err: any, data?: CreateLoggerDefinitionCommandOutput) => void
  ): void;
  createLoggerDefinition(
    args: CreateLoggerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoggerDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLoggerDefinitionVersionCommand}
   */
  createLoggerDefinitionVersion(
    args: CreateLoggerDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoggerDefinitionVersionCommandOutput>;
  createLoggerDefinitionVersion(
    args: CreateLoggerDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateLoggerDefinitionVersionCommandOutput) => void
  ): void;
  createLoggerDefinitionVersion(
    args: CreateLoggerDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoggerDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceDefinitionCommand}
   */
  createResourceDefinition(): Promise<CreateResourceDefinitionCommandOutput>;
  createResourceDefinition(
    args: CreateResourceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceDefinitionCommandOutput>;
  createResourceDefinition(
    args: CreateResourceDefinitionCommandInput,
    cb: (err: any, data?: CreateResourceDefinitionCommandOutput) => void
  ): void;
  createResourceDefinition(
    args: CreateResourceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceDefinitionVersionCommand}
   */
  createResourceDefinitionVersion(
    args: CreateResourceDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceDefinitionVersionCommandOutput>;
  createResourceDefinitionVersion(
    args: CreateResourceDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateResourceDefinitionVersionCommandOutput) => void
  ): void;
  createResourceDefinitionVersion(
    args: CreateResourceDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSoftwareUpdateJobCommand}
   */
  createSoftwareUpdateJob(
    args: CreateSoftwareUpdateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSoftwareUpdateJobCommandOutput>;
  createSoftwareUpdateJob(
    args: CreateSoftwareUpdateJobCommandInput,
    cb: (err: any, data?: CreateSoftwareUpdateJobCommandOutput) => void
  ): void;
  createSoftwareUpdateJob(
    args: CreateSoftwareUpdateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSoftwareUpdateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriptionDefinitionCommand}
   */
  createSubscriptionDefinition(): Promise<CreateSubscriptionDefinitionCommandOutput>;
  createSubscriptionDefinition(
    args: CreateSubscriptionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriptionDefinitionCommandOutput>;
  createSubscriptionDefinition(
    args: CreateSubscriptionDefinitionCommandInput,
    cb: (err: any, data?: CreateSubscriptionDefinitionCommandOutput) => void
  ): void;
  createSubscriptionDefinition(
    args: CreateSubscriptionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriptionDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriptionDefinitionVersionCommand}
   */
  createSubscriptionDefinitionVersion(
    args: CreateSubscriptionDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriptionDefinitionVersionCommandOutput>;
  createSubscriptionDefinitionVersion(
    args: CreateSubscriptionDefinitionVersionCommandInput,
    cb: (err: any, data?: CreateSubscriptionDefinitionVersionCommandOutput) => void
  ): void;
  createSubscriptionDefinitionVersion(
    args: CreateSubscriptionDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriptionDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectorDefinitionCommand}
   */
  deleteConnectorDefinition(
    args: DeleteConnectorDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectorDefinitionCommandOutput>;
  deleteConnectorDefinition(
    args: DeleteConnectorDefinitionCommandInput,
    cb: (err: any, data?: DeleteConnectorDefinitionCommandOutput) => void
  ): void;
  deleteConnectorDefinition(
    args: DeleteConnectorDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCoreDefinitionCommand}
   */
  deleteCoreDefinition(
    args: DeleteCoreDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCoreDefinitionCommandOutput>;
  deleteCoreDefinition(
    args: DeleteCoreDefinitionCommandInput,
    cb: (err: any, data?: DeleteCoreDefinitionCommandOutput) => void
  ): void;
  deleteCoreDefinition(
    args: DeleteCoreDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCoreDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeviceDefinitionCommand}
   */
  deleteDeviceDefinition(
    args: DeleteDeviceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeviceDefinitionCommandOutput>;
  deleteDeviceDefinition(
    args: DeleteDeviceDefinitionCommandInput,
    cb: (err: any, data?: DeleteDeviceDefinitionCommandOutput) => void
  ): void;
  deleteDeviceDefinition(
    args: DeleteDeviceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFunctionDefinitionCommand}
   */
  deleteFunctionDefinition(
    args: DeleteFunctionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionDefinitionCommandOutput>;
  deleteFunctionDefinition(
    args: DeleteFunctionDefinitionCommandInput,
    cb: (err: any, data?: DeleteFunctionDefinitionCommandOutput) => void
  ): void;
  deleteFunctionDefinition(
    args: DeleteFunctionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(
    args: DeleteGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupCommandOutput>;
  deleteGroup(
    args: DeleteGroupCommandInput,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLoggerDefinitionCommand}
   */
  deleteLoggerDefinition(
    args: DeleteLoggerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoggerDefinitionCommandOutput>;
  deleteLoggerDefinition(
    args: DeleteLoggerDefinitionCommandInput,
    cb: (err: any, data?: DeleteLoggerDefinitionCommandOutput) => void
  ): void;
  deleteLoggerDefinition(
    args: DeleteLoggerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoggerDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceDefinitionCommand}
   */
  deleteResourceDefinition(
    args: DeleteResourceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceDefinitionCommandOutput>;
  deleteResourceDefinition(
    args: DeleteResourceDefinitionCommandInput,
    cb: (err: any, data?: DeleteResourceDefinitionCommandOutput) => void
  ): void;
  deleteResourceDefinition(
    args: DeleteResourceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubscriptionDefinitionCommand}
   */
  deleteSubscriptionDefinition(
    args: DeleteSubscriptionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriptionDefinitionCommandOutput>;
  deleteSubscriptionDefinition(
    args: DeleteSubscriptionDefinitionCommandInput,
    cb: (err: any, data?: DeleteSubscriptionDefinitionCommandOutput) => void
  ): void;
  deleteSubscriptionDefinition(
    args: DeleteSubscriptionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriptionDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateRoleFromGroupCommand}
   */
  disassociateRoleFromGroup(
    args: DisassociateRoleFromGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRoleFromGroupCommandOutput>;
  disassociateRoleFromGroup(
    args: DisassociateRoleFromGroupCommandInput,
    cb: (err: any, data?: DisassociateRoleFromGroupCommandOutput) => void
  ): void;
  disassociateRoleFromGroup(
    args: DisassociateRoleFromGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRoleFromGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateServiceRoleFromAccountCommand}
   */
  disassociateServiceRoleFromAccount(): Promise<DisassociateServiceRoleFromAccountCommandOutput>;
  disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateServiceRoleFromAccountCommandOutput>;
  disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    cb: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void
  ): void;
  disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssociatedRoleCommand}
   */
  getAssociatedRole(
    args: GetAssociatedRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssociatedRoleCommandOutput>;
  getAssociatedRole(
    args: GetAssociatedRoleCommandInput,
    cb: (err: any, data?: GetAssociatedRoleCommandOutput) => void
  ): void;
  getAssociatedRole(
    args: GetAssociatedRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssociatedRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBulkDeploymentStatusCommand}
   */
  getBulkDeploymentStatus(
    args: GetBulkDeploymentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBulkDeploymentStatusCommandOutput>;
  getBulkDeploymentStatus(
    args: GetBulkDeploymentStatusCommandInput,
    cb: (err: any, data?: GetBulkDeploymentStatusCommandOutput) => void
  ): void;
  getBulkDeploymentStatus(
    args: GetBulkDeploymentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBulkDeploymentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectivityInfoCommand}
   */
  getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectivityInfoCommandOutput>;
  getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    cb: (err: any, data?: GetConnectivityInfoCommandOutput) => void
  ): void;
  getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectivityInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectorDefinitionCommand}
   */
  getConnectorDefinition(
    args: GetConnectorDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectorDefinitionCommandOutput>;
  getConnectorDefinition(
    args: GetConnectorDefinitionCommandInput,
    cb: (err: any, data?: GetConnectorDefinitionCommandOutput) => void
  ): void;
  getConnectorDefinition(
    args: GetConnectorDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectorDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectorDefinitionVersionCommand}
   */
  getConnectorDefinitionVersion(
    args: GetConnectorDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectorDefinitionVersionCommandOutput>;
  getConnectorDefinitionVersion(
    args: GetConnectorDefinitionVersionCommandInput,
    cb: (err: any, data?: GetConnectorDefinitionVersionCommandOutput) => void
  ): void;
  getConnectorDefinitionVersion(
    args: GetConnectorDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectorDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCoreDefinitionCommand}
   */
  getCoreDefinition(
    args: GetCoreDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoreDefinitionCommandOutput>;
  getCoreDefinition(
    args: GetCoreDefinitionCommandInput,
    cb: (err: any, data?: GetCoreDefinitionCommandOutput) => void
  ): void;
  getCoreDefinition(
    args: GetCoreDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCoreDefinitionVersionCommand}
   */
  getCoreDefinitionVersion(
    args: GetCoreDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoreDefinitionVersionCommandOutput>;
  getCoreDefinitionVersion(
    args: GetCoreDefinitionVersionCommandInput,
    cb: (err: any, data?: GetCoreDefinitionVersionCommandOutput) => void
  ): void;
  getCoreDefinitionVersion(
    args: GetCoreDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentStatusCommand}
   */
  getDeploymentStatus(
    args: GetDeploymentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentStatusCommandOutput>;
  getDeploymentStatus(
    args: GetDeploymentStatusCommandInput,
    cb: (err: any, data?: GetDeploymentStatusCommandOutput) => void
  ): void;
  getDeploymentStatus(
    args: GetDeploymentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceDefinitionCommand}
   */
  getDeviceDefinition(
    args: GetDeviceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceDefinitionCommandOutput>;
  getDeviceDefinition(
    args: GetDeviceDefinitionCommandInput,
    cb: (err: any, data?: GetDeviceDefinitionCommandOutput) => void
  ): void;
  getDeviceDefinition(
    args: GetDeviceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceDefinitionVersionCommand}
   */
  getDeviceDefinitionVersion(
    args: GetDeviceDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceDefinitionVersionCommandOutput>;
  getDeviceDefinitionVersion(
    args: GetDeviceDefinitionVersionCommandInput,
    cb: (err: any, data?: GetDeviceDefinitionVersionCommandOutput) => void
  ): void;
  getDeviceDefinitionVersion(
    args: GetDeviceDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFunctionDefinitionCommand}
   */
  getFunctionDefinition(
    args: GetFunctionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionDefinitionCommandOutput>;
  getFunctionDefinition(
    args: GetFunctionDefinitionCommandInput,
    cb: (err: any, data?: GetFunctionDefinitionCommandOutput) => void
  ): void;
  getFunctionDefinition(
    args: GetFunctionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFunctionDefinitionVersionCommand}
   */
  getFunctionDefinitionVersion(
    args: GetFunctionDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionDefinitionVersionCommandOutput>;
  getFunctionDefinitionVersion(
    args: GetFunctionDefinitionVersionCommandInput,
    cb: (err: any, data?: GetFunctionDefinitionVersionCommandOutput) => void
  ): void;
  getFunctionDefinitionVersion(
    args: GetFunctionDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(
    args: GetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupCommandOutput>;
  getGroup(
    args: GetGroupCommandInput,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;
  getGroup(
    args: GetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupCertificateAuthorityCommand}
   */
  getGroupCertificateAuthority(
    args: GetGroupCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupCertificateAuthorityCommandOutput>;
  getGroupCertificateAuthority(
    args: GetGroupCertificateAuthorityCommandInput,
    cb: (err: any, data?: GetGroupCertificateAuthorityCommandOutput) => void
  ): void;
  getGroupCertificateAuthority(
    args: GetGroupCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCertificateAuthorityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupCertificateConfigurationCommand}
   */
  getGroupCertificateConfiguration(
    args: GetGroupCertificateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupCertificateConfigurationCommandOutput>;
  getGroupCertificateConfiguration(
    args: GetGroupCertificateConfigurationCommandInput,
    cb: (err: any, data?: GetGroupCertificateConfigurationCommandOutput) => void
  ): void;
  getGroupCertificateConfiguration(
    args: GetGroupCertificateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCertificateConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupVersionCommand}
   */
  getGroupVersion(
    args: GetGroupVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupVersionCommandOutput>;
  getGroupVersion(
    args: GetGroupVersionCommandInput,
    cb: (err: any, data?: GetGroupVersionCommandOutput) => void
  ): void;
  getGroupVersion(
    args: GetGroupVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLoggerDefinitionCommand}
   */
  getLoggerDefinition(
    args: GetLoggerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoggerDefinitionCommandOutput>;
  getLoggerDefinition(
    args: GetLoggerDefinitionCommandInput,
    cb: (err: any, data?: GetLoggerDefinitionCommandOutput) => void
  ): void;
  getLoggerDefinition(
    args: GetLoggerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoggerDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLoggerDefinitionVersionCommand}
   */
  getLoggerDefinitionVersion(
    args: GetLoggerDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoggerDefinitionVersionCommandOutput>;
  getLoggerDefinitionVersion(
    args: GetLoggerDefinitionVersionCommandInput,
    cb: (err: any, data?: GetLoggerDefinitionVersionCommandOutput) => void
  ): void;
  getLoggerDefinitionVersion(
    args: GetLoggerDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoggerDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceDefinitionCommand}
   */
  getResourceDefinition(
    args: GetResourceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceDefinitionCommandOutput>;
  getResourceDefinition(
    args: GetResourceDefinitionCommandInput,
    cb: (err: any, data?: GetResourceDefinitionCommandOutput) => void
  ): void;
  getResourceDefinition(
    args: GetResourceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceDefinitionVersionCommand}
   */
  getResourceDefinitionVersion(
    args: GetResourceDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceDefinitionVersionCommandOutput>;
  getResourceDefinitionVersion(
    args: GetResourceDefinitionVersionCommandInput,
    cb: (err: any, data?: GetResourceDefinitionVersionCommandOutput) => void
  ): void;
  getResourceDefinitionVersion(
    args: GetResourceDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceRoleForAccountCommand}
   */
  getServiceRoleForAccount(): Promise<GetServiceRoleForAccountCommandOutput>;
  getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceRoleForAccountCommandOutput>;
  getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    cb: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void
  ): void;
  getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionDefinitionCommand}
   */
  getSubscriptionDefinition(
    args: GetSubscriptionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionDefinitionCommandOutput>;
  getSubscriptionDefinition(
    args: GetSubscriptionDefinitionCommandInput,
    cb: (err: any, data?: GetSubscriptionDefinitionCommandOutput) => void
  ): void;
  getSubscriptionDefinition(
    args: GetSubscriptionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionDefinitionVersionCommand}
   */
  getSubscriptionDefinitionVersion(
    args: GetSubscriptionDefinitionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionDefinitionVersionCommandOutput>;
  getSubscriptionDefinitionVersion(
    args: GetSubscriptionDefinitionVersionCommandInput,
    cb: (err: any, data?: GetSubscriptionDefinitionVersionCommandOutput) => void
  ): void;
  getSubscriptionDefinitionVersion(
    args: GetSubscriptionDefinitionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionDefinitionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetThingRuntimeConfigurationCommand}
   */
  getThingRuntimeConfiguration(
    args: GetThingRuntimeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetThingRuntimeConfigurationCommandOutput>;
  getThingRuntimeConfiguration(
    args: GetThingRuntimeConfigurationCommandInput,
    cb: (err: any, data?: GetThingRuntimeConfigurationCommandOutput) => void
  ): void;
  getThingRuntimeConfiguration(
    args: GetThingRuntimeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetThingRuntimeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBulkDeploymentDetailedReportsCommand}
   */
  listBulkDeploymentDetailedReports(
    args: ListBulkDeploymentDetailedReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBulkDeploymentDetailedReportsCommandOutput>;
  listBulkDeploymentDetailedReports(
    args: ListBulkDeploymentDetailedReportsCommandInput,
    cb: (err: any, data?: ListBulkDeploymentDetailedReportsCommandOutput) => void
  ): void;
  listBulkDeploymentDetailedReports(
    args: ListBulkDeploymentDetailedReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBulkDeploymentDetailedReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBulkDeploymentsCommand}
   */
  listBulkDeployments(): Promise<ListBulkDeploymentsCommandOutput>;
  listBulkDeployments(
    args: ListBulkDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBulkDeploymentsCommandOutput>;
  listBulkDeployments(
    args: ListBulkDeploymentsCommandInput,
    cb: (err: any, data?: ListBulkDeploymentsCommandOutput) => void
  ): void;
  listBulkDeployments(
    args: ListBulkDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBulkDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorDefinitionsCommand}
   */
  listConnectorDefinitions(): Promise<ListConnectorDefinitionsCommandOutput>;
  listConnectorDefinitions(
    args: ListConnectorDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorDefinitionsCommandOutput>;
  listConnectorDefinitions(
    args: ListConnectorDefinitionsCommandInput,
    cb: (err: any, data?: ListConnectorDefinitionsCommandOutput) => void
  ): void;
  listConnectorDefinitions(
    args: ListConnectorDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorDefinitionVersionsCommand}
   */
  listConnectorDefinitionVersions(
    args: ListConnectorDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorDefinitionVersionsCommandOutput>;
  listConnectorDefinitionVersions(
    args: ListConnectorDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListConnectorDefinitionVersionsCommandOutput) => void
  ): void;
  listConnectorDefinitionVersions(
    args: ListConnectorDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorDefinitionVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCoreDefinitionsCommand}
   */
  listCoreDefinitions(): Promise<ListCoreDefinitionsCommandOutput>;
  listCoreDefinitions(
    args: ListCoreDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoreDefinitionsCommandOutput>;
  listCoreDefinitions(
    args: ListCoreDefinitionsCommandInput,
    cb: (err: any, data?: ListCoreDefinitionsCommandOutput) => void
  ): void;
  listCoreDefinitions(
    args: ListCoreDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoreDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCoreDefinitionVersionsCommand}
   */
  listCoreDefinitionVersions(
    args: ListCoreDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoreDefinitionVersionsCommandOutput>;
  listCoreDefinitionVersions(
    args: ListCoreDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListCoreDefinitionVersionsCommandOutput) => void
  ): void;
  listCoreDefinitionVersions(
    args: ListCoreDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoreDefinitionVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentsCommand}
   */
  listDeployments(
    args: ListDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentsCommandOutput>;
  listDeployments(
    args: ListDeploymentsCommandInput,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeviceDefinitionsCommand}
   */
  listDeviceDefinitions(): Promise<ListDeviceDefinitionsCommandOutput>;
  listDeviceDefinitions(
    args: ListDeviceDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceDefinitionsCommandOutput>;
  listDeviceDefinitions(
    args: ListDeviceDefinitionsCommandInput,
    cb: (err: any, data?: ListDeviceDefinitionsCommandOutput) => void
  ): void;
  listDeviceDefinitions(
    args: ListDeviceDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeviceDefinitionVersionsCommand}
   */
  listDeviceDefinitionVersions(
    args: ListDeviceDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceDefinitionVersionsCommandOutput>;
  listDeviceDefinitionVersions(
    args: ListDeviceDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListDeviceDefinitionVersionsCommandOutput) => void
  ): void;
  listDeviceDefinitionVersions(
    args: ListDeviceDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceDefinitionVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFunctionDefinitionsCommand}
   */
  listFunctionDefinitions(): Promise<ListFunctionDefinitionsCommandOutput>;
  listFunctionDefinitions(
    args: ListFunctionDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFunctionDefinitionsCommandOutput>;
  listFunctionDefinitions(
    args: ListFunctionDefinitionsCommandInput,
    cb: (err: any, data?: ListFunctionDefinitionsCommandOutput) => void
  ): void;
  listFunctionDefinitions(
    args: ListFunctionDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFunctionDefinitionVersionsCommand}
   */
  listFunctionDefinitionVersions(
    args: ListFunctionDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFunctionDefinitionVersionsCommandOutput>;
  listFunctionDefinitionVersions(
    args: ListFunctionDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListFunctionDefinitionVersionsCommandOutput) => void
  ): void;
  listFunctionDefinitionVersions(
    args: ListFunctionDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionDefinitionVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupCertificateAuthoritiesCommand}
   */
  listGroupCertificateAuthorities(
    args: ListGroupCertificateAuthoritiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupCertificateAuthoritiesCommandOutput>;
  listGroupCertificateAuthorities(
    args: ListGroupCertificateAuthoritiesCommandInput,
    cb: (err: any, data?: ListGroupCertificateAuthoritiesCommandOutput) => void
  ): void;
  listGroupCertificateAuthorities(
    args: ListGroupCertificateAuthoritiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupCertificateAuthoritiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(): Promise<ListGroupsCommandOutput>;
  listGroups(
    args: ListGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupsCommandOutput>;
  listGroups(
    args: ListGroupsCommandInput,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupVersionsCommand}
   */
  listGroupVersions(
    args: ListGroupVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupVersionsCommandOutput>;
  listGroupVersions(
    args: ListGroupVersionsCommandInput,
    cb: (err: any, data?: ListGroupVersionsCommandOutput) => void
  ): void;
  listGroupVersions(
    args: ListGroupVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLoggerDefinitionsCommand}
   */
  listLoggerDefinitions(): Promise<ListLoggerDefinitionsCommandOutput>;
  listLoggerDefinitions(
    args: ListLoggerDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLoggerDefinitionsCommandOutput>;
  listLoggerDefinitions(
    args: ListLoggerDefinitionsCommandInput,
    cb: (err: any, data?: ListLoggerDefinitionsCommandOutput) => void
  ): void;
  listLoggerDefinitions(
    args: ListLoggerDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLoggerDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLoggerDefinitionVersionsCommand}
   */
  listLoggerDefinitionVersions(
    args: ListLoggerDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLoggerDefinitionVersionsCommandOutput>;
  listLoggerDefinitionVersions(
    args: ListLoggerDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListLoggerDefinitionVersionsCommandOutput) => void
  ): void;
  listLoggerDefinitionVersions(
    args: ListLoggerDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLoggerDefinitionVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceDefinitionsCommand}
   */
  listResourceDefinitions(): Promise<ListResourceDefinitionsCommandOutput>;
  listResourceDefinitions(
    args: ListResourceDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceDefinitionsCommandOutput>;
  listResourceDefinitions(
    args: ListResourceDefinitionsCommandInput,
    cb: (err: any, data?: ListResourceDefinitionsCommandOutput) => void
  ): void;
  listResourceDefinitions(
    args: ListResourceDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceDefinitionVersionsCommand}
   */
  listResourceDefinitionVersions(
    args: ListResourceDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceDefinitionVersionsCommandOutput>;
  listResourceDefinitionVersions(
    args: ListResourceDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListResourceDefinitionVersionsCommandOutput) => void
  ): void;
  listResourceDefinitionVersions(
    args: ListResourceDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceDefinitionVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionDefinitionsCommand}
   */
  listSubscriptionDefinitions(): Promise<ListSubscriptionDefinitionsCommandOutput>;
  listSubscriptionDefinitions(
    args: ListSubscriptionDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionDefinitionsCommandOutput>;
  listSubscriptionDefinitions(
    args: ListSubscriptionDefinitionsCommandInput,
    cb: (err: any, data?: ListSubscriptionDefinitionsCommandOutput) => void
  ): void;
  listSubscriptionDefinitions(
    args: ListSubscriptionDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionDefinitionVersionsCommand}
   */
  listSubscriptionDefinitionVersions(
    args: ListSubscriptionDefinitionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionDefinitionVersionsCommandOutput>;
  listSubscriptionDefinitionVersions(
    args: ListSubscriptionDefinitionVersionsCommandInput,
    cb: (err: any, data?: ListSubscriptionDefinitionVersionsCommandOutput) => void
  ): void;
  listSubscriptionDefinitionVersions(
    args: ListSubscriptionDefinitionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionDefinitionVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetDeploymentsCommand}
   */
  resetDeployments(
    args: ResetDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetDeploymentsCommandOutput>;
  resetDeployments(
    args: ResetDeploymentsCommandInput,
    cb: (err: any, data?: ResetDeploymentsCommandOutput) => void
  ): void;
  resetDeployments(
    args: ResetDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBulkDeploymentCommand}
   */
  startBulkDeployment(
    args: StartBulkDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBulkDeploymentCommandOutput>;
  startBulkDeployment(
    args: StartBulkDeploymentCommandInput,
    cb: (err: any, data?: StartBulkDeploymentCommandOutput) => void
  ): void;
  startBulkDeployment(
    args: StartBulkDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBulkDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link StopBulkDeploymentCommand}
   */
  stopBulkDeployment(
    args: StopBulkDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBulkDeploymentCommandOutput>;
  stopBulkDeployment(
    args: StopBulkDeploymentCommandInput,
    cb: (err: any, data?: StopBulkDeploymentCommandOutput) => void
  ): void;
  stopBulkDeployment(
    args: StopBulkDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBulkDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectivityInfoCommand}
   */
  updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectivityInfoCommandOutput>;
  updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    cb: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void
  ): void;
  updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectorDefinitionCommand}
   */
  updateConnectorDefinition(
    args: UpdateConnectorDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorDefinitionCommandOutput>;
  updateConnectorDefinition(
    args: UpdateConnectorDefinitionCommandInput,
    cb: (err: any, data?: UpdateConnectorDefinitionCommandOutput) => void
  ): void;
  updateConnectorDefinition(
    args: UpdateConnectorDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCoreDefinitionCommand}
   */
  updateCoreDefinition(
    args: UpdateCoreDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCoreDefinitionCommandOutput>;
  updateCoreDefinition(
    args: UpdateCoreDefinitionCommandInput,
    cb: (err: any, data?: UpdateCoreDefinitionCommandOutput) => void
  ): void;
  updateCoreDefinition(
    args: UpdateCoreDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCoreDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeviceDefinitionCommand}
   */
  updateDeviceDefinition(
    args: UpdateDeviceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeviceDefinitionCommandOutput>;
  updateDeviceDefinition(
    args: UpdateDeviceDefinitionCommandInput,
    cb: (err: any, data?: UpdateDeviceDefinitionCommandOutput) => void
  ): void;
  updateDeviceDefinition(
    args: UpdateDeviceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFunctionDefinitionCommand}
   */
  updateFunctionDefinition(
    args: UpdateFunctionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionDefinitionCommandOutput>;
  updateFunctionDefinition(
    args: UpdateFunctionDefinitionCommandInput,
    cb: (err: any, data?: UpdateFunctionDefinitionCommandOutput) => void
  ): void;
  updateFunctionDefinition(
    args: UpdateFunctionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(
    args: UpdateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGroupCommandOutput>;
  updateGroup(
    args: UpdateGroupCommandInput,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupCertificateConfigurationCommand}
   */
  updateGroupCertificateConfiguration(
    args: UpdateGroupCertificateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGroupCertificateConfigurationCommandOutput>;
  updateGroupCertificateConfiguration(
    args: UpdateGroupCertificateConfigurationCommandInput,
    cb: (err: any, data?: UpdateGroupCertificateConfigurationCommandOutput) => void
  ): void;
  updateGroupCertificateConfiguration(
    args: UpdateGroupCertificateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCertificateConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLoggerDefinitionCommand}
   */
  updateLoggerDefinition(
    args: UpdateLoggerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLoggerDefinitionCommandOutput>;
  updateLoggerDefinition(
    args: UpdateLoggerDefinitionCommandInput,
    cb: (err: any, data?: UpdateLoggerDefinitionCommandOutput) => void
  ): void;
  updateLoggerDefinition(
    args: UpdateLoggerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLoggerDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceDefinitionCommand}
   */
  updateResourceDefinition(
    args: UpdateResourceDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceDefinitionCommandOutput>;
  updateResourceDefinition(
    args: UpdateResourceDefinitionCommandInput,
    cb: (err: any, data?: UpdateResourceDefinitionCommandOutput) => void
  ): void;
  updateResourceDefinition(
    args: UpdateResourceDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubscriptionDefinitionCommand}
   */
  updateSubscriptionDefinition(
    args: UpdateSubscriptionDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriptionDefinitionCommandOutput>;
  updateSubscriptionDefinition(
    args: UpdateSubscriptionDefinitionCommandInput,
    cb: (err: any, data?: UpdateSubscriptionDefinitionCommandOutput) => void
  ): void;
  updateSubscriptionDefinition(
    args: UpdateSubscriptionDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriptionDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThingRuntimeConfigurationCommand}
   */
  updateThingRuntimeConfiguration(
    args: UpdateThingRuntimeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThingRuntimeConfigurationCommandOutput>;
  updateThingRuntimeConfiguration(
    args: UpdateThingRuntimeConfigurationCommandInput,
    cb: (err: any, data?: UpdateThingRuntimeConfigurationCommandOutput) => void
  ): void;
  updateThingRuntimeConfiguration(
    args: UpdateThingRuntimeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThingRuntimeConfigurationCommandOutput) => void
  ): void;
}

/**
 * AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.
 * @public
 */
export class Greengrass extends GreengrassClient implements Greengrass {}
createAggregatedClient(commands, Greengrass);
