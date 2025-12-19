// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchCreateUserCommand,
  BatchCreateUserCommandInput,
  BatchCreateUserCommandOutput,
} from "./commands/BatchCreateUserCommand";
import {
  BatchDeleteUserCommand,
  BatchDeleteUserCommandInput,
  BatchDeleteUserCommandOutput,
} from "./commands/BatchDeleteUserCommand";
import {
  BatchLookupUserUnameCommand,
  BatchLookupUserUnameCommandInput,
  BatchLookupUserUnameCommandOutput,
} from "./commands/BatchLookupUserUnameCommand";
import {
  BatchReinviteUserCommand,
  BatchReinviteUserCommandInput,
  BatchReinviteUserCommandOutput,
} from "./commands/BatchReinviteUserCommand";
import {
  BatchResetDevicesForUserCommand,
  BatchResetDevicesForUserCommandInput,
  BatchResetDevicesForUserCommandOutput,
} from "./commands/BatchResetDevicesForUserCommand";
import {
  BatchToggleUserSuspendStatusCommand,
  BatchToggleUserSuspendStatusCommandInput,
  BatchToggleUserSuspendStatusCommandOutput,
} from "./commands/BatchToggleUserSuspendStatusCommand";
import { CreateBotCommand, CreateBotCommandInput, CreateBotCommandOutput } from "./commands/CreateBotCommand";
import {
  CreateDataRetentionBotChallengeCommand,
  CreateDataRetentionBotChallengeCommandInput,
  CreateDataRetentionBotChallengeCommandOutput,
} from "./commands/CreateDataRetentionBotChallengeCommand";
import {
  CreateDataRetentionBotCommand,
  CreateDataRetentionBotCommandInput,
  CreateDataRetentionBotCommandOutput,
} from "./commands/CreateDataRetentionBotCommand";
import {
  CreateNetworkCommand,
  CreateNetworkCommandInput,
  CreateNetworkCommandOutput,
} from "./commands/CreateNetworkCommand";
import {
  CreateSecurityGroupCommand,
  CreateSecurityGroupCommandInput,
  CreateSecurityGroupCommandOutput,
} from "./commands/CreateSecurityGroupCommand";
import { DeleteBotCommand, DeleteBotCommandInput, DeleteBotCommandOutput } from "./commands/DeleteBotCommand";
import {
  DeleteDataRetentionBotCommand,
  DeleteDataRetentionBotCommandInput,
  DeleteDataRetentionBotCommandOutput,
} from "./commands/DeleteDataRetentionBotCommand";
import {
  DeleteNetworkCommand,
  DeleteNetworkCommandInput,
  DeleteNetworkCommandOutput,
} from "./commands/DeleteNetworkCommand";
import {
  DeleteSecurityGroupCommand,
  DeleteSecurityGroupCommandInput,
  DeleteSecurityGroupCommandOutput,
} from "./commands/DeleteSecurityGroupCommand";
import { GetBotCommand, GetBotCommandInput, GetBotCommandOutput } from "./commands/GetBotCommand";
import {
  GetBotsCountCommand,
  GetBotsCountCommandInput,
  GetBotsCountCommandOutput,
} from "./commands/GetBotsCountCommand";
import {
  GetDataRetentionBotCommand,
  GetDataRetentionBotCommandInput,
  GetDataRetentionBotCommandOutput,
} from "./commands/GetDataRetentionBotCommand";
import {
  GetGuestUserHistoryCountCommand,
  GetGuestUserHistoryCountCommandInput,
  GetGuestUserHistoryCountCommandOutput,
} from "./commands/GetGuestUserHistoryCountCommand";
import { GetNetworkCommand, GetNetworkCommandInput, GetNetworkCommandOutput } from "./commands/GetNetworkCommand";
import {
  GetNetworkSettingsCommand,
  GetNetworkSettingsCommandInput,
  GetNetworkSettingsCommandOutput,
} from "./commands/GetNetworkSettingsCommand";
import { GetOidcInfoCommand, GetOidcInfoCommandInput, GetOidcInfoCommandOutput } from "./commands/GetOidcInfoCommand";
import {
  GetSecurityGroupCommand,
  GetSecurityGroupCommandInput,
  GetSecurityGroupCommandOutput,
} from "./commands/GetSecurityGroupCommand";
import { GetUserCommand, GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import {
  GetUsersCountCommand,
  GetUsersCountCommandInput,
  GetUsersCountCommandOutput,
} from "./commands/GetUsersCountCommand";
import {
  ListBlockedGuestUsersCommand,
  ListBlockedGuestUsersCommandInput,
  ListBlockedGuestUsersCommandOutput,
} from "./commands/ListBlockedGuestUsersCommand";
import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import {
  ListDevicesForUserCommand,
  ListDevicesForUserCommandInput,
  ListDevicesForUserCommandOutput,
} from "./commands/ListDevicesForUserCommand";
import {
  ListGuestUsersCommand,
  ListGuestUsersCommandInput,
  ListGuestUsersCommandOutput,
} from "./commands/ListGuestUsersCommand";
import {
  ListNetworksCommand,
  ListNetworksCommandInput,
  ListNetworksCommandOutput,
} from "./commands/ListNetworksCommand";
import {
  ListSecurityGroupsCommand,
  ListSecurityGroupsCommandInput,
  ListSecurityGroupsCommandOutput,
} from "./commands/ListSecurityGroupsCommand";
import {
  ListSecurityGroupUsersCommand,
  ListSecurityGroupUsersCommandInput,
  ListSecurityGroupUsersCommandOutput,
} from "./commands/ListSecurityGroupUsersCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  RegisterOidcConfigCommand,
  RegisterOidcConfigCommandInput,
  RegisterOidcConfigCommandOutput,
} from "./commands/RegisterOidcConfigCommand";
import {
  RegisterOidcConfigTestCommand,
  RegisterOidcConfigTestCommandInput,
  RegisterOidcConfigTestCommandOutput,
} from "./commands/RegisterOidcConfigTestCommand";
import { UpdateBotCommand, UpdateBotCommandInput, UpdateBotCommandOutput } from "./commands/UpdateBotCommand";
import {
  UpdateDataRetentionCommand,
  UpdateDataRetentionCommandInput,
  UpdateDataRetentionCommandOutput,
} from "./commands/UpdateDataRetentionCommand";
import {
  UpdateGuestUserCommand,
  UpdateGuestUserCommandInput,
  UpdateGuestUserCommandOutput,
} from "./commands/UpdateGuestUserCommand";
import {
  UpdateNetworkCommand,
  UpdateNetworkCommandInput,
  UpdateNetworkCommandOutput,
} from "./commands/UpdateNetworkCommand";
import {
  UpdateNetworkSettingsCommand,
  UpdateNetworkSettingsCommandInput,
  UpdateNetworkSettingsCommandOutput,
} from "./commands/UpdateNetworkSettingsCommand";
import {
  UpdateSecurityGroupCommand,
  UpdateSecurityGroupCommandInput,
  UpdateSecurityGroupCommandOutput,
} from "./commands/UpdateSecurityGroupCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { WickrClient } from "./WickrClient";

