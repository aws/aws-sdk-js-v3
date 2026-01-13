import {
  AcceptEnvironmentAccountConnection$,
  AcceptEnvironmentAccountConnectionCommand,
  AcceptEnvironmentAccountConnectionInput$,
  AcceptEnvironmentAccountConnectionOutput$,
  AccessDeniedException,
  AccessDeniedException$,
  AccountSettings$,
  BlockerStatus,
  BlockerType,
  CancelComponentDeployment$,
  CancelComponentDeploymentCommand,
  CancelComponentDeploymentInput$,
  CancelComponentDeploymentOutput$,
  CancelEnvironmentDeployment$,
  CancelEnvironmentDeploymentCommand,
  CancelEnvironmentDeploymentInput$,
  CancelEnvironmentDeploymentOutput$,
  CancelServiceInstanceDeployment$,
  CancelServiceInstanceDeploymentCommand,
  CancelServiceInstanceDeploymentInput$,
  CancelServiceInstanceDeploymentOutput$,
  CancelServicePipelineDeployment$,
  CancelServicePipelineDeploymentCommand,
  CancelServicePipelineDeploymentInput$,
  CancelServicePipelineDeploymentOutput$,
  CompatibleEnvironmentTemplate$,
  CompatibleEnvironmentTemplateInput$,
  Component$,
  ComponentDeploymentUpdateType,
  ComponentState$,
  ComponentSummary$,
  ConflictException,
  ConflictException$,
  CountsSummary$,
  CreateComponent$,
  CreateComponentCommand,
  CreateComponentInput$,
  CreateComponentOutput$,
  CreateEnvironment$,
  CreateEnvironmentAccountConnection$,
  CreateEnvironmentAccountConnectionCommand,
  CreateEnvironmentAccountConnectionInput$,
  CreateEnvironmentAccountConnectionOutput$,
  CreateEnvironmentCommand,
  CreateEnvironmentInput$,
  CreateEnvironmentOutput$,
  CreateEnvironmentTemplate$,
  CreateEnvironmentTemplateCommand,
  CreateEnvironmentTemplateInput$,
  CreateEnvironmentTemplateOutput$,
  CreateEnvironmentTemplateVersion$,
  CreateEnvironmentTemplateVersionCommand,
  CreateEnvironmentTemplateVersionInput$,
  CreateEnvironmentTemplateVersionOutput$,
  CreateRepository$,
  CreateRepositoryCommand,
  CreateRepositoryInput$,
  CreateRepositoryOutput$,
  CreateService$,
  CreateServiceCommand,
  CreateServiceInput$,
  CreateServiceInstance$,
  CreateServiceInstanceCommand,
  CreateServiceInstanceInput$,
  CreateServiceInstanceOutput$,
  CreateServiceOutput$,
  CreateServiceSyncConfig$,
  CreateServiceSyncConfigCommand,
  CreateServiceSyncConfigInput$,
  CreateServiceSyncConfigOutput$,
  CreateServiceTemplate$,
  CreateServiceTemplateCommand,
  CreateServiceTemplateInput$,
  CreateServiceTemplateOutput$,
  CreateServiceTemplateVersion$,
  CreateServiceTemplateVersionCommand,
  CreateServiceTemplateVersionInput$,
  CreateServiceTemplateVersionOutput$,
  CreateTemplateSyncConfig$,
  CreateTemplateSyncConfigCommand,
  CreateTemplateSyncConfigInput$,
  CreateTemplateSyncConfigOutput$,
  DeleteComponent$,
  DeleteComponentCommand,
  DeleteComponentInput$,
  DeleteComponentOutput$,
  DeleteDeployment$,
  DeleteDeploymentCommand,
  DeleteDeploymentInput$,
  DeleteDeploymentOutput$,
  DeleteEnvironment$,
  DeleteEnvironmentAccountConnection$,
  DeleteEnvironmentAccountConnectionCommand,
  DeleteEnvironmentAccountConnectionInput$,
  DeleteEnvironmentAccountConnectionOutput$,
  DeleteEnvironmentCommand,
  DeleteEnvironmentInput$,
  DeleteEnvironmentOutput$,
  DeleteEnvironmentTemplate$,
  DeleteEnvironmentTemplateCommand,
  DeleteEnvironmentTemplateInput$,
  DeleteEnvironmentTemplateOutput$,
  DeleteEnvironmentTemplateVersion$,
  DeleteEnvironmentTemplateVersionCommand,
  DeleteEnvironmentTemplateVersionInput$,
  DeleteEnvironmentTemplateVersionOutput$,
  DeleteRepository$,
  DeleteRepositoryCommand,
  DeleteRepositoryInput$,
  DeleteRepositoryOutput$,
  DeleteService$,
  DeleteServiceCommand,
  DeleteServiceInput$,
  DeleteServiceOutput$,
  DeleteServiceSyncConfig$,
  DeleteServiceSyncConfigCommand,
  DeleteServiceSyncConfigInput$,
  DeleteServiceSyncConfigOutput$,
  DeleteServiceTemplate$,
  DeleteServiceTemplateCommand,
  DeleteServiceTemplateInput$,
  DeleteServiceTemplateOutput$,
  DeleteServiceTemplateVersion$,
  DeleteServiceTemplateVersionCommand,
  DeleteServiceTemplateVersionInput$,
  DeleteServiceTemplateVersionOutput$,
  DeleteTemplateSyncConfig$,
  DeleteTemplateSyncConfigCommand,
  DeleteTemplateSyncConfigInput$,
  DeleteTemplateSyncConfigOutput$,
  Deployment$,
  DeploymentState$,
  DeploymentStatus,
  DeploymentSummary$,
  DeploymentTargetResourceType,
  DeploymentUpdateType,
  Environment$,
  EnvironmentAccountConnection$,
  EnvironmentAccountConnectionRequesterAccountType,
  EnvironmentAccountConnectionStatus,
  EnvironmentAccountConnectionSummary$,
  EnvironmentState$,
  EnvironmentSummary$,
  EnvironmentTemplate$,
  EnvironmentTemplateFilter$,
  EnvironmentTemplateSummary$,
  EnvironmentTemplateVersion$,
  EnvironmentTemplateVersionSummary$,
  GetAccountSettings$,
  GetAccountSettingsCommand,
  GetAccountSettingsInput$,
  GetAccountSettingsOutput$,
  GetComponent$,
  GetComponentCommand,
  GetComponentInput$,
  GetComponentOutput$,
  GetDeployment$,
  GetDeploymentCommand,
  GetDeploymentInput$,
  GetDeploymentOutput$,
  GetEnvironment$,
  GetEnvironmentAccountConnection$,
  GetEnvironmentAccountConnectionCommand,
  GetEnvironmentAccountConnectionInput$,
  GetEnvironmentAccountConnectionOutput$,
  GetEnvironmentCommand,
  GetEnvironmentInput$,
  GetEnvironmentOutput$,
  GetEnvironmentTemplate$,
  GetEnvironmentTemplateCommand,
  GetEnvironmentTemplateInput$,
  GetEnvironmentTemplateOutput$,
  GetEnvironmentTemplateVersion$,
  GetEnvironmentTemplateVersionCommand,
  GetEnvironmentTemplateVersionInput$,
  GetEnvironmentTemplateVersionOutput$,
  GetRepository$,
  GetRepositoryCommand,
  GetRepositoryInput$,
  GetRepositoryOutput$,
  GetRepositorySyncStatus$,
  GetRepositorySyncStatusCommand,
  GetRepositorySyncStatusInput$,
  GetRepositorySyncStatusOutput$,
  GetResourcesSummary$,
  GetResourcesSummaryCommand,
  GetResourcesSummaryInput$,
  GetResourcesSummaryOutput$,
  GetService$,
  GetServiceCommand,
  GetServiceInput$,
  GetServiceInstance$,
  GetServiceInstanceCommand,
  GetServiceInstanceInput$,
  GetServiceInstanceOutput$,
  GetServiceInstanceSyncStatus$,
  GetServiceInstanceSyncStatusCommand,
  GetServiceInstanceSyncStatusInput$,
  GetServiceInstanceSyncStatusOutput$,
  GetServiceOutput$,
  GetServiceSyncBlockerSummary$,
  GetServiceSyncBlockerSummaryCommand,
  GetServiceSyncBlockerSummaryInput$,
  GetServiceSyncBlockerSummaryOutput$,
  GetServiceSyncConfig$,
  GetServiceSyncConfigCommand,
  GetServiceSyncConfigInput$,
  GetServiceSyncConfigOutput$,
  GetServiceTemplate$,
  GetServiceTemplateCommand,
  GetServiceTemplateInput$,
  GetServiceTemplateOutput$,
  GetServiceTemplateVersion$,
  GetServiceTemplateVersionCommand,
  GetServiceTemplateVersionInput$,
  GetServiceTemplateVersionOutput$,
  GetTemplateSyncConfig$,
  GetTemplateSyncConfigCommand,
  GetTemplateSyncConfigInput$,
  GetTemplateSyncConfigOutput$,
  GetTemplateSyncStatus$,
  GetTemplateSyncStatusCommand,
  GetTemplateSyncStatusInput$,
  GetTemplateSyncStatusOutput$,
  InternalServerException,
  InternalServerException$,
  ListComponentOutputs$,
  ListComponentOutputsCommand,
  ListComponentOutputsInput$,
  ListComponentOutputsOutput$,
  ListComponentProvisionedResources$,
  ListComponentProvisionedResourcesCommand,
  ListComponentProvisionedResourcesInput$,
  ListComponentProvisionedResourcesOutput$,
  ListComponents$,
  ListComponentsCommand,
  ListComponentsInput$,
  ListComponentsOutput$,
  ListDeployments$,
  ListDeploymentsCommand,
  ListDeploymentsInput$,
  ListDeploymentsOutput$,
  ListEnvironmentAccountConnections$,
  ListEnvironmentAccountConnectionsCommand,
  ListEnvironmentAccountConnectionsInput$,
  ListEnvironmentAccountConnectionsOutput$,
  ListEnvironmentOutputs$,
  ListEnvironmentOutputsCommand,
  ListEnvironmentOutputsInput$,
  ListEnvironmentOutputsOutput$,
  ListEnvironmentProvisionedResources$,
  ListEnvironmentProvisionedResourcesCommand,
  ListEnvironmentProvisionedResourcesInput$,
  ListEnvironmentProvisionedResourcesOutput$,
  ListEnvironments$,
  ListEnvironmentsCommand,
  ListEnvironmentsInput$,
  ListEnvironmentsOutput$,
  ListEnvironmentTemplates$,
  ListEnvironmentTemplatesCommand,
  ListEnvironmentTemplatesInput$,
  ListEnvironmentTemplatesOutput$,
  ListEnvironmentTemplateVersions$,
  ListEnvironmentTemplateVersionsCommand,
  ListEnvironmentTemplateVersionsInput$,
  ListEnvironmentTemplateVersionsOutput$,
  ListRepositories$,
  ListRepositoriesCommand,
  ListRepositoriesInput$,
  ListRepositoriesOutput$,
  ListRepositorySyncDefinitions$,
  ListRepositorySyncDefinitionsCommand,
  ListRepositorySyncDefinitionsInput$,
  ListRepositorySyncDefinitionsOutput$,
  ListServiceInstanceOutputs$,
  ListServiceInstanceOutputsCommand,
  ListServiceInstanceOutputsInput$,
  ListServiceInstanceOutputsOutput$,
  ListServiceInstanceProvisionedResources$,
  ListServiceInstanceProvisionedResourcesCommand,
  ListServiceInstanceProvisionedResourcesInput$,
  ListServiceInstanceProvisionedResourcesOutput$,
  ListServiceInstances$,
  ListServiceInstancesCommand,
  ListServiceInstancesFilter$,
  ListServiceInstancesFilterBy,
  ListServiceInstancesInput$,
  ListServiceInstancesOutput$,
  ListServiceInstancesSortBy,
  ListServicePipelineOutputs$,
  ListServicePipelineOutputsCommand,
  ListServicePipelineOutputsInput$,
  ListServicePipelineOutputsOutput$,
  ListServicePipelineProvisionedResources$,
  ListServicePipelineProvisionedResourcesCommand,
  ListServicePipelineProvisionedResourcesInput$,
  ListServicePipelineProvisionedResourcesOutput$,
  ListServices$,
  ListServicesCommand,
  ListServicesInput$,
  ListServicesOutput$,
  ListServiceTemplates$,
  ListServiceTemplatesCommand,
  ListServiceTemplatesInput$,
  ListServiceTemplatesOutput$,
  ListServiceTemplateVersions$,
  ListServiceTemplateVersionsCommand,
  ListServiceTemplateVersionsInput$,
  ListServiceTemplateVersionsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  NotifyResourceDeploymentStatusChange$,
  NotifyResourceDeploymentStatusChangeCommand,
  NotifyResourceDeploymentStatusChangeInput$,
  NotifyResourceDeploymentStatusChangeOutput$,
  Output$,
  paginateListComponentOutputs,
  paginateListComponentProvisionedResources,
  paginateListComponents,
  paginateListDeployments,
  paginateListEnvironmentAccountConnections,
  paginateListEnvironmentOutputs,
  paginateListEnvironmentProvisionedResources,
  paginateListEnvironments,
  paginateListEnvironmentTemplates,
  paginateListEnvironmentTemplateVersions,
  paginateListRepositories,
  paginateListRepositorySyncDefinitions,
  paginateListServiceInstanceOutputs,
  paginateListServiceInstanceProvisionedResources,
  paginateListServiceInstances,
  paginateListServicePipelineOutputs,
  paginateListServicePipelineProvisionedResources,
  paginateListServices,
  paginateListServiceTemplates,
  paginateListServiceTemplateVersions,
  paginateListTagsForResource,
  Proton,
  ProtonClient,
  ProtonServiceException,
  ProvisionedResource$,
  ProvisionedResourceEngine,
  Provisioning,
  RejectEnvironmentAccountConnection$,
  RejectEnvironmentAccountConnectionCommand,
  RejectEnvironmentAccountConnectionInput$,
  RejectEnvironmentAccountConnectionOutput$,
  Repository$,
  RepositoryBranch$,
  RepositoryBranchInput$,
  RepositoryProvider,
  RepositorySummary$,
  RepositorySyncAttempt$,
  RepositorySyncDefinition$,
  RepositorySyncEvent$,
  RepositorySyncStatus,
  ResourceCountsSummary$,
  ResourceDeploymentStatus,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceSyncAttempt$,
  ResourceSyncEvent$,
  ResourceSyncStatus,
  Revision$,
  S3ObjectSource$,
  Service$,
  ServiceInstance$,
  ServiceInstanceState$,
  ServiceInstanceSummary$,
  ServicePipeline$,
  ServicePipelineState$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceStatus,
  ServiceSummary$,
  ServiceSyncBlockerSummary$,
  ServiceSyncConfig$,
  ServiceTemplate$,
  ServiceTemplateSummary$,
  ServiceTemplateSupportedComponentSourceType,
  ServiceTemplateVersion$,
  ServiceTemplateVersionSummary$,
  SortOrder,
  SyncBlocker$,
  SyncBlockerContext$,
  SyncType,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TemplateSyncConfig$,
  TemplateType,
  TemplateVersionSourceInput$,
  TemplateVersionStatus,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateAccountSettings$,
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsInput$,
  UpdateAccountSettingsOutput$,
  UpdateComponent$,
  UpdateComponentCommand,
  UpdateComponentInput$,
  UpdateComponentOutput$,
  UpdateEnvironment$,
  UpdateEnvironmentAccountConnection$,
  UpdateEnvironmentAccountConnectionCommand,
  UpdateEnvironmentAccountConnectionInput$,
  UpdateEnvironmentAccountConnectionOutput$,
  UpdateEnvironmentCommand,
  UpdateEnvironmentInput$,
  UpdateEnvironmentOutput$,
  UpdateEnvironmentTemplate$,
  UpdateEnvironmentTemplateCommand,
  UpdateEnvironmentTemplateInput$,
  UpdateEnvironmentTemplateOutput$,
  UpdateEnvironmentTemplateVersion$,
  UpdateEnvironmentTemplateVersionCommand,
  UpdateEnvironmentTemplateVersionInput$,
  UpdateEnvironmentTemplateVersionOutput$,
  UpdateService$,
  UpdateServiceCommand,
  UpdateServiceInput$,
  UpdateServiceInstance$,
  UpdateServiceInstanceCommand,
  UpdateServiceInstanceInput$,
  UpdateServiceInstanceOutput$,
  UpdateServiceOutput$,
  UpdateServicePipeline$,
  UpdateServicePipelineCommand,
  UpdateServicePipelineInput$,
  UpdateServicePipelineOutput$,
  UpdateServiceSyncBlocker$,
  UpdateServiceSyncBlockerCommand,
  UpdateServiceSyncBlockerInput$,
  UpdateServiceSyncBlockerOutput$,
  UpdateServiceSyncConfig$,
  UpdateServiceSyncConfigCommand,
  UpdateServiceSyncConfigInput$,
  UpdateServiceSyncConfigOutput$,
  UpdateServiceTemplate$,
  UpdateServiceTemplateCommand,
  UpdateServiceTemplateInput$,
  UpdateServiceTemplateOutput$,
  UpdateServiceTemplateVersion$,
  UpdateServiceTemplateVersionCommand,
  UpdateServiceTemplateVersionInput$,
  UpdateServiceTemplateVersionOutput$,
  UpdateTemplateSyncConfig$,
  UpdateTemplateSyncConfigCommand,
  UpdateTemplateSyncConfigInput$,
  UpdateTemplateSyncConfigOutput$,
  ValidationException,
  ValidationException$,
  waitForComponentDeleted,
  waitForComponentDeployed,
  waitForEnvironmentDeployed,
  waitForEnvironmentTemplateVersionRegistered,
  waitForServiceCreated,
  waitForServiceDeleted,
  waitForServiceInstanceDeployed,
  waitForServicePipelineDeployed,
  waitForServiceTemplateVersionRegistered,
  waitForServiceUpdated,
  waitUntilComponentDeleted,
  waitUntilComponentDeployed,
  waitUntilEnvironmentDeployed,
  waitUntilEnvironmentTemplateVersionRegistered,
  waitUntilServiceCreated,
  waitUntilServiceDeleted,
  waitUntilServiceInstanceDeployed,
  waitUntilServicePipelineDeployed,
  waitUntilServiceTemplateVersionRegistered,
  waitUntilServiceUpdated,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ProtonClient === "function");
