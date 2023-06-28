// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ChimeSDKIdentityClient, ChimeSDKIdentityClientConfig } from "./ChimeSDKIdentityClient";
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

const commands = {
  CreateAppInstanceCommand,
  CreateAppInstanceAdminCommand,
  CreateAppInstanceBotCommand,
  CreateAppInstanceUserCommand,
  DeleteAppInstanceCommand,
  DeleteAppInstanceAdminCommand,
  DeleteAppInstanceBotCommand,
  DeleteAppInstanceUserCommand,
  DeregisterAppInstanceUserEndpointCommand,
  DescribeAppInstanceCommand,
  DescribeAppInstanceAdminCommand,
  DescribeAppInstanceBotCommand,
  DescribeAppInstanceUserCommand,
  DescribeAppInstanceUserEndpointCommand,
  GetAppInstanceRetentionSettingsCommand,
  ListAppInstanceAdminsCommand,
  ListAppInstanceBotsCommand,
  ListAppInstancesCommand,
  ListAppInstanceUserEndpointsCommand,
  ListAppInstanceUsersCommand,
  ListTagsForResourceCommand,
  PutAppInstanceRetentionSettingsCommand,
  PutAppInstanceUserExpirationSettingsCommand,
  RegisterAppInstanceUserEndpointCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAppInstanceCommand,
  UpdateAppInstanceBotCommand,
  UpdateAppInstanceUserCommand,
  UpdateAppInstanceUserEndpointCommand,
};

