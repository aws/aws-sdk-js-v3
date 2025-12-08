import {
  BadRequestException,
  CancelTagSyncTaskCommand,
  CreateGroupCommand,
  DeleteGroupCommand,
  ForbiddenException,
  GetAccountSettingsCommand,
  GetGroupCommand,
  GetGroupConfigurationCommand,
  GetGroupQueryCommand,
  GetTagSyncTaskCommand,
  GetTagsCommand,
  GroupConfigurationStatus,
  GroupFilterName,
  GroupLifecycleEventsDesiredStatus,
  GroupLifecycleEventsStatus,
  GroupResourcesCommand,
  GroupingStatus,
  GroupingType,
  InternalServerErrorException,
  ListGroupResourcesCommand,
  ListGroupingStatusesCommand,
  ListGroupingStatusesFilterName,
  ListGroupsCommand,
  ListTagSyncTasksCommand,
  MethodNotAllowedException,
  NotFoundException,
  PutGroupConfigurationCommand,
  QueryErrorCode,
  QueryType,
  ResourceFilterName,
  ResourceGroups,
  ResourceGroupsClient,
  ResourceGroupsServiceException,
  ResourceStatusValue,
  SearchResourcesCommand,
  StartTagSyncTaskCommand,
  TagCommand,
  TagSyncTaskStatus,
  TooManyRequestsException,
  UnauthorizedException,
  UngroupResourcesCommand,
  UntagCommand,
  UpdateAccountSettingsCommand,
  UpdateGroupCommand,
  UpdateGroupQueryCommand,
  paginateListGroupResources,
  paginateListGroupingStatuses,
  paginateListGroups,
  paginateListTagSyncTasks,
  paginateSearchResources,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ResourceGroupsClient === "function");
assert(typeof ResourceGroups === "function");
// commands
assert(typeof CancelTagSyncTaskCommand === "function");
assert(typeof CreateGroupCommand === "function");
assert(typeof DeleteGroupCommand === "function");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetGroupCommand === "function");
assert(typeof GetGroupConfigurationCommand === "function");
assert(typeof GetGroupQueryCommand === "function");
assert(typeof GetTagsCommand === "function");
assert(typeof GetTagSyncTaskCommand === "function");
assert(typeof GroupResourcesCommand === "function");
assert(typeof ListGroupingStatusesCommand === "function");
assert(typeof ListGroupResourcesCommand === "function");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListTagSyncTasksCommand === "function");
assert(typeof PutGroupConfigurationCommand === "function");
assert(typeof SearchResourcesCommand === "function");
assert(typeof StartTagSyncTaskCommand === "function");
assert(typeof TagCommand === "function");
assert(typeof UngroupResourcesCommand === "function");
assert(typeof UntagCommand === "function");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateGroupCommand === "function");
assert(typeof UpdateGroupQueryCommand === "function");
// enums
assert(typeof GroupConfigurationStatus === "object");
assert(typeof GroupFilterName === "object");
assert(typeof GroupingStatus === "object");
assert(typeof GroupingType === "object");
assert(typeof GroupLifecycleEventsDesiredStatus === "object");
assert(typeof GroupLifecycleEventsStatus === "object");
assert(typeof ListGroupingStatusesFilterName === "object");
assert(typeof QueryErrorCode === "object");
assert(typeof QueryType === "object");
assert(typeof ResourceFilterName === "object");
assert(typeof ResourceStatusValue === "object");
assert(typeof TagSyncTaskStatus === "object");
// errors
assert(BadRequestException.prototype instanceof ResourceGroupsServiceException);
assert(ForbiddenException.prototype instanceof ResourceGroupsServiceException);
assert(InternalServerErrorException.prototype instanceof ResourceGroupsServiceException);
assert(MethodNotAllowedException.prototype instanceof ResourceGroupsServiceException);
assert(NotFoundException.prototype instanceof ResourceGroupsServiceException);
assert(TooManyRequestsException.prototype instanceof ResourceGroupsServiceException);
assert(UnauthorizedException.prototype instanceof ResourceGroupsServiceException);
assert(ResourceGroupsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListGroupResources === "function");
assert(typeof paginateListGroupingStatuses === "function");
assert(typeof paginateListGroups === "function");
assert(typeof paginateListTagSyncTasks === "function");
assert(typeof paginateSearchResources === "function");
console.log(`ResourceGroups index test passed.`);
