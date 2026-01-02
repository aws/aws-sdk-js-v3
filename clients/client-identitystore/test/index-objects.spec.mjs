import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionReason,
  Address$,
  AlternateIdentifier$,
  AttributeOperation$,
  ConflictException,
  ConflictException$,
  ConflictExceptionReason,
  CreateGroup$,
  CreateGroupCommand,
  CreateGroupMembership$,
  CreateGroupMembershipCommand,
  CreateGroupMembershipRequest$,
  CreateGroupMembershipResponse$,
  CreateGroupRequest$,
  CreateGroupResponse$,
  CreateUser$,
  CreateUserCommand,
  CreateUserRequest$,
  CreateUserResponse$,
  DeleteGroup$,
  DeleteGroupCommand,
  DeleteGroupMembership$,
  DeleteGroupMembershipCommand,
  DeleteGroupMembershipRequest$,
  DeleteGroupMembershipResponse$,
  DeleteGroupRequest$,
  DeleteGroupResponse$,
  DeleteUser$,
  DeleteUserCommand,
  DeleteUserRequest$,
  DeleteUserResponse$,
  DescribeGroup$,
  DescribeGroupCommand,
  DescribeGroupMembership$,
  DescribeGroupMembershipCommand,
  DescribeGroupMembershipRequest$,
  DescribeGroupMembershipResponse$,
  DescribeGroupRequest$,
  DescribeGroupResponse$,
  DescribeUser$,
  DescribeUserCommand,
  DescribeUserRequest$,
  DescribeUserResponse$,
  Email$,
  ExternalId$,
  Filter$,
  GetGroupId$,
  GetGroupIdCommand,
  GetGroupIdRequest$,
  GetGroupIdResponse$,
  GetGroupMembershipId$,
  GetGroupMembershipIdCommand,
  GetGroupMembershipIdRequest$,
  GetGroupMembershipIdResponse$,
  GetUserId$,
  GetUserIdCommand,
  GetUserIdRequest$,
  GetUserIdResponse$,
  Group$,
  GroupMembership$,
  GroupMembershipExistenceResult$,
  Identitystore,
  IdentitystoreClient,
  IdentitystoreServiceException,
  InternalServerException,
  InternalServerException$,
  IsMemberInGroups$,
  IsMemberInGroupsCommand,
  IsMemberInGroupsRequest$,
  IsMemberInGroupsResponse$,
  ListGroupMemberships$,
  ListGroupMembershipsCommand,
  ListGroupMembershipsForMember$,
  ListGroupMembershipsForMemberCommand,
  ListGroupMembershipsForMemberRequest$,
  ListGroupMembershipsForMemberResponse$,
  ListGroupMembershipsRequest$,
  ListGroupMembershipsResponse$,
  ListGroups$,
  ListGroupsCommand,
  ListGroupsRequest$,
  ListGroupsResponse$,
  ListUsers$,
  ListUsersCommand,
  ListUsersRequest$,
  ListUsersResponse$,
  MemberId$,
  Name$,
  paginateListGroupMemberships,
  paginateListGroupMembershipsForMember,
  paginateListGroups,
  paginateListUsers,
  PhoneNumber$,
  Photo$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceNotFoundExceptionReason,
  ResourceType,
  Role$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ThrottlingException,
  ThrottlingException$,
  ThrottlingExceptionReason,
  UniqueAttribute$,
  UpdateGroup$,
  UpdateGroupCommand,
  UpdateGroupRequest$,
  UpdateGroupResponse$,
  UpdateUser$,
  UpdateUserCommand,
  UpdateUserRequest$,
  UpdateUserResponse$,
  User$,
  UserStatus,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IdentitystoreClient === "function");
