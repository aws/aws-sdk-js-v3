// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ChimeClient, ChimeClientConfig } from "./ChimeClient";
import {
  AssociatePhoneNumberWithUserCommand,
  AssociatePhoneNumberWithUserCommandInput,
  AssociatePhoneNumberWithUserCommandOutput,
} from "./commands/AssociatePhoneNumberWithUserCommand";
import {
  AssociateSigninDelegateGroupsWithAccountCommand,
  AssociateSigninDelegateGroupsWithAccountCommandInput,
  AssociateSigninDelegateGroupsWithAccountCommandOutput,
} from "./commands/AssociateSigninDelegateGroupsWithAccountCommand";
import {
  BatchCreateRoomMembershipCommand,
  BatchCreateRoomMembershipCommandInput,
  BatchCreateRoomMembershipCommandOutput,
} from "./commands/BatchCreateRoomMembershipCommand";
import {
  BatchDeletePhoneNumberCommand,
  BatchDeletePhoneNumberCommandInput,
  BatchDeletePhoneNumberCommandOutput,
} from "./commands/BatchDeletePhoneNumberCommand";
import {
  BatchSuspendUserCommand,
  BatchSuspendUserCommandInput,
  BatchSuspendUserCommandOutput,
} from "./commands/BatchSuspendUserCommand";
import {
  BatchUnsuspendUserCommand,
  BatchUnsuspendUserCommandInput,
  BatchUnsuspendUserCommandOutput,
} from "./commands/BatchUnsuspendUserCommand";
import {
  BatchUpdatePhoneNumberCommand,
  BatchUpdatePhoneNumberCommandInput,
  BatchUpdatePhoneNumberCommandOutput,
} from "./commands/BatchUpdatePhoneNumberCommand";
import {
  BatchUpdateUserCommand,
  BatchUpdateUserCommandInput,
  BatchUpdateUserCommandOutput,
} from "./commands/BatchUpdateUserCommand";
import {
  CreateAccountCommand,
  CreateAccountCommandInput,
  CreateAccountCommandOutput,
} from "./commands/CreateAccountCommand";
import { CreateBotCommand, CreateBotCommandInput, CreateBotCommandOutput } from "./commands/CreateBotCommand";
import {
  CreateMeetingDialOutCommand,
  CreateMeetingDialOutCommandInput,
  CreateMeetingDialOutCommandOutput,
} from "./commands/CreateMeetingDialOutCommand";
import {
  CreatePhoneNumberOrderCommand,
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput,
} from "./commands/CreatePhoneNumberOrderCommand";
import { CreateRoomCommand, CreateRoomCommandInput, CreateRoomCommandOutput } from "./commands/CreateRoomCommand";
import {
  CreateRoomMembershipCommand,
  CreateRoomMembershipCommandInput,
  CreateRoomMembershipCommandOutput,
} from "./commands/CreateRoomMembershipCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeleteAccountCommand,
  DeleteAccountCommandInput,
  DeleteAccountCommandOutput,
} from "./commands/DeleteAccountCommand";
import {
  DeleteEventsConfigurationCommand,
  DeleteEventsConfigurationCommandInput,
  DeleteEventsConfigurationCommandOutput,
} from "./commands/DeleteEventsConfigurationCommand";
import {
  DeletePhoneNumberCommand,
  DeletePhoneNumberCommandInput,
  DeletePhoneNumberCommandOutput,
} from "./commands/DeletePhoneNumberCommand";
import { DeleteRoomCommand, DeleteRoomCommandInput, DeleteRoomCommandOutput } from "./commands/DeleteRoomCommand";
import {
  DeleteRoomMembershipCommand,
  DeleteRoomMembershipCommandInput,
  DeleteRoomMembershipCommandOutput,
} from "./commands/DeleteRoomMembershipCommand";
import {
  DisassociatePhoneNumberFromUserCommand,
  DisassociatePhoneNumberFromUserCommandInput,
  DisassociatePhoneNumberFromUserCommandOutput,
} from "./commands/DisassociatePhoneNumberFromUserCommand";
import {
  DisassociateSigninDelegateGroupsFromAccountCommand,
  DisassociateSigninDelegateGroupsFromAccountCommandInput,
  DisassociateSigninDelegateGroupsFromAccountCommandOutput,
} from "./commands/DisassociateSigninDelegateGroupsFromAccountCommand";
import { GetAccountCommand, GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import {
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import { GetBotCommand, GetBotCommandInput, GetBotCommandOutput } from "./commands/GetBotCommand";
import {
  GetEventsConfigurationCommand,
  GetEventsConfigurationCommandInput,
  GetEventsConfigurationCommandOutput,
} from "./commands/GetEventsConfigurationCommand";
import {
  GetGlobalSettingsCommand,
  GetGlobalSettingsCommandInput,
  GetGlobalSettingsCommandOutput,
} from "./commands/GetGlobalSettingsCommand";
import {
  GetPhoneNumberCommand,
  GetPhoneNumberCommandInput,
  GetPhoneNumberCommandOutput,
} from "./commands/GetPhoneNumberCommand";
import {
  GetPhoneNumberOrderCommand,
  GetPhoneNumberOrderCommandInput,
  GetPhoneNumberOrderCommandOutput,
} from "./commands/GetPhoneNumberOrderCommand";
import {
  GetPhoneNumberSettingsCommand,
  GetPhoneNumberSettingsCommandInput,
  GetPhoneNumberSettingsCommandOutput,
} from "./commands/GetPhoneNumberSettingsCommand";
import {
  GetRetentionSettingsCommand,
  GetRetentionSettingsCommandInput,
  GetRetentionSettingsCommandOutput,
} from "./commands/GetRetentionSettingsCommand";
import { GetRoomCommand, GetRoomCommandInput, GetRoomCommandOutput } from "./commands/GetRoomCommand";
import { GetUserCommand, GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import {
  GetUserSettingsCommand,
  GetUserSettingsCommandInput,
  GetUserSettingsCommandOutput,
} from "./commands/GetUserSettingsCommand";
import { InviteUsersCommand, InviteUsersCommandInput, InviteUsersCommandOutput } from "./commands/InviteUsersCommand";
import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "./commands/ListAccountsCommand";
import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import {
  ListPhoneNumberOrdersCommand,
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "./commands/ListPhoneNumberOrdersCommand";
import {
  ListPhoneNumbersCommand,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput,
} from "./commands/ListPhoneNumbersCommand";
import {
  ListRoomMembershipsCommand,
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput,
} from "./commands/ListRoomMembershipsCommand";
import { ListRoomsCommand, ListRoomsCommandInput, ListRoomsCommandOutput } from "./commands/ListRoomsCommand";
import {
  ListSupportedPhoneNumberCountriesCommand,
  ListSupportedPhoneNumberCountriesCommandInput,
  ListSupportedPhoneNumberCountriesCommandOutput,
} from "./commands/ListSupportedPhoneNumberCountriesCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { LogoutUserCommand, LogoutUserCommandInput, LogoutUserCommandOutput } from "./commands/LogoutUserCommand";
import {
  PutEventsConfigurationCommand,
  PutEventsConfigurationCommandInput,
  PutEventsConfigurationCommandOutput,
} from "./commands/PutEventsConfigurationCommand";
import {
  PutRetentionSettingsCommand,
  PutRetentionSettingsCommandInput,
  PutRetentionSettingsCommandOutput,
} from "./commands/PutRetentionSettingsCommand";
import {
  RedactConversationMessageCommand,
  RedactConversationMessageCommandInput,
  RedactConversationMessageCommandOutput,
} from "./commands/RedactConversationMessageCommand";
import {
  RedactRoomMessageCommand,
  RedactRoomMessageCommandInput,
  RedactRoomMessageCommandOutput,
} from "./commands/RedactRoomMessageCommand";
import {
  RegenerateSecurityTokenCommand,
  RegenerateSecurityTokenCommandInput,
  RegenerateSecurityTokenCommandOutput,
} from "./commands/RegenerateSecurityTokenCommand";
import {
  ResetPersonalPINCommand,
  ResetPersonalPINCommandInput,
  ResetPersonalPINCommandOutput,
} from "./commands/ResetPersonalPINCommand";
import {
  RestorePhoneNumberCommand,
  RestorePhoneNumberCommandInput,
  RestorePhoneNumberCommandOutput,
} from "./commands/RestorePhoneNumberCommand";
import {
  SearchAvailablePhoneNumbersCommand,
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "./commands/SearchAvailablePhoneNumbersCommand";
import {
  UpdateAccountCommand,
  UpdateAccountCommandInput,
  UpdateAccountCommandOutput,
} from "./commands/UpdateAccountCommand";
import {
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import { UpdateBotCommand, UpdateBotCommandInput, UpdateBotCommandOutput } from "./commands/UpdateBotCommand";
import {
  UpdateGlobalSettingsCommand,
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand";
import {
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberCommandInput,
  UpdatePhoneNumberCommandOutput,
} from "./commands/UpdatePhoneNumberCommand";
import {
  UpdatePhoneNumberSettingsCommand,
  UpdatePhoneNumberSettingsCommandInput,
  UpdatePhoneNumberSettingsCommandOutput,
} from "./commands/UpdatePhoneNumberSettingsCommand";
import { UpdateRoomCommand, UpdateRoomCommandInput, UpdateRoomCommandOutput } from "./commands/UpdateRoomCommand";
import {
  UpdateRoomMembershipCommand,
  UpdateRoomMembershipCommandInput,
  UpdateRoomMembershipCommandOutput,
} from "./commands/UpdateRoomMembershipCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  UpdateUserSettingsCommand,
  UpdateUserSettingsCommandInput,
  UpdateUserSettingsCommandOutput,
} from "./commands/UpdateUserSettingsCommand";

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

export interface Chime {
  /**
   * @see {@link AssociatePhoneNumberWithUserCommand}
   */
  associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumberWithUserCommandOutput>;
  associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserCommandInput,
    cb: (err: any, data?: AssociatePhoneNumberWithUserCommandOutput) => void
  ): void;
  associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumberWithUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSigninDelegateGroupsWithAccountCommand}
   */
  associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSigninDelegateGroupsWithAccountCommandOutput>;
  associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    cb: (err: any, data?: AssociateSigninDelegateGroupsWithAccountCommandOutput) => void
  ): void;
  associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSigninDelegateGroupsWithAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateRoomMembershipCommand}
   */
  batchCreateRoomMembership(
    args: BatchCreateRoomMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateRoomMembershipCommandOutput>;
  batchCreateRoomMembership(
    args: BatchCreateRoomMembershipCommandInput,
    cb: (err: any, data?: BatchCreateRoomMembershipCommandOutput) => void
  ): void;
  batchCreateRoomMembership(
    args: BatchCreateRoomMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateRoomMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeletePhoneNumberCommand}
   */
  batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeletePhoneNumberCommandOutput>;
  batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    cb: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): void;
  batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchSuspendUserCommand}
   */
  batchSuspendUser(
    args: BatchSuspendUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchSuspendUserCommandOutput>;
  batchSuspendUser(
    args: BatchSuspendUserCommandInput,
    cb: (err: any, data?: BatchSuspendUserCommandOutput) => void
  ): void;
  batchSuspendUser(
    args: BatchSuspendUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchSuspendUserCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUnsuspendUserCommand}
   */
  batchUnsuspendUser(
    args: BatchUnsuspendUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUnsuspendUserCommandOutput>;
  batchUnsuspendUser(
    args: BatchUnsuspendUserCommandInput,
    cb: (err: any, data?: BatchUnsuspendUserCommandOutput) => void
  ): void;
  batchUnsuspendUser(
    args: BatchUnsuspendUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUnsuspendUserCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdatePhoneNumberCommand}
   */
  batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdatePhoneNumberCommandOutput>;
  batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    cb: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): void;
  batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateUserCommand}
   */
  batchUpdateUser(
    args: BatchUpdateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateUserCommandOutput>;
  batchUpdateUser(args: BatchUpdateUserCommandInput, cb: (err: any, data?: BatchUpdateUserCommandOutput) => void): void;
  batchUpdateUser(
    args: BatchUpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccountCommand}
   */
  createAccount(args: CreateAccountCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccountCommandOutput>;
  createAccount(args: CreateAccountCommandInput, cb: (err: any, data?: CreateAccountCommandOutput) => void): void;
  createAccount(
    args: CreateAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountCommandOutput) => void
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
   * @see {@link CreateMeetingDialOutCommand}
   */
  createMeetingDialOut(
    args: CreateMeetingDialOutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMeetingDialOutCommandOutput>;
  createMeetingDialOut(
    args: CreateMeetingDialOutCommandInput,
    cb: (err: any, data?: CreateMeetingDialOutCommandOutput) => void
  ): void;
  createMeetingDialOut(
    args: CreateMeetingDialOutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeetingDialOutCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePhoneNumberOrderCommand}
   */
  createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePhoneNumberOrderCommandOutput>;
  createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    cb: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): void;
  createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRoomCommand}
   */
  createRoom(args: CreateRoomCommandInput, options?: __HttpHandlerOptions): Promise<CreateRoomCommandOutput>;
  createRoom(args: CreateRoomCommandInput, cb: (err: any, data?: CreateRoomCommandOutput) => void): void;
  createRoom(
    args: CreateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRoomMembershipCommand}
   */
  createRoomMembership(
    args: CreateRoomMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRoomMembershipCommandOutput>;
  createRoomMembership(
    args: CreateRoomMembershipCommandInput,
    cb: (err: any, data?: CreateRoomMembershipCommandOutput) => void
  ): void;
  createRoomMembership(
    args: CreateRoomMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoomMembershipCommandOutput) => void
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
   * @see {@link DeleteAccountCommand}
   */
  deleteAccount(args: DeleteAccountCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccountCommandOutput>;
  deleteAccount(args: DeleteAccountCommandInput, cb: (err: any, data?: DeleteAccountCommandOutput) => void): void;
  deleteAccount(
    args: DeleteAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventsConfigurationCommand}
   */
  deleteEventsConfiguration(
    args: DeleteEventsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventsConfigurationCommandOutput>;
  deleteEventsConfiguration(
    args: DeleteEventsConfigurationCommandInput,
    cb: (err: any, data?: DeleteEventsConfigurationCommandOutput) => void
  ): void;
  deleteEventsConfiguration(
    args: DeleteEventsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePhoneNumberCommand}
   */
  deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePhoneNumberCommandOutput>;
  deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    cb: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): void;
  deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoomCommand}
   */
  deleteRoom(args: DeleteRoomCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRoomCommandOutput>;
  deleteRoom(args: DeleteRoomCommandInput, cb: (err: any, data?: DeleteRoomCommandOutput) => void): void;
  deleteRoom(
    args: DeleteRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoomMembershipCommand}
   */
  deleteRoomMembership(
    args: DeleteRoomMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoomMembershipCommandOutput>;
  deleteRoomMembership(
    args: DeleteRoomMembershipCommandInput,
    cb: (err: any, data?: DeleteRoomMembershipCommandOutput) => void
  ): void;
  deleteRoomMembership(
    args: DeleteRoomMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoomMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociatePhoneNumberFromUserCommand}
   */
  disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumberFromUserCommandOutput>;
  disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumberFromUserCommandOutput) => void
  ): void;
  disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumberFromUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSigninDelegateGroupsFromAccountCommand}
   */
  disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput>;
  disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    cb: (err: any, data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput) => void
  ): void;
  disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountCommand}
   */
  getAccount(args: GetAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountCommandOutput>;
  getAccount(args: GetAccountCommandInput, cb: (err: any, data?: GetAccountCommandOutput) => void): void;
  getAccount(
    args: GetAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
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
   * @see {@link GetEventsConfigurationCommand}
   */
  getEventsConfiguration(
    args: GetEventsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventsConfigurationCommandOutput>;
  getEventsConfiguration(
    args: GetEventsConfigurationCommandInput,
    cb: (err: any, data?: GetEventsConfigurationCommandOutput) => void
  ): void;
  getEventsConfiguration(
    args: GetEventsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGlobalSettingsCommand}
   */
  getGlobalSettings(): Promise<GetGlobalSettingsCommandOutput>;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGlobalSettingsCommandOutput>;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPhoneNumberCommand}
   */
  getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberCommandOutput>;
  getPhoneNumber(args: GetPhoneNumberCommandInput, cb: (err: any, data?: GetPhoneNumberCommandOutput) => void): void;
  getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPhoneNumberOrderCommand}
   */
  getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberOrderCommandOutput>;
  getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    cb: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): void;
  getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPhoneNumberSettingsCommand}
   */
  getPhoneNumberSettings(): Promise<GetPhoneNumberSettingsCommandOutput>;
  getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberSettingsCommandOutput>;
  getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    cb: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): void;
  getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRetentionSettingsCommand}
   */
  getRetentionSettings(
    args: GetRetentionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRetentionSettingsCommandOutput>;
  getRetentionSettings(
    args: GetRetentionSettingsCommandInput,
    cb: (err: any, data?: GetRetentionSettingsCommandOutput) => void
  ): void;
  getRetentionSettings(
    args: GetRetentionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRetentionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRoomCommand}
   */
  getRoom(args: GetRoomCommandInput, options?: __HttpHandlerOptions): Promise<GetRoomCommandOutput>;
  getRoom(args: GetRoomCommandInput, cb: (err: any, data?: GetRoomCommandOutput) => void): void;
  getRoom(
    args: GetRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoomCommandOutput) => void
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
   * @see {@link GetUserSettingsCommand}
   */
  getUserSettings(
    args: GetUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserSettingsCommandOutput>;
  getUserSettings(args: GetUserSettingsCommandInput, cb: (err: any, data?: GetUserSettingsCommandOutput) => void): void;
  getUserSettings(
    args: GetUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link InviteUsersCommand}
   */
  inviteUsers(args: InviteUsersCommandInput, options?: __HttpHandlerOptions): Promise<InviteUsersCommandOutput>;
  inviteUsers(args: InviteUsersCommandInput, cb: (err: any, data?: InviteUsersCommandOutput) => void): void;
  inviteUsers(
    args: InviteUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InviteUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountsCommand}
   */
  listAccounts(): Promise<ListAccountsCommandOutput>;
  listAccounts(args: ListAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountsCommandOutput>;
  listAccounts(args: ListAccountsCommandInput, cb: (err: any, data?: ListAccountsCommandOutput) => void): void;
  listAccounts(
    args: ListAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
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
   * @see {@link ListPhoneNumberOrdersCommand}
   */
  listPhoneNumberOrders(): Promise<ListPhoneNumberOrdersCommandOutput>;
  listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumberOrdersCommandOutput>;
  listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    cb: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): void;
  listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPhoneNumbersCommand}
   */
  listPhoneNumbers(): Promise<ListPhoneNumbersCommandOutput>;
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumbersCommandOutput>;
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoomMembershipsCommand}
   */
  listRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoomMembershipsCommandOutput>;
  listRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    cb: (err: any, data?: ListRoomMembershipsCommandOutput) => void
  ): void;
  listRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoomMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoomsCommand}
   */
  listRooms(args: ListRoomsCommandInput, options?: __HttpHandlerOptions): Promise<ListRoomsCommandOutput>;
  listRooms(args: ListRoomsCommandInput, cb: (err: any, data?: ListRoomsCommandOutput) => void): void;
  listRooms(
    args: ListRoomsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoomsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSupportedPhoneNumberCountriesCommand}
   */
  listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSupportedPhoneNumberCountriesCommandOutput>;
  listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    cb: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
  ): void;
  listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
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
   * @see {@link LogoutUserCommand}
   */
  logoutUser(args: LogoutUserCommandInput, options?: __HttpHandlerOptions): Promise<LogoutUserCommandOutput>;
  logoutUser(args: LogoutUserCommandInput, cb: (err: any, data?: LogoutUserCommandOutput) => void): void;
  logoutUser(
    args: LogoutUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LogoutUserCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventsConfigurationCommand}
   */
  putEventsConfiguration(
    args: PutEventsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEventsConfigurationCommandOutput>;
  putEventsConfiguration(
    args: PutEventsConfigurationCommandInput,
    cb: (err: any, data?: PutEventsConfigurationCommandOutput) => void
  ): void;
  putEventsConfiguration(
    args: PutEventsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRetentionSettingsCommand}
   */
  putRetentionSettings(
    args: PutRetentionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRetentionSettingsCommandOutput>;
  putRetentionSettings(
    args: PutRetentionSettingsCommandInput,
    cb: (err: any, data?: PutRetentionSettingsCommandOutput) => void
  ): void;
  putRetentionSettings(
    args: PutRetentionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRetentionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link RedactConversationMessageCommand}
   */
  redactConversationMessage(
    args: RedactConversationMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RedactConversationMessageCommandOutput>;
  redactConversationMessage(
    args: RedactConversationMessageCommandInput,
    cb: (err: any, data?: RedactConversationMessageCommandOutput) => void
  ): void;
  redactConversationMessage(
    args: RedactConversationMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RedactConversationMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link RedactRoomMessageCommand}
   */
  redactRoomMessage(
    args: RedactRoomMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RedactRoomMessageCommandOutput>;
  redactRoomMessage(
    args: RedactRoomMessageCommandInput,
    cb: (err: any, data?: RedactRoomMessageCommandOutput) => void
  ): void;
  redactRoomMessage(
    args: RedactRoomMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RedactRoomMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link RegenerateSecurityTokenCommand}
   */
  regenerateSecurityToken(
    args: RegenerateSecurityTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegenerateSecurityTokenCommandOutput>;
  regenerateSecurityToken(
    args: RegenerateSecurityTokenCommandInput,
    cb: (err: any, data?: RegenerateSecurityTokenCommandOutput) => void
  ): void;
  regenerateSecurityToken(
    args: RegenerateSecurityTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegenerateSecurityTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetPersonalPINCommand}
   */
  resetPersonalPIN(
    args: ResetPersonalPINCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetPersonalPINCommandOutput>;
  resetPersonalPIN(
    args: ResetPersonalPINCommandInput,
    cb: (err: any, data?: ResetPersonalPINCommandOutput) => void
  ): void;
  resetPersonalPIN(
    args: ResetPersonalPINCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetPersonalPINCommandOutput) => void
  ): void;

  /**
   * @see {@link RestorePhoneNumberCommand}
   */
  restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestorePhoneNumberCommandOutput>;
  restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    cb: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): void;
  restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAvailablePhoneNumbersCommand}
   */
  searchAvailablePhoneNumbers(): Promise<SearchAvailablePhoneNumbersCommandOutput>;
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAvailablePhoneNumbersCommandOutput>;
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountCommand}
   */
  updateAccount(args: UpdateAccountCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAccountCommandOutput>;
  updateAccount(args: UpdateAccountCommandInput, cb: (err: any, data?: UpdateAccountCommandOutput) => void): void;
  updateAccount(
    args: UpdateAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
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
   * @see {@link UpdateGlobalSettingsCommand}
   */
  updateGlobalSettings(): Promise<UpdateGlobalSettingsCommandOutput>;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalSettingsCommandOutput>;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePhoneNumberCommand}
   */
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberCommandOutput>;
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePhoneNumberSettingsCommand}
   */
  updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberSettingsCommandOutput>;
  updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): void;
  updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoomCommand}
   */
  updateRoom(args: UpdateRoomCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoomCommandOutput>;
  updateRoom(args: UpdateRoomCommandInput, cb: (err: any, data?: UpdateRoomCommandOutput) => void): void;
  updateRoom(
    args: UpdateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoomMembershipCommand}
   */
  updateRoomMembership(
    args: UpdateRoomMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoomMembershipCommandOutput>;
  updateRoomMembership(
    args: UpdateRoomMembershipCommandInput,
    cb: (err: any, data?: UpdateRoomMembershipCommandOutput) => void
  ): void;
  updateRoomMembership(
    args: UpdateRoomMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoomMembershipCommandOutput) => void
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

  /**
   * @see {@link UpdateUserSettingsCommand}
   */
  updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserSettingsCommandOutput>;
  updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    cb: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): void;
  updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): void;
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
 * @deprecated This namespace has been deprecated
 * @public
 */
export class Chime extends ChimeClient implements Chime {}
createAggregatedClient(commands, Chime);
