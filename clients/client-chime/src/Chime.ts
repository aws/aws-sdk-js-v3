// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { ChimeClient } from "./ChimeClient";
import {
  type AssociatePhoneNumberWithUserCommandInput,
  type AssociatePhoneNumberWithUserCommandOutput,
  AssociatePhoneNumberWithUserCommand,
} from "./commands/AssociatePhoneNumberWithUserCommand";
import {
  type AssociateSigninDelegateGroupsWithAccountCommandInput,
  type AssociateSigninDelegateGroupsWithAccountCommandOutput,
  AssociateSigninDelegateGroupsWithAccountCommand,
} from "./commands/AssociateSigninDelegateGroupsWithAccountCommand";
import {
  type BatchCreateRoomMembershipCommandInput,
  type BatchCreateRoomMembershipCommandOutput,
  BatchCreateRoomMembershipCommand,
} from "./commands/BatchCreateRoomMembershipCommand";
import {
  type BatchDeletePhoneNumberCommandInput,
  type BatchDeletePhoneNumberCommandOutput,
  BatchDeletePhoneNumberCommand,
} from "./commands/BatchDeletePhoneNumberCommand";
import {
  type BatchSuspendUserCommandInput,
  type BatchSuspendUserCommandOutput,
  BatchSuspendUserCommand,
} from "./commands/BatchSuspendUserCommand";
import {
  type BatchUnsuspendUserCommandInput,
  type BatchUnsuspendUserCommandOutput,
  BatchUnsuspendUserCommand,
} from "./commands/BatchUnsuspendUserCommand";
import {
  type BatchUpdatePhoneNumberCommandInput,
  type BatchUpdatePhoneNumberCommandOutput,
  BatchUpdatePhoneNumberCommand,
} from "./commands/BatchUpdatePhoneNumberCommand";
import {
  type BatchUpdateUserCommandInput,
  type BatchUpdateUserCommandOutput,
  BatchUpdateUserCommand,
} from "./commands/BatchUpdateUserCommand";
import {
  type CreateAccountCommandInput,
  type CreateAccountCommandOutput,
  CreateAccountCommand,
} from "./commands/CreateAccountCommand";
import { type CreateBotCommandInput, type CreateBotCommandOutput, CreateBotCommand } from "./commands/CreateBotCommand";
import {
  type CreateMeetingDialOutCommandInput,
  type CreateMeetingDialOutCommandOutput,
  CreateMeetingDialOutCommand,
} from "./commands/CreateMeetingDialOutCommand";
import {
  type CreatePhoneNumberOrderCommandInput,
  type CreatePhoneNumberOrderCommandOutput,
  CreatePhoneNumberOrderCommand,
} from "./commands/CreatePhoneNumberOrderCommand";
import {
  type CreateRoomCommandInput,
  type CreateRoomCommandOutput,
  CreateRoomCommand,
} from "./commands/CreateRoomCommand";
import {
  type CreateRoomMembershipCommandInput,
  type CreateRoomMembershipCommandOutput,
  CreateRoomMembershipCommand,
} from "./commands/CreateRoomMembershipCommand";
import {
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  CreateUserCommand,
} from "./commands/CreateUserCommand";
import {
  type DeleteAccountCommandInput,
  type DeleteAccountCommandOutput,
  DeleteAccountCommand,
} from "./commands/DeleteAccountCommand";
import {
  type DeleteEventsConfigurationCommandInput,
  type DeleteEventsConfigurationCommandOutput,
  DeleteEventsConfigurationCommand,
} from "./commands/DeleteEventsConfigurationCommand";
import {
  type DeletePhoneNumberCommandInput,
  type DeletePhoneNumberCommandOutput,
  DeletePhoneNumberCommand,
} from "./commands/DeletePhoneNumberCommand";
import {
  type DeleteRoomCommandInput,
  type DeleteRoomCommandOutput,
  DeleteRoomCommand,
} from "./commands/DeleteRoomCommand";
import {
  type DeleteRoomMembershipCommandInput,
  type DeleteRoomMembershipCommandOutput,
  DeleteRoomMembershipCommand,
} from "./commands/DeleteRoomMembershipCommand";
import {
  type DisassociatePhoneNumberFromUserCommandInput,
  type DisassociatePhoneNumberFromUserCommandOutput,
  DisassociatePhoneNumberFromUserCommand,
} from "./commands/DisassociatePhoneNumberFromUserCommand";
import {
  type DisassociateSigninDelegateGroupsFromAccountCommandInput,
  type DisassociateSigninDelegateGroupsFromAccountCommandOutput,
  DisassociateSigninDelegateGroupsFromAccountCommand,
} from "./commands/DisassociateSigninDelegateGroupsFromAccountCommand";
import {
  type GetAccountCommandInput,
  type GetAccountCommandOutput,
  GetAccountCommand,
} from "./commands/GetAccountCommand";
import {
  type GetAccountSettingsCommandInput,
  type GetAccountSettingsCommandOutput,
  GetAccountSettingsCommand,
} from "./commands/GetAccountSettingsCommand";
import { type GetBotCommandInput, type GetBotCommandOutput, GetBotCommand } from "./commands/GetBotCommand";
import {
  type GetEventsConfigurationCommandInput,
  type GetEventsConfigurationCommandOutput,
  GetEventsConfigurationCommand,
} from "./commands/GetEventsConfigurationCommand";
import {
  type GetGlobalSettingsCommandInput,
  type GetGlobalSettingsCommandOutput,
  GetGlobalSettingsCommand,
} from "./commands/GetGlobalSettingsCommand";
import {
  type GetPhoneNumberCommandInput,
  type GetPhoneNumberCommandOutput,
  GetPhoneNumberCommand,
} from "./commands/GetPhoneNumberCommand";
import {
  type GetPhoneNumberOrderCommandInput,
  type GetPhoneNumberOrderCommandOutput,
  GetPhoneNumberOrderCommand,
} from "./commands/GetPhoneNumberOrderCommand";
import {
  type GetPhoneNumberSettingsCommandInput,
  type GetPhoneNumberSettingsCommandOutput,
  GetPhoneNumberSettingsCommand,
} from "./commands/GetPhoneNumberSettingsCommand";
import {
  type GetRetentionSettingsCommandInput,
  type GetRetentionSettingsCommandOutput,
  GetRetentionSettingsCommand,
} from "./commands/GetRetentionSettingsCommand";
import { type GetRoomCommandInput, type GetRoomCommandOutput, GetRoomCommand } from "./commands/GetRoomCommand";
import { type GetUserCommandInput, type GetUserCommandOutput, GetUserCommand } from "./commands/GetUserCommand";
import {
  type GetUserSettingsCommandInput,
  type GetUserSettingsCommandOutput,
  GetUserSettingsCommand,
} from "./commands/GetUserSettingsCommand";
import {
  type InviteUsersCommandInput,
  type InviteUsersCommandOutput,
  InviteUsersCommand,
} from "./commands/InviteUsersCommand";
import {
  type ListAccountsCommandInput,
  type ListAccountsCommandOutput,
  ListAccountsCommand,
} from "./commands/ListAccountsCommand";
import { type ListBotsCommandInput, type ListBotsCommandOutput, ListBotsCommand } from "./commands/ListBotsCommand";
import {
  type ListPhoneNumberOrdersCommandInput,
  type ListPhoneNumberOrdersCommandOutput,
  ListPhoneNumberOrdersCommand,
} from "./commands/ListPhoneNumberOrdersCommand";
import {
  type ListPhoneNumbersCommandInput,
  type ListPhoneNumbersCommandOutput,
  ListPhoneNumbersCommand,
} from "./commands/ListPhoneNumbersCommand";
import {
  type ListRoomMembershipsCommandInput,
  type ListRoomMembershipsCommandOutput,
  ListRoomMembershipsCommand,
} from "./commands/ListRoomMembershipsCommand";
import { type ListRoomsCommandInput, type ListRoomsCommandOutput, ListRoomsCommand } from "./commands/ListRoomsCommand";
import {
  type ListSupportedPhoneNumberCountriesCommandInput,
  type ListSupportedPhoneNumberCountriesCommandOutput,
  ListSupportedPhoneNumberCountriesCommand,
} from "./commands/ListSupportedPhoneNumberCountriesCommand";
import { type ListUsersCommandInput, type ListUsersCommandOutput, ListUsersCommand } from "./commands/ListUsersCommand";
import {
  type LogoutUserCommandInput,
  type LogoutUserCommandOutput,
  LogoutUserCommand,
} from "./commands/LogoutUserCommand";
import {
  type PutEventsConfigurationCommandInput,
  type PutEventsConfigurationCommandOutput,
  PutEventsConfigurationCommand,
} from "./commands/PutEventsConfigurationCommand";
import {
  type PutRetentionSettingsCommandInput,
  type PutRetentionSettingsCommandOutput,
  PutRetentionSettingsCommand,
} from "./commands/PutRetentionSettingsCommand";
import {
  type RedactConversationMessageCommandInput,
  type RedactConversationMessageCommandOutput,
  RedactConversationMessageCommand,
} from "./commands/RedactConversationMessageCommand";
import {
  type RedactRoomMessageCommandInput,
  type RedactRoomMessageCommandOutput,
  RedactRoomMessageCommand,
} from "./commands/RedactRoomMessageCommand";
import {
  type RegenerateSecurityTokenCommandInput,
  type RegenerateSecurityTokenCommandOutput,
  RegenerateSecurityTokenCommand,
} from "./commands/RegenerateSecurityTokenCommand";
import {
  type ResetPersonalPINCommandInput,
  type ResetPersonalPINCommandOutput,
  ResetPersonalPINCommand,
} from "./commands/ResetPersonalPINCommand";
import {
  type RestorePhoneNumberCommandInput,
  type RestorePhoneNumberCommandOutput,
  RestorePhoneNumberCommand,
} from "./commands/RestorePhoneNumberCommand";
import {
  type SearchAvailablePhoneNumbersCommandInput,
  type SearchAvailablePhoneNumbersCommandOutput,
  SearchAvailablePhoneNumbersCommand,
} from "./commands/SearchAvailablePhoneNumbersCommand";
import {
  type UpdateAccountCommandInput,
  type UpdateAccountCommandOutput,
  UpdateAccountCommand,
} from "./commands/UpdateAccountCommand";
import {
  type UpdateAccountSettingsCommandInput,
  type UpdateAccountSettingsCommandOutput,
  UpdateAccountSettingsCommand,
} from "./commands/UpdateAccountSettingsCommand";
import { type UpdateBotCommandInput, type UpdateBotCommandOutput, UpdateBotCommand } from "./commands/UpdateBotCommand";
import {
  type UpdateGlobalSettingsCommandInput,
  type UpdateGlobalSettingsCommandOutput,
  UpdateGlobalSettingsCommand,
} from "./commands/UpdateGlobalSettingsCommand";
import {
  type UpdatePhoneNumberCommandInput,
  type UpdatePhoneNumberCommandOutput,
  UpdatePhoneNumberCommand,
} from "./commands/UpdatePhoneNumberCommand";
import {
  type UpdatePhoneNumberSettingsCommandInput,
  type UpdatePhoneNumberSettingsCommandOutput,
  UpdatePhoneNumberSettingsCommand,
} from "./commands/UpdatePhoneNumberSettingsCommand";
import {
  type UpdateRoomCommandInput,
  type UpdateRoomCommandOutput,
  UpdateRoomCommand,
} from "./commands/UpdateRoomCommand";
import {
  type UpdateRoomMembershipCommandInput,
  type UpdateRoomMembershipCommandOutput,
  UpdateRoomMembershipCommand,
} from "./commands/UpdateRoomMembershipCommand";
import {
  type UpdateUserCommandInput,
  type UpdateUserCommandOutput,
  UpdateUserCommand,
} from "./commands/UpdateUserCommand";
import {
  type UpdateUserSettingsCommandInput,
  type UpdateUserSettingsCommandOutput,
  UpdateUserSettingsCommand,
} from "./commands/UpdateUserSettingsCommand";
import { paginateListAccounts } from "./pagination/ListAccountsPaginator";
import { paginateListBots } from "./pagination/ListBotsPaginator";
import { paginateListPhoneNumberOrders } from "./pagination/ListPhoneNumberOrdersPaginator";
import { paginateListPhoneNumbers } from "./pagination/ListPhoneNumbersPaginator";
import { paginateListRoomMemberships } from "./pagination/ListRoomMembershipsPaginator";
import { paginateListRooms } from "./pagination/ListRoomsPaginator";
import { paginateListUsers } from "./pagination/ListUsersPaginator";
import { paginateSearchAvailablePhoneNumbers } from "./pagination/SearchAvailablePhoneNumbersPaginator";

