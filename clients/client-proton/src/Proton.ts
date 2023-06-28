// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptEnvironmentAccountConnectionCommand,
  AcceptEnvironmentAccountConnectionCommandInput,
  AcceptEnvironmentAccountConnectionCommandOutput,
} from "./commands/AcceptEnvironmentAccountConnectionCommand";
import {
  CancelComponentDeploymentCommand,
  CancelComponentDeploymentCommandInput,
  CancelComponentDeploymentCommandOutput,
} from "./commands/CancelComponentDeploymentCommand";
import {
  CancelEnvironmentDeploymentCommand,
  CancelEnvironmentDeploymentCommandInput,
  CancelEnvironmentDeploymentCommandOutput,
} from "./commands/CancelEnvironmentDeploymentCommand";
import {
  CancelServiceInstanceDeploymentCommand,
  CancelServiceInstanceDeploymentCommandInput,
  CancelServiceInstanceDeploymentCommandOutput,
} from "./commands/CancelServiceInstanceDeploymentCommand";
import {
  CancelServicePipelineDeploymentCommand,
  CancelServicePipelineDeploymentCommandInput,
  CancelServicePipelineDeploymentCommandOutput,
} from "./commands/CancelServicePipelineDeploymentCommand";
import {
  CreateComponentCommand,
  CreateComponentCommandInput,
  CreateComponentCommandOutput,
} from "./commands/CreateComponentCommand";
import {
  CreateEnvironmentAccountConnectionCommand,
  CreateEnvironmentAccountConnectionCommandInput,
  CreateEnvironmentAccountConnectionCommandOutput,
} from "./commands/CreateEnvironmentAccountConnectionCommand";
import {
  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import {
  CreateEnvironmentTemplateCommand,
  CreateEnvironmentTemplateCommandInput,
  CreateEnvironmentTemplateCommandOutput,
} from "./commands/CreateEnvironmentTemplateCommand";
import {
  CreateEnvironmentTemplateVersionCommand,
  CreateEnvironmentTemplateVersionCommandInput,
  CreateEnvironmentTemplateVersionCommandOutput,
} from "./commands/CreateEnvironmentTemplateVersionCommand";
import {
  CreateRepositoryCommand,
  CreateRepositoryCommandInput,
  CreateRepositoryCommandOutput,
} from "./commands/CreateRepositoryCommand";
import {
  CreateServiceCommand,
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
} from "./commands/CreateServiceCommand";
import {
  CreateServiceInstanceCommand,
  CreateServiceInstanceCommandInput,
  CreateServiceInstanceCommandOutput,
} from "./commands/CreateServiceInstanceCommand";
import {
  CreateServiceSyncConfigCommand,
  CreateServiceSyncConfigCommandInput,
  CreateServiceSyncConfigCommandOutput,
} from "./commands/CreateServiceSyncConfigCommand";
import {
  CreateServiceTemplateCommand,
  CreateServiceTemplateCommandInput,
  CreateServiceTemplateCommandOutput,
} from "./commands/CreateServiceTemplateCommand";
import {
  CreateServiceTemplateVersionCommand,
  CreateServiceTemplateVersionCommandInput,
  CreateServiceTemplateVersionCommandOutput,
} from "./commands/CreateServiceTemplateVersionCommand";
import {
  CreateTemplateSyncConfigCommand,
  CreateTemplateSyncConfigCommandInput,
  CreateTemplateSyncConfigCommandOutput,
} from "./commands/CreateTemplateSyncConfigCommand";
import {
  DeleteComponentCommand,
  DeleteComponentCommandInput,
  DeleteComponentCommandOutput,
} from "./commands/DeleteComponentCommand";
import {
  DeleteEnvironmentAccountConnectionCommand,
  DeleteEnvironmentAccountConnectionCommandInput,
  DeleteEnvironmentAccountConnectionCommandOutput,
} from "./commands/DeleteEnvironmentAccountConnectionCommand";
import {
  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentTemplateCommand,
  DeleteEnvironmentTemplateCommandInput,
  DeleteEnvironmentTemplateCommandOutput,
} from "./commands/DeleteEnvironmentTemplateCommand";
import {
  DeleteEnvironmentTemplateVersionCommand,
  DeleteEnvironmentTemplateVersionCommandInput,
  DeleteEnvironmentTemplateVersionCommandOutput,
} from "./commands/DeleteEnvironmentTemplateVersionCommand";
import {
  DeleteRepositoryCommand,
  DeleteRepositoryCommandInput,
  DeleteRepositoryCommandOutput,
} from "./commands/DeleteRepositoryCommand";
import {
  DeleteServiceCommand,
  DeleteServiceCommandInput,
  DeleteServiceCommandOutput,
} from "./commands/DeleteServiceCommand";
import {
  DeleteServiceSyncConfigCommand,
  DeleteServiceSyncConfigCommandInput,
  DeleteServiceSyncConfigCommandOutput,
} from "./commands/DeleteServiceSyncConfigCommand";
import {
  DeleteServiceTemplateCommand,
  DeleteServiceTemplateCommandInput,
  DeleteServiceTemplateCommandOutput,
} from "./commands/DeleteServiceTemplateCommand";
import {
  DeleteServiceTemplateVersionCommand,
  DeleteServiceTemplateVersionCommandInput,
  DeleteServiceTemplateVersionCommandOutput,
} from "./commands/DeleteServiceTemplateVersionCommand";
import {
  DeleteTemplateSyncConfigCommand,
  DeleteTemplateSyncConfigCommandInput,
  DeleteTemplateSyncConfigCommandOutput,
} from "./commands/DeleteTemplateSyncConfigCommand";
import {
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import {
  GetComponentCommand,
  GetComponentCommandInput,
  GetComponentCommandOutput,
} from "./commands/GetComponentCommand";
import {
  GetEnvironmentAccountConnectionCommand,
  GetEnvironmentAccountConnectionCommandInput,
  GetEnvironmentAccountConnectionCommandOutput,
} from "./commands/GetEnvironmentAccountConnectionCommand";
import {
  GetEnvironmentCommand,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
} from "./commands/GetEnvironmentCommand";
import {
  GetEnvironmentTemplateCommand,
  GetEnvironmentTemplateCommandInput,
  GetEnvironmentTemplateCommandOutput,
} from "./commands/GetEnvironmentTemplateCommand";
import {
  GetEnvironmentTemplateVersionCommand,
  GetEnvironmentTemplateVersionCommandInput,
  GetEnvironmentTemplateVersionCommandOutput,
} from "./commands/GetEnvironmentTemplateVersionCommand";
import {
  GetRepositoryCommand,
  GetRepositoryCommandInput,
  GetRepositoryCommandOutput,
} from "./commands/GetRepositoryCommand";
import {
  GetRepositorySyncStatusCommand,
  GetRepositorySyncStatusCommandInput,
  GetRepositorySyncStatusCommandOutput,
} from "./commands/GetRepositorySyncStatusCommand";
import {
  GetResourcesSummaryCommand,
  GetResourcesSummaryCommandInput,
  GetResourcesSummaryCommandOutput,
} from "./commands/GetResourcesSummaryCommand";
import { GetServiceCommand, GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import {
  GetServiceInstanceCommand,
  GetServiceInstanceCommandInput,
  GetServiceInstanceCommandOutput,
} from "./commands/GetServiceInstanceCommand";
import {
  GetServiceInstanceSyncStatusCommand,
  GetServiceInstanceSyncStatusCommandInput,
  GetServiceInstanceSyncStatusCommandOutput,
} from "./commands/GetServiceInstanceSyncStatusCommand";
import {
  GetServiceSyncBlockerSummaryCommand,
  GetServiceSyncBlockerSummaryCommandInput,
  GetServiceSyncBlockerSummaryCommandOutput,
} from "./commands/GetServiceSyncBlockerSummaryCommand";
import {
  GetServiceSyncConfigCommand,
  GetServiceSyncConfigCommandInput,
  GetServiceSyncConfigCommandOutput,
} from "./commands/GetServiceSyncConfigCommand";
import {
  GetServiceTemplateCommand,
  GetServiceTemplateCommandInput,
  GetServiceTemplateCommandOutput,
} from "./commands/GetServiceTemplateCommand";
import {
  GetServiceTemplateVersionCommand,
  GetServiceTemplateVersionCommandInput,
  GetServiceTemplateVersionCommandOutput,
} from "./commands/GetServiceTemplateVersionCommand";
import {
  GetTemplateSyncConfigCommand,
  GetTemplateSyncConfigCommandInput,
  GetTemplateSyncConfigCommandOutput,
} from "./commands/GetTemplateSyncConfigCommand";
import {
  GetTemplateSyncStatusCommand,
  GetTemplateSyncStatusCommandInput,
  GetTemplateSyncStatusCommandOutput,
} from "./commands/GetTemplateSyncStatusCommand";
import {
  ListComponentOutputsCommand,
  ListComponentOutputsCommandInput,
  ListComponentOutputsCommandOutput,
} from "./commands/ListComponentOutputsCommand";
import {
  ListComponentProvisionedResourcesCommand,
  ListComponentProvisionedResourcesCommandInput,
  ListComponentProvisionedResourcesCommandOutput,
} from "./commands/ListComponentProvisionedResourcesCommand";
import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "./commands/ListComponentsCommand";
import {
  ListEnvironmentAccountConnectionsCommand,
  ListEnvironmentAccountConnectionsCommandInput,
  ListEnvironmentAccountConnectionsCommandOutput,
} from "./commands/ListEnvironmentAccountConnectionsCommand";
import {
  ListEnvironmentOutputsCommand,
  ListEnvironmentOutputsCommandInput,
  ListEnvironmentOutputsCommandOutput,
} from "./commands/ListEnvironmentOutputsCommand";
import {
  ListEnvironmentProvisionedResourcesCommand,
  ListEnvironmentProvisionedResourcesCommandInput,
  ListEnvironmentProvisionedResourcesCommandOutput,
} from "./commands/ListEnvironmentProvisionedResourcesCommand";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "./commands/ListEnvironmentsCommand";
import {
  ListEnvironmentTemplatesCommand,
  ListEnvironmentTemplatesCommandInput,
  ListEnvironmentTemplatesCommandOutput,
} from "./commands/ListEnvironmentTemplatesCommand";
import {
  ListEnvironmentTemplateVersionsCommand,
  ListEnvironmentTemplateVersionsCommandInput,
  ListEnvironmentTemplateVersionsCommandOutput,
} from "./commands/ListEnvironmentTemplateVersionsCommand";
import {
  ListRepositoriesCommand,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput,
} from "./commands/ListRepositoriesCommand";
import {
  ListRepositorySyncDefinitionsCommand,
  ListRepositorySyncDefinitionsCommandInput,
  ListRepositorySyncDefinitionsCommandOutput,
} from "./commands/ListRepositorySyncDefinitionsCommand";
import {
  ListServiceInstanceOutputsCommand,
  ListServiceInstanceOutputsCommandInput,
  ListServiceInstanceOutputsCommandOutput,
} from "./commands/ListServiceInstanceOutputsCommand";
import {
  ListServiceInstanceProvisionedResourcesCommand,
  ListServiceInstanceProvisionedResourcesCommandInput,
  ListServiceInstanceProvisionedResourcesCommandOutput,
} from "./commands/ListServiceInstanceProvisionedResourcesCommand";
import {
  ListServiceInstancesCommand,
  ListServiceInstancesCommandInput,
  ListServiceInstancesCommandOutput,
} from "./commands/ListServiceInstancesCommand";
import {
  ListServicePipelineOutputsCommand,
  ListServicePipelineOutputsCommandInput,
  ListServicePipelineOutputsCommandOutput,
} from "./commands/ListServicePipelineOutputsCommand";
import {
  ListServicePipelineProvisionedResourcesCommand,
  ListServicePipelineProvisionedResourcesCommandInput,
  ListServicePipelineProvisionedResourcesCommandOutput,
} from "./commands/ListServicePipelineProvisionedResourcesCommand";
import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "./commands/ListServicesCommand";
import {
  ListServiceTemplatesCommand,
  ListServiceTemplatesCommandInput,
  ListServiceTemplatesCommandOutput,
} from "./commands/ListServiceTemplatesCommand";
import {
  ListServiceTemplateVersionsCommand,
  ListServiceTemplateVersionsCommandInput,
  ListServiceTemplateVersionsCommandOutput,
} from "./commands/ListServiceTemplateVersionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  NotifyResourceDeploymentStatusChangeCommand,
  NotifyResourceDeploymentStatusChangeCommandInput,
  NotifyResourceDeploymentStatusChangeCommandOutput,
} from "./commands/NotifyResourceDeploymentStatusChangeCommand";
import {
  RejectEnvironmentAccountConnectionCommand,
  RejectEnvironmentAccountConnectionCommandInput,
  RejectEnvironmentAccountConnectionCommandOutput,
} from "./commands/RejectEnvironmentAccountConnectionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import {
  UpdateComponentCommand,
  UpdateComponentCommandInput,
  UpdateComponentCommandOutput,
} from "./commands/UpdateComponentCommand";
import {
  UpdateEnvironmentAccountConnectionCommand,
  UpdateEnvironmentAccountConnectionCommandInput,
  UpdateEnvironmentAccountConnectionCommandOutput,
} from "./commands/UpdateEnvironmentAccountConnectionCommand";
import {
  UpdateEnvironmentCommand,
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentTemplateCommand,
  UpdateEnvironmentTemplateCommandInput,
  UpdateEnvironmentTemplateCommandOutput,
} from "./commands/UpdateEnvironmentTemplateCommand";
import {
  UpdateEnvironmentTemplateVersionCommand,
  UpdateEnvironmentTemplateVersionCommandInput,
  UpdateEnvironmentTemplateVersionCommandOutput,
} from "./commands/UpdateEnvironmentTemplateVersionCommand";
import {
  UpdateServiceCommand,
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput,
} from "./commands/UpdateServiceCommand";
import {
  UpdateServiceInstanceCommand,
  UpdateServiceInstanceCommandInput,
  UpdateServiceInstanceCommandOutput,
} from "./commands/UpdateServiceInstanceCommand";
import {
  UpdateServicePipelineCommand,
  UpdateServicePipelineCommandInput,
  UpdateServicePipelineCommandOutput,
} from "./commands/UpdateServicePipelineCommand";
import {
  UpdateServiceSyncBlockerCommand,
  UpdateServiceSyncBlockerCommandInput,
  UpdateServiceSyncBlockerCommandOutput,
} from "./commands/UpdateServiceSyncBlockerCommand";
import {
  UpdateServiceSyncConfigCommand,
  UpdateServiceSyncConfigCommandInput,
  UpdateServiceSyncConfigCommandOutput,
} from "./commands/UpdateServiceSyncConfigCommand";
import {
  UpdateServiceTemplateCommand,
  UpdateServiceTemplateCommandInput,
  UpdateServiceTemplateCommandOutput,
} from "./commands/UpdateServiceTemplateCommand";
import {
  UpdateServiceTemplateVersionCommand,
  UpdateServiceTemplateVersionCommandInput,
  UpdateServiceTemplateVersionCommandOutput,
} from "./commands/UpdateServiceTemplateVersionCommand";
import {
  UpdateTemplateSyncConfigCommand,
  UpdateTemplateSyncConfigCommandInput,
  UpdateTemplateSyncConfigCommandOutput,
} from "./commands/UpdateTemplateSyncConfigCommand";
import { ProtonClient, ProtonClientConfig } from "./ProtonClient";

const commands = {
  AcceptEnvironmentAccountConnectionCommand,
  CancelComponentDeploymentCommand,
  CancelEnvironmentDeploymentCommand,
  CancelServiceInstanceDeploymentCommand,
  CancelServicePipelineDeploymentCommand,
  CreateComponentCommand,
  CreateEnvironmentCommand,
  CreateEnvironmentAccountConnectionCommand,
  CreateEnvironmentTemplateCommand,
  CreateEnvironmentTemplateVersionCommand,
  CreateRepositoryCommand,
  CreateServiceCommand,
  CreateServiceInstanceCommand,
  CreateServiceSyncConfigCommand,
  CreateServiceTemplateCommand,
  CreateServiceTemplateVersionCommand,
  CreateTemplateSyncConfigCommand,
  DeleteComponentCommand,
  DeleteEnvironmentCommand,
  DeleteEnvironmentAccountConnectionCommand,
  DeleteEnvironmentTemplateCommand,
  DeleteEnvironmentTemplateVersionCommand,
  DeleteRepositoryCommand,
  DeleteServiceCommand,
  DeleteServiceSyncConfigCommand,
  DeleteServiceTemplateCommand,
  DeleteServiceTemplateVersionCommand,
  DeleteTemplateSyncConfigCommand,
  GetAccountSettingsCommand,
  GetComponentCommand,
  GetEnvironmentCommand,
  GetEnvironmentAccountConnectionCommand,
  GetEnvironmentTemplateCommand,
  GetEnvironmentTemplateVersionCommand,
  GetRepositoryCommand,
  GetRepositorySyncStatusCommand,
  GetResourcesSummaryCommand,
  GetServiceCommand,
  GetServiceInstanceCommand,
  GetServiceInstanceSyncStatusCommand,
  GetServiceSyncBlockerSummaryCommand,
  GetServiceSyncConfigCommand,
  GetServiceTemplateCommand,
  GetServiceTemplateVersionCommand,
  GetTemplateSyncConfigCommand,
  GetTemplateSyncStatusCommand,
  ListComponentOutputsCommand,
  ListComponentProvisionedResourcesCommand,
  ListComponentsCommand,
  ListEnvironmentAccountConnectionsCommand,
  ListEnvironmentOutputsCommand,
  ListEnvironmentProvisionedResourcesCommand,
  ListEnvironmentsCommand,
  ListEnvironmentTemplatesCommand,
  ListEnvironmentTemplateVersionsCommand,
  ListRepositoriesCommand,
  ListRepositorySyncDefinitionsCommand,
  ListServiceInstanceOutputsCommand,
  ListServiceInstanceProvisionedResourcesCommand,
  ListServiceInstancesCommand,
  ListServicePipelineOutputsCommand,
  ListServicePipelineProvisionedResourcesCommand,
  ListServicesCommand,
  ListServiceTemplatesCommand,
  ListServiceTemplateVersionsCommand,
  ListTagsForResourceCommand,
  NotifyResourceDeploymentStatusChangeCommand,
  RejectEnvironmentAccountConnectionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountSettingsCommand,
  UpdateComponentCommand,
  UpdateEnvironmentCommand,
  UpdateEnvironmentAccountConnectionCommand,
  UpdateEnvironmentTemplateCommand,
  UpdateEnvironmentTemplateVersionCommand,
  UpdateServiceCommand,
  UpdateServiceInstanceCommand,
  UpdateServicePipelineCommand,
  UpdateServiceSyncBlockerCommand,
  UpdateServiceSyncConfigCommand,
  UpdateServiceTemplateCommand,
  UpdateServiceTemplateVersionCommand,
  UpdateTemplateSyncConfigCommand,
};

export interface Proton {
  /**
   * @see {@link AcceptEnvironmentAccountConnectionCommand}
   */
  acceptEnvironmentAccountConnection(
    args: AcceptEnvironmentAccountConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptEnvironmentAccountConnectionCommandOutput>;
  acceptEnvironmentAccountConnection(
    args: AcceptEnvironmentAccountConnectionCommandInput,
    cb: (err: any, data?: AcceptEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  acceptEnvironmentAccountConnection(
    args: AcceptEnvironmentAccountConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptEnvironmentAccountConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelComponentDeploymentCommand}
   */
  cancelComponentDeployment(
    args: CancelComponentDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelComponentDeploymentCommandOutput>;
  cancelComponentDeployment(
    args: CancelComponentDeploymentCommandInput,
    cb: (err: any, data?: CancelComponentDeploymentCommandOutput) => void
  ): void;
  cancelComponentDeployment(
    args: CancelComponentDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelComponentDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelEnvironmentDeploymentCommand}
   */
  cancelEnvironmentDeployment(
    args: CancelEnvironmentDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelEnvironmentDeploymentCommandOutput>;
  cancelEnvironmentDeployment(
    args: CancelEnvironmentDeploymentCommandInput,
    cb: (err: any, data?: CancelEnvironmentDeploymentCommandOutput) => void
  ): void;
  cancelEnvironmentDeployment(
    args: CancelEnvironmentDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelEnvironmentDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelServiceInstanceDeploymentCommand}
   */
  cancelServiceInstanceDeployment(
    args: CancelServiceInstanceDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelServiceInstanceDeploymentCommandOutput>;
  cancelServiceInstanceDeployment(
    args: CancelServiceInstanceDeploymentCommandInput,
    cb: (err: any, data?: CancelServiceInstanceDeploymentCommandOutput) => void
  ): void;
  cancelServiceInstanceDeployment(
    args: CancelServiceInstanceDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelServiceInstanceDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelServicePipelineDeploymentCommand}
   */
  cancelServicePipelineDeployment(
    args: CancelServicePipelineDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelServicePipelineDeploymentCommandOutput>;
  cancelServicePipelineDeployment(
    args: CancelServicePipelineDeploymentCommandInput,
    cb: (err: any, data?: CancelServicePipelineDeploymentCommandOutput) => void
  ): void;
  cancelServicePipelineDeployment(
    args: CancelServicePipelineDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelServicePipelineDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateComponentCommand}
   */
  createComponent(
    args: CreateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComponentCommandOutput>;
  createComponent(args: CreateComponentCommandInput, cb: (err: any, data?: CreateComponentCommandOutput) => void): void;
  createComponent(
    args: CreateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentCommand}
   */
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentAccountConnectionCommand}
   */
  createEnvironmentAccountConnection(
    args: CreateEnvironmentAccountConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentAccountConnectionCommandOutput>;
  createEnvironmentAccountConnection(
    args: CreateEnvironmentAccountConnectionCommandInput,
    cb: (err: any, data?: CreateEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  createEnvironmentAccountConnection(
    args: CreateEnvironmentAccountConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentAccountConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentTemplateCommand}
   */
  createEnvironmentTemplate(
    args: CreateEnvironmentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentTemplateCommandOutput>;
  createEnvironmentTemplate(
    args: CreateEnvironmentTemplateCommandInput,
    cb: (err: any, data?: CreateEnvironmentTemplateCommandOutput) => void
  ): void;
  createEnvironmentTemplate(
    args: CreateEnvironmentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentTemplateVersionCommand}
   */
  createEnvironmentTemplateVersion(
    args: CreateEnvironmentTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentTemplateVersionCommandOutput>;
  createEnvironmentTemplateVersion(
    args: CreateEnvironmentTemplateVersionCommandInput,
    cb: (err: any, data?: CreateEnvironmentTemplateVersionCommandOutput) => void
  ): void;
  createEnvironmentTemplateVersion(
    args: CreateEnvironmentTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentTemplateVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRepositoryCommand}
   */
  createRepository(
    args: CreateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRepositoryCommandOutput>;
  createRepository(
    args: CreateRepositoryCommandInput,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;
  createRepository(
    args: CreateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceCommand}
   */
  createService(args: CreateServiceCommandInput, options?: __HttpHandlerOptions): Promise<CreateServiceCommandOutput>;
  createService(args: CreateServiceCommandInput, cb: (err: any, data?: CreateServiceCommandOutput) => void): void;
  createService(
    args: CreateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceInstanceCommand}
   */
  createServiceInstance(
    args: CreateServiceInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceInstanceCommandOutput>;
  createServiceInstance(
    args: CreateServiceInstanceCommandInput,
    cb: (err: any, data?: CreateServiceInstanceCommandOutput) => void
  ): void;
  createServiceInstance(
    args: CreateServiceInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceSyncConfigCommand}
   */
  createServiceSyncConfig(
    args: CreateServiceSyncConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceSyncConfigCommandOutput>;
  createServiceSyncConfig(
    args: CreateServiceSyncConfigCommandInput,
    cb: (err: any, data?: CreateServiceSyncConfigCommandOutput) => void
  ): void;
  createServiceSyncConfig(
    args: CreateServiceSyncConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceSyncConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceTemplateCommand}
   */
  createServiceTemplate(
    args: CreateServiceTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceTemplateCommandOutput>;
  createServiceTemplate(
    args: CreateServiceTemplateCommandInput,
    cb: (err: any, data?: CreateServiceTemplateCommandOutput) => void
  ): void;
  createServiceTemplate(
    args: CreateServiceTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceTemplateVersionCommand}
   */
  createServiceTemplateVersion(
    args: CreateServiceTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceTemplateVersionCommandOutput>;
  createServiceTemplateVersion(
    args: CreateServiceTemplateVersionCommandInput,
    cb: (err: any, data?: CreateServiceTemplateVersionCommandOutput) => void
  ): void;
  createServiceTemplateVersion(
    args: CreateServiceTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceTemplateVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTemplateSyncConfigCommand}
   */
  createTemplateSyncConfig(
    args: CreateTemplateSyncConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateSyncConfigCommandOutput>;
  createTemplateSyncConfig(
    args: CreateTemplateSyncConfigCommandInput,
    cb: (err: any, data?: CreateTemplateSyncConfigCommandOutput) => void
  ): void;
  createTemplateSyncConfig(
    args: CreateTemplateSyncConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateSyncConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteComponentCommand}
   */
  deleteComponent(
    args: DeleteComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComponentCommandOutput>;
  deleteComponent(args: DeleteComponentCommandInput, cb: (err: any, data?: DeleteComponentCommandOutput) => void): void;
  deleteComponent(
    args: DeleteComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentCommand}
   */
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentAccountConnectionCommand}
   */
  deleteEnvironmentAccountConnection(
    args: DeleteEnvironmentAccountConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentAccountConnectionCommandOutput>;
  deleteEnvironmentAccountConnection(
    args: DeleteEnvironmentAccountConnectionCommandInput,
    cb: (err: any, data?: DeleteEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  deleteEnvironmentAccountConnection(
    args: DeleteEnvironmentAccountConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentAccountConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentTemplateCommand}
   */
  deleteEnvironmentTemplate(
    args: DeleteEnvironmentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentTemplateCommandOutput>;
  deleteEnvironmentTemplate(
    args: DeleteEnvironmentTemplateCommandInput,
    cb: (err: any, data?: DeleteEnvironmentTemplateCommandOutput) => void
  ): void;
  deleteEnvironmentTemplate(
    args: DeleteEnvironmentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentTemplateVersionCommand}
   */
  deleteEnvironmentTemplateVersion(
    args: DeleteEnvironmentTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentTemplateVersionCommandOutput>;
  deleteEnvironmentTemplateVersion(
    args: DeleteEnvironmentTemplateVersionCommandInput,
    cb: (err: any, data?: DeleteEnvironmentTemplateVersionCommandOutput) => void
  ): void;
  deleteEnvironmentTemplateVersion(
    args: DeleteEnvironmentTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentTemplateVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRepositoryCommand}
   */
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRepositoryCommandOutput>;
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceCommand}
   */
  deleteService(args: DeleteServiceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceCommandOutput>;
  deleteService(args: DeleteServiceCommandInput, cb: (err: any, data?: DeleteServiceCommandOutput) => void): void;
  deleteService(
    args: DeleteServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceSyncConfigCommand}
   */
  deleteServiceSyncConfig(
    args: DeleteServiceSyncConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceSyncConfigCommandOutput>;
  deleteServiceSyncConfig(
    args: DeleteServiceSyncConfigCommandInput,
    cb: (err: any, data?: DeleteServiceSyncConfigCommandOutput) => void
  ): void;
  deleteServiceSyncConfig(
    args: DeleteServiceSyncConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceSyncConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceTemplateCommand}
   */
  deleteServiceTemplate(
    args: DeleteServiceTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceTemplateCommandOutput>;
  deleteServiceTemplate(
    args: DeleteServiceTemplateCommandInput,
    cb: (err: any, data?: DeleteServiceTemplateCommandOutput) => void
  ): void;
  deleteServiceTemplate(
    args: DeleteServiceTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceTemplateVersionCommand}
   */
  deleteServiceTemplateVersion(
    args: DeleteServiceTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceTemplateVersionCommandOutput>;
  deleteServiceTemplateVersion(
    args: DeleteServiceTemplateVersionCommandInput,
    cb: (err: any, data?: DeleteServiceTemplateVersionCommandOutput) => void
  ): void;
  deleteServiceTemplateVersion(
    args: DeleteServiceTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceTemplateVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTemplateSyncConfigCommand}
   */
  deleteTemplateSyncConfig(
    args: DeleteTemplateSyncConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateSyncConfigCommandOutput>;
  deleteTemplateSyncConfig(
    args: DeleteTemplateSyncConfigCommandInput,
    cb: (err: any, data?: DeleteTemplateSyncConfigCommandOutput) => void
  ): void;
  deleteTemplateSyncConfig(
    args: DeleteTemplateSyncConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTemplateSyncConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComponentCommand}
   */
  getComponent(args: GetComponentCommandInput, options?: __HttpHandlerOptions): Promise<GetComponentCommandOutput>;
  getComponent(args: GetComponentCommandInput, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
  getComponent(
    args: GetComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentCommand}
   */
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCommandOutput>;
  getEnvironment(args: GetEnvironmentCommandInput, cb: (err: any, data?: GetEnvironmentCommandOutput) => void): void;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentAccountConnectionCommand}
   */
  getEnvironmentAccountConnection(
    args: GetEnvironmentAccountConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentAccountConnectionCommandOutput>;
  getEnvironmentAccountConnection(
    args: GetEnvironmentAccountConnectionCommandInput,
    cb: (err: any, data?: GetEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  getEnvironmentAccountConnection(
    args: GetEnvironmentAccountConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentAccountConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentTemplateCommand}
   */
  getEnvironmentTemplate(
    args: GetEnvironmentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentTemplateCommandOutput>;
  getEnvironmentTemplate(
    args: GetEnvironmentTemplateCommandInput,
    cb: (err: any, data?: GetEnvironmentTemplateCommandOutput) => void
  ): void;
  getEnvironmentTemplate(
    args: GetEnvironmentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentTemplateVersionCommand}
   */
  getEnvironmentTemplateVersion(
    args: GetEnvironmentTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentTemplateVersionCommandOutput>;
  getEnvironmentTemplateVersion(
    args: GetEnvironmentTemplateVersionCommandInput,
    cb: (err: any, data?: GetEnvironmentTemplateVersionCommandOutput) => void
  ): void;
  getEnvironmentTemplateVersion(
    args: GetEnvironmentTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentTemplateVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRepositoryCommand}
   */
  getRepository(args: GetRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<GetRepositoryCommandOutput>;
  getRepository(args: GetRepositoryCommandInput, cb: (err: any, data?: GetRepositoryCommandOutput) => void): void;
  getRepository(
    args: GetRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRepositorySyncStatusCommand}
   */
  getRepositorySyncStatus(
    args: GetRepositorySyncStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositorySyncStatusCommandOutput>;
  getRepositorySyncStatus(
    args: GetRepositorySyncStatusCommandInput,
    cb: (err: any, data?: GetRepositorySyncStatusCommandOutput) => void
  ): void;
  getRepositorySyncStatus(
    args: GetRepositorySyncStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositorySyncStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcesSummaryCommand}
   */
  getResourcesSummary(
    args: GetResourcesSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcesSummaryCommandOutput>;
  getResourcesSummary(
    args: GetResourcesSummaryCommandInput,
    cb: (err: any, data?: GetResourcesSummaryCommandOutput) => void
  ): void;
  getResourcesSummary(
    args: GetResourcesSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcesSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceCommand}
   */
  getService(args: GetServiceCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceCommandOutput>;
  getService(args: GetServiceCommandInput, cb: (err: any, data?: GetServiceCommandOutput) => void): void;
  getService(
    args: GetServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceInstanceCommand}
   */
  getServiceInstance(
    args: GetServiceInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceInstanceCommandOutput>;
  getServiceInstance(
    args: GetServiceInstanceCommandInput,
    cb: (err: any, data?: GetServiceInstanceCommandOutput) => void
  ): void;
  getServiceInstance(
    args: GetServiceInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceInstanceSyncStatusCommand}
   */
  getServiceInstanceSyncStatus(
    args: GetServiceInstanceSyncStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceInstanceSyncStatusCommandOutput>;
  getServiceInstanceSyncStatus(
    args: GetServiceInstanceSyncStatusCommandInput,
    cb: (err: any, data?: GetServiceInstanceSyncStatusCommandOutput) => void
  ): void;
  getServiceInstanceSyncStatus(
    args: GetServiceInstanceSyncStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceInstanceSyncStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceSyncBlockerSummaryCommand}
   */
  getServiceSyncBlockerSummary(
    args: GetServiceSyncBlockerSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceSyncBlockerSummaryCommandOutput>;
  getServiceSyncBlockerSummary(
    args: GetServiceSyncBlockerSummaryCommandInput,
    cb: (err: any, data?: GetServiceSyncBlockerSummaryCommandOutput) => void
  ): void;
  getServiceSyncBlockerSummary(
    args: GetServiceSyncBlockerSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceSyncBlockerSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceSyncConfigCommand}
   */
  getServiceSyncConfig(
    args: GetServiceSyncConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceSyncConfigCommandOutput>;
  getServiceSyncConfig(
    args: GetServiceSyncConfigCommandInput,
    cb: (err: any, data?: GetServiceSyncConfigCommandOutput) => void
  ): void;
  getServiceSyncConfig(
    args: GetServiceSyncConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceSyncConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceTemplateCommand}
   */
  getServiceTemplate(
    args: GetServiceTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceTemplateCommandOutput>;
  getServiceTemplate(
    args: GetServiceTemplateCommandInput,
    cb: (err: any, data?: GetServiceTemplateCommandOutput) => void
  ): void;
  getServiceTemplate(
    args: GetServiceTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceTemplateVersionCommand}
   */
  getServiceTemplateVersion(
    args: GetServiceTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceTemplateVersionCommandOutput>;
  getServiceTemplateVersion(
    args: GetServiceTemplateVersionCommandInput,
    cb: (err: any, data?: GetServiceTemplateVersionCommandOutput) => void
  ): void;
  getServiceTemplateVersion(
    args: GetServiceTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceTemplateVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemplateSyncConfigCommand}
   */
  getTemplateSyncConfig(
    args: GetTemplateSyncConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateSyncConfigCommandOutput>;
  getTemplateSyncConfig(
    args: GetTemplateSyncConfigCommandInput,
    cb: (err: any, data?: GetTemplateSyncConfigCommandOutput) => void
  ): void;
  getTemplateSyncConfig(
    args: GetTemplateSyncConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateSyncConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemplateSyncStatusCommand}
   */
  getTemplateSyncStatus(
    args: GetTemplateSyncStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateSyncStatusCommandOutput>;
  getTemplateSyncStatus(
    args: GetTemplateSyncStatusCommandInput,
    cb: (err: any, data?: GetTemplateSyncStatusCommandOutput) => void
  ): void;
  getTemplateSyncStatus(
    args: GetTemplateSyncStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateSyncStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentOutputsCommand}
   */
  listComponentOutputs(
    args: ListComponentOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentOutputsCommandOutput>;
  listComponentOutputs(
    args: ListComponentOutputsCommandInput,
    cb: (err: any, data?: ListComponentOutputsCommandOutput) => void
  ): void;
  listComponentOutputs(
    args: ListComponentOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentOutputsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentProvisionedResourcesCommand}
   */
  listComponentProvisionedResources(
    args: ListComponentProvisionedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentProvisionedResourcesCommandOutput>;
  listComponentProvisionedResources(
    args: ListComponentProvisionedResourcesCommandInput,
    cb: (err: any, data?: ListComponentProvisionedResourcesCommandOutput) => void
  ): void;
  listComponentProvisionedResources(
    args: ListComponentProvisionedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentProvisionedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentsCommand}
   */
  listComponents(
    args: ListComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentsCommandOutput>;
  listComponents(args: ListComponentsCommandInput, cb: (err: any, data?: ListComponentsCommandOutput) => void): void;
  listComponents(
    args: ListComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentAccountConnectionsCommand}
   */
  listEnvironmentAccountConnections(
    args: ListEnvironmentAccountConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentAccountConnectionsCommandOutput>;
  listEnvironmentAccountConnections(
    args: ListEnvironmentAccountConnectionsCommandInput,
    cb: (err: any, data?: ListEnvironmentAccountConnectionsCommandOutput) => void
  ): void;
  listEnvironmentAccountConnections(
    args: ListEnvironmentAccountConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentAccountConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentOutputsCommand}
   */
  listEnvironmentOutputs(
    args: ListEnvironmentOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentOutputsCommandOutput>;
  listEnvironmentOutputs(
    args: ListEnvironmentOutputsCommandInput,
    cb: (err: any, data?: ListEnvironmentOutputsCommandOutput) => void
  ): void;
  listEnvironmentOutputs(
    args: ListEnvironmentOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentOutputsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentProvisionedResourcesCommand}
   */
  listEnvironmentProvisionedResources(
    args: ListEnvironmentProvisionedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentProvisionedResourcesCommandOutput>;
  listEnvironmentProvisionedResources(
    args: ListEnvironmentProvisionedResourcesCommandInput,
    cb: (err: any, data?: ListEnvironmentProvisionedResourcesCommandOutput) => void
  ): void;
  listEnvironmentProvisionedResources(
    args: ListEnvironmentProvisionedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentProvisionedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentsCommand}
   */
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentTemplatesCommand}
   */
  listEnvironmentTemplates(
    args: ListEnvironmentTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentTemplatesCommandOutput>;
  listEnvironmentTemplates(
    args: ListEnvironmentTemplatesCommandInput,
    cb: (err: any, data?: ListEnvironmentTemplatesCommandOutput) => void
  ): void;
  listEnvironmentTemplates(
    args: ListEnvironmentTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentTemplateVersionsCommand}
   */
  listEnvironmentTemplateVersions(
    args: ListEnvironmentTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentTemplateVersionsCommandOutput>;
  listEnvironmentTemplateVersions(
    args: ListEnvironmentTemplateVersionsCommandInput,
    cb: (err: any, data?: ListEnvironmentTemplateVersionsCommandOutput) => void
  ): void;
  listEnvironmentTemplateVersions(
    args: ListEnvironmentTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentTemplateVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRepositoriesCommand}
   */
  listRepositories(
    args: ListRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositoriesCommandOutput>;
  listRepositories(
    args: ListRepositoriesCommandInput,
    cb: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): void;
  listRepositories(
    args: ListRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRepositorySyncDefinitionsCommand}
   */
  listRepositorySyncDefinitions(
    args: ListRepositorySyncDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositorySyncDefinitionsCommandOutput>;
  listRepositorySyncDefinitions(
    args: ListRepositorySyncDefinitionsCommandInput,
    cb: (err: any, data?: ListRepositorySyncDefinitionsCommandOutput) => void
  ): void;
  listRepositorySyncDefinitions(
    args: ListRepositorySyncDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositorySyncDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceInstanceOutputsCommand}
   */
  listServiceInstanceOutputs(
    args: ListServiceInstanceOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceInstanceOutputsCommandOutput>;
  listServiceInstanceOutputs(
    args: ListServiceInstanceOutputsCommandInput,
    cb: (err: any, data?: ListServiceInstanceOutputsCommandOutput) => void
  ): void;
  listServiceInstanceOutputs(
    args: ListServiceInstanceOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceInstanceOutputsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceInstanceProvisionedResourcesCommand}
   */
  listServiceInstanceProvisionedResources(
    args: ListServiceInstanceProvisionedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceInstanceProvisionedResourcesCommandOutput>;
  listServiceInstanceProvisionedResources(
    args: ListServiceInstanceProvisionedResourcesCommandInput,
    cb: (err: any, data?: ListServiceInstanceProvisionedResourcesCommandOutput) => void
  ): void;
  listServiceInstanceProvisionedResources(
    args: ListServiceInstanceProvisionedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceInstanceProvisionedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceInstancesCommand}
   */
  listServiceInstances(
    args: ListServiceInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceInstancesCommandOutput>;
  listServiceInstances(
    args: ListServiceInstancesCommandInput,
    cb: (err: any, data?: ListServiceInstancesCommandOutput) => void
  ): void;
  listServiceInstances(
    args: ListServiceInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicePipelineOutputsCommand}
   */
  listServicePipelineOutputs(
    args: ListServicePipelineOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicePipelineOutputsCommandOutput>;
  listServicePipelineOutputs(
    args: ListServicePipelineOutputsCommandInput,
    cb: (err: any, data?: ListServicePipelineOutputsCommandOutput) => void
  ): void;
  listServicePipelineOutputs(
    args: ListServicePipelineOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicePipelineOutputsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicePipelineProvisionedResourcesCommand}
   */
  listServicePipelineProvisionedResources(
    args: ListServicePipelineProvisionedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicePipelineProvisionedResourcesCommandOutput>;
  listServicePipelineProvisionedResources(
    args: ListServicePipelineProvisionedResourcesCommandInput,
    cb: (err: any, data?: ListServicePipelineProvisionedResourcesCommandOutput) => void
  ): void;
  listServicePipelineProvisionedResources(
    args: ListServicePipelineProvisionedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicePipelineProvisionedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesCommand}
   */
  listServices(args: ListServicesCommandInput, options?: __HttpHandlerOptions): Promise<ListServicesCommandOutput>;
  listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
  listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceTemplatesCommand}
   */
  listServiceTemplates(
    args: ListServiceTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceTemplatesCommandOutput>;
  listServiceTemplates(
    args: ListServiceTemplatesCommandInput,
    cb: (err: any, data?: ListServiceTemplatesCommandOutput) => void
  ): void;
  listServiceTemplates(
    args: ListServiceTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceTemplateVersionsCommand}
   */
  listServiceTemplateVersions(
    args: ListServiceTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceTemplateVersionsCommandOutput>;
  listServiceTemplateVersions(
    args: ListServiceTemplateVersionsCommandInput,
    cb: (err: any, data?: ListServiceTemplateVersionsCommandOutput) => void
  ): void;
  listServiceTemplateVersions(
    args: ListServiceTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceTemplateVersionsCommandOutput) => void
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
   * @see {@link NotifyResourceDeploymentStatusChangeCommand}
   */
  notifyResourceDeploymentStatusChange(
    args: NotifyResourceDeploymentStatusChangeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyResourceDeploymentStatusChangeCommandOutput>;
  notifyResourceDeploymentStatusChange(
    args: NotifyResourceDeploymentStatusChangeCommandInput,
    cb: (err: any, data?: NotifyResourceDeploymentStatusChangeCommandOutput) => void
  ): void;
  notifyResourceDeploymentStatusChange(
    args: NotifyResourceDeploymentStatusChangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyResourceDeploymentStatusChangeCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectEnvironmentAccountConnectionCommand}
   */
  rejectEnvironmentAccountConnection(
    args: RejectEnvironmentAccountConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectEnvironmentAccountConnectionCommandOutput>;
  rejectEnvironmentAccountConnection(
    args: RejectEnvironmentAccountConnectionCommandInput,
    cb: (err: any, data?: RejectEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  rejectEnvironmentAccountConnection(
    args: RejectEnvironmentAccountConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectEnvironmentAccountConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateComponentCommand}
   */
  updateComponent(
    args: UpdateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComponentCommandOutput>;
  updateComponent(args: UpdateComponentCommandInput, cb: (err: any, data?: UpdateComponentCommandOutput) => void): void;
  updateComponent(
    args: UpdateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentCommand}
   */
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentAccountConnectionCommand}
   */
  updateEnvironmentAccountConnection(
    args: UpdateEnvironmentAccountConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentAccountConnectionCommandOutput>;
  updateEnvironmentAccountConnection(
    args: UpdateEnvironmentAccountConnectionCommandInput,
    cb: (err: any, data?: UpdateEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  updateEnvironmentAccountConnection(
    args: UpdateEnvironmentAccountConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentAccountConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentTemplateCommand}
   */
  updateEnvironmentTemplate(
    args: UpdateEnvironmentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentTemplateCommandOutput>;
  updateEnvironmentTemplate(
    args: UpdateEnvironmentTemplateCommandInput,
    cb: (err: any, data?: UpdateEnvironmentTemplateCommandOutput) => void
  ): void;
  updateEnvironmentTemplate(
    args: UpdateEnvironmentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentTemplateVersionCommand}
   */
  updateEnvironmentTemplateVersion(
    args: UpdateEnvironmentTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentTemplateVersionCommandOutput>;
  updateEnvironmentTemplateVersion(
    args: UpdateEnvironmentTemplateVersionCommandInput,
    cb: (err: any, data?: UpdateEnvironmentTemplateVersionCommandOutput) => void
  ): void;
  updateEnvironmentTemplateVersion(
    args: UpdateEnvironmentTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentTemplateVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceCommand}
   */
  updateService(args: UpdateServiceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceCommandOutput>;
  updateService(args: UpdateServiceCommandInput, cb: (err: any, data?: UpdateServiceCommandOutput) => void): void;
  updateService(
    args: UpdateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceInstanceCommand}
   */
  updateServiceInstance(
    args: UpdateServiceInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceInstanceCommandOutput>;
  updateServiceInstance(
    args: UpdateServiceInstanceCommandInput,
    cb: (err: any, data?: UpdateServiceInstanceCommandOutput) => void
  ): void;
  updateServiceInstance(
    args: UpdateServiceInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServicePipelineCommand}
   */
  updateServicePipeline(
    args: UpdateServicePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServicePipelineCommandOutput>;
  updateServicePipeline(
    args: UpdateServicePipelineCommandInput,
    cb: (err: any, data?: UpdateServicePipelineCommandOutput) => void
  ): void;
  updateServicePipeline(
    args: UpdateServicePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServicePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceSyncBlockerCommand}
   */
  updateServiceSyncBlocker(
    args: UpdateServiceSyncBlockerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceSyncBlockerCommandOutput>;
  updateServiceSyncBlocker(
    args: UpdateServiceSyncBlockerCommandInput,
    cb: (err: any, data?: UpdateServiceSyncBlockerCommandOutput) => void
  ): void;
  updateServiceSyncBlocker(
    args: UpdateServiceSyncBlockerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceSyncBlockerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceSyncConfigCommand}
   */
  updateServiceSyncConfig(
    args: UpdateServiceSyncConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceSyncConfigCommandOutput>;
  updateServiceSyncConfig(
    args: UpdateServiceSyncConfigCommandInput,
    cb: (err: any, data?: UpdateServiceSyncConfigCommandOutput) => void
  ): void;
  updateServiceSyncConfig(
    args: UpdateServiceSyncConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceSyncConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceTemplateCommand}
   */
  updateServiceTemplate(
    args: UpdateServiceTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceTemplateCommandOutput>;
  updateServiceTemplate(
    args: UpdateServiceTemplateCommandInput,
    cb: (err: any, data?: UpdateServiceTemplateCommandOutput) => void
  ): void;
  updateServiceTemplate(
    args: UpdateServiceTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceTemplateVersionCommand}
   */
  updateServiceTemplateVersion(
    args: UpdateServiceTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceTemplateVersionCommandOutput>;
  updateServiceTemplateVersion(
    args: UpdateServiceTemplateVersionCommandInput,
    cb: (err: any, data?: UpdateServiceTemplateVersionCommandOutput) => void
  ): void;
  updateServiceTemplateVersion(
    args: UpdateServiceTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceTemplateVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplateSyncConfigCommand}
   */
  updateTemplateSyncConfig(
    args: UpdateTemplateSyncConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateSyncConfigCommandOutput>;
  updateTemplateSyncConfig(
    args: UpdateTemplateSyncConfigCommandInput,
    cb: (err: any, data?: UpdateTemplateSyncConfigCommandOutput) => void
  ): void;
  updateTemplateSyncConfig(
    args: UpdateTemplateSyncConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateSyncConfigCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This is the Proton Service API Reference. It provides descriptions, syntax and usage examples for each of the
 *     <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Operations.html">actions</a> and <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Types.html">data types</a> for the Proton
 *    service.</p>
 *          <p>The documentation for each action shows the Query API request parameters and the XML response.</p>
 *          <p>Alternatively, you can use the Amazon Web Services CLI to access an API. For more information, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">Amazon Web Services Command Line Interface User
 *     Guide</a>.</p>
 *          <p>The Proton service is a two-pronged automation framework. Administrators create service templates to provide
 *    standardized infrastructure and deployment tooling for serverless and container based applications. Developers, in
 *    turn, select from the available service templates to automate their application or service deployments.</p>
 *          <p>Because administrators define the infrastructure and tooling that Proton deploys and manages, they need
 *    permissions to use all of the listed API operations.</p>
 *          <p>When developers select a specific infrastructure and tooling set, Proton deploys their applications. To
 *    monitor their applications that are running on Proton, developers need permissions to the service
 *     <i>create</i>, <i>list</i>, <i>update</i> and <i>delete</i>
 *    API operations and the service instance <i>list</i> and <i>update</i> API
 *    operations.</p>
 *          <p>To learn more about Proton, see the <a href="https://docs.aws.amazon.com/proton/latest/userguide/Welcome.html">Proton User Guide</a>.</p>
 *          <p>
 *             <b>Ensuring Idempotency</b>
 *          </p>
 *          <p>When you make a mutating API request, the request typically returns a result before the asynchronous workflows
 *    of the operation are complete. Operations might also time out or encounter other server issues before they're
 *    complete, even if the request already returned a result. This might make it difficult to determine whether the
 *    request succeeded. Moreover, you might need to retry the request multiple times to ensure that the operation
 *    completes successfully. However, if the original request and the subsequent retries are successful, the operation
 *    occurs multiple times. This means that you might create more resources than you intended.</p>
 *          <p>
 *             <i>Idempotency</i> ensures that an API request action completes no more than one time. With an
 *    idempotent request, if the original request action completes successfully, any subsequent retries complete
 *    successfully without performing any further actions. However, the result might contain updated information, such as
 *    the current creation status.</p>
 *          <p>The following lists of APIs are grouped according to methods that ensure idempotency.</p>
 *          <p>
 *             <b>Idempotent create APIs with a client token</b>
 *          </p>
 *          <p>The API actions in this list support idempotency with the use of a <i>client token</i>. The
 *    corresponding Amazon Web Services CLI commands also support idempotency using a client token. A client token is a unique,
 *    case-sensitive string of up to 64 ASCII characters. To make an idempotent API request using one of these actions,
 *    specify a client token in the request. We recommend that you <i>don't</i> reuse the same client token
 *    for other API requests. If you don’t provide a client token for these APIs, a default client token is automatically
 *    provided by SDKs.</p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>If you retry the request using the same client token and the same parameters, the retry succeeds without
 *    performing any further actions other than returning the original resource detail data in the response.</p>
 *          <p>If you retry the request using the same client token, but one or more of the parameters are different, the retry
 *    throws a <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p>
 *          <p>Client tokens expire eight hours after a request is made. If you retry the request with the expired token, a new
 *    resource is created.</p>
 *          <p>If the original resource is deleted and you retry the request, a new resource is created.</p>
 *          <p>Idempotent create APIs with a client token:</p>
 *          <ul>
 *             <li>
 *                <p>CreateEnvironmentTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>CreateServiceTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>CreateEnvironmentAccountConnection</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Idempotent create APIs</b>
 *          </p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>If you retry the request with an API from this group, and the original resource <i>hasn't</i> been
 *    modified, the retry succeeds without performing any further actions other than returning the original resource detail
 *    data in the response.</p>
 *          <p>If the original resource has been modified, the retry throws a <code>ConflictException</code>.</p>
 *          <p>If you retry with different input parameters, the retry throws a <code>ValidationException</code> with an
 *     <code>IdempotentParameterMismatch</code> error.</p>
 *          <p>Idempotent create APIs:</p>
 *          <ul>
 *             <li>
 *                <p>CreateEnvironmentTemplate</p>
 *             </li>
 *             <li>
 *                <p>CreateServiceTemplate</p>
 *             </li>
 *             <li>
 *                <p>CreateEnvironment</p>
 *             </li>
 *             <li>
 *                <p>CreateService</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Idempotent delete APIs</b>
 *          </p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>When you retry the request with an API from this group and the resource was deleted, its metadata is returned in
 *    the response.</p>
 *          <p>If you retry and the resource doesn't exist, the response is empty.</p>
 *          <p>In both cases, the retry succeeds.</p>
 *          <p>Idempotent delete APIs:</p>
 *          <ul>
 *             <li>
 *                <p>DeleteEnvironmentTemplate</p>
 *             </li>
 *             <li>
 *                <p>DeleteEnvironmentTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>DeleteServiceTemplate</p>
 *             </li>
 *             <li>
 *                <p>DeleteServiceTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>DeleteEnvironmentAccountConnection</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Asynchronous idempotent delete APIs</b>
 *          </p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>If you retry the request with an API from this group, if the original request delete operation status is
 *     <code>DELETE_IN_PROGRESS</code>, the retry returns the resource detail data in the response without performing any
 *    further actions.</p>
 *          <p>If the original request delete operation is complete, a retry returns an empty response.</p>
 *          <p>Asynchronous idempotent delete APIs:</p>
 *          <ul>
 *             <li>
 *                <p>DeleteEnvironment</p>
 *             </li>
 *             <li>
 *                <p>DeleteService</p>
 *             </li>
 *          </ul>
 */
export class Proton extends ProtonClient implements Proton {}
createAggregatedClient(commands, Proton);