assert(typeof Identitystore === "function");
// commands
assert(typeof CreateGroupCommand === "function");
assert(typeof CreateGroup$ === "object");
assert(typeof CreateGroupMembershipCommand === "function");
assert(typeof CreateGroupMembership$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteGroup$ === "object");
assert(typeof DeleteGroupMembershipCommand === "function");
assert(typeof DeleteGroupMembership$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DescribeGroupCommand === "function");
assert(typeof DescribeGroup$ === "object");
assert(typeof DescribeGroupMembershipCommand === "function");
assert(typeof DescribeGroupMembership$ === "object");
assert(typeof DescribeUserCommand === "function");
assert(typeof DescribeUser$ === "object");
assert(typeof GetGroupIdCommand === "function");
assert(typeof GetGroupId$ === "object");
assert(typeof GetGroupMembershipIdCommand === "function");
assert(typeof GetGroupMembershipId$ === "object");
assert(typeof GetUserIdCommand === "function");
assert(typeof GetUserId$ === "object");
assert(typeof IsMemberInGroupsCommand === "function");
assert(typeof IsMemberInGroups$ === "object");
assert(typeof ListGroupMembershipsCommand === "function");
assert(typeof ListGroupMemberships$ === "object");
assert(typeof ListGroupMembershipsForMemberCommand === "function");
assert(typeof ListGroupMembershipsForMember$ === "object");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListGroups$ === "object");
assert(typeof ListUsersCommand === "function");
assert(typeof ListUsers$ === "object");
assert(typeof UpdateGroupCommand === "function");
assert(typeof UpdateGroup$ === "object");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateUser$ === "object");
// structural schemas
assert(typeof Address$ === "object");
assert(typeof AlternateIdentifier$ === "object");
assert(typeof AttributeOperation$ === "object");
assert(typeof CreateGroupMembershipRequest$ === "object");
assert(typeof CreateGroupMembershipResponse$ === "object");
assert(typeof CreateGroupRequest$ === "object");
assert(typeof CreateGroupResponse$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResponse$ === "object");
assert(typeof DeleteGroupMembershipRequest$ === "object");
assert(typeof DeleteGroupMembershipResponse$ === "object");
assert(typeof DeleteGroupRequest$ === "object");
assert(typeof DeleteGroupResponse$ === "object");
assert(typeof DeleteUserRequest$ === "object");
assert(typeof DeleteUserResponse$ === "object");
assert(typeof DescribeGroupMembershipRequest$ === "object");
assert(typeof DescribeGroupMembershipResponse$ === "object");
assert(typeof DescribeGroupRequest$ === "object");
assert(typeof DescribeGroupResponse$ === "object");
assert(typeof DescribeUserRequest$ === "object");
assert(typeof DescribeUserResponse$ === "object");
assert(typeof Email$ === "object");
assert(typeof ExternalId$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetGroupIdRequest$ === "object");
assert(typeof GetGroupIdResponse$ === "object");
assert(typeof GetGroupMembershipIdRequest$ === "object");
assert(typeof GetGroupMembershipIdResponse$ === "object");
assert(typeof GetUserIdRequest$ === "object");
assert(typeof GetUserIdResponse$ === "object");
assert(typeof Group$ === "object");
assert(typeof GroupMembership$ === "object");
assert(typeof GroupMembershipExistenceResult$ === "object");
assert(typeof IsMemberInGroupsRequest$ === "object");
assert(typeof IsMemberInGroupsResponse$ === "object");
assert(typeof ListGroupMembershipsForMemberRequest$ === "object");
assert(typeof ListGroupMembershipsForMemberResponse$ === "object");
assert(typeof ListGroupMembershipsRequest$ === "object");
assert(typeof ListGroupMembershipsResponse$ === "object");
assert(typeof ListGroupsRequest$ === "object");
assert(typeof ListGroupsResponse$ === "object");
assert(typeof ListUsersRequest$ === "object");
assert(typeof ListUsersResponse$ === "object");
assert(typeof MemberId$ === "object");
assert(typeof Name$ === "object");
assert(typeof PhoneNumber$ === "object");
assert(typeof Photo$ === "object");
assert(typeof Role$ === "object");
assert(typeof UniqueAttribute$ === "object");
assert(typeof UpdateGroupRequest$ === "object");
assert(typeof UpdateGroupResponse$ === "object");
assert(typeof UpdateUserRequest$ === "object");
assert(typeof UpdateUserResponse$ === "object");
assert(typeof User$ === "object");
// enums
assert(typeof AccessDeniedExceptionReason === "object");
assert(typeof ConflictExceptionReason === "object");
assert(typeof ResourceNotFoundExceptionReason === "object");
assert(typeof ResourceType === "object");
assert(typeof ThrottlingExceptionReason === "object");
assert(typeof UserStatus === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof IdentitystoreServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof IdentitystoreServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof IdentitystoreServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IdentitystoreServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof IdentitystoreServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof IdentitystoreServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof IdentitystoreServiceException);
assert(typeof ValidationException$ === "object");
assert(IdentitystoreServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListGroupMemberships === "function");
assert(typeof paginateListGroupMembershipsForMember === "function");
assert(typeof paginateListGroups === "function");
assert(typeof paginateListUsers === "function");
console.log(`Identitystore index test passed.`);
