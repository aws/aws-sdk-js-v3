import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedReason,
  AddGroupMember$,
  AddGroupMemberCommand,
  AddGroupMemberRequest$,
  AddGroupMemberResult$,
  AttributeValue$,
  ConflictException,
  ConflictException$,
  CreateGroup$,
  CreateGroupCommand,
  CreateGroupRequest$,
  CreateGroupResult$,
  CreateUser$,
  CreateUserCommand,
  CreateUserRequest$,
  CreateUserResult$,
  DeleteGroup$,
  DeleteGroupCommand,
  DeleteGroupRequest$,
  DeleteGroupResult$,
  DeleteUser$,
  DeleteUserCommand,
  DeleteUserRequest$,
  DeleteUserResult$,
  DescribeGroup$,
  DescribeGroupCommand,
  DescribeGroupRequest$,
  DescribeGroupResult$,
  DescribeUser$,
  DescribeUserCommand,
  DescribeUserRequest$,
  DescribeUserResult$,
  DirectoryServiceData,
  DirectoryServiceDataClient,
  DirectoryServiceDataServiceException,
  DirectoryUnavailableException,
  DirectoryUnavailableException$,
  DirectoryUnavailableReason,
  DisableUser$,
  DisableUserCommand,
  DisableUserRequest$,
  DisableUserResult$,
  Group$,
  GroupScope,
  GroupSummary$,
  GroupType,
  InternalServerException,
  InternalServerException$,
  ListGroupMembers$,
  ListGroupMembersCommand,
  ListGroupMembersRequest$,
  ListGroupMembersResult$,
  ListGroups$,
  ListGroupsCommand,
  ListGroupsForMember$,
  ListGroupsForMemberCommand,
  ListGroupsForMemberRequest$,
  ListGroupsForMemberResult$,
  ListGroupsRequest$,
  ListGroupsResult$,
  ListUsers$,
  ListUsersCommand,
  ListUsersRequest$,
  ListUsersResult$,
  Member$,
  MemberType,
  RemoveGroupMember$,
  RemoveGroupMemberCommand,
  RemoveGroupMemberRequest$,
  RemoveGroupMemberResult$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SearchGroups$,
  SearchGroupsCommand,
  SearchGroupsRequest$,
  SearchGroupsResult$,
  SearchUsers$,
  SearchUsersCommand,
  SearchUsersRequest$,
  SearchUsersResult$,
  ThrottlingException,
  ThrottlingException$,
  UpdateGroup$,
  UpdateGroupCommand,
  UpdateGroupRequest$,
  UpdateGroupResult$,
  UpdateType,
  UpdateUser$,
  UpdateUserCommand,
  UpdateUserRequest$,
  UpdateUserResult$,
  User$,
  UserSummary$,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
  paginateListGroupMembers,
  paginateListGroups,
  paginateListGroupsForMember,
  paginateListUsers,
  paginateSearchGroups,
  paginateSearchUsers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DirectoryServiceDataClient === "function");
assert(typeof DirectoryServiceData === "function");
// commands
assert(typeof AddGroupMemberCommand === "function");
assert(typeof AddGroupMember$ === "object");
assert(typeof CreateGroupCommand === "function");
assert(typeof CreateGroup$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteGroup$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DescribeGroupCommand === "function");
assert(typeof DescribeGroup$ === "object");
assert(typeof DescribeUserCommand === "function");
assert(typeof DescribeUser$ === "object");
assert(typeof DisableUserCommand === "function");
assert(typeof DisableUser$ === "object");
assert(typeof ListGroupMembersCommand === "function");
assert(typeof ListGroupMembers$ === "object");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListGroups$ === "object");
assert(typeof ListGroupsForMemberCommand === "function");
assert(typeof ListGroupsForMember$ === "object");
assert(typeof ListUsersCommand === "function");
assert(typeof ListUsers$ === "object");
assert(typeof RemoveGroupMemberCommand === "function");
assert(typeof RemoveGroupMember$ === "object");
assert(typeof SearchGroupsCommand === "function");
assert(typeof SearchGroups$ === "object");
assert(typeof SearchUsersCommand === "function");
assert(typeof SearchUsers$ === "object");
assert(typeof UpdateGroupCommand === "function");
assert(typeof UpdateGroup$ === "object");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateUser$ === "object");
// structural schemas
assert(typeof AddGroupMemberRequest$ === "object");
assert(typeof AddGroupMemberResult$ === "object");
assert(typeof AttributeValue$ === "object");
assert(typeof CreateGroupRequest$ === "object");
assert(typeof CreateGroupResult$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResult$ === "object");
assert(typeof DeleteGroupRequest$ === "object");
assert(typeof DeleteGroupResult$ === "object");
assert(typeof DeleteUserRequest$ === "object");
assert(typeof DeleteUserResult$ === "object");
assert(typeof DescribeGroupRequest$ === "object");
assert(typeof DescribeGroupResult$ === "object");
assert(typeof DescribeUserRequest$ === "object");
assert(typeof DescribeUserResult$ === "object");
assert(typeof DisableUserRequest$ === "object");
assert(typeof DisableUserResult$ === "object");
assert(typeof Group$ === "object");
assert(typeof GroupSummary$ === "object");
assert(typeof ListGroupMembersRequest$ === "object");
assert(typeof ListGroupMembersResult$ === "object");
assert(typeof ListGroupsForMemberRequest$ === "object");
assert(typeof ListGroupsForMemberResult$ === "object");
assert(typeof ListGroupsRequest$ === "object");
assert(typeof ListGroupsResult$ === "object");
assert(typeof ListUsersRequest$ === "object");
assert(typeof ListUsersResult$ === "object");
assert(typeof Member$ === "object");
assert(typeof RemoveGroupMemberRequest$ === "object");
assert(typeof RemoveGroupMemberResult$ === "object");
assert(typeof SearchGroupsRequest$ === "object");
assert(typeof SearchGroupsResult$ === "object");
assert(typeof SearchUsersRequest$ === "object");
assert(typeof SearchUsersResult$ === "object");
assert(typeof UpdateGroupRequest$ === "object");
assert(typeof UpdateGroupResult$ === "object");
assert(typeof UpdateUserRequest$ === "object");
assert(typeof UpdateUserResult$ === "object");
assert(typeof User$ === "object");
assert(typeof UserSummary$ === "object");
// enums
assert(typeof AccessDeniedReason === "object");
assert(typeof DirectoryUnavailableReason === "object");
assert(typeof GroupScope === "object");
assert(typeof GroupType === "object");
assert(typeof MemberType === "object");
assert(typeof UpdateType === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof DirectoryServiceDataServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof DirectoryServiceDataServiceException);
assert(typeof ConflictException$ === "object");
assert(DirectoryUnavailableException.prototype instanceof DirectoryServiceDataServiceException);
assert(typeof DirectoryUnavailableException$ === "object");
assert(InternalServerException.prototype instanceof DirectoryServiceDataServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DirectoryServiceDataServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof DirectoryServiceDataServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof DirectoryServiceDataServiceException);
assert(typeof ValidationException$ === "object");
assert(DirectoryServiceDataServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListGroupMembers === "function");
assert(typeof paginateListGroups === "function");
assert(typeof paginateListGroupsForMember === "function");
assert(typeof paginateListUsers === "function");
assert(typeof paginateSearchGroups === "function");
assert(typeof paginateSearchUsers === "function");
console.log(`DirectoryServiceData index test passed.`);
