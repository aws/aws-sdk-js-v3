import {
  Application$,
  ApplicationSummary$,
  ApplicationTagResult$,
  ApplicationTagStatus,
  AppRegistryConfiguration$,
  AssociateAttributeGroup$,
  AssociateAttributeGroupCommand,
  AssociateAttributeGroupRequest$,
  AssociateAttributeGroupResponse$,
  AssociateResource$,
  AssociateResourceCommand,
  AssociateResourceRequest$,
  AssociateResourceResponse$,
  AssociationOption,
  AttributeGroup$,
  AttributeGroupDetails$,
  AttributeGroupSummary$,
  ConflictException,
  ConflictException$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateAttributeGroup$,
  CreateAttributeGroupCommand,
  CreateAttributeGroupRequest$,
  CreateAttributeGroupResponse$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteApplicationResponse$,
  DeleteAttributeGroup$,
  DeleteAttributeGroupCommand,
  DeleteAttributeGroupRequest$,
  DeleteAttributeGroupResponse$,
  DisassociateAttributeGroup$,
  DisassociateAttributeGroupCommand,
  DisassociateAttributeGroupRequest$,
  DisassociateAttributeGroupResponse$,
  DisassociateResource$,
  DisassociateResourceCommand,
  DisassociateResourceRequest$,
  DisassociateResourceResponse$,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationRequest$,
  GetApplicationResponse$,
  GetAssociatedResource$,
  GetAssociatedResourceCommand,
  GetAssociatedResourceRequest$,
  GetAssociatedResourceResponse$,
  GetAttributeGroup$,
  GetAttributeGroupCommand,
  GetAttributeGroupRequest$,
  GetAttributeGroupResponse$,
  GetConfiguration$,
  GetConfigurationCommand,
  GetConfigurationResponse$,
  Integrations$,
  InternalServerException,
  InternalServerException$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListAssociatedAttributeGroups$,
  ListAssociatedAttributeGroupsCommand,
  ListAssociatedAttributeGroupsRequest$,
  ListAssociatedAttributeGroupsResponse$,
  ListAssociatedResources$,
  ListAssociatedResourcesCommand,
  ListAssociatedResourcesRequest$,
  ListAssociatedResourcesResponse$,
  ListAttributeGroups$,
  ListAttributeGroupsCommand,
  ListAttributeGroupsForApplication$,
  ListAttributeGroupsForApplicationCommand,
  ListAttributeGroupsForApplicationRequest$,
  ListAttributeGroupsForApplicationResponse$,
  ListAttributeGroupsRequest$,
  ListAttributeGroupsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListApplications,
  paginateListAssociatedAttributeGroups,
  paginateListAssociatedResources,
  paginateListAttributeGroups,
  paginateListAttributeGroupsForApplication,
  PutConfiguration$,
  PutConfigurationCommand,
  PutConfigurationRequest$,
  Resource$,
  ResourceDetails$,
  ResourceGroup$,
  ResourceGroupState,
  ResourceInfo$,
  ResourceIntegrations$,
  ResourceItemStatus,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcesListItem$,
  ResourceType,
  ServiceCatalogAppRegistry,
  ServiceCatalogAppRegistryClient,
  ServiceCatalogAppRegistryServiceException,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SyncAction,
  SyncResource$,
  SyncResourceCommand,
  SyncResourceRequest$,
  SyncResourceResponse$,
  TagQueryConfiguration$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateApplicationResponse$,
  UpdateAttributeGroup$,
  UpdateAttributeGroupCommand,
  UpdateAttributeGroupRequest$,
  UpdateAttributeGroupResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ServiceCatalogAppRegistryClient === "function");
