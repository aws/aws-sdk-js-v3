import { CreateGroupInput } from "./CreateGroupInput";
import { CreateGroupMembershipInput } from "./CreateGroupMembershipInput";
import { DeleteGroupInput } from "./DeleteGroupInput";
import { DeleteGroupMembershipInput } from "./DeleteGroupMembershipInput";
import { DeleteUserInput } from "./DeleteUserInput";
import { DeleteUserByPrincipalIdInput } from "./DeleteUserByPrincipalIdInput";
import { DescribeGroupInput } from "./DescribeGroupInput";
import { DescribeUserInput } from "./DescribeUserInput";
import { GetDashboardEmbedUrlInput } from "./GetDashboardEmbedUrlInput";
import { ListGroupMembershipsInput } from "./ListGroupMembershipsInput";
import { ListGroupsInput } from "./ListGroupsInput";
import { ListUserGroupsInput } from "./ListUserGroupsInput";
import { ListUsersInput } from "./ListUsersInput";
import { RegisterUserInput } from "./RegisterUserInput";
import { UpdateGroupInput } from "./UpdateGroupInput";
import { UpdateUserInput } from "./UpdateUserInput";
export type InputTypesUnion =
  | CreateGroupInput
  | CreateGroupMembershipInput
  | DeleteGroupInput
  | DeleteGroupMembershipInput
  | DeleteUserInput
  | DeleteUserByPrincipalIdInput
  | DescribeGroupInput
  | DescribeUserInput
  | GetDashboardEmbedUrlInput
  | ListGroupMembershipsInput
  | ListGroupsInput
  | ListUserGroupsInput
  | ListUsersInput
  | RegisterUserInput
  | UpdateGroupInput
  | UpdateUserInput;
