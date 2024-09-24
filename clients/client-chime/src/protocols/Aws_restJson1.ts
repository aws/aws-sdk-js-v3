// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorCommandOutput,
} from "../commands/AssociatePhoneNumbersWithVoiceConnectorCommand";
import {
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput,
} from "../commands/AssociatePhoneNumbersWithVoiceConnectorGroupCommand";
import {
  AssociatePhoneNumberWithUserCommandInput,
  AssociatePhoneNumberWithUserCommandOutput,
} from "../commands/AssociatePhoneNumberWithUserCommand";
import {
  AssociateSigninDelegateGroupsWithAccountCommandInput,
  AssociateSigninDelegateGroupsWithAccountCommandOutput,
} from "../commands/AssociateSigninDelegateGroupsWithAccountCommand";
import {
  BatchCreateAttendeeCommandInput,
  BatchCreateAttendeeCommandOutput,
} from "../commands/BatchCreateAttendeeCommand";
import {
  BatchCreateChannelMembershipCommandInput,
  BatchCreateChannelMembershipCommandOutput,
} from "../commands/BatchCreateChannelMembershipCommand";
import {
  BatchCreateRoomMembershipCommandInput,
  BatchCreateRoomMembershipCommandOutput,
} from "../commands/BatchCreateRoomMembershipCommand";
import {
  BatchDeletePhoneNumberCommandInput,
  BatchDeletePhoneNumberCommandOutput,
} from "../commands/BatchDeletePhoneNumberCommand";
import { BatchSuspendUserCommandInput, BatchSuspendUserCommandOutput } from "../commands/BatchSuspendUserCommand";
import { BatchUnsuspendUserCommandInput, BatchUnsuspendUserCommandOutput } from "../commands/BatchUnsuspendUserCommand";
import {
  BatchUpdatePhoneNumberCommandInput,
  BatchUpdatePhoneNumberCommandOutput,
} from "../commands/BatchUpdatePhoneNumberCommand";
import { BatchUpdateUserCommandInput, BatchUpdateUserCommandOutput } from "../commands/BatchUpdateUserCommand";
import { CreateAccountCommandInput, CreateAccountCommandOutput } from "../commands/CreateAccountCommand";
import {
  CreateAppInstanceAdminCommandInput,
  CreateAppInstanceAdminCommandOutput,
} from "../commands/CreateAppInstanceAdminCommand";
import { CreateAppInstanceCommandInput, CreateAppInstanceCommandOutput } from "../commands/CreateAppInstanceCommand";
import {
  CreateAppInstanceUserCommandInput,
  CreateAppInstanceUserCommandOutput,
} from "../commands/CreateAppInstanceUserCommand";
import { CreateAttendeeCommandInput, CreateAttendeeCommandOutput } from "../commands/CreateAttendeeCommand";
import { CreateBotCommandInput, CreateBotCommandOutput } from "../commands/CreateBotCommand";
import { CreateChannelBanCommandInput, CreateChannelBanCommandOutput } from "../commands/CreateChannelBanCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "../commands/CreateChannelCommand";
import {
  CreateChannelMembershipCommandInput,
  CreateChannelMembershipCommandOutput,
} from "../commands/CreateChannelMembershipCommand";
import {
  CreateChannelModeratorCommandInput,
  CreateChannelModeratorCommandOutput,
} from "../commands/CreateChannelModeratorCommand";
import {
  CreateMediaCapturePipelineCommandInput,
  CreateMediaCapturePipelineCommandOutput,
} from "../commands/CreateMediaCapturePipelineCommand";
import { CreateMeetingCommandInput, CreateMeetingCommandOutput } from "../commands/CreateMeetingCommand";
import {
  CreateMeetingDialOutCommandInput,
  CreateMeetingDialOutCommandOutput,
} from "../commands/CreateMeetingDialOutCommand";
import {
  CreateMeetingWithAttendeesCommandInput,
  CreateMeetingWithAttendeesCommandOutput,
} from "../commands/CreateMeetingWithAttendeesCommand";
import {
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput,
} from "../commands/CreatePhoneNumberOrderCommand";
import { CreateProxySessionCommandInput, CreateProxySessionCommandOutput } from "../commands/CreateProxySessionCommand";
import { CreateRoomCommandInput, CreateRoomCommandOutput } from "../commands/CreateRoomCommand";
import {
  CreateRoomMembershipCommandInput,
  CreateRoomMembershipCommandOutput,
} from "../commands/CreateRoomMembershipCommand";
import {
  CreateSipMediaApplicationCallCommandInput,
  CreateSipMediaApplicationCallCommandOutput,
} from "../commands/CreateSipMediaApplicationCallCommand";
import {
  CreateSipMediaApplicationCommandInput,
  CreateSipMediaApplicationCommandOutput,
} from "../commands/CreateSipMediaApplicationCommand";
import { CreateSipRuleCommandInput, CreateSipRuleCommandOutput } from "../commands/CreateSipRuleCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import {
  CreateVoiceConnectorCommandInput,
  CreateVoiceConnectorCommandOutput,
} from "../commands/CreateVoiceConnectorCommand";
import {
  CreateVoiceConnectorGroupCommandInput,
  CreateVoiceConnectorGroupCommandOutput,
} from "../commands/CreateVoiceConnectorGroupCommand";
import { DeleteAccountCommandInput, DeleteAccountCommandOutput } from "../commands/DeleteAccountCommand";
import {
  DeleteAppInstanceAdminCommandInput,
  DeleteAppInstanceAdminCommandOutput,
} from "../commands/DeleteAppInstanceAdminCommand";
import { DeleteAppInstanceCommandInput, DeleteAppInstanceCommandOutput } from "../commands/DeleteAppInstanceCommand";
import {
  DeleteAppInstanceStreamingConfigurationsCommandInput,
  DeleteAppInstanceStreamingConfigurationsCommandOutput,
} from "../commands/DeleteAppInstanceStreamingConfigurationsCommand";
import {
  DeleteAppInstanceUserCommandInput,
  DeleteAppInstanceUserCommandOutput,
} from "../commands/DeleteAppInstanceUserCommand";
import { DeleteAttendeeCommandInput, DeleteAttendeeCommandOutput } from "../commands/DeleteAttendeeCommand";
import { DeleteChannelBanCommandInput, DeleteChannelBanCommandOutput } from "../commands/DeleteChannelBanCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "../commands/DeleteChannelCommand";
import {
  DeleteChannelMembershipCommandInput,
  DeleteChannelMembershipCommandOutput,
} from "../commands/DeleteChannelMembershipCommand";
import {
  DeleteChannelMessageCommandInput,
  DeleteChannelMessageCommandOutput,
} from "../commands/DeleteChannelMessageCommand";
import {
  DeleteChannelModeratorCommandInput,
  DeleteChannelModeratorCommandOutput,
} from "../commands/DeleteChannelModeratorCommand";
import {
  DeleteEventsConfigurationCommandInput,
  DeleteEventsConfigurationCommandOutput,
} from "../commands/DeleteEventsConfigurationCommand";
import {
  DeleteMediaCapturePipelineCommandInput,
  DeleteMediaCapturePipelineCommandOutput,
} from "../commands/DeleteMediaCapturePipelineCommand";
import { DeleteMeetingCommandInput, DeleteMeetingCommandOutput } from "../commands/DeleteMeetingCommand";
import { DeletePhoneNumberCommandInput, DeletePhoneNumberCommandOutput } from "../commands/DeletePhoneNumberCommand";
import { DeleteProxySessionCommandInput, DeleteProxySessionCommandOutput } from "../commands/DeleteProxySessionCommand";
import { DeleteRoomCommandInput, DeleteRoomCommandOutput } from "../commands/DeleteRoomCommand";
import {
  DeleteRoomMembershipCommandInput,
  DeleteRoomMembershipCommandOutput,
} from "../commands/DeleteRoomMembershipCommand";
import {
  DeleteSipMediaApplicationCommandInput,
  DeleteSipMediaApplicationCommandOutput,
} from "../commands/DeleteSipMediaApplicationCommand";
import { DeleteSipRuleCommandInput, DeleteSipRuleCommandOutput } from "../commands/DeleteSipRuleCommand";
import {
  DeleteVoiceConnectorCommandInput,
  DeleteVoiceConnectorCommandOutput,
} from "../commands/DeleteVoiceConnectorCommand";
import {
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "../commands/DeleteVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  DeleteVoiceConnectorGroupCommandInput,
  DeleteVoiceConnectorGroupCommandOutput,
} from "../commands/DeleteVoiceConnectorGroupCommand";
import {
  DeleteVoiceConnectorOriginationCommandInput,
  DeleteVoiceConnectorOriginationCommandOutput,
} from "../commands/DeleteVoiceConnectorOriginationCommand";
import {
  DeleteVoiceConnectorProxyCommandInput,
  DeleteVoiceConnectorProxyCommandOutput,
} from "../commands/DeleteVoiceConnectorProxyCommand";
import {
  DeleteVoiceConnectorStreamingConfigurationCommandInput,
  DeleteVoiceConnectorStreamingConfigurationCommandOutput,
} from "../commands/DeleteVoiceConnectorStreamingConfigurationCommand";
import {
  DeleteVoiceConnectorTerminationCommandInput,
  DeleteVoiceConnectorTerminationCommandOutput,
} from "../commands/DeleteVoiceConnectorTerminationCommand";
import {
  DeleteVoiceConnectorTerminationCredentialsCommandInput,
  DeleteVoiceConnectorTerminationCredentialsCommandOutput,
} from "../commands/DeleteVoiceConnectorTerminationCredentialsCommand";
import {
  DescribeAppInstanceAdminCommandInput,
  DescribeAppInstanceAdminCommandOutput,
} from "../commands/DescribeAppInstanceAdminCommand";
import {
  DescribeAppInstanceCommandInput,
  DescribeAppInstanceCommandOutput,
} from "../commands/DescribeAppInstanceCommand";
import {
  DescribeAppInstanceUserCommandInput,
  DescribeAppInstanceUserCommandOutput,
} from "../commands/DescribeAppInstanceUserCommand";
import { DescribeChannelBanCommandInput, DescribeChannelBanCommandOutput } from "../commands/DescribeChannelBanCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "../commands/DescribeChannelCommand";
import {
  DescribeChannelMembershipCommandInput,
  DescribeChannelMembershipCommandOutput,
} from "../commands/DescribeChannelMembershipCommand";
import {
  DescribeChannelMembershipForAppInstanceUserCommandInput,
  DescribeChannelMembershipForAppInstanceUserCommandOutput,
} from "../commands/DescribeChannelMembershipForAppInstanceUserCommand";
import {
  DescribeChannelModeratedByAppInstanceUserCommandInput,
  DescribeChannelModeratedByAppInstanceUserCommandOutput,
} from "../commands/DescribeChannelModeratedByAppInstanceUserCommand";
import {
  DescribeChannelModeratorCommandInput,
  DescribeChannelModeratorCommandOutput,
} from "../commands/DescribeChannelModeratorCommand";
import {
  DisassociatePhoneNumberFromUserCommandInput,
  DisassociatePhoneNumberFromUserCommandOutput,
} from "../commands/DisassociatePhoneNumberFromUserCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorCommandOutput,
} from "../commands/DisassociatePhoneNumbersFromVoiceConnectorCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput,
} from "../commands/DisassociatePhoneNumbersFromVoiceConnectorGroupCommand";
import {
  DisassociateSigninDelegateGroupsFromAccountCommandInput,
  DisassociateSigninDelegateGroupsFromAccountCommandOutput,
} from "../commands/DisassociateSigninDelegateGroupsFromAccountCommand";
import { GetAccountCommandInput, GetAccountCommandOutput } from "../commands/GetAccountCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "../commands/GetAccountSettingsCommand";
import {
  GetAppInstanceRetentionSettingsCommandInput,
  GetAppInstanceRetentionSettingsCommandOutput,
} from "../commands/GetAppInstanceRetentionSettingsCommand";
import {
  GetAppInstanceStreamingConfigurationsCommandInput,
  GetAppInstanceStreamingConfigurationsCommandOutput,
} from "../commands/GetAppInstanceStreamingConfigurationsCommand";
import { GetAttendeeCommandInput, GetAttendeeCommandOutput } from "../commands/GetAttendeeCommand";
import { GetBotCommandInput, GetBotCommandOutput } from "../commands/GetBotCommand";
import { GetChannelMessageCommandInput, GetChannelMessageCommandOutput } from "../commands/GetChannelMessageCommand";
import {
  GetEventsConfigurationCommandInput,
  GetEventsConfigurationCommandOutput,
} from "../commands/GetEventsConfigurationCommand";
import { GetGlobalSettingsCommandInput, GetGlobalSettingsCommandOutput } from "../commands/GetGlobalSettingsCommand";
import {
  GetMediaCapturePipelineCommandInput,
  GetMediaCapturePipelineCommandOutput,
} from "../commands/GetMediaCapturePipelineCommand";
import { GetMeetingCommandInput, GetMeetingCommandOutput } from "../commands/GetMeetingCommand";
import {
  GetMessagingSessionEndpointCommandInput,
  GetMessagingSessionEndpointCommandOutput,
} from "../commands/GetMessagingSessionEndpointCommand";
import { GetPhoneNumberCommandInput, GetPhoneNumberCommandOutput } from "../commands/GetPhoneNumberCommand";
import {
  GetPhoneNumberOrderCommandInput,
  GetPhoneNumberOrderCommandOutput,
} from "../commands/GetPhoneNumberOrderCommand";
import {
  GetPhoneNumberSettingsCommandInput,
  GetPhoneNumberSettingsCommandOutput,
} from "../commands/GetPhoneNumberSettingsCommand";
import { GetProxySessionCommandInput, GetProxySessionCommandOutput } from "../commands/GetProxySessionCommand";
import {
  GetRetentionSettingsCommandInput,
  GetRetentionSettingsCommandOutput,
} from "../commands/GetRetentionSettingsCommand";
import { GetRoomCommandInput, GetRoomCommandOutput } from "../commands/GetRoomCommand";
import {
  GetSipMediaApplicationCommandInput,
  GetSipMediaApplicationCommandOutput,
} from "../commands/GetSipMediaApplicationCommand";
import {
  GetSipMediaApplicationLoggingConfigurationCommandInput,
  GetSipMediaApplicationLoggingConfigurationCommandOutput,
} from "../commands/GetSipMediaApplicationLoggingConfigurationCommand";
import { GetSipRuleCommandInput, GetSipRuleCommandOutput } from "../commands/GetSipRuleCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "../commands/GetUserCommand";
import { GetUserSettingsCommandInput, GetUserSettingsCommandOutput } from "../commands/GetUserSettingsCommand";
import { GetVoiceConnectorCommandInput, GetVoiceConnectorCommandOutput } from "../commands/GetVoiceConnectorCommand";
import {
  GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
  GetVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "../commands/GetVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  GetVoiceConnectorGroupCommandInput,
  GetVoiceConnectorGroupCommandOutput,
} from "../commands/GetVoiceConnectorGroupCommand";
import {
  GetVoiceConnectorLoggingConfigurationCommandInput,
  GetVoiceConnectorLoggingConfigurationCommandOutput,
} from "../commands/GetVoiceConnectorLoggingConfigurationCommand";
import {
  GetVoiceConnectorOriginationCommandInput,
  GetVoiceConnectorOriginationCommandOutput,
} from "../commands/GetVoiceConnectorOriginationCommand";
import {
  GetVoiceConnectorProxyCommandInput,
  GetVoiceConnectorProxyCommandOutput,
} from "../commands/GetVoiceConnectorProxyCommand";
import {
  GetVoiceConnectorStreamingConfigurationCommandInput,
  GetVoiceConnectorStreamingConfigurationCommandOutput,
} from "../commands/GetVoiceConnectorStreamingConfigurationCommand";
import {
  GetVoiceConnectorTerminationCommandInput,
  GetVoiceConnectorTerminationCommandOutput,
} from "../commands/GetVoiceConnectorTerminationCommand";
import {
  GetVoiceConnectorTerminationHealthCommandInput,
  GetVoiceConnectorTerminationHealthCommandOutput,
} from "../commands/GetVoiceConnectorTerminationHealthCommand";
import { InviteUsersCommandInput, InviteUsersCommandOutput } from "../commands/InviteUsersCommand";
import { ListAccountsCommandInput, ListAccountsCommandOutput } from "../commands/ListAccountsCommand";
import {
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput,
} from "../commands/ListAppInstanceAdminsCommand";
import { ListAppInstancesCommandInput, ListAppInstancesCommandOutput } from "../commands/ListAppInstancesCommand";
import {
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput,
} from "../commands/ListAppInstanceUsersCommand";
import { ListAttendeesCommandInput, ListAttendeesCommandOutput } from "../commands/ListAttendeesCommand";
import { ListAttendeeTagsCommandInput, ListAttendeeTagsCommandOutput } from "../commands/ListAttendeeTagsCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import { ListChannelBansCommandInput, ListChannelBansCommandOutput } from "../commands/ListChannelBansCommand";
import {
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput,
} from "../commands/ListChannelMembershipsCommand";
import {
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "../commands/ListChannelMembershipsForAppInstanceUserCommand";
import {
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "../commands/ListChannelMessagesCommand";
import {
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput,
} from "../commands/ListChannelModeratorsCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import {
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "../commands/ListChannelsModeratedByAppInstanceUserCommand";
import {
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "../commands/ListMediaCapturePipelinesCommand";
import { ListMeetingsCommandInput, ListMeetingsCommandOutput } from "../commands/ListMeetingsCommand";
import { ListMeetingTagsCommandInput, ListMeetingTagsCommandOutput } from "../commands/ListMeetingTagsCommand";
import {
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "../commands/ListPhoneNumberOrdersCommand";
import { ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput } from "../commands/ListPhoneNumbersCommand";
import { ListProxySessionsCommandInput, ListProxySessionsCommandOutput } from "../commands/ListProxySessionsCommand";
import {
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput,
} from "../commands/ListRoomMembershipsCommand";
import { ListRoomsCommandInput, ListRoomsCommandOutput } from "../commands/ListRoomsCommand";
import {
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
} from "../commands/ListSipMediaApplicationsCommand";
import { ListSipRulesCommandInput, ListSipRulesCommandOutput } from "../commands/ListSipRulesCommand";
import {
  ListSupportedPhoneNumberCountriesCommandInput,
  ListSupportedPhoneNumberCountriesCommandOutput,
} from "../commands/ListSupportedPhoneNumberCountriesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import {
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput,
} from "../commands/ListVoiceConnectorGroupsCommand";
import {
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
} from "../commands/ListVoiceConnectorsCommand";
import {
  ListVoiceConnectorTerminationCredentialsCommandInput,
  ListVoiceConnectorTerminationCredentialsCommandOutput,
} from "../commands/ListVoiceConnectorTerminationCredentialsCommand";
import { LogoutUserCommandInput, LogoutUserCommandOutput } from "../commands/LogoutUserCommand";
import {
  PutAppInstanceRetentionSettingsCommandInput,
  PutAppInstanceRetentionSettingsCommandOutput,
} from "../commands/PutAppInstanceRetentionSettingsCommand";
import {
  PutAppInstanceStreamingConfigurationsCommandInput,
  PutAppInstanceStreamingConfigurationsCommandOutput,
} from "../commands/PutAppInstanceStreamingConfigurationsCommand";
import {
  PutEventsConfigurationCommandInput,
  PutEventsConfigurationCommandOutput,
} from "../commands/PutEventsConfigurationCommand";
import {
  PutRetentionSettingsCommandInput,
  PutRetentionSettingsCommandOutput,
} from "../commands/PutRetentionSettingsCommand";
import {
  PutSipMediaApplicationLoggingConfigurationCommandInput,
  PutSipMediaApplicationLoggingConfigurationCommandOutput,
} from "../commands/PutSipMediaApplicationLoggingConfigurationCommand";
import {
  PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
  PutVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "../commands/PutVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  PutVoiceConnectorLoggingConfigurationCommandInput,
  PutVoiceConnectorLoggingConfigurationCommandOutput,
} from "../commands/PutVoiceConnectorLoggingConfigurationCommand";
import {
  PutVoiceConnectorOriginationCommandInput,
  PutVoiceConnectorOriginationCommandOutput,
} from "../commands/PutVoiceConnectorOriginationCommand";
import {
  PutVoiceConnectorProxyCommandInput,
  PutVoiceConnectorProxyCommandOutput,
} from "../commands/PutVoiceConnectorProxyCommand";
import {
  PutVoiceConnectorStreamingConfigurationCommandInput,
  PutVoiceConnectorStreamingConfigurationCommandOutput,
} from "../commands/PutVoiceConnectorStreamingConfigurationCommand";
import {
  PutVoiceConnectorTerminationCommandInput,
  PutVoiceConnectorTerminationCommandOutput,
} from "../commands/PutVoiceConnectorTerminationCommand";
import {
  PutVoiceConnectorTerminationCredentialsCommandInput,
  PutVoiceConnectorTerminationCredentialsCommandOutput,
} from "../commands/PutVoiceConnectorTerminationCredentialsCommand";
import {
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
} from "../commands/RedactChannelMessageCommand";
import {
  RedactConversationMessageCommandInput,
  RedactConversationMessageCommandOutput,
} from "../commands/RedactConversationMessageCommand";
import { RedactRoomMessageCommandInput, RedactRoomMessageCommandOutput } from "../commands/RedactRoomMessageCommand";
import {
  RegenerateSecurityTokenCommandInput,
  RegenerateSecurityTokenCommandOutput,
} from "../commands/RegenerateSecurityTokenCommand";
import { ResetPersonalPINCommandInput, ResetPersonalPINCommandOutput } from "../commands/ResetPersonalPINCommand";
import { RestorePhoneNumberCommandInput, RestorePhoneNumberCommandOutput } from "../commands/RestorePhoneNumberCommand";
import {
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "../commands/SearchAvailablePhoneNumbersCommand";
import { SendChannelMessageCommandInput, SendChannelMessageCommandOutput } from "../commands/SendChannelMessageCommand";
import {
  StartMeetingTranscriptionCommandInput,
  StartMeetingTranscriptionCommandOutput,
} from "../commands/StartMeetingTranscriptionCommand";
import {
  StopMeetingTranscriptionCommandInput,
  StopMeetingTranscriptionCommandOutput,
} from "../commands/StopMeetingTranscriptionCommand";
import { TagAttendeeCommandInput, TagAttendeeCommandOutput } from "../commands/TagAttendeeCommand";
import { TagMeetingCommandInput, TagMeetingCommandOutput } from "../commands/TagMeetingCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagAttendeeCommandInput, UntagAttendeeCommandOutput } from "../commands/UntagAttendeeCommand";
import { UntagMeetingCommandInput, UntagMeetingCommandOutput } from "../commands/UntagMeetingCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAccountCommandInput, UpdateAccountCommandOutput } from "../commands/UpdateAccountCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "../commands/UpdateAccountSettingsCommand";
import { UpdateAppInstanceCommandInput, UpdateAppInstanceCommandOutput } from "../commands/UpdateAppInstanceCommand";
import {
  UpdateAppInstanceUserCommandInput,
  UpdateAppInstanceUserCommandOutput,
} from "../commands/UpdateAppInstanceUserCommand";
import { UpdateBotCommandInput, UpdateBotCommandOutput } from "../commands/UpdateBotCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "../commands/UpdateChannelCommand";
import {
  UpdateChannelMessageCommandInput,
  UpdateChannelMessageCommandOutput,
} from "../commands/UpdateChannelMessageCommand";
import {
  UpdateChannelReadMarkerCommandInput,
  UpdateChannelReadMarkerCommandOutput,
} from "../commands/UpdateChannelReadMarkerCommand";
import {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "../commands/UpdateGlobalSettingsCommand";
import { UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput } from "../commands/UpdatePhoneNumberCommand";
import {
  UpdatePhoneNumberSettingsCommandInput,
  UpdatePhoneNumberSettingsCommandOutput,
} from "../commands/UpdatePhoneNumberSettingsCommand";
import { UpdateProxySessionCommandInput, UpdateProxySessionCommandOutput } from "../commands/UpdateProxySessionCommand";
import { UpdateRoomCommandInput, UpdateRoomCommandOutput } from "../commands/UpdateRoomCommand";
import {
  UpdateRoomMembershipCommandInput,
  UpdateRoomMembershipCommandOutput,
} from "../commands/UpdateRoomMembershipCommand";
import {
  UpdateSipMediaApplicationCallCommandInput,
  UpdateSipMediaApplicationCallCommandOutput,
} from "../commands/UpdateSipMediaApplicationCallCommand";
import {
  UpdateSipMediaApplicationCommandInput,
  UpdateSipMediaApplicationCommandOutput,
} from "../commands/UpdateSipMediaApplicationCommand";
import { UpdateSipRuleCommandInput, UpdateSipRuleCommandOutput } from "../commands/UpdateSipRuleCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import { UpdateUserSettingsCommandInput, UpdateUserSettingsCommandOutput } from "../commands/UpdateUserSettingsCommand";
import {
  UpdateVoiceConnectorCommandInput,
  UpdateVoiceConnectorCommandOutput,
} from "../commands/UpdateVoiceConnectorCommand";
import {
  UpdateVoiceConnectorGroupCommandInput,
  UpdateVoiceConnectorGroupCommandOutput,
} from "../commands/UpdateVoiceConnectorGroupCommand";
import {
  ValidateE911AddressCommandInput,
  ValidateE911AddressCommandOutput,
} from "../commands/ValidateE911AddressCommand";
import { ChimeServiceException as __BaseException } from "../models/ChimeServiceException";
import {
  AccessDeniedException,
  Account,
  AccountSettings,
  AlexaForBusinessMetadata,
  AppInstance,
  AppInstanceAdmin,
  AppInstanceRetentionSettings,
  AppInstanceStreamingConfiguration,
  AppInstanceUser,
  AppInstanceUserMembershipSummary,
  ArtifactsConfiguration,
  AudioArtifactsConfiguration,
  BadRequestException,
  Bot,
  BusinessCallingSettings,
  Capability,
  Channel,
  ChannelBan,
  ChannelMembership,
  ChannelMembershipForAppInstanceUserSummary,
  ChannelMessage,
  ChannelMessageSummary,
  ChannelModeratedByAppInstanceUserSummary,
  ChannelModerator,
  ChannelRetentionSettings,
  ChannelSummary,
  ChimeSdkMeetingConfiguration,
  ConflictException,
  ContentArtifactsConfiguration,
  ConversationRetentionSettings,
  CreateAttendeeRequestItem,
  Credential,
  DNISEmergencyCallingConfiguration,
  EmergencyCallingConfiguration,
  EngineTranscribeMedicalSettings,
  EngineTranscribeSettings,
  ForbiddenException,
  GeoMatchParams,
  MediaCapturePipeline,
  MeetingNotificationConfiguration,
  MembershipItem,
  NotFoundException,
  PhoneNumber,
  PhoneNumberAssociation,
  PhoneNumberOrder,
  ProxySession,
  ResourceLimitExceededException,
  Room,
  RoomMembership,
  SelectedVideoStreams,
  ServiceFailureException,
  ServiceUnavailableException,
  SigninDelegateGroup,
  SipMediaApplication,
  SipMediaApplicationEndpoint,
  SipRule,
  SipRuleTargetApplication,
  SourceConfiguration,
  Tag,
  ThrottledClientException,
  UnauthorizedClientException,
  UnprocessableEntityException,
  UpdatePhoneNumberRequestItem,
  UpdateUserRequestItem,
  User,
  VideoArtifactsConfiguration,
  VoiceConnector,
  VoiceConnectorGroup,
  VoiceConnectorItem,
  VoiceConnectorSettings,
} from "../models/models_0";
import {
  LoggingConfiguration,
  Origination,
  OriginationRoute,
  RetentionSettings,
  RoomRetentionSettings,
  SipMediaApplicationLoggingConfiguration,
  StreamingConfiguration,
  StreamingNotificationTarget,
  TelephonySettings,
  Termination,
  TerminationHealth,
  TranscriptionConfiguration,
  UserSettings,
} from "../models/models_1";

/**
 * serializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand
 */
export const se_AssociatePhoneNumbersWithVoiceConnectorCommand = async (
  input: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  const query: any = map({
    [_o]: [, "associate-phone-numbers"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      E164PhoneNumbers: (_) => _json(_),
      ForceAssociate: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorGroupCommand
 */
export const se_AssociatePhoneNumbersWithVoiceConnectorGroupCommand = async (
  input: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connector-groups/{VoiceConnectorGroupId}");
  b.p("VoiceConnectorGroupId", () => input.VoiceConnectorGroupId!, "{VoiceConnectorGroupId}", false);
  const query: any = map({
    [_o]: [, "associate-phone-numbers"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      E164PhoneNumbers: (_) => _json(_),
      ForceAssociate: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociatePhoneNumberWithUserCommand
 */
export const se_AssociatePhoneNumberWithUserCommand = async (
  input: AssociatePhoneNumberWithUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users/{UserId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  const query: any = map({
    [_o]: [, "associate-phone-number"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      E164PhoneNumber: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand
 */
export const se_AssociateSigninDelegateGroupsWithAccountCommand = async (
  input: AssociateSigninDelegateGroupsWithAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_o]: [, "associate-signin-delegate-groups"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      SigninDelegateGroups: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchCreateAttendeeCommand
 */
export const se_BatchCreateAttendeeCommand = async (
  input: BatchCreateAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/attendees");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    [_o]: [, "batch-create"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Attendees: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchCreateChannelMembershipCommand
 */
export const se_BatchCreateChannelMembershipCommand = async (
  input: BatchCreateChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/memberships");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_o]: [, "batch-create"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      MemberArns: (_) => _json(_),
      Type: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchCreateRoomMembershipCommand
 */
export const se_BatchCreateRoomMembershipCommand = async (
  input: BatchCreateRoomMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/rooms/{RoomId}/memberships");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  const query: any = map({
    [_o]: [, "batch-create"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      MembershipItemList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDeletePhoneNumberCommand
 */
export const se_BatchDeletePhoneNumberCommand = async (
  input: BatchDeletePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-numbers");
  const query: any = map({
    [_o]: [, "batch-delete"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      PhoneNumberIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchSuspendUserCommand
 */
export const se_BatchSuspendUserCommand = async (
  input: BatchSuspendUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_o]: [, "suspend"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      UserIdList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUnsuspendUserCommand
 */
export const se_BatchUnsuspendUserCommand = async (
  input: BatchUnsuspendUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_o]: [, "unsuspend"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      UserIdList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpdatePhoneNumberCommand
 */
export const se_BatchUpdatePhoneNumberCommand = async (
  input: BatchUpdatePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-numbers");
  const query: any = map({
    [_o]: [, "batch-update"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      UpdatePhoneNumberRequestItems: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpdateUserCommand
 */
export const se_BatchUpdateUserCommand = async (
  input: BatchUpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      UpdateUserRequestItems: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAccountCommand
 */
export const se_CreateAccountCommand = async (
  input: CreateAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAppInstanceCommand
 */
export const se_CreateAppInstanceCommand = async (
  input: CreateAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/app-instances");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Metadata: [],
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAppInstanceAdminCommand
 */
export const se_CreateAppInstanceAdminCommand = async (
  input: CreateAppInstanceAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/app-instances/{AppInstanceArn}/admins");
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AppInstanceAdminArn: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAppInstanceUserCommand
 */
export const se_CreateAppInstanceUserCommand = async (
  input: CreateAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/app-instance-users");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AppInstanceArn: [],
      AppInstanceUserId: [],
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Metadata: [],
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAttendeeCommand
 */
export const se_CreateAttendeeCommand = async (
  input: CreateAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/attendees");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ExternalUserId: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBotCommand
 */
export const se_CreateBotCommand = async (
  input: CreateBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/bots");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DisplayName: [],
      Domain: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateChannelCommand
 */
export const se_CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AppInstanceArn: [],
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Metadata: [],
      Mode: [],
      Name: [],
      Privacy: [],
      Tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateChannelBanCommand
 */
export const se_CreateChannelBanCommand = async (
  input: CreateChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/bans");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MemberArn: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateChannelMembershipCommand
 */
export const se_CreateChannelMembershipCommand = async (
  input: CreateChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/memberships");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MemberArn: [],
      Type: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateChannelModeratorCommand
 */
export const se_CreateChannelModeratorCommand = async (
  input: CreateChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/moderators");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChannelModeratorArn: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMediaCapturePipelineCommand
 */
export const se_CreateMediaCapturePipelineCommand = async (
  input: CreateMediaCapturePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/media-capture-pipelines");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChimeSdkMeetingConfiguration: (_) => _json(_),
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      SinkArn: [],
      SinkType: [],
      SourceArn: [],
      SourceType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMeetingCommand
 */
export const se_CreateMeetingCommand = async (
  input: CreateMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ExternalMeetingId: [],
      MediaRegion: [],
      MeetingHostId: [],
      NotificationsConfiguration: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMeetingDialOutCommand
 */
export const se_CreateMeetingDialOutCommand = async (
  input: CreateMeetingDialOutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/dial-outs");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      FromPhoneNumber: [],
      JoinToken: [],
      ToPhoneNumber: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMeetingWithAttendeesCommand
 */
export const se_CreateMeetingWithAttendeesCommand = async (
  input: CreateMeetingWithAttendeesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings");
  const query: any = map({
    [_o]: [, "create-attendees"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Attendees: (_) => _json(_),
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ExternalMeetingId: [],
      MediaRegion: [],
      MeetingHostId: [],
      NotificationsConfiguration: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePhoneNumberOrderCommand
 */
export const se_CreatePhoneNumberOrderCommand = async (
  input: CreatePhoneNumberOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-number-orders");
  let body: any;
  body = JSON.stringify(
    take(input, {
      E164PhoneNumbers: (_) => _json(_),
      ProductType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProxySessionCommand
 */
export const se_CreateProxySessionCommand = async (
  input: CreateProxySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/proxy-sessions");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Capabilities: (_) => _json(_),
      ExpiryMinutes: [],
      GeoMatchLevel: [],
      GeoMatchParams: (_) => _json(_),
      Name: [],
      NumberSelectionBehavior: [],
      ParticipantPhoneNumbers: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRoomCommand
 */
export const se_CreateRoomCommand = async (
  input: CreateRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/rooms");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRoomMembershipCommand
 */
export const se_CreateRoomMembershipCommand = async (
  input: CreateRoomMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/rooms/{RoomId}/memberships");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MemberId: [],
      Role: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSipMediaApplicationCommand
 */
export const se_CreateSipMediaApplicationCommand = async (
  input: CreateSipMediaApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-media-applications");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AwsRegion: [],
      Endpoints: (_) => _json(_),
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSipMediaApplicationCallCommand
 */
export const se_CreateSipMediaApplicationCallCommand = async (
  input: CreateSipMediaApplicationCallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-media-applications/{SipMediaApplicationId}/calls");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      FromPhoneNumber: [],
      SipHeaders: (_) => _json(_),
      ToPhoneNumber: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSipRuleCommand
 */
export const se_CreateSipRuleCommand = async (
  input: CreateSipRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-rules");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Disabled: [],
      Name: [],
      TargetApplications: (_) => _json(_),
      TriggerType: [],
      TriggerValue: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_o]: [, "create"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Email: [],
      UserType: [],
      Username: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVoiceConnectorCommand
 */
export const se_CreateVoiceConnectorCommand = async (
  input: CreateVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AwsRegion: [],
      Name: [],
      RequireEncryption: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVoiceConnectorGroupCommand
 */
export const se_CreateVoiceConnectorGroupCommand = async (
  input: CreateVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connector-groups");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      VoiceConnectorItems: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAccountCommand
 */
export const se_DeleteAccountCommand = async (
  input: DeleteAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAppInstanceCommand
 */
export const se_DeleteAppInstanceCommand = async (
  input: DeleteAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instances/{AppInstanceArn}");
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAppInstanceAdminCommand
 */
export const se_DeleteAppInstanceAdminCommand = async (
  input: DeleteAppInstanceAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}");
  b.p("AppInstanceAdminArn", () => input.AppInstanceAdminArn!, "{AppInstanceAdminArn}", false);
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommand
 */
export const se_DeleteAppInstanceStreamingConfigurationsCommand = async (
  input: DeleteAppInstanceStreamingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instances/{AppInstanceArn}/streaming-configurations");
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAppInstanceUserCommand
 */
export const se_DeleteAppInstanceUserCommand = async (
  input: DeleteAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instance-users/{AppInstanceUserArn}");
  b.p("AppInstanceUserArn", () => input.AppInstanceUserArn!, "{AppInstanceUserArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAttendeeCommand
 */
export const se_DeleteAttendeeCommand = async (
  input: DeleteAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}/attendees/{AttendeeId}");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  b.p("AttendeeId", () => input.AttendeeId!, "{AttendeeId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelCommand
 */
export const se_DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelBanCommand
 */
export const se_DeleteChannelBanCommand = async (
  input: DeleteChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/bans/{MemberArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelMembershipCommand
 */
export const se_DeleteChannelMembershipCommand = async (
  input: DeleteChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/memberships/{MemberArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelMessageCommand
 */
export const se_DeleteChannelMessageCommand = async (
  input: DeleteChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/messages/{MessageId}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelModeratorCommand
 */
export const se_DeleteChannelModeratorCommand = async (
  input: DeleteChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/moderators/{ChannelModeratorArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("ChannelModeratorArn", () => input.ChannelModeratorArn!, "{ChannelModeratorArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEventsConfigurationCommand
 */
export const se_DeleteEventsConfigurationCommand = async (
  input: DeleteEventsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/bots/{BotId}/events-configuration");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMediaCapturePipelineCommand
 */
export const se_DeleteMediaCapturePipelineCommand = async (
  input: DeleteMediaCapturePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/media-capture-pipelines/{MediaPipelineId}");
  b.p("MediaPipelineId", () => input.MediaPipelineId!, "{MediaPipelineId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMeetingCommand
 */
export const se_DeleteMeetingCommand = async (
  input: DeleteMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePhoneNumberCommand
 */
export const se_DeletePhoneNumberCommand = async (
  input: DeletePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-numbers/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProxySessionCommand
 */
export const se_DeleteProxySessionCommand = async (
  input: DeleteProxySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  b.p("ProxySessionId", () => input.ProxySessionId!, "{ProxySessionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRoomCommand
 */
export const se_DeleteRoomCommand = async (
  input: DeleteRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/rooms/{RoomId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRoomMembershipCommand
 */
export const se_DeleteRoomMembershipCommand = async (
  input: DeleteRoomMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/rooms/{RoomId}/memberships/{MemberId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  b.p("MemberId", () => input.MemberId!, "{MemberId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSipMediaApplicationCommand
 */
export const se_DeleteSipMediaApplicationCommand = async (
  input: DeleteSipMediaApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-media-applications/{SipMediaApplicationId}");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSipRuleCommand
 */
export const se_DeleteSipRuleCommand = async (
  input: DeleteSipRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-rules/{SipRuleId}");
  b.p("SipRuleId", () => input.SipRuleId!, "{SipRuleId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorCommand
 */
export const se_DeleteVoiceConnectorCommand = async (
  input: DeleteVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorEmergencyCallingConfigurationCommand
 */
export const se_DeleteVoiceConnectorEmergencyCallingConfigurationCommand = async (
  input: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorGroupCommand
 */
export const se_DeleteVoiceConnectorGroupCommand = async (
  input: DeleteVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connector-groups/{VoiceConnectorGroupId}");
  b.p("VoiceConnectorGroupId", () => input.VoiceConnectorGroupId!, "{VoiceConnectorGroupId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorOriginationCommand
 */
export const se_DeleteVoiceConnectorOriginationCommand = async (
  input: DeleteVoiceConnectorOriginationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/origination");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorProxyCommand
 */
export const se_DeleteVoiceConnectorProxyCommand = async (
  input: DeleteVoiceConnectorProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorStreamingConfigurationCommand
 */
export const se_DeleteVoiceConnectorStreamingConfigurationCommand = async (
  input: DeleteVoiceConnectorStreamingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/streaming-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorTerminationCommand
 */
export const se_DeleteVoiceConnectorTerminationCommand = async (
  input: DeleteVoiceConnectorTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/termination");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorTerminationCredentialsCommand
 */
export const se_DeleteVoiceConnectorTerminationCredentialsCommand = async (
  input: DeleteVoiceConnectorTerminationCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/termination/credentials");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  const query: any = map({
    [_o]: [, "delete"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Usernames: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAppInstanceCommand
 */
export const se_DescribeAppInstanceCommand = async (
  input: DescribeAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instances/{AppInstanceArn}");
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAppInstanceAdminCommand
 */
export const se_DescribeAppInstanceAdminCommand = async (
  input: DescribeAppInstanceAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}");
  b.p("AppInstanceAdminArn", () => input.AppInstanceAdminArn!, "{AppInstanceAdminArn}", false);
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAppInstanceUserCommand
 */
export const se_DescribeAppInstanceUserCommand = async (
  input: DescribeAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instance-users/{AppInstanceUserArn}");
  b.p("AppInstanceUserArn", () => input.AppInstanceUserArn!, "{AppInstanceUserArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelCommand
 */
export const se_DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelBanCommand
 */
export const se_DescribeChannelBanCommand = async (
  input: DescribeChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/bans/{MemberArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelMembershipCommand
 */
export const se_DescribeChannelMembershipCommand = async (
  input: DescribeChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/memberships/{MemberArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand
 */
export const se_DescribeChannelMembershipForAppInstanceUserCommand = async (
  input: DescribeChannelMembershipForAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_s]: [, "app-instance-user-membership"],
    [_aiua]: [, __expectNonNull(input[_AIUA]!, `AppInstanceUserArn`)],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand
 */
export const se_DescribeChannelModeratedByAppInstanceUserCommand = async (
  input: DescribeChannelModeratedByAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_s]: [, "app-instance-user-moderated-channel"],
    [_aiua]: [, __expectNonNull(input[_AIUA]!, `AppInstanceUserArn`)],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelModeratorCommand
 */
export const se_DescribeChannelModeratorCommand = async (
  input: DescribeChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/moderators/{ChannelModeratorArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("ChannelModeratorArn", () => input.ChannelModeratorArn!, "{ChannelModeratorArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociatePhoneNumberFromUserCommand
 */
export const se_DisassociatePhoneNumberFromUserCommand = async (
  input: DisassociatePhoneNumberFromUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/users/{UserId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  const query: any = map({
    [_o]: [, "disassociate-phone-number"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand
 */
export const se_DisassociatePhoneNumbersFromVoiceConnectorCommand = async (
  input: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  const query: any = map({
    [_o]: [, "disassociate-phone-numbers"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      E164PhoneNumbers: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorGroupCommand
 */
export const se_DisassociatePhoneNumbersFromVoiceConnectorGroupCommand = async (
  input: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connector-groups/{VoiceConnectorGroupId}");
  b.p("VoiceConnectorGroupId", () => input.VoiceConnectorGroupId!, "{VoiceConnectorGroupId}", false);
  const query: any = map({
    [_o]: [, "disassociate-phone-numbers"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      E164PhoneNumbers: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand
 */
export const se_DisassociateSigninDelegateGroupsFromAccountCommand = async (
  input: DisassociateSigninDelegateGroupsFromAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_o]: [, "disassociate-signin-delegate-groups"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      GroupNames: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountCommand
 */
export const se_GetAccountCommand = async (
  input: GetAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountSettingsCommand
 */
export const se_GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/settings");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAppInstanceRetentionSettingsCommand
 */
export const se_GetAppInstanceRetentionSettingsCommand = async (
  input: GetAppInstanceRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instances/{AppInstanceArn}/retention-settings");
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAppInstanceStreamingConfigurationsCommand
 */
export const se_GetAppInstanceStreamingConfigurationsCommand = async (
  input: GetAppInstanceStreamingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instances/{AppInstanceArn}/streaming-configurations");
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAttendeeCommand
 */
export const se_GetAttendeeCommand = async (
  input: GetAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}/attendees/{AttendeeId}");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  b.p("AttendeeId", () => input.AttendeeId!, "{AttendeeId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBotCommand
 */
export const se_GetBotCommand = async (input: GetBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/bots/{BotId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetChannelMessageCommand
 */
export const se_GetChannelMessageCommand = async (
  input: GetChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/messages/{MessageId}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEventsConfigurationCommand
 */
export const se_GetEventsConfigurationCommand = async (
  input: GetEventsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/bots/{BotId}/events-configuration");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGlobalSettingsCommand
 */
export const se_GetGlobalSettingsCommand = async (
  input: GetGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/settings");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMediaCapturePipelineCommand
 */
export const se_GetMediaCapturePipelineCommand = async (
  input: GetMediaCapturePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/media-capture-pipelines/{MediaPipelineId}");
  b.p("MediaPipelineId", () => input.MediaPipelineId!, "{MediaPipelineId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMeetingCommand
 */
export const se_GetMeetingCommand = async (
  input: GetMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMessagingSessionEndpointCommand
 */
export const se_GetMessagingSessionEndpointCommand = async (
  input: GetMessagingSessionEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/endpoints/messaging-session");
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPhoneNumberCommand
 */
export const se_GetPhoneNumberCommand = async (
  input: GetPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-numbers/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPhoneNumberOrderCommand
 */
export const se_GetPhoneNumberOrderCommand = async (
  input: GetPhoneNumberOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-number-orders/{PhoneNumberOrderId}");
  b.p("PhoneNumberOrderId", () => input.PhoneNumberOrderId!, "{PhoneNumberOrderId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPhoneNumberSettingsCommand
 */
export const se_GetPhoneNumberSettingsCommand = async (
  input: GetPhoneNumberSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/settings/phone-number");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProxySessionCommand
 */
export const se_GetProxySessionCommand = async (
  input: GetProxySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  b.p("ProxySessionId", () => input.ProxySessionId!, "{ProxySessionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRetentionSettingsCommand
 */
export const se_GetRetentionSettingsCommand = async (
  input: GetRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/retention-settings");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRoomCommand
 */
export const se_GetRoomCommand = async (
  input: GetRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/rooms/{RoomId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSipMediaApplicationCommand
 */
export const se_GetSipMediaApplicationCommand = async (
  input: GetSipMediaApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-media-applications/{SipMediaApplicationId}");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand
 */
export const se_GetSipMediaApplicationLoggingConfigurationCommand = async (
  input: GetSipMediaApplicationLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-media-applications/{SipMediaApplicationId}/logging-configuration");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSipRuleCommand
 */
export const se_GetSipRuleCommand = async (
  input: GetSipRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-rules/{SipRuleId}");
  b.p("SipRuleId", () => input.SipRuleId!, "{SipRuleId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUserCommand
 */
export const se_GetUserCommand = async (
  input: GetUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/users/{UserId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUserSettingsCommand
 */
export const se_GetUserSettingsCommand = async (
  input: GetUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/users/{UserId}/settings");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorCommand
 */
export const se_GetVoiceConnectorCommand = async (
  input: GetVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorEmergencyCallingConfigurationCommand
 */
export const se_GetVoiceConnectorEmergencyCallingConfigurationCommand = async (
  input: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorGroupCommand
 */
export const se_GetVoiceConnectorGroupCommand = async (
  input: GetVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connector-groups/{VoiceConnectorGroupId}");
  b.p("VoiceConnectorGroupId", () => input.VoiceConnectorGroupId!, "{VoiceConnectorGroupId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorLoggingConfigurationCommand
 */
export const se_GetVoiceConnectorLoggingConfigurationCommand = async (
  input: GetVoiceConnectorLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/logging-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorOriginationCommand
 */
export const se_GetVoiceConnectorOriginationCommand = async (
  input: GetVoiceConnectorOriginationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/origination");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorProxyCommand
 */
export const se_GetVoiceConnectorProxyCommand = async (
  input: GetVoiceConnectorProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand
 */
export const se_GetVoiceConnectorStreamingConfigurationCommand = async (
  input: GetVoiceConnectorStreamingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/streaming-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorTerminationCommand
 */
export const se_GetVoiceConnectorTerminationCommand = async (
  input: GetVoiceConnectorTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/termination");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorTerminationHealthCommand
 */
export const se_GetVoiceConnectorTerminationHealthCommand = async (
  input: GetVoiceConnectorTerminationHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/termination/health");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InviteUsersCommand
 */
export const se_InviteUsersCommand = async (
  input: InviteUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_o]: [, "add"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      UserEmailList: (_) => _json(_),
      UserType: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAccountsCommand
 */
export const se_ListAccountsCommand = async (
  input: ListAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts");
  const query: any = map({
    [_n]: [, input[_N]!],
    [_ue]: [, input[_UE]!],
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppInstanceAdminsCommand
 */
export const se_ListAppInstanceAdminsCommand = async (
  input: ListAppInstanceAdminsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instances/{AppInstanceArn}/admins");
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppInstancesCommand
 */
export const se_ListAppInstancesCommand = async (
  input: ListAppInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instances");
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppInstanceUsersCommand
 */
export const se_ListAppInstanceUsersCommand = async (
  input: ListAppInstanceUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instance-users");
  const query: any = map({
    [_aia]: [, __expectNonNull(input[_AIA]!, `AppInstanceArn`)],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAttendeesCommand
 */
export const se_ListAttendeesCommand = async (
  input: ListAttendeesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}/attendees");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAttendeeTagsCommand
 */
export const se_ListAttendeeTagsCommand = async (
  input: ListAttendeeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}/attendees/{AttendeeId}/tags");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  b.p("AttendeeId", () => input.AttendeeId!, "{AttendeeId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBotsCommand
 */
export const se_ListBotsCommand = async (
  input: ListBotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/bots");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelBansCommand
 */
export const se_ListChannelBansCommand = async (
  input: ListChannelBansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/bans");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelMembershipsCommand
 */
export const se_ListChannelMembershipsCommand = async (
  input: ListChannelMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/memberships");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_t]: [, input[_T]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand
 */
export const se_ListChannelMembershipsForAppInstanceUserCommand = async (
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels");
  const query: any = map({
    [_s]: [, "app-instance-user-memberships"],
    [_aiua]: [, input[_AIUA]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelMessagesCommand
 */
export const se_ListChannelMessagesCommand = async (
  input: ListChannelMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/messages");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_so]: [, input[_SO]!],
    [_nb]: [() => input.NotBefore !== void 0, () => __serializeDateTime(input[_NB]!).toString()],
    [_na]: [() => input.NotAfter !== void 0, () => __serializeDateTime(input[_NA]!).toString()],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelModeratorsCommand
 */
export const se_ListChannelModeratorsCommand = async (
  input: ListChannelModeratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/moderators");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelsCommand
 */
export const se_ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels");
  const query: any = map({
    [_aia]: [, __expectNonNull(input[_AIA]!, `AppInstanceArn`)],
    [_p]: [, input[_P]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand
 */
export const se_ListChannelsModeratedByAppInstanceUserCommand = async (
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels");
  const query: any = map({
    [_s]: [, "app-instance-user-moderated-channels"],
    [_aiua]: [, input[_AIUA]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMediaCapturePipelinesCommand
 */
export const se_ListMediaCapturePipelinesCommand = async (
  input: ListMediaCapturePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/media-capture-pipelines");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMeetingsCommand
 */
export const se_ListMeetingsCommand = async (
  input: ListMeetingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMeetingTagsCommand
 */
export const se_ListMeetingTagsCommand = async (
  input: ListMeetingTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}/tags");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPhoneNumberOrdersCommand
 */
export const se_ListPhoneNumberOrdersCommand = async (
  input: ListPhoneNumberOrdersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-number-orders");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPhoneNumbersCommand
 */
export const se_ListPhoneNumbersCommand = async (
  input: ListPhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-numbers");
  const query: any = map({
    [_st]: [, input[_S]!],
    [_pt]: [, input[_PT]!],
    [_fn]: [, input[_FN]!],
    [_fv]: [, input[_FV]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProxySessionsCommand
 */
export const se_ListProxySessionsCommand = async (
  input: ListProxySessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/proxy-sessions");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  const query: any = map({
    [_st]: [, input[_S]!],
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRoomMembershipsCommand
 */
export const se_ListRoomMembershipsCommand = async (
  input: ListRoomMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/rooms/{RoomId}/memberships");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRoomsCommand
 */
export const se_ListRoomsCommand = async (
  input: ListRoomsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/rooms");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_mi]: [, input[_MI]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSipMediaApplicationsCommand
 */
export const se_ListSipMediaApplicationsCommand = async (
  input: ListSipMediaApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-media-applications");
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSipRulesCommand
 */
export const se_ListSipRulesCommand = async (
  input: ListSipRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-rules");
  const query: any = map({
    [_sma]: [, input[_SMAI]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSupportedPhoneNumberCountriesCommand
 */
export const se_ListSupportedPhoneNumberCountriesCommand = async (
  input: ListSupportedPhoneNumberCountriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-number-countries");
  const query: any = map({
    [_pt]: [, __expectNonNull(input[_PT]!, `ProductType`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_RARN]!, `ResourceARN`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListUsersCommand
 */
export const se_ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/users");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_ue]: [, input[_UE]!],
    [_ut]: [, input[_UT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVoiceConnectorGroupsCommand
 */
export const se_ListVoiceConnectorGroupsCommand = async (
  input: ListVoiceConnectorGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connector-groups");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVoiceConnectorsCommand
 */
export const se_ListVoiceConnectorsCommand = async (
  input: ListVoiceConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVoiceConnectorTerminationCredentialsCommand
 */
export const se_ListVoiceConnectorTerminationCredentialsCommand = async (
  input: ListVoiceConnectorTerminationCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/termination/credentials");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1LogoutUserCommand
 */
export const se_LogoutUserCommand = async (
  input: LogoutUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/users/{UserId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  const query: any = map({
    [_o]: [, "logout"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutAppInstanceRetentionSettingsCommand
 */
export const se_PutAppInstanceRetentionSettingsCommand = async (
  input: PutAppInstanceRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/app-instances/{AppInstanceArn}/retention-settings");
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AppInstanceRetentionSettings: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutAppInstanceStreamingConfigurationsCommand
 */
export const se_PutAppInstanceStreamingConfigurationsCommand = async (
  input: PutAppInstanceStreamingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/app-instances/{AppInstanceArn}/streaming-configurations");
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AppInstanceStreamingConfigurations: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutEventsConfigurationCommand
 */
export const se_PutEventsConfigurationCommand = async (
  input: PutEventsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/bots/{BotId}/events-configuration");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LambdaFunctionArn: [],
      OutboundEventsHTTPSEndpoint: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutRetentionSettingsCommand
 */
export const se_PutRetentionSettingsCommand = async (
  input: PutRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/retention-settings");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      RetentionSettings: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand
 */
export const se_PutSipMediaApplicationLoggingConfigurationCommand = async (
  input: PutSipMediaApplicationLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-media-applications/{SipMediaApplicationId}/logging-configuration");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SipMediaApplicationLoggingConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand
 */
export const se_PutVoiceConnectorEmergencyCallingConfigurationCommand = async (
  input: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EmergencyCallingConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand
 */
export const se_PutVoiceConnectorLoggingConfigurationCommand = async (
  input: PutVoiceConnectorLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/logging-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LoggingConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorOriginationCommand
 */
export const se_PutVoiceConnectorOriginationCommand = async (
  input: PutVoiceConnectorOriginationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/origination");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Origination: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorProxyCommand
 */
export const se_PutVoiceConnectorProxyCommand = async (
  input: PutVoiceConnectorProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DefaultSessionExpiryMinutes: [],
      Disabled: [],
      FallBackPhoneNumber: [],
      PhoneNumberPoolCountries: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorStreamingConfigurationCommand
 */
export const se_PutVoiceConnectorStreamingConfigurationCommand = async (
  input: PutVoiceConnectorStreamingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/streaming-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      StreamingConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorTerminationCommand
 */
export const se_PutVoiceConnectorTerminationCommand = async (
  input: PutVoiceConnectorTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/termination");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Termination: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorTerminationCredentialsCommand
 */
export const se_PutVoiceConnectorTerminationCredentialsCommand = async (
  input: PutVoiceConnectorTerminationCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/termination/credentials");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  const query: any = map({
    [_o]: [, "put"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Credentials: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RedactChannelMessageCommand
 */
export const se_RedactChannelMessageCommand = async (
  input: RedactChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/messages/{MessageId}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    [_o]: [, "redact"],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RedactConversationMessageCommand
 */
export const se_RedactConversationMessageCommand = async (
  input: RedactConversationMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/conversations/{ConversationId}/messages/{MessageId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("ConversationId", () => input.ConversationId!, "{ConversationId}", false);
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    [_o]: [, "redact"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RedactRoomMessageCommand
 */
export const se_RedactRoomMessageCommand = async (
  input: RedactRoomMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/rooms/{RoomId}/messages/{MessageId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    [_o]: [, "redact"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegenerateSecurityTokenCommand
 */
export const se_RegenerateSecurityTokenCommand = async (
  input: RegenerateSecurityTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/bots/{BotId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("BotId", () => input.BotId!, "{BotId}", false);
  const query: any = map({
    [_o]: [, "regenerate-security-token"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResetPersonalPINCommand
 */
export const se_ResetPersonalPINCommand = async (
  input: ResetPersonalPINCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/users/{UserId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  const query: any = map({
    [_o]: [, "reset-personal-pin"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RestorePhoneNumberCommand
 */
export const se_RestorePhoneNumberCommand = async (
  input: RestorePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-numbers/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  const query: any = map({
    [_o]: [, "restore"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchAvailablePhoneNumbersCommand
 */
export const se_SearchAvailablePhoneNumbersCommand = async (
  input: SearchAvailablePhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/search");
  const query: any = map({
    [_t]: [, "phone-numbers"],
    [_ac]: [, input[_AC]!],
    [_c]: [, input[_C]!],
    [_co]: [, input[_Co]!],
    [_sta]: [, input[_St]!],
    [_tfp]: [, input[_TFP]!],
    [_pnt]: [, input[_PNT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendChannelMessageCommand
 */
export const se_SendChannelMessageCommand = async (
  input: SendChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/messages");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Content: [],
      Metadata: [],
      Persistence: [],
      Type: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartMeetingTranscriptionCommand
 */
export const se_StartMeetingTranscriptionCommand = async (
  input: StartMeetingTranscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/transcription");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    [_o]: [, "start"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      TranscriptionConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopMeetingTranscriptionCommand
 */
export const se_StopMeetingTranscriptionCommand = async (
  input: StopMeetingTranscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}/transcription");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    [_o]: [, "stop"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagAttendeeCommand
 */
export const se_TagAttendeeCommand = async (
  input: TagAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/attendees/{AttendeeId}/tags");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  b.p("AttendeeId", () => input.AttendeeId!, "{AttendeeId}", false);
  const query: any = map({
    [_o]: [, "add"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagMeetingCommand
 */
export const se_TagMeetingCommand = async (
  input: TagMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/tags");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    [_o]: [, "add"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags");
  const query: any = map({
    [_o]: [, "tag-resource"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagAttendeeCommand
 */
export const se_UntagAttendeeCommand = async (
  input: UntagAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/attendees/{AttendeeId}/tags");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  b.p("AttendeeId", () => input.AttendeeId!, "{AttendeeId}", false);
  const query: any = map({
    [_o]: [, "delete"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagMeetingCommand
 */
export const se_UntagMeetingCommand = async (
  input: UntagMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/tags");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    [_o]: [, "delete"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags");
  const query: any = map({
    [_o]: [, "untag-resource"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAccountCommand
 */
export const se_UpdateAccountCommand = async (
  input: UpdateAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DefaultLicense: [],
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAccountSettingsCommand
 */
export const se_UpdateAccountSettingsCommand = async (
  input: UpdateAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/settings");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountSettings: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAppInstanceCommand
 */
export const se_UpdateAppInstanceCommand = async (
  input: UpdateAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/app-instances/{AppInstanceArn}");
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Metadata: [],
      Name: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAppInstanceUserCommand
 */
export const se_UpdateAppInstanceUserCommand = async (
  input: UpdateAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/app-instance-users/{AppInstanceUserArn}");
  b.p("AppInstanceUserArn", () => input.AppInstanceUserArn!, "{AppInstanceUserArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Metadata: [],
      Name: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateBotCommand
 */
export const se_UpdateBotCommand = async (
  input: UpdateBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/bots/{BotId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Disabled: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateChannelCommand
 */
export const se_UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Metadata: [],
      Mode: [],
      Name: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateChannelMessageCommand
 */
export const se_UpdateChannelMessageCommand = async (
  input: UpdateChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/messages/{MessageId}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Content: [],
      Metadata: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateChannelReadMarkerCommand
 */
export const se_UpdateChannelReadMarkerCommand = async (
  input: UpdateChannelReadMarkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/readMarker");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const se_UpdateGlobalSettingsCommand = async (
  input: UpdateGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/settings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BusinessCalling: (_) => _json(_),
      VoiceConnector: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePhoneNumberCommand
 */
export const se_UpdatePhoneNumberCommand = async (
  input: UpdatePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-numbers/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CallingName: [],
      ProductType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePhoneNumberSettingsCommand
 */
export const se_UpdatePhoneNumberSettingsCommand = async (
  input: UpdatePhoneNumberSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/settings/phone-number");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CallingName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProxySessionCommand
 */
export const se_UpdateProxySessionCommand = async (
  input: UpdateProxySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  b.p("ProxySessionId", () => input.ProxySessionId!, "{ProxySessionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Capabilities: (_) => _json(_),
      ExpiryMinutes: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRoomCommand
 */
export const se_UpdateRoomCommand = async (
  input: UpdateRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/rooms/{RoomId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRoomMembershipCommand
 */
export const se_UpdateRoomMembershipCommand = async (
  input: UpdateRoomMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/rooms/{RoomId}/memberships/{MemberId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  b.p("MemberId", () => input.MemberId!, "{MemberId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Role: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSipMediaApplicationCommand
 */
export const se_UpdateSipMediaApplicationCommand = async (
  input: UpdateSipMediaApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-media-applications/{SipMediaApplicationId}");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Endpoints: (_) => _json(_),
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSipMediaApplicationCallCommand
 */
export const se_UpdateSipMediaApplicationCallCommand = async (
  input: UpdateSipMediaApplicationCallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-media-applications/{SipMediaApplicationId}/calls/{TransactionId}");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  b.p("TransactionId", () => input.TransactionId!, "{TransactionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arguments: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSipRuleCommand
 */
export const se_UpdateSipRuleCommand = async (
  input: UpdateSipRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-rules/{SipRuleId}");
  b.p("SipRuleId", () => input.SipRuleId!, "{SipRuleId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Disabled: [],
      Name: [],
      TargetApplications: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserCommand
 */
export const se_UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users/{UserId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AlexaForBusinessMetadata: (_) => _json(_),
      LicenseType: [],
      UserType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserSettingsCommand
 */
export const se_UpdateUserSettingsCommand = async (
  input: UpdateUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users/{UserId}/settings");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      UserSettings: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateVoiceConnectorCommand
 */
export const se_UpdateVoiceConnectorCommand = async (
  input: UpdateVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      RequireEncryption: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateVoiceConnectorGroupCommand
 */
export const se_UpdateVoiceConnectorGroupCommand = async (
  input: UpdateVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connector-groups/{VoiceConnectorGroupId}");
  b.p("VoiceConnectorGroupId", () => input.VoiceConnectorGroupId!, "{VoiceConnectorGroupId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      VoiceConnectorItems: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ValidateE911AddressCommand
 */
export const se_ValidateE911AddressCommand = async (
  input: ValidateE911AddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/emergency-calling/address");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AwsAccountId: [],
      City: [],
      Country: [],
      PostalCode: [],
      State: [],
      StreetInfo: [],
      StreetNumber: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand
 */
export const de_AssociatePhoneNumbersWithVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumbersWithVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorGroupCommand
 */
export const de_AssociatePhoneNumbersWithVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociatePhoneNumberWithUserCommand
 */
export const de_AssociatePhoneNumberWithUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumberWithUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand
 */
export const de_AssociateSigninDelegateGroupsWithAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSigninDelegateGroupsWithAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1BatchCreateAttendeeCommand
 */
export const de_BatchCreateAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateAttendeeCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attendees: _json,
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchCreateChannelMembershipCommand
 */
export const de_BatchCreateChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateChannelMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BatchChannelMemberships: _json,
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchCreateRoomMembershipCommand
 */
export const de_BatchCreateRoomMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateRoomMembershipCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeletePhoneNumberCommand
 */
export const de_BatchDeletePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeletePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchSuspendUserCommand
 */
export const de_BatchSuspendUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchSuspendUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UserErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUnsuspendUserCommand
 */
export const de_BatchUnsuspendUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUnsuspendUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UserErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdatePhoneNumberCommand
 */
export const de_BatchUpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdatePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateUserCommand
 */
export const de_BatchUpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UserErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAccountCommand
 */
export const de_CreateAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Account: (_) => de_Account(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppInstanceCommand
 */
export const de_CreateAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstanceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppInstanceAdminCommand
 */
export const de_CreateAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstanceAdmin: _json,
    AppInstanceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppInstanceUserCommand
 */
export const de_CreateAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstanceUserArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAttendeeCommand
 */
export const de_CreateAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAttendeeCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attendee: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBotCommand
 */
export const de_CreateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Bot: (_) => de_Bot(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelCommand
 */
export const de_CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelBanCommand
 */
export const de_CreateChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelBanCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    Member: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelMembershipCommand
 */
export const de_CreateChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelMembershipCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    Member: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelModeratorCommand
 */
export const de_CreateChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelModeratorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    ChannelModerator: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMediaCapturePipelineCommand
 */
export const de_CreateMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaCapturePipeline: (_) => de_MediaCapturePipeline(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMeetingCommand
 */
export const de_CreateMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Meeting: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMeetingDialOutCommand
 */
export const de_CreateMeetingDialOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingDialOutCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TransactionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMeetingWithAttendeesCommand
 */
export const de_CreateMeetingWithAttendeesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingWithAttendeesCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attendees: _json,
    Errors: _json,
    Meeting: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePhoneNumberOrderCommand
 */
export const de_CreatePhoneNumberOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePhoneNumberOrderCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberOrder: (_) => de_PhoneNumberOrder(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProxySessionCommand
 */
export const de_CreateProxySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProxySessionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProxySession: (_) => de_ProxySession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRoomCommand
 */
export const de_CreateRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoomCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Room: (_) => de_Room(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRoomMembershipCommand
 */
export const de_CreateRoomMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoomMembershipCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RoomMembership: (_) => de_RoomMembership(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSipMediaApplicationCommand
 */
export const de_CreateSipMediaApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSipMediaApplicationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplication: (_) => de_SipMediaApplication(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSipMediaApplicationCallCommand
 */
export const de_CreateSipMediaApplicationCallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSipMediaApplicationCallCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplicationCall: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSipRuleCommand
 */
export const de_CreateSipRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSipRuleCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipRule: (_) => de_SipRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    User: (_) => de_User(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVoiceConnectorCommand
 */
export const de_CreateVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnector: (_) => de_VoiceConnector(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVoiceConnectorGroupCommand
 */
export const de_CreateVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnectorGroup: (_) => de_VoiceConnectorGroup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccountCommand
 */
export const de_DeleteAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppInstanceCommand
 */
export const de_DeleteAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppInstanceAdminCommand
 */
export const de_DeleteAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommand
 */
export const de_DeleteAppInstanceStreamingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceStreamingConfigurationsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppInstanceUserCommand
 */
export const de_DeleteAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAttendeeCommand
 */
export const de_DeleteAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttendeeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelCommand
 */
export const de_DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelBanCommand
 */
export const de_DeleteChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelBanCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelMembershipCommand
 */
export const de_DeleteChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMembershipCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelMessageCommand
 */
export const de_DeleteChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMessageCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelModeratorCommand
 */
export const de_DeleteChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelModeratorCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEventsConfigurationCommand
 */
export const de_DeleteEventsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMediaCapturePipelineCommand
 */
export const de_DeleteMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMeetingCommand
 */
export const de_DeleteMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeetingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePhoneNumberCommand
 */
export const de_DeletePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePhoneNumberCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProxySessionCommand
 */
export const de_DeleteProxySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProxySessionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRoomCommand
 */
export const de_DeleteRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRoomMembershipCommand
 */
export const de_DeleteRoomMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomMembershipCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSipMediaApplicationCommand
 */
export const de_DeleteSipMediaApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSipMediaApplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSipRuleCommand
 */
export const de_DeleteSipRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSipRuleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVoiceConnectorCommand
 */
export const de_DeleteVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVoiceConnectorEmergencyCallingConfigurationCommand
 */
export const de_DeleteVoiceConnectorEmergencyCallingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVoiceConnectorGroupCommand
 */
export const de_DeleteVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVoiceConnectorOriginationCommand
 */
export const de_DeleteVoiceConnectorOriginationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorOriginationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVoiceConnectorProxyCommand
 */
export const de_DeleteVoiceConnectorProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorProxyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVoiceConnectorStreamingConfigurationCommand
 */
export const de_DeleteVoiceConnectorStreamingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorStreamingConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVoiceConnectorTerminationCommand
 */
export const de_DeleteVoiceConnectorTerminationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorTerminationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVoiceConnectorTerminationCredentialsCommand
 */
export const de_DeleteVoiceConnectorTerminationCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorTerminationCredentialsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppInstanceCommand
 */
export const de_DescribeAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstance: (_) => de_AppInstance(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppInstanceAdminCommand
 */
export const de_DescribeAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstanceAdmin: (_) => de_AppInstanceAdmin(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppInstanceUserCommand
 */
export const de_DescribeAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstanceUser: (_) => de_AppInstanceUser(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelCommand
 */
export const de_DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Channel: (_) => de_Channel(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelBanCommand
 */
export const de_DescribeChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelBanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelBan: (_) => de_ChannelBan(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelMembershipCommand
 */
export const de_DescribeChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelMembership: (_) => de_ChannelMembership(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand
 */
export const de_DescribeChannelMembershipForAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelMembership: (_) => de_ChannelMembershipForAppInstanceUserSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand
 */
export const de_DescribeChannelModeratedByAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Channel: (_) => de_ChannelModeratedByAppInstanceUserSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelModeratorCommand
 */
export const de_DescribeChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelModerator: (_) => de_ChannelModerator(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociatePhoneNumberFromUserCommand
 */
export const de_DisassociatePhoneNumberFromUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumberFromUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand
 */
export const de_DisassociatePhoneNumbersFromVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorGroupCommand
 */
export const de_DisassociatePhoneNumbersFromVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand
 */
export const de_DisassociateSigninDelegateGroupsFromAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountCommand
 */
export const de_GetAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Account: (_) => de_Account(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountSettingsCommand
 */
export const de_GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAppInstanceRetentionSettingsCommand
 */
export const de_GetAppInstanceRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppInstanceRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstanceRetentionSettings: _json,
    InitiateDeletionTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAppInstanceStreamingConfigurationsCommand
 */
export const de_GetAppInstanceStreamingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppInstanceStreamingConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstanceStreamingConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAttendeeCommand
 */
export const de_GetAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttendeeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attendee: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBotCommand
 */
export const de_GetBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Bot: (_) => de_Bot(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelMessageCommand
 */
export const de_GetChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelMessage: (_) => de_ChannelMessage(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEventsConfigurationCommand
 */
export const de_GetEventsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventsConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGlobalSettingsCommand
 */
export const de_GetGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BusinessCalling: _json,
    VoiceConnector: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMediaCapturePipelineCommand
 */
export const de_GetMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaCapturePipeline: (_) => de_MediaCapturePipeline(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMeetingCommand
 */
export const de_GetMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMeetingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Meeting: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMessagingSessionEndpointCommand
 */
export const de_GetMessagingSessionEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMessagingSessionEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Endpoint: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPhoneNumberCommand
 */
export const de_GetPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumber: (_) => de_PhoneNumber(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPhoneNumberOrderCommand
 */
export const de_GetPhoneNumberOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberOrderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberOrder: (_) => de_PhoneNumberOrder(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPhoneNumberSettingsCommand
 */
export const de_GetPhoneNumberSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CallingName: __expectString,
    CallingNameUpdatedTimestamp: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProxySessionCommand
 */
export const de_GetProxySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProxySessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProxySession: (_) => de_ProxySession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRetentionSettingsCommand
 */
export const de_GetRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InitiateDeletionTimestamp: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    RetentionSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRoomCommand
 */
export const de_GetRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoomCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Room: (_) => de_Room(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSipMediaApplicationCommand
 */
export const de_GetSipMediaApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSipMediaApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplication: (_) => de_SipMediaApplication(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand
 */
export const de_GetSipMediaApplicationLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplicationLoggingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSipRuleCommand
 */
export const de_GetSipRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSipRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipRule: (_) => de_SipRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUserCommand
 */
export const de_GetUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    User: (_) => de_User(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUserSettingsCommand
 */
export const de_GetUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UserSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorCommand
 */
export const de_GetVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnector: (_) => de_VoiceConnector(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorEmergencyCallingConfigurationCommand
 */
export const de_GetVoiceConnectorEmergencyCallingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorEmergencyCallingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EmergencyCallingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorGroupCommand
 */
export const de_GetVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnectorGroup: (_) => de_VoiceConnectorGroup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorLoggingConfigurationCommand
 */
export const de_GetVoiceConnectorLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LoggingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorOriginationCommand
 */
export const de_GetVoiceConnectorOriginationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorOriginationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Origination: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorProxyCommand
 */
export const de_GetVoiceConnectorProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorProxyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Proxy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand
 */
export const de_GetVoiceConnectorStreamingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    StreamingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorTerminationCommand
 */
export const de_GetVoiceConnectorTerminationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorTerminationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Termination: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorTerminationHealthCommand
 */
export const de_GetVoiceConnectorTerminationHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorTerminationHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TerminationHealth: (_) => de_TerminationHealth(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1InviteUsersCommand
 */
export const de_InviteUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteUsersCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Invites: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAccountsCommand
 */
export const de_ListAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Accounts: (_) => de_AccountList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppInstanceAdminsCommand
 */
export const de_ListAppInstanceAdminsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceAdminsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstanceAdmins: _json,
    AppInstanceArn: __expectString,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppInstancesCommand
 */
export const de_ListAppInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstances: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppInstanceUsersCommand
 */
export const de_ListAppInstanceUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstanceArn: __expectString,
    AppInstanceUsers: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAttendeesCommand
 */
export const de_ListAttendeesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttendeesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attendees: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAttendeeTagsCommand
 */
export const de_ListAttendeeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttendeeTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBotsCommand
 */
export const de_ListBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Bots: (_) => de_BotList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelBansCommand
 */
export const de_ListChannelBansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelBansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    ChannelBans: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelMembershipsCommand
 */
export const de_ListChannelMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    ChannelMemberships: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand
 */
export const de_ListChannelMembershipsForAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelMemberships: (_) => de_ChannelMembershipForAppInstanceUserSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelMessagesCommand
 */
export const de_ListChannelMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    ChannelMessages: (_) => de_ChannelMessageSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelModeratorsCommand
 */
export const de_ListChannelModeratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelModeratorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    ChannelModerators: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsCommand
 */
export const de_ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Channels: (_) => de_ChannelSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand
 */
export const de_ListChannelsModeratedByAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Channels: (_) => de_ChannelModeratedByAppInstanceUserSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMediaCapturePipelinesCommand
 */
export const de_ListMediaCapturePipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaCapturePipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaCapturePipelines: (_) => de_MediaCapturePipelineList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMeetingsCommand
 */
export const de_ListMeetingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeetingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Meetings: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMeetingTagsCommand
 */
export const de_ListMeetingTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeetingTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPhoneNumberOrdersCommand
 */
export const de_ListPhoneNumberOrdersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumberOrdersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PhoneNumberOrders: (_) => de_PhoneNumberOrderList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPhoneNumbersCommand
 */
export const de_ListPhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PhoneNumbers: (_) => de_PhoneNumberList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProxySessionsCommand
 */
export const de_ListProxySessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProxySessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ProxySessions: (_) => de_ProxySessions(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRoomMembershipsCommand
 */
export const de_ListRoomMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoomMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RoomMemberships: (_) => de_RoomMembershipList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRoomsCommand
 */
export const de_ListRoomsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoomsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Rooms: (_) => de_RoomList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSipMediaApplicationsCommand
 */
export const de_ListSipMediaApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSipMediaApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SipMediaApplications: (_) => de_SipMediaApplicationList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSipRulesCommand
 */
export const de_ListSipRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSipRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SipRules: (_) => de_SipRuleList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSupportedPhoneNumberCountriesCommand
 */
export const de_ListSupportedPhoneNumberCountriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSupportedPhoneNumberCountriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberCountries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Users: (_) => de_UserList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVoiceConnectorGroupsCommand
 */
export const de_ListVoiceConnectorGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceConnectorGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    VoiceConnectorGroups: (_) => de_VoiceConnectorGroupList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVoiceConnectorsCommand
 */
export const de_ListVoiceConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    VoiceConnectors: (_) => de_VoiceConnectorList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVoiceConnectorTerminationCredentialsCommand
 */
export const de_ListVoiceConnectorTerminationCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Usernames: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1LogoutUserCommand
 */
export const de_LogoutUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LogoutUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutAppInstanceRetentionSettingsCommand
 */
export const de_PutAppInstanceRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppInstanceRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstanceRetentionSettings: _json,
    InitiateDeletionTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutAppInstanceStreamingConfigurationsCommand
 */
export const de_PutAppInstanceStreamingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppInstanceStreamingConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstanceStreamingConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutEventsConfigurationCommand
 */
export const de_PutEventsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventsConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutRetentionSettingsCommand
 */
export const de_PutRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InitiateDeletionTimestamp: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    RetentionSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand
 */
export const de_PutSipMediaApplicationLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSipMediaApplicationLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplicationLoggingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand
 */
export const de_PutVoiceConnectorEmergencyCallingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorEmergencyCallingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EmergencyCallingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand
 */
export const de_PutVoiceConnectorLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LoggingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorOriginationCommand
 */
export const de_PutVoiceConnectorOriginationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorOriginationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Origination: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorProxyCommand
 */
export const de_PutVoiceConnectorProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorProxyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Proxy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorStreamingConfigurationCommand
 */
export const de_PutVoiceConnectorStreamingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    StreamingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorTerminationCommand
 */
export const de_PutVoiceConnectorTerminationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorTerminationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Termination: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorTerminationCredentialsCommand
 */
export const de_PutVoiceConnectorTerminationCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorTerminationCredentialsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RedactChannelMessageCommand
 */
export const de_RedactChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    MessageId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RedactConversationMessageCommand
 */
export const de_RedactConversationMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactConversationMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RedactRoomMessageCommand
 */
export const de_RedactRoomMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactRoomMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RegenerateSecurityTokenCommand
 */
export const de_RegenerateSecurityTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegenerateSecurityTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Bot: (_) => de_Bot(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ResetPersonalPINCommand
 */
export const de_ResetPersonalPINCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetPersonalPINCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    User: (_) => de_User(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RestorePhoneNumberCommand
 */
export const de_RestorePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestorePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumber: (_) => de_PhoneNumber(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchAvailablePhoneNumbersCommand
 */
export const de_SearchAvailablePhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAvailablePhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    E164PhoneNumbers: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SendChannelMessageCommand
 */
export const de_SendChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendChannelMessageCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    MessageId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartMeetingTranscriptionCommand
 */
export const de_StartMeetingTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMeetingTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopMeetingTranscriptionCommand
 */
export const de_StopMeetingTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMeetingTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagAttendeeCommand
 */
export const de_TagAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagAttendeeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagMeetingCommand
 */
export const de_TagMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagMeetingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagAttendeeCommand
 */
export const de_UntagAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagAttendeeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagMeetingCommand
 */
export const de_UntagMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagMeetingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAccountCommand
 */
export const de_UpdateAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Account: (_) => de_Account(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAccountSettingsCommand
 */
export const de_UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppInstanceCommand
 */
export const de_UpdateAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstanceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppInstanceUserCommand
 */
export const de_UpdateAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppInstanceUserArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBotCommand
 */
export const de_UpdateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Bot: (_) => de_Bot(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelCommand
 */
export const de_UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelMessageCommand
 */
export const de_UpdateChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    MessageId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelReadMarkerCommand
 */
export const de_UpdateChannelReadMarkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelReadMarkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const de_UpdateGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePhoneNumberCommand
 */
export const de_UpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumber: (_) => de_PhoneNumber(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePhoneNumberSettingsCommand
 */
export const de_UpdatePhoneNumberSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProxySessionCommand
 */
export const de_UpdateProxySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProxySessionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProxySession: (_) => de_ProxySession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoomCommand
 */
export const de_UpdateRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoomCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Room: (_) => de_Room(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoomMembershipCommand
 */
export const de_UpdateRoomMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoomMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RoomMembership: (_) => de_RoomMembership(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSipMediaApplicationCommand
 */
export const de_UpdateSipMediaApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSipMediaApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplication: (_) => de_SipMediaApplication(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSipMediaApplicationCallCommand
 */
export const de_UpdateSipMediaApplicationCallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSipMediaApplicationCallCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplicationCall: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSipRuleCommand
 */
export const de_UpdateSipRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSipRuleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipRule: (_) => de_SipRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    User: (_) => de_User(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserSettingsCommand
 */
export const de_UpdateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVoiceConnectorCommand
 */
export const de_UpdateVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnector: (_) => de_VoiceConnector(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVoiceConnectorGroupCommand
 */
export const de_UpdateVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnectorGroup: (_) => de_VoiceConnectorGroup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ValidateE911AddressCommand
 */
export const de_ValidateE911AddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateE911AddressCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Address: _json,
    AddressExternalId: __expectString,
    CandidateAddressList: _json,
    ValidationResult: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.chime#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceFailureExceptionRes
 */
const de_ServiceFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottledClientExceptionRes
 */
const de_ThrottledClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottledClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedClientExceptionRes
 */
const de_UnauthorizedClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnprocessableEntityExceptionRes
 */
const de_UnprocessableEntityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnprocessableEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccountSettings omitted.

// se_AlexaForBusinessMetadata omitted.

// se_AppInstanceRetentionSettings omitted.

// se_AppInstanceStreamingConfiguration omitted.

// se_AppInstanceStreamingConfigurationList omitted.

// se_ArtifactsConfiguration omitted.

// se_AttendeeIdList omitted.

// se_AttendeeTagKeyList omitted.

// se_AttendeeTagList omitted.

// se_AudioArtifactsConfiguration omitted.

// se_BusinessCallingSettings omitted.

// se_CallingRegionList omitted.

// se_CapabilityList omitted.

// se_ChannelRetentionSettings omitted.

// se_ChimeSdkMeetingConfiguration omitted.

// se_ContentArtifactsConfiguration omitted.

// se_ConversationRetentionSettings omitted.

// se_CountryList omitted.

// se_CreateAttendeeRequestItem omitted.

// se_CreateAttendeeRequestItemList omitted.

// se_CreateMeetingWithAttendeesRequestItemList omitted.

// se_Credential omitted.

// se_CredentialList omitted.

// se_DNISEmergencyCallingConfiguration omitted.

// se_DNISEmergencyCallingConfigurationList omitted.

// se_E164PhoneNumberList omitted.

// se_EmergencyCallingConfiguration omitted.

// se_EngineTranscribeMedicalSettings omitted.

// se_EngineTranscribeSettings omitted.

// se_ExternalUserIdList omitted.

// se_GeoMatchParams omitted.

// se_LoggingConfiguration omitted.

// se_MeetingNotificationConfiguration omitted.

// se_MeetingTagKeyList omitted.

// se_MeetingTagList omitted.

// se_MemberArns omitted.

// se_MembershipItem omitted.

// se_MembershipItemList omitted.

// se_NonEmptyStringList omitted.

// se_Origination omitted.

// se_OriginationRoute omitted.

// se_OriginationRouteList omitted.

// se_ParticipantPhoneNumberList omitted.

// se_RetentionSettings omitted.

// se_RoomRetentionSettings omitted.

// se_SelectedVideoStreams omitted.

// se_SensitiveStringList omitted.

// se_SigninDelegateGroup omitted.

// se_SigninDelegateGroupList omitted.

// se_SipHeadersMap omitted.

// se_SipMediaApplicationEndpoint omitted.

// se_SipMediaApplicationEndpointList omitted.

// se_SipMediaApplicationLoggingConfiguration omitted.

// se_SipRuleTargetApplication omitted.

// se_SipRuleTargetApplicationList omitted.

// se_SMAUpdateCallArgumentsMap omitted.

// se_SourceConfiguration omitted.

// se_StreamingConfiguration omitted.

// se_StreamingNotificationTarget omitted.

// se_StreamingNotificationTargetList omitted.

// se_StringList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TelephonySettings omitted.

// se_Termination omitted.

// se_TranscriptionConfiguration omitted.

// se_UpdatePhoneNumberRequestItem omitted.

// se_UpdatePhoneNumberRequestItemList omitted.

// se_UpdateUserRequestItem omitted.

// se_UpdateUserRequestItemList omitted.

// se_UserEmailList omitted.

// se_UserIdList omitted.

// se_UserSettings omitted.

// se_VideoArtifactsConfiguration omitted.

// se_VoiceConnectorItem omitted.

// se_VoiceConnectorItemList omitted.

// se_VoiceConnectorSettings omitted.

/**
 * deserializeAws_restJson1Account
 */
const de_Account = (output: any, context: __SerdeContext): Account => {
  return take(output, {
    AccountId: __expectString,
    AccountStatus: __expectString,
    AccountType: __expectString,
    AwsAccountId: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DefaultLicense: __expectString,
    Name: __expectString,
    SigninDelegateGroups: _json,
    SupportedLicenses: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AccountList
 */
const de_AccountList = (output: any, context: __SerdeContext): Account[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Account(entry, context);
    });
  return retVal;
};

// de_AccountSettings omitted.

// de_Address omitted.

// de_AlexaForBusinessMetadata omitted.

/**
 * deserializeAws_restJson1AppInstance
 */
const de_AppInstance = (output: any, context: __SerdeContext): AppInstance => {
  return take(output, {
    AppInstanceArn: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metadata: __expectString,
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AppInstanceAdmin
 */
const de_AppInstanceAdmin = (output: any, context: __SerdeContext): AppInstanceAdmin => {
  return take(output, {
    Admin: _json,
    AppInstanceArn: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_AppInstanceAdminList omitted.

// de_AppInstanceAdminSummary omitted.

// de_AppInstanceList omitted.

// de_AppInstanceRetentionSettings omitted.

// de_AppInstanceStreamingConfiguration omitted.

// de_AppInstanceStreamingConfigurationList omitted.

// de_AppInstanceSummary omitted.

/**
 * deserializeAws_restJson1AppInstanceUser
 */
const de_AppInstanceUser = (output: any, context: __SerdeContext): AppInstanceUser => {
  return take(output, {
    AppInstanceUserArn: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metadata: __expectString,
    Name: __expectString,
  }) as any;
};

// de_AppInstanceUserList omitted.

/**
 * deserializeAws_restJson1AppInstanceUserMembershipSummary
 */
const de_AppInstanceUserMembershipSummary = (
  output: any,
  context: __SerdeContext
): AppInstanceUserMembershipSummary => {
  return take(output, {
    ReadMarkerTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Type: __expectString,
  }) as any;
};

// de_AppInstanceUserSummary omitted.

// de_ArtifactsConfiguration omitted.

// de_Attendee omitted.

// de_AttendeeIdList omitted.

// de_AttendeeList omitted.

// de_AudioArtifactsConfiguration omitted.

// de_BatchChannelMemberships omitted.

// de_BatchCreateAttendeeErrorList omitted.

// de_BatchCreateChannelMembershipError omitted.

// de_BatchCreateChannelMembershipErrors omitted.

/**
 * deserializeAws_restJson1Bot
 */
const de_Bot = (output: any, context: __SerdeContext): Bot => {
  return take(output, {
    BotEmail: __expectString,
    BotId: __expectString,
    BotType: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Disabled: __expectBoolean,
    DisplayName: __expectString,
    SecurityToken: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    UserId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1BotList
 */
const de_BotList = (output: any, context: __SerdeContext): Bot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Bot(entry, context);
    });
  return retVal;
};

// de_BusinessCallingSettings omitted.

// de_CallingRegionList omitted.

// de_CandidateAddress omitted.

// de_CandidateAddressList omitted.

// de_CapabilityList omitted.

/**
 * deserializeAws_restJson1Channel
 */
const de_Channel = (output: any, context: __SerdeContext): Channel => {
  return take(output, {
    ChannelArn: __expectString,
    CreatedBy: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastMessageTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metadata: __expectString,
    Mode: __expectString,
    Name: __expectString,
    Privacy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelBan
 */
const de_ChannelBan = (output: any, context: __SerdeContext): ChannelBan => {
  return take(output, {
    ChannelArn: __expectString,
    CreatedBy: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Member: _json,
  }) as any;
};

// de_ChannelBanSummary omitted.

// de_ChannelBanSummaryList omitted.

/**
 * deserializeAws_restJson1ChannelMembership
 */
const de_ChannelMembership = (output: any, context: __SerdeContext): ChannelMembership => {
  return take(output, {
    ChannelArn: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InvitedBy: _json,
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Member: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummary
 */
const de_ChannelMembershipForAppInstanceUserSummary = (
  output: any,
  context: __SerdeContext
): ChannelMembershipForAppInstanceUserSummary => {
  return take(output, {
    AppInstanceUserMembershipSummary: (_: any) => de_AppInstanceUserMembershipSummary(_, context),
    ChannelSummary: (_: any) => de_ChannelSummary(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummaryList
 */
const de_ChannelMembershipForAppInstanceUserSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelMembershipForAppInstanceUserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChannelMembershipForAppInstanceUserSummary(entry, context);
    });
  return retVal;
};

// de_ChannelMembershipSummary omitted.

// de_ChannelMembershipSummaryList omitted.

/**
 * deserializeAws_restJson1ChannelMessage
 */
const de_ChannelMessage = (output: any, context: __SerdeContext): ChannelMessage => {
  return take(output, {
    ChannelArn: __expectString,
    Content: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastEditedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MessageId: __expectString,
    Metadata: __expectString,
    Persistence: __expectString,
    Redacted: __expectBoolean,
    Sender: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelMessageSummary
 */
const de_ChannelMessageSummary = (output: any, context: __SerdeContext): ChannelMessageSummary => {
  return take(output, {
    Content: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastEditedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MessageId: __expectString,
    Metadata: __expectString,
    Redacted: __expectBoolean,
    Sender: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelMessageSummaryList
 */
const de_ChannelMessageSummaryList = (output: any, context: __SerdeContext): ChannelMessageSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChannelMessageSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummary
 */
const de_ChannelModeratedByAppInstanceUserSummary = (
  output: any,
  context: __SerdeContext
): ChannelModeratedByAppInstanceUserSummary => {
  return take(output, {
    ChannelSummary: (_: any) => de_ChannelSummary(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummaryList
 */
const de_ChannelModeratedByAppInstanceUserSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelModeratedByAppInstanceUserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChannelModeratedByAppInstanceUserSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelModerator
 */
const de_ChannelModerator = (output: any, context: __SerdeContext): ChannelModerator => {
  return take(output, {
    ChannelArn: __expectString,
    CreatedBy: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Moderator: _json,
  }) as any;
};

// de_ChannelModeratorSummary omitted.

// de_ChannelModeratorSummaryList omitted.

// de_ChannelRetentionSettings omitted.

/**
 * deserializeAws_restJson1ChannelSummary
 */
const de_ChannelSummary = (output: any, context: __SerdeContext): ChannelSummary => {
  return take(output, {
    ChannelArn: __expectString,
    LastMessageTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metadata: __expectString,
    Mode: __expectString,
    Name: __expectString,
    Privacy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelSummaryList
 */
const de_ChannelSummaryList = (output: any, context: __SerdeContext): ChannelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChannelSummary(entry, context);
    });
  return retVal;
};

// de_ChimeSdkMeetingConfiguration omitted.

// de_ContentArtifactsConfiguration omitted.

// de_ConversationRetentionSettings omitted.

// de_CreateAttendeeError omitted.

// de_DNISEmergencyCallingConfiguration omitted.

// de_DNISEmergencyCallingConfigurationList omitted.

// de_E164PhoneNumberList omitted.

// de_EmergencyCallingConfiguration omitted.

// de_EventsConfiguration omitted.

// de_ExternalUserIdList omitted.

// de_GeoMatchParams omitted.

// de_Identity omitted.

// de_Invite omitted.

// de_InviteList omitted.

// de_LicenseList omitted.

// de_LoggingConfiguration omitted.

/**
 * deserializeAws_restJson1MediaCapturePipeline
 */
const de_MediaCapturePipeline = (output: any, context: __SerdeContext): MediaCapturePipeline => {
  return take(output, {
    ChimeSdkMeetingConfiguration: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    MediaPipelineId: __expectString,
    SinkArn: __expectString,
    SinkType: __expectString,
    SourceArn: __expectString,
    SourceType: __expectString,
    Status: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1MediaCapturePipelineList
 */
const de_MediaCapturePipelineList = (output: any, context: __SerdeContext): MediaCapturePipeline[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MediaCapturePipeline(entry, context);
    });
  return retVal;
};

// de_MediaPlacement omitted.

// de_Meeting omitted.

// de_MeetingList omitted.

// de_Member omitted.

// de_MemberError omitted.

// de_MemberErrorList omitted.

// de_Members omitted.

// de_MessagingSessionEndpoint omitted.

// de_OrderedPhoneNumber omitted.

// de_OrderedPhoneNumberList omitted.

// de_Origination omitted.

// de_OriginationRoute omitted.

// de_OriginationRouteList omitted.

// de_Participant omitted.

// de_Participants omitted.

/**
 * deserializeAws_restJson1PhoneNumber
 */
const de_PhoneNumber = (output: any, context: __SerdeContext): PhoneNumber => {
  return take(output, {
    Associations: (_: any) => de_PhoneNumberAssociationList(_, context),
    CallingName: __expectString,
    CallingNameStatus: __expectString,
    Capabilities: _json,
    Country: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DeletionTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    E164PhoneNumber: __expectString,
    PhoneNumberId: __expectString,
    ProductType: __expectString,
    Status: __expectString,
    Type: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1PhoneNumberAssociation
 */
const de_PhoneNumberAssociation = (output: any, context: __SerdeContext): PhoneNumberAssociation => {
  return take(output, {
    AssociatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Name: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PhoneNumberAssociationList
 */
const de_PhoneNumberAssociationList = (output: any, context: __SerdeContext): PhoneNumberAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PhoneNumberAssociation(entry, context);
    });
  return retVal;
};

// de_PhoneNumberCapabilities omitted.

// de_PhoneNumberCountriesList omitted.

// de_PhoneNumberCountry omitted.

// de_PhoneNumberError omitted.

// de_PhoneNumberErrorList omitted.

/**
 * deserializeAws_restJson1PhoneNumberList
 */
const de_PhoneNumberList = (output: any, context: __SerdeContext): PhoneNumber[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PhoneNumber(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PhoneNumberOrder
 */
const de_PhoneNumberOrder = (output: any, context: __SerdeContext): PhoneNumberOrder => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    OrderedPhoneNumbers: _json,
    PhoneNumberOrderId: __expectString,
    ProductType: __expectString,
    Status: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1PhoneNumberOrderList
 */
const de_PhoneNumberOrderList = (output: any, context: __SerdeContext): PhoneNumberOrder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PhoneNumberOrder(entry, context);
    });
  return retVal;
};

// de_PhoneNumberTypeList omitted.

// de_Proxy omitted.

/**
 * deserializeAws_restJson1ProxySession
 */
const de_ProxySession = (output: any, context: __SerdeContext): ProxySession => {
  return take(output, {
    Capabilities: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    EndedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ExpiryMinutes: __expectInt32,
    GeoMatchLevel: __expectString,
    GeoMatchParams: _json,
    Name: __expectString,
    NumberSelectionBehavior: __expectString,
    Participants: _json,
    ProxySessionId: __expectString,
    Status: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VoiceConnectorId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ProxySessions
 */
const de_ProxySessions = (output: any, context: __SerdeContext): ProxySession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProxySession(entry, context);
    });
  return retVal;
};

// de_RetentionSettings omitted.

/**
 * deserializeAws_restJson1Room
 */
const de_Room = (output: any, context: __SerdeContext): Room => {
  return take(output, {
    AccountId: __expectString,
    CreatedBy: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Name: __expectString,
    RoomId: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1RoomList
 */
const de_RoomList = (output: any, context: __SerdeContext): Room[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Room(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RoomMembership
 */
const de_RoomMembership = (output: any, context: __SerdeContext): RoomMembership => {
  return take(output, {
    InvitedBy: __expectString,
    Member: _json,
    Role: __expectString,
    RoomId: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1RoomMembershipList
 */
const de_RoomMembershipList = (output: any, context: __SerdeContext): RoomMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoomMembership(entry, context);
    });
  return retVal;
};

// de_RoomRetentionSettings omitted.

// de_SelectedVideoStreams omitted.

// de_SensitiveStringList omitted.

// de_SigninDelegateGroup omitted.

// de_SigninDelegateGroupList omitted.

/**
 * deserializeAws_restJson1SipMediaApplication
 */
const de_SipMediaApplication = (output: any, context: __SerdeContext): SipMediaApplication => {
  return take(output, {
    AwsRegion: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Endpoints: _json,
    Name: __expectString,
    SipMediaApplicationId: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_SipMediaApplicationCall omitted.

// de_SipMediaApplicationEndpoint omitted.

// de_SipMediaApplicationEndpointList omitted.

/**
 * deserializeAws_restJson1SipMediaApplicationList
 */
const de_SipMediaApplicationList = (output: any, context: __SerdeContext): SipMediaApplication[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SipMediaApplication(entry, context);
    });
  return retVal;
};

// de_SipMediaApplicationLoggingConfiguration omitted.

/**
 * deserializeAws_restJson1SipRule
 */
const de_SipRule = (output: any, context: __SerdeContext): SipRule => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Disabled: __expectBoolean,
    Name: __expectString,
    SipRuleId: __expectString,
    TargetApplications: _json,
    TriggerType: __expectString,
    TriggerValue: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1SipRuleList
 */
const de_SipRuleList = (output: any, context: __SerdeContext): SipRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SipRule(entry, context);
    });
  return retVal;
};

// de_SipRuleTargetApplication omitted.

// de_SipRuleTargetApplicationList omitted.

// de_SourceConfiguration omitted.

// de_StreamingConfiguration omitted.

// de_StreamingNotificationTarget omitted.

// de_StreamingNotificationTargetList omitted.

// de_StringList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TelephonySettings omitted.

// de_Termination omitted.

/**
 * deserializeAws_restJson1TerminationHealth
 */
const de_TerminationHealth = (output: any, context: __SerdeContext): TerminationHealth => {
  return take(output, {
    Source: __expectString,
    Timestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1User
 */
const de_User = (output: any, context: __SerdeContext): User => {
  return take(output, {
    AccountId: __expectString,
    AlexaForBusinessMetadata: _json,
    DisplayName: __expectString,
    InvitedOn: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    LicenseType: __expectString,
    PersonalPIN: __expectString,
    PrimaryEmail: __expectString,
    PrimaryProvisionedNumber: __expectString,
    RegisteredOn: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    UserId: __expectString,
    UserInvitationStatus: __expectString,
    UserRegistrationStatus: __expectString,
    UserType: __expectString,
  }) as any;
};

// de_UserError omitted.

// de_UserErrorList omitted.

/**
 * deserializeAws_restJson1UserList
 */
const de_UserList = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_User(entry, context);
    });
  return retVal;
};

// de_UserSettings omitted.

// de_VideoArtifactsConfiguration omitted.

/**
 * deserializeAws_restJson1VoiceConnector
 */
const de_VoiceConnector = (output: any, context: __SerdeContext): VoiceConnector => {
  return take(output, {
    AwsRegion: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Name: __expectString,
    OutboundHostName: __expectString,
    RequireEncryption: __expectBoolean,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VoiceConnectorArn: __expectString,
    VoiceConnectorId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1VoiceConnectorGroup
 */
const de_VoiceConnectorGroup = (output: any, context: __SerdeContext): VoiceConnectorGroup => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Name: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VoiceConnectorGroupArn: __expectString,
    VoiceConnectorGroupId: __expectString,
    VoiceConnectorItems: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1VoiceConnectorGroupList
 */
const de_VoiceConnectorGroupList = (output: any, context: __SerdeContext): VoiceConnectorGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VoiceConnectorGroup(entry, context);
    });
  return retVal;
};

// de_VoiceConnectorItem omitted.

// de_VoiceConnectorItemList omitted.

/**
 * deserializeAws_restJson1VoiceConnectorList
 */
const de_VoiceConnectorList = (output: any, context: __SerdeContext): VoiceConnector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VoiceConnector(entry, context);
    });
  return retVal;
};

// de_VoiceConnectorSettings omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _AC = "AreaCode";
const _AIA = "AppInstanceArn";
const _AIUA = "AppInstanceUserArn";
const _C = "City";
const _CB = "ChimeBearer";
const _Co = "Country";
const _FN = "FilterName";
const _FV = "FilterValue";
const _MI = "MemberId";
const _MR = "MaxResults";
const _N = "Name";
const _NA = "NotAfter";
const _NB = "NotBefore";
const _NT = "NextToken";
const _P = "Privacy";
const _PNT = "PhoneNumberType";
const _PT = "ProductType";
const _RARN = "ResourceARN";
const _S = "Status";
const _SMAI = "SipMediaApplicationId";
const _SO = "SortOrder";
const _St = "State";
const _T = "Type";
const _TFP = "TollFreePrefix";
const _UE = "UserEmail";
const _UT = "UserType";
const _a = "arn";
const _ac = "area-code";
const _aia = "app-instance-arn";
const _aiua = "app-instance-user-arn";
const _c = "city";
const _co = "country";
const _fn = "filter-name";
const _fv = "filter-value";
const _mi = "member-id";
const _mr = "max-results";
const _n = "name";
const _na = "not-after";
const _nb = "not-before";
const _nt = "next-token";
const _o = "operation";
const _p = "privacy";
const _pnt = "phone-number-type";
const _pt = "product-type";
const _s = "scope";
const _sma = "sip-media-application";
const _so = "sort-order";
const _st = "status";
const _sta = "state";
const _t = "type";
const _tfp = "toll-free-prefix";
const _ue = "user-email";
const _ut = "user-type";
const _xacb = "x-amz-chime-bearer";
