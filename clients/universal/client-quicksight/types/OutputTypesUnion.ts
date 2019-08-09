import { CreateGroupOutput } from "./CreateGroupOutput";
import { CreateGroupMembershipOutput } from "./CreateGroupMembershipOutput";
import { DeleteGroupOutput } from "./DeleteGroupOutput";
import { DeleteGroupMembershipOutput } from "./DeleteGroupMembershipOutput";
import { DeleteUserOutput } from "./DeleteUserOutput";
import { DeleteUserByPrincipalIdOutput } from "./DeleteUserByPrincipalIdOutput";
import { DescribeGroupOutput } from "./DescribeGroupOutput";
import { DescribeUserOutput } from "./DescribeUserOutput";
import { GetDashboardEmbedUrlOutput } from "./GetDashboardEmbedUrlOutput";
import { ListGroupMembershipsOutput } from "./ListGroupMembershipsOutput";
import { ListGroupsOutput } from "./ListGroupsOutput";
import { ListUserGroupsOutput } from "./ListUserGroupsOutput";
import { ListUsersOutput } from "./ListUsersOutput";
import { RegisterUserOutput } from "./RegisterUserOutput";
import { UpdateGroupOutput } from "./UpdateGroupOutput";
import { UpdateUserOutput } from "./UpdateUserOutput";
export type OutputTypesUnion =
  | CreateGroupOutput
  | CreateGroupMembershipOutput
  | DeleteGroupOutput
  | DeleteGroupMembershipOutput
  | DeleteUserOutput
  | DeleteUserByPrincipalIdOutput
  | DescribeGroupOutput
  | DescribeUserOutput
  | GetDashboardEmbedUrlOutput
  | ListGroupMembershipsOutput
  | ListGroupsOutput
  | ListUserGroupsOutput
  | ListUsersOutput
  | RegisterUserOutput
  | UpdateGroupOutput
  | UpdateUserOutput;
