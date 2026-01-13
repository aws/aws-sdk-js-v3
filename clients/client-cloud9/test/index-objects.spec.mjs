import {
  BadRequestException,
  BadRequestException$,
  Cloud9,
  Cloud9Client,
  Cloud9ServiceException,
  ConcurrentAccessException,
  ConcurrentAccessException$,
  ConflictException,
  ConflictException$,
  ConnectionType,
  CreateEnvironmentEC2$,
  CreateEnvironmentEC2Command,
  CreateEnvironmentEC2Request$,
  CreateEnvironmentEC2Result$,
  CreateEnvironmentMembership$,
  CreateEnvironmentMembershipCommand,
  CreateEnvironmentMembershipRequest$,
  CreateEnvironmentMembershipResult$,
  DeleteEnvironment$,
  DeleteEnvironmentCommand,
  DeleteEnvironmentMembership$,
  DeleteEnvironmentMembershipCommand,
  DeleteEnvironmentMembershipRequest$,
  DeleteEnvironmentMembershipResult$,
  DeleteEnvironmentRequest$,
  DeleteEnvironmentResult$,
  DescribeEnvironmentMemberships$,
  DescribeEnvironmentMembershipsCommand,
  DescribeEnvironmentMembershipsRequest$,
  DescribeEnvironmentMembershipsResult$,
  DescribeEnvironments$,
  DescribeEnvironmentsCommand,
  DescribeEnvironmentsRequest$,
  DescribeEnvironmentsResult$,
  DescribeEnvironmentStatus$,
  DescribeEnvironmentStatusCommand,
  DescribeEnvironmentStatusRequest$,
  DescribeEnvironmentStatusResult$,
  Environment$,
  EnvironmentLifecycle$,
  EnvironmentLifecycleStatus,
  EnvironmentMember$,
  EnvironmentStatus,
  EnvironmentType,
  ForbiddenException,
  ForbiddenException$,
  InternalServerErrorException,
  InternalServerErrorException$,
  LimitExceededException,
  LimitExceededException$,
  ListEnvironments$,
  ListEnvironmentsCommand,
  ListEnvironmentsRequest$,
  ListEnvironmentsResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ManagedCredentialsAction,
  ManagedCredentialsStatus,
  MemberPermissions,
  NotFoundException,
  NotFoundException$,
  paginateDescribeEnvironmentMemberships,
  paginateListEnvironments,
  Permissions,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateEnvironment$,
  UpdateEnvironmentCommand,
  UpdateEnvironmentMembership$,
  UpdateEnvironmentMembershipCommand,
  UpdateEnvironmentMembershipRequest$,
  UpdateEnvironmentMembershipResult$,
  UpdateEnvironmentRequest$,
  UpdateEnvironmentResult$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Cloud9Client === "function");
assert(typeof Cloud9 === "function");
// commands
assert(typeof CreateEnvironmentEC2Command === "function");
assert(typeof CreateEnvironmentEC2$ === "object");
assert(typeof CreateEnvironmentMembershipCommand === "function");
assert(typeof CreateEnvironmentMembership$ === "object");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironment$ === "object");
assert(typeof DeleteEnvironmentMembershipCommand === "function");
assert(typeof DeleteEnvironmentMembership$ === "object");
assert(typeof DescribeEnvironmentMembershipsCommand === "function");
assert(typeof DescribeEnvironmentMemberships$ === "object");
assert(typeof DescribeEnvironmentsCommand === "function");
assert(typeof DescribeEnvironments$ === "object");
assert(typeof DescribeEnvironmentStatusCommand === "function");
assert(typeof DescribeEnvironmentStatus$ === "object");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironments$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateEnvironment$ === "object");
assert(typeof UpdateEnvironmentMembershipCommand === "function");
assert(typeof UpdateEnvironmentMembership$ === "object");
// structural schemas
assert(typeof CreateEnvironmentEC2Request$ === "object");
assert(typeof CreateEnvironmentEC2Result$ === "object");
assert(typeof CreateEnvironmentMembershipRequest$ === "object");
assert(typeof CreateEnvironmentMembershipResult$ === "object");
assert(typeof DeleteEnvironmentMembershipRequest$ === "object");
assert(typeof DeleteEnvironmentMembershipResult$ === "object");
assert(typeof DeleteEnvironmentRequest$ === "object");
assert(typeof DeleteEnvironmentResult$ === "object");
assert(typeof DescribeEnvironmentMembershipsRequest$ === "object");
assert(typeof DescribeEnvironmentMembershipsResult$ === "object");
assert(typeof DescribeEnvironmentsRequest$ === "object");
assert(typeof DescribeEnvironmentsResult$ === "object");
assert(typeof DescribeEnvironmentStatusRequest$ === "object");
assert(typeof DescribeEnvironmentStatusResult$ === "object");
assert(typeof Environment$ === "object");
assert(typeof EnvironmentLifecycle$ === "object");
assert(typeof EnvironmentMember$ === "object");
assert(typeof ListEnvironmentsRequest$ === "object");
assert(typeof ListEnvironmentsResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateEnvironmentMembershipRequest$ === "object");
assert(typeof UpdateEnvironmentMembershipResult$ === "object");
assert(typeof UpdateEnvironmentRequest$ === "object");
assert(typeof UpdateEnvironmentResult$ === "object");
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
assert(BadRequestException.prototype instanceof Cloud9ServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConcurrentAccessException.prototype instanceof Cloud9ServiceException);
assert(typeof ConcurrentAccessException$ === "object");
assert(ConflictException.prototype instanceof Cloud9ServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof Cloud9ServiceException);
assert(typeof ForbiddenException$ === "object");
assert(InternalServerErrorException.prototype instanceof Cloud9ServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(LimitExceededException.prototype instanceof Cloud9ServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotFoundException.prototype instanceof Cloud9ServiceException);
assert(typeof NotFoundException$ === "object");
assert(TooManyRequestsException.prototype instanceof Cloud9ServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(Cloud9ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeEnvironmentMemberships === "function");
assert(typeof paginateListEnvironments === "function");
console.log(`Cloud9 index test passed.`);
