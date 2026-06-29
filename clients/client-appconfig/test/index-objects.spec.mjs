import {
  AccountSettings$,
  Action$,
  ActionInvocation$,
  ActionPoint,
  AppConfig,
  AppConfigClient,
  AppConfigServiceException,
  Application$,
  Applications$,
  AppliedExtension$,
  AttributeValue$,
  BadRequestDetails$,
  BadRequestException,
  BadRequestException$,
  BadRequestReason,
  BytesMeasure,
  Configuration$,
  ConfigurationProfile$,
  ConfigurationProfiles$,
  ConfigurationProfileSummary$,
  ConflictException,
  ConflictException$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateConfigurationProfile$,
  CreateConfigurationProfileCommand,
  CreateConfigurationProfileRequest$,
  CreateDeploymentStrategy$,
  CreateDeploymentStrategyCommand,
  CreateDeploymentStrategyRequest$,
  CreateEnvironment$,
  CreateEnvironmentCommand,
  CreateEnvironmentRequest$,
  CreateExperimentDefinition$,
  CreateExperimentDefinitionCommand,
  CreateExperimentDefinitionRequest$,
  CreateExtension$,
  CreateExtensionAssociation$,
  CreateExtensionAssociationCommand,
  CreateExtensionAssociationRequest$,
  CreateExtensionCommand,
  CreateExtensionRequest$,
  CreateHostedConfigurationVersion$,
  CreateHostedConfigurationVersionCommand,
  CreateHostedConfigurationVersionRequest$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteConfigurationProfile$,
  DeleteConfigurationProfileCommand,
  DeleteConfigurationProfileRequest$,
  DeleteDeploymentStrategy$,
  DeleteDeploymentStrategyCommand,
  DeleteDeploymentStrategyRequest$,
  DeleteEnvironment$,
  DeleteEnvironmentCommand,
  DeleteEnvironmentRequest$,
  DeleteExperimentDefinition$,
  DeleteExperimentDefinitionCommand,
  DeleteExperimentDefinitionRequest$,
  DeleteExtension$,
  DeleteExtensionAssociation$,
  DeleteExtensionAssociationCommand,
  DeleteExtensionAssociationRequest$,
  DeleteExtensionCommand,
  DeleteExtensionRequest$,
  DeleteHostedConfigurationVersion$,
  DeleteHostedConfigurationVersionCommand,
  DeleteHostedConfigurationVersionRequest$,
  DeleteType,
  DeletionProtectionCheck,
  DeletionProtectionSettings$,
  Deployment$,
  DeploymentEvent$,
  DeploymentEventType,
  DeploymentParameters$,
  Deployments$,
  DeploymentState,
  DeploymentStrategies$,
  DeploymentStrategy$,
  DeploymentSummary$,
  DeploymentType,
  Environment$,
  Environments$,
  EnvironmentState,
  ExperimentDefinition$,
  ExperimentDefinitions$,
  ExperimentDefinitionSnapshot$,
  ExperimentDefinitionStatus,
  ExperimentDefinitionSummary$,
  ExperimentRun$,
  ExperimentRunEvent$,
  ExperimentRunEvents$,
  ExperimentRunEventType,
  ExperimentRunResult$,
  ExperimentRuns$,
  ExperimentRunStatus,
  ExperimentRunSummary$,
  Extension$,
  ExtensionAssociation$,
  ExtensionAssociations$,
  ExtensionAssociationSummary$,
  Extensions$,
  ExtensionSummary$,
  FlagValue$,
  GetAccountSettings$,
  GetAccountSettingsCommand,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationRequest$,
  GetConfiguration$,
  GetConfigurationCommand,
  GetConfigurationProfile$,
  GetConfigurationProfileCommand,
  GetConfigurationProfileRequest$,
  GetConfigurationRequest$,
  GetDeployment$,
  GetDeploymentCommand,
  GetDeploymentRequest$,
  GetDeploymentStrategy$,
  GetDeploymentStrategyCommand,
  GetDeploymentStrategyRequest$,
  GetEnvironment$,
  GetEnvironmentCommand,
  GetEnvironmentRequest$,
  GetExperimentDefinition$,
  GetExperimentDefinitionCommand,
  GetExperimentDefinitionRequest$,
  GetExperimentRun$,
  GetExperimentRunCommand,
  GetExperimentRunRequest$,
  GetExtension$,
  GetExtensionAssociation$,
  GetExtensionAssociationCommand,
  GetExtensionAssociationRequest$,
  GetExtensionCommand,
  GetExtensionRequest$,
  GetHostedConfigurationVersion$,
  GetHostedConfigurationVersionCommand,
  GetHostedConfigurationVersionRequest$,
  GrowthType,
  HostedConfigurationVersion$,
  HostedConfigurationVersions$,
  HostedConfigurationVersionSummary$,
  InternalServerException,
  InternalServerException$,
  InvalidConfigurationDetail$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListConfigurationProfiles$,
  ListConfigurationProfilesCommand,
  ListConfigurationProfilesRequest$,
  ListDeployments$,
  ListDeploymentsCommand,
  ListDeploymentsRequest$,
  ListDeploymentStrategies$,
  ListDeploymentStrategiesCommand,
  ListDeploymentStrategiesRequest$,
  ListEnvironments$,
  ListEnvironmentsCommand,
  ListEnvironmentsRequest$,
  ListExperimentDefinitions$,
  ListExperimentDefinitionsCommand,
  ListExperimentDefinitionsRequest$,
  ListExperimentRunEvents$,
  ListExperimentRunEventsCommand,
  ListExperimentRunEventsRequest$,
  ListExperimentRuns$,
  ListExperimentRunsCommand,
  ListExperimentRunsRequest$,
  ListExtensionAssociations$,
  ListExtensionAssociationsCommand,
  ListExtensionAssociationsRequest$,
  ListExtensions$,
  ListExtensionsCommand,
  ListExtensionsRequest$,
  ListHostedConfigurationVersions$,
  ListHostedConfigurationVersionsCommand,
  ListHostedConfigurationVersionsRequest$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  Monitor$,
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
  Parameter$,
  PayloadTooLargeException,
  PayloadTooLargeException$,
  ReplicateTo,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTags$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StartDeployment$,
  StartDeploymentCommand,
  StartDeploymentRequest$,
  StartExperimentRun$,
  StartExperimentRunCommand,
  StartExperimentRunRequest$,
  StopDeployment$,
  StopDeploymentCommand,
  StopDeploymentRequest$,
  StopExperimentRun$,
  StopExperimentRunCommand,
  StopExperimentRunRequest$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  Treatment$,
  TreatmentInput$,
  TreatmentOverrides$,
  TriggeredBy,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateAccountSettings$,
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsRequest$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateConfigurationProfile$,
  UpdateConfigurationProfileCommand,
  UpdateConfigurationProfileRequest$,
  UpdateDeploymentStrategy$,
  UpdateDeploymentStrategyCommand,
  UpdateDeploymentStrategyRequest$,
  UpdateEnvironment$,
  UpdateEnvironmentCommand,
  UpdateEnvironmentRequest$,
  UpdateExperimentDefinition$,
  UpdateExperimentDefinitionCommand,
  UpdateExperimentDefinitionRequest$,
  UpdateExperimentRun$,
  UpdateExperimentRunCommand,
  UpdateExperimentRunRequest$,
  UpdateExtension$,
  UpdateExtensionAssociation$,
  UpdateExtensionAssociationCommand,
  UpdateExtensionAssociationRequest$,
  UpdateExtensionCommand,
  UpdateExtensionRequest$,
  ValidateConfiguration$,
  ValidateConfigurationCommand,
  ValidateConfigurationRequest$,
  Validator$,
  ValidatorType,
  VendedMetricsSettings$,
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
assert(typeof CreateApplication$ === "object");
assert(typeof CreateConfigurationProfileCommand === "function");
assert(typeof CreateConfigurationProfile$ === "object");
assert(typeof CreateDeploymentStrategyCommand === "function");
assert(typeof CreateDeploymentStrategy$ === "object");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateEnvironment$ === "object");
assert(typeof CreateExperimentDefinitionCommand === "function");
assert(typeof CreateExperimentDefinition$ === "object");
assert(typeof CreateExtensionCommand === "function");
assert(typeof CreateExtension$ === "object");
assert(typeof CreateExtensionAssociationCommand === "function");
assert(typeof CreateExtensionAssociation$ === "object");
assert(typeof CreateHostedConfigurationVersionCommand === "function");
assert(typeof CreateHostedConfigurationVersion$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteConfigurationProfileCommand === "function");
assert(typeof DeleteConfigurationProfile$ === "object");
assert(typeof DeleteDeploymentStrategyCommand === "function");
assert(typeof DeleteDeploymentStrategy$ === "object");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironment$ === "object");
assert(typeof DeleteExperimentDefinitionCommand === "function");
assert(typeof DeleteExperimentDefinition$ === "object");
assert(typeof DeleteExtensionCommand === "function");
assert(typeof DeleteExtension$ === "object");
assert(typeof DeleteExtensionAssociationCommand === "function");
assert(typeof DeleteExtensionAssociation$ === "object");
assert(typeof DeleteHostedConfigurationVersionCommand === "function");
assert(typeof DeleteHostedConfigurationVersion$ === "object");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetAccountSettings$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetConfigurationCommand === "function");
assert(typeof GetConfiguration$ === "object");
assert(typeof GetConfigurationProfileCommand === "function");
assert(typeof GetConfigurationProfile$ === "object");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetDeployment$ === "object");
assert(typeof GetDeploymentStrategyCommand === "function");
assert(typeof GetDeploymentStrategy$ === "object");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironment$ === "object");
assert(typeof GetExperimentDefinitionCommand === "function");
assert(typeof GetExperimentDefinition$ === "object");
assert(typeof GetExperimentRunCommand === "function");
assert(typeof GetExperimentRun$ === "object");
assert(typeof GetExtensionCommand === "function");
assert(typeof GetExtension$ === "object");
assert(typeof GetExtensionAssociationCommand === "function");
assert(typeof GetExtensionAssociation$ === "object");
assert(typeof GetHostedConfigurationVersionCommand === "function");
assert(typeof GetHostedConfigurationVersion$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListConfigurationProfilesCommand === "function");
assert(typeof ListConfigurationProfiles$ === "object");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListDeployments$ === "object");
assert(typeof ListDeploymentStrategiesCommand === "function");
assert(typeof ListDeploymentStrategies$ === "object");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironments$ === "object");
assert(typeof ListExperimentDefinitionsCommand === "function");
assert(typeof ListExperimentDefinitions$ === "object");
assert(typeof ListExperimentRunEventsCommand === "function");
assert(typeof ListExperimentRunEvents$ === "object");
assert(typeof ListExperimentRunsCommand === "function");
assert(typeof ListExperimentRuns$ === "object");
assert(typeof ListExtensionAssociationsCommand === "function");
assert(typeof ListExtensionAssociations$ === "object");
assert(typeof ListExtensionsCommand === "function");
assert(typeof ListExtensions$ === "object");
assert(typeof ListHostedConfigurationVersionsCommand === "function");
assert(typeof ListHostedConfigurationVersions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartDeploymentCommand === "function");
assert(typeof StartDeployment$ === "object");
assert(typeof StartExperimentRunCommand === "function");
assert(typeof StartExperimentRun$ === "object");
assert(typeof StopDeploymentCommand === "function");
assert(typeof StopDeployment$ === "object");
assert(typeof StopExperimentRunCommand === "function");
assert(typeof StopExperimentRun$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateAccountSettings$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateConfigurationProfileCommand === "function");
assert(typeof UpdateConfigurationProfile$ === "object");
assert(typeof UpdateDeploymentStrategyCommand === "function");
assert(typeof UpdateDeploymentStrategy$ === "object");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateEnvironment$ === "object");
assert(typeof UpdateExperimentDefinitionCommand === "function");
assert(typeof UpdateExperimentDefinition$ === "object");
assert(typeof UpdateExperimentRunCommand === "function");
assert(typeof UpdateExperimentRun$ === "object");
assert(typeof UpdateExtensionCommand === "function");
assert(typeof UpdateExtension$ === "object");
assert(typeof UpdateExtensionAssociationCommand === "function");
assert(typeof UpdateExtensionAssociation$ === "object");
assert(typeof ValidateConfigurationCommand === "function");
assert(typeof ValidateConfiguration$ === "object");
// structural schemas
assert(typeof AccountSettings$ === "object");
assert(typeof Action$ === "object");
assert(typeof ActionInvocation$ === "object");
assert(typeof Application$ === "object");
assert(typeof Applications$ === "object");
assert(typeof AppliedExtension$ === "object");
assert(typeof AttributeValue$ === "object");
assert(typeof BadRequestDetails$ === "object");
assert(typeof Configuration$ === "object");
assert(typeof ConfigurationProfile$ === "object");
assert(typeof ConfigurationProfiles$ === "object");
assert(typeof ConfigurationProfileSummary$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateConfigurationProfileRequest$ === "object");
assert(typeof CreateDeploymentStrategyRequest$ === "object");
assert(typeof CreateEnvironmentRequest$ === "object");
assert(typeof CreateExperimentDefinitionRequest$ === "object");
assert(typeof CreateExtensionAssociationRequest$ === "object");
assert(typeof CreateExtensionRequest$ === "object");
assert(typeof CreateHostedConfigurationVersionRequest$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteConfigurationProfileRequest$ === "object");
assert(typeof DeleteDeploymentStrategyRequest$ === "object");
assert(typeof DeleteEnvironmentRequest$ === "object");
assert(typeof DeleteExperimentDefinitionRequest$ === "object");
assert(typeof DeleteExtensionAssociationRequest$ === "object");
assert(typeof DeleteExtensionRequest$ === "object");
assert(typeof DeleteHostedConfigurationVersionRequest$ === "object");
assert(typeof DeletionProtectionSettings$ === "object");
assert(typeof Deployment$ === "object");
assert(typeof DeploymentEvent$ === "object");
assert(typeof DeploymentParameters$ === "object");
assert(typeof Deployments$ === "object");
assert(typeof DeploymentStrategies$ === "object");
assert(typeof DeploymentStrategy$ === "object");
assert(typeof DeploymentSummary$ === "object");
assert(typeof Environment$ === "object");
assert(typeof Environments$ === "object");
assert(typeof ExperimentDefinition$ === "object");
assert(typeof ExperimentDefinitions$ === "object");
assert(typeof ExperimentDefinitionSnapshot$ === "object");
assert(typeof ExperimentDefinitionSummary$ === "object");
assert(typeof ExperimentRun$ === "object");
assert(typeof ExperimentRunEvent$ === "object");
assert(typeof ExperimentRunEvents$ === "object");
assert(typeof ExperimentRunResult$ === "object");
assert(typeof ExperimentRuns$ === "object");
assert(typeof ExperimentRunSummary$ === "object");
assert(typeof Extension$ === "object");
assert(typeof ExtensionAssociation$ === "object");
assert(typeof ExtensionAssociations$ === "object");
assert(typeof ExtensionAssociationSummary$ === "object");
assert(typeof Extensions$ === "object");
assert(typeof ExtensionSummary$ === "object");
assert(typeof FlagValue$ === "object");
assert(typeof GetApplicationRequest$ === "object");
assert(typeof GetConfigurationProfileRequest$ === "object");
assert(typeof GetConfigurationRequest$ === "object");
assert(typeof GetDeploymentRequest$ === "object");
assert(typeof GetDeploymentStrategyRequest$ === "object");
assert(typeof GetEnvironmentRequest$ === "object");
assert(typeof GetExperimentDefinitionRequest$ === "object");
assert(typeof GetExperimentRunRequest$ === "object");
assert(typeof GetExtensionAssociationRequest$ === "object");
assert(typeof GetExtensionRequest$ === "object");
assert(typeof GetHostedConfigurationVersionRequest$ === "object");
assert(typeof HostedConfigurationVersion$ === "object");
assert(typeof HostedConfigurationVersions$ === "object");
assert(typeof HostedConfigurationVersionSummary$ === "object");
assert(typeof InvalidConfigurationDetail$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListConfigurationProfilesRequest$ === "object");
assert(typeof ListDeploymentsRequest$ === "object");
assert(typeof ListDeploymentStrategiesRequest$ === "object");
assert(typeof ListEnvironmentsRequest$ === "object");
assert(typeof ListExperimentDefinitionsRequest$ === "object");
assert(typeof ListExperimentRunEventsRequest$ === "object");
assert(typeof ListExperimentRunsRequest$ === "object");
assert(typeof ListExtensionAssociationsRequest$ === "object");
assert(typeof ListExtensionsRequest$ === "object");
assert(typeof ListHostedConfigurationVersionsRequest$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof Monitor$ === "object");
assert(typeof Parameter$ === "object");
assert(typeof ResourceTags$ === "object");
assert(typeof StartDeploymentRequest$ === "object");
assert(typeof StartExperimentRunRequest$ === "object");
assert(typeof StopDeploymentRequest$ === "object");
assert(typeof StopExperimentRunRequest$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof Treatment$ === "object");
assert(typeof TreatmentInput$ === "object");
assert(typeof TreatmentOverrides$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateAccountSettingsRequest$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateConfigurationProfileRequest$ === "object");
assert(typeof UpdateDeploymentStrategyRequest$ === "object");
assert(typeof UpdateEnvironmentRequest$ === "object");
assert(typeof UpdateExperimentDefinitionRequest$ === "object");
assert(typeof UpdateExperimentRunRequest$ === "object");
assert(typeof UpdateExtensionAssociationRequest$ === "object");
assert(typeof UpdateExtensionRequest$ === "object");
assert(typeof ValidateConfigurationRequest$ === "object");
assert(typeof Validator$ === "object");
assert(typeof VendedMetricsSettings$ === "object");
// enums
assert(typeof ActionPoint === "object");
assert(typeof BadRequestReason === "object");
assert(typeof BytesMeasure === "object");
assert(typeof DeleteType === "object");
assert(typeof DeletionProtectionCheck === "object");
assert(typeof DeploymentEventType === "object");
assert(typeof DeploymentState === "object");
assert(typeof DeploymentType === "object");
assert(typeof EnvironmentState === "object");
assert(typeof ExperimentDefinitionStatus === "object");
assert(typeof ExperimentRunEventType === "object");
assert(typeof ExperimentRunStatus === "object");
assert(typeof GrowthType === "object");
assert(typeof ReplicateTo === "object");
assert(typeof TriggeredBy === "object");
assert(typeof ValidatorType === "object");
// errors
assert(BadRequestException.prototype instanceof AppConfigServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof AppConfigServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof AppConfigServiceException);
assert(typeof InternalServerException$ === "object");
assert(PayloadTooLargeException.prototype instanceof AppConfigServiceException);
assert(typeof PayloadTooLargeException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AppConfigServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof AppConfigServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
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
assert(typeof paginateListExperimentDefinitions === "function");
assert(typeof paginateListExperimentRunEvents === "function");
assert(typeof paginateListExperimentRuns === "function");
assert(typeof paginateListExtensionAssociations === "function");
assert(typeof paginateListExtensions === "function");
assert(typeof paginateListHostedConfigurationVersions === "function");
console.log(`AppConfig index test passed.`);
