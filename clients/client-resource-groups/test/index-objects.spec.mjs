import {
  AccountSettings$,
  BadRequestException,
  BadRequestException$,
  CancelTagSyncTask$,
  CancelTagSyncTaskCommand,
  CancelTagSyncTaskInput$,
  CreateGroup$,
  CreateGroupCommand,
  CreateGroupInput$,
  CreateGroupOutput$,
  DeleteGroup$,
  DeleteGroupCommand,
  DeleteGroupInput$,
  DeleteGroupOutput$,
  FailedResource$,
  ForbiddenException,
  ForbiddenException$,
  GetAccountSettings$,
  GetAccountSettingsCommand,
  GetAccountSettingsOutput$,
  GetGroup$,
  GetGroupCommand,
  GetGroupConfiguration$,
  GetGroupConfigurationCommand,
  GetGroupConfigurationInput$,
  GetGroupConfigurationOutput$,
  GetGroupInput$,
  GetGroupOutput$,
  GetGroupQuery$,
  GetGroupQueryCommand,
  GetGroupQueryInput$,
  GetGroupQueryOutput$,
  GetTags$,
  GetTagsCommand,
  GetTagsInput$,
  GetTagsOutput$,
  GetTagSyncTask$,
  GetTagSyncTaskCommand,
  GetTagSyncTaskInput$,
  GetTagSyncTaskOutput$,
  Group$,
  GroupConfiguration$,
  GroupConfigurationItem$,
  GroupConfigurationParameter$,
  GroupConfigurationStatus,
  GroupFilter$,
  GroupFilterName,
  GroupIdentifier$,
  GroupingStatus,
  GroupingStatusesItem$,
  GroupingType,
  GroupLifecycleEventsDesiredStatus,
  GroupLifecycleEventsStatus,
  GroupQuery$,
  GroupResources$,
  GroupResourcesCommand,
  GroupResourcesInput$,
  GroupResourcesOutput$,
  InternalServerErrorException,
  InternalServerErrorException$,
  ListGroupingStatuses$,
  ListGroupingStatusesCommand,
  ListGroupingStatusesFilter$,
  ListGroupingStatusesFilterName,
  ListGroupingStatusesInput$,
  ListGroupingStatusesOutput$,
  ListGroupResources$,
  ListGroupResourcesCommand,
  ListGroupResourcesInput$,
  ListGroupResourcesItem$,
  ListGroupResourcesOutput$,
  ListGroups$,
  ListGroupsCommand,
  ListGroupsInput$,
  ListGroupsOutput$,
  ListTagSyncTasks$,
  ListTagSyncTasksCommand,
  ListTagSyncTasksFilter$,
  ListTagSyncTasksInput$,
  ListTagSyncTasksOutput$,
  MethodNotAllowedException,
  MethodNotAllowedException$,
  NotFoundException,
  NotFoundException$,
  paginateListGroupingStatuses,
  paginateListGroupResources,
  paginateListGroups,
  paginateListTagSyncTasks,
  paginateSearchResources,
  PendingResource$,
  PutGroupConfiguration$,
  PutGroupConfigurationCommand,
  PutGroupConfigurationInput$,
  PutGroupConfigurationOutput$,
  QueryError$,
  QueryErrorCode,
  QueryType,
  ResourceFilter$,
  ResourceFilterName,
  ResourceGroups,
  ResourceGroupsClient,
  ResourceGroupsServiceException,
  ResourceIdentifier$,
  ResourceQuery$,
  ResourceStatus$,
  ResourceStatusValue,
  SearchResources$,
  SearchResourcesCommand,
  SearchResourcesInput$,
  SearchResourcesOutput$,
  StartTagSyncTask$,
  StartTagSyncTaskCommand,
  StartTagSyncTaskInput$,
  StartTagSyncTaskOutput$,
  Tag$,
  TagCommand,
  TagInput$,
  TagOutput$,
  TagSyncTaskItem$,
  TagSyncTaskStatus,
  TooManyRequestsException,
  TooManyRequestsException$,
  UnauthorizedException,
  UnauthorizedException$,
  UngroupResources$,
  UngroupResourcesCommand,
  UngroupResourcesInput$,
  UngroupResourcesOutput$,
  Untag$,
  UntagCommand,
  UntagInput$,
  UntagOutput$,
  UpdateAccountSettings$,
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsInput$,
  UpdateAccountSettingsOutput$,
  UpdateGroup$,
  UpdateGroupCommand,
  UpdateGroupInput$,
  UpdateGroupOutput$,
  UpdateGroupQuery$,
  UpdateGroupQueryCommand,
  UpdateGroupQueryInput$,
  UpdateGroupQueryOutput$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ResourceGroupsClient === "function");
