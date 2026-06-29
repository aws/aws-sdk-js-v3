// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import { AppConfigClient } from "./AppConfigClient";
import {
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateApplicationCommand,
} from "./commands/CreateApplicationCommand";
import {
  type CreateConfigurationProfileCommandInput,
  type CreateConfigurationProfileCommandOutput,
  CreateConfigurationProfileCommand,
} from "./commands/CreateConfigurationProfileCommand";
import {
  type CreateDeploymentStrategyCommandInput,
  type CreateDeploymentStrategyCommandOutput,
  CreateDeploymentStrategyCommand,
} from "./commands/CreateDeploymentStrategyCommand";
import {
  type CreateEnvironmentCommandInput,
  type CreateEnvironmentCommandOutput,
  CreateEnvironmentCommand,
} from "./commands/CreateEnvironmentCommand";
import {
  type CreateExperimentDefinitionCommandInput,
  type CreateExperimentDefinitionCommandOutput,
  CreateExperimentDefinitionCommand,
} from "./commands/CreateExperimentDefinitionCommand";
import {
  type CreateExtensionAssociationCommandInput,
  type CreateExtensionAssociationCommandOutput,
  CreateExtensionAssociationCommand,
} from "./commands/CreateExtensionAssociationCommand";
import {
  type CreateExtensionCommandInput,
  type CreateExtensionCommandOutput,
  CreateExtensionCommand,
} from "./commands/CreateExtensionCommand";
import {
  type CreateHostedConfigurationVersionCommandInput,
  type CreateHostedConfigurationVersionCommandOutput,
  CreateHostedConfigurationVersionCommand,
} from "./commands/CreateHostedConfigurationVersionCommand";
import {
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteApplicationCommand,
} from "./commands/DeleteApplicationCommand";
import {
  type DeleteConfigurationProfileCommandInput,
  type DeleteConfigurationProfileCommandOutput,
  DeleteConfigurationProfileCommand,
} from "./commands/DeleteConfigurationProfileCommand";
import {
  type DeleteDeploymentStrategyCommandInput,
  type DeleteDeploymentStrategyCommandOutput,
  DeleteDeploymentStrategyCommand,
} from "./commands/DeleteDeploymentStrategyCommand";
import {
  type DeleteEnvironmentCommandInput,
  type DeleteEnvironmentCommandOutput,
  DeleteEnvironmentCommand,
} from "./commands/DeleteEnvironmentCommand";
import {
  type DeleteExperimentDefinitionCommandInput,
  type DeleteExperimentDefinitionCommandOutput,
  DeleteExperimentDefinitionCommand,
} from "./commands/DeleteExperimentDefinitionCommand";
import {
  type DeleteExtensionAssociationCommandInput,
  type DeleteExtensionAssociationCommandOutput,
  DeleteExtensionAssociationCommand,
} from "./commands/DeleteExtensionAssociationCommand";
import {
  type DeleteExtensionCommandInput,
  type DeleteExtensionCommandOutput,
  DeleteExtensionCommand,
} from "./commands/DeleteExtensionCommand";
import {
  type DeleteHostedConfigurationVersionCommandInput,
  type DeleteHostedConfigurationVersionCommandOutput,
  DeleteHostedConfigurationVersionCommand,
} from "./commands/DeleteHostedConfigurationVersionCommand";
import {
  type GetAccountSettingsCommandInput,
  type GetAccountSettingsCommandOutput,
  GetAccountSettingsCommand,
} from "./commands/GetAccountSettingsCommand";
import {
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetApplicationCommand,
} from "./commands/GetApplicationCommand";
import {
  type GetConfigurationCommandInput,
  type GetConfigurationCommandOutput,
  GetConfigurationCommand,
} from "./commands/GetConfigurationCommand";
import {
  type GetConfigurationProfileCommandInput,
  type GetConfigurationProfileCommandOutput,
  GetConfigurationProfileCommand,
} from "./commands/GetConfigurationProfileCommand";
import {
  type GetDeploymentCommandInput,
  type GetDeploymentCommandOutput,
  GetDeploymentCommand,
} from "./commands/GetDeploymentCommand";
import {
  type GetDeploymentStrategyCommandInput,
  type GetDeploymentStrategyCommandOutput,
  GetDeploymentStrategyCommand,
} from "./commands/GetDeploymentStrategyCommand";
import {
  type GetEnvironmentCommandInput,
  type GetEnvironmentCommandOutput,
  GetEnvironmentCommand,
} from "./commands/GetEnvironmentCommand";
import {
  type GetExperimentDefinitionCommandInput,
  type GetExperimentDefinitionCommandOutput,
  GetExperimentDefinitionCommand,
} from "./commands/GetExperimentDefinitionCommand";
import {
  type GetExperimentRunCommandInput,
  type GetExperimentRunCommandOutput,
  GetExperimentRunCommand,
} from "./commands/GetExperimentRunCommand";
import {
  type GetExtensionAssociationCommandInput,
  type GetExtensionAssociationCommandOutput,
  GetExtensionAssociationCommand,
} from "./commands/GetExtensionAssociationCommand";
import {
  type GetExtensionCommandInput,
  type GetExtensionCommandOutput,
  GetExtensionCommand,
} from "./commands/GetExtensionCommand";
import {
  type GetHostedConfigurationVersionCommandInput,
  type GetHostedConfigurationVersionCommandOutput,
  GetHostedConfigurationVersionCommand,
} from "./commands/GetHostedConfigurationVersionCommand";
import {
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListApplicationsCommand,
} from "./commands/ListApplicationsCommand";
import {
  type ListConfigurationProfilesCommandInput,
  type ListConfigurationProfilesCommandOutput,
  ListConfigurationProfilesCommand,
} from "./commands/ListConfigurationProfilesCommand";
import {
  type ListDeploymentsCommandInput,
  type ListDeploymentsCommandOutput,
  ListDeploymentsCommand,
} from "./commands/ListDeploymentsCommand";
import {
  type ListDeploymentStrategiesCommandInput,
  type ListDeploymentStrategiesCommandOutput,
  ListDeploymentStrategiesCommand,
} from "./commands/ListDeploymentStrategiesCommand";
import {
  type ListEnvironmentsCommandInput,
  type ListEnvironmentsCommandOutput,
  ListEnvironmentsCommand,
} from "./commands/ListEnvironmentsCommand";
import {
  type ListExperimentDefinitionsCommandInput,
  type ListExperimentDefinitionsCommandOutput,
  ListExperimentDefinitionsCommand,
} from "./commands/ListExperimentDefinitionsCommand";
import {
  type ListExperimentRunEventsCommandInput,
  type ListExperimentRunEventsCommandOutput,
  ListExperimentRunEventsCommand,
} from "./commands/ListExperimentRunEventsCommand";
import {
  type ListExperimentRunsCommandInput,
  type ListExperimentRunsCommandOutput,
  ListExperimentRunsCommand,
} from "./commands/ListExperimentRunsCommand";
import {
  type ListExtensionAssociationsCommandInput,
  type ListExtensionAssociationsCommandOutput,
  ListExtensionAssociationsCommand,
} from "./commands/ListExtensionAssociationsCommand";
import {
  type ListExtensionsCommandInput,
  type ListExtensionsCommandOutput,
  ListExtensionsCommand,
} from "./commands/ListExtensionsCommand";
import {
  type ListHostedConfigurationVersionsCommandInput,
  type ListHostedConfigurationVersionsCommandOutput,
  ListHostedConfigurationVersionsCommand,
} from "./commands/ListHostedConfigurationVersionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type StartDeploymentCommandInput,
  type StartDeploymentCommandOutput,
  StartDeploymentCommand,
} from "./commands/StartDeploymentCommand";
import {
  type StartExperimentRunCommandInput,
  type StartExperimentRunCommandOutput,
  StartExperimentRunCommand,
} from "./commands/StartExperimentRunCommand";
import {
  type StopDeploymentCommandInput,
  type StopDeploymentCommandOutput,
  StopDeploymentCommand,
} from "./commands/StopDeploymentCommand";
import {
  type StopExperimentRunCommandInput,
  type StopExperimentRunCommandOutput,
  StopExperimentRunCommand,
} from "./commands/StopExperimentRunCommand";
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
  type UpdateAccountSettingsCommandInput,
  type UpdateAccountSettingsCommandOutput,
  UpdateAccountSettingsCommand,
} from "./commands/UpdateAccountSettingsCommand";
import {
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateApplicationCommand,
} from "./commands/UpdateApplicationCommand";
import {
  type UpdateConfigurationProfileCommandInput,
  type UpdateConfigurationProfileCommandOutput,
  UpdateConfigurationProfileCommand,
} from "./commands/UpdateConfigurationProfileCommand";
import {
  type UpdateDeploymentStrategyCommandInput,
  type UpdateDeploymentStrategyCommandOutput,
  UpdateDeploymentStrategyCommand,
} from "./commands/UpdateDeploymentStrategyCommand";
import {
  type UpdateEnvironmentCommandInput,
  type UpdateEnvironmentCommandOutput,
  UpdateEnvironmentCommand,
} from "./commands/UpdateEnvironmentCommand";
import {
  type UpdateExperimentDefinitionCommandInput,
  type UpdateExperimentDefinitionCommandOutput,
  UpdateExperimentDefinitionCommand,
} from "./commands/UpdateExperimentDefinitionCommand";
import {
  type UpdateExperimentRunCommandInput,
  type UpdateExperimentRunCommandOutput,
  UpdateExperimentRunCommand,
} from "./commands/UpdateExperimentRunCommand";
import {
  type UpdateExtensionAssociationCommandInput,
  type UpdateExtensionAssociationCommandOutput,
  UpdateExtensionAssociationCommand,
} from "./commands/UpdateExtensionAssociationCommand";
import {
  type UpdateExtensionCommandInput,
  type UpdateExtensionCommandOutput,
  UpdateExtensionCommand,
} from "./commands/UpdateExtensionCommand";
import {
  type ValidateConfigurationCommandInput,
  type ValidateConfigurationCommandOutput,
  ValidateConfigurationCommand,
} from "./commands/ValidateConfigurationCommand";
import type { AppConfigServiceException } from "./models/AppConfigServiceException";
import { paginateListApplications } from "./pagination/ListApplicationsPaginator";
import { paginateListConfigurationProfiles } from "./pagination/ListConfigurationProfilesPaginator";
import { paginateListDeployments } from "./pagination/ListDeploymentsPaginator";
import { paginateListDeploymentStrategies } from "./pagination/ListDeploymentStrategiesPaginator";
import { paginateListEnvironments } from "./pagination/ListEnvironmentsPaginator";
import { paginateListExperimentDefinitions } from "./pagination/ListExperimentDefinitionsPaginator";
import { paginateListExperimentRunEvents } from "./pagination/ListExperimentRunEventsPaginator";
import { paginateListExperimentRuns } from "./pagination/ListExperimentRunsPaginator";
import { paginateListExtensionAssociations } from "./pagination/ListExtensionAssociationsPaginator";
import { paginateListExtensions } from "./pagination/ListExtensionsPaginator";
import { paginateListHostedConfigurationVersions } from "./pagination/ListHostedConfigurationVersionsPaginator";
import { waitUntilDeploymentComplete } from "./waiters/waitForDeploymentComplete";
import { waitUntilEnvironmentReadyForDeployment } from "./waiters/waitForEnvironmentReadyForDeployment";

