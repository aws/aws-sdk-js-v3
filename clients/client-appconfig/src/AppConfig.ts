// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AppConfigClient, AppConfigClientConfig } from "./AppConfigClient";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateConfigurationProfileCommand,
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,
} from "./commands/CreateConfigurationProfileCommand";
import {
  CreateDeploymentStrategyCommand,
  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput,
} from "./commands/CreateDeploymentStrategyCommand";
import {
  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import {
  CreateExtensionAssociationCommand,
  CreateExtensionAssociationCommandInput,
  CreateExtensionAssociationCommandOutput,
} from "./commands/CreateExtensionAssociationCommand";
import {
  CreateExtensionCommand,
  CreateExtensionCommandInput,
  CreateExtensionCommandOutput,
} from "./commands/CreateExtensionCommand";
import {
  CreateHostedConfigurationVersionCommand,
  CreateHostedConfigurationVersionCommandInput,
  CreateHostedConfigurationVersionCommandOutput,
} from "./commands/CreateHostedConfigurationVersionCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteConfigurationProfileCommand,
  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput,
} from "./commands/DeleteConfigurationProfileCommand";
import {
  DeleteDeploymentStrategyCommand,
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput,
} from "./commands/DeleteDeploymentStrategyCommand";
import {
  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import {
  DeleteExtensionAssociationCommand,
  DeleteExtensionAssociationCommandInput,
  DeleteExtensionAssociationCommandOutput,
} from "./commands/DeleteExtensionAssociationCommand";
import {
  DeleteExtensionCommand,
  DeleteExtensionCommandInput,
  DeleteExtensionCommandOutput,
} from "./commands/DeleteExtensionCommand";
import {
  DeleteHostedConfigurationVersionCommand,
  DeleteHostedConfigurationVersionCommandInput,
  DeleteHostedConfigurationVersionCommandOutput,
} from "./commands/DeleteHostedConfigurationVersionCommand";
import {
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetConfigurationCommand,
  GetConfigurationCommandInput,
  GetConfigurationCommandOutput,
} from "./commands/GetConfigurationCommand";
import {
  GetConfigurationProfileCommand,
  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput,
} from "./commands/GetConfigurationProfileCommand";
import {
  GetDeploymentCommand,
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
} from "./commands/GetDeploymentCommand";
import {
  GetDeploymentStrategyCommand,
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
} from "./commands/GetDeploymentStrategyCommand";
import {
  GetEnvironmentCommand,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
} from "./commands/GetEnvironmentCommand";
import {
  GetExtensionAssociationCommand,
  GetExtensionAssociationCommandInput,
  GetExtensionAssociationCommandOutput,
} from "./commands/GetExtensionAssociationCommand";
import {
  GetExtensionCommand,
  GetExtensionCommandInput,
  GetExtensionCommandOutput,
} from "./commands/GetExtensionCommand";
import {
  GetHostedConfigurationVersionCommand,
  GetHostedConfigurationVersionCommandInput,
  GetHostedConfigurationVersionCommandOutput,
} from "./commands/GetHostedConfigurationVersionCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListConfigurationProfilesCommand,
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "./commands/ListConfigurationProfilesCommand";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "./commands/ListDeploymentsCommand";
import {
  ListDeploymentStrategiesCommand,
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "./commands/ListDeploymentStrategiesCommand";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "./commands/ListEnvironmentsCommand";
import {
  ListExtensionAssociationsCommand,
  ListExtensionAssociationsCommandInput,
  ListExtensionAssociationsCommandOutput,
} from "./commands/ListExtensionAssociationsCommand";
import {
  ListExtensionsCommand,
  ListExtensionsCommandInput,
  ListExtensionsCommandOutput,
} from "./commands/ListExtensionsCommand";
import {
  ListHostedConfigurationVersionsCommand,
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
} from "./commands/ListHostedConfigurationVersionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartDeploymentCommand,
  StartDeploymentCommandInput,
  StartDeploymentCommandOutput,
} from "./commands/StartDeploymentCommand";
import {
  StopDeploymentCommand,
  StopDeploymentCommandInput,
  StopDeploymentCommandOutput,
} from "./commands/StopDeploymentCommand";
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
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateConfigurationProfileCommand,
  UpdateConfigurationProfileCommandInput,
  UpdateConfigurationProfileCommandOutput,
} from "./commands/UpdateConfigurationProfileCommand";
import {
  UpdateDeploymentStrategyCommand,
  UpdateDeploymentStrategyCommandInput,
  UpdateDeploymentStrategyCommandOutput,
} from "./commands/UpdateDeploymentStrategyCommand";
import {
  UpdateEnvironmentCommand,
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import {
  UpdateExtensionAssociationCommand,
  UpdateExtensionAssociationCommandInput,
  UpdateExtensionAssociationCommandOutput,
} from "./commands/UpdateExtensionAssociationCommand";
import {
  UpdateExtensionCommand,
  UpdateExtensionCommandInput,
  UpdateExtensionCommandOutput,
} from "./commands/UpdateExtensionCommand";
import {
  ValidateConfigurationCommand,
  ValidateConfigurationCommandInput,
  ValidateConfigurationCommandOutput,
} from "./commands/ValidateConfigurationCommand";

const commands = {
  CreateApplicationCommand,
  CreateConfigurationProfileCommand,
  CreateDeploymentStrategyCommand,
  CreateEnvironmentCommand,
  CreateExtensionCommand,
  CreateExtensionAssociationCommand,
  CreateHostedConfigurationVersionCommand,
  DeleteApplicationCommand,
  DeleteConfigurationProfileCommand,
  DeleteDeploymentStrategyCommand,
  DeleteEnvironmentCommand,
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
  GetExtensionCommand,
  GetExtensionAssociationCommand,
  GetHostedConfigurationVersionCommand,
  ListApplicationsCommand,
  ListConfigurationProfilesCommand,
  ListDeploymentsCommand,
  ListDeploymentStrategiesCommand,
  ListEnvironmentsCommand,
  ListExtensionAssociationsCommand,
  ListExtensionsCommand,
  ListHostedConfigurationVersionsCommand,
  ListTagsForResourceCommand,
  StartDeploymentCommand,
  StopDeploymentCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountSettingsCommand,
  UpdateApplicationCommand,
  UpdateConfigurationProfileCommand,
  UpdateDeploymentStrategyCommand,
  UpdateEnvironmentCommand,
  UpdateExtensionCommand,
  UpdateExtensionAssociationCommand,
  ValidateConfigurationCommand,
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
   * @see {@link CreateExtensionCommand}
   */
  createExtension(
    args: CreateExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExtensionCommandOutput>;
  createExtension(args: CreateExtensionCommandInput, cb: (err: any, data?: CreateExtensionCommandOutput) => void): void;
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
   * @see {@link DeleteExtensionCommand}
   */
  deleteExtension(
    args: DeleteExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExtensionCommandOutput>;
  deleteExtension(args: DeleteExtensionCommandInput, cb: (err: any, data?: DeleteExtensionCommandOutput) => void): void;
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
  getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
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
  getDeployment(args: GetDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentCommandOutput>;
  getDeployment(args: GetDeploymentCommandInput, cb: (err: any, data?: GetDeploymentCommandOutput) => void): void;
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
  getEnvironment(args: GetEnvironmentCommandInput, cb: (err: any, data?: GetEnvironmentCommandOutput) => void): void;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExtensionCommand}
   */
  getExtension(args: GetExtensionCommandInput, options?: __HttpHandlerOptions): Promise<GetExtensionCommandOutput>;
  getExtension(args: GetExtensionCommandInput, cb: (err: any, data?: GetExtensionCommandOutput) => void): void;
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
  listDeployments(args: ListDeploymentsCommandInput, cb: (err: any, data?: ListDeploymentsCommandOutput) => void): void;
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
  listExtensions(args: ListExtensionsCommandInput, cb: (err: any, data?: ListExtensionsCommandOutput) => void): void;
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
  startDeployment(args: StartDeploymentCommandInput, cb: (err: any, data?: StartDeploymentCommandOutput) => void): void;
  startDeployment(
    args: StartDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDeploymentCommand}
   */
  stopDeployment(
    args: StopDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDeploymentCommandOutput>;
  stopDeployment(args: StopDeploymentCommandInput, cb: (err: any, data?: StopDeploymentCommandOutput) => void): void;
  stopDeployment(
    args: StopDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDeploymentCommandOutput) => void
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
   * @see {@link UpdateExtensionCommand}
   */
  updateExtension(
    args: UpdateExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExtensionCommandOutput>;
  updateExtension(args: UpdateExtensionCommandInput, cb: (err: any, data?: UpdateExtensionCommandOutput) => void): void;
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
}

/**
 * <p>AppConfig feature flags and dynamic configurations help software builders
 *          quickly and securely adjust application behavior in production environments without full
 *          code deployments. AppConfig speeds up software release frequency, improves
 *          application resiliency, and helps you address emergent issues more quickly. With feature
 *          flags, you can gradually release new capabilities to users and measure the impact of those
 *          changes before fully deploying the new capabilities to all users. With operational flags
 *          and dynamic configurations, you can update block lists, allow lists, throttling limits,
 *          logging verbosity, and perform other operational tuning to quickly respond to issues in
 *          production environments.</p>
 *          <note>
 *             <p>AppConfig is a tool in Amazon Web Services Systems Manager.</p>
 *          </note>
 *          <p>Despite the fact that application configuration content can vary greatly from
 *          application to application, AppConfig supports the following use cases, which
 *          cover a broad spectrum of customer needs:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Feature flags and toggles</b> - Safely release new
 *                capabilities to your customers in a controlled environment. Instantly roll back
 *                changes if you experience a problem.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Application tuning</b> - Carefully introduce
 *                application changes while testing the impact of those changes with users in
 *                production environments.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Allow list or block list</b> - Control access to
 *                premium features or instantly block specific users without deploying new code.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Centralized configuration storage</b> - Keep your
 *                configuration data organized and consistent across all of your workloads. You can use
 *                   AppConfig to deploy configuration data stored in the AppConfig
 *                hosted configuration store, Secrets Manager, Systems Manager, Parameter
 *                Store, or Amazon S3.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>How AppConfig works</b>
 *          </p>
 *          <p>This section provides a high-level description of how AppConfig works and how
 *          you get started.</p>
 *          <dl>
 *             <dt>1. Identify configuration values in code you want to manage in the cloud</dt>
 *             <dd>
 *                <p>Before you start creating AppConfig artifacts, we recommend you
 *                   identify configuration data in your code that you want to dynamically manage using
 *                      AppConfig. Good examples include feature flags or toggles, allow and
 *                   block lists, logging verbosity, service limits, and throttling rules, to name a
 *                   few.</p>
 *                <p>If your configuration data already exists in the cloud, you can take advantage
 *                   of AppConfig validation, deployment, and extension features to further
 *                   streamline configuration data management.</p>
 *             </dd>
 *             <dt>2. Create an application namespace</dt>
 *             <dd>
 *                <p>To create a namespace, you create an AppConfig artifact called an
 *                   application. An application is simply an organizational construct like a
 *                   folder.</p>
 *             </dd>
 *             <dt>3. Create environments</dt>
 *             <dd>
 *                <p>For each AppConfig application, you define one or more environments.
 *                   An environment is a logical grouping of targets, such as applications in a
 *                      <code>Beta</code> or <code>Production</code> environment, Lambda functions,
 *                   or containers. You can also define environments for application subcomponents,
 *                   such as the <code>Web</code>, <code>Mobile</code>, and
 *                   <code>Back-end</code>.</p>
 *                <p>You can configure Amazon CloudWatch alarms for each environment. The system monitors
 *                   alarms during a configuration deployment. If an alarm is triggered, the system
 *                   rolls back the configuration.</p>
 *             </dd>
 *             <dt>4. Create a configuration profile</dt>
 *             <dd>
 *                <p>A configuration profile includes, among other things, a URI that enables
 *                      AppConfig to locate your configuration data in its stored location
 *                   and a profile type. AppConfig supports two configuration profile types:
 *                   feature flags and freeform configurations. Feature flag configuration profiles
 *                   store their data in the AppConfig hosted configuration store and the URI
 *                   is simply <code>hosted</code>. For freeform configuration profiles, you can store
 *                   your data in the AppConfig hosted configuration store or any Amazon Web Services
 *                   service that integrates with AppConfig, as described in <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-free-form-configurations-creating.html">Creating
 *                      a free form configuration profile</a> in the the <i>AppConfig User Guide</i>.</p>
 *                <p>A configuration profile can also include optional validators to ensure your
 *                   configuration data is syntactically and semantically correct. AppConfig
 *                   performs a check using the validators when you start a deployment. If any errors
 *                   are detected, the deployment rolls back to the previous configuration data.</p>
 *             </dd>
 *             <dt>5. Deploy configuration data</dt>
 *             <dd>
 *                <p>When you create a new deployment, you specify the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>An application ID</p>
 *                   </li>
 *                   <li>
 *                      <p>A configuration profile ID</p>
 *                   </li>
 *                   <li>
 *                      <p>A configuration version</p>
 *                   </li>
 *                   <li>
 *                      <p>An environment ID where you want to deploy the configuration data</p>
 *                   </li>
 *                   <li>
 *                      <p>A deployment strategy ID that defines how fast you want the changes to
 *                         take effect</p>
 *                   </li>
 *                </ul>
 *                <p>When you call the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StartDeployment.html">StartDeployment</a> API action, AppConfig performs the following
 *                   tasks:</p>
 *                <ol>
 *                   <li>
 *                      <p>Retrieves the configuration data from the underlying data store by using
 *                         the location URI in the configuration profile.</p>
 *                   </li>
 *                   <li>
 *                      <p>Verifies the configuration data is syntactically and semantically correct
 *                         by using the validators you specified when you created your configuration
 *                         profile.</p>
 *                   </li>
 *                   <li>
 *                      <p>Caches a copy of the data so it is ready to be retrieved by your
 *                         application. This cached copy is called the <i>deployed
 *                            data</i>.</p>
 *                   </li>
 *                </ol>
 *             </dd>
 *             <dt>6. Retrieve the configuration</dt>
 *             <dd>
 *                <p>You can configure AppConfig Agent as a local host and have the agent
 *                   poll AppConfig for configuration updates. The agent calls the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> API actions and caches your configuration data
 *                   locally. To retrieve the data, your application makes an HTTP call to the
 *                   localhost server. AppConfig Agent supports several use cases, as
 *                   described in <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-simplified-methods.html">Simplified
 *                      retrieval methods</a> in the the <i>AppConfig User
 *                      Guide</i>.</p>
 *                <p>If AppConfig Agent isn't supported for your use case, you can
 *                   configure your application to poll AppConfig for configuration updates
 *                   by directly calling the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> API actions. </p>
 *             </dd>
 *          </dl>
 *          <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html">AppConfig User
 *          Guide</a>.</p>
 * @public
 */
export class AppConfig extends AppConfigClient implements AppConfig {}
createAggregatedClient(commands, AppConfig);