export interface ChimeSDKIdentity {
  /**
   * @see {@link CreateAppInstanceCommand}
   */
  createAppInstance(
    args: CreateAppInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppInstanceCommandOutput>;
  createAppInstance(
    args: CreateAppInstanceCommandInput,
    cb: (err: any, data?: CreateAppInstanceCommandOutput) => void
  ): void;
  createAppInstance(
    args: CreateAppInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppInstanceAdminCommand}
   */
  createAppInstanceAdmin(
    args: CreateAppInstanceAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppInstanceAdminCommandOutput>;
  createAppInstanceAdmin(
    args: CreateAppInstanceAdminCommandInput,
    cb: (err: any, data?: CreateAppInstanceAdminCommandOutput) => void
  ): void;
  createAppInstanceAdmin(
    args: CreateAppInstanceAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppInstanceAdminCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppInstanceBotCommand}
   */
  createAppInstanceBot(
    args: CreateAppInstanceBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppInstanceBotCommandOutput>;
  createAppInstanceBot(
    args: CreateAppInstanceBotCommandInput,
    cb: (err: any, data?: CreateAppInstanceBotCommandOutput) => void
  ): void;
  createAppInstanceBot(
    args: CreateAppInstanceBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppInstanceBotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppInstanceUserCommand}
   */
  createAppInstanceUser(
    args: CreateAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppInstanceUserCommandOutput>;
  createAppInstanceUser(
    args: CreateAppInstanceUserCommandInput,
    cb: (err: any, data?: CreateAppInstanceUserCommandOutput) => void
  ): void;
  createAppInstanceUser(
    args: CreateAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppInstanceUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppInstanceCommand}
   */
  deleteAppInstance(
    args: DeleteAppInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceCommandOutput>;
  deleteAppInstance(
    args: DeleteAppInstanceCommandInput,
    cb: (err: any, data?: DeleteAppInstanceCommandOutput) => void
  ): void;
  deleteAppInstance(
    args: DeleteAppInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppInstanceAdminCommand}
   */
  deleteAppInstanceAdmin(
    args: DeleteAppInstanceAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceAdminCommandOutput>;
  deleteAppInstanceAdmin(
    args: DeleteAppInstanceAdminCommandInput,
    cb: (err: any, data?: DeleteAppInstanceAdminCommandOutput) => void
  ): void;
  deleteAppInstanceAdmin(
    args: DeleteAppInstanceAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceAdminCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppInstanceBotCommand}
   */
  deleteAppInstanceBot(
    args: DeleteAppInstanceBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceBotCommandOutput>;
  deleteAppInstanceBot(
    args: DeleteAppInstanceBotCommandInput,
    cb: (err: any, data?: DeleteAppInstanceBotCommandOutput) => void
  ): void;
  deleteAppInstanceBot(
    args: DeleteAppInstanceBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceBotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppInstanceUserCommand}
   */
  deleteAppInstanceUser(
    args: DeleteAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceUserCommandOutput>;
  deleteAppInstanceUser(
    args: DeleteAppInstanceUserCommandInput,
    cb: (err: any, data?: DeleteAppInstanceUserCommandOutput) => void
  ): void;
  deleteAppInstanceUser(
    args: DeleteAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterAppInstanceUserEndpointCommand}
   */
  deregisterAppInstanceUserEndpoint(
    args: DeregisterAppInstanceUserEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterAppInstanceUserEndpointCommandOutput>;
  deregisterAppInstanceUserEndpoint(
    args: DeregisterAppInstanceUserEndpointCommandInput,
    cb: (err: any, data?: DeregisterAppInstanceUserEndpointCommandOutput) => void
  ): void;
  deregisterAppInstanceUserEndpoint(
    args: DeregisterAppInstanceUserEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterAppInstanceUserEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppInstanceCommand}
   */
  describeAppInstance(
    args: DescribeAppInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppInstanceCommandOutput>;
  describeAppInstance(
    args: DescribeAppInstanceCommandInput,
    cb: (err: any, data?: DescribeAppInstanceCommandOutput) => void
  ): void;
  describeAppInstance(
    args: DescribeAppInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppInstanceAdminCommand}
   */
  describeAppInstanceAdmin(
    args: DescribeAppInstanceAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppInstanceAdminCommandOutput>;
  describeAppInstanceAdmin(
    args: DescribeAppInstanceAdminCommandInput,
    cb: (err: any, data?: DescribeAppInstanceAdminCommandOutput) => void
  ): void;
  describeAppInstanceAdmin(
    args: DescribeAppInstanceAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppInstanceAdminCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppInstanceBotCommand}
   */
  describeAppInstanceBot(
    args: DescribeAppInstanceBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppInstanceBotCommandOutput>;
  describeAppInstanceBot(
    args: DescribeAppInstanceBotCommandInput,
    cb: (err: any, data?: DescribeAppInstanceBotCommandOutput) => void
  ): void;
  describeAppInstanceBot(
    args: DescribeAppInstanceBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppInstanceBotCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppInstanceUserCommand}
   */
  describeAppInstanceUser(
    args: DescribeAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppInstanceUserCommandOutput>;
  describeAppInstanceUser(
    args: DescribeAppInstanceUserCommandInput,
    cb: (err: any, data?: DescribeAppInstanceUserCommandOutput) => void
  ): void;
  describeAppInstanceUser(
    args: DescribeAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppInstanceUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppInstanceUserEndpointCommand}
   */
  describeAppInstanceUserEndpoint(
    args: DescribeAppInstanceUserEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppInstanceUserEndpointCommandOutput>;
  describeAppInstanceUserEndpoint(
    args: DescribeAppInstanceUserEndpointCommandInput,
    cb: (err: any, data?: DescribeAppInstanceUserEndpointCommandOutput) => void
  ): void;
  describeAppInstanceUserEndpoint(
    args: DescribeAppInstanceUserEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppInstanceUserEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppInstanceRetentionSettingsCommand}
   */
  getAppInstanceRetentionSettings(
    args: GetAppInstanceRetentionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppInstanceRetentionSettingsCommandOutput>;
  getAppInstanceRetentionSettings(
    args: GetAppInstanceRetentionSettingsCommandInput,
    cb: (err: any, data?: GetAppInstanceRetentionSettingsCommandOutput) => void
  ): void;
  getAppInstanceRetentionSettings(
    args: GetAppInstanceRetentionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppInstanceRetentionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppInstanceAdminsCommand}
   */
  listAppInstanceAdmins(
    args: ListAppInstanceAdminsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInstanceAdminsCommandOutput>;
  listAppInstanceAdmins(
    args: ListAppInstanceAdminsCommandInput,
    cb: (err: any, data?: ListAppInstanceAdminsCommandOutput) => void
  ): void;
  listAppInstanceAdmins(
    args: ListAppInstanceAdminsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInstanceAdminsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppInstanceBotsCommand}
   */
  listAppInstanceBots(
    args: ListAppInstanceBotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInstanceBotsCommandOutput>;
  listAppInstanceBots(
    args: ListAppInstanceBotsCommandInput,
    cb: (err: any, data?: ListAppInstanceBotsCommandOutput) => void
  ): void;
  listAppInstanceBots(
    args: ListAppInstanceBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInstanceBotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppInstancesCommand}
   */
  listAppInstances(
    args: ListAppInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInstancesCommandOutput>;
  listAppInstances(
    args: ListAppInstancesCommandInput,
    cb: (err: any, data?: ListAppInstancesCommandOutput) => void
  ): void;
  listAppInstances(
    args: ListAppInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppInstanceUserEndpointsCommand}
   */
  listAppInstanceUserEndpoints(
    args: ListAppInstanceUserEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInstanceUserEndpointsCommandOutput>;
  listAppInstanceUserEndpoints(
    args: ListAppInstanceUserEndpointsCommandInput,
    cb: (err: any, data?: ListAppInstanceUserEndpointsCommandOutput) => void
  ): void;
  listAppInstanceUserEndpoints(
    args: ListAppInstanceUserEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInstanceUserEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppInstanceUsersCommand}
   */
  listAppInstanceUsers(
    args: ListAppInstanceUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInstanceUsersCommandOutput>;
  listAppInstanceUsers(
    args: ListAppInstanceUsersCommandInput,
    cb: (err: any, data?: ListAppInstanceUsersCommandOutput) => void
  ): void;
  listAppInstanceUsers(
    args: ListAppInstanceUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInstanceUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAppInstanceRetentionSettingsCommand}
   */
  putAppInstanceRetentionSettings(
    args: PutAppInstanceRetentionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppInstanceRetentionSettingsCommandOutput>;
  putAppInstanceRetentionSettings(
    args: PutAppInstanceRetentionSettingsCommandInput,
    cb: (err: any, data?: PutAppInstanceRetentionSettingsCommandOutput) => void
  ): void;
  putAppInstanceRetentionSettings(
    args: PutAppInstanceRetentionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppInstanceRetentionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAppInstanceUserExpirationSettingsCommand}
   */
  putAppInstanceUserExpirationSettings(
    args: PutAppInstanceUserExpirationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppInstanceUserExpirationSettingsCommandOutput>;
  putAppInstanceUserExpirationSettings(
    args: PutAppInstanceUserExpirationSettingsCommandInput,
    cb: (err: any, data?: PutAppInstanceUserExpirationSettingsCommandOutput) => void
  ): void;
  putAppInstanceUserExpirationSettings(
    args: PutAppInstanceUserExpirationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppInstanceUserExpirationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterAppInstanceUserEndpointCommand}
   */
  registerAppInstanceUserEndpoint(
    args: RegisterAppInstanceUserEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterAppInstanceUserEndpointCommandOutput>;
  registerAppInstanceUserEndpoint(
    args: RegisterAppInstanceUserEndpointCommandInput,
    cb: (err: any, data?: RegisterAppInstanceUserEndpointCommandOutput) => void
  ): void;
  registerAppInstanceUserEndpoint(
    args: RegisterAppInstanceUserEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterAppInstanceUserEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppInstanceCommand}
   */
  updateAppInstance(
    args: UpdateAppInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppInstanceCommandOutput>;
  updateAppInstance(
    args: UpdateAppInstanceCommandInput,
    cb: (err: any, data?: UpdateAppInstanceCommandOutput) => void
  ): void;
  updateAppInstance(
    args: UpdateAppInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppInstanceBotCommand}
   */
  updateAppInstanceBot(
    args: UpdateAppInstanceBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppInstanceBotCommandOutput>;
  updateAppInstanceBot(
    args: UpdateAppInstanceBotCommandInput,
    cb: (err: any, data?: UpdateAppInstanceBotCommandOutput) => void
  ): void;
  updateAppInstanceBot(
    args: UpdateAppInstanceBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppInstanceBotCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppInstanceUserCommand}
   */
  updateAppInstanceUser(
    args: UpdateAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppInstanceUserCommandOutput>;
  updateAppInstanceUser(
    args: UpdateAppInstanceUserCommandInput,
    cb: (err: any, data?: UpdateAppInstanceUserCommandOutput) => void
  ): void;
  updateAppInstanceUser(
    args: UpdateAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppInstanceUserCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppInstanceUserEndpointCommand}
   */
  updateAppInstanceUserEndpoint(
    args: UpdateAppInstanceUserEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppInstanceUserEndpointCommandOutput>;
  updateAppInstanceUserEndpoint(
    args: UpdateAppInstanceUserEndpointCommandInput,
    cb: (err: any, data?: UpdateAppInstanceUserEndpointCommandOutput) => void
  ): void;
  updateAppInstanceUserEndpoint(
    args: UpdateAppInstanceUserEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppInstanceUserEndpointCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The Amazon Chime SDK Identity APIs in this section allow software developers to create
 *          and manage unique instances of their messaging applications. These APIs provide the
 *          overarching framework for creating and sending messages. For more information about the
 *          identity APIs, refer to <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Identity.html">Amazon Chime SDK identity</a>.</p>
 */
export class ChimeSDKIdentity extends ChimeSDKIdentityClient implements ChimeSDKIdentity {}
createAggregatedClient(commands, ChimeSDKIdentity);
