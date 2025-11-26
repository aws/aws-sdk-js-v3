import {
  ApplicationTagStatus,
  AssociateAttributeGroupCommand,
  AssociateResourceCommand,
  AssociationOption,
  CreateApplicationCommand,
  CreateAttributeGroupCommand,
  DeleteApplicationCommand,
  DeleteAttributeGroupCommand,
  DisassociateAttributeGroupCommand,
  DisassociateResourceCommand,
  GetApplicationCommand,
  GetAssociatedResourceCommand,
  GetAttributeGroupCommand,
  GetConfigurationCommand,
  ListApplicationsCommand,
  ListAssociatedAttributeGroupsCommand,
  ListAssociatedResourcesCommand,
  ListAttributeGroupsCommand,
  ListAttributeGroupsForApplicationCommand,
  ListTagsForResourceCommand,
  PutConfigurationCommand,
  ResourceGroupState,
  ResourceItemStatus,
  ResourceType,
  ServiceCatalogAppRegistry,
  ServiceCatalogAppRegistryClient,
  ServiceCatalogAppRegistryServiceException,
  SyncAction,
  SyncResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateAttributeGroupCommand,
  paginateListApplications,
  paginateListAssociatedAttributeGroups,
  paginateListAssociatedResources,
  paginateListAttributeGroups,
  paginateListAttributeGroupsForApplication,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ServiceCatalogAppRegistryClient === "function")
assert(typeof ServiceCatalogAppRegistry === "function")
// commands
assert(typeof AssociateAttributeGroupCommand === "function")
assert(typeof AssociateResourceCommand === "function")
assert(typeof CreateApplicationCommand === "function")
assert(typeof CreateAttributeGroupCommand === "function")
assert(typeof DeleteApplicationCommand === "function")
assert(typeof DeleteAttributeGroupCommand === "function")
assert(typeof DisassociateAttributeGroupCommand === "function")
assert(typeof DisassociateResourceCommand === "function")
assert(typeof GetApplicationCommand === "function")
assert(typeof GetAssociatedResourceCommand === "function")
assert(typeof GetAttributeGroupCommand === "function")
assert(typeof GetConfigurationCommand === "function")
assert(typeof ListApplicationsCommand === "function")
assert(typeof ListAssociatedAttributeGroupsCommand === "function")
assert(typeof ListAssociatedResourcesCommand === "function")
assert(typeof ListAttributeGroupsCommand === "function")
assert(typeof ListAttributeGroupsForApplicationCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutConfigurationCommand === "function")
assert(typeof SyncResourceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateApplicationCommand === "function")
assert(typeof UpdateAttributeGroupCommand === "function")
// enums
assert(typeof ApplicationTagStatus === "object");
assert(typeof AssociationOption === "object");
assert(typeof ResourceGroupState === "object");
assert(typeof ResourceItemStatus === "object");
assert(typeof ResourceType === "object");
assert(typeof SyncAction === "object");
// errors
assert(ServiceCatalogAppRegistryServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListApplications === "function")
assert(typeof paginateListAssociatedAttributeGroups === "function")
assert(typeof paginateListAssociatedResources === "function")
assert(typeof paginateListAttributeGroups === "function")
assert(typeof paginateListAttributeGroupsForApplication === "function")
console.log(`ServiceCatalogAppRegistry index test passed.`);