const commands = {
  CreateApplicationCommand,
  CreateConfigurationProfileCommand,
  CreateDeploymentStrategyCommand,
  CreateEnvironmentCommand,
  CreateExperimentDefinitionCommand,
  CreateExtensionCommand,
  CreateExtensionAssociationCommand,
  CreateHostedConfigurationVersionCommand,
  DeleteApplicationCommand,
  DeleteConfigurationProfileCommand,
  DeleteDeploymentStrategyCommand,
  DeleteEnvironmentCommand,
  DeleteExperimentDefinitionCommand,
  DeleteExtensionCommand,
  DeleteExtensionAssociationCommand,
  DeleteHostedConfigurationVersionCommand,
  GetAccountSettingsCommand,
  GetApplicationCommand,
  GetConfigurationCommand,
  GetConfigurationProfileCommand,
  GetDeploymentCommand,
  GetDeploymentStrategyCommand,
  GetEnvironmentCommand,
  GetExperimentDefinitionCommand,
  GetExperimentRunCommand,
  GetExtensionCommand,
  GetExtensionAssociationCommand,
  GetHostedConfigurationVersionCommand,
  ListApplicationsCommand,
  ListConfigurationProfilesCommand,
  ListDeploymentsCommand,
  ListDeploymentStrategiesCommand,
  ListEnvironmentsCommand,
  ListExperimentDefinitionsCommand,
  ListExperimentRunEventsCommand,
  ListExperimentRunsCommand,
  ListExtensionAssociationsCommand,
  ListExtensionsCommand,
  ListHostedConfigurationVersionsCommand,
  ListTagsForResourceCommand,
  StartDeploymentCommand,
  StartExperimentRunCommand,
  StopDeploymentCommand,
  StopExperimentRunCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountSettingsCommand,
  UpdateApplicationCommand,
  UpdateConfigurationProfileCommand,
  UpdateDeploymentStrategyCommand,
  UpdateEnvironmentCommand,
  UpdateExperimentDefinitionCommand,
  UpdateExperimentRunCommand,
  UpdateExtensionCommand,
  UpdateExtensionAssociationCommand,
  ValidateConfigurationCommand,
};
const paginators = {
  paginateListApplications,
  paginateListConfigurationProfiles,
  paginateListDeployments,
  paginateListDeploymentStrategies,
  paginateListEnvironments,
  paginateListExperimentDefinitions,
  paginateListExperimentRunEvents,
  paginateListExperimentRuns,
  paginateListExtensionAssociations,
  paginateListExtensions,
  paginateListHostedConfigurationVersions,
};
const waiters = {
  waitUntilDeploymentComplete,
  waitUntilEnvironmentReadyForDeployment,
};

