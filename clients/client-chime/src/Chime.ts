// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ChimeClient, ChimeClientConfig } from "./ChimeClient";
import {
  AssociatePhoneNumbersWithVoiceConnectorCommand,
  AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorCommandOutput,
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorCommand";
import {
  AssociatePhoneNumbersWithVoiceConnectorGroupCommand,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput,
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorGroupCommand";
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
  BatchCreateAttendeeCommand,
  BatchCreateAttendeeCommandInput,
  BatchCreateAttendeeCommandOutput,
} from "./commands/BatchCreateAttendeeCommand";
import {
  BatchCreateChannelMembershipCommand,
  BatchCreateChannelMembershipCommandInput,
  BatchCreateChannelMembershipCommandOutput,
} from "./commands/BatchCreateChannelMembershipCommand";
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
  CreateAttendeeCommand,
  CreateAttendeeCommandInput,
  CreateAttendeeCommandOutput,
} from "./commands/CreateAttendeeCommand";
import { CreateBotCommand, CreateBotCommandInput, CreateBotCommandOutput } from "./commands/CreateBotCommand";
import {
  CreateChannelBanCommand,
  CreateChannelBanCommandInput,
  CreateChannelBanCommandOutput,
} from "./commands/CreateChannelBanCommand";
import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
} from "./commands/CreateChannelCommand";
import {
  CreateChannelMembershipCommand,
  CreateChannelMembershipCommandInput,
  CreateChannelMembershipCommandOutput,
} from "./commands/CreateChannelMembershipCommand";
import {
  CreateChannelModeratorCommand,
  CreateChannelModeratorCommandInput,
  CreateChannelModeratorCommandOutput,
} from "./commands/CreateChannelModeratorCommand";
import {
  CreateMediaCapturePipelineCommand,
  CreateMediaCapturePipelineCommandInput,
  CreateMediaCapturePipelineCommandOutput,
} from "./commands/CreateMediaCapturePipelineCommand";
import {
  CreateMeetingCommand,
  CreateMeetingCommandInput,
  CreateMeetingCommandOutput,
} from "./commands/CreateMeetingCommand";
import {
  CreateMeetingDialOutCommand,
  CreateMeetingDialOutCommandInput,
  CreateMeetingDialOutCommandOutput,
} from "./commands/CreateMeetingDialOutCommand";
import {
  CreateMeetingWithAttendeesCommand,
  CreateMeetingWithAttendeesCommandInput,
  CreateMeetingWithAttendeesCommandOutput,
} from "./commands/CreateMeetingWithAttendeesCommand";
import {
  CreatePhoneNumberOrderCommand,
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput,
} from "./commands/CreatePhoneNumberOrderCommand";
import {
  CreateProxySessionCommand,
  CreateProxySessionCommandInput,
  CreateProxySessionCommandOutput,
} from "./commands/CreateProxySessionCommand";
import { CreateRoomCommand, CreateRoomCommandInput, CreateRoomCommandOutput } from "./commands/CreateRoomCommand";
import {
  CreateRoomMembershipCommand,
  CreateRoomMembershipCommandInput,
  CreateRoomMembershipCommandOutput,
} from "./commands/CreateRoomMembershipCommand";
import {
  CreateSipMediaApplicationCallCommand,
  CreateSipMediaApplicationCallCommandInput,
  CreateSipMediaApplicationCallCommandOutput,
} from "./commands/CreateSipMediaApplicationCallCommand";
import {
  CreateSipMediaApplicationCommand,
  CreateSipMediaApplicationCommandInput,
  CreateSipMediaApplicationCommandOutput,
} from "./commands/CreateSipMediaApplicationCommand";
import {
  CreateSipRuleCommand,
  CreateSipRuleCommandInput,
  CreateSipRuleCommandOutput,
} from "./commands/CreateSipRuleCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateVoiceConnectorCommand,
  CreateVoiceConnectorCommandInput,
  CreateVoiceConnectorCommandOutput,
} from "./commands/CreateVoiceConnectorCommand";
import {
  CreateVoiceConnectorGroupCommand,
  CreateVoiceConnectorGroupCommandInput,
  CreateVoiceConnectorGroupCommandOutput,
} from "./commands/CreateVoiceConnectorGroupCommand";
import {
  DeleteAccountCommand,
  DeleteAccountCommandInput,
  DeleteAccountCommandOutput,
} from "./commands/DeleteAccountCommand";
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
  DeleteAppInstanceStreamingConfigurationsCommand,
  DeleteAppInstanceStreamingConfigurationsCommandInput,
  DeleteAppInstanceStreamingConfigurationsCommandOutput,
} from "./commands/DeleteAppInstanceStreamingConfigurationsCommand";
import {
  DeleteAppInstanceUserCommand,
  DeleteAppInstanceUserCommandInput,
  DeleteAppInstanceUserCommandOutput,
} from "./commands/DeleteAppInstanceUserCommand";
import {
  DeleteAttendeeCommand,
  DeleteAttendeeCommandInput,
  DeleteAttendeeCommandOutput,
} from "./commands/DeleteAttendeeCommand";
import {
  DeleteChannelBanCommand,
  DeleteChannelBanCommandInput,
  DeleteChannelBanCommandOutput,
} from "./commands/DeleteChannelBanCommand";
import {
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
} from "./commands/DeleteChannelCommand";
import {
  DeleteChannelMembershipCommand,
  DeleteChannelMembershipCommandInput,
  DeleteChannelMembershipCommandOutput,
} from "./commands/DeleteChannelMembershipCommand";
import {
  DeleteChannelMessageCommand,
  DeleteChannelMessageCommandInput,
  DeleteChannelMessageCommandOutput,
} from "./commands/DeleteChannelMessageCommand";
import {
  DeleteChannelModeratorCommand,
  DeleteChannelModeratorCommandInput,
  DeleteChannelModeratorCommandOutput,
} from "./commands/DeleteChannelModeratorCommand";
import {
  DeleteEventsConfigurationCommand,
  DeleteEventsConfigurationCommandInput,
  DeleteEventsConfigurationCommandOutput,
} from "./commands/DeleteEventsConfigurationCommand";
import {
  DeleteMediaCapturePipelineCommand,
  DeleteMediaCapturePipelineCommandInput,
  DeleteMediaCapturePipelineCommandOutput,
} from "./commands/DeleteMediaCapturePipelineCommand";
import {
  DeleteMeetingCommand,
  DeleteMeetingCommandInput,
  DeleteMeetingCommandOutput,
} from "./commands/DeleteMeetingCommand";
import {
  DeletePhoneNumberCommand,
  DeletePhoneNumberCommandInput,
  DeletePhoneNumberCommandOutput,
} from "./commands/DeletePhoneNumberCommand";
import {
  DeleteProxySessionCommand,
  DeleteProxySessionCommandInput,
  DeleteProxySessionCommandOutput,
} from "./commands/DeleteProxySessionCommand";
import { DeleteRoomCommand, DeleteRoomCommandInput, DeleteRoomCommandOutput } from "./commands/DeleteRoomCommand";
import {
  DeleteRoomMembershipCommand,
  DeleteRoomMembershipCommandInput,
  DeleteRoomMembershipCommandOutput,
} from "./commands/DeleteRoomMembershipCommand";
import {
  DeleteSipMediaApplicationCommand,
  DeleteSipMediaApplicationCommandInput,
  DeleteSipMediaApplicationCommandOutput,
} from "./commands/DeleteSipMediaApplicationCommand";
import {
  DeleteSipRuleCommand,
  DeleteSipRuleCommandInput,
  DeleteSipRuleCommandOutput,
} from "./commands/DeleteSipRuleCommand";
import {
  DeleteVoiceConnectorCommand,
  DeleteVoiceConnectorCommandInput,
  DeleteVoiceConnectorCommandOutput,
} from "./commands/DeleteVoiceConnectorCommand";
import {
  DeleteVoiceConnectorEmergencyCallingConfigurationCommand,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/DeleteVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  DeleteVoiceConnectorGroupCommand,
  DeleteVoiceConnectorGroupCommandInput,
  DeleteVoiceConnectorGroupCommandOutput,
} from "./commands/DeleteVoiceConnectorGroupCommand";
import {
  DeleteVoiceConnectorOriginationCommand,
  DeleteVoiceConnectorOriginationCommandInput,
  DeleteVoiceConnectorOriginationCommandOutput,
} from "./commands/DeleteVoiceConnectorOriginationCommand";
import {
  DeleteVoiceConnectorProxyCommand,
  DeleteVoiceConnectorProxyCommandInput,
  DeleteVoiceConnectorProxyCommandOutput,
} from "./commands/DeleteVoiceConnectorProxyCommand";
import {
  DeleteVoiceConnectorStreamingConfigurationCommand,
  DeleteVoiceConnectorStreamingConfigurationCommandInput,
  DeleteVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/DeleteVoiceConnectorStreamingConfigurationCommand";
import {
  DeleteVoiceConnectorTerminationCommand,
  DeleteVoiceConnectorTerminationCommandInput,
  DeleteVoiceConnectorTerminationCommandOutput,
} from "./commands/DeleteVoiceConnectorTerminationCommand";
import {
  DeleteVoiceConnectorTerminationCredentialsCommand,
  DeleteVoiceConnectorTerminationCredentialsCommandInput,
  DeleteVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/DeleteVoiceConnectorTerminationCredentialsCommand";
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
  DescribeChannelBanCommand,
  DescribeChannelBanCommandInput,
  DescribeChannelBanCommandOutput,
} from "./commands/DescribeChannelBanCommand";
import {
  DescribeChannelCommand,
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput,
} from "./commands/DescribeChannelCommand";
import {
  DescribeChannelMembershipCommand,
  DescribeChannelMembershipCommandInput,
  DescribeChannelMembershipCommandOutput,
} from "./commands/DescribeChannelMembershipCommand";
import {
  DescribeChannelMembershipForAppInstanceUserCommand,
  DescribeChannelMembershipForAppInstanceUserCommandInput,
  DescribeChannelMembershipForAppInstanceUserCommandOutput,
} from "./commands/DescribeChannelMembershipForAppInstanceUserCommand";
import {
  DescribeChannelModeratedByAppInstanceUserCommand,
  DescribeChannelModeratedByAppInstanceUserCommandInput,
  DescribeChannelModeratedByAppInstanceUserCommandOutput,
} from "./commands/DescribeChannelModeratedByAppInstanceUserCommand";
import {
  DescribeChannelModeratorCommand,
  DescribeChannelModeratorCommandInput,
  DescribeChannelModeratorCommandOutput,
} from "./commands/DescribeChannelModeratorCommand";
import {
  DisassociatePhoneNumberFromUserCommand,
  DisassociatePhoneNumberFromUserCommandInput,
  DisassociatePhoneNumberFromUserCommandOutput,
} from "./commands/DisassociatePhoneNumberFromUserCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorCommand,
  DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorCommandOutput,
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput,
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorGroupCommand";
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
import {
  GetAppInstanceRetentionSettingsCommand,
  GetAppInstanceRetentionSettingsCommandInput,
  GetAppInstanceRetentionSettingsCommandOutput,
} from "./commands/GetAppInstanceRetentionSettingsCommand";
import {
  GetAppInstanceStreamingConfigurationsCommand,
  GetAppInstanceStreamingConfigurationsCommandInput,
  GetAppInstanceStreamingConfigurationsCommandOutput,
} from "./commands/GetAppInstanceStreamingConfigurationsCommand";
import { GetAttendeeCommand, GetAttendeeCommandInput, GetAttendeeCommandOutput } from "./commands/GetAttendeeCommand";
import { GetBotCommand, GetBotCommandInput, GetBotCommandOutput } from "./commands/GetBotCommand";
import {
  GetChannelMessageCommand,
  GetChannelMessageCommandInput,
  GetChannelMessageCommandOutput,
} from "./commands/GetChannelMessageCommand";
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
  GetMediaCapturePipelineCommand,
  GetMediaCapturePipelineCommandInput,
  GetMediaCapturePipelineCommandOutput,
} from "./commands/GetMediaCapturePipelineCommand";
import { GetMeetingCommand, GetMeetingCommandInput, GetMeetingCommandOutput } from "./commands/GetMeetingCommand";
import {
  GetMessagingSessionEndpointCommand,
  GetMessagingSessionEndpointCommandInput,
  GetMessagingSessionEndpointCommandOutput,
} from "./commands/GetMessagingSessionEndpointCommand";
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
  GetProxySessionCommand,
  GetProxySessionCommandInput,
  GetProxySessionCommandOutput,
} from "./commands/GetProxySessionCommand";
import {
  GetRetentionSettingsCommand,
  GetRetentionSettingsCommandInput,
  GetRetentionSettingsCommandOutput,
} from "./commands/GetRetentionSettingsCommand";
import { GetRoomCommand, GetRoomCommandInput, GetRoomCommandOutput } from "./commands/GetRoomCommand";
import {
  GetSipMediaApplicationCommand,
  GetSipMediaApplicationCommandInput,
  GetSipMediaApplicationCommandOutput,
} from "./commands/GetSipMediaApplicationCommand";
import {
  GetSipMediaApplicationLoggingConfigurationCommand,
  GetSipMediaApplicationLoggingConfigurationCommandInput,
  GetSipMediaApplicationLoggingConfigurationCommandOutput,
} from "./commands/GetSipMediaApplicationLoggingConfigurationCommand";
import { GetSipRuleCommand, GetSipRuleCommandInput, GetSipRuleCommandOutput } from "./commands/GetSipRuleCommand";
import { GetUserCommand, GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import {
  GetUserSettingsCommand,
  GetUserSettingsCommandInput,
  GetUserSettingsCommandOutput,
} from "./commands/GetUserSettingsCommand";
import {
  GetVoiceConnectorCommand,
  GetVoiceConnectorCommandInput,
  GetVoiceConnectorCommandOutput,
} from "./commands/GetVoiceConnectorCommand";
import {
  GetVoiceConnectorEmergencyCallingConfigurationCommand,
  GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
  GetVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  GetVoiceConnectorGroupCommand,
  GetVoiceConnectorGroupCommandInput,
  GetVoiceConnectorGroupCommandOutput,
} from "./commands/GetVoiceConnectorGroupCommand";
import {
  GetVoiceConnectorLoggingConfigurationCommand,
  GetVoiceConnectorLoggingConfigurationCommandInput,
  GetVoiceConnectorLoggingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorLoggingConfigurationCommand";
import {
  GetVoiceConnectorOriginationCommand,
  GetVoiceConnectorOriginationCommandInput,
  GetVoiceConnectorOriginationCommandOutput,
} from "./commands/GetVoiceConnectorOriginationCommand";
import {
  GetVoiceConnectorProxyCommand,
  GetVoiceConnectorProxyCommandInput,
  GetVoiceConnectorProxyCommandOutput,
} from "./commands/GetVoiceConnectorProxyCommand";
import {
  GetVoiceConnectorStreamingConfigurationCommand,
  GetVoiceConnectorStreamingConfigurationCommandInput,
  GetVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorStreamingConfigurationCommand";
import {
  GetVoiceConnectorTerminationCommand,
  GetVoiceConnectorTerminationCommandInput,
  GetVoiceConnectorTerminationCommandOutput,
} from "./commands/GetVoiceConnectorTerminationCommand";
import {
  GetVoiceConnectorTerminationHealthCommand,
  GetVoiceConnectorTerminationHealthCommandInput,
  GetVoiceConnectorTerminationHealthCommandOutput,
} from "./commands/GetVoiceConnectorTerminationHealthCommand";
import { InviteUsersCommand, InviteUsersCommandInput, InviteUsersCommandOutput } from "./commands/InviteUsersCommand";
import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "./commands/ListAccountsCommand";
import {
  ListAppInstanceAdminsCommand,
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput,
} from "./commands/ListAppInstanceAdminsCommand";
import {
  ListAppInstancesCommand,
  ListAppInstancesCommandInput,
  ListAppInstancesCommandOutput,
} from "./commands/ListAppInstancesCommand";
import {
  ListAppInstanceUsersCommand,
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput,
} from "./commands/ListAppInstanceUsersCommand";
import {
  ListAttendeesCommand,
  ListAttendeesCommandInput,
  ListAttendeesCommandOutput,
} from "./commands/ListAttendeesCommand";
import {
  ListAttendeeTagsCommand,
  ListAttendeeTagsCommandInput,
  ListAttendeeTagsCommandOutput,
} from "./commands/ListAttendeeTagsCommand";
import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import {
  ListChannelBansCommand,
  ListChannelBansCommandInput,
  ListChannelBansCommandOutput,
} from "./commands/ListChannelBansCommand";
import {
  ListChannelMembershipsCommand,
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput,
} from "./commands/ListChannelMembershipsCommand";
import {
  ListChannelMembershipsForAppInstanceUserCommand,
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "./commands/ListChannelMembershipsForAppInstanceUserCommand";
import {
  ListChannelMessagesCommand,
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "./commands/ListChannelMessagesCommand";
import {
  ListChannelModeratorsCommand,
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput,
} from "./commands/ListChannelModeratorsCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
import {
  ListChannelsModeratedByAppInstanceUserCommand,
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "./commands/ListChannelsModeratedByAppInstanceUserCommand";
import {
  ListMediaCapturePipelinesCommand,
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "./commands/ListMediaCapturePipelinesCommand";
import {
  ListMeetingsCommand,
  ListMeetingsCommandInput,
  ListMeetingsCommandOutput,
} from "./commands/ListMeetingsCommand";
import {
  ListMeetingTagsCommand,
  ListMeetingTagsCommandInput,
  ListMeetingTagsCommandOutput,
} from "./commands/ListMeetingTagsCommand";
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
  ListProxySessionsCommand,
  ListProxySessionsCommandInput,
  ListProxySessionsCommandOutput,
} from "./commands/ListProxySessionsCommand";
import {
  ListRoomMembershipsCommand,
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput,
} from "./commands/ListRoomMembershipsCommand";
import { ListRoomsCommand, ListRoomsCommandInput, ListRoomsCommandOutput } from "./commands/ListRoomsCommand";
import {
  ListSipMediaApplicationsCommand,
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
} from "./commands/ListSipMediaApplicationsCommand";
import {
  ListSipRulesCommand,
  ListSipRulesCommandInput,
  ListSipRulesCommandOutput,
} from "./commands/ListSipRulesCommand";
import {
  ListSupportedPhoneNumberCountriesCommand,
  ListSupportedPhoneNumberCountriesCommandInput,
  ListSupportedPhoneNumberCountriesCommandOutput,
} from "./commands/ListSupportedPhoneNumberCountriesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  ListVoiceConnectorGroupsCommand,
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput,
} from "./commands/ListVoiceConnectorGroupsCommand";
import {
  ListVoiceConnectorsCommand,
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
} from "./commands/ListVoiceConnectorsCommand";
import {
  ListVoiceConnectorTerminationCredentialsCommand,
  ListVoiceConnectorTerminationCredentialsCommandInput,
  ListVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/ListVoiceConnectorTerminationCredentialsCommand";
import { LogoutUserCommand, LogoutUserCommandInput, LogoutUserCommandOutput } from "./commands/LogoutUserCommand";
import {
  PutAppInstanceRetentionSettingsCommand,
  PutAppInstanceRetentionSettingsCommandInput,
  PutAppInstanceRetentionSettingsCommandOutput,
} from "./commands/PutAppInstanceRetentionSettingsCommand";
import {
  PutAppInstanceStreamingConfigurationsCommand,
  PutAppInstanceStreamingConfigurationsCommandInput,
  PutAppInstanceStreamingConfigurationsCommandOutput,
} from "./commands/PutAppInstanceStreamingConfigurationsCommand";
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
  PutSipMediaApplicationLoggingConfigurationCommand,
  PutSipMediaApplicationLoggingConfigurationCommandInput,
  PutSipMediaApplicationLoggingConfigurationCommandOutput,
} from "./commands/PutSipMediaApplicationLoggingConfigurationCommand";
import {
  PutVoiceConnectorEmergencyCallingConfigurationCommand,
  PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
  PutVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  PutVoiceConnectorLoggingConfigurationCommand,
  PutVoiceConnectorLoggingConfigurationCommandInput,
  PutVoiceConnectorLoggingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorLoggingConfigurationCommand";
import {
  PutVoiceConnectorOriginationCommand,
  PutVoiceConnectorOriginationCommandInput,
  PutVoiceConnectorOriginationCommandOutput,
} from "./commands/PutVoiceConnectorOriginationCommand";
import {
  PutVoiceConnectorProxyCommand,
  PutVoiceConnectorProxyCommandInput,
  PutVoiceConnectorProxyCommandOutput,
} from "./commands/PutVoiceConnectorProxyCommand";
import {
  PutVoiceConnectorStreamingConfigurationCommand,
  PutVoiceConnectorStreamingConfigurationCommandInput,
  PutVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorStreamingConfigurationCommand";
import {
  PutVoiceConnectorTerminationCommand,
  PutVoiceConnectorTerminationCommandInput,
  PutVoiceConnectorTerminationCommandOutput,
} from "./commands/PutVoiceConnectorTerminationCommand";
import {
  PutVoiceConnectorTerminationCredentialsCommand,
  PutVoiceConnectorTerminationCredentialsCommandInput,
  PutVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/PutVoiceConnectorTerminationCredentialsCommand";
import {
  RedactChannelMessageCommand,
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
} from "./commands/RedactChannelMessageCommand";
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
  SendChannelMessageCommand,
  SendChannelMessageCommandInput,
  SendChannelMessageCommandOutput,
} from "./commands/SendChannelMessageCommand";
import {
  StartMeetingTranscriptionCommand,
  StartMeetingTranscriptionCommandInput,
  StartMeetingTranscriptionCommandOutput,
} from "./commands/StartMeetingTranscriptionCommand";
import {
  StopMeetingTranscriptionCommand,
  StopMeetingTranscriptionCommandInput,
  StopMeetingTranscriptionCommandOutput,
} from "./commands/StopMeetingTranscriptionCommand";
import { TagAttendeeCommand, TagAttendeeCommandInput, TagAttendeeCommandOutput } from "./commands/TagAttendeeCommand";
import { TagMeetingCommand, TagMeetingCommandInput, TagMeetingCommandOutput } from "./commands/TagMeetingCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagAttendeeCommand,
  UntagAttendeeCommandInput,
  UntagAttendeeCommandOutput,
} from "./commands/UntagAttendeeCommand";
import {
  UntagMeetingCommand,
  UntagMeetingCommandInput,
  UntagMeetingCommandOutput,
} from "./commands/UntagMeetingCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
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
import { UpdateBotCommand, UpdateBotCommandInput, UpdateBotCommandOutput } from "./commands/UpdateBotCommand";
import {
  UpdateChannelCommand,
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput,
} from "./commands/UpdateChannelCommand";
import {
  UpdateChannelMessageCommand,
  UpdateChannelMessageCommandInput,
  UpdateChannelMessageCommandOutput,
} from "./commands/UpdateChannelMessageCommand";
import {
  UpdateChannelReadMarkerCommand,
  UpdateChannelReadMarkerCommandInput,
  UpdateChannelReadMarkerCommandOutput,
} from "./commands/UpdateChannelReadMarkerCommand";
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
import {
  UpdateProxySessionCommand,
  UpdateProxySessionCommandInput,
  UpdateProxySessionCommandOutput,
} from "./commands/UpdateProxySessionCommand";
import { UpdateRoomCommand, UpdateRoomCommandInput, UpdateRoomCommandOutput } from "./commands/UpdateRoomCommand";
import {
  UpdateRoomMembershipCommand,
  UpdateRoomMembershipCommandInput,
  UpdateRoomMembershipCommandOutput,
} from "./commands/UpdateRoomMembershipCommand";
import {
  UpdateSipMediaApplicationCallCommand,
  UpdateSipMediaApplicationCallCommandInput,
  UpdateSipMediaApplicationCallCommandOutput,
} from "./commands/UpdateSipMediaApplicationCallCommand";
import {
  UpdateSipMediaApplicationCommand,
  UpdateSipMediaApplicationCommandInput,
  UpdateSipMediaApplicationCommandOutput,
} from "./commands/UpdateSipMediaApplicationCommand";
import {
  UpdateSipRuleCommand,
  UpdateSipRuleCommandInput,
  UpdateSipRuleCommandOutput,
} from "./commands/UpdateSipRuleCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  UpdateUserSettingsCommand,
  UpdateUserSettingsCommandInput,
  UpdateUserSettingsCommandOutput,
} from "./commands/UpdateUserSettingsCommand";
import {
  UpdateVoiceConnectorCommand,
  UpdateVoiceConnectorCommandInput,
  UpdateVoiceConnectorCommandOutput,
} from "./commands/UpdateVoiceConnectorCommand";
import {
  UpdateVoiceConnectorGroupCommand,
  UpdateVoiceConnectorGroupCommandInput,
  UpdateVoiceConnectorGroupCommandOutput,
} from "./commands/UpdateVoiceConnectorGroupCommand";
import {
  ValidateE911AddressCommand,
  ValidateE911AddressCommandInput,
  ValidateE911AddressCommandOutput,
} from "./commands/ValidateE911AddressCommand";

const commands = {
  AssociatePhoneNumbersWithVoiceConnectorCommand,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommand,
  AssociatePhoneNumberWithUserCommand,
  AssociateSigninDelegateGroupsWithAccountCommand,
  BatchCreateAttendeeCommand,
  BatchCreateChannelMembershipCommand,
  BatchCreateRoomMembershipCommand,
  BatchDeletePhoneNumberCommand,
  BatchSuspendUserCommand,
  BatchUnsuspendUserCommand,
  BatchUpdatePhoneNumberCommand,
  BatchUpdateUserCommand,
  CreateAccountCommand,
  CreateAppInstanceCommand,
  CreateAppInstanceAdminCommand,
  CreateAppInstanceUserCommand,
  CreateAttendeeCommand,
  CreateBotCommand,
  CreateChannelCommand,
  CreateChannelBanCommand,
  CreateChannelMembershipCommand,
  CreateChannelModeratorCommand,
  CreateMediaCapturePipelineCommand,
  CreateMeetingCommand,
  CreateMeetingDialOutCommand,
  CreateMeetingWithAttendeesCommand,
  CreatePhoneNumberOrderCommand,
  CreateProxySessionCommand,
  CreateRoomCommand,
  CreateRoomMembershipCommand,
  CreateSipMediaApplicationCommand,
  CreateSipMediaApplicationCallCommand,
  CreateSipRuleCommand,
  CreateUserCommand,
  CreateVoiceConnectorCommand,
  CreateVoiceConnectorGroupCommand,
  DeleteAccountCommand,
  DeleteAppInstanceCommand,
  DeleteAppInstanceAdminCommand,
  DeleteAppInstanceStreamingConfigurationsCommand,
  DeleteAppInstanceUserCommand,
  DeleteAttendeeCommand,
  DeleteChannelCommand,
  DeleteChannelBanCommand,
  DeleteChannelMembershipCommand,
  DeleteChannelMessageCommand,
  DeleteChannelModeratorCommand,
  DeleteEventsConfigurationCommand,
  DeleteMediaCapturePipelineCommand,
  DeleteMeetingCommand,
  DeletePhoneNumberCommand,
  DeleteProxySessionCommand,
  DeleteRoomCommand,
  DeleteRoomMembershipCommand,
  DeleteSipMediaApplicationCommand,
  DeleteSipRuleCommand,
  DeleteVoiceConnectorCommand,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommand,
  DeleteVoiceConnectorGroupCommand,
  DeleteVoiceConnectorOriginationCommand,
  DeleteVoiceConnectorProxyCommand,
  DeleteVoiceConnectorStreamingConfigurationCommand,
  DeleteVoiceConnectorTerminationCommand,
  DeleteVoiceConnectorTerminationCredentialsCommand,
  DescribeAppInstanceCommand,
  DescribeAppInstanceAdminCommand,
  DescribeAppInstanceUserCommand,
  DescribeChannelCommand,
  DescribeChannelBanCommand,
  DescribeChannelMembershipCommand,
  DescribeChannelMembershipForAppInstanceUserCommand,
  DescribeChannelModeratedByAppInstanceUserCommand,
  DescribeChannelModeratorCommand,
  DisassociatePhoneNumberFromUserCommand,
  DisassociatePhoneNumbersFromVoiceConnectorCommand,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
  DisassociateSigninDelegateGroupsFromAccountCommand,
  GetAccountCommand,
  GetAccountSettingsCommand,
  GetAppInstanceRetentionSettingsCommand,
  GetAppInstanceStreamingConfigurationsCommand,
  GetAttendeeCommand,
  GetBotCommand,
  GetChannelMessageCommand,
  GetEventsConfigurationCommand,
  GetGlobalSettingsCommand,
  GetMediaCapturePipelineCommand,
  GetMeetingCommand,
  GetMessagingSessionEndpointCommand,
  GetPhoneNumberCommand,
  GetPhoneNumberOrderCommand,
  GetPhoneNumberSettingsCommand,
  GetProxySessionCommand,
  GetRetentionSettingsCommand,
  GetRoomCommand,
  GetSipMediaApplicationCommand,
  GetSipMediaApplicationLoggingConfigurationCommand,
  GetSipRuleCommand,
  GetUserCommand,
  GetUserSettingsCommand,
  GetVoiceConnectorCommand,
  GetVoiceConnectorEmergencyCallingConfigurationCommand,
  GetVoiceConnectorGroupCommand,
  GetVoiceConnectorLoggingConfigurationCommand,
  GetVoiceConnectorOriginationCommand,
  GetVoiceConnectorProxyCommand,
  GetVoiceConnectorStreamingConfigurationCommand,
  GetVoiceConnectorTerminationCommand,
  GetVoiceConnectorTerminationHealthCommand,
  InviteUsersCommand,
  ListAccountsCommand,
  ListAppInstanceAdminsCommand,
  ListAppInstancesCommand,
  ListAppInstanceUsersCommand,
  ListAttendeesCommand,
  ListAttendeeTagsCommand,
  ListBotsCommand,
  ListChannelBansCommand,
  ListChannelMembershipsCommand,
  ListChannelMembershipsForAppInstanceUserCommand,
  ListChannelMessagesCommand,
  ListChannelModeratorsCommand,
  ListChannelsCommand,
  ListChannelsModeratedByAppInstanceUserCommand,
  ListMediaCapturePipelinesCommand,
  ListMeetingsCommand,
  ListMeetingTagsCommand,
  ListPhoneNumberOrdersCommand,
  ListPhoneNumbersCommand,
  ListProxySessionsCommand,
  ListRoomMembershipsCommand,
  ListRoomsCommand,
  ListSipMediaApplicationsCommand,
  ListSipRulesCommand,
  ListSupportedPhoneNumberCountriesCommand,
  ListTagsForResourceCommand,
  ListUsersCommand,
  ListVoiceConnectorGroupsCommand,
  ListVoiceConnectorsCommand,
  ListVoiceConnectorTerminationCredentialsCommand,
  LogoutUserCommand,
  PutAppInstanceRetentionSettingsCommand,
  PutAppInstanceStreamingConfigurationsCommand,
  PutEventsConfigurationCommand,
  PutRetentionSettingsCommand,
  PutSipMediaApplicationLoggingConfigurationCommand,
  PutVoiceConnectorEmergencyCallingConfigurationCommand,
  PutVoiceConnectorLoggingConfigurationCommand,
  PutVoiceConnectorOriginationCommand,
  PutVoiceConnectorProxyCommand,
  PutVoiceConnectorStreamingConfigurationCommand,
  PutVoiceConnectorTerminationCommand,
  PutVoiceConnectorTerminationCredentialsCommand,
  RedactChannelMessageCommand,
  RedactConversationMessageCommand,
  RedactRoomMessageCommand,
  RegenerateSecurityTokenCommand,
  ResetPersonalPINCommand,
  RestorePhoneNumberCommand,
  SearchAvailablePhoneNumbersCommand,
  SendChannelMessageCommand,
  StartMeetingTranscriptionCommand,
  StopMeetingTranscriptionCommand,
  TagAttendeeCommand,
  TagMeetingCommand,
  TagResourceCommand,
  UntagAttendeeCommand,
  UntagMeetingCommand,
  UntagResourceCommand,
  UpdateAccountCommand,
  UpdateAccountSettingsCommand,
  UpdateAppInstanceCommand,
  UpdateAppInstanceUserCommand,
  UpdateBotCommand,
  UpdateChannelCommand,
  UpdateChannelMessageCommand,
  UpdateChannelReadMarkerCommand,
  UpdateGlobalSettingsCommand,
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberSettingsCommand,
  UpdateProxySessionCommand,
  UpdateRoomCommand,
  UpdateRoomMembershipCommand,
  UpdateSipMediaApplicationCommand,
  UpdateSipMediaApplicationCallCommand,
  UpdateSipRuleCommand,
  UpdateUserCommand,
  UpdateUserSettingsCommand,
  UpdateVoiceConnectorCommand,
  UpdateVoiceConnectorGroupCommand,
  ValidateE911AddressCommand,
};

export interface Chime {
  /**
   * @see {@link AssociatePhoneNumbersWithVoiceConnectorCommand}
   */
  associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorCommandOutput>;
  associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void
  ): void;
  associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociatePhoneNumbersWithVoiceConnectorGroupCommand}
   */
  associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput>;
  associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void
  ): void;
  associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void
  ): void;

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
   * @see {@link BatchCreateAttendeeCommand}
   */
  batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateAttendeeCommandOutput>;
  batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    cb: (err: any, data?: BatchCreateAttendeeCommandOutput) => void
  ): void;
  batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateAttendeeCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateChannelMembershipCommand}
   */
  batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateChannelMembershipCommandOutput>;
  batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    cb: (err: any, data?: BatchCreateChannelMembershipCommandOutput) => void
  ): void;
  batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateChannelMembershipCommandOutput) => void
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
   * @see {@link CreateAttendeeCommand}
   */
  createAttendee(
    args: CreateAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAttendeeCommandOutput>;
  createAttendee(args: CreateAttendeeCommandInput, cb: (err: any, data?: CreateAttendeeCommandOutput) => void): void;
  createAttendee(
    args: CreateAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAttendeeCommandOutput) => void
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
   * @see {@link CreateChannelCommand}
   */
  createChannel(args: CreateChannelCommandInput, options?: __HttpHandlerOptions): Promise<CreateChannelCommandOutput>;
  createChannel(args: CreateChannelCommandInput, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelBanCommand}
   */
  createChannelBan(
    args: CreateChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelBanCommandOutput>;
  createChannelBan(
    args: CreateChannelBanCommandInput,
    cb: (err: any, data?: CreateChannelBanCommandOutput) => void
  ): void;
  createChannelBan(
    args: CreateChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelBanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelMembershipCommand}
   */
  createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelMembershipCommandOutput>;
  createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    cb: (err: any, data?: CreateChannelMembershipCommandOutput) => void
  ): void;
  createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelModeratorCommand}
   */
  createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelModeratorCommandOutput>;
  createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    cb: (err: any, data?: CreateChannelModeratorCommandOutput) => void
  ): void;
  createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelModeratorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMediaCapturePipelineCommand}
   */
  createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMediaCapturePipelineCommandOutput>;
  createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    cb: (err: any, data?: CreateMediaCapturePipelineCommandOutput) => void
  ): void;
  createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMediaCapturePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMeetingCommand}
   */
  createMeeting(args: CreateMeetingCommandInput, options?: __HttpHandlerOptions): Promise<CreateMeetingCommandOutput>;
  createMeeting(args: CreateMeetingCommandInput, cb: (err: any, data?: CreateMeetingCommandOutput) => void): void;
  createMeeting(
    args: CreateMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeetingCommandOutput) => void
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
   * @see {@link CreateMeetingWithAttendeesCommand}
   */
  createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMeetingWithAttendeesCommandOutput>;
  createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    cb: (err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void
  ): void;
  createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void
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
   * @see {@link CreateProxySessionCommand}
   */
  createProxySession(
    args: CreateProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProxySessionCommandOutput>;
  createProxySession(
    args: CreateProxySessionCommandInput,
    cb: (err: any, data?: CreateProxySessionCommandOutput) => void
  ): void;
  createProxySession(
    args: CreateProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProxySessionCommandOutput) => void
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
   * @see {@link CreateSipMediaApplicationCommand}
   */
  createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSipMediaApplicationCommandOutput>;
  createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    cb: (err: any, data?: CreateSipMediaApplicationCommandOutput) => void
  ): void;
  createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipMediaApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSipMediaApplicationCallCommand}
   */
  createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSipMediaApplicationCallCommandOutput>;
  createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    cb: (err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void
  ): void;
  createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSipRuleCommand}
   */
  createSipRule(args: CreateSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateSipRuleCommandOutput>;
  createSipRule(args: CreateSipRuleCommandInput, cb: (err: any, data?: CreateSipRuleCommandOutput) => void): void;
  createSipRule(
    args: CreateSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipRuleCommandOutput) => void
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
   * @see {@link CreateVoiceConnectorCommand}
   */
  createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceConnectorCommandOutput>;
  createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    cb: (err: any, data?: CreateVoiceConnectorCommandOutput) => void
  ): void;
  createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVoiceConnectorGroupCommand}
   */
  createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceConnectorGroupCommandOutput>;
  createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void
  ): void;
  createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void
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
   * @see {@link DeleteAppInstanceStreamingConfigurationsCommand}
   */
  deleteAppInstanceStreamingConfigurations(
    args: DeleteAppInstanceStreamingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceStreamingConfigurationsCommandOutput>;
  deleteAppInstanceStreamingConfigurations(
    args: DeleteAppInstanceStreamingConfigurationsCommandInput,
    cb: (err: any, data?: DeleteAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  deleteAppInstanceStreamingConfigurations(
    args: DeleteAppInstanceStreamingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceStreamingConfigurationsCommandOutput) => void
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
   * @see {@link DeleteAttendeeCommand}
   */
  deleteAttendee(
    args: DeleteAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAttendeeCommandOutput>;
  deleteAttendee(args: DeleteAttendeeCommandInput, cb: (err: any, data?: DeleteAttendeeCommandOutput) => void): void;
  deleteAttendee(
    args: DeleteAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAttendeeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(args: DeleteChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteChannelCommandOutput>;
  deleteChannel(args: DeleteChannelCommandInput, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelBanCommand}
   */
  deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelBanCommandOutput>;
  deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    cb: (err: any, data?: DeleteChannelBanCommandOutput) => void
  ): void;
  deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelBanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelMembershipCommand}
   */
  deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelMembershipCommandOutput>;
  deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    cb: (err: any, data?: DeleteChannelMembershipCommandOutput) => void
  ): void;
  deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelMessageCommand}
   */
  deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelMessageCommandOutput>;
  deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    cb: (err: any, data?: DeleteChannelMessageCommandOutput) => void
  ): void;
  deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelModeratorCommand}
   */
  deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelModeratorCommandOutput>;
  deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    cb: (err: any, data?: DeleteChannelModeratorCommandOutput) => void
  ): void;
  deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelModeratorCommandOutput) => void
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
   * @see {@link DeleteMediaCapturePipelineCommand}
   */
  deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMediaCapturePipelineCommandOutput>;
  deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    cb: (err: any, data?: DeleteMediaCapturePipelineCommandOutput) => void
  ): void;
  deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMediaCapturePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMeetingCommand}
   */
  deleteMeeting(args: DeleteMeetingCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMeetingCommandOutput>;
  deleteMeeting(args: DeleteMeetingCommandInput, cb: (err: any, data?: DeleteMeetingCommandOutput) => void): void;
  deleteMeeting(
    args: DeleteMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMeetingCommandOutput) => void
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
   * @see {@link DeleteProxySessionCommand}
   */
  deleteProxySession(
    args: DeleteProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProxySessionCommandOutput>;
  deleteProxySession(
    args: DeleteProxySessionCommandInput,
    cb: (err: any, data?: DeleteProxySessionCommandOutput) => void
  ): void;
  deleteProxySession(
    args: DeleteProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProxySessionCommandOutput) => void
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
   * @see {@link DeleteSipMediaApplicationCommand}
   */
  deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSipMediaApplicationCommandOutput>;
  deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    cb: (err: any, data?: DeleteSipMediaApplicationCommandOutput) => void
  ): void;
  deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSipMediaApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSipRuleCommand}
   */
  deleteSipRule(args: DeleteSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSipRuleCommandOutput>;
  deleteSipRule(args: DeleteSipRuleCommandInput, cb: (err: any, data?: DeleteSipRuleCommandOutput) => void): void;
  deleteSipRule(
    args: DeleteSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSipRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorCommand}
   */
  deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorCommandOutput>;
  deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorCommandOutput) => void
  ): void;
  deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorEmergencyCallingConfigurationCommand}
   */
  deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorGroupCommand}
   */
  deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorGroupCommandOutput>;
  deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void
  ): void;
  deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorOriginationCommand}
   */
  deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorOriginationCommandOutput>;
  deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void
  ): void;
  deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorProxyCommand}
   */
  deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorProxyCommandOutput>;
  deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void
  ): void;
  deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorStreamingConfigurationCommand}
   */
  deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorStreamingConfigurationCommandOutput>;
  deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorTerminationCommand}
   */
  deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorTerminationCommandOutput>;
  deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void
  ): void;
  deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorTerminationCredentialsCommand}
   */
  deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorTerminationCredentialsCommandOutput>;
  deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void
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
   * @see {@link DescribeChannelCommand}
   */
  describeChannel(
    args: DescribeChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelCommandOutput>;
  describeChannel(args: DescribeChannelCommandInput, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
  describeChannel(
    args: DescribeChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelBanCommand}
   */
  describeChannelBan(
    args: DescribeChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelBanCommandOutput>;
  describeChannelBan(
    args: DescribeChannelBanCommandInput,
    cb: (err: any, data?: DescribeChannelBanCommandOutput) => void
  ): void;
  describeChannelBan(
    args: DescribeChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelBanCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelMembershipCommand}
   */
  describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelMembershipCommandOutput>;
  describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    cb: (err: any, data?: DescribeChannelMembershipCommandOutput) => void
  ): void;
  describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelMembershipForAppInstanceUserCommand}
   */
  describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput>;
  describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    cb: (err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void
  ): void;
  describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelModeratedByAppInstanceUserCommand}
   */
  describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput>;
  describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    cb: (err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelModeratorCommand}
   */
  describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelModeratorCommandOutput>;
  describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    cb: (err: any, data?: DescribeChannelModeratorCommandOutput) => void
  ): void;
  describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelModeratorCommandOutput) => void
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
   * @see {@link DisassociatePhoneNumbersFromVoiceConnectorCommand}
   */
  disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput>;
  disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void
  ): void;
  disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommand}
   */
  disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput>;
  disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void
  ): void;
  disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void
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
   * @see {@link GetAppInstanceStreamingConfigurationsCommand}
   */
  getAppInstanceStreamingConfigurations(
    args: GetAppInstanceStreamingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppInstanceStreamingConfigurationsCommandOutput>;
  getAppInstanceStreamingConfigurations(
    args: GetAppInstanceStreamingConfigurationsCommandInput,
    cb: (err: any, data?: GetAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  getAppInstanceStreamingConfigurations(
    args: GetAppInstanceStreamingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAttendeeCommand}
   */
  getAttendee(args: GetAttendeeCommandInput, options?: __HttpHandlerOptions): Promise<GetAttendeeCommandOutput>;
  getAttendee(args: GetAttendeeCommandInput, cb: (err: any, data?: GetAttendeeCommandOutput) => void): void;
  getAttendee(
    args: GetAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttendeeCommandOutput) => void
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
   * @see {@link GetChannelMessageCommand}
   */
  getChannelMessage(
    args: GetChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelMessageCommandOutput>;
  getChannelMessage(
    args: GetChannelMessageCommandInput,
    cb: (err: any, data?: GetChannelMessageCommandOutput) => void
  ): void;
  getChannelMessage(
    args: GetChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelMessageCommandOutput) => void
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
   * @see {@link GetMediaCapturePipelineCommand}
   */
  getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMediaCapturePipelineCommandOutput>;
  getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    cb: (err: any, data?: GetMediaCapturePipelineCommandOutput) => void
  ): void;
  getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaCapturePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMeetingCommand}
   */
  getMeeting(args: GetMeetingCommandInput, options?: __HttpHandlerOptions): Promise<GetMeetingCommandOutput>;
  getMeeting(args: GetMeetingCommandInput, cb: (err: any, data?: GetMeetingCommandOutput) => void): void;
  getMeeting(
    args: GetMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMeetingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMessagingSessionEndpointCommand}
   */
  getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMessagingSessionEndpointCommandOutput>;
  getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    cb: (err: any, data?: GetMessagingSessionEndpointCommandOutput) => void
  ): void;
  getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMessagingSessionEndpointCommandOutput) => void
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
   * @see {@link GetProxySessionCommand}
   */
  getProxySession(
    args: GetProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProxySessionCommandOutput>;
  getProxySession(args: GetProxySessionCommandInput, cb: (err: any, data?: GetProxySessionCommandOutput) => void): void;
  getProxySession(
    args: GetProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProxySessionCommandOutput) => void
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
   * @see {@link GetSipMediaApplicationCommand}
   */
  getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSipMediaApplicationCommandOutput>;
  getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    cb: (err: any, data?: GetSipMediaApplicationCommandOutput) => void
  ): void;
  getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipMediaApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSipMediaApplicationLoggingConfigurationCommand}
   */
  getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput>;
  getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSipRuleCommand}
   */
  getSipRule(args: GetSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetSipRuleCommandOutput>;
  getSipRule(args: GetSipRuleCommandInput, cb: (err: any, data?: GetSipRuleCommandOutput) => void): void;
  getSipRule(
    args: GetSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipRuleCommandOutput) => void
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
   * @see {@link GetVoiceConnectorCommand}
   */
  getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorCommandOutput>;
  getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    cb: (err: any, data?: GetVoiceConnectorCommandOutput) => void
  ): void;
  getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorEmergencyCallingConfigurationCommand}
   */
  getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorGroupCommand}
   */
  getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorGroupCommandOutput>;
  getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: GetVoiceConnectorGroupCommandOutput) => void
  ): void;
  getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorLoggingConfigurationCommand}
   */
  getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput>;
  getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorOriginationCommand}
   */
  getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorOriginationCommandOutput>;
  getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void
  ): void;
  getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorProxyCommand}
   */
  getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorProxyCommandOutput>;
  getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: GetVoiceConnectorProxyCommandOutput) => void
  ): void;
  getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorStreamingConfigurationCommand}
   */
  getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput>;
  getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorTerminationCommand}
   */
  getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorTerminationCommandOutput>;
  getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void
  ): void;
  getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorTerminationHealthCommand}
   */
  getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorTerminationHealthCommandOutput>;
  getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    cb: (err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void
  ): void;
  getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void
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
  listAccounts(args: ListAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountsCommandOutput>;
  listAccounts(args: ListAccountsCommandInput, cb: (err: any, data?: ListAccountsCommandOutput) => void): void;
  listAccounts(
    args: ListAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
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
   * @see {@link ListAttendeesCommand}
   */
  listAttendees(args: ListAttendeesCommandInput, options?: __HttpHandlerOptions): Promise<ListAttendeesCommandOutput>;
  listAttendees(args: ListAttendeesCommandInput, cb: (err: any, data?: ListAttendeesCommandOutput) => void): void;
  listAttendees(
    args: ListAttendeesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttendeesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttendeeTagsCommand}
   */
  listAttendeeTags(
    args: ListAttendeeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttendeeTagsCommandOutput>;
  listAttendeeTags(
    args: ListAttendeeTagsCommandInput,
    cb: (err: any, data?: ListAttendeeTagsCommandOutput) => void
  ): void;
  listAttendeeTags(
    args: ListAttendeeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttendeeTagsCommandOutput) => void
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
   * @see {@link ListChannelBansCommand}
   */
  listChannelBans(
    args: ListChannelBansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelBansCommandOutput>;
  listChannelBans(args: ListChannelBansCommandInput, cb: (err: any, data?: ListChannelBansCommandOutput) => void): void;
  listChannelBans(
    args: ListChannelBansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelBansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelMembershipsCommand}
   */
  listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMembershipsCommandOutput>;
  listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    cb: (err: any, data?: ListChannelMembershipsCommandOutput) => void
  ): void;
  listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelMembershipsForAppInstanceUserCommand}
   */
  listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput>;
  listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    cb: (err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void
  ): void;
  listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelMessagesCommand}
   */
  listChannelMessages(
    args: ListChannelMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMessagesCommandOutput>;
  listChannelMessages(
    args: ListChannelMessagesCommandInput,
    cb: (err: any, data?: ListChannelMessagesCommandOutput) => void
  ): void;
  listChannelMessages(
    args: ListChannelMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelModeratorsCommand}
   */
  listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelModeratorsCommandOutput>;
  listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    cb: (err: any, data?: ListChannelModeratorsCommandOutput) => void
  ): void;
  listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelModeratorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(args: ListChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListChannelsCommandOutput>;
  listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsModeratedByAppInstanceUserCommand}
   */
  listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput>;
  listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    cb: (err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMediaCapturePipelinesCommand}
   */
  listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMediaCapturePipelinesCommandOutput>;
  listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    cb: (err: any, data?: ListMediaCapturePipelinesCommandOutput) => void
  ): void;
  listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMediaCapturePipelinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMeetingsCommand}
   */
  listMeetings(args: ListMeetingsCommandInput, options?: __HttpHandlerOptions): Promise<ListMeetingsCommandOutput>;
  listMeetings(args: ListMeetingsCommandInput, cb: (err: any, data?: ListMeetingsCommandOutput) => void): void;
  listMeetings(
    args: ListMeetingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMeetingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMeetingTagsCommand}
   */
  listMeetingTags(
    args: ListMeetingTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMeetingTagsCommandOutput>;
  listMeetingTags(args: ListMeetingTagsCommandInput, cb: (err: any, data?: ListMeetingTagsCommandOutput) => void): void;
  listMeetingTags(
    args: ListMeetingTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMeetingTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPhoneNumberOrdersCommand}
   */
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
   * @see {@link ListProxySessionsCommand}
   */
  listProxySessions(
    args: ListProxySessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProxySessionsCommandOutput>;
  listProxySessions(
    args: ListProxySessionsCommandInput,
    cb: (err: any, data?: ListProxySessionsCommandOutput) => void
  ): void;
  listProxySessions(
    args: ListProxySessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProxySessionsCommandOutput) => void
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
   * @see {@link ListSipMediaApplicationsCommand}
   */
  listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSipMediaApplicationsCommandOutput>;
  listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    cb: (err: any, data?: ListSipMediaApplicationsCommandOutput) => void
  ): void;
  listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSipMediaApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSipRulesCommand}
   */
  listSipRules(args: ListSipRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListSipRulesCommandOutput>;
  listSipRules(args: ListSipRulesCommandInput, cb: (err: any, data?: ListSipRulesCommandOutput) => void): void;
  listSipRules(
    args: ListSipRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSipRulesCommandOutput) => void
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
   * @see {@link ListVoiceConnectorGroupsCommand}
   */
  listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorGroupsCommandOutput>;
  listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void
  ): void;
  listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVoiceConnectorsCommand}
   */
  listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorsCommandOutput>;
  listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorsCommandOutput) => void
  ): void;
  listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVoiceConnectorTerminationCredentialsCommand}
   */
  listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput>;
  listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void
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
   * @see {@link PutAppInstanceStreamingConfigurationsCommand}
   */
  putAppInstanceStreamingConfigurations(
    args: PutAppInstanceStreamingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppInstanceStreamingConfigurationsCommandOutput>;
  putAppInstanceStreamingConfigurations(
    args: PutAppInstanceStreamingConfigurationsCommandInput,
    cb: (err: any, data?: PutAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  putAppInstanceStreamingConfigurations(
    args: PutAppInstanceStreamingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppInstanceStreamingConfigurationsCommandOutput) => void
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
   * @see {@link PutSipMediaApplicationLoggingConfigurationCommand}
   */
  putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSipMediaApplicationLoggingConfigurationCommandOutput>;
  putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    cb: (err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorEmergencyCallingConfigurationCommand}
   */
  putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorLoggingConfigurationCommand}
   */
  putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput>;
  putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorOriginationCommand}
   */
  putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorOriginationCommandOutput>;
  putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void
  ): void;
  putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorProxyCommand}
   */
  putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorProxyCommandOutput>;
  putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: PutVoiceConnectorProxyCommandOutput) => void
  ): void;
  putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorStreamingConfigurationCommand}
   */
  putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput>;
  putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorTerminationCommand}
   */
  putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorTerminationCommandOutput>;
  putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void
  ): void;
  putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorTerminationCredentialsCommand}
   */
  putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorTerminationCredentialsCommandOutput>;
  putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link RedactChannelMessageCommand}
   */
  redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RedactChannelMessageCommandOutput>;
  redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    cb: (err: any, data?: RedactChannelMessageCommandOutput) => void
  ): void;
  redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RedactChannelMessageCommandOutput) => void
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
   * @see {@link SendChannelMessageCommand}
   */
  sendChannelMessage(
    args: SendChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendChannelMessageCommandOutput>;
  sendChannelMessage(
    args: SendChannelMessageCommandInput,
    cb: (err: any, data?: SendChannelMessageCommandOutput) => void
  ): void;
  sendChannelMessage(
    args: SendChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendChannelMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMeetingTranscriptionCommand}
   */
  startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMeetingTranscriptionCommandOutput>;
  startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    cb: (err: any, data?: StartMeetingTranscriptionCommandOutput) => void
  ): void;
  startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMeetingTranscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopMeetingTranscriptionCommand}
   */
  stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopMeetingTranscriptionCommandOutput>;
  stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    cb: (err: any, data?: StopMeetingTranscriptionCommandOutput) => void
  ): void;
  stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopMeetingTranscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagAttendeeCommand}
   */
  tagAttendee(args: TagAttendeeCommandInput, options?: __HttpHandlerOptions): Promise<TagAttendeeCommandOutput>;
  tagAttendee(args: TagAttendeeCommandInput, cb: (err: any, data?: TagAttendeeCommandOutput) => void): void;
  tagAttendee(
    args: TagAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagAttendeeCommandOutput) => void
  ): void;

  /**
   * @see {@link TagMeetingCommand}
   */
  tagMeeting(args: TagMeetingCommandInput, options?: __HttpHandlerOptions): Promise<TagMeetingCommandOutput>;
  tagMeeting(args: TagMeetingCommandInput, cb: (err: any, data?: TagMeetingCommandOutput) => void): void;
  tagMeeting(
    args: TagMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagMeetingCommandOutput) => void
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
   * @see {@link UntagAttendeeCommand}
   */
  untagAttendee(args: UntagAttendeeCommandInput, options?: __HttpHandlerOptions): Promise<UntagAttendeeCommandOutput>;
  untagAttendee(args: UntagAttendeeCommandInput, cb: (err: any, data?: UntagAttendeeCommandOutput) => void): void;
  untagAttendee(
    args: UntagAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagAttendeeCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagMeetingCommand}
   */
  untagMeeting(args: UntagMeetingCommandInput, options?: __HttpHandlerOptions): Promise<UntagMeetingCommandOutput>;
  untagMeeting(args: UntagMeetingCommandInput, cb: (err: any, data?: UntagMeetingCommandOutput) => void): void;
  untagMeeting(
    args: UntagMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagMeetingCommandOutput) => void
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
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(args: UpdateChannelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateChannelCommandOutput>;
  updateChannel(args: UpdateChannelCommandInput, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelMessageCommand}
   */
  updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelMessageCommandOutput>;
  updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    cb: (err: any, data?: UpdateChannelMessageCommandOutput) => void
  ): void;
  updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelReadMarkerCommand}
   */
  updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelReadMarkerCommandOutput>;
  updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    cb: (err: any, data?: UpdateChannelReadMarkerCommandOutput) => void
  ): void;
  updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelReadMarkerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlobalSettingsCommand}
   */
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
   * @see {@link UpdateProxySessionCommand}
   */
  updateProxySession(
    args: UpdateProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProxySessionCommandOutput>;
  updateProxySession(
    args: UpdateProxySessionCommandInput,
    cb: (err: any, data?: UpdateProxySessionCommandOutput) => void
  ): void;
  updateProxySession(
    args: UpdateProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProxySessionCommandOutput) => void
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
   * @see {@link UpdateSipMediaApplicationCommand}
   */
  updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSipMediaApplicationCommandOutput>;
  updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    cb: (err: any, data?: UpdateSipMediaApplicationCommandOutput) => void
  ): void;
  updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipMediaApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSipMediaApplicationCallCommand}
   */
  updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSipMediaApplicationCallCommandOutput>;
  updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    cb: (err: any, data?: UpdateSipMediaApplicationCallCommandOutput) => void
  ): void;
  updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipMediaApplicationCallCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSipRuleCommand}
   */
  updateSipRule(args: UpdateSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSipRuleCommandOutput>;
  updateSipRule(args: UpdateSipRuleCommandInput, cb: (err: any, data?: UpdateSipRuleCommandOutput) => void): void;
  updateSipRule(
    args: UpdateSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipRuleCommandOutput) => void
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

  /**
   * @see {@link UpdateVoiceConnectorCommand}
   */
  updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceConnectorCommandOutput>;
  updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    cb: (err: any, data?: UpdateVoiceConnectorCommandOutput) => void
  ): void;
  updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVoiceConnectorGroupCommand}
   */
  updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceConnectorGroupCommandOutput>;
  updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void
  ): void;
  updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateE911AddressCommand}
   */
  validateE911Address(
    args: ValidateE911AddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateE911AddressCommandOutput>;
  validateE911Address(
    args: ValidateE911AddressCommandInput,
    cb: (err: any, data?: ValidateE911AddressCommandOutput) => void
  ): void;
  validateE911Address(
    args: ValidateE911AddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateE911AddressCommandOutput) => void
  ): void;
}

/**
 * @public
 * @deprecated
 *
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
 */
export class Chime extends ChimeClient implements Chime {}
createAggregatedClient(commands, Chime);