assert(typeof ResourceGroups === "function");
// commands
assert(typeof CancelTagSyncTaskCommand === "function");
assert(typeof CancelTagSyncTask$ === "object");
assert(typeof CreateGroupCommand === "function");
assert(typeof CreateGroup$ === "object");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteGroup$ === "object");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetAccountSettings$ === "object");
assert(typeof GetGroupCommand === "function");
assert(typeof GetGroup$ === "object");
assert(typeof GetGroupConfigurationCommand === "function");
assert(typeof GetGroupConfiguration$ === "object");
assert(typeof GetGroupQueryCommand === "function");
assert(typeof GetGroupQuery$ === "object");
assert(typeof GetTagsCommand === "function");
assert(typeof GetTags$ === "object");
assert(typeof GetTagSyncTaskCommand === "function");
assert(typeof GetTagSyncTask$ === "object");
assert(typeof GroupResourcesCommand === "function");
assert(typeof GroupResources$ === "object");
assert(typeof ListGroupingStatusesCommand === "function");
assert(typeof ListGroupingStatuses$ === "object");
assert(typeof ListGroupResourcesCommand === "function");
assert(typeof ListGroupResources$ === "object");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListGroups$ === "object");
assert(typeof ListTagSyncTasksCommand === "function");
assert(typeof ListTagSyncTasks$ === "object");
assert(typeof PutGroupConfigurationCommand === "function");
assert(typeof PutGroupConfiguration$ === "object");
assert(typeof SearchResourcesCommand === "function");
assert(typeof SearchResources$ === "object");
assert(typeof StartTagSyncTaskCommand === "function");
assert(typeof StartTagSyncTask$ === "object");
assert(typeof TagCommand === "function");
assert(typeof Tag$ === "object");
assert(typeof UngroupResourcesCommand === "function");
assert(typeof UngroupResources$ === "object");
assert(typeof UntagCommand === "function");
assert(typeof Untag$ === "object");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateAccountSettings$ === "object");
assert(typeof UpdateGroupCommand === "function");
assert(typeof UpdateGroup$ === "object");
assert(typeof UpdateGroupQueryCommand === "function");
assert(typeof UpdateGroupQuery$ === "object");
// structural schemas
assert(typeof AccountSettings$ === "object");
assert(typeof CancelTagSyncTaskInput$ === "object");
assert(typeof CreateGroupInput$ === "object");
assert(typeof CreateGroupOutput$ === "object");
assert(typeof DeleteGroupInput$ === "object");
assert(typeof DeleteGroupOutput$ === "object");
assert(typeof FailedResource$ === "object");
assert(typeof GetAccountSettingsOutput$ === "object");
assert(typeof GetGroupConfigurationInput$ === "object");
assert(typeof GetGroupConfigurationOutput$ === "object");
assert(typeof GetGroupInput$ === "object");
assert(typeof GetGroupOutput$ === "object");
assert(typeof GetGroupQueryInput$ === "object");
assert(typeof GetGroupQueryOutput$ === "object");
assert(typeof GetTagsInput$ === "object");
assert(typeof GetTagsOutput$ === "object");
assert(typeof GetTagSyncTaskInput$ === "object");
assert(typeof GetTagSyncTaskOutput$ === "object");
assert(typeof Group$ === "object");
assert(typeof GroupConfiguration$ === "object");
assert(typeof GroupConfigurationItem$ === "object");
assert(typeof GroupConfigurationParameter$ === "object");
assert(typeof GroupFilter$ === "object");
assert(typeof GroupIdentifier$ === "object");
assert(typeof GroupingStatusesItem$ === "object");
assert(typeof GroupQuery$ === "object");
assert(typeof GroupResourcesInput$ === "object");
assert(typeof GroupResourcesOutput$ === "object");
assert(typeof ListGroupingStatusesFilter$ === "object");
assert(typeof ListGroupingStatusesInput$ === "object");
assert(typeof ListGroupingStatusesOutput$ === "object");
assert(typeof ListGroupResourcesInput$ === "object");
assert(typeof ListGroupResourcesItem$ === "object");
assert(typeof ListGroupResourcesOutput$ === "object");
assert(typeof ListGroupsInput$ === "object");
assert(typeof ListGroupsOutput$ === "object");
assert(typeof ListTagSyncTasksFilter$ === "object");
assert(typeof ListTagSyncTasksInput$ === "object");
assert(typeof ListTagSyncTasksOutput$ === "object");
assert(typeof PendingResource$ === "object");
assert(typeof PutGroupConfigurationInput$ === "object");
assert(typeof PutGroupConfigurationOutput$ === "object");
assert(typeof QueryError$ === "object");
assert(typeof ResourceFilter$ === "object");
assert(typeof ResourceIdentifier$ === "object");
assert(typeof ResourceQuery$ === "object");
assert(typeof ResourceStatus$ === "object");
assert(typeof SearchResourcesInput$ === "object");
assert(typeof SearchResourcesOutput$ === "object");
assert(typeof StartTagSyncTaskInput$ === "object");
assert(typeof StartTagSyncTaskOutput$ === "object");
assert(typeof TagInput$ === "object");
assert(typeof TagOutput$ === "object");
assert(typeof TagSyncTaskItem$ === "object");
assert(typeof UngroupResourcesInput$ === "object");
assert(typeof UngroupResourcesOutput$ === "object");
assert(typeof UntagInput$ === "object");
assert(typeof UntagOutput$ === "object");
assert(typeof UpdateAccountSettingsInput$ === "object");
assert(typeof UpdateAccountSettingsOutput$ === "object");
assert(typeof UpdateGroupInput$ === "object");
assert(typeof UpdateGroupOutput$ === "object");
assert(typeof UpdateGroupQueryInput$ === "object");
assert(typeof UpdateGroupQueryOutput$ === "object");
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
assert(typeof BadRequestException$ === "object");
assert(ForbiddenException.prototype instanceof ResourceGroupsServiceException);
assert(typeof ForbiddenException$ === "object");
assert(InternalServerErrorException.prototype instanceof ResourceGroupsServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(MethodNotAllowedException.prototype instanceof ResourceGroupsServiceException);
assert(typeof MethodNotAllowedException$ === "object");
assert(NotFoundException.prototype instanceof ResourceGroupsServiceException);
assert(typeof NotFoundException$ === "object");
assert(TooManyRequestsException.prototype instanceof ResourceGroupsServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UnauthorizedException.prototype instanceof ResourceGroupsServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(ResourceGroupsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListGroupResources === "function");
assert(typeof paginateListGroupingStatuses === "function");
assert(typeof paginateListGroups === "function");
assert(typeof paginateListTagSyncTasks === "function");
assert(typeof paginateSearchResources === "function");
console.log(`ResourceGroups index test passed.`);
