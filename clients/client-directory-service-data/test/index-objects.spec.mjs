import {
  AccessDeniedException,
  AccessDeniedReason,
  AddGroupMemberCommand,
  ConflictException,
  CreateGroupCommand,
  CreateUserCommand,
  DeleteGroupCommand,
  DeleteUserCommand,
  DescribeGroupCommand,
  DescribeUserCommand,
  DirectoryServiceData,
  DirectoryServiceDataClient,
  DirectoryServiceDataServiceException,
  DirectoryUnavailableException,
  DirectoryUnavailableReason,
  DisableUserCommand,
  GroupScope,
  GroupType,
  InternalServerException,
  ListGroupMembersCommand,
  ListGroupsCommand,
  ListGroupsForMemberCommand,
  ListUsersCommand,
  MemberType,
  RemoveGroupMemberCommand,
  ResourceNotFoundException,
  SearchGroupsCommand,
  SearchUsersCommand,
  ThrottlingException,
  UpdateGroupCommand,
  UpdateType,
  UpdateUserCommand,
  ValidationException,
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
assert(typeof CreateGroupCommand === "function");
assert(typeof CreateUserCommand === "function");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteUserCommand === "function");
assert(typeof DescribeGroupCommand === "function");
assert(typeof DescribeUserCommand === "function");
assert(typeof DisableUserCommand === "function");
assert(typeof ListGroupMembersCommand === "function");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListGroupsForMemberCommand === "function");
assert(typeof ListUsersCommand === "function");
assert(typeof RemoveGroupMemberCommand === "function");
assert(typeof SearchGroupsCommand === "function");
assert(typeof SearchUsersCommand === "function");
assert(typeof UpdateGroupCommand === "function");
assert(typeof UpdateUserCommand === "function");
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
assert(ConflictException.prototype instanceof DirectoryServiceDataServiceException);
assert(DirectoryUnavailableException.prototype instanceof DirectoryServiceDataServiceException);
assert(InternalServerException.prototype instanceof DirectoryServiceDataServiceException);
assert(ResourceNotFoundException.prototype instanceof DirectoryServiceDataServiceException);
assert(ThrottlingException.prototype instanceof DirectoryServiceDataServiceException);
assert(ValidationException.prototype instanceof DirectoryServiceDataServiceException);
assert(DirectoryServiceDataServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListGroupMembers === "function");
assert(typeof paginateListGroups === "function");
assert(typeof paginateListGroupsForMember === "function");
assert(typeof paginateListUsers === "function");
assert(typeof paginateSearchGroups === "function");
assert(typeof paginateSearchUsers === "function");
console.log(`DirectoryServiceData index test passed.`);
