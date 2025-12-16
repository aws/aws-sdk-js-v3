import {
  AWSServiceAccessStatus,
  AccessDeniedException,
  AccessDeniedException$,
  AssociateDefaultView$,
  AssociateDefaultViewCommand,
  AssociateDefaultViewInput$,
  AssociateDefaultViewOutput$,
  BatchGetView$,
  BatchGetViewCommand,
  BatchGetViewError$,
  BatchGetViewInput$,
  BatchGetViewOutput$,
  ConflictException,
  ConflictException$,
  CreateIndex$,
  CreateIndexCommand,
  CreateIndexInput$,
  CreateIndexOutput$,
  CreateResourceExplorerSetup$,
  CreateResourceExplorerSetupCommand,
  CreateResourceExplorerSetupInput$,
  CreateResourceExplorerSetupOutput$,
  CreateView$,
  CreateViewCommand,
  CreateViewInput$,
  CreateViewOutput$,
  DeleteIndex$,
  DeleteIndexCommand,
  DeleteIndexInput$,
  DeleteIndexOutput$,
  DeleteResourceExplorerSetup$,
  DeleteResourceExplorerSetupCommand,
  DeleteResourceExplorerSetupInput$,
  DeleteResourceExplorerSetupOutput$,
  DeleteView$,
  DeleteViewCommand,
  DeleteViewInput$,
  DeleteViewOutput$,
  DisassociateDefaultView$,
  DisassociateDefaultViewCommand,
  ErrorDetails$,
  GetAccountLevelServiceConfiguration$,
  GetAccountLevelServiceConfigurationCommand,
  GetAccountLevelServiceConfigurationOutput$,
  GetDefaultView$,
  GetDefaultViewCommand,
  GetDefaultViewOutput$,
  GetIndex$,
  GetIndexCommand,
  GetIndexOutput$,
  GetManagedView$,
  GetManagedViewCommand,
  GetManagedViewInput$,
  GetManagedViewOutput$,
  GetResourceExplorerSetup$,
  GetResourceExplorerSetupCommand,
  GetResourceExplorerSetupInput$,
  GetResourceExplorerSetupOutput$,
  GetServiceIndex$,
  GetServiceIndexCommand,
  GetServiceIndexOutput$,
  GetServiceView$,
  GetServiceViewCommand,
  GetServiceViewInput$,
  GetServiceViewOutput$,
  GetView$,
  GetViewCommand,
  GetViewInput$,
  GetViewOutput$,
  IncludedProperty$,
  Index$,
  IndexState,
  IndexStatus$,
  IndexType,
  InternalServerException,
  InternalServerException$,
  ListIndexes$,
  ListIndexesCommand,
  ListIndexesForMembers$,
  ListIndexesForMembersCommand,
  ListIndexesForMembersInput$,
  ListIndexesForMembersOutput$,
  ListIndexesInput$,
  ListIndexesOutput$,
  ListManagedViews$,
  ListManagedViewsCommand,
  ListManagedViewsInput$,
  ListManagedViewsOutput$,
  ListResources$,
  ListResourcesCommand,
  ListResourcesInput$,
  ListResourcesOutput$,
  ListServiceIndexes$,
  ListServiceIndexesCommand,
  ListServiceIndexesInput$,
  ListServiceIndexesOutput$,
  ListServiceViews$,
  ListServiceViewsCommand,
  ListServiceViewsInput$,
  ListServiceViewsOutput$,
  ListStreamingAccessForServices$,
  ListStreamingAccessForServicesCommand,
  ListStreamingAccessForServicesInput$,
  ListStreamingAccessForServicesOutput$,
  ListSupportedResourceTypes$,
  ListSupportedResourceTypesCommand,
  ListSupportedResourceTypesInput$,
  ListSupportedResourceTypesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListViews$,
  ListViewsCommand,
  ListViewsInput$,
  ListViewsOutput$,
  ManagedView$,
  MemberIndex$,
  OperationStatus,
  OrgConfiguration$,
  RegionStatus$,
  Resource$,
  ResourceCount$,
  ResourceExplorer2,
  ResourceExplorer2Client,
  ResourceExplorer2ServiceException,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceProperty$,
  Search$,
  SearchCommand,
  SearchFilter$,
  SearchInput$,
  SearchOutput$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceView$,
  StreamingAccessDetails$,
  SupportedResourceType$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  ThrottlingException,
  ThrottlingException$,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateIndexType$,
  UpdateIndexTypeCommand,
  UpdateIndexTypeInput$,
  UpdateIndexTypeOutput$,
  UpdateView$,
  UpdateViewCommand,
  UpdateViewInput$,
  UpdateViewOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  View$,
  ViewStatus$,
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
assert(typeof AssociateDefaultView$ === "object");
assert(typeof BatchGetViewCommand === "function");
assert(typeof BatchGetView$ === "object");
assert(typeof CreateIndexCommand === "function");
assert(typeof CreateIndex$ === "object");
assert(typeof CreateResourceExplorerSetupCommand === "function");
assert(typeof CreateResourceExplorerSetup$ === "object");
assert(typeof CreateViewCommand === "function");
assert(typeof CreateView$ === "object");
assert(typeof DeleteIndexCommand === "function");
assert(typeof DeleteIndex$ === "object");
assert(typeof DeleteResourceExplorerSetupCommand === "function");
assert(typeof DeleteResourceExplorerSetup$ === "object");
assert(typeof DeleteViewCommand === "function");
assert(typeof DeleteView$ === "object");
assert(typeof DisassociateDefaultViewCommand === "function");
assert(typeof DisassociateDefaultView$ === "object");
assert(typeof GetAccountLevelServiceConfigurationCommand === "function");
assert(typeof GetAccountLevelServiceConfiguration$ === "object");
assert(typeof GetDefaultViewCommand === "function");
assert(typeof GetDefaultView$ === "object");
assert(typeof GetIndexCommand === "function");
assert(typeof GetIndex$ === "object");
assert(typeof GetManagedViewCommand === "function");
assert(typeof GetManagedView$ === "object");
assert(typeof GetResourceExplorerSetupCommand === "function");
assert(typeof GetResourceExplorerSetup$ === "object");
assert(typeof GetServiceIndexCommand === "function");
assert(typeof GetServiceIndex$ === "object");
assert(typeof GetServiceViewCommand === "function");
assert(typeof GetServiceView$ === "object");
assert(typeof GetViewCommand === "function");
assert(typeof GetView$ === "object");
assert(typeof ListIndexesCommand === "function");
assert(typeof ListIndexes$ === "object");
assert(typeof ListIndexesForMembersCommand === "function");
assert(typeof ListIndexesForMembers$ === "object");
assert(typeof ListManagedViewsCommand === "function");
assert(typeof ListManagedViews$ === "object");
assert(typeof ListResourcesCommand === "function");
assert(typeof ListResources$ === "object");
assert(typeof ListServiceIndexesCommand === "function");
assert(typeof ListServiceIndexes$ === "object");
assert(typeof ListServiceViewsCommand === "function");
assert(typeof ListServiceViews$ === "object");
assert(typeof ListStreamingAccessForServicesCommand === "function");
assert(typeof ListStreamingAccessForServices$ === "object");
assert(typeof ListSupportedResourceTypesCommand === "function");
assert(typeof ListSupportedResourceTypes$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListViewsCommand === "function");
assert(typeof ListViews$ === "object");
assert(typeof SearchCommand === "function");
assert(typeof Search$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateIndexTypeCommand === "function");
assert(typeof UpdateIndexType$ === "object");
assert(typeof UpdateViewCommand === "function");
assert(typeof UpdateView$ === "object");
// structural schemas
assert(typeof AssociateDefaultViewInput$ === "object");
assert(typeof AssociateDefaultViewOutput$ === "object");
assert(typeof BatchGetViewError$ === "object");
assert(typeof BatchGetViewInput$ === "object");
assert(typeof BatchGetViewOutput$ === "object");
assert(typeof CreateIndexInput$ === "object");
assert(typeof CreateIndexOutput$ === "object");
assert(typeof CreateResourceExplorerSetupInput$ === "object");
assert(typeof CreateResourceExplorerSetupOutput$ === "object");
assert(typeof CreateViewInput$ === "object");
assert(typeof CreateViewOutput$ === "object");
assert(typeof DeleteIndexInput$ === "object");
assert(typeof DeleteIndexOutput$ === "object");
assert(typeof DeleteResourceExplorerSetupInput$ === "object");
assert(typeof DeleteResourceExplorerSetupOutput$ === "object");
assert(typeof DeleteViewInput$ === "object");
assert(typeof DeleteViewOutput$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof GetAccountLevelServiceConfigurationOutput$ === "object");
assert(typeof GetDefaultViewOutput$ === "object");
assert(typeof GetIndexOutput$ === "object");
assert(typeof GetManagedViewInput$ === "object");
assert(typeof GetManagedViewOutput$ === "object");
assert(typeof GetResourceExplorerSetupInput$ === "object");
assert(typeof GetResourceExplorerSetupOutput$ === "object");
assert(typeof GetServiceIndexOutput$ === "object");
assert(typeof GetServiceViewInput$ === "object");
assert(typeof GetServiceViewOutput$ === "object");
assert(typeof GetViewInput$ === "object");
assert(typeof GetViewOutput$ === "object");
assert(typeof IncludedProperty$ === "object");
assert(typeof Index$ === "object");
assert(typeof IndexStatus$ === "object");
assert(typeof ListIndexesForMembersInput$ === "object");
assert(typeof ListIndexesForMembersOutput$ === "object");
assert(typeof ListIndexesInput$ === "object");
assert(typeof ListIndexesOutput$ === "object");
assert(typeof ListManagedViewsInput$ === "object");
assert(typeof ListManagedViewsOutput$ === "object");
assert(typeof ListResourcesInput$ === "object");
assert(typeof ListResourcesOutput$ === "object");
assert(typeof ListServiceIndexesInput$ === "object");
assert(typeof ListServiceIndexesOutput$ === "object");
assert(typeof ListServiceViewsInput$ === "object");
assert(typeof ListServiceViewsOutput$ === "object");
assert(typeof ListStreamingAccessForServicesInput$ === "object");
assert(typeof ListStreamingAccessForServicesOutput$ === "object");
assert(typeof ListSupportedResourceTypesInput$ === "object");
assert(typeof ListSupportedResourceTypesOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListViewsInput$ === "object");
assert(typeof ListViewsOutput$ === "object");
assert(typeof ManagedView$ === "object");
assert(typeof MemberIndex$ === "object");
assert(typeof OrgConfiguration$ === "object");
assert(typeof RegionStatus$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceCount$ === "object");
assert(typeof ResourceProperty$ === "object");
assert(typeof SearchFilter$ === "object");
assert(typeof SearchInput$ === "object");
assert(typeof SearchOutput$ === "object");
assert(typeof ServiceView$ === "object");
assert(typeof StreamingAccessDetails$ === "object");
assert(typeof SupportedResourceType$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateIndexTypeInput$ === "object");
assert(typeof UpdateIndexTypeOutput$ === "object");
assert(typeof UpdateViewInput$ === "object");
assert(typeof UpdateViewOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof View$ === "object");
assert(typeof ViewStatus$ === "object");
// enums
assert(typeof AWSServiceAccessStatus === "object");
assert(typeof IndexState === "object");
assert(typeof IndexType === "object");
assert(typeof OperationStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof ResourceExplorer2ServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ResourceExplorer2ServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ResourceExplorer2ServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ResourceExplorer2ServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ResourceExplorer2ServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ResourceExplorer2ServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnauthorizedException.prototype instanceof ResourceExplorer2ServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(ValidationException.prototype instanceof ResourceExplorer2ServiceException);
assert(typeof ValidationException$ === "object");
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