const commands = {
  BatchCreateUserCommand,
  BatchDeleteUserCommand,
  BatchLookupUserUnameCommand,
  BatchReinviteUserCommand,
  BatchResetDevicesForUserCommand,
  BatchToggleUserSuspendStatusCommand,
  CreateBotCommand,
  CreateDataRetentionBotCommand,
  CreateDataRetentionBotChallengeCommand,
  CreateNetworkCommand,
  CreateSecurityGroupCommand,
  DeleteBotCommand,
  DeleteDataRetentionBotCommand,
  DeleteNetworkCommand,
  DeleteSecurityGroupCommand,
  GetBotCommand,
  GetBotsCountCommand,
  GetDataRetentionBotCommand,
  GetGuestUserHistoryCountCommand,
  GetNetworkCommand,
  GetNetworkSettingsCommand,
  GetOidcInfoCommand,
  GetSecurityGroupCommand,
  GetUserCommand,
  GetUsersCountCommand,
  ListBlockedGuestUsersCommand,
  ListBotsCommand,
  ListDevicesForUserCommand,
  ListGuestUsersCommand,
  ListNetworksCommand,
  ListSecurityGroupsCommand,
  ListSecurityGroupUsersCommand,
  ListUsersCommand,
  RegisterOidcConfigCommand,
  RegisterOidcConfigTestCommand,
  UpdateBotCommand,
  UpdateDataRetentionCommand,
  UpdateGuestUserCommand,
  UpdateNetworkCommand,
  UpdateNetworkSettingsCommand,
  UpdateSecurityGroupCommand,
  UpdateUserCommand,
};