const commands = {
  AssociatePhoneNumberWithUserCommand,
  AssociateSigninDelegateGroupsWithAccountCommand,
  BatchCreateRoomMembershipCommand,
  BatchDeletePhoneNumberCommand,
  BatchSuspendUserCommand,
  BatchUnsuspendUserCommand,
  BatchUpdatePhoneNumberCommand,
  BatchUpdateUserCommand,
  CreateAccountCommand,
  CreateBotCommand,
  CreateMeetingDialOutCommand,
  CreatePhoneNumberOrderCommand,
  CreateRoomCommand,
  CreateRoomMembershipCommand,
  CreateUserCommand,
  DeleteAccountCommand,
  DeleteEventsConfigurationCommand,
  DeletePhoneNumberCommand,
  DeleteRoomCommand,
  DeleteRoomMembershipCommand,
  DisassociatePhoneNumberFromUserCommand,
  DisassociateSigninDelegateGroupsFromAccountCommand,
  GetAccountCommand,
  GetAccountSettingsCommand,
  GetBotCommand,
  GetEventsConfigurationCommand,
  GetGlobalSettingsCommand,
  GetPhoneNumberCommand,
  GetPhoneNumberOrderCommand,
  GetPhoneNumberSettingsCommand,
  GetRetentionSettingsCommand,
  GetRoomCommand,
  GetUserCommand,
  GetUserSettingsCommand,
  InviteUsersCommand,
  ListAccountsCommand,
  ListBotsCommand,
  ListPhoneNumberOrdersCommand,
  ListPhoneNumbersCommand,
  ListRoomMembershipsCommand,
  ListRoomsCommand,
  ListSupportedPhoneNumberCountriesCommand,
  ListUsersCommand,
  LogoutUserCommand,
  PutEventsConfigurationCommand,
  PutRetentionSettingsCommand,
  RedactConversationMessageCommand,
  RedactRoomMessageCommand,
  RegenerateSecurityTokenCommand,
  ResetPersonalPINCommand,
  RestorePhoneNumberCommand,
  SearchAvailablePhoneNumbersCommand,
  UpdateAccountCommand,
  UpdateAccountSettingsCommand,
  UpdateBotCommand,
  UpdateGlobalSettingsCommand,
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberSettingsCommand,
  UpdateRoomCommand,
  UpdateRoomMembershipCommand,
  UpdateUserCommand,
  UpdateUserSettingsCommand,
};
const paginators = {
  paginateListAccounts,
  paginateListBots,
  paginateListPhoneNumberOrders,
  paginateListPhoneNumbers,
  paginateListRoomMemberships,
  paginateListRooms,
  paginateListUsers,
  paginateSearchAvailablePhoneNumbers,
};