assert(typeof Proton === "function");
// commands
assert(typeof AcceptEnvironmentAccountConnectionCommand === "function");
assert(typeof AcceptEnvironmentAccountConnection$ === "object");
assert(typeof CancelComponentDeploymentCommand === "function");
assert(typeof CancelComponentDeployment$ === "object");
assert(typeof CancelEnvironmentDeploymentCommand === "function");
assert(typeof CancelEnvironmentDeployment$ === "object");
assert(typeof CancelServiceInstanceDeploymentCommand === "function");
assert(typeof CancelServiceInstanceDeployment$ === "object");
assert(typeof CancelServicePipelineDeploymentCommand === "function");
assert(typeof CancelServicePipelineDeployment$ === "object");
assert(typeof CreateComponentCommand === "function");
assert(typeof CreateComponent$ === "object");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateEnvironment$ === "object");
assert(typeof CreateEnvironmentAccountConnectionCommand === "function");
assert(typeof CreateEnvironmentAccountConnection$ === "object");
assert(typeof CreateEnvironmentTemplateCommand === "function");
assert(typeof CreateEnvironmentTemplate$ === "object");
assert(typeof CreateEnvironmentTemplateVersionCommand === "function");
assert(typeof CreateEnvironmentTemplateVersion$ === "object");
assert(typeof CreateRepositoryCommand === "function");
assert(typeof CreateRepository$ === "object");
assert(typeof CreateServiceCommand === "function");
assert(typeof CreateService$ === "object");
assert(typeof CreateServiceInstanceCommand === "function");
assert(typeof CreateServiceInstance$ === "object");
assert(typeof CreateServiceSyncConfigCommand === "function");
assert(typeof CreateServiceSyncConfig$ === "object");
assert(typeof CreateServiceTemplateCommand === "function");
assert(typeof CreateServiceTemplate$ === "object");
assert(typeof CreateServiceTemplateVersionCommand === "function");
assert(typeof CreateServiceTemplateVersion$ === "object");
assert(typeof CreateTemplateSyncConfigCommand === "function");
assert(typeof CreateTemplateSyncConfig$ === "object");
assert(typeof DeleteComponentCommand === "function");
assert(typeof DeleteComponent$ === "object");
assert(typeof DeleteDeploymentCommand === "function");
assert(typeof DeleteDeployment$ === "object");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironment$ === "object");
assert(typeof DeleteEnvironmentAccountConnectionCommand === "function");
assert(typeof DeleteEnvironmentAccountConnection$ === "object");
assert(typeof DeleteEnvironmentTemplateCommand === "function");
assert(typeof DeleteEnvironmentTemplate$ === "object");
assert(typeof DeleteEnvironmentTemplateVersionCommand === "function");
assert(typeof DeleteEnvironmentTemplateVersion$ === "object");
assert(typeof DeleteRepositoryCommand === "function");
assert(typeof DeleteRepository$ === "object");
assert(typeof DeleteServiceCommand === "function");
assert(typeof DeleteService$ === "object");
assert(typeof DeleteServiceSyncConfigCommand === "function");
assert(typeof DeleteServiceSyncConfig$ === "object");
assert(typeof DeleteServiceTemplateCommand === "function");
assert(typeof DeleteServiceTemplate$ === "object");
assert(typeof DeleteServiceTemplateVersionCommand === "function");
assert(typeof DeleteServiceTemplateVersion$ === "object");
assert(typeof DeleteTemplateSyncConfigCommand === "function");
assert(typeof DeleteTemplateSyncConfig$ === "object");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetAccountSettings$ === "object");
assert(typeof GetComponentCommand === "function");
assert(typeof GetComponent$ === "object");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetDeployment$ === "object");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironment$ === "object");
assert(typeof GetEnvironmentAccountConnectionCommand === "function");
assert(typeof GetEnvironmentAccountConnection$ === "object");
assert(typeof GetEnvironmentTemplateCommand === "function");
assert(typeof GetEnvironmentTemplate$ === "object");
assert(typeof GetEnvironmentTemplateVersionCommand === "function");
assert(typeof GetEnvironmentTemplateVersion$ === "object");
assert(typeof GetRepositoryCommand === "function");
assert(typeof GetRepository$ === "object");
assert(typeof GetRepositorySyncStatusCommand === "function");
assert(typeof GetRepositorySyncStatus$ === "object");
assert(typeof GetResourcesSummaryCommand === "function");
assert(typeof GetResourcesSummary$ === "object");
assert(typeof GetServiceCommand === "function");
assert(typeof GetService$ === "object");
assert(typeof GetServiceInstanceCommand === "function");
assert(typeof GetServiceInstance$ === "object");
assert(typeof GetServiceInstanceSyncStatusCommand === "function");
assert(typeof GetServiceInstanceSyncStatus$ === "object");
assert(typeof GetServiceSyncBlockerSummaryCommand === "function");
assert(typeof GetServiceSyncBlockerSummary$ === "object");
assert(typeof GetServiceSyncConfigCommand === "function");
assert(typeof GetServiceSyncConfig$ === "object");
assert(typeof GetServiceTemplateCommand === "function");
assert(typeof GetServiceTemplate$ === "object");
assert(typeof GetServiceTemplateVersionCommand === "function");
assert(typeof GetServiceTemplateVersion$ === "object");
assert(typeof GetTemplateSyncConfigCommand === "function");
assert(typeof GetTemplateSyncConfig$ === "object");
assert(typeof GetTemplateSyncStatusCommand === "function");
assert(typeof GetTemplateSyncStatus$ === "object");
assert(typeof ListComponentOutputsCommand === "function");
assert(typeof ListComponentOutputs$ === "object");
assert(typeof ListComponentProvisionedResourcesCommand === "function");
assert(typeof ListComponentProvisionedResources$ === "object");
assert(typeof ListComponentsCommand === "function");
assert(typeof ListComponents$ === "object");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListDeployments$ === "object");
assert(typeof ListEnvironmentAccountConnectionsCommand === "function");
assert(typeof ListEnvironmentAccountConnections$ === "object");
assert(typeof ListEnvironmentOutputsCommand === "function");
assert(typeof ListEnvironmentOutputs$ === "object");
assert(typeof ListEnvironmentProvisionedResourcesCommand === "function");
assert(typeof ListEnvironmentProvisionedResources$ === "object");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironments$ === "object");
assert(typeof ListEnvironmentTemplatesCommand === "function");
assert(typeof ListEnvironmentTemplates$ === "object");
assert(typeof ListEnvironmentTemplateVersionsCommand === "function");
assert(typeof ListEnvironmentTemplateVersions$ === "object");
assert(typeof ListRepositoriesCommand === "function");
assert(typeof ListRepositories$ === "object");
assert(typeof ListRepositorySyncDefinitionsCommand === "function");
assert(typeof ListRepositorySyncDefinitions$ === "object");
assert(typeof ListServiceInstanceOutputsCommand === "function");
assert(typeof ListServiceInstanceOutputs$ === "object");
assert(typeof ListServiceInstanceProvisionedResourcesCommand === "function");
assert(typeof ListServiceInstanceProvisionedResources$ === "object");
assert(typeof ListServiceInstancesCommand === "function");
assert(typeof ListServiceInstances$ === "object");
assert(typeof ListServicePipelineOutputsCommand === "function");
assert(typeof ListServicePipelineOutputs$ === "object");
assert(typeof ListServicePipelineProvisionedResourcesCommand === "function");
assert(typeof ListServicePipelineProvisionedResources$ === "object");
assert(typeof ListServicesCommand === "function");
assert(typeof ListServices$ === "object");
assert(typeof ListServiceTemplatesCommand === "function");
assert(typeof ListServiceTemplates$ === "object");
assert(typeof ListServiceTemplateVersionsCommand === "function");
assert(typeof ListServiceTemplateVersions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof NotifyResourceDeploymentStatusChangeCommand === "function");
assert(typeof NotifyResourceDeploymentStatusChange$ === "object");
assert(typeof RejectEnvironmentAccountConnectionCommand === "function");
assert(typeof RejectEnvironmentAccountConnection$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateAccountSettings$ === "object");
assert(typeof UpdateComponentCommand === "function");
assert(typeof UpdateComponent$ === "object");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateEnvironment$ === "object");
assert(typeof UpdateEnvironmentAccountConnectionCommand === "function");
assert(typeof UpdateEnvironmentAccountConnection$ === "object");
assert(typeof UpdateEnvironmentTemplateCommand === "function");
assert(typeof UpdateEnvironmentTemplate$ === "object");
assert(typeof UpdateEnvironmentTemplateVersionCommand === "function");
assert(typeof UpdateEnvironmentTemplateVersion$ === "object");
assert(typeof UpdateServiceCommand === "function");
assert(typeof UpdateService$ === "object");
assert(typeof UpdateServiceInstanceCommand === "function");
assert(typeof UpdateServiceInstance$ === "object");
assert(typeof UpdateServicePipelineCommand === "function");
assert(typeof UpdateServicePipeline$ === "object");
assert(typeof UpdateServiceSyncBlockerCommand === "function");
assert(typeof UpdateServiceSyncBlocker$ === "object");
assert(typeof UpdateServiceSyncConfigCommand === "function");
assert(typeof UpdateServiceSyncConfig$ === "object");
assert(typeof UpdateServiceTemplateCommand === "function");
assert(typeof UpdateServiceTemplate$ === "object");
assert(typeof UpdateServiceTemplateVersionCommand === "function");
assert(typeof UpdateServiceTemplateVersion$ === "object");
assert(typeof UpdateTemplateSyncConfigCommand === "function");
assert(typeof UpdateTemplateSyncConfig$ === "object");
// structural schemas
assert(typeof AcceptEnvironmentAccountConnectionInput$ === "object");
assert(typeof AcceptEnvironmentAccountConnectionOutput$ === "object");
assert(typeof AccountSettings$ === "object");
assert(typeof CancelComponentDeploymentInput$ === "object");
assert(typeof CancelComponentDeploymentOutput$ === "object");
assert(typeof CancelEnvironmentDeploymentInput$ === "object");
assert(typeof CancelEnvironmentDeploymentOutput$ === "object");
assert(typeof CancelServiceInstanceDeploymentInput$ === "object");
assert(typeof CancelServiceInstanceDeploymentOutput$ === "object");
assert(typeof CancelServicePipelineDeploymentInput$ === "object");
assert(typeof CancelServicePipelineDeploymentOutput$ === "object");
assert(typeof CompatibleEnvironmentTemplate$ === "object");
assert(typeof CompatibleEnvironmentTemplateInput$ === "object");
assert(typeof Component$ === "object");
assert(typeof ComponentState$ === "object");
assert(typeof ComponentSummary$ === "object");
assert(typeof CountsSummary$ === "object");
assert(typeof CreateComponentInput$ === "object");
assert(typeof CreateComponentOutput$ === "object");
assert(typeof CreateEnvironmentAccountConnectionInput$ === "object");
assert(typeof CreateEnvironmentAccountConnectionOutput$ === "object");
assert(typeof CreateEnvironmentInput$ === "object");
assert(typeof CreateEnvironmentOutput$ === "object");
assert(typeof CreateEnvironmentTemplateInput$ === "object");
assert(typeof CreateEnvironmentTemplateOutput$ === "object");
assert(typeof CreateEnvironmentTemplateVersionInput$ === "object");
assert(typeof CreateEnvironmentTemplateVersionOutput$ === "object");
assert(typeof CreateRepositoryInput$ === "object");
assert(typeof CreateRepositoryOutput$ === "object");
assert(typeof CreateServiceInput$ === "object");
assert(typeof CreateServiceInstanceInput$ === "object");
assert(typeof CreateServiceInstanceOutput$ === "object");
assert(typeof CreateServiceOutput$ === "object");
assert(typeof CreateServiceSyncConfigInput$ === "object");
assert(typeof CreateServiceSyncConfigOutput$ === "object");
assert(typeof CreateServiceTemplateInput$ === "object");
assert(typeof CreateServiceTemplateOutput$ === "object");
assert(typeof CreateServiceTemplateVersionInput$ === "object");
assert(typeof CreateServiceTemplateVersionOutput$ === "object");
assert(typeof CreateTemplateSyncConfigInput$ === "object");
assert(typeof CreateTemplateSyncConfigOutput$ === "object");
assert(typeof DeleteComponentInput$ === "object");
assert(typeof DeleteComponentOutput$ === "object");
assert(typeof DeleteDeploymentInput$ === "object");
assert(typeof DeleteDeploymentOutput$ === "object");
assert(typeof DeleteEnvironmentAccountConnectionInput$ === "object");
assert(typeof DeleteEnvironmentAccountConnectionOutput$ === "object");
assert(typeof DeleteEnvironmentInput$ === "object");
assert(typeof DeleteEnvironmentOutput$ === "object");
assert(typeof DeleteEnvironmentTemplateInput$ === "object");
assert(typeof DeleteEnvironmentTemplateOutput$ === "object");
assert(typeof DeleteEnvironmentTemplateVersionInput$ === "object");
assert(typeof DeleteEnvironmentTemplateVersionOutput$ === "object");
assert(typeof DeleteRepositoryInput$ === "object");
assert(typeof DeleteRepositoryOutput$ === "object");
assert(typeof DeleteServiceInput$ === "object");
assert(typeof DeleteServiceOutput$ === "object");
assert(typeof DeleteServiceSyncConfigInput$ === "object");
assert(typeof DeleteServiceSyncConfigOutput$ === "object");
assert(typeof DeleteServiceTemplateInput$ === "object");
assert(typeof DeleteServiceTemplateOutput$ === "object");
assert(typeof DeleteServiceTemplateVersionInput$ === "object");
assert(typeof DeleteServiceTemplateVersionOutput$ === "object");
assert(typeof DeleteTemplateSyncConfigInput$ === "object");
assert(typeof DeleteTemplateSyncConfigOutput$ === "object");
assert(typeof Deployment$ === "object");
assert(typeof DeploymentState$ === "object");
assert(typeof DeploymentSummary$ === "object");
assert(typeof Environment$ === "object");
assert(typeof EnvironmentAccountConnection$ === "object");
assert(typeof EnvironmentAccountConnectionSummary$ === "object");
assert(typeof EnvironmentState$ === "object");
assert(typeof EnvironmentSummary$ === "object");
assert(typeof EnvironmentTemplate$ === "object");
assert(typeof EnvironmentTemplateFilter$ === "object");
assert(typeof EnvironmentTemplateSummary$ === "object");
assert(typeof EnvironmentTemplateVersion$ === "object");
assert(typeof EnvironmentTemplateVersionSummary$ === "object");
assert(typeof GetAccountSettingsInput$ === "object");
assert(typeof GetAccountSettingsOutput$ === "object");
assert(typeof GetComponentInput$ === "object");
assert(typeof GetComponentOutput$ === "object");
assert(typeof GetDeploymentInput$ === "object");
assert(typeof GetDeploymentOutput$ === "object");
assert(typeof GetEnvironmentAccountConnectionInput$ === "object");
assert(typeof GetEnvironmentAccountConnectionOutput$ === "object");
assert(typeof GetEnvironmentInput$ === "object");
assert(typeof GetEnvironmentOutput$ === "object");
assert(typeof GetEnvironmentTemplateInput$ === "object");
assert(typeof GetEnvironmentTemplateOutput$ === "object");
assert(typeof GetEnvironmentTemplateVersionInput$ === "object");
assert(typeof GetEnvironmentTemplateVersionOutput$ === "object");
assert(typeof GetRepositoryInput$ === "object");
assert(typeof GetRepositoryOutput$ === "object");
assert(typeof GetRepositorySyncStatusInput$ === "object");
assert(typeof GetRepositorySyncStatusOutput$ === "object");
assert(typeof GetResourcesSummaryInput$ === "object");
assert(typeof GetResourcesSummaryOutput$ === "object");
assert(typeof GetServiceInput$ === "object");
assert(typeof GetServiceInstanceInput$ === "object");
assert(typeof GetServiceInstanceOutput$ === "object");
assert(typeof GetServiceInstanceSyncStatusInput$ === "object");
assert(typeof GetServiceInstanceSyncStatusOutput$ === "object");
assert(typeof GetServiceOutput$ === "object");
assert(typeof GetServiceSyncBlockerSummaryInput$ === "object");
assert(typeof GetServiceSyncBlockerSummaryOutput$ === "object");
assert(typeof GetServiceSyncConfigInput$ === "object");
assert(typeof GetServiceSyncConfigOutput$ === "object");
assert(typeof GetServiceTemplateInput$ === "object");
assert(typeof GetServiceTemplateOutput$ === "object");
assert(typeof GetServiceTemplateVersionInput$ === "object");
assert(typeof GetServiceTemplateVersionOutput$ === "object");
assert(typeof GetTemplateSyncConfigInput$ === "object");
assert(typeof GetTemplateSyncConfigOutput$ === "object");
assert(typeof GetTemplateSyncStatusInput$ === "object");
assert(typeof GetTemplateSyncStatusOutput$ === "object");
assert(typeof ListComponentOutputsInput$ === "object");
assert(typeof ListComponentOutputsOutput$ === "object");
assert(typeof ListComponentProvisionedResourcesInput$ === "object");
assert(typeof ListComponentProvisionedResourcesOutput$ === "object");
assert(typeof ListComponentsInput$ === "object");
assert(typeof ListComponentsOutput$ === "object");
assert(typeof ListDeploymentsInput$ === "object");
assert(typeof ListDeploymentsOutput$ === "object");
assert(typeof ListEnvironmentAccountConnectionsInput$ === "object");
assert(typeof ListEnvironmentAccountConnectionsOutput$ === "object");
assert(typeof ListEnvironmentOutputsInput$ === "object");
assert(typeof ListEnvironmentOutputsOutput$ === "object");
assert(typeof ListEnvironmentProvisionedResourcesInput$ === "object");
assert(typeof ListEnvironmentProvisionedResourcesOutput$ === "object");
assert(typeof ListEnvironmentsInput$ === "object");
assert(typeof ListEnvironmentsOutput$ === "object");
assert(typeof ListEnvironmentTemplatesInput$ === "object");
assert(typeof ListEnvironmentTemplatesOutput$ === "object");
assert(typeof ListEnvironmentTemplateVersionsInput$ === "object");
assert(typeof ListEnvironmentTemplateVersionsOutput$ === "object");
assert(typeof ListRepositoriesInput$ === "object");
assert(typeof ListRepositoriesOutput$ === "object");
assert(typeof ListRepositorySyncDefinitionsInput$ === "object");
assert(typeof ListRepositorySyncDefinitionsOutput$ === "object");
assert(typeof ListServiceInstanceOutputsInput$ === "object");
assert(typeof ListServiceInstanceOutputsOutput$ === "object");
assert(typeof ListServiceInstanceProvisionedResourcesInput$ === "object");
assert(typeof ListServiceInstanceProvisionedResourcesOutput$ === "object");
assert(typeof ListServiceInstancesFilter$ === "object");
assert(typeof ListServiceInstancesInput$ === "object");
assert(typeof ListServiceInstancesOutput$ === "object");
assert(typeof ListServicePipelineOutputsInput$ === "object");
assert(typeof ListServicePipelineOutputsOutput$ === "object");
assert(typeof ListServicePipelineProvisionedResourcesInput$ === "object");
assert(typeof ListServicePipelineProvisionedResourcesOutput$ === "object");
assert(typeof ListServicesInput$ === "object");
assert(typeof ListServicesOutput$ === "object");
assert(typeof ListServiceTemplatesInput$ === "object");
assert(typeof ListServiceTemplatesOutput$ === "object");
assert(typeof ListServiceTemplateVersionsInput$ === "object");
assert(typeof ListServiceTemplateVersionsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof NotifyResourceDeploymentStatusChangeInput$ === "object");
assert(typeof NotifyResourceDeploymentStatusChangeOutput$ === "object");
assert(typeof Output$ === "object");
assert(typeof ProvisionedResource$ === "object");
assert(typeof RejectEnvironmentAccountConnectionInput$ === "object");
assert(typeof RejectEnvironmentAccountConnectionOutput$ === "object");
assert(typeof Repository$ === "object");
assert(typeof RepositoryBranch$ === "object");
assert(typeof RepositoryBranchInput$ === "object");
assert(typeof RepositorySummary$ === "object");
assert(typeof RepositorySyncAttempt$ === "object");
assert(typeof RepositorySyncDefinition$ === "object");
assert(typeof RepositorySyncEvent$ === "object");
assert(typeof ResourceCountsSummary$ === "object");
assert(typeof ResourceSyncAttempt$ === "object");
assert(typeof ResourceSyncEvent$ === "object");
assert(typeof Revision$ === "object");
assert(typeof S3ObjectSource$ === "object");
assert(typeof Service$ === "object");
assert(typeof ServiceInstance$ === "object");
assert(typeof ServiceInstanceState$ === "object");
assert(typeof ServiceInstanceSummary$ === "object");
assert(typeof ServicePipeline$ === "object");
assert(typeof ServicePipelineState$ === "object");
assert(typeof ServiceSummary$ === "object");
assert(typeof ServiceSyncBlockerSummary$ === "object");
assert(typeof ServiceSyncConfig$ === "object");
assert(typeof ServiceTemplate$ === "object");
assert(typeof ServiceTemplateSummary$ === "object");
assert(typeof ServiceTemplateVersion$ === "object");
assert(typeof ServiceTemplateVersionSummary$ === "object");
assert(typeof SyncBlocker$ === "object");
assert(typeof SyncBlockerContext$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TemplateSyncConfig$ === "object");
assert(typeof TemplateVersionSourceInput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateAccountSettingsInput$ === "object");
assert(typeof UpdateAccountSettingsOutput$ === "object");
assert(typeof UpdateComponentInput$ === "object");
assert(typeof UpdateComponentOutput$ === "object");
assert(typeof UpdateEnvironmentAccountConnectionInput$ === "object");
assert(typeof UpdateEnvironmentAccountConnectionOutput$ === "object");
assert(typeof UpdateEnvironmentInput$ === "object");
assert(typeof UpdateEnvironmentOutput$ === "object");
assert(typeof UpdateEnvironmentTemplateInput$ === "object");
assert(typeof UpdateEnvironmentTemplateOutput$ === "object");
assert(typeof UpdateEnvironmentTemplateVersionInput$ === "object");
assert(typeof UpdateEnvironmentTemplateVersionOutput$ === "object");
assert(typeof UpdateServiceInput$ === "object");
assert(typeof UpdateServiceInstanceInput$ === "object");
assert(typeof UpdateServiceInstanceOutput$ === "object");
assert(typeof UpdateServiceOutput$ === "object");
assert(typeof UpdateServicePipelineInput$ === "object");
assert(typeof UpdateServicePipelineOutput$ === "object");
assert(typeof UpdateServiceSyncBlockerInput$ === "object");
assert(typeof UpdateServiceSyncBlockerOutput$ === "object");
assert(typeof UpdateServiceSyncConfigInput$ === "object");
assert(typeof UpdateServiceSyncConfigOutput$ === "object");
assert(typeof UpdateServiceTemplateInput$ === "object");
assert(typeof UpdateServiceTemplateOutput$ === "object");
assert(typeof UpdateServiceTemplateVersionInput$ === "object");
assert(typeof UpdateServiceTemplateVersionOutput$ === "object");
assert(typeof UpdateTemplateSyncConfigInput$ === "object");
assert(typeof UpdateTemplateSyncConfigOutput$ === "object");
// enums
assert(typeof BlockerStatus === "object");
assert(typeof BlockerType === "object");
assert(typeof ComponentDeploymentUpdateType === "object");
assert(typeof DeploymentStatus === "object");
assert(typeof DeploymentTargetResourceType === "object");
assert(typeof DeploymentUpdateType === "object");
assert(typeof EnvironmentAccountConnectionRequesterAccountType === "object");
assert(typeof EnvironmentAccountConnectionStatus === "object");
assert(typeof ListServiceInstancesFilterBy === "object");
assert(typeof ListServiceInstancesSortBy === "object");
assert(typeof ProvisionedResourceEngine === "object");
assert(typeof Provisioning === "object");
assert(typeof RepositoryProvider === "object");
assert(typeof RepositorySyncStatus === "object");
assert(typeof ResourceDeploymentStatus === "object");
assert(typeof ResourceSyncStatus === "object");
assert(typeof ServiceStatus === "object");
assert(typeof ServiceTemplateSupportedComponentSourceType === "object");
assert(typeof SortOrder === "object");
assert(typeof SyncType === "object");
assert(typeof TemplateType === "object");
assert(typeof TemplateVersionStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof ProtonServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ProtonServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ProtonServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ProtonServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ProtonServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ProtonServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ProtonServiceException);
assert(typeof ValidationException$ === "object");
assert(ProtonServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForComponentDeleted === "function");
assert(typeof waitForComponentDeployed === "function");
assert(typeof waitForEnvironmentDeployed === "function");
assert(typeof waitForEnvironmentTemplateVersionRegistered === "function");
assert(typeof waitForServiceCreated === "function");
assert(typeof waitForServiceDeleted === "function");
assert(typeof waitForServiceInstanceDeployed === "function");
assert(typeof waitForServicePipelineDeployed === "function");
assert(typeof waitForServiceTemplateVersionRegistered === "function");
assert(typeof waitForServiceUpdated === "function");
assert(typeof waitUntilComponentDeleted === "function");
assert(typeof waitUntilComponentDeployed === "function");
assert(typeof waitUntilEnvironmentDeployed === "function");
assert(typeof waitUntilEnvironmentTemplateVersionRegistered === "function");
assert(typeof waitUntilServiceCreated === "function");
assert(typeof waitUntilServiceDeleted === "function");
assert(typeof waitUntilServiceInstanceDeployed === "function");
assert(typeof waitUntilServicePipelineDeployed === "function");
assert(typeof waitUntilServiceTemplateVersionRegistered === "function");
assert(typeof waitUntilServiceUpdated === "function");
// paginators
assert(typeof paginateListComponentOutputs === "function");
assert(typeof paginateListComponentProvisionedResources === "function");
assert(typeof paginateListComponents === "function");
assert(typeof paginateListDeployments === "function");
assert(typeof paginateListEnvironmentAccountConnections === "function");
assert(typeof paginateListEnvironmentOutputs === "function");
assert(typeof paginateListEnvironmentProvisionedResources === "function");
assert(typeof paginateListEnvironmentTemplateVersions === "function");
assert(typeof paginateListEnvironmentTemplates === "function");
assert(typeof paginateListEnvironments === "function");
assert(typeof paginateListRepositories === "function");
assert(typeof paginateListRepositorySyncDefinitions === "function");
assert(typeof paginateListServiceInstanceOutputs === "function");
assert(typeof paginateListServiceInstanceProvisionedResources === "function");
assert(typeof paginateListServiceInstances === "function");
assert(typeof paginateListServicePipelineOutputs === "function");
assert(typeof paginateListServicePipelineProvisionedResources === "function");
assert(typeof paginateListServiceTemplateVersions === "function");
assert(typeof paginateListServiceTemplates === "function");
assert(typeof paginateListServices === "function");
assert(typeof paginateListTagsForResource === "function");
console.log(`Proton index test passed.`);
