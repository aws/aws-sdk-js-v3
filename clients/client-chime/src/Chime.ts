import { ChimeClient } from "./ChimeClient";
import {
  AssociatePhoneNumberWithUserCommand,
  AssociatePhoneNumberWithUserCommandInput,
  AssociatePhoneNumberWithUserCommandOutput,
} from "./commands/AssociatePhoneNumberWithUserCommand";
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
  ListAttendeeTagsCommand,
  ListAttendeeTagsCommandInput,
  ListAttendeeTagsCommandOutput,
} from "./commands/ListAttendeeTagsCommand";
import {
  ListAttendeesCommand,
  ListAttendeesCommandInput,
  ListAttendeesCommandOutput,
} from "./commands/ListAttendeesCommand";
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
  ListMeetingTagsCommand,
  ListMeetingTagsCommandInput,
  ListMeetingTagsCommandOutput,
} from "./commands/ListMeetingTagsCommand";
import {
  ListMeetingsCommand,
  ListMeetingsCommandInput,
  ListMeetingsCommandOutput,
} from "./commands/ListMeetingsCommand";
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
  ListVoiceConnectorTerminationCredentialsCommand,
  ListVoiceConnectorTerminationCredentialsCommandInput,
  ListVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/ListVoiceConnectorTerminationCredentialsCommand";