/**
 * @public
 */
export interface ChimeRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Chime {
  /**
   * @see {@link AssociatePhoneNumberWithUserCommand}
   */
  associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserCommandInput,
    options?: ChimeRequestOptions
  ): Promise<AssociatePhoneNumberWithUserCommandOutput>;
  associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserCommandInput,
    cb: (err: any, data?: AssociatePhoneNumberWithUserCommandOutput) => void
  ): void;
  associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: AssociatePhoneNumberWithUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSigninDelegateGroupsWithAccountCommand}
   */
  associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    options?: ChimeRequestOptions
  ): Promise<AssociateSigninDelegateGroupsWithAccountCommandOutput>;
  associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    cb: (err: any, data?: AssociateSigninDelegateGroupsWithAccountCommandOutput) => void
  ): void;
  associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: AssociateSigninDelegateGroupsWithAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateRoomMembershipCommand}
   */
  batchCreateRoomMembership(
    args: BatchCreateRoomMembershipCommandInput,
    options?: ChimeRequestOptions
  ): Promise<BatchCreateRoomMembershipCommandOutput>;
  batchCreateRoomMembership(
    args: BatchCreateRoomMembershipCommandInput,
    cb: (err: any, data?: BatchCreateRoomMembershipCommandOutput) => void
  ): void;
  batchCreateRoomMembership(
    args: BatchCreateRoomMembershipCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: BatchCreateRoomMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeletePhoneNumberCommand}
   */
  batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    options?: ChimeRequestOptions
  ): Promise<BatchDeletePhoneNumberCommandOutput>;
  batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    cb: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): void;
  batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchSuspendUserCommand}
   */
  batchSuspendUser(
    args: BatchSuspendUserCommandInput,
    options?: ChimeRequestOptions
  ): Promise<BatchSuspendUserCommandOutput>;
  batchSuspendUser(
    args: BatchSuspendUserCommandInput,
    cb: (err: any, data?: BatchSuspendUserCommandOutput) => void
  ): void;
  batchSuspendUser(
    args: BatchSuspendUserCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: BatchSuspendUserCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUnsuspendUserCommand}
   */
  batchUnsuspendUser(
    args: BatchUnsuspendUserCommandInput,
    options?: ChimeRequestOptions
  ): Promise<BatchUnsuspendUserCommandOutput>;
  batchUnsuspendUser(
    args: BatchUnsuspendUserCommandInput,
    cb: (err: any, data?: BatchUnsuspendUserCommandOutput) => void
  ): void;
  batchUnsuspendUser(
    args: BatchUnsuspendUserCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: BatchUnsuspendUserCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdatePhoneNumberCommand}
   */
  batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    options?: ChimeRequestOptions
  ): Promise<BatchUpdatePhoneNumberCommandOutput>;
  batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    cb: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): void;
  batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateUserCommand}
   */
  batchUpdateUser(
    args: BatchUpdateUserCommandInput,
    options?: ChimeRequestOptions
  ): Promise<BatchUpdateUserCommandOutput>;
  batchUpdateUser(
    args: BatchUpdateUserCommandInput,
    cb: (err: any, data?: BatchUpdateUserCommandOutput) => void
  ): void;
  batchUpdateUser(
    args: BatchUpdateUserCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: BatchUpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccountCommand}
   */
  createAccount(
    args: CreateAccountCommandInput,
    options?: ChimeRequestOptions
  ): Promise<CreateAccountCommandOutput>;
  createAccount(
    args: CreateAccountCommandInput,
    cb: (err: any, data?: CreateAccountCommandOutput) => void
  ): void;
  createAccount(
    args: CreateAccountCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: CreateAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBotCommand}
   */
  createBot(
    args: CreateBotCommandInput,
    options?: ChimeRequestOptions
  ): Promise<CreateBotCommandOutput>;
  createBot(
    args: CreateBotCommandInput,
    cb: (err: any, data?: CreateBotCommandOutput) => void
  ): void;
  createBot(
    args: CreateBotCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: CreateBotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMeetingDialOutCommand}
   */
  createMeetingDialOut(
    args: CreateMeetingDialOutCommandInput,
    options?: ChimeRequestOptions
  ): Promise<CreateMeetingDialOutCommandOutput>;
  createMeetingDialOut(
    args: CreateMeetingDialOutCommandInput,
    cb: (err: any, data?: CreateMeetingDialOutCommandOutput) => void
  ): void;
  createMeetingDialOut(
    args: CreateMeetingDialOutCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: CreateMeetingDialOutCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePhoneNumberOrderCommand}
   */
  createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    options?: ChimeRequestOptions
  ): Promise<CreatePhoneNumberOrderCommandOutput>;
  createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    cb: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): void;
  createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRoomCommand}
   */
  createRoom(
    args: CreateRoomCommandInput,
    options?: ChimeRequestOptions
  ): Promise<CreateRoomCommandOutput>;
  createRoom(
    args: CreateRoomCommandInput,
    cb: (err: any, data?: CreateRoomCommandOutput) => void
  ): void;
  createRoom(
    args: CreateRoomCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: CreateRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRoomMembershipCommand}
   */
  createRoomMembership(
    args: CreateRoomMembershipCommandInput,
    options?: ChimeRequestOptions
  ): Promise<CreateRoomMembershipCommandOutput>;
  createRoomMembership(
    args: CreateRoomMembershipCommandInput,
    cb: (err: any, data?: CreateRoomMembershipCommandOutput) => void
  ): void;
  createRoomMembership(
    args: CreateRoomMembershipCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: CreateRoomMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: ChimeRequestOptions
  ): Promise<CreateUserCommandOutput>;
  createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  createUser(
    args: CreateUserCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountCommand}
   */
  deleteAccount(
    args: DeleteAccountCommandInput,
    options?: ChimeRequestOptions
  ): Promise<DeleteAccountCommandOutput>;
  deleteAccount(
    args: DeleteAccountCommandInput,
    cb: (err: any, data?: DeleteAccountCommandOutput) => void
  ): void;
  deleteAccount(
    args: DeleteAccountCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: DeleteAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventsConfigurationCommand}
   */
  deleteEventsConfiguration(
    args: DeleteEventsConfigurationCommandInput,
    options?: ChimeRequestOptions
  ): Promise<DeleteEventsConfigurationCommandOutput>;
  deleteEventsConfiguration(
    args: DeleteEventsConfigurationCommandInput,
    cb: (err: any, data?: DeleteEventsConfigurationCommandOutput) => void
  ): void;
  deleteEventsConfiguration(
    args: DeleteEventsConfigurationCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: DeleteEventsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePhoneNumberCommand}
   */
  deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    options?: ChimeRequestOptions
  ): Promise<DeletePhoneNumberCommandOutput>;
  deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    cb: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): void;
  deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoomCommand}
   */
  deleteRoom(
    args: DeleteRoomCommandInput,
    options?: ChimeRequestOptions
  ): Promise<DeleteRoomCommandOutput>;
  deleteRoom(
    args: DeleteRoomCommandInput,
    cb: (err: any, data?: DeleteRoomCommandOutput) => void
  ): void;
  deleteRoom(
    args: DeleteRoomCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: DeleteRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoomMembershipCommand}
   */
  deleteRoomMembership(
    args: DeleteRoomMembershipCommandInput,
    options?: ChimeRequestOptions
  ): Promise<DeleteRoomMembershipCommandOutput>;
  deleteRoomMembership(
    args: DeleteRoomMembershipCommandInput,
    cb: (err: any, data?: DeleteRoomMembershipCommandOutput) => void
  ): void;
  deleteRoomMembership(
    args: DeleteRoomMembershipCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: DeleteRoomMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociatePhoneNumberFromUserCommand}
   */
  disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserCommandInput,
    options?: ChimeRequestOptions
  ): Promise<DisassociatePhoneNumberFromUserCommandOutput>;
  disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumberFromUserCommandOutput) => void
  ): void;
  disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: DisassociatePhoneNumberFromUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSigninDelegateGroupsFromAccountCommand}
   */
  disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    options?: ChimeRequestOptions
  ): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput>;
  disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    cb: (err: any, data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput) => void
  ): void;
  disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountCommand}
   */
  getAccount(
    args: GetAccountCommandInput,
    options?: ChimeRequestOptions
  ): Promise<GetAccountCommandOutput>;
  getAccount(
    args: GetAccountCommandInput,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;
  getAccount(
    args: GetAccountCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBotCommand}
   */
  getBot(
    args: GetBotCommandInput,
    options?: ChimeRequestOptions
  ): Promise<GetBotCommandOutput>;
  getBot(
    args: GetBotCommandInput,
    cb: (err: any, data?: GetBotCommandOutput) => void
  ): void;
  getBot(
    args: GetBotCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: GetBotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventsConfigurationCommand}
   */
  getEventsConfiguration(
    args: GetEventsConfigurationCommandInput,
    options?: ChimeRequestOptions
  ): Promise<GetEventsConfigurationCommandOutput>;
  getEventsConfiguration(
    args: GetEventsConfigurationCommandInput,
    cb: (err: any, data?: GetEventsConfigurationCommandOutput) => void
  ): void;
  getEventsConfiguration(
    args: GetEventsConfigurationCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: GetEventsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGlobalSettingsCommand}
   */
  getGlobalSettings(): Promise<GetGlobalSettingsCommandOutput>;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<GetGlobalSettingsCommandOutput>;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPhoneNumberCommand}
   */
  getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    options?: ChimeRequestOptions
  ): Promise<GetPhoneNumberCommandOutput>;
  getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    cb: (err: any, data?: GetPhoneNumberCommandOutput) => void
  ): void;
  getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: GetPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPhoneNumberOrderCommand}
   */
  getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    options?: ChimeRequestOptions
  ): Promise<GetPhoneNumberOrderCommandOutput>;
  getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    cb: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): void;
  getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPhoneNumberSettingsCommand}
   */
  getPhoneNumberSettings(): Promise<GetPhoneNumberSettingsCommandOutput>;
  getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<GetPhoneNumberSettingsCommandOutput>;
  getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    cb: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): void;
  getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRetentionSettingsCommand}
   */
  getRetentionSettings(
    args: GetRetentionSettingsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<GetRetentionSettingsCommandOutput>;
  getRetentionSettings(
    args: GetRetentionSettingsCommandInput,
    cb: (err: any, data?: GetRetentionSettingsCommandOutput) => void
  ): void;
  getRetentionSettings(
    args: GetRetentionSettingsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: GetRetentionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRoomCommand}
   */
  getRoom(
    args: GetRoomCommandInput,
    options?: ChimeRequestOptions
  ): Promise<GetRoomCommandOutput>;
  getRoom(
    args: GetRoomCommandInput,
    cb: (err: any, data?: GetRoomCommandOutput) => void
  ): void;
  getRoom(
    args: GetRoomCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: GetRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(
    args: GetUserCommandInput,
    options?: ChimeRequestOptions
  ): Promise<GetUserCommandOutput>;
  getUser(
    args: GetUserCommandInput,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  getUser(
    args: GetUserCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserSettingsCommand}
   */
  getUserSettings(
    args: GetUserSettingsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<GetUserSettingsCommandOutput>;
  getUserSettings(
    args: GetUserSettingsCommandInput,
    cb: (err: any, data?: GetUserSettingsCommandOutput) => void
  ): void;
  getUserSettings(
    args: GetUserSettingsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: GetUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link InviteUsersCommand}
   */
  inviteUsers(
    args: InviteUsersCommandInput,
    options?: ChimeRequestOptions
  ): Promise<InviteUsersCommandOutput>;
  inviteUsers(
    args: InviteUsersCommandInput,
    cb: (err: any, data?: InviteUsersCommandOutput) => void
  ): void;
  inviteUsers(
    args: InviteUsersCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: InviteUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountsCommand}
   */
  listAccounts(): Promise<ListAccountsCommandOutput>;
  listAccounts(
    args: ListAccountsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<ListAccountsCommandOutput>;
  listAccounts(
    args: ListAccountsCommandInput,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
  ): void;
  listAccounts(
    args: ListAccountsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotsCommand}
   */
  listBots(
    args: ListBotsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<ListBotsCommandOutput>;
  listBots(
    args: ListBotsCommandInput,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;
  listBots(
    args: ListBotsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPhoneNumberOrdersCommand}
   */
  listPhoneNumberOrders(): Promise<ListPhoneNumberOrdersCommandOutput>;
  listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    options?: ChimeRequestOptions
  ): Promise<ListPhoneNumberOrdersCommandOutput>;
  listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    cb: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): void;
  listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPhoneNumbersCommand}
   */
  listPhoneNumbers(): Promise<ListPhoneNumbersCommandOutput>;
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options?: ChimeRequestOptions
  ): Promise<ListPhoneNumbersCommandOutput>;
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoomMembershipsCommand}
   */
  listRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<ListRoomMembershipsCommandOutput>;
  listRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    cb: (err: any, data?: ListRoomMembershipsCommandOutput) => void
  ): void;
  listRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: ListRoomMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoomsCommand}
   */
  listRooms(
    args: ListRoomsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<ListRoomsCommandOutput>;
  listRooms(
    args: ListRoomsCommandInput,
    cb: (err: any, data?: ListRoomsCommandOutput) => void
  ): void;
  listRooms(
    args: ListRoomsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: ListRoomsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSupportedPhoneNumberCountriesCommand}
   */
  listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    options?: ChimeRequestOptions
  ): Promise<ListSupportedPhoneNumberCountriesCommandOutput>;
  listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    cb: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
  ): void;
  listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: ChimeRequestOptions
  ): Promise<ListUsersCommandOutput>;
  listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  listUsers(
    args: ListUsersCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link LogoutUserCommand}
   */
  logoutUser(
    args: LogoutUserCommandInput,
    options?: ChimeRequestOptions
  ): Promise<LogoutUserCommandOutput>;
  logoutUser(
    args: LogoutUserCommandInput,
    cb: (err: any, data?: LogoutUserCommandOutput) => void
  ): void;
  logoutUser(
    args: LogoutUserCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: LogoutUserCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventsConfigurationCommand}
   */
  putEventsConfiguration(
    args: PutEventsConfigurationCommandInput,
    options?: ChimeRequestOptions
  ): Promise<PutEventsConfigurationCommandOutput>;
  putEventsConfiguration(
    args: PutEventsConfigurationCommandInput,
    cb: (err: any, data?: PutEventsConfigurationCommandOutput) => void
  ): void;
  putEventsConfiguration(
    args: PutEventsConfigurationCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: PutEventsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRetentionSettingsCommand}
   */
  putRetentionSettings(
    args: PutRetentionSettingsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<PutRetentionSettingsCommandOutput>;
  putRetentionSettings(
    args: PutRetentionSettingsCommandInput,
    cb: (err: any, data?: PutRetentionSettingsCommandOutput) => void
  ): void;
  putRetentionSettings(
    args: PutRetentionSettingsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: PutRetentionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link RedactConversationMessageCommand}
   */
  redactConversationMessage(
    args: RedactConversationMessageCommandInput,
    options?: ChimeRequestOptions
  ): Promise<RedactConversationMessageCommandOutput>;
  redactConversationMessage(
    args: RedactConversationMessageCommandInput,
    cb: (err: any, data?: RedactConversationMessageCommandOutput) => void
  ): void;
  redactConversationMessage(
    args: RedactConversationMessageCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: RedactConversationMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link RedactRoomMessageCommand}
   */
  redactRoomMessage(
    args: RedactRoomMessageCommandInput,
    options?: ChimeRequestOptions
  ): Promise<RedactRoomMessageCommandOutput>;
  redactRoomMessage(
    args: RedactRoomMessageCommandInput,
    cb: (err: any, data?: RedactRoomMessageCommandOutput) => void
  ): void;
  redactRoomMessage(
    args: RedactRoomMessageCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: RedactRoomMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link RegenerateSecurityTokenCommand}
   */
  regenerateSecurityToken(
    args: RegenerateSecurityTokenCommandInput,
    options?: ChimeRequestOptions
  ): Promise<RegenerateSecurityTokenCommandOutput>;
  regenerateSecurityToken(
    args: RegenerateSecurityTokenCommandInput,
    cb: (err: any, data?: RegenerateSecurityTokenCommandOutput) => void
  ): void;
  regenerateSecurityToken(
    args: RegenerateSecurityTokenCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: RegenerateSecurityTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetPersonalPINCommand}
   */
  resetPersonalPIN(
    args: ResetPersonalPINCommandInput,
    options?: ChimeRequestOptions
  ): Promise<ResetPersonalPINCommandOutput>;
  resetPersonalPIN(
    args: ResetPersonalPINCommandInput,
    cb: (err: any, data?: ResetPersonalPINCommandOutput) => void
  ): void;
  resetPersonalPIN(
    args: ResetPersonalPINCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: ResetPersonalPINCommandOutput) => void
  ): void;

  /**
   * @see {@link RestorePhoneNumberCommand}
   */
  restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    options?: ChimeRequestOptions
  ): Promise<RestorePhoneNumberCommandOutput>;
  restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    cb: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): void;
  restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAvailablePhoneNumbersCommand}
   */
  searchAvailablePhoneNumbers(): Promise<SearchAvailablePhoneNumbersCommandOutput>;
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options?: ChimeRequestOptions
  ): Promise<SearchAvailablePhoneNumbersCommandOutput>;
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountCommand}
   */
  updateAccount(
    args: UpdateAccountCommandInput,
    options?: ChimeRequestOptions
  ): Promise<UpdateAccountCommandOutput>;
  updateAccount(
    args: UpdateAccountCommandInput,
    cb: (err: any, data?: UpdateAccountCommandOutput) => void
  ): void;
  updateAccount(
    args: UpdateAccountCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: UpdateAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBotCommand}
   */
  updateBot(
    args: UpdateBotCommandInput,
    options?: ChimeRequestOptions
  ): Promise<UpdateBotCommandOutput>;
  updateBot(
    args: UpdateBotCommandInput,
    cb: (err: any, data?: UpdateBotCommandOutput) => void
  ): void;
  updateBot(
    args: UpdateBotCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: UpdateBotCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlobalSettingsCommand}
   */
  updateGlobalSettings(): Promise<UpdateGlobalSettingsCommandOutput>;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<UpdateGlobalSettingsCommandOutput>;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePhoneNumberCommand}
   */
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options?: ChimeRequestOptions
  ): Promise<UpdatePhoneNumberCommandOutput>;
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePhoneNumberSettingsCommand}
   */
  updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<UpdatePhoneNumberSettingsCommandOutput>;
  updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): void;
  updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoomCommand}
   */
  updateRoom(
    args: UpdateRoomCommandInput,
    options?: ChimeRequestOptions
  ): Promise<UpdateRoomCommandOutput>;
  updateRoom(
    args: UpdateRoomCommandInput,
    cb: (err: any, data?: UpdateRoomCommandOutput) => void
  ): void;
  updateRoom(
    args: UpdateRoomCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: UpdateRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoomMembershipCommand}
   */
  updateRoomMembership(
    args: UpdateRoomMembershipCommandInput,
    options?: ChimeRequestOptions
  ): Promise<UpdateRoomMembershipCommandOutput>;
  updateRoomMembership(
    args: UpdateRoomMembershipCommandInput,
    cb: (err: any, data?: UpdateRoomMembershipCommandOutput) => void
  ): void;
  updateRoomMembership(
    args: UpdateRoomMembershipCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: UpdateRoomMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserCommandInput,
    options?: ChimeRequestOptions
  ): Promise<UpdateUserCommandOutput>;
  updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserSettingsCommand}
   */
  updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    options?: ChimeRequestOptions
  ): Promise<UpdateUserSettingsCommandOutput>;
  updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    cb: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): void;
  updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    options: ChimeRequestOptions,
    cb: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccountsCommandOutput}.
   */
  paginateListAccounts(
    args?: ListAccountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccountsCommandOutput>;

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
   * @see {@link ListPhoneNumberOrdersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPhoneNumberOrdersCommandOutput}.
   */
  paginateListPhoneNumberOrders(
    args?: ListPhoneNumberOrdersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPhoneNumberOrdersCommandOutput>;

  /**
   * @see {@link ListPhoneNumbersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPhoneNumbersCommandOutput}.
   */
  paginateListPhoneNumbers(
    args?: ListPhoneNumbersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPhoneNumbersCommandOutput>;

  /**
   * @see {@link ListRoomMembershipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRoomMembershipsCommandOutput}.
   */
  paginateListRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRoomMembershipsCommandOutput>;

  /**
   * @see {@link ListRoomsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRoomsCommandOutput}.
   */
  paginateListRooms(
    args: ListRoomsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRoomsCommandOutput>;

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

  /**
   * @see {@link SearchAvailablePhoneNumbersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchAvailablePhoneNumbersCommandOutput}.
   */
  paginateSearchAvailablePhoneNumbers(
    args?: SearchAvailablePhoneNumbersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchAvailablePhoneNumbersCommandOutput>;
}

/**
 * <important>
 *             <p>
 *                <b>Most of these APIs are no longer supported and will not be updated.</b> We recommend using the latest versions in the
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/welcome.html">Amazon Chime SDK API reference</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest versions requires migrating to dedicated namespaces. For more information, refer to
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                 <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *          <p>The Amazon Chime application programming interface (API) is designed so administrators can
 *             perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice
 *             Connectors. This guide provides detailed information about the Amazon Chime API,
 *             including operations, types, inputs and outputs, and error codes.</p>
 *          <p>You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to make API calls for Amazon Chime. We recommend using an AWS SDK or the
 *             AWS CLI. The page for each API action contains a <i>See Also</i> section that includes links to information about using the action with a language-specific
 *             AWS SDK or the AWS CLI.</p>
 *          <dl>
 *             <dt>Using an AWS SDK</dt>
 *             <dd>
 *                <p>
 *                         You don't need to write code to calculate a signature for request authentication. The SDK clients authenticate your requests by using access keys that you provide. For more information about AWS SDKs, see the
 *                         <a href="http://aws.amazon.com/developer/">AWS Developer Center</a>.
 *                     </p>
 *             </dd>
 *             <dt>Using the AWS CLI</dt>
 *             <dd>
 *                <p>Use your access keys with the AWS CLI to make API calls. For information about setting up the AWS CLI, see
 *                         <a href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html">Installing the AWS Command Line Interface</a>
 *                         in the <i>AWS Command Line Interface User Guide</i>. For a list of available Amazon Chime commands, see the
 *                         <a href="https://docs.aws.amazon.com/cli/latest/reference/chime/index.html">Amazon Chime commands</a> in the
 *                         <i>AWS CLI Command Reference</i>.
 *                     </p>
 *             </dd>
 *             <dt>Using REST APIs</dt>
 *             <dd>
 *                <p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Chime supports Signature Version 4. For more information, see
 *                         <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>
 *                         in the <i>Amazon Web Services General Reference</i>.</p>
 *                <p>When making REST API calls, use the service name <code>chime</code> and REST endpoint <code>https://service.chime.aws.amazon.com</code>.</p>
 *             </dd>
 *          </dl>
 *          <p>Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see
 *             <a href="https://docs.aws.amazon.com/chime/latest/ag/security-iam.html">Identity and Access Management for Amazon Chime</a>
 *             in the <i>Amazon Chime Administration Guide</i>.</p>
 *
 * @deprecated This namespace has been deprecated.
 * @public
 */
export class Chime extends ChimeClient implements Chime {}
createAggregatedClient(commands, Chime, { paginators });