export interface AppConfig {
  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationProfileCommand}
   */
  createConfigurationProfile(
    args: CreateConfigurationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationProfileCommandOutput>;
  createConfigurationProfile(
    args: CreateConfigurationProfileCommandInput,
    cb: (err: any, data?: CreateConfigurationProfileCommandOutput) => void
  ): void;
  createConfigurationProfile(
    args: CreateConfigurationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeploymentStrategyCommand}
   */
  createDeploymentStrategy(
    args: CreateDeploymentStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentStrategyCommandOutput>;
  createDeploymentStrategy(
    args: CreateDeploymentStrategyCommandInput,
    cb: (err: any, data?: CreateDeploymentStrategyCommandOutput) => void
  ): void;
  createDeploymentStrategy(
    args: CreateDeploymentStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentStrategyCommandOutput) => void
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
   * @see {@link CreateExperimentDefinitionCommand}
   */
  createExperimentDefinition(
    args: CreateExperimentDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExperimentDefinitionCommandOutput>;
  createExperimentDefinition(
    args: CreateExperimentDefinitionCommandInput,
    cb: (err: any, data?: CreateExperimentDefinitionCommandOutput) => void
  ): void;
  createExperimentDefinition(
    args: CreateExperimentDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExperimentDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExtensionCommand}
   */
  createExtension(
    args: CreateExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExtensionCommandOutput>;
  createExtension(
    args: CreateExtensionCommandInput,
    cb: (err: any, data?: CreateExtensionCommandOutput) => void
  ): void;
  createExtension(
    args: CreateExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExtensionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExtensionAssociationCommand}
   */
  createExtensionAssociation(
    args: CreateExtensionAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExtensionAssociationCommandOutput>;
  createExtensionAssociation(
    args: CreateExtensionAssociationCommandInput,
    cb: (err: any, data?: CreateExtensionAssociationCommandOutput) => void
  ): void;
  createExtensionAssociation(
    args: CreateExtensionAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExtensionAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHostedConfigurationVersionCommand}
   */
  createHostedConfigurationVersion(
    args: CreateHostedConfigurationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHostedConfigurationVersionCommandOutput>;
  createHostedConfigurationVersion(
    args: CreateHostedConfigurationVersionCommandInput,
    cb: (err: any, data?: CreateHostedConfigurationVersionCommandOutput) => void
  ): void;
  createHostedConfigurationVersion(
    args: CreateHostedConfigurationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHostedConfigurationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationProfileCommand}
   */
  deleteConfigurationProfile(
    args: DeleteConfigurationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationProfileCommandOutput>;
  deleteConfigurationProfile(
    args: DeleteConfigurationProfileCommandInput,
    cb: (err: any, data?: DeleteConfigurationProfileCommandOutput) => void
  ): void;
  deleteConfigurationProfile(
    args: DeleteConfigurationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeploymentStrategyCommand}
   */
  deleteDeploymentStrategy(
    args: DeleteDeploymentStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentStrategyCommandOutput>;
  deleteDeploymentStrategy(
    args: DeleteDeploymentStrategyCommandInput,
    cb: (err: any, data?: DeleteDeploymentStrategyCommandOutput) => void
  ): void;
  deleteDeploymentStrategy(
    args: DeleteDeploymentStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentStrategyCommandOutput) => void
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
   * @see {@link DeleteExperimentDefinitionCommand}
   */
  deleteExperimentDefinition(
    args: DeleteExperimentDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExperimentDefinitionCommandOutput>;
  deleteExperimentDefinition(
    args: DeleteExperimentDefinitionCommandInput,
    cb: (err: any, data?: DeleteExperimentDefinitionCommandOutput) => void
  ): void;
  deleteExperimentDefinition(
    args: DeleteExperimentDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExperimentDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExtensionCommand}
   */
  deleteExtension(
    args: DeleteExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExtensionCommandOutput>;
  deleteExtension(
    args: DeleteExtensionCommandInput,
    cb: (err: any, data?: DeleteExtensionCommandOutput) => void
  ): void;
  deleteExtension(
    args: DeleteExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExtensionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExtensionAssociationCommand}
   */
  deleteExtensionAssociation(
    args: DeleteExtensionAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExtensionAssociationCommandOutput>;
  deleteExtensionAssociation(
    args: DeleteExtensionAssociationCommandInput,
    cb: (err: any, data?: DeleteExtensionAssociationCommandOutput) => void
  ): void;
  deleteExtensionAssociation(
    args: DeleteExtensionAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExtensionAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHostedConfigurationVersionCommand}
   */
  deleteHostedConfigurationVersion(
    args: DeleteHostedConfigurationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHostedConfigurationVersionCommandOutput>;
  deleteHostedConfigurationVersion(
    args: DeleteHostedConfigurationVersionCommandInput,
    cb: (err: any, data?: DeleteHostedConfigurationVersionCommandOutput) => void
  ): void;
  deleteHostedConfigurationVersion(
    args: DeleteHostedConfigurationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHostedConfigurationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(): Promise<GetAccountSettingsCommandOutput>;
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
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(
    args: GetApplicationCommandInput,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationCommand}
   */
  getConfiguration(
    args: GetConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationCommandOutput>;
  getConfiguration(
    args: GetConfigurationCommandInput,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  getConfiguration(
    args: GetConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationProfileCommand}
   */
  getConfigurationProfile(
    args: GetConfigurationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationProfileCommandOutput>;
  getConfigurationProfile(
    args: GetConfigurationProfileCommandInput,
    cb: (err: any, data?: GetConfigurationProfileCommandOutput) => void
  ): void;
  getConfigurationProfile(
    args: GetConfigurationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(
    args: GetDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentCommandOutput>;
  getDeployment(
    args: GetDeploymentCommandInput,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentStrategyCommand}
   */
  getDeploymentStrategy(
    args: GetDeploymentStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentStrategyCommandOutput>;
  getDeploymentStrategy(
    args: GetDeploymentStrategyCommandInput,
    cb: (err: any, data?: GetDeploymentStrategyCommandOutput) => void
  ): void;
  getDeploymentStrategy(
    args: GetDeploymentStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentStrategyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentCommand}
   */
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCommandOutput>;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExperimentDefinitionCommand}
   */
  getExperimentDefinition(
    args: GetExperimentDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExperimentDefinitionCommandOutput>;
  getExperimentDefinition(
    args: GetExperimentDefinitionCommandInput,
    cb: (err: any, data?: GetExperimentDefinitionCommandOutput) => void
  ): void;
  getExperimentDefinition(
    args: GetExperimentDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExperimentDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExperimentRunCommand}
   */
  getExperimentRun(
    args: GetExperimentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExperimentRunCommandOutput>;
  getExperimentRun(
    args: GetExperimentRunCommandInput,
    cb: (err: any, data?: GetExperimentRunCommandOutput) => void
  ): void;
  getExperimentRun(
    args: GetExperimentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExperimentRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExtensionCommand}
   */
  getExtension(
    args: GetExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExtensionCommandOutput>;
  getExtension(
    args: GetExtensionCommandInput,
    cb: (err: any, data?: GetExtensionCommandOutput) => void
  ): void;
  getExtension(
    args: GetExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExtensionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExtensionAssociationCommand}
   */
  getExtensionAssociation(
    args: GetExtensionAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExtensionAssociationCommandOutput>;
  getExtensionAssociation(
    args: GetExtensionAssociationCommandInput,
    cb: (err: any, data?: GetExtensionAssociationCommandOutput) => void
  ): void;
  getExtensionAssociation(
    args: GetExtensionAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExtensionAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHostedConfigurationVersionCommand}
   */
  getHostedConfigurationVersion(
    args: GetHostedConfigurationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHostedConfigurationVersionCommandOutput>;
  getHostedConfigurationVersion(
    args: GetHostedConfigurationVersionCommandInput,
    cb: (err: any, data?: GetHostedConfigurationVersionCommandOutput) => void
  ): void;
  getHostedConfigurationVersion(
    args: GetHostedConfigurationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostedConfigurationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationProfilesCommand}
   */
  listConfigurationProfiles(
    args: ListConfigurationProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationProfilesCommandOutput>;
  listConfigurationProfiles(
    args: ListConfigurationProfilesCommandInput,
    cb: (err: any, data?: ListConfigurationProfilesCommandOutput) => void
  ): void;
  listConfigurationProfiles(
    args: ListConfigurationProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationProfilesCommandOutput) => void
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
   * @see {@link ListDeploymentStrategiesCommand}
   */
  listDeploymentStrategies(): Promise<ListDeploymentStrategiesCommandOutput>;
  listDeploymentStrategies(
    args: ListDeploymentStrategiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentStrategiesCommandOutput>;
  listDeploymentStrategies(
    args: ListDeploymentStrategiesCommandInput,
    cb: (err: any, data?: ListDeploymentStrategiesCommandOutput) => void
  ): void;
  listDeploymentStrategies(
    args: ListDeploymentStrategiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentStrategiesCommandOutput) => void
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
   * @see {@link ListExperimentDefinitionsCommand}
   */
  listExperimentDefinitions(): Promise<ListExperimentDefinitionsCommandOutput>;
  listExperimentDefinitions(
    args: ListExperimentDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperimentDefinitionsCommandOutput>;
  listExperimentDefinitions(
    args: ListExperimentDefinitionsCommandInput,
    cb: (err: any, data?: ListExperimentDefinitionsCommandOutput) => void
  ): void;
  listExperimentDefinitions(
    args: ListExperimentDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperimentDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExperimentRunEventsCommand}
   */
  listExperimentRunEvents(
    args: ListExperimentRunEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperimentRunEventsCommandOutput>;
  listExperimentRunEvents(
    args: ListExperimentRunEventsCommandInput,
    cb: (err: any, data?: ListExperimentRunEventsCommandOutput) => void
  ): void;
  listExperimentRunEvents(
    args: ListExperimentRunEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperimentRunEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExperimentRunsCommand}
   */
  listExperimentRuns(
    args: ListExperimentRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperimentRunsCommandOutput>;
  listExperimentRuns(
    args: ListExperimentRunsCommandInput,
    cb: (err: any, data?: ListExperimentRunsCommandOutput) => void
  ): void;
  listExperimentRuns(
    args: ListExperimentRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperimentRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExtensionAssociationsCommand}
   */
  listExtensionAssociations(): Promise<ListExtensionAssociationsCommandOutput>;
  listExtensionAssociations(
    args: ListExtensionAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExtensionAssociationsCommandOutput>;
  listExtensionAssociations(
    args: ListExtensionAssociationsCommandInput,
    cb: (err: any, data?: ListExtensionAssociationsCommandOutput) => void
  ): void;
  listExtensionAssociations(
    args: ListExtensionAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExtensionAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExtensionsCommand}
   */
  listExtensions(): Promise<ListExtensionsCommandOutput>;
  listExtensions(
    args: ListExtensionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExtensionsCommandOutput>;
  listExtensions(
    args: ListExtensionsCommandInput,
    cb: (err: any, data?: ListExtensionsCommandOutput) => void
  ): void;
  listExtensions(
    args: ListExtensionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExtensionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHostedConfigurationVersionsCommand}
   */
  listHostedConfigurationVersions(
    args: ListHostedConfigurationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHostedConfigurationVersionsCommandOutput>;
  listHostedConfigurationVersions(
    args: ListHostedConfigurationVersionsCommandInput,
    cb: (err: any, data?: ListHostedConfigurationVersionsCommandOutput) => void
  ): void;
  listHostedConfigurationVersions(
    args: ListHostedConfigurationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHostedConfigurationVersionsCommandOutput) => void
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
   * @see {@link StartDeploymentCommand}
   */
  startDeployment(
    args: StartDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeploymentCommandOutput>;
  startDeployment(
    args: StartDeploymentCommandInput,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
  ): void;
  startDeployment(
    args: StartDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExperimentRunCommand}
   */
  startExperimentRun(
    args: StartExperimentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExperimentRunCommandOutput>;
  startExperimentRun(
    args: StartExperimentRunCommandInput,
    cb: (err: any, data?: StartExperimentRunCommandOutput) => void
  ): void;
  startExperimentRun(
    args: StartExperimentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExperimentRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDeploymentCommand}
   */
  stopDeployment(
    args: StopDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDeploymentCommandOutput>;
  stopDeployment(
    args: StopDeploymentCommandInput,
    cb: (err: any, data?: StopDeploymentCommandOutput) => void
  ): void;
  stopDeployment(
    args: StopDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link StopExperimentRunCommand}
   */
  stopExperimentRun(
    args: StopExperimentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopExperimentRunCommandOutput>;
  stopExperimentRun(
    args: StopExperimentRunCommandInput,
    cb: (err: any, data?: StopExperimentRunCommandOutput) => void
  ): void;
  stopExperimentRun(
    args: StopExperimentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopExperimentRunCommandOutput) => void
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
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(): Promise<UpdateAccountSettingsCommandOutput>;
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
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationProfileCommand}
   */
  updateConfigurationProfile(
    args: UpdateConfigurationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationProfileCommandOutput>;
  updateConfigurationProfile(
    args: UpdateConfigurationProfileCommandInput,
    cb: (err: any, data?: UpdateConfigurationProfileCommandOutput) => void
  ): void;
  updateConfigurationProfile(
    args: UpdateConfigurationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeploymentStrategyCommand}
   */
  updateDeploymentStrategy(
    args: UpdateDeploymentStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeploymentStrategyCommandOutput>;
  updateDeploymentStrategy(
    args: UpdateDeploymentStrategyCommandInput,
    cb: (err: any, data?: UpdateDeploymentStrategyCommandOutput) => void
  ): void;
  updateDeploymentStrategy(
    args: UpdateDeploymentStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeploymentStrategyCommandOutput) => void
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
   * @see {@link UpdateExperimentDefinitionCommand}
   */
  updateExperimentDefinition(
    args: UpdateExperimentDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExperimentDefinitionCommandOutput>;
  updateExperimentDefinition(
    args: UpdateExperimentDefinitionCommandInput,
    cb: (err: any, data?: UpdateExperimentDefinitionCommandOutput) => void
  ): void;
  updateExperimentDefinition(
    args: UpdateExperimentDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExperimentDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateExperimentRunCommand}
   */
  updateExperimentRun(
    args: UpdateExperimentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExperimentRunCommandOutput>;
  updateExperimentRun(
    args: UpdateExperimentRunCommandInput,
    cb: (err: any, data?: UpdateExperimentRunCommandOutput) => void
  ): void;
  updateExperimentRun(
    args: UpdateExperimentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExperimentRunCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateExtensionCommand}
   */
  updateExtension(
    args: UpdateExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExtensionCommandOutput>;
  updateExtension(
    args: UpdateExtensionCommandInput,
    cb: (err: any, data?: UpdateExtensionCommandOutput) => void
  ): void;
  updateExtension(
    args: UpdateExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExtensionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateExtensionAssociationCommand}
   */
  updateExtensionAssociation(
    args: UpdateExtensionAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExtensionAssociationCommandOutput>;
  updateExtensionAssociation(
    args: UpdateExtensionAssociationCommandInput,
    cb: (err: any, data?: UpdateExtensionAssociationCommandOutput) => void
  ): void;
  updateExtensionAssociation(
    args: UpdateExtensionAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExtensionAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateConfigurationCommand}
   */
  validateConfiguration(
    args: ValidateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateConfigurationCommandOutput>;
  validateConfiguration(
    args: ValidateConfigurationCommandInput,
    cb: (err: any, data?: ValidateConfigurationCommandOutput) => void
  ): void;
  validateConfiguration(
    args: ValidateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationsCommandOutput}.
   */
  paginateListApplications(
    args?: ListApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationsCommandOutput>;

  /**
   * @see {@link ListConfigurationProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConfigurationProfilesCommandOutput}.
   */
  paginateListConfigurationProfiles(
    args: ListConfigurationProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConfigurationProfilesCommandOutput>;

  /**
   * @see {@link ListDeploymentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeploymentsCommandOutput}.
   */
  paginateListDeployments(
    args: ListDeploymentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeploymentsCommandOutput>;

  /**
   * @see {@link ListDeploymentStrategiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeploymentStrategiesCommandOutput}.
   */
  paginateListDeploymentStrategies(
    args?: ListDeploymentStrategiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeploymentStrategiesCommandOutput>;

  /**
   * @see {@link ListEnvironmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnvironmentsCommandOutput}.
   */
  paginateListEnvironments(
    args: ListEnvironmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnvironmentsCommandOutput>;

  /**
   * @see {@link ListExperimentDefinitionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExperimentDefinitionsCommandOutput}.
   */
  paginateListExperimentDefinitions(
    args?: ListExperimentDefinitionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExperimentDefinitionsCommandOutput>;

  /**
   * @see {@link ListExperimentRunEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExperimentRunEventsCommandOutput}.
   */
  paginateListExperimentRunEvents(
    args: ListExperimentRunEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExperimentRunEventsCommandOutput>;

  /**
   * @see {@link ListExperimentRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExperimentRunsCommandOutput}.
   */
  paginateListExperimentRuns(
    args: ListExperimentRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExperimentRunsCommandOutput>;

  /**
   * @see {@link ListExtensionAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExtensionAssociationsCommandOutput}.
   */
  paginateListExtensionAssociations(
    args?: ListExtensionAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExtensionAssociationsCommandOutput>;

  /**
   * @see {@link ListExtensionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExtensionsCommandOutput}.
   */
  paginateListExtensions(
    args?: ListExtensionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExtensionsCommandOutput>;

  /**
   * @see {@link ListHostedConfigurationVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListHostedConfigurationVersionsCommandOutput}.
   */
  paginateListHostedConfigurationVersions(
    args: ListHostedConfigurationVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListHostedConfigurationVersionsCommandOutput>;

  /**
   * @see {@link GetDeploymentCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDeploymentComplete(
    args: GetDeploymentCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<AppConfig>, "client">
  ): Promise<WaiterResult<GetDeploymentCommandOutput>>;

  /**
   * @see {@link GetEnvironmentCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilEnvironmentReadyForDeployment(
    args: GetEnvironmentCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<AppConfig>, "client">
  ): Promise<WaiterResult<GetEnvironmentCommandOutput>>;
}

/**
 * <p>AppConfig helps you safely change application behavior in production without redeploying code. Using feature flags and dynamic free-form configurations, you can control how your application runs in real time. This approach reduces risk, accelerates releases, and enables faster responses to issues. You can gradually roll out new features to specific users, monitor their impact, and expand availability with confidence. You can also update block lists, allow lists, throttling limits, and logging levels instantly, allowing you to mitigate issues and fine-tune performance without a deployment.</p>
 *          <p>AppConfig supports a broad spectrum of use cases:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Feature flags and toggles</b> – Gradually release new capabilities to targeted users, monitor impact, and instantly roll back changes if issues occur.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Application tuning</b> – Introduce changes safely in production, measure their effects, and refine behavior without redeploying code.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Allow list or block list</b> – Control access to features or restrict specific users in real time, without modifying application code. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Centralized configuration storage</b> – Manage configuration data consistently across workloads. AppConfig can deploy configuration from the AppConfig hosted configuration store, Secrets Manager, Systems Manager, Systems Manager Parameter Store, or Amazon S3.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>How AppConfig works</b>
 *          </p>
 *          <p>This section provides a high-level description of how AppConfig works and how
 *          you get started.</p>
 *          <dl>
 *             <dt>1. Identify configuration data to manage in AppConfig</dt>
 *             <dd>
 *                <p>Before creating a configuration profile, identify the configuration data in your code that you want to manage dynamically using AppConfig. Common examples include feature flags, allow and block lists, logging levels, service limits, and throttling rules. These values tend to change frequently and can cause issues if misconfigured.</p>
 *                <p>If your configuration data already exists in cloud services such as Systems Manager Parameter Store or Amazon S3, you can use AppConfig to validate, deploy, and manage that data more effectively.</p>
 *             </dd>
 *             <dt>2. Create a configuration profile in AppConfig</dt>
 *             <dd>
 *                <p>A configuration profile defines how AppConfig locates and manages your configuration data. It includes a URI that points to the data source and a profile type.</p>
 *                <p>AppConfig supports two profile types</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>Feature flags</b> – Enable controlled feature releases, gradual rollouts, and testing in production.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Free-form configurations</b> – Store and retrieve configuration data from external sources and update it without redeploying code.</p>
 *                   </li>
 *                </ul>
 *                <p>Both profile types help decouple configuration from code, support continuous delivery, and reduce deployment risk.</p>
 *                <p>You can also add optional validators to ensure that configuration data is syntactically and semantically correct. During deployment, AppConfig evaluates these validators and automatically rolls back changes if validation fails.</p>
 *                <p>Each configuration profile is associated with an application, which acts as a logical container for your configuration resources. For more information about creating a configuration profile, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-profile.html">Creating a configuration profile in AppConfig</a> in the the <i>AppConfig User Guide</i>.</p>
 *             </dd>
 *             <dt>3. Deploy configuration data</dt>
 *             <dd>
 *                <p>When you start a deployment, AppConfig:</p>
 *                <ol>
 *                   <li>
 *                      <p>Retrieves configuration data from the source defined in the configuration profile</p>
 *                   </li>
 *                   <li>
 *                      <p>Validates the data using the configured validators</p>
 *                   </li>
 *                   <li>
 *                      <p>Delivers the validated configuration to AppConfig Agent</p>
 *                   </li>
 *                </ol>
 *                <p>The delivered configuration becomes the deployed version used by your application. For more information about deploying a configuration, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/deploying-feature-flags.html">Deploying feature flags and configuration data in AppConfig</a>.</p>
 *             </dd>
 *             <dt>4. Retrieve configuration data</dt>
 *             <dd>
 *                <p>Your application retrieves configuration data by calling a local endpoint exposed by AppConfig Agent, which caches the deployed configuration. Retrieving data is a metered event. AppConfig Agent supports a variety of use cases, as described in <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-agent-how-to-use.html">How to use AppConfig Agent to retrieve configuration data</a>.</p>
 *                <p>If the agent is not suitable for your use case, your application can retrieve configuration data directly from AppConfig by calling the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> API actions. </p>
 *                <p>For more information about retrieving a configuration, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/retrieving-feature-flags.html">Retrieving feature flags and configuration data in AppConfig</a>.</p>
 *             </dd>
 *          </dl>
 *          <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html">AppConfig User
 *          Guide</a>.</p>
 * @public
 */
export class AppConfig extends AppConfigClient implements AppConfig {}
createAggregatedClient(commands, AppConfig, { paginators, waiters });
