// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type BatchCreateUserCommandInput,
  type BatchCreateUserCommandOutput,
  BatchCreateUserCommand,
} from "./commands/BatchCreateUserCommand";
import {
  type BatchDeleteUserCommandInput,
  type BatchDeleteUserCommandOutput,
  BatchDeleteUserCommand,
} from "./commands/BatchDeleteUserCommand";
import {
  type BatchLookupUserUnameCommandInput,
  type BatchLookupUserUnameCommandOutput,
  BatchLookupUserUnameCommand,
} from "./commands/BatchLookupUserUnameCommand";
import {
  type BatchReinviteUserCommandInput,
  type BatchReinviteUserCommandOutput,
  BatchReinviteUserCommand,
} from "./commands/BatchReinviteUserCommand";
import {
  type BatchResetDevicesForUserCommandInput,
  type BatchResetDevicesForUserCommandOutput,
  BatchResetDevicesForUserCommand,
} from "./commands/BatchResetDevicesForUserCommand";
import {
  type BatchToggleUserSuspendStatusCommandInput,
  type BatchToggleUserSuspendStatusCommandOutput,
  BatchToggleUserSuspendStatusCommand,
} from "./commands/BatchToggleUserSuspendStatusCommand";
import { type CreateBotCommandInput, type CreateBotCommandOutput, CreateBotCommand } from "./commands/CreateBotCommand";
import {
  type CreateDataRetentionBotChallengeCommandInput,
  type CreateDataRetentionBotChallengeCommandOutput,
  CreateDataRetentionBotChallengeCommand,
} from "./commands/CreateDataRetentionBotChallengeCommand";
import {
  type CreateDataRetentionBotCommandInput,
  type CreateDataRetentionBotCommandOutput,
  CreateDataRetentionBotCommand,
} from "./commands/CreateDataRetentionBotCommand";
import {
  type CreateNetworkCommandInput,
  type CreateNetworkCommandOutput,
  CreateNetworkCommand,
} from "./commands/CreateNetworkCommand";
import {
  type CreateSecurityGroupCommandInput,
  type CreateSecurityGroupCommandOutput,
  CreateSecurityGroupCommand,
} from "./commands/CreateSecurityGroupCommand";
import { type DeleteBotCommandInput, type DeleteBotCommandOutput, DeleteBotCommand } from "./commands/DeleteBotCommand";
import {
  type DeleteDataRetentionBotCommandInput,
  type DeleteDataRetentionBotCommandOutput,
  DeleteDataRetentionBotCommand,
} from "./commands/DeleteDataRetentionBotCommand";
import {
  type DeleteNetworkCommandInput,
  type DeleteNetworkCommandOutput,
  DeleteNetworkCommand,
} from "./commands/DeleteNetworkCommand";
import {
  type DeleteSecurityGroupCommandInput,
  type DeleteSecurityGroupCommandOutput,
  DeleteSecurityGroupCommand,
} from "./commands/DeleteSecurityGroupCommand";
import { type GetBotCommandInput, type GetBotCommandOutput, GetBotCommand } from "./commands/GetBotCommand";
import {
  type GetBotsCountCommandInput,
  type GetBotsCountCommandOutput,
  GetBotsCountCommand,
} from "./commands/GetBotsCountCommand";
import {
  type GetDataRetentionBotCommandInput,
  type GetDataRetentionBotCommandOutput,
  GetDataRetentionBotCommand,
} from "./commands/GetDataRetentionBotCommand";
import {
  type GetGuestUserHistoryCountCommandInput,
  type GetGuestUserHistoryCountCommandOutput,
  GetGuestUserHistoryCountCommand,
} from "./commands/GetGuestUserHistoryCountCommand";
import {
  type GetNetworkCommandInput,
  type GetNetworkCommandOutput,
  GetNetworkCommand,
} from "./commands/GetNetworkCommand";
import {
  type GetNetworkSettingsCommandInput,
  type GetNetworkSettingsCommandOutput,
  GetNetworkSettingsCommand,
} from "./commands/GetNetworkSettingsCommand";
import {
  type GetOidcInfoCommandInput,
  type GetOidcInfoCommandOutput,
  GetOidcInfoCommand,
} from "./commands/GetOidcInfoCommand";
import {
  type GetOpentdfConfigCommandInput,
  type GetOpentdfConfigCommandOutput,
  GetOpentdfConfigCommand,
} from "./commands/GetOpentdfConfigCommand";
import {
  type GetSecurityGroupCommandInput,
  type GetSecurityGroupCommandOutput,
  GetSecurityGroupCommand,
} from "./commands/GetSecurityGroupCommand";
import { type GetUserCommandInput, type GetUserCommandOutput, GetUserCommand } from "./commands/GetUserCommand";
import {
  type GetUsersCountCommandInput,
  type GetUsersCountCommandOutput,
  GetUsersCountCommand,
} from "./commands/GetUsersCountCommand";
import {
  type ListBlockedGuestUsersCommandInput,
  type ListBlockedGuestUsersCommandOutput,
  ListBlockedGuestUsersCommand,
} from "./commands/ListBlockedGuestUsersCommand";
import { type ListBotsCommandInput, type ListBotsCommandOutput, ListBotsCommand } from "./commands/ListBotsCommand";
import {
  type ListDevicesForUserCommandInput,
  type ListDevicesForUserCommandOutput,
  ListDevicesForUserCommand,
} from "./commands/ListDevicesForUserCommand";
import {
  type ListGuestUsersCommandInput,
  type ListGuestUsersCommandOutput,
  ListGuestUsersCommand,
} from "./commands/ListGuestUsersCommand";
import {
  type ListNetworksCommandInput,
  type ListNetworksCommandOutput,
  ListNetworksCommand,
} from "./commands/ListNetworksCommand";
import {
  type ListSecurityGroupsCommandInput,
  type ListSecurityGroupsCommandOutput,
  ListSecurityGroupsCommand,
} from "./commands/ListSecurityGroupsCommand";
import {
  type ListSecurityGroupUsersCommandInput,
  type ListSecurityGroupUsersCommandOutput,
  ListSecurityGroupUsersCommand,
} from "./commands/ListSecurityGroupUsersCommand";
import { type ListUsersCommandInput, type ListUsersCommandOutput, ListUsersCommand } from "./commands/ListUsersCommand";
import {
  type RegisterOidcConfigCommandInput,
  type RegisterOidcConfigCommandOutput,
  RegisterOidcConfigCommand,
} from "./commands/RegisterOidcConfigCommand";
import {
  type RegisterOidcConfigTestCommandInput,
  type RegisterOidcConfigTestCommandOutput,
  RegisterOidcConfigTestCommand,
} from "./commands/RegisterOidcConfigTestCommand";
import {
  type RegisterOpentdfConfigCommandInput,
  type RegisterOpentdfConfigCommandOutput,
  RegisterOpentdfConfigCommand,
} from "./commands/RegisterOpentdfConfigCommand";
import { type UpdateBotCommandInput, type UpdateBotCommandOutput, UpdateBotCommand } from "./commands/UpdateBotCommand";
import {
  type UpdateDataRetentionCommandInput,
  type UpdateDataRetentionCommandOutput,
  UpdateDataRetentionCommand,
} from "./commands/UpdateDataRetentionCommand";
import {
  type UpdateGuestUserCommandInput,
  type UpdateGuestUserCommandOutput,
  UpdateGuestUserCommand,
} from "./commands/UpdateGuestUserCommand";
import {
  type UpdateNetworkCommandInput,
  type UpdateNetworkCommandOutput,
  UpdateNetworkCommand,
} from "./commands/UpdateNetworkCommand";
import {
  type UpdateNetworkSettingsCommandInput,
  type UpdateNetworkSettingsCommandOutput,
  UpdateNetworkSettingsCommand,
} from "./commands/UpdateNetworkSettingsCommand";
import {
  type UpdateSecurityGroupCommandInput,
  type UpdateSecurityGroupCommandOutput,
  UpdateSecurityGroupCommand,
} from "./commands/UpdateSecurityGroupCommand";
import {
  type UpdateUserCommandInput,
  type UpdateUserCommandOutput,
  UpdateUserCommand,
} from "./commands/UpdateUserCommand";
import { paginateListBlockedGuestUsers } from "./pagination/ListBlockedGuestUsersPaginator";
import { paginateListBots } from "./pagination/ListBotsPaginator";
import { paginateListDevicesForUser } from "./pagination/ListDevicesForUserPaginator";
import { paginateListGuestUsers } from "./pagination/ListGuestUsersPaginator";
import { paginateListNetworks } from "./pagination/ListNetworksPaginator";
import { paginateListSecurityGroups } from "./pagination/ListSecurityGroupsPaginator";
import { paginateListSecurityGroupUsers } from "./pagination/ListSecurityGroupUsersPaginator";
import { paginateListUsers } from "./pagination/ListUsersPaginator";
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
  GetOpentdfConfigCommand,
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
  RegisterOpentdfConfigCommand,
  UpdateBotCommand,
  UpdateDataRetentionCommand,
  UpdateGuestUserCommand,
  UpdateNetworkCommand,
  UpdateNetworkSettingsCommand,
  UpdateSecurityGroupCommand,
  UpdateUserCommand,
};
const paginators = {
  paginateListBlockedGuestUsers,
  paginateListBots,
  paginateListDevicesForUser,
  paginateListGuestUsers,
  paginateListNetworks,
  paginateListSecurityGroups,
  paginateListSecurityGroupUsers,
  paginateListUsers,
};

