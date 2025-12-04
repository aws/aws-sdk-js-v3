import {
  CreateGroupCommand,
  CreateGroupMembershipCommand,
  CreateUserCommand,
  DeleteGroupCommand,
  DeleteGroupMembershipCommand,
  DeleteUserCommand,
  DescribeGroupCommand,
  DescribeGroupMembershipCommand,
  DescribeUserCommand,
  GetGroupIdCommand,
  GetGroupMembershipIdCommand,
  GetUserIdCommand,
  Identitystore,
  IdentitystoreClient,
  IdentitystoreServiceException,
  IsMemberInGroupsCommand,
  ListGroupMembershipsCommand,
  ListGroupMembershipsForMemberCommand,
  ListGroupsCommand,
  ListUsersCommand,
  UpdateGroupCommand,
  UpdateUserCommand,
  UserStatus,
  paginateListGroupMemberships,
  paginateListGroupMembershipsForMember,
  paginateListGroups,
  paginateListUsers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IdentitystoreClient === "function");
assert(typeof Identitystore === "function");
// commands
assert(typeof CreateGroupCommand === "function");
assert(typeof CreateGroupMembershipCommand === "function");
assert(typeof CreateUserCommand === "function");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteGroupMembershipCommand === "function");
assert(typeof DeleteUserCommand === "function");
assert(typeof DescribeGroupCommand === "function");
assert(typeof DescribeGroupMembershipCommand === "function");
assert(typeof DescribeUserCommand === "function");
assert(typeof GetGroupIdCommand === "function");
assert(typeof GetGroupMembershipIdCommand === "function");
assert(typeof GetUserIdCommand === "function");
assert(typeof IsMemberInGroupsCommand === "function");
assert(typeof ListGroupMembershipsCommand === "function");
assert(typeof ListGroupMembershipsForMemberCommand === "function");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListUsersCommand === "function");
assert(typeof UpdateGroupCommand === "function");
assert(typeof UpdateUserCommand === "function");
// enums
assert(typeof UserStatus === "object");
// errors
assert(IdentitystoreServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListGroupMemberships === "function");
assert(typeof paginateListGroupMembershipsForMember === "function");
assert(typeof paginateListGroups === "function");
assert(typeof paginateListUsers === "function");
console.log(`Identitystore index test passed.`);
