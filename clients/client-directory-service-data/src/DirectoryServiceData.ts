// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddGroupMemberCommand,
  AddGroupMemberCommandInput,
  AddGroupMemberCommandOutput,
} from "./commands/AddGroupMemberCommand";
import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeGroupCommand,
  DescribeGroupCommandInput,
  DescribeGroupCommandOutput,
} from "./commands/DescribeGroupCommand";
import {
  DescribeUserCommand,
  DescribeUserCommandInput,
  DescribeUserCommandOutput,
} from "./commands/DescribeUserCommand";
import { DisableUserCommand, DisableUserCommandInput, DisableUserCommandOutput } from "./commands/DisableUserCommand";
import {
  ListGroupMembersCommand,
  ListGroupMembersCommandInput,
  ListGroupMembersCommandOutput,
} from "./commands/ListGroupMembersCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListGroupsForMemberCommand,
  ListGroupsForMemberCommandInput,
  ListGroupsForMemberCommandOutput,
} from "./commands/ListGroupsForMemberCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  RemoveGroupMemberCommand,
  RemoveGroupMemberCommandInput,
  RemoveGroupMemberCommandOutput,
} from "./commands/RemoveGroupMemberCommand";
import {
  SearchGroupsCommand,
  SearchGroupsCommandInput,
  SearchGroupsCommandOutput,
} from "./commands/SearchGroupsCommand";
import { SearchUsersCommand, SearchUsersCommandInput, SearchUsersCommandOutput } from "./commands/SearchUsersCommand";
import { UpdateGroupCommand, UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { DirectoryServiceDataClient } from "./DirectoryServiceDataClient";

const commands = {
  AddGroupMemberCommand,
  CreateGroupCommand,
  CreateUserCommand,
  DeleteGroupCommand,
  DeleteUserCommand,
  DescribeGroupCommand,
  DescribeUserCommand,
  DisableUserCommand,
  ListGroupMembersCommand,
  ListGroupsCommand,
  ListGroupsForMemberCommand,
  ListUsersCommand,
  RemoveGroupMemberCommand,
  SearchGroupsCommand,
  SearchUsersCommand,
  UpdateGroupCommand,
  UpdateUserCommand,
};

export interface DirectoryServiceData {
  /**
   * @see {@link AddGroupMemberCommand}
   */
  addGroupMember(
    args: AddGroupMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddGroupMemberCommandOutput>;
  addGroupMember(
    args: AddGroupMemberCommandInput,
    cb: (err: any, data?: AddGroupMemberCommandOutput) => void
  ): void;
  addGroupMember(
    args: AddGroupMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddGroupMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(
    args: CreateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupCommandOutput>;
  createGroup(
    args: CreateGroupCommandInput,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserCommandOutput>;
  createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(
    args: DeleteGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupCommandOutput>;
  deleteGroup(
    args: DeleteGroupCommandInput,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserCommandOutput>;
  deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGroupCommand}
   */
  describeGroup(
    args: DescribeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGroupCommandOutput>;
  describeGroup(
    args: DescribeGroupCommandInput,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;
  describeGroup(
    args: DescribeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserCommand}
   */
  describeUser(
    args: DescribeUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserCommandOutput>;
  describeUser(
    args: DescribeUserCommandInput,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableUserCommand}
   */
  disableUser(
    args: DisableUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableUserCommandOutput>;
  disableUser(
    args: DisableUserCommandInput,
    cb: (err: any, data?: DisableUserCommandOutput) => void
  ): void;
  disableUser(
    args: DisableUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupMembersCommand}
   */
  listGroupMembers(
    args: ListGroupMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupMembersCommandOutput>;
  listGroupMembers(
    args: ListGroupMembersCommandInput,
    cb: (err: any, data?: ListGroupMembersCommandOutput) => void
  ): void;
  listGroupMembers(
    args: ListGroupMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(
    args: ListGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupsCommandOutput>;
  listGroups(
    args: ListGroupsCommandInput,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsForMemberCommand}
   */
  listGroupsForMember(
    args: ListGroupsForMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupsForMemberCommandOutput>;
  listGroupsForMember(
    args: ListGroupsForMemberCommandInput,
    cb: (err: any, data?: ListGroupsForMemberCommandOutput) => void
  ): void;
  listGroupsForMember(
    args: ListGroupsForMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsForMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsersCommandOutput>;
  listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveGroupMemberCommand}
   */
  removeGroupMember(
    args: RemoveGroupMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveGroupMemberCommandOutput>;
  removeGroupMember(
    args: RemoveGroupMemberCommandInput,
    cb: (err: any, data?: RemoveGroupMemberCommandOutput) => void
  ): void;
  removeGroupMember(
    args: RemoveGroupMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveGroupMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchGroupsCommand}
   */
  searchGroups(
    args: SearchGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchGroupsCommandOutput>;
  searchGroups(
    args: SearchGroupsCommandInput,
    cb: (err: any, data?: SearchGroupsCommandOutput) => void
  ): void;
  searchGroups(
    args: SearchGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchUsersCommand}
   */
  searchUsers(
    args: SearchUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchUsersCommandOutput>;
  searchUsers(
    args: SearchUsersCommandInput,
    cb: (err: any, data?: SearchUsersCommandOutput) => void
  ): void;
  searchUsers(
    args: SearchUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(
    args: UpdateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGroupCommandOutput>;
  updateGroup(
    args: UpdateGroupCommandInput,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserCommandOutput>;
  updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
}

/**
 * <p> Amazon Web Services Directory Service Data is an extension of Directory Service. This API reference provides detailed information
 *       about Directory Service Data operations and object types. </p>
 *          <p> With Directory Service Data, you can create, read, update, and delete users, groups, and memberships from
 *       your Managed Microsoft AD without additional costs and without deploying dedicated management
 *       instances. You can also perform built-in object management tasks across directories without
 *       direct network connectivity, which simplifies provisioning and access management to achieve
 *       fully automated deployments. Directory Service Data supports user and group write operations, such as
 *         <code>CreateUser</code> and <code>CreateGroup</code>, within the organizational unit (OU) of
 *       your Managed Microsoft AD. Directory Service Data supports read operations, such as <code>ListUsers</code> and
 *         <code>ListGroups</code>, on all users, groups, and group memberships within your
 *       Managed Microsoft AD and across trusted realms. Directory Service Data supports adding and removing group members in
 *       your OU and the Amazon Web Services Delegated Groups OU, so you can grant and deny access to specific roles
 *       and permissions. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_manage_users_groups.html">Manage users and
 *         groups</a> in the <i>Directory Service Administration Guide</i>. </p>
 *          <note>
 *             <p> Directory management operations and configuration changes made against the Directory Service
 *         API will also reflect in Directory Service Data API with eventual consistency. You can expect a short delay
 *         between management changes, such as adding a new directory trust and calling the Directory Service Data API
 *         for the newly created trusted realm. </p>
 *          </note>
 *          <p> Directory Service Data connects to your Managed Microsoft AD domain controllers and performs operations on
 *       underlying directory objects. When you create your Managed Microsoft AD, you choose subnets for domain
 *       controllers that Directory Service creates on your behalf. If a domain controller is unavailable, Directory Service Data
 *       uses an available domain controller. As a result, you might notice eventual consistency while
 *       objects replicate from one domain controller to another domain controller. For more
 *       information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What
 *         gets created</a> in the <i>Directory Service Administration Guide</i>.
 *       Directory limits vary by Managed Microsoft AD edition: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Standard edition</b> – Supports 8 transactions per
 *           second (TPS) for read operations and 4 TPS for write operations per directory. There's a
 *           concurrency limit of 10 concurrent requests. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Enterprise edition</b> – Supports 16 transactions per
 *           second (TPS) for read operations and 8 TPS for write operations per directory. There's a
 *           concurrency limit of 10 concurrent requests.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Amazon Web Services Account</b> - Supports a total of 100 TPS for
 *           Directory Service Data operations across all directories.</p>
 *             </li>
 *          </ul>
 *          <p> Directory Service Data only supports the Managed Microsoft AD directory type and is only available in the primary
 *       Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a>
 *       and <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/multi-region-global-primary-additional.html">Primary vs additional Regions</a> in the <i>Directory Service Administration
 *         Guide</i>. </p>
 * @public
 */
export class DirectoryServiceData extends DirectoryServiceDataClient implements DirectoryServiceData {}
createAggregatedClient(commands, DirectoryServiceData);