export interface Wickr {
  /**
   * @see {@link BatchCreateUserCommand}
   */
  batchCreateUser(
    args: BatchCreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateUserCommandOutput>;
  batchCreateUser(
    args: BatchCreateUserCommandInput,
    cb: (err: any, data?: BatchCreateUserCommandOutput) => void
  ): void;
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
  batchDeleteUser(
    args: BatchDeleteUserCommandInput,
    cb: (err: any, data?: BatchDeleteUserCommandOutput) => void
  ): void;
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
  createBot(
    args: CreateBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBotCommandOutput>;
  createBot(
    args: CreateBotCommandInput,
    cb: (err: any, data?: CreateBotCommandOutput) => void
  ): void;
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
  createNetwork(
    args: CreateNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkCommandOutput>;
  createNetwork(
    args: CreateNetworkCommandInput,
    cb: (err: any, data?: CreateNetworkCommandOutput) => void
  ): void;
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
  deleteBot(
    args: DeleteBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBotCommandOutput>;
  deleteBot(
    args: DeleteBotCommandInput,
    cb: (err: any, data?: DeleteBotCommandOutput) => void
  ): void;
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
  deleteNetwork(
    args: DeleteNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkCommandOutput>;
  deleteNetwork(
    args: DeleteNetworkCommandInput,
    cb: (err: any, data?: DeleteNetworkCommandOutput) => void
  ): void;
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
  getBot(
    args: GetBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBotCommandOutput>;
  getBot(
    args: GetBotCommandInput,
    cb: (err: any, data?: GetBotCommandOutput) => void
  ): void;
  getBot(
    args: GetBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBotsCountCommand}
   */
  getBotsCount(
    args: GetBotsCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBotsCountCommandOutput>;
  getBotsCount(
    args: GetBotsCountCommandInput,
    cb: (err: any, data?: GetBotsCountCommandOutput) => void
  ): void;
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
  getNetwork(
    args: GetNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkCommandOutput>;
  getNetwork(
    args: GetNetworkCommandInput,
    cb: (err: any, data?: GetNetworkCommandOutput) => void
  ): void;
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
  getOidcInfo(
    args: GetOidcInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOidcInfoCommandOutput>;
  getOidcInfo(
    args: GetOidcInfoCommandInput,
    cb: (err: any, data?: GetOidcInfoCommandOutput) => void
  ): void;
  getOidcInfo(
    args: GetOidcInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOidcInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOpentdfConfigCommand}
   */
  getOpentdfConfig(
    args: GetOpentdfConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOpentdfConfigCommandOutput>;
  getOpentdfConfig(
    args: GetOpentdfConfigCommandInput,
    cb: (err: any, data?: GetOpentdfConfigCommandOutput) => void
  ): void;
  getOpentdfConfig(
    args: GetOpentdfConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpentdfConfigCommandOutput) => void
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
  getUser(
    args: GetUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserCommandOutput>;
  getUser(
    args: GetUserCommandInput,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsersCountCommand}
   */
  getUsersCount(
    args: GetUsersCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsersCountCommandOutput>;
  getUsersCount(
    args: GetUsersCountCommandInput,
    cb: (err: any, data?: GetUsersCountCommandOutput) => void
  ): void;
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
  listBots(
    args: ListBotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBotsCommandOutput>;
  listBots(
    args: ListBotsCommandInput,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;
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
  listGuestUsers(
    args: ListGuestUsersCommandInput,
    cb: (err: any, data?: ListGuestUsersCommandOutput) => void
  ): void;
  listGuestUsers(
    args: ListGuestUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGuestUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworksCommand}
   */
  listNetworks(): Promise<ListNetworksCommandOutput>;
  listNetworks(
    args: ListNetworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworksCommandOutput>;
  listNetworks(
    args: ListNetworksCommandInput,
    cb: (err: any, data?: ListNetworksCommandOutput) => void
  ): void;
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
   * @see {@link RegisterOpentdfConfigCommand}
   */
  registerOpentdfConfig(
    args: RegisterOpentdfConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterOpentdfConfigCommandOutput>;
  registerOpentdfConfig(
    args: RegisterOpentdfConfigCommandInput,
    cb: (err: any, data?: RegisterOpentdfConfigCommandOutput) => void
  ): void;
  registerOpentdfConfig(
    args: RegisterOpentdfConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterOpentdfConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBotCommand}
   */
  updateBot(
    args: UpdateBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBotCommandOutput>;
  updateBot(
    args: UpdateBotCommandInput,
    cb: (err: any, data?: UpdateBotCommandOutput) => void
  ): void;
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
  updateGuestUser(
    args: UpdateGuestUserCommandInput,
    cb: (err: any, data?: UpdateGuestUserCommandOutput) => void
  ): void;
  updateGuestUser(
    args: UpdateGuestUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGuestUserCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkCommand}
   */
  updateNetwork(
    args: UpdateNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkCommandOutput>;
  updateNetwork(
    args: UpdateNetworkCommandInput,
    cb: (err: any, data?: UpdateNetworkCommandOutput) => void
  ): void;
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

  /**
   * @see {@link ListBlockedGuestUsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBlockedGuestUsersCommandOutput}.
   */
  paginateListBlockedGuestUsers(
    args: ListBlockedGuestUsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBlockedGuestUsersCommandOutput>;

  /**
   * @see {@link ListBotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBotsCommandOutput}.
   */
  paginateListBots(
    args: ListBotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBotsCommandOutput>;

  /**
   * @see {@link ListDevicesForUserCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDevicesForUserCommandOutput}.
   */
  paginateListDevicesForUser(
    args: ListDevicesForUserCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDevicesForUserCommandOutput>;

  /**
   * @see {@link ListGuestUsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGuestUsersCommandOutput}.
   */
  paginateListGuestUsers(
    args: ListGuestUsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGuestUsersCommandOutput>;

  /**
   * @see {@link ListNetworksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworksCommandOutput}.
   */
  paginateListNetworks(
    args?: ListNetworksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworksCommandOutput>;

  /**
   * @see {@link ListSecurityGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecurityGroupsCommandOutput}.
   */
  paginateListSecurityGroups(
    args: ListSecurityGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecurityGroupsCommandOutput>;

  /**
   * @see {@link ListSecurityGroupUsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecurityGroupUsersCommandOutput}.
   */
  paginateListSecurityGroupUsers(
    args: ListSecurityGroupUsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecurityGroupUsersCommandOutput>;

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
 * <p>Welcome to the <i>Amazon Web Services Wickr API Reference</i>.</p> <p>The Amazon Web Services Wickr application programming interface (API) is designed for administrators to perform key tasks, such as creating and managing Amazon Web Services Wickr, networks, users, security groups, bots and more. This guide provides detailed information about the Amazon Web Services Wickr API, including operations, types, inputs and outputs, and error codes. You can use an Amazon Web Services SDK, the Amazon Web Services Command Line Interface (Amazon Web Services CLI, or the REST API to make API calls for Amazon Web Services Wickr. </p> <p> <i>Using Amazon Web Services SDK</i> </p> <p>The SDK clients authenticate your requests by using access keys that you provide. For more information, see <a href="https://docs.aws.amazon.com/sdkref/latest/guide/access.html">Authentication and access using Amazon Web Services SDKs and tools</a> in the <i>Amazon Web Services SDKs and Tools Reference Guide</i>. </p> <p> <i>Using Amazon Web Services CLI</i> </p> <p>Use your access keys with the Amazon Web Services CLI to make API calls. For more information about setting up the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html">Getting started with the Amazon Web Services CLI</a> in the <i>Amazon Web Services Command Line Interface User Guide for Version 2</i>. </p> <p> <i>Using REST APIs</i> </p> <p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Web Services Wickr supports Signature Version 4. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>. </p> <p>Access and permissions to the APIs can be controlled by Amazon Web Services Identity and Access Management. The managed policy <a href="https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam-awsmanpol.html#security-iam-awsmanpol-AWSWickrFullAccess">Amazon Web ServicesWickrFullAccess</a> grants full administrative permission to the Amazon Web Services Wickr service APIs. For more information on restricting access to specific operations, see <a href="https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html">Identity and access management for Amazon Web Services Wickr </a> in the <i>Amazon Web Services Wickr Administration Guide</i>. </p> <p> <i>Types of Errors</i>:</p> <p>The Amazon Web Services Wickr APIs provide an HTTP interface. HTTP defines ranges of HTTP Status Codes for different types of error responses.</p> <ol> <li> <p>Client errors are indicated by HTTP Status Code class of 4xx</p> </li> <li> <p>Service errors are indicated by HTTP Status Code class of 5xx</p> </li> </ol> <p>In this reference guide, the documentation for each API has an Errors section that includes a brief discussion about HTTP status codes. We recommend looking there as part of your investigation when you get an error.</p>
 * @public
 */
export class Wickr extends WickrClient implements Wickr {}
createAggregatedClient(commands, Wickr, { paginators });