assert(typeof ServiceCatalogAppRegistry === "function");
// commands
assert(typeof AssociateAttributeGroupCommand === "function");
assert(typeof AssociateAttributeGroup$ === "object");
assert(typeof AssociateResourceCommand === "function");
assert(typeof AssociateResource$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateAttributeGroupCommand === "function");
assert(typeof CreateAttributeGroup$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteAttributeGroupCommand === "function");
assert(typeof DeleteAttributeGroup$ === "object");
assert(typeof DisassociateAttributeGroupCommand === "function");
assert(typeof DisassociateAttributeGroup$ === "object");
assert(typeof DisassociateResourceCommand === "function");
assert(typeof DisassociateResource$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetAssociatedResourceCommand === "function");
assert(typeof GetAssociatedResource$ === "object");
assert(typeof GetAttributeGroupCommand === "function");
assert(typeof GetAttributeGroup$ === "object");
assert(typeof GetConfigurationCommand === "function");
assert(typeof GetConfiguration$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListAssociatedAttributeGroupsCommand === "function");
assert(typeof ListAssociatedAttributeGroups$ === "object");
assert(typeof ListAssociatedResourcesCommand === "function");
assert(typeof ListAssociatedResources$ === "object");
assert(typeof ListAttributeGroupsCommand === "function");
assert(typeof ListAttributeGroups$ === "object");
assert(typeof ListAttributeGroupsForApplicationCommand === "function");
assert(typeof ListAttributeGroupsForApplication$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutConfigurationCommand === "function");
assert(typeof PutConfiguration$ === "object");
assert(typeof SyncResourceCommand === "function");
assert(typeof SyncResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateAttributeGroupCommand === "function");
assert(typeof UpdateAttributeGroup$ === "object");
// structural schemas
assert(typeof Application$ === "object");
assert(typeof ApplicationSummary$ === "object");
assert(typeof ApplicationTagResult$ === "object");
assert(typeof AppRegistryConfiguration$ === "object");
assert(typeof AssociateAttributeGroupRequest$ === "object");
assert(typeof AssociateAttributeGroupResponse$ === "object");
assert(typeof AssociateResourceRequest$ === "object");
assert(typeof AssociateResourceResponse$ === "object");
assert(typeof AttributeGroup$ === "object");
assert(typeof AttributeGroupDetails$ === "object");
assert(typeof AttributeGroupSummary$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateAttributeGroupRequest$ === "object");
assert(typeof CreateAttributeGroupResponse$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResponse$ === "object");
assert(typeof DeleteAttributeGroupRequest$ === "object");
assert(typeof DeleteAttributeGroupResponse$ === "object");
assert(typeof DisassociateAttributeGroupRequest$ === "object");
assert(typeof DisassociateAttributeGroupResponse$ === "object");
assert(typeof DisassociateResourceRequest$ === "object");
assert(typeof DisassociateResourceResponse$ === "object");
assert(typeof GetApplicationRequest$ === "object");
assert(typeof GetApplicationResponse$ === "object");
assert(typeof GetAssociatedResourceRequest$ === "object");
assert(typeof GetAssociatedResourceResponse$ === "object");
assert(typeof GetAttributeGroupRequest$ === "object");
assert(typeof GetAttributeGroupResponse$ === "object");
assert(typeof GetConfigurationResponse$ === "object");
assert(typeof Integrations$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListAssociatedAttributeGroupsRequest$ === "object");
assert(typeof ListAssociatedAttributeGroupsResponse$ === "object");
assert(typeof ListAssociatedResourcesRequest$ === "object");
assert(typeof ListAssociatedResourcesResponse$ === "object");
assert(typeof ListAttributeGroupsForApplicationRequest$ === "object");
assert(typeof ListAttributeGroupsForApplicationResponse$ === "object");
assert(typeof ListAttributeGroupsRequest$ === "object");
assert(typeof ListAttributeGroupsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PutConfigurationRequest$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceDetails$ === "object");
assert(typeof ResourceGroup$ === "object");
assert(typeof ResourceInfo$ === "object");
assert(typeof ResourceIntegrations$ === "object");
assert(typeof ResourcesListItem$ === "object");
assert(typeof SyncResourceRequest$ === "object");
assert(typeof SyncResourceResponse$ === "object");
assert(typeof TagQueryConfiguration$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResponse$ === "object");
assert(typeof UpdateAttributeGroupRequest$ === "object");
assert(typeof UpdateAttributeGroupResponse$ === "object");
// enums
assert(typeof ApplicationTagStatus === "object");
assert(typeof AssociationOption === "object");
assert(typeof ResourceGroupState === "object");
assert(typeof ResourceItemStatus === "object");
assert(typeof ResourceType === "object");
assert(typeof SyncAction === "object");
// errors
assert(ConflictException.prototype instanceof ServiceCatalogAppRegistryServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ServiceCatalogAppRegistryServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ServiceCatalogAppRegistryServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ServiceCatalogAppRegistryServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ServiceCatalogAppRegistryServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ServiceCatalogAppRegistryServiceException);
assert(typeof ValidationException$ === "object");
assert(ServiceCatalogAppRegistryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplications === "function");
assert(typeof paginateListAssociatedAttributeGroups === "function");
assert(typeof paginateListAssociatedResources === "function");
assert(typeof paginateListAttributeGroups === "function");
assert(typeof paginateListAttributeGroupsForApplication === "function");
console.log(`ServiceCatalogAppRegistry index test passed.`);