import {
  ListVoiceConnectorsCommand,
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
} from "./commands/ListVoiceConnectorsCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>The Amazon Chime API (application programming interface) is designed for developers to
 *             perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice
 *             Connectors. This guide provides detailed information about the Amazon Chime API,
 *             including operations, types, inputs and outputs, and error codes. It also includes some
 *             server-side API actions to use with the Amazon Chime SDK. For more information about the
 *             Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">
 *                 Using the Amazon Chime SDK
 *             </a> in the <i>Amazon Chime Developer Guide</i>.</p>
 *          <p>You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to make API calls. We recommend using an AWS SDK or the
 *     AWS CLI. Each API operation includes links to information about using it with a language-specific AWS SDK or the AWS CLI.</p>
 *          <dl>
 *             <dt>Using an AWS SDK</dt>
 *             <dd>
 *                <p>
 * You don't need to write code to calculate a signature for request authentication. The SDK clients authenticate your requests by using access keys that you provide. For more information about AWS SDKs, see the
 * <a href="http://aws.amazon.com/developer/">AWS Developer Center</a>.
 * </p>
 *             </dd>
 *             <dt>Using the AWS CLI</dt>
 *             <dd>
 *                <p>Use your access keys with the AWS CLI to make API calls. For information about setting up the AWS CLI, see
 * <a href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html">Installing the AWS Command Line Interface</a>
 * in the <i>AWS Command Line Interface User Guide</i>. For a list of available Amazon Chime commands, see the
 * <a href="https://docs.aws.amazon.com/cli/latest/reference/chime/index.html">Amazon Chime commands</a> in the
 *     <i>AWS CLI Command Reference</i>.
 * </p>
 *             </dd>
 *             <dt>Using REST APIs</dt>
 *             <dd>
 *                <p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Chime supports signature version 4. For more information, see
 * <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>
 * in the <i>Amazon Web Services General Reference</i>.</p>
 *
 *                <p>When making REST API calls, use the service name <code>chime</code> and REST endpoint <code>https://service.chime.aws.amazon.com</code>.</p>
 *             </dd>
 *          </dl>
 *
 *          <p>Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/security-iam.html">Identity and Access Management for Amazon Chime</a>
 * in the <i>Amazon Chime Administration Guide</i>.</p>
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
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void
  ): void;
  public associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void
  ): void;
  public associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorCommandOutput> | void {
    const command = new AssociatePhoneNumbersWithVoiceConnectorCommand(args);
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
   * <p>Associates phone numbers with the specified Amazon Chime Voice Connector group.</p>
   */
  public associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput>;
  public associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void
  ): void;
  public associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void
  ): void;
  public associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput> | void {
    const command = new AssociatePhoneNumbersWithVoiceConnectorGroupCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociatePhoneNumberWithUserCommandOutput) => void),
    cb?: (err: any, data?: AssociatePhoneNumberWithUserCommandOutput) => void
  ): Promise<AssociatePhoneNumberWithUserCommandOutput> | void {
    const command = new AssociatePhoneNumberWithUserCommand(args);
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
   * <p>Associates the specified sign-in delegate groups with the specified Amazon Chime account.</p>
   */
  public associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSigninDelegateGroupsWithAccountCommandOutput>;
  public associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    cb: (err: any, data?: AssociateSigninDelegateGroupsWithAccountCommandOutput) => void
  ): void;
  public associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSigninDelegateGroupsWithAccountCommandOutput) => void
  ): void;
  public associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateSigninDelegateGroupsWithAccountCommandOutput) => void),
    cb?: (err: any, data?: AssociateSigninDelegateGroupsWithAccountCommandOutput) => void
  ): Promise<AssociateSigninDelegateGroupsWithAccountCommandOutput> | void {
    const command = new AssociateSigninDelegateGroupsWithAccountCommand(args);
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
   * <p>
   * Creates up to 100 new attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>.
   * </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCreateAttendeeCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateAttendeeCommandOutput) => void
  ): Promise<BatchCreateAttendeeCommandOutput> | void {
    const command = new BatchCreateAttendeeCommand(args);
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
   * <p>Adds a specified number of users to a channel.</p>
   */
  public batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateChannelMembershipCommandOutput>;
  public batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    cb: (err: any, data?: BatchCreateChannelMembershipCommandOutput) => void
  ): void;
  public batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateChannelMembershipCommandOutput) => void
  ): void;
  public batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCreateChannelMembershipCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateChannelMembershipCommandOutput) => void
  ): Promise<BatchCreateChannelMembershipCommandOutput> | void {
    const command = new BatchCreateChannelMembershipCommand(args);
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
   * <p>Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCreateRoomMembershipCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateRoomMembershipCommandOutput) => void
  ): Promise<BatchCreateRoomMembershipCommandOutput> | void {
    const command = new BatchCreateRoomMembershipCommand(args);
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
   * <p>
   * Moves phone numbers into the
   * <b>Deletion queue</b>. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted.
   * </p>
   *
   *          <p>
   * Phone numbers remain in the
   * <b>Deletion queue</b> for 7 days before they are deleted permanently.
   * </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeletePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): Promise<BatchDeletePhoneNumberCommandOutput> | void {
    const command = new BatchDeletePhoneNumberCommand(args);
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
   * <p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon Chime
   *             account. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration
   *                 Guide</i>.</p>
   *
   *          <p>Users suspended from a <code>Team</code> account are disassociated from the account,but they
   *             can continue to use Amazon Chime as free users. To remove the suspension from suspended
   *                 <code>Team</code> account users, invite them to the <code>Team</code> account again.
   *             You can use the <a>InviteUsers</a> action to do so.</p>
   *
   *          <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out of
   *             Amazon Chime and can no longer sign in. To remove the suspension from suspended <code>EnterpriseLWA</code> account users, use the <a>BatchUnsuspendUser</a> action.</p>
   *
   *          <p>
   * To sign out users without suspending them, use the
   * <a>LogoutUser</a>
   * action.
   * </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchSuspendUserCommandOutput) => void),
    cb?: (err: any, data?: BatchSuspendUserCommandOutput) => void
  ): Promise<BatchSuspendUserCommandOutput> | void {
    const command = new BatchSuspendUserCommand(args);
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
   * <p>Removes the suspension from up to 50 previously suspended users for the specified Amazon
   *             Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code>
   *             accounts can be unsuspended using this action. For more information about different account types, see
   *     <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">
   *         Managing Your Amazon Chime Accounts
   *     </a> in the account types, in the <i>Amazon Chime Administration Guide</i>.
   * </p>
   *
   *          <p>
   * Previously suspended users who are unsuspended using this action are returned to
   * <code>Registered</code>
   * status. Users who are not previously suspended are ignored.
   * </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUnsuspendUserCommandOutput) => void),
    cb?: (err: any, data?: BatchUnsuspendUserCommandOutput) => void
  ): Promise<BatchUnsuspendUserCommandOutput> | void {
    const command = new BatchUnsuspendUserCommand(args);
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
   * <p>Updates phone number product types or calling names. You can update one attribute at a time for each <code>UpdatePhoneNumberRequestItem</code>. For example, you can update the product type or the calling name.</p>
   *          <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): Promise<BatchUpdatePhoneNumberCommandOutput> | void {
    const command = new BatchUpdatePhoneNumberCommand(args);
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
   * <p>Updates user details within the <a>UpdateUserRequestItem</a> object for up to 20 users for the specified Amazon Chime account. Currently, only <code>LicenseType</code> updates are supported for this action.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUpdateUserCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdateUserCommandOutput) => void
  ): Promise<BatchUpdateUserCommandOutput> | void {
    const command = new BatchUpdateUserCommand(args);
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
   * <p>Creates an Amazon Chime account under the administrator's AWS account. Only <code>Team</code>
   *             account types are currently supported for this action. For more information about different account types, see
   *     <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccountCommandOutput) => void),
    cb?: (err: any, data?: CreateAccountCommandOutput) => void
  ): Promise<CreateAccountCommandOutput> | void {
    const command = new CreateAccountCommand(args);
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
   * <p>Creates an Amazon Chime SDK messaging <code>AppInstance</code> under an AWS account. Only SDK messaging customers use this API.
   * <code>CreateAppInstance</code> supports idempotency behavior as described in the AWS API Standard.</p>
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
   * <p>Promotes an <code>AppInstanceUser</code> to an <code>AppInstanceAdmin</code>. The promoted user can perform the following actions.
   * </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ChannelModerator</code> actions across all channels in the <code>AppInstance</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeleteChannelMessage</code> actions.</p>
   *             </li>
   *          </ul>
   *
   *          <p>Only an <code>AppInstanceUser</code> can be promoted to an <code>AppInstanceAdmin</code> role.</p>
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
   * <p>Creates a user under an Amazon Chime <code>AppInstance</code>. The request consists of a unique <code>appInstanceUserId</code> and
   * <code>Name</code> for that user.</p>
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
   * <p>
   * Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>.
   * </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAttendeeCommandOutput) => void),
    cb?: (err: any, data?: CreateAttendeeCommandOutput) => void
  ): Promise<CreateAttendeeCommandOutput> | void {
    const command = new CreateAttendeeCommand(args);
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
   * <p>Creates a bot for an Amazon Chime Enterprise account.</p>
   */
  public createBot(args: CreateBotCommandInput, options?: __HttpHandlerOptions): Promise<CreateBotCommandOutput>;
  public createBot(args: CreateBotCommandInput, cb: (err: any, data?: CreateBotCommandOutput) => void): void;
  public createBot(
    args: CreateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBotCommandOutput) => void
  ): void;
  public createBot(
    args: CreateBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBotCommandOutput) => void),
    cb?: (err: any, data?: CreateBotCommandOutput) => void
  ): Promise<CreateBotCommandOutput> | void {
    const command = new CreateBotCommand(args);
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
   * <p>Creates a channel to which you can add users and send messages.</p>
   *
   *          <p>
   *             <b>Restriction</b>: You can't change a channel's
   *          privacy.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public createChannel(
    args: CreateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelCommandOutput>;
  public createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChannelCommandOutput) => void),
    cb?: (err: any, data?: CreateChannelCommandOutput) => void
  ): Promise<CreateChannelCommandOutput> | void {
    const command = new CreateChannelCommand(args);
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
   * <p>Permanently bans a member from a channel. Moderators can't add banned members to a
   *          channel. To undo a ban, you first have to <code>DeleteChannelBan</code>, and then
   *             <code>CreateChannelMembership</code>. Bans are cleaned up when you delete users or
   *          channels.</p>
   *          <p>If you ban a user who is already part of a channel, that user is automatically kicked
   *          from the channel.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public createChannelBan(
    args: CreateChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelBanCommandOutput>;
  public createChannelBan(
    args: CreateChannelBanCommandInput,
    cb: (err: any, data?: CreateChannelBanCommandOutput) => void
  ): void;
  public createChannelBan(
    args: CreateChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelBanCommandOutput) => void
  ): void;
  public createChannelBan(
    args: CreateChannelBanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChannelBanCommandOutput) => void),
    cb?: (err: any, data?: CreateChannelBanCommandOutput) => void
  ): Promise<CreateChannelBanCommandOutput> | void {
    const command = new CreateChannelBanCommand(args);
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
   * <p>Adds a user to a channel. The <code>InvitedBy</code> response field is derived from the
   *          request header. A channel member can:</p>
   *
   *          <ul>
   *             <li>
   *                <p>List messages</p>
   *             </li>
   *             <li>
   *                <p>Send messages</p>
   *             </li>
   *             <li>
   *                <p>Receive messages</p>
   *             </li>
   *             <li>
   *                <p>Edit their own messages</p>
   *             </li>
   *             <li>
   *                <p>Leave the channel</p>
   *             </li>
   *          </ul>
   *
   *          <p>Privacy settings impact this action as follows:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Public Channels: You do not need to be a member to list messages, but you must be
   *                a member to send messages.</p>
   *             </li>
   *             <li>
   *                <p>Private Channels: You must be a member to list or send messages.</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelMembershipCommandOutput>;
  public createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    cb: (err: any, data?: CreateChannelMembershipCommandOutput) => void
  ): void;
  public createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelMembershipCommandOutput) => void
  ): void;
  public createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChannelMembershipCommandOutput) => void),
    cb?: (err: any, data?: CreateChannelMembershipCommandOutput) => void
  ): Promise<CreateChannelMembershipCommandOutput> | void {
    const command = new CreateChannelMembershipCommand(args);
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
   * <p>Creates a new <code>ChannelModerator</code>. A channel moderator can:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Add and remove other members of the channel.</p>
   *             </li>
   *             <li>
   *                <p>Add and remove other moderators of the channel.</p>
   *             </li>
   *             <li>
   *                <p>Add and remove user bans for the channel.</p>
   *             </li>
   *             <li>
   *                <p>Redact messages in the channel.</p>
   *             </li>
   *             <li>
   *                <p>List messages in the channel.</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelModeratorCommandOutput>;
  public createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    cb: (err: any, data?: CreateChannelModeratorCommandOutput) => void
  ): void;
  public createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelModeratorCommandOutput) => void
  ): void;
  public createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChannelModeratorCommandOutput) => void),
    cb?: (err: any, data?: CreateChannelModeratorCommandOutput) => void
  ): Promise<CreateChannelModeratorCommandOutput> | void {
    const command = new CreateChannelModeratorCommand(args);
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
   * <p>Creates a media capture pipeline.</p>
   */
  public createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMediaCapturePipelineCommandOutput>;
  public createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    cb: (err: any, data?: CreateMediaCapturePipelineCommandOutput) => void
  ): void;
  public createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMediaCapturePipelineCommandOutput) => void
  ): void;
  public createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMediaCapturePipelineCommandOutput) => void),
    cb?: (err: any, data?: CreateMediaCapturePipelineCommandOutput) => void
  ): Promise<CreateMediaCapturePipelineCommandOutput> | void {
    const command = new CreateMediaCapturePipelineCommand(args);
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
   * <p>
   * Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * . For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * .
   * </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMeetingCommandOutput) => void),
    cb?: (err: any, data?: CreateMeetingCommandOutput) => void
  ): Promise<CreateMeetingCommandOutput> | void {
    const command = new CreateMeetingCommand(args);
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
   * <p>Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public
   *     switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer.</p>
   *
   *          <p>To play welcome audio or implement an interactive voice response (IVR), use the
   * <code>CreateSipMediaApplicationCall</code> action with the corresponding SIP media application ID.</p>
   */
  public createMeetingDialOut(
    args: CreateMeetingDialOutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMeetingDialOutCommandOutput>;
  public createMeetingDialOut(
    args: CreateMeetingDialOutCommandInput,
    cb: (err: any, data?: CreateMeetingDialOutCommandOutput) => void
  ): void;
  public createMeetingDialOut(
    args: CreateMeetingDialOutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeetingDialOutCommandOutput) => void
  ): void;
  public createMeetingDialOut(
    args: CreateMeetingDialOutCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMeetingDialOutCommandOutput) => void),
    cb?: (err: any, data?: CreateMeetingDialOutCommandOutput) => void
  ): Promise<CreateMeetingDialOutCommandOutput> | void {
    const command = new CreateMeetingDialOutCommand(args);
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
   * <p>
   * Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * . For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * .
   * </p>
   */
  public createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMeetingWithAttendeesCommandOutput>;
  public createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    cb: (err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void
  ): void;
  public createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void
  ): void;
  public createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void),
    cb?: (err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void
  ): Promise<CreateMeetingWithAttendeesCommandOutput> | void {
    const command = new CreateMeetingWithAttendeesCommand(args);
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
   * <p>Creates an order for phone numbers to be provisioned. For toll-free numbers, you cannot use the Amazon Chime Business Calling product type.
   *         For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePhoneNumberOrderCommandOutput) => void),
    cb?: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): Promise<CreatePhoneNumberOrderCommandOutput> | void {
    const command = new CreatePhoneNumberOrderCommand(args);
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
   * <p>Creates a proxy session on the specified Amazon Chime Voice Connector for the specified participant phone numbers.</p>
   */
  public createProxySession(
    args: CreateProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProxySessionCommandOutput>;
  public createProxySession(
    args: CreateProxySessionCommandInput,
    cb: (err: any, data?: CreateProxySessionCommandOutput) => void
  ): void;
  public createProxySession(
    args: CreateProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProxySessionCommandOutput) => void
  ): void;
  public createProxySession(
    args: CreateProxySessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProxySessionCommandOutput) => void),
    cb?: (err: any, data?: CreateProxySessionCommandOutput) => void
  ): Promise<CreateProxySessionCommandOutput> | void {
    const command = new CreateProxySessionCommand(args);
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
   * <p>Creates a chat room for the specified Amazon Chime Enterprise account.</p>
   */
  public createRoom(args: CreateRoomCommandInput, options?: __HttpHandlerOptions): Promise<CreateRoomCommandOutput>;
  public createRoom(args: CreateRoomCommandInput, cb: (err: any, data?: CreateRoomCommandOutput) => void): void;
  public createRoom(
    args: CreateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoomCommandOutput) => void
  ): void;
  public createRoom(
    args: CreateRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRoomCommandOutput) => void),
    cb?: (err: any, data?: CreateRoomCommandOutput) => void
  ): Promise<CreateRoomCommandOutput> | void {
    const command = new CreateRoomCommand(args);
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
   * <p>Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRoomMembershipCommandOutput) => void),
    cb?: (err: any, data?: CreateRoomMembershipCommandOutput) => void
  ): Promise<CreateRoomMembershipCommandOutput> | void {
    const command = new CreateRoomMembershipCommand(args);
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
   * <p>Creates a SIP media application.</p>
   */
  public createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSipMediaApplicationCommandOutput>;
  public createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    cb: (err: any, data?: CreateSipMediaApplicationCommandOutput) => void
  ): void;
  public createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipMediaApplicationCommandOutput) => void
  ): void;
  public createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSipMediaApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateSipMediaApplicationCommandOutput) => void
  ): Promise<CreateSipMediaApplicationCommandOutput> | void {
    const command = new CreateSipMediaApplicationCommand(args);
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
   * <p>Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified
   * <code>sipMediaApplicationId</code>.</p>
   */
  public createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSipMediaApplicationCallCommandOutput>;
  public createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    cb: (err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void
  ): void;
  public createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void
  ): void;
  public createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void),
    cb?: (err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void
  ): Promise<CreateSipMediaApplicationCallCommandOutput> | void {
    const command = new CreateSipMediaApplicationCallCommand(args);
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
   * <p>Creates a SIP rule which can be used to run a SIP media application as a target for a specific trigger type.</p>
   */
  public createSipRule(
    args: CreateSipRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSipRuleCommandOutput>;
  public createSipRule(
    args: CreateSipRuleCommandInput,
    cb: (err: any, data?: CreateSipRuleCommandOutput) => void
  ): void;
  public createSipRule(
    args: CreateSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipRuleCommandOutput) => void
  ): void;
  public createSipRule(
    args: CreateSipRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSipRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateSipRuleCommandOutput) => void
  ): Promise<CreateSipRuleCommandOutput> | void {
    const command = new CreateSipRuleCommand(args);
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
   * <p>Creates a user under the specified Amazon Chime account.</p>
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
   * <p>Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region.</p>
   *
   *          <p>
   * Enabling
   * <a>CreateVoiceConnectorRequest$RequireEncryption</a>
   * configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked.
   * </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: CreateVoiceConnectorCommandOutput) => void
  ): Promise<CreateVoiceConnectorCommandOutput> | void {
    const command = new CreateVoiceConnectorCommand(args);
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
   * <p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can
   *             associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by
   *             including <code>VoiceConnectorItems</code> in the request.</p>
   *          <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This
   *             creates a fault tolerant mechanism for fallback in case of availability events.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void
  ): Promise<CreateVoiceConnectorGroupCommandOutput> | void {
    const command = new CreateVoiceConnectorGroupCommand(args);
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
   * <p>Deletes the specified Amazon Chime account. You must suspend all users before deleting
   *                 <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action
   *             to dodo.</p>
   *
   *          <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must release the
   *             claimed domains for your Amazon Chime account before deletion. As soon as you release
   *             the domain, all users under that account are suspended.</p>
   *
   *          <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore
   *             deleted account from your <code>Disabled</code> accounts list, you must contact AWS
   *             Support.</p>
   *
   *          <p>After 90 days, deleted accounts are permanently removed from your
   * <code>Disabled</code> accounts list.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccountCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccountCommandOutput) => void
  ): Promise<DeleteAccountCommandOutput> | void {
    const command = new DeleteAccountCommand(args);
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
   * <p>Demotes an <code>AppInstanceAdmin</code> to an <code>AppInstanceUser</code>. This action does not delete the user.</p>
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
   * <p>Deletes the streaming configurations of an <code>AppInstance</code>.</p>
   */
  public deleteAppInstanceStreamingConfigurations(
    args: DeleteAppInstanceStreamingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceStreamingConfigurationsCommandOutput>;
  public deleteAppInstanceStreamingConfigurations(
    args: DeleteAppInstanceStreamingConfigurationsCommandInput,
    cb: (err: any, data?: DeleteAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  public deleteAppInstanceStreamingConfigurations(
    args: DeleteAppInstanceStreamingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  public deleteAppInstanceStreamingConfigurations(
    args: DeleteAppInstanceStreamingConfigurationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteAppInstanceStreamingConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppInstanceStreamingConfigurationsCommandOutput) => void
  ): Promise<DeleteAppInstanceStreamingConfigurationsCommandOutput> | void {
    const command = new DeleteAppInstanceStreamingConfigurationsCommand(args);
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
   * <p>Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their
   * <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the <i>Amazon Chime Developer Guide</i>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAttendeeCommandOutput) => void),
    cb?: (err: any, data?: DeleteAttendeeCommandOutput) => void
  ): Promise<DeleteAttendeeCommandOutput> | void {
    const command = new DeleteAttendeeCommand(args);
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
   * <p>Immediately makes a channel and its memberships inaccessible and marks them for
   *          deletion. This is an irreversible process.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public deleteChannel(
    args: DeleteChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelCommandOutput>;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelCommandOutput) => void
  ): Promise<DeleteChannelCommandOutput> | void {
    const command = new DeleteChannelCommand(args);
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
   * <p>Removes a user from a channel's ban list.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelBanCommandOutput>;
  public deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    cb: (err: any, data?: DeleteChannelBanCommandOutput) => void
  ): void;
  public deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelBanCommandOutput) => void
  ): void;
  public deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelBanCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelBanCommandOutput) => void
  ): Promise<DeleteChannelBanCommandOutput> | void {
    const command = new DeleteChannelBanCommand(args);
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
   * <p>Removes a member from a channel.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelMembershipCommandOutput>;
  public deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    cb: (err: any, data?: DeleteChannelMembershipCommandOutput) => void
  ): void;
  public deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelMembershipCommandOutput) => void
  ): void;
  public deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelMembershipCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelMembershipCommandOutput) => void
  ): Promise<DeleteChannelMembershipCommandOutput> | void {
    const command = new DeleteChannelMembershipCommand(args);
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
   * <p>Deletes a channel message. Only admins can perform this action. Deletion makes messages
   *          inaccessible immediately. A background process deletes any revisions created by
   *             <code>UpdateChannelMessage</code>.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelMessageCommandOutput>;
  public deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    cb: (err: any, data?: DeleteChannelMessageCommandOutput) => void
  ): void;
  public deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelMessageCommandOutput) => void
  ): void;
  public deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelMessageCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelMessageCommandOutput) => void
  ): Promise<DeleteChannelMessageCommandOutput> | void {
    const command = new DeleteChannelMessageCommand(args);
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
   * <p>Deletes a channel moderator.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelModeratorCommandOutput>;
  public deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    cb: (err: any, data?: DeleteChannelModeratorCommandOutput) => void
  ): void;
  public deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelModeratorCommandOutput) => void
  ): void;
  public deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelModeratorCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelModeratorCommandOutput) => void
  ): Promise<DeleteChannelModeratorCommandOutput> | void {
    const command = new DeleteChannelModeratorCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventsConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventsConfigurationCommandOutput) => void
  ): Promise<DeleteEventsConfigurationCommandOutput> | void {
    const command = new DeleteEventsConfigurationCommand(args);
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
   * <p>Deletes the media capture pipeline.</p>
   */
  public deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMediaCapturePipelineCommandOutput>;
  public deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    cb: (err: any, data?: DeleteMediaCapturePipelineCommandOutput) => void
  ): void;
  public deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMediaCapturePipelineCommandOutput) => void
  ): void;
  public deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMediaCapturePipelineCommandOutput) => void),
    cb?: (err: any, data?: DeleteMediaCapturePipelineCommandOutput) => void
  ): Promise<DeleteMediaCapturePipelineCommandOutput> | void {
    const command = new DeleteMediaCapturePipelineCommand(args);
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
   * <p>Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from
   *     joining the meeting. For more information about the Amazon Chime SDK, see
   *     <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the
   *     <i>Amazon Chime Developer Guide</i>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMeetingCommandOutput) => void),
    cb?: (err: any, data?: DeleteMeetingCommandOutput) => void
  ): Promise<DeleteMeetingCommandOutput> | void {
    const command = new DeleteMeetingCommand(args);
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
   * <p>Moves the specified phone number into the <b>Deletion queue</b>. A
   *             phone number must be disassociated from any users or Amazon Chime Voice Connectors
   *             before it can be deleted.</p>
   *
   *          <p>Deleted phone numbers remain in the
   * <b>Deletion queue</b>
   * for 7 days before they are deleted permanently.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): Promise<DeletePhoneNumberCommandOutput> | void {
    const command = new DeletePhoneNumberCommand(args);
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
   * <p>Deletes the specified proxy session from the specified Amazon Chime Voice Connector.</p>
   */
  public deleteProxySession(
    args: DeleteProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProxySessionCommandOutput>;
  public deleteProxySession(
    args: DeleteProxySessionCommandInput,
    cb: (err: any, data?: DeleteProxySessionCommandOutput) => void
  ): void;
  public deleteProxySession(
    args: DeleteProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProxySessionCommandOutput) => void
  ): void;
  public deleteProxySession(
    args: DeleteProxySessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProxySessionCommandOutput) => void),
    cb?: (err: any, data?: DeleteProxySessionCommandOutput) => void
  ): Promise<DeleteProxySessionCommandOutput> | void {
    const command = new DeleteProxySessionCommand(args);
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
   * <p>Deletes a chat room in an Amazon Chime Enterprise account.</p>
   */
  public deleteRoom(args: DeleteRoomCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRoomCommandOutput>;
  public deleteRoom(args: DeleteRoomCommandInput, cb: (err: any, data?: DeleteRoomCommandOutput) => void): void;
  public deleteRoom(
    args: DeleteRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoomCommandOutput) => void
  ): void;
  public deleteRoom(
    args: DeleteRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRoomCommandOutput) => void),
    cb?: (err: any, data?: DeleteRoomCommandOutput) => void
  ): Promise<DeleteRoomCommandOutput> | void {
    const command = new DeleteRoomCommand(args);
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
   * <p>Removes a member from a chat room in an Amazon Chime Enterprise account.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRoomMembershipCommandOutput) => void),
    cb?: (err: any, data?: DeleteRoomMembershipCommandOutput) => void
  ): Promise<DeleteRoomMembershipCommandOutput> | void {
    const command = new DeleteRoomMembershipCommand(args);
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
   * <p>Deletes a SIP media application.</p>
   */
  public deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSipMediaApplicationCommandOutput>;
  public deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    cb: (err: any, data?: DeleteSipMediaApplicationCommandOutput) => void
  ): void;
  public deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSipMediaApplicationCommandOutput) => void
  ): void;
  public deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSipMediaApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSipMediaApplicationCommandOutput) => void
  ): Promise<DeleteSipMediaApplicationCommandOutput> | void {
    const command = new DeleteSipMediaApplicationCommand(args);
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
   * <p>Deletes a SIP rule. You must disable a SIP rule before you can delete it.</p>
   */
  public deleteSipRule(
    args: DeleteSipRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSipRuleCommandOutput>;
  public deleteSipRule(
    args: DeleteSipRuleCommandInput,
    cb: (err: any, data?: DeleteSipRuleCommandOutput) => void
  ): void;
  public deleteSipRule(
    args: DeleteSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSipRuleCommandOutput) => void
  ): void;
  public deleteSipRule(
    args: DeleteSipRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSipRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteSipRuleCommandOutput) => void
  ): Promise<DeleteSipRuleCommandOutput> | void {
    const command = new DeleteSipRuleCommand(args);
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
   * <p>Deletes the specified Amazon Chime Voice Connector. Any phone numbers associated with the
   *             Amazon Chime Voice Connector must be disassociated from it before it can be
   *             deleted.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorCommandOutput) => void
  ): Promise<DeleteVoiceConnectorCommandOutput> | void {
    const command = new DeleteVoiceConnectorCommand(args);
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
   * <p>Deletes the emergency calling configuration details from the specified Amazon Chime Voice Connector.</p>
   */
  public deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  public deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): Promise<DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput> | void {
    const command = new DeleteVoiceConnectorEmergencyCallingConfigurationCommand(args);
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
   * <p>Deletes the specified Amazon Chime Voice Connector group. Any
   * <code>VoiceConnectorItems</code>
   * and phone numbers associated with the group must be removed before it can be deleted.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void
  ): Promise<DeleteVoiceConnectorGroupCommandOutput> | void {
    const command = new DeleteVoiceConnectorGroupCommand(args);
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
   * <p>Deletes the origination settings for the specified Amazon Chime Voice Connector.</p>
   *
   *          <note>
   *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the origination settings.</p>
   *          </note>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void
  ): Promise<DeleteVoiceConnectorOriginationCommandOutput> | void {
    const command = new DeleteVoiceConnectorOriginationCommand(args);
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
   * <p>Deletes the proxy configuration from the specified Amazon Chime Voice Connector.</p>
   */
  public deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorProxyCommandOutput>;
  public deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void
  ): void;
  public deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void
  ): void;
  public deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void
  ): Promise<DeleteVoiceConnectorProxyCommandOutput> | void {
    const command = new DeleteVoiceConnectorProxyCommand(args);
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
   * <p>Deletes the streaming configuration for the specified Amazon Chime Voice Connector.</p>
   */
  public deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorStreamingConfigurationCommandOutput>;
  public deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): Promise<DeleteVoiceConnectorStreamingConfigurationCommandOutput> | void {
    const command = new DeleteVoiceConnectorStreamingConfigurationCommand(args);
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
   * <p>Deletes the termination settings for the specified Amazon Chime Voice Connector.</p>
   *
   *          <note>
   *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the termination settings.</p>
   *          </note>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void
  ): Promise<DeleteVoiceConnectorTerminationCommandOutput> | void {
    const command = new DeleteVoiceConnectorTerminationCommand(args);
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
   * <p>Deletes the specified SIP credentials used by your equipment to authenticate during call termination.</p>
   */
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorTerminationCredentialsCommandOutput>;
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): Promise<DeleteVoiceConnectorTerminationCredentialsCommandOutput> | void {
    const command = new DeleteVoiceConnectorTerminationCredentialsCommand(args);
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
   * <p>Returns the full details of a channel in an Amazon Chime
   *          <code>AppInstance</code>.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public describeChannel(
    args: DescribeChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelCommandOutput>;
  public describeChannel(
    args: DescribeChannelCommandInput,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  public describeChannel(
    args: DescribeChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  public describeChannel(
    args: DescribeChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChannelCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelCommandOutput) => void
  ): Promise<DescribeChannelCommandOutput> | void {
    const command = new DescribeChannelCommand(args);
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
   * <p>Returns the full details of a channel ban.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public describeChannelBan(
    args: DescribeChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelBanCommandOutput>;
  public describeChannelBan(
    args: DescribeChannelBanCommandInput,
    cb: (err: any, data?: DescribeChannelBanCommandOutput) => void
  ): void;
  public describeChannelBan(
    args: DescribeChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelBanCommandOutput) => void
  ): void;
  public describeChannelBan(
    args: DescribeChannelBanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChannelBanCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelBanCommandOutput) => void
  ): Promise<DescribeChannelBanCommandOutput> | void {
    const command = new DescribeChannelBanCommand(args);
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
   * <p>Returns the full details of a user's channel membership.</p>
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelMembershipCommandOutput>;
  public describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    cb: (err: any, data?: DescribeChannelMembershipCommandOutput) => void
  ): void;
  public describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelMembershipCommandOutput) => void
  ): void;
  public describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChannelMembershipCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelMembershipCommandOutput) => void
  ): Promise<DescribeChannelMembershipCommandOutput> | void {
    const command = new DescribeChannelMembershipCommand(args);
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
   * <p> Returns the details of a channel based on the membership of the specified
   *             <code>AppInstanceUser</code>.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput>;
  public describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    cb: (err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void
  ): void;
  public describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void
  ): void;
  public describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void
  ): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput> | void {
    const command = new DescribeChannelMembershipForAppInstanceUserCommand(args);
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
   * <p>Returns the full details of a channel moderated by the specified
   *             <code>AppInstanceUser</code>.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput>;
  public describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    cb: (err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  public describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  public describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void
  ): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput> | void {
    const command = new DescribeChannelModeratedByAppInstanceUserCommand(args);
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
   * <p>Returns the full details of a single ChannelModerator.</p>
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelModeratorCommandOutput>;
  public describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    cb: (err: any, data?: DescribeChannelModeratorCommandOutput) => void
  ): void;
  public describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelModeratorCommandOutput) => void
  ): void;
  public describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChannelModeratorCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelModeratorCommandOutput) => void
  ): Promise<DescribeChannelModeratorCommandOutput> | void {
    const command = new DescribeChannelModeratorCommand(args);
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
   * <p>Disassociates the primary provisioned phone number from the specified Amazon Chime user.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociatePhoneNumberFromUserCommandOutput) => void),
    cb?: (err: any, data?: DisassociatePhoneNumberFromUserCommandOutput) => void
  ): Promise<DisassociatePhoneNumberFromUserCommandOutput> | void {
    const command = new DisassociatePhoneNumberFromUserCommand(args);
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
   * <p>Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector.</p>
   */
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput>;
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void
  ): void;
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void
  ): void;
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput> | void {
    const command = new DisassociatePhoneNumbersFromVoiceConnectorCommand(args);
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
   * <p>Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.</p>
   */
  public disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput>;
  public disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void
  ): void;
  public disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void
  ): void;
  public disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput> | void {
    const command = new DisassociatePhoneNumbersFromVoiceConnectorGroupCommand(args);
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
   * <p>Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.</p>
   */
  public disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput>;
  public disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    cb: (err: any, data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput) => void
  ): void;
  public disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput) => void
  ): void;
  public disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput) => void),
    cb?: (err: any, data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput) => void
  ): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput> | void {
    const command = new DisassociateSigninDelegateGroupsFromAccountCommand(args);
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
   * <p>Retrieves details for the specified Amazon Chime account, such as account type and supported
   *             licenses.</p>
   */
  public getAccount(args: GetAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountCommandOutput>;
  public getAccount(args: GetAccountCommandInput, cb: (err: any, data?: GetAccountCommandOutput) => void): void;
  public getAccount(
    args: GetAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;
  public getAccount(
    args: GetAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountCommandOutput) => void),
    cb?: (err: any, data?: GetAccountCommandOutput) => void
  ): Promise<GetAccountCommandOutput> | void {
    const command = new GetAccountCommand(args);
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
   * <p>Retrieves account settings for the specified Amazon Chime account ID, such as remote control
   *             and dialout settings. For more information about these settings, see
   *     <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.
   * </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): Promise<GetAccountSettingsCommandOutput> | void {
    const command = new GetAccountSettingsCommand(args);
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
   * <p>Gets the streaming settings for an <code>AppInstance</code>.</p>
   */
  public getAppInstanceStreamingConfigurations(
    args: GetAppInstanceStreamingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppInstanceStreamingConfigurationsCommandOutput>;
  public getAppInstanceStreamingConfigurations(
    args: GetAppInstanceStreamingConfigurationsCommandInput,
    cb: (err: any, data?: GetAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  public getAppInstanceStreamingConfigurations(
    args: GetAppInstanceStreamingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  public getAppInstanceStreamingConfigurations(
    args: GetAppInstanceStreamingConfigurationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAppInstanceStreamingConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: GetAppInstanceStreamingConfigurationsCommandOutput) => void
  ): Promise<GetAppInstanceStreamingConfigurationsCommandOutput> | void {
    const command = new GetAppInstanceStreamingConfigurationsCommand(args);
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
   * <p>
   * Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * .
   * </p>
   */
  public getAttendee(args: GetAttendeeCommandInput, options?: __HttpHandlerOptions): Promise<GetAttendeeCommandOutput>;
  public getAttendee(args: GetAttendeeCommandInput, cb: (err: any, data?: GetAttendeeCommandOutput) => void): void;
  public getAttendee(
    args: GetAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttendeeCommandOutput) => void
  ): void;
  public getAttendee(
    args: GetAttendeeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAttendeeCommandOutput) => void),
    cb?: (err: any, data?: GetAttendeeCommandOutput) => void
  ): Promise<GetAttendeeCommandOutput> | void {
    const command = new GetAttendeeCommand(args);
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
   * <p>Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.</p>
   */
  public getBot(args: GetBotCommandInput, options?: __HttpHandlerOptions): Promise<GetBotCommandOutput>;
  public getBot(args: GetBotCommandInput, cb: (err: any, data?: GetBotCommandOutput) => void): void;
  public getBot(
    args: GetBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotCommandOutput) => void
  ): void;
  public getBot(
    args: GetBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBotCommandOutput) => void),
    cb?: (err: any, data?: GetBotCommandOutput) => void
  ): Promise<GetBotCommandOutput> | void {
    const command = new GetBotCommand(args);
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
   * <p>Gets the full details of a channel message.</p>
   *
   *          <note>
   *             <p>The x-amz-chime-bearer request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public getChannelMessage(
    args: GetChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelMessageCommandOutput>;
  public getChannelMessage(
    args: GetChannelMessageCommandInput,
    cb: (err: any, data?: GetChannelMessageCommandOutput) => void
  ): void;
  public getChannelMessage(
    args: GetChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelMessageCommandOutput) => void
  ): void;
  public getChannelMessage(
    args: GetChannelMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetChannelMessageCommandOutput) => void),
    cb?: (err: any, data?: GetChannelMessageCommandOutput) => void
  ): Promise<GetChannelMessageCommandOutput> | void {
    const command = new GetChannelMessageCommand(args);
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
   * <p>Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEventsConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetEventsConfigurationCommandOutput) => void
  ): Promise<GetEventsConfigurationCommandOutput> | void {
    const command = new GetEventsConfigurationCommand(args);
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
   * <p>Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business
   *             Calling and Amazon Chime Voice Connector settings.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGlobalSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): Promise<GetGlobalSettingsCommandOutput> | void {
    const command = new GetGlobalSettingsCommand(args);
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
   * <p>Gets an existing media capture pipeline.</p>
   */
  public getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMediaCapturePipelineCommandOutput>;
  public getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    cb: (err: any, data?: GetMediaCapturePipelineCommandOutput) => void
  ): void;
  public getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaCapturePipelineCommandOutput) => void
  ): void;
  public getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMediaCapturePipelineCommandOutput) => void),
    cb?: (err: any, data?: GetMediaCapturePipelineCommandOutput) => void
  ): Promise<GetMediaCapturePipelineCommandOutput> | void {
    const command = new GetMediaCapturePipelineCommand(args);
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
   * <p>
   * Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * .
   * </p>
   */
  public getMeeting(args: GetMeetingCommandInput, options?: __HttpHandlerOptions): Promise<GetMeetingCommandOutput>;
  public getMeeting(args: GetMeetingCommandInput, cb: (err: any, data?: GetMeetingCommandOutput) => void): void;
  public getMeeting(
    args: GetMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMeetingCommandOutput) => void
  ): void;
  public getMeeting(
    args: GetMeetingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMeetingCommandOutput) => void),
    cb?: (err: any, data?: GetMeetingCommandOutput) => void
  ): Promise<GetMeetingCommandOutput> | void {
    const command = new GetMeetingCommand(args);
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
   * <p>The details of the endpoint for the messaging session.</p>
   */
  public getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMessagingSessionEndpointCommandOutput>;
  public getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    cb: (err: any, data?: GetMessagingSessionEndpointCommandOutput) => void
  ): void;
  public getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMessagingSessionEndpointCommandOutput) => void
  ): void;
  public getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMessagingSessionEndpointCommandOutput) => void),
    cb?: (err: any, data?: GetMessagingSessionEndpointCommandOutput) => void
  ): Promise<GetMessagingSessionEndpointCommandOutput> | void {
    const command = new GetMessagingSessionEndpointCommand(args);
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
   * <p>Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: GetPhoneNumberCommandOutput) => void
  ): Promise<GetPhoneNumberCommandOutput> | void {
    const command = new GetPhoneNumberCommand(args);
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
   * <p>Retrieves details for the specified phone number order, such as the order creation timestamp, phone
   *             numbers in E.164 format, product type, and order status.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPhoneNumberOrderCommandOutput) => void),
    cb?: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): Promise<GetPhoneNumberOrderCommandOutput> | void {
    const command = new GetPhoneNumberOrderCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPhoneNumberSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): Promise<GetPhoneNumberSettingsCommandOutput> | void {
    const command = new GetPhoneNumberSettingsCommand(args);
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
   * <p>Gets the specified proxy session details for the specified Amazon Chime Voice Connector.</p>
   */
  public getProxySession(
    args: GetProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProxySessionCommandOutput>;
  public getProxySession(
    args: GetProxySessionCommandInput,
    cb: (err: any, data?: GetProxySessionCommandOutput) => void
  ): void;
  public getProxySession(
    args: GetProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProxySessionCommandOutput) => void
  ): void;
  public getProxySession(
    args: GetProxySessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProxySessionCommandOutput) => void),
    cb?: (err: any, data?: GetProxySessionCommandOutput) => void
  ): Promise<GetProxySessionCommandOutput> | void {
    const command = new GetProxySessionCommand(args);
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
   * <p>
   * Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see
   * <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a> in the <i>Amazon Chime Administration Guide</i>.
   * </p>
   */
  public getRetentionSettings(
    args: GetRetentionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRetentionSettingsCommandOutput>;
  public getRetentionSettings(
    args: GetRetentionSettingsCommandInput,
    cb: (err: any, data?: GetRetentionSettingsCommandOutput) => void
  ): void;
  public getRetentionSettings(
    args: GetRetentionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRetentionSettingsCommandOutput) => void
  ): void;
  public getRetentionSettings(
    args: GetRetentionSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRetentionSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetRetentionSettingsCommandOutput) => void
  ): Promise<GetRetentionSettingsCommandOutput> | void {
    const command = new GetRetentionSettingsCommand(args);
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
   * <p>Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.</p>
   */
  public getRoom(args: GetRoomCommandInput, options?: __HttpHandlerOptions): Promise<GetRoomCommandOutput>;
  public getRoom(args: GetRoomCommandInput, cb: (err: any, data?: GetRoomCommandOutput) => void): void;
  public getRoom(
    args: GetRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoomCommandOutput) => void
  ): void;
  public getRoom(
    args: GetRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRoomCommandOutput) => void),
    cb?: (err: any, data?: GetRoomCommandOutput) => void
  ): Promise<GetRoomCommandOutput> | void {
    const command = new GetRoomCommand(args);
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
   * <p>Retrieves the information for a SIP media application, including name, AWS Region, and endpoints.</p>
   */
  public getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSipMediaApplicationCommandOutput>;
  public getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    cb: (err: any, data?: GetSipMediaApplicationCommandOutput) => void
  ): void;
  public getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipMediaApplicationCommandOutput) => void
  ): void;
  public getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSipMediaApplicationCommandOutput) => void),
    cb?: (err: any, data?: GetSipMediaApplicationCommandOutput) => void
  ): Promise<GetSipMediaApplicationCommandOutput> | void {
    const command = new GetSipMediaApplicationCommand(args);
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
   * <p>Returns the logging configuration for the specified SIP media application.</p>
   */
  public getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput>;
  public getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  public getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  public getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput> | void {
    const command = new GetSipMediaApplicationLoggingConfigurationCommand(args);
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
   * <p>Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and target endpoints.</p>
   */
  public getSipRule(args: GetSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetSipRuleCommandOutput>;
  public getSipRule(args: GetSipRuleCommandInput, cb: (err: any, data?: GetSipRuleCommandOutput) => void): void;
  public getSipRule(
    args: GetSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipRuleCommandOutput) => void
  ): void;
  public getSipRule(
    args: GetSipRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSipRuleCommandOutput) => void),
    cb?: (err: any, data?: GetSipRuleCommandOutput) => void
  ): Promise<GetSipRuleCommandOutput> | void {
    const command = new GetSipRuleCommand(args);
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
   * <p>Retrieves details for the specified user ID, such as primary email address, license type,and personal meeting PIN.</p>
   *
   *          <p>
   * To retrieve user details with an email address instead of a user ID, use the
   * <a>ListUsers</a> action, and then filter by email address.
   * </p>
   */
  public getUser(args: GetUserCommandInput, options?: __HttpHandlerOptions): Promise<GetUserCommandOutput>;
  public getUser(args: GetUserCommandInput, cb: (err: any, data?: GetUserCommandOutput) => void): void;
  public getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  public getUser(
    args: GetUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserCommandOutput) => void),
    cb?: (err: any, data?: GetUserCommandOutput) => void
  ): Promise<GetUserCommandOutput> | void {
    const command = new GetUserCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetUserSettingsCommandOutput) => void
  ): Promise<GetUserSettingsCommandOutput> | void {
    const command = new GetUserSettingsCommand(args);
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
   * <p>Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps,name, outbound host, and encryption requirements.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorCommandOutput) => void
  ): Promise<GetVoiceConnectorCommandOutput> | void {
    const command = new GetVoiceConnectorCommand(args);
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
   * <p>Gets the emergency calling configuration details for the specified Amazon Chime Voice Connector.</p>
   */
  public getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  public getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  public getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  public getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): Promise<GetVoiceConnectorEmergencyCallingConfigurationCommandOutput> | void {
    const command = new GetVoiceConnectorEmergencyCallingConfigurationCommand(args);
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
   * <p>
   * Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps,name, and associated <code>VoiceConnectorItems</code>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorGroupCommandOutput) => void
  ): Promise<GetVoiceConnectorGroupCommandOutput> | void {
    const command = new GetVoiceConnectorGroupCommand(args);
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
   * <p>Retrieves the logging configuration details for the specified Amazon Chime Voice Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
   */
  public getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput>;
  public getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  public getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  public getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput> | void {
    const command = new GetVoiceConnectorLoggingConfigurationCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void
  ): Promise<GetVoiceConnectorOriginationCommandOutput> | void {
    const command = new GetVoiceConnectorOriginationCommand(args);
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
   * <p>Gets the proxy configuration details for the specified Amazon Chime Voice Connector.</p>
   */
  public getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorProxyCommandOutput>;
  public getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: GetVoiceConnectorProxyCommandOutput) => void
  ): void;
  public getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorProxyCommandOutput) => void
  ): void;
  public getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceConnectorProxyCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorProxyCommandOutput) => void
  ): Promise<GetVoiceConnectorProxyCommandOutput> | void {
    const command = new GetVoiceConnectorProxyCommand(args);
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
   * <p>Retrieves the streaming configuration details for the specified Amazon Chime Voice Connector.
   *             Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows
   *             the retention period, in hours, for the Amazon Kinesis data.</p>
   */
  public getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput>;
  public getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  public getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  public getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput> | void {
    const command = new GetVoiceConnectorStreamingConfigurationCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void
  ): Promise<GetVoiceConnectorTerminationCommandOutput> | void {
    const command = new GetVoiceConnectorTerminationCommand(args);
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
   * <p>Retrieves information about the last time a SIP <code>OPTIONS</code> ping was received from
   *             your SIP infrastructure for the specified Amazon Chime Voice Connector.</p>
   */
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorTerminationHealthCommandOutput>;
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    cb: (err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void
  ): void;
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void
  ): void;
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void
  ): Promise<GetVoiceConnectorTerminationHealthCommandOutput> | void {
    const command = new GetVoiceConnectorTerminationHealthCommand(args);
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
   * <p>Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime
   *                 <code>Team</code> account. Only <code>Team</code> account types are currently
   *             supported for this action.</p>
   */
  public inviteUsers(args: InviteUsersCommandInput, options?: __HttpHandlerOptions): Promise<InviteUsersCommandOutput>;
  public inviteUsers(args: InviteUsersCommandInput, cb: (err: any, data?: InviteUsersCommandOutput) => void): void;
  public inviteUsers(
    args: InviteUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InviteUsersCommandOutput) => void
  ): void;
  public inviteUsers(
    args: InviteUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InviteUsersCommandOutput) => void),
    cb?: (err: any, data?: InviteUsersCommandOutput) => void
  ): Promise<InviteUsersCommandOutput> | void {
    const command = new InviteUsersCommand(args);
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
   * <p>Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts
   *             by account name prefix. To find out which Amazon Chime account a user belongs to, you can
   *             filter by the user's email address, which returns one account result.</p>
   */
  public listAccounts(
    args: ListAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountsCommandOutput>;
  public listAccounts(args: ListAccountsCommandInput, cb: (err: any, data?: ListAccountsCommandOutput) => void): void;
  public listAccounts(
    args: ListAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
  ): void;
  public listAccounts(
    args: ListAccountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListAccountsCommandOutput) => void
  ): Promise<ListAccountsCommandOutput> | void {
    const command = new ListAccountsCommand(args);
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
   * <p>Lists all Amazon Chime <code>AppInstance</code>s created under a single AWS account.</p>
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
   * <p>List all <code>AppInstanceUsers</code>
   *             created under a single <code>AppInstance</code>.
   *         </p>
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
   * <p>
   * Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the <i>Amazon Chime Developer Guide</i>.
   * </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttendeesCommandOutput) => void),
    cb?: (err: any, data?: ListAttendeesCommandOutput) => void
  ): Promise<ListAttendeesCommandOutput> | void {
    const command = new ListAttendeesCommand(args);
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
   * <p>Lists the tags applied to an Amazon Chime SDK attendee resource.</p>
   */
  public listAttendeeTags(
    args: ListAttendeeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttendeeTagsCommandOutput>;
  public listAttendeeTags(
    args: ListAttendeeTagsCommandInput,
    cb: (err: any, data?: ListAttendeeTagsCommandOutput) => void
  ): void;
  public listAttendeeTags(
    args: ListAttendeeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttendeeTagsCommandOutput) => void
  ): void;
  public listAttendeeTags(
    args: ListAttendeeTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttendeeTagsCommandOutput) => void),
    cb?: (err: any, data?: ListAttendeeTagsCommandOutput) => void
  ): Promise<ListAttendeeTagsCommandOutput> | void {
    const command = new ListAttendeeTagsCommand(args);
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
   * <p>Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.</p>
   */
  public listBots(args: ListBotsCommandInput, options?: __HttpHandlerOptions): Promise<ListBotsCommandOutput>;
  public listBots(args: ListBotsCommandInput, cb: (err: any, data?: ListBotsCommandOutput) => void): void;
  public listBots(
    args: ListBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;
  public listBots(
    args: ListBotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBotsCommandOutput) => void),
    cb?: (err: any, data?: ListBotsCommandOutput) => void
  ): Promise<ListBotsCommandOutput> | void {
    const command = new ListBotsCommand(args);
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
   * <p>Lists all the users banned from a particular channel.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannelBans(
    args: ListChannelBansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelBansCommandOutput>;
  public listChannelBans(
    args: ListChannelBansCommandInput,
    cb: (err: any, data?: ListChannelBansCommandOutput) => void
  ): void;
  public listChannelBans(
    args: ListChannelBansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelBansCommandOutput) => void
  ): void;
  public listChannelBans(
    args: ListChannelBansCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChannelBansCommandOutput) => void),
    cb?: (err: any, data?: ListChannelBansCommandOutput) => void
  ): Promise<ListChannelBansCommandOutput> | void {
    const command = new ListChannelBansCommand(args);
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
   * <p>Lists all channel memberships in a channel.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMembershipsCommandOutput>;
  public listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    cb: (err: any, data?: ListChannelMembershipsCommandOutput) => void
  ): void;
  public listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMembershipsCommandOutput) => void
  ): void;
  public listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChannelMembershipsCommandOutput) => void),
    cb?: (err: any, data?: ListChannelMembershipsCommandOutput) => void
  ): Promise<ListChannelMembershipsCommandOutput> | void {
    const command = new ListChannelMembershipsCommand(args);
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
   * <p> Lists all channels that a particular <code>AppInstanceUser</code> is a part of. Only an
   *             <code>AppInstanceAdmin</code> can call the API with a user ARN that is not their own. </p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput>;
  public listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    cb: (err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void
  ): void;
  public listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void
  ): void;
  public listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void),
    cb?: (err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void
  ): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> | void {
    const command = new ListChannelMembershipsForAppInstanceUserCommand(args);
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
   * <p>List all the messages in a channel. Returns a paginated list of
   *             <code>ChannelMessages</code>. By default, sorted by creation timestamp in descending
   *          order.</p>
   *          <note>
   *             <p>Redacted messages appear in the results as empty, since they are only redacted, not
   *             deleted. Deleted messages do not appear in the results. This action always returns the
   *             latest version of an edited message.</p>
   *             <p>Also, the x-amz-chime-bearer request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannelMessages(
    args: ListChannelMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMessagesCommandOutput>;
  public listChannelMessages(
    args: ListChannelMessagesCommandInput,
    cb: (err: any, data?: ListChannelMessagesCommandOutput) => void
  ): void;
  public listChannelMessages(
    args: ListChannelMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMessagesCommandOutput) => void
  ): void;
  public listChannelMessages(
    args: ListChannelMessagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChannelMessagesCommandOutput) => void),
    cb?: (err: any, data?: ListChannelMessagesCommandOutput) => void
  ): Promise<ListChannelMessagesCommandOutput> | void {
    const command = new ListChannelMessagesCommand(args);
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
   * <p>Lists all the moderators for a channel.</p>
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelModeratorsCommandOutput>;
  public listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    cb: (err: any, data?: ListChannelModeratorsCommandOutput) => void
  ): void;
  public listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelModeratorsCommandOutput) => void
  ): void;
  public listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChannelModeratorsCommandOutput) => void),
    cb?: (err: any, data?: ListChannelModeratorsCommandOutput) => void
  ): Promise<ListChannelModeratorsCommandOutput> | void {
    const command = new ListChannelModeratorsCommand(args);
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
   * <p>Lists all Channels created under a single Chime App as a paginated list. You can specify
   *          filters to narrow results.</p>
   *
   *          <p class="title">
   *             <b>Functionality & restrictions</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Use privacy = <code>PUBLIC</code> to retrieve all public channels in the
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>Only an <code>AppInstanceAdmin</code> can set privacy = <code>PRIVATE</code> to
   *                list the private channels in an account.</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannels(
    args: ListChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsCommandOutput>;
  public listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
  public listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  public listChannels(
    args: ListChannelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChannelsCommandOutput) => void),
    cb?: (err: any, data?: ListChannelsCommandOutput) => void
  ): Promise<ListChannelsCommandOutput> | void {
    const command = new ListChannelsCommand(args);
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
   * <p>A list of the channels moderated by an <code>AppInstanceUser</code>.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput>;
  public listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    cb: (err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  public listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  public listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void),
    cb?: (err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void
  ): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> | void {
    const command = new ListChannelsModeratedByAppInstanceUserCommand(args);
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
   * <p>Returns a list of media capture pipelines.</p>
   */
  public listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMediaCapturePipelinesCommandOutput>;
  public listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    cb: (err: any, data?: ListMediaCapturePipelinesCommandOutput) => void
  ): void;
  public listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMediaCapturePipelinesCommandOutput) => void
  ): void;
  public listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMediaCapturePipelinesCommandOutput) => void),
    cb?: (err: any, data?: ListMediaCapturePipelinesCommandOutput) => void
  ): Promise<ListMediaCapturePipelinesCommandOutput> | void {
    const command = new ListMediaCapturePipelinesCommand(args);
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
   * <p>
   * Lists up to 100 active Amazon Chime SDK meetings. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the <i>Amazon Chime Developer Guide</i>.</p>
   */
  public listMeetings(
    args: ListMeetingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMeetingsCommandOutput>;
  public listMeetings(args: ListMeetingsCommandInput, cb: (err: any, data?: ListMeetingsCommandOutput) => void): void;
  public listMeetings(
    args: ListMeetingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMeetingsCommandOutput) => void
  ): void;
  public listMeetings(
    args: ListMeetingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMeetingsCommandOutput) => void),
    cb?: (err: any, data?: ListMeetingsCommandOutput) => void
  ): Promise<ListMeetingsCommandOutput> | void {
    const command = new ListMeetingsCommand(args);
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
   * <p>Lists the tags applied to an Amazon Chime SDK meeting resource.</p>
   */
  public listMeetingTags(
    args: ListMeetingTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMeetingTagsCommandOutput>;
  public listMeetingTags(
    args: ListMeetingTagsCommandInput,
    cb: (err: any, data?: ListMeetingTagsCommandOutput) => void
  ): void;
  public listMeetingTags(
    args: ListMeetingTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMeetingTagsCommandOutput) => void
  ): void;
  public listMeetingTags(
    args: ListMeetingTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMeetingTagsCommandOutput) => void),
    cb?: (err: any, data?: ListMeetingTagsCommandOutput) => void
  ): Promise<ListMeetingTagsCommandOutput> | void {
    const command = new ListMeetingTagsCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPhoneNumberOrdersCommandOutput) => void),
    cb?: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): Promise<ListPhoneNumberOrdersCommandOutput> | void {
    const command = new ListPhoneNumberOrdersCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPhoneNumbersCommandOutput) => void),
    cb?: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): Promise<ListPhoneNumbersCommandOutput> | void {
    const command = new ListPhoneNumbersCommand(args);
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
   * <p>Lists the proxy sessions for the specified Amazon Chime Voice Connector.</p>
   */
  public listProxySessions(
    args: ListProxySessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProxySessionsCommandOutput>;
  public listProxySessions(
    args: ListProxySessionsCommandInput,
    cb: (err: any, data?: ListProxySessionsCommandOutput) => void
  ): void;
  public listProxySessions(
    args: ListProxySessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProxySessionsCommandOutput) => void
  ): void;
  public listProxySessions(
    args: ListProxySessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProxySessionsCommandOutput) => void),
    cb?: (err: any, data?: ListProxySessionsCommandOutput) => void
  ): Promise<ListProxySessionsCommandOutput> | void {
    const command = new ListProxySessionsCommand(args);
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
   * <p>Lists the membership details for the specified room in an Amazon Chime Enterprise account,
   *             such as the members' IDs, email addresses, and names.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRoomMembershipsCommandOutput) => void),
    cb?: (err: any, data?: ListRoomMembershipsCommandOutput) => void
  ): Promise<ListRoomMembershipsCommandOutput> | void {
    const command = new ListRoomMembershipsCommand(args);
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
   * <p>Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.</p>
   */
  public listRooms(args: ListRoomsCommandInput, options?: __HttpHandlerOptions): Promise<ListRoomsCommandOutput>;
  public listRooms(args: ListRoomsCommandInput, cb: (err: any, data?: ListRoomsCommandOutput) => void): void;
  public listRooms(
    args: ListRoomsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoomsCommandOutput) => void
  ): void;
  public listRooms(
    args: ListRoomsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRoomsCommandOutput) => void),
    cb?: (err: any, data?: ListRoomsCommandOutput) => void
  ): Promise<ListRoomsCommandOutput> | void {
    const command = new ListRoomsCommand(args);
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
   * <p>Lists the SIP media applications under the administrator's AWS account.</p>
   */
  public listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSipMediaApplicationsCommandOutput>;
  public listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    cb: (err: any, data?: ListSipMediaApplicationsCommandOutput) => void
  ): void;
  public listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSipMediaApplicationsCommandOutput) => void
  ): void;
  public listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSipMediaApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListSipMediaApplicationsCommandOutput) => void
  ): Promise<ListSipMediaApplicationsCommandOutput> | void {
    const command = new ListSipMediaApplicationsCommand(args);
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
   * <p>Lists the SIP rules under the administrator's AWS account.</p>
   */
  public listSipRules(
    args: ListSipRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSipRulesCommandOutput>;
  public listSipRules(args: ListSipRulesCommandInput, cb: (err: any, data?: ListSipRulesCommandOutput) => void): void;
  public listSipRules(
    args: ListSipRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSipRulesCommandOutput) => void
  ): void;
  public listSipRules(
    args: ListSipRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSipRulesCommandOutput) => void),
    cb?: (err: any, data?: ListSipRulesCommandOutput) => void
  ): Promise<ListSipRulesCommandOutput> | void {
    const command = new ListSipRulesCommand(args);
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
   * <p>Lists supported phone number countries.</p>
   */
  public listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSupportedPhoneNumberCountriesCommandOutput>;
  public listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    cb: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
  ): void;
  public listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
  ): void;
  public listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void),
    cb?: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
  ): Promise<ListSupportedPhoneNumberCountriesCommandOutput> | void {
    const command = new ListSupportedPhoneNumberCountriesCommand(args);
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
   * <p>Lists the tags applied to an Amazon Chime SDK meeting resource.</p>
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
   * <p>Lists the users that belong to the specified Amazon Chime account. You can specify an email
   *             address to list only the user that the email address belongs to.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void
  ): Promise<ListVoiceConnectorGroupsCommandOutput> | void {
    const command = new ListVoiceConnectorGroupsCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVoiceConnectorsCommandOutput) => void),
    cb?: (err: any, data?: ListVoiceConnectorsCommandOutput) => void
  ): Promise<ListVoiceConnectorsCommandOutput> | void {
    const command = new ListVoiceConnectorsCommand(args);
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
   * <p>Lists the SIP credentials for the specified Amazon Chime Voice Connector.</p>
   */
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput>;
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void),
    cb?: (err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput> | void {
    const command = new ListVoiceConnectorTerminationCredentialsCommand(args);
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
   * <p>Logs out the specified user from all of the devices they are currently logged into.</p>
   */
  public logoutUser(args: LogoutUserCommandInput, options?: __HttpHandlerOptions): Promise<LogoutUserCommandOutput>;
  public logoutUser(args: LogoutUserCommandInput, cb: (err: any, data?: LogoutUserCommandOutput) => void): void;
  public logoutUser(
    args: LogoutUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LogoutUserCommandOutput) => void
  ): void;
  public logoutUser(
    args: LogoutUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: LogoutUserCommandOutput) => void),
    cb?: (err: any, data?: LogoutUserCommandOutput) => void
  ): Promise<LogoutUserCommandOutput> | void {
    const command = new LogoutUserCommand(args);
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
   * <p>Sets the amount of time in days that a given <code>AppInstance</code> retains data.</p>
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
   * <p>The data streaming configurations of an <code>AppInstance</code>.</p>
   */
  public putAppInstanceStreamingConfigurations(
    args: PutAppInstanceStreamingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppInstanceStreamingConfigurationsCommandOutput>;
  public putAppInstanceStreamingConfigurations(
    args: PutAppInstanceStreamingConfigurationsCommandInput,
    cb: (err: any, data?: PutAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  public putAppInstanceStreamingConfigurations(
    args: PutAppInstanceStreamingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  public putAppInstanceStreamingConfigurations(
    args: PutAppInstanceStreamingConfigurationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutAppInstanceStreamingConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: PutAppInstanceStreamingConfigurationsCommandOutput) => void
  ): Promise<PutAppInstanceStreamingConfigurationsCommandOutput> | void {
    const command = new PutAppInstanceStreamingConfigurationsCommand(args);
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
   * <p>Creates an events configuration that allows a bot to receive outgoing events sent by Amazon
   *             Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information,
   *             see <a>Bot</a>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEventsConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutEventsConfigurationCommandOutput) => void
  ): Promise<PutEventsConfigurationCommandOutput> | void {
    const command = new PutEventsConfigurationCommand(args);
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
   * <p>
   * Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see
   * <a href="https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html">Logging Amazon Chime API Calls with AWS CloudTrail</a>
   * in the <i>Amazon Chime Administration Guide</i>.</p>
   *
   *          <p>
   * To turn off existing retention settings, remove the number of days from the corresponding
   * <b>RetentionDays</b>
   * field in the
   * <b>RetentionSettings</b>
   * object. For more information about retention settings, see
   * <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a>
   * in the <i>Amazon Chime Administration Guide</i>.</p>
   */
  public putRetentionSettings(
    args: PutRetentionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRetentionSettingsCommandOutput>;
  public putRetentionSettings(
    args: PutRetentionSettingsCommandInput,
    cb: (err: any, data?: PutRetentionSettingsCommandOutput) => void
  ): void;
  public putRetentionSettings(
    args: PutRetentionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRetentionSettingsCommandOutput) => void
  ): void;
  public putRetentionSettings(
    args: PutRetentionSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRetentionSettingsCommandOutput) => void),
    cb?: (err: any, data?: PutRetentionSettingsCommandOutput) => void
  ): Promise<PutRetentionSettingsCommandOutput> | void {
    const command = new PutRetentionSettingsCommand(args);
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
   * <p>Updates the logging configuration for the specified SIP media application.</p>
   */
  public putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSipMediaApplicationLoggingConfigurationCommandOutput>;
  public putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    cb: (err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  public putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  public putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): Promise<PutSipMediaApplicationLoggingConfigurationCommandOutput> | void {
    const command = new PutSipMediaApplicationLoggingConfigurationCommand(args);
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
   * <p>Puts emergency calling configuration details to the specified Amazon Chime Voice Connector, such as emergency phone numbers and calling countries. Origination and termination settings must be enabled for
   *     the Amazon Chime Voice Connector before emergency calling can be configured.</p>
   */
  public putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  public putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  public putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  public putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): Promise<PutVoiceConnectorEmergencyCallingConfigurationCommandOutput> | void {
    const command = new PutVoiceConnectorEmergencyCallingConfigurationCommand(args);
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
   * <p>Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
   */
  public putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput>;
  public putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  public putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  public putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput> | void {
    const command = new PutVoiceConnectorLoggingConfigurationCommand(args);
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
   * <p>Adds origination settings for the specified Amazon Chime Voice Connector.</p>
   *
   *          <note>
   *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off origination settings.</p>
   *          </note>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void
  ): Promise<PutVoiceConnectorOriginationCommandOutput> | void {
    const command = new PutVoiceConnectorOriginationCommand(args);
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
   * <p>Puts the specified proxy configuration to the specified Amazon Chime Voice Connector.</p>
   */
  public putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorProxyCommandOutput>;
  public putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: PutVoiceConnectorProxyCommandOutput) => void
  ): void;
  public putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorProxyCommandOutput) => void
  ): void;
  public putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutVoiceConnectorProxyCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorProxyCommandOutput) => void
  ): Promise<PutVoiceConnectorProxyCommandOutput> | void {
    const command = new PutVoiceConnectorProxyCommand(args);
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
   * <p>Adds a streaming configuration for the specified Amazon Chime Voice Connector. The streaming
   *             configuration specifies whether media streaming is enabled for sending to Indonesians.
   *             It also sets the retention period, in hours, for the Amazon Kinesis data.</p>
   */
  public putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput>;
  public putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  public putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  public putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput> | void {
    const command = new PutVoiceConnectorStreamingConfigurationCommand(args);
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
   * <p>Adds termination settings for the specified Amazon Chime Voice Connector.</p>
   *
   *          <note>
   *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off termination settings.</p>
   *          </note>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void
  ): Promise<PutVoiceConnectorTerminationCommandOutput> | void {
    const command = new PutVoiceConnectorTerminationCommand(args);
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
   * <p>Adds termination SIP credentials for the specified Amazon Chime Voice Connector.</p>
   */
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorTerminationCredentialsCommandOutput>;
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): Promise<PutVoiceConnectorTerminationCredentialsCommandOutput> | void {
    const command = new PutVoiceConnectorTerminationCredentialsCommand(args);
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
   * <p>Redacts message content, but not metadata. The message exists in the back end, but the
   *          action returns null content, and the state shows as redacted.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RedactChannelMessageCommandOutput>;
  public redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    cb: (err: any, data?: RedactChannelMessageCommandOutput) => void
  ): void;
  public redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RedactChannelMessageCommandOutput) => void
  ): void;
  public redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RedactChannelMessageCommandOutput) => void),
    cb?: (err: any, data?: RedactChannelMessageCommandOutput) => void
  ): Promise<RedactChannelMessageCommandOutput> | void {
    const command = new RedactChannelMessageCommand(args);
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
   * <p>Redacts the specified message from the specified Amazon Chime conversation.</p>
   */
  public redactConversationMessage(
    args: RedactConversationMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RedactConversationMessageCommandOutput>;
  public redactConversationMessage(
    args: RedactConversationMessageCommandInput,
    cb: (err: any, data?: RedactConversationMessageCommandOutput) => void
  ): void;
  public redactConversationMessage(
    args: RedactConversationMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RedactConversationMessageCommandOutput) => void
  ): void;
  public redactConversationMessage(
    args: RedactConversationMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RedactConversationMessageCommandOutput) => void),
    cb?: (err: any, data?: RedactConversationMessageCommandOutput) => void
  ): Promise<RedactConversationMessageCommandOutput> | void {
    const command = new RedactConversationMessageCommand(args);
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
   * <p>Redacts the specified message from the specified Amazon Chime channel.</p>
   */
  public redactRoomMessage(
    args: RedactRoomMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RedactRoomMessageCommandOutput>;
  public redactRoomMessage(
    args: RedactRoomMessageCommandInput,
    cb: (err: any, data?: RedactRoomMessageCommandOutput) => void
  ): void;
  public redactRoomMessage(
    args: RedactRoomMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RedactRoomMessageCommandOutput) => void
  ): void;
  public redactRoomMessage(
    args: RedactRoomMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RedactRoomMessageCommandOutput) => void),
    cb?: (err: any, data?: RedactRoomMessageCommandOutput) => void
  ): Promise<RedactRoomMessageCommandOutput> | void {
    const command = new RedactRoomMessageCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegenerateSecurityTokenCommandOutput) => void),
    cb?: (err: any, data?: RegenerateSecurityTokenCommandOutput) => void
  ): Promise<RegenerateSecurityTokenCommandOutput> | void {
    const command = new RegenerateSecurityTokenCommand(args);
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
   * <p>Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns
   *             the <a>User</a> object with the updated personal meeting PIN.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetPersonalPINCommandOutput) => void),
    cb?: (err: any, data?: ResetPersonalPINCommandOutput) => void
  ): Promise<ResetPersonalPINCommandOutput> | void {
    const command = new ResetPersonalPINCommand(args);
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
   * <p>Moves a phone number from the <b>Deletion queue</b> back into the
   *             phone number <b>Inventory</b>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestorePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): Promise<RestorePhoneNumberCommandOutput> | void {
    const command = new RestorePhoneNumberCommand(args);
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
   * <p>Searches for phone numbers that can be ordered. For US numbers, provide at least one of
   *             the following search filters: <code>AreaCode</code>, <code>City</code>,
   *                 <code>State</code>, or <code>TollFreePrefix</code>. If you provide
   *             <code>City</code>, you must also provide <code>State</code>. Numbers outside the US only
   *             support the <code>PhoneNumberType</code> filter, which you must use.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void),
    cb?: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): Promise<SearchAvailablePhoneNumbersCommandOutput> | void {
    const command = new SearchAvailablePhoneNumbersCommand(args);
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
   * <p>Sends a message to a particular channel that the member is a part of.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *
   *             <p>Also, <code>STANDARD</code> messages can contain 4KB of data and the 1KB of metadata.
   *                <code>CONTROL</code> messages can contain 30 bytes of data and no metadata.</p>
   *          </note>
   */
  public sendChannelMessage(
    args: SendChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendChannelMessageCommandOutput>;
  public sendChannelMessage(
    args: SendChannelMessageCommandInput,
    cb: (err: any, data?: SendChannelMessageCommandOutput) => void
  ): void;
  public sendChannelMessage(
    args: SendChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendChannelMessageCommandOutput) => void
  ): void;
  public sendChannelMessage(
    args: SendChannelMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendChannelMessageCommandOutput) => void),
    cb?: (err: any, data?: SendChannelMessageCommandOutput) => void
  ): Promise<SendChannelMessageCommandOutput> | void {
    const command = new SendChannelMessageCommand(args);
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
   * <p>Starts transcription for the specified <code>meetingId</code>. </p>
   */
  public startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMeetingTranscriptionCommandOutput>;
  public startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    cb: (err: any, data?: StartMeetingTranscriptionCommandOutput) => void
  ): void;
  public startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMeetingTranscriptionCommandOutput) => void
  ): void;
  public startMeetingTranscription(
    args: StartMeetingTranscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMeetingTranscriptionCommandOutput) => void),
    cb?: (err: any, data?: StartMeetingTranscriptionCommandOutput) => void
  ): Promise<StartMeetingTranscriptionCommandOutput> | void {
    const command = new StartMeetingTranscriptionCommand(args);
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
   * <p>Stops transcription for the specified <code>meetingId</code>.</p>
   */
  public stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopMeetingTranscriptionCommandOutput>;
  public stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    cb: (err: any, data?: StopMeetingTranscriptionCommandOutput) => void
  ): void;
  public stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopMeetingTranscriptionCommandOutput) => void
  ): void;
  public stopMeetingTranscription(
    args: StopMeetingTranscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopMeetingTranscriptionCommandOutput) => void),
    cb?: (err: any, data?: StopMeetingTranscriptionCommandOutput) => void
  ): Promise<StopMeetingTranscriptionCommandOutput> | void {
    const command = new StopMeetingTranscriptionCommand(args);
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
   * <p>Applies the specified tags to the specified Amazon Chime SDK attendee.</p>
   */
  public tagAttendee(args: TagAttendeeCommandInput, options?: __HttpHandlerOptions): Promise<TagAttendeeCommandOutput>;
  public tagAttendee(args: TagAttendeeCommandInput, cb: (err: any, data?: TagAttendeeCommandOutput) => void): void;
  public tagAttendee(
    args: TagAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagAttendeeCommandOutput) => void
  ): void;
  public tagAttendee(
    args: TagAttendeeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagAttendeeCommandOutput) => void),
    cb?: (err: any, data?: TagAttendeeCommandOutput) => void
  ): Promise<TagAttendeeCommandOutput> | void {
    const command = new TagAttendeeCommand(args);
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
   * <p>Applies the specified tags to the specified Amazon Chime SDK meeting.</p>
   */
  public tagMeeting(args: TagMeetingCommandInput, options?: __HttpHandlerOptions): Promise<TagMeetingCommandOutput>;
  public tagMeeting(args: TagMeetingCommandInput, cb: (err: any, data?: TagMeetingCommandOutput) => void): void;
  public tagMeeting(
    args: TagMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagMeetingCommandOutput) => void
  ): void;
  public tagMeeting(
    args: TagMeetingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagMeetingCommandOutput) => void),
    cb?: (err: any, data?: TagMeetingCommandOutput) => void
  ): Promise<TagMeetingCommandOutput> | void {
    const command = new TagMeetingCommand(args);
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
   * <p>Applies the specified tags to the specified Amazon Chime SDK meeting resource.</p>
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
   * <p>Untags the specified tags from the specified Amazon Chime SDK attendee.</p>
   */
  public untagAttendee(
    args: UntagAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagAttendeeCommandOutput>;
  public untagAttendee(
    args: UntagAttendeeCommandInput,
    cb: (err: any, data?: UntagAttendeeCommandOutput) => void
  ): void;
  public untagAttendee(
    args: UntagAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagAttendeeCommandOutput) => void
  ): void;
  public untagAttendee(
    args: UntagAttendeeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagAttendeeCommandOutput) => void),
    cb?: (err: any, data?: UntagAttendeeCommandOutput) => void
  ): Promise<UntagAttendeeCommandOutput> | void {
    const command = new UntagAttendeeCommand(args);
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
   * <p>Untags the specified tags from the specified Amazon Chime SDK meeting.</p>
   */
  public untagMeeting(
    args: UntagMeetingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagMeetingCommandOutput>;
  public untagMeeting(args: UntagMeetingCommandInput, cb: (err: any, data?: UntagMeetingCommandOutput) => void): void;
  public untagMeeting(
    args: UntagMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagMeetingCommandOutput) => void
  ): void;
  public untagMeeting(
    args: UntagMeetingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagMeetingCommandOutput) => void),
    cb?: (err: any, data?: UntagMeetingCommandOutput) => void
  ): Promise<UntagMeetingCommandOutput> | void {
    const command = new UntagMeetingCommand(args);
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
   * <p>Untags the specified tags from the specified Amazon Chime SDK meeting resource.</p>
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
   * <p>Updates account details for the specified Amazon Chime account. Currently, only account name and default license updates are supported for this action.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccountCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccountCommandOutput) => void
  ): Promise<UpdateAccountCommandOutput> | void {
    const command = new UpdateAccountCommand(args);
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
   * <p>Updates the settings for the specified Amazon Chime account. You can update settings for
   *             remote control of shared screens, or for the dial-out option. For more information about
   *             these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use
   *                 the Policies Page</a> in the <i>Amazon Chime Administration
   *                 Guide</i>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): Promise<UpdateAccountSettingsCommandOutput> | void {
    const command = new UpdateAccountSettingsCommand(args);
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
   * <p>Updates the details of an <code>AppInstanceUser</code>. You can update names and metadata.</p>
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
   * <p>Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.</p>
   */
  public updateBot(args: UpdateBotCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBotCommandOutput>;
  public updateBot(args: UpdateBotCommandInput, cb: (err: any, data?: UpdateBotCommandOutput) => void): void;
  public updateBot(
    args: UpdateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBotCommandOutput) => void
  ): void;
  public updateBot(
    args: UpdateBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBotCommandOutput) => void),
    cb?: (err: any, data?: UpdateBotCommandOutput) => void
  ): Promise<UpdateBotCommandOutput> | void {
    const command = new UpdateBotCommand(args);
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
   * <p>Update a channel's attributes.</p>
   *          <p>
   *             <b>Restriction</b>: You can't change a channel's privacy. </p>
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public updateChannel(
    args: UpdateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelCommandOutput>;
  public updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateChannelCommandOutput) => void),
    cb?: (err: any, data?: UpdateChannelCommandOutput) => void
  ): Promise<UpdateChannelCommandOutput> | void {
    const command = new UpdateChannelCommand(args);
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
   * <p>Updates the content of a message.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelMessageCommandOutput>;
  public updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    cb: (err: any, data?: UpdateChannelMessageCommandOutput) => void
  ): void;
  public updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelMessageCommandOutput) => void
  ): void;
  public updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateChannelMessageCommandOutput) => void),
    cb?: (err: any, data?: UpdateChannelMessageCommandOutput) => void
  ): Promise<UpdateChannelMessageCommandOutput> | void {
    const command = new UpdateChannelMessageCommand(args);
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
   * <p>The details of the time when a user last read messages in a channel.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelReadMarkerCommandOutput>;
  public updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    cb: (err: any, data?: UpdateChannelReadMarkerCommandOutput) => void
  ): void;
  public updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelReadMarkerCommandOutput) => void
  ): void;
  public updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateChannelReadMarkerCommandOutput) => void),
    cb?: (err: any, data?: UpdateChannelReadMarkerCommandOutput) => void
  ): Promise<UpdateChannelReadMarkerCommandOutput> | void {
    const command = new UpdateChannelReadMarkerCommand(args);
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
   * <p>Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGlobalSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): Promise<UpdateGlobalSettingsCommandOutput> | void {
    const command = new UpdateGlobalSettingsCommand(args);
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
   * <p>Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action.</p>
   *          <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p>
   *          <p>Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): Promise<UpdatePhoneNumberCommandOutput> | void {
    const command = new UpdatePhoneNumberCommand(args);
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
   * <p>Updates the phone number settings for the administrator's AWS account, such as the default
   *             outbound calling name. You can update the default outbound calling name once every seven
   *             days. Outbound calling names can take up to 72 hours to update.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): Promise<UpdatePhoneNumberSettingsCommandOutput> | void {
    const command = new UpdatePhoneNumberSettingsCommand(args);
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
   * <p>Updates the specified proxy session details, such as voice or SMS capabilities.</p>
   */
  public updateProxySession(
    args: UpdateProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProxySessionCommandOutput>;
  public updateProxySession(
    args: UpdateProxySessionCommandInput,
    cb: (err: any, data?: UpdateProxySessionCommandOutput) => void
  ): void;
  public updateProxySession(
    args: UpdateProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProxySessionCommandOutput) => void
  ): void;
  public updateProxySession(
    args: UpdateProxySessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProxySessionCommandOutput) => void),
    cb?: (err: any, data?: UpdateProxySessionCommandOutput) => void
  ): Promise<UpdateProxySessionCommandOutput> | void {
    const command = new UpdateProxySessionCommand(args);
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
   * <p>Updates room details, such as the room name, for a room in an Amazon Chime Enterprise account.</p>
   */
  public updateRoom(args: UpdateRoomCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoomCommandOutput>;
  public updateRoom(args: UpdateRoomCommandInput, cb: (err: any, data?: UpdateRoomCommandOutput) => void): void;
  public updateRoom(
    args: UpdateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoomCommandOutput) => void
  ): void;
  public updateRoom(
    args: UpdateRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRoomCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoomCommandOutput) => void
  ): Promise<UpdateRoomCommandOutput> | void {
    const command = new UpdateRoomCommand(args);
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
   * <p>Updates room membership details, such as the member role, for a room in an Amazon Chime
   *             Enterprise account. The member role designates whether the member is a chat room
   *             administrator or a general chat room member. The member role can be updated only for
   *             user IDs.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRoomMembershipCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoomMembershipCommandOutput) => void
  ): Promise<UpdateRoomMembershipCommandOutput> | void {
    const command = new UpdateRoomMembershipCommand(args);
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
   * <p>Updates the details of the specified SIP media application.</p>
   */
  public updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSipMediaApplicationCommandOutput>;
  public updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    cb: (err: any, data?: UpdateSipMediaApplicationCommandOutput) => void
  ): void;
  public updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipMediaApplicationCommandOutput) => void
  ): void;
  public updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSipMediaApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateSipMediaApplicationCommandOutput) => void
  ): Promise<UpdateSipMediaApplicationCommandOutput> | void {
    const command = new UpdateSipMediaApplicationCommand(args);
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
   * <p>Allows you to trigger a Lambda function at any time while a call is active, and replace the current actions with new actions returned by the invocation.</p>
   */
  public updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSipMediaApplicationCallCommandOutput>;
  public updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    cb: (err: any, data?: UpdateSipMediaApplicationCallCommandOutput) => void
  ): void;
  public updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipMediaApplicationCallCommandOutput) => void
  ): void;
  public updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSipMediaApplicationCallCommandOutput) => void),
    cb?: (err: any, data?: UpdateSipMediaApplicationCallCommandOutput) => void
  ): Promise<UpdateSipMediaApplicationCallCommandOutput> | void {
    const command = new UpdateSipMediaApplicationCallCommand(args);
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
   * <p>Updates the details of the specified SIP rule.</p>
   */
  public updateSipRule(
    args: UpdateSipRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSipRuleCommandOutput>;
  public updateSipRule(
    args: UpdateSipRuleCommandInput,
    cb: (err: any, data?: UpdateSipRuleCommandOutput) => void
  ): void;
  public updateSipRule(
    args: UpdateSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipRuleCommandOutput) => void
  ): void;
  public updateSipRule(
    args: UpdateSipRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSipRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateSipRuleCommandOutput) => void
  ): Promise<UpdateSipRuleCommandOutput> | void {
    const command = new UpdateSipRuleCommand(args);
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
   * <p>Updates user details for a specified user ID. Currently, only <code>LicenseType</code> updates are supported for this action.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): Promise<UpdateUserSettingsCommandOutput> | void {
    const command = new UpdateUserSettingsCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: UpdateVoiceConnectorCommandOutput) => void
  ): Promise<UpdateVoiceConnectorCommandOutput> | void {
    const command = new UpdateVoiceConnectorCommand(args);
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
   * <p>Updates details of the specified Amazon Chime Voice Connector group, such as the name and
   *             Amazon Chime Voice Connector priority ranking.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void
  ): Promise<UpdateVoiceConnectorGroupCommandOutput> | void {
    const command = new UpdateVoiceConnectorGroupCommand(args);
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
