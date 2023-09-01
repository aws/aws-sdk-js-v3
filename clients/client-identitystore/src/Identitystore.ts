// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateGroupMembershipCommand,
  CreateGroupMembershipCommandInput,
  CreateGroupMembershipCommandOutput,
} from "./commands/CreateGroupMembershipCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteGroupMembershipCommand,
  DeleteGroupMembershipCommandInput,
  DeleteGroupMembershipCommandOutput,
} from "./commands/DeleteGroupMembershipCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeGroupCommand,
  DescribeGroupCommandInput,
  DescribeGroupCommandOutput,
} from "./commands/DescribeGroupCommand";
import {
  DescribeGroupMembershipCommand,
  DescribeGroupMembershipCommandInput,
  DescribeGroupMembershipCommandOutput,
} from "./commands/DescribeGroupMembershipCommand";
import {
  DescribeUserCommand,
  DescribeUserCommandInput,
  DescribeUserCommandOutput,
} from "./commands/DescribeUserCommand";
import { GetGroupIdCommand, GetGroupIdCommandInput, GetGroupIdCommandOutput } from "./commands/GetGroupIdCommand";
import {
  GetGroupMembershipIdCommand,
  GetGroupMembershipIdCommandInput,
  GetGroupMembershipIdCommandOutput,
} from "./commands/GetGroupMembershipIdCommand";
import { GetUserIdCommand, GetUserIdCommandInput, GetUserIdCommandOutput } from "./commands/GetUserIdCommand";
import {
  IsMemberInGroupsCommand,
  IsMemberInGroupsCommandInput,
  IsMemberInGroupsCommandOutput,
} from "./commands/IsMemberInGroupsCommand";
import {
  ListGroupMembershipsCommand,
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput,
} from "./commands/ListGroupMembershipsCommand";
import {
  ListGroupMembershipsForMemberCommand,
  ListGroupMembershipsForMemberCommandInput,
  ListGroupMembershipsForMemberCommandOutput,
} from "./commands/ListGroupMembershipsForMemberCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { UpdateGroupCommand, UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { IdentitystoreClient, IdentitystoreClientConfig } from "./IdentitystoreClient";

const commands = {
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
  IsMemberInGroupsCommand,
  ListGroupMembershipsCommand,
  ListGroupMembershipsForMemberCommand,
  ListGroupsCommand,
  ListUsersCommand,
  UpdateGroupCommand,
  UpdateUserCommand,
};

export interface Identitystore {
  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupMembershipCommand}
   */
  createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupMembershipCommandOutput>;
  createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): void;
  createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupMembershipCommand}
   */
  deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupMembershipCommandOutput>;
  deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): void;
  deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGroupCommand}
   */
  describeGroup(args: DescribeGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGroupCommandOutput>;
  describeGroup(args: DescribeGroupCommandInput, cb: (err: any, data?: DescribeGroupCommandOutput) => void): void;
  describeGroup(
    args: DescribeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGroupMembershipCommand}
   */
  describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGroupMembershipCommandOutput>;
  describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    cb: (err: any, data?: DescribeGroupMembershipCommandOutput) => void
  ): void;
  describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGroupMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserCommand}
   */
  describeUser(args: DescribeUserCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserCommandOutput>;
  describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
  describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupIdCommand}
   */
  getGroupId(args: GetGroupIdCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupIdCommandOutput>;
  getGroupId(args: GetGroupIdCommandInput, cb: (err: any, data?: GetGroupIdCommandOutput) => void): void;
  getGroupId(
    args: GetGroupIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupIdCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupMembershipIdCommand}
   */
  getGroupMembershipId(
    args: GetGroupMembershipIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupMembershipIdCommandOutput>;
  getGroupMembershipId(
    args: GetGroupMembershipIdCommandInput,
    cb: (err: any, data?: GetGroupMembershipIdCommandOutput) => void
  ): void;
  getGroupMembershipId(
    args: GetGroupMembershipIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupMembershipIdCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserIdCommand}
   */
  getUserId(args: GetUserIdCommandInput, options?: __HttpHandlerOptions): Promise<GetUserIdCommandOutput>;
  getUserId(args: GetUserIdCommandInput, cb: (err: any, data?: GetUserIdCommandOutput) => void): void;
  getUserId(
    args: GetUserIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserIdCommandOutput) => void
  ): void;

  /**
   * @see {@link IsMemberInGroupsCommand}
   */
  isMemberInGroups(
    args: IsMemberInGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IsMemberInGroupsCommandOutput>;
  isMemberInGroups(
    args: IsMemberInGroupsCommandInput,
    cb: (err: any, data?: IsMemberInGroupsCommandOutput) => void
  ): void;
  isMemberInGroups(
    args: IsMemberInGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IsMemberInGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupMembershipsCommand}
   */
  listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupMembershipsCommandOutput>;
  listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): void;
  listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupMembershipsForMemberCommand}
   */
  listGroupMembershipsForMember(
    args: ListGroupMembershipsForMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupMembershipsForMemberCommandOutput>;
  listGroupMembershipsForMember(
    args: ListGroupMembershipsForMemberCommandInput,
    cb: (err: any, data?: ListGroupMembershipsForMemberCommandOutput) => void
  ): void;
  listGroupMembershipsForMember(
    args: ListGroupMembershipsForMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupMembershipsForMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The Identity Store service used by IAM Identity Center provides a single place to retrieve all of
 *          your identities (users and groups). For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User
 *             Guide</a>.</p>
 *          <p>This reference guide describes the identity store operations that you can call
 *          programmatically and includes detailed information about data types and errors.</p>
 *          <note>
 *             <p>IAM Identity Center uses the <code>sso</code> and <code>identitystore</code> API namespaces.</p>
 *          </note>
 */
export class Identitystore extends IdentitystoreClient implements Identitystore {}
createAggregatedClient(commands, Identitystore);
