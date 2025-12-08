import {
  AcceptEnvironmentAccountConnectionCommand,
  AccessDeniedException,
  BlockerStatus,
  BlockerType,
  CancelComponentDeploymentCommand,
  CancelEnvironmentDeploymentCommand,
  CancelServiceInstanceDeploymentCommand,
  CancelServicePipelineDeploymentCommand,
  ComponentDeploymentUpdateType,
  ConflictException,
  CreateComponentCommand,
  CreateEnvironmentAccountConnectionCommand,
  CreateEnvironmentCommand,
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
  DeleteDeploymentCommand,
  DeleteEnvironmentAccountConnectionCommand,
  DeleteEnvironmentCommand,
  DeleteEnvironmentTemplateCommand,
  DeleteEnvironmentTemplateVersionCommand,
  DeleteRepositoryCommand,
  DeleteServiceCommand,
  DeleteServiceSyncConfigCommand,
  DeleteServiceTemplateCommand,
  DeleteServiceTemplateVersionCommand,
  DeleteTemplateSyncConfigCommand,
  DeploymentStatus,
  DeploymentTargetResourceType,
  DeploymentUpdateType,
  EnvironmentAccountConnectionRequesterAccountType,
  EnvironmentAccountConnectionStatus,
  GetAccountSettingsCommand,
  GetComponentCommand,
  GetDeploymentCommand,
  GetEnvironmentAccountConnectionCommand,
  GetEnvironmentCommand,
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
  InternalServerException,
  ListComponentOutputsCommand,
  ListComponentProvisionedResourcesCommand,
  ListComponentsCommand,
  ListDeploymentsCommand,
  ListEnvironmentAccountConnectionsCommand,
  ListEnvironmentOutputsCommand,
  ListEnvironmentProvisionedResourcesCommand,
  ListEnvironmentTemplateVersionsCommand,
  ListEnvironmentTemplatesCommand,
  ListEnvironmentsCommand,
  ListRepositoriesCommand,
  ListRepositorySyncDefinitionsCommand,
  ListServiceInstanceOutputsCommand,
  ListServiceInstanceProvisionedResourcesCommand,
  ListServiceInstancesCommand,
  ListServiceInstancesFilterBy,
  ListServiceInstancesSortBy,
  ListServicePipelineOutputsCommand,
  ListServicePipelineProvisionedResourcesCommand,
  ListServiceTemplateVersionsCommand,
  ListServiceTemplatesCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  NotifyResourceDeploymentStatusChangeCommand,
  Proton,
  ProtonClient,
  ProtonServiceException,
  ProvisionedResourceEngine,
  Provisioning,
  RejectEnvironmentAccountConnectionCommand,
  RepositoryProvider,
  RepositorySyncStatus,
  ResourceDeploymentStatus,
  ResourceNotFoundException,
  ResourceSyncStatus,
  ServiceQuotaExceededException,
  ServiceStatus,
  ServiceTemplateSupportedComponentSourceType,
  SortOrder,
  SyncType,
  TagResourceCommand,
  TemplateType,
  TemplateVersionStatus,
  ThrottlingException,
  UntagResourceCommand,
  UpdateAccountSettingsCommand,
  UpdateComponentCommand,
  UpdateEnvironmentAccountConnectionCommand,
  UpdateEnvironmentCommand,
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
  ValidationException,
  paginateListComponentOutputs,
  paginateListComponentProvisionedResources,
  paginateListComponents,
  paginateListDeployments,
  paginateListEnvironmentAccountConnections,
  paginateListEnvironmentOutputs,
  paginateListEnvironmentProvisionedResources,
  paginateListEnvironmentTemplateVersions,
  paginateListEnvironmentTemplates,
  paginateListEnvironments,
  paginateListRepositories,
  paginateListRepositorySyncDefinitions,
  paginateListServiceInstanceOutputs,
  paginateListServiceInstanceProvisionedResources,
  paginateListServiceInstances,
  paginateListServicePipelineOutputs,
  paginateListServicePipelineProvisionedResources,
  paginateListServiceTemplateVersions,
  paginateListServiceTemplates,
  paginateListServices,
  paginateListTagsForResource,
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
assert(typeof CancelComponentDeploymentCommand === "function");
assert(typeof CancelEnvironmentDeploymentCommand === "function");
assert(typeof CancelServiceInstanceDeploymentCommand === "function");
assert(typeof CancelServicePipelineDeploymentCommand === "function");
assert(typeof CreateComponentCommand === "function");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateEnvironmentAccountConnectionCommand === "function");
assert(typeof CreateEnvironmentTemplateCommand === "function");
assert(typeof CreateEnvironmentTemplateVersionCommand === "function");
assert(typeof CreateRepositoryCommand === "function");
assert(typeof CreateServiceCommand === "function");
assert(typeof CreateServiceInstanceCommand === "function");
assert(typeof CreateServiceSyncConfigCommand === "function");
assert(typeof CreateServiceTemplateCommand === "function");
assert(typeof CreateServiceTemplateVersionCommand === "function");
assert(typeof CreateTemplateSyncConfigCommand === "function");
assert(typeof DeleteComponentCommand === "function");
assert(typeof DeleteDeploymentCommand === "function");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironmentAccountConnectionCommand === "function");
assert(typeof DeleteEnvironmentTemplateCommand === "function");
assert(typeof DeleteEnvironmentTemplateVersionCommand === "function");
assert(typeof DeleteRepositoryCommand === "function");
assert(typeof DeleteServiceCommand === "function");
assert(typeof DeleteServiceSyncConfigCommand === "function");
assert(typeof DeleteServiceTemplateCommand === "function");
assert(typeof DeleteServiceTemplateVersionCommand === "function");
assert(typeof DeleteTemplateSyncConfigCommand === "function");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetComponentCommand === "function");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironmentAccountConnectionCommand === "function");
assert(typeof GetEnvironmentTemplateCommand === "function");
assert(typeof GetEnvironmentTemplateVersionCommand === "function");
assert(typeof GetRepositoryCommand === "function");
assert(typeof GetRepositorySyncStatusCommand === "function");
assert(typeof GetResourcesSummaryCommand === "function");
assert(typeof GetServiceCommand === "function");
assert(typeof GetServiceInstanceCommand === "function");
assert(typeof GetServiceInstanceSyncStatusCommand === "function");
assert(typeof GetServiceSyncBlockerSummaryCommand === "function");
assert(typeof GetServiceSyncConfigCommand === "function");
assert(typeof GetServiceTemplateCommand === "function");
assert(typeof GetServiceTemplateVersionCommand === "function");
assert(typeof GetTemplateSyncConfigCommand === "function");
assert(typeof GetTemplateSyncStatusCommand === "function");
assert(typeof ListComponentOutputsCommand === "function");
assert(typeof ListComponentProvisionedResourcesCommand === "function");
assert(typeof ListComponentsCommand === "function");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListEnvironmentAccountConnectionsCommand === "function");
assert(typeof ListEnvironmentOutputsCommand === "function");
assert(typeof ListEnvironmentProvisionedResourcesCommand === "function");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironmentTemplatesCommand === "function");
assert(typeof ListEnvironmentTemplateVersionsCommand === "function");
assert(typeof ListRepositoriesCommand === "function");
assert(typeof ListRepositorySyncDefinitionsCommand === "function");
assert(typeof ListServiceInstanceOutputsCommand === "function");
assert(typeof ListServiceInstanceProvisionedResourcesCommand === "function");
assert(typeof ListServiceInstancesCommand === "function");
assert(typeof ListServicePipelineOutputsCommand === "function");
assert(typeof ListServicePipelineProvisionedResourcesCommand === "function");
assert(typeof ListServicesCommand === "function");
assert(typeof ListServiceTemplatesCommand === "function");
assert(typeof ListServiceTemplateVersionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof NotifyResourceDeploymentStatusChangeCommand === "function");
assert(typeof RejectEnvironmentAccountConnectionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateComponentCommand === "function");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateEnvironmentAccountConnectionCommand === "function");
assert(typeof UpdateEnvironmentTemplateCommand === "function");
assert(typeof UpdateEnvironmentTemplateVersionCommand === "function");
assert(typeof UpdateServiceCommand === "function");
assert(typeof UpdateServiceInstanceCommand === "function");
assert(typeof UpdateServicePipelineCommand === "function");
assert(typeof UpdateServiceSyncBlockerCommand === "function");
assert(typeof UpdateServiceSyncConfigCommand === "function");
assert(typeof UpdateServiceTemplateCommand === "function");
assert(typeof UpdateServiceTemplateVersionCommand === "function");
assert(typeof UpdateTemplateSyncConfigCommand === "function");
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
assert(ConflictException.prototype instanceof ProtonServiceException);
assert(InternalServerException.prototype instanceof ProtonServiceException);
assert(ResourceNotFoundException.prototype instanceof ProtonServiceException);
assert(ServiceQuotaExceededException.prototype instanceof ProtonServiceException);
assert(ThrottlingException.prototype instanceof ProtonServiceException);
assert(ValidationException.prototype instanceof ProtonServiceException);
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
