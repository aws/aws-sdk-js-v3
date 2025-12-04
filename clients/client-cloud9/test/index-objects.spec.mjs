import {
  Cloud9,
  Cloud9Client,
  Cloud9ServiceException,
  ConnectionType,
  CreateEnvironmentEC2Command,
  CreateEnvironmentMembershipCommand,
  DeleteEnvironmentCommand,
  DeleteEnvironmentMembershipCommand,
  DescribeEnvironmentMembershipsCommand,
  DescribeEnvironmentStatusCommand,
  DescribeEnvironmentsCommand,
  EnvironmentLifecycleStatus,
  EnvironmentStatus,
  EnvironmentType,
  ListEnvironmentsCommand,
  ListTagsForResourceCommand,
  ManagedCredentialsAction,
  ManagedCredentialsStatus,
  MemberPermissions,
  Permissions,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEnvironmentCommand,
  UpdateEnvironmentMembershipCommand,
  paginateDescribeEnvironmentMemberships,
  paginateListEnvironments,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Cloud9Client === "function");
assert(typeof Cloud9 === "function");
// commands
assert(typeof CreateEnvironmentEC2Command === "function");
assert(typeof CreateEnvironmentMembershipCommand === "function");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironmentMembershipCommand === "function");
assert(typeof DescribeEnvironmentMembershipsCommand === "function");
assert(typeof DescribeEnvironmentsCommand === "function");
assert(typeof DescribeEnvironmentStatusCommand === "function");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateEnvironmentMembershipCommand === "function");
// enums
assert(typeof ConnectionType === "object");
assert(typeof EnvironmentLifecycleStatus === "object");
assert(typeof EnvironmentStatus === "object");
assert(typeof EnvironmentType === "object");
assert(typeof ManagedCredentialsAction === "object");
assert(typeof ManagedCredentialsStatus === "object");
assert(typeof MemberPermissions === "object");
assert(typeof Permissions === "object");
// errors
assert(Cloud9ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeEnvironmentMemberships === "function");
assert(typeof paginateListEnvironments === "function");
console.log(`Cloud9 index test passed.`);
