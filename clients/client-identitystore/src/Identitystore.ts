// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateGroupCommandInput,
  type CreateGroupCommandOutput,
  CreateGroupCommand,
} from "./commands/CreateGroupCommand";
import {
  type CreateGroupMembershipCommandInput,
  type CreateGroupMembershipCommandOutput,
  CreateGroupMembershipCommand,
} from "./commands/CreateGroupMembershipCommand";
import {
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  CreateUserCommand,
} from "./commands/CreateUserCommand";
import {
  type DeleteGroupCommandInput,
  type DeleteGroupCommandOutput,
  DeleteGroupCommand,
} from "./commands/DeleteGroupCommand";
import {
  type DeleteGroupMembershipCommandInput,
  type DeleteGroupMembershipCommandOutput,
  DeleteGroupMembershipCommand,
} from "./commands/DeleteGroupMembershipCommand";
import {
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserCommand,
} from "./commands/DeleteUserCommand";
import {
  type DescribeGroupCommandInput,
  type DescribeGroupCommandOutput,
  DescribeGroupCommand,
} from "./commands/DescribeGroupCommand";
import {
  type DescribeGroupMembershipCommandInput,
  type DescribeGroupMembershipCommandOutput,
  DescribeGroupMembershipCommand,
} from "./commands/DescribeGroupMembershipCommand";
import {
  type DescribeIdentityStoreCommandInput,
  type DescribeIdentityStoreCommandOutput,
  DescribeIdentityStoreCommand,
} from "./commands/DescribeIdentityStoreCommand";
import {
  type DescribeUserCommandInput,
  type DescribeUserCommandOutput,
  DescribeUserCommand,
} from "./commands/DescribeUserCommand";
import {
  type GetGroupIdCommandInput,
  type GetGroupIdCommandOutput,
  GetGroupIdCommand,
} from "./commands/GetGroupIdCommand";
import {
  type GetGroupMembershipIdCommandInput,
  type GetGroupMembershipIdCommandOutput,
  GetGroupMembershipIdCommand,
} from "./commands/GetGroupMembershipIdCommand";
import { type GetUserIdCommandInput, type GetUserIdCommandOutput, GetUserIdCommand } from "./commands/GetUserIdCommand";
import {
  type IsMemberInGroupsCommandInput,
  type IsMemberInGroupsCommandOutput,
  IsMemberInGroupsCommand,
} from "./commands/IsMemberInGroupsCommand";
import {
  type ListGroupMembershipsCommandInput,
  type ListGroupMembershipsCommandOutput,
  ListGroupMembershipsCommand,
} from "./commands/ListGroupMembershipsCommand";
import {
  type ListGroupMembershipsForMemberCommandInput,
  type ListGroupMembershipsForMemberCommandOutput,
  ListGroupMembershipsForMemberCommand,
} from "./commands/ListGroupMembershipsForMemberCommand";
import {
  type ListGroupsCommandInput,
  type ListGroupsCommandOutput,
  ListGroupsCommand,
} from "./commands/ListGroupsCommand";
import {
  type ListIdentityStoresCommandInput,
  type ListIdentityStoresCommandOutput,
  ListIdentityStoresCommand,
} from "./commands/ListIdentityStoresCommand";
import { type ListUsersCommandInput, type ListUsersCommandOutput, ListUsersCommand } from "./commands/ListUsersCommand";
import {
  type UpdateGroupCommandInput,
  type UpdateGroupCommandOutput,
  UpdateGroupCommand,
} from "./commands/UpdateGroupCommand";
import {
  type UpdateIdentityStoreCommandInput,
  type UpdateIdentityStoreCommandOutput,
  UpdateIdentityStoreCommand,
} from "./commands/UpdateIdentityStoreCommand";
import {
  type UpdateUserCommandInput,
  type UpdateUserCommandOutput,
  UpdateUserCommand,
} from "./commands/UpdateUserCommand";
import { IdentitystoreClient } from "./IdentitystoreClient";
import { paginateListGroupMembershipsForMember } from "./pagination/ListGroupMembershipsForMemberPaginator";
import { paginateListGroupMemberships } from "./pagination/ListGroupMembershipsPaginator";
import { paginateListGroups } from "./pagination/ListGroupsPaginator";
import { paginateListIdentityStores } from "./pagination/ListIdentityStoresPaginator";
import { paginateListUsers } from "./pagination/ListUsersPaginator";

