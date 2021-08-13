import { ChimeSDKIdentityClient } from "./ChimeSDKIdentityClient";
import {
  CreateAppInstanceAdminCommand,
  CreateAppInstanceAdminCommandInput,
  CreateAppInstanceAdminCommandOutput,
} from "./commands/CreateAppInstanceAdminCommand";
import {
  CreateAppInstanceCommand,
  CreateAppInstanceCommandInput,
  CreateAppInstanceCommandOutput,
} from "./commands/CreateAppInstanceCommand";
import {
  CreateAppInstanceUserCommand,
  CreateAppInstanceUserCommandInput,
  CreateAppInstanceUserCommandOutput,
} from "./commands/CreateAppInstanceUserCommand";
import {
  DeleteAppInstanceAdminCommand,
  DeleteAppInstanceAdminCommandInput,
  DeleteAppInstanceAdminCommandOutput,
} from "./commands/DeleteAppInstanceAdminCommand";
import {
  DeleteAppInstanceCommand,
  DeleteAppInstanceCommandInput,
  DeleteAppInstanceCommandOutput,
} from "./commands/DeleteAppInstanceCommand";
import {
  DeleteAppInstanceUserCommand,
  DeleteAppInstanceUserCommandInput,
  DeleteAppInstanceUserCommandOutput,
} from "./commands/DeleteAppInstanceUserCommand";
import {
  DescribeAppInstanceAdminCommand,
  DescribeAppInstanceAdminCommandInput,
  DescribeAppInstanceAdminCommandOutput,
} from "./commands/DescribeAppInstanceAdminCommand";
import {
  DescribeAppInstanceCommand,
  DescribeAppInstanceCommandInput,
  DescribeAppInstanceCommandOutput,
} from "./commands/DescribeAppInstanceCommand";
import {
  DescribeAppInstanceUserCommand,
  DescribeAppInstanceUserCommandInput,
  DescribeAppInstanceUserCommandOutput,
} from "./commands/DescribeAppInstanceUserCommand";
import {
  GetAppInstanceRetentionSettingsCommand,
  GetAppInstanceRetentionSettingsCommandInput,
  GetAppInstanceRetentionSettingsCommandOutput,
} from "./commands/GetAppInstanceRetentionSettingsCommand";
import {
  ListAppInstanceAdminsCommand,
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput,
} from "./commands/ListAppInstanceAdminsCommand";
import {
  ListAppInstanceUsersCommand,
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput,
} from "./commands/ListAppInstanceUsersCommand";
import {
  ListAppInstancesCommand,
  ListAppInstancesCommandInput,
  ListAppInstancesCommandOutput,
} from "./commands/ListAppInstancesCommand";
import {
  PutAppInstanceRetentionSettingsCommand,
  PutAppInstanceRetentionSettingsCommandInput,
  PutAppInstanceRetentionSettingsCommandOutput,
} from "./commands/PutAppInstanceRetentionSettingsCommand";
import {
  UpdateAppInstanceCommand,
  UpdateAppInstanceCommandInput,
  UpdateAppInstanceCommandOutput,
} from "./commands/UpdateAppInstanceCommand";
import {
  UpdateAppInstanceUserCommand,
  UpdateAppInstanceUserCommandInput,
  UpdateAppInstanceUserCommandOutput,
} from "./commands/UpdateAppInstanceUserCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>The Amazon Chime SDK Identity APIs in this section allow software developers to create
 *          and manage unique instances of their messaging applications. These APIs provide the
 *          overarching framework for creating and sending messages. For more information about the
 *          identity APIs, refer to .</p>
 */
