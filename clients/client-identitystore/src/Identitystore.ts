// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { IdentitystoreClient } from "./IdentitystoreClient";

/**
 * <p>The Identity Store service used by AWS IAM Identity Center (successor to AWS Single Sign-On) provides a single place to retrieve all of
 *          your identities (users and groups). For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User
 *             Guide</a>.</p>
 *
 *          <note>
 *             <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and
 *             <code>identitystore</code> API namespaces will continue to retain their original name for
 *             backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p>
 *          </note>
 *
 *          <p>This reference guide describes the identity store operations that you can call
 *          programatically and includes detailed information on data types and errors.</p>
 */
export class Identitystore extends IdentitystoreClient {
  /**
   * <p>Creates a group within the specified identity store.</p>
   */
  public createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  public createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  public createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupCommandOutput) => void
  ): Promise<CreateGroupCommandOutput> | void {
    const command = new CreateGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.</p>
   */
  public createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupMembershipCommandOutput>;
  public createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): void;
  public createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): void;
  public createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGroupMembershipCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): Promise<CreateGroupMembershipCommandOutput> | void {
    const command = new CreateGroupMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new user within the specified identity store.</p>
   */
  public createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  public createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  public createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserCommandOutput) => void),
    cb?: (err: any, data?: CreateUserCommandOutput) => void
  ): Promise<CreateUserCommandOutput> | void {
    const command = new CreateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete a group within an identity store given <code>GroupId</code>.</p>
   */
  public deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  public deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteGroupCommandOutput) => void
  ): Promise<DeleteGroupCommandOutput> | void {
    const command = new DeleteGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete a membership within a group given <code>MembershipId</code>.</p>
   */
  public deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupMembershipCommandOutput>;
  public deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): void;
  public deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): void;
  public deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGroupMembershipCommandOutput) => void),
    cb?: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): Promise<DeleteGroupMembershipCommandOutput> | void {
    const command = new DeleteGroupMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a user within an identity store given <code>UserId</code>.</p>
   */
  public deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  public deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserCommandOutput) => void
  ): Promise<DeleteUserCommandOutput> | void {
    const command = new DeleteUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the group metadata and attributes from <code>GroupId</code> in an identity
   *          store.</p>
   */
  public describeGroup(
    args: DescribeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGroupCommandOutput>;
  public describeGroup(
    args: DescribeGroupCommandInput,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;
  public describeGroup(
    args: DescribeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;
  public describeGroup(
    args: DescribeGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeGroupCommandOutput) => void
  ): Promise<DescribeGroupCommandOutput> | void {
    const command = new DescribeGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.</p>
   */
  public describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGroupMembershipCommandOutput>;
  public describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    cb: (err: any, data?: DescribeGroupMembershipCommandOutput) => void
  ): void;
  public describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGroupMembershipCommandOutput) => void
  ): void;
  public describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGroupMembershipCommandOutput) => void),
    cb?: (err: any, data?: DescribeGroupMembershipCommandOutput) => void
  ): Promise<DescribeGroupMembershipCommandOutput> | void {
    const command = new DescribeGroupMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.</p>
   */
  public describeUser(
    args: DescribeUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserCommandOutput>;
  public describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
  public describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserCommandOutput) => void
  ): Promise<DescribeUserCommandOutput> | void {
    const command = new DescribeUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves <code>GroupId</code> in an identity store.</p>
   */
  public getGroupId(args: GetGroupIdCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupIdCommandOutput>;
  public getGroupId(args: GetGroupIdCommandInput, cb: (err: any, data?: GetGroupIdCommandOutput) => void): void;
  public getGroupId(
    args: GetGroupIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupIdCommandOutput) => void
  ): void;
  public getGroupId(
    args: GetGroupIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupIdCommandOutput) => void),
    cb?: (err: any, data?: GetGroupIdCommandOutput) => void
  ): Promise<GetGroupIdCommandOutput> | void {
    const command = new GetGroupIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the <code>MembershipId</code> in an identity store.</p>
   */
  public getGroupMembershipId(
    args: GetGroupMembershipIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupMembershipIdCommandOutput>;
  public getGroupMembershipId(
    args: GetGroupMembershipIdCommandInput,
    cb: (err: any, data?: GetGroupMembershipIdCommandOutput) => void
  ): void;
  public getGroupMembershipId(
    args: GetGroupMembershipIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupMembershipIdCommandOutput) => void
  ): void;
  public getGroupMembershipId(
    args: GetGroupMembershipIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupMembershipIdCommandOutput) => void),
    cb?: (err: any, data?: GetGroupMembershipIdCommandOutput) => void
  ): Promise<GetGroupMembershipIdCommandOutput> | void {
    const command = new GetGroupMembershipIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the <code>UserId</code> in an identity store.</p>
   */
  public getUserId(args: GetUserIdCommandInput, options?: __HttpHandlerOptions): Promise<GetUserIdCommandOutput>;
  public getUserId(args: GetUserIdCommandInput, cb: (err: any, data?: GetUserIdCommandOutput) => void): void;
  public getUserId(
    args: GetUserIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserIdCommandOutput) => void
  ): void;
  public getUserId(
    args: GetUserIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserIdCommandOutput) => void),
    cb?: (err: any, data?: GetUserIdCommandOutput) => void
  ): Promise<GetUserIdCommandOutput> | void {
    const command = new GetUserIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Checks the user's membership in all requested groups and returns if the member exists in all queried groups.</p>
   */
  public isMemberInGroups(
    args: IsMemberInGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IsMemberInGroupsCommandOutput>;
  public isMemberInGroups(
    args: IsMemberInGroupsCommandInput,
    cb: (err: any, data?: IsMemberInGroupsCommandOutput) => void
  ): void;
  public isMemberInGroups(
    args: IsMemberInGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IsMemberInGroupsCommandOutput) => void
  ): void;
  public isMemberInGroups(
    args: IsMemberInGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: IsMemberInGroupsCommandOutput) => void),
    cb?: (err: any, data?: IsMemberInGroupsCommandOutput) => void
  ): Promise<IsMemberInGroupsCommandOutput> | void {
    const command = new IsMemberInGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.</p>
   */
  public listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupMembershipsCommandOutput>;
  public listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): void;
  public listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): void;
  public listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupMembershipsCommandOutput) => void),
    cb?: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): Promise<ListGroupMembershipsCommandOutput> | void {
    const command = new ListGroupMembershipsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.</p>
   */
  public listGroupMembershipsForMember(
    args: ListGroupMembershipsForMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupMembershipsForMemberCommandOutput>;
  public listGroupMembershipsForMember(
    args: ListGroupMembershipsForMemberCommandInput,
    cb: (err: any, data?: ListGroupMembershipsForMemberCommandOutput) => void
  ): void;
  public listGroupMembershipsForMember(
    args: ListGroupMembershipsForMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupMembershipsForMemberCommandOutput) => void
  ): void;
  public listGroupMembershipsForMember(
    args: ListGroupMembershipsForMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupMembershipsForMemberCommandOutput) => void),
    cb?: (err: any, data?: ListGroupMembershipsForMemberCommandOutput) => void
  ): Promise<ListGroupMembershipsForMemberCommandOutput> | void {
    const command = new ListGroupMembershipsForMemberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects.
   *          Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.</p>
   */
  public listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  public listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
  public listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListGroupsCommandOutput) => void
  ): Promise<ListGroupsCommandOutput> | void {
    const command = new ListGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects.
   *          Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.</p>
   */
  public listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  public listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  public listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsersCommandOutput) => void),
    cb?: (err: any, data?: ListUsersCommandOutput) => void
  ): Promise<ListUsersCommandOutput> | void {
    const command = new ListUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>For the specified group in the specified identity store, updates the group metadata and attributes.</p>
   */
  public updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  public updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateGroupCommandOutput) => void
  ): Promise<UpdateGroupCommandOutput> | void {
    const command = new UpdateGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>For the specified user in the specified identity store, updates the user metadata and attributes.</p>
   */
  public updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  public updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  public updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserCommandOutput) => void
  ): Promise<UpdateUserCommandOutput> | void {
    const command = new UpdateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
