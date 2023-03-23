// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { ChimeSDKIdentityClient } from "./ChimeSDKIdentityClient";
import {
  CreateAppInstanceAdminCommand,
  CreateAppInstanceAdminCommandInput,
  CreateAppInstanceAdminCommandOutput,
} from "./commands/CreateAppInstanceAdminCommand";
import {
  CreateAppInstanceBotCommand,
  CreateAppInstanceBotCommandInput,
  CreateAppInstanceBotCommandOutput,
} from "./commands/CreateAppInstanceBotCommand";
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
  DeleteAppInstanceBotCommand,
  DeleteAppInstanceBotCommandInput,
  DeleteAppInstanceBotCommandOutput,
} from "./commands/DeleteAppInstanceBotCommand";
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
  DeregisterAppInstanceUserEndpointCommand,
  DeregisterAppInstanceUserEndpointCommandInput,
  DeregisterAppInstanceUserEndpointCommandOutput,
} from "./commands/DeregisterAppInstanceUserEndpointCommand";
import {
  DescribeAppInstanceAdminCommand,
  DescribeAppInstanceAdminCommandInput,
  DescribeAppInstanceAdminCommandOutput,
} from "./commands/DescribeAppInstanceAdminCommand";
import {
  DescribeAppInstanceBotCommand,
  DescribeAppInstanceBotCommandInput,
  DescribeAppInstanceBotCommandOutput,
} from "./commands/DescribeAppInstanceBotCommand";
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
  DescribeAppInstanceUserEndpointCommand,
  DescribeAppInstanceUserEndpointCommandInput,
  DescribeAppInstanceUserEndpointCommandOutput,
} from "./commands/DescribeAppInstanceUserEndpointCommand";
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
  ListAppInstanceBotsCommand,
  ListAppInstanceBotsCommandInput,
  ListAppInstanceBotsCommandOutput,
} from "./commands/ListAppInstanceBotsCommand";
import {
  ListAppInstancesCommand,
  ListAppInstancesCommandInput,
  ListAppInstancesCommandOutput,
} from "./commands/ListAppInstancesCommand";
import {
  ListAppInstanceUserEndpointsCommand,
  ListAppInstanceUserEndpointsCommandInput,
  ListAppInstanceUserEndpointsCommandOutput,
} from "./commands/ListAppInstanceUserEndpointsCommand";
import {
  ListAppInstanceUsersCommand,
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput,
} from "./commands/ListAppInstanceUsersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutAppInstanceRetentionSettingsCommand,
  PutAppInstanceRetentionSettingsCommandInput,
  PutAppInstanceRetentionSettingsCommandOutput,
} from "./commands/PutAppInstanceRetentionSettingsCommand";
import {
  PutAppInstanceUserExpirationSettingsCommand,
  PutAppInstanceUserExpirationSettingsCommandInput,
  PutAppInstanceUserExpirationSettingsCommandOutput,
} from "./commands/PutAppInstanceUserExpirationSettingsCommand";
import {
  RegisterAppInstanceUserEndpointCommand,
  RegisterAppInstanceUserEndpointCommandInput,
  RegisterAppInstanceUserEndpointCommandOutput,
} from "./commands/RegisterAppInstanceUserEndpointCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAppInstanceBotCommand,
  UpdateAppInstanceBotCommandInput,
  UpdateAppInstanceBotCommandOutput,
} from "./commands/UpdateAppInstanceBotCommand";
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
import {
  UpdateAppInstanceUserEndpointCommand,
  UpdateAppInstanceUserEndpointCommandInput,
  UpdateAppInstanceUserEndpointCommandOutput,
} from "./commands/UpdateAppInstanceUserEndpointCommand";

/**
 * @public
 * <p>The Amazon Chime SDK Identity APIs in this section allow software developers to create
 *          and manage unique instances of their messaging applications. These APIs provide the
 *          overarching framework for creating and sending messages. For more information about the
 *          identity APIs, refer to <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Identity.html">Amazon Chime SDK identity</a>.</p>
 */