const commands = {
  CreateGroupCommand,
  CreateGroupMembershipCommand,
  CreateUserCommand,
  DeleteGroupCommand,
  DeleteGroupMembershipCommand,
  DeleteUserCommand,
  DescribeGroupCommand,
  DescribeGroupMembershipCommand,
  DescribeIdentityStoreCommand,
  DescribeUserCommand,
  GetGroupIdCommand,
  GetGroupMembershipIdCommand,
  GetUserIdCommand,
  IsMemberInGroupsCommand,
  ListGroupMembershipsCommand,
  ListGroupMembershipsForMemberCommand,
  ListGroupsCommand,
  ListIdentityStoresCommand,
  ListUsersCommand,
  UpdateGroupCommand,
  UpdateIdentityStoreCommand,
  UpdateUserCommand,
};
const paginators = {
  paginateListGroupMemberships,
  paginateListGroupMembershipsForMember,
  paginateListGroups,
  paginateListIdentityStores,
  paginateListUsers,
};

/**
 * @public
 */
export interface IdentitystoreRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Identitystore {
  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(
    args: CreateGroupCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<CreateGroupCommandOutput>;
  createGroup(
    args: CreateGroupCommandInput,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupMembershipCommand}
   */
  createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<CreateGroupMembershipCommandOutput>;
  createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): void;
  createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<CreateUserCommandOutput>;
  createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  createUser(
    args: CreateUserCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(
    args: DeleteGroupCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<DeleteGroupCommandOutput>;
  deleteGroup(
    args: DeleteGroupCommandInput,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupMembershipCommand}
   */
  deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<DeleteGroupMembershipCommandOutput>;
  deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): void;
  deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<DeleteUserCommandOutput>;
  deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGroupCommand}
   */
  describeGroup(
    args: DescribeGroupCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<DescribeGroupCommandOutput>;
  describeGroup(
    args: DescribeGroupCommandInput,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;
  describeGroup(
    args: DescribeGroupCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGroupMembershipCommand}
   */
  describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<DescribeGroupMembershipCommandOutput>;
  describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    cb: (err: any, data?: DescribeGroupMembershipCommandOutput) => void
  ): void;
  describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: DescribeGroupMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIdentityStoreCommand}
   */
  describeIdentityStore(
    args: DescribeIdentityStoreCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<DescribeIdentityStoreCommandOutput>;
  describeIdentityStore(
    args: DescribeIdentityStoreCommandInput,
    cb: (err: any, data?: DescribeIdentityStoreCommandOutput) => void
  ): void;
  describeIdentityStore(
    args: DescribeIdentityStoreCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: DescribeIdentityStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserCommand}
   */
  describeUser(
    args: DescribeUserCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<DescribeUserCommandOutput>;
  describeUser(
    args: DescribeUserCommandInput,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  describeUser(
    args: DescribeUserCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupIdCommand}
   */
  getGroupId(
    args: GetGroupIdCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<GetGroupIdCommandOutput>;
  getGroupId(
    args: GetGroupIdCommandInput,
    cb: (err: any, data?: GetGroupIdCommandOutput) => void
  ): void;
  getGroupId(
    args: GetGroupIdCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: GetGroupIdCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupMembershipIdCommand}
   */
  getGroupMembershipId(
    args: GetGroupMembershipIdCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<GetGroupMembershipIdCommandOutput>;
  getGroupMembershipId(
    args: GetGroupMembershipIdCommandInput,
    cb: (err: any, data?: GetGroupMembershipIdCommandOutput) => void
  ): void;
  getGroupMembershipId(
    args: GetGroupMembershipIdCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: GetGroupMembershipIdCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserIdCommand}
   */
  getUserId(
    args: GetUserIdCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<GetUserIdCommandOutput>;
  getUserId(
    args: GetUserIdCommandInput,
    cb: (err: any, data?: GetUserIdCommandOutput) => void
  ): void;
  getUserId(
    args: GetUserIdCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: GetUserIdCommandOutput) => void
  ): void;

  /**
   * @see {@link IsMemberInGroupsCommand}
   */
  isMemberInGroups(
    args: IsMemberInGroupsCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<IsMemberInGroupsCommandOutput>;
  isMemberInGroups(
    args: IsMemberInGroupsCommandInput,
    cb: (err: any, data?: IsMemberInGroupsCommandOutput) => void
  ): void;
  isMemberInGroups(
    args: IsMemberInGroupsCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: IsMemberInGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupMembershipsCommand}
   */
  listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<ListGroupMembershipsCommandOutput>;
  listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): void;
  listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupMembershipsForMemberCommand}
   */
  listGroupMembershipsForMember(
    args: ListGroupMembershipsForMemberCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<ListGroupMembershipsForMemberCommandOutput>;
  listGroupMembershipsForMember(
    args: ListGroupMembershipsForMemberCommandInput,
    cb: (err: any, data?: ListGroupMembershipsForMemberCommandOutput) => void
  ): void;
  listGroupMembershipsForMember(
    args: ListGroupMembershipsForMemberCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: ListGroupMembershipsForMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(
    args: ListGroupsCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<ListGroupsCommandOutput>;
  listGroups(
    args: ListGroupsCommandInput,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityStoresCommand}
   */
  listIdentityStores(): Promise<ListIdentityStoresCommandOutput>;
  listIdentityStores(
    args: ListIdentityStoresCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<ListIdentityStoresCommandOutput>;
  listIdentityStores(
    args: ListIdentityStoresCommandInput,
    cb: (err: any, data?: ListIdentityStoresCommandOutput) => void
  ): void;
  listIdentityStores(
    args: ListIdentityStoresCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: ListIdentityStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<ListUsersCommandOutput>;
  listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  listUsers(
    args: ListUsersCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(
    args: UpdateGroupCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<UpdateGroupCommandOutput>;
  updateGroup(
    args: UpdateGroupCommandInput,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdentityStoreCommand}
   */
  updateIdentityStore(
    args: UpdateIdentityStoreCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<UpdateIdentityStoreCommandOutput>;
  updateIdentityStore(
    args: UpdateIdentityStoreCommandInput,
    cb: (err: any, data?: UpdateIdentityStoreCommandOutput) => void
  ): void;
  updateIdentityStore(
    args: UpdateIdentityStoreCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: UpdateIdentityStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserCommandInput,
    options?: IdentitystoreRequestOptions
  ): Promise<UpdateUserCommandOutput>;
  updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: IdentitystoreRequestOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupMembershipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGroupMembershipsCommandOutput}.
   */
  paginateListGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGroupMembershipsCommandOutput>;

  /**
   * @see {@link ListGroupMembershipsForMemberCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGroupMembershipsForMemberCommandOutput}.
   */
  paginateListGroupMembershipsForMember(
    args: ListGroupMembershipsForMemberCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGroupMembershipsForMemberCommandOutput>;

  /**
   * @see {@link ListGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGroupsCommandOutput}.
   */
  paginateListGroups(
    args: ListGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGroupsCommandOutput>;

  /**
   * @see {@link ListIdentityStoresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIdentityStoresCommandOutput}.
   */
  paginateListIdentityStores(
    args?: ListIdentityStoresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIdentityStoresCommandOutput>;

  /**
   * @see {@link ListUsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUsersCommandOutput}.
   */
  paginateListUsers(
    args: ListUsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUsersCommandOutput>;
}

/**
 * <note> <p> IAM Identity Center uses the <code>sso</code>, <code>sso-directory</code>, and <code>identitystore</code> API namespaces. The <code>sso-directory</code> and <code>identitystore</code> namespaces authorize access to data in the Identity Store. Make sure your policies with IAM actions from these two namespaces are consistent to avoid conflicting authorization to the same data.</p> </note> <p>The Identity Store service used by IAM Identity Center provides a single place to retrieve all of your identities (users and groups). You can use the identity store API operations in this guide to manage your identity data programmatically. The scope of these APIs allows you to create, read, update, delete, and list users, groups, and memberships.</p> <p>This guide also describes identity store operations that you can call and includes detailed information about data types and errors.</p> <important> <p>If you use an external identity provider or Active Directory as your identity source, we recommend that you use the <code>Create</code>, <code>Update</code>, and <code>Delete</code> APIs with caution. Because IAM Identity Center doesn't support outbound synchronization, your identity source won't automatically update with the changes that you make to users or groups using these APIs.</p> </important> <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a convenient way to programmatically access the identity store and other Amazon Web Services services. For more information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Amazon Web Services Builder Center Toolbox</a>.</p>
 * @public
 */
export class Identitystore extends IdentitystoreClient implements Identitystore {}
createAggregatedClient(commands, Identitystore, { paginators });