export interface Wickr {
  /**
   * @see {@link BatchCreateUserCommand}
   */
  batchCreateUser(
    args: BatchCreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateUserCommandOutput>;
  batchCreateUser(args: BatchCreateUserCommandInput, cb: (err: any, data?: BatchCreateUserCommandOutput) => void): void;
  batchCreateUser(
    args: BatchCreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteUserCommand}
   */
  batchDeleteUser(
    args: BatchDeleteUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteUserCommandOutput>;
  batchDeleteUser(args: BatchDeleteUserCommandInput, cb: (err: any, data?: BatchDeleteUserCommandOutput) => void): void;
  batchDeleteUser(
    args: BatchDeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchLookupUserUnameCommand}
   */
  batchLookupUserUname(
    args: BatchLookupUserUnameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchLookupUserUnameCommandOutput>;
  batchLookupUserUname(
    args: BatchLookupUserUnameCommandInput,
    cb: (err: any, data?: BatchLookupUserUnameCommandOutput) => void
  ): void;
  batchLookupUserUname(
    args: BatchLookupUserUnameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchLookupUserUnameCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchReinviteUserCommand}
   */
  batchReinviteUser(
    args: BatchReinviteUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchReinviteUserCommandOutput>;
  batchReinviteUser(
    args: BatchReinviteUserCommandInput,
    cb: (err: any, data?: BatchReinviteUserCommandOutput) => void
  ): void;
  batchReinviteUser(
    args: BatchReinviteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchReinviteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchResetDevicesForUserCommand}
   */
  batchResetDevicesForUser(
    args: BatchResetDevicesForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchResetDevicesForUserCommandOutput>;
  batchResetDevicesForUser(
    args: BatchResetDevicesForUserCommandInput,
    cb: (err: any, data?: BatchResetDevicesForUserCommandOutput) => void
  ): void;
  batchResetDevicesForUser(
    args: BatchResetDevicesForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchResetDevicesForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchToggleUserSuspendStatusCommand}
   */
  batchToggleUserSuspendStatus(
    args: BatchToggleUserSuspendStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchToggleUserSuspendStatusCommandOutput>;
  batchToggleUserSuspendStatus(
    args: BatchToggleUserSuspendStatusCommandInput,
    cb: (err: any, data?: BatchToggleUserSuspendStatusCommandOutput) => void
  ): void;
  batchToggleUserSuspendStatus(
    args: BatchToggleUserSuspendStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchToggleUserSuspendStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBotCommand}
   */
  createBot(args: CreateBotCommandInput, options?: __HttpHandlerOptions): Promise<CreateBotCommandOutput>;
  createBot(args: CreateBotCommandInput, cb: (err: any, data?: CreateBotCommandOutput) => void): void;
  createBot(
    args: CreateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataRetentionBotCommand}
   */
  createDataRetentionBot(
    args: CreateDataRetentionBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataRetentionBotCommandOutput>;
  createDataRetentionBot(
    args: CreateDataRetentionBotCommandInput,
    cb: (err: any, data?: CreateDataRetentionBotCommandOutput) => void
  ): void;
  createDataRetentionBot(
    args: CreateDataRetentionBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataRetentionBotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataRetentionBotChallengeCommand}
   */
  createDataRetentionBotChallenge(
    args: CreateDataRetentionBotChallengeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataRetentionBotChallengeCommandOutput>;
  createDataRetentionBotChallenge(
    args: CreateDataRetentionBotChallengeCommandInput,
    cb: (err: any, data?: CreateDataRetentionBotChallengeCommandOutput) => void
  ): void;
  createDataRetentionBotChallenge(
    args: CreateDataRetentionBotChallengeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataRetentionBotChallengeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkCommand}
   */
  createNetwork(args: CreateNetworkCommandInput, options?: __HttpHandlerOptions): Promise<CreateNetworkCommandOutput>;
  createNetwork(args: CreateNetworkCommandInput, cb: (err: any, data?: CreateNetworkCommandOutput) => void): void;
  createNetwork(
    args: CreateNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecurityGroupCommand}
   */
  createSecurityGroup(
    args: CreateSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityGroupCommandOutput>;
  createSecurityGroup(
    args: CreateSecurityGroupCommandInput,
    cb: (err: any, data?: CreateSecurityGroupCommandOutput) => void
  ): void;
  createSecurityGroup(
    args: CreateSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotCommand}
   */
  deleteBot(args: DeleteBotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBotCommandOutput>;
  deleteBot(args: DeleteBotCommandInput, cb: (err: any, data?: DeleteBotCommandOutput) => void): void;
  deleteBot(
    args: DeleteBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataRetentionBotCommand}
   */
  deleteDataRetentionBot(
    args: DeleteDataRetentionBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataRetentionBotCommandOutput>;
  deleteDataRetentionBot(
    args: DeleteDataRetentionBotCommandInput,
    cb: (err: any, data?: DeleteDataRetentionBotCommandOutput) => void
  ): void;
  deleteDataRetentionBot(
    args: DeleteDataRetentionBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataRetentionBotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkCommand}
   */
  deleteNetwork(args: DeleteNetworkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNetworkCommandOutput>;
  deleteNetwork(args: DeleteNetworkCommandInput, cb: (err: any, data?: DeleteNetworkCommandOutput) => void): void;
  deleteNetwork(
    args: DeleteNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSecurityGroupCommand}
   */
  deleteSecurityGroup(
    args: DeleteSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityGroupCommandOutput>;
  deleteSecurityGroup(
    args: DeleteSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteSecurityGroupCommandOutput) => void
  ): void;
  deleteSecurityGroup(
    args: DeleteSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBotCommand}
   */
  getBot(args: GetBotCommandInput, options?: __HttpHandlerOptions): Promise<GetBotCommandOutput>;
  getBot(args: GetBotCommandInput, cb: (err: any, data?: GetBotCommandOutput) => void): void;
  getBot(
    args: GetBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBotsCountCommand}
   */
  getBotsCount(args: GetBotsCountCommandInput, options?: __HttpHandlerOptions): Promise<GetBotsCountCommandOutput>;
  getBotsCount(args: GetBotsCountCommandInput, cb: (err: any, data?: GetBotsCountCommandOutput) => void): void;
  getBotsCount(
    args: GetBotsCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotsCountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataRetentionBotCommand}
   */
  getDataRetentionBot(
    args: GetDataRetentionBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataRetentionBotCommandOutput>;
  getDataRetentionBot(
    args: GetDataRetentionBotCommandInput,
    cb: (err: any, data?: GetDataRetentionBotCommandOutput) => void
  ): void;
  getDataRetentionBot(
    args: GetDataRetentionBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataRetentionBotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGuestUserHistoryCountCommand}
   */
  getGuestUserHistoryCount(
    args: GetGuestUserHistoryCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGuestUserHistoryCountCommandOutput>;
  getGuestUserHistoryCount(
    args: GetGuestUserHistoryCountCommandInput,
    cb: (err: any, data?: GetGuestUserHistoryCountCommandOutput) => void
  ): void;
  getGuestUserHistoryCount(
    args: GetGuestUserHistoryCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGuestUserHistoryCountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkCommand}
   */
  getNetwork(args: GetNetworkCommandInput, options?: __HttpHandlerOptions): Promise<GetNetworkCommandOutput>;
  getNetwork(args: GetNetworkCommandInput, cb: (err: any, data?: GetNetworkCommandOutput) => void): void;
  getNetwork(
    args: GetNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkSettingsCommand}
   */
  getNetworkSettings(
    args: GetNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkSettingsCommandOutput>;
  getNetworkSettings(
    args: GetNetworkSettingsCommandInput,
    cb: (err: any, data?: GetNetworkSettingsCommandOutput) => void
  ): void;
  getNetworkSettings(
    args: GetNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOidcInfoCommand}
   */
  getOidcInfo(args: GetOidcInfoCommandInput, options?: __HttpHandlerOptions): Promise<GetOidcInfoCommandOutput>;
  getOidcInfo(args: GetOidcInfoCommandInput, cb: (err: any, data?: GetOidcInfoCommandOutput) => void): void;
  getOidcInfo(
    args: GetOidcInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOidcInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSecurityGroupCommand}
   */
  getSecurityGroup(
    args: GetSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecurityGroupCommandOutput>;
  getSecurityGroup(
    args: GetSecurityGroupCommandInput,
    cb: (err: any, data?: GetSecurityGroupCommandOutput) => void
  ): void;
  getSecurityGroup(
    args: GetSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(args: GetUserCommandInput, options?: __HttpHandlerOptions): Promise<GetUserCommandOutput>;
  getUser(args: GetUserCommandInput, cb: (err: any, data?: GetUserCommandOutput) => void): void;
  getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsersCountCommand}
   */
  getUsersCount(args: GetUsersCountCommandInput, options?: __HttpHandlerOptions): Promise<GetUsersCountCommandOutput>;
  getUsersCount(args: GetUsersCountCommandInput, cb: (err: any, data?: GetUsersCountCommandOutput) => void): void;
  getUsersCount(
    args: GetUsersCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsersCountCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBlockedGuestUsersCommand}
   */
  listBlockedGuestUsers(
    args: ListBlockedGuestUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBlockedGuestUsersCommandOutput>;
  listBlockedGuestUsers(
    args: ListBlockedGuestUsersCommandInput,
    cb: (err: any, data?: ListBlockedGuestUsersCommandOutput) => void
  ): void;
  listBlockedGuestUsers(
    args: ListBlockedGuestUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBlockedGuestUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotsCommand}
   */
  listBots(args: ListBotsCommandInput, options?: __HttpHandlerOptions): Promise<ListBotsCommandOutput>;
  listBots(args: ListBotsCommandInput, cb: (err: any, data?: ListBotsCommandOutput) => void): void;
  listBots(
    args: ListBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesForUserCommand}
   */
  listDevicesForUser(
    args: ListDevicesForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevicesForUserCommandOutput>;
  listDevicesForUser(
    args: ListDevicesForUserCommandInput,
    cb: (err: any, data?: ListDevicesForUserCommandOutput) => void
  ): void;
  listDevicesForUser(
    args: ListDevicesForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGuestUsersCommand}
   */
  listGuestUsers(
    args: ListGuestUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGuestUsersCommandOutput>;
  listGuestUsers(args: ListGuestUsersCommandInput, cb: (err: any, data?: ListGuestUsersCommandOutput) => void): void;
  listGuestUsers(
    args: ListGuestUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGuestUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworksCommand}
   */
  listNetworks(): Promise<ListNetworksCommandOutput>;
  listNetworks(args: ListNetworksCommandInput, options?: __HttpHandlerOptions): Promise<ListNetworksCommandOutput>;
  listNetworks(args: ListNetworksCommandInput, cb: (err: any, data?: ListNetworksCommandOutput) => void): void;
  listNetworks(
    args: ListNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityGroupsCommand}
   */
  listSecurityGroups(
    args: ListSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityGroupsCommandOutput>;
  listSecurityGroups(
    args: ListSecurityGroupsCommandInput,
    cb: (err: any, data?: ListSecurityGroupsCommandOutput) => void
  ): void;
  listSecurityGroups(
    args: ListSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityGroupUsersCommand}
   */
  listSecurityGroupUsers(
    args: ListSecurityGroupUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityGroupUsersCommandOutput>;
  listSecurityGroupUsers(
    args: ListSecurityGroupUsersCommandInput,
    cb: (err: any, data?: ListSecurityGroupUsersCommandOutput) => void
  ): void;
  listSecurityGroupUsers(
    args: ListSecurityGroupUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityGroupUsersCommandOutput) => void
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
   * @see {@link RegisterOidcConfigCommand}
   */
  registerOidcConfig(
    args: RegisterOidcConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterOidcConfigCommandOutput>;
  registerOidcConfig(
    args: RegisterOidcConfigCommandInput,
    cb: (err: any, data?: RegisterOidcConfigCommandOutput) => void
  ): void;
  registerOidcConfig(
    args: RegisterOidcConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterOidcConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterOidcConfigTestCommand}
   */
  registerOidcConfigTest(
    args: RegisterOidcConfigTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterOidcConfigTestCommandOutput>;
  registerOidcConfigTest(
    args: RegisterOidcConfigTestCommandInput,
    cb: (err: any, data?: RegisterOidcConfigTestCommandOutput) => void
  ): void;
  registerOidcConfigTest(
    args: RegisterOidcConfigTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterOidcConfigTestCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBotCommand}
   */
  updateBot(args: UpdateBotCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBotCommandOutput>;
  updateBot(args: UpdateBotCommandInput, cb: (err: any, data?: UpdateBotCommandOutput) => void): void;
  updateBot(
    args: UpdateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBotCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataRetentionCommand}
   */
  updateDataRetention(
    args: UpdateDataRetentionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataRetentionCommandOutput>;
  updateDataRetention(
    args: UpdateDataRetentionCommandInput,
    cb: (err: any, data?: UpdateDataRetentionCommandOutput) => void
  ): void;
  updateDataRetention(
    args: UpdateDataRetentionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataRetentionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGuestUserCommand}
   */
  updateGuestUser(
    args: UpdateGuestUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGuestUserCommandOutput>;
  updateGuestUser(args: UpdateGuestUserCommandInput, cb: (err: any, data?: UpdateGuestUserCommandOutput) => void): void;
  updateGuestUser(
    args: UpdateGuestUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGuestUserCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkCommand}
   */
  updateNetwork(args: UpdateNetworkCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNetworkCommandOutput>;
  updateNetwork(args: UpdateNetworkCommandInput, cb: (err: any, data?: UpdateNetworkCommandOutput) => void): void;
  updateNetwork(
    args: UpdateNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkSettingsCommand}
   */
  updateNetworkSettings(
    args: UpdateNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkSettingsCommandOutput>;
  updateNetworkSettings(
    args: UpdateNetworkSettingsCommandInput,
    cb: (err: any, data?: UpdateNetworkSettingsCommandOutput) => void
  ): void;
  updateNetworkSettings(
    args: UpdateNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityGroupCommand}
   */
  updateSecurityGroup(
    args: UpdateSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityGroupCommandOutput>;
  updateSecurityGroup(
    args: UpdateSecurityGroupCommandInput,
    cb: (err: any, data?: UpdateSecurityGroupCommandOutput) => void
  ): void;
  updateSecurityGroup(
    args: UpdateSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityGroupCommandOutput) => void
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
 * <p>Welcome to the <i>Amazon Web Services Wickr API Reference</i>.</p> <p>The Amazon Web Services Wickr application programming interface (API) is designed for administrators to perform key tasks, such as creating and managing Amazon Web Services Wickr, networks, users, security groups, bots and more. This guide provides detailed information about the Amazon Web Services Wickr API, including operations, types, inputs and outputs, and error codes. You can use an Amazon Web Services SDK, the Amazon Web Services Command Line Interface (Amazon Web Services CLI, or the REST API to make API calls for Amazon Web Services Wickr. </p> <p> <i>Using Amazon Web Services SDK</i> </p> <p>The SDK clients authenticate your requests by using access keys that you provide. For more information, see <a href="https://docs.aws.amazon.com/sdkref/latest/guide/access.html">Authentication and access using Amazon Web Services SDKs and tools</a> in the <i>Amazon Web Services SDKs and Tools Reference Guide</i>. </p> <p> <i>Using Amazon Web Services CLI</i> </p> <p>Use your access keys with the Amazon Web Services CLI to make API calls. For more information about setting up the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html">Getting started with the Amazon Web Services CLI</a> in the <i>Amazon Web Services Command Line Interface User Guide for Version 2</i>. </p> <p> <i>Using REST APIs</i> </p> <p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Web Services Wickr supports Signature Version 4. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>. </p> <p>Access and permissions to the APIs can be controlled by Amazon Web Services Identity and Access Management. The managed policy <a href="https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam-awsmanpol.html#security-iam-awsmanpol-AWSWickrFullAccess">Amazon Web ServicesWickrFullAccess</a> grants full administrative permission to the Amazon Web Services Wickr service APIs. For more information on restricting access to specific operations, see <a href="https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html">Identity and access management for Amazon Web Services Wickr </a> in the <i>Amazon Web Services Wickr Administration Guide</i>. </p> <p> <i>Types of Errors</i>:</p> <p>The Amazon Web Services Wickr APIs provide an HTTP interface. HTTP defines ranges of HTTP Status Codes for different types of error responses.</p> <ol> <li> <p>Client errors are indicated by HTTP Status Code class of 4xx</p> </li> <li> <p>Service errors are indicated by HTTP Status Code class of 5xx</p> </li> </ol> <p>In this reference guide, the documentation for each API has an Errors section that includes a brief discussion about HTTP status codes. We recommend looking there as part of your investigation when you get an error.</p>
 * @public
 */
export class Wickr extends WickrClient implements Wickr {}
createAggregatedClient(commands, Wickr);