export class ChimeSDKIdentity extends ChimeSDKIdentityClient {
  /**
   * @public
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
   * @public
   * <p>Promotes an <code>AppInstanceUser</code> or <code>AppInstanceBot</code> to an
   *          <code>AppInstanceAdmin</code>. The
   *          promoted entity can perform the following actions. </p>
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
   *          <p>Only an <code>AppInstanceUser</code> and <code>AppInstanceBot</code> can be promoted to an <code>AppInstanceAdmin</code>
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
   * @public
   * <p>Creates a bot under an Amazon Chime <code>AppInstance</code>. The request consists of a
   *          unique <code>Configuration</code> and <code>Name</code> for that bot.</p>
   */
  public createAppInstanceBot(
    args: CreateAppInstanceBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppInstanceBotCommandOutput>;
  public createAppInstanceBot(
    args: CreateAppInstanceBotCommandInput,
    cb: (err: any, data?: CreateAppInstanceBotCommandOutput) => void
  ): void;
  public createAppInstanceBot(
    args: CreateAppInstanceBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppInstanceBotCommandOutput) => void
  ): void;
  public createAppInstanceBot(
    args: CreateAppInstanceBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAppInstanceBotCommandOutput) => void),
    cb?: (err: any, data?: CreateAppInstanceBotCommandOutput) => void
  ): Promise<CreateAppInstanceBotCommandOutput> | void {
    const command = new CreateAppInstanceBotCommand(args);
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
   * @public
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
   * @public
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
   * @public
   * <p>Demotes an <code>AppInstanceAdmin</code> to an <code>AppInstanceUser</code> or
   *          <code>AppInstanceBot</code>. This action
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
   * @public
   * <p>Deletes an <code>AppInstanceBot</code>.</p>
   */
  public deleteAppInstanceBot(
    args: DeleteAppInstanceBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceBotCommandOutput>;
  public deleteAppInstanceBot(
    args: DeleteAppInstanceBotCommandInput,
    cb: (err: any, data?: DeleteAppInstanceBotCommandOutput) => void
  ): void;
  public deleteAppInstanceBot(
    args: DeleteAppInstanceBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceBotCommandOutput) => void
  ): void;
  public deleteAppInstanceBot(
    args: DeleteAppInstanceBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppInstanceBotCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppInstanceBotCommandOutput) => void
  ): Promise<DeleteAppInstanceBotCommandOutput> | void {
    const command = new DeleteAppInstanceBotCommand(args);
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
   * @public
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
   * @public
   * <p>Deregisters an <code>AppInstanceUserEndpoint</code>.</p>
   */
  public deregisterAppInstanceUserEndpoint(
    args: DeregisterAppInstanceUserEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterAppInstanceUserEndpointCommandOutput>;
  public deregisterAppInstanceUserEndpoint(
    args: DeregisterAppInstanceUserEndpointCommandInput,
    cb: (err: any, data?: DeregisterAppInstanceUserEndpointCommandOutput) => void
  ): void;
  public deregisterAppInstanceUserEndpoint(
    args: DeregisterAppInstanceUserEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterAppInstanceUserEndpointCommandOutput) => void
  ): void;
  public deregisterAppInstanceUserEndpoint(
    args: DeregisterAppInstanceUserEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterAppInstanceUserEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeregisterAppInstanceUserEndpointCommandOutput) => void
  ): Promise<DeregisterAppInstanceUserEndpointCommandOutput> | void {
    const command = new DeregisterAppInstanceUserEndpointCommand(args);
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
   * @public
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
   * @public
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
   * @public
   * <p>The <code>AppInstanceBot's</code> information.</p>
   */
  public describeAppInstanceBot(
    args: DescribeAppInstanceBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppInstanceBotCommandOutput>;
  public describeAppInstanceBot(
    args: DescribeAppInstanceBotCommandInput,
    cb: (err: any, data?: DescribeAppInstanceBotCommandOutput) => void
  ): void;
  public describeAppInstanceBot(
    args: DescribeAppInstanceBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppInstanceBotCommandOutput) => void
  ): void;
  public describeAppInstanceBot(
    args: DescribeAppInstanceBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppInstanceBotCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppInstanceBotCommandOutput) => void
  ): Promise<DescribeAppInstanceBotCommandOutput> | void {
    const command = new DescribeAppInstanceBotCommand(args);
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
   * @public
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
   * @public
   * <p>Returns the full details of an <code>AppInstanceUserEndpoint</code>.</p>
   */
  public describeAppInstanceUserEndpoint(
    args: DescribeAppInstanceUserEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppInstanceUserEndpointCommandOutput>;
  public describeAppInstanceUserEndpoint(
    args: DescribeAppInstanceUserEndpointCommandInput,
    cb: (err: any, data?: DescribeAppInstanceUserEndpointCommandOutput) => void
  ): void;
  public describeAppInstanceUserEndpoint(
    args: DescribeAppInstanceUserEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppInstanceUserEndpointCommandOutput) => void
  ): void;
  public describeAppInstanceUserEndpoint(
    args: DescribeAppInstanceUserEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppInstanceUserEndpointCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppInstanceUserEndpointCommandOutput) => void
  ): Promise<DescribeAppInstanceUserEndpointCommandOutput> | void {
    const command = new DescribeAppInstanceUserEndpointCommand(args);
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
   * @public
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
   * @public
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
   * @public
   * <p>Lists all <code>AppInstanceBots</code> created under a single <code>AppInstance</code>.</p>
   */
  public listAppInstanceBots(
    args: ListAppInstanceBotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInstanceBotsCommandOutput>;
  public listAppInstanceBots(
    args: ListAppInstanceBotsCommandInput,
    cb: (err: any, data?: ListAppInstanceBotsCommandOutput) => void
  ): void;
  public listAppInstanceBots(
    args: ListAppInstanceBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInstanceBotsCommandOutput) => void
  ): void;
  public listAppInstanceBots(
    args: ListAppInstanceBotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppInstanceBotsCommandOutput) => void),
    cb?: (err: any, data?: ListAppInstanceBotsCommandOutput) => void
  ): Promise<ListAppInstanceBotsCommandOutput> | void {
    const command = new ListAppInstanceBotsCommand(args);
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
   * @public
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
   * @public
   * <p>Lists all the <code>AppInstanceUserEndpoints</code> created under a single <code>AppInstanceUser</code>.</p>
   */
  public listAppInstanceUserEndpoints(
    args: ListAppInstanceUserEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInstanceUserEndpointsCommandOutput>;
  public listAppInstanceUserEndpoints(
    args: ListAppInstanceUserEndpointsCommandInput,
    cb: (err: any, data?: ListAppInstanceUserEndpointsCommandOutput) => void
  ): void;
  public listAppInstanceUserEndpoints(
    args: ListAppInstanceUserEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInstanceUserEndpointsCommandOutput) => void
  ): void;
  public listAppInstanceUserEndpoints(
    args: ListAppInstanceUserEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppInstanceUserEndpointsCommandOutput) => void),
    cb?: (err: any, data?: ListAppInstanceUserEndpointsCommandOutput) => void
  ): Promise<ListAppInstanceUserEndpointsCommandOutput> | void {
    const command = new ListAppInstanceUserEndpointsCommand(args);
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
   * @public
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
   * @public
   * <p>Lists the tags applied to an Amazon Chime SDK identity resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * @public
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
   * @public
   * <p>Sets the number of days before the <code>AppInstanceUser</code> is automatically deleted.</p>
   *          <note>
   *             <p>A background process deletes expired <code>AppInstanceUsers</code> within 6 hours of expiration.
   *             Actual deletion times may vary.</p>
   *             <p>Expired <code>AppInstanceUsers</code> that have not yet been deleted appear as active, and you can update
   *             their expiration settings. The system honors the new settings.</p>
   *          </note>
   */
  public putAppInstanceUserExpirationSettings(
    args: PutAppInstanceUserExpirationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppInstanceUserExpirationSettingsCommandOutput>;
  public putAppInstanceUserExpirationSettings(
    args: PutAppInstanceUserExpirationSettingsCommandInput,
    cb: (err: any, data?: PutAppInstanceUserExpirationSettingsCommandOutput) => void
  ): void;
  public putAppInstanceUserExpirationSettings(
    args: PutAppInstanceUserExpirationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppInstanceUserExpirationSettingsCommandOutput) => void
  ): void;
  public putAppInstanceUserExpirationSettings(
    args: PutAppInstanceUserExpirationSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAppInstanceUserExpirationSettingsCommandOutput) => void),
    cb?: (err: any, data?: PutAppInstanceUserExpirationSettingsCommandOutput) => void
  ): Promise<PutAppInstanceUserExpirationSettingsCommandOutput> | void {
    const command = new PutAppInstanceUserExpirationSettingsCommand(args);
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
   * @public
   * <p>Registers an endpoint under an Amazon Chime <code>AppInstanceUser</code>. The endpoint receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user.</p>
   */
  public registerAppInstanceUserEndpoint(
    args: RegisterAppInstanceUserEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterAppInstanceUserEndpointCommandOutput>;
  public registerAppInstanceUserEndpoint(
    args: RegisterAppInstanceUserEndpointCommandInput,
    cb: (err: any, data?: RegisterAppInstanceUserEndpointCommandOutput) => void
  ): void;
  public registerAppInstanceUserEndpoint(
    args: RegisterAppInstanceUserEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterAppInstanceUserEndpointCommandOutput) => void
  ): void;
  public registerAppInstanceUserEndpoint(
    args: RegisterAppInstanceUserEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterAppInstanceUserEndpointCommandOutput) => void),
    cb?: (err: any, data?: RegisterAppInstanceUserEndpointCommandOutput) => void
  ): Promise<RegisterAppInstanceUserEndpointCommandOutput> | void {
    const command = new RegisterAppInstanceUserEndpointCommand(args);
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
   * @public
   * <p>Applies the specified tags to the specified Amazon Chime SDK identity resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * @public
   * <p>Removes the specified tags from the specified Amazon Chime SDK identity resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * @public
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
   * @public
   * <p>Updates the name and metadata of an <code>AppInstanceBot</code>.</p>
   */
  public updateAppInstanceBot(
    args: UpdateAppInstanceBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppInstanceBotCommandOutput>;
  public updateAppInstanceBot(
    args: UpdateAppInstanceBotCommandInput,
    cb: (err: any, data?: UpdateAppInstanceBotCommandOutput) => void
  ): void;
  public updateAppInstanceBot(
    args: UpdateAppInstanceBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppInstanceBotCommandOutput) => void
  ): void;
  public updateAppInstanceBot(
    args: UpdateAppInstanceBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAppInstanceBotCommandOutput) => void),
    cb?: (err: any, data?: UpdateAppInstanceBotCommandOutput) => void
  ): Promise<UpdateAppInstanceBotCommandOutput> | void {
    const command = new UpdateAppInstanceBotCommand(args);
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
   * @public
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

  /**
   * @public
   * <p>Updates the details of an <code>AppInstanceUserEndpoint</code>. You can update the name and <code>AllowMessage</code> values.</p>
   */
  public updateAppInstanceUserEndpoint(
    args: UpdateAppInstanceUserEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppInstanceUserEndpointCommandOutput>;
  public updateAppInstanceUserEndpoint(
    args: UpdateAppInstanceUserEndpointCommandInput,
    cb: (err: any, data?: UpdateAppInstanceUserEndpointCommandOutput) => void
  ): void;
  public updateAppInstanceUserEndpoint(
    args: UpdateAppInstanceUserEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppInstanceUserEndpointCommandOutput) => void
  ): void;
  public updateAppInstanceUserEndpoint(
    args: UpdateAppInstanceUserEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAppInstanceUserEndpointCommandOutput) => void),
    cb?: (err: any, data?: UpdateAppInstanceUserEndpointCommandOutput) => void
  ): Promise<UpdateAppInstanceUserEndpointCommandOutput> | void {
    const command = new UpdateAppInstanceUserEndpointCommand(args);
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
