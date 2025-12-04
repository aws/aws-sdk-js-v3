import {
  AddGroupMemberCommand,
  CreateGroupCommand,
  CreateUserCommand,
  DeleteGroupCommand,
  DeleteUserCommand,
  DescribeGroupCommand,
  DescribeUserCommand,
  DirectoryServiceData,
  DirectoryServiceDataClient,
  DirectoryServiceDataServiceException,
  DisableUserCommand,
  GroupScope,
  GroupType,
  ListGroupMembersCommand,
  ListGroupsCommand,
  ListGroupsForMemberCommand,
  ListUsersCommand,
  MemberType,
  RemoveGroupMemberCommand,
  SearchGroupsCommand,
  SearchUsersCommand,
  UpdateGroupCommand,
  UpdateType,
  UpdateUserCommand,
  paginateListGroupMembers,
  paginateListGroups,
  paginateListGroupsForMember,
  paginateListUsers,
  paginateSearchGroups,
  paginateSearchUsers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DirectoryServiceDataClient === "function")
assert(typeof DirectoryServiceData === "function")
// commands
assert(typeof AddGroupMemberCommand === "function")
assert(typeof CreateGroupCommand === "function")
assert(typeof CreateUserCommand === "function")
assert(typeof DeleteGroupCommand === "function")
assert(typeof DeleteUserCommand === "function")
assert(typeof DescribeGroupCommand === "function")
assert(typeof DescribeUserCommand === "function")
assert(typeof DisableUserCommand === "function")
assert(typeof ListGroupMembersCommand === "function")
assert(typeof ListGroupsCommand === "function")
assert(typeof ListGroupsForMemberCommand === "function")
assert(typeof ListUsersCommand === "function")
assert(typeof RemoveGroupMemberCommand === "function")
assert(typeof SearchGroupsCommand === "function")
assert(typeof SearchUsersCommand === "function")
assert(typeof UpdateGroupCommand === "function")
assert(typeof UpdateUserCommand === "function")
// enums
assert(typeof GroupScope === "object");
assert(typeof GroupType === "object");
assert(typeof MemberType === "object");
assert(typeof UpdateType === "object");
// errors
assert(DirectoryServiceDataServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListGroupMembers === "function")
assert(typeof paginateListGroups === "function")
assert(typeof paginateListGroupsForMember === "function")
assert(typeof paginateListUsers === "function")
assert(typeof paginateSearchGroups === "function")
assert(typeof paginateSearchUsers === "function")
console.log(`DirectoryServiceData index test passed.`);
