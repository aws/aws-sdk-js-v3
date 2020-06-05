import { ChimeClient } from "./ChimeClient";
import {
  AssociatePhoneNumberWithUserCommand,
  AssociatePhoneNumberWithUserCommandInput,
  AssociatePhoneNumberWithUserCommandOutput
} from "./commands/AssociatePhoneNumberWithUserCommand";
import {
  AssociatePhoneNumbersWithVoiceConnectorCommand,
  AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorCommandOutput
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorCommand";
import {
  AssociatePhoneNumbersWithVoiceConnectorGroupCommand,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorGroupCommand";
import {
  AssociateSigninDelegateGroupsWithAccountCommand,
  AssociateSigninDelegateGroupsWithAccountCommandInput,
  AssociateSigninDelegateGroupsWithAccountCommandOutput
} from "./commands/AssociateSigninDelegateGroupsWithAccountCommand";
import {
  BatchCreateAttendeeCommand,
  BatchCreateAttendeeCommandInput,
  BatchCreateAttendeeCommandOutput
} from "./commands/BatchCreateAttendeeCommand";
import {
  BatchCreateRoomMembershipCommand,
  BatchCreateRoomMembershipCommandInput,
  BatchCreateRoomMembershipCommandOutput
} from "./commands/BatchCreateRoomMembershipCommand";
import {
  BatchDeletePhoneNumberCommand,
  BatchDeletePhoneNumberCommandInput,
  BatchDeletePhoneNumberCommandOutput
} from "./commands/BatchDeletePhoneNumberCommand";
import {
  BatchSuspendUserCommand,
  BatchSuspendUserCommandInput,
  BatchSuspendUserCommandOutput
} from "./commands/BatchSuspendUserCommand";
import {
  BatchUnsuspendUserCommand,
  BatchUnsuspendUserCommandInput,
  BatchUnsuspendUserCommandOutput
} from "./commands/BatchUnsuspendUserCommand";
import {
  BatchUpdatePhoneNumberCommand,
  BatchUpdatePhoneNumberCommandInput,
  BatchUpdatePhoneNumberCommandOutput
} from "./commands/BatchUpdatePhoneNumberCommand";
import {
  BatchUpdateUserCommand,
  BatchUpdateUserCommandInput,
  BatchUpdateUserCommandOutput
} from "./commands/BatchUpdateUserCommand";
import {
  CreateAccountCommand,
  CreateAccountCommandInput,
  CreateAccountCommandOutput
} from "./commands/CreateAccountCommand";
import {
  CreateAttendeeCommand,
  CreateAttendeeCommandInput,
  CreateAttendeeCommandOutput
} from "./commands/CreateAttendeeCommand";
import {
  CreateBotCommand,
  CreateBotCommandInput,
  CreateBotCommandOutput
} from "./commands/CreateBotCommand";
import {
  CreateMeetingCommand,
  CreateMeetingCommandInput,
  CreateMeetingCommandOutput
} from "./commands/CreateMeetingCommand";
import {
  CreatePhoneNumberOrderCommand,
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput
} from "./commands/CreatePhoneNumberOrderCommand";
import {
  CreateRoomCommand,
  CreateRoomCommandInput,
  CreateRoomCommandOutput
} from "./commands/CreateRoomCommand";
import {
  CreateRoomMembershipCommand,
  CreateRoomMembershipCommandInput,
  CreateRoomMembershipCommandOutput
} from "./commands/CreateRoomMembershipCommand";
import {
  CreateUserCommand,
  CreateUserCommandInput,
  CreateUserCommandOutput
} from "./commands/CreateUserCommand";
import {
  CreateVoiceConnectorCommand,
  CreateVoiceConnectorCommandInput,
  CreateVoiceConnectorCommandOutput
} from "./commands/CreateVoiceConnectorCommand";
import {
  CreateVoiceConnectorGroupCommand,
  CreateVoiceConnectorGroupCommandInput,
  CreateVoiceConnectorGroupCommandOutput
} from "./commands/CreateVoiceConnectorGroupCommand";
import {
  DeleteAccountCommand,
  DeleteAccountCommandInput,
  DeleteAccountCommandOutput
} from "./commands/DeleteAccountCommand";
import {
  DeleteAttendeeCommand,
  DeleteAttendeeCommandInput,
  DeleteAttendeeCommandOutput
} from "./commands/DeleteAttendeeCommand";
import {
  DeleteEventsConfigurationCommand,
  DeleteEventsConfigurationCommandInput,
  DeleteEventsConfigurationCommandOutput
} from "./commands/DeleteEventsConfigurationCommand";
import {
  DeleteMeetingCommand,
  DeleteMeetingCommandInput,
  DeleteMeetingCommandOutput
} from "./commands/DeleteMeetingCommand";
import {
  DeletePhoneNumberCommand,
  DeletePhoneNumberCommandInput,
  DeletePhoneNumberCommandOutput
} from "./commands/DeletePhoneNumberCommand";
import {
  DeleteRoomCommand,
  DeleteRoomCommandInput,
  DeleteRoomCommandOutput
} from "./commands/DeleteRoomCommand";
import {
  DeleteRoomMembershipCommand,
  DeleteRoomMembershipCommandInput,
  DeleteRoomMembershipCommandOutput
} from "./commands/DeleteRoomMembershipCommand";
import {
  DeleteVoiceConnectorCommand,
  DeleteVoiceConnectorCommandInput,
  DeleteVoiceConnectorCommandOutput
} from "./commands/DeleteVoiceConnectorCommand";
import {
  DeleteVoiceConnectorGroupCommand,
  DeleteVoiceConnectorGroupCommandInput,
  DeleteVoiceConnectorGroupCommandOutput
} from "./commands/DeleteVoiceConnectorGroupCommand";
import {
  DeleteVoiceConnectorOriginationCommand,
  DeleteVoiceConnectorOriginationCommandInput,
  DeleteVoiceConnectorOriginationCommandOutput
} from "./commands/DeleteVoiceConnectorOriginationCommand";
import {
  DeleteVoiceConnectorStreamingConfigurationCommand,
  DeleteVoiceConnectorStreamingConfigurationCommandInput,
  DeleteVoiceConnectorStreamingConfigurationCommandOutput
} from "./commands/DeleteVoiceConnectorStreamingConfigurationCommand";
import {
  DeleteVoiceConnectorTerminationCommand,
  DeleteVoiceConnectorTerminationCommandInput,
  DeleteVoiceConnectorTerminationCommandOutput
} from "./commands/DeleteVoiceConnectorTerminationCommand";
import {
  DeleteVoiceConnectorTerminationCredentialsCommand,
  DeleteVoiceConnectorTerminationCredentialsCommandInput,
  DeleteVoiceConnectorTerminationCredentialsCommandOutput
} from "./commands/DeleteVoiceConnectorTerminationCredentialsCommand";
import {
  DisassociatePhoneNumberFromUserCommand,
  DisassociatePhoneNumberFromUserCommandInput,
  DisassociatePhoneNumberFromUserCommandOutput
} from "./commands/DisassociatePhoneNumberFromUserCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorCommand,
  DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorCommandOutput
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorGroupCommand";
import {
  DisassociateSigninDelegateGroupsFromAccountCommand,
  DisassociateSigninDelegateGroupsFromAccountCommandInput,
  DisassociateSigninDelegateGroupsFromAccountCommandOutput
} from "./commands/DisassociateSigninDelegateGroupsFromAccountCommand";
import {
  GetAccountCommand,
  GetAccountCommandInput,
  GetAccountCommandOutput
} from "./commands/GetAccountCommand";
import {
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput
} from "./commands/GetAccountSettingsCommand";
import {
  GetAttendeeCommand,
  GetAttendeeCommandInput,
  GetAttendeeCommandOutput
} from "./commands/GetAttendeeCommand";
import {
  GetBotCommand,
  GetBotCommandInput,
  GetBotCommandOutput
} from "./commands/GetBotCommand";
import {
  GetEventsConfigurationCommand,
  GetEventsConfigurationCommandInput,
  GetEventsConfigurationCommandOutput
} from "./commands/GetEventsConfigurationCommand";
import {
  GetGlobalSettingsCommand,
  GetGlobalSettingsCommandInput,
  GetGlobalSettingsCommandOutput
} from "./commands/GetGlobalSettingsCommand";
import {
  GetMeetingCommand,
  GetMeetingCommandInput,
  GetMeetingCommandOutput
} from "./commands/GetMeetingCommand";
import {
  GetPhoneNumberCommand,
  GetPhoneNumberCommandInput,
  GetPhoneNumberCommandOutput
} from "./commands/GetPhoneNumberCommand";
import {
  GetPhoneNumberOrderCommand,
  GetPhoneNumberOrderCommandInput,
  GetPhoneNumberOrderCommandOutput
} from "./commands/GetPhoneNumberOrderCommand";
import {
  GetPhoneNumberSettingsCommand,
  GetPhoneNumberSettingsCommandInput,
  GetPhoneNumberSettingsCommandOutput
} from "./commands/GetPhoneNumberSettingsCommand";
import {
  GetRoomCommand,
  GetRoomCommandInput,
  GetRoomCommandOutput
} from "./commands/GetRoomCommand";
import {
  GetUserCommand,
  GetUserCommandInput,
  GetUserCommandOutput
} from "./commands/GetUserCommand";
import {
  GetUserSettingsCommand,
  GetUserSettingsCommandInput,
  GetUserSettingsCommandOutput
} from "./commands/GetUserSettingsCommand";
import {
  GetVoiceConnectorCommand,
  GetVoiceConnectorCommandInput,
  GetVoiceConnectorCommandOutput
} from "./commands/GetVoiceConnectorCommand";
import {
  GetVoiceConnectorGroupCommand,
  GetVoiceConnectorGroupCommandInput,
  GetVoiceConnectorGroupCommandOutput
} from "./commands/GetVoiceConnectorGroupCommand";
import {
  GetVoiceConnectorLoggingConfigurationCommand,
  GetVoiceConnectorLoggingConfigurationCommandInput,
  GetVoiceConnectorLoggingConfigurationCommandOutput
} from "./commands/GetVoiceConnectorLoggingConfigurationCommand";
import {
  GetVoiceConnectorOriginationCommand,
  GetVoiceConnectorOriginationCommandInput,
  GetVoiceConnectorOriginationCommandOutput
} from "./commands/GetVoiceConnectorOriginationCommand";
import {
  GetVoiceConnectorStreamingConfigurationCommand,
  GetVoiceConnectorStreamingConfigurationCommandInput,
  GetVoiceConnectorStreamingConfigurationCommandOutput
} from "./commands/GetVoiceConnectorStreamingConfigurationCommand";
import {
  GetVoiceConnectorTerminationCommand,
  GetVoiceConnectorTerminationCommandInput,
  GetVoiceConnectorTerminationCommandOutput
} from "./commands/GetVoiceConnectorTerminationCommand";
import {
  GetVoiceConnectorTerminationHealthCommand,
  GetVoiceConnectorTerminationHealthCommandInput,
  GetVoiceConnectorTerminationHealthCommandOutput
} from "./commands/GetVoiceConnectorTerminationHealthCommand";
import {
  InviteUsersCommand,
  InviteUsersCommandInput,
  InviteUsersCommandOutput
} from "./commands/InviteUsersCommand";
import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput
} from "./commands/ListAccountsCommand";
import {
  ListAttendeesCommand,
  ListAttendeesCommandInput,
  ListAttendeesCommandOutput
} from "./commands/ListAttendeesCommand";
import {
  ListBotsCommand,
  ListBotsCommandInput,
  ListBotsCommandOutput
} from "./commands/ListBotsCommand";
import {
  ListMeetingsCommand,
  ListMeetingsCommandInput,
  ListMeetingsCommandOutput
} from "./commands/ListMeetingsCommand";
import {
  ListPhoneNumberOrdersCommand,
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput
} from "./commands/ListPhoneNumberOrdersCommand";
import {
  ListPhoneNumbersCommand,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput
} from "./commands/ListPhoneNumbersCommand";
import {
  ListRoomMembershipsCommand,
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput
} from "./commands/ListRoomMembershipsCommand";
import {
  ListRoomsCommand,
  ListRoomsCommandInput,
  ListRoomsCommandOutput
} from "./commands/ListRoomsCommand";
import {
  ListUsersCommand,
  ListUsersCommandInput,
  ListUsersCommandOutput
} from "./commands/ListUsersCommand";
import {
  ListVoiceConnectorGroupsCommand,
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput
} from "./commands/ListVoiceConnectorGroupsCommand";
import {
  ListVoiceConnectorTerminationCredentialsCommand,
  ListVoiceConnectorTerminationCredentialsCommandInput,
  ListVoiceConnectorTerminationCredentialsCommandOutput
} from "./commands/ListVoiceConnectorTerminationCredentialsCommand";
import {
  ListVoiceConnectorsCommand,
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput
} from "./commands/ListVoiceConnectorsCommand";
import {
  LogoutUserCommand,
  LogoutUserCommandInput,
  LogoutUserCommandOutput
} from "./commands/LogoutUserCommand";
import {
  PutEventsConfigurationCommand,
  PutEventsConfigurationCommandInput,
  PutEventsConfigurationCommandOutput
} from "./commands/PutEventsConfigurationCommand";
import {
  PutVoiceConnectorLoggingConfigurationCommand,
  PutVoiceConnectorLoggingConfigurationCommandInput,
  PutVoiceConnectorLoggingConfigurationCommandOutput
} from "./commands/PutVoiceConnectorLoggingConfigurationCommand";
import {
  PutVoiceConnectorOriginationCommand,
  PutVoiceConnectorOriginationCommandInput,
  PutVoiceConnectorOriginationCommandOutput
} from "./commands/PutVoiceConnectorOriginationCommand";
import {
  PutVoiceConnectorStreamingConfigurationCommand,
  PutVoiceConnectorStreamingConfigurationCommandInput,
  PutVoiceConnectorStreamingConfigurationCommandOutput
} from "./commands/PutVoiceConnectorStreamingConfigurationCommand";
import {
  PutVoiceConnectorTerminationCommand,
  PutVoiceConnectorTerminationCommandInput,
  PutVoiceConnectorTerminationCommandOutput
} from "./commands/PutVoiceConnectorTerminationCommand";
import {
  PutVoiceConnectorTerminationCredentialsCommand,
  PutVoiceConnectorTerminationCredentialsCommandInput,
  PutVoiceConnectorTerminationCredentialsCommandOutput
} from "./commands/PutVoiceConnectorTerminationCredentialsCommand";
import {
  RegenerateSecurityTokenCommand,
  RegenerateSecurityTokenCommandInput,
  RegenerateSecurityTokenCommandOutput
} from "./commands/RegenerateSecurityTokenCommand";
import {
  ResetPersonalPINCommand,
  ResetPersonalPINCommandInput,
  ResetPersonalPINCommandOutput
} from "./commands/ResetPersonalPINCommand";
import {
  RestorePhoneNumberCommand,
  RestorePhoneNumberCommandInput,
  RestorePhoneNumberCommandOutput
} from "./commands/RestorePhoneNumberCommand";
import {
  SearchAvailablePhoneNumbersCommand,
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput
} from "./commands/SearchAvailablePhoneNumbersCommand";
import {
  UpdateAccountCommand,
  UpdateAccountCommandInput,
  UpdateAccountCommandOutput
} from "./commands/UpdateAccountCommand";
import {
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput
} from "./commands/UpdateAccountSettingsCommand";
import {
  UpdateBotCommand,
  UpdateBotCommandInput,
  UpdateBotCommandOutput
} from "./commands/UpdateBotCommand";
import {
  UpdateGlobalSettingsCommand,
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput
} from "./commands/UpdateGlobalSettingsCommand";
import {
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberCommandInput,
  UpdatePhoneNumberCommandOutput
} from "./commands/UpdatePhoneNumberCommand";
import {
  UpdatePhoneNumberSettingsCommand,
  UpdatePhoneNumberSettingsCommandInput,
  UpdatePhoneNumberSettingsCommandOutput
} from "./commands/UpdatePhoneNumberSettingsCommand";
import {
  UpdateRoomCommand,
  UpdateRoomCommandInput,
  UpdateRoomCommandOutput
} from "./commands/UpdateRoomCommand";
import {
  UpdateRoomMembershipCommand,
  UpdateRoomMembershipCommandInput,
  UpdateRoomMembershipCommandOutput
} from "./commands/UpdateRoomMembershipCommand";
import {
  UpdateUserCommand,
  UpdateUserCommandInput,
  UpdateUserCommandOutput
} from "./commands/UpdateUserCommand";
import {
  UpdateUserSettingsCommand,
  UpdateUserSettingsCommandInput,
  UpdateUserSettingsCommandOutput
} from "./commands/UpdateUserSettingsCommand";
import {
  UpdateVoiceConnectorCommand,
  UpdateVoiceConnectorCommandInput,
  UpdateVoiceConnectorCommandOutput
} from "./commands/UpdateVoiceConnectorCommand";
import {
  UpdateVoiceConnectorGroupCommand,
  UpdateVoiceConnectorGroupCommandInput,
  UpdateVoiceConnectorGroupCommandOutput
} from "./commands/UpdateVoiceConnectorGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>The Amazon Chime API (application programming interface) is designed for developers to
 *       perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice
 *       Connectors. This guide provides detailed information about the Amazon Chime API, including
 *       operations, types, inputs and outputs, and error codes. It also includes some server-side API
 *       actions to use with the Amazon Chime SDK. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the
 *         <i>Amazon Chime Developer Guide</i>.</p>
 *          <p>You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to
 *       make API calls. We recommend using an AWS SDK or the AWS CLI. Each API operation includes
 *       links to information about using it with a language-specific AWS SDK or the AWS CLI.</p>
 *          <dl>
 *             <dt>Using an AWS SDK</dt>
 *             <dd>
 *                <p>You don't need to write code to calculate a signature for request
 *             authentication. The SDK clients authenticate your requests by using access keys that you
 *             provide. For more information about AWS SDKs, see the <a href="http://aws.amazon.com/developer/">AWS Developer Center</a>.</p>
 *             </dd>
 *             <dt>Using the AWS CLI</dt>
 *             <dd>
 *                <p>Use your access keys with the AWS CLI to make API calls. For information about
 *             setting up the AWS CLI, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html">Installing the AWS Command Line
 *               Interface</a> in the <i>AWS Command Line Interface User Guide</i>.
 *             For a list of available Amazon Chime commands, see the <a href="https://docs.aws.amazon.com/cli/latest/reference/chime/index.html">Amazon Chime commands</a> in the
 *               <i>AWS CLI Command Reference</i>.</p>
 *             </dd>
 *             <dt>Using REST API</dt>
 *             <dd>
 *                <p>If you use REST to make API calls, you must authenticate your request by providing
 *             a signature. Amazon Chime supports signature version 4. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature
 *               Version 4 Signing Process</a> in the <i>Amazon Web Services General
 *               Reference</i>.</p>
 *                <p>When making REST API calls, use the service name <code>chime</code> and REST
 *             endpoint <code>https://service.chime.aws.amazon.com</code>.</p>
 *             </dd>
 *          </dl>
 *
 *          <p>Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ag/security-iam.html">Identity and Access Management for Amazon Chime</a> in the
 *        <i>Amazon Chime Administration Guide</i>.</p>
 */
export class Chime extends ChimeClient {
  /**
   * <p>Associates phone numbers with the specified Amazon Chime Voice Connector.</p>
   */
  public associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorCommandOutput>;
  public associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    cb: (
      err: any,
      data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput
    ) => void
  ): void;
  public associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput
    ) => void
  ): void;
  public associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput
    ) => void
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorCommandOutput> | void {
    const command = new AssociatePhoneNumbersWithVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates phone numbers with the specified Amazon Chime Voice Connector group.</p>
   */
  public associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput>;
  public associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    cb: (
      err: any,
      data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput
    ) => void
  ): void;
  public associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput
    ) => void
  ): void;
  public associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput
    ) => void
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput> | void {
    const command = new AssociatePhoneNumbersWithVoiceConnectorGroupCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a phone number with the specified Amazon Chime user.</p>
   */
  public associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumberWithUserCommandOutput>;
  public associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserCommandInput,
    cb: (err: any, data?: AssociatePhoneNumberWithUserCommandOutput) => void
  ): void;
  public associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumberWithUserCommandOutput) => void
  ): void;
  public associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociatePhoneNumberWithUserCommandOutput) => void),
    cb?: (err: any, data?: AssociatePhoneNumberWithUserCommandOutput) => void
  ): Promise<AssociatePhoneNumberWithUserCommandOutput> | void {
    const command = new AssociatePhoneNumberWithUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates the specified sign-in delegate groups with the specified Amazon Chime account.</p>
   */
  public associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSigninDelegateGroupsWithAccountCommandOutput>;
  public associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    cb: (
      err: any,
      data?: AssociateSigninDelegateGroupsWithAccountCommandOutput
    ) => void
  ): void;
  public associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: AssociateSigninDelegateGroupsWithAccountCommandOutput
    ) => void
  ): void;
  public associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: AssociateSigninDelegateGroupsWithAccountCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: AssociateSigninDelegateGroupsWithAccountCommandOutput
    ) => void
  ): Promise<AssociateSigninDelegateGroupsWithAccountCommandOutput> | void {
    const command = new AssociateSigninDelegateGroupsWithAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates up to 100 new attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>. </p>
   */
  public batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateAttendeeCommandOutput>;
  public batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    cb: (err: any, data?: BatchCreateAttendeeCommandOutput) => void
  ): void;
  public batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateAttendeeCommandOutput) => void
  ): void;
  public batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchCreateAttendeeCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateAttendeeCommandOutput) => void
  ): Promise<BatchCreateAttendeeCommandOutput> | void {
    const command = new BatchCreateAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds up to 50 members to a chat room. Members can be either users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.</p>
   */
  public batchCreateRoomMembership(
    args: BatchCreateRoomMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateRoomMembershipCommandOutput>;
  public batchCreateRoomMembership(
    args: BatchCreateRoomMembershipCommandInput,
    cb: (err: any, data?: BatchCreateRoomMembershipCommandOutput) => void
  ): void;
  public batchCreateRoomMembership(
    args: BatchCreateRoomMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateRoomMembershipCommandOutput) => void
  ): void;
  public batchCreateRoomMembership(
    args: BatchCreateRoomMembershipCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchCreateRoomMembershipCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateRoomMembershipCommandOutput) => void
  ): Promise<BatchCreateRoomMembershipCommandOutput> | void {
    const command = new BatchCreateRoomMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Moves phone numbers into the <b>Deletion queue</b>. Phone
   *       numbers must be disassociated from any users or Amazon Chime Voice
   *       Connectors before they can be deleted.</p>
   *          <p>Phone numbers remain in the <b>Deletion queue</b> for 7 days
   *       before they are deleted permanently.</p>
   */
  public batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeletePhoneNumberCommandOutput>;
  public batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    cb: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): void;
  public batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): void;
  public batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchDeletePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): Promise<BatchDeletePhoneNumberCommandOutput> | void {
    const command = new BatchDeletePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon
   *       Chime account. For more information
   *       about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the
   *       <i>Amazon
   *         Chime Administration Guide</i>.</p>
   *          <p>Users suspended from a <code>Team</code> account are disassociated from the account,
   *       but they can continue to use Amazon Chime as free users. To remove the suspension from
   *       suspended <code>Team</code> account users, invite them to the <code>Team</code> account again.
   *       You can use the <a>InviteUsers</a> action to do so.</p>
   *          <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out
   *       of Amazon Chime and can no longer sign in. To remove the suspension from suspended
   *         <code>EnterpriseLWA</code> account users, use the <a>BatchUnsuspendUser</a>
   *       action. </p>
   *          <p>To sign out users without suspending them, use the <a>LogoutUser</a>
   *       action.</p>
   */
  public batchSuspendUser(
    args: BatchSuspendUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchSuspendUserCommandOutput>;
  public batchSuspendUser(
    args: BatchSuspendUserCommandInput,
    cb: (err: any, data?: BatchSuspendUserCommandOutput) => void
  ): void;
  public batchSuspendUser(
    args: BatchSuspendUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchSuspendUserCommandOutput) => void
  ): void;
  public batchSuspendUser(
    args: BatchSuspendUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchSuspendUserCommandOutput) => void),
    cb?: (err: any, data?: BatchSuspendUserCommandOutput) => void
  ): Promise<BatchSuspendUserCommandOutput> | void {
    const command = new BatchSuspendUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the suspension from up to 50 previously suspended users for the specified
   *       Amazon Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code>
   *       accounts can be unsuspended using this action. For more information about different account
   *       types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration
   *         Guide</i>.</p>
   *          <p>Previously suspended users who are unsuspended using this action are returned to
   *       <code>Registered</code> status. Users who are not previously suspended are ignored.</p>
   */
  public batchUnsuspendUser(
    args: BatchUnsuspendUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUnsuspendUserCommandOutput>;
  public batchUnsuspendUser(
    args: BatchUnsuspendUserCommandInput,
    cb: (err: any, data?: BatchUnsuspendUserCommandOutput) => void
  ): void;
  public batchUnsuspendUser(
    args: BatchUnsuspendUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUnsuspendUserCommandOutput) => void
  ): void;
  public batchUnsuspendUser(
    args: BatchUnsuspendUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchUnsuspendUserCommandOutput) => void),
    cb?: (err: any, data?: BatchUnsuspendUserCommandOutput) => void
  ): Promise<BatchUnsuspendUserCommandOutput> | void {
    const command = new BatchUnsuspendUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates phone number product types or calling names. You can update one attribute at a time for each <code>UpdatePhoneNumberRequestItem</code>. For example, you can update either the product type or the calling name.</p>
   *          <p>For product types, choose from Amazon Chime Business Calling and Amazon Chime Voice
   *       Connector. For toll-free numbers, you must use the Amazon Chime Voice Connector product
   *       type.</p>
   *          <p>Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>
   */
  public batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdatePhoneNumberCommandOutput>;
  public batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    cb: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): void;
  public batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): void;
  public batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): Promise<BatchUpdatePhoneNumberCommandOutput> | void {
    const command = new BatchUpdatePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates user details within the <a>UpdateUserRequestItem</a> object for up to 20 users for the specified Amazon Chime account.
   *        Currently, only <code>LicenseType</code> updates are supported for this action.</p>
   */
  public batchUpdateUser(
    args: BatchUpdateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateUserCommandOutput>;
  public batchUpdateUser(
    args: BatchUpdateUserCommandInput,
    cb: (err: any, data?: BatchUpdateUserCommandOutput) => void
  ): void;
  public batchUpdateUser(
    args: BatchUpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateUserCommandOutput) => void
  ): void;
  public batchUpdateUser(
    args: BatchUpdateUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchUpdateUserCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdateUserCommandOutput) => void
  ): Promise<BatchUpdateUserCommandOutput> | void {
    const command = new BatchUpdateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon Chime account under the administrator's AWS account. Only
   *        <code>Team</code> account types are currently supported for this action. For more information
   *        about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the
   *        <i>Amazon
   *          Chime Administration Guide</i>.</p>
   */
  public createAccount(
    args: CreateAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccountCommandOutput>;
  public createAccount(
    args: CreateAccountCommandInput,
    cb: (err: any, data?: CreateAccountCommandOutput) => void
  ): void;
  public createAccount(
    args: CreateAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountCommandOutput) => void
  ): void;
  public createAccount(
    args: CreateAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateAccountCommandOutput) => void),
    cb?: (err: any, data?: CreateAccountCommandOutput) => void
  ): Promise<CreateAccountCommandOutput> | void {
    const command = new CreateAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.</p>
   */
  public createAttendee(
    args: CreateAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAttendeeCommandOutput>;
  public createAttendee(
    args: CreateAttendeeCommandInput,
    cb: (err: any, data?: CreateAttendeeCommandOutput) => void
  ): void;
  public createAttendee(
    args: CreateAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAttendeeCommandOutput) => void
  ): void;
  public createAttendee(
    args: CreateAttendeeCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateAttendeeCommandOutput) => void),
    cb?: (err: any, data?: CreateAttendeeCommandOutput) => void
  ): Promise<CreateAttendeeCommandOutput> | void {
    const command = new CreateAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a bot for an Amazon Chime Enterprise account.</p>
   */
  public createBot(
    args: CreateBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBotCommandOutput>;
  public createBot(
    args: CreateBotCommandInput,
    cb: (err: any, data?: CreateBotCommandOutput) => void
  ): void;
  public createBot(
    args: CreateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBotCommandOutput) => void
  ): void;
  public createBot(
    args: CreateBotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateBotCommandOutput) => void),
    cb?: (err: any, data?: CreateBotCommandOutput) => void
  ): Promise<CreateBotCommandOutput> | void {
    const command = new CreateBotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.</p>
   */
  public createMeeting(
    args: CreateMeetingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMeetingCommandOutput>;
  public createMeeting(
    args: CreateMeetingCommandInput,
    cb: (err: any, data?: CreateMeetingCommandOutput) => void
  ): void;
  public createMeeting(
    args: CreateMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeetingCommandOutput) => void
  ): void;
  public createMeeting(
    args: CreateMeetingCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateMeetingCommandOutput) => void),
    cb?: (err: any, data?: CreateMeetingCommandOutput) => void
  ): Promise<CreateMeetingCommandOutput> | void {
    const command = new CreateMeetingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an order for phone numbers to be provisioned. Choose from Amazon Chime Business
   *       Calling and Amazon Chime Voice Connector product types. For toll-free numbers, you must use
   *       the Amazon Chime Voice Connector product type.</p>
   */
  public createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePhoneNumberOrderCommandOutput>;
  public createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    cb: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): void;
  public createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): void;
  public createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreatePhoneNumberOrderCommandOutput) => void),
    cb?: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): Promise<CreatePhoneNumberOrderCommandOutput> | void {
    const command = new CreatePhoneNumberOrderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a chat room for the specified Amazon Chime account.</p>
   */
  public createRoom(
    args: CreateRoomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRoomCommandOutput>;
  public createRoom(
    args: CreateRoomCommandInput,
    cb: (err: any, data?: CreateRoomCommandOutput) => void
  ): void;
  public createRoom(
    args: CreateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoomCommandOutput) => void
  ): void;
  public createRoom(
    args: CreateRoomCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateRoomCommandOutput) => void),
    cb?: (err: any, data?: CreateRoomCommandOutput) => void
  ): Promise<CreateRoomCommandOutput> | void {
    const command = new CreateRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a member to a chat room. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.</p>
   */
  public createRoomMembership(
    args: CreateRoomMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRoomMembershipCommandOutput>;
  public createRoomMembership(
    args: CreateRoomMembershipCommandInput,
    cb: (err: any, data?: CreateRoomMembershipCommandOutput) => void
  ): void;
  public createRoomMembership(
    args: CreateRoomMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoomMembershipCommandOutput) => void
  ): void;
  public createRoomMembership(
    args: CreateRoomMembershipCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateRoomMembershipCommandOutput) => void),
    cb?: (err: any, data?: CreateRoomMembershipCommandOutput) => void
  ): Promise<CreateRoomMembershipCommandOutput> | void {
    const command = new CreateRoomMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a user under the specified Amazon Chime account.</p>
   */
  public createUser(
    args: CreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserCommandOutput>;
  public createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateUserCommandOutput) => void),
    cb?: (err: any, data?: CreateUserCommandOutput) => void
  ): Promise<CreateUserCommandOutput> | void {
    const command = new CreateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region.</p>
   *          <p>Enabling <a>CreateVoiceConnectorRequest$RequireEncryption</a> configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media.
   *       Inbound calls use TLS transport, and unencrypted outbound calls are blocked.</p>
   */
  public createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceConnectorCommandOutput>;
  public createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    cb: (err: any, data?: CreateVoiceConnectorCommandOutput) => void
  ): void;
  public createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceConnectorCommandOutput) => void
  ): void;
  public createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: CreateVoiceConnectorCommandOutput) => void
  ): Promise<CreateVoiceConnectorCommandOutput> | void {
    const command = new CreateVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account.
   *       You can associate up to three existing Amazon Chime Voice Connectors with the Amazon Chime
   *       Voice Connector group by including <code>VoiceConnectorItems</code> in the request.</p>
   *          <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group.
   *       This creates a fault tolerant mechanism for fallback in case of availability events.</p>
   */
  public createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceConnectorGroupCommandOutput>;
  public createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void
  ): void;
  public createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void
  ): void;
  public createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void
  ): Promise<CreateVoiceConnectorGroupCommandOutput> | void {
    const command = new CreateVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Amazon Chime account. You must suspend all users before deleting
   *        a <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action to do
   *        so.</p>
   *          <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must
   *       release the claimed domains for your Amazon Chime account before deletion. As soon as you
   *       release the domain, all users under that account are suspended.</p>
   *          <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore a
   *      deleted account from your <code>Disabled</code> accounts list, you must contact AWS Support.</p>
   *          <p>After 90 days, deleted accounts are permanently removed from your
   *        <code>Disabled</code> accounts list.</p>
   */
  public deleteAccount(
    args: DeleteAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountCommandOutput>;
  public deleteAccount(
    args: DeleteAccountCommandInput,
    cb: (err: any, data?: DeleteAccountCommandOutput) => void
  ): void;
  public deleteAccount(
    args: DeleteAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountCommandOutput) => void
  ): void;
  public deleteAccount(
    args: DeleteAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteAccountCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccountCommandOutput) => void
  ): Promise<DeleteAccountCommandOutput> | void {
    const command = new DeleteAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.</p>
   */
  public deleteAttendee(
    args: DeleteAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAttendeeCommandOutput>;
  public deleteAttendee(
    args: DeleteAttendeeCommandInput,
    cb: (err: any, data?: DeleteAttendeeCommandOutput) => void
  ): void;
  public deleteAttendee(
    args: DeleteAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAttendeeCommandOutput) => void
  ): void;
  public deleteAttendee(
    args: DeleteAttendeeCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteAttendeeCommandOutput) => void),
    cb?: (err: any, data?: DeleteAttendeeCommandOutput) => void
  ): Promise<DeleteAttendeeCommandOutput> | void {
    const command = new DeleteAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the events configuration that allows a bot to receive outgoing events.</p>
   */
  public deleteEventsConfiguration(
    args: DeleteEventsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventsConfigurationCommandOutput>;
  public deleteEventsConfiguration(
    args: DeleteEventsConfigurationCommandInput,
    cb: (err: any, data?: DeleteEventsConfigurationCommandOutput) => void
  ): void;
  public deleteEventsConfiguration(
    args: DeleteEventsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventsConfigurationCommandOutput) => void
  ): void;
  public deleteEventsConfiguration(
    args: DeleteEventsConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteEventsConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventsConfigurationCommandOutput) => void
  ): Promise<DeleteEventsConfigurationCommandOutput> | void {
    const command = new DeleteEventsConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Amazon Chime SDK meeting. When a meeting is deleted, its attendees are also deleted and clients can no longer join it. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.</p>
   */
  public deleteMeeting(
    args: DeleteMeetingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMeetingCommandOutput>;
  public deleteMeeting(
    args: DeleteMeetingCommandInput,
    cb: (err: any, data?: DeleteMeetingCommandOutput) => void
  ): void;
  public deleteMeeting(
    args: DeleteMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMeetingCommandOutput) => void
  ): void;
  public deleteMeeting(
    args: DeleteMeetingCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteMeetingCommandOutput) => void),
    cb?: (err: any, data?: DeleteMeetingCommandOutput) => void
  ): Promise<DeleteMeetingCommandOutput> | void {
    const command = new DeleteMeetingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Moves the specified phone number into the <b>Deletion
   *       queue</b>. A phone number must be disassociated from any users or Amazon Chime Voice
   *       Connectors before it can be deleted.</p>
   *          <p>Deleted phone numbers remain in the <b>Deletion queue</b>
   *       for 7 days before they are deleted permanently.</p>
   */
  public deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePhoneNumberCommandOutput>;
  public deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    cb: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): void;
  public deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): void;
  public deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeletePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): Promise<DeletePhoneNumberCommandOutput> | void {
    const command = new DeletePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a chat room.</p>
   */
  public deleteRoom(
    args: DeleteRoomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoomCommandOutput>;
  public deleteRoom(
    args: DeleteRoomCommandInput,
    cb: (err: any, data?: DeleteRoomCommandOutput) => void
  ): void;
  public deleteRoom(
    args: DeleteRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoomCommandOutput) => void
  ): void;
  public deleteRoom(
    args: DeleteRoomCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteRoomCommandOutput) => void),
    cb?: (err: any, data?: DeleteRoomCommandOutput) => void
  ): Promise<DeleteRoomCommandOutput> | void {
    const command = new DeleteRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a member from a chat room.</p>
   */
  public deleteRoomMembership(
    args: DeleteRoomMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoomMembershipCommandOutput>;
  public deleteRoomMembership(
    args: DeleteRoomMembershipCommandInput,
    cb: (err: any, data?: DeleteRoomMembershipCommandOutput) => void
  ): void;
  public deleteRoomMembership(
    args: DeleteRoomMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoomMembershipCommandOutput) => void
  ): void;
  public deleteRoomMembership(
    args: DeleteRoomMembershipCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteRoomMembershipCommandOutput) => void),
    cb?: (err: any, data?: DeleteRoomMembershipCommandOutput) => void
  ): Promise<DeleteRoomMembershipCommandOutput> | void {
    const command = new DeleteRoomMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Amazon Chime Voice Connector. Any phone numbers associated with the
   *       Amazon Chime Voice Connector must be disassociated from it before it can be deleted.</p>
   */
  public deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorCommandOutput>;
  public deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorCommandOutput) => void
  ): void;
  public deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorCommandOutput) => void
  ): void;
  public deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorCommandOutput) => void
  ): Promise<DeleteVoiceConnectorCommandOutput> | void {
    const command = new DeleteVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Amazon Chime Voice Connector group. Any <code>VoiceConnectorItems</code> and phone numbers associated with the group must be removed before it can be deleted.</p>
   */
  public deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorGroupCommandOutput>;
  public deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void
  ): void;
  public deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void
  ): void;
  public deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void
  ): Promise<DeleteVoiceConnectorGroupCommandOutput> | void {
    const command = new DeleteVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the origination settings for the specified Amazon Chime Voice Connector.</p>
   */
  public deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorOriginationCommandOutput>;
  public deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DeleteVoiceConnectorOriginationCommandOutput
        ) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void
  ): Promise<DeleteVoiceConnectorOriginationCommandOutput> | void {
    const command = new DeleteVoiceConnectorOriginationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the streaming configuration for the specified Amazon Chime Voice Connector.</p>
   */
  public deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorStreamingConfigurationCommandOutput>;
  public deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    cb: (
      err: any,
      data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput
    ) => void
  ): void;
  public deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput
    ) => void
  ): void;
  public deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput
    ) => void
  ): Promise<DeleteVoiceConnectorStreamingConfigurationCommandOutput> | void {
    const command = new DeleteVoiceConnectorStreamingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the termination settings for the specified Amazon Chime Voice Connector.</p>
   */
  public deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorTerminationCommandOutput>;
  public deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DeleteVoiceConnectorTerminationCommandOutput
        ) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void
  ): Promise<DeleteVoiceConnectorTerminationCommandOutput> | void {
    const command = new DeleteVoiceConnectorTerminationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified SIP credentials used by your equipment to authenticate during call termination.</p>
   */
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorTerminationCredentialsCommandOutput>;
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    cb: (
      err: any,
      data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput
    ) => void
  ): void;
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput
    ) => void
  ): void;
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput
    ) => void
  ): Promise<DeleteVoiceConnectorTerminationCredentialsCommandOutput> | void {
    const command = new DeleteVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates the primary provisioned phone number from the specified Amazon Chime
   *       user.</p>
   */
  public disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumberFromUserCommandOutput>;
  public disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumberFromUserCommandOutput) => void
  ): void;
  public disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumberFromUserCommandOutput) => void
  ): void;
  public disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DisassociatePhoneNumberFromUserCommandOutput
        ) => void),
    cb?: (err: any, data?: DisassociatePhoneNumberFromUserCommandOutput) => void
  ): Promise<DisassociatePhoneNumberFromUserCommandOutput> | void {
    const command = new DisassociatePhoneNumberFromUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector.</p>
   */
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput>;
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    cb: (
      err: any,
      data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput
    ) => void
  ): void;
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput
    ) => void
  ): void;
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput
    ) => void
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput> | void {
    const command = new DisassociatePhoneNumbersFromVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.</p>
   */
  public disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput>;
  public disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    cb: (
      err: any,
      data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput
    ) => void
  ): void;
  public disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput
    ) => void
  ): void;
  public disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput
    ) => void
  ): Promise<
    DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput
  > | void {
    const command = new DisassociatePhoneNumbersFromVoiceConnectorGroupCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.</p>
   */
  public disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput>;
  public disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    cb: (
      err: any,
      data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput
    ) => void
  ): void;
  public disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput
    ) => void
  ): void;
  public disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput
    ) => void
  ): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput> | void {
    const command = new DisassociateSigninDelegateGroupsFromAccountCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves details for the specified Amazon Chime account, such as account type and
   *        supported licenses.</p>
   */
  public getAccount(
    args: GetAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountCommandOutput>;
  public getAccount(
    args: GetAccountCommandInput,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;
  public getAccount(
    args: GetAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;
  public getAccount(
    args: GetAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAccountCommandOutput) => void),
    cb?: (err: any, data?: GetAccountCommandOutput) => void
  ): Promise<GetAccountCommandOutput> | void {
    const command = new GetAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves account settings for the specified Amazon Chime account ID, such as remote control and dial
   *        out settings. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the
   *        <i>Amazon
   *          Chime Administration Guide</i>.</p>
   */
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): Promise<GetAccountSettingsCommandOutput> | void {
    const command = new GetAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.</p>
   */
  public getAttendee(
    args: GetAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAttendeeCommandOutput>;
  public getAttendee(
    args: GetAttendeeCommandInput,
    cb: (err: any, data?: GetAttendeeCommandOutput) => void
  ): void;
  public getAttendee(
    args: GetAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttendeeCommandOutput) => void
  ): void;
  public getAttendee(
    args: GetAttendeeCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAttendeeCommandOutput) => void),
    cb?: (err: any, data?: GetAttendeeCommandOutput) => void
  ): Promise<GetAttendeeCommandOutput> | void {
    const command = new GetAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.</p>
   */
  public getBot(
    args: GetBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBotCommandOutput>;
  public getBot(
    args: GetBotCommandInput,
    cb: (err: any, data?: GetBotCommandOutput) => void
  ): void;
  public getBot(
    args: GetBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotCommandOutput) => void
  ): void;
  public getBot(
    args: GetBotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetBotCommandOutput) => void),
    cb?: (err: any, data?: GetBotCommandOutput) => void
  ): Promise<GetBotCommandOutput> | void {
    const command = new GetBotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN. </p>
   */
  public getEventsConfiguration(
    args: GetEventsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventsConfigurationCommandOutput>;
  public getEventsConfiguration(
    args: GetEventsConfigurationCommandInput,
    cb: (err: any, data?: GetEventsConfigurationCommandOutput) => void
  ): void;
  public getEventsConfiguration(
    args: GetEventsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventsConfigurationCommandOutput) => void
  ): void;
  public getEventsConfiguration(
    args: GetEventsConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetEventsConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetEventsConfigurationCommandOutput) => void
  ): Promise<GetEventsConfigurationCommandOutput> | void {
    const command = new GetEventsConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves global settings for the administrator's AWS account, such as Amazon
   *       Chime Business Calling and Amazon Chime Voice Connector settings.</p>
   */
  public getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGlobalSettingsCommandOutput>;
  public getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;
  public getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;
  public getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetGlobalSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): Promise<GetGlobalSettingsCommandOutput> | void {
    const command = new GetGlobalSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.</p>
   */
  public getMeeting(
    args: GetMeetingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMeetingCommandOutput>;
  public getMeeting(
    args: GetMeetingCommandInput,
    cb: (err: any, data?: GetMeetingCommandOutput) => void
  ): void;
  public getMeeting(
    args: GetMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMeetingCommandOutput) => void
  ): void;
  public getMeeting(
    args: GetMeetingCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetMeetingCommandOutput) => void),
    cb?: (err: any, data?: GetMeetingCommandOutput) => void
  ): Promise<GetMeetingCommandOutput> | void {
    const command = new GetMeetingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves details for the specified phone number ID, such as associations,
   *       capabilities, and product type.</p>
   */
  public getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberCommandOutput>;
  public getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    cb: (err: any, data?: GetPhoneNumberCommandOutput) => void
  ): void;
  public getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberCommandOutput) => void
  ): void;
  public getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetPhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: GetPhoneNumberCommandOutput) => void
  ): Promise<GetPhoneNumberCommandOutput> | void {
    const command = new GetPhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves details for the specified phone number order, such as order creation
   *       timestamp, phone numbers in E.164 format, product type, and order status.</p>
   */
  public getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberOrderCommandOutput>;
  public getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    cb: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): void;
  public getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): void;
  public getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetPhoneNumberOrderCommandOutput) => void),
    cb?: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): Promise<GetPhoneNumberOrderCommandOutput> | void {
    const command = new GetPhoneNumberOrderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.</p>
   */
  public getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberSettingsCommandOutput>;
  public getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    cb: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): void;
  public getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): void;
  public getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetPhoneNumberSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): Promise<GetPhoneNumberSettingsCommandOutput> | void {
    const command = new GetPhoneNumberSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves room details, such as the room name.</p>
   */
  public getRoom(
    args: GetRoomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRoomCommandOutput>;
  public getRoom(
    args: GetRoomCommandInput,
    cb: (err: any, data?: GetRoomCommandOutput) => void
  ): void;
  public getRoom(
    args: GetRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoomCommandOutput) => void
  ): void;
  public getRoom(
    args: GetRoomCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetRoomCommandOutput) => void),
    cb?: (err: any, data?: GetRoomCommandOutput) => void
  ): Promise<GetRoomCommandOutput> | void {
    const command = new GetRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves details for the specified user ID, such as primary email address, license type,
   *      and personal meeting PIN.</p>
   *          <p>To retrieve user details with an email address instead of a user ID, use the <a>ListUsers</a> action, and then filter by email address.</p>
   */
  public getUser(
    args: GetUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserCommandOutput>;
  public getUser(
    args: GetUserCommandInput,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  public getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  public getUser(
    args: GetUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetUserCommandOutput) => void),
    cb?: (err: any, data?: GetUserCommandOutput) => void
  ): Promise<GetUserCommandOutput> | void {
    const command = new GetUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves settings for the specified user ID, such as any associated phone number settings.</p>
   */
  public getUserSettings(
    args: GetUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserSettingsCommandOutput>;
  public getUserSettings(
    args: GetUserSettingsCommandInput,
    cb: (err: any, data?: GetUserSettingsCommandOutput) => void
  ): void;
  public getUserSettings(
    args: GetUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserSettingsCommandOutput) => void
  ): void;
  public getUserSettings(
    args: GetUserSettingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetUserSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetUserSettingsCommandOutput) => void
  ): Promise<GetUserSettingsCommandOutput> | void {
    const command = new GetUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps,
   *       name, outbound host, and encryption requirements.</p>
   */
  public getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorCommandOutput>;
  public getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    cb: (err: any, data?: GetVoiceConnectorCommandOutput) => void
  ): void;
  public getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorCommandOutput) => void
  ): void;
  public getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorCommandOutput) => void
  ): Promise<GetVoiceConnectorCommandOutput> | void {
    const command = new GetVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps,
   *       name, and associated <code>VoiceConnectorItems</code>.</p>
   */
  public getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorGroupCommandOutput>;
  public getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: GetVoiceConnectorGroupCommandOutput) => void
  ): void;
  public getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorGroupCommandOutput) => void
  ): void;
  public getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorGroupCommandOutput) => void
  ): Promise<GetVoiceConnectorGroupCommandOutput> | void {
    const command = new GetVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the logging configuration details for the specified Amazon Chime Voice Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
   */
  public getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput>;
  public getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    cb: (
      err: any,
      data?: GetVoiceConnectorLoggingConfigurationCommandOutput
    ) => void
  ): void;
  public getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetVoiceConnectorLoggingConfigurationCommandOutput
    ) => void
  ): void;
  public getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetVoiceConnectorLoggingConfigurationCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: GetVoiceConnectorLoggingConfigurationCommandOutput
    ) => void
  ): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput> | void {
    const command = new GetVoiceConnectorLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves origination setting details for the specified Amazon Chime Voice Connector.</p>
   */
  public getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorOriginationCommandOutput>;
  public getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void
  ): void;
  public getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void
  ): void;
  public getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void
  ): Promise<GetVoiceConnectorOriginationCommandOutput> | void {
    const command = new GetVoiceConnectorOriginationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the streaming configuration details for the specified Amazon Chime Voice
   *       Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also
   *       shows the retention period, in hours, for the Amazon Kinesis data.</p>
   */
  public getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput>;
  public getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    cb: (
      err: any,
      data?: GetVoiceConnectorStreamingConfigurationCommandOutput
    ) => void
  ): void;
  public getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetVoiceConnectorStreamingConfigurationCommandOutput
    ) => void
  ): void;
  public getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetVoiceConnectorStreamingConfigurationCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: GetVoiceConnectorStreamingConfigurationCommandOutput
    ) => void
  ): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput> | void {
    const command = new GetVoiceConnectorStreamingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves termination setting details for the specified Amazon Chime Voice Connector.</p>
   */
  public getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorTerminationCommandOutput>;
  public getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void
  ): void;
  public getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void
  ): void;
  public getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void
  ): Promise<GetVoiceConnectorTerminationCommandOutput> | void {
    const command = new GetVoiceConnectorTerminationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about the last time a SIP <code>OPTIONS</code> ping was received
   *       from your SIP infrastructure for the specified Amazon Chime Voice Connector.</p>
   */
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorTerminationHealthCommandOutput>;
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    cb: (
      err: any,
      data?: GetVoiceConnectorTerminationHealthCommandOutput
    ) => void
  ): void;
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetVoiceConnectorTerminationHealthCommandOutput
    ) => void
  ): void;
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetVoiceConnectorTerminationHealthCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: GetVoiceConnectorTerminationHealthCommandOutput
    ) => void
  ): Promise<GetVoiceConnectorTerminationHealthCommandOutput> | void {
    const command = new GetVoiceConnectorTerminationHealthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime
   *         <code>Team</code> account. Only <code>Team</code> account types are currently supported for
   *       this action. </p>
   */
  public inviteUsers(
    args: InviteUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InviteUsersCommandOutput>;
  public inviteUsers(
    args: InviteUsersCommandInput,
    cb: (err: any, data?: InviteUsersCommandOutput) => void
  ): void;
  public inviteUsers(
    args: InviteUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InviteUsersCommandOutput) => void
  ): void;
  public inviteUsers(
    args: InviteUsersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: InviteUsersCommandOutput) => void),
    cb?: (err: any, data?: InviteUsersCommandOutput) => void
  ): Promise<InviteUsersCommandOutput> | void {
    const command = new InviteUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Amazon Chime accounts under the administrator's AWS account. You can filter
   *       accounts by account name prefix. To find out which Amazon Chime account a user belongs to, you
   *       can filter by the user's email address, which returns one account result.</p>
   */
  public listAccounts(
    args: ListAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountsCommandOutput>;
  public listAccounts(
    args: ListAccountsCommandInput,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
  ): void;
  public listAccounts(
    args: ListAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
  ): void;
  public listAccounts(
    args: ListAccountsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListAccountsCommandOutput) => void
  ): Promise<ListAccountsCommandOutput> | void {
    const command = new ListAccountsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.</p>
   */
  public listAttendees(
    args: ListAttendeesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttendeesCommandOutput>;
  public listAttendees(
    args: ListAttendeesCommandInput,
    cb: (err: any, data?: ListAttendeesCommandOutput) => void
  ): void;
  public listAttendees(
    args: ListAttendeesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttendeesCommandOutput) => void
  ): void;
  public listAttendees(
    args: ListAttendeesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAttendeesCommandOutput) => void),
    cb?: (err: any, data?: ListAttendeesCommandOutput) => void
  ): Promise<ListAttendeesCommandOutput> | void {
    const command = new ListAttendeesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.</p>
   */
  public listBots(
    args: ListBotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBotsCommandOutput>;
  public listBots(
    args: ListBotsCommandInput,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;
  public listBots(
    args: ListBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;
  public listBots(
    args: ListBotsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListBotsCommandOutput) => void),
    cb?: (err: any, data?: ListBotsCommandOutput) => void
  ): Promise<ListBotsCommandOutput> | void {
    const command = new ListBotsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists up to 100 active Amazon Chime SDK meetings. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.</p>
   */
  public listMeetings(
    args: ListMeetingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMeetingsCommandOutput>;
  public listMeetings(
    args: ListMeetingsCommandInput,
    cb: (err: any, data?: ListMeetingsCommandOutput) => void
  ): void;
  public listMeetings(
    args: ListMeetingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMeetingsCommandOutput) => void
  ): void;
  public listMeetings(
    args: ListMeetingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListMeetingsCommandOutput) => void),
    cb?: (err: any, data?: ListMeetingsCommandOutput) => void
  ): Promise<ListMeetingsCommandOutput> | void {
    const command = new ListMeetingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the phone number orders for the administrator's Amazon Chime account.</p>
   */
  public listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumberOrdersCommandOutput>;
  public listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    cb: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): void;
  public listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): void;
  public listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListPhoneNumberOrdersCommandOutput) => void),
    cb?: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): Promise<ListPhoneNumberOrdersCommandOutput> | void {
    const command = new ListPhoneNumberOrdersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.</p>
   */
  public listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumbersCommandOutput>;
  public listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;
  public listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;
  public listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListPhoneNumbersCommandOutput) => void),
    cb?: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): Promise<ListPhoneNumbersCommandOutput> | void {
    const command = new ListPhoneNumbersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the membership details for the specified room, such as the members' IDs, email
   *       addresses, and names.</p>
   */
  public listRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoomMembershipsCommandOutput>;
  public listRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    cb: (err: any, data?: ListRoomMembershipsCommandOutput) => void
  ): void;
  public listRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoomMembershipsCommandOutput) => void
  ): void;
  public listRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRoomMembershipsCommandOutput) => void),
    cb?: (err: any, data?: ListRoomMembershipsCommandOutput) => void
  ): Promise<ListRoomMembershipsCommandOutput> | void {
    const command = new ListRoomMembershipsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the room details for the specified Amazon Chime account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.</p>
   */
  public listRooms(
    args: ListRoomsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoomsCommandOutput>;
  public listRooms(
    args: ListRoomsCommandInput,
    cb: (err: any, data?: ListRoomsCommandOutput) => void
  ): void;
  public listRooms(
    args: ListRoomsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoomsCommandOutput) => void
  ): void;
  public listRooms(
    args: ListRoomsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRoomsCommandOutput) => void),
    cb?: (err: any, data?: ListRoomsCommandOutput) => void
  ): Promise<ListRoomsCommandOutput> | void {
    const command = new ListRoomsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the users that belong to the specified Amazon Chime account. You can specify an
   *       email address to list only the user that the email address belongs to.</p>
   */
  public listUsers(
    args: ListUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsersCommandOutput>;
  public listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListUsersCommandOutput) => void),
    cb?: (err: any, data?: ListUsersCommandOutput) => void
  ): Promise<ListUsersCommandOutput> | void {
    const command = new ListUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Amazon Chime Voice Connector groups for the administrator's AWS account.</p>
   */
  public listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorGroupsCommandOutput>;
  public listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void
  ): void;
  public listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void
  ): void;
  public listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void
  ): Promise<ListVoiceConnectorGroupsCommandOutput> | void {
    const command = new ListVoiceConnectorGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Amazon Chime Voice Connectors for the administrator's AWS account.</p>
   */
  public listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorsCommandOutput>;
  public listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorsCommandOutput) => void
  ): void;
  public listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorsCommandOutput) => void
  ): void;
  public listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListVoiceConnectorsCommandOutput) => void),
    cb?: (err: any, data?: ListVoiceConnectorsCommandOutput) => void
  ): Promise<ListVoiceConnectorsCommandOutput> | void {
    const command = new ListVoiceConnectorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the SIP credentials for the specified Amazon Chime Voice Connector.</p>
   */
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput>;
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    cb: (
      err: any,
      data?: ListVoiceConnectorTerminationCredentialsCommandOutput
    ) => void
  ): void;
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ListVoiceConnectorTerminationCredentialsCommandOutput
    ) => void
  ): void;
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListVoiceConnectorTerminationCredentialsCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ListVoiceConnectorTerminationCredentialsCommandOutput
    ) => void
  ): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput> | void {
    const command = new ListVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Logs out the specified user from all of the devices they are currently logged into.</p>
   */
  public logoutUser(
    args: LogoutUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<LogoutUserCommandOutput>;
  public logoutUser(
    args: LogoutUserCommandInput,
    cb: (err: any, data?: LogoutUserCommandOutput) => void
  ): void;
  public logoutUser(
    args: LogoutUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LogoutUserCommandOutput) => void
  ): void;
  public logoutUser(
    args: LogoutUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: LogoutUserCommandOutput) => void),
    cb?: (err: any, data?: LogoutUserCommandOutput) => void
  ): Promise<LogoutUserCommandOutput> | void {
    const command = new LogoutUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an events configuration that allows a bot to receive outgoing events sent by Amazon Chime.
   *       Choose either an HTTPS endpoint or a Lambda function ARN. For more information, see <a>Bot</a>.</p>
   */
  public putEventsConfiguration(
    args: PutEventsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEventsConfigurationCommandOutput>;
  public putEventsConfiguration(
    args: PutEventsConfigurationCommandInput,
    cb: (err: any, data?: PutEventsConfigurationCommandOutput) => void
  ): void;
  public putEventsConfiguration(
    args: PutEventsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventsConfigurationCommandOutput) => void
  ): void;
  public putEventsConfiguration(
    args: PutEventsConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutEventsConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutEventsConfigurationCommandOutput) => void
  ): Promise<PutEventsConfigurationCommandOutput> | void {
    const command = new PutEventsConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
   */
  public putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput>;
  public putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    cb: (
      err: any,
      data?: PutVoiceConnectorLoggingConfigurationCommandOutput
    ) => void
  ): void;
  public putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: PutVoiceConnectorLoggingConfigurationCommandOutput
    ) => void
  ): void;
  public putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: PutVoiceConnectorLoggingConfigurationCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: PutVoiceConnectorLoggingConfigurationCommandOutput
    ) => void
  ): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput> | void {
    const command = new PutVoiceConnectorLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds origination settings for the specified Amazon Chime Voice Connector.</p>
   */
  public putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorOriginationCommandOutput>;
  public putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void
  ): void;
  public putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void
  ): void;
  public putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void
  ): Promise<PutVoiceConnectorOriginationCommandOutput> | void {
    const command = new PutVoiceConnectorOriginationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a streaming configuration for the specified Amazon Chime Voice Connector. The
   *       streaming configuration specifies whether media streaming is enabled for sending to Amazon
   *       Kinesis. It also sets the retention period, in hours, for the Amazon Kinesis data.</p>
   */
  public putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput>;
  public putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    cb: (
      err: any,
      data?: PutVoiceConnectorStreamingConfigurationCommandOutput
    ) => void
  ): void;
  public putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: PutVoiceConnectorStreamingConfigurationCommandOutput
    ) => void
  ): void;
  public putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: PutVoiceConnectorStreamingConfigurationCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: PutVoiceConnectorStreamingConfigurationCommandOutput
    ) => void
  ): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput> | void {
    const command = new PutVoiceConnectorStreamingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds termination settings for the specified Amazon Chime Voice Connector.</p>
   */
  public putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorTerminationCommandOutput>;
  public putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void
  ): void;
  public putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void
  ): void;
  public putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void
  ): Promise<PutVoiceConnectorTerminationCommandOutput> | void {
    const command = new PutVoiceConnectorTerminationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds termination SIP credentials for the specified Amazon Chime Voice Connector.</p>
   */
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorTerminationCredentialsCommandOutput>;
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    cb: (
      err: any,
      data?: PutVoiceConnectorTerminationCredentialsCommandOutput
    ) => void
  ): void;
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: PutVoiceConnectorTerminationCredentialsCommandOutput
    ) => void
  ): void;
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: PutVoiceConnectorTerminationCredentialsCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: PutVoiceConnectorTerminationCredentialsCommandOutput
    ) => void
  ): Promise<PutVoiceConnectorTerminationCredentialsCommandOutput> | void {
    const command = new PutVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Regenerates the security token for a bot.</p>
   */
  public regenerateSecurityToken(
    args: RegenerateSecurityTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegenerateSecurityTokenCommandOutput>;
  public regenerateSecurityToken(
    args: RegenerateSecurityTokenCommandInput,
    cb: (err: any, data?: RegenerateSecurityTokenCommandOutput) => void
  ): void;
  public regenerateSecurityToken(
    args: RegenerateSecurityTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegenerateSecurityTokenCommandOutput) => void
  ): void;
  public regenerateSecurityToken(
    args: RegenerateSecurityTokenCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RegenerateSecurityTokenCommandOutput) => void),
    cb?: (err: any, data?: RegenerateSecurityTokenCommandOutput) => void
  ): Promise<RegenerateSecurityTokenCommandOutput> | void {
    const command = new RegenerateSecurityTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Resets the personal meeting PIN for the specified user on an Amazon Chime account.
   *       Returns the <a>User</a> object with the updated personal meeting PIN.</p>
   */
  public resetPersonalPIN(
    args: ResetPersonalPINCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetPersonalPINCommandOutput>;
  public resetPersonalPIN(
    args: ResetPersonalPINCommandInput,
    cb: (err: any, data?: ResetPersonalPINCommandOutput) => void
  ): void;
  public resetPersonalPIN(
    args: ResetPersonalPINCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetPersonalPINCommandOutput) => void
  ): void;
  public resetPersonalPIN(
    args: ResetPersonalPINCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ResetPersonalPINCommandOutput) => void),
    cb?: (err: any, data?: ResetPersonalPINCommandOutput) => void
  ): Promise<ResetPersonalPINCommandOutput> | void {
    const command = new ResetPersonalPINCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Moves a phone number from the <b>Deletion queue</b> back into
   *       the phone number <b>Inventory</b>.</p>
   */
  public restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestorePhoneNumberCommandOutput>;
  public restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    cb: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): void;
  public restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): void;
  public restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RestorePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): Promise<RestorePhoneNumberCommandOutput> | void {
    const command = new RestorePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches phone numbers that can be ordered.</p>
   */
  public searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAvailablePhoneNumbersCommandOutput>;
  public searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;
  public searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;
  public searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void),
    cb?: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): Promise<SearchAvailablePhoneNumbersCommandOutput> | void {
    const command = new SearchAvailablePhoneNumbersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates account details for the specified Amazon Chime account. Currently, only
   *        account name updates are supported for this action.</p>
   */
  public updateAccount(
    args: UpdateAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountCommandOutput>;
  public updateAccount(
    args: UpdateAccountCommandInput,
    cb: (err: any, data?: UpdateAccountCommandOutput) => void
  ): void;
  public updateAccount(
    args: UpdateAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountCommandOutput) => void
  ): void;
  public updateAccount(
    args: UpdateAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateAccountCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccountCommandOutput) => void
  ): Promise<UpdateAccountCommandOutput> | void {
    const command = new UpdateAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the settings for the specified Amazon Chime account. You can update settings
   *       for remote control of shared screens, or for the dial-out option. For more information about
   *       these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the
   *         Policies Page</a> in the <i>Amazon Chime Administration
   *       Guide</i>.</p>
   */
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): Promise<UpdateAccountSettingsCommandOutput> | void {
    const command = new UpdateAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.</p>
   */
  public updateBot(
    args: UpdateBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBotCommandOutput>;
  public updateBot(
    args: UpdateBotCommandInput,
    cb: (err: any, data?: UpdateBotCommandOutput) => void
  ): void;
  public updateBot(
    args: UpdateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBotCommandOutput) => void
  ): void;
  public updateBot(
    args: UpdateBotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateBotCommandOutput) => void),
    cb?: (err: any, data?: UpdateBotCommandOutput) => void
  ): Promise<UpdateBotCommandOutput> | void {
    const command = new UpdateBotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates global settings for the administrator's AWS account, such as Amazon Chime Business
   *       Calling and Amazon Chime Voice Connector settings.</p>
   */
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalSettingsCommandOutput>;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateGlobalSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): Promise<UpdateGlobalSettingsCommandOutput> | void {
    const command = new UpdateGlobalSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action.</p>
   *          <p>For toll-free numbers, you must use the Amazon Chime Voice Connector product
   *       type.</p>
   *          <p>Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>
   */
  public updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberCommandOutput>;
  public updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;
  public updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;
  public updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdatePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): Promise<UpdatePhoneNumberCommandOutput> | void {
    const command = new UpdatePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the phone number settings for the administrator's AWS account, such as the
   *       default outbound calling name. You can update the default outbound calling name once every
   *       seven days. Outbound calling names can take up to 72 hours to update.</p>
   */
  public updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberSettingsCommandOutput>;
  public updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): void;
  public updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): void;
  public updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): Promise<UpdatePhoneNumberSettingsCommandOutput> | void {
    const command = new UpdatePhoneNumberSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates room details, such as the room name.</p>
   */
  public updateRoom(
    args: UpdateRoomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoomCommandOutput>;
  public updateRoom(
    args: UpdateRoomCommandInput,
    cb: (err: any, data?: UpdateRoomCommandOutput) => void
  ): void;
  public updateRoom(
    args: UpdateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoomCommandOutput) => void
  ): void;
  public updateRoom(
    args: UpdateRoomCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateRoomCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoomCommandOutput) => void
  ): Promise<UpdateRoomCommandOutput> | void {
    const command = new UpdateRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates room membership details, such as the member role. The member role designates
   *       whether the member is a chat room administrator or a general chat room member. The member role
   *       can be updated only for user IDs.</p>
   */
  public updateRoomMembership(
    args: UpdateRoomMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoomMembershipCommandOutput>;
  public updateRoomMembership(
    args: UpdateRoomMembershipCommandInput,
    cb: (err: any, data?: UpdateRoomMembershipCommandOutput) => void
  ): void;
  public updateRoomMembership(
    args: UpdateRoomMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoomMembershipCommandOutput) => void
  ): void;
  public updateRoomMembership(
    args: UpdateRoomMembershipCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateRoomMembershipCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoomMembershipCommandOutput) => void
  ): Promise<UpdateRoomMembershipCommandOutput> | void {
    const command = new UpdateRoomMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates user details for a specified user ID. Currently, only <code>LicenseType</code> updates are supported for this action.</p>
   */
  public updateUser(
    args: UpdateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserCommandOutput>;
  public updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateUserCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserCommandOutput) => void
  ): Promise<UpdateUserCommandOutput> | void {
    const command = new UpdateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the settings for the specified user, such as phone number settings.</p>
   */
  public updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserSettingsCommandOutput>;
  public updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    cb: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): void;
  public updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): void;
  public updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateUserSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): Promise<UpdateUserSettingsCommandOutput> | void {
    const command = new UpdateUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates details for the specified Amazon Chime Voice Connector.</p>
   */
  public updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceConnectorCommandOutput>;
  public updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    cb: (err: any, data?: UpdateVoiceConnectorCommandOutput) => void
  ): void;
  public updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceConnectorCommandOutput) => void
  ): void;
  public updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: UpdateVoiceConnectorCommandOutput) => void
  ): Promise<UpdateVoiceConnectorCommandOutput> | void {
    const command = new UpdateVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates details for the specified Amazon Chime Voice Connector group, such as the name
   *       and Amazon Chime Voice Connector priority ranking.</p>
   */
  public updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceConnectorGroupCommandOutput>;
  public updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void
  ): void;
  public updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void
  ): void;
  public updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void
  ): Promise<UpdateVoiceConnectorGroupCommandOutput> | void {
    const command = new UpdateVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
