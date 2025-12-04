import {
  AWSServiceAccessStatus,
  AssociateDefaultViewCommand,
  BatchGetViewCommand,
  CreateIndexCommand,
  CreateResourceExplorerSetupCommand,
  CreateViewCommand,
  DeleteIndexCommand,
  DeleteResourceExplorerSetupCommand,
  DeleteViewCommand,
  DisassociateDefaultViewCommand,
  GetAccountLevelServiceConfigurationCommand,
  GetDefaultViewCommand,
  GetIndexCommand,
  GetManagedViewCommand,
  GetResourceExplorerSetupCommand,
  GetServiceIndexCommand,
  GetServiceViewCommand,
  GetViewCommand,
  IndexState,
  IndexType,
  ListIndexesCommand,
  ListIndexesForMembersCommand,
  ListManagedViewsCommand,
  ListResourcesCommand,
  ListServiceIndexesCommand,
  ListServiceViewsCommand,
  ListStreamingAccessForServicesCommand,
  ListSupportedResourceTypesCommand,
  ListTagsForResourceCommand,
  ListViewsCommand,
  OperationStatus,
  ResourceExplorer2,
  ResourceExplorer2Client,
  ResourceExplorer2ServiceException,
  SearchCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateIndexTypeCommand,
  UpdateViewCommand,
  paginateGetResourceExplorerSetup,
  paginateListIndexes,
  paginateListIndexesForMembers,
  paginateListManagedViews,
  paginateListResources,
  paginateListServiceIndexes,
  paginateListServiceViews,
  paginateListStreamingAccessForServices,
  paginateListSupportedResourceTypes,
  paginateListViews,
  paginateSearch,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ResourceExplorer2Client === "function");
assert(typeof ResourceExplorer2 === "function");
// commands
assert(typeof AssociateDefaultViewCommand === "function");
assert(typeof BatchGetViewCommand === "function");
assert(typeof CreateIndexCommand === "function");
assert(typeof CreateResourceExplorerSetupCommand === "function");
assert(typeof CreateViewCommand === "function");
assert(typeof DeleteIndexCommand === "function");
assert(typeof DeleteResourceExplorerSetupCommand === "function");
assert(typeof DeleteViewCommand === "function");
assert(typeof DisassociateDefaultViewCommand === "function");
assert(typeof GetAccountLevelServiceConfigurationCommand === "function");
assert(typeof GetDefaultViewCommand === "function");
assert(typeof GetIndexCommand === "function");
assert(typeof GetManagedViewCommand === "function");
assert(typeof GetResourceExplorerSetupCommand === "function");
assert(typeof GetServiceIndexCommand === "function");
assert(typeof GetServiceViewCommand === "function");
assert(typeof GetViewCommand === "function");
assert(typeof ListIndexesCommand === "function");
assert(typeof ListIndexesForMembersCommand === "function");
assert(typeof ListManagedViewsCommand === "function");
assert(typeof ListResourcesCommand === "function");
assert(typeof ListServiceIndexesCommand === "function");
assert(typeof ListServiceViewsCommand === "function");
assert(typeof ListStreamingAccessForServicesCommand === "function");
assert(typeof ListSupportedResourceTypesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListViewsCommand === "function");
assert(typeof SearchCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateIndexTypeCommand === "function");
assert(typeof UpdateViewCommand === "function");
// enums
assert(typeof AWSServiceAccessStatus === "object");
assert(typeof IndexState === "object");
assert(typeof IndexType === "object");
assert(typeof OperationStatus === "object");
// errors
assert(ResourceExplorer2ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetResourceExplorerSetup === "function");
assert(typeof paginateListIndexes === "function");
assert(typeof paginateListIndexesForMembers === "function");
assert(typeof paginateListManagedViews === "function");
assert(typeof paginateListResources === "function");
assert(typeof paginateListServiceIndexes === "function");
assert(typeof paginateListServiceViews === "function");
assert(typeof paginateListStreamingAccessForServices === "function");
assert(typeof paginateListSupportedResourceTypes === "function");
assert(typeof paginateListViews === "function");
assert(typeof paginateSearch === "function");
console.log(`ResourceExplorer2 index test passed.`);