export class ChimeSDKIdentity extends ChimeSDKIdentityClient {
  /**
   * <p>Creates an Amazon Chime SDK messaging <code>AppInstance</code> under an AWS account.
   *          Only SDK messaging customers use this API. <code>CreateAppInstance</code> supports
   *          idempotency behavior as described in the AWS API Standard.</p>
   *          <p>identity</p>
   */
  public createAppInstance(
    args: CreateAppInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppInstanceCommandOutput>;
  public createAppInstance(
    args: CreateAppInstanceCommandInput,
    cb: (err: any, data?: CreateAppInstanceCommandOutput) => void
  ): void;
  public createAppInstance(
    args: CreateAppInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppInstanceCommandOutput) => void
  ): void;
  public createAppInstance(
    args: CreateAppInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAppInstanceCommandOutput) => void),
    cb?: (err: any, data?: CreateAppInstanceCommandOutput) => void
  ): Promise<CreateAppInstanceCommandOutput> | void {
    const command = new CreateAppInstanceCommand(args);
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
   * <p>Promotes an <code>AppInstanceUser</code> to an <code>AppInstanceAdmin</code>. The
   *          promoted user can perform the following actions. </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ChannelModerator</code> actions across all channels in the
   *                   <code>AppInstance</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeleteChannelMessage</code> actions.</p>
   *             </li>
   *          </ul>
   *
   *          <p>Only an <code>AppInstanceUser</code> can be promoted to an <code>AppInstanceAdmin</code>
   *          role.</p>
   */
  public createAppInstanceAdmin(
    args: CreateAppInstanceAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppInstanceAdminCommandOutput>;
  public createAppInstanceAdmin(
    args: CreateAppInstanceAdminCommandInput,
    cb: (err: any, data?: CreateAppInstanceAdminCommandOutput) => void
  ): void;
  public createAppInstanceAdmin(
    args: CreateAppInstanceAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppInstanceAdminCommandOutput) => void
  ): void;
  public createAppInstanceAdmin(
    args: CreateAppInstanceAdminCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAppInstanceAdminCommandOutput) => void),
    cb?: (err: any, data?: CreateAppInstanceAdminCommandOutput) => void
  ): Promise<CreateAppInstanceAdminCommandOutput> | void {
    const command = new CreateAppInstanceAdminCommand(args);
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
   * <p>Creates a user under an Amazon Chime <code>AppInstance</code>. The request consists of a
   *          unique <code>appInstanceUserId</code> and <code>Name</code> for that user.</p>
   */
  public createAppInstanceUser(
    args: CreateAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppInstanceUserCommandOutput>;
  public createAppInstanceUser(
    args: CreateAppInstanceUserCommandInput,
    cb: (err: any, data?: CreateAppInstanceUserCommandOutput) => void
  ): void;
  public createAppInstanceUser(
    args: CreateAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppInstanceUserCommandOutput) => void
  ): void;
  public createAppInstanceUser(
    args: CreateAppInstanceUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAppInstanceUserCommandOutput) => void),
    cb?: (err: any, data?: CreateAppInstanceUserCommandOutput) => void
  ): Promise<CreateAppInstanceUserCommandOutput> | void {
    const command = new CreateAppInstanceUserCommand(args);
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
   * <p>Deletes an <code>AppInstance</code> and all associated data asynchronously.</p>
   */
  public deleteAppInstance(
    args: DeleteAppInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceCommandOutput>;
  public deleteAppInstance(
    args: DeleteAppInstanceCommandInput,
    cb: (err: any, data?: DeleteAppInstanceCommandOutput) => void
  ): void;
  public deleteAppInstance(
    args: DeleteAppInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceCommandOutput) => void
  ): void;
  public deleteAppInstance(
    args: DeleteAppInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppInstanceCommandOutput) => void
  ): Promise<DeleteAppInstanceCommandOutput> | void {
    const command = new DeleteAppInstanceCommand(args);
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
   * <p>Demotes an <code>AppInstanceAdmin</code> to an <code>AppInstanceUser</code>. This action
   *          does not delete the user.</p>
   */
  public deleteAppInstanceAdmin(
    args: DeleteAppInstanceAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceAdminCommandOutput>;
  public deleteAppInstanceAdmin(
    args: DeleteAppInstanceAdminCommandInput,
    cb: (err: any, data?: DeleteAppInstanceAdminCommandOutput) => void
  ): void;
  public deleteAppInstanceAdmin(
    args: DeleteAppInstanceAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceAdminCommandOutput) => void
  ): void;
  public deleteAppInstanceAdmin(
    args: DeleteAppInstanceAdminCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppInstanceAdminCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppInstanceAdminCommandOutput) => void
  ): Promise<DeleteAppInstanceAdminCommandOutput> | void {
    const command = new DeleteAppInstanceAdminCommand(args);
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
   * <p>Deletes an <code>AppInstanceUser</code>.</p>
   */
  public deleteAppInstanceUser(
    args: DeleteAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceUserCommandOutput>;
  public deleteAppInstanceUser(
    args: DeleteAppInstanceUserCommandInput,
    cb: (err: any, data?: DeleteAppInstanceUserCommandOutput) => void
  ): void;
  public deleteAppInstanceUser(
    args: DeleteAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceUserCommandOutput) => void
  ): void;
  public deleteAppInstanceUser(
    args: DeleteAppInstanceUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppInstanceUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppInstanceUserCommandOutput) => void
  ): Promise<DeleteAppInstanceUserCommandOutput> | void {
    const command = new DeleteAppInstanceUserCommand(args);
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
   * <p>Returns the full details of an <code>AppInstance</code>.</p>
   */
  public describeAppInstance(
    args: DescribeAppInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppInstanceCommandOutput>;
  public describeAppInstance(
    args: DescribeAppInstanceCommandInput,
    cb: (err: any, data?: DescribeAppInstanceCommandOutput) => void
  ): void;
  public describeAppInstance(
    args: DescribeAppInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppInstanceCommandOutput) => void
  ): void;
  public describeAppInstance(
    args: DescribeAppInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppInstanceCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppInstanceCommandOutput) => void
  ): Promise<DescribeAppInstanceCommandOutput> | void {
    const command = new DescribeAppInstanceCommand(args);
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
   * <p>Returns the full details of an <code>AppInstanceAdmin</code>.</p>
   */
  public describeAppInstanceAdmin(
    args: DescribeAppInstanceAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppInstanceAdminCommandOutput>;
  public describeAppInstanceAdmin(
    args: DescribeAppInstanceAdminCommandInput,
    cb: (err: any, data?: DescribeAppInstanceAdminCommandOutput) => void
  ): void;
  public describeAppInstanceAdmin(
    args: DescribeAppInstanceAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppInstanceAdminCommandOutput) => void
  ): void;
  public describeAppInstanceAdmin(
    args: DescribeAppInstanceAdminCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppInstanceAdminCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppInstanceAdminCommandOutput) => void
  ): Promise<DescribeAppInstanceAdminCommandOutput> | void {
    const command = new DescribeAppInstanceAdminCommand(args);
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
   * <p>Returns the full details of an <code>AppInstanceUser</code>.</p>
   */
  public describeAppInstanceUser(
    args: DescribeAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppInstanceUserCommandOutput>;
  public describeAppInstanceUser(
    args: DescribeAppInstanceUserCommandInput,
    cb: (err: any, data?: DescribeAppInstanceUserCommandOutput) => void
  ): void;
  public describeAppInstanceUser(
    args: DescribeAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppInstanceUserCommandOutput) => void
  ): void;
  public describeAppInstanceUser(
    args: DescribeAppInstanceUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppInstanceUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppInstanceUserCommandOutput) => void
  ): Promise<DescribeAppInstanceUserCommandOutput> | void {
    const command = new DescribeAppInstanceUserCommand(args);
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
   * <p>Gets the retention settings for an <code>AppInstance</code>.</p>
   */
  public getAppInstanceRetentionSettings(
    args: GetAppInstanceRetentionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppInstanceRetentionSettingsCommandOutput>;
  public getAppInstanceRetentionSettings(
    args: GetAppInstanceRetentionSettingsCommandInput,
    cb: (err: any, data?: GetAppInstanceRetentionSettingsCommandOutput) => void
  ): void;
  public getAppInstanceRetentionSettings(
    args: GetAppInstanceRetentionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppInstanceRetentionSettingsCommandOutput) => void
  ): void;
  public getAppInstanceRetentionSettings(
    args: GetAppInstanceRetentionSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAppInstanceRetentionSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetAppInstanceRetentionSettingsCommandOutput) => void
  ): Promise<GetAppInstanceRetentionSettingsCommandOutput> | void {
    const command = new GetAppInstanceRetentionSettingsCommand(args);
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
   * <p>Returns a list of the administrators in the <code>AppInstance</code>.</p>
   */
  public listAppInstanceAdmins(
    args: ListAppInstanceAdminsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInstanceAdminsCommandOutput>;
  public listAppInstanceAdmins(
    args: ListAppInstanceAdminsCommandInput,
    cb: (err: any, data?: ListAppInstanceAdminsCommandOutput) => void
  ): void;
  public listAppInstanceAdmins(
    args: ListAppInstanceAdminsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInstanceAdminsCommandOutput) => void
  ): void;
  public listAppInstanceAdmins(
    args: ListAppInstanceAdminsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppInstanceAdminsCommandOutput) => void),
    cb?: (err: any, data?: ListAppInstanceAdminsCommandOutput) => void
  ): Promise<ListAppInstanceAdminsCommandOutput> | void {
    const command = new ListAppInstanceAdminsCommand(args);
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
   * <p>Lists all Amazon Chime <code>AppInstance</code>s created under a single AWS
   *          account.</p>
   */
  public listAppInstances(
    args: ListAppInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInstancesCommandOutput>;
  public listAppInstances(
    args: ListAppInstancesCommandInput,
    cb: (err: any, data?: ListAppInstancesCommandOutput) => void
  ): void;
  public listAppInstances(
    args: ListAppInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInstancesCommandOutput) => void
  ): void;
  public listAppInstances(
    args: ListAppInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListAppInstancesCommandOutput) => void
  ): Promise<ListAppInstancesCommandOutput> | void {
    const command = new ListAppInstancesCommand(args);
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
   * <p>List all <code>AppInstanceUsers</code> created under a single
   *          <code>AppInstance</code>.</p>
   */
  public listAppInstanceUsers(
    args: ListAppInstanceUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInstanceUsersCommandOutput>;
  public listAppInstanceUsers(
    args: ListAppInstanceUsersCommandInput,
    cb: (err: any, data?: ListAppInstanceUsersCommandOutput) => void
  ): void;
  public listAppInstanceUsers(
    args: ListAppInstanceUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInstanceUsersCommandOutput) => void
  ): void;
  public listAppInstanceUsers(
    args: ListAppInstanceUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppInstanceUsersCommandOutput) => void),
    cb?: (err: any, data?: ListAppInstanceUsersCommandOutput) => void
  ): Promise<ListAppInstanceUsersCommandOutput> | void {
    const command = new ListAppInstanceUsersCommand(args);
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
   * <p>Sets the amount of time in days that a given <code>AppInstance</code> retains
   *          data.</p>
   */
  public putAppInstanceRetentionSettings(
    args: PutAppInstanceRetentionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppInstanceRetentionSettingsCommandOutput>;
  public putAppInstanceRetentionSettings(
    args: PutAppInstanceRetentionSettingsCommandInput,
    cb: (err: any, data?: PutAppInstanceRetentionSettingsCommandOutput) => void
  ): void;
  public putAppInstanceRetentionSettings(
    args: PutAppInstanceRetentionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppInstanceRetentionSettingsCommandOutput) => void
  ): void;
  public putAppInstanceRetentionSettings(
    args: PutAppInstanceRetentionSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAppInstanceRetentionSettingsCommandOutput) => void),
    cb?: (err: any, data?: PutAppInstanceRetentionSettingsCommandOutput) => void
  ): Promise<PutAppInstanceRetentionSettingsCommandOutput> | void {
    const command = new PutAppInstanceRetentionSettingsCommand(args);
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
   * <p>Updates <code>AppInstance</code> metadata.</p>
   */
  public updateAppInstance(
    args: UpdateAppInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppInstanceCommandOutput>;
  public updateAppInstance(
    args: UpdateAppInstanceCommandInput,
    cb: (err: any, data?: UpdateAppInstanceCommandOutput) => void
  ): void;
  public updateAppInstance(
    args: UpdateAppInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppInstanceCommandOutput) => void
  ): void;
  public updateAppInstance(
    args: UpdateAppInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAppInstanceCommandOutput) => void),
    cb?: (err: any, data?: UpdateAppInstanceCommandOutput) => void
  ): Promise<UpdateAppInstanceCommandOutput> | void {
    const command = new UpdateAppInstanceCommand(args);
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
   * <p>Updates the details of an <code>AppInstanceUser</code>. You can update names and
   *          metadata.</p>
   */
  public updateAppInstanceUser(
    args: UpdateAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppInstanceUserCommandOutput>;
  public updateAppInstanceUser(
    args: UpdateAppInstanceUserCommandInput,
    cb: (err: any, data?: UpdateAppInstanceUserCommandOutput) => void
  ): void;
  public updateAppInstanceUser(
    args: UpdateAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppInstanceUserCommandOutput) => void
  ): void;
  public updateAppInstanceUser(
    args: UpdateAppInstanceUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAppInstanceUserCommandOutput) => void),
    cb?: (err: any, data?: UpdateAppInstanceUserCommandOutput) => void
  ): Promise<UpdateAppInstanceUserCommandOutput> | void {
    const command = new UpdateAppInstanceUserCommand(args);
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
