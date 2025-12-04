import {
  ActionPoint,
  AppConfig,
  AppConfigClient,
  AppConfigServiceException,
  CreateApplicationCommand,
  CreateConfigurationProfileCommand,
  CreateDeploymentStrategyCommand,
  CreateEnvironmentCommand,
  CreateExtensionAssociationCommand,
  CreateExtensionCommand,
  CreateHostedConfigurationVersionCommand,
  DeleteApplicationCommand,
  DeleteConfigurationProfileCommand,
  DeleteDeploymentStrategyCommand,
  DeleteEnvironmentCommand,
  DeleteExtensionAssociationCommand,
  DeleteExtensionCommand,
  DeleteHostedConfigurationVersionCommand,
  DeletionProtectionCheck,
  DeploymentEventType,
  DeploymentState,
  EnvironmentState,
  GetAccountSettingsCommand,
  GetApplicationCommand,
  GetConfigurationCommand,
  GetConfigurationProfileCommand,
  GetDeploymentCommand,
  GetDeploymentStrategyCommand,
  GetEnvironmentCommand,
  GetExtensionAssociationCommand,
  GetExtensionCommand,
  GetHostedConfigurationVersionCommand,
  GrowthType,
  ListApplicationsCommand,
  ListConfigurationProfilesCommand,
  ListDeploymentStrategiesCommand,
  ListDeploymentsCommand,
  ListEnvironmentsCommand,
  ListExtensionAssociationsCommand,
  ListExtensionsCommand,
  ListHostedConfigurationVersionsCommand,
  ListTagsForResourceCommand,
  ReplicateTo,
  StartDeploymentCommand,
  StopDeploymentCommand,
  TagResourceCommand,
  TriggeredBy,
  UntagResourceCommand,
  UpdateAccountSettingsCommand,
  UpdateApplicationCommand,
  UpdateConfigurationProfileCommand,
  UpdateDeploymentStrategyCommand,
  UpdateEnvironmentCommand,
  UpdateExtensionAssociationCommand,
  UpdateExtensionCommand,
  ValidateConfigurationCommand,
  ValidatorType,
  paginateListApplications,
  paginateListConfigurationProfiles,
  paginateListDeploymentStrategies,
  paginateListDeployments,
  paginateListEnvironments,
  paginateListExtensionAssociations,
  paginateListExtensions,
  paginateListHostedConfigurationVersions,
  waitForDeploymentComplete,
  waitForEnvironmentReadyForDeployment,
  waitUntilDeploymentComplete,
  waitUntilEnvironmentReadyForDeployment,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppConfigClient === "function");
assert(typeof AppConfig === "function");
// commands
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateConfigurationProfileCommand === "function");
assert(typeof CreateDeploymentStrategyCommand === "function");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateExtensionCommand === "function");
assert(typeof CreateExtensionAssociationCommand === "function");
assert(typeof CreateHostedConfigurationVersionCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteConfigurationProfileCommand === "function");
assert(typeof DeleteDeploymentStrategyCommand === "function");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteExtensionCommand === "function");
assert(typeof DeleteExtensionAssociationCommand === "function");
assert(typeof DeleteHostedConfigurationVersionCommand === "function");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetConfigurationCommand === "function");
assert(typeof GetConfigurationProfileCommand === "function");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetDeploymentStrategyCommand === "function");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetExtensionCommand === "function");
assert(typeof GetExtensionAssociationCommand === "function");
assert(typeof GetHostedConfigurationVersionCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListConfigurationProfilesCommand === "function");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListDeploymentStrategiesCommand === "function");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListExtensionAssociationsCommand === "function");
assert(typeof ListExtensionsCommand === "function");
assert(typeof ListHostedConfigurationVersionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartDeploymentCommand === "function");
assert(typeof StopDeploymentCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateConfigurationProfileCommand === "function");
assert(typeof UpdateDeploymentStrategyCommand === "function");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateExtensionCommand === "function");
assert(typeof UpdateExtensionAssociationCommand === "function");
assert(typeof ValidateConfigurationCommand === "function");
// enums
assert(typeof ActionPoint === "object");
assert(typeof DeletionProtectionCheck === "object");
assert(typeof DeploymentEventType === "object");
assert(typeof DeploymentState === "object");
assert(typeof EnvironmentState === "object");
assert(typeof GrowthType === "object");
assert(typeof ReplicateTo === "object");
assert(typeof TriggeredBy === "object");
assert(typeof ValidatorType === "object");
// errors
assert(AppConfigServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForDeploymentComplete === "function");
assert(typeof waitForEnvironmentReadyForDeployment === "function");
assert(typeof waitUntilDeploymentComplete === "function");
assert(typeof waitUntilEnvironmentReadyForDeployment === "function");
// paginators
assert(typeof paginateListApplications === "function");
assert(typeof paginateListConfigurationProfiles === "function");
assert(typeof paginateListDeploymentStrategies === "function");
assert(typeof paginateListDeployments === "function");
assert(typeof paginateListEnvironments === "function");
assert(typeof paginateListExtensionAssociations === "function");
assert(typeof paginateListExtensions === "function");
assert(typeof paginateListHostedConfigurationVersions === "function");
console.log(`AppConfig index test passed.`);
